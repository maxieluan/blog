---
title: "Third Party Softwares, a Solution for Reliability"
date: 2023-07-31T05:39:28+08:00
draft: false
tags: ["windows", "reliability", "third party"]
categories: ["Technology Overview"]
description: "This post is to discuss why sometimes, you should prefer third party software over the built-in ones."
author: "Max"
keywords: ["Tech Stack Overview", "windows", "reliability", "third party", "bugs", "quality assurance"]
featured: 
  flag: true
  weight: 1
---
## Introduction
Today, I encountered a perplexing problem with my computer that revolved around internet access. As a frequent user of the software "Clash for Windows," I rely on it to bypass restrictions, safeguard my IP address, and enhance my overall internet experience. Traditionally, I had utilized the system proxy mode, a convenient setting that ensured all applications accessed the internet through the proxy. However, this approach often led to exhausting my traffic quota before the end of each month.

To address this, I decided to switch to manual configuration, where I could selectively choose which URLs to proxy. Unfortunately, upon disabling the system proxy, I encountered a peculiar issue: my browser, Microsoft Edge, could no longer access the internet except for those websites explicitly configured to use the proxy. Intrigued, I performed various troubleshooting steps, including checking ping, traceroute, other software, and alternative browsers. Surprisingly, the problem manifested solely within Microsoft Edge.

Ordinarily, resolving such issues involves resetting or reinstalling the browser. However, unlike other browsers, Edge lacks a straightforward reinstallation option. Despite my attempts to force a reinstallation and wipe all identifiable browser data, the problem persisted as soon as I reopened Edge, which automatically retrieved my user data.

## Why this happens
The peculiar behavior exhibited by Microsoft Edge in response to the changes in proxy configurations can be attributed to its status as a built-in software within the Windows operating system. As an integrated application, Edge may leverage certain private APIs of Windows or access and create configurations that remain undisclosed to the public.

My quest for a solution led me to numerous articles discussing potential fixes for similar issues. I diligently attempted each recommended method, yet none of them yielded the desired results. This experience left me feeling like I was working with a black box – a situation where the inner workings of the software remain obscured. In such cases, one can only test input and output, hoping to make educated guesses about the underlying mechanisms.

This opacity and lack of detailed insights into the internal workings of Edge left me dissatisfied. I prefer having a comprehensive blueprint of what lies within the software I use, allowing me to make informed decisions and resolve issues more effectively.

## Other Incidents
### The Hypervisor Incident
Another incident that comes to mind involves my experimentation with Hypervisor options approximately two years ago. Excited to discover that Windows Professional included a built-in hypervisor touted as a low-level system software, I decided to give it a try.

Initially, the experience was positive, and the built-in hypervisor proved to be efficient and capable. However, my excitement turned to frustration when one day, the network interface to the outside world inexplicably stopped working. I was perplexed by the error message pointing to a software conflict, as no such issue had occurred previously.

As with the Microsoft Edge incident, I embarked on a thorough online search for solutions, delving into numerous discussions on Microsoft's forums. Many proposed remedies were shared, some seemingly by Microsoft employees themselves. Despite diligently attempting each suggestion, none of them proved effective.

Regrettably, I had no choice but to discontinue using the built-in hypervisor. Instead, I transitioned to alternative solutions like VirtualBox and VMware. While some may argue that these alternatives might not be as efficient, I personally found them to be just as capable for my needs, with no discernible difference in performance.

### The Clock Sync Incident
Yet another problem arose following my upgrade from Windows 10 to Windows 11. At seemingly random intervals, an annoying window would pop up, informing me of an exception in a software called tzsync. This window would repeatedly appear and stack on top of others, causing significant irritation.

Curiosity drove me to investigate the issue. I decided to use a disassembly tool to analyze tzsync's inner workings. To my surprise, I discovered that tzsync was a software responsible for clock synchronization. Despite the OS upgrade to Windows 11, tzsync was still using the outdated registry key to store time zone information. The situation worsened when I realized that if the registry key was absent, the software would throw an exception.

As a programmer, I recognized this as a fundamental low-level programming error, which left me puzzled about how it managed to pass Microsoft's quality assurance. The persistence of this issue, even in the latest update, was disheartening.

Frustrated with the situation, I took matters into my own hands. I opted to disable the problematic tzsync service and resorted to using a third-party software for clock synchronization. While this resolution addressed the annoyance, it was disconcerting to witness such an oversight in a crucial system component. This incident further emphasized the significance of rigorous quality assurance in software development and the need for reliable alternatives when dealing with such challenges.

## The Problem with Outsourcing in Software Development
It's widely recognized that many US companies, including Microsoft, have outsourced their software development to countries like India. While this isn't a statement on the competence of Indian programmers, outsourcing can bring about a disconnect in mindset and work approach. The absence of shared passion, responsibility, and ownership that may exist among in-house teams can impact the overall quality of the software.

Furthermore, when work is done on opposite sides of the planet, communication primarily relies on emails and online meetings. This process can lead to the loss of critical information, hindering effective collaboration. Unlike having the convenience of walking to the next office to ask questions, remote communication poses challenges in ensuring tasks are executed accurately.

It's understandable why companies like Microsoft opt for outsourcing. In the competitive industry, especially for public companies, financial success often takes precedence over product excellence. Cutting costs is a priority to keep shareholders satisfied. Regrettably, this focus on finances may sometimes come at the expense of delivering flawless products.

End-users, while vital to a company's success, may not always wield enough influence to prompt immediate change. Issues encountered by a few users might not be prioritized over financial considerations or broader strategic goals.

## How I Resolved the Problem
Dealing with the Microsoft Edge issue presented me with two main options for a proper fix. The first was to reinstall the entire system, but this wasn't a feasible choice given my busy schedule as a software engineer. While I have the technical know-how to perform system reinstalls, the time investment was simply too significant to justify.

The second option was to explore potential solutions available on the internet and seek assistance from tech support. However, this approach also came with its set of challenges. Even if I managed to find a fix or received help from support, there was no guarantee that the issue wouldn't recur. The underlying use of private settings or APIs in Edge might make any fix only temporary, with the risk of encountering the same problem or even triggering new ones in the future.

Faced with this uncertainty, I ultimately decided to switch to an alternative browser, Chrome, which has been serving me well. I made a mental note to prioritize using reliable third-party software whenever possible, opting not to rely solely on built-in applications.

As a software engineer, my time is valuable, and the priority is to maintain efficiency and productivity. This experience has reinforced the importance of finding stable and dependable third-party tools, as they often come with dedicated support, regular updates, and a community of users providing valuable feedback. By choosing to use trusted third-party software, I aim to minimize future technical disruptions and focus on my work with confidence and peace of mind.