/* Bootstrap 4 for IE8 - v4.5.0             */
/* https://github.com/coliff/bootstrap-ie8/ */

// create the nodeType constants if the Node object is not defined
if (!window.Node){
    var Node = {
        ELEMENT_NODE                :  1,
        ATTRIBUTE_NODE              :  2,
        TEXT_NODE                   :  3,
        CDATA_SECTION_NODE          :  4,
        ENTITY_REFERENCE_NODE       :  5,
        ENTITY_NODE                 :  6,
        PROCESSING_INSTRUCTION_NODE :  7,
        COMMENT_NODE                :  8,
        DOCUMENT_NODE               :  9,
        DOCUMENT_TYPE_NODE          : 10,
        DOCUMENT_FRAGMENT_NODE      : 11,
        NOTATION_NODE               : 12
    };
}

(function() {
    if (!Object.keys) {
        Object.keys = function(obj) {
            if (obj !== Object(obj)) {
                throw new TypeError('Object.keys called on a non-object');
            }

            var keys = [];

            for (var i in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, i)) {
                    keys.push(i);
                }
            }

            return keys;
        };
    }
}());

(function() {
    if (!Object.create) {
        Object.create = function(proto, props) {
            if (typeof props !== "undefined") {
                throw "The multiple-argument version of Object.create is not provided by this browser and cannot be shimmed.";
            }
            function ctor() { }
            ctor.prototype = proto;

            return new ctor();
        };
    }
}());

(function() {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function(fn, scope) {
            for(var i = 0, len = this.length; i < len; ++i) {
                fn.call(scope, this[i], i, this);
            }
        }
    }
}());

// ES 15.2.3.6 Object.defineProperty ( O, P, Attributes )
// Partial support for most common case - getters, setters, and values
(function() {
    if (!Object.defineProperty ||
       !(function () { try { Object.defineProperty({}, 'x', {}); return true; } catch (e) { return false; } } ())) {
        var orig = Object.defineProperty;
        Object.defineProperty = function (o, prop, desc) {
            // In IE8 try built-in implementation for defining properties on DOM prototypes.
            if (orig) { try { return orig(o, prop, desc); } catch (e) {} }

            if (o !== Object(o)) { throw TypeError("Object.defineProperty called on non-object"); }
            if (Object.prototype.__defineGetter__ && ('get' in desc)) {
                Object.prototype.__defineGetter__.call(o, prop, desc.get);
            }
            if (Object.prototype.__defineSetter__ && ('set' in desc)) {
                Object.prototype.__defineSetter__.call(o, prop, desc.set);
            }
            if ('value' in desc) {
                o[prop] = desc.value;
            }

            return o;
        };
    }
}());

(function() {
    if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
            if (typeof this !== "function") {
                // closest thing possible to the ECMAScript 5 internal IsCallable function
                throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                         ? this
                         : oThis,
                         aArgs.concat(Array.prototype.slice.call(arguments)));
            };

            fNOP.prototype = this.prototype;
            fBound.prototype = new fNOP();

            return fBound;
        };
    }
}());

(function() {
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(elt /*, from*/) {
            var len = this.length >>> 0;

            var from = Number(arguments[1]) || 0;
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0) {
                from += len;
            }
            for (; from < len; from++) {
                if (from in this && this[from] === elt) {
                    return from;
                }
            }

            return -1;
        };
    }
}());

(function() {
  if (!document.querySelectorAll) {
    document.querySelectorAll = function (selectors) {
      var style = document.createElement('style'), elements = [], element;
      document.documentElement.firstChild.appendChild(style);
      document._qsa = [];

      style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
      window.scrollBy(0, 0);
      style.parentNode.removeChild(style);

      while (document._qsa.length) {
        element = document._qsa.shift();
        element.style.removeAttribute('x-qsa');
        elements.push(element);
      }
      document._qsa = null;
      return elements;
    };
  }
}());

(function() {
  if (!document.querySelector) {
    document.querySelector = function (selectors) {
      var elements = document.querySelectorAll(selectors);
      return (elements.length) ? elements[0] : null;
    };
  }
}());

(function() {
  var _slice = Array.prototype.slice;
  Array.prototype.slice = function() {
    if(this instanceof Array) {
      return _slice.apply(this, arguments);
    } else {
      var result = [];
      var start = (arguments.length >= 1) ? arguments[0] : 0;
      var end = (arguments.length >= 2) ? arguments[1] : this.length;
      for(var i=start; i<end; i++) {
        result.push(this[i]);
      }
      return result;
    }
  };
})();

// adds classList support (as Array) to Element.prototype for IE8-9
(function() {
  Object.defineProperty(Element.prototype, 'classList', {
    get:function(){
        var element=this,domTokenList=(element.getAttribute('class')||'').replace(/^\s+|\s$/g,'').split(/\s+/g);
        if (domTokenList[0]==='') domTokenList.splice(0,1);
        function setClass(){
            if (domTokenList.length > 0) element.setAttribute('class', domTokenList.join(' '));
            else element.removeAttribute('class');
        }
        domTokenList.toggle=function(className,force){
            if (force!==undefined){
                if (force) domTokenList.add(className);
                else domTokenList.remove(className);
            }
            else {
                if (domTokenList.indexOf(className)!==-1) domTokenList.splice(domTokenList.indexOf(className),1);
                else domTokenList.push(className);
            }
            setClass();
        };
        domTokenList.add=function(){
            var args=[].slice.call(arguments)
            for (var i=0,l=args.length;i<l;i++){
                if (domTokenList.indexOf(args[i])===-1) domTokenList.push(args[i])
            };
            setClass();
        };
        domTokenList.remove=function(){
            var args=[].slice.call(arguments)
            for (var i=0,l=args.length;i<l;i++){
                if (domTokenList.indexOf(args[i])!==-1) domTokenList.splice(domTokenList.indexOf(args[i]),1);
            };
            setClass();
        };
        domTokenList.item=function(i){
            return domTokenList[i];
        };
        domTokenList.contains=function(className){
            return domTokenList.indexOf(className)!==-1;
        };
        domTokenList.replace=function(oldClass,newClass){
            if (domTokenList.indexOf(oldClass)!==-1) domTokenList.splice(domTokenList.indexOf(oldClass),1,newClass);
            setClass();
        };
        domTokenList.value = (element.getAttribute('class')||'');
        return domTokenList;
    }
  })
})();
