const buttons = document.querySelectorAll('.toggle');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});
