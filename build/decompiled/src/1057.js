// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = function(arg0) { // Original name: extractNetworkProtocol, environment: var1
        _fun10861: for (var _fun10861_ip = 0;;) switch (_fun10861_ip) {
            case 0:
                var4 = arg0;
                var3 = var4;
                var8 = undefined;
                var9 = undefined;
                var5 = 'unknown';
                var2 = var5;
                var1 = var5;
                var0 = '';
                var6 = var4;
                var5 = var6[Symbol.iterator];
                var6 = var5().next;
                var4 = global;
                var7 = '/';
            case 36:
                var10 = var6().value;
                var11 = var5;
                if (!(var11 !== var8)) {
                    _fun10861_ip = 197;
                    continue _fun10861
                }
            case 50: // try_start_0
                var9 = var10;
                if (!(var7 !== var10)) {
                    _fun10861_ip = 143;
                    continue _fun10861
                }
            case 57:
                var11 = var4.isNaN;
                var12 = var4.Number;
                var10 = var9;
                var10 = var12.bind(var8)(var10);
                var10 = var11.bind(var8)(var10);
                var11 = var0;
                if (var10) {
                    _fun10861_ip = 134;
                    continue _fun10861
                }
            case 88:
                var10 = 'http';
                var12 = 'h';
                if (!(var12 !== var11)) {
                    _fun10861_ip = 103;
                    continue _fun10861
                }
            case 100:
                var10 = var0;
            case 103:
                var2 = var10;
                var13 = var3;
                var12 = var13.split;
                var10 = var0;
                var12 = var12.bind(var13)(var10);
                var10 = 1;
                var1 = var12[var10];
            case 129: // try_end0
                var5.return();
                _fun10861_ip = 197;
                continue _fun10861;
            case 134: // try_start_1
                var10 = var9;
                var0 = var11 + var10;
            case 141: // try_end1
                _fun10861_ip = 36;
                continue _fun10861;
            case 143: // try_start_2
                var6 = var3;
                var4 = var6.split;
                var7 = var4.bind(var6)(var7);
                var6 = _closure1_slot2;
                var4 = 2;
                var6 = var6.bind(var8)(var7, var4);
                var4 = 0;
                var2 = var6[var4];
                var4 = 1;
                var1 = var6[var4];
            case 185: // try_end2
                var5.return();
                _fun10861_ip = 197;
                continue _fun10861;
            case 190: // catch_target0 // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 4);
                var5.return();
                throw var4;
            case 197:
                var4 = var0;
                if (!(var4 === var3)) {
                    _fun10861_ip = 207;
                    continue _fun10861
                }
            case 204:
                var2 = var0;
            case 207:
                var0 = {};
                var0.name = var2;
                var0.version = var1;
                return var0;
        }
    };
    var2.extractNetworkProtocol = var3;
    var3 = function() { // Original name: getBrowserPerformanceAPI, environment: var1
        _fun10862: for (var _fun10862_ip = 0;;) switch (_fun10862_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = 3;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var0 = var0.WINDOW;
                var0 = var0.addEventListener;
                if (!var0) {
                    _fun10862_ip = 69;
                    continue _fun10862
                }
            case 40:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var1 = var1.WINDOW;
                var0 = var1.performance;
            case 69:
                return var0;
        }
    };
    var2.getBrowserPerformanceAPI = var3;
    var3 = function(arg0) { // Original name: isMeasurementValue, environment: var1
        _fun10863: for (var _fun10863_ip = 0;;) switch (_fun10863_ip) {
            case 0:
                var3 = arg0;
                var1 = 'number';
                var0 = typeof var3;
                var0 = var1 === var0;
                if (!var0) {
                    _fun10863_ip = 32;
                    continue _fun10863
                }
            case 17:
                var1 = global;
                var2 = var1.isFinite;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 32:
                return var0;
        }
    };
    var2.isMeasurementValue = var3;
    var3 = function(arg0, arg1) { // Original name: listenForWebVitalReportEvents, environment: var1
        var5 = arg0;
        var0 = arg1;
        var _closure2_slot0 = var0;
        var0 = function(arg0) { // Original name: _runCollectorCallbackOnce, environment: var2
            _fun10865: for (var _fun10865_ip = 0;;) switch (_fun10865_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = !var2;
                    if (var2) {
                        _fun10865_ip = 17;
                        continue _fun10865
                    }
                case 13:
                    var0 = _closure2_slot1;
                case 17:
                    if (!var0) {
                        _fun10865_ip = 39;
                        continue _fun10865
                    }
                case 20:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var2)(var0, var3);
                case 39:
                    var0 = true;
                    _closure2_slot2 = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot5 = var0;
        var0 = false;
        var _closure2_slot2 = var0;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var1);
        var3 = var4.onHidden;
        var1 = function() { // Environment: var2
            var2 = _closure2_slot5;
            var0 = undefined;
            var1 = 'pagehide';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var1);
        var4 = var5.on;
        var3 = 'beforeStartNavigationSpan';
        var1 = function(arg0, arg1) { // Environment: var2
            _fun10867: for (var _fun10867_ip = 0;;) switch (_fun10867_ip) {
                case 0:
                    var1 = arg1;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun10867_ip = 18;
                        continue _fun10867
                    }
                case 12:
                    var0 = var1.isRedirect;
                case 18:
                    if (var0) {
                        _fun10867_ip = 55;
                        continue _fun10867
                    }
                case 21:
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var2 = 'navigation';
                    var2 = var3.bind(var1)(var2);
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)();
                    var0 = _closure2_slot4;
                    var0 = var0.bind(var1)();
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var3, var1);
        var _closure2_slot3 = var1;
        var4 = var5.on;
        var3 = 'afterStartPageLoadSpan';
        var1 = function(arg0) { // Environment: var2
            var1 = arg0;
            var0 = var1.spanContext;
            var0 = var0.bind(var1)();
            var1 = var0.spanId;
            var _closure2_slot1 = var1;
            var1 = _closure2_slot4;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var4.bind(var5)(var3, var1);
        var _closure2_slot4 = var1;
        return var0;
    };
    var2.listenForWebVitalReportEvents = var3;
    var3 = function(arg0) { // Original name: msToSec, environment: var1
        var1 = arg0;
        var0 = 1000;
        var0 = var1 / var0;
        return var0;
    };
    var2.msToSec = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: startAndEndSpan, environment: var1
        _fun10870: for (var _fun10870_ip = 0;;) switch (_fun10870_ip) {
            case 0:
                var3 = arg0;
                var6 = arg1;
                var8 = arg3;
                var _closure2_slot0 = var6;
                var1 = arg2;
                var _closure2_slot1 = var1;
                var1 = global;
                var7 = var1.Object;
                var5 = var7.assign;
                var2 = _closure1_slot3;
                var4 = undefined;
                var2 = var2.bind(var4)(var8);
                var2 = {};
                var2 = var5.bind(var7)(var2, var8);
                var _closure2_slot2 = var2;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 2;
                var2 = var2[var5];
                var7 = var7.bind(var4)(var2);
                var2 = var7.spanToJSON;
                var2 = var2.bind(var7)(var3);
                var7 = var2.start_timestamp;
                var2 = var7;
                if (!var2) {
                    _fun10870_ip = 108;
                    continue _fun10870
                }
            case 104:
                var2 = var7 > var6;
            case 108:
                if (!var2) {
                    _fun10870_ip = 128;
                    continue _fun10870
                }
            case 111:
                var7 = var3.updateStartTime;
                var8 = 'function';
                var7 = typeof var7;
                var2 = var8 === var7;
            case 128:
                if (!var2) {
                    _fun10870_ip = 142;
                    continue _fun10870
                }
            case 131:
                var2 = var3.updateStartTime;
                var2 = var2.bind(var3)(var6);
            case 142:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var2 = var2.bind(var4)(var1);
                var1 = var2.withActiveSpan;
                var0 = function() { // Environment: var0
                    _fun10871: for (var _fun10871_ip = 0;;) switch (_fun10871_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.startInactiveSpan;
                            var0 = global;
                            var6 = var0.Object;
                            var5 = var6.assign;
                            var4 = {};
                            var0 = _closure2_slot0;
                            var4.startTime = var0;
                            var0 = _closure2_slot2;
                            var0 = var5.bind(var6)(var4, var0);
                            var0 = var2.bind(var3)(var0);
                            if (!var0) {
                                _fun10871_ip = 90;
                                continue _fun10871
                            }
                        case 76:
                            var2 = var0.end;
                            var1 = _closure2_slot1;
                            var1 = var2.bind(var0)(var1);
                        case 90:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.startAndEndSpan = var3;
    var3 = function(arg0) { // Original name: startStandaloneWebVitalSpan, environment: var1
        _fun10872: for (var _fun10872_ip = 0;;) switch (_fun10872_ip) {
            case 0:
                var7 = arg0;
                var2 = undefined;
                var11 = undefined;
                var15 = undefined;
                var5 = undefined;
                var10 = undefined;
                var1 = undefined;
                var3 = undefined;
                var17 = undefined;
                var13 = undefined;
                var9 = undefined;
                var14 = undefined;
                var4 = undefined;
                var16 = undefined;
                var12 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 2;
                var8 = var8[var6];
                var12 = var12.bind(var2)(var8);
                var8 = var12.getClient;
                var12 = var8.bind(var12)();
                if (var12) {
                    _fun10872_ip = 67;
                    continue _fun10872
                }
            case 65:
                return var2;
            case 67:
                var5 = var7.name;
                var10 = var7.transaction;
                var1 = var7.attributes;
                var3 = var7.startTime;
                var7 = var12.getOptions;
                var7 = var7.bind(var12)();
                var17 = var7.release;
                var13 = var7.environment;
                var9 = var7.sendDefaultPii;
                var8 = var12.getIntegrationByName;
                var7 = 'Replay';
                var18 = var8.bind(var12)(var7);
                var12 = null;
                var8 = var12 == var18;
                var7 = undefined;
                if (var8) {
                    _fun10872_ip = 156;
                    continue _fun10872
                }
            case 146:
                var8 = var18.getReplayId;
                var7 = var8.bind(var18)();
            case 156:
                var14 = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var6];
                var8 = var8.bind(var2)(var7);
                var7 = var8.getCurrentScope;
                var8 = var7.bind(var8)();
                var4 = var8;
                var7 = var8.getUser;
                var18 = var7.bind(var8)();
                var7 = undefined;
                if (!(var2 !== var18)) {
                    _fun10872_ip = 231;
                    continue _fun10872
                }
            case 205:
                var8 = var18.email;
                if (var8) {
                    _fun10872_ip = 219;
                    continue _fun10872
                }
            case 214:
                var8 = var18.id;
            case 219:
                if (var8) {
                    _fun10872_ip = 228;
                    continue _fun10872
                }
            case 222:
                var8 = var18.ip_address;
            case 228:
                var7 = var8;
            case 231:
                var16 = var7;
            case 234: // try_start_0
                var7 = var4;
                var4 = var7.getScopeData;
                var4 = var4.bind(var7)();
                var4 = var4.contexts;
                var4 = var4.profile;
                var15 = var4.profile_id;
            case 265: // try_end0
                _fun10872_ip = 269;
                continue _fun10872;
            case 267: // catch_target0
                CatchBlockStart(arg_register = 4);
            case 269:
                var4 = global;
                var8 = var4.Object;
                var7 = var8.assign;
                var4 = {};
                var4.release = var17;
                var4.environment = var13;
                var13 = var16;
                if (var16) {
                    _fun10872_ip = 302;
                    continue _fun10872
                }
            case 300:
                var13 = undefined;
            case 302:
                var4.user = var13;
                var13 = var15;
                if (var15) {
                    _fun10872_ip = 314;
                    continue _fun10872
                }
            case 312:
                var13 = undefined;
            case 314:
                var4.profile_id = var13;
                var13 = var14;
                if (var14) {
                    _fun10872_ip = 327;
                    continue _fun10872
                }
            case 325:
                var13 = undefined;
            case 327:
                var4.replay_id = var13;
                var4.transaction = var10;
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var10 = 3;
                var10 = var14[var10];
                var10 = var13.bind(var2)(var10);
                var10 = var10.WINDOW;
                var10 = var10.navigator;
                var11 = var10;
                var12 = var12 == var10;
                var10 = undefined;
                if (var12) {
                    _fun10872_ip = 387;
                    continue _fun10872
                }
            case 381:
                var10 = var11.userAgent;
            case 387:
                var4['user_agent.original'] = var10;
                var10 = var9;
                var9 = undefined;
                if (!var10) {
                    _fun10872_ip = 406;
                    continue _fun10872
                }
            case 400:
                var9 = '{{auto}}';
            case 406:
                var4['client.address'] = var9;
                var4 = var7.bind(var8)(var4, var1);
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var6];
                var2 = var1.bind(var2)(var0);
                var1 = var2.startInactiveSpan;
                var0 = {};
                var0.name = var5;
                var0.attributes = var4;
                var0.startTime = var3;
                var3 = {};
                var4 = true;
                var3.standalone = var4;
                var0.experimental = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.startStandaloneWebVitalSpan = var3;
    var1 = function(arg0) { // Original name: supportsWebVital, environment: var1
        _fun10873: for (var _fun10873_ip = 0;;) switch (_fun10873_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = global;
                var1 = var1.PerformanceObserver;
                var2 = var1.supportedEntryTypes;
                var1 = var2.includes;
                var0 = var1.bind(var2)(var0);
            case 27: // try_end0
                return var0;
            case 29: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var2.supportsWebVital = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 113, 817, 1036, 1051]);