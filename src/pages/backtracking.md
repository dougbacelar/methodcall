---
date: '2021-02-25'
featuredImage: '../assets/images/walking-down-stairs.jpg'
spoiler: What are they and what are they used for
title: Backtracking algorithms
---

## What is Backtracking

Backtracking is a programming technique usually used to process all possible permutations of an input.

The algorithm recurses until it finds a possible solution, if the solution is invalid or if there are more solutions to be found, the algorithm `backtracks` and tries a different path.

Backtracking is usually a very slow technique, therefore it is important to pay close attention to the size of the input.

Not to be confused with [BackTrack](https://www.backtrack-linux.org/), previous version of [Kali Linux](https://www.kali.org/).

## Examples

#### Given a string `s`, print all its subsets

**Time complexity `O(2^n)`**
**Space complexity `O(2^n)`**

Each element can either be absent or present, thus the complexity `O(2^n)`

```js
const subsets = (s) => {
  const letters = []; // O(n)
  const allSubsets = []; // O(2^n)

  const backtrack = (start = 0) => {
    allSubsets.push(letters.join(''));

    for (let i = start; i < s.length; i++) {
      letters.push(s[i]);
      backtrack(i + 1);
      letters.pop();
    }
  };
  backtrack();
  console.log(allSubsets);
};

subsets('rick'); // (16) ["", "r", "ri", "ric", "rick", "rik", "rc", "rck", "rk", "i", "ic", "ick", "ik", "c", "ck", "k"]
```

#### Given a string `s`, print all possible permutations by rearranging its letters in any order

**Time complexity `O(N!)`**
**Space complexity `O(N!)`**

```js
const permutations = (s) => {
  const taken = new Array(s.length).fill(false); // keeps track of taken letters O(n)
  const permutation = []; // keeps transient word letters O(n)
  const allPermutations = []; // there are N! permutations

  const backtrack = (index = 0) => {
    if (index === s.length) {
      const word = permutation.join(''); // .join is O(n)
      return allPermutations.push(word);
    }

    for (let i = 0; i < s.length; i++) {
      // loop through all letters O(n)
      if (taken[i]) continue; // prevents taking duplicates
      taken[i] = true;
      permutation.push(s[i]);

      backtrack(index + 1); // for each letter we call backtrack again

      taken[i] = false;
      permutation.pop();
    }
  };
  backtrack();
  console.log(allPermutations);
};

permutations('hey'); // (6) ["hey", "hye", "ehy", "eyh", "yhe", "yeh"]

permutations('boat'); // (24) ["boat", "bota", "baot", "bato", "btoa", "btao", "obat", "obta", "oabt", "oatb", "otba", "otab", "abot", "abto", "aobt", "aotb", "atbo", "atob", "tboa", "tbao", "toba", "toab", "tabo", "taob"]
```
