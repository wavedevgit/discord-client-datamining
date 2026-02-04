// modules/activate_device/useActivateDeviceStepTracking.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activate_device/useActivateDeviceStepTracking.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 2;
        var3 = var3[var0];
        var0 = undefined;
        var3 = var4.bind(var0)(var3);
        var6 = var3.bind(var0)(var5);
        var _closure2_slot1 = var6;
        var4 = _closure1_slot3;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun96317: for (var _fun96317_ip = 0;;) switch (_fun96317_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    if (!(var1 !== var0)) {
                        _fun96317_ip = 210;
                        continue _fun96317
                    }
                case 18:
                    var0 = _closure2_slot0;
                    var1 = var0.type;
                    var0 = 'user-code-input';
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun96317_ip = 59;
                        continue _fun96317
                    }
                case 40:
                    var1 = _closure2_slot0;
                    var2 = var1.type;
                    var1 = 'handoff';
                    var0 = var1 !== var2;
                case 59:
                    var8 = null;
                    var4 = null;
                    if (!var0) {
                        _fun96317_ip = 118;
                        continue _fun96317
                    }
                case 66:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.clientIdToActivateDevicePlatform;
                    var0 = _closure2_slot0;
                    var0 = var0.userCodeData;
                    var0 = var0.clientId;
                    var4 = var1.bind(var2)(var0);
                case 118:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var1);
                    var2 = var3.track;
                    var0 = _closure1_slot4;
                    var1 = var0.DEVICE_LINK_STEP;
                    var0 = {};
                    var7 = _closure2_slot1;
                    var7 = var8 == var7;
                    if (var7) {
                        _fun96317_ip = 180;
                        continue _fun96317
                    }
                case 171:
                    var7 = _closure2_slot1;
                    var6 = var7.type;
                case 180:
                    var0.previous_step = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.type;
                    var0.current_step = var5;
                    var0.platform_type = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 210:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useActivateDeviceStepTracking = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 5306, 12544, 795, 2]);