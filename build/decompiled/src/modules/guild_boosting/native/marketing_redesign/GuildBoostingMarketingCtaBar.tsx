// modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var7 = undefined;
        var2 = var8.bind(var7)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun78016: for (var _fun78016_ip = 0;;) switch (_fun78016_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.withTiming;
                    var1 = _closure2_slot0;
                    var2 = 0;
                    if (!var1) {
                        _fun78016_ip = 47;
                        continue _fun78016
                    }
                case 44:
                    var2 = 1;
                case 47:
                    var1 = {};
                    var5 = 250;
                    var1.duration = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
            }
        };
        var4 = {};
        var6 = 13;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.withTiming;
        var4.withTiming = var6;
        var4.isVisible = var5;
        var0.__closure = var4;
        var4 = 6895237370657.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot16;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot17 = var0;
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
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsObjects;
    var _closure1_slot8 = var6;
    var6 = var3.AnalyticsPages;
    var _closure1_slot9 = var6;
    var3 = var3.AnalyticsSections;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FractionalPremiumStates;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var9 = 8;
    var3 = var5[var9];
    var3 = var12.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.SECOND;
    var10 = 10;
    var3 = var10 * var3;
    var _closure1_slot14 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var11 = 'center';
    var8 = {
        'alignSelf': 'center',
        'marginBottom': 24,
        'maxWidth': 395,
        'paddingHorizontal': 16,
        'textAlign': 'center'
    };
    var3.heading = var8;
    var13 = 'relative';
    var8 = {
        'paddingHorizontal': 16,
        'paddingTop': 32,
        'position': 'relative',
        'zIndex': 2
    };
    var3.headerContent = var8;
    var8 = {
        'alignSelf': 'center',
        'borderRadius': 24,
        'backgroundColor': null,
        'marginBottom': 10,
        'height': 48,
        'width': 48
    };
    var14 = var5[var10];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var14;
    var3.guildIcon = var8;
    var8 = {};
    var14 = var5[var10];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var14;
    var3.guildIconText = var8;
    var8 = {
        'alignSelf': 'center',
        'maxWidth': '50%',
        'textAlign': 'center'
    };
    var3.guildName = var8;
    var8 = {};
    var8.position = var13;
    var3.guildBoostCountWrapper = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'marginBottom': 16,
        'paddingBottom': 16,
        'paddingTop': 3,
        'position': 'relative'
    };
    var3.totalBoostCountWrapper = var8;
    var8 = {
        'flexGrow': 0,
        'flexShrink': 0,
        'marginRight': 3
    };
    var3.guildBoostCountIcon = var8;
    var8 = {
        'flexGrow': 0,
        'flexShrink': 1,
        'opacity': 0.6
    };
    var3.guildBoostCount = var8;
    var8 = {
        'position': 'absolute',
        'top': 3,
        'width': '100%'
    };
    var3.guildBoostCurrentUserCountWrapper = var8;
    var8 = {};
    var8.alignSelf = var11;
    var3.guildBoostCurrentUserCount = var8;
    var8 = {
        'alignSelf': 'center',
        'borderRadius': null,
        'maxWidth': 300,
        'width': '90%'
    };
    var11 = var5[var10];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xl;
    var8.borderRadius = var11;
    var3.cta = var8;
    var8 = {};
    var11 = 11;
    var12 = var5[var11];
    var13 = var4.bind(var0)(var12);
    var12 = var13.generateBoxShadowStyle;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.EIGHT_DP_ELEVATION_SHADOW_PARAMS;
    var16 = var12.bind(var13)(var11);
    var17 = var8;
    var11 = copyDataProperties(var17, var16);
    var3.ctaPrimary = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.ctaSecondary = var8;
    var8 = {};
    var8.marginRight = var9;
    var3.giftIcon = var8;
    var8 = {};
    var9 = 'visible';
    var8.overflow = var9;
    var3.gradient = var8;
    var8 = {
        'bottom': 4294967295,
        'left': '-20%',
        'position': 'absolute',
        'height': 125,
        'width': '150%',
        'zIndex': 1
    };
    var3.headerWave = var8;
    var8 = {
        'height': '75%',
        'left': '5%',
        'opacity': 0.9,
        'position': 'absolute',
        'top': 0,
        'width': '90%',
        'zIndex': 1
    };
    var3.headerStars = var8;
    var8 = {
        'marginTop': 4294967283,
        'marginBottom': 23
    };
    var3.boostingUnavailablePill = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function GuildBoostingMarketingCtaBarTsx1(){const{withTiming,isVisible}=this.__closure;return{opacity:withTiming(isVisible?1:0,{duration:250})};}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = 42;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingCtaBar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78017: for (var _fun78017_ip = 0;;) switch (_fun78017_ip) {
            case 0:
                var8 = arg0;
                var0 = _closure1_slot15;
                var3 = undefined;
                var14 = var0.bind(var3)();
                var _closure2_slot0 = var14;
                var24 = var8.fractionalPremiumInfo;
                var26 = var8.guild;
                var _closure2_slot1 = var26;
                var25 = var8.previousGuildSubscriptionSlot;
                var13 = var8.onLayout;
                var23 = var8.premiumGroupRole;
                var22 = var8.intent;
                var21 = var8.onResult;
                var12 = _closure1_slot4;
                var1 = var12.useState;
                var0 = false;
                var2 = var1.bind(var12)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var2 = var1.bind(var3)(var2, var0);
                var16 = 0;
                var0 = var2[var16];
                var _closure2_slot2 = var0;
                var1 = 1;
                var1 = var2[var1];
                var _closure2_slot3 = var1;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var1 = var2[var1];
                var4 = var5.bind(var3)(var1);
                var1 = 15;
                var1 = var2[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.BOOSTED_GUILD_PERKS_MODAL;
                var1 = var4.bind(var3)(var1);
                var1 = var1.analyticsLocations;
                var _closure2_slot4 = var1;
                var1 = _closure1_slot0;
                var4 = 16;
                var6 = var2[var4];
                var15 = var1.bind(var3)(var6);
                var10 = var15.useStateFromStores;
                var6 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var9
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = var10.bind(var15)(var7, var6);
                var4 = var2[var4];
                var15 = var1.bind(var3)(var4);
                var10 = var15.useStateFromStores;
                var4 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var9
                    var0 = _closure1_slot7;
                    var0 = var0.boostSlots;
                    return var0;
                };
                var4 = var10.bind(var15)(var6, var4);
                var _closure2_slot5 = var4;
                var10 = var12.useMemo;
                var6 = new Array(2);
                var6[0] = var4;
                var4 = var26.id;
                var6[1] = var4;
                var4 = function() { // Environment: var9
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.keys;
                    var0 = _closure2_slot5;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        _fun78021: for (var _fun78021_ip = 0;;) switch (_fun78021_ip) {
                            case 0:
                                var2 = _closure2_slot5;
                                var0 = arg0;
                                var2 = var2[var0];
                                var3 = var2.premiumGuildSubscription;
                                var0 = null;
                                var0 = var0 != var3;
                                if (!var0) {
                                    _fun78021_ip = 53;
                                    continue _fun78021
                                }
                            case 29:
                                var2 = var2.premiumGuildSubscription;
                                var2 = var2.guildId;
                                var1 = _closure2_slot1;
                                var1 = var1.id;
                                var0 = var2 === var1;
                            case 53:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.length;
                    return var0;
                };
                var39 = var10.bind(var12)(var4, var6);
                var _closure2_slot6 = var39;
                var6 = _closure1_slot17;
                var35 = var6.bind(var3)(var0);
                var4 = !var0;
                var37 = var6.bind(var3)(var4);
                var4 = 17;
                var6 = var2[var4];
                var10 = var5.bind(var3)(var6);
                var6 = var24.endsAt;
                var4 = var2[var4];
                var4 = var1.bind(var3)(var4);
                var4 = var4.CountDownMessageTypes;
                var4 = var4.LONG_TIME_LEFT;
                var6 = var10.bind(var3)(var6, var4);
                var4 = 18;
                var4 = var2[var4];
                var10 = var1.bind(var3)(var4);
                var4 = var10.useIsInReverseTrial;
                var4 = var4.bind(var10)();
                var10 = 19;
                var10 = var2[var10];
                var10 = var5.bind(var3)(var10);
                var8 = var8.guild;
                var8 = var8.id;
                var8 = var10.bind(var3)(var8);
                var44 = var8.total;
                var10 = var12.useRef;
                var8 = -1;
                var8 = var10.bind(var12)(var8);
                var _closure2_slot7 = var8;
                var10 = var12.useEffect;
                var8 = new Array(2);
                var8[0] = var0;
                var8[1] = var39;
                var0 = function() { // Environment: var9
                    _fun78022: for (var _fun78022_ip = 0;;) switch (_fun78022_ip) {
                        case 0:
                            var3 = _closure2_slot6;
                            var2 = 0;
                            var2 = var3 > var2;
                            if (var2) {
                                _fun78022_ip = 22;
                                continue _fun78022
                            }
                        case 18:
                            var2 = _closure2_slot2;
                        case 22:
                            if (!var2) {
                                _fun78022_ip = 68;
                                continue _fun78022
                            }
                        case 25:
                            var2 = _closure2_slot7;
                            var1 = global;
                            var5 = var1.window;
                            var4 = var5.setTimeout;
                            var3 = _closure1_slot14;
                            var1 = function() { // Environment: var0
                                var2 = _closure2_slot3;
                                var0 = undefined;
                                var1 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var0 = !var0;
                                    return var0;
                                };
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var4.bind(var5)(var1, var3);
                            var2.current = var1;
                        case 68:
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.window;
                                var1 = var2.clearTimeout;
                                var0 = _closure2_slot7;
                                var0 = var0.current;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var10.bind(var12)(var0, var8);
                var0 = 20;
                var0 = var2[var0];
                var5 = var5.bind(var3)(var0);
                var0 = var5.isPremium;
                var5 = var0.bind(var5)(var7);
                var0 = 21;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.PremiumSubscriptionGroupRole;
                var0 = var0.MEMBER;
                if (!(var23 !== var0)) {
                    _fun78017_ip = 592;
                    continue _fun78017
                }
            case 516:
                var1 = var24.fractionalState;
                var0 = _closure1_slot11;
                var0 = var0.NONE;
                var19 = null;
                if (!(var1 !== var0)) {
                    _fun78017_ip = 634;
                    continue _fun78017
                }
            case 538:
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 23;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.fpDurationText = var6;
                var0.isInReverseTrial = var4;
                var4 = var14.boostingUnavailablePill;
                var0.style = var4;
                var19 = var2.bind(var3)(var1, var0);
                _fun78017_ip = 634;
                continue _fun78017;
            case 592:
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 22;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = var14.boostingUnavailablePill;
                var0.style = var4;
                var19 = var2.bind(var3)(var1, var0);
            case 634:
                var2 = _closure1_slot13;
                var1 = _closure1_slot5;
                var0 = {};
                var7 = _closure1_slot12;
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var12 = 24;
                var4 = var6[var12];
                var10 = var8.bind(var3)(var4);
                var4 = {};
                var4.onLayout = var13;
                var13 = 160;
                var4.angle = var13;
                var13 = {
                    'x': 0.5,
                    'y': 0.5
                };
                var4.angleCenter = var13;
                var40 = 10;
                var13 = var6[var40];
                var13 = var8.bind(var3)(var13);
                var13 = var13.unsafe_rawColors;
                var15 = var13.PREMIUM_TIER_0_HEADER_GRADIENT_1;
                var13 = new Array(5);
                var13[0] = var15;
                var15 = var6[var40];
                var15 = var8.bind(var3)(var15);
                var15 = var15.unsafe_rawColors;
                var15 = var15.PREMIUM_TIER_0_HEADER_GRADIENT_2;
                var13[1] = var15;
                var15 = var6[var40];
                var15 = var8.bind(var3)(var15);
                var15 = var15.unsafe_rawColors;
                var15 = var15.PREMIUM_TIER_0_HEADER_GRADIENT_3;
                var13[2] = var15;
                var15 = var6[var40];
                var15 = var8.bind(var3)(var15);
                var15 = var15.unsafe_rawColors;
                var15 = var15.PREMIUM_TIER_0_HEADER_GRADIENT_4;
                var13[3] = var15;
                var15 = var6[var40];
                var15 = var8.bind(var3)(var15);
                var15 = var15.unsafe_rawColors;
                var15 = var15.PREMIUM_TIER_0_HEADER_GRADIENT_5;
                var13[4] = var15;
                var4.colors = var13;
                var13 = [0, 0.3221, 0.429, 0.7606, 1];
                var4.locations = var13;
                var13 = true;
                var4.useAngle = var13;
                var15 = var14.gradient;
                var4.style = var15;
                var12 = var6[var12];
                var15 = var8.bind(var3)(var12);
                var12 = {};
                var12.angle = var16;
                var16 = {
                    'x': 0.5,
                    'y': 0.5
                };
                var12.angleCenter = var16;
                var16 = ['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)'];
                var12.colors = var16;
                var16 = [0.12, 0.5];
                var12.locations = var16;
                var12.useAngle = var13;
                var13 = var14.gradient;
                var12.style = var13;
                var13 = 25;
                var13 = var6[var13];
                var16 = var8.bind(var3)(var13);
                var13 = {};
                var13.guild = var26;
                var13 = var7.bind(var3)(var16, var13);
                var16 = new Array(4);
                var16[0] = var13;
                var17 = {};
                var13 = var14.headerContent;
                var17.style = var13;
                var36 = _closure1_slot0;
                var33 = 26;
                var13 = var6[var33];
                var13 = var36.bind(var3)(var13);
                var20 = var13.Text;
                var18 = {
                    'style': null,
                    'color': 'always-white',
                    'variant': 'display-sm'
                };
                var13 = var14.heading;
                var18.style = var13;
                var13 = 27;
                var27 = var6[var13];
                var27 = var36.bind(var3)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var6[var13];
                var27 = var36.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27["AF+Tyh"];
                var27 = var28.bind(var29)(var27);
                var18.children = var27;
                var20 = var7.bind(var3)(var20, var18);
                var18 = new Array(5);
                var18[0] = var20;
                var28 = 28;
                var20 = var6[var28];
                var27 = var8.bind(var3)(var20);
                var20 = {};
                var29 = var14.guildIcon;
                var20.style = var29;
                var29 = var14.guildIconText;
                var20.textStyle = var29;
                var20.guild = var26;
                var28 = var6[var28];
                var28 = var36.bind(var3)(var28);
                var28 = var28.GuildIconSizes;
                var28 = var28.LARGE;
                var20.size = var28;
                var20 = var7.bind(var3)(var27, var20);
                var18[1] = var20;
                var20 = 29;
                var20 = var6[var20];
                var20 = var36.bind(var3)(var20);
                var27 = var20.PressableOpacity;
                var20 = {};
                var28 = function() {
                    var0 = global;
                    var3 = var0.window;
                    var2 = var3.clearTimeout;
                    var1 = _closure2_slot7;
                    var1 = var1.current;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = !var0;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var20.onPress = var28;
                var28 = var6[var33];
                var28 = var36.bind(var3)(var28);
                var29 = var28.Text;
                var28 = {
                    'style': null,
                    'color': 'always-white',
                    'variant': 'text-md/bold'
                };
                var30 = var14.guildName;
                var28.style = var30;
                var30 = var26.name;
                var28.children = var30;
                var29 = var7.bind(var3)(var29, var28);
                var28 = new Array(2);
                var28[0] = var29;
                var29 = {};
                var30 = var14.guildBoostCountWrapper;
                var29.style = var30;
                var31 = 12;
                var30 = var6[var31];
                var30 = var8.bind(var3)(var30);
                var32 = var30.View;
                var30 = {};
                var34 = new Array(2);
                var34[0] = var37;
                var37 = var14.totalBoostCountWrapper;
                var34[1] = var37;
                var30.style = var34;
                var38 = 30;
                var34 = var6[var38];
                var37 = var8.bind(var3)(var34);
                var34 = {};
                var41 = var14.guildBoostCountIcon;
                var34.style = var41;
                var41 = 31;
                var41 = var6[var41];
                var41 = var8.bind(var3)(var41);
                var34.source = var41;
                var40 = var6[var40];
                var40 = var8.bind(var3)(var40);
                var40 = var40.unsafe_rawColors;
                var40 = var40.GUILD_BOOSTING_PINK;
                var34.color = var40;
                var38 = var6[var38];
                var38 = var8.bind(var3)(var38);
                var38 = var38.Sizes;
                var38 = var38.SMALL;
                var34.size = var38;
                var37 = var7.bind(var3)(var37, var34);
                var34 = new Array(2);
                var34[0] = var37;
                var37 = var6[var33];
                var37 = var36.bind(var3)(var37);
                var38 = var37.Text;
                var37 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-sm/bold',
                    'color': 'always-white'
                };
                var40 = var14.guildBoostCount;
                var37.style = var40;
                var40 = var6[var13];
                var40 = var36.bind(var3)(var40);
                var43 = var40.intl;
                var42 = var43.format;
                var40 = var6[var13];
                var40 = var36.bind(var3)(var40);
                var40 = var40.t;
                var41 = var40["pob/cL"];
                var40 = {};
                var40.subscriptions = var44;
                var40 = var42.bind(var43)(var41, var40);
                var37.children = var40;
                var37 = var7.bind(var3)(var38, var37);
                var34[1] = var37;
                var30.children = var34;
                var32 = var2.bind(var3)(var32, var30);
                var30 = new Array(2);
                var30[0] = var32;
                var31 = var6[var31];
                var31 = var8.bind(var3)(var31);
                var32 = var31.View;
                var31 = {};
                var34 = new Array(2);
                var34[0] = var35;
                var35 = var14.guildBoostCurrentUserCountWrapper;
                var34[1] = var35;
                var31.style = var34;
                var33 = var6[var33];
                var33 = var36.bind(var3)(var33);
                var34 = var33.Text;
                var33 = {
                    'style': null,
                    'variant': 'text-sm/bold',
                    'color': 'always-white'
                };
                var37 = var14.guildBoostCount;
                var35 = new Array(2);
                var35[0] = var37;
                var37 = var14.guildBoostCurrentUserCount;
                var35[1] = var37;
                var33.style = var35;
                var35 = var6[var13];
                var35 = var36.bind(var3)(var35);
                var38 = var35.intl;
                var37 = var38.format;
                var35 = var6[var13];
                var35 = var36.bind(var3)(var35);
                var35 = var35.t;
                var36 = var35.xXb78j;
                var35 = {};
                var35.numSubscriptions = var39;
                var35 = var37.bind(var38)(var36, var35);
                var33.children = var35;
                var33 = var7.bind(var3)(var34, var33);
                var31.children = var33;
                var31 = var7.bind(var3)(var32, var31);
                var30[1] = var31;
                var29.children = var30;
                var29 = var2.bind(var3)(var1, var29);
                var28[1] = var29;
                var20.children = var28;
                var20 = var2.bind(var3)(var27, var20);
                var18[2] = var20;
                var18[3] = var19;
                var19 = 32;
                var19 = var6[var19];
                var20 = var8.bind(var3)(var19);
                var19 = {};
                var28 = var14.cta;
                var27 = new Array(2);
                var27[0] = var28;
                var28 = var14.ctaPrimary;
                var27[1] = var28;
                var19.styles = var27;
                var19.guild = var26;
                var19.previousGuildSubscriptionSlot = var25;
                var25 = _closure1_slot10;
                var25 = var25.HEADER;
                var19.analyticsSection = var25;
                var24 = var24.fractionalState;
                var19.fractionalPremiumState = var24;
                var19.premiumGroupRole = var23;
                var19.intent = var22;
                var19.onResult = var21;
                var19 = var7.bind(var3)(var20, var19);
                var18[4] = var19;
                var17.children = var18;
                var17 = var2.bind(var3)(var1, var17);
                var16[1] = var17;
                var17 = 33;
                var17 = var6[var17];
                var18 = var8.bind(var3)(var17);
                var17 = {};
                var19 = var14.headerStars;
                var17.style = var19;
                var17 = var7.bind(var3)(var18, var17);
                var16[2] = var17;
                var17 = 34;
                var17 = var6[var17];
                var18 = var8.bind(var3)(var17);
                var17 = {};
                var19 = var14.headerWave;
                var17.style = var19;
                var17 = var7.bind(var3)(var18, var17);
                var16[3] = var17;
                var12.children = var16;
                var12 = var2.bind(var3)(var15, var12);
                var4.children = var12;
                var10 = var7.bind(var3)(var10, var4);
                var4 = new Array(2);
                var4[0] = var10;
                var12 = 35;
                var6 = var6[var12];
                var6 = var8.bind(var3)(var6);
                if (var5) {
                    _fun78017_ip = 2144;
                    continue _fun78017
                }
            case 1987:
                var5 = {};
                var10 = var14.cta;
                var8 = new Array(2);
                var8[0] = var10;
                var10 = var14.ctaSecondary;
                var8[1] = var10;
                var5.style = var8;
                var17 = _closure1_slot0;
                var8 = _closure1_slot2;
                var10 = var8[var12];
                var10 = var17.bind(var3)(var10);
                var10 = var10.ButtonLooks;
                var10 = var10.OUTLINED;
                var5.look = var10;
                var10 = var8[var13];
                var10 = var17.bind(var3)(var10);
                var16 = var10.intl;
                var15 = var16.string;
                var10 = var8[var13];
                var10 = var17.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.pj0XBN;
                var10 = var15.bind(var16)(var10);
                var5.text = var10;
                var10 = _closure1_slot1;
                var8 = var8[var12];
                var8 = var10.bind(var3)(var8);
                var8 = var8.Colors;
                var8 = var8.GREY;
                var5.color = var8;
                var8 = function() {
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 39;
                    var2 = var1[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.pushLazy;
                    var5 = _closure1_slot0;
                    var2 = 41;
                    var2 = var1[var2];
                    var5 = var5.bind(var0)(var2);
                    var2 = 40;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var5.bind(var0)(var2, var1);
                    var1 = {};
                    var5 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.PREMIUM_GUILD_USER_MODAL;
                    var5.page = var7;
                    var7 = _closure1_slot10;
                    var7 = var7.HEADER;
                    var5.section = var7;
                    var6 = _closure1_slot8;
                    var6 = var6.BUTTON_CTA;
                    var5.object = var6;
                    var1.analyticsLocation = var5;
                    var5 = _closure2_slot4;
                    var1.analyticsLocations = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var5.onPress = var8;
                _fun78017_ip = 2313;
                continue _fun78017;
            case 2144:
                var8 = {};
                var15 = var14.cta;
                var10 = new Array(2);
                var10[0] = var15;
                var14 = var14.ctaSecondary;
                var10[1] = var14;
                var8.style = var10;
                var16 = _closure1_slot0;
                var10 = _closure1_slot2;
                var14 = var10[var12];
                var14 = var16.bind(var3)(var14);
                var14 = var14.ButtonLooks;
                var14 = var14.OUTLINED;
                var8.look = var14;
                var14 = var10[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var10[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["8MYSQw"];
                var13 = var14.bind(var15)(var13);
                var8.text = var13;
                var11 = _closure1_slot1;
                var10 = var10[var12];
                var10 = var11.bind(var3)(var10);
                var10 = var10.Colors;
                var10 = var10.GREY;
                var8.color = var10;
                var10 = function() {
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 36;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.closeApplyBoostModal;
                    var1 = var1.bind(var4)();
                    var1 = 37;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openGiftModal;
                    var1 = {};
                    var4 = {};
                    var6 = _closure1_slot9;
                    var6 = var6.PREMIUM_GUILD_USER_MODAL;
                    var4.page = var6;
                    var6 = _closure1_slot10;
                    var6 = var6.HEADER;
                    var4.section = var6;
                    var5 = _closure1_slot8;
                    var5 = var5.BUTTON_CTA;
                    var4.object = var5;
                    var1.analyticsLocation = var4;
                    var4 = _closure2_slot4;
                    var1.analyticsLocations = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8.onPress = var10;
                var9 = function() {
                    var3 = _closure1_slot12;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 30;
                    var0 = var6[var4];
                    var2 = undefined;
                    var1 = var5.bind(var2)(var0);
                    var0 = {};
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.Sizes;
                    var4 = var4.SMALL;
                    var0.size = var4;
                    var4 = 38;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var0.source = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.giftIcon;
                    var0.style = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var8.renderIcon = var9;
                var5 = var8;
            case 2313:
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1613, 6672, 660, 1615, 33, 667, 1297, 671, 4851, 3681, 4058, 5690, 5543, 632, 9867, 6624, 6677, 3070, 1629, 9868, 9870, 4059, 9872, 3902, 1234, 7357, 4867, 4047, 9883, 9861, 9884, 9885, 4838, 9853, 9367, 9886, 4527, 7008, 1307, 2]);