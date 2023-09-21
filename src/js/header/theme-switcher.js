const themeToggle = document.querySelectorAll('#theme-toggle');
const THEME = 'dark-theme';

// Перевіряємо, чи є у сховищі збережена тема
const savedTheme = localStorage.getItem('theme');
if (savedTheme === THEME) {
  document.body.classList.add(THEME);
  themeToggle.forEach(el => (el.checked = true));
}

themeToggle.forEach(el => el.addEventListener('change', onChangeThemeClick));

function onChangeThemeClick() {
  const isChecked = this.checked;

  // Змінюємо стан обох світчерів
  themeToggle.forEach(el => {
    el.checked = isChecked;
  });

  // Змінюємо тему в залежності від стану світчера
  if (isChecked) {
    document.body.classList.add(THEME);
    localStorage.setItem('theme', THEME);
  } else {
    document.body.classList.remove(THEME);
    localStorage.removeItem('theme');
  }
}

