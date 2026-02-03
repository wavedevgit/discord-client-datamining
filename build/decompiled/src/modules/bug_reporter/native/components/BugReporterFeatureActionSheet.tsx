// modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingHorizontal = var12;
    var3.list = var9;
    var9 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.paddingHorizontal = var12;
    var3.searchBar = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var10;
    var10 = 'center';
    var9.justifyContent = var10;
    var3.sectionHeader = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var6 = var0.title;
        var8 = var0.height;
        var0 = _closure1_slot8;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var7 = var5.sectionHeader;
        var5 = new Array(2);
        var5[0] = var7;
        var7 = {};
        var7.height = var8;
        var5[1] = var7;
        var0.style = var5;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 6;
        var4 = var7[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {
            'variant': 'text-sm/bold',
            'color': 'text-muted'
        };
        var4.children = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var9 = var0.item;
        var _closure2_slot0 = var9;
        var6 = var0.feature;
        var1 = var0.setFeature;
        var _closure2_slot1 = var1;
        var11 = var0.start;
        var10 = var0.end;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 7;
        var2 = var8[var1];
        var3 = undefined;
        var7 = var5.bind(var3)(var2);
        var2 = var7.getFeatureId;
        var7 = var2.bind(var7)(var9);
        var1 = var8[var1];
        var2 = var5.bind(var3)(var1);
        var1 = var2.getFeatureId;
        var6 = var1.bind(var2)(var6);
        var2 = _closure1_slot6;
        var0 = 8;
        var0 = var8[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.TableRow;
        var0 = {};
        var0.start = var11;
        var0.end = var10;
        var9 = var9.name;
        var0.label = var9;
        var4 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.hideActionSheet;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.onPress = var4;
        var4 = 10;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.FormRadio;
        var4 = {};
        var6 = var7 === var6;
        var4.selected = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.trailing = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = arg0;
        var9 = var2.features;
        var _closure2_slot0 = var9;
        var1 = var2.feature;
        var _closure2_slot1 = var1;
        var12 = var2.setFeature;
        var _closure2_slot2 = var12;
        var2 = _closure1_slot8;
        var3 = undefined;
        var17 = var2.bind(var3)();
        var5 = _closure1_slot4;
        var6 = var5.useState;
        var2 = '';
        var7 = var6.bind(var5)(var2);
        var6 = _closure1_slot3;
        var2 = 2;
        var7 = var6.bind(var3)(var7, var2);
        var2 = 0;
        var2 = var7[var2];
        var _closure2_slot3 = var2;
        var6 = 1;
        var19 = var7[var6];
        var10 = _closure1_slot1;
        var11 = _closure1_slot2;
        var6 = 11;
        var6 = var11[var6];
        var6 = var10.bind(var3)(var6);
        var6 = var6.bind(var3)();
        var8 = var6.insets;
        var7 = var5.useMemo;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var2;
        var2 = function() { // Environment: var0
            var3 = _closure2_slot0;
            var1 = var3.filter;
            var0 = function(arg0) { // Environment: var2
                _fun76544: for (var _fun76544_ip = 0;;) switch (_fun76544_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = var6.asana_inbox_id;
                        var2 = null;
                        var0 = var2 != var0;
                        if (!var0) {
                            _fun76544_ip = 230;
                            continue _fun76544
                        }
                    case 21:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var1 = var5[var1];
                        var5 = undefined;
                        var8 = var3.bind(var5)(var1);
                        var7 = var8.isEmpty;
                        var1 = _closure2_slot3;
                        var1 = var7.bind(var8)(var1);
                        if (var1) {
                            _fun76544_ip = 145;
                            continue _fun76544
                        }
                    case 67:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 13;
                        var7 = var9[var7];
                        var9 = var8.bind(var5)(var7);
                        var8 = _closure2_slot3;
                        var7 = var8.toLowerCase;
                        var8 = var7.bind(var8)();
                        var11 = var6.name;
                        var7 = var2 == var11;
                        var10 = undefined;
                        if (var7) {
                            _fun76544_ip = 125;
                            continue _fun76544
                        }
                    case 115:
                        var7 = var11.toLowerCase;
                        var10 = var7.bind(var11)();
                    case 125:
                        var11 = var2 != var10;
                        var7 = '';
                        if (!var11) {
                            _fun76544_ip = 139;
                            continue _fun76544
                        }
                    case 136:
                        var7 = var10;
                    case 139:
                        var1 = var9.bind(var5)(var8, var7);
                    case 145:
                        if (var1) {
                            _fun76544_ip = 227;
                            continue _fun76544
                        }
                    case 148:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var4 = 13;
                        var4 = var8[var4];
                        var4 = var7.bind(var5)(var4);
                        var7 = _closure2_slot3;
                        var3 = var7.toLowerCase;
                        var3 = var3.bind(var7)();
                        var8 = var6.squad;
                        var7 = var2 == var8;
                        var6 = undefined;
                        if (var7) {
                            _fun76544_ip = 207;
                            continue _fun76544
                        }
                    case 197:
                        var7 = var8.toLowerCase;
                        var6 = var7.bind(var8)();
                    case 207:
                        var7 = var2 != var6;
                        var2 = '';
                        if (!var7) {
                            _fun76544_ip = 221;
                            continue _fun76544
                        }
                    case 218:
                        var2 = var6;
                    case 221:
                        var1 = var4.bind(var5)(var3, var2);
                    case 227:
                        var0 = var1;
                    case 230:
                        return var0;
                }
            };
            var6 = var1.bind(var3)(var0);
            var0 = global;
            var3 = var0.Object;
            var1 = var3.entries;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var0 = 12;
            var4 = var4[var0];
            var0 = undefined;
            var5 = var5.bind(var0)(var4);
            var4 = var5.groupBy;
            var0 = function(arg0) { // Environment: var2
                var0 = arg0;
                var0 = var0.squad;
                return var0;
            };
            var0 = var4.bind(var5)(var6, var0);
            var4 = var1.bind(var3)(var0);
            var1 = var4.map;
            var0 = function(arg0) { // Environment: var2
                _fun76546: for (var _fun76546_ip = 0;;) switch (_fun76546_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var0 = var3().value;
                        var0 = var1;
                        var5 = undefined;
                        var2 = var0 === var5;
                        var0 = undefined;
                        if (var2) {
                            _fun76546_ip = 49;
                            continue _fun76546
                        }
                    case 24:
                        var4 = var3().value;
                        var3 = var1;
                        var3 = var3 === var5;
                        var0 = undefined;
                        var2 = var3;
                        if (var3) {
                            _fun76546_ip = 49;
                            continue _fun76546
                        }
                    case 43:
                        var0 = var4;
                        var2 = var3;
                    case 49:
                        if (var2) {
                            _fun76546_ip = 55;
                            continue _fun76546
                        }
                    case 52:
                        var1.return();
                    case 55:
                        var0 = var0.length;
                        return var0;
                }
            };
            var1 = var1.bind(var4)(var0);
            var0 = {};
            var3 = var4.map;
            var2 = function(arg0) { // Environment: var2
                _fun76547: for (var _fun76547_ip = 0;;) switch (_fun76547_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = var4[Symbol.iterator];
                        var4 = var0().next;
                        var1 = var4().value;
                        var2 = var0;
                        var6 = undefined;
                        var3 = var2 === var6;
                        var2 = undefined;
                        if (var3) {
                            _fun76547_ip = 27;
                            continue _fun76547
                        }
                    case 24:
                        var2 = var1;
                    case 27:
                        var1 = undefined;
                        if (var3) {
                            _fun76547_ip = 57;
                            continue _fun76547
                        }
                    case 32:
                        var5 = var4().value;
                        var4 = var0;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if (var4) {
                            _fun76547_ip = 57;
                            continue _fun76547
                        }
                    case 51:
                        var1 = var5;
                        var3 = var4;
                    case 57:
                        if (var3) {
                            _fun76547_ip = 63;
                            continue _fun76547
                        }
                    case 60:
                        var0.return();
                    case 63:
                        var0 = {};
                        var0.title = var2;
                        var0.data = var1;
                        return var0;
                }
            };
            var2 = var3.bind(var4)(var2);
            var0.items = var2;
            var0.sections = var1;
            return var0;
        };
        var2 = var7.bind(var5)(var2, var6);
        var6 = var2.items;
        var _closure2_slot4 = var6;
        var15 = var2.sections;
        var2 = 14;
        var2 = var11[var2];
        var2 = var10.bind(var3)(var2);
        var14 = var2.bind(var3)();
        var2 = 15;
        var2 = var11[var2];
        var2 = var10.bind(var3)(var2);
        var9 = var2.bind(var3)();
        var _closure2_slot5 = var9;
        var7 = var5.useCallback;
        var2 = new Array(3);
        var2[0] = var6;
        var2[1] = var12;
        var2[2] = var1;
        var1 = function(arg0, arg1) { // Environment: var0
            var5 = arg0;
            var4 = arg1;
            var3 = _closure1_slot6;
            var2 = _closure1_slot10;
            var1 = {};
            var0 = _closure2_slot4;
            var7 = var0[var5];
            var7 = var7.data;
            var7 = var7[var4];
            var1.item = var7;
            var7 = _closure2_slot1;
            var1.feature = var7;
            var6 = _closure2_slot2;
            var1.setFeature = var6;
            var6 = 0;
            var6 = var6 === var4;
            var1.start = var6;
            var0 = var0[var5];
            var0 = var0.data;
            var5 = var0.length;
            var0 = 1;
            var0 = var5 - var0;
            var0 = var4 === var0;
            var1.end = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var13 = var7.bind(var5)(var1, var2);
        var2 = var5.useCallback;
        var1 = new Array(2);
        var1[0] = var9;
        var1[1] = var6;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot6;
            var2 = _closure1_slot9;
            var1 = {};
            var5 = _closure2_slot4;
            var4 = arg0;
            var4 = var5[var4];
            var4 = var4.title;
            var1.title = var4;
            var0 = _closure2_slot5;
            var1.height = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var12 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot7;
        var18 = _closure1_slot0;
        var0 = 16;
        var0 = var11[var0];
        var0 = var18.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {
            'scrollable': true,
            'startExpanded': true
        };
        var16 = true;
        var7 = _closure1_slot6;
        var5 = 17;
        var5 = var11[var5];
        var5 = var18.bind(var3)(var5);
        var6 = var5.BottomSheetTitleHeader;
        var5 = {};
        var20 = 18;
        var21 = var11[var20];
        var21 = var18.bind(var3)(var21);
        var22 = var21.intl;
        var21 = var22.string;
        var20 = var11[var20];
        var20 = var18.bind(var3)(var20);
        var20 = var20.t;
        var20 = var20["77VVd8"];
        var20 = var21.bind(var22)(var20);
        var5.title = var20;
        var5 = var7.bind(var3)(var6, var5);
        var0.header = var5;
        var5 = _closure1_slot5;
        var4 = {};
        var6 = var17.searchBar;
        var4.style = var6;
        var6 = 19;
        var6 = var11[var6];
        var6 = var18.bind(var3)(var6);
        var18 = var6.SearchField;
        var6 = {};
        var20 = 'md';
        var6.size = var20;
        var6.onChange = var19;
        var6 = var7.bind(var3)(var18, var6);
        var4.children = var6;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 20;
        var5 = var11[var5];
        var6 = var10.bind(var3)(var5);
        var5 = {};
        var17 = var17.list;
        var5.style = var17;
        var5.inActionSheet = var16;
        var5.sections = var15;
        var5.itemSize = var14;
        var14 = 'windowSize';
        var5.estimatedListSize = var14;
        var5.renderItem = var13;
        var5.renderSectionHeader = var12;
        var5.sectionHeaderSize = var9;
        var9 = 5;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_16;
        var8 = var8.bottom;
        var8 = var9 + var8;
        var5.insetEnd = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 3932, 8806, 4893, 3269, 5418, 4888, 22, 5597, 7554, 9080, 4926, 5206, 1234, 7004, 7557, 2]);