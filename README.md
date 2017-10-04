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

## Examples

All the following examples should be prefixed with the base URL that you will see once you booted up the bronos-client software. Something like this: https://broker.bronos.net/v1/e7e5286593a07853eceee75bf28c42f6

/living room/volume/15 (will set volume for room Living Room to 15%)

/living room/volume/+1 (will increase volume by 1%)

/living room/next (will skip to the next track on living room, unless it’s not a coordinator)

/living room/pause (will pause the living room)

/living room/favorite/mysuperplaylist (will replace queue with the favorite called “mysuperplaylist”)

/living room/repeat/on (will turn on repeat mode for group)

For more detailed documentation on the possibilities, visit [http://jishi.github.io/node-sonos-http-api/]
