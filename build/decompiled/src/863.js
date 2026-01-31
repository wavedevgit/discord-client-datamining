// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var3 = function arg0() {
        _fun9089: for (var _fun9089_ip = 0;;) switch (_fun9089_ip) {
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
                    _fun9089_ip = 45;
                    continue _fun9089
                }
            case 30:
                var7 = arguments[var4];
                var3 = var8;
                if (!(var5 !== var7)) {
                    _fun9089_ip = 45;
                    continue _fun9089
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
                    _fun9089_ip = 89;
                    continue _fun9089
                }
            case 74:
                var7 = arguments[var4];
                var3 = var8;
                if (!(var5 !== var7)) {
                    _fun9089_ip = 89;
                    continue _fun9089
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
    var0 = function arg0, arg1() {
        _fun9090: for (var _fun9090_ip = 0;;) switch (_fun9090_ip) {
            case 0:
                var0 = arg1;
                var3 = undefined;
                var8 = undefined;
                var16 = undefined;
                var17 = undefined;
                var18 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var7 = 2;
                var2 = var2 > var7;
                var10 = inf;
                var6 = var10;
                if (!var2) {
                    _fun9090_ip = 58;
                    continue _fun9090
                }
            case 43:
                var2 = arguments[var7];
                var6 = var10;
                if (!(var3 !== var2)) {
                    _fun9090_ip = 58;
                    continue _fun9090
                }
            case 54:
                var6 = arguments[var7];
            case 58:
                var2 = arguments.length;
                var5 = 3;
                var9 = var2 > var5;
                var2 = var10;
                if (!var9) {
                    _fun9090_ip = 89;
                    continue _fun9090
                }
            case 74:
                var9 = arguments[var5];
                var2 = var10;
                if (!(var3 !== var9)) {
                    _fun9090_ip = 89;
                    continue _fun9090
                }
            case 85:
                var2 = arguments[var5];
            case 89:
                var16 = var2;
                var5 = arguments.length;
                var2 = 4;
                if (!(var5 > var2)) {
                    _fun9090_ip = 110;
                    continue _fun9090
                }
            case 102:
                var5 = arguments[var2];
                if (!(var3 === var5)) {
                    _fun9090_ip = 121;
                    continue _fun9090
                }
            case 110:
                var5 = function() {
                    var0 = global;
                    var0 = var0.WeakSet;
                    var2 = var0.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var0
                        }
                    });
                    var3 = var2;
                    var0 = new var3[var0](var2);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var _closure3_slot0 = var0;
                    var0 = new Array(2);
                    var2 = function arg0() {
                        _fun9092: for (var _fun9092_ip = 0;;) switch (_fun9092_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = _closure3_slot0;
                                var0 = var2.has;
                                var0 = var0.bind(var2)(var3);
                                var2 = !var0;
                                var0 = !var2;
                                if (!var2) {
                                    _fun9092_ip = 45;
                                    continue _fun9092
                                }
                            case 29:
                                var2 = _closure3_slot0;
                                var1 = var2.add;
                                var1 = var1.bind(var2)(var3);
                                var0 = false;
                            case 45:
                                return var0;
                        }
                    };
                    var0[0] = var2;
                    var1 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.delete;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0[1] = var1;
                    return var0;
                };
                var5 = var5.bind(var3)();
                _fun9090_ip = 125;
                continue _fun9090;
            case 121:
                var5 = arguments[var2];
            case 125:
                var17 = var5;
                var2 = _closure1_slot3;
                var2 = var2.bind(var3)(var5, var7);
                var14 = 0;
                var5 = var2[var14];
                var13 = 1;
                var2 = var2[var13];
                var7 = null;
                if (!(var7 != var0)) {
                    _fun9090_ip = 598;
                    continue _fun9090
                }
            case 163:
                var9 = ['boolean', 'string'];
                var8 = var9.includes;
                var7 = typeof var0;
                var8 = var8.bind(var9)(var7);
                if (var8) {
                    _fun9090_ip = 598;
                    continue _fun9090
                }
            case 192:
                var8 = 'number';
                if (!(var8 === var7)) {
                    _fun9090_ip = 225;
                    continue _fun9090
                }
            case 200:
                var7 = global;
                var9 = var7.Number;
                var7 = var9.isFinite;
                var7 = var7.bind(var9)(var0);
                if (var7) {
                    _fun9090_ip = 598;
                    continue _fun9090
                }
            case 225:
                var7 = function arg0, arg1() {
                    _fun9094: for (var _fun9094_ip = 0;;) switch (_fun9094_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = arg1;
                            var3 = undefined;
                            var7 = undefined;
                        case 10: // try_start_0
                            var4 = var1;
                            var2 = 'domain';
                            if (!(var2 === var4)) {
                                _fun9094_ip = 56;
                                continue _fun9094
                            }
                        case 21:
                            var2 = var0;
                            if (!var2) {
                                _fun9094_ip = 56;
                                continue _fun9094
                            }
                        case 27:
                            var2 = var0;
                            var4 = 'object';
                            var2 = typeof var2;
                            if (!(var4 === var2)) {
                                _fun9094_ip = 56;
                                continue _fun9094
                            }
                        case 41:
                            var2 = var0;
                            var2 = var2._events;
                            if (var2) {
                                _fun9094_ip = 706;
                                continue _fun9094
                            }
                        case 56:
                            var2 = var1;
                            var1 = 'domainEmitter';
                            if (!(var1 !== var2)) {
                                _fun9094_ip = 698;
                                continue _fun9094
                            }
                        case 72:
                            var1 = _closure1_slot0;
                            if (!(var3 !== var1)) {
                                _fun9094_ip = 97;
                                continue _fun9094
                            }
                        case 83:
                            var2 = var0;
                            var1 = _closure1_slot0;
                            if (!(var2 !== var1)) {
                                _fun9094_ip = 690;
                                continue _fun9094
                            }
                        case 97:
                            var1 = global;
                            var2 = var1.window;
                            var4 = 'undefined';
                            var2 = typeof var2;
                            if (!(var4 !== var2)) {
                                _fun9094_ip = 131;
                                continue _fun9094
                            }
                        case 115:
                            var6 = var0;
                            var2 = var1.window;
                            if (!(var6 !== var2)) {
                                _fun9094_ip = 682;
                                continue _fun9094
                            }
                        case 131:
                            var2 = var1.document;
                            var2 = typeof var2;
                            if (!(var4 !== var2)) {
                                _fun9094_ip = 160;
                                continue _fun9094
                            }
                        case 144:
                            var4 = var0;
                            var2 = var1.document;
                            if (!(var4 !== var2)) {
                                _fun9094_ip = 674;
                                continue _fun9094
                            }
                        case 160:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var6 = 2;
                            var2 = var2[var6];
                            var8 = var4.bind(var3)(var2);
                            var4 = var8.isVueViewModel;
                            var2 = var0;
                            var8 = var4.bind(var8)(var2);
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            if (var8) {
                                _fun9094_ip = 649;
                                continue _fun9094
                            }
                        case 208:
                            var6 = var4[var6];
                            var9 = var2.bind(var3)(var6);
                            var8 = var9.isSyntheticEvent;
                            var6 = var0;
                            var6 = var8.bind(var9)(var6);
                            if (var6) {
                                _fun9094_ip = 641;
                                continue _fun9094
                            }
                        case 237:
                            var6 = var0;
                            var8 = 'number';
                            var6 = typeof var6;
                            if (!(var8 === var6)) {
                                _fun9094_ip = 304;
                                continue _fun9094
                            }
                        case 251:
                            var9 = var1.Number;
                            var8 = var9.isFinite;
                            var6 = var0;
                            var6 = var8.bind(var9)(var6);
                            if (var6) {
                                _fun9094_ip = 304;
                                continue _fun9094
                            }
                        case 274:
                            var10 = var0;
                            var6 = var1.HermesInternal;
                            var9 = var6.concat;
                            var8 = '[';
                            var6 = ']';
                            var6 = var9.bind(var8)(var10, var6);
                        case 302: // try_end0
                            return var6;
                        case 304: // try_start_1
                            var6 = var0;
                            var8 = 'function';
                            var6 = typeof var6;
                            if (!(var8 !== var6)) {
                                _fun9094_ip = 578;
                                continue _fun9094
                            }
                        case 321:
                            var6 = var0;
                            var8 = 'symbol';
                            var6 = typeof var6;
                            if (!(var8 !== var6)) {
                                _fun9094_ip = 537;
                                continue _fun9094
                            }
                        case 338:
                            var6 = var0;
                            var8 = 'bigint';
                            var6 = typeof var6;
                            if (!(var8 !== var6)) {
                                _fun9094_ip = 494;
                                continue _fun9094
                            }
                        case 355:
                            var9 = var0;
                            var8 = var1.Object;
                            var6 = var8.getPrototypeOf;
                            var6 = var6.bind(var8)(var9);
                            var8 = null;
                            var8 = var8 != var6;
                            var10 = 'null prototype';
                            var9 = var10;
                            if (!var8) {
                                _fun9094_ip = 414;
                                continue _fun9094
                            }
                        case 393:
                            var8 = var6.constructor;
                            var9 = var10;
                            if (!var8) {
                                _fun9094_ip = 414;
                                continue _fun9094
                            }
                        case 404:
                            var6 = var6.constructor;
                            var9 = var6.name;
                        case 414:
                            var7 = var9;
                            var8 = /^HTML(\w*)Element$/;
                            var6 = var8.test;
                            var6 = var6.bind(var8)(var9);
                            var10 = var7;
                            var7 = var1.HermesInternal;
                            var9 = var7.concat;
                            if (var6) {
                                _fun9094_ip = 476;
                                continue _fun9094
                            }
                        case 458:
                            var7 = '[object ';
                            var6 = ']';
                            var6 = var9.bind(var7)(var10, var6);
                            _fun9094_ip = 492;
                            continue _fun9094;
                        case 476:
                            var8 = '[HTMLElement: ';
                            var7 = ']';
                            var6 = var9.bind(var8)(var10, var7);
                        case 492: // try_end1
                            return var6;
                        case 494: // try_start_2
                            var7 = var1.String;
                            var6 = var0;
                            var9 = var7.bind(var3)(var6);
                            var6 = var1.HermesInternal;
                            var8 = var6.concat;
                            var7 = '[BigInt: ';
                            var6 = ']';
                            var6 = var8.bind(var7)(var9, var6);
                        case 535: // try_end2
                            return var6;
                        case 537: // try_start_3
                            var7 = var1.String;
                            var6 = var0;
                            var9 = var7.bind(var3)(var6);
                            var6 = var1.HermesInternal;
                            var8 = var6.concat;
                            var7 = '[';
                            var6 = ']';
                            var6 = var8.bind(var7)(var9, var6);
                        case 576: // try_end3
                            return var6;
                        case 578: // try_start_4
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 3;
                            var5 = var7[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.getFunctionName;
                            var5 = var0;
                            var7 = var6.bind(var7)(var5);
                            var1 = var1.HermesInternal;
                            var6 = var1.concat;
                            var5 = '[Function: ';
                            var1 = ']';
                            var1 = var6.bind(var5)(var7, var1);
                        case 639: // try_end4
                            return var1;
                        case 641:
                            var1 = '[SyntheticEvent]';
                            return var1;
                        case 649: // try_start_5
                            var1 = 3;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.getVueInternalName;
                            var0 = var1.bind(var2)(var0);
                        case 672: // try_end5
                            return var0;
                        case 674:
                            var0 = '[Document]';
                            return var0;
                        case 682:
                            var0 = '[Window]';
                            return var0;
                        case 690:
                            var0 = '[Global]';
                            return var0;
                        case 698:
                            var0 = '[DomainEmitter]';
                            return var0;
                        case 706:
                            var0 = '[Domain]';
                            return var0;
                        case 714: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5
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
                var4 = var7.bind(var3)(var4, var0);
                var9 = var4.startsWith;
                var7 = '[object ';
                var7 = var9.bind(var4)(var7);
                if (var7) {
                    _fun9090_ip = 261;
                    continue _fun9090
                }
            case 259:
                return var4;
            case 261:
                var7 = var0.__sentry_skip_normalization__;
                if (var7) {
                    _fun9090_ip = 596;
                    continue _fun9090
                }
            case 273:
                var7 = var0.__sentry_override_normalization_depth__;
                var7 = typeof var7;
                if (!(var8 === var7)) {
                    _fun9090_ip = 292;
                    continue _fun9090
                }
            case 286:
                var6 = var0.__sentry_override_normalization_depth__;
            case 292:
                var18 = var6;
                if (!(var14 !== var6)) {
                    _fun9090_ip = 573;
                    continue _fun9090
                }
            case 302:
                var5 = var5.bind(var3)(var0);
                if (var5) {
                    _fun9090_ip = 565;
                    continue _fun9090
                }
            case 313:
                var1 = var0;
                if (!var0) {
                    _fun9090_ip = 383;
                    continue _fun9090
                }
            case 319:
                var5 = var1;
                var5 = var5.toJSON;
                var6 = 'function';
                var5 = typeof var5;
                if (!(var6 === var5)) {
                    _fun9090_ip = 383;
                    continue _fun9090
                }
            case 339: // try_start_0
                var9 = _closure1_slot5;
                var5 = var1;
                var1 = var5.toJSON;
                var28 = var1.bind(var5)();
                var1 = var18;
                var27 = var1 - var13;
                var26 = var16;
                var25 = var17;
                var29 = '';
                var30 = undefined;
                var1 = var30[var9](var29, var28, var27, var26, var25, var24);
            case 379: // try_end0
                return var1;
            case 381: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 383:
                var12 = global;
                var5 = var12.Array;
                var1 = var5.isArray;
                var1 = var1.bind(var5)(var0);
                if (var1) {
                    _fun9090_ip = 408;
                    continue _fun9090
                }
            case 404:
                var1 = {};
                _fun9090_ip = 412;
                continue _fun9090;
            case 408:
                var1 = new Array(0);
            case 412:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var13];
                var6 = var6.bind(var3)(var5);
                var5 = var6.convertToPlainObject;
                var11 = var5.bind(var6)(var0);
                var9 = var11;
                var14 = 0;
                for (var5 in var9)
                    case 453: {
                        var19 = var14;
                        case 465: var6 = var5;
                        var20 = var12.Object;
                        var20 = var20.prototype;
                        var21 = var20.hasOwnProperty;
                        var20 = var21.call;
                        var20 = var20.bind(var21)(var11, var6);
                        var14 = var19;
                        if (!var20) {
                            _fun9090_ip = 453;
                            continue _fun9090
                        }
                        case 502: var20 = var16;
                        if (!(!(var19 >= var20))) {
                            _fun9090_ip = 548;
                            continue _fun9090
                        }
                        case 509: var28 = var11[var6];
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
                        _fun9090_ip = 453;
                        continue _fun9090;
                        case 548: var5 = '[MaxProperties ~]';
                        var1[var6] = var5;
                    }
            case 558:
                var2 = var2.bind(var3)(var0);
                return var1;
            case 565:
                var1 = '[Circular ~]';
                return var1;
            case 573:
                var3 = var4.replace;
                var2 = 'object ';
                var1 = '';
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 596:
                return var0;
            case 598:
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
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var2.normalize = var3;
    var3 = function arg0() {
        _fun9095: for (var _fun9095_ip = 0;;) switch (_fun9095_ip) {
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
                    _fun9095_ip = 41;
                    continue _fun9095
                }
            case 26:
                var0 = arguments[var6];
                var1 = var3;
                if (!(var4 !== var0)) {
                    _fun9095_ip = 41;
                    continue _fun9095
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
                    _fun9095_ip = 78;
                    continue _fun9095
                }
            case 63:
                var7 = arguments[var0];
                var3 = var8;
                if (!(var4 !== var7)) {
                    _fun9095_ip = 78;
                    continue _fun9095
                }
            case 74:
                var3 = arguments[var0];
            case 78:
                var0 = _closure1_slot4;
                var0 = var0.bind(var4)(var5, var1);
                var7 = function arg0() {
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
                    _fun9095_ip = 122;
                    continue _fun9095
                }
            case 107:
                var2 = _closure1_slot6;
                var1 = var1 - var6;
                var0 = var2.bind(var4)(var5, var1, var3);
            case 122:
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var2.normalizeToSize = var3;
    var1 = function arg0, arg1() {
        _fun9097: for (var _fun9097_ip = 0;;) switch (_fun9097_ip) {
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
                _fun9097_ip = 95;
                continue _fun9097;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 822, 827, 832]);