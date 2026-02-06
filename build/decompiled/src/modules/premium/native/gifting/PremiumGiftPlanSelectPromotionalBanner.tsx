// modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HorizontalGradient;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot5 = var7;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {
            'minHeight': 60,
            'overflow': 'hidden'
        };
        var0.gradient = var1;
        var5 = 5;
        var1 = {
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'right': 0,
            'width': '100%',
            'aspectRatio': 5,
            'opacity': 0.4
        };
        var0.bannerImage = var1;
        var1 = {
            'minHeight': 60,
            'justifyContent': 'center',
            'gap': 2
        };
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var6 = var2[var5];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.paddingTop = var6;
        var6 = var2[var5];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.paddingBottom = var6;
        var2 = var2[var5];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_24;
        var1.paddingStart = var2;
        var2 = 120;
        var1.paddingEnd = var2;
        var0.content = var1;
        var1 = {};
        var0.heading = var1;
        var1 = {};
        var0.subheading = var1;
        var1 = {
            'position': 'absolute',
            'top': 0,
            'bottom': 0,
            'right': 10,
            'justifyContent': 'center',
            'alignItems': 'center'
        };
        var0.logoContainer = var1;
        var1 = {
            'width': 95,
            'height': 95
        };
        var0.logo = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun75086: for (var _fun75086_ip = 0;;) switch (_fun75086_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.giftPlanSelectionCardBannerComponent;
                var21 = var1.claimableRewards;
                var13 = var1.isSelected;
                var4 = var1.onLayout;
                var1 = _closure1_slot7;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var7 = var0.gradient;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 6;
                var6 = var5[var1];
                var10 = var2.bind(var3)(var6);
                var8 = var10.useThemeAndReducedMotionAwareAssetUrl;
                var6 = var0.mobileBannerAsset;
                var14 = var8.bind(var10)(var6);
                var1 = var5[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.useThemeAndReducedMotionAwareAssetUrl;
                var1 = var0.avatarAsset;
                var0 = true;
                var11 = var2.bind(var6)(var1, var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = 7;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = var12.gradient;
                var0.style = var5;
                var5 = _closure1_slot4;
                var6 = var5.START;
                var0.start = var6;
                var5 = var5.END;
                var0.end = var5;
                var5 = null;
                var8 = var5 == var7;
                var6 = undefined;
                if (var8) {
                    _fun75086_ip = 184;
                    continue _fun75086
                }
            case 179:
                var6 = var7.colors;
            case 184:
                if (!(var5 == var6)) {
                    _fun75086_ip = 192;
                    continue _fun75086
                }
            case 188:
                var6 = new Array(0);
            case 192:
                var0.colors = var6;
                var0.onLayout = var4;
                var6 = var5 != var14;
                if (!var6) {
                    _fun75086_ip = 268;
                    continue _fun75086
                }
            case 208:
                var8 = _closure1_slot5;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 8;
                var4 = var10[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var10 = var12.bannerImage;
                var4.style = var10;
                var10 = 'cover';
                var4.resizeMode = var10;
                var10 = {};
                var10.uri = var14;
                var4.source = var10;
                var6 = var8.bind(var3)(var7, var4);
            case 268:
                var4 = new Array(3);
                var4[0] = var6;
                var8 = _closure1_slot6;
                var7 = _closure1_slot3;
                var6 = {};
                var10 = var12.content;
                var6.style = var10;
                var16 = _closure1_slot5;
                var18 = _closure1_slot0;
                var22 = _closure1_slot2;
                var14 = 9;
                var10 = var22[var14];
                var10 = var18.bind(var3)(var10);
                var15 = var10.Text;
                var10 = {
                    'style': null,
                    'variant': 'text-md/bold',
                    'color': 'white'
                };
                var17 = var12.heading;
                var10.style = var17;
                var17 = 10;
                var19 = var22[var17];
                var19 = var18.bind(var3)(var19);
                var23 = var19.intl;
                var20 = var23.string;
                var19 = var22[var17];
                var19 = var18.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.OEtqpm;
                var19 = var20.bind(var23)(var19);
                var10.children = var19;
                var15 = var16.bind(var3)(var15, var10);
                var10 = new Array(2);
                var10[0] = var15;
                var14 = var22[var14];
                var14 = var18.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'white'
                };
                var19 = var12.subheading;
                var14.style = var19;
                var19 = var22[var17];
                var19 = var18.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.formatToPlainString;
                var17 = var22[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.t;
                var18 = var17["2h5M+X"];
                var17 = {};
                var21 = var21.length;
                var17.availableCount = var21;
                var17 = var19.bind(var20)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var10[1] = var14;
                var6.children = var10;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                var5 = var5 != var11;
                if (!var5) {
                    _fun75086_ip = 626;
                    continue _fun75086
                }
            case 547:
                var8 = _closure1_slot5;
                var7 = _closure1_slot3;
                var6 = {};
                var10 = var12.logoContainer;
                var6.style = var10;
                var10 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 11;
                var9 = var14[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var9.shouldAnimate = var13;
                var12 = var12.logo;
                var9.promoRotatingStyle = var12;
                var9.rotatingAvatarImageUrl = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 626:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 9471, 4099, 4705, 3943, 1234, 9475, 2]);