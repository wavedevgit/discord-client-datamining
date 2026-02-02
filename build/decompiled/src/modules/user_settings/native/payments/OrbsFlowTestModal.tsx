// modules/user_settings/native/payments/OrbsFlowTestModal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        var0 = _closure1_slot10;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 10;
        var0 = var8[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.Stack;
        var0 = {};
        var4 = 16;
        var0.spacing = var4;
        var4 = var9.container;
        var0.style = var4;
        var7 = _closure1_slot7;
        var4 = 11;
        var4 = var8[var4];
        var4 = var6.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'text-lg/semibold',
            'style': null,
            'children': 'Balance Widget Menu'
        };
        var9 = var9.title;
        var4.style = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot1;
        var5 = 12;
        var5 = var8[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        _fun86539: for (var _fun86539_ip = 0;;) switch (_fun86539_ip) {
            case 0:
                var0 = _closure1_slot10;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = 1000;
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var21 = 2;
                var0 = var0.bind(var3)(var1, var21);
                var14 = 0;
                var13 = var0[var14];
                var _closure2_slot0 = var13;
                var22 = 1;
                var0 = var0[var22];
                var _closure2_slot1 = var0;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = '1000';
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var1, var21);
                var17 = var0[var14];
                var _closure2_slot2 = var17;
                var0 = var0[var22];
                var _closure2_slot3 = var0;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = 'tertiary';
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot3;
                var0 = var0.bind(var3)(var1, var21);
                var11 = var0[var14];
                var0 = var0[var22];
                var _closure2_slot4 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var9
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var16 = var2.bind(var4)(var1, var0);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var17;
                var0 = function() { // Environment: var9
                    _fun86541: for (var _fun86541_ip = 0;;) switch (_fun86541_ip) {
                        case 0:
                            var3 = global;
                            var5 = var3.parseInt;
                            var4 = _closure2_slot2;
                            var0 = undefined;
                            var2 = 10;
                            var2 = var5.bind(var0)(var4, var2);
                            var3 = var3.isNaN;
                            var3 = var3.bind(var0)(var2);
                            var3 = !var3;
                            if (!var3) {
                                _fun86541_ip = 49;
                                continue _fun86541
                            }
                        case 43:
                            var4 = 0;
                            var3 = var2 >= var4;
                        case 49:
                            if (!var3) {
                                _fun86541_ip = 61;
                                continue _fun86541
                            }
                        case 52:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                        case 61:
                            return var0;
                    }
                };
                var15 = var2.bind(var4)(var0, var1);
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var9
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot5 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var13;
                var0 = function() { // Environment: var9
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var0 = 13;
                    var2 = var10[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3.balance = var2;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var6 = 16;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.cpT0Cq;
                    var7 = var8.bind(var11)(var7);
                    var2.buttonText = var7;
                    var7 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 13;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var2.onButtonPress = var7;
                    var3.primaryButtonConfig = var2;
                    var2 = {};
                    var7 = var10[var6];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var0)(var6);
                    var6 = var6.t;
                    var6 = var6.WAI6xu;
                    var6 = var7.bind(var8)(var6);
                    var2.buttonText = var6;
                    var6 = function() {
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 13;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var2.onButtonPress = var6;
                    var3.secondaryButtonConfig = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var1 = 15;
                        var1 = var0[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = 14;
                        var1 = var0[var1];
                        var0 = var0.paths;
                        var2 = var2.bind(var3)(var1, var0);
                        var1 = var2.then;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.default;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = 'OrbsFlowTestModalBalanceWidgetMenuKey';
                    var1 = var4.bind(var5)(var2, var1, var3);
                    return var0;
                };
                var12 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var19 = _closure1_slot0;
                var23 = _closure1_slot2;
                var0 = 10;
                var0 = var23[var0];
                var0 = var19.bind(var3)(var0);
                var1 = var0.Stack;
                var0 = {};
                var4 = 16;
                var0.spacing = var4;
                var4 = var10.container;
                var0.style = var4;
                var6 = _closure1_slot7;
                var4 = 11;
                var4 = var23[var4];
                var4 = var19.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-lg/semibold',
                    'style': null,
                    'children': 'Balance Widget Pill'
                };
                var7 = var10.title;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(5);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot6;
                var5 = {};
                var18 = var10.variantSection;
                var5.style = var18;
                var20 = _closure1_slot8;
                var18 = 17;
                var18 = var23[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.TableRadioGroup;
                var18 = {};
                var23 = 'Variant';
                var18.title = var23;
                var23 = 'primary';
                if (!(var23 !== var11)) {
                    _fun86539_ip = 455;
                    continue _fun86539
                }
            case 441:
                var23 = 'secondary';
                if (!(var23 === var11)) {
                    _fun86539_ip = 452;
                    continue _fun86539
                }
            case 449:
                var21 = var22;
            case 452:
                var14 = var21;
            case 455:
                var18.defaultValue = var14;
                var9 = function arg0() {
                    var2 = _closure2_slot5;
                    var1 = ['primary', 'secondary', 'tertiary'];
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var18.onChange = var9;
                var24 = _closure1_slot7;
                var9 = _closure1_slot0;
                var14 = _closure1_slot2;
                var22 = 18;
                var21 = var14[var22];
                var21 = var9.bind(var3)(var21);
                var23 = var21.TableRadioRow;
                var21 = {
                    'value': 0,
                    'label': 'Primary'
                };
                var23 = var24.bind(var3)(var23, var21);
                var21 = new Array(3);
                var21[0] = var23;
                var25 = _closure1_slot7;
                var23 = var14[var22];
                var23 = var9.bind(var3)(var23);
                var24 = var23.TableRadioRow;
                var23 = {
                    'value': 1,
                    'label': 'Secondary'
                };
                var23 = var25.bind(var3)(var24, var23);
                var21[1] = var23;
                var24 = _closure1_slot7;
                var22 = var14[var22];
                var22 = var9.bind(var3)(var22);
                var23 = var22.TableRadioRow;
                var22 = {
                    'value': 2,
                    'label': 'Tertiary'
                };
                var22 = var24.bind(var3)(var23, var22);
                var21[2] = var22;
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var5.children = var18;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot7;
                var5 = 19;
                var5 = var14[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.TextInput;
                var5 = {};
                var5.value = var17;
                var5.onChange = var16;
                var16 = 'Enter balance amount';
                var5.placeholder = var16;
                var16 = 'numeric';
                var5.keyboardType = var16;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot7;
                var5 = 20;
                var5 = var14[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.Button;
                var5 = {
                    'text': 'Apply Balance',
                    'variant': 'primary'
                };
                var5.onPress = var15;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot6;
                var5 = {};
                var10 = var10.balancePillContainer;
                var5.style = var10;
                var10 = _closure1_slot7;
                var8 = 21;
                var8 = var14[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.BalanceWidgetPill;
                var8 = {};
                var8.balance = var13;
                var13 = true;
                var8.animateBalanceChanges = var13;
                var8.onPress = var12;
                var8.variant = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var0 = _closure1_slot10;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var9 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 22;
        var0 = var11[var0];
        var1 = var9.bind(var3)(var0);
        var0 = {};
        var2 = true;
        var0.includeKeyboardHeight = var2;
        var0 = var1.bind(var3)(var0);
        var10 = var0.insets;
        var2 = _closure1_slot7;
        var1 = _closure1_slot0;
        var0 = 23;
        var0 = var11[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.LayerScope;
        var0 = {};
        var6 = _closure1_slot8;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var7.wrap;
        var4.style = var7;
        var7 = {};
        var12 = var10.bottom;
        var7.paddingBottom = var12;
        var12 = var10.top;
        var7.paddingTop = var12;
        var12 = var10.left;
        var7.paddingLeft = var12;
        var10 = var10.right;
        var7.paddingRight = var10;
        var4.contentContainerStyle = var7;
        var12 = _closure1_slot7;
        var10 = _closure1_slot11;
        var7 = {};
        var10 = var12.bind(var3)(var10, var7);
        var7 = new Array(3);
        var7[0] = var10;
        var13 = _closure1_slot7;
        var12 = _closure1_slot12;
        var10 = {};
        var10 = var13.bind(var3)(var12, var10);
        var7[1] = var10;
        var10 = _closure1_slot7;
        var8 = 24;
        var8 = var11[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8 = var10.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ScrollView;
    var _closure1_slot5 = var7;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var3 = var7.createNativeStackNavigator;
    var3 = var3.bind(var7)();
    var _closure1_slot9 = var3;
    var13 = 8;
    var3 = var5[var13];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 9;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var14;
    var3.wrap = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.padding = var14;
    var3.container = var9;
    var9 = {};
    var9.marginBottom = var13;
    var3.title = var9;
    var9 = {};
    var9.flex = var12;
    var3.balanceInput = var9;
    var9 = {};
    var12 = 'center';
    var9.alignItems = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginBottom = var12;
    var3.balancePillContainer = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginBottom = var10;
    var3.variantSection = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var3 = undefined;
        var1 = var1.bind(var3)(var0);
        var0 = var1.useAccessibilityNativeStackOptions;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var2 = _closure1_slot7;
        var4 = _closure1_slot9;
        var1 = var4.Navigator;
        var0 = {};
        var5 = function arg0() {
            var0 = arg0;
            var6 = var0.navigation;
            var0 = {};
            var1 = function arg0() {
                var2 = arg0;
                var5 = var2.children;
                var0 = null;
                var1 = Object.create(var0);
                var0 = 0;
                var1.children = var0;
                var8 = {};
                var7 = var2;
                var6 = var1;
                var7 = copyDataProperties(var8, var7, var6);
                var3 = _closure1_slot7;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.GenericHeaderTitle;
                var0 = {};
                var0.title = var5;
                var8 = var0;
                var4 = copyDataProperties(var8, var7);
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var0.headerTitle = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 6;
            var3 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            var3 = var5.getRenderModalCloseImage;
            var3 = var3.bind(var5)(var6);
            var0.headerLeft = var3;
            var3 = 'center';
            var0.headerTitleAlign = var3;
            var7 = _closure2_slot0;
            var8 = var0;
            var3 = copyDataProperties(var8, var7);
            var3 = _closure1_slot1;
            var1 = 7;
            var1 = var4[var1];
            var1 = var3.bind(var2)(var1);
            var7 = var1.bind(var2)();
            var8 = var0;
            var1 = copyDataProperties(var8, var7);
            return var0;
        };
        var0.screenOptions = var5;
        var6 = _closure1_slot7;
        var5 = var4.Screen;
        var4 = {};
        var9 = 'OrbsFlowTest';
        var4.name = var9;
        var8 = function() {
            var0 = {};
            var1 = 'Orbs Flow Test';
            var0.title = var1;
            return var0;
        };
        var4.options = var8;
        var7 = _closure1_slot13;
        var4.component = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 25;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/payments/OrbsFlowTestModal.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 9069, 5750, 8850, 9078, 1297, 671, 4041, 3902, 11157, 3239, 9509, 1307, 1234, 5386, 5385, 5365, 4045, 9501, 4858, 5170, 11159, 2]);