
> 数组扁平化： [1, [2, [3, 4]]] =>> [1, 2, 3, 4]

----
johninch:


----
febcat:

```javascript
const flattenArray = array => {
  if (!/\[\S+\]/.test(JSON.stringify(array))) {
    return array
  }

  return [
    ...new Set(
      array.reduce((arr, item) => {
        return Array.isArray(item) ?  arr.concat(flattenArray(item)) : arr.concat(item)
      },[])
    )
  ]
}

```

----
dannisi:


----
Xmtd:



----
niannings:


----
最后总结：