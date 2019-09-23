
> 解决回调地狱：实现一个函数，可以将异步函数转化成promise函数。

----
johninch:


----
febcat:

```javascript
class Promise{
    constructor(proFunc) {
      this.proFunc = proFunc
    }

    static resolve = (res) => {
      return new Promise((resolve, reject) => {
        resolve(res)
      })
    }

    static reject = (err) => {
      return new Promise((resolve, reject) => {
        reject(err)
      })
    }

    static all = (proArr) => {
      return new Promise().all(proArr)
    }

    _resolve = (res) => {
      typeof this.successCBack === 'function' && this.successCBack(res)
    }

    _reject = (err) => {
      typeof this.failCBack === 'function' && this.failCBack(err)
    }

    then = (successCBack, failCBack) => {
      this.successCBack = successCBack || null
      this.failCBack = failCBack || null
      this.proFunc(this._resolve, this._reject)

      return this
    }

    catch = (failCBack) => {
      this.then(null, failCBack)
    }

    finally(defaultCB) {
      defaultCB()
    }

    all(proArr) {
      let errPromise = null
      let allSuccess = true

      proArr.some(item => {
        item.catch(err => {
          errPromise = item
          allSuccess = false

          return true
        })
      })

      return new Promise((resolve, reject) => {
        if (allSuccess) {
          resolve()
        } else reject(errPromise)
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