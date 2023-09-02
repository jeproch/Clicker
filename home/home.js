const storedUserName = localStorage.getItem('userName')

const greetingH2 = document.getElementById('greeting-h2')
let counter = document.getElementById('counter')
const CLICK_BUTTON = document.getElementById('click-button')
let menuDiv = document.getElementById('menu-div')
const MENU_BUTTON = document.getElementById('menu-button')
let homeContents = document.getElementById('home-contents')
let BODY_EL = document.getElementById('body-element')
const IN_MENU_BUTTON = document.getElementById('in-menu-button')
let tenFiveButtonDiv = document.getElementById('upgrade-button-one')

let first100 = true //Withing the first 100 (range(do not make clicks a currency))

let count = 0
let counterMultiplier = 1
let passiveAddFiftyTwo = 0

document.addEventListener('DOMContentLoaded', function () {
  greetingH2.textContent = 'Welcome ' + storedUserName
  menuDiv.classList.add('hide')
  homeContents.classList.remove('hide')
  BODY_EL.classList.remove('black')
})

MENU_BUTTON.addEventListener('click', function () {
  menuDiv.classList.remove('hide')
  homeContents.classList.add('hide')
  BODY_EL.classList.add('black')
})

IN_MENU_BUTTON.addEventListener('click', function () {
  menuDiv.classList.add('hide')
  homeContents.classList.remove('hide')
  BODY_EL.classList.remove('black')
})

CLICK_BUTTON.addEventListener('click', function () {
  count = count + counterMultiplier
  counter.textContent = count
  if (count > 99 && first100 === true) {
    const upgradesSection = document.getElementById('section-upgrades')
    upgradesSection.scrollIntoView({ behavior: 'smooth' })
    first100 = false
  }
})

let passiveAdd = 0
var tenFive = false
var fiftyTwo = false

//Reference the div and not the actual button element

let TEN_FIVE_BUTTON = document.getElementById('10-5Button')
let FIFTY_TWO_BUTTON = document.getElementById('50-2Button')
let buttonOneContainer = document.getElementById('button-one-container')
let activeUpgradesList = document.getElementById('active-upgrades')

TEN_FIVE_BUTTON.addEventListener('click', function () {
  tenFive = true
  passiveAdd = 10

  if (tenFive === true) {
    function passiveAdd1 () {
      count += passiveAdd
      counter.textContent = count
    }
    passiveAdd1()
    setInterval(passiveAdd1, 5000)
    console.log('works')

    // Remove the button and hide its container with a smooth transition
    buttonOneContainer.style.opacity = 0
    setTimeout(() => {
      buttonOneContainer.style.display = 'none'
    }, 300) // Hide the container after the transition (0.3 seconds)

    const upgradeListItem = document.createElement('li')
    upgradeListItem.textContent = 'fhdauh'
    activeUpgradesList.appendChild(upgradeListItem)
  }
})

FIFTY_TWO_BUTTON.addEventListener('click', function () {
  fiftyTwo = true
  passiveAddFiftyTwo = 50
  FIFTY_TWO_BUTTON.classList.add('hide')

  if (fiftyTwo === true) {
    function passiveAdd2 () {
      count += passiveAddFiftyTwo
      counter.textContent = count
    }
    setInterval(passiveAdd2, 2000)
  }
})
