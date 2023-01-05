const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
const limit = (num) => String(num).substring(0, 10);

const betaEl = document.getElementById("beta");
const locationEl = document.getElementById("location");
const directionEl = document.getElementById("direction");
const tiltEl = document.getElementById("tilt");
const horizontalLine = document.getElementById("horizontal-line");
const verticalLine = document.getElementById("vertical-line");
const centerCircle = document.getElementById("center-circle");

let latitude;
let centered = false;

function handleOrientationChange({ beta, webkitCompassHeading }) {
  const direction =
    (webkitCompassHeading > 180
      ? webkitCompassHeading - 360
      : webkitCompassHeading) / 2;
  directionEl.innerText = direction;
  betaEl.innerText = limit(beta);
  tiltEl.innerText = limit(latitude - beta);

  const horizontal = latitude - beta;
  rotateElement(verticalLine, direction);
  moveElement(horizontalLine, 0, clamp((horizontal / 90) * 100, -50, 50));

  if (!centered && Math.abs(direction) < 1 && Math.abs(horizontal) < 1) {
    centered = true;
    centerCircle.classList.add("centered");
  } else if (centered) {
    centered = false;
    centerCircle.classList.remove("centered");
  }
}

function updateLocation(position) {
  latitude = position.coords.latitude;
  locationEl.innerText = limit(latitude);
}

function initialize() {
  navigator.geolocation.getCurrentPosition(updateLocation, (error) =>
    console.error(error)
  );

  DeviceMotionEvent.requestPermission().then((response) => {
    if (response == "granted") {
      document.getElementById("consent").style.display = "none";
      document.getElementById("content").style.display = "block";

      window.addEventListener("deviceorientation", (event) => {
        handleOrientationChange(event);
      });
    }
  });
}

function moveElement(domElement, xOffset, yOffset) {
  if (domElement) {
    const transformAttr = " translate(" + xOffset + "," + yOffset + ")";
    domElement.setAttribute("transform", transformAttr);
  }
}

function rotateElement(domElement, rotation) {
  if (domElement) {
    const transformAttr = " rotate(" + rotation + ")";
    domElement.setAttribute("transform", transformAttr);
  }
}

console.log("Starting accelerometer");
initialize();
