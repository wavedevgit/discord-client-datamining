// modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SearchTabs;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'backgroundColor': null,
        'padding': 16
    };
    var10 = 6;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 7;
        var2 = var8[var2];
        var3 = undefined;
        var4 = var1.bind(var3)(var2);
        var2 = var4.useRoute;
        var2 = var2.bind(var4)();
        var2 = var2.params;
        var4 = var2.channelId;
        var _closure2_slot0 = var4;
        var2 = 8;
        var2 = var8[var2];
        var7 = var1.bind(var3)(var2);
        var5 = var7.useStateFromStores;
        var9 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var9;
        var0 = function() { // Environment: var0
            _fun110017: for (var _fun110017_ip = 0;;) switch (_fun110017_ip) {
                case 0:
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun110017_ip = 40;
                        continue _fun110017
                    }
                case 35:
                    var0 = var1.guild_id;
                case 40:
                    return var0;
            }
        };
        var2 = var5.bind(var7)(var2, var0);
        var0 = 9;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var1.useChannelDetailsSearchContext;
        var7 = var0.bind(var1)(var4, var2);
        var0 = _closure1_slot7;
        var4 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var4.container;
        var0.style = var4;
        var5 = _closure1_slot1;
        var4 = 10;
        var4 = var8[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.searchContext = var7;
        var7 = true;
        var4.isFocused = var7;
        var6 = _closure1_slot5;
        var6 = var6.PINS;
        var4.tab = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 8861, 33, 1297, 671, 1472, 566, 8923, 13843, 2]);