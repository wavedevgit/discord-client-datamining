// modules/user_profile/native/UserProfileRemediatedNotice.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RelationshipTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.padding = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.gap = var9;
    var9 = 'row';
    var8.flexDirection = var9;
    var9 = 'center';
    var8.alignItems = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileRemediatedNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: RemediatedUserNotice, environment: var1
        _fun92594: for (var _fun92594_ip = 0;;) switch (_fun92594_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var _closure2_slot0 = var1;
                var8 = var0.style;
                var0 = _closure1_slot9;
                var4 = undefined;
                var5 = var0.bind(var4)();
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var9 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var0 = 8;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStoresObject;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    var0 = {};
                    var3 = _closure1_slot4;
                    var5 = var3.getRelationshipType;
                    var1 = _closure2_slot0;
                    var4 = var1.id;
                    var4 = var5.bind(var3)(var4);
                    var2 = _closure1_slot5;
                    var2 = var2.PENDING_INCOMING;
                    var2 = var4 === var2;
                    var0.isPendingIncoming = var2;
                    var4 = var3.isBlocked;
                    var2 = var1.id;
                    var2 = var4.bind(var3)(var2);
                    var0.isBlocked = var2;
                    var2 = var3.isIgnored;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var0.isIgnored = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var1 = var0.isPendingIncoming;
                var7 = var0.isBlocked;
                var6 = var0.isIgnored;
                if (var7) {
                    _fun92594_ip = 140;
                    continue _fun92594
                }
            case 124:
                var0 = null;
                if (!var6) {
                    _fun92594_ip = 549;
                    continue _fun92594
                }
            case 132:
                var0 = null;
                if (var1) {
                    _fun92594_ip = 549;
                    continue _fun92594
                }
            case 140:
                var3 = _closure1_slot8;
                var2 = _closure1_slot3;
                var1 = {};
                var11 = var5.container;
                var5 = new Array(3);
                var5[0] = var11;
                var9 = var9.card;
                var5[1] = var9;
                var5[2] = var8;
                var1.style = var5;
                if (!var7) {
                    _fun92594_ip = 286;
                    continue _fun92594
                }
            case 184:
                var9 = _closure1_slot6;
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 9;
                var5 = var16[var5];
                var5 = var14.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default',
                    'lineClamp': 1
                };
                var11 = 10;
                var12 = var16[var11];
                var12 = var14.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var16[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["oC/fU6"];
                var11 = var12.bind(var13)(var11);
                var5.children = var11;
                var7 = var9.bind(var4)(var8, var5);
            case 286:
                var5 = new Array(2);
                var5[0] = var7;
                if (!var6) {
                    _fun92594_ip = 535;
                    continue _fun92594
                }
            case 300:
                var9 = _closure1_slot8;
                var8 = _closure1_slot7;
                var7 = {};
                var17 = _closure1_slot6;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = 9;
                var10 = var16[var13];
                var10 = var12.bind(var4)(var10);
                var14 = var10.Text;
                var10 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default',
                    'lineClamp': 1
                };
                var11 = 10;
                var18 = var16[var11];
                var18 = var12.bind(var4)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var16[var11];
                var18 = var12.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.HXz5An;
                var18 = var19.bind(var20)(var18);
                var10.children = var18;
                var14 = var17.bind(var4)(var14, var10);
                var10 = new Array(3);
                var10[0] = var14;
                var13 = var16[var13];
                var13 = var12.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-default',
                    'accessibilityElementsHidden': true,
                    'importantForAccessibility': 'no',
                    'children': '•'
                };
                var13 = var17.bind(var4)(var14, var13);
                var10[1] = var13;
                var13 = var16[var11];
                var13 = var12.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var16[var11];
                var11 = var12.bind(var4)(var11);
                var11 = var11.t;
                var12 = var11.PrtAqy;
                var11 = {};
                var15 = function(arg0) { // Original name: unignoreHook, environment: var15
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'role': 'button',
                        'variant': 'heading-sm/medium',
                        'color': 'text-link'
                    };
                    var4 = function() { // Original name: onPress, environment: var4
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.unignoreUser;
                        var0 = _closure2_slot0;
                        var1 = var0.id;
                        var0 = 'UserProfileRemediatedNotice';
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0.onPress = var4;
                    var4 = arg0;
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var11.unignoreHook = var15;
                var11 = var13.bind(var14)(var12, var11);
                var10[2] = var11;
                var7.children = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 535:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 549:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3059, 660, 33, 1297, 671, 6924, 632, 3901, 1234, 7982, 2]);