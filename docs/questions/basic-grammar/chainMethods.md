
> 实现类似Jquery的链式调用
> 例如：$('#div').addClass('add-class')

----
##### johninch:
原理：其实链式调用就是让一个类的每个方法都返回this值，从而达到链式调用；
步骤：首先创建一个构造函数，把那些元素作为数组保存在一个实例属性中，并把所有定义在构造器函数上的prototype属性指向对象中的方法都返回用以调用方法的那个实例的引用，那么它就具有了进行链式调用的能力。

```js
function JQuery(selector) {
    this.elements = document.querySelectorAll(selector);
}

JQuery.prototype = {
    eq: function(index) {
        this.elements = [this.elements[index]]
        return this;
    },
    css: function(prop, value) {
        this.elements.forEach(function(el) {
            // 动态设置属性
            el.style[prop] = value;
        })
        return this;
    },
    show: function() {
        this.css('display', 'block')
        return this;
    },
}

window.$ = function(selector) {
  return new JQuery(selector);
}

$('div').eq(0).css('width', '200px').show();
```
这段代码很明显在prototype上的三个函数都返回了this，在函数中实现对应的功能也是直接使用this来获取值，然后修改this中的值再返回this，这样在下次调用的时候还是JQuery对象，从而实现了链式调用。既然函数都是在原型链上，那么肯定需要创建一个对象才能去调用函数吧，而我们并没看到new JQuery，而且也没有看见$符号，那怎么才能使用呢。

说到链式调用，还能想到curry：
```js
function add(num){
    var sum = 0
    sum = sum + num
    var tempFun = function(numB) {
        if(arguments.length === 0) {
            return sum
        } else {
            sum = sum + numB
            return tempFun
        }

    }
    
    tempFun.valueOf = function() {
        return sum
    }
    tempFun.toString = function() {
        return sum + ''
    }
    
    return tempFun
}
```
https://segmentfault.com/q/1010000004342477

----
febcat:


----
dannisi:


----
Xmtd:



----
niannings:


----
最后总结：