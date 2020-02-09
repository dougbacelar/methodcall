---
date: '2020-02-09'
featuredImage: '../assets/images/japan-mount-fuji.jpg'
spoiler: React setState function is asynchronous, understand how to implement it correctly.
title: React won't update your state right away.
---

React's `setState` function is asynchronous and it can cause some subtle bugs, if implemented incorrectly.

## Updating state that depends on current state

Consider the code below:

```jsx{6}
function App() {
  const [counter, setCounter] = useState(0);

  React.useEffect(
    () => {
      console.log('counter is now: ' + counter);
    },
    [counter]
  );

  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
        setCounter(counter + 1);
        setCounter(counter + 1);
      }}>
      Increase counter by 3
    </button>
  );
}
```

What do you think the console output will be after we click that button? What is the value of `counter`?

**Output:**

```jsx
// counter is now: 1
```

Even though we called `setCounter` three times, the value of `counter` is still `1`, why is that?

Turns out that setting the state in React is an asynchronous task and it won't be resolved straight away.

So in this example, by the time the last setCounter is called, the state has not been updated yet.

```jsx
 <button
    onClick={() => {
      setCounter(counter + 1); // I haven't finished yet, counter = 0
      setCounter(counter + 1); // I haven't finished yet, counter = 0
      setCounter(counter + 1); // Alright, I will also update counter from 0 to 1
    }}>
```

So how can we update the state multiple times, and prevent the issue above from happening?

A possible solution would be to use the updater function argument, this allow us to make sure we are using the most up-to-date `counter` value when React decides to update it:

```jsx
 <button
    onClick={() => {
      setCounter(currentCounter => currentCounter + 1);
      setCounter(currentCounter => currentCounter + 1);
      setCounter(currentCounter => currentCounter + 1);
    }}>
```

**Output:**

```jsx
// counter is now: 3
```

Now counter has the correct value--`3`. But why is the `console.log` only called once, why don't we see `2` and `3`? That is because sometimes React will defer and batch multiple state updates into a single one. This caused our `useEffect` hook to be called only once.

You usually won't need to worry about this behaviour, if you opt to use the updater function pattern.

A good rule of thumb is: [If the next state depends on the current state, use the update function form of `setState`](https://reactjs.org/docs/react-component.html#setstate)

## Using new state after update

This asynchronous nature of `setState` might also cause another similar issue, consider the code below:

```jsx
<button
  onClick={() => {
    setCounter((currentCounter) => currentCounter + 1);
    sendCounterValueToServer(counter); // Alright, I will send counter=0 to the server
  }}>
```

If you understood the previous example, you can probably see whats wrong with this one.

Even though we are using the updater function, the operation is still asynchronous. Thus we are sending an outdated `counter` value to our server.

To fix this issue we can use the `setState` second callback argument:

```jsx
<button
  onClick={() => {
    setCounter((currentCounter) => currentCounter + 1, (newCounter) => {
      sendCounterValueToServer(newCounter); // newCounter = 1
    });
  }}>
```

The callback function in the second argument will get called **after** `React` has finished updating the state, preventing us from sending outdated data to our server.

## Conclusion

Don't expect React to update your state straight away, it will not!

If you want more in-depth information as to why `setState` is asynchronous, you can find it [here](https://github.com/facebook/react/issues/11527#issuecomment-360199710)
