// modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var12 = 0;
    var6 = var5[var12];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot4 = var6;
    var6 = var3.Image;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot8 = var6;
    var6 = var3.AnalyticsSections;
    var _closure1_slot9 = var6;
    var3 = var3.AnalyticsObjects;
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.SubscriptionPlans;
    var _closure1_slot11 = var6;
    var3 = var3.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot12 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var3 = var3.jsxs;
    var _closure1_slot14 = var3;
    var6 = {};
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var6.icon = var3;
    var3 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 7;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.uAfKTe;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.description = var3;
    var10 = 8;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.unsafe_rawColors;
    var3 = var3.PREMIUM_PERK_PURPLE;
    var6.color = var3;
    var3 = new Array(3);
    var3[0] = var6;
    var6 = {};
    var7 = 9;
    var7 = var5[var7];
    var7 = var11.bind(var0)(var7);
    var6.icon = var7;
    var7 = function() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 7;
        var2 = var6[var0];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var3 = var2.intl;
        var2 = var3.formatToPlainString;
        var0 = var6[var0];
        var0 = var5.bind(var1)(var0);
        var0 = var0.t;
        var1 = var0.aVSVBO;
        var0 = {};
        var4 = _closure1_slot12;
        var0.numFreeGuildSubscriptions = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6.description = var7;
    var3[1] = var6;
    var6 = {};
    var7 = 10;
    var7 = var5[var7];
    var7 = var11.bind(var0)(var7);
    var6.icon = var7;
    var7 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 7;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.pqHIf7;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.description = var7;
    var7 = var5[var10];
    var7 = var11.bind(var0)(var7);
    var7 = var7.unsafe_rawColors;
    var7 = var7.PREMIUM_PERK_GREEN;
    var6.color = var7;
    var3[2] = var6;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 18;
    var8.paddingTop = var9;
    var3.alert = var8;
    var8 = {};
    var9 = 500;
    var8.height = var9;
    var3.shortHeightAlert = var8;
    var8 = {};
    var9 = 'center';
    var8.alignItems = var9;
    var3.content = var8;
    var8 = {
        'flexDirection': 'row-reverse',
        'width': '100%',
        'marginBottom': 16
    };
    var3.closeContainer = var8;
    var8 = {
        'textAlign': 'center',
        'lineHeight': 20
    };
    var3.description = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'marginTop': 16,
        'marginBottom': 0,
        'paddingHorizontal': 12,
        'paddingVertical': 8,
        'width': '100%'
    };
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var9 = 12;
    var3.perks = var8;
    var8 = {
        'paddingVertical': 10,
        'borderBottomColor': null,
        'borderBottomWidth': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_560;
    var8.borderBottomColor = var13;
    var3.perkRow = var8;
    var8 = {};
    var8.borderBottomWidth = var12;
    var3.lastPerkRow = var8;
    var8 = {
        'width': 24,
        'marginRight': 20
    };
    var3.perkIcon = var8;
    var8 = {
        'lineHeight': 20,
        'flexShrink': 1
    };
    var3.perkText = var8;
    var8 = {
        'color': null,
        'marginTop': 16,
        'fontSize': 12,
        'lineHeight': 16
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_DEFAULT;
    var8.color = var10;
    var3.disclaimer = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.imageHeader = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = function arg0() {
        _fun74393: for (var _fun74393_ip = 0;;) switch (_fun74393_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.perk;
                var7 = var0.isLastPerk;
                var0 = _closure1_slot16;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot14;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var8.perkRow;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = undefined;
                if (!var7) {
                    _fun74393_ip = 63;
                    continue _fun74393
                }
            case 57:
                var6 = var8.lastPerkRow;
            case 63:
                var4[1] = var6;
                var0.style = var4;
                var7 = _closure1_slot13;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 12;
                var4 = var10[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var11 = var8.perkIcon;
                var4.style = var11;
                var11 = var9.icon;
                var4.source = var11;
                var12 = var9.color;
                var11 = null;
                var11 = var11 == var12;
                var4.disableColor = var11;
                var11 = var9.color;
                var4.color = var11;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot0;
                var5 = 13;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-md/medium',
                    'color': 'interactive-text-active'
                };
                var8 = var8.perkText;
                var5.style = var8;
                var8 = var9.description;
                var8 = var8.bind(var9)();
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var3;
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74394: for (var _fun74394_ip = 0;;) switch (_fun74394_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.onClose;
                var0 = var0.analyticsLocation;
                var _closure2_slot0 = var0;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var0 = _closure1_slot16;
                var17 = var0.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var15
                    _fun74395: for (var _fun74395_ip = 0;;) switch (_fun74395_ip) {
                        case 0:
                            var2 = _closure1_slot7;
                            var1 = var2.isReady;
                            var1 = var1.bind(var2)();
                            if (var1) {
                                _fun74395_ip = 62;
                                continue _fun74395
                            }
                        case 20:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.loadProducts;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 16;
                var0 = var2[var0];
                var4 = var1.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot7;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var15
                    var2 = _closure1_slot7;
                    var1 = var2.getProduct;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 17;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.BasePlanIdToProductId;
                    var0 = _closure1_slot11;
                    var0 = var0.PREMIUM_MONTH_TIER_2;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var4)(var1, var0);
                var21 = null;
                var1 = var21 == var0;
                var22 = undefined;
                if (var1) {
                    _fun74394_ip = 131;
                    continue _fun74394
                }
            case 125:
                var22 = var0.priceString;
            case 131:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 18;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var6 = var0.height;
                var0 = 19;
                var0 = var4[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.analyticsLocations;
                _closure2_slot1 = var0;
                var2 = _closure1_slot14;
                var0 = 20;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = _closure1_slot0;
                var23 = 7;
                var5 = var4[var23];
                var5 = var9.bind(var3)(var5);
                var10 = var5.intl;
                var7 = var10.string;
                var5 = var4[var23];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.f3Pet9;
                var5 = var7.bind(var10)(var5);
                var0.cancelText = var5;
                var5 = 21;
                var5 = var4[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.ButtonColors;
                var5 = var5.GREEN;
                var0.confirmColor = var5;
                var5 = var4[var23];
                var5 = var9.bind(var3)(var5);
                var7 = var5.intl;
                var5 = var7.string;
                var4 = var4[var23];
                var4 = var9.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.o3Tnif;
                var4 = var5.bind(var7)(var4);
                var0.confirmText = var4;
                var4 = function() {
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 22;
                    var3 = var1[var0];
                    var0 = undefined;
                    var8 = var4.bind(var0)(var3);
                    var7 = var8.track;
                    var3 = _closure1_slot8;
                    var6 = var3.PREMIUM_PROMOTION_OPENED;
                    var3 = {};
                    var9 = {};
                    var12 = _closure2_slot0;
                    var13 = var9;
                    var10 = copyDataProperties(var13, var12);
                    var10 = _closure1_slot9;
                    var11 = var10.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
                    var10 = 'section';
                    var9[var10] = var11;
                    var10 = _closure1_slot10;
                    var11 = var10.BUTTON_CTA;
                    var10 = 'object';
                    var9[var10] = var11;
                    var3.location = var9;
                    var3 = var7.bind(var8)(var6, var3);
                    var3 = 23;
                    var3 = var1[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.pushLazy;
                    var6 = _closure1_slot0;
                    var2 = 25;
                    var2 = var1[var2];
                    var6 = var6.bind(var0)(var2);
                    var2 = 24;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var6.bind(var0)(var2, var1);
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1.analyticsLocations = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0.onConfirm = var4;
                var0.onClose = var8;
                var0.onCancel = var8;
                var5 = var17.alert;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 580;
                var6 = var6 <= var5;
                var5 = null;
                if (!var6) {
                    _fun74394_ip = 397;
                    continue _fun74394
                }
            case 391:
                var5 = var17.shortHeightAlert;
            case 397:
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot13;
                var10 = _closure1_slot4;
                var4 = {};
                var5 = var17.closeContainer;
                var4.style = var5;
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 26;
                var5 = var14[var5];
                var5 = var18.bind(var3)(var5);
                var6 = var5.PressableOpacity;
                var5 = {
                    'accessibilityRole': 'button',
                    'accessibilityLabel': 'close'
                };
                var5.onPress = var8;
                var19 = _closure1_slot1;
                var8 = 12;
                var8 = var14[var8];
                var9 = var19.bind(var3)(var8);
                var8 = {};
                var11 = 27;
                var11 = var14[var11];
                var11 = var19.bind(var3)(var11);
                var8.source = var11;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4.children = var5;
                var5 = var7.bind(var3)(var10, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot6;
                var5 = {};
                var9 = _closure1_slot14;
                var8 = {};
                var11 = var17.content;
                var8.style = var11;
                var11 = function() {
                    var0 = true;
                    return var0;
                };
                var8.onStartShouldSetResponder = var11;
                var12 = _closure1_slot5;
                var11 = {};
                var13 = 28;
                var13 = var14[var13];
                var13 = var19.bind(var3)(var13);
                var11.source = var13;
                var13 = var17.imageHeader;
                var11.style = var13;
                var12 = var7.bind(var3)(var12, var11);
                var11 = new Array(3);
                var11[0] = var12;
                var12 = 13;
                var12 = var14[var12];
                var12 = var18.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var19 = var17.description;
                var12.style = var19;
                var19 = 'text-md/medium';
                var12.variant = var19;
                var19 = var14[var23];
                var19 = var18.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.format;
                var14 = var14[var23];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var18 = var14.TBsJfQ;
                var14 = {};
                var23 = var21 != var22;
                var21 = '$...';
                if (!var23) {
                    _fun74394_ip = 711;
                    continue _fun74394
                }
            case 708:
                var21 = var22;
            case 711:
                var14.monthlyPrice = var21;
                var14 = var19.bind(var20)(var18, var14);
                var12.children = var14;
                var12 = var7.bind(var3)(var13, var12);
                var11[1] = var12;
                var14 = _closure1_slot13;
                var13 = _closure1_slot4;
                var12 = {};
                var17 = var17.perks;
                var12.style = var17;
                var17 = _closure1_slot15;
                var16 = var17.map;
                var15 = function(arg0, arg1) { // Environment: var15
                    var4 = arg1;
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot17;
                    var1 = {};
                    var5 = arg0;
                    var1.perk = var5;
                    var0 = _closure1_slot15;
                    var5 = var0.length;
                    var0 = 1;
                    var0 = var5 - var0;
                    var0 = var4 === var0;
                    var1.isLastPerk = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
                };
                var15 = var16.bind(var17)(var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var8.children = var11;
                var8 = var9.bind(var3)(var10, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4575, 660, 1615, 33, 9339, 1234, 671, 9340, 9341, 1297, 4045, 3900, 806, 7009, 566, 4572, 1464, 5688, 3896, 4836, 795, 4525, 7006, 1307, 4865, 5285, 9342, 2]);