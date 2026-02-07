// components_native/premium/PremiumSubscriptionUpsell.tsx
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
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var12 = var3.StyleSheet;
    var14 = 2;
    var3 = var5[var14];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var13 = var3.Fonts;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot7 = var6;
    var3 = var3.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.Fragment;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.textAlign = var9;
    var3.title = var8;
    var11 = 20;
    var9 = 8;
    var8 = {
        'lineHeight': 20,
        'marginTop': 8,
        'textAlign': 'center'
    };
    var3.subtitle = var8;
    var8 = {};
    var15 = 32;
    var8.paddingTop = var15;
    var12 = var12.hairlineWidth;
    var12 = var14 * var12;
    var8.borderTopWidth = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderTopColor = var12;
    var3.upsell = var8;
    var8 = {
        'borderRadius': null,
        'padding': 16,
        'alignItems': 'center'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var8.borderRadius = var12;
    var12 = 16;
    var3.upsellCard = var8;
    var8 = {
        'borderRadius': null,
        'padding': 16,
        'marginTop': 12,
        'alignSelf': 'stretch'
    };
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var8.borderRadius = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var8.backgroundColor = var14;
    var3.upsellFeatures = var8;
    var8 = {
        'alignSelf': 'center',
        'height': 10,
        'width': 54
    };
    var3.upsellFeatureSubLogo = var8;
    var8 = {};
    var8.marginTop = var9;
    var3.upsellFeatureList = var8;
    var8 = {};
    var8.marginTop = var12;
    var3.upsellButton = var8;
    var8 = {
        'alignSelf': 'center',
        'height': 20,
        'marginTop': 6,
        'width': 84
    };
    var3.upsellFeatureLogoTier2 = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.WHITE;
    var8.color = var14;
    var13 = var13.PRIMARY_SEMIBOLD;
    var8.fontFamily = var13;
    var8.fontSize = var12;
    var8.lineHeight = var11;
    var3.upsellLabel = var8;
    var8 = {
        'paddingVertical': 0,
        'marginTop': 8
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.WHITE;
    var8.color = var11;
    var3.upsellRow = var8;
    var8 = {};
    var11 = 9;
    var11 = var5[var11];
    var12 = var4.bind(var0)(var11);
    var11 = var12.hexWithOpacity;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var10 = var9.WHITE;
    var9 = 0.5;
    var9 = var11.bind(var12)(var10, var9);
    var8.color = var9;
    var3.upsellLabelMuted = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/PremiumSubscriptionUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun83526: for (var _fun83526_ip = 0;;) switch (_fun83526_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.onLearnMorePremium;
                var6 = var0.style;
                var0 = _closure1_slot12;
                var4 = undefined;
                var12 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = 13;
                var1 = var0[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var10 = var3.bind(var5)(var2, var1);
                var1 = _closure1_slot1;
                var11 = 14;
                var0 = var0[var11];
                var1 = var1.bind(var4)(var0);
                var0 = var1.canUsePremiumGuildMemberProfile;
                var1 = var0.bind(var1)(var10);
                var0 = null;
                if (var1) {
                    _fun83526_ip = 1273;
                    continue _fun83526
                }
            case 114:
                var3 = _closure1_slot9;
                var2 = _closure1_slot3;
                var1 = {};
                var7 = var12.upsell;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.style = var5;
                var7 = _closure1_slot11;
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 15;
                var5 = var8[var5];
                var6 = var9.bind(var4)(var5);
                var5 = {};
                var13 = var12.upsellCard;
                var5.style = var13;
                var15 = _closure1_slot0;
                var13 = 16;
                var16 = var8[var13];
                var16 = var15.bind(var4)(var16);
                var16 = var16.HorizontalGradient;
                var16 = var16.START;
                var5.start = var16;
                var16 = var8[var13];
                var16 = var15.bind(var4)(var16);
                var16 = var16.HorizontalGradient;
                var16 = var16.END;
                var5.end = var16;
                var13 = var8[var13];
                var13 = var15.bind(var4)(var13);
                var13 = var13.Gradients;
                var13 = var13.PREMIUM_GUILD;
                var5.colors = var13;
                var8 = var8[var11];
                var9 = var9.bind(var4)(var8);
                var8 = var9.isPremium;
                var8 = var8.bind(var9)(var10);
                if (var8) {
                    _fun83526_ip = 405;
                    continue _fun83526
                }
            case 287:
                var10 = _closure1_slot9;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 17;
                var8 = var17[var8];
                var8 = var16.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/semibold',
                    'color': 'always-white'
                };
                var11 = var12.title;
                var8.style = var11;
                var11 = 11;
                var13 = var17[var11];
                var13 = var16.bind(var4)(var13);
                var15 = var13.intl;
                var13 = var15.string;
                var11 = var17[var11];
                var11 = var16.bind(var4)(var11);
                var11 = var11.t;
                var11 = var11["qUl+K4"];
                var11 = var13.bind(var15)(var11);
                var8.children = var11;
                var9 = var10.bind(var4)(var9, var8);
                _fun83526_ip = 658;
                continue _fun83526;
            case 405:
                var11 = _closure1_slot11;
                var10 = _closure1_slot10;
                var8 = {};
                var17 = _closure1_slot9;
                var19 = _closure1_slot0;
                var22 = _closure1_slot2;
                var15 = 17;
                var13 = var22[var15];
                var13 = var19.bind(var4)(var13);
                var16 = var13.Text;
                var13 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/semibold',
                    'color': 'always-white'
                };
                var18 = var12.title;
                var13.style = var18;
                var18 = 11;
                var20 = var22[var18];
                var20 = var19.bind(var4)(var20);
                var23 = var20.intl;
                var21 = var23.string;
                var20 = var22[var18];
                var20 = var19.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.YYfHlx;
                var20 = var21.bind(var23)(var20);
                var13.children = var20;
                var16 = var17.bind(var4)(var16, var13);
                var13 = new Array(2);
                var13[0] = var16;
                var15 = var22[var15];
                var15 = var19.bind(var4)(var15);
                var16 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'always-white'
                };
                var20 = var12.subtitle;
                var15.style = var20;
                var20 = var22[var18];
                var20 = var19.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.format;
                var18 = var22[var18];
                var18 = var19.bind(var4)(var18);
                var18 = var18.t;
                var19 = var18.Af0zEZ;
                var18 = {};
                var22 = _closure1_slot7;
                var18.numFreeGuildSubscriptions = var22;
                var18 = var20.bind(var21)(var19, var18);
                var15.children = var18;
                var15 = var17.bind(var4)(var16, var15);
                var13[1] = var15;
                var8.children = var13;
                var9 = var11.bind(var4)(var10, var8);
            case 658:
                var8 = new Array(3);
                var8[0] = var9;
                var13 = _closure1_slot11;
                var11 = _closure1_slot3;
                var9 = {};
                var10 = var12.upsellFeatures;
                var9.style = var10;
                var10 = _closure1_slot9;
                var17 = _closure1_slot4;
                var15 = {};
                var16 = var12.upsellFeatureSubLogo;
                var15.style = var16;
                var24 = _closure1_slot1;
                var19 = _closure1_slot2;
                var16 = 18;
                var16 = var19[var16];
                var16 = var24.bind(var4)(var16);
                var15.source = var16;
                var15 = var10.bind(var4)(var17, var15);
                var16 = new Array(3);
                var16[0] = var15;
                var15 = {};
                var18 = var12.upsellFeatureLogoTier2;
                var15.style = var18;
                var18 = 19;
                var18 = var19[var18];
                var18 = var24.bind(var4)(var18);
                var15.source = var18;
                var15 = var10.bind(var4)(var17, var15);
                var16[1] = var15;
                var15 = 20;
                var15 = var19[var15];
                var20 = var24.bind(var4)(var15);
                var17 = {};
                var15 = var12.upsellFeatureList;
                var17.style = var15;
                var22 = {};
                var18 = _closure1_slot0;
                var25 = 10;
                var15 = var19[var25];
                var15 = var18.bind(var4)(var15);
                var15 = var15.CheckmarkLargeIcon;
                var22.IconComponent = var15;
                var15 = 11;
                var21 = var19[var15];
                var21 = var18.bind(var4)(var21);
                var27 = var21.intl;
                var26 = var27.formatToPlainString;
                var21 = var19[var15];
                var21 = var18.bind(var4)(var21);
                var21 = var21.t;
                var23 = var21.P3aEj6;
                var21 = {};
                var28 = 12;
                var28 = var19[var28];
                var32 = var18.bind(var4)(var28);
                var31 = var32.formatPercent;
                var28 = _closure1_slot5;
                var30 = var28.locale;
                var33 = _closure1_slot8;
                var28 = 100;
                var28 = var33 / var28;
                var28 = var31.bind(var32)(var30, var28);
                var21.discountPercentage = var28;
                var21 = var26.bind(var27)(var23, var21);
                var22.label = var21;
                var23 = 8;
                var21 = var19[var23];
                var21 = var24.bind(var4)(var21);
                var21 = var21.unsafe_rawColors;
                var21 = var21.WHITE;
                var22.color = var21;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = {};
                var25 = var19[var25];
                var25 = var18.bind(var4)(var25);
                var25 = var25.CheckmarkLargeIcon;
                var22.IconComponent = var25;
                var25 = var19[var15];
                var25 = var18.bind(var4)(var25);
                var28 = var25.intl;
                var27 = var28.formatToPlainString;
                var25 = var19[var15];
                var25 = var18.bind(var4)(var25);
                var25 = var25.t;
                var26 = var25.Ntlzbd;
                var25 = {};
                var29 = _closure1_slot7;
                var25.numFreeGuildSubscriptions = var29;
                var25 = var27.bind(var28)(var26, var25);
                var22.label = var25;
                var23 = var19[var23];
                var23 = var24.bind(var4)(var23);
                var23 = var23.unsafe_rawColors;
                var23 = var23.WHITE;
                var22.color = var23;
                var21[1] = var22;
                var17.features = var21;
                var21 = var12.upsellLabel;
                var17.labelStyle = var21;
                var21 = var12.upsellRow;
                var17.rowStyle = var21;
                var17 = var10.bind(var4)(var20, var17);
                var16[2] = var17;
                var9.children = var16;
                var9 = var13.bind(var4)(var11, var9);
                var8[1] = var9;
                var9 = {};
                var12 = var12.upsellButton;
                var9.style = var12;
                var12 = 21;
                var12 = var19[var12];
                var12 = var18.bind(var4)(var12);
                var13 = var12.Button;
                var12 = {};
                var16 = 'experimental_premium-secondary';
                var12.variant = var16;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15.fJOECn;
                var15 = var16.bind(var17)(var15);
                var12.text = var15;
                var12.onPress = var14;
                var12 = var10.bind(var4)(var13, var12);
                var9.children = var12;
                var9 = var10.bind(var4)(var11, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1273:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1687, 1621, 660, 1623, 33, 1297, 671, 3241, 3263, 1234, 1604, 566, 3111, 4098, 670, 3942, 10726, 10727, 7761, 4084, 2]);