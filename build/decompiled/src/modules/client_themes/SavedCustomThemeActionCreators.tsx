// modules/client_themes/SavedCustomThemeActionCreators.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/client_themes/SavedCustomThemeActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: fetchUserCustomThemes, environment: var1
        _fun84412: for (var _fun84412_ip = 0;;) switch (_fun84412_ip) {
            case 0:
                var2 = _closure1_slot3;
                var1 = var2.isFetching;
                var1 = var1.bind(var2)();
                if (var1) {
                    _fun84412_ip = 161;
                    continue _fun84412
                }
            case 25:
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var3 = undefined;
                var6 = var2.bind(var3)(var1);
                var2 = var6.dispatch;
                var1 = {};
                var7 = 'SAVED_CUSTOM_THEMES_FETCH_START';
                var1.type = var7;
                var1 = var2.bind(var6)(var1);
                var2 = _closure1_slot0;
                var1 = 3;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.get;
                var1 = {
                    'url': null,
                    'oldFormErrors': true,
                    'rejectWithError': true
                };
                var4 = _closure1_slot4;
                var4 = var4.USERS_ME_CUSTOM_THEMES;
                var1.url = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun84413: for (var _fun84413_ip = 0;;) switch (_fun84413_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'SAVED_CUSTOM_THEMES_FETCH_SUCCESS';
                            var1.type = var4;
                            var4 = arg0;
                            var6 = var4.body;
                            var5 = null;
                            var7 = var5 == var6;
                            var4 = undefined;
                            if (var7) {
                                _fun84413_ip = 69;
                                continue _fun84413
                            }
                        case 61:
                            var4 = var6.custom_themes;
                        case 69:
                            if (!(var5 == var4)) {
                                _fun84413_ip = 77;
                                continue _fun84413
                            }
                        case 73:
                            var4 = new Array(0);
                        case 77:
                            var1.themes = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'SAVED_CUSTOM_THEMES_FETCH_FAILURE';
                    var1.type = var4;
                    var4 = arg0;
                    var1.error = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 161:
                var0 = undefined;
                return var0;
        }
    };
    var2.fetchUserCustomThemes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3203, 660, 806, 507, 2]);