// modules/collectibles/native/CollectiblesShopCardVariants.tsx
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = 4;
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10.paddingStart = var11;
    var7.variantsContainer = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun87592: for (var _fun87592_ip = 0;;) switch (_fun87592_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'marginStart': null,
                    'width': 14,
                    'height': 14,
                    'borderWidth': 1,
                    'borderColor': null,
                    'borderRadius': null,
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 4;
                var6 = var3[var5];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var6 = var6.spacing;
                var6 = var6.PX_4;
                var6 = -var6;
                var1.marginStart = var6;
                var6 = 1;
                var8 = var3[var5];
                var8 = var7.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_BASE_LOW;
                var1.borderColor = var8;
                var8 = var3[var5];
                var8 = var7.bind(var4)(var8);
                var8 = var8.radii;
                var8 = var8.round;
                var1.borderRadius = var8;
                var0.variantOption = var1;
                var1 = {
                    'width': '100%',
                    'height': '100%',
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var3 = var3[var5];
                var3 = var7.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.round;
                var1.borderRadius = var3;
                var7 = arg0;
                var3 = 0;
                if (!var7) {
                    _fun87592_ip = 168;
                    continue _fun87592
                }
            case 165:
                var3 = var6;
            case 168:
                var1.borderWidth = var3;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.BUTTON_OUTLINE_PRIMARY_TEXT;
                var1.borderColor = var6;
                var0.variantOptionInner = var1;
                var1 = {};
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.ICON_MUTED;
                var1.backgroundColor = var2;
                var0.variantOverflowInner = var1;
                return var0;
        }
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = function arg0() {
        _fun87593: for (var _fun87593_ip = 0;;) switch (_fun87593_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.variant;
                var10 = var0.zIndex;
                var1 = var0.isSelected;
                var0 = _closure1_slot7;
                var3 = undefined;
                var7 = var0.bind(var3)(var1);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useProductPurchaseState;
                var0 = var0.bind(var1)(var9);
                var5 = var0.isPurchased;
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var8 = var7.variantOption;
                var4 = new Array(2);
                var4[0] = var8;
                var8 = {};
                var8.zIndex = var10;
                var4[1] = var8;
                var0.style = var4;
                var4 = {};
                var8 = var7.variantOptionInner;
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var10 = var9.variantValue;
                var8.backgroundColor = var10;
                var7[1] = var8;
                var4.style = var7;
                if (!var5) {
                    _fun87593_ip = 169;
                    continue _fun87593
                }
            case 149:
                var8 = _closure1_slot4;
                var7 = _closure1_slot9;
                var6 = {};
                var6.variant = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 169:
                var4.children = var5;
                var4 = var2.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function arg0() {
        _fun87594: for (var _fun87594_ip = 0;;) switch (_fun87594_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.variant;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var4 = var0.bind(var3)(var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var0 = 7;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.CheckmarkSmallIcon;
                var0 = {};
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 4;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.colors;
                if (var4) {
                    _fun87594_ip = 102;
                    continue _fun87594
                }
            case 94:
                var4 = var5.WHITE;
                _fun87594_ip = 108;
                continue _fun87594;
            case 102:
                var4 = var5.BLACK;
            case 108:
                var0.color = var4;
                var4 = 'xxs';
                var0.size = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.zIndex;
        var1 = var0.isSelected;
        var0 = _closure1_slot7;
        var3 = undefined;
        var6 = var0.bind(var3)(var1);
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var0 = {};
        var5 = var6.variantOption;
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var5.zIndex = var8;
        var4[1] = var5;
        var0.style = var4;
        var4 = {};
        var8 = var6.variantOptionInner;
        var5 = new Array(2);
        var5[0] = var8;
        var6 = var6.variantOverflowInner;
        var5[1] = var6;
        var4.style = var5;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 8;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.PlusSmallIcon;
        var5 = {};
        var8 = _closure1_slot1;
        var7 = 4;
        var7 = var9[var7];
        var7 = var8.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.WHITE;
        var5.color = var7;
        var7 = 'xxs';
        var5.size = var7;
        var5 = var2.bind(var3)(var6, var5);
        var4.children = var5;
        var4 = var2.bind(var3)(var1, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun87596: for (var _fun87596_ip = 0;;) switch (_fun87596_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.product;
                var0 = _closure1_slot6;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var5 = var1.bind(var3)(var0);
                var0 = var5.useDefaultVariantIndex;
                var12 = var0.bind(var5)(var8);
                var _closure2_slot0 = var12;
                var0 = 10;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getIsVariantProduct;
                var0 = var0.bind(var1)(var8);
                if (var0) {
                    _fun87596_ip = 89;
                    continue _fun87596
                }
            case 85:
                var0 = null;
                return var0;
            case 89:
                var0 = var8.variants;
                var7 = var0.length;
                var10 = 4;
                var0 = var7 > var10;
                var11 = 3;
                var5 = var11;
                if (var0) {
                    _fun87596_ip = 119;
                    continue _fun87596
                }
            case 116:
                var5 = var7;
            case 119:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var9 = var9.variantsContainer;
                var0.style = var9;
                var13 = var8.variants;
                var8 = var13.slice;
                var9 = 0;
                var13 = var8.bind(var13)(var9, var5);
                var8 = var13.map;
                var4 = function(arg0, arg1) { // Environment: var4
                    var0 = arg0;
                    var7 = arg1;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var2.variant = var0;
                    var1 = _closure2_slot0;
                    var5 = var7 === var1;
                    var2.isSelected = var5;
                    var5 = global;
                    var6 = var5.Math;
                    var5 = var6.abs;
                    var1 = var1 - var7;
                    var5 = var5.bind(var6)(var1);
                    var1 = 4;
                    var1 = var1 - var5;
                    var2.zIndex = var1;
                    var1 = var0.variantValue;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var8 = var8.bind(var13)(var4);
                var4 = new Array(2);
                var4[0] = var8;
                var5 = var5 !== var7;
                if (!var5) {
                    _fun87596_ip = 232;
                    continue _fun87596
                }
            case 190:
                var8 = _closure1_slot4;
                var7 = _closure1_slot10;
                var6 = {};
                var13 = var12 >= var11;
                var6.isSelected = var13;
                var11 = var12 >= var11;
                var9 = 0;
                if (!var11) {
                    _fun87596_ip = 221;
                    continue _fun87596
                }
            case 218:
                var9 = var10;
            case 221:
                var6.zIndex = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 232:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopCardVariants.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 11330, 11338, 4925, 7852, 11312, 4614, 2]);