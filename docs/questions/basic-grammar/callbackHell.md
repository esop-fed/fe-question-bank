
> 解决回调地狱：实现一个函数，可以将异步函数转化成promise函数。

----
johninch:


----
febcat:

```javascript
const promisify = (fuc) => {
  return (file, dataBuffer) => {
    return new Promise((resolve, reject) => {
      if (dataBuffer) { // write
        fuc(file, dataBuffer, err => {
          if(err) {
            console.log('write error', err)

            throw error
          } else resolve()
        })
      } else { // reade
        fuc(file, (err, data) => {
          if (err) {
            console.log('read error', err)

            throw error
          } else resolve(data)
        })
      }
    })
  }
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