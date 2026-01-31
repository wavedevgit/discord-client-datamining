// modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx
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
        _fun116429: for (var _fun116429_ip = 0;;) switch (_fun116429_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.isLast;
                var19 = var0.item;
                var0 = _closure1_slot7;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                var7 = _closure1_slot3;
                var4 = {};
                var9 = var10.row;
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var19.checked;
                if (!var9) {
                    _fun116429_ip = 72;
                    continue _fun116429
                }
            case 66:
                var9 = var10.eligibleRow;
            case 72:
                var8[1] = var9;
                var4.style = var8;
                var11 = _closure1_slot4;
                var9 = _closure1_slot1;
                var12 = _closure1_slot2;
                var8 = 5;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var12 = var10.rowStatusIcon;
                var8.style = var12;
                var12 = var19.checked;
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                if (var12) {
                    _fun116429_ip = 147;
                    continue _fun116429
                }
            case 133:
                var12 = 7;
                var12 = var15[var12];
                var12 = var14.bind(var3)(var12);
                _fun116429_ip = 159;
                continue _fun116429;
            case 147:
                var13 = 6;
                var13 = var15[var13];
                var12 = var14.bind(var3)(var13);
            case 159:
                var8.source = var12;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var12 = _closure1_slot5;
                var11 = _closure1_slot3;
                var9 = {};
                var13 = var10.rowTextColumn;
                var9.style = var13;
                var15 = _closure1_slot4;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var17 = 8;
                var13 = var13[var17];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var16 = var10.rowLabel;
                var13.style = var16;
                var16 = var19.checked;
                if (var16) {
                    _fun116429_ip = 269;
                    continue _fun116429
                }
            case 261:
                var16 = var19.uncheckedLabel;
                _fun116429_ip = 275;
                continue _fun116429;
            case 269:
                var16 = var19.checkedLabel;
            case 275:
                var13.children = var16;
                var14 = var15.bind(var3)(var14, var13);
                var13 = new Array(3);
                var13[0] = var14;
                var16 = _closure1_slot4;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var17];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-sm/normal',
                    'color': 'interactive-text-default'
                };
                var17 = var19.description;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var14 = var19.actionHandler;
                var16 = null;
                var14 = var16 != var14;
                if (!var14) {
                    _fun116429_ip = 377;
                    continue _fun116429
                }
            case 367:
                var15 = var19.actionLabel;
                var14 = var16 != var15;
            case 377:
                if (!var14) {
                    _fun116429_ip = 511;
                    continue _fun116429
                }
            case 383:
                var17 = _closure1_slot4;
                var22 = _closure1_slot1;
                var20 = _closure1_slot2;
                var18 = 9;
                var15 = var20[var18];
                var16 = var22.bind(var3)(var15);
                var15 = {};
                var21 = var10.actionButton;
                var15.style = var21;
                var21 = var20[var18];
                var21 = var22.bind(var3)(var21);
                var21 = var21.Colors;
                var21 = var21.PRIMARY;
                var15.color = var21;
                var21 = var19.actionLabel;
                var15.text = var21;
                var19 = var19.actionHandler;
                var15.onPress = var19;
                var19 = _closure1_slot0;
                var18 = var20[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.ButtonLooks;
                var18 = var18.OUTLINED;
                var15.look = var18;
                var18 = var10.actionButtonText;
                var15.textStyle = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 511:
                var13[2] = var14;
                var9.children = var13;
                var9 = var12.bind(var3)(var11, var9);
                var8[1] = var9;
                var4.children = var8;
                var7 = var2.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var8 = _closure1_slot4;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                if (var5) {
                    _fun116429_ip = 594;
                    continue _fun116429
                }
            case 562:
                var5 = 11;
                var5 = var9[var5];
                var6 = var7.bind(var3)(var5);
                var5 = {};
                var10 = var10.divider;
                var5.style = var10;
                var5 = var8.bind(var3)(var6, var5);
                _fun116429_ip = 621;
                continue _fun116429;
            case 594:
                var6 = 10;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var9 = 16;
                var6.size = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 621:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var6 = var3.jsxs;
    var _closure1_slot5 = var6;
    var3 = var3.Fragment;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var10 = 24;
    var3 = {
        'paddingHorizontal': 24,
        'paddingTop': 16,
        'flex': 0,
        'flexDirection': 'row'
    };
    var6.row = var3;
    var3 = {};
    var9 = 0.8;
    var3.opacity = var9;
    var6.eligibleRow = var3;
    var3 = {
        'height': 20,
        'width': 20,
        'marginRight': 16
    };
    var6.rowStatusIcon = var3;
    var3 = {
        'flex': 1,
        'flexDirection': 'column'
    };
    var6.rowTextColumn = var3;
    var3 = {};
    var11 = 4;
    var3.marginBottom = var11;
    var6.rowLabel = var3;
    var9 = {};
    var3 = 12;
    var9.marginTop = var3;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var9.borderRadius = var13;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_ACTIVE;
    var9.borderColor = var13;
    var6.actionButton = var9;
    var9 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var11;
    var6.actionButtonText = var9;
    var9 = {};
    var9.marginHorizontal = var10;
    var6.divider = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/EligibilityChecklist.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116430: for (var _fun116430_ip = 0;;) switch (_fun116430_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.items;
                var _closure2_slot0 = var2;
                var4 = var1.style;
                var3 = var2.length;
                var1 = 0;
                if (!(var1 !== var3)) {
                    _fun116430_ip = 78;
                    continue _fun116430
                }
            case 30:
                var1 = var2.map;
                var0 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot8;
                    var2 = {};
                    var2.item = var0;
                    var1 = _closure2_slot0;
                    var5 = var1.length;
                    var1 = 1;
                    var5 = var5 - var1;
                    var1 = arg1;
                    var1 = var1 === var5;
                    var2.isLast = var1;
                    var1 = var0.checkedLabel;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var1.style = var4;
                var1.children = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            case 78:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4667, 14793, 14794, 3900, 4836, 9226, 10714, 2]);