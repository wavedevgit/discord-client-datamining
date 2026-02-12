// modules/user_settings/native/premium_marketing/PremiumNitroHome.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun82067: for (var _fun82067_ip = 0;;) switch (_fun82067_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.subscription;
                var1 = var1.onClose;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot23;
                var3 = undefined;
                var10 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 16;
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useNavigation;
                var6 = var2.bind(var4)();
                var _closure2_slot1 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var1;
                var1 = function() { // Environment: var15
                    _fun82068: for (var _fun82068_ip = 0;;) switch (_fun82068_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            if (!(var0 === var2)) {
                                _fun82068_ip = 29;
                                continue _fun82068
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var2 = var3.pop;
                            var2 = var2.bind(var3)();
                            _fun82068_ip = 37;
                            continue _fun82068;
                        case 29:
                            var1 = _closure2_slot0;
                            var1 = var1.bind(var0)();
                        case 37:
                            return var0;
                    }
                };
                var18 = var4.bind(var5)(var1, var2);
                var1 = null;
                var6 = var1 == var0;
                if (var6) {
                    _fun82067_ip = 120;
                    continue _fun82067
                }
            case 111:
                var0 = var0.hasActiveTrial;
                var6 = !var0;
            case 120:
                var5 = !var6;
                var2 = _closure1_slot16;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var10.contentContainer;
                var0.style = var4;
                var8 = _closure1_slot16;
                var7 = _closure1_slot5;
                var4 = {};
                var11 = var10.headerContainer;
                var4.style = var11;
                var17 = _closure1_slot15;
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 17;
                var11 = var16[var12];
                var11 = var13.bind(var3)(var11);
                var14 = var11.PressableOpacity;
                var11 = {};
                var19 = var10.backButtonWrapper;
                var11.style = var19;
                var11.onPress = var18;
                var18 = _closure1_slot24;
                var11.children = var18;
                var14 = var17.bind(var3)(var14, var11);
                var11 = new Array(3);
                var11[0] = var14;
                var18 = _closure1_slot15;
                var14 = 18;
                var14 = var16[var14];
                var14 = var13.bind(var3)(var14);
                var17 = var14.Text;
                var14 = {
                    'variant': 'display-sm',
                    'color': 'always-white',
                    'style': null,
                    'accessibilityRole': 'header'
                };
                var19 = var10.headerText;
                var14.style = var19;
                var19 = 19;
                var20 = var16[var19];
                var20 = var13.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var16[var19];
                var19 = var13.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["BnquQ/"];
                var19 = var20.bind(var21)(var19);
                var14.children = var19;
                var14 = var18.bind(var3)(var17, var14);
                var11[1] = var14;
                var14 = _closure1_slot15;
                var12 = var16[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.PressableOpacity;
                var12 = {};
                var16 = var10.backButtonWrapper;
                var12.style = var16;
                var15 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot9;
                    var3 = var2.NITRO_HOME_NAVIGATION;
                    var2 = {};
                    var6 = _closure1_slot21;
                    var6 = var6.YOUR_NITRO_HOME;
                    var2.current_component = var6;
                    var6 = _closure1_slot21;
                    var6 = var6.YOUR_NITRO_PLAN;
                    var2.next_component = var6;
                    var6 = 'header_settings_icon';
                    var2.interaction_component = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var1 = _closure1_slot12;
                    var1 = var1.PREMIUM_MANAGE_PLAN;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12.onPress = var15;
                var15 = _closure1_slot25;
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[2] = var12;
                var4.children = var11;
                var7 = var8.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                if (var6) {
                    _fun82067_ip = 456;
                    continue _fun82067
                }
            case 422:
                var8 = _closure1_slot15;
                var7 = _closure1_slot5;
                var6 = {};
                var10 = var10.pillParent;
                var6.style = var10;
                var9 = _closure1_slot26;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 456:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var12 = var1.extraBottomHeight;
        var1 = _closure1_slot27;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var2 = _closure1_slot0;
        var9 = _closure1_slot2;
        var5 = 23;
        var1 = var9[var5];
        var2 = var2.bind(var3)(var1);
        var1 = var2.usePremiumPerkCard;
        var8 = var1.bind(var2)();
        var2 = _closure1_slot4;
        var1 = var2.useRef;
        var6 = false;
        var1 = var1.bind(var2)(var6);
        var _closure2_slot0 = var1;
        var4 = _closure1_slot4;
        var2 = var4.useCallback;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 24;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.trackIfScrolledToBottom;
            var0 = {};
            var4 = arg0;
            var4 = var4.nativeEvent;
            var0.nativeEvent = var4;
            var3 = _closure1_slot17;
            var0.trackedType = var3;
            var3 = _closure2_slot0;
            var0.hasTrackedScrolledToBottom = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = new Array(0);
        var4 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot16;
        var1 = _closure1_slot6;
        var0 = {};
        var11 = var10.featureCardsContainer;
        var10 = new Array(2);
        var10[0] = var11;
        var11 = {};
        var11.paddingBottom = var12;
        var10[1] = var11;
        var0.contentContainerStyle = var10;
        var0.showsVerticalScrollIndicator = var6;
        var0.onScrollEndDrag = var4;
        var0.onMomentumScrollEnd = var4;
        var4 = 0;
        var0.scrollEventThrottle = var4;
        var6 = _closure1_slot28;
        var4 = new Array(5);
        var4[0] = var6;
        var6 = _closure1_slot29;
        var4[1] = var6;
        var12 = _closure1_slot15;
        var6 = _closure1_slot1;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var14 = var8.memberPricing;
        var15 = var10;
        var13 = copyDataProperties(var15, var14);
        var10 = var12.bind(var3)(var11, var10);
        var4[2] = var10;
        var12 = _closure1_slot15;
        var10 = var9[var5];
        var11 = var6.bind(var3)(var10);
        var10 = {};
        var14 = var8.earlyAccess;
        var15 = var10;
        var13 = copyDataProperties(var15, var14);
        var10 = var12.bind(var3)(var11, var10);
        var4[3] = var10;
        var7 = _closure1_slot15;
        var5 = var9[var5];
        var6 = var6.bind(var3)(var5);
        var5 = {};
        var14 = var8.superReactions;
        var15 = var5;
        var8 = copyDataProperties(var15, var14);
        var5 = var7.bind(var3)(var6, var5);
        var4[4] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun82072: for (var _fun82072_ip = 0;;) switch (_fun82072_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.extraBottomHeight;
                var12 = var0.fractionalState;
                var10 = var0.isInReverseTrial;
                var0 = _closure1_slot30;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 23;
                var0 = var13[var0];
                var1 = var16.bind(var3)(var0);
                var0 = var1.usePremiumPerkCard;
                var11 = var0.bind(var1)();
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var8
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED;
                    var1 = {};
                    var5 = arg0;
                    var1.section_name = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var _closure2_slot0 = var0;
                var1 = _closure1_slot4;
                var0 = var1.useRef;
                var5 = false;
                var0 = var0.bind(var1)(var5);
                var _closure2_slot1 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = function(arg0) { // Environment: var8
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.trackIfScrolledToBottom;
                    var1 = {};
                    var5 = arg0;
                    var5 = var5.nativeEvent;
                    var1.nativeEvent = var5;
                    var4 = _closure1_slot18;
                    var1.trackedType = var4;
                    var4 = _closure2_slot1;
                    var1.hasTrackedScrolledToBottom = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var4 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot16;
                var1 = _closure1_slot6;
                var0 = {};
                var7 = var6.featureCardsContainer;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7.paddingBottom = var14;
                var6[1] = var7;
                var0.contentContainerStyle = var6;
                var0.showsVerticalScrollIndicator = var5;
                var0.onScrollEndDrag = var4;
                var0.onMomentumScrollEnd = var4;
                var4 = 0;
                var0.scrollEventThrottle = var4;
                var7 = _closure1_slot15;
                var6 = _closure1_slot1;
                var5 = 25;
                var4 = var13[var5];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var17 = 19;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.DOb6x0;
                var13 = var14.bind(var15)(var13);
                var4.title = var13;
                var13 = _closure1_slot14;
                var13 = var13.FP_ONLY;
                if (!(var12 !== var13)) {
                    _fun82072_ip = 329;
                    continue _fun82072
                }
            case 293:
                var14 = var11.customProfile;
                var13 = new Array(3);
                var13[0] = var14;
                var14 = var11.clientThemes;
                var13[1] = var14;
                var14 = var11.serverBoosts;
                var13[2] = var14;
                _fun82072_ip = 392;
                continue _fun82072;
            case 329:
                var16 = var11.customProfile;
                if (var10) {
                    _fun82072_ip = 368;
                    continue _fun82072
                }
            case 338:
                var14 = new Array(3);
                var14[0] = var16;
                var15 = var11.clientThemes;
                var14[1] = var15;
                var15 = var11.greyServerBoosts;
                var14[2] = var15;
                _fun82072_ip = 389;
                continue _fun82072;
            case 368:
                var15 = new Array(2);
                var15[0] = var16;
                var16 = var11.clientThemes;
                var15[1] = var16;
                var14 = var15;
            case 389:
                var13 = var14;
            case 392:
                var4.perks = var13;
                var13 = function arg0() {
                    var3 = _closure2_slot0;
                    var0 = _closure1_slot20;
                    var2 = var0.CAROUSEL_SECTION_NAME_1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var4.onItemChange = var13;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(4);
                var4[0] = var6;
                var15 = _closure1_slot15;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = var13[var5];
                var14 = var6.bind(var3)(var7);
                var7 = {};
                var16 = _closure1_slot0;
                var18 = var13[var17];
                var18 = var16.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var13[var17];
                var18 = var16.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["+vt7w9"];
                var18 = var19.bind(var20)(var18);
                var7.title = var18;
                var19 = var11.customAppIcons;
                var18 = new Array(4);
                var18[0] = var19;
                var19 = var11.emoji;
                var18[1] = var19;
                var19 = var11.customSounds;
                var18[2] = var19;
                var19 = var11.sticker;
                var18[3] = var19;
                var7.perks = var18;
                var18 = function arg0() {
                    var3 = _closure2_slot0;
                    var0 = _closure1_slot20;
                    var2 = var0.CAROUSEL_SECTION_NAME_2;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var7.onItemChange = var18;
                var7 = var15.bind(var3)(var14, var7);
                var4[1] = var7;
                var15 = _closure1_slot15;
                var7 = var13[var5];
                var14 = var6.bind(var3)(var7);
                var7 = {};
                var18 = var13[var17];
                var18 = var16.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var13[var17];
                var18 = var16.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.LgHbnL;
                var18 = var19.bind(var20)(var18);
                var7.title = var18;
                var19 = var11.memberPricing;
                var18 = new Array(5);
                var18[0] = var19;
                var19 = var11.earlyAccess;
                var18[1] = var19;
                var19 = var11.largeUploads;
                var18[2] = var19;
                var19 = var11.hdVideo;
                var18[3] = var19;
                var19 = var11.superReactions;
                var18[4] = var19;
                var7.perks = var18;
                var18 = function arg0() {
                    var3 = _closure2_slot0;
                    var0 = _closure1_slot20;
                    var2 = var0.CAROUSEL_SECTION_NAME_3;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var7.onItemChange = var18;
                var7 = var15.bind(var3)(var14, var7);
                var4[2] = var7;
                var7 = _closure1_slot15;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.LTaxu9;
                var13 = var14.bind(var15)(var13);
                var5.title = var13;
                var9 = _closure1_slot14;
                var9 = var9.FP_ONLY;
                if (!(var12 !== var9)) {
                    _fun82072_ip = 822;
                    continue _fun82072
                }
            case 796:
                var12 = var11.entranceSounds;
                var9 = new Array(2);
                var9[0] = var12;
                var12 = var11.badge;
                var9[1] = var12;
                _fun82072_ip = 865;
                continue _fun82072;
            case 822:
                var12 = var11.entranceSounds;
                if (var10) {
                    _fun82072_ip = 851;
                    continue _fun82072
                }
            case 831:
                var10 = new Array(2);
                var10[0] = var12;
                var11 = var11.greyBadge;
                var10[1] = var11;
                _fun82072_ip = 862;
                continue _fun82072;
            case 851:
                var11 = new Array(1);
                var11[0] = var12;
                var10 = var11;
            case 862:
                var9 = var10;
            case 865:
                var5.perks = var9;
                var8 = function arg0() {
                    var3 = _closure2_slot0;
                    var0 = _closure1_slot20;
                    var2 = var0.CAROUSEL_SECTION_NAME_4;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                };
                var5.onItemChange = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var10 = true;
    var1.value = var10;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var14.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var4 = var6[var12];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot5 = var4;
    var1 = var1.ScrollView;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var14.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var14.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = var1.HorizontalGradient;
    var _closure1_slot10 = var4;
    var4 = var1.ThemeTypes;
    var _closure1_slot11 = var4;
    var1 = var1.UserSettingsSections;
    var _closure1_slot12 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ContentDismissActionType;
    var _closure1_slot13 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.FractionalPremiumStates;
    var _closure1_slot14 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var9 = var1.jsx;
    var _closure1_slot15 = var9;
    var1 = var1.jsxs;
    var _closure1_slot16 = var1;
    var1 = 'NewTab';
    var _closure1_slot17 = var1;
    var1 = 'PerksTab';
    var _closure1_slot18 = var1;
    var1 = 9;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.hexToRgbaString;
    var1 = 10;
    var1 = var6[var1];
    var8 = var14.bind(var0)(var1);
    var13 = 11;
    var1 = var6[var13];
    var1 = var14.bind(var0)(var1);
    var1 = var1.unsafe_rawColors;
    var1 = var1.PLUM_24;
    var11 = var8.bind(var0)(var1);
    var8 = var11.alpha;
    var1 = 0.6;
    var8 = var8.bind(var11)(var1);
    var1 = var8.hex;
    var1 = var1.bind(var8)();
    var1 = var4.bind(var7)(var1);
    var _closure1_slot19 = var1;
    var1 = {};
    var4 = 'NitroFavorites';
    var1.CAROUSEL_SECTION_NAME_1 = var4;
    var4 = 'MakeDiscordYours';
    var1.CAROUSEL_SECTION_NAME_2 = var4;
    var4 = 'EnjoyAnUpgradedDiscord';
    var1.CAROUSEL_SECTION_NAME_3 = var4;
    var4 = 'ShowUpTheWayYouWant';
    var1.CAROUSEL_SECTION_NAME_4 = var4;
    var _closure1_slot20 = var1;
    var1 = {};
    var4 = 'YourNitroHome';
    var1.YOUR_NITRO_HOME = var4;
    var4 = 'YourNitroPlan';
    var1.YOUR_NITRO_PLAN = var4;
    var _closure1_slot21 = var1;
    var4 = 12;
    var1 = var6[var4];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createStyles;
    var1 = {};
    var11 = {
        'display': 'flex',
        'width': '100%',
        'height': '100%'
    };
    var15 = var6[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var11.backgroundColor = var15;
    var1.container = var11;
    var11 = {
        'position': 'absolute',
        'width': '100%'
    };
    var1.background = var11;
    var11 = {};
    var11.flex = var12;
    var1.tabContent = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'column',
        'rowGap': 16,
        'alignItems': 'center'
    };
    var1.featureCardsContainer = var11;
    var11 = {
        'zIndex': 3,
        'paddingHorizontal': 16
    };
    var1.segmentedControlActual = var11;
    var11 = {
        'position': 'absolute',
        'top': 0,
        'left': 16,
        'right': 16
    };
    var12 = var6[var13];
    var12 = var14.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var11.borderRadius = var12;
    var1.segmentedControlVirtual = var11;
    var11 = {};
    var12 = var6[var13];
    var12 = var14.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var11.backgroundColor = var12;
    var1.androidSegmentedControlBackground = var11;
    var11 = {
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'height': '100%',
        'width': '10%'
    };
    var1.backSwipeSensor = var11;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot22 = var1;
    var1 = var6[var4];
    var11 = var5.bind(var0)(var1);
    var8 = var11.createStyles;
    var7 = {};
    var1 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 16,
        'paddingVertical': 8,
        'justifyContent': 'space-between',
        'gap': 8
    };
    var7.headerContainer = var1;
    var1 = {
        'display': 'flex',
        'flexDirection': 'column'
    };
    var7.contentContainer = var1;
    var12 = {
        'width': 24,
        'height': 24,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var1 = 24;
    var13 = var6[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var12.borderRadius = var13;
    var7.backButtonWrapper = var12;
    var12 = {
        'textAlign': 'center',
        'width': '80%'
    };
    var7.headerText = var12;
    var12 = {
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var7.pillParent = var12;
    var7 = var8.bind(var11)(var7);
    var _closure1_slot23 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.ArrowLargeLeftIcon;
    var7 = {
        'size': 'md',
        'color': 'white'
    };
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot24 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.SettingsIcon;
    var7 = {
        'size': 'md',
        'color': 'white'
    };
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot25 = var7;
    var7 = 15;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.PremiumReferralTrialPill;
    var7 = {};
    var7.hasExtraMargin = var10;
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot26 = var7;
    var7 = var6[var4];
    var10 = var5.bind(var0)(var7);
    var8 = var10.createStyles;
    var7 = {};
    var11 = {
        'display': 'flex',
        'flexDirection': 'column',
        'rowGap': 16,
        'alignItems': 'center',
        'paddingTop': 24
    };
    var7.featureCardsContainer = var11;
    var7 = var8.bind(var10)(var7);
    var _closure1_slot27 = var7;
    var7 = 21;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.TieredTenureBadgePerkCard;
    var7 = {};
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot28 = var7;
    var7 = 22;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var8 = var7.ReferralProgramPerkCard;
    var7 = {};
    var7 = var9.bind(var0)(var8, var7);
    var _closure1_slot29 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'display': 'flex',
        'flexDirection': 'column',
        'rowGap': 24,
        'paddingTop': 24
    };
    var4.featureCardsContainer = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}';
    var4.code = var7;
    var _closure1_slot31 = var4;
    var4 = 51;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumNitroHome.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun82079: for (var _fun82079_ip = 0;;) switch (_fun82079_ip) {
            case 0:
                var1 = arg0;
                var25 = var1.onClose;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var1 = var2[var1];
                var6 = var4.bind(var3)(var1);
                var5 = var6.useCommonTriggerPoint;
                var1 = 27;
                var1 = var2[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.OpenNitroTriggerPoint;
                var1 = var5.bind(var6)(var1);
                var1 = _closure1_slot22;
                var14 = var1.bind(var3)();
                var6 = _closure1_slot1;
                var1 = 28;
                var1 = var2[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var13 = var1.top;
                var17 = var1.bottom;
                var _closure2_slot0 = var17;
                var28 = 16;
                var1 = var2[var28];
                var5 = var4.bind(var3)(var1);
                var1 = var5.useNavigation;
                var1 = var1.bind(var5)();
                var _closure2_slot1 = var1;
                var8 = _closure1_slot4;
                var7 = var8.useLayoutEffect;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = false;
                    var0.headerShown = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var7.bind(var8)(var1, var5);
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var11 = 0;
                var1 = var1.bind(var5)(var11);
                var16 = _closure1_slot3;
                var21 = 2;
                var1 = var16.bind(var3)(var1, var21);
                var18 = var1[var11];
                var9 = 1;
                var1 = var1[var9];
                var _closure2_slot2 = var1;
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var5 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = var0.width;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var2);
                    return var0;
                };
                var1 = new Array(0);
                var12 = var7.bind(var8)(var5, var1);
                var5 = _closure1_slot4;
                var1 = var5.useState;
                var1 = var1.bind(var5)(var11);
                var1 = var16.bind(var3)(var1, var21);
                var15 = var1[var11];
                var1 = var1[var9];
                var _closure2_slot3 = var1;
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var5 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var8 = var7.bind(var8)(var5, var1);
                var5 = 29;
                var1 = var2[var5];
                var20 = var4.bind(var3)(var1);
                var19 = var20.useStateFromStores;
                var1 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var1 = var19.bind(var20)(var7, var1);
                var _closure2_slot4 = var1;
                var20 = _closure1_slot4;
                var19 = var20.useState;
                var7 = true;
                var7 = var19.bind(var20)(var7);
                var7 = var16.bind(var3)(var7, var21);
                var19 = var7[var11];
                var7 = var7[var9];
                var _closure2_slot5 = var7;
                var5 = var2[var5];
                var11 = var4.bind(var3)(var5);
                var9 = var11.useStateFromStores;
                var5 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var24 = var9.bind(var11)(var7, var5);
                var11 = _closure1_slot4;
                var9 = var11.useCallback;
                var7 = function(arg0) { // Environment: var0
                    _fun82085: for (var _fun82085_ip = 0;;) switch (_fun82085_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun82085_ip = 92;
                                continue _fun82085
                            }
                        case 9:
                            var0 = 1;
                            if (!(var0 === var1)) {
                                _fun82085_ip = 163;
                                continue _fun82085
                            }
                        case 19:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var0 = var2[var0];
                            var2 = undefined;
                            var4 = var1.bind(var2)(var0);
                            var3 = var4.track;
                            var0 = _closure1_slot9;
                            var1 = var0.MOBILE_NITRO_HOME_TAB_SWITCHED;
                            var0 = {};
                            var5 = _closure1_slot18;
                            var0.target = var5;
                            var0 = var3.bind(var4)(var1, var0);
                            var1 = _closure2_slot5;
                            var0 = false;
                            var0 = var1.bind(var2)(var0);
                            _fun82085_ip = 163;
                            continue _fun82085;
                        case 92:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var0 = var2[var0];
                            var2 = undefined;
                            var4 = var1.bind(var2)(var0);
                            var3 = var4.track;
                            var0 = _closure1_slot9;
                            var1 = var0.MOBILE_NITRO_HOME_TAB_SWITCHED;
                            var0 = {};
                            var5 = _closure1_slot17;
                            var0.target = var5;
                            var0 = var3.bind(var4)(var1, var0);
                            var1 = _closure2_slot5;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 163:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = new Array(0);
                var16 = var9.bind(var11)(var7, var5);
                var5 = 30;
                var5 = var2[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.bind(var3)();
                var5 = 31;
                var5 = var2[var5];
                var7 = var4.bind(var3)(var5);
                var5 = var7.useIsInReverseTrial;
                var7 = var5.bind(var7)();
                var5 = 32;
                var5 = var2[var5];
                var9 = var4.bind(var3)(var5);
                var5 = var9.useMaybeFetchTieredTenureBadgeData;
                var5 = var5.bind(var9)();
                var5 = 33;
                var5 = var2[var5];
                var11 = var4.bind(var3)(var5);
                var9 = var11.useSegmentedControlState;
                var5 = {};
                var22 = {};
                var23 = 19;
                var20 = var2[var23];
                var20 = var4.bind(var3)(var20);
                var27 = var20.intl;
                var26 = var27.string;
                var20 = var2[var23];
                var20 = var4.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.tahjbP;
                var20 = var26.bind(var27)(var20);
                var22.label = var20;
                var20 = var2[var23];
                var20 = var4.bind(var3)(var20);
                var27 = var20.intl;
                var26 = var27.string;
                var20 = var2[var23];
                var20 = var4.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.tahjbP;
                var20 = var26.bind(var27)(var20);
                var22.id = var20;
                var27 = _closure1_slot15;
                var26 = _closure1_slot33;
                var20 = {};
                var29 = var15 + var28;
                var20.extraBottomHeight = var29;
                var20 = var27.bind(var3)(var26, var20);
                var22.page = var20;
                var20 = new Array(2);
                var20[0] = var22;
                var22 = {};
                var26 = var2[var23];
                var26 = var4.bind(var3)(var26);
                var29 = var26.intl;
                var27 = var29.string;
                var26 = var2[var23];
                var26 = var4.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.w3RBdW;
                var26 = var27.bind(var29)(var26);
                var22.label = var26;
                var26 = var2[var23];
                var26 = var4.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var23 = var2[var23];
                var23 = var4.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.w3RBdW;
                var23 = var26.bind(var27)(var23);
                var22.id = var23;
                var27 = _closure1_slot15;
                var26 = _closure1_slot34;
                var23 = {};
                var28 = var15 + var28;
                var23.extraBottomHeight = var28;
                var28 = var6.fractionalState;
                var23.fractionalState = var28;
                var23.isInReverseTrial = var7;
                var23 = var27.bind(var3)(var26, var23);
                var22.page = var23;
                var20[1] = var22;
                var5.items = var20;
                var5.pageWidth = var18;
                var5.onPageChange = var16;
                var20 = var9.bind(var11)(var5);
                var5 = 34;
                var2 = var2[var5];
                var9 = var4.bind(var3)(var2);
                var4 = var9.useSharedValue;
                var2 = -32;
                if (!var1) {
                    _fun82079_ip = 865;
                    continue _fun82079
                }
            case 858:
                var11 = 8;
                var2 = var17 + var11;
            case 865:
                var18 = var4.bind(var9)(var2);
                _closure2_slot6 = var18;
                var11 = _closure1_slot0;
                var27 = _closure1_slot2;
                var2 = var27[var5];
                var9 = var11.bind(var3)(var2);
                var4 = var9.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.bottom = var1;
                    return var0;
                };
                var16 = {};
                var16.floatTabBottomOffset = var18;
                var2.__closure = var16;
                var16 = 15088278002673.0;
                var2.__workletHash = var16;
                var16 = _closure1_slot31;
                var2.__initData = var16;
                var9 = var4.bind(var9)(var2);
                var16 = _closure1_slot4;
                var4 = var16.useEffect;
                var2 = new Array(3);
                var2[0] = var18;
                var2[1] = var17;
                var2[2] = var1;
                var1 = function() { // Environment: var0
                    _fun82087: for (var _fun82087_ip = 0;;) switch (_fun82087_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            if (var1) {
                                _fun82087_ip = 115;
                                continue _fun82087
                            }
                        case 10:
                            var2 = _closure2_slot6;
                            var1 = var2.set;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 34;
                            var3 = var8[var3];
                            var6 = undefined;
                            var5 = var7.bind(var6)(var3);
                            var4 = var5.withDelay;
                            var3 = 35;
                            var3 = var8[var3];
                            var7 = var7.bind(var6)(var3);
                            var6 = var7.withSpring;
                            var3 = _closure2_slot0;
                            var0 = 8;
                            var3 = var3 + var0;
                            var0 = {
                                'duration': 2000,
                                'dampingRatio': 0.4,
                                'stiffness': 300
                            };
                            var3 = var6.bind(var7)(var3, var0);
                            var0 = 500;
                            var0 = var4.bind(var5)(var0, var3);
                            var0 = var1.bind(var2)(var0);
                        case 115:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var16)(var1, var2);
                var1 = 36;
                var2 = var27[var1];
                var4 = var11.bind(var3)(var2);
                var2 = var4.useThemeContext;
                var2 = var2.bind(var4)();
                var17 = var2.theme;
                var1 = var27[var1];
                var2 = var11.bind(var3)(var1);
                var1 = var2.isThemeDark;
                var18 = var1.bind(var2)(var17);
                var1 = _closure1_slot11;
                var16 = var1.MIDNIGHT;
                var26 = _closure1_slot1;
                var1 = 37;
                var2 = var27[var1];
                var4 = var26.bind(var3)(var2);
                var2 = var6.endsAt;
                var1 = var27[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.CountDownMessageTypes;
                var1 = var1.ENDS_IN;
                var22 = var4.bind(var3)(var2, var1);
                var23 = _closure1_slot4;
                var4 = var23.useEffect;
                var2 = function() { // Environment: var0
                    _fun82088: for (var _fun82088_ip = 0;;) switch (_fun82088_ip) {
                        case 0:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 38;
                            var4 = var3[var2];
                            var0 = undefined;
                            var6 = var7.bind(var0)(var4);
                            var4 = var6.UNSAFE_isDismissibleContentDismissed;
                            var5 = 39;
                            var3 = var3[var5];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.MOBILE_NITRO_HOME_SETTINGS_BADGE;
                            var3 = var4.bind(var6)(var3);
                            if (var3) {
                                _fun82088_ip = 112;
                                continue _fun82088
                            }
                        case 63:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = var3[var2];
                            var6 = var7.bind(var0)(var4);
                            var4 = var6.UNSAFE_markDismissibleContentAsDismissed;
                            var3 = var3[var5];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.MOBILE_NITRO_HOME_SETTINGS_BADGE;
                            var3 = var4.bind(var6)(var3);
                        case 112:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = var3[var2];
                            var6 = var7.bind(var0)(var4);
                            var4 = var6.UNSAFE_isDismissibleContentDismissed;
                            var3 = var3[var5];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
                            var3 = var4.bind(var6)(var3);
                            if (var3) {
                                _fun82088_ip = 213;
                                continue _fun82088
                            }
                        case 164:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = var1[var2];
                            var3 = var4.bind(var0)(var2);
                            var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                            var1 = var1[var5];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE;
                            var1 = var2.bind(var3)(var1);
                        case 213:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var4.bind(var23)(var2, var1);
                var23 = _closure1_slot4;
                var4 = var23.useEffect;
                var2 = function() { // Environment: var0
                    _fun82089: for (var _fun82089_ip = 0;;) switch (_fun82089_ip) {
                        case 0:
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 38;
                            var4 = var3[var2];
                            var0 = undefined;
                            var6 = var7.bind(var0)(var4);
                            var4 = var6.UNSAFE_isDismissibleContentDismissed;
                            var5 = 39;
                            var3 = var3[var5];
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.DismissibleContent;
                            var3 = var3.WHATS_NEW_TENURE_BADGE_REWARD;
                            var3 = var4.bind(var6)(var3);
                            if (var3) {
                                _fun82089_ip = 112;
                                continue _fun82089
                            }
                        case 63:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = var1[var2];
                            var3 = var4.bind(var0)(var2);
                            var2 = var3.UNSAFE_markDismissibleContentAsDismissed;
                            var1 = var1[var5];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.DismissibleContent;
                            var1 = var1.WHATS_NEW_TENURE_BADGE_REWARD;
                            var1 = var2.bind(var3)(var1);
                        case 112:
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var4.bind(var23)(var2, var1);
                var1 = 40;
                var1 = var27[var1];
                var4 = var11.bind(var3)(var1);
                var2 = var4.usePromotionMarketingComponent;
                var1 = 41;
                var1 = var27[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.MarketingComponentType;
                var1 = var1.PREMIUM_TAB;
                var11 = var2.bind(var4)(var1);
                _closure2_slot7 = var11;
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    _fun82090: for (var _fun82090_ip = 0;;) switch (_fun82090_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun82090_ip = 46;
                                continue _fun82090
                            }
                        case 16:
                            var2 = _closure2_slot7;
                            var2 = var2.properties;
                            var2 = var2.properties;
                            var3 = var2.oneofKind;
                            var2 = 'premiumTab';
                            var1 = var2 !== var3;
                        case 46:
                            if (var1) {
                                _fun82090_ip = 126;
                                continue _fun82090
                            }
                        case 49:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 38;
                            var2 = var7[var2];
                            var3 = undefined;
                            var5 = var6.bind(var3)(var2);
                            var4 = var5.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                            var2 = 39;
                            var2 = var7[var2];
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.DismissibleContent;
                            var3 = var2.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                            var2 = _closure2_slot7;
                            var2 = var2.promotionId;
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = var2.isDismissed;
                        case 126:
                            if (var1) {
                                _fun82090_ip = 218;
                                continue _fun82090
                            }
                        case 129:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 42;
                            var1 = var7[var1];
                            var2 = undefined;
                            var4 = var6.bind(var2)(var1);
                            var3 = var4.markSnowflakeBoundDismissibleContentAsDismissed;
                            var1 = 39;
                            var1 = var7[var1];
                            var1 = var6.bind(var2)(var1);
                            var1 = var1.DismissibleContent;
                            var2 = var1.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                            var0 = _closure2_slot7;
                            var1 = var0.promotionId;
                            var0 = {};
                            var5 = _closure1_slot13;
                            var5 = var5.AUTO_DISMISS;
                            var0.dismissAction = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 218:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot16;
                var1 = _closure1_slot5;
                var0 = {};
                var11 = var14.container;
                var4 = new Array(2);
                var4[0] = var11;
                var11 = {};
                var11.paddingTop = var13;
                var4[1] = var11;
                var0.style = var4;
                var13 = _closure1_slot15;
                var4 = 43;
                var4 = var27[var4];
                var11 = var26.bind(var3)(var4);
                var4 = {};
                var23 = var14.background;
                var4.style = var23;
                var23 = 44;
                var23 = var27[var23];
                var23 = var26.bind(var3)(var23);
                var4.source = var23;
                var11 = var13.bind(var3)(var11, var4);
                var4 = new Array(5);
                var4[0] = var11;
                var23 = _closure1_slot15;
                var13 = _closure1_slot32;
                var11 = {};
                var11.onClose = var25;
                var11.subscription = var24;
                var11 = var23.bind(var3)(var13, var11);
                var4[1] = var11;
                var11 = var6.fractionalState;
                var6 = _closure1_slot14;
                var6 = var6.NONE;
                var6 = var11 !== var6;
                if (!var6) {
                    _fun82079_ip = 1380;
                    continue _fun82079
                }
            case 1377:
                var6 = !var7;
            case 1380:
                if (!var6) {
                    _fun82079_ip = 1420;
                    continue _fun82079
                }
            case 1383:
                var13 = _closure1_slot15;
                var11 = _closure1_slot1;
                var23 = _closure1_slot2;
                var7 = 45;
                var7 = var23[var7];
                var11 = var11.bind(var3)(var7);
                var7 = {};
                var7.countdownText = var22;
                var6 = var13.bind(var3)(var11, var7);
            case 1420:
                var4[2] = var6;
                var11 = _closure1_slot16;
                var7 = _closure1_slot5;
                var6 = {};
                var13 = var14.tabContent;
                var6.style = var13;
                var23 = _closure1_slot15;
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var13 = 46;
                var13 = var24[var13];
                var13 = var22.bind(var3)(var13);
                var22 = var13.SegmentedControlPages;
                var13 = {};
                var13.state = var20;
                var22 = var23.bind(var3)(var22, var13);
                var13 = new Array(2);
                var13[0] = var22;
                if (!var19) {
                    _fun82079_ip = 1531;
                    continue _fun82079
                }
            case 1497:
                var24 = _closure1_slot15;
                var23 = _closure1_slot5;
                var22 = {};
                var26 = var14.backSwipeSensor;
                var25 = new Array(1);
                var25[0] = var26;
                var22.style = var25;
                var19 = var24.bind(var3)(var23, var22);
            case 1531:
                var13[1] = var19;
                var6.children = var13;
                var6 = var11.bind(var3)(var7, var6);
                var4[3] = var6;
                var7 = _closure1_slot16;
                var6 = _closure1_slot1;
                var22 = _closure1_slot2;
                var5 = var22[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var5.style = var9;
                var5.onLayout = var8;
                var11 = _closure1_slot15;
                var9 = _closure1_slot5;
                var8 = {};
                var13 = var14.segmentedControlActual;
                var8.style = var13;
                var8.onLayout = var12;
                var19 = _closure1_slot15;
                var13 = _closure1_slot0;
                var12 = 47;
                var12 = var22[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.SegmentedControl;
                var12 = {};
                var12.state = var20;
                var20 = 'experimental_Small';
                var12.variant = var20;
                var12 = var19.bind(var3)(var13, var12);
                var8.children = var12;
                var9 = var11.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var9 = !var18;
                if (!var9) {
                    _fun82079_ip = 1786;
                    continue _fun82079
                }
            case 1683:
                var13 = _closure1_slot15;
                var12 = _closure1_slot1;
                var19 = _closure1_slot2;
                var11 = 48;
                var11 = var19[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var19 = _closure1_slot10;
                var20 = var19.START;
                var11.start = var20;
                var19 = var19.END;
                var11.end = var19;
                var19 = ['rgba(218, 187, 249, 0.5)', 'rgba(229, 177, 193, 0.5)'];
                var11.colors = var19;
                var20 = var14.segmentedControlVirtual;
                var19 = new Array(2);
                var19[0] = var20;
                var20 = {};
                var20.height = var15;
                var20.zIndex = var21;
                var19[1] = var20;
                var11.style = var19;
                var9 = var13.bind(var3)(var12, var11);
            case 1786:
                var8[1] = var9;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 49;
                var9 = var12[var9];
                var11 = var11.bind(var3)(var9);
                var9 = var11.isAndroid;
                var9 = var9.bind(var11)();
                var12 = _closure1_slot15;
                if (var9) {
                    _fun82079_ip = 1947;
                    continue _fun82079
                }
            case 1827:
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 50;
                var9 = var13[var9];
                var11 = var11.bind(var3)(var9);
                var9 = {};
                var13 = 0.5;
                if (!var18) {
                    _fun82079_ip = 1872;
                    continue _fun82079
                }
            case 1862:
                var13 = 0.2;
            case 1872:
                var9.blurAmount = var13;
                var18 = var14.segmentedControlVirtual;
                var13 = new Array(2);
                var13[0] = var18;
                var18 = {
                    'height': null,
                    'zIndex': 1,
                    'overflow': 'hidden'
                };
                var18.height = var15;
                var13[1] = var18;
                var9.style = var13;
                var9.blurTheme = var17;
                var13 = undefined;
                if (!(var17 === var16)) {
                    _fun82079_ip = 1934;
                    continue _fun82079
                }
            case 1930:
                var13 = _closure1_slot19;
            case 1934:
                var9.blurTintRgba = var13;
                var9 = var12.bind(var3)(var11, var9);
                _fun82079_ip = 2011;
                continue _fun82079;
            case 1947:
                var11 = _closure1_slot5;
                var10 = {};
                var16 = var14.segmentedControlVirtual;
                var13 = new Array(3);
                var13[0] = var16;
                var14 = var14.androidSegmentedControlBackground;
                var13[1] = var14;
                var14 = {
                    'height': null,
                    'zIndex': 1,
                    'overflow': 'hidden'
                };
                var14.height = var15;
                var13[2] = var14;
                var10.style = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 2011:
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[4] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.BACK_BUTTON_SIZE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 3119, 660, 1369, 1623, 33, 3241, 669, 671, 1297, 5837, 5434, 7144, 1469, 4880, 3938, 1234, 795, 10448, 10470, 10450, 7327, 10482, 10483, 10484, 1568, 566, 4658, 6754, 10485, 8321, 3717, 4087, 3207, 7326, 3213, 1358, 10444, 7476, 1360, 5426, 10486, 10487, 8494, 8322, 4104, 478, 4078, 2]);