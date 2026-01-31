// modules/search/native/components/tabs/SearchTabsPage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun105213: for (var _fun105213_ip = 0;;) switch (_fun105213_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.tab;
                var4 = var0.searchContext;
                var7 = var0.isFocused;
                var5 = var0.selectMediaTab;
                var3 = _closure1_slot4;
                var1 = var3.useState;
                var9 = var1.bind(var3)(var7);
                var6 = _closure1_slot3;
                var3 = undefined;
                var1 = 2;
                var9 = var6.bind(var3)(var9, var1);
                var1 = 0;
                var1 = var9[var1];
                var6 = 1;
                var6 = var9[var6];
                var _closure2_slot0 = var6;
                var10 = _closure1_slot4;
                var9 = var10.useEffect;
                var6 = function() { // Environment: var2
                    var0 = global;
                    var3 = var0.setTimeout;
                    var0 = undefined;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot0;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = 10;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var9.bind(var10)(var6, var2);
                if (var1) {
                    _fun105213_ip = 111;
                    continue _fun105213
                }
            case 107:
                var1 = null;
                return var1;
            case 111:
                var1 = _closure1_slot6;
                var1 = var1.RECENT;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 686;
                    continue _fun105213
                }
            case 128:
                var1 = _closure1_slot6;
                var1 = var1.PEOPLE;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 647;
                    continue _fun105213
                }
            case 145:
                var1 = _closure1_slot6;
                var1 = var1.MEMBERS;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 608;
                    continue _fun105213
                }
            case 162:
                var1 = _closure1_slot6;
                var1 = var1.GUILD_CHANNELS;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 569;
                    continue _fun105213
                }
            case 179:
                var1 = _closure1_slot6;
                var1 = var1.MEDIA;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 520;
                    continue _fun105213
                }
            case 196:
                var1 = _closure1_slot6;
                var1 = var1.FILES;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 471;
                    continue _fun105213
                }
            case 213:
                var1 = _closure1_slot6;
                var1 = var1.LINKS;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 422;
                    continue _fun105213
                }
            case 230:
                var1 = _closure1_slot6;
                var1 = var1.THREADS;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 377;
                    continue _fun105213
                }
            case 247:
                var1 = _closure1_slot6;
                var1 = var1.MESSAGES;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 328;
                    continue _fun105213
                }
            case 261:
                var1 = _closure1_slot6;
                var1 = var1.PINS;
                if (!(var1 !== var8)) {
                    _fun105213_ip = 279;
                    continue _fun105213
                }
            case 275:
                var1 = null;
                return var1;
            case 279:
                var6 = _closure1_slot7;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 15;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.tab = var8;
                var1.searchContext = var4;
                var1.isFocused = var7;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 328:
                var6 = _closure1_slot7;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 14;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.tab = var8;
                var1.searchContext = var4;
                var1.isFocused = var7;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 377:
                var6 = _closure1_slot7;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 13;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.SearchTabsThreadScreen;
                var1 = {};
                var1.searchContext = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 422:
                var6 = _closure1_slot7;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 12;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.tab = var8;
                var1.searchContext = var4;
                var1.isFocused = var7;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 471:
                var6 = _closure1_slot7;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 11;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.tab = var8;
                var1.searchContext = var4;
                var1.isFocused = var7;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 520:
                var6 = _closure1_slot7;
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.tab = var8;
                var1.searchContext = var4;
                var1.isFocused = var7;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 569:
                var6 = _closure1_slot7;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 9;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.searchContext = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 608:
                var6 = _closure1_slot7;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 8;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.searchContext = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 647:
                var6 = _closure1_slot7;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.searchContext = var4;
                var1 = var6.bind(var3)(var2, var1);
                return var1;
            case 686:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onJumpToMedia = var5;
                var0.searchContext = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var10 = 1;
    var4 = var6[var10];
    var1 = arg3;
    var4 = var1.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.SearchTabs;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var1 = {};
    var9 = {};
    var9.flex = var10;
    var1.container = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot8 = var1;
    var1 = var4.createContext;
    var1 = var1.bind(var4)(var0);
    var _closure1_slot9 = var1;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/tabs/SearchTabsPage.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.tab;
        var7 = var0.searchContext;
        var2 = _closure1_slot4;
        var1 = var2.useContext;
        var0 = _closure1_slot9;
        var9 = var1.bind(var2)(var0);
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 16;
        var0 = var2[var0];
        var3 = undefined;
        var6 = var1.bind(var3)(var0);
        var0 = null;
        var5 = var0 != var9;
        var0 = '[SearchTabsPageContext] Context should not be null.';
        var0 = var6.bind(var3)(var5, var0);
        var0 = _closure1_slot8;
        var5 = var0.bind(var3)();
        var0 = 17;
        var0 = var2[var0];
        var1 = var1.bind(var3)(var0);
        var0 = var9.selectedTab;
        var10 = var1.bind(var3)(var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var5.container;
        var0.style = var5;
        var6 = _closure1_slot7;
        var5 = _closure1_slot10;
        var4 = {};
        var10 = var10 === var8;
        var4.isFocused = var10;
        var9 = var9.selectMediaTab;
        var4.selectMediaTab = var9;
        var4.tab = var8;
        var4.searchContext = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.SearchTabsPageContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 8861, 33, 1297, 13677, 13732, 13737, 13749, 13750, 13758, 13760, 13761, 13767, 13774, 44, 8151, 2]);