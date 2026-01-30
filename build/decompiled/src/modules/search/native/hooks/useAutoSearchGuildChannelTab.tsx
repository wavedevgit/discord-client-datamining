// modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx
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
    var3 = 'modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useAutoSearchGuildChannelTab, environment: var1
        var4 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var4;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot3;
        var5 = var3.useCallback;
        var2 = new Array(1);
        var2[0] = var4;
        var1 = function(arg0) { // Environment: var0
            _fun107564: for (var _fun107564_ip = 0;;) switch (_fun107564_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.getGuildIdFromSearchContext;
                    var2 = _closure2_slot0;
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun107564_ip = 103;
                        continue _fun107564
                    }
                case 49:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 4;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.searchGuildChannelTab;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.searchContext = var5;
                    var5 = arg0;
                    var1.searchQueryString = var5;
                    var1.guildId = var4;
                    var1 = var2.bind(var3)(var1);
                case 103:
                    return var0;
            }
        };
        var1 = var5.bind(var3)(var1, var2);
        var _closure2_slot2 = var1;
        var7 = var3.useEffect;
        var5 = new Array(2);
        var5[0] = var6;
        var5[1] = var1;
        var2 = function() { // Environment: var0
            _fun107565: for (var _fun107565_ip = 0;;) switch (_fun107565_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun107565_ip = 25;
                        continue _fun107565
                    }
                case 10:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var0 = '';
                    var0 = var2.bind(var1)(var0);
                case 25:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var7.bind(var3)(var2, var5);
        var5 = var3.useEffect;
        var2 = new Array(3);
        var2[0] = var4;
        var2[1] = var6;
        var2[2] = var1;
        var1 = function() { // Environment: var0
            _fun107566: for (var _fun107566_ip = 0;;) switch (_fun107566_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun107566_ip = 87;
                        continue _fun107566
                    }
                case 10:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.debounce;
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot5;
                    var4 = var4.bind(var5)(var3, var2);
                    var3 = _closure1_slot4;
                    var2 = var3.subscribeTextInputValue;
                    var1 = _closure2_slot0;
                    var0 = {};
                    var5 = true;
                    var0.fireImmediately = var5;
                    var0 = var2.bind(var3)(var1, var4, var0);
                    return var0;
                case 87:
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
                var2 = var3.cleanupGuildChannelTab;
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
    var2.useAutoSearchGuildChannelTab = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8925, 11694, 8927, 13749, 22, 2]);