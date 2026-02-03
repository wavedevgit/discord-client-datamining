// modules/user_profile/native/UserProfileDismissibleUpsells.tsx
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
    var7 = 0;
    var6 = var5[var7];
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
    var3 = var10.bind(var0)(var3);
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
    var8 = var6.jsx;
    var _closure1_slot8 = var8;
    var6 = var6.jsxs;
    var _closure1_slot9 = var6;
    var14 = var3.PREMIUM_GUILD;
    var6 = new Array(0);
    var15 = var6;
    var13 = 0;
    var3 = arraySpread(var15, var14, var13);
    var3 = var6.reverse;
    var3 = var3.bind(var6)();
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'overflow': 'hidden'
    };
    var3.linearGradient = var8;
    var8 = {
        'paddingVertical': 16,
        'paddingHorizontal': 12
    };
    var9 = 8;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var3.upsellContainer = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME;
    var8.backgroundColor = var12;
    var3.customProfileThemeUpsellContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var3.header = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'flexWrap': 'wrap',
        'gap': 10,
        'marginTop': 12
    };
    var3.upsellButtonsContainer = var8;
    var8 = {};
    var8.flex = var11;
    var3.upsellButton = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var3.premiumButton = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var8.marginRight = var12;
    var3.premiumIcon = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CONTROL_SECONDARY_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var8.borderWidth = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CONTROL_SECONDARY_BORDER_DEFAULT;
    var8.borderColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.shadows;
    var14 = var11.SHADOW_LOW;
    var15 = var8;
    var11 = copyDataProperties(var15, var14);
    var3.customProfileThemePremiumButton = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CONTROL_SECONDARY_BACKGROUND_ACTIVE;
    var8.backgroundColor = var9;
    var3.customProfileThemePremiumButtonPressed = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
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
        var1 = 9;
        var1 = var7[var1];
        var5 = var6.bind(var3)(var1);
        var1 = var5.useUserProfileAnalyticsContext;
        var1 = var1.bind(var5)();
        var1 = var1.trackUserProfileAction;
        var _closure2_slot4 = var1;
        var5 = 10;
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
        var5 = 11;
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
        var0 = 12;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var5 = 13;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.DismissibleContent;
        var6 = var5.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
        var5 = new Array(1);
        var5[0] = var6;
        var0.contentTypes = var5;
        var4 = function arg0() {
            _fun91925: for (var _fun91925_ip = 0;;) switch (_fun91925_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.visibleContent;
                    var0 = var0.markAsDismissed;
                    var _closure3_slot0 = var0;
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 13;
                    var0 = var3[var0];
                    var4 = undefined;
                    var0 = var1.bind(var4)(var0);
                    var0 = var0.DismissibleContent;
                    var1 = var0.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
                    var0 = null;
                    if (!(var2 === var1)) {
                        _fun91925_ip = 948;
                        continue _fun91925
                    }
                case 67:
                    var3 = _closure1_slot8;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 14;
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
                        _fun91925_ip = 205;
                        continue _fun91925
                    }
                case 201:
                    var9 = {};
                    _fun91925_ip = 215;
                    continue _fun91925;
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
                    var14 = _closure1_slot8;
                    var17 = _closure1_slot0;
                    var15 = _closure1_slot2;
                    var9 = 15;
                    var9 = var15[var9];
                    var9 = var17.bind(var4)(var9);
                    var12 = var9.Text;
                    var9 = {
                        'accessibilityRole': 'header',
                        'variant': 'text-sm/semibold'
                    };
                    var24 = 16;
                    var18 = var15[var24];
                    var18 = var17.bind(var4)(var18);
                    var22 = var18.intl;
                    var21 = var22.string;
                    var18 = var15[var24];
                    var18 = var17.bind(var4)(var18);
                    var18 = var18.t;
                    var18 = var18.EIYbj6;
                    var18 = var21.bind(var22)(var18);
                    var9.children = var18;
                    var12 = var14.bind(var4)(var12, var9);
                    var9 = new Array(2);
                    var9[0] = var12;
                    var12 = 17;
                    var12 = var15[var12];
                    var12 = var17.bind(var4)(var12);
                    var18 = var12.PressableOpacity;
                    var12 = {};
                    var21 = 'button';
                    var12.accessibilityRole = var21;
                    var21 = var15[var24];
                    var21 = var17.bind(var4)(var21);
                    var23 = var21.intl;
                    var22 = var23.string;
                    var21 = var15[var24];
                    var21 = var17.bind(var4)(var21);
                    var21 = var21.t;
                    var21 = var21["6Xcq+Y"];
                    var21 = var22.bind(var23)(var21);
                    var12.accessibilityLabel = var21;
                    var19 = function() {
                        var2 = _closure3_slot0;
                        var0 = _closure1_slot7;
                        var1 = var0.USER_DISMISS;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var12.onPress = var19;
                    var19 = 18;
                    var19 = var15[var19];
                    var19 = var17.bind(var4)(var19);
                    var21 = var19.XSmallIcon;
                    var19 = {};
                    var22 = 'sm';
                    var19.size = var22;
                    var19 = var14.bind(var4)(var21, var19);
                    var12.children = var19;
                    var12 = var14.bind(var4)(var18, var12);
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
                    var16 = 19;
                    var15 = var15[var16];
                    var15 = var17.bind(var4)(var15);
                    var25 = var15.Button;
                    var17 = {
                        'text': null,
                        'onPress': null,
                        'icon': null,
                        'iconPosition': 'start',
                        'variant': 'secondary',
                        'shiny': true
                    };
                    var15 = _closure2_slot5;
                    var23 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var19 = var18[var24];
                    var19 = var23.bind(var4)(var19);
                    var21 = var19.intl;
                    var19 = var21.string;
                    var18 = var18[var24];
                    var18 = var23.bind(var4)(var18);
                    var18 = var18.t;
                    if (var15) {
                        _fun91925_ip = 636;
                        continue _fun91925
                    }
                case 621:
                    var15 = var18.x6rkDp;
                    var15 = var19.bind(var21)(var15);
                    _fun91925_ip = 649;
                    continue _fun91925;
                case 636:
                    var18 = var18["0Q61kF"];
                    var15 = var19.bind(var21)(var18);
                case 649:
                    var17.text = var15;
                    var15 = _closure2_slot5;
                    if (var15) {
                        _fun91925_ip = 668;
                        continue _fun91925
                    }
                case 662:
                    var15 = _closure2_slot7;
                    _fun91925_ip = 672;
                    continue _fun91925;
                case 668:
                    var15 = _closure2_slot8;
                case 672:
                    var17.onPress = var15;
                    var15 = _closure1_slot8;
                    var21 = _closure1_slot0;
                    var23 = _closure1_slot2;
                    var18 = 20;
                    var18 = var23[var18];
                    var18 = var21.bind(var4)(var18);
                    var19 = var18.NitroWheelIcon;
                    var18 = {};
                    var18.size = var22;
                    var18 = var15.bind(var4)(var19, var18);
                    var17.icon = var18;
                    var19 = 'start';
                    var18 = 'secondary';
                    var17 = var14.bind(var4)(var25, var17);
                    var12.children = var17;
                    var14 = var14.bind(var4)(var10, var12);
                    var12 = new Array(2);
                    var12[0] = var14;
                    var14 = _closure1_slot4;
                    var13 = {};
                    var17 = _closure2_slot3;
                    var17 = var17.upsellButton;
                    var13.style = var17;
                    var16 = var23[var16];
                    var16 = var21.bind(var4)(var16);
                    var17 = var16.Button;
                    var16 = {};
                    var25 = var23[var24];
                    var25 = var21.bind(var4)(var25);
                    var26 = var25.intl;
                    var25 = var26.string;
                    var24 = var23[var24];
                    var24 = var21.bind(var4)(var24);
                    var24 = var24.t;
                    var24 = var24.pWG4ze;
                    var24 = var25.bind(var26)(var24);
                    var16.text = var24;
                    var20 = _closure2_slot6;
                    var16.onPress = var20;
                    var20 = 21;
                    var20 = var23[var20];
                    var20 = var21.bind(var4)(var20);
                    var21 = var20.ShopIcon;
                    var20 = {};
                    var20.size = var22;
                    var20 = var15.bind(var4)(var21, var20);
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
                case 948:
                    return var0;
            }
        };
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1613, 6970, 660, 1369, 33, 1297, 671, 6966, 566, 3100, 5952, 1358, 7279, 3932, 1234, 4897, 4727, 4075, 5744, 10516, 2]);