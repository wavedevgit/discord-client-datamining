// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = {};
    var0 = "function pnpm_processBoxShadowTs1(value){return value.endsWith('px')||!isNaN(Number(value));}";
    var3.code = var0;
    var0 = function arg0() {
        _fun34747: for (var _fun34747_ip = 0;;) switch (_fun34747_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.endsWith;
                var0 = 'px';
                var0 = var1.bind(var4)(var0);
                if (var0) {
                    _fun34747_ip = 50;
                    continue _fun34747
                }
            case 21:
                var1 = global;
                var3 = var1.isNaN;
                var1 = var1.Number;
                var2 = undefined;
                var1 = var1.bind(var2)(var4);
                var1 = var3.bind(var2)(var1);
                var0 = !var1;
            case 50:
                return var0;
        }
    };
    var4 = {};
    var0.__closure = var4;
    var4 = 6091944631530.0;
    var0.__workletHash = var4;
    var0.__initData = var3;
    var _closure1_slot2 = var0;
    var0 = {};
    var3 = "function parseBoxShadowString_Pnpm_processBoxShadowTs2(rawBoxShadows){const{isLength}=this.__closure;const result=[];for(const rawBoxShadow of rawBoxShadows.split(/,(?![^()]*\\))/).map(function(bS){return bS.trim();}).filter(function(bS){return bS!=='';})){const boxShadow={offsetX:0,offsetY:0};let offsetX=null;let offsetY=null;let keywordDetectedAfterLength=false;let lengthCount=0;const args=rawBoxShadow.split(/\\s+(?![^(]*\\))/);for(const arg of args){if(isLength(arg)){switch(lengthCount){case 0:offsetX=arg;lengthCount++;break;case 1:if(keywordDetectedAfterLength){return[];}offsetY=arg;lengthCount++;break;case 2:if(keywordDetectedAfterLength){return[];}boxShadow.blurRadius=arg;lengthCount++;break;case 3:if(keywordDetectedAfterLength){return[];}boxShadow.spreadDistance=arg;lengthCount++;break;default:return[];}}else if(arg==='inset'){if(boxShadow.inset){return[];}if(offsetX!==null){keywordDetectedAfterLength=true;}boxShadow.inset=true;continue;}else{if(boxShadow.color){return[];}if(offsetX!=null){keywordDetectedAfterLength=true;}boxShadow.color=arg;continue;}}if(offsetX===null||offsetY===null){return[];}boxShadow.offsetX=offsetX;boxShadow.offsetY=offsetY;result.push(boxShadow);}return result;}";
    var0.code = var3;
    var _closure1_slot3 = var0;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34749: for (var _fun34749_ip = 0;;) switch (_fun34749_ip) {
                case 0:
                    var4 = arg0;
                    var12 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var17 = undefined;
                    var18 = undefined;
                    var0 = new Array(0);
                    var3 = var4.split;
                    var2 = /,(?![^()]*\))/;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.trim;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        var1 = '';
                        var0 = arg0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var11 = var1;
                    var2 = var11[Symbol.iterator];
                    var11 = var2().next;
                    var10 = null;
                    var9 = 0;
                    var7 = 3;
                    var6 = 2;
                    var5 = 1;
                    var4 = true;
                    var3 = 'inset';
                case 105:
                    var21 = var11().value;
                    var19 = var2;
                    if (!(var19 !== var12)) {
                        _fun34749_ip = 525;
                        continue _fun34749
                    }
                case 119: // try_start_7
                    var13 = {
                        'offsetX': 0,
                        'offsetY': 0
                    };
                    var14 = null;
                    var15 = null;
                    var16 = false;
                    var17 = 0;
                    var20 = var21.split;
                    var19 = /\s+(?![^(]*\))/;
                    var21 = var20.bind(var21)(var19);
                    var19 = var21;
                    var20 = var19[Symbol.iterator];
                    var19 = var20().next;
                case 167:
                    var22 = var19().value;
                    var21 = var20;
                    if (!(var21 !== var12)) {
                        _fun34749_ip = 456;
                        continue _fun34749
                    }
                case 181: // try_start_0
                    var18 = var22;
                    var21 = _closure1_slot2;
                    var21 = var21.bind(var12)(var22);
                    if (var21) {
                        _fun34749_ip = 296;
                        continue _fun34749
                    }
                case 196:
                    var21 = var18;
                    if (!(var3 !== var21)) {
                        _fun34749_ip = 252;
                        continue _fun34749
                    }
                case 203:
                    var21 = var13;
                    var21 = var21.color;
                    if (var21) {
                        _fun34749_ip = 240;
                        continue _fun34749
                    }
                case 214:
                    var21 = var14;
                    if (!(var10 != var21)) {
                        _fun34749_ip = 223;
                        continue _fun34749
                    }
                case 221:
                    var16 = true;
                case 223:
                    var22 = var13;
                    var21 = var18;
                    var22.color = var21;
                    _fun34749_ip = 444;
                    continue _fun34749;
                case 240: // try_end0
                    var20.return();
                case 243: // try_end7
                    var2.return();
                    var21 = new Array(0);
                    return var21;
                case 252: // try_start_1 // try_start_8
                    var21 = var13;
                    var21 = var21.inset;
                    if (var21) {
                        _fun34749_ip = 284;
                        continue _fun34749
                    }
                case 264:
                    var21 = var14;
                    if (!(var10 !== var21)) {
                        _fun34749_ip = 273;
                        continue _fun34749
                    }
                case 271:
                    var16 = true;
                case 273:
                    var21 = var13;
                    var21.inset = var4;
                case 282: // try_end1
                    _fun34749_ip = 167;
                    continue _fun34749;
                case 284:
                    var20.return();
                case 287: // try_end8
                    var2.return();
                    var21 = new Array(0);
                    return var21;
                case 296: // try_start_2 // try_start_9
                    var21 = var17;
                    if (!(var9 !== var21)) {
                        _fun34749_ip = 435;
                        continue _fun34749
                    }
                case 306:
                    if (!(var5 !== var21)) {
                        _fun34749_ip = 406;
                        continue _fun34749
                    }
                case 310:
                    if (!(var6 !== var21)) {
                        _fun34749_ip = 368;
                        continue _fun34749
                    }
                case 314:
                    if (!(var7 !== var21)) {
                        _fun34749_ip = 330;
                        continue _fun34749
                    }
                case 318: // try_end2
                    var20.return();
                case 321: // try_end9
                    var2.return();
                    var21 = new Array(0);
                    return var21;
                case 330: // try_start_3 // try_start_10
                    var21 = var16;
                    if (var21) {
                        _fun34749_ip = 356;
                        continue _fun34749
                    }
                case 336:
                    var22 = var13;
                    var21 = var18;
                    var22.spreadDistance = var21;
                    var21 = var17;
                    var17 = var21 + 1;
                    _fun34749_ip = 444;
                    continue _fun34749;
                case 356: // try_end3
                    var20.return();
                case 359: // try_end10
                    var2.return();
                    var21 = new Array(0);
                    return var21;
                case 368: // try_start_4 // try_start_11
                    var21 = var16;
                    if (var21) {
                        _fun34749_ip = 394;
                        continue _fun34749
                    }
                case 374:
                    var22 = var13;
                    var21 = var18;
                    var22.blurRadius = var21;
                    var21 = var17;
                    var17 = var21 + 1;
                    _fun34749_ip = 444;
                    continue _fun34749;
                case 394: // try_end4
                    var20.return();
                case 397: // try_end11
                    var2.return();
                    var21 = new Array(0);
                    return var21;
                case 406: // try_start_5 // try_start_12
                    var21 = var16;
                    if (var21) {
                        _fun34749_ip = 423;
                        continue _fun34749
                    }
                case 412:
                    var15 = var18;
                    var21 = var17;
                    var17 = var21 + 1;
                    _fun34749_ip = 444;
                    continue _fun34749;
                case 423: // try_end5
                    var20.return();
                case 426: // try_end12
                    var2.return();
                    var21 = new Array(0);
                    return var21;
                case 435: // try_start_6 // try_start_13
                    var14 = var18;
                    var21 = var17;
                    var17 = var21 + 1;
                case 444: // try_end6
                    _fun34749_ip = 167;
                    continue _fun34749;
                case 449: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6
                    CatchBlockStart(arg_register = 19);
                    var20.return();
                    throw var19;
                case 456:
                    var19 = var14;
                    if (!(var10 !== var19)) {
                        _fun34749_ip = 509;
                        continue _fun34749
                    }
                case 463:
                    var19 = var15;
                    if (!(var10 !== var19)) {
                        _fun34749_ip = 509;
                        continue _fun34749
                    }
                case 470:
                    var21 = var13;
                    var19 = var14;
                    var21.offsetX = var19;
                    var19 = var15;
                    var21.offsetY = var19;
                    var20 = var0;
                    var19 = var20.push;
                    var19 = var19.bind(var20)(var21);
                case 504: // try_end13
                    _fun34749_ip = 105;
                    continue _fun34749;
                case 509:
                    var2.return();
                    var1 = new Array(0);
                    return var1;
                case 518: // catch_target7 // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13
                    CatchBlockStart(arg_register = 1);
                    var2.return();
                    throw var1;
                case 525:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.isLength = var3;
        var0.__closure = var2;
        var2 = 13799106280870.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var3 = var3.bind(var0)();
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function parseLength_Pnpm_processBoxShadowTs3(length){const{isLength}=this.__closure;const argsWithUnitsRegex=/([+-]?\\d*(\\.\\d+)?)([\\w\\W]+)?/g;const match=argsWithUnitsRegex.exec(length);if(!match||!isLength(length)){return null;}return Number(match[1]);}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34753: for (var _fun34753_ip = 0;;) switch (_fun34753_ip) {
                case 0:
                    var5 = arg0;
                    var1 = /([+-]?\d*(\.\d+)?)([\w\W]+)?/g;
                    var0 = var1.exec;
                    var4 = var0.bind(var1)(var5);
                    var0 = null;
                    if (!var4) {
                        _fun34753_ip = 72;
                        continue _fun34753
                    }
                case 33:
                    var1 = _closure1_slot2;
                    var3 = undefined;
                    var1 = var1.bind(var3)(var5);
                    var0 = null;
                    if (!var1) {
                        _fun34753_ip = 72;
                        continue _fun34753
                    }
                case 52:
                    var1 = global;
                    var2 = var1.Number;
                    var1 = 1;
                    var1 = var4[var1];
                    var0 = var2.bind(var3)(var1);
                case 72:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot2;
        var2.isLength = var3;
        var0.__closure = var2;
        var2 = 16787390997763.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot6 = var3;
    var3 = {};
    var4 = 'function processBoxShadow_Pnpm_processBoxShadowTs4(props){const{parseBoxShadowString,parseLength}=this.__closure;const result=[];const rawBoxShadows=props.boxShadow;if(rawBoxShadows===null){return result;}let boxShadowList;if(typeof rawBoxShadows===\'string\'){boxShadowList=parseBoxShadowString(rawBoxShadows.replace(/\\n/g,\' \'));}else if(Array.isArray(rawBoxShadows)){boxShadowList=rawBoxShadows;}else{throw new ReanimatedError("Box shadow value must be an array of shadow objects or a string. Received: "+JSON.stringify(rawBoxShadows));}for(const rawBoxShadow of boxShadowList){const parsedBoxShadow={offsetX:0,offsetY:0};let value;for(const arg in rawBoxShadow){switch(arg){case\'offsetX\':value=typeof rawBoxShadow.offsetX===\'string\'?parseLength(rawBoxShadow.offsetX):rawBoxShadow.offsetX;if(value===null){return[];}parsedBoxShadow.offsetX=value;break;case\'offsetY\':value=typeof rawBoxShadow.offsetY===\'string\'?parseLength(rawBoxShadow.offsetY):rawBoxShadow.offsetY;if(value===null){return[];}parsedBoxShadow.offsetY=value;break;case\'spreadDistance\':value=typeof rawBoxShadow.spreadDistance===\'string\'?parseLength(rawBoxShadow.spreadDistance):rawBoxShadow.spreadDistance;if(value===null){return[];}parsedBoxShadow.spreadDistance=value;break;case\'blurRadius\':value=typeof rawBoxShadow.blurRadius===\'string\'?parseLength(rawBoxShadow.blurRadius):rawBoxShadow.blurRadius;if(value===null||value<0){return[];}parsedBoxShadow.blurRadius=value;break;case\'color\':parsedBoxShadow.color=rawBoxShadow.color;break;case\'inset\':parsedBoxShadow.inset=rawBoxShadow.inset;}}result.push(parsedBoxShadow);}props.boxShadow=result;}';
    var3.code = var4;
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var0 = function arg0() {
            _fun34755: for (var _fun34755_ip = 0;;) switch (_fun34755_ip) {
                case 0:
                    var3 = arg0;
                    var1 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var17 = undefined;
                    var0 = new Array(0);
                    var8 = var3.boxShadow;
                    var14 = null;
                    if (!(var14 !== var8)) {
                        _fun34755_ip = 723;
                        continue _fun34755
                    }
                case 30:
                    var13 = 'string';
                    var2 = typeof var8;
                    if (!(var13 !== var2)) {
                        _fun34755_ip = 157;
                        continue _fun34755
                    }
                case 41:
                    var4 = global;
                    var5 = var4.Array;
                    var2 = var5.isArray;
                    var5 = var2.bind(var5)(var8);
                    var2 = var8;
                    if (var5) {
                        _fun34755_ip = 200;
                        continue _fun34755
                    }
                case 68:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 0;
                    var5 = var7[var5];
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.ReanimatedError;
                    var7 = var4.JSON;
                    var5 = var7.stringify;
                    var7 = var5.bind(var7)(var8);
                    var4 = var4.HermesInternal;
                    var5 = var4.concat;
                    var4 = 'Box shadow value must be an array of shadow objects or a string. Received: ';
                    var27 = var5.bind(var4)(var7);
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var28 = var5;
                    var4 = new var28[var6](var27, var26);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
                case 157:
                    var5 = _closure1_slot4;
                    var7 = var8.replace;
                    var6 = /\n/g;
                    var4 = ' ';
                    var4 = var7.bind(var8)(var6, var4);
                    var2 = var5.bind(var1)(var4);
                case 200:
                    var12 = var2;
                    var4 = var12[Symbol.iterator];
                    var12 = var4().next;
                    var11 = 0;
                    var9 = 'inset';
                    var8 = 'color';
                    var7 = 'blurRadius';
                    var6 = 'spreadDistance';
                    var5 = 'offsetY';
                    var2 = 'offsetX';
                case 235:
                    var18 = var12().value;
                    var19 = var4;
                    if (!(var19 !== var1)) {
                        _fun34755_ip = 712;
                        continue _fun34755
                    }
                case 249: // try_start_0
                    var15 = var18;
                    var16 = {
                        'offsetX': 0,
                        'offsetY': 0
                    };
                    var17 = undefined;
                    var21 = var18;
                    for (var18 in var21)
                        case 278: {
                            case 290: var23 = var18;
                            if (!(var2 !== var23)) {
                                _fun34755_ip = 606;
                                continue _fun34755
                            }
                            case 300: if (!(var5 !== var23)) {
                                _fun34755_ip = 528;
                                continue _fun34755
                            }
                            case 307: if (!(var6 !== var23)) {
                                _fun34755_ip = 450;
                                continue _fun34755
                            }
                            case 314: if (!(var7 !== var23)) {
                                _fun34755_ip = 365;
                                continue _fun34755
                            }
                            case 318: if (!(var8 !== var23)) {
                                _fun34755_ip = 346;
                                continue _fun34755
                            }
                            case 322: if (var9 !== var23) {
                                _fun34755_ip = 278;
                                continue _fun34755
                            }
                            case 326: var24 = var16;
                            var23 = var15;
                            var23 = var23.inset;
                            var24.inset = var23;
                            _fun34755_ip = 278;
                            continue _fun34755;
                            case 346: var24 = var16;
                            var23 = var15;
                            var23 = var23.color;
                            var24.color = var23;
                            _fun34755_ip = 278;
                            continue _fun34755;
                            case 365: var23 = var15;
                            var23 = var23.blurRadius;
                            var23 = typeof var23;
                            if (!(var13 !== var23)) {
                                _fun34755_ip = 392;
                                continue _fun34755
                            }
                            case 381: var23 = var15;
                            var23 = var23.blurRadius;
                            _fun34755_ip = 410;
                            continue _fun34755;
                            case 392: var25 = _closure1_slot6;
                            var24 = var15;
                            var24 = var24.blurRadius;
                            var23 = var25.bind(var1)(var24);
                            case 410: var17 = var23;
                            if (!(var14 !== var23)) {
                                _fun34755_ip = 441;
                                continue _fun34755
                            }
                            case 417: var23 = var17;
                            if (!(!(var23 < var11))) {
                                _fun34755_ip = 441;
                                continue _fun34755
                            }
                            case 424: var24 = var16;
                            var23 = var17;
                            var24.blurRadius = var23;
                            _fun34755_ip = 278;
                            continue _fun34755;
                            case 441: // try_end0
                                var4.return();
                            var23 = new Array(0);
                            return var23;
                            case 450: // try_start_1
                                var23 = var15;
                            var23 = var23.spreadDistance;
                            var23 = typeof var23;
                            if (!(var13 !== var23)) {
                                _fun34755_ip = 477;
                                continue _fun34755
                            }
                            case 466: var23 = var15;
                            var23 = var23.spreadDistance;
                            _fun34755_ip = 495;
                            continue _fun34755;
                            case 477: var25 = _closure1_slot6;
                            var24 = var15;
                            var24 = var24.spreadDistance;
                            var23 = var25.bind(var1)(var24);
                            case 495: var17 = var23;
                            if (!(var14 !== var23)) {
                                _fun34755_ip = 519;
                                continue _fun34755
                            }
                            case 502: var24 = var16;
                            var23 = var17;
                            var24.spreadDistance = var23;
                            _fun34755_ip = 278;
                            continue _fun34755;
                            case 519: // try_end1
                                var4.return();
                            var23 = new Array(0);
                            return var23;
                            case 528: // try_start_2
                                var23 = var15;
                            var23 = var23.offsetY;
                            var23 = typeof var23;
                            if (!(var13 !== var23)) {
                                _fun34755_ip = 555;
                                continue _fun34755
                            }
                            case 544: var23 = var15;
                            var23 = var23.offsetY;
                            _fun34755_ip = 573;
                            continue _fun34755;
                            case 555: var25 = _closure1_slot6;
                            var24 = var15;
                            var24 = var24.offsetY;
                            var23 = var25.bind(var1)(var24);
                            case 573: var17 = var23;
                            if (!(var14 !== var23)) {
                                _fun34755_ip = 597;
                                continue _fun34755
                            }
                            case 580: var24 = var16;
                            var23 = var17;
                            var24.offsetY = var23;
                            _fun34755_ip = 278;
                            continue _fun34755;
                            case 597: // try_end2
                                var4.return();
                            var23 = new Array(0);
                            return var23;
                            case 606: // try_start_3
                                var23 = var15;
                            var23 = var23.offsetX;
                            var23 = typeof var23;
                            if (!(var13 !== var23)) {
                                _fun34755_ip = 633;
                                continue _fun34755
                            }
                            case 622: var23 = var15;
                            var23 = var23.offsetX;
                            _fun34755_ip = 651;
                            continue _fun34755;
                            case 633: var25 = _closure1_slot6;
                            var24 = var15;
                            var24 = var24.offsetX;
                            var23 = var25.bind(var1)(var24);
                            case 651: var17 = var23;
                            if (!(var14 !== var23)) {
                                _fun34755_ip = 675;
                                continue _fun34755
                            }
                            case 658: var24 = var16;
                            var23 = var17;
                            var24.offsetX = var23;
                            _fun34755_ip = 278;
                            continue _fun34755;
                            case 675: // try_end3
                                var4.return();
                            var18 = new Array(0);
                            return var18;
                        }
                case 684: // try_start_4
                    var20 = var0;
                    var19 = var20.push;
                    var18 = var16;
                    var18 = var19.bind(var20)(var18);
                case 700: // try_end4
                    _fun34755_ip = 235;
                    continue _fun34755;
                case 705: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register = 2);
                    var4.return();
                    throw var2;
                case 712:
                    var2 = var0;
                    var3.boxShadow = var2;
                    return var1;
                case 723:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot4;
        var2.parseBoxShadowString = var3;
        var3 = _closure1_slot6;
        var2.parseLength = var3;
        var0.__closure = var2;
        var2 = 5021783745910.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.processBoxShadow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3691]);