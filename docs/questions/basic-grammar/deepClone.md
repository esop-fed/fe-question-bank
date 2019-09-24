> 实现深拷贝，尽可能完美实现
----
##### johninch:


----
##### febcat:

```javascript
const deepClone = obj => {
    if (typeof obj !== 'object') {
      console.error(`deepClone: require object, but ${typeof obj}`)
      return
    }

    if (Array.isArray(obj)) {
      return obj.reduce((arr, item) => return arr.concat(item), [])
    }

    return Object.entries(obj).filter(item => obj.hasOwnProperty(item[0])).reduce((newObj, [key, value]) => {
      newObj[key] = value

      return newObj
    }, {})
  }
```

----
##### Caleb:

``` javascript
function deepClone(origin){
	let target = Array.isArray(origin) ? [] : {};

	if (typeof origin !== 'object'){
		return origin;
	}

	for(let i in origin){
		if(origin.hasOwnProperty(i)) {
			if(typeof origin[i] === 'object' && origin[i] !== 'null'){
				target[i] = origin[i]
		} else {
				target[i] = deepClone(origin[i])
			}
		}
	}

	return target
}

```

----
##### Xmtd:
```js
function cloneDeep(target) {
    if (!target || typeof target !== 'object') {
        return target;
    }
    
    let result = Array.isArray(target) ? [] : {};
    
    for (let name in target) {
        if (target.hasOwnProperty(name)) {
            if (typeof target[name] === 'object') {
                result[name] = cloneDeep(target[name]);
            } else {
                result[name] = target[name]
            }
        }
    }
    
    return result;
}
```


----
##### niannings:

网上的深拷贝太多了，几乎如出一辙
不一样的深拷贝，原创！

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

const canTraverse = o => {
  const checkSet = new Set(['array', 'object']);

  return checkSet.has(getType(o));
};

const clone = obj => {
  let ret = new obj.constructor();
  let stack = [obj];
  let refMap = new WeakMap();
  let traverseObj;

  refMap.set(obj, ret);

  while (traverseObj = stack.pop()) {
    let entries = Object.entries(traverseObj);
    let len = entries.length;
    let cur = refMap.get(traverseObj);

    for (let i = 0; i < len; i++) {
      let [k, v] = entries[i];

      if(canTraverse(v) && !refMap.has(v)) {
        cur[k] = new v.constructor();

        refMap.set(v, cur[k]);
        stack.push(v);
      } else if (refMap.has(v)) {
        cur[k] = refMap.get(v);
      } else {
        cur[k] = v;
      }
    }
  }

  return ret;
}

// 测试用例
// 普通对象
let a = {
  b: {
    c: []
  },
  d: 1,
  e: /\w/,
  f: null,
  g: undefined,
  h: "hello niannings"
};

let b = clone(a);

console.log("---测试对象---");
console.log(a, b);
console.log("a === b: ", a === b); // false
console.log("a.b === b.b", a.b === b.b); // false
console.log("a.b.c === b.b.c", a.b.c === b.b.c); // false

// 测试循环引用

b.r = b;
b.s = b.b;

let bb = clone(b);

console.log("---测试循环引用---");
console.log(b, bb);
console.log("b.r === bb.r: ", b.r === bb.r);

// 数组
let c = [1, a, "hello"];

let d = clone(c);

console.log("---测试数组---");
console.log(c, d);
console.log("d === c: ", d === c);
console.log("c[1] === d[1]: ", c[1] === d[1]);
console.log("c[1].b === d[1].b: ", c[1].b === d[1].b);
```

----
##### 最后总结：
