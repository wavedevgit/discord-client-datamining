// modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var7 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.jsxs;
    var _closure1_slot8 = var6;
    var3 = var3.Fragment;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.list = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.label = var8;
    var8 = {};
    var9 = 8;
    var8.marginEnd = var9;
    var3.roleDot = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/instant_invite/native/action_sheet/invite_to_guilds/SelectInviteRolesActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.assignableRoles;
        var _closure2_slot0 = var9;
        var1 = var0.selectedRoleIds;
        var _closure2_slot1 = var1;
        var17 = var0.onSave;
        var _closure2_slot2 = var17;
        var4 = _closure1_slot10;
        var3 = undefined;
        var11 = var4.bind(var3)();
        var _closure2_slot3 = var11;
        var13 = _closure1_slot4;
        var5 = var13.useMemo;
        var4 = new Array(2);
        var4[0] = var9;
        var4[1] = var1;
        var1 = function() { // Environment: var2
            var1 = global;
            var4 = var1.Set;
            var5 = _closure2_slot0;
            var3 = var5.map;
            var2 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.id;
                return var0;
            };
            var6 = var3.bind(var5)(var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot0 = var2;
            var2 = _closure2_slot1;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.has;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var5.bind(var13)(var1, var4);
        var _closure2_slot4 = var4;
        var5 = var13.useState;
        var1 = function() { // Environment: var2
            var0 = global;
            var2 = var0.Set;
            var3 = _closure2_slot4;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var6 = var5.bind(var13)(var1);
        var5 = _closure1_slot3;
        var1 = 2;
        var5 = var5.bind(var3)(var6, var1);
        var1 = 0;
        var15 = var5[var1];
        var _closure2_slot5 = var15;
        var1 = 1;
        var1 = var5[var1];
        var _closure2_slot6 = var1;
        var1 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 6;
        var5 = var12[var5];
        var8 = var1.bind(var3)(var5);
        var7 = var8.useStateFromStores;
        var5 = _closure1_slot6;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() { // Environment: var2
            var0 = _closure1_slot6;
            var0 = var0.roleStyle;
            return var0;
        };
        var16 = var7.bind(var8)(var6, var5);
        var _closure2_slot7 = var16;
        var5 = _closure1_slot1;
        var6 = 7;
        var6 = var12[var6];
        var6 = var5.bind(var3)(var6);
        var7 = var6.bind(var3)();
        var6 = 8;
        var6 = var12[var6];
        var6 = var5.bind(var3)(var6);
        var10 = var6.bind(var3)();
        var14 = var13.useCallback;
        var8 = function(arg0) { // Environment: var2
            var0 = arg0;
            var _closure3_slot0 = var0;
            var2 = _closure2_slot6;
            var0 = undefined;
            var1 = function(arg0) { // Environment: var1
                _fun117854: for (var _fun117854_ip = 0;;) switch (_fun117854_ip) {
                    case 0:
                        var0 = global;
                        var2 = var0.Set;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = arg0;
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var3 = var0.delete;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var0)(var2);
                        if (var2) {
                            _fun117854_ip = 65;
                            continue _fun117854
                        }
                    case 51:
                        var2 = var0.add;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var0)(var1);
                    case 65:
                        return var0;
                }
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var6 = new Array(0);
        var14 = var14.bind(var13)(var8, var6);
        var _closure2_slot8 = var14;
        var8 = var13.useCallback;
        var6 = new Array(3);
        var6[0] = var17;
        var6[1] = var15;
        var6[2] = var4;
        var4 = function() { // Environment: var2
            _fun117855: for (var _fun117855_ip = 0;;) switch (_fun117855_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 9;
                    var1 = var5[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    var1 = global;
                    var6 = var1.Array;
                    var4 = var6.from;
                    var2 = _closure2_slot5;
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.sort;
                    var2 = var2.bind(var4)();
                    var4 = _closure1_slot0;
                    var3 = 10;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.isEqual;
                    var9 = _closure2_slot4;
                    var6 = new Array(0);
                    var8 = 0;
                    var10 = var6;
                    var3 = arraySpread(var10, var9, var8);
                    var3 = var6.sort;
                    var3 = var3.bind(var6)();
                    var3 = var4.bind(var5)(var2, var3);
                    var3 = !var3;
                    if (!var3) {
                        _fun117855_ip = 140;
                        continue _fun117855
                    }
                case 131:
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var0)(var2);
                case 140:
                    return var0;
            }
        };
        var6 = var8.bind(var13)(var4, var6);
        var8 = var13.useCallback;
        var4 = new Array(5);
        var4[0] = var9;
        var4[1] = var16;
        var4[2] = var15;
        var4[3] = var11;
        var4[4] = var14;
        var2 = function(arg0, arg1) { // Environment: var2
            _fun117856: for (var _fun117856_ip = 0;;) switch (_fun117856_ip) {
                case 0:
                    var1 = arg1;
                    var0 = _closure2_slot0;
                    var13 = var0[var1];
                    var _closure3_slot0 = var13;
                    var2 = var0.length;
                    var0 = 1;
                    var0 = var2 - var0;
                    var7 = var1 === var0;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot9;
                    var1 = {};
                    var8 = _closure1_slot7;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var9 = 11;
                    var4 = var0[var9];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var5 = var4.FormRow;
                    var4 = {};
                    var12 = _closure1_slot5;
                    var11 = {};
                    var15 = _closure2_slot3;
                    var15 = var15.label;
                    var11.style = var15;
                    var16 = _closure2_slot7;
                    var15 = 'dot';
                    var16 = var15 === var16;
                    if (!var16) {
                        _fun117856_ip = 129;
                        continue _fun117856
                    }
                case 117:
                    var17 = var13.colorString;
                    var15 = null;
                    var16 = var15 != var17;
                case 129:
                    if (!var16) {
                        _fun117856_ip = 212;
                        continue _fun117856
                    }
                case 132:
                    var18 = _closure1_slot7;
                    var17 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var15 = 12;
                    var15 = var19[var15];
                    var15 = var17.bind(var0)(var15);
                    var17 = var15.RoleDot;
                    var15 = {};
                    var19 = _closure2_slot3;
                    var19 = var19.roleDot;
                    var15.containerStyles = var19;
                    var19 = var13.colorString;
                    var15.color = var19;
                    var19 = var13.colorStrings;
                    var15.colors = var19;
                    var19 = false;
                    var15.background = var19;
                    var16 = var18.bind(var0)(var17, var15);
                case 212:
                    var15 = new Array(2);
                    var15[0] = var16;
                    var18 = _closure1_slot7;
                    var17 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var16 = 13;
                    var16 = var19[var16];
                    var16 = var17.bind(var0)(var16);
                    var17 = var16.Text;
                    var16 = {};
                    var19 = 'text-md/medium';
                    var16.variant = var19;
                    var20 = var13.colorString;
                    var19 = null;
                    var20 = var19 != var20;
                    var19 = undefined;
                    if (!var20) {
                        _fun117856_ip = 305;
                        continue _fun117856
                    }
                case 276:
                    var21 = _closure2_slot7;
                    var20 = 'username';
                    var19 = undefined;
                    if (!(var20 === var21)) {
                        _fun117856_ip = 305;
                        continue _fun117856
                    }
                case 290:
                    var20 = {};
                    var21 = var13.colorString;
                    var20.color = var21;
                    var19 = var20;
                case 305:
                    var16.style = var19;
                    var19 = var13.name;
                    var16.children = var19;
                    var16 = var18.bind(var0)(var17, var16);
                    var15[1] = var16;
                    var11.children = var15;
                    var11 = var3.bind(var0)(var12, var11);
                    var4.label = var11;
                    var10 = function() {
                        var2 = _closure2_slot8;
                        var0 = _closure3_slot0;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4.onPress = var10;
                    var12 = _closure1_slot7;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var10 = var10[var9];
                    var10 = var11.bind(var0)(var10);
                    var10 = var10.FormRow;
                    var11 = var10.Checkbox;
                    var10 = {};
                    var15 = _closure2_slot5;
                    var14 = var15.has;
                    var13 = var13.id;
                    var13 = var14.bind(var15)(var13);
                    var10.selected = var13;
                    var10 = var12.bind(var0)(var11, var10);
                    var4.trailing = var10;
                    var5 = var8.bind(var0)(var5, var4);
                    var4 = new Array(2);
                    var4[0] = var5;
                    var5 = !var7;
                    if (var7) {
                        _fun117856_ip = 478;
                        continue _fun117856
                    }
                case 443:
                    var8 = _closure1_slot7;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var6 = var7.bind(var0)(var6);
                    var7 = var6.FormDivider;
                    var6 = {};
                    var5 = var8.bind(var0)(var7, var6);
                case 478:
                    var4[1] = var5;
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var8 = var8.bind(var13)(var2, var4);
        var2 = _closure1_slot7;
        var0 = 14;
        var0 = var12[var0];
        var0 = var1.bind(var3)(var0);
        var4 = var0.PressableOpacity;
        var0 = {};
        var0.onPress = var6;
        var6 = 'button';
        var0.accessibilityRole = var6;
        var6 = 13;
        var6 = var12[var6];
        var6 = var1.bind(var3)(var6);
        var14 = var6.Text;
        var6 = {};
        var13 = 'text-md/semibold';
        var6.variant = var13;
        var13 = 15;
        var15 = var12[var13];
        var15 = var1.bind(var3)(var15);
        var17 = var15.intl;
        var16 = var17.string;
        var15 = var12[var13];
        var15 = var1.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.i4jeWR;
        var15 = var16.bind(var17)(var15);
        var6.children = var15;
        var6 = var2.bind(var3)(var14, var6);
        var0.children = var6;
        var6 = var2.bind(var3)(var4, var0);
        var0 = 16;
        var0 = var12[var0];
        var0 = var1.bind(var3)(var0);
        var4 = var0.BottomSheetTitleHeader;
        var0 = {};
        var14 = var12[var13];
        var14 = var1.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var12[var13];
        var13 = var1.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["LPJmL/"];
        var13 = var14.bind(var15)(var13);
        var0.title = var13;
        var0.trailing = var6;
        var4 = var2.bind(var3)(var4, var0);
        var0 = 17;
        var0 = var12[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.ActionSheet;
        var0 = {
            'scrollable': true,
            'header': null,
            'startExpanded': true
        };
        var6 = true;
        var0.header = var4;
        var4 = 18;
        var4 = var12[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.inActionSheet = var6;
        var11 = var11.list;
        var4.style = var11;
        var4.itemSize = var10;
        var10 = var9.length;
        var9 = new Array(1);
        var9[0] = var10;
        var4.sections = var9;
        var4.renderItem = var8;
        var4.placeholderConfig = var7;
        var7 = 'windowSize';
        var4.estimatedListSize = var7;
        var7 = 'select-invite-roles';
        var4.listId = var7;
        var4.wrapChildren = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 33, 1297, 566, 9170, 7630, 3279, 22, 5430, 8264, 3942, 4904, 1234, 5261, 5258, 7633, 2]);