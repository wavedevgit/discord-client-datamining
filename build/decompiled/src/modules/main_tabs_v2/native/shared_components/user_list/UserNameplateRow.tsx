// modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.Fragment;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'padding': 0,
        'paddingRight': null,
        'overflow': 'hidden'
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_40;
    var8.paddingRight = var9;
    var3.card = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/user_list/UserNameplateRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserNameplateRow, environment: var1
        _fun72562: for (var _fun72562_ip = 0;;) switch (_fun72562_ip) {
            case 0:
                var6 = arg0;
                var22 = var6.label;
                var21 = var6.subLabel;
                var10 = var6.icon;
                var20 = var6.trailing;
                var19 = var6.arrow;
                var26 = var6.onPress;
                var3 = var6.onPressIn;
                var _closure2_slot0 = var3;
                var27 = var6.onPressOut;
                var _closure2_slot1 = var27;
                var18 = var6.disabled;
                var4 = undefined;
                if (!(var18 === var4)) {
                    _fun72562_ip = 71;
                    continue _fun72562
                }
            case 69:
                var18 = false;
            case 71:
                var29 = var6.start;
                var23 = var6.end;
                var17 = var6.labelLineClamp;
                var16 = var6.subLabelLineClamp;
                var15 = var6.variant;
                if (!(var15 === var4)) {
                    _fun72562_ip = 106;
                    continue _fun72562
                }
            case 102:
                var15 = 'default';
            case 106:
                var14 = var6.draggable;
                var13 = var6.dragHandlePressableProps;
                var25 = var6.nameplate;
                var11 = var6.isPreviewRow;
                if (!(var11 === var4)) {
                    _fun72562_ip = 136;
                    continue _fun72562
                }
            case 134:
                var11 = false;
            case 136:
                var2 = {
                    'label': 0,
                    'subLabel': 0,
                    'icon': 0,
                    'trailing': 0,
                    'arrow': 0,
                    'onPress': 0,
                    'onPressIn': 0,
                    'onPressOut': 0,
                    'disabled': 0,
                    'start': 0,
                    'end': 0,
                    'labelLineClamp': 0,
                    'subLabelLineClamp': 0,
                    'variant': 0,
                    'draggable': 0,
                    'dragHandlePressableProps': 0,
                    'nameplate': 0,
                    'isPreviewRow': 0
                };
                var9 = null;
                var32 = var2;
                var31 = null;
                var1 = silentSetPrototypeOf(var32, var31);
                var5 = 0;
                var32 = {};
                var31 = var6;
                var30 = var2;
                var7 = copyDataProperties(var32, var31, var30);
                var _closure2_slot2 = var4;
                var1 = _closure1_slot8;
                var8 = var1.bind(var4)();
                var12 = _closure1_slot4;
                var2 = var12.useContext;
                var24 = _closure1_slot0;
                var28 = _closure1_slot2;
                var1 = 5;
                var1 = var28[var1];
                var1 = var24.bind(var4)(var1);
                var1 = var1.TableRowGroupContext;
                var2 = var2.bind(var12)(var1);
                var1 = !var2;
                if (!var1) {
                    _fun72562_ip = 243;
                    continue _fun72562
                }
            case 237:
                var12 = true;
                var1 = var12 === var23;
            case 243:
                var12 = _closure1_slot4;
                var24 = var12.useState;
                var23 = false;
                var28 = var24.bind(var12)(var23);
                var24 = _closure1_slot3;
                var23 = 2;
                var23 = var24.bind(var4)(var28, var23);
                var24 = var23[var5];
                var5 = 1;
                var5 = var23[var5];
                _closure2_slot2 = var5;
                var23 = var12.useCallback;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function(arg0) { // Environment: var0
                    _fun72563: for (var _fun72563_ip = 0;;) switch (_fun72563_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var2 = true;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun72563_ip = 38;
                                continue _fun72563
                            }
                        case 26:
                            var2 = _closure2_slot0;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                        case 38:
                            return var0;
                    }
                };
                var23 = var23.bind(var12)(var3, var5);
                var5 = var12.useCallback;
                var3 = new Array(1);
                var3[0] = var27;
                var0 = function(arg0) { // Environment: var0
                    _fun72564: for (var _fun72564_ip = 0;;) switch (_fun72564_ip) {
                        case 0:
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var2 = false;
                            var2 = var3.bind(var0)(var2);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun72564_ip = 38;
                                continue _fun72564
                            }
                        case 26:
                            var2 = _closure2_slot1;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                        case 38:
                            return var0;
                    }
                };
                var12 = var5.bind(var12)(var0, var3);
                var5 = _closure1_slot6;
                var3 = _closure1_slot0;
                var27 = _closure1_slot2;
                var0 = 6;
                var0 = var27[var0];
                var0 = var3.bind(var4)(var0);
                var3 = var0.Card;
                var0 = {
                    'shadow': 'none',
                    'border': 'none'
                };
                var27 = !var2;
                if (!var27) {
                    _fun72562_ip = 395;
                    continue _fun72562
                }
            case 389:
                var28 = true;
                var27 = var28 === var29;
            case 395:
                var0.start = var27;
                var0.end = var1;
                var0.onPress = var26;
                var0.onPressIn = var23;
                var0.onPressOut = var12;
                var0.disabled = var18;
                var8 = var8.card;
                var0.style = var8;
                var32 = var0;
                var31 = var7;
                var7 = copyDataProperties(var32, var31);
                var12 = _closure1_slot5;
                var8 = _closure1_slot1;
                var23 = _closure1_slot2;
                var7 = 7;
                var7 = var23[var7];
                var8 = var8.bind(var4)(var7);
                var7 = {};
                var7.nameplate = var25;
                var7.isPressed = var24;
                var24 = true;
                var7.invertPressOpacity = var24;
                var7.fullOpacity = var11;
                var7.animate = var11;
                var7 = var12.bind(var4)(var8, var7);
                var8 = new Array(2);
                var8[0] = var7;
                var11 = _closure1_slot0;
                var7 = 8;
                var7 = var23[var7];
                var7 = var11.bind(var4)(var7);
                var11 = var7.TableRowInner;
                var7 = {};
                var7.label = var22;
                var7.subLabel = var21;
                var7.icon = var10;
                var7.trailing = var20;
                var7.arrow = var19;
                var7.disabled = var18;
                var7.labelLineClamp = var17;
                var7.subLabelLineClamp = var16;
                var7.variant = var15;
                var7.draggable = var14;
                var7.dragHandlePressableProps = var13;
                var7 = var12.bind(var4)(var11, var7);
                var8[1] = var7;
                var7 = 'children';
                var0[var7] = var8;
                var7 = var5.bind(var4)(var3, var0);
                var0 = var7;
                if (var2) {
                    _fun72562_ip = 699;
                    continue _fun72562
                }
            case 614:
                var0 = var7;
                if (var1) {
                    _fun72562_ip = 699;
                    continue _fun72562
                }
            case 620:
                var3 = _closure1_slot6;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot5;
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 9;
                var6 = var11[var6];
                var6 = var7.bind(var4)(var6);
                var7 = var6.TableRowDivider;
                var6 = {};
                var9 = var9 != var10;
                var6.adjustSpacingForIcon = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 699:
                return var0;
        }
    };
    var2.UserNameplateRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 33, 1297, 671, 4862, 4863, 6875, 4861, 4832, 2]);