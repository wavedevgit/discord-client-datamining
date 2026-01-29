// modules/device/useThermalState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: _getThermalState, environment: var1
        _fun63781: for (var _fun63781_ip = 0;;) switch (_fun63781_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun63781_ip = 257;
                    continue _fun63781
                }
            case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = 0;
                var2 = var2[var5];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun63781_ip = 255;
                    continue _fun63781
                }
            case 52:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun63781_ip = 94;
                    continue _fun63781
                }
            case 82:
                var2 = _closure1_slot3;
                var2 = var2.UNHANDLED;
                return var2;
            case 94:
                var2 = _closure1_slot4;
                var2 = var2.NONE;
                if (!(var2 !== var0)) {
                    _fun63781_ip = 243;
                    continue _fun63781
                }
            case 111:
                var2 = _closure1_slot4;
                var2 = var2.LIGHT;
                if (!(var2 !== var0)) {
                    _fun63781_ip = 231;
                    continue _fun63781
                }
            case 125:
                var2 = _closure1_slot4;
                var2 = var2.MODERATE;
                if (!(var2 !== var0)) {
                    _fun63781_ip = 231;
                    continue _fun63781
                }
            case 139:
                var2 = _closure1_slot4;
                var2 = var2.SEVERE;
                if (!(var2 !== var0)) {
                    _fun63781_ip = 219;
                    continue _fun63781
                }
            case 153:
                var2 = _closure1_slot4;
                var2 = var2.CRITICAL;
                if (!(var2 !== var0)) {
                    _fun63781_ip = 207;
                    continue _fun63781
                }
            case 167:
                var2 = _closure1_slot4;
                var2 = var2.EMERGENCY;
                if (!(var2 !== var0)) {
                    _fun63781_ip = 207;
                    continue _fun63781
                }
            case 181:
                var2 = _closure1_slot4;
                var2 = var2.SHUTDOWN;
                if (!(var2 !== var0)) {
                    _fun63781_ip = 207;
                    continue _fun63781
                }
            case 195:
                var2 = _closure1_slot3;
                var2 = var2.UNHANDLED;
                return var2;
            case 207:
                var2 = _closure1_slot3;
                var2 = var2.CRITICAL;
                return var2;
            case 219:
                var2 = _closure1_slot3;
                var2 = var2.SERIOUS;
                return var2;
            case 231:
                var2 = _closure1_slot3;
                var2 = var2.FAIR;
                return var2;
            case 243:
                var1 = _closure1_slot3;
                var1 = var1.NOMINAL;
                return var1;
            case 255:
                return var0;
            case 257:
                var0 = _closure1_slot3;
                var0 = var0.UNHANDLED;
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var4 = {};
    var3 = -1;
    var4.UNHANDLED = var3;
    var0 = 'UNHANDLED';
    var4[var3] = var0;
    var11 = 0;
    var4.NOMINAL = var11;
    var0 = 'NOMINAL';
    var4[var11] = var0;
    var10 = 1;
    var4.FAIR = var10;
    var0 = 'FAIR';
    var4[var10] = var0;
    var0 = 2;
    var4.SERIOUS = var0;
    var3 = 'SERIOUS';
    var4[var0] = var3;
    var9 = 3;
    var4.CRITICAL = var9;
    var8 = 'CRITICAL';
    var4[var9] = var8;
    var _closure1_slot3 = var4;
    var3 = {};
    var3.NONE = var11;
    var7 = 'NONE';
    var3[var11] = var7;
    var3.LIGHT = var10;
    var7 = 'LIGHT';
    var3[var10] = var7;
    var3.MODERATE = var0;
    var7 = 'MODERATE';
    var3[var0] = var7;
    var3.SEVERE = var9;
    var7 = 'SEVERE';
    var3[var9] = var7;
    var7 = 4;
    var3.CRITICAL = var7;
    var3[var7] = var8;
    var8 = 5;
    var3.EMERGENCY = var8;
    var7 = 'EMERGENCY';
    var3[var8] = var7;
    var8 = 6;
    var3.SHUTDOWN = var8;
    var7 = 'SHUTDOWN';
    var3[var8] = var7;
    var _closure1_slot4 = var3;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/device/useThermalState.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function() { // Original name: useThermalState, environment: var1
        var2 = _closure1_slot5;
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var0 = var1[var0];
        var1 = undefined;
        var3 = var3.bind(var1)(var0);
        var0 = var3.useRawThermalState;
        var0 = var0.bind(var3)();
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.default = var5;
    var2.ThermalStates = var4;
    var2.AndroidThermalStates = var3;
    var1 = function() { // Original name: getThermalState, environment: var1
        var2 = _closure1_slot5;
        var3 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 1;
        var0 = var1[var0];
        var1 = undefined;
        var3 = var3.bind(var1)(var0);
        var0 = var3.getRawThermalState;
        var0 = var0.bind(var3)();
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.getThermalState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 7904, 2]);