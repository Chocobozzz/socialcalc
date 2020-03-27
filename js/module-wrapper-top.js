// Taken from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
// (c) by The UMD contributors
// MIT License: https://github.com/umdjs/umd/blob/master/LICENSE.md
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory.bind(root, this));
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory.call(root, this);
    } else {
        // Browser globals (root is window)
        root.SocialCalc = factory.call(root, this);
  }
}(this, function (window) {
  if (typeof alert !== 'function') {
    alert = function () {}
  }

  if (typeof document === 'undefined' || !document) {
    var Node
    Node = (function () {
      Node.displayName = 'Node'
      var prototype = Node.prototype, constructor = Node

      function Node (tag, attrs, style, elems, raw) {
        this.tag = tag != null ? tag : 'div'
        this.attrs = attrs != null
          ? attrs
          : {}
        this.style = style != null
          ? style
          : {}
        this.elems = elems != null
          ? elems
          : []
        this.raw = raw != null ? raw : ''
      }

      Object.defineProperty(Node.prototype, 'id', {
        set: function (id) {
          this.attrs.id = id
        },
        configurable: true,
        enumerable: true
      })
      Object.defineProperty(Node.prototype, 'width', {
        set: function (width) {
          this.attrs.width = width
        },
        configurable: true,
        enumerable: true
      })
      Object.defineProperty(Node.prototype, 'height', {
        set: function (height) {
          this.attrs.height = height
        },
        configurable: true,
        enumerable: true
      })
      Object.defineProperty(Node.prototype, 'className', {
        set: function ($class) {
          this.attrs['class'] = $class
        },
        configurable: true,
        enumerable: true
      })
      Object.defineProperty(Node.prototype, 'colSpan', {
        set: function (colspan) {
          this.attrs.colspan = colspan
        },
        configurable: true,
        enumerable: true
      })
      Object.defineProperty(Node.prototype, 'rowSpan', {
        set: function (rowspan) {
          this.attrs.rowspan = rowspan
        },
        configurable: true,
        enumerable: true
      })
      Object.defineProperty(Node.prototype, 'title', {
        set: function (title) {
          this.attrs.title = title
        },
        configurable: true,
        enumerable: true
      })
      Object.defineProperty(Node.prototype, 'innerHTML', {
        set: function (raw) {
          this.raw = raw
        },
        get: function () {
          var e
          return this.raw || (function () {
            var i$, ref$, len$, results$ = []
            for (i$ = 0, len$ = (ref$ = this.elems).length; i$ < len$; ++i$) {
              e = ref$[i$]
              results$.push(e.outerHTML)
            }
            return results$
          }.call(this)).join('\n')
        },
        configurable: true,
        enumerable: true
      })
      Object.defineProperty(Node.prototype, 'outerHTML', {
        get: function () {
          var tag, attrs, style, css, k, v
          tag = this.tag, attrs = this.attrs, style = this.style
          css = style.cssText || (function () {
            var ref$, results$ = []
            for (k in ref$ = style) {
              v = ref$[k]
              results$.push(k.replace(/[A-Z]/g, '-$&').toLowerCase() + ':' + v)
            }
            return results$
          }()).join(';')
          if (css) {
            attrs.style = css
          } else {
            delete attrs.style
          }
          return '<' + tag + (function () {
            var ref$, results$ = []
            for (k in ref$ = attrs) {
              v = ref$[k]
              results$.push(' ' + k + '="' + v + '"')
            }
            return results$
          }()).join('') + '>' + this.innerHTML + '</' + tag + '>'
        },
        configurable: true,
        enumerable: true
      })
      Node.prototype.appendChild = function (it) {
        return this.elems.push(it)
      }
      return Node
    }())

    document = {
      createElement: function (it) {
        return new Node(it)
      }
    }
  }
