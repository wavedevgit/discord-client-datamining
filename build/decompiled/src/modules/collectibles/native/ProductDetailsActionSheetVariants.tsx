// modules/collectibles/native/ProductDetailsActionSheetVariants.tsx
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
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'flex': 1,
        'display': 'flex',
        'flexDirection': 'column'
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginHorizontal = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.gap = var12;
    var6.container = var9;
    var9 = {
        'display': 'flex',
        'flexWrap': 'wrap',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var9.gap = var10;
    var6.variantsContainer = var9;
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'minWidth': 28
    };
    var6.text = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun87866: for (var _fun87866_ip = 0;;) switch (_fun87866_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'width': 28,
                    'height': 28,
                    'borderRadius': null,
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'borderWidth': 1
                };
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 4;
                var3 = var3[var5];
                var4 = undefined;
                var3 = var6.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.round;
                var1.borderRadius = var3;
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var3 = var6.bind(var4)(var3);
                var6 = var3.colors;
                var3 = arg0;
                if (var3) {
                    _fun87866_ip = 93;
                    continue _fun87866
                }
            case 85:
                var3 = var6.BORDER_STRONG;
                _fun87866_ip = 99;
                continue _fun87866;
            case 93:
                var3 = var6.BUTTON_OUTLINE_PRIMARY_TEXT;
            case 99:
                var1.borderColor = var3;
                var0.variantOption = var1;
                var1 = {
                    'width': '100%',
                    'height': '100%',
                    'justifyContent': 'center',
                    'alignItems': 'center',
                    'borderRadius': null,
                    'borderWidth': 1
                };
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.radii;
                var6 = var6.round;
                var1.borderRadius = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_BASE_LOW;
                var1.borderColor = var2;
                var0.variantOptionInner = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = function(arg0) { // Original name: VariantOption, environment: var1
        _fun87867: for (var _fun87867_ip = 0;;) switch (_fun87867_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.variant;
                var9 = var0.isSelected;
                var4 = var0.onSelect;
                var0 = _closure1_slot7;
                var3 = undefined;
                var8 = var0.bind(var3)(var9);
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useProductPurchaseState;
                var0 = var0.bind(var2)(var10);
                var6 = var0.isPurchased;
                var2 = _closure1_slot4;
                var0 = 6;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var5 = 'button';
                var0.accessibilityRole = var5;
                var5 = var10.name;
                var0.accessibilityLabel = var5;
                var5 = {};
                var5.selected = var9;
                var0.accessibilityState = var5;
                var0.onPress = var4;
                var4 = var8.variantOption;
                var0.style = var4;
                var5 = _closure1_slot3;
                var4 = {};
                var9 = var8.variantOptionInner;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = {};
                var11 = var10.variantValue;
                var9.backgroundColor = var11;
                var8[1] = var9;
                var4.style = var8;
                if (!var6) {
                    _fun87867_ip = 201;
                    continue _fun87867
                }
            case 181:
                var9 = _closure1_slot4;
                var8 = _closure1_slot9;
                var7 = {};
                var7.variant = var10;
                var6 = var9.bind(var3)(var8, var7);
            case 201:
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = function(arg0) { // Original name: VariantCheckmark, environment: var1
        _fun87868: for (var _fun87868_ip = 0;;) switch (_fun87868_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.variant;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 7;
                var0 = var6[var0];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var4 = var0.bind(var3)(var1);
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var0 = 8;
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
                    _fun87868_ip = 102;
                    continue _fun87868
                }
            case 94:
                var4 = var5.WHITE;
                _fun87868_ip = 108;
                continue _fun87868;
            case 102:
                var4 = var5.BLACK;
            case 108:
                var0.color = var4;
                var4 = 'md';
                var0.size = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProductDetailsActionSheetVariants.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun87869: for (var _fun87869_ip = 0;;) switch (_fun87869_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.product;
                var13 = var0.selectedVariantIndex;
                var _closure2_slot0 = var13;
                var0 = var0.onVariantSelect;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot6;
                var4 = undefined;
                var14 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.getIsVariantProduct;
                var1 = var0.bind(var1)(var12);
                var0 = null;
                if (!var1) {
                    _fun87869_ip = 376;
                    continue _fun87869
                }
            case 83:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var14.container;
                var1.style = var5;
                var8 = _closure1_slot4;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var15 = 10;
                var5 = var18[var15];
                var5 = var17.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var10 = 11;
                var11 = var18[var10];
                var11 = var17.bind(var4)(var11);
                var16 = var11.intl;
                var11 = var16.string;
                var10 = var18[var10];
                var10 = var17.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.wbgaj6;
                var10 = var11.bind(var16)(var10);
                var5.children = var10;
                var6 = var8.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var8 = var14.variantsContainer;
                var6.style = var8;
                var10 = var12.variants;
                var8 = var10.map;
                var7 = function(arg0, arg1) { // Environment: var7
                    var0 = arg0;
                    var6 = arg1;
                    var _closure3_slot0 = var6;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var2.variant = var0;
                    var5 = _closure2_slot0;
                    var5 = var5 === var6;
                    var2.isSelected = var5;
                    var1 = function() { // Original name: onSelect, environment: var1
                        var2 = _closure2_slot1;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2.onSelect = var1;
                    var1 = var0.variantValue;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var8 = var8.bind(var10)(var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = var12.variants;
                var8 = var8.length;
                var8 = var8 > var13;
                if (!var8) {
                    _fun87869_ip = 348;
                    continue _fun87869
                }
            case 273:
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var15];
                var9 = var10.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default',
                    'lineClamp': 1
                };
                var14 = var14.text;
                var9.style = var14;
                var12 = var12.variants;
                var12 = var12[var13];
                var12 = var12.variantLabel;
                var9.children = var12;
                var8 = var11.bind(var4)(var10, var9);
            case 348:
                var7[1] = var8;
                var6.children = var7;
                var6 = var3.bind(var4)(var2, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 376:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 11277, 4864, 11285, 4884, 4576, 3901, 1234, 2]);