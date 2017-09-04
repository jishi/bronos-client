# Bronos

[Examples]('/examples') [IFTTT guide]('/ifttt')

Simple IFTTT support for Sonos

## Easiest installation (with raspberry pi)

Download the pre-compiled [SD-card image](https://github.com/jishi/bronos-client/releases/download/v0.0.3/bronos-client-0.0.3.img.gz) and install on an SD-card (at least 2 GB). For windows, use [Win32DiskImager](https://sourceforge.net/projects/win32diskimager/), for MacOS, you can use the builtin `dd` command (see [instructions](http://elinux.org/RPi_Easy_SD_Card_Setup)).

Put the newly written SD-card into your raspberry pi (works with Raspberry Pi B, 2 and 3). Connect it via network cable to your router and plug in power.

Visit [http://sonos](http://sonos) in your browser.

## Manual installation (with downloaded zip)

Make sure you have node.js 7.10 or higher installed!

Download the latest release of [bronos-client](https://github.com/jishi/bronos-client/archive/master.zip), and unzip it to some folder.

`cd` into that folder, and invoke `npm install --production`. Wait for it to finish. Start software with `npm start`.

## Manual installation (using git)

Make sure you have node.js 7.10 or higher installed!

Clone the latest version from git with `git clone https://github.com/jishi/bronos-client.git`

`cd bronos-client` to move into the newly created folder. `npm install --production` to download all dependencies, then start it with `npm start`.
