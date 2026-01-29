// modules/client_themes/ClientThemesBackgroundActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/client_themes/ClientThemesBackgroundActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPDATE_BACKGROUND_GRADIENT_PRESET';
        var1.type = var4;
        var4 = arg0;
        var1.presetId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateBackgroundGradientPreset = var3;
    var3 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPDATE_MOBILE_PENDING_THEME_INDEX';
        var1.type = var4;
        var4 = arg0;
        var1.mobileThemesIndex = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateMobilePendingThemeIndex = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            'presetId': null
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetBackgroundGradientPreset = var3;
    var1 = function() { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'RESET_PREVIEW_CLIENT_THEME';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPreviewClientTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 2]);