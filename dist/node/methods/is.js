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
method+" call";if($is.str(validRange))msg+="\nvalid range: `"+validRange+"`";else if($is.arr(validRange))msg+="\nvalid options:"+_mkOptions(validRange);return _setErrorProps(err,"RangeError",msg)}return MK_ERR}return $mkErrs}();var $strIncl=function $strInclPrivateScope(){var $strIncl="includes"in STR_PROTO&&$is.fun(STR_PROTO["includes"])?function $strIncl(src,val){return src["includes"](val)}:function $strIncl(src,val){return src["indexOf"](val)!==-1};return $strIncl}();var is=function isPrivateScope(){function is(types,
val){var nullable;var checks;var vals;switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #types defined");case 1:throw _mkErr(new ERR,"no #val defined");case 2:vals=NO;break;default:vals=YES;break}if(!$is.str(types))throw _mkTypeErr(new TYPE_ERR,"types",types,"string");if(!types)throw _mkErr(new ERR,"invalid empty #types `string`");if(_hasSpecial("*",types))return YES;checks=_getChecks(types);if(!checks)throw _mkRangeErr(new RANGE_ERR,"types","https://github.com/imaginate/vitals/wiki/vitals.is-types");
nullable=_getNullable(types);return vals?_checkVals(checks,arguments,nullable):_checkVal(checks,val,nullable)}function isNull(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","null");case 1:return $is.nil(val);default:return _are(arguments,$is.nil)}}is["null"]=isNull;is["nil"]=isNull;function isUndefined(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","undefined");case 1:return $is.void(val);default:return _are(arguments,$is.none)}}is["undefined"]=
isUndefined;is["void"]=isUndefined;function isBoolean(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","boolean");case 1:return $is.bool(val);default:return _are(arguments,$is.bool)}}is["boolean"]=isBoolean;is["bool"]=isBoolean;function isString(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","string");case 1:return $is.str(val);default:return _are(arguments,$is.str)}}is["string"]=isString;is["str"]=isString;function isNonEmptyString(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,
"no #val defined","_string");case 1:return $is._str(val);default:return _are(arguments,$is._str)}}is["_string"]=isNonEmptyString;is["_str"]=isNonEmptyString;function isNumber(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","number");case 1:return $is.num(val);default:return _are(arguments,$is.num)}}is["number"]=isNumber;is["num"]=isNumber;function isNonZeroNumber(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","_number");case 1:return $is._num(val);
default:return _are(arguments,$is._num)}}is["_number"]=isNonZeroNumber;is["_num"]=isNonZeroNumber;function isNan(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","nan");case 1:return $is.nan(val);default:return _are(arguments,$is.nan)}}is["nan"]=isNan;function isObject(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","object");case 1:return $is.obj(val);default:return _are(arguments,$is.obj)}}is["object"]=isObject;is["obj"]=isObject;function isObjectOrFunction(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,
"no #val defined","_object");case 1:return $is._obj(val);default:return _are(arguments,$is._obj)}}is["_object"]=isObjectOrFunction;is["_obj"]=isObjectOrFunction;function isFunction(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","function");case 1:return $is.fun(val);default:return _are(arguments,$is.fun)}}is["func"]=isFunction;is["fun"]=isFunction;try{is["fn"]=isFunction;is["function"]=isFunction}catch(e){}function isArray(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,
"no #val defined","array");case 1:return $is.arr(val);default:return _are(arguments,$is.arr)}}is["array"]=isArray;is["arr"]=isArray;function isArrayOrArguments(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","_array");case 1:return $is._arr(val);default:return _are(arguments,$is._arr)}}is["_array"]=isArrayOrArguments;is["_arr"]=isArrayOrArguments;function isRegExp(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","regexp");case 1:return $is.regx(val);
default:return _are(arguments,$is.regx)}}is["regexp"]=isRegExp;is["regex"]=isRegExp;is["regx"]=isRegExp;is["re"]=isRegExp;function isDate(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","date");case 1:return $is.date(val);default:return _are(arguments,$is.date)}}is["date"]=isDate;function isError(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","error");case 1:return $is.err(val);default:return _are(arguments,$is.err)}}is["error"]=isError;
is["err"]=isError;function isArguments(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","args");case 1:return $is.args(val);default:return _are(arguments,$is.args)}}is["args"]=isArguments;function isDocument(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","document");case 1:return $is.doc(val);default:return _are(arguments,$is.doc)}}is["document"]=isDocument;is["doc"]=isDocument;function isElement(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,
"no #val defined","element");case 1:return $is.elem(val);default:return _are(arguments,$is.elem)}}is["element"]=isElement;is["elem"]=isElement;function isEmpty(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","empty");case 1:return $is.empty(val);default:return _are(arguments,$is.empty)}}is["empty"]=isEmpty;function isFrozen(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","frozen");case 1:return _isFrozen(val);default:return _are(arguments,
_isFrozen)}}is["frozen"]=isFrozen;function isWholeNumber(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","wholeNumber");case 1:return _isWhole(val);default:return _are(arguments,_isWhole)}}is["wholeNumber"]=isWholeNumber;is["whole"]=isWholeNumber;function isOddNumber(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","oddNumber");case 1:return _isOdd(val);default:return _are(arguments,_isOdd)}}is["oddNumber"]=isOddNumber;is["odd"]=isOddNumber;
function isEvenNumber(val){switch(arguments["length"]){case 0:throw _mkErr(new ERR,"no #val defined","evenNumber");case 1:return _isEven(val);default:return _are(arguments,_isEven)}}is["evenNumber"]=isEvenNumber;is["even"]=isEvenNumber;function _are(vals,check){var i;i=vals["length"];while(i--)if(!check(vals[i]))return NO;return YES}function _isFrozen(val){if($is.nil(val))return NO;if(!$is._obj(val))throw _mkTypeErr(new TYPE_ERR,"val",val,"?Object|?Function","frozen");return $is.frozen(val)}function _isWhole(val){if(!$is.num(val))throw _mkTypeErr(new TYPE_ERR,
"val",val,"number","wholeNumber");return $is.whole(val)}function _isOdd(val){if(!$is.num(val))throw _mkTypeErr(new TYPE_ERR,"val",val,"number","oddNumber");if(!$is.whole(val))throw _mkRangeErr(new RANGE_ERR,"val","-?[0-9]+","oddNumber");return $is.odd(val)}function _isEven(val){if(!$is.num(val))throw _mkTypeErr(new TYPE_ERR,"val",val,"number","evenNumber");if(!$is.whole(val))throw _mkRangeErr(new RANGE_ERR,"val","-?[0-9]+","evenNumber");return $is.even(val)}function _checkVal(checks,val,nullable){var i;
i=checks["length"];while(i--)if(checks[i](val,nullable))return YES;return NO}function _checkVals(checks,vals,nullable){var i;i=vals["length"];while(--i)if(!_checkVal(checks,vals[i],nullable))return NO;return YES}var _TYPES=function _TYPES_PrivateScope(){var $types={};function _addTypes(section,types,nullableDefault){var type;for(type in types)if($own(types,type))_addType(section,type,types[type],nullableDefault)}function _addType(section,type,check,nullableDefault){if($own(_addType,section))check=
_addType[section](check);nullableDefault=nullableDefault!==NO;function typeCheck(val,nullable){if(!$is.bool(nullable))nullable=nullableDefault;return $is.nil(val)?nullable:check(val)}$types["_"+type]=typeCheck}function _addShortcuts(shortcuts){var shortcut;var type;for(shortcut in shortcuts)if($own(shortcuts,shortcut)){type="_"+shortcuts[shortcut];shortcut="_"+shortcut;$types[shortcut]=$types[type]}}function _addArrayType(eachCheck){function check(val){var i;if(!$is.arr(val))return NO;i=val["length"];
while(i--)if(!eachCheck(val[i]))return NO;return YES}return check}_addType["arrays"]=_addArrayType;function _addMapType(eachCheck){function check(val){var key;if(!$is.obj(val))return NO;for(key in val)if($own(val,key)&&!eachCheck(val[key]))return NO;return YES}return check}_addType["maps"]=_addMapType;_addTypes("primitives",{"undefined":$is.void,"boolean":$is.bool,"string":$is.str,"number":$is.num,"nan":$is.nan},NO);_addType("primitives","null",$is.nil);_addTypes("js_objects",{"object":$is.obj,"regexp":$is.regx,
"array":$is.arr,"error":$is.err,"date":$is.date});_addType("js_objects","arguments",$is.args);_addType("js_objects","function",$is.fun,NO);_addTypes("dom_objects",{"element":$is.elem,"document":$is.doc});_addType("others","empty",$is.empty);_addTypes("arrays",{"undefineds":$is.void,"nulls":$is.nil,"booleans":$is.bool,"strings":$is.str,"numbers":$is.num,"nans":$is.nan,"objects":$is.obj,"functions":$is.fun,"regexps":$is.regx,"arrays":$is.arr,"dates":$is.date,"errors":$is.err,"elements":$is.elem,"documents":$is.doc});
_addTypes("maps",{"undefinedmap":$is.void,"nullmap":$is.nil,"booleanmap":$is.bool,"stringmap":$is.str,"numbermap":$is.num,"nanmap":$is.nan,"objectmap":$is.obj,"functionmap":$is.func,"regexpmap":$is.regex,"arraymap":$is.arr,"datemap":$is.date,"errormap":$is.err,"elementmap":$is.elem,"documentmap":$is.doc});_addShortcuts({"nil":"null","bool":"boolean","str":"string","num":"number","void":"undefined","obj":"object","func":"function","fun":"function","fn":"function","regex":"regexp","regx":"regexp","re":"regexp",
"arr":"array","err":"error","args":"arguments","elem":"element","doc":"document","undefinedes":"undefineds","voids":"undefineds","nils":"nulls","strs":"strings","nums":"numbers","bools":"booleans","objs":"objects","funcs":"functions","funs":"functions","fns":"functions","regexes":"regexps","regexs":"regexps","res":"regexps","arrs":"arrays","errs":"errors","elems":"elements","docs":"documents","voidmap":"undefinedmap","nilmap":"nullmap","strmap":"stringmap","nummap":"numbermap","boolmap":"booleanmap",
"objmap":"objectmap","funcmap":"functionmap","funmap":"functionmap","fnmap":"functionmap","regexmap":"regexpmap","regxmap":"regexpmap","remap":"regexpmap","arrmap":"arraymap","errmap":"errormap","elemmap":"elementmap","docmap":"documentmap"});return $types}();var _ALL_SPECIALS=/[^a-z\|]/g;var _SPECIALS=function _SPECIALS_PrivateScope(){var _PIPE=/\|/;var _EXCLAMATION_POINT=/\!/;var _QUESTION_MARK=/\?/;var _EQUAL_SIGN=/\=/;var _ANY=/\*|any/;function hasPipe(val){return _PIPE["test"](val)}function hasExPoint(val){return _EXCLAMATION_POINT["test"](val)}
function hasQuestMark(val){return _QUESTION_MARK["test"](val)}function hasEqSign(val){return _EQUAL_SIGN["test"](val)}function hasAnyGlob(val){return _ANY["test"](val)}var SPECIALS={"|":hasPipe,"!":hasExPoint,"?":hasQuestMark,"\x3d":hasEqSign,"*":hasAnyGlob};return SPECIALS}();function _hasSpecial(special,types){return _SPECIALS[special](types)}function _getChecks(types){var checks;var type;var i;if(_hasSpecial("\x3d",types))types+="|undefined";types=types["toLowerCase"]();types=types["replace"](_ALL_SPECIALS,
"");checks=types["split"]("|");i=checks["length"];while(i--){type="_"+checks[i];if(!$own(_TYPES,type))return NIL;checks[i]=_TYPES[type]}return checks["length"]?checks:NIL}function _getNullable(types){var override;var ensure;var negate;ensure=_hasSpecial("?",types);negate=_hasSpecial("!",types);override=ensure&&negate?NO:ensure||negate;return override?!negate&&ensure:VOID}var _MK_ERR=$mkErrs("is");var _mkErr=_MK_ERR.error;var _mkTypeErr=_MK_ERR.typeError;var _mkRangeErr=_MK_ERR.rangeError;return is}();
var vitals=is;vitals["is"]=is;vitals["VERSION"]=VERSION;module.exports=vitals})(this);