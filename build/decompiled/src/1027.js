// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun10687: for (var _fun10687_ip = 0;;) switch (_fun10687_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun10687_ip = 74;
                continue _fun10687;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var1 = function(arg0) { // Original name: applyDefaultOptions, environment: var3
        _fun10690: for (var _fun10690_ip = 0;;) switch (_fun10690_ip) {
            case 0:
                var4 = global;
                var3 = var4.Object;
                var2 = var3.assign;
                var1 = {
                    'release': null,
                    'sendClientReports': true,
                    'parentSpanIsAlwaysRootSpan': true
                };
                var0 = var4.__SENTRY_RELEASE__;
                var5 = 'string';
                var0 = typeof var0;
                if (!(var5 !== var0)) {
                    _fun10690_ip = 93;
                    continue _fun10690
                }
            case 40:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 6;
                var5 = var5[var0];
                var0 = undefined;
                var5 = var6.bind(var0)(var5);
                var5 = var5.WINDOW;
                var5 = var5.SENTRY_RELEASE;
                var6 = null;
                var6 = var6 == var5;
                if (var6) {
                    _fun10690_ip = 91;
                    continue _fun10690
                }
            case 86:
                var0 = var5.id;
            case 91:
                _fun10690_ip = 99;
                continue _fun10690;
            case 93:
                var0 = var4.__SENTRY_RELEASE__;
            case 99:
                var1.release = var0;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var4 = var4.Symbol;
    var7 = var4.toStringTag;
    var4 = {};
    var10 = 'Module';
    var4.value = var10;
    var4 = var8.bind(var9)(var2, var7, var4);
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Client;
    var3 = function(arg0) { // Environment: var3
        var3 = function(arg0) { // Original name: BrowserClient, environment: var5
            _fun10692: for (var _fun10692_ip = 0;;) switch (_fun10692_ip) {
                case 0:
                    var6 = this;
                    var5 = _closure1_slot2;
                    var0 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var5.bind(var4)(var6, var0);
                    var5 = _closure1_slot9;
                    var0 = arg0;
                    var0 = var5.bind(var4)(var0);
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var8 = 6;
                    var5 = var5[var8];
                    var5 = var7.bind(var4)(var5);
                    var5 = var5.WINDOW;
                    var12 = var5.SENTRY_SDK_SOURCE;
                    if (var12) {
                        _fun10692_ip = 104;
                        continue _fun10692
                    }
                case 74:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var5 = 7;
                    var5 = var9[var5];
                    var7 = var7.bind(var4)(var5);
                    var5 = var7.getSDKSource;
                    var12 = var5.bind(var7)();
                case 104:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 7;
                    var7 = var7[var5];
                    var11 = var9.bind(var4)(var7);
                    var10 = var11.applySdkMetadata;
                    var17 = 'browser';
                    var16 = ['browser'];
                    var19 = var11;
                    var18 = var0;
                    var15 = var12;
                    var7 = var19[var10](var18, var17, var16, var15, var14);
                    var10 = var0._metadata;
                    var9 = null;
                    var7 = var9 != var10;
                    if (!var7) {
                        _fun10692_ip = 178;
                        continue _fun10692
                    }
                case 172:
                    var7 = var10.sdk;
                case 178:
                    if (!var7) {
                        _fun10692_ip = 262;
                        continue _fun10692
                    }
                case 181:
                    var7 = var0._metadata;
                    var10 = var7.sdk;
                    var7 = global;
                    var13 = var7.Object;
                    var12 = var13.assign;
                    var11 = {};
                    var14 = var0.sendDefaultPii;
                    var7 = 'never';
                    if (!var14) {
                        _fun10692_ip = 227;
                        continue _fun10692
                    }
                case 223:
                    var7 = 'auto';
                case 227:
                    var11.infer_ip = var7;
                    var7 = var0._metadata;
                    var7 = var7.sdk;
                    var7 = var7.settings;
                    var7 = var12.bind(var13)(var11, var7);
                    var10.settings = var7;
                case 262:
                    var2 = _closure2_slot0;
                    var13 = new Array(1);
                    var13[0] = var0;
                    var0 = _closure1_slot5;
                    var12 = var0.bind(var4)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun10692_ip = 311;
                        continue _fun10692
                    }
                case 298:
                    var0 = var12.apply;
                    var0 = var0.bind(var12)(var6, var13);
                    _fun10692_ip = 345;
                    continue _fun10692;
                case 311:
                    var7 = global;
                    var11 = var7.Reflect;
                    var10 = var11.construct;
                    var7 = _closure1_slot5;
                    var7 = var7.bind(var4)(var6);
                    var7 = var7.constructor;
                    var0 = var10.bind(var11)(var12, var13, var7);
                case 345:
                    var0 = var2.bind(var4)(var6, var0);
                    var _closure3_slot0 = var0;
                    var6 = var0._options;
                    var2 = var6.sendDefaultPii;
                    var7 = var6.sendClientReports;
                    var _closure3_slot1 = var7;
                    var10 = var6.enableLogs;
                    var _closure3_slot2 = var10;
                    var12 = var6._experiments;
                    var6 = var6.enableMetrics;
                    if (!(var9 == var6)) {
                        _fun10692_ip = 421;
                        continue _fun10692
                    }
                case 403:
                    var13 = var9 == var12;
                    var11 = undefined;
                    if (var13) {
                        _fun10692_ip = 418;
                        continue _fun10692
                    }
                case 412:
                    var11 = var12.enableMetrics;
                case 418:
                    var6 = var11;
                case 421:
                    var9 = var9 == var6;
                    if (var9) {
                        _fun10692_ip = 431;
                        continue _fun10692
                    }
                case 428:
                    var9 = var6;
                case 431:
                    var _closure3_slot3 = var9;
                    var11 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var8];
                    var6 = var11.bind(var4)(var6);
                    var6 = var6.WINDOW;
                    var6 = var6.document;
                    if (!var6) {
                        _fun10692_ip = 482;
                        continue _fun10692
                    }
                case 467:
                    if (var7) {
                        _fun10692_ip = 473;
                        continue _fun10692
                    }
                case 470:
                    var7 = var10;
                case 473:
                    if (var7) {
                        _fun10692_ip = 479;
                        continue _fun10692
                    }
                case 476:
                    var7 = var9;
                case 479:
                    var6 = var7;
                case 482:
                    if (!var6) {
                        _fun10692_ip = 537;
                        continue _fun10692
                    }
                case 485:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var8];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.WINDOW;
                    var8 = var6.document;
                    var7 = var8.addEventListener;
                    var6 = 'visibilitychange';
                    var3 = function() { // Environment: var3
                        _fun10693: for (var _fun10693_ip = 0;;) switch (_fun10693_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                var1 = var1.WINDOW;
                                var1 = var1.document;
                                var3 = var1.visibilityState;
                                var1 = 'hidden';
                                if (!(var1 === var3)) {
                                    _fun10693_ip = 159;
                                    continue _fun10693
                                }
                            case 51:
                                var3 = _closure3_slot1;
                                if (!var3) {
                                    _fun10693_ip = 75;
                                    continue _fun10693
                                }
                            case 61:
                                var4 = _closure3_slot0;
                                var3 = var4._flushOutcomes;
                                var3 = var3.bind(var4)();
                            case 75:
                                var3 = _closure3_slot2;
                                if (!var3) {
                                    _fun10693_ip = 117;
                                    continue _fun10693
                                }
                            case 82:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var3 = 7;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5._INTERNAL_flushLogsBuffer;
                                var3 = _closure3_slot0;
                                var3 = var4.bind(var5)(var3);
                            case 117:
                                var3 = _closure3_slot3;
                                if (!var3) {
                                    _fun10693_ip = 159;
                                    continue _fun10693
                                }
                            case 124:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var2 = 7;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3._INTERNAL_flushMetricsBuffer;
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var3)(var1);
                            case 159:
                                return var0;
                        }
                    };
                    var3 = var7.bind(var8)(var6, var3);
                case 537:
                    if (!var2) {
                        _fun10692_ip = 581;
                        continue _fun10692
                    }
                case 540:
                    var3 = var0.on;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.addAutoIpAddressToSession;
                    var1 = 'beforeSendSession';
                    var1 = var3.bind(var0)(var1, var2);
                case 581:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'eventFromException';
        var4.key = var0;
        var0 = function(arg0, arg1) { // Original name: eventFromException, environment: var5
            var0 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.eventFromException;
            var1 = var0._options;
            var9 = var1.stackParser;
            var0 = var0._options;
            var6 = var0.attachStacktrace;
            var8 = arg0;
            var7 = arg1;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'eventFromMessage';
        var4.key = var6;
        var6 = function(arg0) { // Original name: eventFromMessage, environment: var5
            _fun10695: for (var _fun10695_ip = 0;;) switch (_fun10695_ip) {
                case 0:
                    var0 = this;
                    var3 = undefined;
                    var2 = undefined;
                    var4 = arguments.length;
                    var1 = 1;
                    var4 = var4 > var1;
                    var5 = 'info';
                    var6 = var5;
                    if (!var4) {
                        _fun10695_ip = 42;
                        continue _fun10695
                    }
                case 27:
                    var4 = arguments[var1];
                    var6 = var5;
                    if (!(var3 !== var4)) {
                        _fun10695_ip = 42;
                        continue _fun10695
                    }
                case 38:
                    var6 = arguments[var1];
                case 42:
                    var4 = arguments.length;
                    var1 = 2;
                    var4 = var4 > var1;
                    var5 = undefined;
                    if (!var4) {
                        _fun10695_ip = 61;
                        continue _fun10695
                    }
                case 57:
                    var5 = arguments[var1];
                case 61:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 8;
                    var1 = var4[var1];
                    var4 = var2.bind(var3)(var1);
                    var3 = var4.eventFromMessage;
                    var1 = var0._options;
                    var11 = var1.stackParser;
                    var0 = var0._options;
                    var7 = var0.attachStacktrace;
                    var10 = arg0;
                    var12 = var4;
                    var9 = var6;
                    var8 = var5;
                    var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_prepareEvent';
        var4.key = var6;
        var5 = function(arg0, arg1, arg2, arg3) { // Original name: _prepareEvent, environment: var5
            _fun10696: for (var _fun10696_ip = 0;;) switch (_fun10696_ip) {
                case 0:
                    var3 = arg0;
                    var0 = var3.platform;
                    if (var0) {
                        _fun10696_ip = 16;
                        continue _fun10696
                    }
                case 12:
                    var0 = 'javascript';
                case 16:
                    var3.platform = var0;
                    var10 = _closure2_slot0;
                    var5 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var0
                        _fun10697: for (var _fun10697_ip = 0;;) switch (_fun10697_ip) {
                            case 0:
                                var4 = arg0;
                                var6 = arg2;
                                var _closure4_slot0 = var6;
                                var5 = _closure1_slot6;
                                var3 = _closure1_slot5;
                                var0 = 1;
                                var2 = 3;
                                var7 = var0 & var2;
                                var0 = var4;
                                if (!var7) {
                                    _fun10697_ip = 44;
                                    continue _fun10697
                                }
                            case 39:
                                var0 = var4.prototype;
                            case 44:
                                var4 = undefined;
                                var3 = var3.bind(var4)(var0);
                                var0 = '_prepareEvent';
                                var4 = var5.bind(var4)(var3, var0, var6);
                                var _closure4_slot1 = var4;
                                var0 = 2;
                                var2 = var0 & var2;
                                var0 = var4;
                                if (!var2) {
                                    _fun10697_ip = 98;
                                    continue _fun10697
                                }
                            case 79:
                                var3 = 'function';
                                var2 = typeof var4;
                                var0 = var4;
                                if (!(var3 === var2)) {
                                    _fun10697_ip = 98;
                                    continue _fun10697
                                }
                            case 93:
                                var0 = function(arg0) { // Environment: var1
                                    var3 = _closure4_slot1;
                                    var2 = var3.apply;
                                    var1 = _closure4_slot0;
                                    var0 = arg0;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                            case 98:
                                return var0;
                        }
                    };
                    var2 = undefined;
                    var9 = '_prepareEvent';
                    var8 = this;
                    var7 = 3;
                    var11 = undefined;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0 = new Array(4);
                    var0[0] = var3;
                    var3 = arg1;
                    var0[1] = var3;
                    var3 = arg2;
                    var0[2] = var3;
                    var3 = arg3;
                    var0[3] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var2.BrowserClient = var3;
    var2.applyDefaultOptions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 102, 18, 1025, 817, 1028]);