document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('volunteerForm');
  const formMessage = document.getElementById('form-message');

  if(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      formMessage.textContent = "Thank you for applying to volunteer! We will get in touch soon.";
      formMessage.classList.add('alert', 'alert-success');
      form.reset();
    });
  }
});
