// modules/user_settings/ThemeActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SYSTEM_THEME_CHANGE';
        var1.type = var4;
        var4 = arg0;
        var1.systemTheme = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.SystemThemeState;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/ThemeActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.setSystemTheme = var3;
    var3 = function() {
        _fun28104: for (var _fun28104_ip = 0;;) switch (_fun28104_ip) {
            case 0:
                var1 = _closure1_slot2;
                var2 = var1.useSystemTheme;
                var1 = _closure1_slot3;
                var1 = var1.OFF;
                if (!(var2 !== var1)) {
                    _fun28104_ip = 62;
                    continue _fun28104
                }
            case 27:
                var2 = _closure1_slot4;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var0 = var0.bind(var1)();
                var0 = var2.bind(var1)(var0);
            case 62:
                var0 = undefined;
                return var0;
        }
    };
    var2.setSystemThemeIfNeeded = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UNSYNCED_USER_SETTINGS_UPDATE';
        var1.type = var4;
        var4 = {};
        var5 = arg0;
        var4.useSystemTheme = var5;
        var1.settings = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setUseSystemTheme = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UPDATE_THEME_PREFERENCES';
        var1.type = var4;
        var4 = arg0;
        var1.preferences = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateThemePreferences = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_THEME_OVERRIDE';
        var1.type = var4;
        var4 = arg0;
        var1.theme = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setThemeOverride = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'CLEAR_THEME_OVERRIDE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearThemeOverride = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'REFRESH_THEME';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.refreshTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3199, 3200, 806, 3201, 2]);