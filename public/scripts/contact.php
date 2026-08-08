<?php
/**
 * NoTrackRun — contact form backend (SMTP via PHPMailer).
 *
 * Deployment on the IONOS VPS:
 *   1. composer install                 (pulls in phpmailer/phpmailer)
 *   2. cp config.example.php config.php
 *   3. Fill in config.php with your real IONOS SMTP mailbox + password
 *   4. Make sure config.php and vendor/ are NOT web-readable directly
 *      (the .htaccess included alongside this file already does that
 *      on Apache — adapt it if you're on nginx instead)
 */

declare(strict_types=1);


require dirname(__DIR__, 2) . '/vendor/autoload.php';

$configPath = dirname(__DIR__, 2) . '/config.php';
if (!is_readable($configPath)) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['success' => false, 'error' => 'Server misconfigured.']);
    exit;
}
require $configPath;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

// ── Config ──────────────────────────────────────────────────────────
$siteName = 'NoTrackRun';
$rateLimitSeconds = 30;       // minimum delay between two submissions from the same IP
$rateLimitFile = sys_get_temp_dir() . '/notrackrun_contact_rate.json';
$maxMessageLength = 5000;

// ── Basic hardening ─────────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowedHosts = [
    'notrackrun.eu',
    'www.notrackrun.eu',
    'localhost',
    '127.0.0.1',
];
if ($origin !== '') {
    $originHost = parse_url($origin, PHP_URL_HOST);
    if ($originHost !== null && !in_array($originHost, $allowedHosts, true)) {
        http_response_code(403);
        echo json_encode(['success' => false, 'error' => 'Forbidden.']);
        exit;
    }
}


// ── Parse input (JSON body, with form-encoded fallback) ─────────────
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$role = trim((string) ($data['role'] ?? ''));
$organization = trim((string) ($data['organization'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));
$honeypot = trim((string) ($data['website'] ?? ''));

// ── Honeypot: bots fill hidden fields, humans never see them ────────
if ($honeypot !== '') {
    echo json_encode(['success' => true]);
    exit;
}

// ── Rate limiting per IP ─────────────────────────────────────────────
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$now = time();
$rateData = [];
if (is_readable($rateLimitFile)) {
    $decoded = json_decode((string) file_get_contents($rateLimitFile), true);
    if (is_array($decoded)) {
        $rateData = $decoded;
    }
}
$rateData = array_filter($rateData, static fn($ts) => $now - $ts < 3600);

if (isset($rateData[$ip]) && $now - $rateData[$ip] < $rateLimitSeconds) {
    http_response_code(429);
    echo json_encode(['success' => false, 'error' => 'Please wait a moment before sending another message.']);
    exit;
}

// ── Validation ────────────────────────────────────────────────────────
$errors = [];

if ($name === '' || mb_strlen($name) > 200) {
    $errors[] = 'name';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254) {
    $errors[] = 'email';
}
if ($message === '' || mb_strlen($message) > $maxMessageLength) {
    $errors[] = 'message';
}
$allowedRoles = ['runner', 'coach', 'company', 'other'];
if ($role !== '' && !in_array($role, $allowedRoles, true)) {
    $role = 'other';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'error' => 'Please fill in a valid name, email, and message.',
        'fields' => $errors,
    ]);
    exit;
}

function cleanForHeader(string $value): string
{
    return trim(preg_replace('/[\r\n]+/', ' ', $value));
}

$name = cleanForHeader($name);
$email = cleanForHeader($email);
$organization = cleanForHeader($organization);

$subject = "New contact form message from {$name}";

$bodyLines = [
    "New message from the {$siteName} contact form.",
    '',
    "Name: {$name}",
    "Email: {$email}",
    'Role: ' . ($role !== '' ? $role : 'not specified'),
    'Organization: ' . ($organization !== '' ? $organization : 'not specified'),
    '',
    'Message:',
    $message,
    '',
    '---',
    'Sent: ' . date('Y-m-d H:i:s T'),
    'IP: ' . $ip,
];
$body = implode("\n", $bodyLines);

// ── Send via SMTP (PHPMailer) ─────────────────────────────────────────
$mail = new PHPMailer(true);
$sent = false;

try {
    $mail->isSMTP();
    $mail->Host = SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = SMTP_USER;
    $mail->Password = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE; // 'tls' or 'ssl'
    $mail->Port = SMTP_PORT;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom(FROM_EMAIL, FROM_NAME);
    $mail->addAddress(TO_EMAIL);
    $mail->addReplyTo($email, $name);

    $mail->Subject = $subject;
    $mail->Body = $body;
    $mail->isHTML(false);

    $mail->send();
    $sent = true;
} catch (PHPMailerException $e) {
    error_log('NoTrackRun contact form — PHPMailer error: ' . $mail->ErrorInfo);
    $sent = false;
}

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'The message could not be sent right now. Please try again later or email us directly.',
    ]);
    exit;
}

$rateData[$ip] = $now;
file_put_contents($rateLimitFile, json_encode($rateData), LOCK_EX);

echo json_encode(['success' => true]);