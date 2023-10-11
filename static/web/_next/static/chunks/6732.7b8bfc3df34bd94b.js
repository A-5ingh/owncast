"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6732],{86732:function(t,e,n){function mkStex(t){function pushCommand(t,e){t.cmdState.push(e)}function peekCommand(t){return t.cmdState.length>0?t.cmdState[t.cmdState.length-1]:null}function addPluginPattern(t,e,n){return function(){this.name=t,this.bracketNo=0,this.style=e,this.styles=n,this.argument=null,this.styleIdentifier=function(){return this.styles[this.bracketNo-1]||null},this.openBracket=function(){return this.bracketNo++,"bracket"},this.closeBracket=function(){}}}var e={};function normal(t,n){if(t.match(/^\\[a-zA-Z@\xc0-\u1fff\u2060-\uffff]+/)){var a,r=t.current().slice(1);return pushCommand(n,a=new(a=e.hasOwnProperty(r)?e[r]:e.DEFAULT)),n.f=beginParams,a.style}if(t.match(/^\\[$&%#{}_]/)||t.match(/^\\[,;!\/\\]/))return"tag";if(t.match("\\["))return n.f=function(t,e){return inMathMode(t,e,"\\]")},"keyword";if(t.match("\\("))return n.f=function(t,e){return inMathMode(t,e,"\\)")},"keyword";if(t.match("$$"))return n.f=function(t,e){return inMathMode(t,e,"$$")},"keyword";if(t.match("$"))return n.f=function(t,e){return inMathMode(t,e,"$")},"keyword";var i=t.next();return"%"==i?(t.skipToEnd(),"comment"):"}"==i||"]"==i?(a=peekCommand(n))?(a.closeBracket(i),n.f=beginParams,"bracket"):"error":"{"==i||"["==i?(pushCommand(n,a=new(a=e.DEFAULT)),"bracket"):/\d/.test(i)?(t.eatWhile(/[\w.%]/),"atom"):(t.eatWhile(/[\w\-_]/),"begin"==(a=function(t){for(var e=t.cmdState,n=e.length-1;n>=0;n--){var a=e[n];if("DEFAULT"!=a.name)return a}return{styleIdentifier:function(){return null}}}(n)).name&&(a.argument=t.current()),a.styleIdentifier())}function inMathMode(t,e,n){if(t.eatSpace())return null;if(n&&t.match(n))return e.f=normal,"keyword";if(t.match(/^\\[a-zA-Z@]+/))return"tag";if(t.match(/^[a-zA-Z]+/))return"variableName.special";if(t.match(/^\\[$&%#{}_]/)||t.match(/^\\[,;!\/]/)||t.match(/^[\^_&]/))return"tag";if(t.match(/^[+\-<>|=,\/@!*:;'"`~#?]/))return null;if(t.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))return"number";var a=t.next();return"{"==a||"}"==a||"["==a||"]"==a||"("==a||")"==a?"bracket":"%"==a?(t.skipToEnd(),"comment"):"error"}function beginParams(t,e){var n,a=t.peek();return"{"==a||"["==a?(peekCommand(e).openBracket(a),t.eat(a),e.f=normal,"bracket"):/[ \t\r]/.test(a)?(t.eat(a),null):(e.f=normal,(n=e.cmdState.pop())&&n.closeBracket(),normal(t,e))}return e.importmodule=addPluginPattern("importmodule","tag",["string","builtin"]),e.documentclass=addPluginPattern("documentclass","tag",["","atom"]),e.usepackage=addPluginPattern("usepackage","tag",["atom"]),e.begin=addPluginPattern("begin","tag",["atom"]),e.end=addPluginPattern("end","tag",["atom"]),e.label=addPluginPattern("label","tag",["atom"]),e.ref=addPluginPattern("ref","tag",["atom"]),e.eqref=addPluginPattern("eqref","tag",["atom"]),e.cite=addPluginPattern("cite","tag",["atom"]),e.bibitem=addPluginPattern("bibitem","tag",["atom"]),e.Bibitem=addPluginPattern("Bibitem","tag",["atom"]),e.RBibitem=addPluginPattern("RBibitem","tag",["atom"]),e.DEFAULT=function(){this.name="DEFAULT",this.style="tag",this.styleIdentifier=this.openBracket=this.closeBracket=function(){}},{name:"stex",startState:function(){return{cmdState:[],f:t?function(t,e){return inMathMode(t,e)}:normal}},copyState:function(t){return{cmdState:t.cmdState.slice(),f:t.f}},token:function(t,e){return e.f(t,e)},blankLine:function(t){t.f=normal,t.cmdState.length=0},languageData:{commentTokens:{line:"%"}}}}n.r(e),n.d(e,{stex:function(){return a},stexMath:function(){return r}});let a=mkStex(!1),r=mkStex(!0)}}]);