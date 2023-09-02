const ACCOUNT_BUTTON = document.getElementById('account-button')
const HELP_BUTTON = document.getElementById('help-button')
const ABOUT_BUTTON = document.getElementById('about-button')
const NEWS_BUTTON = document.getElementById('news-button')

ACCOUNT_BUTTON.addEventListener('click', function () {
  window.location.href = '../menu/account/account.html'
  console.log('works')
})

ABOUT_BUTTON.addEventListener('click', function () {
  window.location.href = '../menu/about/about.html'
})

HELP_BUTTON.addEventListener('click', function () {
  window.location.href = '../menu/help/help.html'
})

NEWS_BUTTON.addEventListener('click', function () {
  window.location.href = '../menu/news/news.html'
})
