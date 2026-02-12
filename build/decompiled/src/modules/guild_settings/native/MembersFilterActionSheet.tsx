// modules/guild_settings/native/MembersFilterActionSheet.tsx
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
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var14 = 4;
    var3 = var5[var14];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {
        'marginVertical': 8,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var3 = 8;
    var12 = 7;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var11.borderRadius = var15;
    var6.listView = var11;
    var11 = {};
    var15 = 12;
    var11.marginHorizontal = var15;
    var6.listViewRedesign = var11;
    var11 = {};
    var11.marginEnd = var14;
    var6.roleDot = var11;
    var11 = {};
    var14 = 'row';
    var11.flexDirection = var14;
    var6.labelContainer = var11;
    var11 = {};
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var11.color = var12;
    var6.label = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot10 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.FormDivider;
    var3 = {};
    var3.outer = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/MembersFilterActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun105567: for (var _fun105567_ip = 0;;) switch (_fun105567_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var _closure2_slot0 = var1;
                var2 = var0.selectedRoleId;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun105567_ip = 49;
                    continue _fun105567
                }
            case 26:
                var4 = _closure1_slot7;
                var1 = var4.getProps;
                var1 = var1.bind(var4)();
                var2 = var1.selectedRoleId;
            case 49:
                var _closure2_slot1 = var2;
                var4 = var0.onFilterRoleId;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var0 = _closure1_slot10;
                var10 = var0.bind(var3)();
                _closure2_slot3 = var10;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 9;
                var5 = var13[var0];
                var11 = var7.bind(var3)(var5);
                var8 = var11.useStateFromStores;
                var5 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var9
                    var2 = _closure1_slot6;
                    var1 = var2.getSortedRoles;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var11)(var6, var5);
                var6 = var8.map;
                var5 = function(arg0) { // Environment: var9
                    var1 = arg0;
                    var0 = {};
                    var2 = var1.id;
                    var0.value = var2;
                    var4 = var0;
                    var3 = var1;
                    var1 = copyDataProperties(var4, var3);
                    return var0;
                };
                var12 = var6.bind(var8)(var5);
                var5 = var12.length;
                var11 = 1;
                var8 = var5 - var11;
                var6 = var12.unshift;
                var5 = var12.splice;
                var8 = var5.bind(var12)(var8, var11);
                var5 = 0;
                var5 = var8[var5];
                var5 = var6.bind(var12)(var5);
                var6 = _closure1_slot3;
                var8 = var6.useCallback;
                var5 = new Array(2);
                var5[0] = var4;
                var5[1] = var2;
                var4 = function(arg0) { // Environment: var9
                    _fun105570: for (var _fun105570_ip = 0;;) switch (_fun105570_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot1;
                            if (!(var2 !== var1)) {
                                _fun105570_ip = 115;
                                continue _fun105570
                            }
                        case 14:
                            var3 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun105570_ip = 62;
                                continue _fun105570
                            }
                        case 24:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 10;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var1 = var3.selectRole;
                            var1 = var1.bind(var3)(var2);
                            _fun105570_ip = 73;
                            continue _fun105570;
                        case 62:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 73:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var0 = 'MembersFilter';
                            var0 = var1.bind(var2)(var0);
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var14 = var8.bind(var6)(var4, var5);
                _closure2_slot4 = var14;
                var0 = var13[var0];
                var8 = var7.bind(var3)(var0);
                var5 = var8.useStateFromStores;
                var0 = _closure1_slot5;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var9
                    var0 = _closure1_slot5;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var8 = var5.bind(var8)(var4, var0);
                _closure2_slot5 = var8;
                var5 = var6.useContext;
                var0 = 12;
                var4 = var13[var0];
                var4 = var7.bind(var3)(var4);
                var4 = var4.RedesignCompatContext;
                var11 = var5.bind(var6)(var4);
                var5 = var6.useCallback;
                var4 = new Array(4);
                var4[0] = var14;
                var4[1] = var8;
                var4[2] = var2;
                var4[3] = var10;
                var2 = function(arg0) { // Environment: var9
                    _fun105572: for (var _fun105572_ip = 0;;) switch (_fun105572_ip) {
                        case 0:
                            var0 = arg0;
                            var12 = var0.item;
                            var _closure3_slot0 = var12;
                            var3 = _closure1_slot9;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var7 = _closure1_slot8;
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var13 = 8;
                            var4 = var0[var13];
                            var0 = undefined;
                            var4 = var6.bind(var0)(var4);
                            var6 = var4.FormRow;
                            var4 = {};
                            var9 = {};
                            var10 = _closure2_slot3;
                            var10 = var10.labelContainer;
                            var9.style = var10;
                            var14 = _closure2_slot5;
                            var10 = 'dot';
                            var14 = var10 === var14;
                            if (!var14) {
                                _fun105572_ip = 107;
                                continue _fun105572
                            }
                        case 95:
                            var15 = var12.colorString;
                            var10 = null;
                            var14 = var10 != var15;
                        case 107:
                            if (!var14) {
                                _fun105572_ip = 183;
                                continue _fun105572
                            }
                        case 110:
                            var16 = _closure1_slot8;
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var10 = 13;
                            var10 = var17[var10];
                            var10 = var15.bind(var0)(var10);
                            var15 = var10.RoleDot;
                            var10 = {};
                            var17 = _closure2_slot3;
                            var17 = var17.roleDot;
                            var10.containerStyles = var17;
                            var17 = var12.colorString;
                            var10.color = var17;
                            var17 = var12.colorStrings;
                            var10.colors = var17;
                            var14 = var16.bind(var0)(var15, var10);
                        case 183:
                            var10 = new Array(2);
                            var10[0] = var14;
                            var16 = _closure1_slot8;
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var14 = 14;
                            var14 = var17[var14];
                            var14 = var15.bind(var0)(var14);
                            var15 = var14.Text;
                            var14 = {};
                            var17 = 'text-md/medium';
                            var14.variant = var17;
                            var17 = _closure2_slot3;
                            var18 = var17.label;
                            var17 = new Array(2);
                            var17[0] = var18;
                            var18 = var12.colorString;
                            var21 = null;
                            var19 = var21 != var18;
                            var18 = null;
                            if (!var19) {
                                _fun105572_ip = 293;
                                continue _fun105572
                            }
                        case 264:
                            var20 = _closure2_slot5;
                            var19 = 'username';
                            var18 = null;
                            if (!(var19 === var20)) {
                                _fun105572_ip = 293;
                                continue _fun105572
                            }
                        case 278:
                            var19 = {};
                            var20 = var12.colorString;
                            var19.color = var20;
                            var18 = var19;
                        case 293:
                            var17[1] = var18;
                            var14.style = var17;
                            var17 = var12.name;
                            var14.children = var17;
                            var14 = var16.bind(var0)(var15, var14);
                            var10[1] = var14;
                            var9.children = var10;
                            var9 = var3.bind(var0)(var2, var9);
                            var4.label = var9;
                            var8 = function() {
                                var2 = _closure2_slot4;
                                var0 = _closure3_slot0;
                                var1 = var0.id;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4.onPress = var8;
                            var10 = _closure1_slot8;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var13];
                            var8 = var9.bind(var0)(var8);
                            var8 = var8.FormRow;
                            var9 = var8.Radio;
                            var8 = {};
                            var12 = var12.id;
                            var11 = _closure2_slot1;
                            var11 = var12 === var11;
                            var8.selected = var11;
                            var8 = var10.bind(var0)(var9, var8);
                            var4.trailing = var8;
                            var6 = var7.bind(var0)(var6, var4);
                            var4 = new Array(2);
                            var4[0] = var6;
                            var5 = _closure1_slot11;
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var8 = var5.bind(var6)(var2, var4);
                var2 = _closure1_slot8;
                var0 = var13[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.RedesignCompat;
                var0 = {};
                var4 = 15;
                var4 = var13[var4];
                var4 = var7.bind(var3)(var4);
                var5 = var4.ActionSheet;
                var4 = {};
                var6 = true;
                var4.scrollable = var6;
                var6 = 16;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var14 = var6.BottomSheetTitleHeader;
                var6 = {};
                var15 = 17;
                var16 = var13[var15];
                var16 = var7.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var13[var15];
                var15 = var7.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.pEasFX;
                var15 = var16.bind(var17)(var15);
                var6.title = var15;
                var6 = var2.bind(var3)(var14, var6);
                var4.header = var6;
                var6 = 18;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.BottomSheetFlatList;
                var6 = {};
                var6.data = var12;
                var9 = function arg0() {
                    var0 = arg0;
                    var0 = var0.id;
                    return var0;
                };
                var6.keyExtractor = var9;
                var6.renderItem = var8;
                var9 = var10.listView;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = undefined;
                if (!var11) {
                    _fun105567_ip = 541;
                    continue _fun105567
                }
            case 535:
                var9 = var10.listViewRedesign;
            case 541:
                var8[1] = var9;
                var6.contentContainerStyle = var8;
                var8 = 10;
                var6.initialNumToRender = var8;
                var8 = false;
                var6.removeClippedSubviews = var8;
                var6 = var2.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1676, 8285, 33, 1297, 671, 5441, 566, 8284, 3279, 4875, 8325, 3938, 5232, 5237, 1234, 4909, 2]);