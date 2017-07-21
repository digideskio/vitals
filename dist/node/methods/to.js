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
function _FLAGS_PrivateScope(){var flags;flags="img";if("sticky"in REGX_PROTO)flags+="y";if("unicode"in REGX_PROTO)flags+="u";flags="[\\+\\-]["+flags+"\\+\\-]*|["+flags+"]*";return new REGX("^(?:"+flags+")$")}();function isRegExpFlags(val){return _FLAGS["test"](val)}var isExtensible=function $isExtensiblePolyfillPrivateScope(){var objectIsExtensible;if(!("isExtensible"in OBJ)||!isFunction(OBJ["isExtensible"]))return function isExtensible(src){return false};objectIsExtensible=OBJ["isExtensible"];try{objectIsExtensible(function(){});
return objectIsExtensible}catch(e){return function isExtensible(src){return typeof src==="object"&&objectIsExtensible(src)}}}();var isFrozen=function $isFrozenPolyfillPrivateScope(){var objectIsFrozen;if(!("isFrozen"in OBJ)||!isFunction(OBJ["isFrozen"]))return function isFrozen(src){return false};objectIsFrozen=OBJ["isFrozen"];try{objectIsFrozen(function(){});return objectIsFrozen}catch(e){return function isFrozen(src){return typeof src==="object"&&objectIsFrozen(src)}}}();var isSealed=function $isSealedPolyfillPrivateScope(){var objectIsSealed;
if(!("isSealed"in OBJ)||!isFunction(OBJ["isSealed"]))return function isSealed(src){return false};objectIsSealed=OBJ["isSealed"];try{objectIsSealed(function(){});return objectIsSealed}catch(e){return function isSealed(src){return typeof src==="object"&&objectIsSealed(src)}}}();function isWholeNumber(val){return!(val%1)}function isOddNumber(val){return!!(val%2)}function isEvenNumber(val){return!(val%2)}var _getStats=FS["statSync"];function isDirectory(path){if(!path||!isString(path))return NO;try{return _getStats(path)["isDirectory"]()}catch(e){return NO}}
function isFile(path){if(!path||!isString(path))return NO;try{return _getStats(path)["isFile"]()}catch(e){return NO}}var $is={nil:isNull,void:isUndefined,bool:isBoolean,str:isString,_str:isNonEmptyString,num:isNumber,_num:isNonZeroNumber,nan:isNan,obj:isObject,_obj:isObjectOrFunction,fun:isFunction,arr:isArray,_arr:isArrayOrArguments,args:isArguments,regx:isRegExp,date:isDate,err:isError,buff:isBuffer,doc:isDomDocument,elem:isDomElement,arrish:isArrayLike,empty:isEmpty,eol:isEndOfLine,flags:isRegExpFlags,
extend:isExtensible,frozen:isFrozen,sealed:isSealed,whole:isWholeNumber,odd:isOddNumber,even:isEvenNumber,dir:isDirectory,file:isFile};return $is}();function $mkStr(val){return $is.str(val)?val:$is.regx(val)?val["toString"]():STR(val)}var $print=function $printPrivateScope(){function $print(val,depth){depth=depth||0;return $is._obj(val)?$is.regx(val)?val["toString"]():_mapToStr(val,depth):_primToStr(val)}var _INDENT="    ";var _MAP_TYPE=/^\[object ([a-zA-Z0-9_\$]+)\]$/;var _LAST_SEP=/,\n$/;function _emptyHashMap(val){var key;
for(key in val)if($own(val,key))return false;return true}function _escStr(val){val=val["replace"](/\\/g,"\\\\");val=val["replace"](/\n/g,"\\n");val=val["replace"](/\r/g,"\\r");val=val["replace"](/\t/g,"\\t");val=val["replace"](/\v/g,"\\v");val=val["replace"](/\0/g,"\\0");val=val["replace"](/\b/g,"\\b");val=val["replace"](/\f/g,"\\f");return val}function _getMapType(val){var type;if($is.fun(val)){type="Function";if(val["name"])type+="("+val["name"]+")";return type}type=$objStr(val);return _MAP_TYPE["test"](type)?
type["replace"](_MAP_TYPE,"$1"):"UnknownObjectType"}function _mkIndent(depth){var indent;if(indent<1)return"";indent="";while(depth--)indent+=_INDENT;return indent}function _primToStr(val){if($is.bool(val))return val?"true":"false";if($is.nil(val))return"null";if($is.void(val))return"undefined";if($is.nan(val))return"NaN";if($is.str(val))return'"'+_escStr(val)+'"';return $mkStr(val)}function _arrToStr(val,depth){var result;var indent;var len;var i;len=val["length"];if(len<1)return"[]";indent=_mkIndent(depth);
depth+=1;result="[\n";i=-1;while(++i<len){result+=indent+i+": ";result+=$print(val[i],depth)+",\n"}result=result["replace"](_LAST_SEP,"\n");return result+"]"}function _keyToStr(key){return"'"+$mkStr(key)+"'"}function _mapToStr(val,depth){var result;result=_getMapType(val)+": ";result+=$is._arr(val)?_arrToStr(val,depth):_ownToStr(val,depth);return result}function _ownToStr(val,depth){var result;var indent;var key;if(_emptyHashMap(val))return"{}";indent=_mkIndent(depth);depth+=1;result="{\n";for(key in val)if($own(val,
key)){result+=indent;result+=_keyToStr(key)+": ";result+=$print(val[key],depth)+",\n"}result=result["replace"](_LAST_SEP,"\n");return result+"}"}return $print}();var $mkObj=function $mkObjPrivateScope(){var _create=function _createPrivateScope(){if("create"in OBJ&&$is.fun(OBJ["create"]))return OBJ["create"];function _Obj(){}function create(proto){var obj;_Obj["prototype"]=proto;obj=new _Obj;_Obj["prototype"]=NIL;return obj}return create}();function $mkObj(proto){return _create(proto)}return $mkObj}();
var $mkErrs=function $mkErrsPrivateScope(){var _OPEN_HASH=/^#/;var _OPEN_VITALS=/^vitals\./;var _STRICT=/^\!/;function _mkOptions(opts){var result;var len;var i;result="";len=opts["length"];i=-1;while(++i<len)result+="\n- `"+$print(opts[i])+"`";return result}function _prepSuper(name){if($is.void(name))return"newVitals";name=name["replace"](_OPEN_VITALS,"");return"vitals."+name}function _prepParam(name){if(!name)return"";if(_STRICT["test"](name))return name["replace"](_STRICT,"");name=name["replace"](_OPEN_HASH,
"");return"#"+name}function _setErrorProps(err,name,msg,val){err["__vitals"]=true;err["vitals"]=true;err["name"]=name;switch(name){case "TypeError":err["__type"]=true;err["type"]=true;break;case "RangeError":err["__range"]=true;err["range"]=true;break}err["message"]=msg;err["msg"]=msg;if(arguments["length"]>3){err["value"]=val;err["val"]=val}return err}function $mkErrs(superMethod){var MK_ERR={error:error,typeError:typeError,rangeError:rangeError};var _SUPER=_prepSuper(superMethod);function _prepMethod(method){method=
method?_SUPER:_SUPER+"."+method;return"`"+method+"`"}function error(err,msg,method){method=_prepMethod(method);msg+=" for "+method+" call";return _setErrorProps(err,"Error",msg)}function typeError(err,paramName,paramVal,validTypes,methodName){var method;var param;var msg;var val;method=_prepMethod(methodName);param=_prepParam(paramName);val=$print(paramVal);msg="invalid "+param+" data type for "+method+" call\n";msg+="valid data types: `"+validTypes+"`\n";msg+="actual "+param+" value: `"+val+"`";
return _setErrorProps(err,"TypeError",msg,paramVal)}function rangeError(err,paramName,validRange,methodName){var method;var param;var msg;method=_prepMethod(methodName);param=_prepParam(paramName);msg="out-of-range "+param+" for "+method+" call";if($is.str(validRange))msg+="\nvalid range: `"+validRange+"`";else if($is.arr(validRange))msg+="\nvalid options:"+_mkOptions(validRange);return _setErrorProps(err,"RangeError",msg)}return MK_ERR}return $mkErrs}();var $strIncl=function $strInclPrivateScope(){var $strIncl=
"includes"in STR_PROTO&&$is.fun(STR_PROTO["includes"])?function $strIncl(src,val){return src["includes"](val)}:function $strIncl(src,val){return src["indexOf"](val)!==-1};return $strIncl}();function $splitKeys(keys){var separator;if(!keys)return[""];separator=$strIncl(keys,", ")?", ":$strIncl(keys,",")?",":$strIncl(keys,"|")?"|":" ";return keys["split"](separator)}var to=function toPrivateScope(){var to={};function toString(val,separator){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined",
"string");case 1:return $mkStr(val);default:if($is.void(separator))return $mkStr(val);if(!$is.arr(val))throw _mkErr(new ERR,"invalid #separator defined ("+"only allowed with an `array` #val)","string");if(!$is.str(separator))throw _mkTypeErr(new TYPE_ERR,"separator",separator,"string\x3d","string");return val["join"](separator)}}to["string"]=toString;to["str"]=toString;function toNumber(val){if(arguments["length"]<1)throw _mkErr(new ERR,"no #val defined","number");if($is.num(val))return val;if($is.nil(val))return 0;
if($is.bool(val))return val?1:0;if(!$is.str(val))throw _mkTypeErr(new TYPE_ERR,"val",val,"?string|?number|?boolean","number");val=NUM(val);if($is.nan(val))throw _mkRangeErr(new RANGE_ERR,"val","https://github.com/"+"imaginate/vitals/wiki/vitals.to#user-content-number","number");return val}to["number"]=toNumber;to["num"]=toNumber;function toBoolean(val){if(arguments["length"]<1)throw _mkErr(new ERR,"no #val defined","boolean");return!!val}to["boolean"]=toBoolean;to["bool"]=toBoolean;function toArray(val,
separator){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","array");case 1:if($is.num(val))return new ARR(val);if(!$is.str(val))throw _mkTypeErr(new TYPE_ERR,"val",val,"string|number","array");return $splitKeys(val);default:if($is.num(val)){if(!$is.void(separator))throw _mkErr(new ERR,"invalid #separator defined ("+"only allowed with a `string` #val)","array");return new ARR(val)}if(!$is.str(val))throw _mkTypeErr(new TYPE_ERR,"val",val,"string|number","array");if(!$is.regx(separator))separator=
$mkStr(separator);return val["split"](separator)}}to["array"]=toArray;to["arr"]=toArray;function toRegExp(source,flags){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #source defined","regexp");case 1:if(!$is.str(source))throw _mkTypeErr(new TYPE_ERR,"source",source,"string","regexp");return new REGX(source);default:if(!$is.str(source))throw _mkTypeErr(new TYPE_ERR,"source",source,"string","regexp");if($is.void(flags))return new REGX(source);if(!$is.str(flags))throw _mkTypeErr(new TYPE_ERR,
"flags",flags,"string\x3d","regexp");return new REGX(source,flags)}}to["regexp"]=toRegExp;to["regex"]=toRegExp;to["re"]=toRegExp;function toUpperCase(source){if(arguments["length"]<1)throw _mkErr(new ERR,"no #source defined","upperCase");if(!$is.str(source))throw _mkTypeErr(new TYPE_ERR,"source",source,"string","upperCase");return source["toUpperCase"]()}to["upperCase"]=toUpperCase;to["upper"]=toUpperCase;function toLowerCase(source){if(arguments["length"]<1)throw _mkErr(new ERR,"no #source defined",
"lowerCase");if(!$is.str(source))throw _mkTypeErr(new TYPE_ERR,"source",source,"string","lowerCase");return source["toLowerCase"]()}to["lowerCase"]=toLowerCase;to["lower"]=toLowerCase;var _MK_ERR=$mkErrs("to");var _mkErr=_MK_ERR.error;var _mkTypeErr=_MK_ERR.typeError;var _mkRangeErr=_MK_ERR.rangeError;return to}();var vitals=to;vitals["to"]=to;vitals["VERSION"]=VERSION;module.exports=vitals})(this);