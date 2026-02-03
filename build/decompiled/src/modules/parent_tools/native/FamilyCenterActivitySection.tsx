// modules/parent_tools/native/FamilyCenterActivitySection.tsx
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
        _fun82336: for (var _fun82336_ip = 0;;) switch (_fun82336_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.displayType;
                var0 = _closure1_slot11;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var7 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var0 = 8;
                var0 = var8[var0];
                var1 = var2.bind(var3)(var0);
                var0 = var1.getActivityTypeTextConfigs;
                var1 = var0.bind(var1)();
                var0 = var1.get;
                var4 = var0.bind(var1)(var5);
                var1 = 9;
                var0 = var8[var1];
                var9 = var2.bind(var3)(var0);
                var0 = var9.useActionsForDisplayType;
                var0 = var0.bind(var9)(var5);
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useFormattedTotalForDisplayType;
                var1 = var1.bind(var2)(var5);
                var2 = _closure1_slot8;
                var2 = var2.PURCHASES;
                if (!(var5 === var2)) {
                    _fun82336_ip = 145;
                    continue _fun82336
                }
            case 139:
                var2 = null;
                if (!(var2 === var1)) {
                    _fun82336_ip = 150;
                    continue _fun82336
                }
            case 145:
                var1 = var0.length;
            case 150:
                var5 = null;
                var0 = var5 == var4;
                var12 = undefined;
                if (var0) {
                    _fun82336_ip = 172;
                    continue _fun82336
                }
            case 161:
                var0 = var4.sectionHeader;
                var12 = var0.bind(var4)(var1);
            case 172:
                var1 = var5 == var4;
                var0 = undefined;
                if (var1) {
                    _fun82336_ip = 187;
                    continue _fun82336
                }
            case 181:
                var0 = var4.sectionDescription;
            case 187:
                var9 = null;
                if (!(var3 !== var0)) {
                    _fun82336_ip = 226;
                    continue _fun82336
                }
            case 193:
                var1 = var5 == var4;
                var0 = undefined;
                if (var1) {
                    _fun82336_ip = 223;
                    continue _fun82336
                }
            case 202:
                var2 = var4.sectionDescription;
                var1 = var5 != var7;
                if (!var1) {
                    _fun82336_ip = 218;
                    continue _fun82336
                }
            case 215:
                var1 = var7;
            case 218:
                var0 = var2.bind(var4)(var1);
            case 223:
                var9 = var0;
            case 226:
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var11 = 10;
                var4 = var4[var11];
                var4 = var7.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {};
                var13 = 'text-sm/semibold';
                var4.variant = var13;
                var13 = var10.header;
                var4.style = var13;
                var4.children = var12;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var5 = null;
                if (!(var5 !== var9)) {
                    _fun82336_ip = 369;
                    continue _fun82336
                }
            case 310:
                var8 = _closure1_slot9;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var11];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var10 = var10.description;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 369:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
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
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS;
    var _closure1_slot7 = var6;
    var3 = var3.TeenActionDisplayType;
    var _closure1_slot8 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var12 = {};
    var10 = 6;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var12.marginBottom = var13;
    var6.header = var12;
    var12 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var12.marginBottom = var13;
    var6.description = var12;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot11 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var12 = 'flex';
    var8.display = var12;
    var3.container = var8;
    var8 = {};
    var12 = 'hidden';
    var8.overflow = var12;
    var3.actionContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flex': 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        'width': '100%'
    };
    var3.loadMoreContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderBottomRightRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderBottomLeftRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var10;
    var10 = '60%';
    var8.width = var10;
    var3.loadMore = var8;
    var8 = {};
    var8.paddingVertical = var9;
    var3.loadMoreButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/parent_tools/native/FamilyCenterActivitySection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun82337: for (var _fun82337_ip = 0;;) switch (_fun82337_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.displayType;
                var _closure2_slot0 = var12;
                var0 = _closure1_slot12;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var0 = var4[var1];
                var5 = var2.bind(var3)(var0);
                var0 = var5.useActionsForDisplayType;
                var0 = var0.bind(var5)(var12);
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useActionTotalsForDisplayType;
                var6 = var1.bind(var5)(var12);
                var1 = 11;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useFamilyCenterActions;
                var1 = {};
                var1 = var2.bind(var4)(var1);
                var2 = var1.loadMore;
                var _closure2_slot1 = var2;
                var9 = var1.isMoreLoading;
                var10 = _closure1_slot4;
                var4 = var10.useState;
                var1 = _closure1_slot7;
                var5 = var4.bind(var10)(var1);
                var4 = _closure1_slot3;
                var1 = 2;
                var8 = var4.bind(var3)(var5, var1);
                var1 = 0;
                var5 = var8[var1];
                var4 = 1;
                var4 = var8[var4];
                var _closure2_slot2 = var4;
                var4 = var0.slice;
                var5 = var4.bind(var0)(var1, var5);
                var8 = var10.useCallback;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var12;
                var2 = function() { // Environment: var7
                    var3 = _closure2_slot2;
                    var0 = undefined;
                    var2 = function(arg0) { // Environment: var2
                        var1 = _closure1_slot7;
                        var0 = arg0;
                        var0 = var0 + var1;
                        return var0;
                    };
                    var2 = var3.bind(var0)(var2);
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var8.bind(var10)(var2, var4);
                var0 = var0.length;
                if (!(var1 !== var0)) {
                    _fun82337_ip = 651;
                    continue _fun82337
                }
            case 221:
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 12;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var4 = var0.intl;
                var2 = var4.formatToPlainString;
                var1 = _closure1_slot1;
                var0 = 13;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0["7dMmJY"];
                var0 = {};
                var8 = global;
                var15 = var8.Math;
                var14 = var15.min;
                var8 = var5.length;
                var10 = var6 - var8;
                var8 = _closure1_slot7;
                var8 = var14.bind(var15)(var10, var8);
                var0.pageSize = var8;
                var17 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot10;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var16.container;
                var0.style = var4;
                var10 = _closure1_slot9;
                var8 = _closure1_slot13;
                var4 = {};
                var4.displayType = var12;
                var8 = var10.bind(var3)(var8, var4);
                var4 = new Array(3);
                var4[0] = var8;
                var8 = var5.map;
                var7 = function(arg0) { // Environment: var7
                    var0 = arg0;
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.action = var0;
                    var0 = var0.event_id;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var7 = var8.bind(var5)(var7);
                var4[1] = var7;
                var5 = var5.length;
                var6 = var5 < var6;
                var5 = null;
                if (!var6) {
                    _fun82337_ip = 635;
                    continue _fun82337
                }
            case 406:
                var8 = _closure1_slot9;
                var7 = _closure1_slot6;
                var6 = {};
                var10 = var16.loadMoreContainer;
                var6.style = var10;
                var12 = _closure1_slot9;
                if (var9) {
                    _fun82337_ip = 559;
                    continue _fun82337
                }
            case 436:
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 15;
                var9 = var18[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.PressableOpacity;
                var9 = {};
                var15 = var16.loadMore;
                var9.style = var15;
                var9.accessibilityLabel = var17;
                var15 = 'button';
                var9.accessibilityRole = var15;
                var9.onPress = var11;
                var15 = _closure1_slot9;
                var11 = 10;
                var11 = var18[var11];
                var11 = var14.bind(var3)(var11);
                var14 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-xs/semibold',
                    'color': 'always-white'
                };
                var18 = var16.loadMoreButton;
                var11.style = var18;
                var11.children = var17;
                var11 = var15.bind(var3)(var14, var11);
                var9.children = var11;
                var9 = var12.bind(var3)(var10, var9);
                _fun82337_ip = 625;
                continue _fun82337;
            case 559:
                var11 = _closure1_slot6;
                var10 = {};
                var14 = var16.loadMore;
                var10.style = var14;
                var15 = _closure1_slot9;
                var14 = _closure1_slot5;
                var13 = {
                    'style': null,
                    'animating': true,
                    'color': '#fff',
                    'size': 'small'
                };
                var16 = var16.loadMoreButton;
                var13.style = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 625:
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 635:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 651:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4590, 33, 1297, 671, 6505, 4654, 10507, 3932, 10472, 1234, 1849, 10513, 4897, 2]);