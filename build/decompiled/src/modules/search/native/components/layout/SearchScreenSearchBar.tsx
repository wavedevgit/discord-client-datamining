// modules/search/native/components/layout/SearchScreenSearchBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var10 = 0;
    var6 = var5[var10];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot3 = var7;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingLeft': 16,
        'zIndex': 10
    };
    var3.header = var9;
    var9 = {};
    var9.paddingLeft = var10;
    var3.headerWithBackButton = var9;
    var9 = {
        'flex': 1,
        'flexGrow': 1
    };
    var3.headerSearch = var9;
    var9 = {
        'paddingRight': 16,
        'paddingLeft': 12
    };
    var3.headerControlsRight = var9;
    var9 = {};
    var9.height = var10;
    var3.suggestionsAnchor = var9;
    var9 = {
        'position': 'absolute',
        'left': 0,
        'right': 4294967246,
        'top': 8
    };
    var3.suggestions = var9;
    var9 = {};
    var10 = -28;
    var9.left = var10;
    var3.suggestionsWithBackButton = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun105718: for (var _fun105718_ip = 0;;) switch (_fun105718_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.searchContext;
                var19 = var0.onSuggestionsLayoutMesure;
                var16 = var0.suggestionsDismissed;
                var14 = var0.setSuggestionsDismissed;
                var18 = var0.backButton;
                var0 = _closure1_slot5;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var5 = var9.header;
                var4 = new Array(2);
                var4[0] = var5;
                var17 = null;
                var5 = var17 != var18;
                if (!var5) {
                    _fun105718_ip = 84;
                    continue _fun105718
                }
            case 78:
                var5 = var9.headerWithBackButton;
            case 84:
                var4[1] = var5;
                var0.style = var4;
                var4 = new Array(3);
                var4[0] = var18;
                var7 = _closure1_slot4;
                var6 = _closure1_slot2;
                var5 = {};
                var11 = var9.headerSearch;
                var5.style = var11;
                var13 = _closure1_slot3;
                var15 = _closure1_slot0;
                var20 = _closure1_slot1;
                var11 = 4;
                var11 = var20[var11];
                var12 = var15.bind(var3)(var11);
                var11 = {};
                var21 = arg1;
                var11.ref = var21;
                var11.searchContext = var10;
                var11.setSuggestionsDismissed = var14;
                var12 = var13.bind(var3)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var12 = {};
                var14 = var9.suggestionsAnchor;
                var12.style = var14;
                var14 = 5;
                var14 = var20[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.searchContext = var10;
                var14.onLayoutMeasure = var19;
                var14.dismissed = var16;
                var19 = var9.suggestions;
                var16 = new Array(2);
                var16[0] = var19;
                var17 = var17 != var18;
                if (!var17) {
                    _fun105718_ip = 245;
                    continue _fun105718
                }
            case 239:
                var17 = var9.suggestionsWithBackButton;
            case 245:
                var16[1] = var17;
                var14.containerStyle = var16;
                var14 = var13.bind(var3)(var15, var14);
                var12.children = var14;
                var12 = var13.bind(var3)(var6, var12);
                var11[1] = var12;
                var5.children = var11;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot3;
                var6 = _closure1_slot2;
                var5 = {};
                var9 = var9.headerControlsRight;
                var5.style = var9;
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var8 = 6;
                var8 = var11[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.searchContext = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/layout/SearchScreenSearchBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 13732, 13734, 13741, 2]);