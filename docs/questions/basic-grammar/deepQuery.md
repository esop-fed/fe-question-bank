
> 实现一个方法get(target, path)，深度查询一个数组或者对象中的值(数组和对象不止一层嵌套)，当这个值为null undefined 空数组 空对象的时候默认返回undefined，如有这个值则返回这个值。参照[lodash/._get](https://www.lodashjs.com/docs/latest#_getobject-path-defaultvalue)

```javascript
// example
let getArr = [0, [0, [0, 1, 2], {a: 'a', b: 'b', c: [0, 1, 2], d: [], e: {}}, {}]]

let getObj = {
    a: 'a',
    b: [0, [0, 1, 2], {a: 'a', b: 'b', c: [], d: {}},]
}

/**
 * @param {Object} target 遍历的数组或对象
 * @param {String|Array} rule 查询路径
 * @param {Any} defaultBack 自定义返回值
*/
function get(target, rule, defaultBack) {
    ...
}

// hope
console.log('get=>getArr|[1][2].e => ', get(getArr, '[1][2].e')) // undefined
console.log('get=>getArr|[1][2].d => ', get(getArr, '[1][2].d')) // undefined
console.log('get=>getArr|[1][2].c => ', get(getArr, '[1][2].c'), get(getArr, [1, 2, 'c'])) // [0, 1, 2], [0, 1, 2]
console.log('get=>getObj|b[2].c => ', get(getObj, 'b[2].c')) // undefined
console.log('get=>getObj|b[2].d => ', get(getObj, 'b[2].d')) // undefined
console.log('get=>getObj|b[1][1] => ', get(getObj, 'b[1][1]'), get(getObj, ['b', 1, 1], )) // 1, 1

```
----
##### johninch:


----
##### febcat:

```javascript
const get = (obj, path, defaultBack= undefined) => {
    if (typeof obj !== 'object') {
        console.error(`get: require object, but ${typeof obj}`)
        return defaultBack
    }

    const rule = Array.isArray(path) ? path.join(',').replace(/\,/g, '.') : path
    const preRule = rule.replace(/\[(\d+)\]/g, (match, $1, index) => index ? '.' + $1 : $1).split('.')
    const nextRule = preRule.slice(1).join('.')
    const key = preRule[0]

    return obj.hasOwnProperty(key)
        ? nextRule
        ? get(obj[key], nextRule)
        : /(\[\])|(\{\})/g.test(JSON.stringify(obj[key]))
            ? defaultBack
            : obj[key]
        : defaultBack
    }
}
```
----
##### Caleb:
``` javascript
var IsEmptys = value => {
  if(value === undefined || value === null || typeof value === 'object' && (Object.keys(value) && Object.keys(value).length === 0 || value.length === 0)){
    return true
  }
  return false
}

function get(target, rule){
  const formatRule = typeof rule === 'string' ? rule.replace(/\[|\]|\./g, '').split('') : rule;
  const len = formatRule.length;
  const returnValue = target[formatRule[0]];
  if(IsEmptys(returnValue)){
      return undefined;
  }

  if(len === 1){
      console.log('ooooo', returnValue)
      return returnValue
  }

  formatRule.shift();
  get(returnValue, formatRule);

}

```

----
##### Xmtd:



----
##### niannings:


----
##### 最后总结：