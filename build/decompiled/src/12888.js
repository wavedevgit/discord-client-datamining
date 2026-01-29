// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var3 = function(arg0) { // Original name: normalize, environment: var1
        _fun99248: for (var _fun99248_ip = 0;;) switch (_fun99248_ip) {
            case 0:
                var5 = undefined;
                var6 = undefined;
                var2 = arg0;
                var1 = undefined;
                var0 = undefined;
                var3 = arguments.length;
                var4 = 1;
                var7 = var3 > var4;
                var8 = 100;
                var3 = var8;
                if (!var7) {
                    _fun99248_ip = 45;
                    continue _fun99248
                }
            case 30:
                var7 = arguments[var4];
                var3 = var8;
                if (!(var5 !== var7)) {
                    _fun99248_ip = 45;
                    continue _fun99248
                }
            case 41:
                var3 = arguments[var4];
            case 45:
                var1 = var3;
                var3 = arguments.length;
                var4 = 2;
                var7 = var3 > var4;
                var8 = inf;
                var3 = var8;
                if (!var7) {
                    _fun99248_ip = 89;
                    continue _fun99248
                }
            case 74:
                var7 = arguments[var4];
                var3 = var8;
                if (!(var5 !== var7)) {
                    _fun99248_ip = 89;
                    continue _fun99248
                }
            case 85:
                var3 = arguments[var4];
            case 89:
                var0 = var3;
            case 92: // try_start_0
                var4 = _closure1_slot5;
                var11 = var2;
                var10 = var1;
                var9 = var0;
                var12 = '';
                var13 = undefined;
                var0 = var13[var4](var12, var11, var10, var9, var8);
            case 118: // try_end0
                return var0;
            case 120: // catch_target0
                CatchBlockStart(arg_register = 4);
                var0 = {};
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = '**non-serializable** (';
                var1 = ')';
                var1 = var3.bind(var2)(var4, var1);
                var0.ERROR = var1;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = function(arg0, arg1) { // Original name: visit, environment: var1
        _fun99249: for (var _fun99249_ip = 0;;) switch (_fun99249_ip) {
            case 0:
                var0 = arg1;
                var3 = undefined;
                var5 = undefined;
                var16 = undefined;
                var17 = undefined;
                var18 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var7 = 2;
                var2 = var2 > var7;
                var9 = inf;
                var6 = var9;
                if (!var2) {
                    _fun99249_ip = 56;
                    continue _fun99249
                }
            case 41:
                var2 = arguments[var7];
                var6 = var9;
                if (!(var3 !== var2)) {
                    _fun99249_ip = 56;
                    continue _fun99249
                }
            case 52:
                var6 = arguments[var7];
            case 56:
                var2 = arguments.length;
                var4 = 3;
                var8 = var2 > var4;
                var2 = var9;
                if (!var8) {
                    _fun99249_ip = 87;
                    continue _fun99249
                }
            case 72:
                var8 = arguments[var4];
                var2 = var9;
                if (!(var3 !== var8)) {
                    _fun99249_ip = 87;
                    continue _fun99249
                }
            case 83:
                var2 = arguments[var4];
            case 87:
                var16 = var2;
                var4 = arguments.length;
                var2 = 4;
                if (!(var4 > var2)) {
                    _fun99249_ip = 108;
                    continue _fun99249
                }
            case 100:
                var4 = arguments[var2];
                if (!(var3 === var4)) {
                    _fun99249_ip = 143;
                    continue _fun99249
                }
            case 108:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 1;
                var4 = var9[var4];
                var8 = var8.bind(var3)(var4);
                var4 = var8.memoBuilder;
                var4 = var4.bind(var8)();
                _fun99249_ip = 147;
                continue _fun99249;
            case 143:
                var4 = arguments[var2];
            case 147:
                var17 = var4;
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var4, var7);
                var14 = 0;
                var5 = var2[var14];
                var13 = 1;
                var2 = var2[var13];
                var4 = null;
                if (!(var4 != var0)) {
                    _fun99249_ip = 624;
                    continue _fun99249
                }
            case 185:
                var9 = ['boolean', 'string'];
                var8 = var9.includes;
                var4 = typeof var0;
                var8 = var8.bind(var9)(var4);
                if (var8) {
                    _fun99249_ip = 624;
                    continue _fun99249
                }
            case 214:
                var9 = 'number';
                if (!(var9 === var4)) {
                    _fun99249_ip = 247;
                    continue _fun99249
                }
            case 222:
                var4 = global;
                var8 = var4.Number;
                var4 = var8.isFinite;
                var4 = var4.bind(var8)(var0);
                if (var4) {
                    _fun99249_ip = 624;
                    continue _fun99249
                }
            case 247:
                var8 = function(arg0, arg1) { // Original name: stringifyValue, environment: var4
                    _fun99250: for (var _fun99250_ip = 0;;) switch (_fun99250_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = arg1;
                            var4 = undefined;
                            var5 = undefined;
                        case 10: // try_start_0
                            var3 = var0;
                            var2 = 'domain';
                            if (!(var2 === var3)) {
                                _fun99250_ip = 56;
                                continue _fun99250
                            }
                        case 21:
                            var2 = var1;
                            if (!var2) {
                                _fun99250_ip = 56;
                                continue _fun99250
                            }
                        case 27:
                            var2 = var1;
                            var3 = 'object';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun99250_ip = 56;
                                continue _fun99250
                            }
                        case 41:
                            var2 = var1;
                            var2 = var2._events;
                            if (var2) {
                                _fun99250_ip = 663;
                                continue _fun99250
                            }
                        case 56:
                            var2 = var0;
                            var0 = 'domainEmitter';
                            if (!(var0 !== var2)) {
                                _fun99250_ip = 655;
                                continue _fun99250
                            }
                        case 72:
                            var0 = _closure1_slot0;
                            if (!(var4 !== var0)) {
                                _fun99250_ip = 97;
                                continue _fun99250
                            }
                        case 83:
                            var3 = var1;
                            var0 = _closure1_slot0;
                            if (!(var3 !== var0)) {
                                _fun99250_ip = 647;
                                continue _fun99250
                            }
                        case 97:
                            var0 = global;
                            var3 = var0.window;
                            var6 = 'undefined';
                            var3 = typeof var3;
                            if (!(var6 !== var3)) {
                                _fun99250_ip = 131;
                                continue _fun99250
                            }
                        case 115:
                            var7 = var1;
                            var3 = var0.window;
                            if (!(var7 !== var3)) {
                                _fun99250_ip = 639;
                                continue _fun99250
                            }
                        case 131:
                            var3 = var0.document;
                            var3 = typeof var3;
                            if (!(var6 !== var3)) {
                                _fun99250_ip = 160;
                                continue _fun99250
                            }
                        case 144:
                            var6 = var1;
                            var3 = var0.document;
                            if (!(var6 !== var3)) {
                                _fun99250_ip = 631;
                                continue _fun99250
                            }
                        case 160:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var7 = 3;
                            var3 = var3[var7];
                            var8 = var6.bind(var4)(var3);
                            var6 = var8.isVueViewModel;
                            var3 = var1;
                            var3 = var6.bind(var8)(var3);
                            if (var3) {
                                _fun99250_ip = 623;
                                continue _fun99250
                            }
                        case 200:
                            var6 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var7 = var6.bind(var4)(var3);
                            var6 = var7.isSyntheticEvent;
                            var3 = var1;
                            var3 = var6.bind(var7)(var3);
                            if (var3) {
                                _fun99250_ip = 615;
                                continue _fun99250
                            }
                        case 237:
                            var3 = var1;
                            var6 = 'number';
                            var3 = typeof var3;
                            if (!(var6 === var3)) {
                                _fun99250_ip = 304;
                                continue _fun99250
                            }
                        case 251:
                            var7 = var0.Number;
                            var6 = var7.isFinite;
                            var3 = var1;
                            var3 = var6.bind(var7)(var3);
                            if (var3) {
                                _fun99250_ip = 304;
                                continue _fun99250
                            }
                        case 274:
                            var8 = var1;
                            var3 = var0.HermesInternal;
                            var7 = var3.concat;
                            var6 = '[';
                            var3 = ']';
                            var3 = var7.bind(var6)(var8, var3);
                        case 302: // try_end0
                            return var3;
                        case 304: // try_start_1
                            var3 = var1;
                            var6 = 'function';
                            var3 = typeof var3;
                            if (!(var6 !== var3)) {
                                _fun99250_ip = 555;
                                continue _fun99250
                            }
                        case 321:
                            var3 = var1;
                            var6 = 'symbol';
                            var3 = typeof var3;
                            if (!(var6 !== var3)) {
                                _fun99250_ip = 514;
                                continue _fun99250
                            }
                        case 338:
                            var3 = var1;
                            var6 = 'bigint';
                            var3 = typeof var3;
                            if (!(var6 !== var3)) {
                                _fun99250_ip = 471;
                                continue _fun99250
                            }
                        case 352:
                            var7 = var1;
                            var6 = var0.Object;
                            var3 = var6.getPrototypeOf;
                            var3 = var3.bind(var6)(var7);
                            var7 = 'null prototype';
                            if (!var3) {
                                _fun99250_ip = 391;
                                continue _fun99250
                            }
                        case 381:
                            var3 = var3.constructor;
                            var7 = var3.name;
                        case 391:
                            var5 = var7;
                            var6 = /^HTML(\w*)Element$/;
                            var3 = var6.test;
                            var3 = var3.bind(var6)(var7);
                            var8 = var5;
                            var5 = var0.HermesInternal;
                            var7 = var5.concat;
                            if (var3) {
                                _fun99250_ip = 453;
                                continue _fun99250
                            }
                        case 435:
                            var5 = '[object ';
                            var3 = ']';
                            var3 = var7.bind(var5)(var8, var3);
                            _fun99250_ip = 469;
                            continue _fun99250;
                        case 453:
                            var6 = '[HTMLElement: ';
                            var5 = ']';
                            var3 = var7.bind(var6)(var8, var5);
                        case 469: // try_end1
                            return var3;
                        case 471: // try_start_2
                            var5 = var0.String;
                            var3 = var1;
                            var7 = var5.bind(var4)(var3);
                            var3 = var0.HermesInternal;
                            var6 = var3.concat;
                            var5 = '[BigInt: ';
                            var3 = ']';
                            var3 = var6.bind(var5)(var7, var3);
                        case 512: // try_end2
                            return var3;
                        case 514: // try_start_3
                            var5 = var0.String;
                            var3 = var1;
                            var7 = var5.bind(var4)(var3);
                            var3 = var0.HermesInternal;
                            var6 = var3.concat;
                            var5 = '[';
                            var3 = ']';
                            var3 = var6.bind(var5)(var7, var3);
                        case 553: // try_end3
                            return var3;
                        case 555: // try_start_4
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 4;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.getFunctionName;
                            var3 = var2.bind(var3)(var1);
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '[Function: ';
                            var0 = ']';
                            var0 = var2.bind(var1)(var3, var0);
                        case 613: // try_end4
                            return var0;
                        case 615:
                            var0 = '[SyntheticEvent]';
                            return var0;
                        case 623:
                            var0 = '[VueViewModel]';
                            return var0;
                        case 631:
                            var0 = '[Document]';
                            return var0;
                        case 639:
                            var0 = '[Window]';
                            return var0;
                        case 647:
                            var0 = '[Global]';
                            return var0;
                        case 655:
                            var0 = '[DomainEmitter]';
                            return var0;
                        case 663:
                            var0 = '[Domain]';
                            return var0;
                        case 671: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register = 3);
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '**non-serializable** (';
                            var0 = ')';
                            var0 = var2.bind(var1)(var3, var0);
                            return var0;
                    }
                };
                var4 = arg0;
                var4 = var8.bind(var3)(var4, var0);
                var10 = var4.startsWith;
                var8 = '[object ';
                var8 = var10.bind(var4)(var8);
                if (var8) {
                    _fun99249_ip = 287;
                    continue _fun99249
                }
            case 285:
                return var4;
            case 287:
                var8 = var0.__sentry_skip_normalization__;
                if (var8) {
                    _fun99249_ip = 622;
                    continue _fun99249
                }
            case 299:
                var8 = var0.__sentry_override_normalization_depth__;
                var8 = typeof var8;
                if (!(var9 === var8)) {
                    _fun99249_ip = 318;
                    continue _fun99249
                }
            case 312:
                var6 = var0.__sentry_override_normalization_depth__;
            case 318:
                var18 = var6;
                if (!(var14 !== var6)) {
                    _fun99249_ip = 599;
                    continue _fun99249
                }
            case 328:
                var5 = var5.bind(var3)(var0);
                if (var5) {
                    _fun99249_ip = 591;
                    continue _fun99249
                }
            case 339:
                var1 = var0;
                if (!var0) {
                    _fun99249_ip = 409;
                    continue _fun99249
                }
            case 345:
                var5 = var1;
                var5 = var5.toJSON;
                var6 = 'function';
                var5 = typeof var5;
                if (!(var6 === var5)) {
                    _fun99249_ip = 409;
                    continue _fun99249
                }
            case 365: // try_start_0
                var10 = _closure1_slot5;
                var5 = var1;
                var1 = var5.toJSON;
                var28 = var1.bind(var5)();
                var1 = var18;
                var27 = var1 - var13;
                var26 = var16;
                var25 = var17;
                var29 = '';
                var30 = undefined;
                var1 = var30[var10](var29, var28, var27, var26, var25, var24);
            case 405: // try_end0
                return var1;
            case 407: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 409:
                var12 = global;
                var5 = var12.Array;
                var1 = var5.isArray;
                var1 = var1.bind(var5)(var0);
                if (var1) {
                    _fun99249_ip = 434;
                    continue _fun99249
                }
            case 430:
                var1 = {};
                _fun99249_ip = 438;
                continue _fun99249;
            case 434:
                var1 = new Array(0);
            case 438:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var6 = var6.bind(var3)(var5);
                var5 = var6.convertToPlainObject;
                var11 = var5.bind(var6)(var0);
                var9 = var11;
                var14 = 0;
                for (var5 in var9)
                    case 479: {
                        var19 = var14;
                        case 491: var6 = var5;
                        var20 = var12.Object;
                        var20 = var20.prototype;
                        var21 = var20.hasOwnProperty;
                        var20 = var21.call;
                        var20 = var20.bind(var21)(var11, var6);
                        var14 = var19;
                        if (!var20) {
                            _fun99249_ip = 479;
                            continue _fun99249
                        }
                        case 528: var20 = var16;
                        if (!(!(var19 >= var20))) {
                            _fun99249_ip = 574;
                            continue _fun99249
                        }
                        case 535: var28 = var11[var6];
                        var23 = _closure1_slot5;
                        var20 = var18;
                        var27 = var20 - var13;
                        var26 = var16;
                        var25 = var17;
                        var30 = undefined;
                        var29 = var6;
                        var20 = var30[var23](var29, var28, var27, var26, var25, var24);
                        var1[var6] = var20;
                        var14 = var19 + 1;
                        _fun99249_ip = 479;
                        continue _fun99249;
                        case 574: var5 = '[MaxProperties ~]';
                        var1[var6] = var5;
                    }
            case 584:
                var2 = var2.bind(var3)(var0);
                return var1;
            case 591:
                var1 = '[Circular ~]';
                return var1;
            case 599:
                var3 = var4.replace;
                var2 = 'object ';
                var1 = '';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 622:
                return var0;
            case 624:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
    var2.normalize = var3;
    var3 = function(arg0) { // Original name: normalizeToSize, environment: var1
        _fun99251: for (var _fun99251_ip = 0;;) switch (_fun99251_ip) {
            case 0:
                var5 = arg0;
                var4 = undefined;
                var2 = undefined;
                var0 = arguments.length;
                var6 = 1;
                var0 = var0 > var6;
                var3 = 3;
                var1 = var3;
                if (!var0) {
                    _fun99251_ip = 41;
                    continue _fun99251
                }
            case 26:
                var0 = arguments[var6];
                var1 = var3;
                if (!(var4 !== var0)) {
                    _fun99251_ip = 41;
                    continue _fun99251
                }
            case 37:
                var1 = arguments[var6];
            case 41:
                var3 = arguments.length;
                var0 = 2;
                var7 = var3 > var0;
                var8 = 102400;
                var3 = var8;
                if (!var7) {
                    _fun99251_ip = 78;
                    continue _fun99251
                }
            case 63:
                var7 = arguments[var0];
                var3 = var8;
                if (!(var4 !== var7)) {
                    _fun99251_ip = 78;
                    continue _fun99251
                }
            case 74:
                var3 = arguments[var0];
            case 78:
                var0 = _closure1_slot4;
                var0 = var0.bind(var4)(var5, var1);
                var7 = function(arg0) { // Original name: jsonSize, environment: var7
                    var0 = global;
                    var3 = var0.JSON;
                    var2 = var3.stringify;
                    var1 = arg0;
                    var2 = var2.bind(var3)(var1);
                    var1 = var0.encodeURI;
                    var0 = undefined;
                    var2 = var1.bind(var0)(var2);
                    var1 = var2.split;
                    var0 = /%..|./;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    var0 = -var0;
                    var0 = ~var0;
                    return var0;
                };
                var7 = var7.bind(var4)(var0);
                if (!(var7 > var3)) {
                    _fun99251_ip = 124;
                    continue _fun99251
                }
            case 109:
                var2 = _closure1_slot6;
                var1 = var1 - var6;
                var0 = var2.bind(var4)(var5, var1, var3);
            case 124:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var2.normalizeToSize = var3;
    var1 = function(arg0, arg1) { // Original name: normalizeUrlToBase, environment: var1
        _fun99253: for (var _fun99253_ip = 0;;) switch (_fun99253_ip) {
            case 0:
                var3 = arg0;
                var8 = arg1;
                var2 = var3;
                var5 = undefined;
                var1 = undefined;
                var0 = undefined;
                var7 = var8.replace;
                var6 = /\\/g;
                var4 = '/';
                var9 = var7.bind(var8)(var6, var4);
                var8 = var9.replace;
                var7 = /[|\\{}()[\]^$+*?.]/g;
                var6 = '\\$&';
                var1 = var8.bind(var9)(var7, var6);
                var0 = var3;
            case 78: // try_start_0
                var3 = global;
                var3 = var3.decodeURI;
                var0 = var3.bind(var5)(var2);
            case 91: // try_end0
                _fun99253_ip = 95;
                continue _fun99253;
            case 93: // catch_target0
                CatchBlockStart(arg_register = 2);
            case 95:
                var3 = var0;
                var2 = var3.replace;
                var0 = /\\/g;
                var4 = var2.bind(var3)(var0, var4);
                var3 = var4.replace;
                var2 = /webpack:\\/ ? /g;
                var0 = '';
                var3 = var3.bind(var4)(var2, var0);
                var2 = var3.replace;
                var0 = global;
                var5 = var0.RegExp;
                var6 = var1;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var1 = '(file://)?/*';
                var0 = '/*';
                var11 = var4.bind(var1)(var6, var0);
                var0 = var5.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var10 = 'ig';
                var12 = var1;
                var0 = new var12[var5](var11, var10, var9);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = 'app:///';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.normalizeUrlToBase = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 12886, 12877, 12864, 12876]);