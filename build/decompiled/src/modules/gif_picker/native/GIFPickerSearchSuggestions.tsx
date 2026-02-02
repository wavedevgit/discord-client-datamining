// modules/gif_picker/native/GIFPickerSearchSuggestions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'justifyContent': 'center',
        'flexDirection': 'row',
        'flexWrap': 'wrap'
    };
    var10 = 'center';
    var11 = 5;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.gap = var13;
    var3.suggestionsContainer = var9;
    var9 = {};
    var13 = 'flex-start';
    var9.justifyContent = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.paddingVertical = var13;
    var3.footerSuggestionsContainer = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9.marginBottom = var11;
    var9.textAlign = var10;
    var3.footerSuggestionsTitle = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun74124: for (var _fun74124_ip = 0;;) switch (_fun74124_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.onClickSuggestion;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot7;
                var4 = undefined;
                var9 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStoresArray;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var1 = _closure1_slot4;
                    var0 = var1.getSuggestions;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var2.bind(var3)(var1, var0);
                var2 = var10.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun74124_ip = 290;
                    continue _fun74124
                }
            case 95:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var9.footerSuggestionsContainer;
                var1.style = var6;
                var7 = _closure1_slot5;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 7;
                var5 = var15[var5];
                var5 = var14.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var11 = var9.footerSuggestionsTitle;
                var5.style = var11;
                var11 = 8;
                var12 = var15[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["3JGJo2"];
                var11 = var12.bind(var13)(var11);
                var5.children = var11;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var9 = var9.suggestionsContainer;
                var6.style = var9;
                var9 = var10.map;
                var8 = function(arg0) { // Environment: var8
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot5;
                    var1 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 9;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Button;
                    var0 = {
                        'size': 'sm',
                        'variant': 'secondary'
                    };
                    var7 = _closure1_slot1;
                    var6 = 5;
                    var6 = var8[var6];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.spacing;
                    var6 = var6.PX_8;
                    var0.hitSlop = var6;
                    var0.text = var4;
                    var5 = function() {
                        var2 = _closure2_slot0;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var8 = var9.bind(var10)(var8);
                var6.children = var8;
                var6 = var7.bind(var4)(var2, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 290:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gif_picker/native/GIFPickerSearchSuggestions.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9157, 33, 1297, 671, 566, 3902, 1234, 4045, 2]);