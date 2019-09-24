
> 实现一个方法get(target, path)，深度查询一个数组或者对象中的值(数组和对象不止一层嵌套)，当这个值为null undefined 空数组 空对象的时候默认返回undefined，如有这个值则返回这个值。

```javascript
// example
let getArr = [
    0,
    [
      0,
      [0 ,1 ,2],
      {a: 'a', b: 'b', c: [0, 1, 2], d: [], e: {}},
      {}
    ]
  ]

let getObj = {
    a: 'a',
    b: [
        0,
        [0, 1, 2],
        {a: 'a', b: 'b', c: [], d: {}},
    ]
}

/**
 * @param {Object} target 遍历的数组或对象
 * @param {String|Array} rule 查询路径
 * @param {Any} defalutBack 自定义返回值
*/
function get(target, rule, defalutBack) {
    ...
}

// hope
console.log('get=>getArr|[1][2].e', get(getArr, '[1][2].e')) // undefined
console.log('get=>getArr|[1][2].d', get(getArr, '[1][2].d')) // undefined
console.log('get=>getArr|[1][2].c', get(getArr, '[1][2].c'), get(getArr, [1, 2, 'c'])) // [0, 1, 2] [0, 1, 2]
console.log('get=>getObj|b[2].c', get(getObj, 'b[2].c')) // undefined
console.log('get=>getObj|b[2].d', get(getObj, 'b[2].d')) // undefined
console.log('get=>getObj|b[1][1]', get(getObj, 'b[1][1]'), get(getObj, ['b', 1, 1], )) // 0 0

```
----
johninch:


----
febcat:


----
dannisi:


----
Xmtd:
```js
  function get(target, rule, defaultBack) {
    let ruleType = typeof rule === 'string' ? 'string' : Array.isArray(rule) ? 'array' : 'noSupport';

    if (ruleType === 'noSupport') {
      throw Error('no support rule');

      return;
    }

    let result = target;

    let nameArr = ruleType === 'string' ? rule.replace(/(\[|\]|\.)/g, ',').split(",").filter((item) => item) : rule;

    for (let i = 0; i < nameArr.length; i++) {
      if (result[nameArr[i]] !== null && result[nameArr[i]] !== undefined) {
        result = result[nameArr[i]];
      } else {
        result = defaultBack;
        break;
      }
    }

    return result;

  }
```



----
niannings:


----
最后总结：