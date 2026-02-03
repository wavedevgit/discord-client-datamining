// modules/gif_picker/native/GIFPickerCategoriesPage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        var7 = arg0;
        var0 = {};
        var1 = {};
        var1.height = var7;
        var2 = 'row';
        var1.flexDirection = var2;
        var8 = _closure1_slot0;
        var5 = _closure1_slot2;
        var6 = 5;
        var3 = var5[var6];
        var4 = undefined;
        var3 = var8.bind(var4)(var3);
        var3 = var3.GIF_PICKER_GUTTER_SPACING;
        var1.gap = var3;
        var3 = var5[var6];
        var3 = var8.bind(var4)(var3);
        var3 = var3.GIF_PICKER_GUTTER_SPACING;
        var1.paddingBottom = var3;
        var0.item = var1;
        var1 = {};
        var3 = _closure1_slot1;
        var2 = 6;
        var9 = var5[var2];
        var9 = var3.bind(var4)(var9);
        var9 = var9.colors;
        var9 = var9.BORDER_SUBTLE;
        var1.backgroundColor = var9;
        var6 = var5[var6];
        var6 = var8.bind(var4)(var6);
        var6 = var6.GIF_PICKER_GUTTER_SPACING;
        var6 = var7 - var6;
        var1.height = var6;
        var2 = var5[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.radii;
        var2 = var2.xs;
        var1.borderRadius = var2;
        var2 = 1;
        var1.flex = var2;
        var0.placeholder = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun74274: for (var _fun74274_ip = 0;;) switch (_fun74274_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.columns;
                var _closure2_slot0 = var15;
                var6 = var0.favoritesCategory;
                var _closure2_slot1 = var6;
                var11 = var0.inActionSheet;
                var4 = var0.onSelectCategory;
                var _closure2_slot2 = var4;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var1 = 2;
                if (!(!(var15 > var1))) {
                    _fun74274_ip = 101;
                    continue _fun74274
                }
            case 66:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
                var9 = var0 / var1;
                _fun74274_ip = 130;
                continue _fun74274;
            case 101:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var9 = var0.GIF_PICKER_ITEM_ESIMTATED_HEIGHT;
            case 130:
                _closure2_slot3 = var9;
                var1 = _closure1_slot7;
                var14 = var1.bind(var3)(var9);
                _closure2_slot4 = var14;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 7;
                var5 = var8[var5];
                var7 = var1.bind(var3)(var5);
                var5 = {};
                var10 = false;
                var5.hasCategories = var10;
                var5 = var7.bind(var3)(var5);
                var10 = var5.safeAreaBottomKeyboardAware;
                var7 = _closure1_slot0;
                var5 = 8;
                var5 = var8[var5];
                var16 = var7.bind(var3)(var5);
                var13 = var16.useStateFromStoresObject;
                var5 = _closure1_slot5;
                var12 = new Array(1);
                var12[0] = var5;
                var5 = function() { // Environment: var2
                    var0 = {};
                    var2 = _closure1_slot5;
                    var1 = var2.getTrendingCategories;
                    var1 = var1.bind(var2)();
                    var0.trendingCategories = var1;
                    return var0;
                };
                var5 = var13.bind(var16)(var12, var5);
                var5 = var5.trendingCategories;
                _closure2_slot5 = var5;
                var13 = _closure1_slot3;
                var16 = var13.useMemo;
                var12 = new Array(3);
                var12[0] = var15;
                var12[1] = var6;
                var12[2] = var5;
                var6 = function() { // Environment: var2
                    _fun74276: for (var _fun74276_ip = 0;;) switch (_fun74276_ip) {
                        case 0:
                            var14 = _closure2_slot5;
                            var7 = new Array(0);
                            var2 = 0;
                            var15 = var7;
                            var13 = 0;
                            var0 = arraySpread(var15, var14, var13);
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun74276_ip = 47;
                                continue _fun74276
                            }
                        case 32:
                            var1 = var7.unshift;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var7)(var0);
                        case 47:
                            var1 = new Array(0);
                            var6 = global;
                            var11 = var6.Math;
                            var10 = var11.max;
                            var9 = var7.length;
                            var12 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var4 = 5;
                            var0 = var0[var4];
                            var3 = undefined;
                            var0 = var12.bind(var3)(var0);
                            var0 = var0.DEFAULT_CATEGORY_ROWS;
                            var0 = var10.bind(var11)(var9, var0);
                            var0 = var2 < var0;
                            var2 = 0;
                            if (!var0) {
                                _fun74276_ip = 197;
                                continue _fun74276
                            }
                        case 115:
                            var10 = var1.push;
                            var11 = var7.slice;
                            var0 = _closure2_slot0;
                            var9 = var2 + var0;
                            var9 = var11.bind(var7)(var2, var9);
                            var9 = var10.bind(var1)(var9);
                            var2 = var2 + var0;
                            var11 = var6.Math;
                            var10 = var11.max;
                            var9 = var7.length;
                            var12 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var4];
                            var0 = var12.bind(var3)(var0);
                            var0 = var0.DEFAULT_CATEGORY_ROWS;
                            var0 = var10.bind(var11)(var9, var0);
                            if (var2 < var0) {
                                _fun74276_ip = 115;
                                continue _fun74276
                            }
                        case 197:
                            var0 = {};
                            var0.data = var1;
                            var2 = var1.length;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.sections = var1;
                            return var0;
                    }
                };
                var6 = var16.bind(var13)(var6, var12);
                var16 = var6.data;
                _closure2_slot6 = var16;
                var6 = var6.sections;
                var17 = var13.useEffect;
                var12 = new Array(1);
                var12[0] = var5;
                var5 = function() { // Environment: var2
                    _fun74277: for (var _fun74277_ip = 0;;) switch (_fun74277_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var1 = var0.length;
                            var0 = 0;
                            if (!(var0 === var1)) {
                                _fun74277_ip = 53;
                                continue _fun74277
                            }
                        case 18:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.fetchTrending;
                            var0 = var0.bind(var1)();
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var17.bind(var13)(var5, var12);
                var12 = var13.useCallback;
                var5 = new Array(4);
                var5[0] = var15;
                var5[1] = var16;
                var5[2] = var4;
                var5[3] = var14;
                var4 = function(arg0, arg1) { // Environment: var2
                    _fun74278: for (var _fun74278_ip = 0;;) switch (_fun74278_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = arg1;
                            var8 = var1[var0];
                            var4 = new Array(0);
                            var0 = _closure2_slot0;
                            var7 = 0;
                            var1 = var7 < var0;
                            var6 = 10;
                            var3 = undefined;
                            var2 = null;
                            if (!var1) {
                                _fun74278_ip = 170;
                                continue _fun74278
                            }
                        case 44:
                            var13 = var8[var7];
                            var9 = var4.push;
                            if (!(var2 == var13)) {
                                _fun74278_ip = 111;
                                continue _fun74278
                            }
                        case 57:
                            var11 = _closure1_slot6;
                            var10 = _closure1_slot4;
                            var1 = {};
                            var12 = _closure2_slot4;
                            var14 = var12.item;
                            var12 = new Array(2);
                            var12[0] = var14;
                            var14 = _closure2_slot4;
                            var14 = var14.placeholder;
                            var12[1] = var14;
                            var1.style = var12;
                            var1 = var11.bind(var3)(var10, var1, var7);
                            _fun74278_ip = 154;
                            continue _fun74278;
                        case 111:
                            var12 = _closure1_slot6;
                            var11 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var10 = var10[var6];
                            var11 = var11.bind(var3)(var10);
                            var10 = {};
                            var10.item = var13;
                            var13 = _closure2_slot2;
                            var10.onSelectCategory = var13;
                            var1 = var12.bind(var3)(var11, var10, var7);
                        case 154:
                            var1 = var9.bind(var4)(var1);
                            var7 = var7 + 1;
                            var1 = _closure2_slot0;
                            if (var7 < var1) {
                                _fun74278_ip = 44;
                                continue _fun74278
                            }
                        case 170:
                            var2 = _closure1_slot6;
                            var1 = _closure1_slot4;
                            var0 = {};
                            var5 = _closure2_slot4;
                            var5 = var5.item;
                            var0.style = var5;
                            var5 = false;
                            var0.collapsable = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var4 = var12.bind(var13)(var4, var5);
                var12 = var13.useMemo;
                var5 = new Array(3);
                var5[0] = var9;
                var5[1] = var15;
                var5[2] = var14;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var1 = {};
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 11;
                    var2 = var6[var2];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.FastestListPropsPlaceholderType;
                    var2 = var2.SHAPE;
                    var1.type = var2;
                    var2 = 'rect';
                    var1.shape = var2;
                    var2 = _closure2_slot0;
                    var1.shapeCount = var2;
                    var2 = 5;
                    var7 = var6[var2];
                    var7 = var5.bind(var4)(var7);
                    var7 = var7.GIF_PICKER_GUTTER_SPACING;
                    var1.spaceGap = var7;
                    var7 = _closure2_slot4;
                    var7 = var7.placeholder;
                    var7 = var7.borderRadius;
                    var1.borderRadius = var7;
                    var7 = _closure2_slot4;
                    var7 = var7.placeholder;
                    var7 = var7.backgroundColor;
                    var1.colorHex = var7;
                    var3 = _closure2_slot3;
                    var2 = var6[var2];
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.GIF_PICKER_GUTTER_SPACING;
                    var2 = var3 - var2;
                    var1.height = var2;
                    var2 = 'top';
                    var1.verticalAlignment = var2;
                    var0.sectionItem = var1;
                    return var0;
                };
                var5 = var12.bind(var13)(var2, var5);
                var2 = _closure1_slot6;
                var0 = 12;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var12 = 13;
                var12 = var8[var12];
                var13 = var7.bind(var3)(var12);
                var12 = var13.getCustomKeyboardHeight;
                var12 = var12.bind(var13)();
                var0.estimatedListSize = var12;
                var0.inActionSheet = var11;
                var0.insetEnd = var10;
                var0.itemSize = var9;
                var0.sections = var6;
                var0.placeholderConfig = var5;
                var0.renderItem = var4;
                var4 = 14;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.ffgJrs;
                var4 = var5.bind(var6)(var4);
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gif_picker/native/GIFPickerCategoriesPage.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 9189, 33, 1297, 9338, 671, 9273, 566, 9188, 9348, 7564, 7557, 4891, 1234, 2]);