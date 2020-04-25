---
date: '2020-04-25'
featuredImage: '../assets/images/whiteboard-guy-planning.jpg'
spoiler: Create variables and methods that explain the purpose of your code.
title: Explanatory variables
---

## What is an Explanatory Variable

An explanatory variable is a variable created with the solely purpose of making your code more readable. It might not be necessary to make your code work but essential to convey its meaning.

## How to use them

Consider the code below:

#### Without explanatory variables

```jsx
if (window.location.hash === '#_=_') {
  window.history.replaceState(null, null, ' ');
}
```

If you are familiar with the `window` api, you will probably understand what the code above does. But you might not understand why it was implemented.

#### With explanatory variables and methods

```jsx
const FACEBOOK_REDIRECT_HASH = '#_=_';
const hasFacebookHashInUrl = window.location.hash === FACEBOOK_REDIRECT_HASH;

if (hasFacebookHashInUrl) {
  removeHashFromUrl();
}
```

Now we have an idea what the `#_=_` is and where it is coming from—seems to be specific to a page redirect from Facebook.

We can also tell straight away what was the intention behind `js±window.history.replaceState(null, null, ' ');`. We might not even need to go inside `js±removeHashFromUrl()` since we already know what it is doing by its name.

**Fun fact:** if I search for `FACEBOOK_REDIRECT_HASH` on Google, the first result will give me more context on it—while searching for `#_=_` gives me nothing.

**You could even go one step further and rewrite the code as:**

```jsx
if (hasFacebookRedirectHashInUrl()) {
  removeHashFromUrl();
}
```

Now the intention of the code is conveyed right away. If the reader cares about how the functions are implemented, he can go into them and read their content—but he doesn't **have** to.

## Why are explanatory variables and methods important

Explanatory variables are essential to make your code maintanable.

<details>
  <summary>By variables, I actually mean constants</summary>
  <p>I chose to use the word variable since it is more commonly used.</p> 
  <p>Very often constants are referred as variables when discussing code.</p>
  <p>Whether this is accurate or not, is a semantic detail and it does not matter in this context—discussing semantics is usually not effective.</p>
  <p>I do not remember the last time I created a variable when coding. A few years back I switched to only use constants and to not reassign values—as a personal preference.</p> 
  <p>I still call them variables just for <b>convenience sake</b>.</p>
</details>

### We read more than we write

Contrary to what people think, most of a programmers' time is spent reading code, rather than writing it.

When you start to pay attention to this you will notice that writing a new function or a new React component for example, really does not take much of your time.

Most of our time is spent reading and understanding the code that is already there—so you can design a new solution that will work with the current implementation.

> The ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code.
> ...Therefore, making it easy to read makes it easier to write.
> </br>—Robert C. Martin

### If only you can understand it, only you can maintain it

Writing code that only you can understand brings no value to your project or your team. In fact, it hurts more than it helps.

Unreadable code will eventually need to be rewritten so other people can understand it. If that code is untested, it will take a significant amount of time to refactor—way longer than just making it readable in the first place.

> It is better to have readable code that does not work, than unreadable code that works.
> </br>—Robert C. Martin

If it doesn't work but I can read it, I can fix it. I can understand your initial intent and it will be easy to account for the use case you missed.

### You will forget about code that you write

Even if you are the only person working in a project, it is important to make it readable.

You might understand what your code does now, but in a year or just a few months later, you will forget you even wrote that code.

Chances are, you won't understand the code you wrote yourself.

## Conclusion

- Explanatory variables are not essential to make your code work, but necessary to make it maintanable.
- You can use explanatory variables to easily convey the intent of your code
  - They can sometimes be used as a replacement to code comments.
- You can also create smaller methods with descriptive names to achieve the same results.
