// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: walkErrorTree, environment: var1
        _fun10427: for (var _fun10427_ip = 0;;) switch (_fun10427_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var4 = arg2;
                var7 = arg3;
                var6 = undefined;
                var5 = undefined;
                var1 = arguments.length;
                var0 = 4;
                if (!(var1 > var0)) {
                    _fun10427_ip = 36;
                    continue _fun10427
                }
            case 28:
                var1 = arguments[var0];
                if (!(var6 === var1)) {
                    _fun10427_ip = 42;
                    continue _fun10427
                }
            case 36:
                var2 = new Array(0);
                _fun10427_ip = 46;
                continue _fun10427;
            case 42:
                var2 = arguments[var0];
            case 46:
                var1 = arguments.length;
                var0 = 5;
                if (!(var1 > var0)) {
                    _fun10427_ip = 64;
                    continue _fun10427
                }
            case 56:
                var1 = arguments[var0];
                if (!(var6 === var1)) {
                    _fun10427_ip = 70;
                    continue _fun10427
                }
            case 64:
                var1 = new Array(0);
                _fun10427_ip = 74;
                continue _fun10427;
            case 70:
                var1 = arguments[var0];
            case 74:
                var5 = var4[var7];
                if (!var5) {
                    _fun10427_ip = 487;
                    continue _fun10427
                }
            case 84:
                var0 = var2.length;
                var10 = 1;
                var0 = var0 + var10;
                if (!(!(var0 >= var8))) {
                    _fun10427_ip = 487;
                    continue _fun10427
                }
            case 103:
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var10];
                var12 = var12.bind(var6)(var11);
                var11 = var12.isString;
                var11 = var11.bind(var12)(var5);
                if (var11) {
                    _fun10427_ip = 377;
                    continue _fun10427
                }
            case 140:
                var11 = 'stackElements';
                var11 = var11 in var5;
                if (var11) {
                    _fun10427_ip = 363;
                    continue _fun10427
                }
            case 154:
                var11 = 'stackReturnAddresses';
                var11 = var11 in var5;
                if (var11) {
                    _fun10427_ip = 339;
                    continue _fun10427
                }
            case 168:
                var12 = _closure1_slot0;
                var11 = _closure1_slot1;
                var11 = var11[var10];
                var13 = var12.bind(var6)(var11);
                var12 = var13.isInstanceOf;
                var11 = global;
                var11 = var11.Error;
                var13 = var12.bind(var13)(var5, var11);
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                if (var13) {
                    _fun10427_ip = 307;
                    continue _fun10427
                }
            case 216:
                var10 = var12[var10];
                var13 = var11.bind(var6)(var10);
                var10 = var13.isPlainObject;
                var10 = var10.bind(var13)(var5);
                var14 = {};
                if (var10) {
                    _fun10427_ip = 253;
                    continue _fun10427
                }
            case 241:
                var14.exceptions = var2;
                var14.debugImages = var1;
                return var14;
            case 253:
                var10 = var5.name;
                var15 = 'string';
                var13 = typeof var10;
                var10 = undefined;
                if (!(var15 === var13)) {
                    _fun10427_ip = 276;
                    continue _fun10427
                }
            case 271:
                var10 = var5.name;
            case 276:
                var14.type = var10;
                var10 = var5.message;
                var13 = typeof var10;
                var10 = undefined;
                if (!(var15 === var13)) {
                    _fun10427_ip = 299;
                    continue _fun10427
                }
            case 294:
                var10 = var5.message;
            case 299:
                var14.value = var10;
                var13 = undefined;
                _fun10427_ip = 388;
                continue _fun10427;
            case 307:
                var10 = 2;
                var10 = var12[var10];
                var11 = var11.bind(var6)(var10);
                var10 = var11.exceptionFromError;
                var4 = var4[var7];
                var14 = var10.bind(var11)(var9, var4);
                var13 = undefined;
                _fun10427_ip = 388;
                continue _fun10427;
            case 339:
                var4 = function(arg0) { // Original name: exceptionFromAppleStackReturnAddresses, environment: var3
                    _fun10430: for (var _fun10430_ip = 0;;) switch (_fun10430_ip) {
                        case 0:
                            var3 = arg0;
                            var4 = var3.stackReturnAddresses;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 3;
                            var0 = var1[var0];
                            var1 = undefined;
                            var0 = var2.bind(var1)(var0);
                            var2 = var0.NATIVE;
                            var0 = var2.fetchNativeStackFramesBy;
                            var2 = var0.bind(var2)(var4);
                            var0 = {};
                            var4 = {};
                            var5 = var3.name;
                            var4.type = var5;
                            var3 = var3.message;
                            var4.value = var3;
                            var5 = {};
                            var3 = null;
                            var7 = var3 == var2;
                            var6 = undefined;
                            if (var7) {
                                _fun10430_ip = 102;
                                continue _fun10430
                            }
                        case 86:
                            var8 = var2.frames;
                            var7 = var8.reverse;
                            var6 = var7.bind(var8)();
                        case 102:
                            if (var6) {
                                _fun10430_ip = 109;
                                continue _fun10430
                            }
                        case 105:
                            var6 = new Array(0);
                        case 109:
                            var5.frames = var6;
                            var4.stacktrace = var5;
                            var0.appleException = var4;
                            var3 = var3 == var2;
                            var1 = undefined;
                            if (var3) {
                                _fun10430_ip = 139;
                                continue _fun10430
                            }
                        case 133:
                            var1 = var2.debugMetaImages;
                        case 139:
                            if (var1) {
                                _fun10430_ip = 146;
                                continue _fun10430
                            }
                        case 142:
                            var1 = new Array(0);
                        case 146:
                            var0.appleDebugImages = var1;
                            return var0;
                    }
                };
                var4 = var4.bind(var6)(var5);
                var14 = var4.appleException;
                var13 = var4.appleDebugImages;
                _fun10427_ip = 388;
                continue _fun10427;
            case 363:
                var3 = function(arg0) { // Original name: exceptionFromJavaStackElements, environment: var3
                    var3 = arg0;
                    var1 = _closure1_slot5;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var _closure3_slot0 = var0;
                    var0 = {};
                    var1 = var3.name;
                    var0.type = var1;
                    var1 = var3.message;
                    var0.value = var1;
                    var1 = {};
                    var4 = var3.stackElements;
                    var3 = var4.map;
                    var2 = function(arg0) { // Environment: var2
                        _fun10429: for (var _fun10429_ip = 0;;) switch (_fun10429_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = {};
                                var1 = 'java';
                                var0.platform = var1;
                                var1 = var4.className;
                                var0.module = var1;
                                var1 = var4.fileName;
                                var0.filename = var1;
                                var2 = var4.lineNumber;
                                var1 = 0;
                                var3 = var2 >= var1;
                                var1 = undefined;
                                if (!var3) {
                                    _fun10429_ip = 59;
                                    continue _fun10429
                                }
                            case 53:
                                var1 = var4.lineNumber;
                            case 59:
                                var0.lineno = var1;
                                var1 = var4.methodName;
                                var0.function = var1;
                                var5 = _closure3_slot0;
                                var3 = null;
                                var3 = var3 === var5;
                                if (var3) {
                                    _fun10429_ip = 115;
                                    continue _fun10429
                                }
                            case 91:
                                var5 = var4.className;
                                var4 = var5.startsWith;
                                var1 = _closure3_slot0;
                                var1 = var4.bind(var5)(var1);
                                var3 = !var1;
                            case 115:
                                var1 = !var3;
                                if (!var3) {
                                    _fun10429_ip = 123;
                                    continue _fun10429
                                }
                            case 121:
                                var1 = undefined;
                            case 123:
                                var0.in_app = var1;
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.reverse;
                    var2 = var2.bind(var3)();
                    var1.frames = var2;
                    var0.stacktrace = var1;
                    return var0;
                };
                var14 = var3.bind(var6)(var5);
                var13 = undefined;
                _fun10427_ip = 388;
                continue _fun10427;
            case 377:
                var3 = {};
                var3.value = var5;
                var14 = var3;
                var13 = undefined;
            case 388:
                var4 = _closure1_slot4;
                var12 = new Array(0);
                var11 = var12.concat;
                var3 = _closure1_slot2;
                var10 = var3.bind(var6)(var2);
                var3 = new Array(1);
                var3[0] = var14;
                var3 = var11.bind(var12)(var10, var3);
                var12 = new Array(0);
                var11 = var12.concat;
                var10 = _closure1_slot2;
                var10 = var10.bind(var6)(var1);
                var0 = _closure1_slot2;
                if (var13) {
                    _fun10427_ip = 453;
                    continue _fun10427
                }
            case 449:
                var13 = new Array(0);
            case 453:
                var0 = var0.bind(var6)(var13);
                var16 = var11.bind(var12)(var10, var0);
                var22 = undefined;
                var21 = var9;
                var20 = var8;
                var19 = var5;
                var18 = var7;
                var17 = var3;
                var0 = var22[var4](var21, var20, var19, var18, var17, var16, var15);
                return var0;
            case 487:
                var0 = {};
                var0.exceptions = var2;
                var0.debugImages = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function() { // Original name: fetchNativePackage, environment: var1
        _fun10431: for (var _fun10431_ip = 0;;) switch (_fun10431_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = null;
                if (!(var1 === var2)) {
                    _fun10431_ip = 55;
                    continue _fun10431
                }
            case 13:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.NATIVE;
                var1 = var2.fetchNativePackageName;
                var1 = var1.bind(var2)();
                _closure1_slot3 = var1;
            case 55:
                var0 = _closure1_slot3;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = null;
    var _closure1_slot3 = var3;
    var1 = function() { // Original name: nativeLinkedErrorsIntegration, environment: var1
        _fun10432: for (var _fun10432_ip = 0;;) switch (_fun10432_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun10432_ip = 23;
                    continue _fun10432
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun10432_ip = 27;
                    continue _fun10432
                }
            case 23:
                var0 = {};
                _fun10432_ip = 31;
                continue _fun10432;
            case 27:
                var0 = arguments[var2];
            case 31:
                var2 = var0.key;
                if (var2) {
                    _fun10432_ip = 43;
                    continue _fun10432
                }
            case 39:
                var2 = 'cause';
            case 43:
                var _closure2_slot0 = var2;
                var0 = var0.limit;
                if (var0) {
                    _fun10432_ip = 58;
                    continue _fun10432
                }
            case 55:
                var0 = 5;
            case 58:
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = 'NativeLinkedErrors';
                var0.name = var2;
                var2 = function() { // Original name: setupOnce, environment: var1
                    var0 = undefined;
                    return var0;
                };
                var0.setupOnce = var2;
                var1 = function(arg0, arg1, arg2) { // Original name: preprocessEvent, environment: var1
                    _fun10434: for (var _fun10434_ip = 0;;) switch (_fun10434_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = arg1;
                            var5 = arg2;
                            var7 = _closure2_slot1;
                            var6 = _closure2_slot0;
                            var4 = var2.exception;
                            var0 = undefined;
                            var8 = null;
                            var1 = undefined;
                            if (!(var8 !== var4)) {
                                _fun10434_ip = 47;
                                continue _fun10434
                            }
                        case 36:
                            var1 = undefined;
                            if (!(var1 !== var4)) {
                                _fun10434_ip = 47;
                                continue _fun10434
                            }
                        case 42:
                            var1 = var4.values;
                        case 47:
                            if (!var1) {
                                _fun10434_ip = 312;
                                continue _fun10434
                            }
                        case 53:
                            if (!var3) {
                                _fun10434_ip = 312;
                                continue _fun10434
                            }
                        case 59:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var4 = 1;
                            var4 = var9[var4];
                            var10 = var8.bind(var0)(var4);
                            var9 = var10.isInstanceOf;
                            var8 = var3.originalException;
                            var4 = global;
                            var4 = var4.Error;
                            var4 = var9.bind(var10)(var8, var4);
                            if (!var4) {
                                _fun10434_ip = 312;
                                continue _fun10434
                            }
                        case 114:
                            var4 = var5.getOptions;
                            var4 = var4.bind(var5)();
                            var14 = var4.stackParser;
                            var4 = _closure1_slot4;
                            var12 = var3.originalException;
                            var15 = undefined;
                            var13 = var7;
                            var11 = var6;
                            var3 = var15[var4](var14, var13, var12, var11, var10);
                            var9 = var3.exceptions;
                            var5 = var3.debugImages;
                            var4 = var2.exception;
                            var8 = new Array(0);
                            var7 = var8.concat;
                            var6 = _closure1_slot2;
                            var3 = var2.exception;
                            var3 = var3.values;
                            var6 = var6.bind(var0)(var3);
                            var3 = _closure1_slot2;
                            var3 = var3.bind(var0)(var9);
                            var3 = var7.bind(var8)(var6, var3);
                            var4.values = var3;
                            var3 = var2.debug_meta;
                            if (var3) {
                                _fun10434_ip = 231;
                                continue _fun10434
                            }
                        case 229:
                            var3 = {};
                        case 231:
                            var2.debug_meta = var3;
                            var4 = var2.debug_meta;
                            var3 = var2.debug_meta;
                            var3 = var3.images;
                            if (var3) {
                                _fun10434_ip = 262;
                                continue _fun10434
                            }
                        case 258:
                            var3 = new Array(0);
                        case 262:
                            var4.images = var3;
                            var2 = var2.debug_meta;
                            var4 = var2.images;
                            var3 = var4.push;
                            var2 = var3.apply;
                            var1 = _closure1_slot2;
                            if (var5) {
                                _fun10434_ip = 301;
                                continue _fun10434
                            }
                        case 297:
                            var5 = new Array(0);
                        case 301:
                            var1 = var1.bind(var0)(var5);
                            var1 = var2.bind(var3)(var4, var1);
                        case 312:
                            return var0;
                    }
                };
                var0.preprocessEvent = var1;
                return var0;
        }
    };
    var2.nativeLinkedErrorsIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 817, 1021, 998]);