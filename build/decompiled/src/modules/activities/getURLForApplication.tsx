// modules/activities/getURLForApplication.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var3 = function arg0() {
        _fun63234: for (var _fun63234_ip = 0;;) switch (_fun63234_ip) {
            case 0:
                var1 = global;
                var0 = var1.window;
                var0 = var0.GLOBAL_ENV;
                var5 = var0.ACTIVITY_APPLICATION_HOST;
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun63234_ip = 60;
                    continue _fun63234
                }
            case 29:
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var3 = 'https://';
                var2 = arg0;
                var1 = '.';
                var0 = var4.bind(var3)(var2, var1, var5);
            case 60:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var1 = function() {
        _fun63235: for (var _fun63235_ip = 0;;) switch (_fun63235_ip) {
            case 0:
                var1 = _closure1_slot1;
                var0 = var1.getState;
                var1 = var0.bind(var1)();
                var0 = var1.useActivityUrlOverride;
                if (!var0) {
                    _fun63235_ip = 38;
                    continue _fun63235
                }
            case 26:
                var3 = var1.activityUrlOverride;
                var2 = null;
                var0 = var2 != var3;
            case 38:
                if (!var0) {
                    _fun63235_ip = 55;
                    continue _fun63235
                }
            case 41:
                var2 = var1.activityUrlOverride;
                var1 = '';
                var0 = var1 !== var2;
            case 55:
                return var0;
        }
    };
    var _closure1_slot3 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var6[var0];
    var0 = undefined;
    var5 = var7.bind(var0)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var6[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var6 = var6[var5];
    var5 = arg1;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/getURLForApplication.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun63236: for (var _fun63236_ip = 0;;) switch (_fun63236_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot3;
                var2 = undefined;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun63236_ip = 64;
                    continue _fun63236
                }
            case 19:
                var4 = _closure1_slot0;
                var0 = var4.inTestModeForEmbeddedApplication;
                var0 = var0.bind(var4)(var3);
                if (var0) {
                    _fun63236_ip = 50;
                    continue _fun63236
                }
            case 39:
                var0 = _closure1_slot2;
                var0 = var0.bind(var2)(var3);
                _fun63236_ip = 62;
                continue _fun63236;
            case 50:
                var2 = _closure1_slot0;
                var0 = var2.testModeOriginURL;
            case 62:
                _fun63236_ip = 84;
                continue _fun63236;
            case 64:
                var2 = _closure1_slot1;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var0 = var1.activityUrlOverride;
            case 84:
                return var0;
        }
    };
    var2.default = var4;
    var2.getNonTestModeUrlForApplication = var3;
    var2.isUsingDevShelfActivityUrlOverride = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7249, 7248, 2]);