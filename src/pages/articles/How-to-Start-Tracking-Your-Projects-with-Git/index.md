---
title: How to Start Tracking Your Projects with Git
author: Nolan Freeman
path: /content/articles/How-to-Start-Tracking-Your-Projects-with-Git
snippet: Want to start tracking your projects with Git? Look no further, this guide contains everything you need to know to get up and running!
tags: git & beginner
created: 04/27/2020
posted: 04/27/2020
updated: 04/27/2020
---
![Header Image](git-logo.png)
Hey there! In this brief tutorial we'll cover how to start tracking a pre-existing project with git. 

## What is Git?

Git is a version control system that structurally tracks changes to files you are working with. It allows you to jump between "save ponts" in your projects in the event of an issue and provides an functional way of collaberating with team members. Although there are some GUI software availible to use git; to be effective you should understand some [basics of the command line]() But no need to worry the only thing you need for this tutorial is how to access the terminal on your system and if on windows, verify you have git installed with `git --version`.

There are 5 stages you'll need to understand to start working with git as visualized below (fig. 1). Note: We cover use of each of these commands in the article. 

![The Five Stages of Git](git-stages.png)

__Working Directory (No Git)__ - Before git is initilized, your directory should already be like this unless you have downloaded source code containin a git repository. You can check by running the command `git status` in the your command terminal.

__Working Directory (With Git)__ - Git is ready to start tracking files.

__Staging Area__ - Intermediate stage; files here you have specified that you want to start tracking but haven't commited to doing so yet.

__Local Repository__ - Contains files you are tracking and the history of all tracked files in this directory.

__Remote Repository__ - Basically the same as a Local Repository but is hosted somewhere apart from this directory. It could be somewhere online like Github, on a different computer on your network or even just another directory in your computer.

Here is a more detailed illustration of how git tracks files (fig. 2). If it doesn't make much sense, don't worry its not very important at this stage.
![Detailed Stages of Git](detailed-git-stages.png)

## What is Github? 

Github is a collabatory platform for Git where developers can host remote instances of their projects. There are many alternatives to Github such as Gitlab that host your files in just the same way but as Github is the most popular we will be using it for this tutorial.

## Let's Get started!

As this is a tutorial for pre-existing projects we'll start off with a project I have created with python. It's nothing special, just a refactored __fork__ of [this]() YouTube video tutorial. My project files can be downloaded [here]() as well if you would like to follow along without worrying about messing up something with one of your projects.

We'll start by opening the folder in the __terminal__: `cd ~/path/to/your/folder`.

In my case it is located on the desktop.

```bash
cd ~/desktop/PySnake
```
![Image of my working directory]()

As you can see there are 14 files in my projects __root__. Some of the files I'd like to be __version controlled__; some not. Before we start tracking our files lets specify to git what we want it to exclude. By doing this we can clean up our __working directory__ of files that we don't care about. Files that, when shared on github may be useless to people who would like to work on our project or even files that contain secret things like __API keys__.

To do this we create a file aptly named '.gitignore' using the __touch__ command 

```
touch .gitignore
```

Don't forget the '.' before __gitignore__. This is a hidden file.

Open it up using __vim__ to start adding a list of files.

```
vim .gitignore
```

press 'i' to enter __insert mode__ and start typing the name of the files you dont want to track each on its own line.

![Snapshot of all my gitignored files for this project]()

Lines with '*' are wildcards meaning it matches (and ignores) any files that follw the given pattern before or after the '*' character.

eg.

`*.pyc` ignores any files ending with the .pyc extension.

`_*` ignores any files beginning with '_'.

`folder/` will ignore a folder and anything within it.

There are many more ways to match folders to learn about a few more check out this guide [here]() on __gitignore__.

In __vim__ save your changes with __:wq__ when you're done.

Now that __gitignore__ is setup we can begin tracking our files. The `git init` command will initialize an empty __repository__ in your directory. All the git stuff will be stored in a hidden .git folder in the projects __root__, if you delete this folder and all git history is gone.

Use `git status` to check view information about our files status with git. 

![Git status output for out project]()

As you can see we have 7 files that aren't being tracked, go ahead and track one by typing `git add filename`.

```
git add main.py
```

Another check of `git status` we can see we now have one file in the __staging area__ and the rest still untracked, you can undo this with `git rm --cached filename` if you wish.

```
git rm --cached main.py
```

To add the rest of the files well do a `git add .` which will add all of the files in the current directory into the __staging area__. Alternatively you can manualy add each individual files by chaining them after the git add command.

```
git add player.py item.py README.md entity.py
```

Again running `git status` will show us how our the status of all our non-commited files. It's recommended that you run `git status` as much as possible while you are still learning the ropes so you can really see what is going on and fix any mistakes you may encounter.

Now that all the files we want are ready to be tracked well run `git commit -m 'message'` to finally track these files. 

```
git commit -m 'Initial commit with starter files'
```

All of the files we specified are now snapshotted at that point of __commit__ and can easily be [reverted back]() to with a simple command no matter how many commits you make inbetween. 

Make some changes to one of the files and add it again.

![Before and After of changes made to main.py file]()

```
git add main.py
```

And commit your changes:

```
git commit -m 'Add loop to main.py to facilitate multiple food items'
```
At any point you want to undo the last commit, like say you forgot a file and dont want to make 2 different commits for the same task; use command `git reset HEAD~` to revert back to the point of the commit before this one.

Well thats pretty much everything you need to know to get started tracking your project, everything else will come when you need it. There are lots of great resources out there to learn more like some of [my other articles]() But by far the best way to learn this stuff is to just go about your work and do a internet search ([DuckDuckGo](DuckDuckGo.com) for best results) and there will definitly be documentation or a [StackOverflow]() thread with an answer to your question!

Now that we have a pretty good understanding of git, check out [this article]() detailing how to set up and __push__ your projects to Github.
