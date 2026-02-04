// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function() {
        var0 = _closure1_slot2;
        var0 = var0 + 1;
        _closure1_slot2 = var0;
        var0 = global;
        var2 = var0.setTimeout;
        var0 = undefined;
        var1 = function() { // Environment: var1
            var0 = _closure1_slot2;
            var0 = var0 - 1;
            _closure1_slot2 = var0;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var0 = var0.Symbol;
    var6 = var0.toStringTag;
    var0 = {};
    var9 = 'Module';
    var0.value = var9;
    var0 = var7.bind(var8)(var2, var6, var0);
    var0 = 0;
    var _closure1_slot2 = var0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.GLOBAL_OBJ;
    var2.WINDOW = var4;
    var4 = function() {
        _fun10679: for (var _fun10679_ip = 0;;) switch (_fun10679_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 0;
                var1 = var2[var5];
                var4 = undefined;
                var6 = var3.bind(var4)(var1);
                var1 = var6.getLocationHref;
                var1 = var1.bind(var6)();
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.GLOBAL_OBJ;
                var2 = var2.document;
                if (var2) {
                    _fun10679_ip = 60;
                    continue _fun10679
                }
            case 58:
                var2 = {};
            case 60:
                var2 = var2.referrer;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var3.bind(var4)(var0);
                var0 = var0.GLOBAL_OBJ;
                var0 = var0.navigator;
                if (var0) {
                    _fun10679_ip = 100;
                    continue _fun10679
                }
            case 98:
                var0 = {};
            case 100:
                var6 = var0.userAgent;
                var0 = {};
                var0.url = var1;
                var1 = global;
                var5 = var1.Object;
                var4 = var5.assign;
                var3 = var2;
                if (!var3) {
                    _fun10679_ip = 141;
                    continue _fun10679
                }
            case 131:
                var1 = {};
                var1.Referer = var2;
                var3 = var1;
            case 141:
                var2 = var6;
                if (!var2) {
                    _fun10679_ip = 157;
                    continue _fun10679
                }
            case 147:
                var1 = {};
                var1['User-Agent'] = var6;
                var2 = var1;
            case 157:
                var1 = {};
                var1 = var4.bind(var5)(var1, var3, var2);
                var0.headers = var1;
                return var0;
        }
    };
    var2.getHttpRequestData = var4;
    var2.ignoreNextOnError = var1;
    var1 = function() {
        var1 = _closure1_slot2;
        var0 = 0;
        var0 = var1 > var0;
        return var0;
    };
    var2.shouldIgnoreOnError = var1;
    var1 = function arg0() {
        _fun10681: for (var _fun10681_ip = 0;;) switch (_fun10681_ip) {
            case 0:
                var3 = arg0;
                var6 = undefined;
                var5 = undefined;
                var0 = var3;
                var _closure2_slot0 = var3;
                var2 = undefined;
                var1 = undefined;
                var14 = undefined;
                var3 = arguments.length;
                var4 = 1;
                if (!(var3 > var4)) {
                    _fun10681_ip = 40;
                    continue _fun10681
                }
            case 32:
                var3 = arguments[var4];
                if (!(var6 === var3)) {
                    _fun10681_ip = 44;
                    continue _fun10681
                }
            case 40:
                var3 = {};
                _fun10681_ip = 48;
                continue _fun10681;
            case 44:
                var3 = arguments[var4];
            case 48:
                var _closure2_slot1 = var3;
                var4 = var0;
                var3 = 'function';
                var4 = typeof var4;
                if (!(var3 !== var4)) {
                    _fun10681_ip = 71;
                    continue _fun10681
                }
            case 66:
                var4 = var0;
                return var4;
            case 71: // try_start_0
                var4 = var0;
                var4 = var4.__sentry_wrapped__;
                var2 = var4;
                if (var4) {
                    _fun10681_ip = 361;
                    continue _fun10681
                }
            case 89:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var10 = 0;
                var5 = var5[var10];
                var8 = var7.bind(var6)(var5);
                var7 = var8.getOriginalFunction;
                var5 = var0;
                var5 = var7.bind(var8)(var5);
                if (var5) {
                    _fun10681_ip = 356;
                    continue _fun10681
                }
            case 131: // try_end0
                var1 = function() {
                    _fun10682: for (var _fun10682_ip = 0;;) switch (_fun10682_ip) {
                        case 0:
                            var4 = undefined;
                            var6 = undefined;
                            var0 = undefined;
                            var3 = arguments.length;
                            var2 = global;
                            var2 = var2.Array;
                            var5 = var2.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var11 = var5;
                            var10 = var3;
                            var2 = new var11[var2](var10, var9);
                            var2 = var2 instanceof Object ? var2 : var5;
                            var0 = var2;
                            var _closure3_slot0 = var2;
                            var5 = 0;
                            var7 = var5 < var3;
                            var2 = 0;
                            if (!var7) {
                                _fun10682_ip = 78;
                                continue _fun10682
                            }
                        case 60:
                            var8 = var0;
                            var7 = arguments[var2];
                            var8[var2] = var7;
                            var2 = var2 + 1;
                            if (var2 < var3) {
                                _fun10682_ip = 60;
                                continue _fun10682
                            }
                        case 78: // try_start_0
                            var3 = var0;
                            var2 = var3.map;
                            var0 = function(arg0) { // Environment: var1
                                var3 = _closure1_slot4;
                                var2 = _closure2_slot1;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var3.bind(var1)(var0, var2);
                                return var0;
                            };
                            var6 = var2.bind(var3)(var0);
                            var3 = _closure2_slot0;
                            var2 = var3.apply;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var6);
                        case 116: // try_end0
                            return var0;
                        case 118: // catch_target0
                            CatchBlockStart(arg_register = 0);
                            var _closure3_slot1 = var0;
                            var3 = _closure1_slot3;
                            var3 = var3.bind(var4)();
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var5];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.withScope;
                            var1 = function(arg0) { // Environment: var1
                                var2 = arg0;
                                var1 = var2.addEventProcessor;
                                var0 = function(arg0) { // Environment: var0
                                    _fun10685: for (var _fun10685_ip = 0;;) switch (_fun10685_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = _closure2_slot1;
                                            var2 = var2.mechanism;
                                            if (!var2) {
                                                _fun10685_ip = 87;
                                                continue _fun10685
                                            }
                                        case 19:
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var2 = 0;
                                            var6 = var5[var2];
                                            var3 = undefined;
                                            var7 = var4.bind(var3)(var6);
                                            var6 = var7.addExceptionTypeValue;
                                            var6 = var6.bind(var7)(var0, var3, var3);
                                            var2 = var5[var2];
                                            var3 = var4.bind(var3)(var2);
                                            var2 = var3.addExceptionMechanism;
                                            var1 = _closure2_slot1;
                                            var1 = var1.mechanism;
                                            var1 = var2.bind(var3)(var0, var1);
                                        case 87:
                                            var1 = global;
                                            var5 = var1.Object;
                                            var4 = var5.assign;
                                            var3 = var0.extra;
                                            var2 = {};
                                            var1 = _closure3_slot0;
                                            var2.arguments = var1;
                                            var1 = {};
                                            var1 = var4.bind(var5)(var1, var3, var2);
                                            var0.extra = var1;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 0;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.captureException;
                                var1 = _closure3_slot1;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            throw var0;
                    }
                };
            case 136: // try_start_1
                var12 = var0;
                var5 = global;
                for (var7 in var12)
                    case 149: {
                        case 158: var18 = var7;
                        var14 = var18;
                        var15 = var5.Object;
                        var15 = var15.prototype;
                        var17 = var15.hasOwnProperty;
                        var16 = var17.call;
                        var15 = var0;
                        var15 = var16.bind(var17)(var15, var18);
                        if (!var15) {
                            _fun10681_ip = 149;
                            continue _fun10681
                        }
                        case 198: var17 = var1;
                        var16 = var14;
                        var15 = var0;
                        var15 = var15[var16];
                        var17[var16] = var15;
                        _fun10681_ip = 149;
                        continue _fun10681;
                    }
            case 217: // try_end1
                _fun10681_ip = 221;
                continue _fun10681;
            case 219: // catch_target1
                CatchBlockStart(arg_register = 5);
            case 221:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = var4[var10];
                var12 = var5.bind(var6)(var7);
                var11 = var12.markFunctionWrapped;
                var8 = var1;
                var7 = var0;
                var11 = var11.bind(var12)(var8, var7);
                var4 = var4[var10];
                var6 = var5.bind(var6)(var4);
                var5 = var6.addNonEnumerableProperty;
                var4 = '__sentry_wrapped__';
                var4 = var5.bind(var6)(var7, var4, var8);
            case 282: // try_start_2
                var4 = global;
                var7 = var4.Object;
                var6 = var7.getOwnPropertyDescriptor;
                var5 = var1;
                var8 = 'name';
                var5 = var6.bind(var7)(var5, var8);
                var5 = var5.configurable;
                if (!var5) {
                    _fun10681_ip = 350;
                    continue _fun10681
                }
            case 318:
                var7 = var4.Object;
                var6 = var7.defineProperty;
                var5 = var1;
                var4 = {};
                var9 = function() {
                    var0 = _closure2_slot0;
                    var0 = var0.name;
                    return var0;
                };
                var4.get = var9;
                var4 = var6.bind(var7)(var5, var8, var4);
            case 350: // try_end2
                _fun10681_ip = 354;
                continue _fun10681;
            case 352: // catch_target2
                CatchBlockStart(arg_register = 4);
            case 354:
                return var1;
            case 356: // try_start_3
                var1 = var0;
            case 359: // try_end3
                return var1;
            case 361: // try_start_4
                var1 = var2;
                var1 = typeof var1;
                if (!(var3 !== var1)) {
                    _fun10681_ip = 376;
                    continue _fun10681
                }
            case 371:
                var1 = var0;
                _fun10681_ip = 379;
                continue _fun10681;
            case 376:
                var1 = var2;
            case 379: // try_end4
                return var1;
            case 381: // catch_target0 // catch_target3 // catch_target4
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var2.wrap = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);