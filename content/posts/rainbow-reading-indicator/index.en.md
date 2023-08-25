---
title: "Rainbow Color Reading Indicator"
date: 2023-08-21T01:25:32+08:00
tags: ["css", "indicator", "js"]
categories: ["Frontend"]
description: "This post is to demonstrate how to create a rainbow color reading indicator."
author: "Max"
keywords: ["CSS", "Reading Indicator", "JavaScript"]
featured: 
  flag: true
  weight: 1
---
## Introduction
This comes from my implementation of the blog theme. I've seen this kind of reading indicator in some websites. They are thin bars that is fixed on one side of the window, mostly top. It will take the same percentage of the window width as the percentage of the page you have scrolled. It's a way to tell the reader how much of the page they have read.

## Single Color Indicator
The idea is very simple. You have a div called `reading-indicator` that is fixed on the top of the window. It has a width of 100% and a height of 5px. It's background color is the color you want to use for the reading indicator. Then you have a JavaScript function that calculates the percentage of the page you have scrolled. The percentage is then used to set the width of the `reading-indicator` div.

## Rainbow Color Indicator
This is kind of tricky. To achieve rainbow color, it's not very hard. One just have to apply a gradient background to the `reading-indicator` div. The tricky part is that, if you just replace the color, the indicator would behave very weird. 

### The Code:
```css
.reading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
}
```
```js
function updateReadingIndicator() {
    const readingIndicator = document.getElementById("reading-indicator");
    const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    readingIndicator.style.width = scrollPercentage * 100 + "%";
}
```
The problem is that, whether it's 100% width, or any other percentage, the gradient will always be the same. So, the indicator would always have all the colors on it. As the user scrolls down, it doesn't feel like the indcator is extending, but rather, it feels like the indicator is stretching.

### Initial Solution
The solution is intuitive. We make the indicator always full width of the window, but cover it with a mask. The mask will be stretched instead of the indicator. The mask will have a overflow setting as hidden. So, as the user scrolls down, the mask will be stretched, and the indicator will be revealed. Making it look like the indicator is extending.

### The problem
Remember that the indicator is fixed on the top of the window? So, this is a important fact of css. If two divs containing one another are both fixed positioned, renderer doesn't view them as parent and child. Rather, they are both treated as directly related to the view port. Thus, if we do this:
```css
.reading-indicator {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    overflow: hidden;
}

.reading-indicator-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
}
```
We will observe that the indicator and mask are correctly positioned. The widths are correct too. But somehow, the mask is not masking the indicator. The indicator is still fully visible. 

Clearly fixed positioning is not the way to go. 

### The Final Solution
We don't have to make both the indicator and mask fixed positioned. We can make the mask fixed positioned, and make the indicator relative positioned. This way, the indicator will be positioned relative to the mask. And the mask will be positioned relative to the window. So, the mask will be able to mask the indicator.

However, this way, when we apply the width of the indicator, it will be relative to the mask. So, we have to make the width of the indicator 100% of the window. I cannot simply use a css property to do this. Need to use javascript a little bit.

```js
const container = document.getElementsByClassName("reading-indicator-mask")[0];
const width = window.innerWidth;
const progressbar = document.getElementsByClassName("reading-indicator")[0];
progressbar.style.width = `${width}px`;

document.addEventListener("scroll", () => {
  if(!isScrolling){
    isScrolling = true;
    requestAnimationFrame(() => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;

      container.style.width = `${(scrolled / scrollable) * 100}%`;
      isScrolling = false;
    });
  }
});
```

## Conclusion
This is just a simple trick. Nothing fancy or complicated. 
