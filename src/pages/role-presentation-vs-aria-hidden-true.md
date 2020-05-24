---
date: '2020-05-24'
featuredImage: '../assets/images/squirrel-hiding-behind-leaves.jpg'
spoiler: How to hide content from assistive technologies
title: Difference between role="presentation" and aria-hidden="true"
---

## What are they

`role="presentation"` and `aria-hidden="true"` are used to hide content from assistive technologies, but they are slightly different.

**TLDR;** Use `role="presentation"` when you only want to hide semantics and `aria-hidden="true"` when you want to hide everything.

## Presentation role

Setting `role="presentation"` in an element, will convey that the element and all its children should have its HMTL semantics ignored. But the content will **not** be ignored

On the example below, I am using a table for layout(presentation) purposes--therefore the html semantic is not correct and we want to tell assistive technologies that.

```html
<table role="presentation">
  <tr>
    <td>Method Call</td>
    <td>My personal blog</td>
  </tr>
</table>
```

Note that, in the example above, the content inside the table would still be considered. `Method Call` and `My personal blog` would not be ignored, but they wouldn't be treated as table cells.

## aria-hidden

Setting an element as `aria-hidden="true"` will hide it and all its children from the accessibility tree.

```html
<div aria-hidden="true">
  nothing inside this div will be read by screen readers

  <p>this will also be ignored</p>
</div>
```

## Conclusion

- Both `role="presentation"` and `aria-hidden` should be used with caution.
- First consider refactoring the code so these attributes aren't needed and use them as a second option.
- Use `role="presentation"` when you only want to hide semantics and `aria-hidden="true"` when you want to hide everything
