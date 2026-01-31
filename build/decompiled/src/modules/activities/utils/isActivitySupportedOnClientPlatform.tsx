// modules/activities/utils/isActivitySupportedOnClientPlatform.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/isActivitySupportedOnClientPlatform.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun63940: for (var _fun63940_ip = 0;;) switch (_fun63940_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var2 = var1[var3];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.isIOS;
                var6 = var2.bind(var5)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                if (var6) {
                    _fun63940_ip = 112;
                    continue _fun63940
                }
            case 48:
                var3 = var5[var3];
                var6 = var2.bind(var1)(var3);
                var3 = var6.isAndroid;
                var3 = var3.bind(var6)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 1;
                var0 = var7[var0];
                var0 = var6.bind(var1)(var0);
                var0 = var0.EmbeddedActivitySupportedPlatforms;
                if (var3) {
                    _fun63940_ip = 104;
                    continue _fun63940
                }
            case 96:
                var3 = var0.WEB;
                _fun63940_ip = 110;
                continue _fun63940;
            case 104:
                var3 = var0.ANDROID;
            case 110:
                _fun63940_ip = 136;
                continue _fun63940;
            case 112:
                var0 = 1;
                var0 = var5[var0];
                var0 = var2.bind(var1)(var0);
                var0 = var0.EmbeddedActivitySupportedPlatforms;
                var3 = var0.IOS;
            case 136:
                var0 = null;
                var2 = var0 == var4;
                var1 = undefined;
                if (var2) {
                    _fun63940_ip = 157;
                    continue _fun63940
                }
            case 147:
                var2 = var4.includes;
                var1 = var2.bind(var4)(var3);
            case 157:
                var0 = var0 != var1;
                if (!var0) {
                    _fun63940_ip = 167;
                    continue _fun63940
                }
            case 164:
                var0 = var1;
            case 167:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 1636, 2]);