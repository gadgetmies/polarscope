const alphaEl = document.getElementById('alpha')
const betaEl = document.getElementById('beta')
const gammaEl = document.getElementById('gamma')
const compassEl = document.getElementById('compass')

function handleOrientationChange({alpha, beta, gamma, absolute, webkitCompassHeading}) {
  console.log(absolute)
  alphaEl.innerText = alpha
  betaEl.innerText = beta
  gammaEl.innerText = gamma
  compassEl.innerText = webkitCompassHeading
}

function initialize() {
  DeviceMotionEvent.requestPermission().then(response => {
    if (response == 'granted') {
      document.getElementById('consent').style.display = 'none'
      document.getElementById('content').style.display = 'block'

      window.addEventListener('deviceorientation', (event) => {
        handleOrientationChange(event)
      })
    }
  })
}

console.log('Starting accelerometer')
initialize()
