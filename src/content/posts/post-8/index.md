---
title: Styling My Astro Project
fmContentType: posts
description: I fixed many more issues today!
location:
    coordinates: " "
    alias: "102JASOLA_DL"
author: Vibhanshu
image:
    alt: Some wallpaper I found on the internet!
    url: https://wallpapercave.com/wp/wp8626070.jpg
tags:
    - astro
    - blogging
    - setbacks
    - styling
    - FrontMatterCMS
pubDate: 2024-09-16T18:52:39.892Z
modDate: 2024-09-16T18:52:40.768Z
---

I fixed many issues today. 🛠️ I think the blog tutorial given by Astro had a few issues. First, the theme toggle was just right below the hamburger menu, which I didn't like. 🍔 Additionally, there was a weird space appearing before the navbar for some reason. 🤔

## The Styling and Other Stuff 🎨

Well, I noticed that all the styling defined inside the `global.css` was applied as important already. The funny thing was that when running under the dev environment, Astro doesn't seem to hint at this. 🧐

### Unequal Styling ⚖️

I also figured out that when I applied styles to a particular native HTML tag, other than `global.css`, they just didn't get applied. On inspecting the browser, I found that the styles were overridden by the `global.css`. Then I realized what was actually happening. 💡

### The Solution 🛠️

I looked on the internet once again, and this time I actually found a solution on [Stack Overflow](https://stackoverflow.com/questions/52486775/css-strike-through-in-inspector). It was that my global stylesheet was overriding my CSS inside local pages. They suggested using classes instead. I tried it, and yes, it did indeed work. 🎉 Anyways, I am so relieved now that this issue has been fixed, and I now actually know what was causing it. 😌

## FrontMatter Still Under Progress 🚧

The CMS I added yesterday has most of the features that I wanted, but the only problem is that it's still a little bit buggy. 🐛 For some reason, its schema is getting rewritten by itself. Anyways, maybe next time I will make more modifications to it.

Bye for now! 👋

<iframe style="border-radius: 2rem;" width="100%" height="400" src="https://www.youtube.com/embed/EHBFKhLUVig?autoplay=1&showinfo=0&controls=1&rel=0" title="A Song" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
