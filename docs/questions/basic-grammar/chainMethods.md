
> 实现类似Jquery的链式调用
> 例如：$('#div').addClass('add-class')

----
johninch:


----
febcat:


----
dannisi:


----
Xmtd:

```js
  let jq = function (selector) {
    return new jq.prototype.init(selector);
  };

  jq.prototype.init = function (selector) {
    this.el = document.querySelector(selector);

    return this;
  };

  jq.prototype.on = function (name, fn) {
    this.el.addEventListener(name, fn);

    return this;
  };
  jq.prototype.attr = function (name, value) {
    if (!value) {
      return this.el.getAttribute(name);
    } else {
      this.el.setAttribute(name, value);
      return this;
    }
  };
  jq.prototype.init.prototype = jq.prototype;

  // jq('#test').on('click', function () {}).attr('title', '1111')
```



----
niannings:


----
最后总结：