---
title: "example page"
date: 2023-07-21T02:18:23+08:00
draft: false
tags: ["tag1", "tag2"]
categories: ["category1", "category2"]
description: "This is the first post."
author: "Max"
keywords: ["keyword1", "keyword2"]
featured: 
  flag: true
  weight: 1
---
## headings
# h1
## h2
### h3
#### h4
##### h5
###### h6

## text
This is a paragraph with **bold text** and *italic text* and `code`.

## line breaks
This is the first line.  
And this is the second line.

## horizontal rules
---  
___  
***  

## Footnotes
Here's a simple footnote[^1] and here's a longer one[^2].

[^1]: This is the first footnote.
[^2]: This is the second footnote.

## Heading IDs
### My Great Heading {#custom-id}

## Defining Lists
Term 1
: Definition 1
Term 2
: Definition 2

## StrikeThrough
~~The world is flat.~~ We now know that the world is round.

## Task Lists
- [x] Write the press release
- [ ] Update the website

## Emoji
Not implemented yet. needs shortcode
Gone camping! :tent: Be back soon.

That is so funny! :joy:

## HTML
Not implemented yet. needs shortcode

## Katex
{{< katex math=`% \f is defined as #1f(#2) using the macro
\f\relax{x} = \int_{-\infty}^\infty
    \f\hat\xi\,e^{2 \pi i \xi x}
    \,d\xi` >}}

## blockquote
> This is a blockquote following a header.

## list
### unordered list
- item 1
- item 2
  - item 2.1
  - item 2.2
- item 3
  - item 3.1
    - item 3.1.1
    - item 3.1.2

### ordered list
1. item 1
2. item 2
3. item 3
   1. item 3.1
   2. item 3.2
4. item 4
   1. item 4.1
        1. item 4.1.1
        2. item 4.1.2

## code
```go
func main() {
    fmt.Println("Hello World! a very long content, intentionally to test the line wrap.")
}
```

## table
| Syntax | Description | Test Text | Intentionally to test the line wrap. | Another intentionally to test the line wrap. | Yet another intentionally to test the line wrap. | Averylongwordthatteststhelinebreak. |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Header | Title | Here's this | Here's this | Here's this | Here's this | Here's this |
| Paragraph | Text | And more | Here's this | Here's this | Here's this | Here's this |
## link
[link](https://example.com)

## image
![Minion](https://octodex.github.com/images/minion.png)


