// modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun108781: for (var _fun108781_ip = 0;;) switch (_fun108781_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.scrollable;
                var1 = null;
                var2 = Object.create(var1);
                var1 = 0;
                var2.scrollable = var1;
                var9 = {};
                var8 = var3;
                var7 = var2;
                var5 = copyDataProperties(var9, var8, var7);
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                if (var0) {
                    _fun108781_ip = 98;
                    continue _fun108781
                }
            case 65:
                var2 = var1.FlashList;
                var0 = {};
                var6 = false;
                var0.scrollEnabled = var6;
                var9 = var0;
                var8 = var5;
                var6 = copyDataProperties(var9, var8);
                var0 = var4.bind(var3)(var2, var0);
                _fun108781_ip = 129;
                continue _fun108781;
            case 98:
                var2 = var1.BottomSheetFlashList;
                var1 = {};
                var6 = true;
                var1.preserveScrollMomentum = var6;
                var9 = var1;
                var8 = var5;
                var5 = copyDataProperties(var9, var8);
                var0 = var4.bind(var3)(var2, var1);
            case 129:
                return var0;
        }
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
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var6 = var5[var3];
    var6 = var4.bind(var0)(var6);
    var6 = var6.TABLE_ROW_CONTENT_HEIGHT;
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_HEIGHT;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_CONTENT_PADDING;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'hidden';
    var9.overflow = var10;
    var3.listItemContainer = var9;
    var9 = {};
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var9.backgroundColor = var12;
    var3.listItem = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9.borderTopLeftRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9.borderTopRightRadius = var12;
    var3.firstItem = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9.borderBottomLeftRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xl;
    var9.borderBottomRightRadius = var12;
    var3.lastItem = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.backgroundColor = var10;
    var10 = 16;
    var9.marginLeft = var10;
    var3.divider = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AppLauncherListEmptyState;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot12 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/options/choices/AppLauncherChoicesActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun108782: for (var _fun108782_ip = 0;;) switch (_fun108782_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.option;
                var _closure2_slot0 = var8;
                var18 = var0.initChoiceIndex;
                var15 = var0.onChoiceSelect;
                var _closure2_slot1 = var15;
                var4 = var0.onDismiss;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot11;
                var0 = var0.bind(var3)();
                var _closure2_slot2 = var0;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var2 = var1.bottom;
                var5 = _closure1_slot0;
                var1 = 12;
                var1 = var7[var1];
                var5 = var5.bind(var3)(var1);
                var1 = var5.isIOS;
                var1 = var1.bind(var5)();
                var16 = var2;
                if (var1) {
                    _fun108782_ip = 139;
                    continue _fun108782
                }
            case 131:
                var1 = _closure1_slot8;
                var16 = var2 + var1;
            case 139:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var5 = 13;
                var5 = var2[var5];
                var5 = var1.bind(var3)(var5);
                var5 = var5.bind(var3)();
                var10 = var5.width;
                var12 = _closure1_slot4;
                var7 = var12.useState;
                var5 = function() { // Environment: var14
                    var0 = _closure2_slot0;
                    var2 = var0.choices;
                    var1 = function arg0() {
                        _fun108784: for (var _fun108784_ip = 0;;) switch (_fun108784_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                if (!(var0 == var2)) {
                                    _fun108784_ip = 13;
                                    continue _fun108784
                                }
                            case 9:
                                var2 = new Array(0);
                            case 13:
                                var1 = var2.map;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var0 = {};
                                    var1 = arg0;
                                    var0.choice = var1;
                                    var1 = arg1;
                                    var0.originalIndex = var1;
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                        }
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var5 = var7.bind(var12)(var5);
                var17 = _closure1_slot3;
                var9 = 2;
                var5 = var17.bind(var3)(var5, var9);
                var7 = 0;
                var11 = var5[var7];
                _closure2_slot3 = var11;
                var13 = 1;
                var5 = var5[var13];
                _closure2_slot4 = var5;
                var5 = var12.useState;
                var5 = var5.bind(var12)(var18);
                var9 = var17.bind(var3)(var5, var9);
                var5 = var9[var7];
                _closure2_slot5 = var5;
                var9 = var9[var13];
                _closure2_slot6 = var9;
                var17 = var12.useCallback;
                var9 = var8.choices;
                var13 = new Array(1);
                var13[0] = var9;
                var9 = function(arg0) { // Environment: var14
                    _fun108786: for (var _fun108786_ip = 0;;) switch (_fun108786_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.queryChoice;
                            var2 = {};
                            var1 = arg0;
                            var2.query = var1;
                            var5 = _closure2_slot0;
                            var6 = var5.choices;
                            var5 = null;
                            if (!(var5 == var6)) {
                                _fun108786_ip = 64;
                                continue _fun108786
                            }
                        case 60:
                            var6 = new Array(0);
                        case 64:
                            var2.choices = var6;
                            var2.limit = var5;
                            var2 = var3.bind(var4)(var2);
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var19 = var17.bind(var12)(var9, var13);
                var13 = var12.useCallback;
                var9 = new Array(4);
                var9[0] = var15;
                var9[1] = var5;
                var9[2] = var0;
                var9[3] = var11;
                var5 = function(arg0) { // Environment: var14
                    _fun108787: for (var _fun108787_ip = 0;;) switch (_fun108787_ip) {
                        case 0:
                            var0 = arg0;
                            var10 = var0.item;
                            var _closure3_slot0 = var10;
                            var12 = var0.index;
                            var1 = _closure2_slot3;
                            var0 = null;
                            var5 = var0 != var1;
                            if (!var5) {
                                _fun108787_ip = 55;
                                continue _fun108787
                            }
                        case 35:
                            var0 = _closure2_slot3;
                            var1 = var0.length;
                            var0 = 1;
                            var0 = var1 - var0;
                            var5 = var12 === var0;
                        case 55:
                            var9 = _closure2_slot5;
                            var8 = var10.originalIndex;
                            var3 = _closure1_slot9;
                            var2 = _closure1_slot5;
                            var1 = {};
                            var4 = _closure2_slot2;
                            var6 = var4.listItemContainer;
                            var4 = new Array(3);
                            var4[0] = var6;
                            var6 = 0;
                            var6 = var6 === var12;
                            if (!var6) {
                                _fun108787_ip = 115;
                                continue _fun108787
                            }
                        case 105:
                            var12 = _closure2_slot2;
                            var6 = var12.firstItem;
                        case 115:
                            var4[1] = var6;
                            if (!var5) {
                                _fun108787_ip = 132;
                                continue _fun108787
                            }
                        case 122:
                            var6 = _closure2_slot2;
                            var5 = var6.lastItem;
                        case 132:
                            var4[2] = var5;
                            var1.style = var4;
                            var6 = _closure1_slot9;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 15;
                            var4 = var4[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4);
                            var5 = var4.FormRadioRow;
                            var4 = {};
                            var11 = _closure2_slot2;
                            var12 = var11.listItem;
                            var11 = new Array(1);
                            var11[0] = var12;
                            var4.style = var11;
                            var10 = var10.choice;
                            var10 = var10.displayName;
                            var4.label = var10;
                            var10 = 'right';
                            var4.align = var10;
                            var8 = var9 === var8;
                            var4.selected = var8;
                            var7 = function() {
                                var4 = _closure2_slot6;
                                var1 = _closure3_slot0;
                                var3 = var1.originalIndex;
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                var3 = _closure2_slot1;
                                var2 = var1.choice;
                                var1 = var1.originalIndex;
                                var1 = var3.bind(var0)(var2, var1);
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 16;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hideActionSheet;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var4.onPress = var7;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var13 = var13.bind(var12)(var5, var9);
                var9 = var12.useCallback;
                var0 = var0.divider;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var14
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.FormDivider;
                    var0 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.divider;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var9 = var9.bind(var12)(var0, var5);
                var0 = 17;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.bind(var3)();
                var0 = var8.choices;
                var1 = null;
                var15 = var1 != var0;
                if (!var15) {
                    _fun108782_ip = 421;
                    continue _fun108782
                }
            case 388:
                var0 = var8.choices;
                var5 = var1 == var0;
                var1 = undefined;
                if (var5) {
                    _fun108782_ip = 408;
                    continue _fun108782
                }
            case 403:
                var1 = var0.length;
            case 408:
                var0 = 5;
                if (!var2) {
                    _fun108782_ip = 417;
                    continue _fun108782
                }
            case 414:
                var0 = 10;
            case 417:
                var15 = var1 >= var0;
            case 421:
                var1 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 8;
                var0 = var17[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useFontScale;
                var0 = var0.bind(var2)();
                var2 = _closure1_slot7;
                var5 = global;
                var12 = var5.Math;
                var5 = var12.max;
                var18 = _closure1_slot6;
                var0 = var0 * var18;
                var0 = var0 - var18;
                var0 = var5.bind(var12)(var0, var7);
                var12 = var2 + var0;
                var5 = var11.length;
                var2 = _closure1_slot10;
                var0 = 18;
                var0 = var17[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.AppLauncherCommandOptionActionSheet;
                var0 = {};
                var0.option = var8;
                var0.startExpanded = var15;
                var0.onDismiss = var4;
                var0.scrollable = var15;
                var8 = var15;
                if (!var8) {
                    _fun108782_ip = 588;
                    continue _fun108782
                }
            case 545:
                var18 = _closure1_slot9;
                var17 = _closure1_slot0;
                var20 = _closure1_slot2;
                var4 = 10;
                var4 = var20[var4];
                var4 = var17.bind(var3)(var4);
                var17 = var4.AppLauncherListSearchBar;
                var4 = {};
                var4.onChange = var19;
                var8 = var18.bind(var3)(var17, var4);
            case 588:
                var4 = new Array(2);
                var4[0] = var8;
                if (!(var7 !== var5)) {
                    _fun108782_ip = 711;
                    continue _fun108782
                }
            case 600:
                var8 = _closure1_slot9;
                var7 = _closure1_slot13;
                var5 = {};
                var5.scrollable = var15;
                var15 = {};
                var15.paddingBottom = var16;
                var5.contentContainerStyle = var15;
                var15 = {};
                var15.bottom = var16;
                var5.scrollIndicatorInsets = var15;
                var14 = function arg0() {
                    var0 = arg0;
                    var1 = var0.choice;
                    var4 = var1.name;
                    var3 = var0.originalIndex;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var1 = '';
                    var0 = '_';
                    var0 = var2.bind(var1)(var4, var0, var3);
                    return var0;
                };
                var5.keyExtractor = var14;
                var5.data = var11;
                var5.renderItem = var13;
                var5.ItemSeparatorComponent = var9;
                var9 = 'radiogroup';
                var5.accessibilityRole = var9;
                var5.estimatedItemSize = var12;
                var9 = {};
                var11 = var11.length;
                var11 = var12 * var11;
                var9.height = var11;
                var9.width = var10;
                var5.estimatedListSize = var9;
                var5 = var8.bind(var3)(var7, var5);
                _fun108782_ip = 715;
                continue _fun108782;
            case 711:
                var5 = _closure1_slot12;
            case 715:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4846, 1468, 33, 1297, 671, 4096, 5812, 13806, 1568, 478, 1464, 5650, 5441, 3279, 7259, 13810, 2]);