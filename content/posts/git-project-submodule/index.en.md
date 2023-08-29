---
title: "Clone a Project with submodule"
date: 2023-08-29T22:12:32+08:00
tags: ["git", "submodule"]
categories: ["Git"]
description: "This article explains what to do after cloning a git project with submodule"
author: "Max"
keywords: ["git", "submobule"]
featured: 
  flag: true
  weight: 1
---
## Introduction
This is supposed to be a very simple blog. I encountered this problem again and again, and keep forgetting how to solve it. So, I write an article about it.

## The Scenario
Suppose you are using a project that depends on a git submodule. You clone it, and it doesn't automatically download the submodule itself. 

Or, you are working on a project that uses submodules, you commit and push it, then you want to work on it on another computer. One of the example is a hugo blog with a theme as a submodule. You want to clone the blog and the theme together.

## How to do it
### Clone Project
```bash
git clone <project url>
```

### Initialize Submodule
```bash
git submodule init
```

## Another Way
```bash
git clone --recurse-submodules <project url>
```

## Conclusion
That's it. Nothing fancy. 