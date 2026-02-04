// modules/user_settings/native/appearance/UserSettingsAppearanceThemeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var8;
    var0 = function arg0() {
        _fun84244: for (var _fun84244_ip = 0;;) switch (_fun84244_ip) {
            case 0:
                var2 = arg0;
                var4 = var2.type;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 3;
                var0 = var0[var7];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var0 = var0.ClientThemeType;
                var1 = var0.CUSTOM_BACKGROUND_GRADIENT;
                var0 = 'custom theme';
                if (!(var4 !== var1)) {
                    _fun84244_ip = 163;
                    continue _fun84244
                }
            case 55:
                var4 = var2.type;
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var1 = var6.bind(var5)(var1);
                var1 = var1.ClientThemeType;
                var1 = var1.BACKGROUND_GRADIENT_PRESET;
                if (!(var4 !== var1)) {
                    _fun84244_ip = 125;
                    continue _fun84244
                }
            case 93:
                var6 = var2.theme;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = 'default ';
                var1 = var4.bind(var1)(var6);
                _fun84244_ip = 160;
                continue _fun84244;
            case 125:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var3 = var3.BackgroundGradientPresetId;
                var2 = var2.id;
                var1 = var3[var2];
            case 160:
                var0 = var1;
            case 163:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot3 = var4;
    var3 = var3.ThemeTypes;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var10 = var3.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    var3 = var3.REDESIGN_STANDARD_BACKGROUND_THEMES;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.AnalyticsPremiumFeatureNames;
    var _closure1_slot5 = var4;
    var5 = function arg0() {
        var0 = arg0;
        var7 = var0.isPersisted;
        var6 = var0.isSynced;
        var8 = var0.themeName;
        var5 = var0.analyticsLocations;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 9;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot3;
        var2 = var1.CLIENT_THEME_UPDATED;
        var1 = {};
        var9 = _closure1_slot5;
        var9 = var9.CLIENT_THEME;
        var1.feature_name = var9;
        var1.theme_name = var8;
        var1.is_persisted = var7;
        var1.is_synced = var6;
        var1.location_stack = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot6 = var5;
    var4 = var3.length;
    var _closure1_slot7 = var4;
    var9 = var10.reduce;
    var6 = function(arg0, arg1, arg2) { // Environment: var1
        var0 = {};
        var4 = arg0;
        var5 = var0;
        var1 = copyDataProperties(var5, var4);
        var1 = arg1;
        var2 = var1.id;
        var3 = _closure1_slot7;
        var1 = arg2;
        var1 = var1 + var3;
        var0[var2] = var1;
        return var0;
    };
    var3 = {};
    var3 = var9.bind(var10)(var6, var3);
    var _closure1_slot8 = var3;
    var6 = 10;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_settings/native/appearance/UserSettingsAppearanceThemeUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0, arg1, arg2) { // Environment: var1
        _fun84247: for (var _fun84247_ip = 0;;) switch (_fun84247_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot6;
                var0 = {};
                var3 = true;
                var0.isPersisted = var3;
                var3 = arg2;
                var0.isSynced = var3;
                var5 = _closure1_slot9;
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var0.themeName = var5;
                var5 = arg1;
                var0.analyticsLocations = var5;
                var0 = var2.bind(var3)(var0);
                var2 = var4.theme;
                var0 = _closure1_slot4;
                var0 = var0.MIDNIGHT;
                if (!(var2 === var0)) {
                    _fun84247_ip = 109;
                    continue _fun84247
                }
            case 76:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var5 = var2.bind(var3)(var0);
                var2 = var5.setShouldSyncAppearanceSettings;
                var0 = false;
                var0 = var2.bind(var5)(var0);
            case 109:
                var2 = var4.theme;
                var0 = 'system';
                if (!(var0 !== var2)) {
                    _fun84247_ip = 566;
                    continue _fun84247
                }
            case 126:
                var2 = var4.type;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 3;
                var0 = var0[var6];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ClientThemeType;
                var0 = var0.CUSTOM_BACKGROUND_GRADIENT;
                if (!(var2 !== var0)) {
                    _fun84247_ip = 407;
                    continue _fun84247
                }
            case 170:
                var2 = var4.type;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var5.bind(var3)(var0);
                var0 = var0.ClientThemeType;
                var0 = var0.BACKGROUND_GRADIENT_PRESET;
                if (!(var2 !== var0)) {
                    _fun84247_ip = 298;
                    continue _fun84247
                }
            case 208:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var0 = var5[var0];
                var6 = var2.bind(var3)(var0);
                var0 = var6.resetBackgroundGradientPreset;
                var0 = var0.bind(var6)();
                var0 = 7;
                var0 = var5[var0];
                var6 = var2.bind(var3)(var0);
                var0 = var6.resetCustomTheme;
                var0 = var0.bind(var6)();
                var0 = 5;
                var0 = var5[var0];
                var5 = var2.bind(var3)(var0);
                var2 = var5.saveClientTheme;
                var0 = {};
                var6 = var4.theme;
                var0.theme = var6;
                var0 = var2.bind(var5)(var0);
                _fun84247_ip = 402;
                continue _fun84247;
            case 298:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var8 = var5.bind(var3)(var2);
                var7 = var8.updateBackgroundGradientPreset;
                var2 = var4.id;
                var2 = var7.bind(var8)(var2);
                var2 = 7;
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var2 = var7.resetCustomTheme;
                var2 = var2.bind(var7)();
                var2 = 5;
                var2 = var6[var2];
                var6 = var5.bind(var3)(var2);
                var5 = var6.saveClientTheme;
                var2 = {};
                var7 = var4.id;
                var2.backgroundGradientPresetId = var7;
                var7 = var4.theme;
                var2.theme = var7;
                var0 = var5.bind(var6)(var2);
            case 402:
                _fun84247_ip = 564;
                continue _fun84247;
            case 407:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 6;
                var2 = var9[var2];
                var5 = var8.bind(var3)(var2);
                var2 = var5.resetBackgroundGradientPreset;
                var2 = var2.bind(var5)();
                var2 = 7;
                var2 = var9[var2];
                var7 = var8.bind(var3)(var2);
                var6 = var7.updateCustomTheme;
                var5 = var4.customThemeSettings;
                var2 = var4.theme;
                var2 = var6.bind(var7)(var5, var2);
                var2 = 5;
                var2 = var9[var2];
                var6 = var8.bind(var3)(var2);
                var5 = var6.saveClientTheme;
                var2 = {};
                var7 = var4.customThemeSettings;
                var2.customUserThemeSettings = var7;
                var7 = 8;
                var7 = var9[var7];
                var9 = var8.bind(var3)(var7);
                var8 = var9.isThemeDark;
                var7 = var4.theme;
                var7 = var8.bind(var9)(var7);
                var8 = _closure1_slot4;
                if (var7) {
                    _fun84247_ip = 548;
                    continue _fun84247
                }
            case 540:
                var7 = var8.LIGHT;
                _fun84247_ip = 554;
                continue _fun84247;
            case 548:
                var7 = var8.DARK;
            case 554:
                var2.theme = var7;
                var0 = var5.bind(var6)(var2);
            case 564:
                _fun84247_ip = 654;
                continue _fun84247;
            case 566:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var6 = var2.bind(var3)(var1);
                var1 = var6.resetBackgroundGradientPreset;
                var1 = var1.bind(var6)();
                var1 = 7;
                var1 = var5[var1];
                var6 = var2.bind(var3)(var1);
                var1 = var6.resetCustomTheme;
                var1 = var1.bind(var6)();
                var1 = 5;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.saveClientTheme;
                var1 = {};
                var4 = var4.theme;
                var1.theme = var4;
                var0 = var2.bind(var3)(var1);
            case 654:
                return var0;
        }
    };
    var2.handleSaveTheme = var6;
    var2.trackClientThemeUpdated = var5;
    var2.STANDARD_BACKGROUND_THEME_BUFFER = var4;
    var2.PRESET_ID_TO_CAROUSEL_INDEX_MAP = var3;
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
        _fun84248: for (var _fun84248_ip = 0;;) switch (_fun84248_ip) {
            case 0:
                var0 = arg0;
                var6 = arg2;
                var7 = arg3;
                var2 = var6.findIndex;
                var1 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ClientThemeType;
                    var0 = var0.CUSTOM_BACKGROUND_GRADIENT;
                    var0 = var1 === var0;
                    return var0;
                };
                var2 = var2.bind(var6)(var1);
                var1 = 0;
                var2 = var2 >= var1;
                var3 = null;
                if (!(var3 == var0)) {
                    _fun84248_ip = 119;
                    continue _fun84248
                }
            case 41:
                var3 = arg4;
                if (!var3) {
                    _fun84248_ip = 68;
                    continue _fun84248
                }
            case 47:
                var5 = var6.findIndex;
                var3 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var1 = var0.type;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.ClientThemeType;
                    var0 = var0.CUSTOM_BACKGROUND_GRADIENT;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var5.bind(var6)(var3);
                if (var2) {
                    _fun84248_ip = 117;
                    continue _fun84248
                }
            case 68:
                var5 = 'system';
                var8 = arg1;
                if (var8) {
                    _fun84248_ip = 81;
                    continue _fun84248
                }
            case 78:
                var5 = var7;
            case 81:
                var _closure2_slot0 = var5;
                var5 = var6.findIndex;
                var4 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var1 = var0.theme;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var5.bind(var6)(var4);
                var6 = var5 >= var1;
                var4 = 0;
                if (!var6) {
                    _fun84248_ip = 115;
                    continue _fun84248
                }
            case 112:
                var4 = var5;
            case 115:
                return var4;
            case 117:
                return var3;
            case 119:
                var3 = _closure1_slot8;
                var0 = var0.id;
                var0 = var3[var0];
                var1 = 0;
                if (!var2) {
                    _fun84248_ip = 143;
                    continue _fun84248
                }
            case 140:
                var1 = 1;
            case 143:
                var0 = var0 + var1;
                return var0;
        }
    };
    var2.getUserThemeIndex = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3210, 1623, 3211, 1311, 7627, 10782, 10783, 3157, 795, 2]);