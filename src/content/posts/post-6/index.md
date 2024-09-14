---
title: "Remote Setup for Git"
pubDate: 2024-09-14T13:35:00+05:30
description: "So I was learning Git!"
author: "Vibhanshu"
image:
    url: "https://picsum.photos/id/116/4000/1900"
    alt: "A farmhouse in Toscana, Italy by Anton Sulsky"
tags: ["git", "blogging", "github", "learning"]
pageEmoji: "🎈"
---

## Scenario 1 | If Local Already Exist 💻

### Initial Setup

1. `init` the repository on the local machine.
2. Do the initial commits by using
    ```bash
    echo "Hello" > myfile.txt
    git add .
    git commit -m "Added myfile.txt"
    ```
3. Create a new repository on GitHub, let say "`momo`"
4. Copy its git URL: `https://github.com/<username>/momo.git`
5. On local machine, setup a new remote alias by using following commands:
    ```bash
    # For setting up a remote, the ‘origin’ alias can be named whatever you want.
    git remote add origin <GIT URL>
    # for pushing the codes into that repo afterwards
    git push orgin main
    # for pulling changes from remote
    git pull origin main or <branch name>
    ```

### Working with branches 🌳

The workflow that I followed was something like this:

-   Don't touch main branch.
-   Work on `feature` branch or maybe call it `coding` branch.
-   It’s basically a two-branch system, where I code on a sub-branch while continuously merging features into the main branch.

#### Steps I did 👷‍♂️

1. Create a new branch: `$ git checkout branch -b coding`
2. Switch to `coding`: `$ git checkout branch coding`
3. Edit files and add commits.
4. Push to remote repo: `$ git push origin <GIT URL> coding`
5. It asked me to compare and pull it to main. I just followed whatever option GitHub gave me, cuz I still don't know how the merging and pulling works. 🙅‍♂️
6. Voila! features added to my main repo at remote. ⚡

I searched the internet and found out that if someone made changes to the main repository and I want to sync my local branch to be up-to-date, I need to set an upstream for my branch. So, I used this command:

```bash
# Setting up upstream origin
git branch --set-upstream-to=origin/main coding
# then whenever I wanted to get updates from my main
# repo at github, I just run this.
git pull --rebase
```

I don't know the reason but sometimes I need to create pull requests manually by going to my branch `coding`

**Also here are some other useful commands (just for me to remember):**

-   `git init` : to initialize
-   `git add . || git add *` : to add files to staging area
-   `git status` : to check what's been staged
-   `git commit -m "message"` : to commit
-   `git branch -m <old name> <new name>` : to rename a branch
-   `git branch -a` : to see all the branch in current repo.
-   `git branch -D <branch name>` : to delete a branch
-   `git log --graph` : to see commits as in graphical way
-   `git diff <commitid1> <commitid2>` : to see changes b/w two commits
-   `gti diff <file name>` : to see what changes were made since last commit.
