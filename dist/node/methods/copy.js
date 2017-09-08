/* vitals v5.0.0 (http://vitalsjs.com)
 * Copyright (c) 2014-2017 Adam A Smith <adam@imaginate.life>
 * The Apache License (http://vitalsjs.com/license) */
'use strict';
(function(__THIS,__VOID){var VERSION="5.0.0";var ENV={HAS_EXPORTS:true,HAS_MODULE:true,HAS_GLOBAL:true,HAS_WINDOW:false,HAS_DEFINE:false,HAS_SELF:false,HAS_THIS:false,ROOT:global};var ROOT=ENV.ROOT;var ARR=ROOT["Array"];var ARR_PROTO=ARR["prototype"];var ERR=ROOT["Error"];var FUN=ROOT["Function"];var FUN_PROTO=FUN["prototype"];var NIL=null;var NO=false;var NUM=ROOT["Number"];var NUM_PROTO=NUM["prototype"];var OBJ=ROOT["Object"];var OBJ_PROTO=OBJ["prototype"];var RANGE_ERR=ROOT["RangeError"];var REGX=
ROOT["RegExp"];var REGX_PROTO=REGX["prototype"];var STR=ROOT["String"];var STR_PROTO=STR["prototype"];var TYPE_ERR=ROOT["TypeError"];var VOID=__VOID;var YES=true;var BUFF=ROOT["Buffer"];var CP=require("child_process");var FS=require("fs");var PATH=require("path");var $objStr=function $objStrPrivateScope(){function $objStr(source){return _objToStr["call"](source)}var _objToStr=OBJ_PROTO["toString"];return $objStr}();var $own=function $ownPrivateScope(){function $own(source,key){return _hasOwnProp["call"](source,
key)}var _hasOwnProp=OBJ_PROTO["hasOwnProperty"];return $own}();var $is=function $isPrivateScope(){function isNull(val){return val===NIL}function isUndefined(val){return val===VOID}function isBoolean(val){return typeof val==="boolean"}function isString(val){return typeof val==="string"}function isNonEmptyString(val){return!!val&&typeof val==="string"}function isNumber(val){return typeof val==="number"&&val===val&&isFinite(val)}function isNonZeroNumber(val){return!!val&&typeof val==="number"&&val===
val&&isFinite(val)}function isNan(val){return val!==val}function isObject(val){return!!val&&typeof val==="object"}function isObjectOrFunction(val){if(!val)return false;switch(typeof val){case "object":case "function":return true;default:return false}}function isFunction(val){return!!val&&typeof val==="function"}function isArray(val){return isObject(val)&&$objStr(val)==="[object Array]"}function isRegExp(val){return isObject(val)&&$objStr(val)==="[object RegExp]"}function isDate(val){return isObject(val)&&
$objStr(val)==="[object Date]"}function isError(val){return isObject(val)&&$objStr(val)==="[object Error]"}function isArguments(val){return isObject(val)&&$objStr(val)==="[object Arguments]"}function isArrayOrArguments(val){if(!isObject(val))return false;switch($objStr(val)){case "[object Array]":case "[object Arguments]":return true;default:return false}}var isBuffer=BUFF["isBuffer"];function isDomDocument(val){return isObject(val)&&"nodeType"in val&&val["nodeType"]===9}function isDomElement(val){return isObject(val)&&
"nodeType"in val&&val["nodeType"]===1}function isArrayLike(val){var len;if(isArray(val))return true;len=val["length"];return isNumber(len)&&isWholeNumber(len)&&len>=0}function isEmpty(val){var key;if(!val)return YES;if(typeof val==="function")return val["length"]===0;if(typeof val!=="object")return NO;if($objStr(val)==="[object Array]")return val["length"]===0;for(key in val)if($own(val,key))return NO;return YES}var _EOL=/^(?:cr|lf|crlf)$/i;function isEndOfLine(val){return _EOL["test"](val)}var _FLAGS=
function _FLAGS_PrivateScope(){var pattern;var source;var flags;flags="img";if("sticky"in REGX_PROTO)flags+="y";if("unicode"in REGX_PROTO)flags+="u";source="^(?:"+"[\\+\\-]["+flags+"\\+\\-]*"+"|"+"["+flags+"]*"+")$";pattern=new REGX(source);pattern.FLAGS=flags;pattern.SRC="/"+source+"/";return pattern}();function isRegExpFlags(val){return _FLAGS["test"](val)}isRegExpFlags.FLAGS=_FLAGS.FLAGS;isRegExpFlags.SRC=_FLAGS.SRC;var isExtensible=function $isExtensiblePolyfillPrivateScope(){var objectIsExtensible;
if(!("isExtensible"in OBJ)||!isFunction(OBJ["isExtensible"]))return function isExtensible(src){return false};objectIsExtensible=OBJ["isExtensible"];try{objectIsExtensible(function(){});return objectIsExtensible}catch(e){return function isExtensible(src){return typeof src==="object"&&objectIsExtensible(src)}}}();var isFrozen=function $isFrozenPolyfillPrivateScope(){var objectIsFrozen;if(!("isFrozen"in OBJ)||!isFunction(OBJ["isFrozen"]))return function isFrozen(src){return false};objectIsFrozen=OBJ["isFrozen"];
try{objectIsFrozen(function(){});return objectIsFrozen}catch(e){return function isFrozen(src){return typeof src==="object"&&objectIsFrozen(src)}}}();var isSealed=function $isSealedPolyfillPrivateScope(){var objectIsSealed;if(!("isSealed"in OBJ)||!isFunction(OBJ["isSealed"]))return function isSealed(src){return false};objectIsSealed=OBJ["isSealed"];try{objectIsSealed(function(){});return objectIsSealed}catch(e){return function isSealed(src){return typeof src==="object"&&objectIsSealed(src)}}}();function isWholeNumber(val){return!(val%
1)}function isOddNumber(val){return!!(val%2)}function isEvenNumber(val){return!(val%2)}var _getStats=FS["statSync"];function isDirectory(path){if(!path||!isString(path))return NO;try{return _getStats(path)["isDirectory"]()}catch(e){return NO}}function isFile(path){if(!path||!isString(path))return NO;try{return _getStats(path)["isFile"]()}catch(e){return NO}}var $is={nil:isNull,void:isUndefined,bool:isBoolean,str:isString,_str:isNonEmptyString,num:isNumber,_num:isNonZeroNumber,nan:isNan,obj:isObject,
_obj:isObjectOrFunction,fun:isFunction,arr:isArray,_arr:isArrayOrArguments,args:isArguments,regx:isRegExp,date:isDate,err:isError,buff:isBuffer,doc:isDomDocument,elem:isDomElement,arrish:isArrayLike,empty:isEmpty,eol:isEndOfLine,flags:isRegExpFlags,extend:isExtensible,frozen:isFrozen,sealed:isSealed,whole:isWholeNumber,odd:isOddNumber,even:isEvenNumber,dir:isDirectory,file:isFile};return $is}();function $mkStr(val){return $is.str(val)?val:$is.regx(val)?val["toString"]():STR(val)}var $print=function $printPrivateScope(){function $print(val,
depth){depth=depth||0;return $is._obj(val)?$is.regx(val)?val["toString"]():_mapToStr(val,depth):_primToStr(val)}var _INDENT="    ";var _MAP_TYPE=/^\[object ([a-zA-Z0-9_\$]+)\]$/;var _LAST_SEP=/,\n$/;function _emptyHashMap(val){var key;for(key in val)if($own(val,key))return false;return true}function _escStr(val){val=val["replace"](/\\/g,"\\\\");val=val["replace"](/\n/g,"\\n");val=val["replace"](/\r/g,"\\r");val=val["replace"](/\t/g,"\\t");val=val["replace"](/\v/g,"\\v");val=val["replace"](/\0/g,"\\0");
val=val["replace"](/\b/g,"\\b");val=val["replace"](/\f/g,"\\f");return val}function _getMapType(val){var type;if($is.fun(val)){type="Function";if(val["name"])type+="("+val["name"]+")";return type}type=$objStr(val);return _MAP_TYPE["test"](type)?type["replace"](_MAP_TYPE,"$1"):"UnknownObjectType"}function _mkIndent(depth){var indent;if(indent<1)return"";indent="";while(depth--)indent+=_INDENT;return indent}function _primToStr(val){if($is.bool(val))return val?"true":"false";if($is.nil(val))return"null";
if($is.void(val))return"undefined";if($is.nan(val))return"NaN";if($is.str(val))return'"'+_escStr(val)+'"';return $mkStr(val)}function _arrToStr(val,depth){var result;var indent;var len;var i;len=val["length"];if(len<1)return"[]";indent=_mkIndent(depth);depth+=1;result="[\n";i=-1;while(++i<len){result+=indent+i+": ";result+=$print(val[i],depth)+",\n"}result=result["replace"](_LAST_SEP,"\n");return result+"]"}function _keyToStr(key){return"'"+$mkStr(key)+"'"}function _mapToStr(val,depth){var result;
result=_getMapType(val)+": ";result+=$is._arr(val)?_arrToStr(val,depth):_ownToStr(val,depth);return result}function _ownToStr(val,depth){var result;var indent;var key;if(_emptyHashMap(val))return"{}";indent=_mkIndent(depth);depth+=1;result="{\n";for(key in val)if($own(val,key)){result+=indent;result+=_keyToStr(key)+": ";result+=$print(val[key],depth)+",\n"}result=result["replace"](_LAST_SEP,"\n");return result+"}"}return $print}();var $mkObj=function $mkObjPrivateScope(){var _create=function _createPrivateScope(){if("create"in
OBJ&&$is.fun(OBJ["create"]))return OBJ["create"];function _Obj(){}function create(proto){var obj;_Obj["prototype"]=proto;obj=new _Obj;_Obj["prototype"]=NIL;return obj}return create}();function $mkObj(proto){return _create(proto)}return $mkObj}();var $mkErrs=function $mkErrsPrivateScope(){var _OPEN_HASH=/^#/;var _OPEN_VITALS=/^vitals\./;var _STRICT=/^\!/;function _mkOptions(opts){var result;var len;var i;result="";len=opts["length"];i=-1;while(++i<len)result+="\n- `"+$print(opts[i])+"`";return result}
function _prepSuper(name){if($is.void(name))return"newVitals";name=name["replace"](_OPEN_VITALS,"");return"vitals."+name}function _prepParam(name){if(!name)return"";if(_STRICT["test"](name))return name["replace"](_STRICT,"");name=name["replace"](_OPEN_HASH,"");return"#"+name}function _setErrorProps(err,name,msg,val){err["__vitals"]=true;err["vitals"]=true;err["name"]=name;switch(name){case "TypeError":err["__type"]=true;err["type"]=true;break;case "RangeError":err["__range"]=true;err["range"]=true;
break}err["message"]=msg;err["msg"]=msg;if(arguments["length"]>3){err["value"]=val;err["val"]=val}return err}function $mkErrs(superMethod){var MK_ERR={error:error,typeError:typeError,rangeError:rangeError};var _SUPER=_prepSuper(superMethod);function _prepMethod(method){method=!!method?_SUPER+"."+method:_SUPER;return"`"+method+"`"}function error(err,msg,method){method=_prepMethod(method);msg+=" for "+method+" call";return _setErrorProps(err,"Error",msg)}function typeError(err,paramName,paramVal,validTypes,
methodName){var method;var param;var msg;var val;method=_prepMethod(methodName);param=_prepParam(paramName);val=$print(paramVal);msg="invalid "+param+" data type for "+method+" call\n";msg+="valid data types: `"+validTypes+"`\n";msg+="actual "+param+" value: `"+val+"`";return _setErrorProps(err,"TypeError",msg,paramVal)}function rangeError(err,paramName,validRange,methodName){var method;var param;var msg;method=_prepMethod(methodName);param=_prepParam(paramName);msg="out-of-range "+param+" for "+
method+" call";if($is.str(validRange))msg+="\nvalid range: `"+validRange+"`";else if($is.arr(validRange))msg+="\nvalid options:"+_mkOptions(validRange);return _setErrorProps(err,"RangeError",msg)}return MK_ERR}return $mkErrs}();var $strIncl=function $strInclPrivateScope(){var $strIncl="includes"in STR_PROTO&&$is.fun(STR_PROTO["includes"])?function $strIncl(src,val){return src["includes"](val)}:function $strIncl(src,val){return src["indexOf"](val)!==-1};return $strIncl}();function $merge(dest,src){var key;
for(key in src)if($own(src,key))dest[key]=src[key];return dest}function $inStr(src,val){val=$mkStr(val);return!src?!val:!val?YES:$strIncl(src,val)}var $getFlags=function $getFlagsPrivateScope(){var _GLOBAL=/g/;var _FLAGS=function _FLAGS_PrivateScope(){var flags;flags={};flags["ignoreCase"]="i";flags["multiline"]="m";flags["global"]="g";if("sticky"in REGX_PROTO)flags["sticky"]="y";if("unicode"in REGX_PROTO)flags["unicode"]="u";return flags}();function $getFlags(src,forceGlobal){var flags;var key;flags=
"";for(key in _FLAGS)if($own(_FLAGS,key)&&src[key])flags+=_FLAGS[key];return!!forceGlobal&&!_GLOBAL["test"](flags)?flags+"g":flags}return $getFlags}();var $cloneRegx=function $cloneRegxPrivateScope(){var _escape=function _escapePrivateScope(){return/\n/["source"]!=="\\n"?function _escape(src){return src["replace"](/\\/g,"\\\\")}:function _escape(src){return src}}();function $cloneRegx(src,flags){var source;source=_escape(src["source"]);return flags?new REGX(source,flags):new REGX(source)}return $cloneRegx}();
var copy=function copyPrivateScope(){function copy(val,deep){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined");case 1:break;default:if(!$is.void(deep)&&!$is.bool(deep))throw _mkTypeErr(new TYPE_ERR,"deep",deep,"boolean\x3d");}return!$is._obj(val)?val:$is.fun(val)?_copyFunc(val,deep):$is._arr(val)?_copyArr(val,deep):$is.regx(val)?_copyRegex(val):_copyObj(val,deep)}function copyObject(source,deep){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #source defined",
"object");case 1:break;default:if(!$is.void(deep)&&!$is.bool(deep))throw _mkTypeErr(new TYPE_ERR,"deep",deep,"boolean\x3d","object");}if(!$is.obj(source))throw _mkTypeErr(new TYPE_ERR,"source",source,"!Object","object");return _copyObj(source,deep)}copy["object"]=copyObject;copy["obj"]=copyObject;function copyArray(source,deep){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #source defined","array");case 1:break;default:if(!$is.void(deep)&&!$is.bool(deep))throw _mkTypeErr(new TYPE_ERR,
"deep",deep,"boolean\x3d","array");}if(!$is.obj(source))throw _mkTypeErr(new TYPE_ERR,"source",source,"(!Array|!Arguments|!Object)","array");if(!$is.arrish(source))throw _mkErr(new ERR,"#source failed `array-like` test (#source."+"length must be a whole `number` that is `0` or more)","array");return _copyArr(source,deep)}copy["array"]=copyArray;copy["arr"]=copyArray;copy["args"]=copyArray;function copyRegExp(source,flags){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #source defined",
"regexp");case 1:break;default:if($is.str(flags)){if(!$is.flags(flags))throw _mkRangeErr(new RANGE_ERR,"flags",$is.flags.SRC,"regexp");}else if(!$is.void(flags))throw _mkTypeErr(new TYPE_ERR,"flags",flags,"string\x3d","regexp");}if(!$is.regx(source))throw _mkTypeErr(new TYPE_ERR,"source",source,"!RegExp","regexp");return _copyRegex(source,flags)}copy["regexp"]=copyRegExp;copy["regex"]=copyRegExp;copy["regx"]=copyRegExp;copy["re"]=copyRegExp;function copyFunction(source,deep){switch(arguments["length"]){case 0:throw _mkErr(new ERR,
"no #source defined","function");case 1:break;default:if(!$is.void(deep)&&!$is.bool(deep))throw _mkTypeErr(new TYPE_ERR,"deep",deep,"boolean\x3d","function");}if(!$is.fun(source))throw _mkTypeErr(new TYPE_ERR,"source",source,"!Function","function");return _copyFunc(source,deep)}copy["func"]=copyFunction;copy["fun"]=copyFunction;try{copy["fn"]=copyFunction;copy["function"]=copyFunction}catch(e){}function _copyObj(obj,deep){return deep?_mergeDeep({},obj):$merge({},obj)}function _copyArr(obj,deep){var arr;
arr=new ARR(obj["length"]);return deep?_mergeDeep(arr,obj):$merge(arr,obj)}function _copyRegex(src,flags){var flags;flags=_getFlags(src,flags);return $cloneRegx(src,flags)}function _copyFunc(func,deep){function funcCopy(){return func["apply"](NIL,arguments)}return deep?_mergeDeep(funcCopy,func):$merge(funcCopy,func)}var _MOD_FLAGS=/^[\+\-]/;function _addFlags(FLAGS,flags){var flag;var len;var i;len=flags["length"];i=-1;while(++i<len){flag=flags[i];FLAGS[flag]=true}return FLAGS}function _getFlags(src,
flags){var flag;if($is.void(flags))return $getFlags(src);if(!_MOD_FLAGS["test"](flags))return flags;var FLAGS=_mkFlags(src);function _modFlags(match,sign,flags){var flagsArray;flagsArray=flags["split"]("");if(sign==="+")_addFlags(FLAGS,flagsArray);else _rmFlags(FLAGS,flagsArray);return""}flags.replace(/([\+\-])([imgyu]+)/g,_modFlags);flags="";for(flag in FLAGS)if($own(FLAGS,flag)&&FLAGS[flag]&&!$inStr(flags,flag))flags+=flag;return flags}function _mkFlags(src){var result;var flags;var flag;var len;
var i;result={};flags=$getFlags(src)["split"]("");len=flags["length"];i=-1;while(++i<len){flag=flags[i];result[flag]=true}return result}function _rmFlags(FLAGS,flags){var flag;var len;var i;len=flags["length"];i=-1;while(++i<len){flag=flags[i];FLAGS[flag]=false}return FLAGS}function _mergeDeep(dest,source){var key;for(key in source)if($own(source,key))dest[key]=copy(source[key],YES);return dest}var _MK_ERR=$mkErrs("copy");var _mkErr=_MK_ERR.error;var _mkTypeErr=_MK_ERR.typeError;var _mkRangeErr=_MK_ERR.rangeError;
return copy}();var vitals=copy;vitals["copy"]=copy;vitals["VERSION"]=VERSION;module.exports=vitals})(this);