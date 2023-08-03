---
title: "Javascript obfuscation using emoticons"
date: 2023-08-04T04:48:44+08:00
draft: false
tags: ["javascript", "obfuscation", "emoticons"]
categories: ["Code Obfuscation"]
description: "This article is to explain a method of obfuscating javascript code using emoticons."
author: "Max"
keywords: ["javascript", "obfuscation", "emoticons"]
featured: 
  flag: true
  weight: 1
---
## Introduction
Recently I came across an interesting line of code that appears to be a string of emoticons, but surprisingly, it's actually a piece of javascript code. Running this code in the browser console outputs 'hello world', without containing any recognizable terms like 'console,' 'log,' or even 'hello world.' It piqued my curiosity about the language features at play here, prompting me to delve into some research. Let's explore this intriguing code snippet further.

The code is as follows:
```javascript
ﾟωﾟﾉ= /｀ｍ´）ﾉ ~┻━┻ //*´∇｀*/ ['_']; o=(ﾟｰﾟ) =_=3; c=(ﾟΘﾟ) =(ﾟｰﾟ)-(ﾟｰﾟ); (ﾟДﾟ) =(ﾟΘﾟ)= (o^_^o)/ (o^_^o);(ﾟДﾟ)={ﾟΘﾟ: '_' ,ﾟωﾟﾉ : ((ﾟωﾟﾉ==3) +'_') [ﾟΘﾟ] ,ﾟｰﾟﾉ :(ﾟωﾟﾉ+ '_')[o^_^o -(ﾟΘﾟ)] ,ﾟДﾟﾉ:((ﾟｰﾟ==3) +'_')[ﾟｰﾟ] }; (ﾟДﾟ) [ﾟΘﾟ] =((ﾟωﾟﾉ==3) +'_') [c^_^o];(ﾟДﾟ) ['c'] = ((ﾟДﾟ)+'_') [ (ﾟｰﾟ)+(ﾟｰﾟ)-(ﾟΘﾟ) ];(ﾟДﾟ) ['o'] = ((ﾟДﾟ)+'_') [ﾟΘﾟ];(ﾟoﾟ)=(ﾟДﾟ) ['c']+(ﾟДﾟ) ['o']+(ﾟωﾟﾉ +'_')[ﾟΘﾟ]+ ((ﾟωﾟﾉ==3) +'_') [ﾟｰﾟ] + ((ﾟДﾟ) +'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ ((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [(ﾟｰﾟ) - (ﾟΘﾟ)]+(ﾟДﾟ) ['c']+((ﾟДﾟ)+'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ (ﾟДﾟ) ['o']+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ];(ﾟДﾟ) ['_'] =(o^_^o) [ﾟoﾟ] [ﾟoﾟ];(ﾟεﾟ)=((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟДﾟ) .ﾟДﾟﾉ+((ﾟДﾟ)+'_') [(ﾟｰﾟ) + (ﾟｰﾟ)]+((ﾟｰﾟ==3) +'_') [o^_^o -ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟωﾟﾉ +'_') [ﾟΘﾟ]; (ﾟｰﾟ)+=(ﾟΘﾟ); (ﾟДﾟ)[ﾟεﾟ]='\\'; (ﾟДﾟ).ﾟΘﾟﾉ=(ﾟДﾟ+ ﾟｰﾟ)[o^_^o -(ﾟΘﾟ)];(oﾟｰﾟo)=(ﾟωﾟﾉ +'_')[c^_^o];(ﾟДﾟ) [ﾟoﾟ]='\"';(ﾟДﾟ) ['_'] ( (ﾟДﾟ) ['_'] (ﾟεﾟ+/*´∇｀*/(ﾟДﾟ)[ﾟoﾟ]+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+(ﾟｰﾟ)+(o^_^o)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+((ﾟｰﾟ) + (o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+((o^_^o) +(o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((o^_^o) +(o^_^o))+(o^_^o)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+((ﾟｰﾟ) + (o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟｰﾟ)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+(ﾟｰﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+((o^_^o) +(o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟｰﾟ)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+((ﾟｰﾟ) + (o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+(ﾟｰﾟ)+((ﾟｰﾟ) + (o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+(c^_^o)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+((o^_^o) - (ﾟΘﾟ))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(c^_^o)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+(ﾟｰﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟｰﾟ)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟｰﾟ)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+((ﾟｰﾟ) + (o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+(c^_^o)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((o^_^o) +(o^_^o))+((ﾟｰﾟ) + (o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+((ﾟｰﾟ) + (o^_^o))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((o^_^o) +(o^_^o))+((o^_^o) - (ﾟΘﾟ))+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟｰﾟ)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+(ﾟｰﾟ)+(ﾟｰﾟ)+(ﾟДﾟ)[ﾟεﾟ]+(ﾟｰﾟ)+((o^_^o) - (ﾟΘﾟ))+(ﾟДﾟ)[ﾟεﾟ]+((ﾟｰﾟ) + (ﾟΘﾟ))+(ﾟΘﾟ)+(ﾟДﾟ)[ﾟoﾟ]) (ﾟΘﾟ)) ('_');
```
## Method: 
To research this, it isn't as difficult as it may seem. By simply pasting the code into Visual Studio Code and performing a 'code format,' we can see its formatted version below:
```javascript
ﾟωﾟﾉ = /｀ｍ´）ﾉ ~┻━┻ / ["_"];
o = ﾟｰﾟ = _ = 3;
c = ﾟΘﾟ = ﾟｰﾟ - ﾟｰﾟ;
ﾟДﾟ = ﾟΘﾟ = (o ^ _ ^ o) / (o ^ _ ^ o);
ﾟДﾟ = {
  ﾟΘﾟ: "_",
  ﾟωﾟﾉ: ((ﾟωﾟﾉ == 3) + "_")[ﾟΘﾟ],
  ﾟｰﾟﾉ: (ﾟωﾟﾉ + "_")[o ^ _ ^ (o - ﾟΘﾟ)],
  ﾟДﾟﾉ: ((ﾟｰﾟ == 3) + "_")[ﾟｰﾟ],
};
ﾟДﾟ[ﾟΘﾟ] = ((ﾟωﾟﾉ == 3) + "_")[c ^ _ ^ o];
ﾟДﾟ["c"] = (ﾟДﾟ + "_")[ﾟｰﾟ + ﾟｰﾟ - ﾟΘﾟ];
ﾟДﾟ["o"] = (ﾟДﾟ + "_")[ﾟΘﾟ];
ﾟoﾟ =
  ﾟДﾟ["c"] +
  ﾟДﾟ["o"] +
  (ﾟωﾟﾉ + "_")[ﾟΘﾟ] +
  ((ﾟωﾟﾉ == 3) + "_")[ﾟｰﾟ] +
  (ﾟДﾟ + "_")[ﾟｰﾟ + ﾟｰﾟ] +
  ((ﾟｰﾟ == 3) + "_")[ﾟΘﾟ] +
  ((ﾟｰﾟ == 3) + "_")[ﾟｰﾟ - ﾟΘﾟ] +
  ﾟДﾟ["c"] +
  (ﾟДﾟ + "_")[ﾟｰﾟ + ﾟｰﾟ] +
  ﾟДﾟ["o"] +
  ((ﾟｰﾟ == 3) + "_")[ﾟΘﾟ];
ﾟДﾟ["_"] = (o ^ _ ^ o)[ﾟoﾟ][ﾟoﾟ];
ﾟεﾟ =
  ((ﾟｰﾟ == 3) + "_")[ﾟΘﾟ] +
  ﾟДﾟ.ﾟДﾟﾉ +
  (ﾟДﾟ + "_")[ﾟｰﾟ + ﾟｰﾟ] +
  ((ﾟｰﾟ == 3) + "_")[o ^ _ ^ (o - ﾟΘﾟ)] +
  ((ﾟｰﾟ == 3) + "_")[ﾟΘﾟ] +
  (ﾟωﾟﾉ + "_")[ﾟΘﾟ];
ﾟｰﾟ += ﾟΘﾟ;
ﾟДﾟ[ﾟεﾟ] = "\\";
ﾟДﾟ.ﾟΘﾟﾉ = (ﾟДﾟ + ﾟｰﾟ)[o ^ _ ^ (o - ﾟΘﾟ)];
oﾟｰﾟo = (ﾟωﾟﾉ + "_")[c ^ _ ^ o];
ﾟДﾟ[ﾟoﾟ] = '"';
ﾟДﾟ["_"](
  ﾟДﾟ["_"](
    ﾟεﾟ +
      ﾟДﾟ[ﾟoﾟ] +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      ﾟｰﾟ +
      (o ^ _ ^ o) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      (ﾟｰﾟ + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ((o ^ _ ^ o) + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      ((o ^ _ ^ o) + (o ^ _ ^ o)) +
      (o ^ _ ^ o) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      (ﾟｰﾟ + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ﾟｰﾟ +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      ﾟｰﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ﾟДﾟ[ﾟεﾟ] +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ((o ^ _ ^ o) + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ﾟｰﾟ +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      (ﾟｰﾟ + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      ﾟｰﾟ +
      (ﾟｰﾟ + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      (ﾟｰﾟ + ﾟΘﾟ) +
      (c ^ _ ^ o) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟｰﾟ +
      ((o ^ _ ^ o) - ﾟΘﾟ) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      (c ^ _ ^ o) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      ﾟｰﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ﾟｰﾟ +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ﾟｰﾟ +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      (ﾟｰﾟ + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟｰﾟ +
      (c ^ _ ^ o) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      ((o ^ _ ^ o) + (o ^ _ ^ o)) +
      (ﾟｰﾟ + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      (ﾟｰﾟ + (o ^ _ ^ o)) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      ((o ^ _ ^ o) + (o ^ _ ^ o)) +
      ((o ^ _ ^ o) - ﾟΘﾟ) +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ﾟｰﾟ +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟΘﾟ +
      ﾟｰﾟ +
      ﾟｰﾟ +
      ﾟДﾟ[ﾟεﾟ] +
      ﾟｰﾟ +
      ((o ^ _ ^ o) - ﾟΘﾟ) +
      ﾟДﾟ[ﾟεﾟ] +
      (ﾟｰﾟ + ﾟΘﾟ) +
      ﾟΘﾟ +
      ﾟДﾟ[ﾟoﾟ]
  )(ﾟΘﾟ)
)("_");
```
To dissect this code further, setting up the debugger and inspecting it line by line would be a valuable approach. This method will allow us to gain a clearer understanding of its workings and uncover any hidden intricacies.

Without a doubt, the most critical part of this code lies in the last line. Let's focus our attention on this key component to unlock the code's true purpose.

```js
Дﾟ["_"](
  ﾟДﾟ["_"](
    ...
  )(ﾟΘﾟ)
)("_");
```
Let's go straight to spoiler, This line is equivalent to 
```js
func = new Function(FunctionString);
outerFunc = new Function(func(1));
outerFunc("_")
```
The secret behind the gibberish inside the function is that it represents Unicode for the string return `console.log(\\"hello world\\")`.

All the preceding lines play a role in constructing three fundamental elements:

1. A string return
2. A variable holding the `[Function:Function]` constructor
3. Variables storing numbers from 0 to 9.

Surprisingly, with just these elements in place, you can execute arbitrary code.

## a few techniques
### Constructing Numbers:
Take a look at this line of code:
```js
ﾟДﾟ = ﾟΘﾟ = (o ^ _ ^ o) / (o ^ _ ^ o);
```
this single line assigns both variables ﾟДﾟ and ﾟΘﾟ to the value 1.

In a similar fashion, other variables exist for numbers like 4 and 3. By utilizing these variables, you can effortlessly construct any number of your choice. 

### How to concat strings:
In the code, you may notice the usage of literal strings such as `constructor` and `return`.

While one way to construct strings involves utilizing Unicode representations, the creator of this challenge employed an alternative.

Consider this line as an example: 
```js
((ﾟωﾟﾉ == 3) + "_")
```
Consider the variable ﾟωﾟﾉ, which is not initialized and therefore will be evaluated as undefined.

Now, when the code checks the expression undefined == 3, the result is false, resulting in the literal string "false_" after concatenation with "_".

Then the author extracts the character s from the string "false_".

Similarly, by following a similar approach, the author can extract `t` and `r` from `true_`, n from `undefined_`, and so on.

### Understanding `[Function:Function]`:
The `[Function:Function]` plays a significant role in the code's functionality. Let's look into how it's obtained. 

#### `[Function:Function]` as a Constructor Function:
The expression `[Function:Function]` is a constructor function itself. If you were to call it, it would be equivalent to invoking `new Function(arg)`. This allows the code to create and execute functions dynamically, given a function string arg.

#### Constructing `[Function:Function]`:
As previously explained, the code constructs the string "constructor". 
```js
(o ^ _ ^ o)[ﾟoﾟ][ﾟoﾟ]
```

Here, `(o ^ _ ^ o)` is 3, and `ﾟoﾟ` is `"constructor"`. 

3 is a number, but it's also an object. It has a property called `constructor`, which is a function. It's a function that constructs numbers, of type `[Function:Number]`.

This function also has a property called `constructor`, which is a function that constructs functions, of type `[Function:Function]`.

As a result, `(o ^ _ ^ o)[ﾟoﾟ][ﾟoﾟ]` is equivalent to accessing `[Function:Function]`, which can construct other functions. 

## In Conclusion
The challenge presented by this code is intriguing. While it may not be inherently difficult, its creativity stands out. Understanding this technique offers a deeper insight into the inner workings of JavaScript, allowing developers to expand their understanding of the language.

However, comprehension shouldn't mark the end of the journey. A project could involve writing a program to obfuscate code using similar techniques. It's a prospect I plan to explore in the future.

Yet, it's essential to recognize that while this approach is inventive, it is not very practical and could even be deemed risky. Implementing it in production code is not advisable due to its potential complications and potential security risks. It's best reserved for experimental or educational purposes, where the focus lies in unraveling the intricacies of JavaScript rather than practical application.

In summary, this code offers a captivating glimpse into JavaScript's capabilities, inspiring curiosity and creativity, but caution must be exercised when considering its real-world application.

