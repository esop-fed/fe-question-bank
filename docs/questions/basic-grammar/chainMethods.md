
> 实现类似Jquery的链式调用
> 例如：$('#div').addClass('add-class')

----
johninch:


----
febcat:

```javascript
class Chain {
    constructor() {
      this.dom = document.createElement('div')
      this.fontColor = '#000'
      this.banckgroundColor = '#fff'
      this._init()
    }

    _init() {
      window.$ = this._$.bind(this)
    }

    _$(tagName) {
      if (!tagName) {
        console.error('Chain: tagName not found')
        return
      }

      const newDom = document.createElement(tagName)

      newDom.style.color = this.fontColor
      newDom.style.background = this.banckgroundColor
      newDom.style.width = 100 + 'px'
      newDom.style.height = 100 + 'px'
      this.dom = newDom

      return this
    }

    _setColor(c) {
      this.dom.style.color = this.fontColor =  c

      return this
    }

    _getColor() {
      return this.fontColor
    }

    color(c) {
      return c ? this._setColor(c) : this._getColor()
    }

    _setBackground(c) {
      this.dom.style.background = this.banckgroundColor = c

      return this
    }

    _getBackground() {
      return this.banckgroundColor
    }

    background(c) {
      return c ? this._setBackground(c) : this._getBackground()
    }

    show() {
      document.querySelector('body').appendChild(this.dom)

      return this
    }
  }

  new Chain()
  console.log('------ chain ------')
  console.log('chain=> show ', $('div').color('green').background('#000').show())
  console.log('chain=> color ', $('div').color())

```

----
dannisi:


----
Xmtd:



----
niannings:


----
最后总结：