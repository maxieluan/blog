---
title: "Delete File Occupied by Context Menu"
date: 2023-08-30T21:57:32+08:00
tags: ["windows", "context-menu", "regedit"]
categories: ["Windows"]
description: "This article explains how to delete a file that is occupied by context menu."
author: "Max"
keywords: ["windows", "context-menu", "regedit"]
featured: 
  flag: true
  weight: 1
---
## Introduction
I once installed a editor called CudaText. I wouldn't really call it installing. I just downloaded a zip file and unzipped it in drive. But it did install a little something to my system. When I tried to delete it by removing the folder. One file called `cudatext_shell64.dll` cannot be deleted, complaining something about the file being opened in explorer's context menu. 

## Solution
The solutions comes in two steps. 

### Regedit
Open registry editor, look for this path: `\HKEY_CLASSES_ROOT\*\shellex\ContextMenuHandlers`
Under this, should be a few folder like: 
* `7-zip`
* `Open with`

Or look under this `\HKEY_CLASSES_ROOT\*\shell`

One key will be named after `cuda`. That's the one I am supposed to delete. 

### Restart explorer
This should be done in Task Manager. After restarting the explorer, and delete the file. 

## Conclusion
Done. 