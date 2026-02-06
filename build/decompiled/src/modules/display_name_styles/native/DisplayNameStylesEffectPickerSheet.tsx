// modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun85382: for (var _fun85382_ip = 0;;) switch (_fun85382_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.userId;
                var4 = var0.effectId;
                var9 = var0.selected;
                var5 = var0.onClick;
                var0 = _closure1_slot9;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 12;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var8 = var0.intl;
                var7 = var8.string;
                var0 = 16;
                var6 = var2[var0];
                var6 = var1.bind(var3)(var6);
                var6 = var6.DISPLAY_NAME_STYLES_EFFECT_NAMES;
                var6 = var6[var4];
                var13 = var7.bind(var8)(var6);
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useDisplayNameStylesEffectConfig;
                var11 = var0.bind(var1)(var4);
                var2 = _closure1_slot8;
                var1 = _closure1_slot6;
                var0 = {};
                var0.onPress = var5;
                var5 = 'button';
                var0.accessibilityRole = var5;
                var0.accessibilityLabel = var13;
                var5 = {};
                var5.selected = var9;
                var0.accessibilityState = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var14 = var10.effectCard;
                var8 = new Array(2);
                var8[0] = var14;
                if (!var9) {
                    _fun85382_ip = 187;
                    continue _fun85382
                }
            case 181:
                var9 = var10.effectCardSelected;
            case 187:
                var8[1] = var9;
                var5.style = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 17;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.userId = var15;
                var8.userName = var13;
                var13 = _closure1_slot0;
                var12 = 18;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.EffectDisplayType;
                var12 = var12.STATIC;
                var8.effectDisplayType = var12;
                var11 = var11.previewStyles;
                var8.pendingDisplayNameStyles = var11;
                var11 = 'text-md/semibold';
                var8.variant = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.children = var5;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Pressable;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EFFECT_ORDER;
    var _closure1_slot7 = var3;
    var11 = 4;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.paddingTop = var11;
    var3.header = var8;
    var11 = 'center';
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.headerTrailing = var8;
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {};
    var9 = 6;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.padding = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingLeft = var12;
    var8.alignItems = var11;
    var3.contentContainer = var8;
    var8 = {
        'flexWrap': 'wrap',
        'width': 350
    };
    var3.gridContainer = var8;
    var8 = {
        'width': 109,
        'height': 80,
        'backgroundColor': null,
        'borderRadius': null,
        'borderWidth': 1,
        'borderColor': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_SUBTLE;
    var8.borderColor = var11;
    var3.effectCard = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CONTROL_BRAND_FOREGROUND;
    var8.borderColor = var9;
    var3.effectCardSelected = var8;
    var8 = {
        'textAlign': 'center',
        'textAlignVertical': 'center'
    };
    var3.effectText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun85383: for (var _fun85383_ip = 0;;) switch (_fun85383_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.userId;
                var _closure2_slot0 = var1;
                var2 = var0.selectedEffectId;
                var0 = var0.onSelectEffect;
                var _closure2_slot1 = var0;
                var3 = _closure1_slot9;
                var4 = undefined;
                var16 = var3.bind(var4)();
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 7;
                var3 = var6[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useBottomSheetRef;
                var3 = var3.bind(var5)();
                var5 = var3.bottomSheetRef;
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var8 = var3.bind(var6)(var2);
                var7 = _closure1_slot3;
                var3 = 2;
                var8 = var7.bind(var4)(var8, var3);
                var3 = 0;
                var7 = var8[var3];
                var _closure2_slot2 = var7;
                var3 = 1;
                var3 = var8[var3];
                var _closure2_slot3 = var3;
                var8 = var7 !== var2;
                var _closure2_slot4 = var8;
                var9 = var6.useCallback;
                var3 = function(arg0) { // Environment: var14
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var2 = new Array(0);
                var2 = var9.bind(var6)(var3, var2);
                var _closure2_slot5 = var2;
                var3 = var6.useCallback;
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var0;
                var0 = function() { // Environment: var14
                    _fun85385: for (var _fun85385_ip = 0;;) switch (_fun85385_ip) {
                        case 0:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 8;
                            var3 = var6[var2];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var3);
                            var3 = var4.triggerHapticFeedback;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.HapticFeedbackTypes;
                            var2 = var2.IMPACT_MEDIUM;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure2_slot4;
                            if (!var3) {
                                _fun85385_ip = 80;
                                continue _fun85385
                            }
                        case 67:
                            var3 = _closure2_slot1;
                            var2 = _closure2_slot2;
                            var2 = var3.bind(var0)(var2);
                        case 80:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var22 = var3.bind(var6)(var0, var2);
                var0 = null;
                var1 = var0 == var1;
                if (var1) {
                    _fun85383_ip = 638;
                    continue _fun85383
                }
            case 207:
                var3 = _closure1_slot8;
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var1 = 10;
                var1 = var17[var1];
                var1 = var12.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {};
                var1.ref = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var16.header;
                var5.style = var8;
                var10 = _closure1_slot8;
                var8 = 11;
                var8 = var17[var8];
                var8 = var12.bind(var4)(var8);
                var9 = var8.BottomSheetTitleHeader;
                var8 = {};
                var23 = 12;
                var11 = var17[var23];
                var11 = var12.bind(var4)(var11);
                var18 = var11.intl;
                var13 = var18.string;
                var19 = _closure1_slot1;
                var11 = 13;
                var11 = var17[var11];
                var11 = var19.bind(var4)(var11);
                var11 = var11.RVtMxT;
                var11 = var13.bind(var18)(var11);
                var8.title = var11;
                var18 = _closure1_slot8;
                var13 = _closure1_slot5;
                var11 = {};
                var19 = var16.headerTrailing;
                var11.style = var19;
                var21 = _closure1_slot8;
                var19 = 14;
                var19 = var17[var19];
                var19 = var12.bind(var4)(var19);
                var20 = var19.Button;
                var19 = {};
                var24 = var17[var23];
                var24 = var12.bind(var4)(var24);
                var25 = var24.intl;
                var24 = var25.string;
                var23 = var17[var23];
                var23 = var12.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.XqMe3N;
                var23 = var24.bind(var25)(var23);
                var19.text = var23;
                var19.onPress = var22;
                var22 = 'primary';
                var19.variant = var22;
                var22 = 'sm';
                var19.size = var22;
                var19 = var21.bind(var4)(var20, var19);
                var11.children = var19;
                var11 = var18.bind(var4)(var13, var11);
                var8.trailing = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.header = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = var16.container;
                var5.style = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot5;
                var8 = {};
                var11 = var16.contentContainer;
                var8.style = var11;
                var13 = _closure1_slot8;
                var11 = 15;
                var11 = var17[var11];
                var11 = var12.bind(var4)(var11);
                var12 = var11.Stack;
                var11 = {
                    'direction': 'horizontal',
                    'spacing': 8
                };
                var16 = var16.gridContainer;
                var11.style = var16;
                var16 = _closure1_slot7;
                var15 = var16.map;
                var14 = function(arg0) { // Environment: var14
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.userId = var6;
                    var1.effectId = var4;
                    var5 = _closure2_slot2;
                    var5 = var4 === var5;
                    var1.selected = var5;
                    var0 = function() {
                        var2 = _closure2_slot5;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onClick = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var14 = var15.bind(var16)(var14);
                var11.children = var14;
                var11 = var13.bind(var4)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 638:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1632, 33, 1297, 671, 5733, 3281, 3280, 4934, 5214, 1234, 2180, 4085, 4081, 6952, 6948, 6949, 2]);