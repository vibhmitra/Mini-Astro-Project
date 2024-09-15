---
title: The Curious Case of the Disappearing Fonts
pubDate: 2024-09-15T19:33:03.684Z
author: Vibhanshu
tags:
    - astro
    - blogging
    - learning
    - viewtransitions
    - FrontMatterCMS
    - netlify
pageEmoji: ✨
description: Took me about half of the day to fix fonts / emoji's
image:
    url: https://picsum.photos/600/1
    alt: " "
location:
    alias: 102JASOLA_DL
    coordinates: " "
modDate: 2024-09-15T19:33:05.462Z
---

So today was pretty weird! 🤪 When I deployed this Astro site yesterday, I didn't even glance at the fonts. When I finally checked it on my phone, I noticed that the emojis in the Markdown page headings were looking a bit off. So, I put on my detective hat and started troubleshooting. 🕵️‍♂️

## Emoji Rendering Issue 😵

The weird thing was that when I ran the code in my local dev environment, the emojis were all happy and fine. But as soon as it got deployed on Netlify, some pages decided to throw a tantrum, and the emojis looked terrible. 😕 I even added the 'Noto Color Emoji' font from Google, thinking it would save the day.

At first, I thought it was just an emoji rebellion, but then I noticed the fonts weren't loading either. I was like, "Whaaaat???" 😱 After some internet sleuthing, I found out many others were facing the same issues, but nobody had a magic solution. Some folks blamed `Astro.glob()` and suggested using collections. 🤷‍♂️

## Weird Importing Styles 🤔

I decided to experiment more. I ran it in build mode, and when I previewed it, yep! The same drama was happening again. At least now I didn't have to wait for Netlify to build it for me to see the problem. I then decided to put the font links directly into the BaseLayout of the page. After embedding it inside the head tag, magically everything was working again. ✨ I don't know what the problem was with the `@import url()` method, but yeah! Now it's all working. 🎉

## View Transition 🚀

Also, I learned to add view transitions inside Astro. It basically supports two basic transitions for now:

1. Slide 🛷
2. Fade 🌫️

Both transitions have several options, but I didn't read them. I might look into it in the future. 📚

## Tried Front Matter CMS 🛠️

I added FrontMatter CMS to this site. I still have to figure out how to customize it to follow my schema, but meanwhile, I am editing this post on it. It has some pretty cool features like live preview, tag management, schema things, etc. It runs on VS Code as it is a VS Code extension, but I like it as it is quite easy to configure. 😎
