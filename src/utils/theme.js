function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.className = savedTheme;
    return;
  }
  
  const isBrowserThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = isBrowserThemeDark ? 'dark-mode' : 'light-mode';
  document.body.className = theme;
}

function toggleTheme() {
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
  
  document.body.className = newTheme;
  localStorage.setItem('theme', newTheme);
}

export { initTheme, toggleTheme };