// modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var14 = 1;
    var6 = var5[var14];
    var3 = metroImportAll;
    var9 = var3.bind(var0)(var6);
    var _closure1_slot4 = var9;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var8 = var3.jsxs;
    var _closure1_slot8 = var8;
    var3 = 5;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var6 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = 6;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var11.backgroundColor = var15;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var11.paddingTop = var15;
    var11.flex = var14;
    var3.container = var11;
    var11 = {};
    var11.flex = var14;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11.paddingHorizontal = var14;
    var3.list = var11;
    var11 = {};
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11.paddingHorizontal = var14;
    var3.search = var11;
    var11 = {};
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11.paddingHorizontal = var14;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var11.paddingBottom = var14;
    var3.section = var11;
    var11 = {
        'backgroundColor': null,
        'verticalAlign': 'middle',
        'flexDirection': 'row',
        'alignItems': 'center',
        'flex': 1
    };
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var11.backgroundColor = var14;
    var3.sectionHeader = var11;
    var11 = {
        'marginVertical': null,
        'justifyContent': 'center',
        'alignItems': 'center',
        'flex': 1
    };
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var11.marginVertical = var12;
    var3.emptyState = var11;
    var3 = var6.bind(var10)(var3);
    var _closure1_slot9 = var3;
    var6 = var9.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.content;
        var8 = var0.start;
        var7 = var0.end;
        var1 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 7;
        var2 = var9[var2];
        var3 = undefined;
        var2 = var1.bind(var3)(var2);
        var2 = var2.DismissibleContent;
        var5 = var2[var4];
        var6 = _closure1_slot1;
        var2 = 8;
        var2 = var9[var2];
        var2 = var6.bind(var3)(var2);
        var2 = var2.bind(var3)(var5);
        var5 = var2.isDismissed;
        var6 = var2.handleToggleDismissState;
        var2 = _closure1_slot7;
        var0 = 9;
        var0 = var9[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TableSwitchRow;
        var0 = {};
        var0.start = var8;
        var0.end = var7;
        var0.onValueChange = var6;
        var0.value = var5;
        var0.label = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var9)(var3);
    var _closure1_slot10 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TableRowGroup;
    var3 = {};
    var9 = 'Bulk actions';
    var3.title = var9;
    var10 = 11;
    var9 = var5[var10];
    var9 = var4.bind(var0)(var9);
    var11 = var9.TableRow;
    var9 = {};
    var12 = 'Clear all dismissed dismissible contents';
    var9.label = var12;
    var13 = 12;
    var12 = var5[var13];
    var12 = var4.bind(var0)(var12);
    var12 = var12.clearDismissedContents;
    var9.onPress = var12;
    var12 = 13;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var14 = var12.TrashIcon;
    var12 = {};
    var12 = var7.bind(var0)(var14, var12);
    var9.icon = var12;
    var12 = 14;
    var14 = var5[var12];
    var14 = var4.bind(var0)(var14);
    var15 = var14.TableRowArrow;
    var14 = {};
    var14 = var7.bind(var0)(var15, var14);
    var9.trailing = var14;
    var11 = var7.bind(var0)(var11, var9);
    var9 = new Array(2);
    var9[0] = var11;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var11 = var10.TableRow;
    var10 = {};
    var14 = 'Dismiss all dismissible contents';
    var10.label = var14;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var13 = var13.checkAllDismissedContents;
    var10.onPress = var13;
    var13 = 15;
    var13 = var5[var13];
    var13 = var4.bind(var0)(var13);
    var14 = var13.DoubleCheckmarkIcon;
    var13 = {};
    var13 = var7.bind(var0)(var14, var13);
    var10.icon = var13;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var13 = var12.TableRowArrow;
    var12 = {};
    var12 = var7.bind(var0)(var13, var12);
    var10.trailing = var12;
    var10 = var7.bind(var0)(var11, var10);
    var9[1] = var10;
    var3.children = var9;
    var3 = var8.bind(var0)(var6, var3);
    var _closure1_slot11 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SearchEmpty;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot12 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/devtools/native/components/screens/DevToolsDismissableContentsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun85865: for (var _fun85865_ip = 0;;) switch (_fun85865_ip) {
            case 0:
                var0 = _closure1_slot9;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var _closure2_slot0 = var19;
                var1 = _closure1_slot1;
                var24 = _closure1_slot2;
                var0 = 17;
                var0 = var24[var0];
                var2 = var1.bind(var3)(var0);
                var0 = {};
                var9 = true;
                var0.includeKeyboardHeight = var9;
                var0 = var2.bind(var3)(var0);
                var10 = var0.insets;
                var0 = 18;
                var0 = var24[var0];
                var0 = var1.bind(var3)(var0);
                var18 = var0.bind(var3)();
                var0 = 19;
                var0 = var24[var0];
                var0 = var1.bind(var3)(var0);
                var11 = var0.bind(var3)();
                var20 = _closure1_slot0;
                var0 = 20;
                var0 = var24[var0];
                var4 = var20.bind(var3)(var0);
                var2 = var4.useLocalStorageState;
                var0 = 'devtools-dc-search';
                var22 = '';
                var0 = var2.bind(var4)(var0, var22);
                var8 = _closure1_slot3;
                var5 = 2;
                var0 = var8.bind(var3)(var0, var5);
                var7 = 0;
                var23 = var0[var7];
                var _closure2_slot1 = var23;
                var2 = 1;
                var0 = var0[var2];
                var _closure2_slot2 = var0;
                var4 = _closure1_slot4;
                var13 = var4.useCallback;
                var12 = function(arg0) { // Environment: var21
                    _fun85866: for (var _fun85866_ip = 0;;) switch (_fun85866_ip) {
                        case 0:
                            var11 = arg0;
                            var1 = new Array(0);
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 7;
                            var0 = var3[var0];
                            var5 = undefined;
                            var0 = var2.bind(var5)(var0);
                            var9 = var0.DismissibleContent;
                            var3 = global;
                            var2 = 21;
                            var0 = '';
                            var0 = var0 === var11;
                            for (var4 in var9)
                                case 59: {
                                    case 68: var13 = var4;
                                    var12 = var0;
                                    if (var12) {
                                        _fun85866_ip = 120;
                                        continue _fun85866
                                    }
                                    case 77: var15 = _closure1_slot1;
                                    var14 = _closure1_slot2;
                                    var14 = var14[var2];
                                    var16 = var15.bind(var5)(var14);
                                    var14 = var11.toLowerCase;
                                    var15 = var14.bind(var11)();
                                    var14 = var13.toLowerCase;
                                    var14 = var14.bind(var13)();
                                    var12 = var16.bind(var5)(var15, var14);
                                    case 120: if (!var12) {
                                        _fun85866_ip = 145;
                                        continue _fun85866
                                    }
                                    case 123: var15 = var3.isNaN;
                                    var14 = var3.Number;
                                    var14 = var14.bind(var5)(var13);
                                    var12 = var15.bind(var5)(var14);
                                    case 145: if (!var12) {
                                        _fun85866_ip = 59;
                                        continue _fun85866
                                    }
                                    case 148: var12 = var1.push;
                                    var12 = var12.bind(var1)(var13);
                                    _fun85866_ip = 59;
                                    continue _fun85866;
                                }
                        case 160:
                            var2 = var1.sort;
                            var0 = function(arg0, arg1) { // Environment: var0
                                var2 = arg0;
                                var1 = var2.localeCompare;
                                var0 = arg1;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0 = var2.bind(var1)(var0);
                            var0 = {};
                            var0.dismissableContent = var1;
                            var2 = var1.length;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.sections = var1;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var13.bind(var4)(var12, var0);
                var _closure2_slot3 = var0;
                var12 = var4.useState;
                var0 = function() { // Environment: var21
                    _fun85868: for (var _fun85868_ip = 0;;) switch (_fun85868_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var3 = _closure2_slot1;
                            var1 = null;
                            var3 = var1 != var3;
                            var1 = '';
                            if (!var3) {
                                _fun85868_ip = 28;
                                continue _fun85868
                            }
                        case 24:
                            var1 = _closure2_slot1;
                        case 28:
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = var12.bind(var4)(var0);
                var0 = var8.bind(var3)(var0, var5);
                var5 = var0[var7];
                var14 = var5.sections;
                var5 = var5.dismissableContent;
                var _closure2_slot4 = var5;
                var0 = var0[var2];
                var _closure2_slot5 = var0;
                var0 = 22;
                var0 = var24[var0];
                var12 = var20.bind(var3)(var0);
                var8 = var12.useStateFromStoresObject;
                var0 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var21
                    var0 = {};
                    var1 = _closure1_slot6;
                    var2 = var1.dailyCapOverridden;
                    var0.dailyCapOverridden = var2;
                    var1 = var1.newUserMinAgeRequiredOverridden;
                    var0.newUserMinAgeRequiredOverridden = var1;
                    return var0;
                };
                var0 = var8.bind(var12)(var2, var0);
                var30 = var0.dailyCapOverridden;
                var28 = var0.newUserMinAgeRequiredOverridden;
                var0 = 23;
                var0 = var24[var0];
                var0 = var1.bind(var3)(var0);
                var17 = var0.bind(var3)();
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function(arg0, arg1) { // Environment: var21
                    var4 = arg1;
                    var3 = _closure1_slot7;
                    var2 = _closure1_slot10;
                    var1 = {};
                    var0 = _closure2_slot4;
                    var5 = var0[var4];
                    var1.content = var5;
                    var5 = 0;
                    var5 = var5 === var4;
                    var1.start = var5;
                    var5 = var0.length;
                    var0 = 1;
                    var0 = var5 - var0;
                    var0 = var4 === var0;
                    var1.end = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var16 = var2.bind(var4)(var0, var1);
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var19;
                var0 = function() { // Environment: var21
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 24;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'style': null,
                        'variant': 'text-sm/semibold',
                        'color': 'text-default',
                        'children': 'Dismissible Contents'
                    };
                    var4 = _closure2_slot0;
                    var4 = var4.sectionHeader;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var15 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var19.container;
                var0.style = var4;
                var12 = _closure1_slot7;
                var4 = {};
                var8 = var19.section;
                var4.style = var8;
                var8 = 10;
                var8 = var24[var8];
                var8 = var20.bind(var3)(var8);
                var13 = var8.TableRowGroup;
                var8 = {};
                var25 = 'Global Overrides';
                var8.title = var25;
                var26 = 9;
                var25 = var24[var26];
                var25 = var20.bind(var3)(var25);
                var27 = var25.TableSwitchRow;
                var25 = {};
                var29 = 25;
                var31 = var24[var29];
                var31 = var20.bind(var3)(var31);
                var31 = var31.overrideDismissibleContentFramework;
                var25.onValueChange = var31;
                var25.value = var30;
                var30 = 'Daily limit';
                var25.label = var30;
                var30 = 'When enabled, bypass the daily limit of dismissible content shown';
                var25.subLabel = var30;
                var27 = var12.bind(var3)(var27, var25);
                var25 = new Array(2);
                var25[0] = var27;
                var26 = var24[var26];
                var26 = var20.bind(var3)(var26);
                var27 = var26.TableSwitchRow;
                var26 = {};
                var29 = var24[var29];
                var29 = var20.bind(var3)(var29);
                var29 = var29.overrideNewUserMinAgeRequired;
                var26.onValueChange = var29;
                var26.value = var28;
                var28 = 'New user account minimum age';
                var26.label = var28;
                var28 = 'When enabled, bypass the minimum age requirement for new user accounts';
                var26.subLabel = var28;
                var26 = var12.bind(var3)(var27, var26);
                var25[1] = var26;
                var8.children = var25;
                var8 = var2.bind(var3)(var13, var8);
                var4.children = var8;
                var8 = var12.bind(var3)(var1, var4);
                var4 = new Array(4);
                var4[0] = var8;
                var8 = {};
                var13 = var19.section;
                var8.style = var13;
                var13 = _closure1_slot11;
                var8.children = var13;
                var8 = var12.bind(var3)(var1, var8);
                var4[1] = var8;
                var8 = {};
                var13 = var19.search;
                var8.style = var13;
                var13 = 26;
                var13 = var24[var13];
                var13 = var20.bind(var3)(var13);
                var20 = var13.SearchField;
                var13 = {};
                var24 = 'md';
                var13.size = var24;
                var24 = null;
                var24 = var24 != var23;
                if (!var24) {
                    _fun85865_ip = 694;
                    continue _fun85865
                }
            case 691:
                var22 = var23;
            case 694:
                var13.defaultValue = var22;
                var21 = function arg0() {
                    var3 = arg0;
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var2 = var2.bind(var0)(var3);
                    var2 = _closure2_slot5;
                    var1 = _closure2_slot3;
                    var1 = var1.bind(var0)(var3);
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13.onChange = var21;
                var13 = var12.bind(var3)(var20, var13);
                var8.children = var13;
                var8 = var12.bind(var3)(var1, var8);
                var4[2] = var8;
                var5 = var5.length;
                if (!(!(var5 > var7))) {
                    _fun85865_ip = 878;
                    continue _fun85865
                }
            case 743:
                var8 = _closure1_slot8;
                var7 = _closure1_slot5;
                var5 = {};
                var12 = var19.emptyState;
                var5.style = var12;
                var20 = _closure1_slot7;
                var13 = _closure1_slot0;
                var24 = _closure1_slot2;
                var12 = 24;
                var12 = var24[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {
                    'style': null,
                    'variant': 'heading-lg/semibold',
                    'children': 'No results found'
                };
                var21 = {};
                var23 = _closure1_slot1;
                var22 = 6;
                var22 = var24[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.spacing;
                var22 = var22.PX_16;
                var21.marginBottom = var22;
                var12.style = var21;
                var13 = var20.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var13 = _closure1_slot12;
                var12[1] = var13;
                var5.children = var12;
                var5 = var8.bind(var3)(var7, var5);
                _fun85865_ip = 1000;
                continue _fun85865;
            case 878:
                var8 = _closure1_slot7;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var6 = 27;
                var6 = var13[var6];
                var7 = var12.bind(var3)(var6);
                var6 = {};
                var19 = var19.list;
                var6.style = var19;
                var19 = 'windowSize';
                var6.estimatedListSize = var19;
                var6.itemSize = var18;
                var6.placeholderConfig = var17;
                var6.renderItem = var16;
                var6.renderSectionHeader = var15;
                var6.sections = var14;
                var6.sectionHeaderSize = var11;
                var11 = var10.bottom;
                var10 = 6;
                var10 = var13[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_16;
                var10 = var11 + var10;
                var6.insetEnd = var10;
                var6.wrapChildren = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1000:
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1362, 33, 1297, 671, 1358, 11038, 5344, 5343, 4876, 1355, 3270, 4884, 11040, 9323, 4871, 7886, 8912, 11042, 5661, 566, 8911, 3938, 11039, 7107, 7889, 2]);