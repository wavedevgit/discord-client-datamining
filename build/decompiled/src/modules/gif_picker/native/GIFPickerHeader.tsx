// modules/gif_picker/native/GIFPickerHeader.tsx
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
    var14 = 2;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GIFPickerResultTypes;
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
    var9 = {};
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingVertical = var12;
    var3.container = var9;
    var9 = {
        'borderWidth': 1,
        'borderColor': 'transparent',
        'paddingHorizontal': null,
        'height': null,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingHorizontal = var12;
    var12 = 6;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.InputHeights;
    var13 = var12.MD;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var12 = var12 / var14;
    var12 = var13 + var12;
    var9.height = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9.gap = var10;
    var3.header = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun74367: for (var _fun74367_ip = 0;;) switch (_fun74367_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.categoryType;
                var9 = var0.onQueryClear;
                var11 = var0.onQueryChange;
                var8 = var0.searchInputRef;
                var0 = _closure1_slot7;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.getProviderForAPIRequest;
                var2 = var0.bind(var2)();
                var0 = 8;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getSearchPlaceholder;
                var10 = var0.bind(var1)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var12.container;
                var0.style = var4;
                var4 = _closure1_slot4;
                var4 = var4.SEARCH;
                if (!(var17 !== var4)) {
                    _fun74367_ip = 612;
                    continue _fun74367
                }
            case 129:
                var7 = _closure1_slot6;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var4 = 10;
                var4 = var16[var4];
                var4 = var14.bind(var3)(var4);
                var6 = var4.PressableOpacity;
                var4 = {};
                var12 = var12.header;
                var4.style = var12;
                var12 = 'button';
                var4.accessibilityRole = var12;
                var4.onPress = var9;
                var21 = 11;
                var12 = var16[var21];
                var12 = var14.bind(var3)(var12);
                var18 = var12.intl;
                var15 = var18.formatToPlainString;
                var12 = var16[var21];
                var12 = var14.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.UTypEu;
                var12 = {};
                var19 = var16[var21];
                var19 = var14.bind(var3)(var19);
                var22 = var19.intl;
                var20 = var22.string;
                var19 = var16[var21];
                var19 = var14.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.ffgJrs;
                var19 = var20.bind(var22)(var19);
                var12.destination = var19;
                var12 = var15.bind(var18)(var13, var12);
                var4.accessibilityLabel = var12;
                var15 = _closure1_slot5;
                var12 = 12;
                var12 = var16[var12];
                var12 = var14.bind(var3)(var12);
                var13 = var12.ChevronLargeLeftIcon;
                var12 = {};
                var19 = _closure1_slot1;
                var18 = 5;
                var18 = var16[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.colors;
                var18 = var18.INTERACTIVE_TEXT_ACTIVE;
                var12.color = var18;
                var18 = 'sm';
                var12.size = var18;
                var13 = var15.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = 13;
                var13 = var16[var13];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default',
                    'maxFontSizeMultiplier': 2
                };
                var16 = _closure1_slot4;
                var16 = var16.TRENDING_GIFS;
                if (!(var17 !== var16)) {
                    _fun74367_ip = 534;
                    continue _fun74367
                }
            case 412:
                var16 = _closure1_slot4;
                var16 = var16.FAVORITES;
                if (!(var17 !== var16)) {
                    _fun74367_ip = 480;
                    continue _fun74367
                }
            case 426:
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var17 = var16[var21];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var21];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["5h0QOP"];
                var16 = var17.bind(var18)(var16);
                _fun74367_ip = 532;
                continue _fun74367;
            case 480:
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.k8fFjp;
                var16 = var18.bind(var19)(var17);
            case 532:
                _fun74367_ip = 586;
                continue _fun74367;
            case 534:
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var18 = var17[var21];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17[var21];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.TsWCdW;
                var16 = var18.bind(var19)(var17);
            case 586:
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var4.children = var12;
                var4 = var7.bind(var3)(var6, var4);
                _fun74367_ip = 684;
                continue _fun74367;
            case 612:
                var7 = _closure1_slot5;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 9;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.SearchField;
                var5 = {};
                var12 = 'md';
                var5.size = var12;
                var5.onChange = var11;
                var5.placeholder = var10;
                var5.onClear = var9;
                var5.ref = var8;
                var8 = true;
                var5.isRound = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 684:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gif_picker/native/GIFPickerHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 5396, 9212, 9363, 7012, 4902, 1234, 9364, 3941, 2]);