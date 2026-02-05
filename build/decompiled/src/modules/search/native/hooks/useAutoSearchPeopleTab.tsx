// modules/search/native/hooks/useAutoSearchPeopleTab.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/hooks/useAutoSearchPeopleTab.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var4 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot3;
        var6 = var3.useEffect;
        var5 = new Array(2);
        var5[0] = var1;
        var5[1] = var4;
        var2 = function() { // Environment: var0
            _fun107014: for (var _fun107014_ip = 0;;) switch (_fun107014_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun107014_ip = 81;
                        continue _fun107014
                    }
                case 10:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 3;
                    var2 = var4[var2];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.fetchUserAffinitiesV2;
                    var2 = var2.bind(var5)();
                    var2 = _closure1_slot1;
                    var1 = 4;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.searchPeopleTab;
                    var1 = _closure2_slot0;
                    var0 = '';
                    var0 = var2.bind(var3)(var1, var0);
                case 81:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var6.bind(var3)(var2, var5);
        var5 = var3.useEffect;
        var2 = new Array(2);
        var2[0] = var4;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            _fun107015: for (var _fun107015_ip = 0;;) switch (_fun107015_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun107015_ip = 82;
                        continue _fun107015
                    }
                case 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.debounce;
                    var3 = _closure1_slot5;
                    var2 = function(arg0) { // Environment: var2
                        _fun107016: for (var _fun107016_ip = 0;;) switch (_fun107016_ip) {
                            case 0:
                                var5 = _closure1_slot4;
                                var4 = var5.getState;
                                var3 = _closure2_slot0;
                                var2 = function(arg0) { // Environment: var2
                                    var1 = arg0;
                                    var0 = var1.isAutocompleteVisible;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var2 = var4.bind(var5)(var3, var2);
                                if (var2) {
                                    _fun107016_ip = 79;
                                    continue _fun107016
                                }
                            case 38:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 4;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.searchPeopleTab;
                                var1 = _closure2_slot0;
                                var0 = arg0;
                                var0 = var2.bind(var3)(var1, var0);
                            case 79:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var4.bind(var5)(var2, var3);
                    var2 = _closure1_slot4;
                    var1 = var2.subscribeTextInputValue;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
                case 82:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var5.bind(var3)(var1, var2);
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var0 = function() { // Environment: var0
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.cleanupPeopleTab;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var2.useAutoSearchPeopleTab = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8999, 11695, 8370, 13742, 22, 2]);