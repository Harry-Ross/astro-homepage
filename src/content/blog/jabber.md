---
title: Jabber
tags: [projects, code, javascript, nodejs, electron, html]
date: 2021-01-11
description: Jabber - a modern Twitch chat desktop app
---
# Jabber - a modern Twitch chat desktop application

I realised that the current offerings for Twitch.tv chat clients were fairly poor, and that I had to make a new one. The current options are [Chatterino](https://chatterino.com/) and [Chatty](http://chatty.github.io/), which I believe are flawed programs for a variety of reasons.

**Chatterino** - built in old technologies and UI frameworks (.NET), which limits potential for application

![Chatterino Screenshot](https://chatterino.com/img/screenshot-3.png)

**Chatty** - extremely outdated UI, likely also built in older technologies

![Chatty Screenshot](http://chatty.github.io/img/stuff.png)

## My software
I have started building it in ElectronJS combined with EJS and SCSS, which also allows for the software to be used in the browser too if needed. Currently I have a basic prototype that interprets the Twitch IRC data by connecting to their websockets server, shown below. ([Documented here](https://dev.twitch.tv/docs/irc)) 

![Jabber prototype screenshot](/images/jabber-proto.png)
Currently the styling is a little janky, and I am working on fixing it.

As of the 11th Jan, I am now working on implementing emote recognition into the messages to brighten up the chat interface, and also planning to implement sending chat messages. Another goal is to improve the styling, possibly with Bootstrap but I kind of think Bootstrap is boring looking. We shall see...