// modules/pomelo/useUsernameSuggestion.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/useUsernameSuggestion.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot0;
        var6 = _closure1_slot2;
        var5 = 2;
        var1 = var6[var5];
        var4 = undefined;
        var8 = var2.bind(var4)(var1);
        var7 = var8.useStateFromStoresArray;
        var1 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var0 = var2.usernameSuggestion;
            var1 = var0.bind(var2)();
            var0 = new Array(2);
            var0[0] = var1;
            var1 = var2.usernameSuggestionLoading;
            var1 = var1.bind(var2)();
            var0[1] = var1;
            return var0;
        };
        var2 = var7.bind(var8)(var2, var1);
        var1 = _closure1_slot3;
        var5 = var1.bind(var4)(var2, var5);
        var1 = 0;
        var2 = var5[var1];
        var1 = 1;
        var1 = var5[var1];
        var5 = _closure1_slot1;
        var3 = 3;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var0 = function() { // Environment: var0
            _fun81519: for (var _fun81519_ip = 0;;) switch (_fun81519_ip) {
                case 0:
                    var3 = _closure1_slot4;
                    var1 = var3.wasSuggestionsFetched;
                    var1 = var1.bind(var3)();
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    if (var1) {
                        _fun81519_ip = 84;
                        continue _fun81519
                    }
                case 32:
                    var1 = 4;
                    var4 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var4);
                    var4 = var5.fetchSuggestions;
                    var1 = _closure2_slot0;
                    var5 = var4.bind(var5)(var1);
                    var4 = var5.finally;
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {
                            'type': 'POMELO_SUGGESTIONS_FETCH',
                            'usernameSuggestionLoading': false
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1);
                    _fun81519_ip = 122;
                    continue _fun81519;
                case 84:
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {
                        'type': 'POMELO_SUGGESTIONS_FETCH',
                        'usernameSuggestionLoading': false
                    };
                    var1 = var2.bind(var3)(var1);
                case 122:
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.resetSuggestions;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var0);
        var0 = {};
        var0.usernameSuggestion = var2;
        var0.usernameSuggestionLoading = var1;
        return var0;
    };
    var2.useUsernameSuggestion = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 10378, 632, 4104, 10383, 806, 2]);