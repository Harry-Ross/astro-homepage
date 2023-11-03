---
draft: true
title: Llama Chat
tags: [projects, code, javascript, nodejs, electron, html]
date: 2023-10-24
description: Llama chat - a Next.js experiment using Llama 2!
---

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
