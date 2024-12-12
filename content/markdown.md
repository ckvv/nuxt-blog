---
title: "Markdown 语法说明"
tags: ["markdown"]
date: "2024-12-11"
---

# 参数

参数设计参考 <https://gohugo.io/>

```yaml
---
# 文章标题
title: 标题
# 博客标签, 字符串数组
tags: [标签 1, 标签 2]
# 发布日期, 格式为YYYY-MM-DD
date: 2000-01-01
# 是否加密, 默认 false
encrypt: true
# 是否草稿, 默认为 false, 如果为 true, 文章将会渲染, 通过链接访会 404
draft: true

# 是否是篇博客, 默认为 true, 如果为 false 文件可以通过链接访问到但不会展示到页面
post: false
---

markdown 正文
```

## 其他

语法参考 <https://markdown-it.github.io/>
