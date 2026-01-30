// modules/user_settings/native/premium_marketing/PremiumFeaturesCarouselSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var8;
    var4 = function(arg0) { // Original name: PremiumFeaturesCardBackground, environment: var5
        var0 = arg0;
        var8 = var0.style;
        var4 = var0.children;
        var0 = _closure1_slot12;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot8;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 8;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var9 = var6.card;
        var6 = new Array(2);
        var6[0] = var9;
        var6[1] = var8;
        var0.style = var6;
        var6 = _closure1_slot0;
        var5 = 9;
        var8 = var7[var5];
        var8 = var6.bind(var3)(var8);
        var8 = var8.VerticalGradient;
        var8 = var8.START;
        var0.start = var8;
        var8 = var7[var5];
        var8 = var6.bind(var3)(var8);
        var8 = var8.VerticalGradient;
        var8 = var8.END;
        var0.end = var8;
        var5 = var7[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.Gradients;
        var5 = var5.PREMIUM_TIER_0_PERK_CARD;
        var0.colors = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var4;
    var3 = function(arg0, arg1) { // Original name: usePremiumFeatureCardData, environment: var5
        var5 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot13;
        var1 = undefined;
        var1 = var3.bind(var1)();
        var _closure2_slot2 = var1;
        var4 = _closure1_slot4;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var1;
        var1 = function() { // Environment: var0
            var0 = {};
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var2 = var7[var4];
            var6 = undefined;
            var2 = var10.bind(var6)(var2);
            var5 = var2.intl;
            var3 = var5.string;
            var2 = var7[var4];
            var2 = var10.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2["3cyhe3"];
            var2 = var3.bind(var5)(var2);
            var0.title = var2;
            var5 = _closure1_slot1;
            var2 = 13;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var0.imageSrc = var2;
            var2 = _closure2_slot2;
            var2 = var2.emojiImage;
            var0.imageStyle = var2;
            var3 = global;
            var9 = var3.Set;
            var2 = _closure1_slot7;
            var8 = var2.TIER_0;
            var2 = new Array(2);
            var2[0] = var8;
            var8 = _closure1_slot7;
            var8 = var8.TIER_2;
            var2[1] = var8;
            var8 = var9.prototype;
            var8 = Object.create(var8, {
                constructor: {
                    value: var9
                }
            });
            var13 = var8;
            var12 = var2;
            var2 = new var13[var9](var12, var11);
            var2 = var2 instanceof Object ? var2 : var8;
            var0.premiumTypes = var2;
            var2 = new Array(4);
            var2[0] = var0;
            var0 = {};
            var8 = var7[var4];
            var8 = var10.bind(var6)(var8);
            var11 = var8.intl;
            var9 = var11.string;
            var8 = var7[var4];
            var8 = var10.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8["8AhJqy"];
            var8 = var9.bind(var11)(var8);
            var0.title = var8;
            var8 = 14;
            var8 = var7[var8];
            var8 = var5.bind(var6)(var8);
            var0.imageSrc = var8;
            var11 = var3.Set;
            var8 = _closure1_slot7;
            var9 = var8.TIER_0;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = _closure1_slot7;
            var9 = var9.TIER_2;
            var8[1] = var9;
            var9 = var11.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var11
                }
            });
            var13 = var9;
            var12 = var8;
            var8 = new var13[var11](var12, var11);
            var8 = var8 instanceof Object ? var8 : var9;
            var0.premiumTypes = var8;
            var2[1] = var0;
            var0 = {};
            var8 = var7[var4];
            var8 = var10.bind(var6)(var8);
            var11 = var8.intl;
            var9 = var11.string;
            var8 = var7[var4];
            var8 = var10.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8["t/Mvdj"];
            var8 = var9.bind(var11)(var8);
            var0.title = var8;
            var8 = 15;
            var8 = var7[var8];
            var8 = var5.bind(var6)(var8);
            var0.imageSrc = var8;
            var11 = var3.Set;
            var8 = _closure1_slot7;
            var9 = var8.TIER_2;
            var8 = new Array(1);
            var8[0] = var9;
            var9 = var11.prototype;
            var9 = Object.create(var9, {
                constructor: {
                    value: var11
                }
            });
            var13 = var9;
            var12 = var8;
            var8 = new var13[var11](var12, var11);
            var8 = var8 instanceof Object ? var8 : var9;
            var0.premiumTypes = var8;
            var2[2] = var0;
            var0 = {};
            var8 = var7[var4];
            var8 = var10.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var4 = var7[var4];
            var4 = var10.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4["n+DGY/"];
            var4 = var8.bind(var9)(var4);
            var0.title = var4;
            var4 = 16;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var0.imageSrc = var4;
            var4 = var3.Set;
            var1 = _closure1_slot7;
            var3 = var1.TIER_2;
            var1 = new Array(1);
            var1[0] = var3;
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var13 = var3;
            var12 = var1;
            var1 = new var13[var4](var12, var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var0.premiumTypes = var1;
            var2[3] = var0;
            var1 = var2.filter;
            var0 = function(arg0) { // Environment: var0
                _fun92851: for (var _fun92851_ip = 0;;) switch (_fun92851_ip) {
                    case 0:
                        var2 = _closure2_slot1;
                        var0 = null;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun92851_ip = 39;
                            continue _fun92851
                        }
                    case 16:
                        var2 = arg0;
                        var3 = var2.premiumTypes;
                        var2 = var3.has;
                        var1 = _closure2_slot1;
                        var0 = var2.bind(var3)(var1);
                    case 39:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var2 = var3.bind(var4)(var1, var2);
        var1 = var2.map;
        var0 = function(arg0, arg1) { // Environment: var0
            var4 = _closure1_slot8;
            var3 = _closure1_slot14;
            var2 = {};
            var0 = {};
            var5 = _closure2_slot0;
            var1 = 0.85;
            var1 = var1 * var5;
            var0.width = var1;
            var2.style = var0;
            var7 = arg0;
            var8 = var2;
            var0 = copyDataProperties(var8, var7);
            var0 = global;
            var0 = var0.HermesInternal;
            var5 = var0.concat;
            var1 = 'card_';
            var0 = arg1;
            var1 = var5.bind(var1)(var0);
            var0 = undefined;
            var0 = var4.bind(var0)(var3, var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot17 = var3;
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var13.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var6 = var8[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.PremiumTypes;
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var8[var1];
    var1 = var7.bind(var0)(var1);
    var6 = var1.jsx;
    var _closure1_slot8 = var6;
    var6 = var1.jsxs;
    var _closure1_slot9 = var6;
    var1 = var1.Fragment;
    var _closure1_slot10 = var1;
    var1 = 6;
    var6 = var8[var1];
    var10 = var7.bind(var0)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {
        'display': 'flex',
        'flex': 1
    };
    var6.container = var11;
    var11 = {};
    var14 = 'center';
    var11.textAlign = var14;
    var6.headerText = var11;
    var11 = {};
    var12 = 7;
    var15 = var8[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var11.marginTop = var15;
    var6.carouselContainer = var11;
    var11 = {
        'flex': 1,
        'alignItems': 'center',
        'minHeight': 262
    };
    var6.carousel = var11;
    var11 = {};
    var15 = var8[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var15 = -var15;
    var11.marginBottom = var15;
    var6.indicators = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot11 = var6;
    var6 = var8[var1];
    var10 = var7.bind(var0)(var6);
    var9 = var10.createStyles;
    var6 = {};
    var11 = {
        'flexGrow': 1,
        'alignSelf': 'center',
        'justifyContent': 'space-between'
    };
    var15 = var8[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var11.borderRadius = var15;
    var6.card = var11;
    var11 = {};
    var11.alignSelf = var14;
    var6.image = var11;
    var11 = {};
    var14 = var8[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_24;
    var11.marginTop = var14;
    var12 = var8[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var11.marginHorizontal = var12;
    var6.cardTitle = var11;
    var6 = var9.bind(var10)(var6);
    var _closure1_slot12 = var6;
    var1 = var8[var1];
    var9 = var7.bind(var0)(var1);
    var6 = var9.createStyles;
    var1 = {};
    var10 = {};
    var11 = 'flex-end';
    var10.alignSelf = var11;
    var1.emojiImage = var10;
    var1 = var6.bind(var9)(var1);
    var _closure1_slot13 = var1;
    var1 = function(arg0) { // Original name: CarouselCard, environment: var5
        var0 = arg0;
        var4 = var0.style;
        var12 = var0.title;
        var10 = var0.imageSrc;
        var9 = var0.imageStyle;
        var0 = _closure1_slot12;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot9;
        var1 = _closure1_slot16;
        var0 = {};
        var0.style = var4;
        var7 = _closure1_slot8;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var4 = 10;
        var4 = var11[var4];
        var4 = var6.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'variant': 'heading-md/extrabold',
            'color': 'always-white'
        };
        var13 = var8.cardTitle;
        var4.style = var13;
        var4.children = var12;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot1;
        var5 = 11;
        var5 = var11[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var5.source = var10;
        var10 = var8.image;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var5.style = var8;
        var8 = 'contain';
        var5.resizeMode = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var1;
    var1 = function(arg0) { // Original name: PremiumFeaturesCarousel, environment: var5
        var1 = arg0;
        var15 = var1.width;
        var0 = var1.onEndReached;
        var _closure2_slot0 = var0;
        var9 = var1.children;
        var _closure2_slot1 = var9;
        var17 = var1.style;
        var1 = _closure1_slot11;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var4 = _closure1_slot4;
        var2 = var4.useState;
        var1 = 0;
        var6 = var2.bind(var4)(var1);
        var4 = _closure1_slot3;
        var2 = 2;
        var2 = var4.bind(var3)(var6, var2);
        var8 = var2[var1];
        var _closure2_slot2 = var8;
        var1 = 1;
        var13 = var2[var1];
        var4 = _closure1_slot4;
        var2 = var4.useEffect;
        var1 = new Array(3);
        var1[0] = var8;
        var6 = var9.length;
        var1[1] = var6;
        var1[2] = var0;
        var0 = function() { // Environment: var14
            _fun92855: for (var _fun92855_ip = 0;;) switch (_fun92855_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var3 = var1.length;
                    var1 = 1;
                    var1 = var3 - var1;
                    if (!(var2 === var1)) {
                        _fun92855_ip = 47;
                        continue _fun92855
                    }
                case 27:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun92855_ip = 47;
                        continue _fun92855
                    }
                case 37:
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot9;
        var1 = _closure1_slot10;
        var0 = {};
        var12 = _closure1_slot8;
        var6 = _closure1_slot1;
        var11 = _closure1_slot2;
        var4 = 17;
        var4 = var11[var4];
        var7 = var6.bind(var3)(var4);
        var4 = {};
        var18 = var10.carousel;
        var16 = new Array(2);
        var16[0] = var18;
        var16[1] = var17;
        var4.style = var16;
        var4.data = var9;
        var16 = function(arg0) { // Original name: renderItem, environment: var14
            var0 = arg0;
            var0 = var0.item;
            return var0;
        };
        var4.renderItem = var16;
        var4.width = var15;
        var15 = false;
        var4.loop = var15;
        var14 = function(arg0) { // Original name: onConfigurePanGesture, environment: var14
            var2 = arg0;
            var1 = var2.activeOffsetX;
            var0 = new Array(2);
            var3 = -10;
            var0[0] = var3;
            var3 = 10;
            var0[1] = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.onConfigurePanGesture = var14;
        var14 = 200;
        var4.scrollAnimationDuration = var14;
        var14 = 'parallax';
        var4.mode = var14;
        var14 = {
            'parallaxScrollingScale': 1,
            'parallaxScrollingOffset': 45
        };
        var4.modeConfig = var14;
        var4.onSnapToItem = var13;
        var7 = var12.bind(var3)(var7, var4);
        var4 = new Array(2);
        var4[0] = var7;
        var7 = _closure1_slot8;
        var5 = 18;
        var5 = var11[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var10 = var10.indicators;
        var5.containerStyle = var10;
        var9 = var9.length;
        var5.numberOfItems = var9;
        var5.currentIndex = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var1;
    var6 = 22;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesCarouselSection.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function(arg0) { // Original name: _default, environment: var5
        var1 = arg0;
        var6 = var1.style;
        var1 = _closure1_slot11;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var2 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 19;
        var1 = var16[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var8 = var1.analyticsLocations;
        var _closure2_slot0 = var8;
        var7 = _closure1_slot4;
        var4 = var7.useState;
        var1 = false;
        var7 = var4.bind(var7)(var1);
        var4 = _closure1_slot3;
        var1 = 2;
        var4 = var4.bind(var3)(var7, var1);
        var1 = 0;
        var7 = var4[var1];
        var _closure2_slot1 = var7;
        var1 = 1;
        var1 = var4[var1];
        var _closure2_slot2 = var1;
        var1 = 20;
        var1 = var16[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var11 = var1.width;
        var4 = _closure1_slot4;
        var2 = var4.useCallback;
        var1 = new Array(2);
        var1[0] = var8;
        var1[1] = var7;
        var0 = function() { // Environment: var0
            _fun92859: for (var _fun92859_ip = 0;;) switch (_fun92859_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    if (var1) {
                        _fun92859_ip = 78;
                        continue _fun92859
                    }
                case 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.track;
                    var1 = _closure1_slot6;
                    var3 = var1.PREMIUM_MARKETING_SCROLLED_TO_LAST;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.location_stack = var6;
                    var1 = var4.bind(var5)(var3, var1);
                    var1 = _closure2_slot2;
                    var0 = true;
                    var0 = var1.bind(var2)(var0);
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var9 = var2.bind(var4)(var0, var1);
        var0 = _closure1_slot17;
        var8 = var0.bind(var3)(var11);
        var2 = _closure1_slot9;
        var1 = _closure1_slot5;
        var0 = {};
        var7 = var10.container;
        var4 = new Array(2);
        var4[0] = var7;
        var4[1] = var6;
        var0.style = var4;
        var7 = _closure1_slot8;
        var15 = _closure1_slot0;
        var4 = 10;
        var4 = var16[var4];
        var4 = var15.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'heading-xl/extrabold',
            'color': 'mobile-text-heading-primary',
            'accessibilityRole': 'header'
        };
        var12 = var10.headerText;
        var4.style = var12;
        var12 = 12;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.RGadQR;
        var12 = var13.bind(var14)(var12);
        var4.children = var12;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot8;
        var6 = _closure1_slot15;
        var5 = {};
        var5.width = var11;
        var10 = var10.carouselContainer;
        var5.style = var10;
        var5.onEndReached = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var5;
    var5 = 0.85;
    var2.PREMIUM_FEATURES_PROPORTIONAL_CARD_WIDTH = var5;
    var2.PremiumFeaturesCardBackground = var4;
    var2.usePremiumFeatureCardData = var3;
    var2.PremiumFeaturesCarousel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 1615, 33, 1297, 671, 4057, 670, 3901, 4666, 1234, 12033, 12034, 12035, 12036, 9395, 9429, 5687, 1464, 795, 2]);