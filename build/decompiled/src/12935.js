// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() { // Original name: _extraErrorDataIntegration, environment: var1
        _fun99605: for (var _fun99605_ip = 0;;) switch (_fun99605_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var3 = 0;
                if (!(var2 > var3)) {
                    _fun99605_ip = 23;
                    continue _fun99605
                }
            case 15:
                var2 = arguments[var3];
                if (!(var0 === var2)) {
                    _fun99605_ip = 27;
                    continue _fun99605
                }
            case 23:
                var2 = {};
                _fun99605_ip = 31;
                continue _fun99605;
            case 27:
                var2 = arguments[var3];
            case 31:
                var4 = var2.depth;
                var3 = 3;
                if (!(var0 !== var4)) {
                    _fun99605_ip = 47;
                    continue _fun99605
                }
            case 44:
                var3 = var4;
            case 47:
                var _closure2_slot0 = var3;
                var2 = var2.captureErrorCause;
                var0 = var0 === var2;
                if (var0) {
                    _fun99605_ip = 67;
                    continue _fun99605
                }
            case 64:
                var0 = var2;
            case 67:
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = 'ExtraErrorData';
                var0.name = var2;
                var1 = function(arg0, arg1, arg2) { // Original name: processEvent, environment: var1
                    _fun99606: for (var _fun99606_ip = 0;;) switch (_fun99606_ip) {
                        case 0:
                            var1 = arg2;
                            var0 = var1.getOptions;
                            var0 = var0.bind(var1)();
                            var0 = var0.maxValueLength;
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot1;
                            var4 = 250;
                            var3 = undefined;
                            if (!(var3 !== var0)) {
                                _fun99606_ip = 42;
                                continue _fun99606
                            }
                        case 39:
                            var4 = var0;
                        case 42:
                            var2 = function(arg0) { // Original name: _enhanceEventWithErrorData, environment: var0
                                _fun99607: for (var _fun99607_ip = 0;;) switch (_fun99607_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var7 = undefined;
                                        var3 = undefined;
                                        var0 = arguments.length;
                                        var8 = 1;
                                        if (!(var0 > var8)) {
                                            _fun99607_ip = 25;
                                            continue _fun99607
                                        }
                                    case 17:
                                        var0 = arguments[var8];
                                        if (!(var7 === var0)) {
                                            _fun99607_ip = 29;
                                            continue _fun99607
                                        }
                                    case 25:
                                        var0 = {};
                                        _fun99607_ip = 33;
                                        continue _fun99607;
                                    case 29:
                                        var0 = arguments[var8];
                                    case 33:
                                        var1 = arguments.length;
                                        var6 = 2;
                                        var1 = var1 > var6;
                                        var12 = undefined;
                                        if (!var1) {
                                            _fun99607_ip = 52;
                                            continue _fun99607
                                        }
                                    case 48:
                                        var12 = arguments[var6];
                                    case 52:
                                        var2 = arguments.length;
                                        var1 = 3;
                                        var2 = var2 > var1;
                                        var13 = undefined;
                                        if (!var2) {
                                            _fun99607_ip = 71;
                                            continue _fun99607
                                        }
                                    case 67:
                                        var13 = arguments[var1];
                                    case 71:
                                        var2 = arguments.length;
                                        var1 = 4;
                                        var5 = var2 > var1;
                                        var2 = undefined;
                                        if (!var5) {
                                            _fun99607_ip = 90;
                                            continue _fun99607
                                        }
                                    case 86:
                                        var2 = arguments[var1];
                                    case 90:
                                        var1 = var0.originalException;
                                        if (!var1) {
                                            _fun99607_ip = 139;
                                            continue _fun99607
                                        }
                                    case 99:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var1 = var1[var8];
                                        var9 = var3.bind(var7)(var1);
                                        var3 = var9.isError;
                                        var1 = var0.originalException;
                                        var1 = var3.bind(var9)(var1);
                                        if (var1) {
                                            _fun99607_ip = 141;
                                            continue _fun99607
                                        }
                                    case 139:
                                        return var4;
                                    case 141:
                                        var1 = var0.originalException;
                                        var3 = var1.name;
                                        if (var3) {
                                            _fun99607_ip = 171;
                                            continue _fun99607
                                        }
                                    case 155:
                                        var1 = var0.originalException;
                                        var1 = var1.constructor;
                                        var3 = var1.name;
                                    case 171:
                                        var15 = var0.originalException;
                                        var9 = var15;
                                        var14 = var13;
                                        var19 = var2;
                                        var20 = undefined;
                                        var0 = undefined;
                                        var21 = undefined;
                                        var22 = undefined;
                                        var10 = undefined;
                                        var11 = undefined;
                                    case 198: // try_start_2
                                        var20 = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'];
                                        var0 = {};
                                        var2 = global;
                                        var16 = var2.Object;
                                        var15 = var16.keys;
                                        var13 = var9;
                                        var13 = var15.bind(var16)(var13);
                                        var18 = var13;
                                        var15 = var18[Symbol.iterator];
                                        var18 = var15().next;
                                        var17 = '';
                                        var16 = 'string';
                                        var13 = -1;
                                    case 251:
                                        var25 = var18().value;
                                        var23 = var15;
                                        if (!(var23 !== var7)) {
                                            _fun99607_ip = 415;
                                            continue _fun99607
                                        }
                                    case 265: // try_start_0
                                        var21 = var25;
                                        var24 = var20;
                                        var23 = var24.indexOf;
                                        var23 = var23.bind(var24)(var25);
                                        if (!(var13 === var23)) {
                                            _fun99607_ip = 403;
                                            continue _fun99607
                                        }
                                    case 286:
                                        var23 = var9;
                                        var25 = var21;
                                        var27 = var23[var25];
                                        var22 = var27;
                                        var24 = var0;
                                        var26 = _closure1_slot0;
                                        var23 = _closure1_slot1;
                                        var23 = var23[var8];
                                        var26 = var26.bind(var7)(var23);
                                        var23 = var26.isError;
                                        var23 = var23.bind(var26)(var27);
                                        if (var23) {
                                            _fun99607_ip = 348;
                                            continue _fun99607
                                        }
                                    case 333:
                                        var23 = var22;
                                        var23 = typeof var23;
                                        if (!(var16 !== var23)) {
                                            _fun99607_ip = 348;
                                            continue _fun99607
                                        }
                                    case 343:
                                        var23 = var22;
                                        _fun99607_ip = 399;
                                        continue _fun99607;
                                    case 348:
                                        var27 = _closure1_slot0;
                                        var26 = _closure1_slot1;
                                        var26 = var26[var8];
                                        var29 = var27.bind(var7)(var26);
                                        var28 = var29.truncate;
                                        var27 = var22;
                                        var26 = var2.HermesInternal;
                                        var26 = var26.concat;
                                        var27 = var26.bind(var17)(var27);
                                        var26 = var19;
                                        var23 = var28.bind(var29)(var27, var26);
                                    case 399:
                                        var24[var25] = var23;
                                    case 403: // try_end0
                                        _fun99607_ip = 251;
                                        continue _fun99607;
                                    case 408: // catch_target0
                                        CatchBlockStart(arg_register = 13);
                                        var15.return();
                                        throw var13;
                                    case 415:
                                        var13 = var14;
                                        if (!var14) {
                                            _fun99607_ip = 434;
                                            continue _fun99607
                                        }
                                    case 421:
                                        var14 = var9;
                                        var14 = var14.cause;
                                        var13 = var7 !== var14;
                                    case 434:
                                        if (!var13) {
                                            _fun99607_ip = 509;
                                            continue _fun99607
                                        }
                                    case 437:
                                        var14 = var0;
                                        var15 = _closure1_slot0;
                                        var13 = _closure1_slot1;
                                        var13 = var13[var8];
                                        var16 = var15.bind(var7)(var13);
                                        var15 = var16.isError;
                                        var13 = var9;
                                        var13 = var13.cause;
                                        var13 = var15.bind(var16)(var13);
                                        var15 = var9;
                                        var16 = var15.cause;
                                        if (var13) {
                                            _fun99607_ip = 494;
                                            continue _fun99607
                                        }
                                    case 489:
                                        var13 = var16;
                                        _fun99607_ip = 503;
                                        continue _fun99607;
                                    case 494:
                                        var15 = var16.toString;
                                        var13 = var15.bind(var16)();
                                    case 503:
                                        var14.cause = var13;
                                    case 509:
                                        var13 = var9;
                                        var13 = var13.toJSON;
                                        var14 = 'function';
                                        var13 = typeof var13;
                                        if (!(var14 === var13)) {
                                            _fun99607_ip = 655;
                                            continue _fun99607
                                        }
                                    case 532:
                                        var13 = var9;
                                        var9 = var13.toJSON;
                                        var13 = var9.bind(var13)();
                                        var10 = var13;
                                        var9 = var2.Object;
                                        var2 = var9.keys;
                                        var13 = var2.bind(var9)(var13);
                                        var2 = var13;
                                        var9 = var2[Symbol.iterator];
                                        var2 = var9().next;
                                    case 570:
                                        var15 = var2().value;
                                        var13 = var9;
                                        if (!(var13 !== var7)) {
                                            _fun99607_ip = 655;
                                            continue _fun99607
                                        }
                                    case 581: // try_start_1
                                        var13 = var10;
                                        var17 = var13[var15];
                                        var11 = var17;
                                        var14 = var0;
                                        var16 = _closure1_slot0;
                                        var13 = _closure1_slot1;
                                        var13 = var13[var8];
                                        var16 = var16.bind(var7)(var13);
                                        var13 = var16.isError;
                                        var13 = var13.bind(var16)(var17);
                                        var17 = var11;
                                        if (var13) {
                                            _fun99607_ip = 633;
                                            continue _fun99607
                                        }
                                    case 628:
                                        var13 = var17;
                                        _fun99607_ip = 642;
                                        continue _fun99607;
                                    case 633:
                                        var16 = var17.toString;
                                        var13 = var16.bind(var17)();
                                    case 642:
                                        var14[var15] = var13;
                                    case 646: // try_end1
                                        _fun99607_ip = 570;
                                        continue _fun99607;
                                    case 648: // catch_target1
                                        CatchBlockStart(arg_register = 2);
                                        var9.return();
                                        throw var2;
                                    case 655:
                                        var11 = var0;
                                    case 658: // try_end2
                                        _fun99607_ip = 735;
                                        continue _fun99607;
                                    case 660: // catch_target2
                                        CatchBlockStart(arg_register = 1);
                                        var2 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var0 = var0[var6];
                                        var0 = var2.bind(var7)(var0);
                                        var2 = var0.DEBUG_BUILD;
                                        var11 = null;
                                        if (!var2) {
                                            _fun99607_ip = 735;
                                            continue _fun99607
                                        }
                                    case 690:
                                        var6 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var2 = var2[var8];
                                        var2 = var6.bind(var7)(var2);
                                        var9 = var2.logger;
                                        var6 = var9.error;
                                        var2 = var1;
                                        var1 = 'Unable to extract extra data from the Error object:';
                                        var1 = var6.bind(var9)(var1, var2);
                                        var11 = null;
                                    case 735:
                                        if (var11) {
                                            _fun99607_ip = 740;
                                            continue _fun99607
                                        }
                                    case 738:
                                        return var4;
                                    case 740:
                                        var1 = global;
                                        var9 = var1.Object;
                                        var6 = var9.assign;
                                        var2 = var4.contexts;
                                        var0 = {};
                                        var0 = var6.bind(var9)(var0, var2);
                                        var9 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var2 = var6[var8];
                                        var10 = var9.bind(var7)(var2);
                                        var2 = var10.normalize;
                                        var2 = var2.bind(var10)(var11, var12);
                                        var6 = var6[var8];
                                        var9 = var9.bind(var7)(var6);
                                        var6 = var9.isPlainObject;
                                        var6 = var6.bind(var9)(var2);
                                        if (!var6) {
                                            _fun99607_ip = 859;
                                            continue _fun99607
                                        }
                                    case 819:
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var5 = var5[var8];
                                        var8 = var6.bind(var7)(var5);
                                        var7 = var8.addNonEnumerableProperty;
                                        var6 = '__sentry_skip_normalization__';
                                        var5 = true;
                                        var5 = var7.bind(var8)(var2, var6, var5);
                                        var0[var3] = var2;
                                    case 859:
                                        var3 = var1.Object;
                                        var2 = var3.assign;
                                        var1 = {};
                                        var1.contexts = var0;
                                        var0 = {};
                                        var0 = var2.bind(var3)(var0, var4, var1);
                                        return var0;
                                }
                            };
                            var11 = arg0;
                            var10 = arg1;
                            var12 = undefined;
                            var9 = var6;
                            var8 = var5;
                            var7 = var4;
                            var0 = var12[var2](var11, var10, var9, var8, var7, var6);
                            return var0;
                    }
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.extraErrorDataIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12913, 12824, 12890]);