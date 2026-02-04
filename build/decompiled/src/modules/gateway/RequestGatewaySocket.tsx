// modules/gateway/RequestGatewaySocket.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
    var0 = function arg0() {
        _fun7378: for (var _fun7378_ip = 0;;) switch (_fun7378_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot7;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                var2 = null;
                var2 = var2 != var1;
                var4 = 0;
                if (!var2) {
                    _fun7378_ip = 34;
                    continue _fun7378
                }
            case 31:
                var4 = var1;
            case 34:
                var2 = _closure1_slot7;
                var1 = var2.set;
                var0 = 1;
                var0 = var4 + var0;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun7379: for (var _fun7379_ip = 0;;) switch (_fun7379_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot7;
                var1 = var3.get;
                var3 = var1.bind(var3)(var2);
                var1 = null;
                var5 = var1 != var3;
                var1 = 0;
                var4 = 0;
                if (!var5) {
                    _fun7379_ip = 36;
                    continue _fun7379
                }
            case 33:
                var4 = var3;
            case 36:
                var3 = 1;
                var4 = var4 - var3;
                if (!(!(var4 <= var1))) {
                    _fun7379_ip = 64;
                    continue _fun7379
                }
            case 47:
                var3 = _closure1_slot7;
                var1 = var3.set;
                var1 = var1.bind(var3)(var2, var4);
                _fun7379_ip = 78;
                continue _fun7379;
            case 64:
                var1 = _closure1_slot7;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
            case 78:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'BRIDGE:';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var5 = function() {
        _fun7381: for (var _fun7381_ip = 0;;) switch (_fun7381_ip) {
            case 0:
                var0 = _closure1_slot7;
                var2 = var0.size;
                var0 = 0;
                var0 = var2 > var0;
                if (var0) {
                    _fun7381_ip = 25;
                    continue _fun7381
                }
            case 21:
                var0 = _closure1_slot6;
            case 25:
                return var0;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot15;
        var0 = undefined;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot8;
            var3 = _closure2_slot0;
            var0 = undefined;
            var2 = var2.bind(var0)(var3);
            var2 = _closure1_slot9;
            var1 = _closure1_slot10;
            var1 = var1.bind(var0)(var3);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot12 = var4;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var2 = _closure1_slot15;
        var0 = undefined;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot9;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot13 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun7388: for (var _fun7388_ip = 0;;) switch (_fun7388_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun7388_ip = 95;
                            continue _fun7388
                        }
                    case 7:
                        var2 = arg0;
                        var1 = arg1;
                    case 13: // try_start_0
                        var6 = _closure1_slot12;
                        var4 = var2;
                        var5 = undefined;
                        var4 = var6.bind(var5)(var4);
                        var1 = var1.bind(var5)();
                        SaveGenerator(address = 38);
                    case 36:
                        return var1;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun7388_ip = 59;
                            continue _fun7388
                        }
                    case 44: // try_end0
                        var6 = _closure1_slot13;
                        var4 = var2;
                        var4 = var6.bind(var5)(var4);
                        return var1;
                    case 59:
                        var4 = _closure1_slot13;
                        var3 = var2;
                        var3 = var4.bind(var5)(var3);
                        return var1;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot13;
                        var3 = var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        throw var1;
                    case 95:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var1 = _closure1_slot11;
        var0 = undefined;
        var2 = var1.bind(var0)();
        var2 = false;
        _closure1_slot6 = var2;
        var2 = arg0;
        var2 = var2.bind(var0)();
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot15 = var0;
    var6 = global;
    var13 = var6.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var9 = true;
    var10.value = var9;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var10);
    var0 = 0;
    var10 = var8[var0];
    var0 = undefined;
    var10 = var11.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = 1;
    var10 = var8[var10];
    var10 = var7.bind(var0)(var10);
    var10 = var10.AnalyticEvents;
    var _closure1_slot4 = var10;
    var10 = ['COLD_START'];
    var _closure1_slot5 = var10;
    var _closure1_slot6 = var9;
    var6 = var6.Map;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var17 = var9;
    var6 = new var17[var6](var16);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/gateway/RequestGatewaySocket.tsx';
    var6 = var7.bind(var8)(var6);
    var2.isRequested = var5;
    var5 = function() {
        var0 = false;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var2.recordStartHeadlessTask = var5;
    var5 = function() {
        _fun7391: for (var _fun7391_ip = 0;;) switch (_fun7391_ip) {
            case 0:
                var1 = _closure1_slot6;
                if (var1) {
                    _fun7391_ip = 16;
                    continue _fun7391
                }
            case 10:
                var3 = new Array(0);
                _fun7391_ip = 20;
                continue _fun7391;
            case 16:
                var3 = _closure1_slot5;
            case 20:
                var2 = new Array(0);
                var1 = 0;
                var7 = var2;
                var6 = var3;
                var5 = 0;
                var5 = arraySpread(var7, var6, var5);
                var4 = _closure1_slot7;
                var0 = var4.keys;
                var6 = var0.bind(var4)();
                var7 = var2;
                var0 = arraySpread(var7, var6, var5);
                var0 = var2.sort;
                var3 = var0.bind(var2)();
                var0 = var3.length;
                var1 = var0 > var1;
                var0 = 'NO_REASONS';
                if (!var1) {
                    _fun7391_ip = 100;
                    continue _fun7391
                }
            case 86:
                var2 = var3.join;
                var1 = ',';
                var0 = var2.bind(var3)(var1);
            case 100:
                return var0;
        }
    };
    var2.describeConnectionReasons = var5;
    var2.setRequestedBy = var4;
    var4 = function arg0() {
        var4 = _closure1_slot10;
        var0 = undefined;
        var3 = arg0;
        var3 = var4.bind(var0)(var3);
        var _closure2_slot0 = var3;
        var3 = global;
        var4 = var3.performance;
        var3 = var4.now;
        var3 = var3.bind(var4)();
        var _closure2_slot1 = var3;
        var4 = _closure1_slot15;
        var3 = function() { // Environment: var1
            var2 = _closure1_slot8;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var3 = var4.bind(var0)(var3);
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 2;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.requestSafeIdleCallback;
        var2 = {};
        var5 = 5000;
        var2.timeout = var5;
        var1 = function() { // Environment: var1
            _fun7394: for (var _fun7394_ip = 0;;) switch (_fun7394_ip) {
                case 0:
                    var4 = _closure1_slot7;
                    var3 = var4.has;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    if (!var2) {
                        _fun7394_ip = 111;
                        continue _fun7394
                    }
                case 27:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot4;
                    var3 = var2.GATEWAY_BRIDGE_TIMEOUT;
                    var2 = {};
                    var6 = _closure2_slot0;
                    var2.bridge_token = var6;
                    var6 = global;
                    var7 = var6.performance;
                    var6 = var7.now;
                    var7 = var6.bind(var7)();
                    var6 = _closure2_slot1;
                    var6 = var7 - var6;
                    var2.cleared_after = var6;
                    var2 = var4.bind(var5)(var3, var2);
                case 111:
                    var2 = _closure1_slot13;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.startBridgeTo = var4;
    var2.stopRequest = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.withRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 794, 795, 2]);