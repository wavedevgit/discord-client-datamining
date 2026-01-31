// modules/guild_settings/native/MembersFilterActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var11 = 4;
    var3 = var5[var11];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 7;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var3.background = var8;
    var8 = {
        'marginVertical': 8,
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var3.listView = var8;
    var8 = {};
    var12 = 12;
    var8.marginHorizontal = var12;
    var3.listViewRedesign = var8;
    var8 = {};
    var8.marginEnd = var11;
    var3.roleDot = var8;
    var8 = {};
    var11 = 'row';
    var8.flexDirection = var11;
    var3.labelContainer = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var9;
    var3.label = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/native/MembersFilterActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104900: for (var _fun104900_ip = 0;;) switch (_fun104900_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var _closure2_slot0 = var1;
                var2 = var0.selectedRoleId;
                var3 = undefined;
                if (!(var2 === var3)) {
                    _fun104900_ip = 49;
                    continue _fun104900
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
                var0 = 8;
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
                    _fun104903: for (var _fun104903_ip = 0;;) switch (_fun104903_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot1;
                            if (!(var2 !== var1)) {
                                _fun104903_ip = 115;
                                continue _fun104903
                            }
                        case 14:
                            var3 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 == var3)) {
                                _fun104903_ip = 62;
                                continue _fun104903
                            }
                        case 24:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var1 = var3.selectRole;
                            var1 = var1.bind(var3)(var2);
                            _fun104903_ip = 73;
                            continue _fun104903;
                        case 62:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 73:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
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
                var0 = 11;
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
                    _fun104905: for (var _fun104905_ip = 0;;) switch (_fun104905_ip) {
                        case 0:
                            var0 = arg0;
                            var14 = var0.item;
                            var _closure3_slot0 = var14;
                            var3 = _closure1_slot9;
                            var2 = _closure1_slot4;
                            var1 = {};
                            var10 = _closure1_slot8;
                            var7 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var8 = 12;
                            var4 = var0[var8];
                            var0 = undefined;
                            var4 = var7.bind(var0)(var4);
                            var9 = var4.FormRow;
                            var4 = {};
                            var7 = {};
                            var11 = _closure2_slot3;
                            var11 = var11.labelContainer;
                            var7.style = var11;
                            var12 = _closure2_slot5;
                            var11 = 'dot';
                            var12 = var11 === var12;
                            if (!var12) {
                                _fun104905_ip = 107;
                                continue _fun104905
                            }
                        case 95:
                            var15 = var14.colorString;
                            var11 = null;
                            var12 = var11 != var15;
                        case 107:
                            if (!var12) {
                                _fun104905_ip = 183;
                                continue _fun104905
                            }
                        case 110:
                            var16 = _closure1_slot8;
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var11 = 13;
                            var11 = var17[var11];
                            var11 = var15.bind(var0)(var11);
                            var15 = var11.RoleDot;
                            var11 = {};
                            var17 = _closure2_slot3;
                            var17 = var17.roleDot;
                            var11.containerStyles = var17;
                            var17 = var14.colorString;
                            var11.color = var17;
                            var17 = var14.colorStrings;
                            var11.colors = var17;
                            var12 = var16.bind(var0)(var15, var11);
                        case 183:
                            var11 = new Array(2);
                            var11[0] = var12;
                            var16 = _closure1_slot8;
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var12 = 14;
                            var12 = var17[var12];
                            var12 = var15.bind(var0)(var12);
                            var15 = var12.Text;
                            var12 = {};
                            var17 = 'text-md/medium';
                            var12.variant = var17;
                            var17 = _closure2_slot3;
                            var18 = var17.label;
                            var17 = new Array(2);
                            var17[0] = var18;
                            var18 = var14.colorString;
                            var21 = null;
                            var19 = var21 != var18;
                            var18 = null;
                            if (!var19) {
                                _fun104905_ip = 293;
                                continue _fun104905
                            }
                        case 264:
                            var20 = _closure2_slot5;
                            var19 = 'username';
                            var18 = null;
                            if (!(var19 === var20)) {
                                _fun104905_ip = 293;
                                continue _fun104905
                            }
                        case 278:
                            var19 = {};
                            var20 = var14.colorString;
                            var19.color = var20;
                            var18 = var19;
                        case 293:
                            var17[1] = var18;
                            var12.style = var17;
                            var17 = var14.name;
                            var12.children = var17;
                            var12 = var16.bind(var0)(var15, var12);
                            var11[1] = var12;
                            var7.children = var11;
                            var7 = var3.bind(var0)(var2, var7);
                            var4.label = var7;
                            var6 = function() {
                                var2 = _closure2_slot4;
                                var0 = _closure3_slot0;
                                var1 = var0.id;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var4.onPress = var6;
                            var7 = _closure1_slot8;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var11 = var5[var8];
                            var11 = var6.bind(var0)(var11);
                            var11 = var11.FormRow;
                            var12 = var11.Radio;
                            var11 = {};
                            var14 = var14.id;
                            var13 = _closure2_slot1;
                            var13 = var14 === var13;
                            var11.selected = var13;
                            var11 = var7.bind(var0)(var12, var11);
                            var4.trailing = var11;
                            var9 = var10.bind(var0)(var9, var4);
                            var4 = new Array(2);
                            var4[0] = var9;
                            var5 = var5[var8];
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.FormDivider;
                            var5 = {};
                            var8 = true;
                            var5.outer = var8;
                            var5 = var7.bind(var0)(var6, var5);
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
                    _fun104900_ip = 541;
                    continue _fun104900
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1665, 8115, 33, 1297, 671, 566, 8114, 3237, 4860, 5340, 8153, 3900, 5171, 5174, 1234, 4896, 2]);