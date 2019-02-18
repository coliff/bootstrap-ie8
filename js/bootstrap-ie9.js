/* Bootstrap 4 for IE9 - v4.3.1            */
/* https://github.com/coliff/bootstrap-ie8 */

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
