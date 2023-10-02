const themeToggle = document.querySelector('#theme-toggle')
const themeLabel = document.querySelector('.theme-switcher label')

themeToggle.addEventListener('change', () => {
  if (document.body.classList.contains('dark')) {
    setTheme('light')
    storeTheme('light')
  } else {
    setTheme('dark')
    storeTheme('dark')
  }
})

function setTheme(theme) {
  document.body.classList.remove('dark', 'light')
  document.body.classList.add(theme)
  themeLabel.innerText = `${theme === 'dark' ? 'Light' : 'Dark'} Mode`
}

function loadTheme() {
  const hasStoredTheme = localStorage.getItem('Theme') ? true : false

  if (hasStoredTheme) {
    setTheme(localStorage.getItem('Theme'))
  } else if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('light')
  } else setTheme('dark')
}

loadTheme()

function storeTheme(theme) {
  localStorage.setItem('Theme', theme)
}
