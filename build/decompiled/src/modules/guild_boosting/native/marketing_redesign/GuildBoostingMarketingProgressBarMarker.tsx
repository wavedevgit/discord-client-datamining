// modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        _fun78608: for (var _fun78608_ip = 0;;) switch (_fun78608_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.tier;
                var13 = var1.isTierUnlocked;
                var3 = var1.isTierAnimated;
                var0 = var1.isCurrentTier;
                var10 = var1.useReducedMotion;
                var1 = var1.isDisabled;
                var4 = undefined;
                var _closure2_slot1 = var4;
                var5 = _closure1_slot11;
                var9 = var5.bind(var4)();
                var8 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 9;
                var6 = var5[var6];
                var6 = var8.bind(var4)(var6);
                var18 = var6.bind(var4)();
                var6 = _closure1_slot0;
                var15 = 10;
                var5 = var5[var15];
                var6 = var6.bind(var4)(var5);
                var5 = var6.useSharedValue;
                var11 = 1;
                var8 = var5.bind(var6)(var11);
                var _closure2_slot0 = var8;
                if (!var13) {
                    _fun78608_ip = 122;
                    continue _fun78608
                }
            case 119:
                var13 = var3;
            case 122:
                _closure2_slot1 = var13;
                var14 = _closure1_slot3;
                var6 = var14.useEffect;
                var5 = new Array(2);
                var5[0] = var13;
                var5[1] = var8;
                var3 = function() { // Environment: var2
                    _fun78609: for (var _fun78609_ip = 0;;) switch (_fun78609_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun78609_ip = 79;
                                continue _fun78609
                            }
                        case 10:
                            var2 = _closure2_slot0;
                            var1 = var2.set;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                            var1 = var2.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 11;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.withSpring;
                            var3 = _closure1_slot12;
                            var0 = 1;
                            var0 = var4.bind(var5)(var0, var3);
                            var0 = var1.bind(var2)(var0);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var6.bind(var14)(var3, var5);
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var15];
                var5 = var5.bind(var4)(var3);
                var3 = var5.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var2 = {};
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var2.scale = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var6 = {};
                var6.scale = var8;
                var2.__closure = var6;
                var6 = 7240908357686.0;
                var2.__workletHash = var6;
                var6 = _closure1_slot13;
                var2.__initData = var6;
                var14 = var3.bind(var5)(var2);
                var2 = _closure1_slot6;
                var2 = var2.NONE;
                var6 = null;
                if (!(var7 !== var2)) {
                    _fun78608_ip = 417;
                    continue _fun78608
                }
            case 253:
                var5 = _closure1_slot7;
                if (var1) {
                    _fun78608_ip = 368;
                    continue _fun78608
                }
            case 260:
                var2 = _closure1_slot5;
                var1 = {};
                var3 = _closure1_slot10;
                var3 = var3[var7];
                var1.source = var3;
                if (var13) {
                    _fun78608_ip = 289;
                    continue _fun78608
                }
            case 281:
                var7 = var9.progressBarMarkerInnerCircleIcon;
                _fun78608_ip = 295;
                continue _fun78608;
            case 289:
                var7 = var9.progressBarMarkerInnerCircleIconUnlocked;
            case 295:
                var3 = new Array(2);
                var3[0] = var7;
                var7 = {};
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var8 = 8;
                var8 = var17[var8];
                var8 = var16.bind(var4)(var8);
                var16 = var8.unsafe_rawColors;
                if (var13) {
                    _fun78608_ip = 341;
                    continue _fun78608
                }
            case 333:
                var8 = var16.PREMIUM_PERK_PINK;
                _fun78608_ip = 347;
                continue _fun78608;
            case 341:
                var8 = var16.WHITE;
            case 347:
                var7.tintColor = var8;
                var3[1] = var7;
                var1.style = var3;
                var1 = var5.bind(var4)(var2, var1);
                _fun78608_ip = 414;
                continue _fun78608;
            case 368:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 12;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.BoostGemSlashIcon;
                var2 = {
                    'size': 'xxs',
                    'color': 'currentColor'
                };
                var1 = var5.bind(var4)(var3, var2);
            case 414:
                var6 = var1;
            case 417:
                if (!var0) {
                    _fun78608_ip = 429;
                    continue _fun78608
                }
            case 420:
                var0 = var6;
                if (var13) {
                    _fun78608_ip = 691;
                    continue _fun78608
                }
            case 429:
                var3 = _closure1_slot8;
                var2 = _closure1_slot4;
                var1 = {};
                var7 = var9.progressBarMarkerInnerCircle;
                var5 = new Array(1);
                var5[0] = var7;
                var1.style = var5;
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var15];
                var5 = var7.bind(var4)(var5);
                var7 = var5.View;
                var5 = {};
                var15 = var9.progressBarMarkerInnerCircleBackground;
                var9 = new Array(3);
                var9[0] = var15;
                var10 = !var10;
                if (!var10) {
                    _fun78608_ip = 508;
                    continue _fun78608
                }
            case 505:
                var10 = var13;
            case 508:
                if (!var10) {
                    _fun78608_ip = 514;
                    continue _fun78608
                }
            case 511:
                var10 = var14;
            case 514:
                var9[1] = var10;
                var10 = {};
                if (var13) {
                    _fun78608_ip = 620;
                    continue _fun78608
                }
            case 523:
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 13;
                var13 = var19[var13];
                var15 = var17.bind(var4)(var13);
                var14 = var15.hexWithOpacity;
                var16 = _closure1_slot1;
                var13 = 8;
                var13 = var19[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.WHITE;
                var16 = 14;
                var16 = var19[var16];
                var17 = var17.bind(var4)(var16);
                var16 = var17.isThemeDark;
                var16 = var16.bind(var17)(var18);
                if (!var16) {
                    _fun78608_ip = 612;
                    continue _fun78608
                }
            case 602:
                var11 = 0.5;
            case 612:
                var11 = var14.bind(var15)(var13, var11);
                _fun78608_ip = 651;
                continue _fun78608;
            case 620:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var12 = 8;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.unsafe_rawColors;
                var11 = var12.PREMIUM_PERK_PINK;
            case 651:
                var10.backgroundColor = var11;
                var9[2] = var10;
                var5.style = var9;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 691:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var9 = 0;
    var3 = var7[var9];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var _closure1_slot3 = var1;
    var8 = 1;
    var1 = var7[var8];
    var1 = var6.bind(var0)(var1);
    var3 = var1.View;
    var _closure1_slot4 = var3;
    var1 = var1.Image;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var5 = var1.BoostedGuildTiers;
    var _closure1_slot6 = var5;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.jsx;
    var _closure1_slot7 = var3;
    var1 = var1.jsxs;
    var _closure1_slot8 = var1;
    var1 = {};
    var3 = var5.NONE;
    var1[var3] = var9;
    var9 = var5.TIER_1;
    var3 = 0.3333333333333333;
    var1[var9] = var3;
    var9 = var5.TIER_2;
    var3 = 0.6666666666666666;
    var1[var9] = var3;
    var3 = var5.TIER_3;
    var1[var3] = var8;
    var _closure1_slot9 = var1;
    var3 = {};
    var9 = var5.TIER_1;
    var8 = 4;
    var8 = var7[var8];
    var8 = var12.bind(var0)(var8);
    var3[var9] = var8;
    var9 = var5.TIER_2;
    var8 = 5;
    var8 = var7[var8];
    var8 = var12.bind(var0)(var8);
    var3[var9] = var8;
    var8 = var5.TIER_3;
    var5 = 6;
    var5 = var7[var5];
    var5 = var12.bind(var0)(var5);
    var3[var8] = var5;
    var _closure1_slot10 = var3;
    var3 = 7;
    var5 = var7[var3];
    var9 = var6.bind(var0)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {
        'width': 17.5,
        'height': 17.5,
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var5.progressBarMarkerInnerCircle = var10;
    var10 = {
        'width': '100%',
        'height': '100%',
        'borderRadius': 17.5,
        'position': 'absolute'
    };
    var5.progressBarMarkerInnerCircleBackground = var10;
    var10 = {
        'width': 16,
        'height': 16
    };
    var5.progressBarMarkerInnerCircleIcon = var10;
    var10 = {
        'width': '95%',
        'height': '95%'
    };
    var11 = 8;
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10.tintColor = var13;
    var5.progressBarMarkerInnerCircleIconUnlocked = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot11 = var5;
    var5 = {
        'stiffness': 50,
        'damping': 5
    };
    var _closure1_slot12 = var5;
    var5 = {};
    var8 = 'function GuildBoostingMarketingProgressBarMarkerTsx1(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}';
    var5.code = var8;
    var _closure1_slot13 = var5;
    var3 = var7[var3];
    var9 = var6.bind(var0)(var3);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {
        'height': 28,
        'width': 28,
        'position': 'absolute',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'transform': null,
        'zIndex': 1
    };
    var3 = 28;
    var14 = {};
    var13 = -14;
    var14.translateX = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var10.transform = var13;
    var5.progressBarMarker = var10;
    var10 = {
        'width': '100%',
        'height': '100%',
        'position': 'absolute',
        'borderRadius': 28
    };
    var5.progressBarMarkerBackground = var10;
    var10 = {
        'width': 75,
        'position': 'absolute',
        'top': '100%',
        'paddingTop': 8,
        'color': null,
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'textAlign': 'center'
    };
    var13 = var7[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.MOBILE_TEXT_HEADING_PRIMARY;
    var10.color = var13;
    var5.progressBarMarkerLabel = var10;
    var10 = {};
    var14 = {};
    var13 = -7;
    var14.translateX = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var10.transform = var13;
    var5.progressBarMarkerLabelWithIcon = var10;
    var10 = {};
    var13 = 0.4;
    var10.opacity = var13;
    var5.progressBarMarkerLabelLocked = var10;
    var10 = {
        'height': 12,
        'width': 12,
        'marginRight': 2
    };
    var11 = var7[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var10.tintColor = var11;
    var5.progressBarMarkerUnlockedIcon = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot14 = var5;
    var5 = {};
    var8 = 'function GuildBoostingMarketingProgressBarMarkerTsx2(){const{scale}=this.__closure;return{transform:[{scale:scale.get()}]};}';
    var5.code = var8;
    var _closure1_slot15 = var5;
    var5 = 18;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingProgressBarMarker.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun78611: for (var _fun78611_ip = 0;;) switch (_fun78611_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.guild;
                var15 = var3.tier;
                var2 = var3.revealedTier;
                var8 = var3.useReducedMotion;
                var16 = var3.isDisabled;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var4 = _closure1_slot14;
                var13 = var4.bind(var3)();
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var5 = 9;
                var5 = var4[var5];
                var5 = var6.bind(var3)(var5);
                var20 = var5.bind(var3)();
                var5 = _closure1_slot0;
                var7 = 10;
                var4 = var4[var7];
                var6 = var5.bind(var3)(var4);
                var5 = var6.useSharedValue;
                var4 = 1;
                var6 = var5.bind(var6)(var4);
                var _closure2_slot0 = var6;
                var4 = var1.premiumTier;
                var11 = var15 === var4;
                var _closure2_slot1 = var11;
                var12 = var2 >= var15;
                var1 = var1.premiumTier;
                var14 = var1 >= var15;
                var10 = var14;
                if (!var10) {
                    _fun78611_ip = 146;
                    continue _fun78611
                }
            case 143:
                var10 = var12;
            case 146:
                _closure2_slot2 = var10;
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var2 = new Array(3);
                var2[0] = var10;
                var2[1] = var6;
                var2[2] = var11;
                var1 = function() { // Environment: var0
                    _fun78612: for (var _fun78612_ip = 0;;) switch (_fun78612_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun78612_ip = 14;
                                continue _fun78612
                            }
                        case 10:
                            var1 = _closure2_slot1;
                        case 14:
                            if (!var1) {
                                _fun78612_ip = 86;
                                continue _fun78612
                            }
                        case 17:
                            var2 = _closure2_slot0;
                            var1 = var2.set;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                            var1 = var2.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 11;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.withSpring;
                            var3 = _closure1_slot12;
                            var0 = 1;
                            var0 = var4.bind(var5)(var0, var3);
                            var0 = var1.bind(var2)(var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var2);
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = var4[var7];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var2 = {};
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var2.scale = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var5 = {};
                var5.scale = var6;
                var0.__closure = var5;
                var5 = 6884434326805.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot15;
                var0.__initData = var5;
                var18 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot4;
                var0 = {};
                var6 = var13.progressBarMarker;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var17 = _closure1_slot9;
                var19 = var17[var15];
                var17 = 100;
                var19 = var17 * var19;
                var17 = '%';
                var17 = var19 + var17;
                var6.left = var17;
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var4 = var4[var7];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var17 = var13.progressBarMarkerBackground;
                var7 = new Array(3);
                var7[0] = var17;
                var17 = !var8;
                if (!var17) {
                    _fun78611_ip = 370;
                    continue _fun78611
                }
            case 367:
                var17 = var18;
            case 370:
                var7[1] = var17;
                var17 = {};
                if (!var11) {
                    _fun78611_ip = 385;
                    continue _fun78611
                }
            case 379:
                if (var10) {
                    _fun78611_ip = 514;
                    continue _fun78611
                }
            case 385:
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var18 = 14;
                var18 = var21[var18];
                var19 = var19.bind(var3)(var18);
                var18 = var19.isThemeDark;
                var18 = var18.bind(var19)(var20);
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 13;
                var19 = var23[var19];
                var22 = var20.bind(var3)(var19);
                var21 = var22.hexWithOpacity;
                var20 = _closure1_slot1;
                var19 = 8;
                var19 = var23[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.unsafe_rawColors;
                if (var18) {
                    _fun78611_ip = 490;
                    continue _fun78611
                }
            case 466:
                var20 = var19.PRIMARY_200;
                var18 = 0.4;
                var18 = var21.bind(var22)(var20, var18);
                _fun78611_ip = 512;
                continue _fun78611;
            case 490:
                var20 = var19.WHITE;
                var19 = 0.4;
                var18 = var21.bind(var22)(var20, var19);
            case 512:
                _fun78611_ip = 545;
                continue _fun78611;
            case 514:
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 8;
                var19 = var21[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.unsafe_rawColors;
                var18 = var19.PREMIUM_PERK_PINK;
            case 545:
                var17.backgroundColor = var18;
                var7[2] = var17;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot16;
                var5 = {};
                var5.tier = var15;
                var5.isDisabled = var16;
                var5.isTierUnlocked = var14;
                var5.isTierAnimated = var12;
                var5.isCurrentTier = var11;
                var5.useReducedMotion = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var11 = var13.progressBarMarkerLabel;
                var8 = new Array(3);
                var8[0] = var11;
                var11 = !var10;
                if (var10) {
                    _fun78611_ip = 657;
                    continue _fun78611
                }
            case 651:
                var11 = var13.progressBarMarkerLabelLocked;
            case 657:
                var8[1] = var11;
                var11 = var10;
                if (!var10) {
                    _fun78611_ip = 681;
                    continue _fun78611
                }
            case 667:
                var12 = _closure1_slot6;
                var12 = var12.NONE;
                var11 = var15 !== var12;
            case 681:
                if (!var11) {
                    _fun78611_ip = 690;
                    continue _fun78611
                }
            case 684:
                var11 = var13.progressBarMarkerLabelWithIcon;
            case 690:
                var8[2] = var11;
                var5.style = var8;
                if (!var10) {
                    _fun78611_ip = 715;
                    continue _fun78611
                }
            case 701:
                var8 = _closure1_slot6;
                var8 = var8.NONE;
                var10 = var15 !== var8;
            case 715:
                if (!var10) {
                    _fun78611_ip = 768;
                    continue _fun78611
                }
            case 718:
                var12 = _closure1_slot7;
                var11 = _closure1_slot5;
                var8 = {};
                var16 = _closure1_slot1;
                var17 = _closure1_slot2;
                var14 = 15;
                var14 = var17[var14];
                var14 = var16.bind(var3)(var14);
                var8.source = var14;
                var13 = var13.progressBarMarkerUnlockedIcon;
                var8.style = var13;
                var10 = var12.bind(var3)(var11, var8);
            case 768:
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot7;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 16;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {};
                var12 = 'text-xs/medium';
                var9.variant = var12;
                var12 = 17;
                var12 = var14[var12];
                var14 = var13.bind(var3)(var12);
                var13 = var14.getTierName;
                var12 = {};
                var16 = false;
                var12.useLevels = var16;
                var12 = var13.bind(var14)(var15, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.MARKER_DIMENSIONS = var3;
    var2.TierMarkerPositions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 9985, 9986, 9987, 1297, 671, 3246, 3720, 4081, 9988, 3240, 3206, 7462, 3941, 6707, 2]);