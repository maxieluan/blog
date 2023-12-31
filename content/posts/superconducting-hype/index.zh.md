---
title: "超导炒作"
date: 2023-08-09T01:36:11+08:00
draft: false
tags: ["超导", "炒作", "科学"]
categories: ["技术总览"]
description: "这篇文章是对超导技术的一个总览，以及对这个技术的炒作的一些看法。"
author: "Max"
keywords: ["超导", "LK-99"]
featured: 
  flag: true
  weight: 1
---
## 介绍
最近，一支来自韩国的团队发布了一篇关于一种叫做LK-99的物质的论文，详细介绍了一种名为LK-99的室温超导材料。研究人员声称，这种材料可以使用常规实验室方法合成，而无需专门的设备。需要注意的是，这篇论文尚未经过同行评审。

这篇论文的发表在媒体上引起了极大的兴奋。这种热情在2023年尤为可理解，这一年被一些人认为“技术奇点”。在这个时代，人工智能的显著进步使我们更接近人工通用智能（AGI）的概念。鉴于这些进步，其他科学领域的突破被人们怀着极大的期待。

然而，我完全没有材料科学的背景，我没有跟上他们对这件事的热情。相反，我以好奇的眼光观察着这种热情。我发现我有必要深入研究一下这个问题的科学基础。我不打算写一篇科学性很强的文章，但我希望分享一些我对这个话题的见解。此外，我希望能对这种发展所普遍存在的炒作提供一些个人的反思。

## 超导的基础
正如其名，超导性是指某些材料具有在没有任何电阻的情况下导电的独特性质。这一非凡的特性具有重要的实际价值，并在电力传输、MRI技术和粒子加速器等领域有广泛应用。

然而，这就触及了我知识的边界。韩国的这篇文章还附带了一张LK-99的小片段在磁铁上方悬浮的图片。这张图片是广泛兴奋的原因。遗憾的是，我不太理解。

请允许我澄清一下；我对磁悬浮并不陌生。中国长期以来一直有运营磁悬浮列车，我个人也体验过。我理解磁悬浮背后的基本原理。让我困惑的是这个概念和超导之间的联系。从悬浮到超导的逻辑链条似乎不太完整。

从我的学校教育中得出的结论是，因为超导体没有电阻，如果在超导体中引入电流，它将无限期地持续下去。而环形电流有磁效应。这似乎意味着，只要输入最小的能量，就可以产生永久的磁场，从而实现悬浮。然而，我的困惑在于，这需要材料处于一个环形结构。如果不是一个闭合的电路，一个小片段的材料如何实现悬浮？

## 抗磁性
这里我们来谈谈抗磁性的概念。抗磁性是所有材料固有的一种性质，即排斥磁场的能力。重要的是要将这种现象与顺磁性和铁磁性区分开来。顺磁性涉及到吸引磁场的倾向，而铁磁性涉及到吸引和保留磁场的能力。后两者通常与我们通常称为磁铁的东西相关联。然而，抗磁性是所有材料的普遍属性，包括我们通常不认为是磁性的材料。

### 抗磁性的原理
我最初的理解是，抗磁性是由感应电流引起的。根据法拉第定律，移动的磁场会引起电流的感应。因此，当一个材料接近一个磁铁时，磁场会发生变化，诱导材料内产生感应电流。这种电流，反过来，产生一个与磁铁场相反的磁场，导致排斥。

这个观点部分正确。然而，区别在于法拉第定律的要求——感应电流需要一个闭合的电路。这就是有趣的地方：材料具有称为“库珀对”的某种微观结构。这些对由晶格振动（声子）在晶体结构内引起的吸引相互作用形成的一对电子组成（我完全不理解这些。我只是从wiki上复制的）。随着磁场的应用，这些库珀对开始旋转运动，就像小的闭合电路一样。因此，它们引发了感应电流，并在磁场方向产生排斥。重要的是，这些微小的库珀对相加，形成了磁场排斥的宏观效应，这种现象称为抗磁性。

### 抗磁性和超导的关系
虽然抗磁性在所有材料中都存在，但它的强度是不同的。在具有电阻的材料中，感应电流会衰减，以热量的形式耗散，令排斥力减弱至零。相反，没有电阻的材料允许不间断的电流流动。随着材料接近磁铁，电流增强，增强了排斥效应。当这种力等于重力时，就会发生悬浮。值得注意的是，在理论上，悬浮并不需要持续的能量输入。

然而，我查不到可以量化这种排斥力的明确的闭式数学方程，这种排斥力涉及到位置、重力和磁场。原因有很多，比如涉及到太多的因素，有些很难量化（材料性质），而且非线性相互作用。数值方法证明比追求公式更适合模拟这个复杂的过程。

超导性似乎不能保证磁悬浮必然发生，但它是磁悬浮的潜在条件。重要的是要认识到，磁悬浮本身并不能证明超导性的存在。这种现象可能来自不同的起源：超导性、磁性或强大的抗磁性。

值得注意的是，强大的抗磁性可能类似于迈斯纳效应，但是它是不同的。迈斯纳效应通过超电流维持悬浮。相反，强大的抗磁性中的感应电流会以热量的形式耗散。也许这种过程特别慢，但是最终，抗磁性的斥力会下降。这种区别强调了仅仅根据悬浮观察来判断超导，逻辑上是不可行的。

## 关于这个炒作
回到LK-99这种物质。

关于论文附带的照片引发了一些怀疑。在这张照片中，材料的一端接触到磁铁，这种外观看起来不像传统的悬浮。正如前面提到的，强大的抗磁性通常与迈斯纳效应非常相似，特别是在静态图像或短时间范围内。值得注意的是，虽然室温抗磁性非常令人印象深刻，但是单独的照片并不能确切地证明超导性。

另一个观点认为，即使不是超导性的指标，LK-99的性质也是令人印象深刻的，可能暗示着一种获得室温超导性的不同途径。然而，这里也有一个逻辑问题。对超导的探索并不是线性的过程；它不像攀登一座山那样，山顶是室温超导，而抗磁性是山腰的里程碑。相反，它更像是在迷宫中导航——显然有希望的道路可能是死胡同。事实上，假如说这种材料最多也就只能做到强抗磁性呢？

我们再退一步，假设LK-99确实是超导，那么仍然存在一个重大问题。论文提到方法涉及到材料融合和烧制，然后在产物中筛选出超导性的碎片。这种方法在大规模生产中几乎不起作用。在实际情况中，持续的大规模生产和良好的质量标准是至关重要的。虽然这篇文章在实验室环境中具有潜力，但是他的应用范围也就仅限于这些边界之内。

## 结论
我需要重新强调，这篇文章的目的不是为了验证或者否定论文中提出的观点。我没有资格这样做；我的目的仅仅是为了理解背后的科学原理。我提出的解释是故意简化的，甚至可能包含错误。它不应该被视为一篇科学文章。

我必须表达我对这个问题的炒作的保留意见。虽然外行人参与科学讨论是值得称赞的，但是理性和负责任的态度也至关重要。盲目地支持或者反对炒作，尤其是在没有掌握背后的科学的情况下，会使其变成更像政治或者宗教——就像为体育队加油一样。这不是一种值得骄傲的立场。

然而，一些人可能有更多的利益。很多公司，包括一些跟超导几乎没深恶关系的概念股价格都经历了极端的波动。虽然有些人可能从中获利，但大多数人可能没有。值得注意的是，积极捍卫这篇论文的人可能是在试图保护他们的投资。这是一种错误的策略。试图通过社交媒体帖子来影响股价是一种妄想。大多数股票交易不是由人类执行的，而是由强大的计算机使用复杂的算法执行的。这些系统可能在人们甚至没有意识到之前就已经评估和计算了价格波动，使用了止盈和止损参数。当新闻爆发，人们争先恐后地追涨时，计算机通过向这些人出售来获利，有效地利用了他们的热情。

总之，这篇论文的信息很清楚——抵制炒作的冲动。