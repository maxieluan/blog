---
title: "An overview of Java, Node and golang"
date: 2023-07-29T01:25:32+08:00
draft: false
tags: ["node.js", "golang", "java"]
categories: ["Technology Overview"]
description: "This post is to compare Java, Node and golang, in a sense of concurrency, and the usage."
author: "Max"
keywords: ["Tech Stack Overview", "Java", "Node.js", "golang", "Concurrency model"]
featured: 
  flag: true
  weight: 1
---
## Introduction
It's not uncommon to encounter diverse opinions and claims about the capabilities of different technologies on the internet. Recently, I stumbled upon an interesting experiment conducted by a programming learner. With a simple server program designed to respond to any request with a "Hello World" message, he decides to stress test the program using both Java and Node.js.

Suprisingly, the learner emerged with a conclustion that defied the widely accepted belief about Node.js's capability to handle an incredible amount of concurrency. Asserting that Node.js failed to live up to its reputation, he is convinced that Node.js's high concurrency is nothing but a hype. 

As a proponent of Node.js and advocate of balanced assessment, I feel compelled to investigate and challenge the assertion. With some findings, I hope to present a comprehensive perspective that illuminates the strengths and weaknesses of each technology.

## Understanding the Challenge of Concurrency
When it comes to handling high concurrency, servers face the task of managing numerous simultaneous connections, each vying for resources and attention. As the connections multiply, the server's ability to process requests comes under strain, potentially leading to performance degradation of even complete failure. 

The key lies in identifying the critical resources the server relies upon to fulfill its tasks efficiently. While the specific resource depeltion may vary depending on application's architecture, some common resources that are often affected are as follows:

1. CPU utilization
2. Connection pool
3. Memory
4. Threads and processes

In multithreaded or multiprocess applications, each concurrent connection often corresponds to a thread or process. As concurrency intensifies, the server may struggle to create any manage more threads or processes, leading to a bottleneck.

Different programming models interact with these ciritcal resources in different ways, at different speed. When one of them is the bottleneck, the performance of the entire application is affected.

In the following section, I will discuss the concurrency model of most commonly used servers, containers and programming languages, and how they interact with the critical resources.

## languages
### Java
Java, renowned for its robutness and versatility, operates within a virtual machine called JVM. The JVM provides a platform-independent environment where Java bytecode can be compiled and executed，allowing Java to run on any platform that supports JVM.

In server-side programming, Java application often runs in servlet containers. Apache Tomcat is a very popular choice. Traditionally, Tomcat manage connection through a thrad pool, where each incoming connection is served by a separate thread. However, the number of threads in the pool is not ininite. The maximum number of threads is determined by the configuration of the thread pool. When the number of incoming connections exceeds the maximum number of threads, the server will queue the connections until a thread becomes available. If the queue is full, the server will reject the connection.

As the thread-pool size increases to accommodate more connections, certain limitation will emerge. Each thread consumes memory. A substantial increase in the thread pool can escalate JVM's memory footprint. In scenarios where application is light on computation, the server might encounter an OutOfMemoryError before it reaches a CPU bottleneck.

### Node.js' Event-Driven Concurrency Model
Node.js sets itself apart from traditional server-side programming languages with its single-threaded, event-driven concurrency model. This distinctive approach revolves around a non-blocking I/O paradigm, allowing Node.js to handle multiple concurrent requests efficiently.

When requests arrive in a Node.js application, they are attached with callbacks and placed into a queue. The event loop then processes these requests one by one. Asynchronous actions like file access, network calls, or database operations are also handled in a non-blocking manner, enabling the event loop to handle other requests while waiting for callbacks from these operations.

Unlike traditional multithreaded models, Node.js does not spawn additional threads for each connection, which helps conserve memory and allows the application to make the most of the CPU's processing power without being constrained by thread management overhead.

Modern servers often have multi-core, multi-threaded CPUs. Node.js' single-threaded model enables developers to deploy multiple Node.js instances, each handling a separate core, effectively utilizing the computational power of multi-core CPUs.

While Node.js' event-driven model offers significant advantages in handling high concurrency, it's essential to recognize it's limitations as well. As emphasized, Node.js may not be as efficient as other models when dealing with CPU intensive tasks that demands too much processing time. If every task requires CPu to run for a long period involving minimal I/O, the event loop can be blocked. It wouldn't be as efficient as a multithreaded model.

### golang
In server-side programming, Golang stands out as a powerful contender that we can not ignore. It has a unique concurrency model that is different from both Java and Node.js. It's not like singled threaded Node.js, nor is it like multithreaded Java. It's something in between.

Golang uses a concept called goroutine to handle concurrency. A goroutine is a lightweight thread managed by the Go runtime. Unlike a thread, a goroutine is not bound to a specific OS thread. Instead, it can be multiplexed to run on a small number of OS threads. This distinctive N:N scheduling model allows goroutines to be created and destroyed with minimal overhead, achieving a high degree of concurrency without the performance penalty of thread management. 

Golang, being a statically typed language, is also compiled into machine code, which is more efficient than Java's bytecode. It also has a garbage collector that manages memory automatically, which is similar to Java. It offers a exceptional performance in handling CPU intensive tasks, sometimes as good as C or C++. 

## Why don't we use it in every project?
### Golang
Golang's speed, efficiency, and performance leads one to wonder why it's not the go-to language for every project. While golang is possess many advantages, there are also considerations that may deter developers from adopting it.

One is that, the language is its complexity. Unlike some other languages, Golang requires to manage goroutines and syncronization manually. It doesn't have generics or exceptions. The arrays are fixed length. That means the developer needs to manually manage its size. These are the byproduct of its performance. It's a double edged sword. 

For commercial projects, where speed-to-market is a priority, the complexity of Golang may be a deterrent. To achieve a agile development cycle, the employers might need to hire more experienced developers, which can be costly. In comparison, choosing other less efficient languages might only require a few more servers to handle the same amount of traffic, which is a more cost-effective solution.

This is why Golang is usually used in specific scenarios, such as high-performance applications, or applications that require high concurrency. For example, containers like Docker and Kubernetes are written in Golang. Some companies use golang to write critical systems that doesn't require frequent updates.

### Java
Java has its dominant position in the enterprise world and major internet companies. 

First, Java's long and storied history has contributed to its prevalence in the enterprise world. Java has a rich ecosystem of libraries and frameworks to develop on top of. These codebase and existing applications create a legacy effect, making it impractical to switch to another language. 

Enterprises favor control and predictability. By running Java applications within the JVM, they gain control over the hardware and software specifications required to run their applications optimally. They know exactly how much hardware is required to support their user base optimally. 

### Node.js
It's no doubt that, the number of Javascript devlopers might be the biggest reason for Node.js' popularity. You can find libraries for almost anything. Making it idea for rapid prototyping and development. 

## Conclustion
These days, with the rise of mirco service, you might find some services developed by javascript, some by Java, some by PHP, or even by Erlang. They all run in containers and orchestrators written by Golang. 

It's not about which language is better. It's about which language is better for the specific scenario.