# IFTTT

Quick guide to get this working with IFTTT. This expect you to be familiar with the IFTTT service.

Create new applet with the trigger you want to use. In this example we will be using a geofence.

Find the area you want to trigger for:
![enter location](/enter-location.png "When entering location")

Create a webhook, Make web request and specify the bronos link you want to trigger. This example would apply the pre-defined preset named "welcome".
![make request](/apply-preset.png "Trigger preset called welcome")

## Google Assistant

Use the google assistant trigger
![say phrase](/google-assistant-1.png "Say a phrase")

Create a webhook, Make web request. This will start playback on the `Office` player, with previous volume and source. You can use a preset instead if you want predefined volume, grouping and sources.
![make request](/google-assistant-2.png "Trigger play on Office speaker")