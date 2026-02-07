// modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var6 = var3.View;
    var _closure1_slot2 = var6;
    var3 = var3.Pressable;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingVertical = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.container = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.marginBottom = var11;
    var3.label = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.gap = var11;
    var3.stepperContainer = var8;
    var8 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'backgroundColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
    var8.backgroundColor = var9;
    var3.stepperButton = var8;
    var8 = {};
    var9 = 0.5;
    var8.opacity = var9;
    var3.stepperButtonDisabled = var8;
    var8 = {
        'minWidth': 40,
        'textAlign': 'center'
    };
    var3.valueText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/tooling/ShopSkipCategoriesFilter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun88413: for (var _fun88413_ip = 0;;) switch (_fun88413_ip) {
            case 0:
                var0 = _closure1_slot7;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 6;
                var0 = var7[var0];
                var4 = var8.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    var0 = _closure1_slot4;
                    var0 = var0.skipNumCategories;
                    return var0;
                };
                var17 = var2.bind(var4)(var1, var0);
                var _closure2_slot0 = var17;
                var0 = 0;
                var10 = var17 <= var0;
                var0 = 100;
                var14 = var17 >= var0;
                var2 = _closure1_slot5;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var19.container;
                var0.style = var4;
                var6 = _closure1_slot6;
                var4 = 7;
                var4 = var7[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.Stack;
                var4 = {};
                var16 = 8;
                var4.spacing = var16;
                var7 = var7[var16];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-md/normal',
                    'style': null,
                    'children': 'Hide first # of categories'
                };
                var9 = var19.label;
                var7.style = var9;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = {};
                var9 = var19.stepperContainer;
                var8.style = var9;
                var18 = _closure1_slot3;
                var9 = {};
                var12 = var19.stepperButton;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = var10;
                if (!var12) {
                    _fun88413_ip = 229;
                    continue _fun88413
                }
            case 223:
                var12 = var19.stepperButtonDisabled;
            case 229:
                var11[1] = var12;
                var9.style = var11;
                var11 = function() {
                    _fun88415: for (var _fun88415_ip = 0;;) switch (_fun88415_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = 0;
                            if (!(var2 > var1)) {
                                _fun88415_ip = 60;
                                continue _fun88415
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.setSkipNumCategories;
                            var3 = _closure2_slot0;
                            var0 = 1;
                            var0 = var3 - var0;
                            var0 = var1.bind(var2)(var0);
                        case 60:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onPress = var11;
                var9.disabled = var10;
                var12 = _closure1_slot5;
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var20 = var10[var16];
                var20 = var11.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-lg/semibold',
                    'children': '−'
                };
                var20 = var12.bind(var3)(var21, var20);
                var9.children = var20;
                var18 = var2.bind(var3)(var18, var9);
                var9 = new Array(3);
                var9[0] = var18;
                var10 = var10[var16];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var18 = 'text-md/semibold';
                var10.variant = var18;
                var18 = var19.valueText;
                var10.style = var18;
                var10.children = var17;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var11 = _closure1_slot3;
                var10 = {};
                var18 = var19.stepperButton;
                var17 = new Array(2);
                var17[0] = var18;
                var18 = var14;
                if (!var18) {
                    _fun88413_ip = 396;
                    continue _fun88413
                }
            case 390:
                var18 = var19.stepperButtonDisabled;
            case 396:
                var17[1] = var18;
                var10.style = var17;
                var15 = function() {
                    _fun88416: for (var _fun88416_ip = 0;;) switch (_fun88416_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = 100;
                            if (!(var2 < var1)) {
                                _fun88416_ip = 61;
                                continue _fun88416
                            }
                        case 14:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.setSkipNumCategories;
                            var3 = _closure2_slot0;
                            var0 = 1;
                            var0 = var3 + var0;
                            var0 = var1.bind(var2)(var0);
                        case 61:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10.onPress = var15;
                var10.disabled = var14;
                var15 = _closure1_slot5;
                var14 = _closure1_slot0;
                var13 = _closure1_slot1;
                var13 = var13[var16];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-lg/semibold',
                    'children': '+'
                };
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[2] = var10;
                var8.children = var9;
                var8 = var6.bind(var3)(var1, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ShopSkipCategoriesFilter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4598, 33, 1297, 671, 566, 4080, 3942, 4597, 2]);