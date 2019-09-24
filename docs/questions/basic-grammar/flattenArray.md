
> 数组扁平化： [1, [2, [3, 4]]] =>> [1, 2, 3, 4]

----
johninch:


----
febcat:


----
dannisi:


----
Xmtd:
```js
  // js
  function flatten(target, result = []) {
    target.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item, result);
      } else {
        result.push(item);
      }
    });

    return result;
  }
  
  // 方法
  target.flat(Infinity);

  // 类型改变了
  target.toString().split(',');
```



----
niannings:


----
最后总结：