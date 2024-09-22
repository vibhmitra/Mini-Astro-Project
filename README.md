# 🚀 Mini Astro Project | 🐱‍🚀👩‍🚀👨‍🚀

![It was just a tutorial! 🤷‍♀️ ](https://raw.githubusercontent.com/vibhmitra/mini-astro-project/main/docs/mockup-image2.png)

```sh
git clone https://github.com/vibhmitra/mini-astro-project.git
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

This Astro project kinda look like this:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

- Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

- There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

- Any static assets, like images, can be placed in the `public/` directory.

## Learn Checks
✅ Basic\
✅ All work on same page JSX + HTML + CSS\
✅ Components + Layouts + Flat Page Creation\
✅ `Astro.props` => Global object that can access frontmatter data\
✅ Dynamic Routing and Tags: `Astro.params`\
✅ RSS XML\
✅ Islands | Added Dark theme functionality\
✅ Content Collection\
✅ View Transition

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## ✨ Frontmatter
```
---
title: "A good title"
description: "Small description about post."
pubDate: 2024-08-13T18:52:39.892Z
modDate: 2024-08-19T09:59:10.094Z
location:
    coordinates: "41.5868,-93.6395"
    alias: "DSM"
author: "Astronaut"
image:
    alt: "Some cool text about the image"
    url: "./wow.webp"
tags:
    - tag1
    - tag2
    - tag3
---
```
| properties             | type     | required / optional    |
| ---------------------- | -------- | ---------------------- |
| `title`                | string   | required               |
| `description`          | string   | required               |
| `pubDate`              | datetime | optional               |
| `modDate`              | datetime | optional               |
| `location`             | object   | optional               |
| `location.coordinates` | string   | required               |
| `location.alias`       | string   | required               |
| `author`               | string   | required               |
| `image`                | object   | required               |
| `image.url`            | string   | required (but handled) |
| `image.alt`            | string   | required (but handled) |
| `tags`                 | array    | required               |
| `pageEmoji`            | string   | optional ((っ °Д °;)っ)  |

## 👀 Netlify Status?

[![Netlify Status](https://api.netlify.com/api/v1/badges/4be473c9-e041-409f-b88f-5ee5efe316c0/deploy-status)](https://app.netlify.com/sites/miniastro/deploys)
