/**
 * ---------------------------------------------------------------------------
 * VITALS
 * ---------------------------------------------------------------------------
 * @section all
 * @version 5.0.0
 * @see [vitals](https://github.com/imaginate/vitals)
 *
 * @author Adam Smith <adam@imaginate.life> (https://imaginate.life)
 * @copyright 2014-2017 Adam A Smith <adam@imaginate.life>
 */

/// #include @core OPEN ../core/open.js
/// #include @helper $bind ../helpers/bind.js
/// #include @helper $cloneArr ../helpers/clone-arr.js
/// #include @helper $cloneFun ../helpers/clone-fun.js
/// #include @helper $cloneObj ../helpers/clone-obj.js
/// #include @helper $cloneRegx ../helpers/clone-regx.js
/// #include @helper $defProp ../helpers/def-prop.js
/// #include @helper $defProps ../helpers/def-props.js
/// #include @helper $escRegx ../helpers/esc-regx.js
/// #include @helper $getFlags ../helpers/get-flags.js
/// #include @helper $inArr ../helpers/in-arr.js
/// #include @helper $inObj ../helpers/in-obj.js
/// #include @helper $inStr ../helpers/in-str.js
/// #include @helper $match ../helpers/match.js
/// #include @helper $merge ../helpers/merge.js
/// #include @helper $ownsOne ../helpers/owns-one.js
/// #include @helper $sliceArr ../helpers/slice-arr.js
/// #include @helper $sliceStr ../helpers/slice-str.js
/// #include @helper $splitKeys ../helpers/split-keys.js
/// #if{{{ @build NODE
/// #include @helper $addSlash ../helpers/add-slash.js
/// #include @helper $fixEol ../helpers/fix-eol.js
/// #include @helper $hasOpt ../helpers/has-opt.js
/// #include @helper $mkdir ../helpers/mkdir.js
/// #include @helper $pathname ../helpers/pathname.js
/// #include @helper $readDir ../helpers/read-dir.js
/// #include @helper $readFile ../helpers/read-file.js
/// #include @helper $writeFile ../helpers/write-file.js
/// #if}}} @build NODE
/// #{{{ @section base
/// #include @super is ../methods/is.js
/// #include @super copy ../methods/copy.js
/// #include @super cut ../methods/cut.js
/// #include @super each ../methods/each.js
/// #include @super fill ../methods/fill.js
/// #include @super filter ../methods/filter.js
/// #include @super fuse ../methods/fuse.js
/// #include @super get ../methods/get.js
/// #include @super has ../methods/has.js
/// #include @super join ../methods/join.js
/// #include @super remap ../methods/remap.js
/// #include @super roll ../methods/roll.js
/// #include @super sew ../methods/sew.js
/// #include @super slice ../methods/slice.js
/// #include @super stringify ../methods/stringify.js
/// #include @super to ../methods/to.js
/// #include @super until ../methods/until.js
/// #}}} @section base
/// #{{{ @section strict
/// #include @super amend ../methods/amend.js
/// #include @super assign ../methods/assign.js
/// #include @super create ../methods/create.js
/// #include @super freeze ../methods/freeze.js
/// #include @super seal ../methods/seal.js
/// #}}} @section strict
/// #if{{{ @build NODE
/// #{{{ @section fs
/// #include @super cp ../methods/cp.js
/// #}}} @section fs
/// #{{{ @section shell
/// #include @super run ../methods/run.js
/// #}}} @section shell
/// #if}}} @build NODE
/// #include @core CLOSE ../core/close.js

// vim:ts=2:et:ai:cc=79:fen:fdm=marker:eol
