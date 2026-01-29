// modules/client_themes/SavedCustomThemeStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun28009: for (var _fun28009_ip = 0;;) switch (_fun28009_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun28009_ip = 74;
                continue _fun28009;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: validateSavedTheme, environment: var4
        _fun28012: for (var _fun28012_ip = 0;;) switch (_fun28012_ip) {
            case 0:
                var4 = arg0;
                var3 = undefined;
                var1 = undefined;
            case 7: // try_start_0
                var2 = _closure1_slot7;
                var6 = var4;
                var0 = var6.base_theme;
                var1 = var2[var0];
                var6 = var6.colors;
                var7 = var6.length;
                var6 = 0;
                var6 = var7 > var6;
                var5 = var6;
                if (!var6) {
                    _fun28012_ip = 69;
                    continue _fun28012
                }
            case 49:
                var6 = var4;
                var6 = var6.gradient_angle;
                var7 = 'number';
                var6 = typeof var6;
                var5 = var7 === var6;
            case 69:
                var2 = var5;
                if (!var5) {
                    _fun28012_ip = 92;
                    continue _fun28012
                }
            case 75:
                var4 = var4.base_mix;
                var5 = 'number';
                var4 = typeof var4;
                var2 = var5 === var4;
            case 92:
                var0 = var2;
                if (!var2) {
                    _fun28012_ip = 107;
                    continue _fun28012
                }
            case 98:
                var2 = var1;
                var1 = null;
                var0 = var1 != var2;
            case 107: // try_end0
                return var0;
            case 109: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 6;
                var0 = var4[var0];
                var3 = var2.bind(var3)(var0);
                var2 = var3.captureMessage;
                var0 = 'Invalid saved custom theme: ';
                var1 = var0 + var1;
                var0 = {};
                var4 = {};
                var5 = 'SavedCustomThemeStore';
                var4.app_context = var5;
                var0.tags = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var11 = 0;
    var1 = var6[var11];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var10 = 1;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 2;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var8 = 3;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.PROTO_THEME_MAP_WEB_REFRESH;
    var1 = var1.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot7 = var1;
    var1 = {};
    var1.NOT_FETCHED = var11;
    var3 = 'NOT_FETCHED';
    var1[var11] = var3;
    var1.IS_FETCHING = var10;
    var3 = 'IS_FETCHING';
    var1[var10] = var3;
    var1.HAS_FETCHED = var9;
    var3 = 'HAS_FETCHED';
    var1[var9] = var3;
    var1.ERROR = var8;
    var3 = 'ERROR';
    var1[var8] = var3;
    var _closure1_slot8 = var1;
    var3 = new Array(0);
    var _closure1_slot9 = var3;
    var3 = var1.NOT_FETCHED;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.PersistedStore;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: SavedCustomThemeStore, environment: var5
            _fun28014: for (var _fun28014_ip = 0;;) switch (_fun28014_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun28014_ip = 69;
                        continue _fun28014
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun28014_ip = 105;
                    continue _fun28014;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun28015: for (var _fun28015_ip = 0;;) switch (_fun28015_ip) {
                case 0:
                    var0 = arg0;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun28015_ip = 22;
                        continue _fun28015
                    }
                case 9:
                    var1 = var0.savedCustomThemes;
                    _closure1_slot9 = var1;
                case 22:
                    var0 = _closure1_slot8;
                    var0 = var0.NOT_FETCHED;
                    _closure1_slot10 = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun28016: for (var _fun28016_ip = 0;;) switch (_fun28016_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure1_slot9;
                    var1 = null;
                    if (!(var1 == var3)) {
                        _fun28016_ip = 21;
                        continue _fun28016
                    }
                case 15:
                    var1 = new Array(0);
                    _fun28016_ip = 25;
                    continue _fun28016;
                case 21:
                    var1 = _closure1_slot9;
                case 25:
                    var0.savedCustomThemes = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getSavedCustomTheme';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun28017: for (var _fun28017_ip = 0;;) switch (_fun28017_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var4 = null;
                    var3 = var4 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun28017_ip = 23;
                        continue _fun28017
                    }
                case 18:
                    var0 = var2.length;
                case 23:
                    var2 = 0;
                    var3 = var0 > var2;
                    var0 = null;
                    if (!var3) {
                        _fun28017_ip = 69;
                        continue _fun28017
                    }
                case 34:
                    var3 = _closure1_slot9;
                    var3 = var3[var2];
                    var3 = var3.colors;
                    var3 = var3.length;
                    var3 = var3 > var2;
                    var0 = null;
                    if (!var3) {
                        _fun28017_ip = 69;
                        continue _fun28017
                    }
                case 61:
                    var1 = _closure1_slot9;
                    var0 = var1[var2];
                case 69:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getFetchState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasSavedCustomThemes';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun28019: for (var _fun28019_ip = 0;;) switch (_fun28019_ip) {
                case 0:
                    var0 = _closure1_slot9;
                    var1 = null;
                    var2 = var1 == var0;
                    var1 = undefined;
                    if (var2) {
                        _fun28019_ip = 23;
                        continue _fun28019
                    }
                case 18:
                    var1 = var0.length;
                case 23:
                    var0 = 0;
                    var0 = var1 > var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot10;
            var0 = _closure1_slot8;
            var0 = var0.IS_FETCHING;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'hasFetched';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot10;
            var0 = _closure1_slot8;
            var0 = var0.HAS_FETCHED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'hasError';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var1 = _closure1_slot10;
            var0 = _closure1_slot8;
            var0 = var0.ERROR;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'SavedCustomThemeStore';
    var8.displayName = var3;
    var8.persistKey = var3;
    var3 = 8;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function() { // Original name: handleCustomThemesFetchStart, environment: var4
        var0 = _closure1_slot8;
        var0 = var0.IS_FETCHING;
        _closure1_slot10 = var0;
        var0 = undefined;
        return var0;
    };
    var3.SAVED_CUSTOM_THEMES_FETCH_START = var9;
    var9 = function(arg0) { // Original name: SAVED_CUSTOM_THEMES_FETCH_SUCCESS, environment: var4
        var0 = arg0;
        var3 = var0.themes;
        var0 = _closure1_slot8;
        var0 = var0.HAS_FETCHED;
        _closure1_slot10 = var0;
        var2 = var3.filter;
        var0 = _closure1_slot12;
        var3 = var2.bind(var3)(var0);
        var2 = var3.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = _closure1_slot7;
            var0 = {};
            var3 = var1.colors;
            var0.colors = var3;
            var3 = var1.gradient_angle;
            var0.gradient_angle = var3;
            var3 = var1.base_mix;
            var0.base_mix = var3;
            var1 = var1.base_theme;
            var1 = var2[var1];
            var0.base_theme = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var3.SAVED_CUSTOM_THEMES_FETCH_SUCCESS = var9;
    var4 = function(arg0) { // Original name: SAVED_CUSTOM_THEMES_FETCH_FAILURE, environment: var4
        var0 = arg0;
        var4 = var0.error;
        var1 = _closure1_slot8;
        var1 = var1.ERROR;
        _closure1_slot10 = var1;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 6;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.captureException;
        var1 = {};
        var5 = {};
        var6 = 'SavedCustomThemeStore';
        var5.app_context = var6;
        var1.tags = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var3.SAVED_CUSTOM_THEMES_FETCH_FAILURE = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/client_themes/SavedCustomThemeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.FetchState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3157, 1207, 566, 806, 2]);