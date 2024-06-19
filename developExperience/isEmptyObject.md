# 使用方法

```js
const a = Symbol();
const obj1 = {
  [a]: 1,
};
const obj2 = { b: 2 };
const obj3 = {};
Object.defineProperty(obj3, "a", {
  value: 1,
  enumerable: false,
});
const obj4 = {};

console.log(Reflect.ownKeys(obj1).length === 0); // false
console.log(Reflect.ownKeys(obj2).length === 0); // false
console.log(Reflect.ownKeys(obj3).length === 0); // false
console.log(Reflect.ownKeys(obj4).length === 0); // true
```

> [详细介绍](https://juejin.cn/post/7275220813619298367)
