---
title: "Superconducting Hype"
date: 2023-08-09T01:36:11+08:00
draft: false
tags: ["superconducting", "hype", "science"]
categories: ["Technology Overview"]
description: "This article aims to briefly explain what the superconducting effects are, and comment on the recent hype of superconducting."
author: "Max"
keywords: ["superconducting", "LK-99"]
featured: 
  flag: true
  weight: 1
---
## Introduction
Recently, a team based in South Korea released an arXiv paper detailing a purported room temperature superconducting material named LK-99. The researchers claim that this material can be synthesized using conventional laboratory methods without the need for specialized equipment. It's important to note that this paper has not undergone the peer review process.

The publication of this paper has sparked significant excitement within the media. This enthusiasm is particularly comprehensible within the context of the year 2023, a time often referred to as the "tech singularity." During this era, notable advancements in AI have propelled us closer to the concept of Artificial General Intelligence (AGI). Given these advancements, it is perhaps natural for breakthroughs in other scientific fields to be embraced with great anticipation.

Not hailing from a background in materials science, I opted not to hastily board the hype train. Rather, I observed the fervor with curiosity and found myself compelled to delve into the scientific underpinnings of the matter. While I don't intend for this to be an extensively scientific article, I aim to share insights I've gathered on a topic previously unfamiliar to me. Moreover, I hope to offer some personal reflections on the prevalent hype surrounding this development.

## Superconductivity Basics
As the name suggests, superconductivity refers to the unique property of certain materials to conduct electricity without any resistance. This remarkable trait holds significant practical value and finds applications in fields such as power transmission, MRI technology, and particle accelerators.

However, that encapsulates the extent of my familiarity with the subject. The article from South Korea also comes with an image in which a small fragment of LK-99 hovers above a magnet. This image is responsible for the widespread excitement. Regrettably, I don't understand it. 

Allow me to clarify; it's not that I'm unfamiliar with magnetic levitation. China has long operated magnetic levitation trains, an experience I've personally encountered. I grasp the foundational principles behind magnetic levitation. What eludes me is the connection between this concept and superconductivity. The leap from a levitating object to substantiating claims of superconductivity is not obvious to me.

Drawing from my school education, I understand that superconductors lack electrical resistance. Consequently, if a current is introduced into a superconductor, it would persist indefinitely. This seemingly implies that, with minimal energy input, a perpetual magnetic field could be generated, enabling levitation. However, my confusion arises—does this require the material to be in a looped structure? How can a small segment of material achieve levitation if it isn't a closed circuit form?

## Diamagnetism
This brings us to the concept of diamagnetism. Diamagnetism is an inherent property of all materials—a capacity to repel magnetic fields. It's important to differentiate this phenomenon from paramagnetism and ferromagnetism. Paramagnetism involves the propensity to attract magnetic fields, while ferromagnetism entails the capacity to attract and retain magnetic fields. The latter two are often associated with what we normally call magnets. However, diamagnetism is a universal property of all materials, including those we don't typically consider magnetic.

### How Diamagnetism Operates
My initial suspicion was that diamagnetism results from induced currents. In accordance with Faraday's law, a shifting magnetic field triggers the induction of a current. Consequently, when a material approaches a magnet, the magnetic field undergoes alteration, inducing a current within the material. This current, in turn, generates a magnetic field that opposes the magnet's field, resulting in repulsion.

This perspective holds partially. However, the difference is in the requirement set forth by Faraday's law—a closed circuit is required for the induction of a current. Here's where it gets interesting: materials possess distinct microstructures termed "Cooper pairs." These pairs comprise a duo of electrons engendered by alluring interactions facilitated by lattice vibrations (phonons) within the crystal structure (I don't know any of this. I just copied it from wiki.). With the application of magnetic fields, these Cooper pairs embark on rotational motion just like small closed circuits. Consequently, they instigate induced currents and create repulsion toward the magnetic field. Importantly, these tiny Cooper pairs add up to manifest a macroscopic effect of magnetic field repulsion—a phenomenon termed diamagnetism.

### Relationship with Superconductivity
While diamagnetism is present in all materials, its strength varies. In materials with resistance, induced currents attenuate, dissipating as heat and yielding feeble repulsion. In contrast, materials that doesn't have resistance allow uninterrupted current flow. As the material approaches a magnet, the current intensifies, enhancing the repulsive effect. When this force equals gravity, levitation occurs. Notably, in theory, levitation doesn't need continuous energy input.

Yet, I cannot find an explicit closed-form mathematical equation to quantify repulsion concerning position, gravity, and magnetic field. The reasons are many, like to many factors involved, some challenging to quantify (material properties), and nonlinear interactions. Numerical methods prove more apt for simulating this intricate process than the pursuit of a formula.

While superconductivity might not guarantee levitation, it facilitates the potential for levitation. It's important to recognize that levitation itself doesn't decisively establish the presence of superconductivity. The phenomenon can come from various origins: superconductivity, magnetism, or robust diamagnetism.

Notably, robust diamagnetism might resemble the Meissner effect, but it's distinct. The Meissner effect sustains levitation through supercurrents. In contrast, robust diamagnetism sees induced currents dissipate as heat, potentially resulting in eventual descent despite initial levitation. This distinction underscores the complexity of discerning underlying causes based solely on levitation observations.

## Addressing the Hype
Returning to the LK-99,

There are skepticisms regarding the photo proof. In this image, one tip of the material contacts the magnet, an appearance that doesn't look like conventional levitation. Robust diamagnetism, as mentioned earlier, often closely resembles the Meissner effect, particularly in static images or within brief time frames. Notably, while room temperature diamagnetism is very impressive, a photograph in itself cannot conclusively establish superconductivity.

An alternative viewpoint asserts that even if not indicative of superconductivity, LK-99's properties are impressive, possibly hinting at a distinct avenue for attaining room temperature superconductivity. However, a logical problem emerges. The pursuit of superconductivity isn't linear; it doesn't resemble climbing a mountain where diamagnetism marks a milestone en route to the ultimate summit of superconductivity. Instead, it's more like navigating a maze—apparently promising paths can be a dead-end. Indeed, what if robust diamagnetism is as far as this path can go down? 

Let's take a step back. Assuming LK-99 truly is superconductivity, a significant problem still exists. The methodology applied involves a fusion of materials, subjecting them to specific processes, and just filter the outcome for instances of superconductivity. This approach hardly works in mass production, which is crucial for real-world applications. In practical scenarios, consistent mass production with good quality standards is imperative. While this article holds potential within the laboratory context, its application extends little beyond those boundaries. 

## Conclusion
In conclusion, it's important to reiterate that the aim of this article is not to validate or invalidate the claims presented in the paper. I am not qualified to do that; my intent is solely to comprehend the underlying scientific principles. The explanation I've present deliberately simplified and might even contain errors. It shouldn't be considered as a scientific article.

I have to express my reservations about the hype surrounding this issue. While it's commendable for laymen to engage with science, it's important to approach it rationally and responsibly. Blindly endorsing or debunking the hype, especially without a grasp of the science behind, makes it more a political or religious gesture—just like cheering for a sports team. This is not a stance to take pride in.

However, some individuals harbor more vested interests. Fluctuations in stock prices of remotely related companies have gone through extreme volatility. While a few may have profited, the majority likely haven't. It's worth acknowledging that individuals actively defending the paper might be safeguarding their investments. This is a misguided strategy. Attempting to sway stock prices through social media posts is delusional. Most stock trading isn't executed by humans but by powerful computers employing complex algorithms. These systems might have assessed and even calculated price shifts, employing take-profit and stop-loss parameters long before individuals are even aware. When news breaks and people scramble to catch up, the computers capitalize by selling to these individuals, effectively capitalizing on their enthusiasm.

In essence, the message is clear—resist the urge to propagate hype.