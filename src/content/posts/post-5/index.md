---
title: "Completed Content Collection"
pubDate: 2024-09-12T11:24:20.1234+05:30
description: "This blog post usage content collection"
author: "Vibhanshu"
image:
    url: "https://docs.astro.build/default-og-image.png"
    alt: "The Astro logo on a dark background with a pink glow."
tags: ["astro", "blogging", "contet-collection"]
---

## Content Collection in Astro 🧩

-   Content collection allows you to oraganize your posts in a structured manner.
-   Its good for scalability. ⚖

### How to setup?

-   Add directory inside `src/content`.
-   Add all post here i.e., all the `md` or `mdx` files.

### Create schema

-   Astro uses `zod` schema declaration library, to validate the content of collection.
-   You define a schema for each collection, ensuring the content is consistent (like - `title`, `date`, etc).
-   It type script is used - you can make a config file inside the `content` like this : `/src/content/config.ts`.
-   In config file you can declare these all `zod` stuff.

### Indexing

-   It is basically automatically done. 😐

### Fetching content

-   You can fetch collection from Astro's built-in API `getCollection()`
-   Enables dynamic page generation (that one with `getStaticpath()` method).
-   This also allows you to have dynamic routing based so you can make path 😀 like based upon your
    frontmatter or whatever.

### Conclusion

I am happy that I have completed this Astro tutorial course and tbh, it was really a fun tutorial unlike
others. ❤
