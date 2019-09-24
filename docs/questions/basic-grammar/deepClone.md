> 实现深拷贝，尽可能完美实现
----
##### johninch:


----
##### febcat:

```javascript
const deepClone = (obj) => {
    if (typeof obj !== 'object') {
      console.error(`deepClone: require object, but ${typeof obj}`)
      return
    }

    if (Array.isArray(obj)) {
      return obj.reduce((arr, item) => {
        return arr.concat(item)
      }, [])
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



----
##### niannings:

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
```

----
##### 最后总结：
