// modules/channel_list_v2/native/RedesignGuildHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var1 = arg0;
        var11 = var1.guild;
        var7 = var1.scrollPosition;
        var _closure2_slot0 = var7;
        var5 = var1.bannerHeight;
        var _closure2_slot1 = var5;
        var1 = _closure1_slot19;
        var3 = undefined;
        var10 = var1.bind(var3)();
        var2 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 21;
        var4 = var12[var1];
        var9 = var2.bind(var3)(var4);
        var6 = var9.useAnimatedStyle;
        var4 = function() {
            var0 = {};
            var2 = {};
            var1 = global;
            var5 = var1.Math;
            var4 = var5.max;
            var6 = _closure2_slot0;
            var3 = var6.get;
            var3 = var3.bind(var6)();
            var1 = _closure2_slot1;
            var3 = var3 - var1;
            var1 = 0;
            var1 = var4.bind(var5)(var1, var3);
            var2.translateY = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.transform = var1;
            return var0;
        };
        var13 = {};
        var13.scrollPosition = var7;
        var13.bannerHeight = var5;
        var4.__closure = var13;
        var13 = 6302330113586.0;
        var4.__workletHash = var13;
        var13 = _closure1_slot20;
        var4.__initData = var13;
        var6 = var6.bind(var9)(var4);
        var1 = var12[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            var0 = {};
            var2 = {};
            var1 = global;
            var5 = var1.Math;
            var4 = var5.min;
            var6 = _closure2_slot0;
            var3 = var6.get;
            var3 = var3.bind(var6)();
            var1 = _closure2_slot1;
            var3 = var3 - var1;
            var1 = 0;
            var1 = var4.bind(var5)(var1, var3);
            var2.translateY = var1;
            var1 = new Array(1);
            var1[0] = var2;
            var0.transform = var1;
            return var0;
        };
        var4 = {};
        var4.scrollPosition = var7;
        var4.bannerHeight = var5;
        var0.__closure = var4;
        var4 = 16710117141903.0;
        var0.__workletHash = var4;
        var4 = _closure1_slot21;
        var0.__initData = var4;
        var7 = var1.bind(var2)(var0);
        var2 = _closure1_slot15;
        var9 = _closure1_slot1;
        var4 = 22;
        var0 = var12[var4];
        var1 = var9.bind(var3)(var0);
        var0 = {};
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var13 = 'hidden';
        var6.overflow = var13;
        var5[1] = var6;
        var0.style = var5;
        var6 = _closure1_slot14;
        var4 = var12[var4];
        var5 = var9.bind(var3)(var4);
        var4 = {};
        var4.style = var7;
        var14 = _closure1_slot14;
        var7 = 23;
        var7 = var12[var7];
        var13 = var9.bind(var3)(var7);
        var7 = {
            'absolute': true,
            'tall': true
        };
        var7 = var14.bind(var3)(var13, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot14;
        var6 = _closure1_slot6;
        var5 = {};
        var10 = var10.headerWrapper;
        var5.style = var10;
        var10 = _closure1_slot14;
        var8 = 24;
        var8 = var12[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.guild = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun101860: for (var _fun101860_ip = 0;;) switch (_fun101860_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.guild;
                var _closure2_slot0 = var2;
                var17 = var3.scrollPosition;
                var _closure2_slot1 = var17;
                var0 = var3.bannerHeight;
                var _closure2_slot2 = var0;
                var18 = var3.bannerWidth;
                var _closure2_slot3 = var18;
                var5 = var3.onPress;
                var _closure2_slot4 = var5;
                var3 = _closure1_slot4;
                var4 = undefined;
                var3 = var3.bind(var4)();
                var6 = var3.height;
                var3 = _closure1_slot17;
                var12 = var3.bind(var4)(var6);
                var _closure2_slot5 = var12;
                var21 = _closure1_slot0;
                var20 = _closure1_slot2;
                var3 = 25;
                var3 = var20[var3];
                var8 = var21.bind(var4)(var3);
                var7 = var8.useStateFromStoresObject;
                var3 = _closure1_slot9;
                var6 = new Array(2);
                var6[0] = var3;
                var3 = _closure1_slot8;
                var6[1] = var3;
                var3 = function() { // Environment: var1
                    var0 = {};
                    var3 = _closure1_slot9;
                    var2 = var3.getKey;
                    var3 = var2.bind(var3)();
                    var2 = null;
                    var2 = var2 != var3;
                    var0.actionSheetOpen = var2;
                    var1 = _closure1_slot8;
                    var1 = var1.useReducedMotion;
                    var0.useReducedMotion = var1;
                    return var0;
                };
                var3 = var7.bind(var8)(var6, var3);
                var7 = var3.actionSheetOpen;
                var6 = var3.useReducedMotion;
                var3 = 26;
                var3 = var20[var3];
                var8 = var21.bind(var4)(var3);
                var3 = var8.useIsFocused;
                var3 = var3.bind(var8)();
                var _closure2_slot6 = var0;
                var14 = 21;
                var8 = var20[var14];
                var10 = var21.bind(var4)(var8);
                var9 = var10.useSharedValue;
                var8 = 0;
                var19 = var9.bind(var10)(var8);
                var _closure2_slot7 = var19;
                var13 = _closure1_slot3;
                var10 = var13.useCallback;
                var9 = new Array(1);
                var9[0] = var19;
                var8 = function() { // Environment: var1
                    var3 = _closure2_slot7;
                    var2 = var3.set;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 27;
                    var1 = var5[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var1);
                    var6 = var7.withSpring;
                    var1 = 28;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var5 = var1.springStandard;
                    var4 = 1;
                    var1 = 'animate-always';
                    var1 = var6.bind(var7)(var4, var5, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var15 = var10.bind(var13)(var8, var9);
                var13 = _closure1_slot3;
                var10 = var13.useCallback;
                var9 = new Array(1);
                var9[0] = var19;
                var8 = function() { // Environment: var1
                    var3 = _closure2_slot7;
                    var2 = var3.set;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 27;
                    var1 = var5[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var1);
                    var6 = var7.withSpring;
                    var1 = 28;
                    var1 = var5[var1];
                    var1 = var4.bind(var0)(var1);
                    var5 = var1.springStandard;
                    var4 = 0;
                    var1 = 'animate-always';
                    var1 = var6.bind(var7)(var4, var5, var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var10.bind(var13)(var8, var9);
                var13 = _closure1_slot3;
                var10 = var13.useCallback;
                var9 = new Array(2);
                var9[0] = var2;
                var9[1] = var5;
                var5 = function() { // Environment: var1
                    _fun101864: for (var _fun101864_ip = 0;;) switch (_fun101864_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun101864_ip = 23;
                                continue _fun101864
                            }
                        case 13:
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var0 = var2.bind(var0)();
                        case 23:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 29;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var16 = var10.bind(var13)(var5, var9);
                var5 = var20[var14];
                var10 = var21.bind(var4)(var5);
                var9 = var10.useAnimatedStyle;
                var5 = function() {
                    _fun101865: for (var _fun101865_ip = 0;;) switch (_fun101865_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = var1.get;
                            var4 = var0.bind(var1)();
                            var0 = {};
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var9 = 21;
                            var1 = var1[var9];
                            var8 = undefined;
                            var7 = var2.bind(var8)(var1);
                            var3 = var7.interpolate;
                            var1 = _closure2_slot6;
                            var2 = [0];
                            var2[1] = var1;
                            var14 = [1, 0];
                            var11 = 'clamp';
                            var17 = var7;
                            var16 = var4;
                            var15 = var2;
                            var13 = var11;
                            var1 = var17[var3](var16, var15, var14, var13, var12);
                            var0.opacity = var1;
                            var2 = {};
                            var3 = 0;
                            if (!(!(var4 >= var3))) {
                                _fun101865_ip = 118;
                                continue _fun101865
                            }
                        case 109:
                            var1 = 2;
                            var1 = var4 / var1;
                            _fun101865_ip = 195;
                            continue _fun101865;
                        case 118:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var9];
                            var10 = var7.bind(var8)(var6);
                            var9 = var10.interpolate;
                            var16 = -var4;
                            var6 = _closure2_slot2;
                            var7 = [0];
                            var7[1] = var6;
                            var12 = -var6;
                            var6 = [0];
                            var6[1] = var12;
                            var17 = var10;
                            var15 = var7;
                            var14 = var6;
                            var13 = var11;
                            var1 = var17[var9](var16, var15, var14, var13, var12);
                        case 195:
                            var2.translateY = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var6 = var4 >= var3;
                            var3 = 1;
                            if (var6) {
                                _fun101865_ip = 232;
                                continue _fun101865
                            }
                        case 220:
                            var5 = _closure2_slot2;
                            var4 = var5 - var4;
                            var3 = var4 / var5;
                        case 232:
                            var2.scale = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var13 = {};
                var13.scrollPosition = var17;
                var17 = var20[var14];
                var17 = var21.bind(var4)(var17);
                var17 = var17.interpolate;
                var13.interpolate = var17;
                var13.maxScrollPosition = var0;
                var13.bannerHeight = var0;
                var5.__closure = var13;
                var13 = 16532496584630.0;
                var5.__workletHash = var13;
                var13 = _closure1_slot22;
                var5.__initData = var13;
                var5 = var9.bind(var10)(var5);
                var9 = var20[var14];
                var13 = var21.bind(var4)(var9);
                var10 = var13.useAnimatedStyle;
                var9 = function() {
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.interpolate;
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
                    var2 = [0, 1];
                    var1 = [0, 0.3];
                    var1 = var4.bind(var5)(var3, var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var17 = {};
                var20 = var20[var14];
                var20 = var21.bind(var4)(var20);
                var20 = var20.interpolate;
                var17.interpolate = var20;
                var17.pressed = var19;
                var9.__closure = var17;
                var17 = 13777976622560.0;
                var9.__workletHash = var17;
                var17 = _closure1_slot23;
                var9.__initData = var17;
                var13 = var10.bind(var13)(var9);
                var17 = _closure1_slot3;
                var10 = var17.useMemo;
                var9 = new Array(3);
                var9[0] = var12;
                var9[1] = var18;
                var9[2] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure2_slot5;
                    var1 = var0.guildBanner;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var3 = _closure2_slot3;
                    var1.width = var3;
                    var4 = _closure2_slot2;
                    var1.height = var4;
                    var2 = 2;
                    var5 = var3 / var2;
                    var3 = -1;
                    var5 = var5 * var3;
                    var1.marginLeft = var5;
                    var2 = var4 / var2;
                    var2 = var2 * var3;
                    var1.marginTop = var2;
                    var0[1] = var1;
                    return var0;
                };
                var18 = var10.bind(var17)(var0, var9);
                var9 = var2.banner;
                var0 = null;
                if (!(var0 != var9)) {
                    _fun101860_ip = 794;
                    continue _fun101860
                }
            case 541:
                var6 = !var6;
                if (!var6) {
                    _fun101860_ip = 550;
                    continue _fun101860
                }
            case 547:
                var6 = !var7;
            case 550:
                if (!var6) {
                    _fun101860_ip = 556;
                    continue _fun101860
                }
            case 553:
                var6 = var3;
            case 556:
                if (!var6) {
                    _fun101860_ip = 585;
                    continue _fun101860
                }
            case 559:
                var7 = var2.features;
                var3 = var7.has;
                var2 = _closure1_slot13;
                var2 = var2.ANIMATED_BANNER;
                var6 = var3.bind(var7)(var2);
            case 585:
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 30;
                var2 = var9[var2];
                var3 = var10.bind(var4)(var2);
                var2 = var3.getAnimatableSourceWithFallback;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 30;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getGuildBannerSource;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var4 = var0.id;
                    var1.id = var4;
                    var0 = var0.banner;
                    var1.banner = var0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var17 = var2.bind(var3)(var6, var1);
                var3 = _closure1_slot14;
                var1 = 22;
                var1 = var9[var1];
                var2 = var10.bind(var4)(var1);
                var1 = {};
                var1.style = var5;
                var7 = _closure1_slot15;
                var6 = _closure1_slot7;
                var5 = {};
                var19 = var12.bannerWrapper;
                var5.style = var19;
                var5.onPress = var16;
                var5.onPressIn = var15;
                var5.onPressOut = var8;
                var16 = _closure1_slot14;
                var8 = 31;
                var8 = var9[var8];
                var15 = var10.bind(var4)(var8);
                var8 = {};
                var8.style = var18;
                var8.source = var17;
                var15 = var16.bind(var4)(var15, var8);
                var8 = new Array(2);
                var8[0] = var15;
                var11 = _closure1_slot14;
                var9 = var9[var14];
                var9 = var10.bind(var4)(var9);
                var10 = var9.View;
                var9 = {};
                var14 = var12.bannerOverlay;
                var12 = new Array(2);
                var12[0] = var14;
                var12[1] = var13;
                var9.style = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 794:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var6[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.useWindowDimensions;
    var _closure1_slot4 = var8;
    var8 = var3.StyleSheet;
    var _closure1_slot5 = var8;
    var8 = var3.View;
    var _closure1_slot6 = var8;
    var3 = var3.Pressable;
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.STICKY_BANNER_ASPECT_RATIO;
    var _closure1_slot10 = var4;
    var4 = var3.BANNER_MAX_HEIGHT_PERCENTAGE;
    var _closure1_slot11 = var4;
    var3 = var3.SEARCH_BAR_MARGIN_BOTTOM;
    var _closure1_slot12 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot13 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.jsx;
    var _closure1_slot14 = var4;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 15;
    var4 = var6[var3];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = 5;
        var1.zIndex = var2;
        var0.guildHeaderWrapper = var1;
        return var0;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = var6[var3];
    var9 = var5.bind(var0)(var4);
    var8 = var9.createStyles;
    var4 = function(arg0) { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = '100%';
        var1.width = var2;
        var4 = _closure1_slot11;
        var3 = arg0;
        var3 = var3 * var4;
        var1.maxHeight = var3;
        var3 = _closure1_slot10;
        var1.aspectRatio = var3;
        var3 = 'hidden';
        var1.overflow = var3;
        var0.bannerWrapper = var1;
        var1 = {
            'left': '50%',
            'top': '50%'
        };
        var0.guildBanner = var1;
        var1 = {};
        var3 = _closure1_slot5;
        var5 = var3.absoluteFillObject;
        var6 = var1;
        var3 = copyDataProperties(var6, var5);
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 16;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var2 = var2.colors;
        var3 = var2.BLACK;
        var2 = 'backgroundColor';
        var1[var2] = var3;
        var0.bannerOverlay = var1;
        return var0;
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot17 = var4;
    var4 = var6[var3];
    var9 = var5.bind(var0)(var4);
    var8 = var9.experimental_createToken;
    var4 = function(arg0) { // Environment: var1
        _fun101871: for (var _fun101871_ip = 0;;) switch (_fun101871_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.gradient;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun101871_ip = 53;
                    continue _fun101871
                }
            case 15:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.colors;
                var0 = var0.PANEL_BG;
                _fun101871_ip = 89;
                continue _fun101871;
            case 53:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.colors;
                var0 = var1.BACKGROUND_BASE_LOW;
            case 89:
                return var0;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var3 = var6[var3];
    var8 = var5.bind(var0)(var3);
    var4 = var8.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = _closure1_slot18;
        var1.backgroundColor = var2;
        var0.headerWrapper = var1;
        return var0;
    };
    var3 = var4.bind(var8)(var3);
    var _closure1_slot19 = var3;
    var4 = var7.memo;
    var3 = function arg0() {
        _fun101873: for (var _fun101873_ip = 0;;) switch (_fun101873_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.guild;
                var _closure2_slot0 = var14;
                var10 = var1.scrollPosition;
                var13 = var1.bannerHeight;
                var12 = var1.bannerWidth;
                var11 = var1.headerHeight;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var1 = _closure1_slot16;
                var4 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 17;
                var1 = var5[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useLocation;
                var1 = var1.bind(var2)();
                var2 = var1.state;
                var15 = null;
                var5 = var15 == var2;
                var1 = undefined;
                if (var5) {
                    _fun101873_ip = 107;
                    continue _fun101873
                }
            case 101:
                var1 = var2.shouldShowSubscribeTooltip;
            case 107:
                var7 = var15 != var1;
                if (!var7) {
                    _fun101873_ip = 117;
                    continue _fun101873
                }
            case 114:
                var7 = var1;
            case 117:
                _closure2_slot1 = var7;
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var8 = var14.id;
                var1 = new Array(2);
                var1[0] = var8;
                var1[1] = var7;
                var0 = function() { // Environment: var0
                    _fun101874: for (var _fun101874_ip = 0;;) switch (_fun101874_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun101874_ip = 78;
                                continue _fun101874
                            }
                        case 10:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 18;
                            var1 = var6[var1];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var1);
                            var2 = var3.transitionToGuild;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var0 = 19;
                            var0 = var6[var0];
                            var4 = var5.bind(var4)(var0);
                            var0 = var4.getSelectedChannelFromRoute;
                            var0 = var0.bind(var4)();
                            var0 = var2.bind(var3)(var1, var0);
                        case 78:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var4.guildHeaderWrapper;
                var0.style = var4;
                var4 = true;
                var0.preventClipping = var4;
                var8 = _closure1_slot14;
                var5 = _closure1_slot25;
                var4 = {};
                var4.guild = var14;
                var4.scrollPosition = var10;
                var4.bannerHeight = var13;
                var4.bannerWidth = var12;
                var4.onPress = var9;
                var5 = var8.bind(var3)(var5, var4);
                var4 = new Array(3);
                var4[0] = var5;
                var16 = _closure1_slot14;
                var8 = _closure1_slot24;
                var5 = {};
                var5.guild = var14;
                var5.scrollPosition = var10;
                var12 = var14.banner;
                var18 = var15 != var12;
                var17 = 0;
                if (!var18) {
                    _fun101873_ip = 271;
                    continue _fun101873
                }
            case 268:
                var17 = var13;
            case 271:
                var5.bannerHeight = var17;
                var5 = var16.bind(var3)(var8, var5);
                var4[1] = var5;
                var5 = null;
                if (!var7) {
                    _fun101873_ip = 361;
                    continue _fun101873
                }
            case 291:
                var8 = _closure1_slot14;
                var7 = _closure1_slot1;
                var16 = _closure1_slot2;
                var6 = 20;
                var6 = var16[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var14 = var14.banner;
                var14 = var15 != var14;
                var12 = 0;
                if (!var14) {
                    _fun101873_ip = 335;
                    continue _fun101873
                }
            case 332:
                var12 = var13;
            case 335:
                var6.bannerHeight = var12;
                var6.headerHeight = var11;
                var6.scrollPosition = var10;
                var6.onClosePress = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 361:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = {};
    var7 = 'function RedesignGuildHeaderTsx1(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.max(0,scrollPosition.get()-bannerHeight)}]};}';
    var4.code = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function RedesignGuildHeaderTsx2(){const{scrollPosition,bannerHeight}=this.__closure;return{transform:[{translateY:Math.min(0,scrollPosition.get()-bannerHeight)}]};}';
    var4.code = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = "function RedesignGuildHeaderTsx3(){const{scrollPosition,interpolate,maxScrollPosition,bannerHeight}=this.__closure;const scrollPosValue=scrollPosition.get();return{opacity:interpolate(scrollPosValue,[0,maxScrollPosition],[1,0],'clamp'),transform:[{translateY:scrollPosValue>=0?interpolate(-scrollPosValue,[0,bannerHeight],[0,-bannerHeight],'clamp'):scrollPosValue/2},{scale:scrollPosValue>=0?1:(bannerHeight-scrollPosValue)/bannerHeight}]};}";
    var4.code = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = 'function RedesignGuildHeaderTsx4(){const{interpolate,pressed}=this.__closure;return{opacity:interpolate(pressed.get(),[0,1],[0,0.3])};}';
    var4.code = var7;
    var _closure1_slot23 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/RedesignGuildHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        _fun101875: for (var _fun101875_ip = 0;;) switch (_fun101875_ip) {
            case 0:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var1.bind(var2)();
                var3 = 8;
                var3 = var5[var3];
                var3 = var4.bind(var2)(var3);
                var5 = var3.bind(var2)();
                var4 = var1;
                if (var4) {
                    _fun101875_ip = 82;
                    continue _fun101875
                }
            case 51:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 9;
                var1 = var6[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.isThemeDark;
                var4 = var1.bind(var3)(var5);
            case 82:
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var6 = var5.bind(var2)(var1);
                var1 = var6.useFontScale;
                var8 = var1.bind(var6)();
                var6 = _closure1_slot1;
                var1 = 11;
                var1 = var3[var1];
                var6 = var6.bind(var2)(var1);
                var1 = arg0;
                var6 = var6.bind(var2)(var1);
                var1 = null;
                var1 = var1 != var6;
                var7 = 12;
                var3 = var3[var7];
                var6 = var5.bind(var2)(var3);
                var5 = var6.scaleTextLineHeight;
                var3 = 'redesign/heading-18/bold';
                var5 = var5.bind(var6)(var3, var8);
                var3 = 0;
                if (!var4) {
                    _fun101875_ip = 180;
                    continue _fun101875
                }
            case 177:
                var3 = 1;
            case 180:
                var6 = 0;
                if (!var1) {
                    _fun101875_ip = 220;
                    continue _fun101875
                }
            case 185:
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var7];
                var7 = var4.bind(var2)(var1);
                var4 = var7.scaleTextLineHeight;
                var1 = 'text-xs/medium';
                var6 = var4.bind(var7)(var1, var8);
            case 220:
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 13;
                var1 = var8[var1];
                var1 = var4.bind(var2)(var1);
                var4 = 16;
                var5 = var4 + var5;
                var5 = var5 + var6;
                var7 = _closure1_slot0;
                var6 = 14;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var6 = var6.SMALL_BUTTON_HEIGHT;
                var0 = _closure1_slot12;
                var0 = var6 + var0;
                var0 = var5 + var0;
                var0 = var0 + var4;
                var0 = var0 + var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.useRedesignGuildHeaderHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 3140, 8821, 660, 33, 8746, 3246, 3206, 4090, 13294, 7000, 13151, 4088, 1297, 671, 3218, 1220, 3919, 13295, 3720, 3910, 8745, 13296, 566, 1470, 4081, 4087, 12590, 1417, 4704, 2]);