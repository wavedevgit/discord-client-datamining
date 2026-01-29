// modules/device/constants/DeviceState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var3 = {};
    var0 = 'NOMINAL';
    var3.NOMINAL = var0;
    var0 = 'FAIR';
    var3.FAIR = var0;
    var0 = 'SERIOUS';
    var3.SERIOUS = var0;
    var0 = 'CRITICAL';
    var3.CRITICAL = var0;
    var0 = 'UNKNOWN';
    var3.UNKNOWN = var0;
    var1 = {
        'thermalState': null,
        'batteryLevel': 1,
        'isLowPowerMode': false
    };
    var0 = var3.UNKNOWN;
    var1.thermalState = var0;
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/device/constants/DeviceState.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ThermalState = var3;
    var2.DEFAULT_DEVICE_STATE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);