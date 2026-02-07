// modules/activate_device/ActivateDeviceUtils.tsx
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
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.PlatformTypes;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activate_device/ActivateDeviceUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun96836: for (var _fun96836_ip = 0;;) switch (_fun96836_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 1;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var0 = var0.ConsoleOAuthApplications;
                var0 = var0.PLAYSTATION_APPLICATION_ID;
                if (!(var3 !== var0)) {
                    _fun96836_ip = 91;
                    continue _fun96836
                }
            case 44:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var2.bind(var4)(var0);
                var0 = var0.ConsoleOAuthApplications;
                var2 = var0.PLAYSTATION_STAGING_APPLICATION_ID;
                var0 = null;
                if (!(var3 === var2)) {
                    _fun96836_ip = 101;
                    continue _fun96836
                }
            case 79:
                var2 = _closure1_slot2;
                var0 = var2.PLAYSTATION_STAGING;
                _fun96836_ip = 101;
                continue _fun96836;
            case 91:
                var1 = _closure1_slot2;
                var0 = var1.PLAYSTATION;
            case 101:
                return var0;
        }
    };
    var2.clientIdToActivateDevicePlatform = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5824, 2]);