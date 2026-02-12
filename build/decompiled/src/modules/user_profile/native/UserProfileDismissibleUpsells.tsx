// modules/user_profile/native/UserProfileDismissibleUpsells.tsx
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
    var8 = 0;
    var6 = var5[var8];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TrackUserProfileActions;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Gradients;
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.ContentDismissActionType;
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot8 = var7;
    var6 = var6.jsxs;
    var _closure1_slot9 = var6;
    var15 = var3.PREMIUM_GUILD;
    var6 = new Array(0);
    var16 = var6;
    var14 = 0;
    var3 = arraySpread(var16, var15, var14);
    var3 = var6.reverse;
    var3 = var3.bind(var6)();
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var6 = {};
    var3 = {
        'paddingVertical': 16,
        'paddingHorizontal': 12
    };
    var10 = 8;
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var3.borderRadius = var13;
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_SURFACE_HIGH;
    var3.backgroundColor = var13;
    var6.upsellContainer = var3;
    var3 = {};
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME;
    var3.backgroundColor = var10;
    var6.customProfileThemeUpsellContainer = var3;
    var3 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var6.header = var3;
    var3 = 10;
    var10 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'flexWrap': 'wrap',
        'gap': 10,
        'marginTop': 12
    };
    var6.upsellButtonsContainer = var10;
    var10 = {};
    var10.flex = var11;
    var6.upsellButton = var10;
    var6 = var8.bind(var9)(var6);
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var9 = var6.XSmallIcon;
    var6 = {};
    var8 = 'sm';
    var6.size = var8;
    var6 = var7.bind(var0)(var9, var6);
    var _closure1_slot12 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NitroWheelIcon;
    var3 = {};
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ShopIcon;
    var3 = {};
    var3.size = var8;
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot14 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileDismissibleUpsells.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var2 = var0.navigateToShop;
        var _closure2_slot0 = var2;
        var9 = var0.navigateToPremium;
        var _closure2_slot1 = var9;
        var0 = var0.hasCustomProfileTheme;
        var _closure2_slot2 = var0;
        var1 = _closure1_slot11;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var _closure2_slot3 = var1;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 12;
        var1 = var7[var1];
        var5 = var6.bind(var3)(var1);
        var1 = var5.useUserProfileAnalyticsContext;
        var1 = var1.bind(var5)();
        var1 = var1.trackUserProfileAction;
        var _closure2_slot4 = var1;
        var5 = 13;
        var5 = var7[var5];
        var11 = var6.bind(var3)(var5);
        var10 = var11.useStateFromStores;
        var5 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var5;
        var5 = function() { // Environment: var4
            var1 = _closure1_slot5;
            var0 = var1.getCurrentUser;
            var0 = var0.bind(var1)();
            return var0;
        };
        var10 = var10.bind(var11)(var8, var5);
        var5 = 14;
        var5 = var7[var5];
        var8 = var6.bind(var3)(var5);
        var5 = var8.isPremium;
        var5 = var5.bind(var8)(var10);
        var _closure2_slot5 = var5;
        var8 = _closure1_slot3;
        var10 = var8.useCallback;
        var5 = new Array(2);
        var5[0] = var2;
        var5[1] = var1;
        var2 = function() { // Environment: var4
            var3 = _closure2_slot4;
            var2 = {};
            var0 = _closure1_slot6;
            var0 = var0.VISIT_SHOP;
            var2.action = var0;
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var1 = _closure2_slot0;
            var1 = var1.bind(var0)();
            return var0;
        };
        var2 = var10.bind(var8)(var2, var5);
        var _closure2_slot6 = var2;
        var10 = var8.useCallback;
        var5 = new Array(2);
        var5[0] = var9;
        var5[1] = var1;
        var2 = function() { // Environment: var4
            var3 = _closure2_slot4;
            var2 = {};
            var0 = _closure1_slot6;
            var0 = var0.GET_PREMIUM;
            var2.action = var0;
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var1 = _closure2_slot1;
            var1 = var1.bind(var0)();
            return var0;
        };
        var2 = var10.bind(var8)(var2, var5);
        var _closure2_slot7 = var2;
        var5 = var8.useCallback;
        var2 = new Array(2);
        var2[0] = var9;
        var2[1] = var1;
        var1 = function() { // Environment: var4
            var3 = _closure2_slot4;
            var2 = {};
            var0 = _closure1_slot6;
            var0 = var0.VIEW_PREMIUM_PERKS;
            var2.action = var0;
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var1 = _closure2_slot1;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var5.bind(var8)(var1, var2);
        var _closure2_slot8 = var1;
        var2 = _closure1_slot8;
        var1 = _closure1_slot1;
        var0 = 15;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var5 = 16;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.DismissibleContent;
        var6 = var5.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
        var5 = new Array(1);
        var5[0] = var6;
        var0.contentTypes = var5;
        var4 = function arg0() {
            _fun90530: for (var _fun90530_ip = 0;;) switch (_fun90530_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.visibleContent;
                    var0 = var0.markAsDismissed;
                    var _closure3_slot0 = var0;
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 16;
                    var0 = var3[var0];
                    var4 = undefined;
                    var0 = var1.bind(var4)(var0);
                    var0 = var0.DismissibleContent;
                    var1 = var0.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
                    var0 = null;
                    if (!(var2 === var1)) {
                        _fun90530_ip = 866;
                        continue _fun90530
                    }
                case 67:
                    var3 = _closure1_slot8;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 17;
                    var1 = var7[var5];
                    var2 = var6.bind(var4)(var1);
                    var1 = {};
                    var8 = 2;
                    var1.borderWidth = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.Direction;
                    var5 = var5.VERTICAL;
                    var1.direction = var5;
                    var5 = _closure1_slot10;
                    var1.colors = var5;
                    var5 = 8;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.radii;
                    var5 = var5.lg;
                    var1.borderRadius = var5;
                    var7 = _closure1_slot9;
                    var6 = _closure1_slot4;
                    var5 = {};
                    var8 = {};
                    var9 = _closure2_slot3;
                    var27 = var9.upsellContainer;
                    var28 = var8;
                    var9 = copyDataProperties(var28, var27);
                    var9 = _closure2_slot2;
                    if (var9) {
                        _fun90530_ip = 205;
                        continue _fun90530
                    }
                case 201:
                    var9 = {};
                    _fun90530_ip = 215;
                    continue _fun90530;
                case 205:
                    var10 = _closure2_slot3;
                    var9 = var10.customProfileThemeUpsellContainer;
                case 215:
                    var28 = var8;
                    var27 = var9;
                    var9 = copyDataProperties(var28, var27);
                    var5.style = var8;
                    var11 = _closure1_slot9;
                    var10 = _closure1_slot4;
                    var8 = {};
                    var16 = _closure2_slot3;
                    var9 = var16.header;
                    var8.style = var9;
                    var13 = _closure1_slot8;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var9 = 18;
                    var9 = var14[var9];
                    var9 = var15.bind(var4)(var9);
                    var12 = var9.Text;
                    var9 = {
                        'accessibilityRole': 'header',
                        'variant': 'text-sm/semibold'
                    };
                    var26 = 19;
                    var17 = var14[var26];
                    var17 = var15.bind(var4)(var17);
                    var22 = var17.intl;
                    var19 = var22.string;
                    var17 = var14[var26];
                    var17 = var15.bind(var4)(var17);
                    var17 = var17.t;
                    var17 = var17.EIYbj6;
                    var17 = var19.bind(var22)(var17);
                    var9.children = var17;
                    var12 = var13.bind(var4)(var12, var9);
                    var9 = new Array(2);
                    var9[0] = var12;
                    var12 = 20;
                    var12 = var14[var12];
                    var12 = var15.bind(var4)(var12);
                    var17 = var12.PressableOpacity;
                    var12 = {};
                    var19 = 'button';
                    var12.accessibilityRole = var19;
                    var19 = var14[var26];
                    var19 = var15.bind(var4)(var19);
                    var23 = var19.intl;
                    var22 = var23.string;
                    var19 = var14[var26];
                    var19 = var15.bind(var4)(var19);
                    var19 = var19.t;
                    var19 = var19["6Xcq+Y"];
                    var19 = var22.bind(var23)(var19);
                    var12.accessibilityLabel = var19;
                    var18 = function() {
                        var2 = _closure3_slot0;
                        var0 = _closure1_slot7;
                        var1 = var0.USER_DISMISS;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var12.onPress = var18;
                    var18 = _closure1_slot12;
                    var12.children = var18;
                    var12 = var13.bind(var4)(var17, var12);
                    var9[1] = var12;
                    var8.children = var9;
                    var9 = var11.bind(var4)(var10, var8);
                    var8 = new Array(2);
                    var8[0] = var9;
                    var9 = {};
                    var12 = var16.upsellButtonsContainer;
                    var9.style = var12;
                    var12 = {};
                    var16 = var16.upsellButton;
                    var12.style = var16;
                    var16 = 21;
                    var14 = var14[var16];
                    var14 = var15.bind(var4)(var14);
                    var15 = var14.Button;
                    var14 = {
                        'text': null,
                        'onPress': null,
                        'icon': null,
                        'iconPosition': 'start',
                        'variant': 'secondary',
                        'shiny': true
                    };
                    var17 = _closure2_slot5;
                    var23 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var19 = var18[var26];
                    var19 = var23.bind(var4)(var19);
                    var22 = var19.intl;
                    var19 = var22.string;
                    var18 = var18[var26];
                    var18 = var23.bind(var4)(var18);
                    var18 = var18.t;
                    if (var17) {
                        _fun90530_ip = 606;
                        continue _fun90530
                    }
                case 591:
                    var17 = var18.x6rkDp;
                    var17 = var19.bind(var22)(var17);
                    _fun90530_ip = 619;
                    continue _fun90530;
                case 606:
                    var18 = var18["0Q61kF"];
                    var17 = var19.bind(var22)(var18);
                case 619:
                    var14.text = var17;
                    var17 = _closure2_slot5;
                    if (var17) {
                        _fun90530_ip = 638;
                        continue _fun90530
                    }
                case 632:
                    var17 = _closure2_slot7;
                    _fun90530_ip = 642;
                    continue _fun90530;
                case 638:
                    var17 = _closure2_slot8;
                case 642:
                    var14.onPress = var17;
                    var17 = _closure1_slot13;
                    var14.icon = var17;
                    var19 = 'start';
                    var18 = 'secondary';
                    var14 = var13.bind(var4)(var15, var14);
                    var12.children = var14;
                    var13 = var13.bind(var4)(var10, var12);
                    var12 = new Array(2);
                    var12[0] = var13;
                    var15 = _closure1_slot8;
                    var14 = _closure1_slot4;
                    var13 = {};
                    var17 = _closure2_slot3;
                    var17 = var17.upsellButton;
                    var13.style = var17;
                    var25 = _closure1_slot0;
                    var22 = _closure1_slot2;
                    var16 = var22[var16];
                    var16 = var25.bind(var4)(var16);
                    var17 = var16.Button;
                    var16 = {};
                    var23 = var22[var26];
                    var23 = var25.bind(var4)(var23);
                    var24 = var23.intl;
                    var23 = var24.string;
                    var22 = var22[var26];
                    var22 = var25.bind(var4)(var22);
                    var22 = var22.t;
                    var22 = var22.pWG4ze;
                    var22 = var23.bind(var24)(var22);
                    var16.text = var22;
                    var21 = _closure2_slot6;
                    var16.onPress = var21;
                    var20 = _closure1_slot14;
                    var16.icon = var20;
                    var16.iconPosition = var19;
                    var16.variant = var18;
                    var16 = var15.bind(var4)(var17, var16);
                    var13.children = var16;
                    var13 = var15.bind(var4)(var14, var13);
                    var12[1] = var13;
                    var9.children = var12;
                    var9 = var11.bind(var4)(var10, var9);
                    var8[1] = var9;
                    var5.children = var8;
                    var5 = var7.bind(var4)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var4)(var2, var1);
                case 866:
                    return var0;
            }
        };
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 7073, 660, 1369, 33, 1297, 671, 5234, 5808, 10365, 7071, 566, 3111, 6517, 1358, 7348, 3938, 1234, 4880, 4090, 2]);