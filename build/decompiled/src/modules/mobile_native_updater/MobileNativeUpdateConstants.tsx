// modules/mobile_native_updater/MobileNativeUpdateConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
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
    var8 = var4.bind(var0)(var3);
    var7 = var8.duration;
    var4 = 6;
    var3 = 'hours';
    var3 = var7.bind(var8)(var4, var3);
    var1 = function() { // Original name: currentUpdateConfig, environment: var1
        _fun28184: for (var _fun28184_ip = 0;;) switch (_fun28184_ip) {
            case 0:
                var3 = global;
                var0 = var3.process;
                var0 = var0.env;
                var2 = var0.INTERNAL_UPDATE_URL;
                var1 = null;
                var0 = undefined;
                var4 = null;
                if (!(var0 !== var2)) {
                    _fun28184_ip = 181;
                    continue _fun28184
                }
            case 33:
                var2 = var3.process;
                var2 = var2.env;
                var5 = var2.INTERNAL_UPDATE_URL;
                var2 = '';
                var4 = null;
                if (!(var2 !== var5)) {
                    _fun28184_ip = 181;
                    continue _fun28184
                }
            case 61:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 1;
                var2 = var2[var7];
                var6 = var6.bind(var0)(var2);
                var2 = var6.isIOS;
                var2 = var2.bind(var6)();
                if (var2) {
                    _fun28184_ip = 129;
                    continue _fun28184
                }
            case 97:
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var6 = var6.bind(var0)(var2);
                var2 = var6.isAndroid;
                var6 = var2.bind(var6)();
                var2 = null;
                if (!var6) {
                    _fun28184_ip = 178;
                    continue _fun28184
                }
            case 129:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.toURLSafe;
                var5 = var3.process;
                var5 = var5.env;
                var5 = var5.INTERNAL_UPDATE_URL;
                var2 = var6.bind(var7)(var5);
            case 178:
                var4 = var2;
            case 181:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 3;
                var5 = var5[var6];
                var7 = var7.bind(var0)(var5);
                var5 = var7.getConstants;
                var8 = var5.bind(var7)();
                var7 = var3.parseInt;
                var9 = var1 == var8;
                var5 = undefined;
                if (var9) {
                    _fun28184_ip = 235;
                    continue _fun28184
                }
            case 229:
                var5 = var8.Build;
            case 235:
                var5 = var7.bind(var0)(var5);
                var7 = var3.Number;
                var3 = var7.isNaN;
                var7 = var3.bind(var7)(var5);
                var3 = null;
                if (var7) {
                    _fun28184_ip = 297;
                    continue _fun28184
                }
            case 262:
                var7 = 0;
                var3 = null;
                if (!(var7 !== var5)) {
                    _fun28184_ip = 297;
                    continue _fun28184
                }
            case 270:
                var7 = 123456;
                var3 = null;
                if (!(var7 !== var5)) {
                    _fun28184_ip = 297;
                    continue _fun28184
                }
            case 282:
                var7 = 1234567890;
                var3 = null;
                if (!(var7 !== var5)) {
                    _fun28184_ip = 297;
                    continue _fun28184
                }
            case 294:
                var3 = var5;
            case 297:
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var5 = var5.bind(var0)(var2);
                var2 = var5.getConstants;
                var2 = var2.bind(var5)();
                var5 = var1 == var2;
                var0 = undefined;
                if (var5) {
                    _fun28184_ip = 339;
                    continue _fun28184
                }
            case 333:
                var0 = var2.Version;
            case 339:
                var5 = var1 != var0;
                var2 = null;
                if (!var5) {
                    _fun28184_ip = 351;
                    continue _fun28184
                }
            case 348:
                var2 = var0;
            case 351:
                var0 = null;
                if (!(var1 !== var4)) {
                    _fun28184_ip = 388;
                    continue _fun28184
                }
            case 357:
                var0 = null;
                if (!(var1 !== var3)) {
                    _fun28184_ip = 388;
                    continue _fun28184
                }
            case 363:
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun28184_ip = 388;
                    continue _fun28184
                }
            case 369:
                var1 = {};
                var1.url = var4;
                var1.currentBuild = var3;
                var1.currentVersion = var2;
                var0 = var1;
            case 388:
                return var0;
        }
    };
    var1 = var1.bind(var0)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/mobile_native_updater/MobileNativeUpdateConstants.tsx';
    var4 = var5.bind(var6)(var4);
    var2.UPDATE_CHECK_INTERVAL = var3;
    var2.UPDATE_CONFIG = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3004, 478, 1457, 1594, 2]);