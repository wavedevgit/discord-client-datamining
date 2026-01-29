// modules/premium/native/PremiumPerkCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var8;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var10 = 0;
    var5 = var8[var10];
    var4 = metroImportAll;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot3 = var4;
    var9 = 1;
    var4 = var8[var9];
    var4 = var7.bind(var0)(var4);
    var5 = var4.View;
    var _closure1_slot4 = var5;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.MAX_PREMIUM_TIER_2_ATTACHMENT_SIZE;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.UserSettingsSections;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot8 = var5;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var5 = {};
    var4 = 'customProfile';
    var5.CUSTOM_PROFILE = var4;
    var4 = 'clientThemes';
    var5.CLIENT_THEMES = var4;
    var4 = 'serverBoosts';
    var5.SERVER_BOOSTS = var4;
    var4 = 'greyServerBoosts';
    var5.GREYED_SERVER_BOOSTS = var4;
    var4 = 'customAppIcons';
    var5.CUSTOM_APP_ICONS = var4;
    var4 = 'emoji';
    var5.EMOJI = var4;
    var4 = 'customSounds';
    var5.CUSTOM_SOUNDS = var4;
    var4 = 'sticker';
    var5.STICKER = var4;
    var4 = 'earlyAccess';
    var5.EARLY_ACCESS = var4;
    var4 = 'memberPricing';
    var5.MEMBER_PRICING = var4;
    var4 = 'largeUploads';
    var5.LARGE_UPLOADS = var4;
    var4 = 'hdVideo';
    var5.HD_VIDEO = var4;
    var4 = 'superReactions';
    var5.SUPER_REACTIONS = var4;
    var4 = 'entranceSounds';
    var5.ENTRACE_SOUNDS = var4;
    var4 = 'badge';
    var5.BADGE = var4;
    var4 = 'greyBadge';
    var5.GREYED_BADGE = var4;
    var4 = {};
    var4.NARROW = var10;
    var6 = 'NARROW';
    var4[var10] = var6;
    var4.WIDE = var9;
    var6 = 'WIDE';
    var4[var9] = var6;
    var _closure1_slot10 = var4;
    var9 = var3.Object;
    var6 = var9.freeze;
    var3 = {};
    var11 = var4.NARROW;
    var10 = {
        'width': 300,
        'height': 364
    };
    var3[var11] = var10;
    var11 = var4.WIDE;
    var10 = {
        'width': 320,
        'height': 364
    };
    var3[var11] = var10;
    var3 = var6.bind(var9)(var3);
    var _closure1_slot11 = var3;
    var6 = 26;
    var6 = var8[var6];
    var10 = var7.bind(var0)(var6);
    var9 = var10.createStyles;
    var6 = function(arg0) { // Environment: var1
        _fun59300: for (var _fun59300_ip = 0;;) switch (_fun59300_ip) {
            case 0:
                var6 = arg0;
                var0 = {};
                var1 = {};
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 27;
                var8 = var3[var5];
                var4 = undefined;
                var8 = var7.bind(var4)(var8);
                var8 = var8.colors;
                var8 = var8.BACKGROUND_SURFACE_HIGH;
                var1.backgroundColor = var8;
                var3 = var3[var5];
                var3 = var7.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.sm;
                var1.borderRadius = var3;
                var3 = _closure1_slot11;
                var3 = var3[var6];
                var3 = var3.width;
                var1.width = var3;
                var3 = _closure1_slot10;
                var3 = var3.NARROW;
                var3 = var6 === var3;
                if (!var3) {
                    _fun59300_ip = 127;
                    continue _fun59300
                }
            case 105:
                var7 = {};
                var8 = _closure1_slot11;
                var8 = var8[var6];
                var8 = var8.height;
                var7.height = var8;
                var3 = var7;
            case 127:
                var11 = var1;
                var10 = var3;
                var3 = copyDataProperties(var11, var10);
                var8 = _closure1_slot1;
                var3 = _closure1_slot2;
                var7 = var3[var5];
                var7 = var8.bind(var4)(var7);
                var7 = var7.shadows;
                var10 = var7.SHADOW_LOW;
                var11 = var1;
                var7 = copyDataProperties(var11, var10);
                var0.container = var1;
                var1 = {};
                var7 = '100%';
                var1.width = var7;
                var9 = var3[var5];
                var9 = var8.bind(var4)(var9);
                var9 = var9.radii;
                var9 = var9.sm;
                var1.borderTopLeftRadius = var9;
                var9 = var3[var5];
                var9 = var8.bind(var4)(var9);
                var9 = var9.radii;
                var9 = var9.sm;
                var1.borderTopRightRadius = var9;
                var9 = 'hidden';
                var1.overflow = var9;
                var0.headerComponent = var1;
                var1 = {};
                var1.width = var7;
                var9 = var3[var5];
                var9 = var8.bind(var4)(var9);
                var9 = var9.radii;
                var9 = var9.sm;
                var1.borderTopLeftRadius = var9;
                var3 = var3[var5];
                var3 = var8.bind(var4)(var3);
                var3 = var3.radii;
                var3 = var3.sm;
                var1.borderTopRightRadius = var3;
                var0.image = var1;
                var1 = {
                    'marginTop': 16,
                    'marginHorizontal': 16
                };
                var0.title = var1;
                var1 = {
                    'marginTop': 8,
                    'marginHorizontal': 16
                };
                var3 = 8;
                var8 = _closure1_slot10;
                var8 = var8.WIDE;
                if (!(var6 === var8)) {
                    _fun59300_ip = 366;
                    continue _fun59300
                }
            case 363:
                var3 = 24;
            case 366:
                var1.marginBottom = var3;
                var3 = _closure1_slot10;
                var3 = var3.NARROW;
                var3 = var6 === var3;
                if (!var3) {
                    _fun59300_ip = 396;
                    continue _fun59300
                }
            case 387:
                var6 = {};
                var6.height = var7;
                var3 = var6;
            case 396:
                var11 = var1;
                var10 = var3;
                var3 = copyDataProperties(var11, var10);
                var0.description = var1;
                var1 = {
                    'marginTop': 'auto',
                    'marginHorizontal': 16,
                    'marginBottom': 16
                };
                var0.button = var1;
                var1 = {
                    'position': 'relative',
                    'alignItems': 'center',
                    'justifyContent': 'center'
                };
                var0.imageContainer = var1;
                var1 = {};
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.colors;
                var6 = var6.WHITE;
                var1.color = var6;
                var6 = 14;
                var1.fontSize = var6;
                var0.imageOverlayText = var1;
                var1 = {
                    'position': 'absolute',
                    'bottom': '10%',
                    'borderRadius': null,
                    'backgroundColor': null,
                    'paddingHorizontal': 12,
                    'paddingVertical': 4,
                    'justifyContent': 'center',
                    'alignItems': 'center'
                };
                var6 = var2[var5];
                var6 = var3.bind(var4)(var6);
                var6 = var6.radii;
                var6 = var6.round;
                var1.borderRadius = var6;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.BACKGROUND_MOD_STRONG;
                var1.backgroundColor = var2;
                var0.imageOverlayTextContainer = var1;
                var1 = {
                    'position': 'absolute',
                    'width': 'auto',
                    'top': 4294967288,
                    'left': 10
                };
                var0.pillTextContainer = var1;
                return var0;
        }
    };
    var6 = var9.bind(var10)(var6);
    var _closure1_slot12 = var6;
    var6 = 32;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/premium/native/PremiumPerkCard.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function(arg0) { // Original name: PremiumPerkCard, environment: var1
        _fun59301: for (var _fun59301_ip = 0;;) switch (_fun59301_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.style;
                var14 = var1.title;
                var16 = var1.titleStyle;
                var4 = var1.description;
                var0 = var1.bodyComponent;
                var13 = var1.headerComponent;
                var20 = var1.imageSrc;
                var11 = var1.buttonOnPress;
                var12 = var1.cta;
                var3 = undefined;
                if (!(var12 === var3)) {
                    _fun59301_ip = 118;
                    continue _fun59301
                }
            case 60:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 9;
                var5 = var9[var2];
                var5 = var8.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var2 = var9[var2];
                var2 = var8.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.jVcuVY;
                var12 = var5.bind(var6)(var2);
            case 118:
                var2 = var1.variant;
                if (!(var2 === var3)) {
                    _fun59301_ip = 140;
                    continue _fun59301
                }
            case 127:
                var5 = _closure1_slot10;
                var2 = var5.WIDE;
            case 140:
                var23 = var1.imageOverlayText;
                var17 = var1.pillText;
                var1 = _closure1_slot12;
                var10 = var1.bind(var3)(var2);
                var5 = null;
                if (!(var5 == var20)) {
                    _fun59301_ip = 217;
                    continue _fun59301
                }
            case 170:
                var1 = var5 != var13;
                var6 = null;
                if (!var1) {
                    _fun59301_ip = 448;
                    continue _fun59301
                }
            case 182:
                var8 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var15 = var10.headerComponent;
                var1.style = var15;
                var1.children = var13;
                var6 = var8.bind(var3)(var2, var1);
                _fun59301_ip = 448;
                continue _fun59301;
            case 217:
                if (!(var5 == var23)) {
                    _fun59301_ip = 272;
                    continue _fun59301
                }
            case 221:
                var8 = _closure1_slot8;
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 28;
                var1 = var13[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var13 = var10.image;
                var1.style = var13;
                var1.source = var20;
                var1 = var8.bind(var3)(var2, var1);
                _fun59301_ip = 445;
                continue _fun59301;
            case 272:
                var13 = _closure1_slot9;
                var8 = _closure1_slot4;
                var2 = {};
                var15 = var10.imageContainer;
                var2.style = var15;
                var19 = _closure1_slot8;
                var18 = _closure1_slot1;
                var22 = _closure1_slot2;
                var15 = 28;
                var15 = var22[var15];
                var18 = var18.bind(var3)(var15);
                var15 = {};
                var21 = var10.image;
                var15.style = var21;
                var15.source = var20;
                var18 = var19.bind(var3)(var18, var15);
                var15 = new Array(2);
                var15[0] = var18;
                var18 = {};
                var20 = var10.imageOverlayTextContainer;
                var18.style = var20;
                var21 = _closure1_slot0;
                var20 = 29;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {};
                var22 = var10.imageOverlayText;
                var20.style = var22;
                var22 = 'text-md/bold';
                var20.variant = var22;
                var22 = var23.toUpperCase;
                var22 = var22.bind(var23)();
                var20.children = var22;
                var20 = var19.bind(var3)(var21, var20);
                var18.children = var20;
                var18 = var19.bind(var3)(var8, var18);
                var15[1] = var18;
                var2.children = var15;
                var1 = var13.bind(var3)(var8, var2);
            case 445:
                var6 = var1;
            case 448:
                if (!(var5 == var4)) {
                    _fun59301_ip = 466;
                    continue _fun59301
                }
            case 452:
                var1 = var5 != var0;
                var13 = null;
                if (!var1) {
                    _fun59301_ip = 517;
                    continue _fun59301
                }
            case 461:
                var13 = var0;
                _fun59301_ip = 517;
                continue _fun59301;
            case 466:
                var2 = _closure1_slot8;
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 29;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {};
                var8 = 'text-sm/normal';
                var0.variant = var8;
                var0.children = var4;
                var13 = var2.bind(var3)(var1, var0);
            case 517:
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var8 = var10.container;
                var4 = new Array(2);
                var4[0] = var8;
                var4[1] = var7;
                var0.style = var4;
                var7 = var5 != var17;
                if (!var7) {
                    _fun59301_ip = 602;
                    continue _fun59301
                }
            case 555:
                var15 = _closure1_slot8;
                var8 = _closure1_slot1;
                var18 = _closure1_slot2;
                var4 = 30;
                var4 = var18[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var4.pillText = var17;
                var17 = var10.pillTextContainer;
                var4.style = var17;
                var7 = var15.bind(var3)(var8, var4);
            case 602:
                var4 = new Array(5);
                var4[0] = var7;
                var4[1] = var6;
                var8 = _closure1_slot8;
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 29;
                var6 = var15[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'heading-lg/extrabold',
                    'accessibilityRole': 'header'
                };
                var17 = var10.title;
                var15 = new Array(2);
                var15[0] = var17;
                var15[1] = var16;
                var6.style = var15;
                var6.children = var14;
                var6 = var8.bind(var3)(var7, var6);
                var4[2] = var6;
                var7 = _closure1_slot5;
                var6 = {};
                var14 = var10.description;
                var6.style = var14;
                var6.children = var13;
                var6 = var8.bind(var3)(var7, var6);
                var4[3] = var6;
                var5 = var5 != var11;
                if (!var5) {
                    _fun59301_ip = 814;
                    continue _fun59301
                }
            case 730:
                var8 = _closure1_slot8;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.button;
                var6.style = var10;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 31;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var9.text = var12;
                var9.onPress = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 814:
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var6;
    var2.PerkCardTypes = var5;
    var2.PerkCardVariant = var4;
    var2.PERK_CARD_SIZES = var3;
    var1 = function() { // Original name: usePremiumPerkCard, environment: var1
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 5;
        var1 = var7[var1];
        var5 = undefined;
        var2 = var6.bind(var5)(var1);
        var1 = var2.useSubscriptionPlansLoaded;
        var1 = var1.bind(var2)();
        var _closure2_slot0 = var1;
        var2 = 6;
        var2 = var7[var2];
        var9 = var6.bind(var5)(var2);
        var8 = var9.formatSize;
        var3 = _closure1_slot6;
        var2 = 1024;
        var3 = var3 / var2;
        var2 = {};
        var10 = true;
        var2.useKibibytes = var10;
        var11 = var8.bind(var9)(var3, var2);
        var8 = _closure1_slot3;
        var9 = var8.useCallback;
        var3 = function() { // Environment: var0
            _fun59303: for (var _fun59303_ip = 0;;) switch (_fun59303_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getRootNavigationRef;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun59303_ip = 54;
                        continue _fun59303
                    }
                case 44:
                    var2 = var4.isReady;
                    var1 = var2.bind(var4)();
                case 54:
                    if (!var1) {
                        _fun59303_ip = 128;
                        continue _fun59303
                    }
                case 57:
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = _closure1_slot7;
                    var1 = var1.COLLECTIBLES_SHOP;
                    var2.screen = var1;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.PREMIUM_MARKETING_PERK_CARD;
                    var1.analyticsSource = var5;
                    var2.params = var1;
                    var1 = 'settings';
                    var1 = var3.bind(var4)(var1, var2);
                case 128:
                    return var0;
            }
        };
        var2 = new Array(0);
        var3 = var9.bind(var8)(var3, var2);
        var10 = var8.useCallback;
        var9 = function() { // Environment: var0
            _fun59304: for (var _fun59304_ip = 0;;) switch (_fun59304_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun59304_ip = 89;
                        continue _fun59304
                    }
                case 41:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if (!var2) {
                        _fun59304_ip = 89;
                        continue _fun59304
                    }
                case 54:
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = _closure1_slot7;
                    var1 = var1.PROFILE_CUSTOMIZATION;
                    var2.screen = var1;
                    var1 = 'settings';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                case 89:
                    var0 = false;
                    return var0;
            }
        };
        var2 = new Array(0);
        var12 = var10.bind(var8)(var9, var2);
        var10 = var8.useCallback;
        var9 = function() { // Environment: var0
            _fun59305: for (var _fun59305_ip = 0;;) switch (_fun59305_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun59305_ip = 89;
                        continue _fun59305
                    }
                case 41:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if (!var2) {
                        _fun59305_ip = 89;
                        continue _fun59305
                    }
                case 54:
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = _closure1_slot7;
                    var1 = var1.APPEARANCE_THEME_PICKER;
                    var2.screen = var1;
                    var1 = 'settings';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                case 89:
                    var0 = false;
                    return var0;
            }
        };
        var2 = new Array(0);
        var10 = var10.bind(var8)(var9, var2);
        var9 = var8.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            _fun59306: for (var _fun59306_ip = 0;;) switch (_fun59306_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun59306_ip = 111;
                        continue _fun59306
                    }
                case 41:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if (!var2) {
                        _fun59306_ip = 111;
                        continue _fun59306
                    }
                case 54:
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = _closure1_slot7;
                    var1 = var1.GUILD_BOOSTING;
                    var2.screen = var1;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var5 = !var5;
                    var1.shouldFetchSubscriptionPlans = var5;
                    var2.params = var1;
                    var1 = 'settings';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                case 111:
                    var0 = false;
                    return var0;
            }
        };
        var9 = var9.bind(var8)(var1, var2);
        var2 = var8.useCallback;
        var1 = function() { // Environment: var0
            _fun59307: for (var _fun59307_ip = 0;;) switch (_fun59307_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getRootNavigationRef;
                    var4 = var2.bind(var3)();
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun59307_ip = 89;
                        continue _fun59307
                    }
                case 41:
                    var2 = var4.isReady;
                    var2 = var2.bind(var4)();
                    if (!var2) {
                        _fun59307_ip = 89;
                        continue _fun59307
                    }
                case 54:
                    var3 = var4.navigate;
                    var2 = {};
                    var1 = _closure1_slot7;
                    var1 = var1.APP_ICONS;
                    var2.screen = var1;
                    var1 = 'settings';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                case 89:
                    var0 = false;
                    return var0;
            }
        };
        var0 = new Array(0);
        var8 = var2.bind(var8)(var1, var0);
        var0 = {};
        var1 = {};
        var2 = 9;
        var13 = var7[var2];
        var13 = var6.bind(var5)(var13);
        var15 = var13.intl;
        var14 = var15.string;
        var13 = var7[var2];
        var13 = var6.bind(var5)(var13);
        var13 = var13.t;
        var13 = var13.KcyDwF;
        var13 = var14.bind(var15)(var13);
        var1.title = var13;
        var13 = var7[var2];
        var13 = var6.bind(var5)(var13);
        var15 = var13.intl;
        var14 = var15.string;
        var13 = var7[var2];
        var13 = var6.bind(var5)(var13);
        var13 = var13.t;
        var13 = var13.Mt3U1W;
        var13 = var14.bind(var15)(var13);
        var1.description = var13;
        var4 = _closure1_slot1;
        var13 = 10;
        var13 = var7[var13];
        var13 = var4.bind(var5)(var13);
        var1.imageSrc = var13;
        var1.buttonOnPress = var12;
        var0.customProfile = var1;
        var1 = {};
        var12 = var7[var2];
        var12 = var6.bind(var5)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = var7[var2];
        var12 = var6.bind(var5)(var12);
        var12 = var12.t;
        var12 = var12.kWM48G;
        var12 = var13.bind(var14)(var12);
        var1.title = var12;
        var12 = var7[var2];
        var12 = var6.bind(var5)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = var7[var2];
        var12 = var6.bind(var5)(var12);
        var12 = var12.t;
        var12 = var12.CjRASJ;
        var12 = var13.bind(var14)(var12);
        var1.description = var12;
        var12 = 11;
        var12 = var7[var12];
        var12 = var4.bind(var5)(var12);
        var1.imageSrc = var12;
        var1.buttonOnPress = var10;
        var0.clientThemes = var1;
        var1 = {};
        var10 = var7[var2];
        var10 = var6.bind(var5)(var10);
        var13 = var10.intl;
        var12 = var13.string;
        var10 = var7[var2];
        var10 = var6.bind(var5)(var10);
        var10 = var10.t;
        var10 = var10["NyDu/6"];
        var10 = var12.bind(var13)(var10);
        var1.title = var10;
        var10 = var7[var2];
        var10 = var6.bind(var5)(var10);
        var13 = var10.intl;
        var12 = var13.string;
        var10 = var7[var2];
        var10 = var6.bind(var5)(var10);
        var10 = var10.t;
        var10 = var10["4pEwXL"];
        var10 = var12.bind(var13)(var10);
        var1.description = var10;
        var10 = 12;
        var10 = var7[var10];
        var10 = var4.bind(var5)(var10);
        var1.imageSrc = var10;
        var1.buttonOnPress = var9;
        var0.serverBoosts = var1;
        var1 = {};
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var12 = var9.intl;
        var10 = var12.string;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var9 = var9.t;
        var9 = var9["NyDu/6"];
        var9 = var10.bind(var12)(var9);
        var1.title = var9;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var12 = var9.intl;
        var10 = var12.string;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var9 = var9.t;
        var9 = var9["4pEwXL"];
        var9 = var10.bind(var12)(var9);
        var1.description = var9;
        var9 = 13;
        var9 = var7[var9];
        var9 = var4.bind(var5)(var9);
        var1.imageSrc = var9;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var12 = var9.intl;
        var10 = var12.string;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var9 = var9.t;
        var9 = var9["/VzCKE"];
        var9 = var10.bind(var12)(var9);
        var1.imageOverlayText = var9;
        var0.greyServerBoosts = var1;
        var1 = {};
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var12 = var9.intl;
        var10 = var12.string;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var9 = var9.t;
        var9 = var9.OuItFi;
        var9 = var10.bind(var12)(var9);
        var1.title = var9;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var12 = var9.intl;
        var10 = var12.string;
        var9 = var7[var2];
        var9 = var6.bind(var5)(var9);
        var9 = var9.t;
        var9 = var9.mPyrE6;
        var9 = var10.bind(var12)(var9);
        var1.description = var9;
        var9 = 14;
        var9 = var7[var9];
        var9 = var4.bind(var5)(var9);
        var1.imageSrc = var9;
        var1.buttonOnPress = var8;
        var0.customAppIcons = var1;
        var1 = {};
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8["R2IV/Q"];
        var8 = var9.bind(var10)(var8);
        var1.title = var8;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.R5Xag2;
        var8 = var9.bind(var10)(var8);
        var1.description = var8;
        var8 = 15;
        var8 = var7[var8];
        var8 = var4.bind(var5)(var8);
        var1.imageSrc = var8;
        var0.emoji = var1;
        var1 = {};
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.LWsArT;
        var8 = var9.bind(var10)(var8);
        var1.title = var8;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8["4lSyCY"];
        var8 = var9.bind(var10)(var8);
        var1.description = var8;
        var8 = 16;
        var8 = var7[var8];
        var8 = var4.bind(var5)(var8);
        var1.imageSrc = var8;
        var0.customSounds = var1;
        var1 = {};
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.tzdIwI;
        var8 = var9.bind(var10)(var8);
        var1.title = var8;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.hJG8ZN;
        var8 = var9.bind(var10)(var8);
        var1.description = var8;
        var8 = 17;
        var8 = var7[var8];
        var8 = var4.bind(var5)(var8);
        var1.imageSrc = var8;
        var0.sticker = var1;
        var1 = {};
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.EYxi0o;
        var8 = var9.bind(var10)(var8);
        var1.title = var8;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.M9AIt1;
        var8 = var9.bind(var10)(var8);
        var1.description = var8;
        var8 = 18;
        var8 = var7[var8];
        var8 = var4.bind(var5)(var8);
        var1.imageSrc = var8;
        var0.earlyAccess = var1;
        var1 = {};
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8["H4/NBN"];
        var8 = var9.bind(var10)(var8);
        var1.title = var8;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var10 = var8.intl;
        var9 = var10.string;
        var8 = var7[var2];
        var8 = var6.bind(var5)(var8);
        var8 = var8.t;
        var8 = var8.wo3D3T;
        var8 = var9.bind(var10)(var8);
        var1.description = var8;
        var8 = 19;
        var8 = var7[var8];
        var8 = var4.bind(var5)(var8);
        var1.imageSrc = var8;
        var1.buttonOnPress = var3;
        var0.memberPricing = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var10 = var3.intl;
        var9 = var10.formatToPlainString;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var8 = var3.jqhAdL;
        var3 = {};
        var3.premiumMaxSize = var11;
        var3 = var9.bind(var10)(var8, var3);
        var1.title = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var10 = var3.intl;
        var9 = var10.formatToPlainString;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var8 = var3["HI+cfm"];
        var3 = {};
        var3.premiumMaxSize = var11;
        var3 = var9.bind(var10)(var8, var3);
        var1.description = var3;
        var3 = 20;
        var3 = var7[var3];
        var3 = var4.bind(var5)(var3);
        var1.imageSrc = var3;
        var0.largeUploads = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.RSXQYO;
        var3 = var8.bind(var9)(var3);
        var1.title = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.ymCPxp;
        var3 = var8.bind(var9)(var3);
        var1.description = var3;
        var3 = 21;
        var3 = var7[var3];
        var3 = var4.bind(var5)(var3);
        var1.imageSrc = var3;
        var0.hdVideo = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["6S7kO7"];
        var3 = var8.bind(var9)(var3);
        var1.title = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.A0U9fk;
        var3 = var8.bind(var9)(var3);
        var1.description = var3;
        var3 = 22;
        var3 = var7[var3];
        var3 = var4.bind(var5)(var3);
        var1.imageSrc = var3;
        var0.superReactions = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["f4M+H9"];
        var3 = var8.bind(var9)(var3);
        var1.title = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["7ZCYvC"];
        var3 = var8.bind(var9)(var3);
        var1.description = var3;
        var3 = 23;
        var3 = var7[var3];
        var3 = var4.bind(var5)(var3);
        var1.imageSrc = var3;
        var0.entranceSounds = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.dcFfSJ;
        var3 = var8.bind(var9)(var3);
        var1.title = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["37MFFq"];
        var3 = var8.bind(var9)(var3);
        var1.description = var3;
        var3 = 24;
        var3 = var7[var3];
        var3 = var4.bind(var5)(var3);
        var1.imageSrc = var3;
        var0.badge = var1;
        var1 = {};
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.dcFfSJ;
        var3 = var8.bind(var9)(var3);
        var1.title = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var9 = var3.intl;
        var8 = var9.string;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3["37MFFq"];
        var3 = var8.bind(var9)(var3);
        var1.description = var3;
        var3 = 25;
        var3 = var7[var3];
        var3 = var4.bind(var5)(var3);
        var1.imageSrc = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2["/VzCKE"];
        var2 = var3.bind(var4)(var2);
        var1.imageOverlayText = var2;
        var0.greyBadge = var1;
        return var0;
    };
    var2.usePremiumPerkCard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1615, 660, 33, 7259, 3316, 3873, 5536, 1234, 7260, 7261, 7262, 7263, 7264, 7265, 7266, 7267, 7268, 7269, 7270, 7271, 7272, 7273, 7274, 7275, 1297, 671, 4660, 3895, 7276, 4037, 2]);