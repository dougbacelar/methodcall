---
date: '2018-12-26'
featuredImage: '../assets/images/basketball-court-sunset-beach.jpg'
spoiler: Learn what is React.lazy and start code-splitting your app for performance.
title: How to use React.lazy
---

`React.lazy` is here to help you code-split your app!

Available from the React [16.6.0 release](https://github.com/facebook/react/blob/master/CHANGELOG.md#1660-october-23-2018), it might just be what you need to significantly reduce your bundle size.

## What is a bundle

It is a common practice for JavaScript applications to **assemble all files into a single one, usually called bundle**. This bundle can then be served to the user to load the application.

![So what?](./gifs/so-what.gif)

As an application grows larger, so does its bundle size. For big applications, bundle sizes can get pretty large—significantly increasing loading times and worsening the user experience.

## What is Code-splitting

Code-splitting is a technique used to **delay the loading of non-critical resources** in order to increase the performance of an app.

![Show me what you got!](./gifs/show-me-what-you-got.gif)

#### Without code-splitting

The code below is an example of a component that is **not using lazy loading**.

`jsx±<MyComponent />` will be loaded together with the main bundle:

```jsx{2,6}
import React from 'react';
import MyComponent from './MyComponent';

const App = () => (
  <div>
    <MyComponent /> // will be loaded with the main bundle
  </div>
);

export default App;
```

#### With code-splitting

Code-splitting with `React.lazy` looks something like this:

```jsx{2,6,7,8}
import React, { lazy, Suspense } from 'react';
const MyComponent = lazy(() => import('./MyComponent'));

const App = () => (
  <div>
    <Suspense fallback={'loading MyComponent'}>
      <MyComponent /> // will be lazy loaded
    </Suspense>
  </div>
);

export default App;
```

You will notice that virtually only 2 things have changed:

1. **The import**

   We use the `lazy` api in order to code split `jsx±<MyComponent />`. Its code **will not be included in the main bundle** and it will be automatically requested once the component is rendered.

2. **`jsx±<Suspense />` component**

   `jsx±<Suspense />` is a new component also introduced on the [16.6.0 release](https://github.com/facebook/react/blob/master/CHANGELOG.md#1660-october-23-2018). It basically "suspends" the rendering of a component until it is ready.

   In this case, it will display the fallback `'loading MyComponent'` until it finishes fetching the bundle for `jsx±<MyComponent />`.

## Conclusion

`React.lazy` and `jsx±<Suspense />` are great tools to help you have easy performance gains.

It should be fairly easy to determine what is needed to be loaded as part of the main bundle and what can wait.

It is very common for apps to load a lot of code in the main bundle that is never ran. This can now be easily mitigated with `React.lazy`.

Make sure to check out the [docs](https://reactjs.org/docs/code-splitting.html).
