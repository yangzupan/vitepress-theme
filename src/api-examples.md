---
title: 开发环境搭建
author: 查尔斯
date: 2020/10/02 21:29
categories:
 - Java基础快速入门
tags:
 - Java
 - Java基础
 - JDK
 - 开发环境
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<pre>{{ theme }}</pre>


### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data

<div class= "language-json vp-adaptive-theme">
<button title="Copy Code" class="copy"></button>
<pre>{{ theme }}</pre>
</div>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
code
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
