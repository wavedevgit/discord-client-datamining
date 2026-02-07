// modules/user_profile/native/UserProfileUpsellCard.tsx
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
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.PROFILE_SIDE_PADDING;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Gradients;
    var _closure1_slot5 = var6;
    var3 = var3.HorizontalGradient;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'marginTop': 8,
        'flexShrink': 0,
        'borderRadius': null,
        'gap': 4
    };
    var9 = 6;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var8.borderRadius = var13;
    var3.upsellButton = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 4,
        'marginBottom': 4
    };
    var3.titleContainer = var8;
    var8 = {
        'tintColor': null,
        'width': 20,
        'height': 20
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var8.tintColor = var13;
    var3.premiumWheelHeader = var8;
    var8 = {
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'overflow': 'hidden'
    };
    var3.linearGradient = var8;
    var8 = {};
    var11 = var11 - var12;
    var8.marginHorizontal = var11;
    var3.outer = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.lg;
    var8.borderRadius = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.scroll = var8;
    var8 = {
        'paddingVertical': 12,
        'paddingHorizontal': 14
    };
    var3.inner = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileUpsellCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun80979: for (var _fun80979_ip = 0;;) switch (_fun80979_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.style;
                var8 = var0.children;
                var14 = var0.ctaText;
                var22 = var0.headerText;
                var13 = var0.showLinearGradient;
                var16 = var0.onPress;
                var0 = _closure1_slot9;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var _closure2_slot0 = var17;
                var2 = _closure1_slot7;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 7;
                var0 = var4[var6];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var7 = 1;
                var0.borderWidth = var7;
                var10 = var17.outer;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var9;
                var0.style = var7;
                var6 = var4[var6];
                var6 = var5.bind(var3)(var6);
                var6 = var6.Direction;
                var6 = var6.HORIZONTAL;
                var0.direction = var6;
                var6 = _closure1_slot5;
                var6 = var6.PREMIUM_TIER_2;
                var0.colors = var6;
                var24 = 6;
                var4 = var4[var24];
                var4 = var5.bind(var3)(var4);
                var4 = var4.radii;
                var4 = var4.lg;
                var0.borderRadius = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var7 = false;
                var4.bounces = var7;
                var7 = var17.scroll;
                var4.style = var7;
                var7 = var17.inner;
                var4.contentContainerStyle = var7;
                var9 = null;
                var7 = var9 != var22;
                if (!var7) {
                    _fun80979_ip = 383;
                    continue _fun80979
                }
            case 228:
                var15 = _closure1_slot8;
                var10 = _closure1_slot3;
                var7 = {};
                var18 = var17.titleContainer;
                var7.style = var18;
                var21 = _closure1_slot7;
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var18 = 8;
                var18 = var23[var18];
                var18 = var20.bind(var3)(var18);
                var19 = var18.NitroWheelIcon;
                var18 = {};
                var25 = _closure1_slot1;
                var24 = var23[var24];
                var24 = var25.bind(var3)(var24);
                var24 = var24.colors;
                var24 = var24.MOBILE_TEXT_HEADING_PRIMARY;
                var18.color = var24;
                var24 = 'xs';
                var18.size = var24;
                var19 = var21.bind(var3)(var19, var18);
                var18 = new Array(2);
                var18[0] = var19;
                var19 = 9;
                var19 = var23[var19];
                var19 = var20.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {};
                var23 = 'heading-sm/bold';
                var19.variant = var23;
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var18[1] = var19;
                var7.children = var18;
                var9 = var15.bind(var3)(var10, var7);
            case 383:
                var7 = new Array(3);
                var7[0] = var9;
                var7[1] = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 10;
                var8 = var15[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var17 = var17.upsellButton;
                var8.style = var17;
                var8.onPress = var16;
                var8.text = var14;
                var14 = _closure1_slot0;
                var11 = 11;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.ButtonColors;
                var11 = var11.GREEN;
                var8.color = var11;
                var11 = function() {
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.NitroWheelIcon;
                    var0 = {
                        'color': 'white',
                        'size': 'xs'
                    };
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var8.renderIcon = var11;
                var11 = undefined;
                if (!var13) {
                    _fun80979_ip = 495;
                    continue _fun80979
                }
            case 488:
                var11 = function() { // Environment: var12
                    var3 = _closure1_slot7;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.linearGradient;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var0.style = var5;
                    var5 = _closure1_slot6;
                    var6 = var5.START;
                    var0.start = var6;
                    var5 = var5.END;
                    var0.end = var5;
                    var4 = _closure1_slot5;
                    var4 = var4.PREMIUM_TIER_2_TRI_COLOR;
                    var0.colors = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
            case 495:
                var8.renderLinearGradient = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7032, 660, 33, 1297, 671, 7355, 5800, 3942, 7702, 4875, 4098, 2]);