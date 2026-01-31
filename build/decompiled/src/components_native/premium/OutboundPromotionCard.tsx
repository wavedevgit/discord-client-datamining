// components_native/premium/OutboundPromotionCard.tsx
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
        var0 = arg0;
        var11 = var0.termsAndConditions;
        var0 = _closure1_slot9;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot7;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 8;
        var0 = var9[var0];
        var0 = var5.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var10 = _closure1_slot7;
        var4 = 9;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var6 = var4.BottomSheetTitleHeader;
        var4 = {};
        var12 = 10;
        var13 = var9[var12];
        var13 = var5.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var9[var12];
        var12 = var5.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.PdKWVT;
        var12 = var13.bind(var14)(var12);
        var4.title = var12;
        var4 = var10.bind(var3)(var6, var4);
        var0.header = var4;
        var6 = _closure1_slot7;
        var4 = 11;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Text;
        var4 = {};
        var8 = var8.termsAndConditionsText;
        var4.style = var8;
        var8 = 'text-sm/medium';
        var4.variant = var8;
        var8 = _closure1_slot1;
        var7 = 12;
        var7 = var9[var7];
        var10 = var8.bind(var3)(var7);
        var9 = var10.parse;
        var8 = {};
        var7 = true;
        var8.allowLinks = var7;
        var7 = false;
        var7 = var9.bind(var10)(var11, var7, var8);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
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
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.Image;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
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
        'flex': 1,
        'flexDirection': 'column',
        'paddingHorizontal': null,
        'paddingVertical': 12,
        'backgroundColor': null,
        'marginTop': 8
    };
    var8.paddingHorizontal = var9;
    var9 = 12;
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.card = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var3.mainContainer = var8;
    var8 = {
        'flexDirection': 'row',
        'flexShrink': 1,
        'alignItems': 'center'
    };
    var3.textContainer = var8;
    var8 = {
        'width': 32,
        'height': 32,
        'marginRight': 8,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var8.borderRadius = var10;
    var10 = 7;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_BLACK_500_LIGHT_PRIMARY_100;
    var8.backgroundColor = var10;
    var3.imageContainer = var8;
    var8 = {
        'width': 28,
        'height': 28,
        'resizeMode': 'contain'
    };
    var3.image = var8;
    var8 = {};
    var10 = 20;
    var8.lineHeight = var10;
    var3.title = var8;
    var8 = {};
    var10 = 18;
    var8.lineHeight = var10;
    var3.subText = var8;
    var8 = {};
    var8.paddingHorizontal = var9;
    var3.claimButton = var8;
    var8 = {};
    var9 = 40;
    var8.marginLeft = var9;
    var3.moreDetails = var8;
    var8 = {
        'paddingHorizontal': 16,
        'paddingTop': 16
    };
    var3.termsAndConditionsText = var8;
    var8 = {
        'flexGrow': 1,
        'flexDirection': 'row',
        'marginLeft': 4,
        'justifyContent': 'flex-end'
    };
    var3.buttonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/premium/OutboundPromotionCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun82618: for (var _fun82618_ip = 0;;) switch (_fun82618_ip) {
            case 0:
                var1 = arg0;
                var20 = var1.outboundPromotion;
                var _closure2_slot0 = var20;
                var0 = var1.code;
                var _closure2_slot1 = var0;
                var6 = var1.addClaimedOutboundPromotionCode;
                var _closure2_slot2 = var6;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var1 = _closure1_slot9;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 13;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var9 = var1.bind(var3)();
                var7 = _closure1_slot0;
                var1 = 14;
                var1 = var4[var1];
                var8 = var7.bind(var3)(var1);
                var7 = var8.getPromotionImageURL;
                var1 = var20.id;
                var15 = var7.bind(var8)(var1, var9);
                var1 = null;
                var7 = var1 != var0;
                var1 = 15;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var9 = var1.bind(var3)(var20, var7);
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var14 = 10;
                var4 = var1[var14];
                var4 = var2.bind(var3)(var4);
                var8 = var4.intl;
                var4 = var8.formatToPlainString;
                var1 = var1[var14];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                if (var7) {
                    _fun82618_ip = 206;
                    continue _fun82618
                }
            case 183:
                var10 = var1["/XWgfG"];
                var2 = {};
                var2.endDate = var9;
                var21 = var4.bind(var8)(var10, var2);
                _fun82618_ip = 227;
                continue _fun82618;
            case 206:
                var2 = var1.VaD05h;
                var1 = {};
                var1.endDate = var9;
                var21 = var4.bind(var8)(var2, var1);
            case 227:
                var8 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var14];
                var2 = var8.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var14];
                var1 = var8.bind(var3)(var1);
                var1 = var1.t;
                if (var7) {
                    _fun82618_ip = 286;
                    continue _fun82618
                }
            case 271:
                var7 = var1.O13yhz;
                var18 = var2.bind(var4)(var7);
                _fun82618_ip = 299;
                continue _fun82618;
            case 286:
                var1 = var1["2cHUti"];
                var18 = var2.bind(var4)(var1);
            case 299:
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = false;
                var7 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var2 = var2.bind(var3)(var7, var1);
                var1 = 0;
                var7 = var2[var1];
                _closure2_slot3 = var7;
                var1 = 1;
                var1 = var2[var1];
                _closure2_slot4 = var1;
                var2 = var4.useLayoutEffect;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var0;
                var1[3] = var20;
                var0 = function() { // Environment: var13
                    _fun82619: for (var _fun82619_ip = 0;;) switch (_fun82619_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (!var0) {
                                _fun82619_ip = 62;
                                continue _fun82619
                            }
                        case 10:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 16;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.openLazy;
                            var0 = {};
                            var3 = function() {
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var1 = 18;
                                var1 = var0[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = 17;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var2 = var2.bind(var3)(var1, var0);
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var1 = var1.default;
                                    var _closure5_slot0 = var1;
                                    var0 = function(arg0) { // Environment: var0
                                        var3 = _closure1_slot7;
                                        var2 = _closure5_slot0;
                                        var1 = {};
                                        var6 = arg0;
                                        var7 = var1;
                                        var0 = copyDataProperties(var7, var6);
                                        var4 = function() {
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot2;
                                            var0 = 16;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var2 = var2.bind(var0)(var1);
                                            var1 = var2.close;
                                            var1 = var1.bind(var2)();
                                            var2 = _closure2_slot4;
                                            var1 = false;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                        };
                                        var0 = 'onCancel';
                                        var1[var0] = var4;
                                        var5 = _closure2_slot2;
                                        var4 = 'onClaim';
                                        var1[var4] = var5;
                                        var5 = _closure2_slot1;
                                        var4 = 'code';
                                        var1[var4] = var5;
                                        var4 = _closure2_slot0;
                                        var0 = 'outboundPromotion';
                                        var1[var0] = var4;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var0.importer = var3;
                            var0 = var1.bind(var2)(var0);
                        case 62:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var12.card;
                var0.style = var4;
                var4 = {};
                var6 = var12.mainContainer;
                var4.style = var6;
                var7 = _closure1_slot7;
                var6 = {};
                var8 = var12.imageContainer;
                var6.style = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot6;
                var8 = {};
                var11 = var12.image;
                var8.style = var11;
                var11 = {};
                var11.uri = var15;
                var8.source = var11;
                var8 = var10.bind(var3)(var9, var8);
                var6.children = var8;
                var7 = var7.bind(var3)(var1, var6);
                var6 = new Array(3);
                var6[0] = var7;
                var8 = _closure1_slot7;
                var7 = {};
                var9 = var12.textContainer;
                var7.style = var9;
                var15 = {};
                var19 = _closure1_slot7;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var11 = 11;
                var16 = var9[var11];
                var16 = var10.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var22 = var12.title;
                var16.style = var22;
                var20 = var20.outboundTitle;
                var16.children = var20;
                var17 = var19.bind(var3)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var20 = _closure1_slot7;
                var11 = var9[var11];
                var11 = var10.bind(var3)(var11);
                var19 = var11.Text;
                var17 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var11 = var12.subText;
                var17.style = var11;
                var11 = 'text-sm/medium';
                var17.children = var21;
                var17 = var20.bind(var3)(var19, var17);
                var16[1] = var17;
                var15.children = var16;
                var15 = var2.bind(var3)(var1, var15);
                var7.children = var15;
                var7 = var8.bind(var3)(var1, var7);
                var6[1] = var7;
                var8 = _closure1_slot7;
                var7 = {};
                var15 = var12.buttonContainer;
                var7.style = var15;
                var17 = _closure1_slot7;
                var20 = _closure1_slot1;
                var19 = 19;
                var15 = var9[var19];
                var16 = var20.bind(var3)(var15);
                var15 = {};
                var19 = var9[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.Sizes;
                var19 = var19.XSMALL;
                var15.size = var19;
                var15.text = var18;
                var18 = true;
                var15.shrink = var18;
                var18 = var12.claimButton;
                var15.style = var18;
                var18 = function() {
                    var2 = _closure2_slot4;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var15.onPress = var18;
                var15 = var17.bind(var3)(var16, var15);
                var7.children = var15;
                var7 = var8.bind(var3)(var1, var7);
                var6[2] = var7;
                var4.children = var6;
                var6 = var2.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = _closure1_slot7;
                var5 = {};
                var7 = 20;
                var7 = var9[var7];
                var7 = var10.bind(var3)(var7);
                var8 = var7.TextWithIOSLinkWorkaround;
                var7 = {};
                var12 = var12.moreDetails;
                var7.style = var12;
                var7.variant = var11;
                var11 = var9[var14];
                var11 = var10.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.format;
                var9 = var9[var14];
                var9 = var10.bind(var3)(var9);
                var9 = var9.t;
                var10 = var9.sCm3Zb;
                var9 = {};
                var13 = function() {
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 21;
                    var4 = var3[var1];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var4);
                    var4 = var5.hideActionSheet;
                    var4 = var4.bind(var5)();
                    var1 = var3[var1];
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.openLazy;
                    var1 = _closure2_slot0;
                    var6 = var1.id;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var3 = var2.concat;
                    var2 = 'OutboundPromotionTermsAndConditions-';
                    var3 = var3.bind(var2)(var6);
                    var2 = {};
                    var1 = var1.outboundTermsAndConditions;
                    var2.termsAndConditions = var1;
                    var1 = function() { // Environment: var1
                        var0 = global;
                        var2 = var0.Promise;
                        var1 = var2.resolve;
                        var0 = _closure1_slot10;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var1, var3, var2);
                    return var0;
                };
                var9.onClick = var13;
                var9 = var11.bind(var12)(var10, var9);
                var7.children = var9;
                var7 = var6.bind(var3)(var8, var7);
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 33, 1297, 671, 4835, 4894, 5174, 1234, 3900, 4744, 3205, 7054, 10578, 3895, 10579, 1307, 4836, 5294, 3237, 2]);