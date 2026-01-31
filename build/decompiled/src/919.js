// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1, arg2() {
        _fun9592: for (var _fun9592_ip = 0;;) switch (_fun9592_ip) {
            case 0:
                var4 = arg0;
                var10 = arg1;
                var9 = arg2;
                var3 = undefined;
                var17 = undefined;
                var1 = undefined;
                var18 = undefined;
                var19 = undefined;
                var7 = undefined;
                var8 = undefined;
            case 23: // try_start_2
                var17 = ['name', 'message', 'stack', 'line', 'column', 'fileName', 'lineNumber', 'columnNumber', 'toJSON'];
                var1 = {};
                var2 = global;
                var11 = var2.Object;
                var6 = var11.keys;
                var5 = var4;
                var5 = var6.bind(var11)(var5);
                var16 = var5;
                var12 = var16[Symbol.iterator];
                var16 = var12().next;
                var15 = 5;
                var14 = '';
                var13 = 'string';
                var5 = 2;
                var11 = -1;
            case 85:
                var22 = var16().value;
                var20 = var12;
                if (!(var20 !== var3)) {
                    _fun9592_ip = 282;
                    continue _fun9592
                }
            case 99: // try_start_0
                var18 = var22;
                var21 = var17;
                var20 = var21.indexOf;
                var20 = var20.bind(var21)(var22);
                if (!(var11 === var20)) {
                    _fun9592_ip = 270;
                    continue _fun9592
                }
            case 123:
                var20 = var4;
                var22 = var18;
                var24 = var20[var22];
                var19 = var24;
                var21 = var1;
                var23 = _closure1_slot0;
                var20 = _closure1_slot1;
                var20 = var20[var5];
                var23 = var23.bind(var3)(var20);
                var20 = var23.isError;
                var20 = var20.bind(var23)(var24);
                if (var20) {
                    _fun9592_ip = 185;
                    continue _fun9592
                }
            case 170:
                var20 = var19;
                var20 = typeof var20;
                if (!(var13 !== var20)) {
                    _fun9592_ip = 185;
                    continue _fun9592
                }
            case 180:
                var20 = var19;
                _fun9592_ip = 266;
                continue _fun9592;
            case 185:
                var23 = var9;
                if (var23) {
                    _fun9592_ip = 212;
                    continue _fun9592
                }
            case 191:
                var24 = var19;
                var23 = var2.HermesInternal;
                var23 = var23.concat;
                var23 = var23.bind(var14)(var24);
                _fun9592_ip = 263;
                continue _fun9592;
            case 212:
                var25 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var27 = var25.bind(var3)(var24);
                var26 = var27.truncate;
                var25 = var19;
                var24 = var2.HermesInternal;
                var24 = var24.concat;
                var25 = var24.bind(var14)(var25);
                var24 = var9;
                var23 = var26.bind(var27)(var25, var24);
            case 263:
                var20 = var23;
            case 266:
                var21[var22] = var20;
            case 270: // try_end0
                _fun9592_ip = 85;
                continue _fun9592;
            case 275: // catch_target0
                CatchBlockStart(arg_register = 11);
                var12.return();
                throw var11;
            case 282:
                if (!var10) {
                    _fun9592_ip = 453;
                    continue _fun9592
                }
            case 288:
                var10 = var4;
                var10 = var10.cause;
                if (!(var3 !== var10)) {
                    _fun9592_ip = 453;
                    continue _fun9592
                }
            case 304:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var5];
                var12 = var11.bind(var3)(var10);
                var11 = var12.isError;
                var10 = var4;
                var10 = var10.cause;
                var10 = var11.bind(var12)(var10);
                if (var10) {
                    _fun9592_ip = 364;
                    continue _fun9592
                }
            case 344:
                var11 = var1;
                var10 = var4;
                var10 = var10.cause;
                var11.cause = var10;
                _fun9592_ip = 453;
                continue _fun9592;
            case 364:
                var11 = var4;
                var11 = var11.cause;
                var11 = var11.name;
                var10 = var11;
                if (var11) {
                    _fun9592_ip = 403;
                    continue _fun9592
                }
            case 384:
                var11 = var4;
                var11 = var11.cause;
                var11 = var11.constructor;
                var10 = var11.name;
            case 403:
                var13 = var10;
                var10 = var1;
                var12 = _closure1_slot2;
                var15 = _closure1_slot3;
                var11 = var4;
                var14 = var11.cause;
                var11 = var9;
                var9 = false;
                var11 = var15.bind(var3)(var14, var9, var11);
                var9 = {};
                var9 = var12.bind(var3)(var9, var13, var11);
                var10.cause = var9;
            case 453:
                var9 = var4;
                var9 = var9.toJSON;
                var10 = 'function';
                var9 = typeof var9;
                if (!(var10 === var9)) {
                    _fun9592_ip = 599;
                    continue _fun9592
                }
            case 476:
                var9 = var4;
                var4 = var9.toJSON;
                var9 = var4.bind(var9)();
                var7 = var9;
                var4 = var2.Object;
                var2 = var4.keys;
                var9 = var2.bind(var4)(var9);
                var2 = var9;
                var4 = var2[Symbol.iterator];
                var2 = var4().next;
            case 514:
                var11 = var2().value;
                var9 = var4;
                if (!(var9 !== var3)) {
                    _fun9592_ip = 599;
                    continue _fun9592
                }
            case 525: // try_start_1
                var9 = var7;
                var13 = var9[var11];
                var8 = var13;
                var10 = var1;
                var12 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var5];
                var12 = var12.bind(var3)(var9);
                var9 = var12.isError;
                var9 = var9.bind(var12)(var13);
                var13 = var8;
                if (var9) {
                    _fun9592_ip = 577;
                    continue _fun9592
                }
            case 572:
                var9 = var13;
                _fun9592_ip = 586;
                continue _fun9592;
            case 577:
                var12 = var13.toString;
                var9 = var12.bind(var13)();
            case 586:
                var10[var11] = var9;
            case 590: // try_end1
                _fun9592_ip = 514;
                continue _fun9592;
            case 592: // catch_target1
                CatchBlockStart(arg_register = 2);
                var4.return();
                throw var2;
            case 599: // try_end2
                return var1;
            case 601: // catch_target2
                CatchBlockStart(arg_register = 0);
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun9592_ip = 681;
                    continue _fun9592
                }
            case 635:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 7;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.debug;
                var2 = var3.error;
                var1 = var0;
                var0 = 'Unable to extract extra data from the Error object:';
                var0 = var2.bind(var3)(var0, var1);
            case 681:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var3 = var3.Symbol;
    var6 = var3.toStringTag;
    var3 = {};
    var9 = 'Module';
    var3.value = var9;
    var3 = var7.bind(var8)(var2, var6, var3);
    var3 = 1;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun9593: for (var _fun9593_ip = 0;;) switch (_fun9593_ip) {
            case 0:
                var0 = undefined;
                var4 = undefined;
                var2 = arguments.length;
                var3 = 0;
                if (!(var2 > var3)) {
                    _fun9593_ip = 23;
                    continue _fun9593
                }
            case 15:
                var2 = arguments[var3];
                if (!(var0 === var2)) {
                    _fun9593_ip = 27;
                    continue _fun9593
                }
            case 23:
                var2 = {};
                _fun9593_ip = 31;
                continue _fun9593;
            case 27:
                var2 = arguments[var3];
            case 31:
                var4 = var2.depth;
                var3 = 3;
                if (!(var0 !== var4)) {
                    _fun9593_ip = 47;
                    continue _fun9593
                }
            case 44:
                var3 = var4;
            case 47:
                var _closure2_slot0 = var3;
                var2 = var2.captureErrorCause;
                var0 = var0 === var2;
                if (var0) {
                    _fun9593_ip = 67;
                    continue _fun9593
                }
            case 64:
                var0 = var2;
            case 67:
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = 'ExtraErrorData';
                var0.name = var2;
                var1 = function arg0, arg1, arg2() {
                    var1 = arg2;
                    var0 = var1.getOptions;
                    var0 = var0.bind(var1)();
                    var7 = var0.maxValueLength;
                    var9 = _closure2_slot0;
                    var8 = _closure2_slot1;
                    var3 = function arg0() {
                        _fun9595: for (var _fun9595_ip = 0;;) switch (_fun9595_ip) {
                            case 0:
                                var4 = arg0;
                                var7 = undefined;
                                var1 = undefined;
                                var0 = arguments.length;
                                var2 = 1;
                                if (!(var0 > var2)) {
                                    _fun9595_ip = 25;
                                    continue _fun9595
                                }
                            case 17:
                                var0 = arguments[var2];
                                if (!(var7 === var0)) {
                                    _fun9595_ip = 29;
                                    continue _fun9595
                                }
                            case 25:
                                var0 = {};
                                _fun9595_ip = 33;
                                continue _fun9595;
                            case 29:
                                var0 = arguments[var2];
                            case 33:
                                var2 = arguments.length;
                                var10 = 2;
                                var2 = var2 > var10;
                                var13 = undefined;
                                if (!var2) {
                                    _fun9595_ip = 52;
                                    continue _fun9595
                                }
                            case 48:
                                var13 = arguments[var10];
                            case 52:
                                var3 = arguments.length;
                                var2 = 3;
                                var3 = var3 > var2;
                                var9 = undefined;
                                if (!var3) {
                                    _fun9595_ip = 71;
                                    continue _fun9595
                                }
                            case 67:
                                var9 = arguments[var2];
                            case 71:
                                var3 = arguments.length;
                                var8 = 4;
                                var3 = var3 > var8;
                                var6 = undefined;
                                if (!var3) {
                                    _fun9595_ip = 90;
                                    continue _fun9595
                                }
                            case 86:
                                var6 = arguments[var8];
                            case 90:
                                var1 = var0.originalException;
                                if (!var1) {
                                    _fun9595_ip = 139;
                                    continue _fun9595
                                }
                            case 99:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var1 = var1[var10];
                                var11 = var3.bind(var7)(var1);
                                var3 = var11.isError;
                                var1 = var0.originalException;
                                var1 = var3.bind(var11)(var1);
                                if (var1) {
                                    _fun9595_ip = 141;
                                    continue _fun9595
                                }
                            case 139:
                                return var4;
                            case 141:
                                var1 = var0.originalException;
                                var3 = var1.name;
                                if (var3) {
                                    _fun9595_ip = 171;
                                    continue _fun9595
                                }
                            case 155:
                                var1 = var0.originalException;
                                var1 = var1.constructor;
                                var3 = var1.name;
                            case 171:
                                var1 = _closure1_slot3;
                                var0 = var0.originalException;
                                var12 = var1.bind(var7)(var0, var9, var6);
                                if (var12) {
                                    _fun9595_ip = 193;
                                    continue _fun9595
                                }
                            case 191:
                                return var4;
                            case 193:
                                var1 = global;
                                var11 = var1.Object;
                                var9 = var11.assign;
                                var6 = var4.contexts;
                                var0 = {};
                                var0 = var9.bind(var11)(var0, var6);
                                var9 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var2 = var6[var2];
                                var11 = var9.bind(var7)(var2);
                                var2 = var11.normalize;
                                var2 = var2.bind(var11)(var12, var13);
                                var6 = var6[var10];
                                var9 = var9.bind(var7)(var6);
                                var6 = var9.isPlainObject;
                                var6 = var6.bind(var9)(var2);
                                if (!var6) {
                                    _fun9595_ip = 312;
                                    continue _fun9595
                                }
                            case 272:
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var5 = var5[var8];
                                var8 = var6.bind(var7)(var5);
                                var7 = var8.addNonEnumerableProperty;
                                var6 = '__sentry_skip_normalization__';
                                var5 = true;
                                var5 = var7.bind(var8)(var2, var6, var5);
                                var0[var3] = var2;
                            case 312:
                                var3 = var1.Object;
                                var2 = var3.assign;
                                var1 = {};
                                var1.contexts = var0;
                                var0 = {};
                                var0 = var2.bind(var3)(var0, var4, var1);
                                return var0;
                        }
                    };
                    var12 = undefined;
                    var11 = arg0;
                    var10 = arg1;
                    var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                    return var0;
                };
                var0.processEvent = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.extraErrorDataIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 881, 827, 863, 822, 831, 823, 824]);