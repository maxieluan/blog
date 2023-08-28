---
title: "彩虹色的阅读指示条"
date: 2023-08-21T01:25:32+08:00
tags: ["css", "indicator", "js"]
categories: ["Frontend"]
description: "这篇博客是用来展示如何做博客的彩虹色阅读指示条"
author: "Max"
keywords: ["CSS", "Reading Indicator", "JavaScript"]
featured: 
  flag: true
  weight: 1
---
## 介绍
这个阅读指示条是我在做博客主题的时候做的。我在一些网站上看到过这种阅读指示条。它们固定在窗口的一侧，大多数是顶部。它的宽度与页面滚动的百分比相同。这是一种告诉读者他们阅读了多少页面的方法。

## 单色阅读指示条
这个想法很简单。只需要一个叫做`reading-indicator`的div，它固定在窗口的顶部。它的宽度是100%，高度是5px。它的背景颜色是你想用来做阅读指示条的颜色。然后写一个JavaScript函数，用来计算滚动了页面的百分比。这个百分比用来设置`reading-indicator`div的宽度。

## 彩虹色的指示条
这个有点棘手。要实现彩虹色，其实并不难。只需要给`reading-indicator`div应用一个渐变背景。棘手的部分是，如果只是替换颜色，指示条会表现得很奇怪。

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
问题在于，无论是100%宽度，还是任何其他百分比，渐变都是一样的。所以，指示条总是有所有的颜色。当用户向下滚动时，它不会感觉像指示条在延伸，而是感觉像指示条在拉伸。

## 初步的解决方案
解决方案很直观。我们让指示条始终是窗口的全宽，但是用一个遮罩来覆盖它。遮罩会被拉伸，而不是指示条。遮罩会有一个溢出设置为隐藏。所以，当用户向下滚动时，遮罩会被拉伸，指示条会被显示出来。看起来就像指示条在延伸。

### 问题
记得指示条固定在窗口的顶部吗？这是css的一个重要事实。如果两个div相互包含，都是`fixed`，渲染器不会将它们视为父子关系。相反，它们都被视为与视口直接相关。因此，如果我们这样做：

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
我们会观察到指示条和遮罩都正确地定位了。宽度也是正确的。但是不知何故，遮罩没有遮住指示条。指示条仍然完全可见。

显然，`fixed`不是正确的做法。

### 最终的解决方案
我们不必让指示器和遮罩都是`fixed`。我们可以给遮罩`fixed`，给指示条`relative`。这样，指示条将相对于遮罩定位。遮罩将相对于窗口定位。所以，遮罩将能够遮住指示器。

然而，这样做，当我们应用指示条的宽度时，它将是相对于遮罩的。所以，我们必须使指示条的宽度是窗口的100%。我不能简单地使用一个css属性来做到这一点。需要用一点javascript。

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

## 结论
这只是一个简单的技巧。没有什么花哨或复杂的。
