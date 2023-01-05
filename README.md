# Star tracker polar alignment app

Tool for polar aligning a star tracker with a phone.

## Instructions

1. Open the app in the browser on your iOS device.
1. Tap the Share icon (the square with an arrow pointing out of it) at the bottom of the screen.
1. Scroll down to the list of actions and tap Add to Home Screen.
1. Attach your device to a star tracker
1. Move the half ball to move the lines to the center of the circles. 
   When the center circle turns green, the top is level.
1. Replace the device mount with e.g. a ball head or with a camera.
1. Snap some photos (optional).

## Development

In order to access the accelerometer on the iOS device the page needs to be served over a secure connection (https). One
way of achieving this is to:

1. Install ngrok and http-server with e.g. `brew install ngrok` and `npm i -g http-server`
1. Setup ngrok (you can get (better) instructions by running `npm start`):
   1. Register for a ngrok account
   1. Generate an authtoken
   1. Save the authtoken to your local config `./ngrok authtoken YOUR_AUTHTOKEN_HERE`
1. Start the server with `npm start`
1. Open `https://NGROK_PUBLIC_URL/tripod-level/` (`NGROK_PUBLIC_URL` being in the form 
   `https://0000-00-000-00-00.ngrok.io`) in a browser  