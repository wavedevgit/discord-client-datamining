// modules/display_name_styles/DisplayNameStylesExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var12 = true;
    var3.value = var12;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var4 = {};
    var0 = 0;
    var4.PROFILE_ONLY = var0;
    var3 = 'PROFILE_ONLY';
    var4[var0] = var3;
    var5 = 1;
    var4.ALL_SURFACES = var5;
    var3 = 'ALL_SURFACES';
    var4[var5] = var3;
    var8 = 2;
    var4.ALL_EXCEPT_DM = var8;
    var3 = 'ALL_EXCEPT_DM';
    var4[var8] = var3;
    var _closure1_slot0 = var4;
    var3 = var7[var0];
    var0 = undefined;
    var9 = var6.bind(var0)(var3);
    var8 = var9.createApexExperiment;
    var3 = {
        'name': '2025-10-display-name-styles-mobile',
        'kind': 'user'
    };
    var10 = {};
    var11 = false;
    var10.enabled = var11;
    var3.defaultConfig = var10;
    var10 = {};
    var11 = {};
    var11.enabled = var12;
    var13 = var4.ALL_EXCEPT_DM;
    var11.surfaces = var13;
    var10[1] = var11;
    var11 = {};
    var11.enabled = var12;
    var12 = var4.ALL_SURFACES;
    var11.surfaces = var12;
    var10[2] = var11;
    var3.variations = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot1 = var3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/display_name_styles/DisplayNameStylesExperiments.tsx';
    var5 = var6.bind(var7)(var5);
    var2.DisplayNameStylesSurfaces = var4;
    var2.DisplayNameStylesMobileExperiment = var3;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.location;
        var2 = _closure1_slot1;
        var1 = var2.useConfig;
        var0 = {};
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useIsDisplayNameStylesMobileEnabled = var3;
    var1 = function arg0() {
        _fun36530: for (var _fun36530_ip = 0;;) switch (_fun36530_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.location;
                var3 = _closure1_slot1;
                var2 = var3.getConfig;
                var0 = {};
                var0.location = var4;
                var2 = var2.bind(var3)(var0);
                var0 = var2.enabled;
                if (!var0) {
                    _fun36530_ip = 60;
                    continue _fun36530
                }
            case 40:
                var2 = var2.surfaces;
                var1 = _closure1_slot0;
                var1 = var1.ALL_SURFACES;
                var0 = var2 === var1;
            case 60:
                return var0;
        }
    };
    var2.isDisplayNameStylesMobileChatEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);