# Examples

All the following examples should be prefixed with the base URL that you will see once you booted up the bronos-client software. Something like this: `https://broker.bronos.net/v1/e7e5286593a07853eceee75bf28c42f6`

Example:

`/living room/volume/15`
(will set volume for room Living Room to 15%)

`/living room/volume/+1`
(will increase volume by 1%)

`/living room/next`
(will skip to the next track on living room, unless it's not a coordinator)

`/living room/pause`
(will pause the living room)

`/living room/favorite/mysuperplaylist`
(will replace queue with the favorite called "mysuperplaylist")

`/living room/repeat/on`
(will turn on repeat mode for group)

For more detailed documentation on the possibilities, visit [http://jishi.github.io/node-sonos-http-api/]