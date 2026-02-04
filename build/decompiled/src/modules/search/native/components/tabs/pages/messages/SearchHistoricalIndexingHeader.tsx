// modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx
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
    var10 = var3.SEARCH_LIST_HORIZONTAL_PADDING;
    var9 = var3.SEARCH_ROW_TAP_STATE_PADDING;
    var3 = var3.SearchTabs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 16;
    var8.marginBottom = var11;
    var3.header = var8;
    var8 = {};
    var8.marginHorizontal = var10;
    var8.marginTop = var9;
    var3.headerMessages = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.searchContext;
        var _closure2_slot0 = var8;
        var9 = var0.documentsIndexed;
        var _closure2_slot1 = var9;
        var2 = var0.tab;
        var _closure2_slot2 = var2;
        var4 = _closure1_slot7;
        var3 = undefined;
        var4 = var4.bind(var3)();
        var _closure2_slot3 = var4;
        var7 = _closure1_slot3;
        var10 = var7.useMemo;
        var6 = new Array(1);
        var6[0] = var9;
        var5 = function() { // Environment: var1
            var0 = global;
            var2 = var0.Number;
            var1 = _closure2_slot1;
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.toLocaleString;
            var0 = _closure1_slot4;
            var0 = var0.locale;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var10 = var10.bind(var7)(var5, var6);
        var6 = var7.useMemo;
        var11 = var4.headerMessages;
        var5 = new Array(2);
        var5[0] = var11;
        var5[1] = var2;
        var2 = function() { // Environment: var1
            _fun105905: for (var _fun105905_ip = 0;;) switch (_fun105905_ip) {
                case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot5;
                    var2 = var2.MESSAGES;
                    if (!(var3 !== var2)) {
                        _fun105905_ip = 44;
                        continue _fun105905
                    }
                case 24:
                    var3 = _closure2_slot2;
                    var0 = _closure1_slot5;
                    var2 = var0.PINS;
                    var0 = undefined;
                    if (!(var3 === var2)) {
                        _fun105905_ip = 54;
                        continue _fun105905
                    }
                case 44:
                    var1 = _closure2_slot3;
                    var0 = var1.headerMessages;
                case 54:
                    return var0;
            }
        };
        var5 = var6.bind(var7)(var2, var5);
        var6 = var7.useEffect;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var8;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.trackSearchIndexing;
            var1 = {};
            var5 = _closure2_slot0;
            var1.searchContext = var5;
            var5 = true;
            var1.isHistoricalIndexing = var5;
            var4 = _closure2_slot1;
            var1.documentsIndexed = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var6.bind(var7)(var1, var2);
        var2 = _closure1_slot6;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var0 = 6;
        var0 = var11[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Card;
        var0 = {
            'variant': 'primary',
            'border': 'subtle'
        };
        var6 = var4.header;
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.style = var4;
        var4 = 7;
        var4 = var11[var4];
        var4 = var7.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'heading-sm/normal',
            'color': 'interactive-text-default'
        };
        var6 = 8;
        var8 = var11[var6];
        var8 = var7.bind(var3)(var8);
        var9 = var8.intl;
        var8 = var9.format;
        var6 = var11[var6];
        var6 = var7.bind(var3)(var6);
        var6 = var6.t;
        var7 = var6["4Y3O+O"];
        var6 = {};
        var6.count = var10;
        var6 = var8.bind(var9)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1685, 8917, 33, 1297, 8980, 4900, 3941, 1234, 2]);