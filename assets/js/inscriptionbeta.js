document.getElementById('beta-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  fetch('/assets/php/beta.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    let messageEl = document.getElementById('beta-message');
    if (!messageEl) {
      messageEl = document.createElement('div');
      messageEl.id = 'beta-message';
      form.appendChild(messageEl);
    }
    messageEl.className = 'mt-3';

    if (data.status === 'success') {
      messageEl.innerHTML = '<div class="alert alert-success">Successfully registered.</div>';
      form.reset();
    } else {
      messageEl.innerHTML = '<div class="alert alert-danger">' + data.message + '</div>';
    }
  })
  .catch(() => {
    alert('An error occurred. Please try again.');
  });
});
