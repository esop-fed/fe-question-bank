
> 数组扁平化： [1, [2, [3, 4]]] =>> [1, 2, 3, 4]

----
##### johninch:
>> 方法一：常规递归：

```js
let newArr = []
function flatten(arr) {
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }
}

flatten([1, [2, [3, 4]]])
console.log(newArr)
```

以上递归使用了全局变量，递归函数应该是完整功能隔离的，下面是优化后的递归:

```js
function flattenArray(arr) {
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flattenArray(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr
}
flatten([1, [2, [3, 4]]])
```

使用reduce迭代器简化上述递归方法:
```js
function flatten(arr) {
    return arr.reduce((prev, item) => {
        return prev.concat(Array.isArray(item) ? flatten(item) : item)
    }, [])
}
```

>> 方法二：使用ES6扩展运算符（一次只能展开一层）

```js
function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

flatten([1, [2, [3, 4]]])
```

>> 方法三：由于元素均为数字，因此可使用隐式类型转换

```js
[1, [2, [3, 4]]].toString().split(',').map(i => Number(i))
// toString也可以替换成join方法，也可以达到隐式类型转换的目的
```

----
##### febcat:


----
##### dannisi:


----
##### Xmtd:



----
##### niannings:


----
##### 最后总结：