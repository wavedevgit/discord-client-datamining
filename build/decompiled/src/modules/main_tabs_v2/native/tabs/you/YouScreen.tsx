// modules/main_tabs_v2/native/tabs/you/YouScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        _fun103547: for (var _fun103547_ip = 0;;) switch (_fun103547_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.user;
                var0 = var1.navigateToSettings;
                var _closure2_slot0 = var0;
                var33 = var1.navigateToPremium;
                var2 = var1.navigateToShop;
                var _closure2_slot1 = var2;
                var7 = var1.navigateToProfileCustomization;
                var6 = var1.navigateToCustomStatus;
                var4 = var1.navigateToFriends;
                var22 = var1.style;
                var26 = var1.inBottomSheet;
                var _closure2_slot2 = var26;
                var1 = var1.initialTab;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var10 = _closure1_slot4;
                var9 = var10.useRef;
                var8 = global;
                var11 = var8.Date;
                var8 = var11.now;
                var8 = var8.bind(var11)();
                var10 = var9.bind(var10)(var8);
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var8 = 19;
                var8 = var21[var8];
                var8 = var20.bind(var3)(var8);
                var16 = var8.bind(var3)();
                var _closure2_slot3 = var16;
                var8 = _closure1_slot16;
                var31 = var16 * var8;
                var _closure2_slot4 = var31;
                var8 = _closure1_slot25;
                var24 = var8.bind(var3)(var16);
                var8 = 20;
                var8 = var21[var8];
                var9 = var20.bind(var3)(var8);
                var8 = {};
                var17 = _closure1_slot0;
                var11 = 21;
                var12 = var21[var11];
                var12 = var17.bind(var3)(var12);
                var12 = var12.ImpressionTypes;
                var12 = var12.VIEW;
                var8.type = var12;
                var11 = var21[var11];
                var11 = var17.bind(var3)(var11);
                var11 = var11.ImpressionNames;
                var11 = var11.USER_YOU_SCREEN;
                var8.name = var11;
                var8 = var9.bind(var3)(var8);
                var8 = 22;
                var8 = var21[var8];
                var9 = var20.bind(var3)(var8);
                var8 = var5.id;
                var11 = var9.bind(var3)(var8);
                var8 = 23;
                var8 = var21[var8];
                var8 = var20.bind(var3)(var8);
                var13 = var8.bind(var3)();
                var8 = 24;
                var8 = var21[var8];
                var9 = var20.bind(var3)(var8);
                var8 = {};
                var8.user = var5;
                var8.displayProfile = var11;
                var8 = var9.bind(var3)(var8);
                var15 = var8.theme;
                var14 = var8.primaryColor;
                var9 = var8.secondaryColor;
                var8 = 25;
                var8 = var21[var8];
                var8 = var20.bind(var3)(var8);
                var8 = var8.bind(var3)();
                var12 = 26;
                var12 = var21[var12];
                var19 = var17.bind(var3)(var12);
                var12 = var19.useProfileThemeValues;
                var23 = var12.bind(var19)(var15);
                var12 = 27;
                var12 = var21[var12];
                var19 = var17.bind(var3)(var12);
                var17 = var19.useToken;
                var12 = 18;
                var12 = var21[var12];
                var12 = var20.bind(var3)(var12);
                var12 = var12.colors;
                var12 = var12.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT;
                var39 = var17.bind(var19)(var12, var8);
                var41 = null;
                if (!(var41 != var9)) {
                    _fun103547_ip = 554;
                    continue _fun103547
                }
            case 484:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var12 = 28;
                var12 = var21[var12];
                var19 = var20.bind(var3)(var12);
                var17 = var19.int2hex;
                var12 = 29;
                var12 = var21[var12];
                var21 = var20.bind(var3)(var12);
                var20 = var21.calculateOverlayedColor;
                var25 = var41 == var23;
                var12 = undefined;
                if (var25) {
                    _fun103547_ip = 543;
                    continue _fun103547
                }
            case 537:
                var12 = var23.overlay;
            case 543:
                var12 = var20.bind(var21)(var9, var12);
                var39 = var17.bind(var19)(var12);
            case 554:
                var17 = _closure1_slot4;
                var12 = var17.useRef;
                var21 = var12.bind(var17)(var41);
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var20 = 14;
                var12 = var30[var20];
                var17 = var28.bind(var3)(var12);
                var12 = var17.useSharedValue;
                var29 = 0;
                var36 = var12.bind(var17)(var29);
                _closure2_slot5 = var36;
                var12 = var30[var20];
                var19 = var28.bind(var3)(var12);
                var17 = var19.useAnimatedScrollHandler;
                var12 = function arg0() {
                    var2 = _closure2_slot5;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.contentOffset;
                    var0 = var0.y;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var23 = {};
                var23.scrollPosition = var36;
                var12.__closure = var23;
                var23 = 952837799380.0;
                var12.__workletHash = var23;
                var23 = _closure1_slot27;
                var12.__initData = var23;
                var17 = var17.bind(var19)(var12);
                var25 = _closure1_slot4;
                var23 = var25.useMemo;
                var19 = new Array(1);
                var19[0] = var16;
                var12 = function() { // Environment: var47
                    var1 = _closure2_slot3;
                    var0 = -1;
                    var0 = var0 * var1;
                    return var0;
                };
                var35 = var23.bind(var25)(var12, var19);
                _closure2_slot6 = var35;
                var12 = var30[var20];
                var23 = var28.bind(var3)(var12);
                var19 = var23.useDerivedValue;
                var12 = function() {
                    var1 = _closure2_slot5;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    var0 = var1 <= var0;
                    return var0;
                };
                var25 = {};
                var25.scrollPosition = var36;
                var12.__closure = var25;
                var25 = 588222792165.0;
                var12.__workletHash = var25;
                var25 = _closure1_slot28;
                var12.__initData = var25;
                var32 = var19.bind(var23)(var12);
                _closure2_slot7 = var32;
                var23 = 30;
                var12 = var30[var23];
                var34 = var28.bind(var3)(var12);
                var27 = var34.useStateFromStores;
                var12 = _closure1_slot6;
                var25 = new Array(1);
                var25[0] = var12;
                var19 = function() { // Environment: var47
                    _fun103551: for (var _fun103551_ip = 0;;) switch (_fun103551_ip) {
                        case 0:
                            var0 = _closure1_slot6;
                            var2 = var0.useReducedMotion;
                            var0 = 1;
                            if (var2) {
                                _fun103551_ip = 23;
                                continue _fun103551
                            }
                        case 19:
                            var0 = _closure1_slot13;
                        case 23:
                            return var0;
                    }
                };
                var12 = new Array(0);
                var34 = var27.bind(var34)(var25, var19, var12);
                _closure2_slot8 = var34;
                var12 = var30[var20];
                var25 = var28.bind(var3)(var12);
                var19 = var25.useAnimatedStyle;
                var12 = function() {
                    _fun103552: for (var _fun103552_ip = 0;;) switch (_fun103552_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 14;
                            var1 = var5[var0];
                            var3 = undefined;
                            var10 = var4.bind(var3)(var1);
                            var9 = var10.interpolate;
                            var7 = _closure2_slot5;
                            var6 = var7.get;
                            var8 = var6.bind(var7)();
                            var7 = _closure2_slot6;
                            var6 = new Array(2);
                            var6[0] = var7;
                            var7 = 0;
                            var6[1] = var7;
                            var11 = _closure1_slot12;
                            var2 = new Array(2);
                            var2[0] = var11;
                            var11 = 1;
                            var2[1] = var11;
                            var2 = var9.bind(var10)(var8, var6, var2);
                            var0 = var5[var0];
                            var6 = var4.bind(var3)(var0);
                            var5 = var6.interpolate;
                            var3 = _closure2_slot5;
                            var0 = var3.get;
                            var4 = var0.bind(var3)();
                            var0 = _closure2_slot6;
                            var3 = new Array(2);
                            var3[0] = var0;
                            var3[1] = var7;
                            var8 = _closure2_slot4;
                            var0 = new Array(2);
                            var0[0] = var8;
                            var0[1] = var7;
                            var4 = var5.bind(var6)(var4, var3, var0);
                            var0 = {};
                            var3 = _closure2_slot7;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun103552_ip = 182;
                                continue _fun103552
                            }
                        case 176:
                            var1 = new Array(0);
                            _fun103552_ip = 211;
                            continue _fun103552;
                        case 182:
                            var3 = {};
                            var3.scale = var2;
                            var2 = new Array(2);
                            var2[0] = var3;
                            var3 = {};
                            var3.translateY = var4;
                            var2[1] = var3;
                            var1 = var2;
                        case 211:
                            var0.transform = var1;
                            return var0;
                    }
                };
                var27 = {};
                var37 = var30[var20];
                var37 = var28.bind(var3)(var37);
                var37 = var37.interpolate;
                var27.interpolate = var37;
                var27.scrollPosition = var36;
                var27.minScrollPosition = var35;
                var35 = _closure1_slot12;
                var27.SCALE_FACTOR = var35;
                var27.translateOnScale = var31;
                var27.isNegativeScrollPosition = var32;
                var12.__closure = var27;
                var27 = 5882939038632.0;
                var12.__workletHash = var27;
                var27 = _closure1_slot29;
                var12.__initData = var27;
                var44 = var19.bind(var25)(var12);
                var12 = var30[var20];
                var25 = var28.bind(var3)(var12);
                var19 = var25.useAnimatedStyle;
                var12 = function() {
                    _fun103553: for (var _fun103553_ip = 0;;) switch (_fun103553_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot7;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun103553_ip = 27;
                                continue _fun103553
                            }
                        case 21:
                            var1 = new Array(0);
                            _fun103553_ip = 58;
                            continue _fun103553;
                        case 27:
                            var3 = {};
                            var4 = _closure2_slot5;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var3.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1 = var2;
                        case 58:
                            var0.transform = var1;
                            return var0;
                    }
                };
                var27 = {};
                var27.isNegativeScrollPosition = var32;
                var27.scrollPosition = var36;
                var12.__closure = var27;
                var27 = 17425045144242.0;
                var12.__workletHash = var27;
                var27 = _closure1_slot30;
                var12.__initData = var27;
                var25 = var19.bind(var25)(var12);
                var12 = var30[var20];
                var27 = var28.bind(var3)(var12);
                var19 = var27.useAnimatedStyle;
                var12 = function() {
                    _fun103554: for (var _fun103554_ip = 0;;) switch (_fun103554_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot7;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun103554_ip = 27;
                                continue _fun103554
                            }
                        case 21:
                            var1 = new Array(0);
                            _fun103554_ip = 73;
                            continue _fun103554;
                        case 27:
                            var3 = {};
                            var5 = _closure2_slot5;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var5 = _closure2_slot8;
                            var2 = 1;
                            var2 = var2 / var5;
                            var2 = var4 * var2;
                            var3.translateY = var2;
                            var2 = new Array(1);
                            var2[0] = var3;
                            var1 = var2;
                        case 73:
                            var0.transform = var1;
                            return var0;
                    }
                };
                var31 = {};
                var31.isNegativeScrollPosition = var32;
                var31.scrollPosition = var36;
                var31.coefficient = var34;
                var12.__closure = var31;
                var31 = 9336428823274.0;
                var12.__workletHash = var31;
                var31 = _closure1_slot31;
                var12.__initData = var31;
                var12 = var19.bind(var27)(var12);
                var27 = _closure1_slot1;
                var19 = 31;
                var19 = var30[var19];
                var19 = var27.bind(var3)(var19);
                var19 = var19.bind(var3)();
                var38 = var19.width;
                _closure2_slot9 = var38;
                var37 = var19.height;
                _closure2_slot10 = var37;
                var19 = var30[var20];
                var31 = var28.bind(var3)(var19);
                var27 = var31.useAnimatedProps;
                var19 = function() {
                    var0 = {};
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 14;
                    var4 = var6[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var4);
                    var4 = var5.clamp;
                    var1 = var6[var1];
                    var7 = var3.bind(var2)(var1);
                    var6 = var7.interpolate;
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = _closure2_slot10;
                    var2 = -var2;
                    var1 = _closure2_slot8;
                    var1 = var2 * var1;
                    var2 = [0];
                    var2[1] = var1;
                    var1 = [0, 1];
                    var3 = var6.bind(var7)(var3, var2, var1);
                    var2 = 0;
                    var1 = 1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.blurAmount = var1;
                    return var0;
                };
                var32 = {};
                var35 = var30[var20];
                var35 = var28.bind(var3)(var35);
                var35 = var35.clamp;
                var32.clamp = var35;
                var35 = var30[var20];
                var35 = var28.bind(var3)(var35);
                var35 = var35.interpolate;
                var32.interpolate = var35;
                var32.scrollPosition = var36;
                var32.windowHeight = var37;
                var32.coefficient = var34;
                var19.__closure = var32;
                var32 = 2402745247838.0;
                var19.__workletHash = var32;
                var32 = _closure1_slot32;
                var19.__initData = var32;
                var45 = var27.bind(var31)(var19);
                var31 = _closure1_slot4;
                var27 = var31.useState;
                var19 = var36.get;
                var19 = var19.bind(var36)();
                var19 = var19 < var29;
                var27 = var27.bind(var31)(var19);
                var19 = _closure1_slot3;
                var32 = 2;
                var19 = var19.bind(var3)(var27, var32);
                var42 = var19[var29];
                var35 = 1;
                var40 = var19[var35];
                _closure2_slot11 = var40;
                var19 = var30[var20];
                var34 = var28.bind(var3)(var19);
                var31 = var34.useAnimatedReaction;
                var27 = function() {
                    var1 = _closure2_slot5;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    var0 = var1 < var0;
                    return var0;
                };
                var19 = {};
                var19.scrollPosition = var36;
                var27.__closure = var19;
                var19 = 1515709080541.0;
                var27.__workletHash = var19;
                var19 = _closure1_slot33;
                var27.__initData = var19;
                var19 = function arg0, arg1() {
                    _fun103557: for (var _fun103557_ip = 0;;) switch (_fun103557_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = arg1;
                            var0 = var3 !== var0;
                            if (!var0) {
                                _fun103557_ip = 60;
                                continue _fun103557
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 14;
                            var1 = var2[var1];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var1);
                            var4 = var5.runOnJS;
                            var1 = _closure2_slot11;
                            var1 = var4.bind(var5)(var1);
                            var0 = var1.bind(var2)(var3);
                        case 60:
                            return var0;
                    }
                };
                var36 = {};
                var43 = var30[var20];
                var43 = var28.bind(var3)(var43);
                var43 = var43.runOnJS;
                var36.runOnJS = var43;
                var36.setShowBlur = var40;
                var19.__closure = var36;
                var36 = 11057160578223.0;
                var19.__workletHash = var36;
                var36 = _closure1_slot34;
                var19.__initData = var36;
                var19 = var31.bind(var34)(var27, var19);
                var31 = _closure1_slot4;
                var27 = var31.useState;
                var19 = false;
                var27 = var27.bind(var31)(var19);
                var19 = _closure1_slot3;
                var27 = var19.bind(var3)(var27, var32);
                var19 = var27[var29];
                _closure2_slot12 = var19;
                var27 = var27[var35];
                _closure2_slot13 = var27;
                var27 = 32;
                var27 = var30[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.GifAutoPlay;
                var27 = var28.getSetting;
                var48 = var27.bind(var28)();
                if (var48) {
                    _fun103547_ip = 1505;
                    continue _fun103547
                }
            case 1502:
                var48 = var19;
            case 1505:
                var19 = var41 == var11;
                var31 = undefined;
                if (var19) {
                    _fun103547_ip = 1536;
                    continue _fun103547
                }
            case 1514:
                var27 = var11.getBannerURL;
                var19 = {};
                var19.canAnimate = var48;
                var19.size = var38;
                var31 = var27.bind(var11)(var19);
            case 1536:
                var19 = var41 != var31;
                var51 = null;
                if (!var19) {
                    _fun103547_ip = 1576;
                    continue _fun103547
                }
            case 1545:
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var19 = 33;
                var19 = var28[var19];
                var27 = var27.bind(var3)(var19);
                var19 = var27.makeSource;
                var51 = var19.bind(var27)(var31);
            case 1576:
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var19 = 33;
                var19 = var28[var19];
                var30 = var27.bind(var3)(var19);
                var19 = var30.isAnimatedImageURL;
                var40 = var19.bind(var30)(var31);
                var56 = 34;
                var19 = var28[var56];
                var19 = var27.bind(var3)(var19);
                var34 = var19.intl;
                var31 = var34.formatToPlainString;
                var19 = var28[var56];
                var19 = var27.bind(var3)(var19);
                var19 = var19.t;
                var30 = var19.gVn4uJ;
                var19 = {};
                var36 = var5.username;
                var19.username = var36;
                var52 = var31.bind(var34)(var30, var19);
                var19 = 35;
                var19 = var28[var19];
                var28 = var27.bind(var3)(var19);
                var27 = var28.useUserProfileBannerBackgroundColor;
                var19 = {};
                var19.user = var5;
                var19.displayProfile = var11;
                var50 = var27.bind(var28)(var19);
                var34 = var41 == var11;
                if (var34) {
                    _fun103547_ip = 1720;
                    continue _fun103547
                }
            case 1711:
                var19 = var11.isLoaded;
                var34 = !var19;
            case 1720:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var19 = 36;
                var19 = var28[var19];
                var19 = var27.bind(var3)(var19);
                var27 = var19.bind(var3)();
                var30 = _closure1_slot4;
                var28 = var30.useMemo;
                var19 = new Array(2);
                var19[0] = var16;
                var19[1] = var38;
                var16 = function() { // Environment: var47
                    var0 = {};
                    var2 = _closure2_slot9;
                    var0.width = var2;
                    var1 = _closure2_slot3;
                    var0.height = var1;
                    return var0;
                };
                var54 = var28.bind(var30)(var16, var19);
                if (var27) {
                    _fun103547_ip = 1791;
                    continue _fun103547
                }
            case 1781:
                if (var26) {
                    _fun103547_ip = 1791;
                    continue _fun103547
                }
            case 1784:
                var28 = var13.top;
                _fun103547_ip = 1795;
                continue _fun103547;
            case 1791:
                var28 = _closure1_slot14;
            case 1795:
                var13 = var41 == var11;
                var36 = undefined;
                if (var13) {
                    _fun103547_ip = 1825;
                    continue _fun103547
                }
            case 1804:
                var13 = var11.profileEffect;
                var16 = var41 == var13;
                var36 = undefined;
                if (var16) {
                    _fun103547_ip = 1825;
                    continue _fun103547
                }
            case 1819:
                var36 = var13.skuId;
            case 1825:
                var19 = var41 != var36;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var23];
                var30 = var16.bind(var3)(var13);
                var23 = var30.useStateFromStores;
                var13 = _closure1_slot7;
                var16 = new Array(1);
                var16[0] = var13;
                var13 = function() { // Environment: var47
                    var2 = _closure1_slot7;
                    var1 = var2.getMarketingBySurface;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 37;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.CollectiblesMarketingSurface;
                    var0 = var0.MOBILE_SHOP_BUTTON;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var53 = var23.bind(var30)(var16, var13);
                _closure2_slot14 = var53;
                var13 = var41 == var53;
                var23 = undefined;
                if (var13) {
                    _fun103547_ip = 1895;
                    continue _fun103547
                }
            case 1889:
                var23 = var53.dismissibleContent;
            case 1895:
                var30 = _closure1_slot0;
                var13 = _closure1_slot2;
                var57 = 38;
                var16 = var13[var57];
                var16 = var30.bind(var3)(var16);
                var16 = var16.DismissibleContent;
                var16 = var16.COLLECTIBLES_SHOP_ENTRY_MARKETING;
                var23 = var23 === var16;
                _closure2_slot15 = var23;
                var16 = 39;
                var16 = var13[var16];
                var43 = var30.bind(var3)(var16);
                var31 = var43.useMobileWishlistOwnerExperiment;
                var16 = 'YouScreen';
                var16 = var31.bind(var43)(var16);
                _closure2_slot16 = var16;
                var49 = _closure1_slot4;
                var46 = var49.useMemo;
                var31 = var16.enabled;
                var43 = new Array(1);
                var43[0] = var31;
                var31 = function() { // Environment: var47
                    _fun103560: for (var _fun103560_ip = 0;;) switch (_fun103560_ip) {
                        case 0:
                            var0 = _closure2_slot16;
                            var0 = var0.enabled;
                            if (var0) {
                                _fun103560_ip = 21;
                                continue _fun103560
                            }
                        case 15:
                            var0 = new Array(0);
                            _fun103560_ip = 69;
                            continue _fun103560;
                        case 21:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 38;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var1 = var1.DismissibleContent;
                            var2 = var1.WISHLIST_MOBILE_YOU_SCREEN_COACHMARK;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0 = var1;
                        case 69:
                            return var0;
                    }
                };
                var31 = var46.bind(var49)(var31, var43);
                var43 = 40;
                var13 = var13[var43];
                var30 = var30.bind(var3)(var13);
                var13 = var30.useSelectedDismissibleContent;
                var30 = var13.bind(var30)(var31);
                var13 = _closure1_slot3;
                var30 = var13.bind(var3)(var30, var32);
                var13 = var30[var29];
                var60 = var30[var35];
                var31 = var16.enabled;
                if (!var31) {
                    _fun103547_ip = 2056;
                    continue _fun103547
                }
            case 2052:
                var31 = var41 != var13;
            case 2056:
                _closure2_slot17 = var31;
                var46 = _closure1_slot4;
                var30 = var46.useMemo;
                var16 = new Array(3);
                var16[0] = var31;
                var16[1] = var23;
                var16[2] = var53;
                var13 = function() { // Environment: var47
                    _fun103561: for (var _fun103561_ip = 0;;) switch (_fun103561_ip) {
                        case 0:
                            var1 = _closure2_slot17;
                            if (var1) {
                                _fun103561_ip = 47;
                                continue _fun103561
                            }
                        case 10:
                            var2 = _closure2_slot14;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun103561_ip = 47;
                                continue _fun103561
                            }
                        case 20:
                            var1 = _closure2_slot15;
                            if (var1) {
                                _fun103561_ip = 47;
                                continue _fun103561
                            }
                        case 27:
                            var0 = _closure2_slot14;
                            var1 = var0.dismissibleContent;
                            var0 = new Array(1);
                            var0[0] = var1;
                            _fun103561_ip = 51;
                            continue _fun103561;
                        case 47:
                            var0 = new Array(0);
                        case 51:
                            return var0;
                    }
                };
                var49 = var30.bind(var46)(var13, var16);
                var46 = _closure1_slot4;
                var30 = var46.useMemo;
                var16 = new Array(2);
                var16[0] = var31;
                var16[1] = var53;
                var13 = function() { // Environment: var47
                    _fun103562: for (var _fun103562_ip = 0;;) switch (_fun103562_ip) {
                        case 0:
                            var0 = _closure2_slot17;
                            if (var0) {
                                _fun103562_ip = 172;
                                continue _fun103562
                            }
                        case 13:
                            var0 = _closure2_slot14;
                            var3 = null;
                            var0 = var3 == var0;
                            var5 = undefined;
                            var4 = undefined;
                            if (var0) {
                                _fun103562_ip = 39;
                                continue _fun103562
                            }
                        case 30:
                            var0 = _closure2_slot14;
                            var4 = var0.type;
                        case 39:
                            var1 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 42;
                            var0 = var6[var0];
                            var0 = var1.bind(var5)(var0);
                            var0 = var0.CollectiblesMarketingType;
                            var1 = var0.COACHTIP;
                            var0 = null;
                            if (!(var4 === var1)) {
                                _fun103562_ip = 167;
                                continue _fun103562
                            }
                        case 80:
                            var1 = {};
                            var4 = _closure2_slot14;
                            var4 = var4.title;
                            var1.title = var4;
                            var4 = _closure2_slot14;
                            var4 = var4.body;
                            var5 = var3 != var4;
                            var3 = '';
                            if (!var5) {
                                _fun103562_ip = 118;
                                continue _fun103562
                            }
                        case 115:
                            var3 = var4;
                        case 118:
                            var1.description = var3;
                            var3 = {};
                            var4 = _closure2_slot14;
                            var4 = var4.avatar;
                            var3.uri = var4;
                            var1.avatarSrc = var3;
                            var2 = _closure2_slot14;
                            var3 = var2.decorations;
                            var2 = 0;
                            var2 = var3[var2];
                            var1.decorationAsset = var2;
                            var0 = var1;
                        case 167:
                            _fun103562_ip = 323;
                            continue _fun103562;
                        case 172:
                            var1 = {};
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 34;
                            var3 = var7[var2];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var3);
                            var8 = var3.intl;
                            var4 = var8.string;
                            var3 = var7[var2];
                            var3 = var6.bind(var5)(var3);
                            var3 = var3.t;
                            var3 = var3.epBu6F;
                            var3 = var4.bind(var8)(var3);
                            var1.title = var3;
                            var3 = var7[var2];
                            var3 = var6.bind(var5)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var2 = var7[var2];
                            var2 = var6.bind(var5)(var2);
                            var2 = var2.t;
                            var2 = var2["o8+3AX"];
                            var2 = var3.bind(var4)(var2);
                            var1.description = var2;
                            var2 = {};
                            var1.avatarSrc = var2;
                            var2 = '';
                            var1.decorationAsset = var2;
                            var2 = function() {
                                var3 = _closure1_slot22;
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 41;
                                var0 = var2[var0];
                                var2 = undefined;
                                var1 = var1.bind(var2)(var0);
                                var0 = {};
                                var4 = {};
                                var5 = 'https://cdn.discordapp.com/assets/content/1979309f7455b06e0bc1e8f5da89de9934155a0a9a74bfff5b680c82fb45d53f.png';
                                var4.uri = var5;
                                var0.source = var4;
                                var4 = {
                                    'width': 80,
                                    'height': 80
                                };
                                var0.style = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.renderImgComponent = var2;
                            var0 = var1;
                        case 323:
                            return var0;
                    }
                };
                var58 = var30.bind(var46)(var13, var16);
                _closure2_slot18 = var58;
                var30 = _closure1_slot0;
                var16 = _closure1_slot2;
                var13 = var16[var43];
                var46 = var30.bind(var3)(var13);
                var13 = var46.useSelectedDismissibleContent;
                var46 = var13.bind(var46)(var49);
                var13 = _closure1_slot3;
                var13 = var13.bind(var3)(var46, var32);
                var46 = var13[var29];
                _closure2_slot19 = var46;
                var13 = var13[var35];
                var16 = var16[var43];
                var49 = var30.bind(var3)(var16);
                var43 = var49.useSelectedVersionedDismissibleContent;
                var30 = null;
                if (var31) {
                    _fun103547_ip = 2292;
                    continue _fun103547
                }
            case 2206:
                var30 = null;
                if (!var23) {
                    _fun103547_ip = 2292;
                    continue _fun103547
                }
            case 2211:
                var16 = var41 == var53;
                var55 = undefined;
                if (var16) {
                    _fun103547_ip = 2225;
                    continue _fun103547
                }
            case 2220:
                var55 = var53.type;
            case 2225:
                var59 = _closure1_slot0;
                var61 = _closure1_slot2;
                var16 = 42;
                var16 = var61[var16];
                var16 = var59.bind(var3)(var16);
                var16 = var16.CollectiblesMarketingType;
                var16 = var16.COACHTIP;
                var30 = null;
                if (!(var55 === var16)) {
                    _fun103547_ip = 2292;
                    continue _fun103547
                }
            case 2263:
                var55 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var57];
                var16 = var55.bind(var3)(var16);
                var16 = var16.DismissibleContent;
                var30 = var16.COLLECTIBLES_SHOP_ENTRY_MARKETING;
            case 2292:
                var16 = var41 == var53;
                var55 = undefined;
                if (var16) {
                    _fun103547_ip = 2307;
                    continue _fun103547
                }
            case 2301:
                var55 = var53.version;
            case 2307:
                var57 = var41 != var55;
                var16 = 0;
                if (!var57) {
                    _fun103547_ip = 2319;
                    continue _fun103547
                }
            case 2316:
                var16 = var55;
            case 2319:
                var30 = var43.bind(var49)(var30, var16);
                var16 = _closure1_slot3;
                var16 = var16.bind(var3)(var30, var32);
                var29 = var16[var29];
                _closure2_slot20 = var29;
                var16 = var16[var35];
                var43 = _closure1_slot4;
                var32 = var43.useMemo;
                var30 = new Array(5);
                var30[0] = var31;
                var30[1] = var58;
                var55 = var41 == var53;
                var49 = undefined;
                if (var55) {
                    _fun103547_ip = 2382;
                    continue _fun103547
                }
            case 2377:
                var49 = var53.type;
            case 2382:
                var30[2] = var49;
                var30[3] = var46;
                var30[4] = var29;
                var29 = function() { // Environment: var47
                    _fun103564: for (var _fun103564_ip = 0;;) switch (_fun103564_ip) {
                        case 0:
                            var0 = _closure2_slot17;
                            var1 = !var0;
                            var0 = !var1;
                            if (!var1) {
                                _fun103564_ip = 120;
                                continue _fun103564
                            }
                        case 16:
                            var1 = _closure2_slot19;
                            var5 = null;
                            var1 = var5 != var1;
                            if (var1) {
                                _fun103564_ip = 37;
                                continue _fun103564
                            }
                        case 29:
                            var2 = _closure2_slot20;
                            var1 = var5 != var2;
                        case 37:
                            if (!var1) {
                                _fun103564_ip = 117;
                                continue _fun103564
                            }
                        case 40:
                            var2 = _closure2_slot18;
                            var2 = var5 != var2;
                            if (!var2) {
                                _fun103564_ip = 114;
                                continue _fun103564
                            }
                        case 51:
                            var4 = _closure2_slot14;
                            var5 = var5 == var4;
                            var6 = undefined;
                            var4 = undefined;
                            if (var5) {
                                _fun103564_ip = 75;
                                continue _fun103564
                            }
                        case 66:
                            var3 = _closure2_slot14;
                            var4 = var3.type;
                        case 75:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 42;
                            var3 = var7[var3];
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.CollectiblesMarketingType;
                            var3 = var3.COACHTIP;
                            var2 = var4 === var3;
                        case 114:
                            var1 = var2;
                        case 117:
                            var0 = var1;
                        case 120:
                            return var0;
                    }
                };
                var59 = var32.bind(var43)(var29, var30);
                var30 = _closure1_slot4;
                var29 = var30.useRef;
                var30 = var29.bind(var30)(var41);
                var32 = _closure1_slot4;
                var29 = var32.useRef;
                var29 = var29.bind(var32)(var41);
                if (var31) {
                    _fun103547_ip = 2447;
                    continue _fun103547
                }
            case 2438:
                if (!var23) {
                    _fun103547_ip = 2444;
                    continue _fun103547
                }
            case 2441:
                var13 = var16;
            case 2444:
                var60 = var13;
            case 2447:
                _closure2_slot21 = var60;
                var31 = _closure1_slot4;
                var23 = var31.useCallback;
                var16 = new Array(2);
                var16[0] = var60;
                var16[1] = var2;
                var13 = function() { // Environment: var47
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure2_slot21;
                    var1 = _closure1_slot21;
                    var1 = var1.TAKE_ACTION;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var31 = var23.bind(var31)(var13, var16);
                var23 = {};
                var23.user = var5;
                var23.userTheme = var8;
                var23.scrollViewRef = var21;
                var13 = var24.content;
                var8 = new Array(2);
                var8[0] = var13;
                var8[1] = var12;
                var23.style = var8;
                var23.navigateToProfileCustomization = var7;
                var23.navigateToCustomStatus = var6;
                var23.navigateToFriends = var4;
                var23.navigateToPremium = var33;
                var23.navigateToShop = var2;
                var23.initialTab = var1;
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 43;
                var1 = var13[var7];
                var4 = var8.bind(var3)(var1);
                var2 = var4.useCreateUserProfileAnalyticsContext;
                var1 = {};
                var6 = 'YOU_SCREEN';
                var1.layout = var6;
                var5 = var5.id;
                var1.userId = var5;
                var12 = var2.bind(var4)(var1);
                var46 = var41 != var58;
                var57 = 44;
                var1 = var13[var57];
                var4 = var8.bind(var3)(var1);
                var2 = var4.useYouSettingsCoachmark;
                var1 = {};
                var1.disabled = var46;
                var55 = var2.bind(var4)(var1);
                _closure2_slot22 = var55;
                var43 = var41 != var55;
                var4 = _closure1_slot4;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var0;
                var1[1] = var55;
                var0 = function() { // Environment: var47
                    _fun103566: for (var _fun103566_ip = 0;;) switch (_fun103566_ip) {
                        case 0:
                            var1 = _closure2_slot22;
                            var3 = null;
                            var1 = var3 == var1;
                            if (var1) {
                                _fun103566_ip = 30;
                                continue _fun103566
                            }
                        case 16:
                            var2 = _closure2_slot22;
                            var2 = var2.trackSettingsPress;
                            var1 = var3 == var2;
                        case 30:
                            if (var1) {
                                _fun103566_ip = 47;
                                continue _fun103566
                            }
                        case 33:
                            var2 = _closure2_slot22;
                            var1 = var2.trackSettingsPress;
                            var1 = var1.bind(var2)();
                        case 47:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var32 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot22;
                var49 = 45;
                var0 = var13[var49];
                var0 = var8.bind(var3)(var0);
                var1 = var0.LayerScope;
                var0 = {};
                var6 = _closure1_slot22;
                var4 = 46;
                var4 = var13[var4];
                var4 = var8.bind(var3)(var4);
                var5 = var4.ThemeContextProvider;
                var4 = {};
                var4.theme = var15;
                var4.primaryColor = var14;
                var4.secondaryColor = var9;
                var9 = _closure1_slot22;
                var7 = var13[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.UserProfileAnalyticsProvider;
                var7 = {};
                var7.value = var12;
                var10 = var10.current;
                var7.openedAt = var10;
                var12 = var41 == var11;
                var10 = undefined;
                if (var12) {
                    _fun103547_ip = 2791;
                    continue _fun103547
                }
            case 2785:
                var10 = var11.fetchStartedAt;
            case 2791:
                var7.fetchStartedAt = var10;
                var12 = var41 == var11;
                var10 = undefined;
                if (var12) {
                    _fun103547_ip = 2811;
                    continue _fun103547
                }
            case 2805:
                var10 = var11.fetchEndedAt;
            case 2811:
                var7.fetchEndedAt = var10;
                var12 = var41 == var11;
                var10 = undefined;
                if (var12) {
                    _fun103547_ip = 2831;
                    continue _fun103547
                }
            case 2825:
                var10 = var11.isLoaded;
            case 2831:
                var7.isLoaded = var10;
                var12 = _closure1_slot23;
                var11 = _closure1_slot1;
                var13 = _closure1_slot2;
                var10 = 47;
                var10 = var13[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var13 = var24.container;
                var10.style = var13;
                var13 = _closure1_slot17;
                var10.nativeID = var13;
                var14 = var46;
                if (var46) {
                    _fun103547_ip = 2889;
                    continue _fun103547
                }
            case 2886:
                var14 = var43;
            case 2889:
                if (!var14) {
                    _fun103547_ip = 3106;
                    continue _fun103547
                }
            case 2895:
                var16 = _closure1_slot23;
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var49];
                var13 = var15.bind(var3)(var13);
                var15 = var13.LayerScope;
                var13 = {};
                var13.zIndex = var35;
                if (!var46) {
                    _fun103547_ip = 3035;
                    continue _fun103547
                }
            case 2932:
                var53 = _closure1_slot22;
                var49 = _closure1_slot1;
                var61 = _closure1_slot2;
                var35 = 48;
                var35 = var61[var35];
                var49 = var49.bind(var3)(var35);
                var35 = {};
                var35.buttonRef = var30;
                var35.markAsDismissed = var60;
                var35.visible = var59;
                var59 = var58.title;
                var35.title = var59;
                var59 = var58.description;
                var35.description = var59;
                var59 = var58.avatarSrc;
                var35.avatarSrc = var59;
                var59 = var58.decorationAsset;
                var35.decorationAsset = var59;
                var58 = var58.renderImgComponent;
                var35.renderImgComponent = var58;
                var35.navigateToShop = var31;
                var46 = var53.bind(var3)(var49, var35);
            case 3035:
                var35 = new Array(2);
                var35[0] = var46;
                if (!var43) {
                    _fun103547_ip = 3092;
                    continue _fun103547
                }
            case 3046:
                var53 = _closure1_slot22;
                var49 = _closure1_slot1;
                var46 = _closure1_slot2;
                var46 = var46[var57];
                var49 = var49.bind(var3)(var46);
                var46 = {};
                var46.buttonRef = var29;
                var63 = var55.props;
                var64 = var46;
                var55 = copyDataProperties(var64, var63);
                var43 = var53.bind(var3)(var49, var46);
            case 3092:
                var35[1] = var43;
                var13.children = var35;
                var14 = var16.bind(var3)(var15, var13);
            case 3106:
                var13 = new Array(2);
                var13[0] = var14;
                var16 = _closure1_slot23;
                var15 = _closure1_slot26;
                var14 = {};
                var14.ref = var21;
                var21 = _closure1_slot18;
                var14.scrollEventThrottle = var21;
                var35 = var24.scrollView;
                var21 = new Array(3);
                var21[0] = var35;
                var35 = {};
                var35.backgroundColor = var39;
                var21[1] = var35;
                var21[2] = var22;
                var14.style = var21;
                var14.onScroll = var17;
                var22 = _closure1_slot23;
                var21 = _closure1_slot1;
                var17 = _closure1_slot2;
                var17 = var17[var20];
                var17 = var21.bind(var3)(var17);
                var21 = var17.View;
                var17 = {};
                var39 = var24.banner;
                var35 = new Array(2);
                var35[0] = var39;
                var35[1] = var25;
                var17.style = var35;
                if (var27) {
                    _fun103547_ip = 3235;
                    continue _fun103547
                }
            case 3227:
                var27 = null;
                if (!var26) {
                    _fun103547_ip = 3394;
                    continue _fun103547
                }
            case 3235:
                var39 = _closure1_slot22;
                var46 = _closure1_slot0;
                var53 = _closure1_slot2;
                var26 = 49;
                var26 = var53[var26];
                var26 = var46.bind(var3)(var26);
                var35 = var26.PressableOpacity;
                var26 = {};
                var49 = var24.backButton;
                var43 = new Array(2);
                var43[0] = var49;
                var49 = {};
                var49.top = var28;
                var43[1] = var49;
                var26.style = var43;
                var43 = var53[var56];
                var43 = var46.bind(var3)(var43);
                var55 = var43.intl;
                var49 = var55.string;
                var43 = var53[var56];
                var43 = var46.bind(var3)(var43);
                var43 = var43.t;
                var43 = var43["13/7kX"];
                var43 = var49.bind(var55)(var43);
                var26.accessibilityLabel = var43;
                var43 = function() {
                    _fun103567: for (var _fun103567_ip = 0;;) switch (_fun103567_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun103567_ip = 63;
                                continue _fun103567
                            }
                        case 13:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 51;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.getRootNavigationRef;
                            var2 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun103567_ip = 95;
                                continue _fun103567
                            }
                        case 51:
                            var1 = var2.goBack;
                            var1 = var1.bind(var2)();
                            _fun103567_ip = 95;
                            continue _fun103567;
                        case 63:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 50;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.hideActionSheet;
                            var0 = var0.bind(var1)();
                        case 95:
                            var0 = undefined;
                            return var0;
                    }
                };
                var26.onPress = var43;
                var49 = _closure1_slot22;
                var43 = 52;
                var43 = var53[var43];
                var43 = var46.bind(var3)(var43);
                var46 = var43.DownArrowIconWithBadgeOnSide;
                var43 = {};
                var43 = var49.bind(var3)(var46, var43);
                var26.children = var43;
                var27 = var39.bind(var3)(var35, var26);
            case 3394:
                var26 = new Array(3);
                var26[0] = var27;
                var27 = !var19;
                if (var19) {
                    _fun103547_ip = 3475;
                    continue _fun103547
                }
            case 3408:
                var43 = _closure1_slot22;
                var39 = _closure1_slot1;
                var46 = _closure1_slot2;
                var35 = 53;
                var35 = var46[var35];
                var39 = var39.bind(var3)(var35);
                var35 = {};
                var35.isLoading = var34;
                var35.navigateToPremium = var33;
                var35.navigateToSettings = var32;
                var35.navigateToShop = var31;
                var35.shopButtonRef = var30;
                var35.settingsButtonRef = var29;
                var35.paddingTop = var28;
                var27 = var43.bind(var3)(var39, var35);
            case 3475:
                var26[1] = var27;
                var39 = _closure1_slot23;
                var35 = _closure1_slot1;
                var53 = _closure1_slot2;
                var27 = var53[var20];
                var27 = var35.bind(var3)(var27);
                var35 = var27.View;
                var27 = {};
                var46 = {};
                var49 = _closure1_slot0;
                var43 = 28;
                var43 = var53[var43];
                var49 = var49.bind(var3)(var43);
                var43 = var49.int2hex;
                var43 = var43.bind(var49)(var50);
                var46.backgroundColor = var43;
                var43 = new Array(3);
                var43[0] = var46;
                var43[1] = var54;
                var43[2] = var44;
                var27.style = var43;
                var41 = var41 != var51;
                if (!var41) {
                    _fun103547_ip = 3932;
                    continue _fun103547
                }
            case 3570:
                if (var40) {
                    _fun103547_ip = 3630;
                    continue _fun103547
                }
            case 3573:
                var44 = _closure1_slot22;
                var43 = _closure1_slot1;
                var46 = _closure1_slot2;
                var40 = 41;
                var40 = var46[var40];
                var43 = var43.bind(var3)(var40);
                var40 = {};
                var40.style = var54;
                var46 = 'image';
                var40.accessibilityRole = var46;
                var40.accessibilityLabel = var52;
                var40.source = var51;
                var40 = var44.bind(var3)(var43, var40);
                _fun103547_ip = 3929;
                continue _fun103547;
            case 3630:
                var46 = _closure1_slot23;
                var57 = _closure1_slot0;
                var55 = _closure1_slot2;
                var43 = 49;
                var43 = var55[var43];
                var43 = var57.bind(var3)(var43);
                var44 = var43.PressableOpacity;
                var43 = {};
                var47 = function() {
                    var2 = _closure2_slot13;
                    var0 = _closure2_slot12;
                    var1 = !var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var43.onPress = var47;
                var53 = 'image';
                var43.accessibilityRole = var53;
                var47 = var55[var56];
                var47 = var57.bind(var3)(var47);
                var50 = var47.intl;
                var49 = var50.string;
                var47 = var55[var56];
                var47 = var57.bind(var3)(var47);
                var47 = var47.t;
                var47 = var47["3fzj/l"];
                var47 = var49.bind(var50)(var47);
                var43.accessibilityLabel = var47;
                var50 = _closure1_slot22;
                var49 = _closure1_slot1;
                var47 = 41;
                var47 = var55[var47];
                var49 = var49.bind(var3)(var47);
                var47 = {};
                var47.style = var54;
                var47.accessibilityRole = var53;
                var47.accessibilityLabel = var52;
                var47.source = var51;
                var49 = var50.bind(var3)(var49, var47);
                var47 = new Array(2);
                var47[0] = var49;
                var48 = !var48;
                if (!var48) {
                    _fun103547_ip = 3915;
                    continue _fun103547
                }
            case 3790:
                var51 = _closure1_slot22;
                var55 = _closure1_slot0;
                var52 = _closure1_slot2;
                var49 = 54;
                var49 = var52[var49];
                var49 = var55.bind(var3)(var49);
                var50 = var49.Caption;
                var49 = {};
                var53 = var52[var56];
                var53 = var55.bind(var3)(var53);
                var54 = var53.intl;
                var53 = var54.string;
                var52 = var52[var56];
                var52 = var55.bind(var3)(var52);
                var52 = var52.t;
                var52 = var52.I5gL2H;
                var52 = var53.bind(var54)(var52);
                var49.label = var52;
                var53 = var24.gifTag;
                var52 = new Array(2);
                var52[0] = var53;
                var53 = {};
                var53.top = var28;
                var52[1] = var53;
                var49.style = var52;
                var52 = var24.gifTagText;
                var49.textStyle = var52;
                var48 = var51.bind(var3)(var50, var49);
            case 3915:
                var47[1] = var48;
                var43.children = var47;
                var40 = var46.bind(var3)(var44, var43);
            case 3929:
                var41 = var40;
            case 3932:
                var40 = new Array(2);
                var40[0] = var41;
                var43 = _closure1_slot0;
                var44 = _closure1_slot2;
                var41 = 55;
                var41 = var44[var41];
                var43 = var43.bind(var3)(var41);
                var41 = var43.isIOS;
                var41 = var41.bind(var43)();
                if (!var41) {
                    _fun103547_ip = 3976;
                    continue _fun103547
                }
            case 3973:
                var41 = var42;
            case 3976:
                if (!var41) {
                    _fun103547_ip = 4014;
                    continue _fun103547
                }
            case 3979:
                var44 = _closure1_slot22;
                var43 = _closure1_slot24;
                var42 = {};
                var42.animatedProps = var45;
                var45 = _closure1_slot5;
                var45 = var45.absoluteFillObject;
                var42.style = var45;
                var41 = var44.bind(var3)(var43, var42);
            case 4014:
                var40[1] = var41;
                var27.children = var40;
                var27 = var39.bind(var3)(var35, var27);
                var26[2] = var27;
                var17.children = var26;
                var21 = var22.bind(var3)(var21, var17);
                var17 = new Array(4);
                var17[0] = var21;
                if (!var19) {
                    _fun103547_ip = 4254;
                    continue _fun103547
                }
            case 4056:
                var22 = _closure1_slot23;
                var26 = _closure1_slot1;
                var35 = _closure1_slot2;
                var20 = var35[var20];
                var20 = var26.bind(var3)(var20);
                var21 = var20.View;
                var20 = {};
                var27 = 'box-none';
                var20.pointerEvents = var27;
                var27 = var24.profileEffectLayer;
                var24 = new Array(3);
                var24[0] = var27;
                var27 = {};
                var27.width = var38;
                var27.height = var37;
                var24[1] = var27;
                var24[2] = var25;
                var20.style = var24;
                var27 = _closure1_slot22;
                var24 = 56;
                var24 = var35[var24];
                var25 = var26.bind(var3)(var24);
                var24 = {
                    'skuId': null,
                    'bannerAdjustment': 0,
                    'replayOnNavigationFocus': true
                };
                var24.skuId = var36;
                var25 = var27.bind(var3)(var25, var24);
                var24 = new Array(2);
                var24[0] = var25;
                var27 = _closure1_slot22;
                var25 = 53;
                var25 = var35[var25];
                var26 = var26.bind(var3)(var25);
                var25 = {};
                var25.isLoading = var34;
                var25.navigateToPremium = var33;
                var25.navigateToSettings = var32;
                var25.navigateToShop = var31;
                var25.shopButtonRef = var30;
                var25.settingsButtonRef = var29;
                var25.paddingTop = var28;
                var25 = var27.bind(var3)(var26, var25);
                var24[1] = var25;
                var20.children = var24;
                var19 = var22.bind(var3)(var21, var20);
            case 4254:
                var17[1] = var19;
                var22 = _closure1_slot22;
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var19 = 57;
                var19 = var21[var19];
                var20 = var20.bind(var3)(var19);
                var19 = {};
                var64 = var19;
                var63 = var23;
                var23 = copyDataProperties(var64, var63);
                var19 = var22.bind(var3)(var20, var19);
                var17[2] = var19;
                var20 = _closure1_slot22;
                var19 = _closure1_slot0;
                var18 = 58;
                var18 = var21[var18];
                var18 = var19.bind(var3)(var18);
                var19 = var18.TTIFirstContentfulPaint;
                var18 = {};
                var21 = 'you_screen';
                var18.label = var21;
                var18 = var20.bind(var3)(var19, var18);
                var17[3] = var18;
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot36 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var8 = var7[var1];
    var1 = arg3;
    var8 = var1.bind(var0)(var8);
    var _closure1_slot4 = var8;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var9 = var1.StyleSheet;
    var _closure1_slot5 = var9;
    var9 = var1.ScrollView;
    var1 = 3;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var10 = var1.SCALE_FACTOR;
    var _closure1_slot12 = var10;
    var10 = var1.SCROLL_POSITION_COEFFICIENT;
    var _closure1_slot13 = var10;
    var10 = var1.YOU_ACTION_SHEET_TOP_INSET;
    var _closure1_slot14 = var10;
    var10 = var1.YOU_AVATAR_SIZE;
    var _closure1_slot15 = var10;
    var10 = var1.YOU_BANNER_VERTICAL_TRANSLATE_SCALE_FACTOR;
    var _closure1_slot16 = var10;
    var10 = var1.YOU_SCREEN_ID;
    var _closure1_slot17 = var10;
    var1 = var1.YOU_SCROLL_EVENT_THROTTLE;
    var _closure1_slot18 = var1;
    var1 = 10;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.UserSettingsSections;
    var _closure1_slot19 = var1;
    var1 = 11;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.CollectiblesMobileShopScreen;
    var _closure1_slot20 = var1;
    var1 = 12;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.ContentDismissActionType;
    var _closure1_slot21 = var1;
    var1 = 13;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var10 = var1.jsx;
    var _closure1_slot22 = var10;
    var1 = var1.jsxs;
    var _closure1_slot23 = var1;
    var1 = 14;
    var10 = var7[var1];
    var12 = var5.bind(var0)(var10);
    var11 = var12.createAnimatedComponent;
    var10 = 15;
    var10 = var7[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var11.bind(var12)(var10);
    var _closure1_slot24 = var10;
    var10 = 16;
    var10 = var7[var10];
    var12 = var6.bind(var0)(var10);
    var11 = var12.createStyles;
    var10 = function(arg0) { // Environment: var4
        var6 = arg0;
        var0 = {};
        var2 = 1;
        var1 = {
            'flex': 1,
            'flexGrow': 1,
            'position': 'relative'
        };
        var0.container = var1;
        var1 = {};
        var1.flex = var2;
        var0.scrollView = var1;
        var1 = {
            'position': 'absolute',
            'top': 0,
            'zIndex': 1
        };
        var0.profileEffectLayer = var1;
        var1 = {
            'minHeight': null,
            'position': 'absolute',
            'top': 0,
            'maxWidth': '100%'
        };
        var1.minHeight = var6;
        var0.banner = var1;
        var1 = {
            'position': 'absolute',
            'left': 16,
            'right': 'auto',
            'bottom': 'auto',
            'marginTop': 8
        };
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 17;
        var2 = var5[var2];
        var3 = undefined;
        var8 = var4.bind(var3)(var2);
        var2 = 18;
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.unsafe_rawColors;
        var7 = var7.WHITE;
        var9 = var8.bind(var3)(var7);
        var8 = var9.alpha;
        var7 = 0.9;
        var8 = var8.bind(var9)(var7);
        var7 = var8.css;
        var7 = var7.bind(var8)();
        var1.backgroundColor = var7;
        var0.gifTag = var1;
        var1 = {};
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.unsafe_rawColors;
        var7 = var7.PRIMARY_800;
        var1.color = var7;
        var7 = 14;
        var1.fontSize = var7;
        var0.gifTagText = var1;
        var1 = {
            'marginTop': null,
            'flex': 1,
            'flexGrow': 1
        };
        var1.marginTop = var6;
        var0.content = var1;
        var1 = {
            'position': 'absolute',
            'marginTop': null,
            'left': null,
            'zIndex': 99,
            'padding': 7,
            'alignItems': 'center',
            'justifyContent': 'center'
        };
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_4;
        var1.marginTop = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_12;
        var1.left = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.lg;
        var1.borderRadius = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT;
        var1.backgroundColor = var2;
        var0.backButton = var1;
        return var0;
    };
    var10 = var11.bind(var12)(var10);
    var _closure1_slot25 = var10;
    var1 = var7[var1];
    var5 = var5.bind(var0)(var1);
    var1 = var5.createAnimatedComponent;
    var1 = var1.bind(var5)(var9);
    var _closure1_slot26 = var1;
    var1 = {};
    var5 = 'function YouScreenTsx1(e){const{scrollPosition}=this.__closure;scrollPosition.set(e.contentOffset.y);}';
    var1.code = var5;
    var _closure1_slot27 = var1;
    var1 = {};
    var5 = 'function YouScreenTsx2(){const{scrollPosition}=this.__closure;return scrollPosition.get()<=0;}';
    var1.code = var5;
    var _closure1_slot28 = var1;
    var1 = {};
    var5 = 'function YouScreenTsx3(){const{interpolate,scrollPosition,minScrollPosition,SCALE_FACTOR,translateOnScale,isNegativeScrollPosition}=this.__closure;const scale=interpolate(scrollPosition.get(),[minScrollPosition,0],[SCALE_FACTOR,1]);const translateY=interpolate(scrollPosition.get(),[minScrollPosition,0],[translateOnScale,0]);const transform=isNegativeScrollPosition.get()?[{scale:scale},{translateY:translateY}]:[];return{transform:transform};}';
    var1.code = var5;
    var _closure1_slot29 = var1;
    var1 = {};
    var5 = 'function YouScreenTsx4(){const{isNegativeScrollPosition,scrollPosition}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()}]:[];return{transform:transform};}';
    var1.code = var5;
    var _closure1_slot30 = var1;
    var1 = {};
    var5 = 'function YouScreenTsx5(){const{isNegativeScrollPosition,scrollPosition,coefficient}=this.__closure;const transform=isNegativeScrollPosition.get()?[{translateY:scrollPosition.get()*(1/coefficient)}]:[];return{transform:transform};}';
    var1.code = var5;
    var _closure1_slot31 = var1;
    var1 = {};
    var5 = 'function YouScreenTsx6(){const{clamp,interpolate,scrollPosition,windowHeight,coefficient}=this.__closure;return{blurAmount:clamp(interpolate(scrollPosition.get(),[0,-windowHeight*coefficient],[0,1]),0,1)};}';
    var1.code = var5;
    var _closure1_slot32 = var1;
    var1 = {};
    var5 = 'function YouScreenTsx7(){const{scrollPosition}=this.__closure;return scrollPosition.get()<0;}';
    var1.code = var5;
    var _closure1_slot33 = var1;
    var1 = {};
    var5 = 'function YouScreenTsx8(result,previous){const{runOnJS,setShowBlur}=this.__closure;return result!==previous&&runOnJS(setShowBlur)(result);}';
    var1.code = var5;
    var _closure1_slot34 = var1;
    var5 = var8.memo;
    var1 = function(arg0) { // Environment: var4
        _fun103570: for (var _fun103570_ip = 0;;) switch (_fun103570_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.inBottomSheet;
                var _closure2_slot0 = var6;
                var5 = var0.initialTab;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 30;
                var8 = var0[var3];
                var11 = var7.bind(var4)(var8);
                var10 = var11.useStateFromStores;
                var8 = _closure1_slot11;
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var2
                    var1 = _closure1_slot11;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var10.bind(var11)(var9, var8);
                var _closure2_slot1 = var13;
                var0 = var0[var3];
                var9 = var7.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var0;
                var0 = function() { // Environment: var2
                    var0 = _closure1_slot9;
                    var0 = var0.locale;
                    return var0;
                };
                var10 = var8.bind(var9)(var7, var0);
                var0 = null;
                var7 = var0 == var13;
                var9 = undefined;
                if (var7) {
                    _fun103570_ip = 147;
                    continue _fun103570
                }
            case 142:
                var9 = var13.id;
            case 147:
                _closure2_slot2 = var9;
                var12 = _closure1_slot4;
                var11 = var12.useMemo;
                var8 = new Array(1);
                var8[0] = var13;
                var7 = function() { // Environment: var2
                    _fun103573: for (var _fun103573_ip = 0;;) switch (_fun103573_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var4 = null;
                            var2 = var4 == var0;
                            var0 = undefined;
                            if (var2) {
                                _fun103573_ip = 41;
                                continue _fun103573
                            }
                        case 18:
                            var3 = _closure2_slot1;
                            var2 = var3.getAvatarURL;
                            var1 = _closure1_slot15;
                            var0 = var2.bind(var3)(var4, var1);
                        case 41:
                            return var0;
                    }
                };
                var15 = var11.bind(var12)(var7, var8);
                _closure2_slot3 = var15;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var11 = 39;
                var11 = var8[var11];
                var14 = var7.bind(var4)(var11);
                var12 = var14.useMobileWishlistOwnerExperiment;
                var11 = 'YouScreen';
                var11 = var12.bind(var14)(var11);
                _closure2_slot4 = var11;
                var14 = _closure1_slot4;
                var12 = var14.useLayoutEffect;
                var11 = new Array(3);
                var11[0] = var9;
                var11[1] = var15;
                var11[2] = var10;
                var10 = function() { // Environment: var2
                    _fun103574: for (var _fun103574_ip = 0;;) switch (_fun103574_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun103574_ip = 24;
                                continue _fun103574
                            }
                        case 16:
                            var2 = _closure2_slot3;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun103574_ip = 79;
                                continue _fun103574
                            }
                        case 27:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 59;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot3;
                            var0 = {};
                            var5 = 'you_screen';
                            var0.type = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 79:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var12.bind(var14)(var10, var11);
                var3 = var8[var3];
                var12 = var7.bind(var4)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var3;
                var3 = function() { // Environment: var2
                    _fun103575: for (var _fun103575_ip = 0;;) switch (_fun103575_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var2 = var0.enabled;
                            var3 = null;
                            var0 = null;
                            if (!var2) {
                                _fun103575_ip = 54;
                                continue _fun103575
                            }
                        case 19:
                            var2 = _closure2_slot2;
                            var2 = var3 != var2;
                            var0 = null;
                            if (!var2) {
                                _fun103575_ip = 54;
                                continue _fun103575
                            }
                        case 32:
                            var3 = _closure1_slot8;
                            var2 = var3.getFirstWishlistId;
                            var1 = _closure2_slot2;
                            var0 = var2.bind(var3)(var1);
                        case 54:
                            return var0;
                    }
                };
                var10 = var11.bind(var12)(var10, var3);
                var3 = 60;
                var3 = var8[var3];
                var8 = var7.bind(var4)(var3);
                var7 = var8.useFetchWishlist;
                var3 = {};
                var3.wishlistId = var10;
                var3.userId = var9;
                var3 = var7.bind(var8)(var3);
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var7 = function() { // Environment: var2
                    _fun103576: for (var _fun103576_ip = 0;;) switch (_fun103576_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 51;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getRootNavigationRef;
                            var3 = var2.bind(var3)();
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun103576_ip = 100;
                                continue _fun103576
                            }
                        case 41:
                            var2 = var3.isReady;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun103576_ip = 100;
                                continue _fun103576
                            }
                        case 54:
                            var4 = _closure1_slot10;
                            var2 = var4.setState;
                            var1 = {
                                'query': '',
                                'isActive': false
                            };
                            var1 = var2.bind(var4)(var1);
                            var2 = var3.navigate;
                            var1 = 'settings';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 100:
                            var0 = false;
                            return var0;
                    }
                };
                var3 = new Array(0);
                var12 = var8.bind(var9)(var7, var3);
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var7 = function() { // Environment: var2
                    _fun103577: for (var _fun103577_ip = 0;;) switch (_fun103577_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 51;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getRootNavigationRef;
                            var4 = var2.bind(var3)();
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun103577_ip = 89;
                                continue _fun103577
                            }
                        case 41:
                            var2 = var4.isReady;
                            var2 = var2.bind(var4)();
                            if (!var2) {
                                _fun103577_ip = 89;
                                continue _fun103577
                            }
                        case 54:
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = _closure1_slot19;
                            var1 = var1.PREMIUM;
                            var2.screen = var1;
                            var1 = 'settings';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        case 89:
                            var0 = false;
                            return var0;
                    }
                };
                var3 = new Array(0);
                var11 = var8.bind(var9)(var7, var3);
                var9 = _closure1_slot4;
                var8 = var9.useCallback;
                var7 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 61;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 62;
                    var8 = var7[var5];
                    var8 = var6.bind(var0)(var8);
                    var8 = var8.YOU_SCREEN;
                    var1.analyticsSource = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.YOU_SCREEN;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var1.analyticsLocations = var5;
                    var4 = _closure1_slot20;
                    var4 = var4.FEATURED_PAGE;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = new Array(0);
                var7 = var8.bind(var9)(var7, var3);
                var10 = _closure1_slot4;
                var9 = var10.useCallback;
                var8 = function(arg0) { // Environment: var2
                    _fun103579: for (var _fun103579_ip = 0;;) switch (_fun103579_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 51;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getRootNavigationRef;
                            var4 = var2.bind(var3)();
                            var2 = null;
                            if (!(var2 != var4)) {
                                _fun103579_ip = 104;
                                continue _fun103579
                            }
                        case 41:
                            var2 = var4.isReady;
                            var2 = var2.bind(var4)();
                            if (!var2) {
                                _fun103579_ip = 104;
                                continue _fun103579
                            }
                        case 54:
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = _closure1_slot19;
                            var1 = var1.PROFILE_CUSTOMIZATION;
                            var2.screen = var1;
                            var1 = {};
                            var5 = arg0;
                            var1.autoFocusElement = var5;
                            var2.params = var1;
                            var1 = 'settings';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        case 104:
                            var0 = false;
                            return var0;
                    }
                };
                var3 = new Array(0);
                var10 = var9.bind(var10)(var8, var3);
                var14 = _closure1_slot4;
                var9 = var14.useCallback;
                var8 = function() { // Environment: var2
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 63;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openEditCustomStatusModal;
                    var1 = {};
                    var5 = 'YouScreen';
                    var1.location = var5;
                    var5 = _closure1_slot1;
                    var4 = 62;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var5 = var4.YOU_SCREEN;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.analyticsLocations = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = new Array(0);
                var9 = var9.bind(var14)(var8, var3);
                var15 = _closure1_slot4;
                var14 = var15.useCallback;
                var8 = function() { // Environment: var2
                    _fun103581: for (var _fun103581_ip = 0;;) switch (_fun103581_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 51;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getRootNavigationRef;
                            var3 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun103581_ip = 71;
                                continue _fun103581
                            }
                        case 41:
                            var1 = var3.isReady;
                            var1 = var1.bind(var3)();
                            if (!var1) {
                                _fun103581_ip = 71;
                                continue _fun103581
                            }
                        case 54:
                            var2 = var3.navigate;
                            var1 = 'friends';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 71:
                            var0 = false;
                            return var0;
                    }
                };
                var3 = new Array(0);
                var8 = var14.bind(var15)(var8, var3);
                var15 = _closure1_slot4;
                var14 = var15.useEffect;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() { // Environment: var2
                    _fun103582: for (var _fun103582_ip = 0;;) switch (_fun103582_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 51;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getRootNavigationRef;
                            var4 = var2.bind(var3)();
                            var2 = null;
                            if (!(var2 == var4)) {
                                _fun103582_ip = 45;
                                continue _fun103582
                            }
                        case 43:
                            return var1;
                        case 45:
                            var3 = var4.addListener;
                            var2 = 'state';
                            var1 = function() { // Environment: var0
                                _fun103583: for (var _fun103583_ip = 0;;) switch (_fun103583_ip) {
                                    case 0:
                                        var0 = _closure2_slot0;
                                        if (!var0) {
                                            _fun103583_ip = 45;
                                            continue _fun103583
                                        }
                                    case 10:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 50;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        var0 = var1.hideActionSheet;
                                        var0 = var0.bind(var1)();
                                    case 45:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                _fun103584: for (var _fun103584_ip = 0;;) switch (_fun103584_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun103584_ip = 23;
                                            continue _fun103584
                                        }
                                    case 13:
                                        var1 = _closure3_slot0;
                                        var0 = undefined;
                                        var0 = var1.bind(var0)();
                                    case 23:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var2 = var14.bind(var15)(var2, var3);
                var2 = var0 == var13;
                var0 = null;
                if (var2) {
                    _fun103570_ip = 593;
                    continue _fun103570
                }
            case 533:
                var3 = _closure1_slot22;
                var2 = _closure1_slot36;
                var1 = {};
                var1.user = var13;
                var1.navigateToSettings = var12;
                var1.navigateToPremium = var11;
                var1.navigateToProfileCustomization = var10;
                var1.navigateToCustomStatus = var9;
                var1.navigateToFriends = var8;
                var1.navigateToShop = var7;
                var1.inBottomSheet = var6;
                var1.initialTab = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 593:
                return var0;
        }
    };
    var1 = var5.bind(var8)(var1);
    var _closure1_slot35 = var1;
    var5 = 66;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/you/YouScreen.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun103585: for (var _fun103585_ip = 0;;) switch (_fun103585_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.inBottomSheet;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun103585_ip = 19;
                    continue _fun103585
                }
            case 17:
                var5 = false;
            case 19:
                var4 = var0.initialTab;
                var _closure2_slot0 = var3;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var2 = function() { // Environment: var9
                    _fun103586: for (var _fun103586_ip = 0;;) switch (_fun103586_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 51;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.getRootNavigationRef;
                            var3 = var2.bind(var3)();
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun103586_ip = 100;
                                continue _fun103586
                            }
                        case 41:
                            var2 = var3.isReady;
                            var2 = var2.bind(var3)();
                            if (!var2) {
                                _fun103586_ip = 100;
                                continue _fun103586
                            }
                        case 54:
                            var4 = _closure1_slot10;
                            var2 = var4.setState;
                            var1 = {
                                'query': '',
                                'isActive': false
                            };
                            var1 = var2.bind(var4)(var1);
                            var2 = var3.navigate;
                            var1 = 'settings';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        case 100:
                            var0 = false;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var1 = var6.bind(var7)(var2, var1);
                _closure2_slot0 = var1;
                var7 = _closure1_slot4;
                var6 = var7.useLayoutEffect;
                var2 = function() { // Environment: var9
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 64;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.trackAppUIViewed;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = new Array(0);
                var1 = var6.bind(var7)(var2, var1);
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 65;
                var1 = var6[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.useScrollToTop;
                var8 = _closure1_slot4;
                var7 = var8.useRef;
                var1 = {};
                var9 = function() {
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var1.scrollToTop = var9;
                var1 = var7.bind(var8)(var1);
                var1 = var2.bind(var6)(var1);
                var2 = _closure1_slot22;
                var1 = _closure1_slot35;
                var0 = {};
                var0.inBottomSheet = var5;
                var0.initialTab = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var4;
    var2.UnconnectedYouScreen = var3;
    var2.StandaloneConnectedYouScreen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 4652, 4666, 1690, 10228, 1621, 13506, 660, 3289, 1369, 33, 3719, 8413, 1297, 669, 671, 7430, 5272, 481, 7043, 1568, 7051, 3252, 5448, 3158, 668, 7053, 632, 1464, 1348, 1417, 1235, 5799, 7715, 12661, 1358, 11335, 6019, 4711, 4633, 7064, 13507, 5263, 3166, 13510, 13512, 4911, 3284, 3919, 13513, 13514, 7059, 478, 6989, 13521, 9714, 7044, 11344, 4605, 5642, 7069, 4372, 1470, 2]);