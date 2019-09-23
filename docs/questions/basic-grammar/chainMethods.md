
> 实现类似Jquery的链式调用
> 例如：$('#div').addClass('add-class')

----
johninch:


----
febcat:


----
dannisi:
``` javascript
var $ = function(id) {
	var dom = document.getElementById(id);
	return new $2(dom);
}

var $2 = function(dom) {
	this.dom = dom
};

$2.prototype = {
	addClass : function(className){
		if(this.dom){
			this.dom.setAttribute('class', className)
		}
		return this
	}
}

```


----
Xmtd:



----
niannings:


----
最后总结：