// modules/device/native/DeviceState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun93832: for (var _fun93832_ip = 0;;) switch (_fun93832_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun93832_ip = 154;
                            continue _fun93832
                        }
                    case 13:
                        var5 = undefined;
                        if (!(var1 === var5)) {
                            _fun93832_ip = 31;
                            continue _fun93832
                        }
                    case 19:
                        var6 = {};
                        var7 = true;
                        var6.fallback = var7;
                        var1 = var6;
                    case 31:
                        var4 = var1.fallback;
                        SaveGenerator(address = 41);
                    case 39:
                        return var5;
                    case 41:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun93832_ip = 151;
                            continue _fun93832
                        }
                    case 47: // try_start_0
                        var3 = _closure1_slot3;
                        var6 = var3.MediaManager;
                        var3 = var6.getDeviceStateInfo;
                        var3 = var3.bind(var6)();
                        SaveGenerator(address = 76);
                    case 74:
                        return var3;
                    case 76:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun93832_ip = 85;
                            continue _fun93832
                        }
                    case 82: // try_end0
                        return var3;
                    case 85:
                        return var3;
                    case 88: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var2 = var9;
                        var8 = _closure1_slot4;
                        var7 = var8.warn;
                        var6 = 'Failed to get device state:';
                        var6 = var7.bind(var8)(var6, var9);
                        if (var4) {
                            _fun93832_ip = 122;
                            continue _fun93832
                        }
                    case 120:
                        _fun93832_ip = 148;
                        continue _fun93832;
                    case 122:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 3;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var2 = var3.DEFAULT_DEVICE_STATE;
                    case 148:
                        return var2;
                    case 151:
                        return var1;
                    case 154:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'native/DeviceState.tsx';
    var12 = var4;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot4 = var3;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/device/native/DeviceState.tsx';
    var4 = var5.bind(var6)(var4);
    var2.logger = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getDeviceState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 3, 12268, 2]);