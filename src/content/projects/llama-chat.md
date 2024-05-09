---
name: Llama Chat
subtitle: A local LLM Next.js experiment using Llama 2
date: "2024-05-09"
description: Llama Chat is a Next.js app router-based experiment that uses Llama 2 to run an LLM locally. Alongside this, it has local storage of messages and conversations using SQLite. 
thumbnail: "/images/llama-chat/screenshot.png"
---

![Figure: Llama Chat screenshot](/images/llama-chat/screenshot.png)

Llama Chat is a Next.js experiment using Llama 2 that allows you to run the LLM locally, with local storage of messages in SQLite. It uses ShadCN UI for the componenets used in the chat interface. It was born from the idea that I wanted a way to run an LLM locally without having to use ChatGPT or something similar. 

## GitHub 

You can find the project on GitHub at [https://github.com/Harry-Ross/llama-chat-nextjs](github.com/Harry-Ross/llama-chat-nextjs). 

## Features 

* **Local LLM** - run the LLM locally on your machine using `node-llama-cpp`.
* **Local storage** - messages are stored locally in SQLite so you don't have to worry about cloud storage. 
* **Conversations** - there are separate conversations that can be created if you want a new context for the LLM.
* **Theming** - there is a dark/light mode toggle that can be used to change the theme.

## Architecture

The project is built using: 

* [**Next.js**](https://nextjs.org/) - the app router was used as I wanted a project to play around with the new Next.js features like Server Actions and React Server Components. I already have spent a lot of time working with Next.js and I find it to be a really great framework for building robust and performant web applications.  
  * Note: I experienced a lot of issues working with Next.js and `node-llama-cpp` because Next.js API routes spun up a new instance of the model every time a request was made, which maxed out my GPU memory. I had to use a workaround to get it to work, which was to use a singleton pattern to ensure that only one instance of the model was created.
* [**node-llama-cpp**](https://withcatai.github.io/node-llama-cpp/) - a really fantastic library that exposes a lot of the APIs within llama-cpp with support for CUDA and Metal. 
* [**SQLite**](https://www.npmjs.com/package/better-sqlite3) - this was used to store messages and conversations locally in an simple fashion. I found SQLite to be really lightweight and easy to use, with all your messages stored in a single file. 
* [**Tailwind**](https://tailwindcss.com/) - my favourite way of styling web apps, super quick to edit UIs once you get up and running with it. 
* [**shadcn/ui**](https://ui.shadcn.com/) - this was used to have a really great set of usable UI components that make it super easy to implement dark mode and theming options, along with being based on the fantastic accessible Radix UI component library.

## Potential Expansion

I believe that while this is a great way for me now to run an LLM locally, it could be run in a cloud environment using Cloudflare Workers AI, as they have a very generous free tier for running Llama. It may also be good to introduce authentication and a better way of storing messages and users using an ORM like Prisma to store it in a database. 

Adding more RAG features like embeddings-based search or function calling could also be a great addition to the project.

## Configuration 

**Note:** This may not be applicable in the latest updates of `node-llama-cpp`. 

In compileLlamaCpp.js, I had to change:

```js
if (cuda && process.env.CUDA_PATH != null && await fs.pathExists(process.env.CUDA_PATH))
            cmakeCustomOptions.push("CMAKE_GENERATOR_TOOLSET=" + process.env.CUDA_PATH);
```

to:

```js
if (cuda && process.env.CUDA_PATH != null && await fs.pathExists(process.env.CUDA_PATH))
            cmakeCustomOptions.push("CMAKE_VS_PLATFORM_TOOLSET_CUDA=" + process.env.CUDA_PATH);
```

I found this at the documentation here: https://cmake.org/cmake/help/latest/variable/CMAKE_VS_PLATFORM_TOOLSET_CUDA.html