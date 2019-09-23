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


----
##### 最后总结：
