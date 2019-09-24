> 实现深拷贝，尽可能完美实现
----
johninch:


----
febcat:


----
dannisi:


----
Xmtd:
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
niannings:


----
最后总结：
