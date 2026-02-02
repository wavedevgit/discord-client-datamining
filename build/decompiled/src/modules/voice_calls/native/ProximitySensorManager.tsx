// modules/voice_calls/native/ProximitySensorManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun114048: for (var _fun114048_ip = 0;;) switch (_fun114048_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = function() {
                _fun114049: for (var _fun114049_ip = 0;;) switch (_fun114049_ip) {
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
                    case 72: // try_end0
                        _fun114049_ip = 76;
                        continue _fun114049;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot13 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot13 = var0;
            var0 = function() {
                _fun114052: for (var _fun114052_ip = 0;;) switch (_fun114052_ip) {
                    case 0:
                        var1 = _closure1_slot10;
                        var0 = var1.getCurrentRouteType;
                        var7 = var0.bind(var1)();
                        var1 = _closure1_slot9;
                        var0 = var1.isConnected;
                        var4 = var0.bind(var1)();
                        var1 = _closure1_slot7;
                        var0 = var1.getCurrentEmbeddedActivity;
                        var1 = var0.bind(var1)();
                        var0 = null;
                        var6 = var0 != var1;
                        var1 = _closure1_slot8;
                        var0 = var1.getAllActiveStreams;
                        var0 = var0.bind(var1)();
                        var1 = var0.length;
                        var0 = 0;
                        var5 = var1 > var0;
                        var2 = _closure1_slot12;
                        var1 = var2.setProximityMonitoringEnabled;
                        var0 = _closure1_slot11;
                        var0 = var0.RECEIVER;
                        var0 = var7 === var0;
                        if (!var0) {
                            _fun114052_ip = 108;
                            continue _fun114052
                        }
                    case 105:
                        var0 = var4;
                    case 108:
                        if (!var0) {
                            _fun114052_ip = 161;
                            continue _fun114052
                        }
                    case 111:
                        var7 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 10;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var7.bind(var3)(var4);
                        var3 = var4.isIOS;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun114052_ip = 158;
                            continue _fun114052
                        }
                    case 146:
                        var4 = !var6;
                        if (var6) {
                            _fun114052_ip = 155;
                            continue _fun114052
                        }
                    case 152:
                        var4 = !var5;
                    case 155:
                        var3 = var4;
                    case 158:
                        var0 = var3;
                    case 161:
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot14 = var0;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var0 = 0;
            var3 = var5[var0];
            var0 = undefined;
            var3 = var6.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 1;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 2;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 3;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var7 = var3.NativeModules;
            var3 = 6;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot7 = var3;
            var3 = 7;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot8 = var3;
            var3 = 8;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var _closure1_slot9 = var3;
            var3 = 9;
            var8 = var5[var3];
            var8 = var6.bind(var0)(var8);
            var _closure1_slot10 = var8;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.RouteTypes;
            var _closure1_slot11 = var3;
            var3 = 10;
            var3 = var5[var3];
            var8 = var4.bind(var0)(var3);
            var3 = var8.isIOS;
            var3 = var3.bind(var8)();
            if (var3) {
                _fun114048_ip = 297;
                continue _fun114048
            }
        case 283:
            var3 = 11;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            _fun114048_ip = 303;
            continue _fun114048;
        case 297:
            var3 = var7.ProximitySensorManager;
        case 303:
            var _closure1_slot12 = var3;
            var3 = 12;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var1 = function(arg0) { // Environment: var1
                var2 = function arg0() {
                    _fun114054: for (var _fun114054_ip = 0;;) switch (_fun114054_ip) {
                        case 0:
                            var4 = this;
                            var12 = 0;
                            var0 = copyRestArgs(var12);
                            var6 = _closure1_slot3;
                            var2 = _closure2_slot0;
                            var3 = undefined;
                            var6 = var6.bind(var3)(var4, var2);
                            var9 = new Array(0);
                            var12 = var9;
                            var11 = var0;
                            var10 = 0;
                            var0 = arraySpread(var12, var11, var10);
                            var0 = _closure1_slot5;
                            var8 = var0.bind(var3)(var2);
                            var2 = _closure1_slot4;
                            var0 = _closure1_slot13;
                            var0 = var0.bind(var3)();
                            if (var0) {
                                _fun114054_ip = 84;
                                continue _fun114054
                            }
                        case 71:
                            var0 = var8.apply;
                            var0 = var0.bind(var8)(var4, var9);
                            _fun114054_ip = 118;
                            continue _fun114054;
                        case 84:
                            var5 = global;
                            var7 = var5.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot5;
                            var5 = var5.bind(var3)(var4);
                            var5 = var5.constructor;
                            var0 = var6.bind(var7)(var8, var9, var5);
                        case 118:
                            var0 = var2.bind(var3)(var4, var0);
                            var2 = global;
                            var2 = var2.Map;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var13 = var3;
                            var2 = new var13[var2](var12);
                            var5 = var2 instanceof Object ? var2 : var3;
                            var3 = var5.set;
                            var2 = _closure1_slot10;
                            var4 = _closure1_slot14;
                            var3 = var3.bind(var5)(var2, var4);
                            var2 = var3.set;
                            var1 = _closure1_slot9;
                            var1 = var2.bind(var3)(var1, var4);
                            var0.stores = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var2;
                var4 = _closure1_slot6;
                var1 = undefined;
                var3 = arg0;
                var3 = var4.bind(var1)(var2, var3);
                var0 = _closure1_slot2;
                var0 = var0.bind(var1)(var2);
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var12 = var3;
            var1 = new var12[var1](var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 13;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/voice_calls/native/ProximitySensorManager.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 27, 1371, 3675, 3479, 8168, 478, 14574, 4265, 2]);