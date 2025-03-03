# Semantic Square Root

Semantic Square Root is a lightweight js package that is able to represent a stored square root value as both a decimal value of the square root and a rationalized version with the square root symbol. E.g. "√3" and "1.732...".

## Installation

At this time Semantic Square Root is on [NPM](https://www.npmjs.com/) with planned [JSR](https://jsr.io/) support in the near future.

### NPM

```bash
npm install semantic-square-root
```

## Usage

In order to use this as a module it must first be imported.

```js
import sqrt from "semantic-square-root";
```

There are three ways to switch between the decimal and symbol representation of a defined square root:

### 1. Explicit Type Conversion

This method is the easiest to understand and creates readable code, however in a more complex context it is too long. Due to this, it is recommend only when using the value individually.

```js
const foo = sqrt(9);
console.log(String(foo)); // √9
console.log(Number(foo)); // 3
```

### 2. Implicit Type Conversion

This is the most common use of this package. Javascript will automatically convert the type of the value depending on the context around it. E.g. string concatenation v.s. addition.

```js
const bar = sqrt(9);
console.log(`${bar}`); // √9
console.log(bar + 0); // 3
```

### 3. Built-In Method

To support the above methods, the square root object contains two methods: `toString()` and `valueOf()`. Calling these two methods can result in the intended behavior, however it is longer and less readable than method one, so it is not recommended.

```js
const baz = sqrt(9);
console.log(baz.toString()); // √9
console.log(baz.valueOf()); // 3
```
