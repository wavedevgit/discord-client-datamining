// modules/premium/promotions/MarketingComponentHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/promotions/MarketingComponentHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun75050: for (var _fun75050_ip = 0;;) switch (_fun75050_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 1;
                var0 = var4[var0];
                var6 = undefined;
                var0 = var2.bind(var6)(var0);
                var5 = var0.bind(var6)();
                var2 = _closure1_slot0;
                var0 = 2;
                var0 = var4[var0];
                var7 = var2.bind(var6)(var0);
                var4 = var7.useStateFromStores;
                var0 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var2 = var4.bind(var7)(var2, var0);
                var0 = null;
                var4 = var0 == var3;
                if (var4) {
                    _fun75050_ip = 171;
                    continue _fun75050
                }
            case 89:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var1 = var7[var1];
                var4 = var4.bind(var6)(var1);
                var1 = var4.isThemeDark;
                var1 = var1.bind(var4)(var5);
                if (var1) {
                    _fun75050_ip = 148;
                    continue _fun75050
                }
            case 123:
                var1 = arg1;
                if (var1) {
                    _fun75050_ip = 148;
                    continue _fun75050
                }
            case 129:
                if (var2) {
                    _fun75050_ip = 140;
                    continue _fun75050
                }
            case 132:
                var1 = var3.lightUrl;
                _fun75050_ip = 146;
                continue _fun75050;
            case 140:
                var1 = var3.lightStaticUrl;
            case 146:
                _fun75050_ip = 168;
                continue _fun75050;
            case 148:
                if (var2) {
                    _fun75050_ip = 159;
                    continue _fun75050
                }
            case 151:
                var2 = var3.darkUrl;
                _fun75050_ip = 165;
                continue _fun75050;
            case 159:
                var2 = var3.darkStaticUrl;
            case 165:
                var1 = var2;
            case 168:
                var0 = var1;
            case 171:
                return var0;
        }
    };
    var2.useThemeAndReducedMotionAwareAssetUrl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1298, 3246, 566, 3157, 2]);