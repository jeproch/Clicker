const SIGN_BTN = document.getElementById('sign-in-button')
const GUEST_BTN = document.getElementById('guest-button')

SIGN_BTN.addEventListener('click', function () {
  const userName = document.getElementById('name-input').value
  localStorage.setItem('userName', userName)
  window.location.href = './home/home.html'
})

GUEST_BTN.addEventListener('click', function () {
  const userName = 'Guest'
  localStorage.setItem('userName', userName)
  window.location.href = './home/home.html'
})
