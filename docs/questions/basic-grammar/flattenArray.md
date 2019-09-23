
> 数组扁平化： [1, [2, [3, 4]]] =>> [1, 2, 3, 4]

----
johninch:


----
febcat:


----
dannisi:
* 1. 使用ES6 flat方法
``` javascript
[1, [2, [3, 4]]].flat(Infinity)

```
* 2. 使用Generate函数语法 实现flat的功能
``` javascript
const arr = [1, [2, [3, 4]]];
const flatCopy = function* (a) {
	if (!Array.isArray(a)){
		return false;
	}

	const len = a.length;
	for (let i=0; i < len; i++){
		const item = a[i];
		if (typeof item === 'number'){
			yield item
		} else {
			yield* flatCopy(item)
		}
	}
}

const arr2 = [];

for(let j of flatCopy(arr)){
	arr2.push(j)
}

```

----
Xmtd:



----
niannings:


----
最后总结：