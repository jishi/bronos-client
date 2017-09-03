[![PayPal donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.me/jishi "Donate once-off to this project using Paypal") [![Join the chat at gitter](https://img.shields.io/gitter/room/badges/shields.svg)](https://gitter.im/node-sonos-http-api/Lobby "Need assistance? Join the chat at Gitter.im")

# bronos-client

This is the local client needed to use the bronos.net service. More info will follow.

http://www.bronos.net

Once installed and running, open `http://localhost:5010` to see the base URL that you use from the internet

You configure this using ENV variables.

## BRONOS_BROKER_URL

The remote endpoint you connect to. You do not need to change this, default is `https://broker.bronos.net` 

## BRONOS_SONOS_API_URL

default `http://localhost:5005`

You only need to change this if you run the [sonos http api](https://github.com/jishi/node-sonos-http-api) on a 
different machine or on a different port than default.
 
## BRONOS_HTTP_PORT

default `5010`

This is the web interface where you will find your base url where you can publically invoke requests against. 