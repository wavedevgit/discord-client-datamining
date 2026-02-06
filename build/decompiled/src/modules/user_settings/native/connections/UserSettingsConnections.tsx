// modules/user_settings/native/connections/UserSettingsConnections.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityIndicator;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsLocations;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.flex = var8;
    var8 = {};
    var9 = 7;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var9 = 12;
    var8.paddingTop = var9;
    var3.form = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/connections/UserSettingsConnections.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = -1;
    var2.ADD_CONNECTIONS_SHEET_SENTINEL = var3;
    var1 = function arg0() {
        _fun82738: for (var _fun82738_ip = 0;;) switch (_fun82738_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.selectedPlatformType;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot9;
                var3 = undefined;
                var4 = var2.bind(var3)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 8;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var _closure2_slot1 = var2;
                var5 = _closure1_slot0;
                var2 = 9;
                var8 = var6[var2];
                var11 = var5.bind(var3)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot6;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.locale;
                    return var0;
                };
                var8 = var10.bind(var11)(var9, var8);
                var _closure2_slot2 = var8;
                var10 = _closure1_slot3;
                var11 = var10.useEffect;
                var9 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetch;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var8 = new Array(0);
                var8 = var11.bind(var10)(var9, var8);
                var9 = var10.useEffect;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var1
                    _fun82741: for (var _fun82741_ip = 0;;) switch (_fun82741_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun82741_ip = 164;
                                continue _fun82741
                            }
                        case 16:
                            var1 = _closure2_slot0;
                            var0 = -1;
                            if (!(var0 !== var1)) {
                                _fun82741_ip = 87;
                                continue _fun82741
                            }
                        case 30:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = _closure2_slot0;
                            var0.platformType = var4;
                            var3 = _closure1_slot7;
                            var3 = var3.USER_SETTINGS;
                            var0.location = var3;
                            var0 = var1.bind(var2)(var0);
                            _fun82741_ip = 164;
                            continue _fun82741;
                        case 87:
                            var3 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var2 = 11;
                            var2 = var0[var2];
                            var5 = undefined;
                            var3 = var3.bind(var5)(var2);
                            var2 = var3.openLazy;
                            var4 = _closure1_slot0;
                            var1 = 13;
                            var1 = var0[var1];
                            var4 = var4.bind(var5)(var1);
                            var1 = 12;
                            var1 = var0[var1];
                            var0 = var0.paths;
                            var1 = var4.bind(var5)(var1, var0);
                            var0 = 'AddConnection';
                            var0 = var2.bind(var3)(var1, var0);
                        case 164:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var9.bind(var10)(var7, var8);
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var6 = var7.useStateFromStoresObject;
                var2 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = {};
                    var2 = _closure1_slot5;
                    var1 = var2.isFetching;
                    var1 = var1.bind(var2)();
                    var0.fetching = var1;
                    var1 = var2.getAccounts;
                    var1 = var1.bind(var2)();
                    var0.accounts = var1;
                    return var0;
                };
                var5 = var6.bind(var7)(var5, var2);
                var2 = var5.fetching;
                var5 = var5.accounts;
                if (var2) {
                    _fun82738_ip = 329;
                    continue _fun82738
                }
            case 213:
                var6 = var5.length;
                var2 = 0;
                if (!(var2 !== var6)) {
                    _fun82738_ip = 295;
                    continue _fun82738
                }
            case 224:
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var6 = _closure2_slot1;
                    var1.theme = var6;
                    var5 = _closure2_slot2;
                    var1.locale = var5;
                    var1.account = var0;
                    var0 = var0.id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var6 = var2.bind(var5)(var1);
                var5 = _closure1_slot8;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 17;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.Form;
                var1 = {};
                var7 = var4.form;
                var1.style = var7;
                var1.children = var6;
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 295:
                var5 = _closure1_slot8;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 15;
                var1 = var6[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1 = var5.bind(var3)(var2, var1);
                return var1;
            case 329:
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.flex;
                var0.style = var4;
                var4 = 'large';
                var0.size = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.UserSettingsConnections = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4520, 1685, 660, 33, 1297, 671, 3248, 566, 4522, 3280, 10609, 1307, 5323, 10611, 10614, 5383, 2]);