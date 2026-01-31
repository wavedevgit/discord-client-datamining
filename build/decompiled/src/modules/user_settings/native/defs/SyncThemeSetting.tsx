// modules/user_settings/native/defs/SyncThemeSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.AnalyticEvents;
    var _closure1_slot7 = var3;
    var1 = var1.ThemeTypes;
    var _closure1_slot8 = var1;
    var1 = 11;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createToggle;
    var1 = {};
    var9 = function() { // Original name: title, environment: var7
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["3340dY"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.APPEARANCE;
    var1.parent = var8;
    var8 = function() { // Original name: useSyncThemeAcrossClientsValue, environment: var7
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot4;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.shouldSync;
            var0 = 'appearance';
            var1 = var1.bind(var2)(var0);
            var0 = false;
            var0 = var0 !== var1;
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useValue = var8;
    var8 = function(arg0) { // Original name: onSyncThemeAcrossClientsValueChange, environment: var7
        _fun84598: for (var _fun84598_ip = 0;;) switch (_fun84598_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot5;
                var10 = var0.theme;
                var0 = _closure1_slot3;
                var5 = var0.gradientPreset;
                var4 = null;
                var6 = var4 == var5;
                var0 = undefined;
                var2 = undefined;
                if (var6) {
                    _fun84598_ip = 44;
                    continue _fun84598
                }
            case 39:
                var2 = var5.id;
            case 44:
                var5 = var4 != var2;
                var9 = null;
                if (!var5) {
                    _fun84598_ip = 56;
                    continue _fun84598
                }
            case 53:
                var9 = var2;
            case 56:
                var2 = _closure1_slot6;
                var2 = var2.settings;
                var5 = var2.appearance;
                var6 = var4 == var5;
                var2 = undefined;
                if (var6) {
                    _fun84598_ip = 102;
                    continue _fun84598
                }
            case 81:
                var5 = var5.clientThemeSettings;
                var6 = var4 == var5;
                var2 = undefined;
                if (var6) {
                    _fun84598_ip = 102;
                    continue _fun84598
                }
            case 96:
                var2 = var5.customUserThemeSettings;
            case 102:
                var8 = var4 != var2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 8;
                var2 = var4[var2];
                var7 = var5.bind(var0)(var2);
                var6 = var7.track;
                var2 = _closure1_slot7;
                var5 = var2.SYNC_ACROSS_CLIENTS_TOGGLED;
                var2 = {};
                var2.is_sync_enabled = var3;
                var2.base_theme = var10;
                var2.client_theme = var9;
                var2.has_custom_theme = var8;
                var2 = var6.bind(var7)(var5, var2);
                var2 = _closure1_slot1;
                var1 = 9;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setShouldSyncAppearanceSettings;
                var1 = var1.bind(var2)(var3);
                return var0;
        }
    };
    var1.onValueChange = var8;
    var8 = function() { // Original name: useSyncThemeAcrossClientsDescription, environment: var7
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 6;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.CRtkeH;
        var1 = var1.bind(var2)(var0);
        var0 = var1.trim;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.useDescription = var8;
    var7 = function() { // Original name: useIsSyncThemeAcrossClientsDisabled, environment: var7
        _fun84600: for (var _fun84600_ip = 0;;) switch (_fun84600_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 7;
                var3 = var4[var5];
                var7 = undefined;
                var9 = var2.bind(var7)(var3);
                var8 = var9.useStateFromStores;
                var3 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.theme;
                    return var0;
                };
                var3 = var8.bind(var9)(var6, var3);
                var5 = var4[var5];
                var8 = var2.bind(var7)(var5);
                var6 = var8.useStateFromStores;
                var9 = _closure1_slot3;
                var5 = new Array(1);
                var5[0] = var9;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot3;
                    var0 = var0.mobilePendingThemeIndex;
                    return var0;
                };
                var6 = var6.bind(var8)(var5, var0);
                var0 = 10;
                var0 = var4[var0];
                var2 = var2.bind(var7)(var0);
                var0 = var2.useAllMobileThemes;
                var5 = var0.bind(var2)();
                var0 = null;
                var4 = var0 != var6;
                var2 = null;
                if (!var4) {
                    _fun84600_ip = 160;
                    continue _fun84600
                }
            case 129:
                var8 = var0 == var5;
                var4 = undefined;
                if (var8) {
                    _fun84600_ip = 157;
                    continue _fun84600
                }
            case 138:
                var5 = var5[var6];
                var6 = var0 == var5;
                var4 = undefined;
                if (var6) {
                    _fun84600_ip = 157;
                    continue _fun84600
                }
            case 151:
                var4 = var5.theme;
            case 157:
                var2 = var4;
            case 160:
                if (!(var0 == var2)) {
                    _fun84600_ip = 180;
                    continue _fun84600
                }
            case 164:
                var0 = _closure1_slot8;
                var0 = var0.MIDNIGHT;
                var0 = var3 === var0;
                _fun84600_ip = 194;
                continue _fun84600;
            case 180:
                var1 = _closure1_slot8;
                var1 = var1.MIDNIGHT;
                var0 = var2 === var1;
            case 194:
                return var0;
        }
    };
    var1.useIsDisabled = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/SyncThemeSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3168, 1354, 3155, 1310, 6967, 660, 1234, 566, 10808, 7586, 3202, 8943, 2]);