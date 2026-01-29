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
    var3 = metroImportAll;
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
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var8.paddingHorizontal = var11;
    var3.content = var8;
    var8 = {
        'flex': 1,
        'minHeight': 0
    };
    var3.bodyContainer = var8;
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
    var3 = function(arg0, arg1) { // Original name: isFilterOptionEqual, environment: var1
        _fun82668: for (var _fun82668_ip = 0;;) switch (_fun82668_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.group;
                var0 = var1.group;
                var0 = var3 === var0;
                if (!var0) {
                    _fun82668_ip = 39;
                    continue _fun82668
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
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: QuestHomeSortingFilteringBottomSheet, environment: var1
        var0 = arg0;
        var8 = var0.onSortMethodChange;
        var _closure2_slot0 = var8;
        var6 = var0.onFiltersChange;
        var _closure2_slot1 = var6;
        var2 = var0.initialSortMethod;
        var1 = var0.initialFilters;
        var0 = _closure1_slot9;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var5 = _closure1_slot4;
        var0 = var5.useState;
        var0 = var0.bind(var5)(var2);
        var12 = _closure1_slot3;
        var11 = 2;
        var0 = var12.bind(var3)(var0, var11);
        var4 = 0;
        var16 = var0[var4];
        var _closure2_slot2 = var16;
        var2 = 1;
        var14 = var0[var2];
        var _closure2_slot3 = var14;
        var0 = var5.useState;
        var0 = var0.bind(var5)(var1);
        var1 = var12.bind(var3)(var0, var11);
        var0 = var1[var4];
        var _closure2_slot4 = var0;
        var1 = var1[var2];
        var _closure2_slot5 = var1;
        var1 = var5.useState;
        var1 = var1.bind(var5)(var4);
        var1 = var12.bind(var3)(var1, var11);
        var11 = var1[var4];
        var1 = var1[var2];
        var _closure2_slot6 = var1;
        var2 = var5.useRef;
        var1 = null;
        var19 = var2.bind(var5)(var1);
        var _closure2_slot7 = var19;
        var4 = var5.useCallback;
        var2 = function(arg0) { // Environment: var10
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
        var4 = var4.bind(var5)(var2, var1);
        var12 = var5.useCallback;
        var2 = function(arg0, arg1) { // Environment: var10
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = arg1;
            var _closure3_slot1 = var0;
            var2 = _closure2_slot5;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                _fun82672: for (var _fun82672_ip = 0;;) switch (_fun82672_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = _closure3_slot1;
                        if (var0) {
                            _fun82672_ip = 34;
                            continue _fun82672
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
                        _fun82672_ip = 69;
                        continue _fun82672;
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
        var1 = var12.bind(var5)(var2, var1);
        var _closure2_slot8 = var1;
        var12 = var5.useCallback;
        var2 = function() { // Environment: var10
            _fun82674: for (var _fun82674_ip = 0;;) switch (_fun82674_ip) {
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
                        _fun82674_ip = 76;
                        continue _fun82674
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
        var27 = var12.bind(var5)(var2, var1);
        var2 = var5.useCallback;
        var1 = new Array(4);
        var1[0] = var8;
        var1[1] = var6;
        var1[2] = var16;
        var1[3] = var0;
        var0 = function() { // Environment: var10
            var3 = _closure2_slot0;
            var2 = _closure2_slot2;
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var2 = _closure2_slot1;
            var1 = _closure2_slot4;
            var1 = var2.bind(var0)(var1);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.hideActionSheet;
            var1 = 'QuestHomeSortingFilteringBottomSheet';
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var28 = var2.bind(var5)(var0, var1);
        var17 = _closure1_slot0;
        var18 = _closure1_slot2;
        var0 = 9;
        var1 = var18[var0];
        var2 = var17.bind(var3)(var1);
        var1 = var2.useQuestHomeSortOptions;
        var15 = var1.bind(var2)();
        var0 = var18[var0];
        var1 = var17.bind(var3)(var0);
        var0 = var1.useQuestHomeFilterOptions;
        var12 = var0.bind(var1)();
        var2 = _closure1_slot7;
        var0 = 10;
        var0 = var18[var0];
        var0 = var17.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var5 = 11;
        var5 = var18[var5];
        var5 = var17.bind(var3)(var5);
        var6 = var5.BottomSheetTitleHeader;
        var5 = {};
        var13 = 12;
        var8 = var18[var13];
        var8 = var17.bind(var3)(var8);
        var21 = var8.intl;
        var20 = var21.string;
        var8 = var18[var13];
        var8 = var17.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.UdhTtk;
        var8 = var20.bind(var21)(var8);
        var5.title = var8;
        var5 = var2.bind(var3)(var6, var5);
        var0.header = var5;
        var6 = _closure1_slot5;
        var5 = {};
        var20 = var7.content;
        var8 = new Array(2);
        var8[0] = var20;
        var20 = var7.footer;
        var8[1] = var20;
        var5.style = var8;
        var5.onLayout = var4;
        var4 = 13;
        var4 = var18[var4];
        var4 = var17.bind(var3)(var4);
        var21 = var4.SafeAreaPaddingView;
        var20 = {};
        var4 = true;
        var20.bottom = var4;
        var8 = _closure1_slot8;
        var22 = 14;
        var22 = var18[var22];
        var22 = var17.bind(var3)(var22);
        var23 = var22.ButtonGroup;
        var22 = {};
        var24 = 'vertical';
        var22.direction = var24;
        var24 = var7.footerButtonGroup;
        var22.style = var24;
        var25 = 15;
        var24 = var18[var25];
        var24 = var17.bind(var3)(var24);
        var26 = var24.Button;
        var24 = {
            'size': 'lg',
            'grow': true
        };
        var29 = var18[var13];
        var29 = var17.bind(var3)(var29);
        var31 = var29.intl;
        var30 = var31.string;
        var29 = var18[var13];
        var29 = var17.bind(var3)(var29);
        var29 = var29.t;
        var29 = var29.i4jeWR;
        var29 = var30.bind(var31)(var29);
        var24.text = var29;
        var24.onPress = var28;
        var26 = var2.bind(var3)(var26, var24);
        var24 = new Array(2);
        var24[0] = var26;
        var25 = var18[var25];
        var25 = var17.bind(var3)(var25);
        var26 = var25.Button;
        var25 = {
            'size': 'lg',
            'grow': true,
            'text': null,
            'onPress': null,
            'variant': 'secondary'
        };
        var28 = var18[var13];
        var28 = var17.bind(var3)(var28);
        var30 = var28.intl;
        var29 = var30.string;
        var28 = var18[var13];
        var28 = var17.bind(var3)(var28);
        var28 = var28.t;
        var28 = var28.yBZMsQ;
        var28 = var29.bind(var30)(var28);
        var25.text = var28;
        var25.onPress = var27;
        var25 = var2.bind(var3)(var26, var25);
        var24[1] = var25;
        var22.children = var24;
        var22 = var8.bind(var3)(var23, var22);
        var20.children = var22;
        var20 = var2.bind(var3)(var21, var20);
        var5.children = var20;
        var5 = var2.bind(var3)(var6, var5);
        var0.footer = var5;
        var0.scrollable = var4;
        var0.startExpanded = var4;
        var4 = 16;
        var4 = var18[var4];
        var4 = var17.bind(var3)(var4);
        var5 = var4.BottomSheetScrollView;
        var4 = {};
        var6 = {};
        var6.paddingBottom = var11;
        var4.contentContainerStyle = var6;
        var11 = var7.content;
        var6 = new Array(2);
        var6[0] = var11;
        var7 = var7.bodyContainer;
        var6[1] = var7;
        var4.style = var6;
        var6 = 17;
        var6 = var18[var6];
        var6 = var17.bind(var3)(var6);
        var7 = var6.Stack;
        var6 = {};
        var11 = _closure1_slot1;
        var9 = 7;
        var9 = var18[var9];
        var9 = var11.bind(var3)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_32;
        var6.spacing = var9;
        var9 = 18;
        var9 = var18[var9];
        var9 = var17.bind(var3)(var9);
        var11 = var9.TableRadioGroup;
        var9 = {};
        var9.groupRef = var19;
        var19 = false;
        var9.hasIcons = var19;
        var9.defaultValue = var16;
        var9.onChange = var14;
        var14 = var18[var13];
        var14 = var17.bind(var3)(var14);
        var16 = var14.intl;
        var14 = var16.string;
        var13 = var18[var13];
        var13 = var17.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13.tZXJIS;
        var13 = var14.bind(var16)(var13);
        var9.title = var13;
        var14 = var15.map;
        var13 = function(arg0, arg1) { // Environment: var10
            var0 = arg0;
            var4 = _closure1_slot7;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
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
        var13 = var14.bind(var15)(var13);
        var9.children = var13;
        var11 = var2.bind(var3)(var11, var9);
        var9 = new Array(2);
        var9[0] = var11;
        var11 = var12.map;
        var10 = function(arg0, arg1) { // Environment: var10
            var0 = arg0;
            var4 = _closure1_slot7;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 20;
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
                var1 = 21;
                var1 = var8[var1];
                var3 = undefined;
                var1 = var7.bind(var3)(var1);
                var2 = var1.TableCheckboxRow;
                var1 = {};
                var6 = 22;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.getFilterTypeText;
                var5 = var5.filter;
                var5 = var6.bind(var7)(var5);
                var1.label = var5;
                var5 = function(arg0) { // Original name: onPress, environment: var0
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
        var10 = var11.bind(var12)(var10);
        var9[1] = var10;
        var6.children = var9;
        var6 = var8.bind(var3)(var7, var6);
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5184, 4888, 33, 1297, 671, 3237, 5268, 4887, 5167, 1234, 4690, 6401, 4037, 4889, 4033, 5379, 5378, 5320, 8728, 5245, 2]);