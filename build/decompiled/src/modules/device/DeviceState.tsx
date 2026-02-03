// modules/device/DeviceState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 1;
    var3 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var3);
    var6 = var7.fileFinishedImporting;
    var3 = 'modules/device/DeviceState.tsx';
    var3 = var6.bind(var7)(var3);
    var3 = 2;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.DeviceState;
    var2.DeviceState = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThermalState;
    var2.ThermalState = var3;
    var3 = 0;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.getDeviceState;
    var2.getDeviceState = var3;
    var1 = function arg0() {
        _fun93811: for (var _fun93811_ip = 0;;) switch (_fun93811_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 === var0)) {
                    _fun93811_ip = 61;
                    continue _fun93811
                }
            case 9:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var3 = var1.logger;
                var2 = var3.info;
                var1 = 'Device state not available';
                var1 = var2.bind(var3)(var1);
                _fun93811_ip = 283;
                continue _fun93811;
            case 61:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var5 = var4[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var5);
                var7 = var5.logger;
                var6 = var7.info;
                var5 = 'Device State Information:';
                var5 = var6.bind(var7)(var5);
                var5 = var4[var1];
                var5 = var3.bind(var2)(var5);
                var8 = var5.logger;
                var7 = var8.info;
                var10 = var0.thermalState;
                var5 = global;
                var6 = var5.HermesInternal;
                var9 = var6.concat;
                var6 = '- Thermal State: ';
                var6 = var9.bind(var6)(var10);
                var6 = var7.bind(var8)(var6);
                var6 = var4[var1];
                var6 = var3.bind(var2)(var6);
                var7 = var6.logger;
                var6 = var7.info;
                var9 = var0.batteryLevel;
                var8 = 100;
                var10 = var8 * var9;
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var8 = '- Battery Level: ';
                var5 = '%';
                var5 = var9.bind(var8)(var10, var5);
                var5 = var6.bind(var7)(var5);
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var2 = var1.logger;
                var1 = var2.info;
                var0 = var0.isLowPowerMode;
                var3 = 'Disabled';
                if (!var0) {
                    _fun93811_ip = 268;
                    continue _fun93811
                }
            case 264:
                var3 = 'Enabled';
            case 268:
                var0 = '- Low Power Mode: ';
                var0 = var0 + var3;
                var0 = var1.bind(var2)(var0);
            case 283:
                var0 = undefined;
                return var0;
        }
    };
    var2.logDeviceState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12264, 2, 12265]);