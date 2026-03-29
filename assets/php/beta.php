<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Connexion à la base de données
$host = 'localhost';
$db = 'notrackrun';
$user = 'notrackrunuser';
$pass = 'ton_mot_de_passe_sécurisé';
$dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // Mode exception pour PDO
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Récupération des données POST
$email = $_POST['email'] ?? '';
$userType = $_POST['userType'] ?? '';

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address']);
    exit;
}

$isCompany = $userType === 'entreprise' ? 1 : 0;

// Insertion sécurisée avec gestion des erreurs
try {
    $stmt = $pdo->prepare("INSERT INTO beta_test (email, company) VALUES (:email, :company)");
    $stmt->execute(['email' => $email, 'company' => $isCompany]);
    echo json_encode(['status' => 'success']);
} catch (PDOException $e) {
    error_log("Database error: " . $e->getMessage()); // Log dans /var/log/apache2/error.log
    if ($e->getCode() == 23000) {
        echo json_encode(['status' => 'error', 'message' => 'Email already registered.']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'message' => 'Database error: ' . $e->getMessage()]);
    }
}
