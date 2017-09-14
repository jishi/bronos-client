[![PayPal donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.me/jishi "Donate once-off to this project using Paypal") [![Join the chat at gitter](https://img.shields.io/gitter/room/badges/shields.svg)](https://gitter.im/node-sonos-http-api/Lobby "Need assistance? Join the chat at Gitter.im")

# Bronos

[Examples](/examples) [IFTTT guide](/ifttt)

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

## How does it work?

![network diagram](/bronos-diagram.png "Network diagram")

A local device on your network, bridges commands aimed for your Sonos over a secure, encrypted link. A random identifier (let's call it a token) uniquely identifies your system and forwards the commands to your local network. This mitigates the need for setting up a dynamic hostname (because of dynamic IP allocations to your router), port forwarding to allow internet requests against a local [https://github.com/jishi/node-sonos-http-api](API), but also the requirement to secure such an endpoint (like SSL certificates and basic auth). Basically, you don't have to be a network engineer to get this going.

## What can I use it for?

The primary target is to get robust IFTTT support without having to be a network engineer. This enables both easy support for Amazon echo (Alexa) as well as Google Assistant (Home). However, it's not limited to this, because it gives you public, internet facing endpoints for any application to utilize. Slack webhooks, Stringify, anything that can send customizable http requests could benefit from this.

## Is it secure?

The only traffic that is allowed through are raw commands against the API, and nothing else on your local network. The traffic between your network and the Bronos cloud system is encrypted, as is the traffic from any third-party system interacting with the Bronos cloud system. The Bronos cloud system has restricted access through industry standard firewalls and it's only purpose is to bridge commands for your Sonos system. I have worked in the IT industry for over 17 years and have a fairly good understanding of network security and best practises. However, disclaimer, the service is provided as is.

## Does it cost money?

Not for the time being. I do plan on charging some money for it in the future, mainly to finance the costs that comes with running public systems like this, but also to enable the availability one would expect, and also making sure latency is low enough all around the world. This require brokers in multiple datacenters and geograhical routing, which comes at a cost.