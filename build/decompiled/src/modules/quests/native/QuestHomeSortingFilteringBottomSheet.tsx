// modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun83630: for (var _fun83630_ip = 0;;) switch (_fun83630_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.onConfirm;
                var14 = var0.onReset;
                var4 = var0.onLayout;
                var5 = var0.inline;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun83630_ip = 35;
                    continue _fun83630
                }
            case 33:
                var5 = false;
            case 35:
                var0 = _closure1_slot9;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                if (var5) {
                    _fun83630_ip = 84;
                    continue _fun83630
                }
            case 59:
                var6 = var10.footer;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var10.content;
                var5[1] = var6;
                _fun83630_ip = 90;
                continue _fun83630;
            case 84:
                var5 = var10.footerInline;
            case 90:
                var0.style = var5;
                var0.onLayout = var4;
                var6 = _closure1_slot7;
                var18 = _closure1_slot0;
                var19 = _closure1_slot2;
                var4 = 8;
                var4 = var19[var4];
                var4 = var18.bind(var3)(var4);
                var5 = var4.SafeAreaPaddingView;
                var4 = {};
                var7 = true;
                var4.bottom = var7;
                var9 = _closure1_slot8;
                var7 = 9;
                var7 = var19[var7];
                var7 = var18.bind(var3)(var7);
                var8 = var7.ButtonGroup;
                var7 = {};
                var11 = 'vertical';
                var7.direction = var11;
                var10 = var10.footerButtonGroup;
                var7.style = var10;
                var16 = _closure1_slot7;
                var11 = 10;
                var10 = var19[var11];
                var10 = var18.bind(var3)(var10);
                var13 = var10.Button;
                var10 = {
                    'size': 'lg',
                    'grow': true
                };
                var15 = 11;
                var20 = var19[var15];
                var20 = var18.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var19[var15];
                var20 = var18.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.i4jeWR;
                var20 = var21.bind(var22)(var20);
                var10.text = var20;
                var10.onPress = var17;
                var13 = var16.bind(var3)(var13, var10);
                var10 = new Array(2);
                var10[0] = var13;
                var13 = _closure1_slot7;
                var11 = var19[var11];
                var11 = var18.bind(var3)(var11);
                var12 = var11.Button;
                var11 = {
                    'size': 'lg',
                    'grow': true,
                    'text': null,
                    'onPress': null,
                    'variant': 'secondary'
                };
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.yBZMsQ;
                var15 = var16.bind(var17)(var15);
                var11.text = var15;
                var11.onPress = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[1] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestHomeSortMethods;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.ACTION_SHEET_BACKGROUND_COLOR;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var11 = 7;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var8.paddingHorizontal = var13;
    var3.content = var8;
    var8 = {
        'flex': 1,
        'minHeight': 0
    };
    var3.bodyContainer = var8;
    var8 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingTop = var11;
    var3.footerInline = var8;
    var8 = {};
    var8.backgroundColor = var10;
    var3.footer = var8;
    var8 = {};
    var8.paddingBottom = var9;
    var3.footerButtonGroup = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = new Array(0);
    var _closure1_slot10 = var3;
    var3 = function arg0, arg1() {
        _fun83631: for (var _fun83631_ip = 0;;) switch (_fun83631_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.group;
                var0 = var1.group;
                var0 = var3 === var0;
                if (!var0) {
                    _fun83631_ip = 39;
                    continue _fun83631
                }
            case 25:
                var2 = var2.filter;
                var1 = var1.filter;
                var0 = var2 === var1;
            case 39:
                return var0;
        }
    };
    var _closure1_slot11 = var3;
    var3 = 24;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83632: for (var _fun83632_ip = 0;;) switch (_fun83632_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.onSortMethodChange;
                var _closure2_slot0 = var7;
                var6 = var0.onFiltersChange;
                var _closure2_slot1 = var6;
                var2 = var0.initialSortMethod;
                var1 = var0.initialFilters;
                var0 = _closure1_slot9;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var20 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 12;
                var0 = var12[var0];
                var4 = var20.bind(var3)(var0);
                var0 = var4.useIsScreenReaderEnabled;
                var8 = var0.bind(var4)();
                var5 = _closure1_slot4;
                var0 = var5.useState;
                var0 = var0.bind(var5)(var2);
                var13 = _closure1_slot3;
                var11 = 2;
                var0 = var13.bind(var3)(var0, var11);
                var4 = 0;
                var23 = var0[var4];
                var _closure2_slot2 = var23;
                var2 = 1;
                var21 = var0[var2];
                var _closure2_slot3 = var21;
                var0 = var5.useState;
                var0 = var0.bind(var5)(var1);
                var1 = var13.bind(var3)(var0, var11);
                var0 = var1[var4];
                var _closure2_slot4 = var0;
                var1 = var1[var2];
                var _closure2_slot5 = var1;
                var1 = var5.useState;
                var1 = var1.bind(var5)(var4);
                var1 = var13.bind(var3)(var1, var11);
                var15 = var1[var4];
                var1 = var1[var2];
                var _closure2_slot6 = var1;
                var1 = var5.useRef;
                var4 = null;
                var26 = var1.bind(var5)(var4);
                var _closure2_slot7 = var26;
                var11 = var5.useCallback;
                var2 = function(arg0) { // Environment: var16
                    var2 = _closure2_slot6;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var11 = var11.bind(var5)(var2, var1);
                var13 = var5.useCallback;
                var2 = function(arg0, arg1) { // Environment: var16
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var2 = _closure2_slot5;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        _fun83635: for (var _fun83635_ip = 0;;) switch (_fun83635_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = _closure3_slot1;
                                if (var0) {
                                    _fun83635_ip = 34;
                                    continue _fun83635
                                }
                            case 13:
                                var1 = var4.filter;
                                var0 = function(arg0) { // Environment: var0
                                    var3 = _closure1_slot11;
                                    var2 = _closure3_slot0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var0, var2);
                                    var0 = !var0;
                                    return var0;
                                };
                                var0 = var1.bind(var4)(var0);
                                _fun83635_ip = 69;
                                continue _fun83635;
                            case 34:
                                var1 = new Array(1);
                                var5 = 0;
                                var7 = var1;
                                var6 = var4;
                                var3 = arraySpread(var7, var6, var5);
                                var2 = _closure3_slot0;
                                var1[var3] = var2;
                                var2 = 1;
                                var2 = var3 + var2;
                                var0 = var1;
                            case 69:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var13.bind(var5)(var2, var1);
                var _closure2_slot8 = var1;
                var13 = var5.useCallback;
                var2 = function() { // Environment: var16
                    _fun83637: for (var _fun83637_ip = 0;;) switch (_fun83637_ip) {
                        case 0:
                            var4 = _closure2_slot3;
                            var0 = _closure1_slot6;
                            var3 = var0.SUGGESTED;
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var4 = _closure2_slot5;
                            var3 = _closure1_slot10;
                            var3 = var4.bind(var0)(var3);
                            var2 = _closure2_slot7;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun83637_ip = 76;
                                continue _fun83637
                            }
                        case 55:
                            var2 = var3.setValue;
                            var1 = _closure1_slot6;
                            var1 = var1.SUGGESTED;
                            var1 = var2.bind(var3)(var1);
                        case 76:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var13 = var13.bind(var5)(var2, var1);
                var2 = var5.useCallback;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var23;
                var1[3] = var0;
                var0 = function() { // Environment: var16
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot4;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.hideActionSheet;
                    var1 = 'QuestHomeSortingFilteringBottomSheet';
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var14 = var2.bind(var5)(var0, var1);
                var0 = 14;
                var1 = var12[var0];
                var2 = var20.bind(var3)(var1);
                var1 = var2.useQuestHomeSortOptions;
                var22 = var1.bind(var2)();
                var0 = var12[var0];
                var1 = var20.bind(var3)(var0);
                var0 = var1.useQuestHomeFilterOptions;
                var18 = var0.bind(var1)();
                var2 = _closure1_slot7;
                var0 = 15;
                var0 = var12[var0];
                var0 = var20.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var7 = _closure1_slot7;
                var5 = 16;
                var5 = var12[var5];
                var5 = var20.bind(var3)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var25 = 11;
                var17 = var12[var25];
                var17 = var20.bind(var3)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var12 = var12[var25];
                var12 = var20.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.UdhTtk;
                var12 = var17.bind(var19)(var12);
                var5.title = var12;
                var5 = var7.bind(var3)(var6, var5);
                var0.header = var5;
                if (var8) {
                    _fun83632_ip = 496;
                    continue _fun83632
                }
            case 465:
                var7 = _closure1_slot7;
                var6 = _closure1_slot12;
                var5 = {};
                var5.onConfirm = var14;
                var5.onReset = var13;
                var5.onLayout = var11;
                var4 = var7.bind(var3)(var6, var5);
            case 496:
                var0.footer = var4;
                var12 = true;
                var0.scrollable = var12;
                var0.startExpanded = var12;
                var6 = _closure1_slot8;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 17;
                var4 = var7[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var7 = undefined;
                if (var8) {
                    _fun83632_ip = 560;
                    continue _fun83632
                }
            case 550:
                var11 = {};
                var11.paddingBottom = var15;
                var7 = var11;
            case 560:
                var4.contentContainerStyle = var7;
                var11 = var10.content;
                var7 = new Array(2);
                var7[0] = var11;
                var10 = var10.bodyContainer;
                var7[1] = var10;
                var4.style = var7;
                var11 = _closure1_slot8;
                var24 = _closure1_slot0;
                var20 = _closure1_slot2;
                var7 = 18;
                var7 = var20[var7];
                var7 = var24.bind(var3)(var7);
                var10 = var7.Stack;
                var7 = {};
                var17 = _closure1_slot1;
                var15 = 7;
                var15 = var20[var15];
                var15 = var17.bind(var3)(var15);
                var15 = var15.spacing;
                var15 = var15.PX_32;
                var7.spacing = var15;
                var19 = _closure1_slot7;
                var15 = 19;
                var15 = var20[var15];
                var15 = var24.bind(var3)(var15);
                var17 = var15.TableRadioGroup;
                var15 = {};
                var15.groupRef = var26;
                var26 = false;
                var15.hasIcons = var26;
                var15.defaultValue = var23;
                var15.onChange = var21;
                var21 = var20[var25];
                var21 = var24.bind(var3)(var21);
                var23 = var21.intl;
                var21 = var23.string;
                var20 = var20[var25];
                var20 = var24.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.tZXJIS;
                var20 = var21.bind(var23)(var20);
                var15.title = var20;
                var21 = var22.map;
                var20 = function(arg0, arg1) { // Environment: var16
                    var0 = arg0;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRadioRow;
                    var1 = {};
                    var5 = var0.label;
                    var1.label = var5;
                    var0 = var0.value;
                    var1.value = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var20 = var21.bind(var22)(var20);
                var15.children = var20;
                var17 = var19.bind(var3)(var17, var15);
                var15 = new Array(2);
                var15[0] = var17;
                var17 = var18.map;
                var16 = function(arg0, arg1) { // Environment: var16
                    var0 = arg0;
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRowGroup;
                    var1 = {};
                    var5 = var0.heading;
                    var1.title = var5;
                    var6 = var0.options;
                    var5 = var6.map;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var5 = arg0;
                        var _closure4_slot0 = var5;
                        var4 = _closure1_slot7;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 22;
                        var1 = var8[var1];
                        var3 = undefined;
                        var1 = var7.bind(var3)(var1);
                        var2 = var1.TableCheckboxRow;
                        var1 = {};
                        var6 = 23;
                        var6 = var8[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.getFilterTypeText;
                        var5 = var5.filter;
                        var5 = var6.bind(var7)(var5);
                        var1.label = var5;
                        var5 = function arg0() {
                            var3 = _closure2_slot8;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var2, var0);
                            return var0;
                        };
                        var1.onPress = var5;
                        var6 = _closure2_slot4;
                        var5 = var6.some;
                        var0 = function(arg0) { // Environment: var0
                            var3 = _closure1_slot11;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var3.bind(var1)(var0, var2);
                            return var0;
                        };
                        var0 = var5.bind(var6)(var0);
                        var1.checked = var0;
                        var0 = arg1;
                        var0 = var4.bind(var3)(var2, var1, var0);
                        return var0;
                    };
                    var0 = var5.bind(var6)(var0);
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var16 = var17.bind(var18)(var16);
                var15[1] = var16;
                var7.children = var15;
                var10 = var11.bind(var3)(var10, var7);
                var7 = new Array(2);
                var7[0] = var10;
                if (!var8) {
                    _fun83632_ip = 859;
                    continue _fun83632
                }
            case 828:
                var11 = _closure1_slot7;
                var10 = _closure1_slot12;
                var9 = {};
                var9.onConfirm = var14;
                var9.onReset = var13;
                var9.inline = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 859:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5287, 4939, 33, 1297, 671, 4741, 6518, 4090, 1235, 4076, 3282, 5372, 4938, 5267, 4940, 4086, 5482, 5481, 5423, 8848, 5350, 2]);