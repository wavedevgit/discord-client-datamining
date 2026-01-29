// modules/quests/native/QuestOrbsRewardModal.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: AnimatedOrbContainer, environment: var1
        _fun78408: for (var _fun78408_ip = 0;;) switch (_fun78408_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.useReducedMotion;
                var10 = var1.isAppActive;
                var1 = _closure1_slot22;
                var3 = undefined;
                var12 = var1.bind(var3)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var7 = false;
                var2 = var1.bind(var2)(var7);
                var1 = _closure1_slot3;
                var6 = 2;
                var1 = var1.bind(var3)(var2, var6);
                var18 = 0;
                var4 = var1[var18];
                var _closure2_slot0 = var4;
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot1 = var1;
                var5 = _closure1_slot5;
                var1 = var5.useState;
                var5 = var1.bind(var5)(var7);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var5, var6);
                var17 = var1[var18];
                var _closure2_slot2 = var17;
                var1 = var1[var2];
                var _closure2_slot3 = var1;
                var7 = _closure1_slot5;
                var5 = var7.useState;
                var1 = true;
                var5 = var5.bind(var7)(var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var5, var6);
                var5 = var1[var18];
                var1 = var1[var2];
                var _closure2_slot4 = var1;
                var7 = _closure1_slot5;
                var6 = var7.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var11 = var6.bind(var7)(var2, var1);
                var7 = _closure1_slot5;
                var6 = var7.useCallback;
                var2 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var14 = var6.bind(var7)(var2, var1);
                var6 = _closure1_slot5;
                var2 = var6.useEffect;
                var1 = new Array(2);
                var1[0] = var4;
                var1[1] = var17;
                var0 = function() { // Environment: var0
                    _fun78411: for (var _fun78411_ip = 0;;) switch (_fun78411_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            if (!var2) {
                                _fun78411_ip = 19;
                                continue _fun78411
                            }
                        case 12:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun78411_ip = 23;
                                continue _fun78411
                            }
                        case 19:
                            var1 = undefined;
                            return var1;
                        case 23:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot4;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = 1450;
                            var1 = var4.bind(var3)(var2, var1);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var0 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot8;
                var0 = {};
                var16 = '100%';
                var6 = {
                    'width': '100%',
                    'height': '100%'
                };
                var0.style = var6;
                var6 = !var4;
                if (!var6) {
                    _fun78408_ip = 287;
                    continue _fun78408
                }
            case 284:
                var6 = !var17;
            case 287:
                if (!var6) {
                    _fun78408_ip = 316;
                    continue _fun78408
                }
            case 290:
                var8 = _closure1_slot14;
                var7 = _closure1_slot8;
                var4 = {};
                var15 = {};
                var15.height = var16;
                var4.style = var15;
                var6 = var8.bind(var3)(var7, var4);
            case 316:
                var4 = new Array(3);
                var4[0] = var6;
                var8 = _closure1_slot14;
                var7 = _closure1_slot20;
                var6 = {};
                var16 = _closure1_slot1;
                var19 = _closure1_slot2;
                var15 = 23;
                var15 = var19[var15];
                var15 = var16.bind(var3)(var15);
                var6.uri = var15;
                var16 = var12.animatedOrb;
                var15 = new Array(2);
                var15[0] = var16;
                var16 = var5;
                if (!var5) {
                    _fun78408_ip = 381;
                    continue _fun78408
                }
            case 378:
                var16 = !var9;
            case 381:
                if (var16) {
                    _fun78408_ip = 387;
                    continue _fun78408
                }
            case 384:
                var16 = !var17;
            case 387:
                if (!var16) {
                    _fun78408_ip = 399;
                    continue _fun78408
                }
            case 390:
                var17 = {};
                var17.opacity = var18;
                var16 = var17;
            case 399:
                var15[1] = var16;
                var6.style = var15;
                var6.onLoad = var14;
                var14 = !var5;
                if (!var14) {
                    _fun78408_ip = 421;
                    continue _fun78408
                }
            case 418:
                var14 = !var9;
            case 421:
                if (!var14) {
                    _fun78408_ip = 427;
                    continue _fun78408
                }
            case 424:
                var14 = var10;
            case 427:
                var6.animate = var14;
                var6 = var8.bind(var3)(var7, var6);
                var4[1] = var6;
                if (!var5) {
                    _fun78408_ip = 448;
                    continue _fun78408
                }
            case 445:
                var5 = !var9;
            case 448:
                if (!var5) {
                    _fun78408_ip = 528;
                    continue _fun78408
                }
            case 451:
                var8 = _closure1_slot14;
                var7 = _closure1_slot20;
                var6 = {};
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var13 = 24;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var6.uri = var13;
                var13 = var12.animatedOrb;
                var12 = new Array(1);
                var12[0] = var13;
                var6.style = var12;
                var6.onLoad = var11;
                var9 = !var9;
                if (!var9) {
                    _fun78408_ip = 517;
                    continue _fun78408
                }
            case 514:
                var9 = var10;
            case 517:
                var6.animate = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 528:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot23 = var0;
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
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var8 = var3.bind(var0)(var6);
    var _closure1_slot5 = var8;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot6 = var6;
    var6 = var3.Platform;
    var6 = var3.StyleSheet;
    var _closure1_slot7 = var6;
    var3 = var3.View;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RewardFilterTypes;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Orientation;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 13;
    var6 = var5[var3];
    var9 = var4.bind(var0)(var6);
    var7 = var9.createStyles;
    var6 = {};
    var10 = {
        'alignSelf': 'flex-start',
        'marginHorizontal': null,
        'zIndex': 999
    };
    var11 = 14;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10.marginHorizontal = var13;
    var6.closeButton = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10.tintColor = var11;
    var6.closeButtonIcon = var10;
    var6 = var7.bind(var9)(var6);
    var _closure1_slot16 = var6;
    var6 = var5[var3];
    var9 = var4.bind(var0)(var6);
    var7 = var9.createStyles;
    var6 = function() { // Environment: var1
        var0 = {};
        var6 = {};
        var1 = 1;
        var6.flex = var1;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 14;
        var7 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_BASE_LOW;
        var6.backgroundColor = var7;
        var0.root = var6;
        var7 = _closure1_slot7;
        var1 = var7.absoluteFillObject;
        var0.background = var1;
        var1 = {
            'justifyContent': 'center',
            'alignItems': 'center'
        };
        var6 = 'center';
        var8 = var5[var2];
        var8 = var4.bind(var3)(var8);
        var8 = var8.colors;
        var8 = var8.BACKGROUND_BASE_LOW;
        var1.backgroundColor = var8;
        var9 = var7.absoluteFillObject;
        var10 = var1;
        var7 = copyDataProperties(var10, var9);
        var0.loading = var1;
        var1 = {
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between'
        };
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var1.paddingRight = var7;
        var0.header = var1;
        var1 = {};
        var7 = 2;
        var1.flex = var7;
        var0.main = var1;
        var1 = {};
        var7 = 3;
        var1.flex = var7;
        var0.animation = var1;
        var1 = {
            'flex': 2,
            'flexDirection': 'column',
            'justifyContent': 'center'
        };
        var7 = var5[var2];
        var7 = var4.bind(var3)(var7);
        var7 = var7.spacing;
        var7 = var7.PX_16;
        var1.gap = var7;
        var0.body = var1;
        var1 = {};
        var1.textAlign = var6;
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_32;
        var1.marginHorizontal = var6;
        var0.title = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.spacing;
        var6 = var6.PX_24;
        var1.padding = var6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.spacing;
        var2 = var2.PX_16;
        var1.gap = var2;
        var0.buttonsContainer = var1;
        return var0;
    };
    var6 = var7.bind(var9)(var6);
    var _closure1_slot17 = var6;
    var6 = function() { // Original name: CancelButton, environment: var1
        var1 = _closure1_slot16;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var _closure2_slot0 = var4;
        var2 = _closure1_slot14;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 15;
        var0 = var9[var0];
        var0 = var8.bind(var3)(var0);
        var1 = var0.HeaderBackButton;
        var0 = {};
        var6 = function() { // Original name: onPress, environment: var5
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.popWithKey;
            var1 = 'QuestOrbsRewardModal';
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var6;
        var5 = function() { // Original name: backImage, environment: var5
            var3 = _closure1_slot14;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 16;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.XSmallIcon;
            var0 = {};
            var4 = 'lg';
            var0.size = var4;
            var4 = _closure2_slot0;
            var5 = var4.closeButtonIcon;
            var4 = new Array(1);
            var4[0] = var5;
            var0.style = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0.backImage = var5;
        var5 = 17;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.cpT0Cq;
        var5 = var6.bind(var7)(var5);
        var0.accessibilityLabel = var5;
        var5 = false;
        var0.labelVisible = var5;
        var4 = var4.closeButton;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var6;
    var7 = var8.memo;
    var6 = function(arg0) { // Environment: var1
        _fun78418: for (var _fun78418_ip = 0;;) switch (_fun78418_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.uri;
                var _closure2_slot0 = var7;
                var0 = var1.onLoad;
                var6 = var1.animate;
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun78418_ip = 34;
                    continue _fun78418
                }
            case 32:
                var6 = true;
            case 34:
                var8 = _closure1_slot5;
                var5 = var8.useEffect;
                var3 = new Array(1);
                var3[0] = var7;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.preload;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var5.bind(var8)(var2, var3);
                var3 = _closure1_slot14;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 18;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var5 = {};
                var5.uri = var7;
                var1.source = var5;
                var5 = {
                    'width': '100%',
                    'height': '100%'
                };
                var1.style = var5;
                var5 = 'cover';
                var1.resizeMode = var5;
                var1.enableAnimation = var6;
                var1.onLoad = var0;
                var0 = false;
                var1.usesSmallCache = var0;
                var1.fade = var0;
                var0 = global;
                var0 = var0.HermesInternal;
                var5 = var0.concat;
                var0 = 'orb-animate-';
                var0 = var5.bind(var0)(var6);
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var7 = var8.memo;
    var6 = function(arg0) { // Environment: var1
        _fun78420: for (var _fun78420_ip = 0;;) switch (_fun78420_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.uri;
                var4 = var0.onLoad;
                var13 = var0.animate;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun78420_ip = 30;
                    continue _fun78420
                }
            case 28:
                var13 = true;
            case 30:
                var _closure2_slot0 = var13;
                var _closure2_slot1 = var3;
                var6 = _closure1_slot5;
                var1 = var6.useRef;
                var0 = null;
                var6 = var1.bind(var6)(var0);
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 19;
                var9 = var7[var0];
                var10 = var1.bind(var3)(var9);
                var9 = var10.useAPNGPlayerControls;
                var12 = var9.bind(var10)(var6);
                _closure2_slot1 = var12;
                var11 = _closure1_slot5;
                var10 = var11.useEffect;
                var9 = new Array(2);
                var9[0] = var13;
                var9[1] = var12;
                var8 = function() { // Environment: var8
                    _fun78421: for (var _fun78421_ip = 0;;) switch (_fun78421_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            if (var0) {
                                _fun78421_ip = 26;
                                continue _fun78421
                            }
                        case 14:
                            var0 = var1.stop;
                            var0 = var0.bind(var1)();
                            _fun78421_ip = 36;
                            continue _fun78421;
                        case 26:
                            var0 = var1.play;
                            var0 = var0.bind(var1)();
                        case 36:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var10.bind(var11)(var8, var9);
                var2 = _closure1_slot14;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.APNGPlayer;
                var0 = {};
                var0.ref = var6;
                var0.url = var5;
                var5 = false;
                var0.autoplay = var5;
                var5 = {
                    'width': '100%',
                    'height': '100%'
                };
                var0.style = var5;
                var0.onLoad = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot19 = var6;
    var7 = var8.memo;
    var6 = function(arg0) { // Environment: var1
        _fun78422: for (var _fun78422_ip = 0;;) switch (_fun78422_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.uri;
                var5 = var0.style;
                var8 = var0.onLoad;
                var7 = var0.animate;
                var3 = undefined;
                if (!(var7 === var3)) {
                    _fun78422_ip = 33;
                    continue _fun78422
                }
            case 31:
                var7 = true;
            case 33:
                var2 = _closure1_slot14;
                var1 = _closure1_slot8;
                var0 = {
                    'style': null,
                    'renderToHardwareTextureAndroid': true,
                    'needsOffscreenAlphaCompositing': true
                };
                var0.style = var5;
                var6 = _closure1_slot14;
                var5 = _closure1_slot19;
                var4 = {};
                var4.uri = var9;
                var4.onLoad = var8;
                var4.animate = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot20 = var6;
    var7 = var8.memo;
    var6 = function(arg0) { // Environment: var1
        _fun78423: for (var _fun78423_ip = 0;;) switch (_fun78423_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.useReducedMotion;
                var10 = var0.style;
                var11 = var0.onStaticBgLoad;
                var9 = var0.onAnimatedBgLoad;
                var6 = var0.isAppActive;
                var3 = _closure1_slot15;
                var0 = _closure1_slot5;
                var2 = var0.Fragment;
                var1 = {};
                var8 = _closure1_slot14;
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var0 = 18;
                var4 = var16[var0];
                var0 = undefined;
                var7 = var15.bind(var0)(var4);
                var4 = {};
                var13 = {};
                var14 = 20;
                var14 = var16[var14];
                var14 = var15.bind(var0)(var14);
                var13.uri = var14;
                var4.source = var13;
                var4.style = var10;
                var13 = 'cover';
                var4.resizeMode = var13;
                var4.onLoad = var11;
                var7 = var8.bind(var0)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var5 = !var5;
                if (!var5) {
                    _fun78423_ip = 141;
                    continue _fun78423
                }
            case 138:
                var5 = var6;
            case 141:
                if (!var5) {
                    _fun78423_ip = 234;
                    continue _fun78423
                }
            case 144:
                var8 = _closure1_slot14;
                var7 = _closure1_slot0;
                var14 = _closure1_slot2;
                var6 = 21;
                var6 = var14[var6];
                var6 = var7.bind(var0)(var6);
                var7 = var6.VideoComponent;
                var6 = {
                    'source': null,
                    'style': null,
                    'resizeMode': 'cover',
                    'onLoad': null,
                    'disableFocus': true,
                    'playInBackground': true,
                    'preventsDisplaySleepDuringVideoPlayback': false
                };
                var11 = {};
                var13 = _closure1_slot1;
                var12 = 22;
                var12 = var14[var12];
                var12 = var13.bind(var0)(var12);
                var11.uri = var12;
                var6.source = var11;
                var6.style = var10;
                var6.onLoad = var9;
                var5 = var8.bind(var0)(var7, var6);
            case 234:
                var4[1] = var5;
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot21 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'height': '130%',
        'width': '130%',
        'left': '-15%',
        'top': '-15%',
        'pointerEvents': 'none'
    };
    var3.animatedOrb = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot22 = var3;
    var3 = 37;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestOrbsRewardModal.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: _default, environment: var1
        _fun78424: for (var _fun78424_ip = 0;;) switch (_fun78424_ip) {
            case 0:
                var0 = arg0;
                var28 = var0.quest;
                var25 = var0.orbBalancePriorToReward;
                var0 = _closure1_slot17;
                var3 = undefined;
                var13 = var0.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 25;
                var1 = var4[var0];
                var7 = var2.bind(var3)(var1);
                var6 = var7.useStateFromStores;
                var1 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var26
                    var0 = _closure1_slot9;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var22 = var6.bind(var7)(var5, var1);
                var1 = 26;
                var1 = var4[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useFetchVirtualCurrencyBalance;
                var1 = var1.bind(var5)();
                var23 = var1.balance;
                var5 = _closure1_slot5;
                var1 = var5.useState;
                var9 = false;
                var5 = var1.bind(var5)(var9);
                var1 = _closure1_slot3;
                var8 = 2;
                var1 = var1.bind(var3)(var5, var8);
                var27 = 0;
                var5 = var1[var27];
                var6 = 1;
                var1 = var1[var6];
                var _closure2_slot0 = var1;
                var7 = _closure1_slot5;
                var1 = var7.useState;
                var7 = var1.bind(var7)(var9);
                var1 = _closure1_slot3;
                var1 = var1.bind(var3)(var7, var8);
                var7 = var1[var27];
                var1 = var1[var6];
                var _closure2_slot1 = var1;
                var0 = var4[var0];
                var8 = var2.bind(var3)(var0);
                var6 = var8.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var26
                    var1 = _closure1_slot10;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var6.bind(var8)(var1, var0);
                var0 = 27;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var0 = var0.AppStates;
                var0 = var0.ACTIVE;
                var19 = var1 === var0;
                var4 = _closure1_slot5;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var26
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 28;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.lockOrientation;
                    var0 = _closure1_slot12;
                    var0 = var0.PORTRAIT;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 28;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.restoreDefaultOrientation;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var2.bind(var4)(var1, var0);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var26
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var10 = var2.bind(var4)(var1, var0);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var26
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var9 = var2.bind(var4)(var1, var0);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var26
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 10;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var6.bind(var0)(var1);
                    var2 = var3.popWithKey;
                    var1 = 'QuestOrbsRewardModal';
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure1_slot0;
                    var1 = 29;
                    var1 = var7[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var5 = 30;
                    var8 = var7[var5];
                    var8 = var6.bind(var0)(var8);
                    var9 = var8.MOBILE_ORBS_REWARD_CLAIM_MODAL;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var1.analyticsLocations = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.MOBILE_ORBS_REWARD_CLAIM_MODAL;
                    var1.analyticsSource = var5;
                    var4 = _closure1_slot13;
                    var4 = var4.ORBS;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var8 = var2.bind(var4)(var1, var0);
                var4 = _closure1_slot5;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var26
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var1 = var3[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var2 = var5.popWithKey;
                    var1 = 'QuestOrbsRewardModal';
                    var1 = var2.bind(var5)(var1);
                    var2 = _closure1_slot0;
                    var1 = 31;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openQuestHome;
                    var1 = {};
                    var4 = _closure1_slot11;
                    var4 = var4.VIRTUAL_CURRENCY;
                    var1.filter = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var2 = var2.bind(var4)(var1, var0);
                var29 = null;
                var0 = var29 != var23;
                var1 = 0;
                if (!var0) {
                    _fun78424_ip = 401;
                    continue _fun78424
                }
            case 398:
                var1 = var23;
            case 401:
                var0 = 4100;
                var21 = var1 >= var0;
                var0 = {};
                var1 = {};
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var20 = 17;
                var11 = var4[var20];
                var11 = var6.bind(var3)(var11);
                var11 = var11.t;
                if (var21) {
                    _fun78424_ip = 504;
                    continue _fun78424
                }
            case 443:
                var12 = var11.uJAMFX;
                var1.text = var12;
                var1.handler = var2;
                var0.primary = var1;
                var12 = {};
                var14 = var4[var20];
                var14 = var6.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.GPdvqY;
                var12.text = var14;
                var12.handler = var8;
                var0.secondary = var12;
                var17 = var0;
                _fun78424_ip = 563;
                continue _fun78424;
            case 504:
                var11 = var11.GPdvqY;
                var1.text = var11;
                var1.handler = var8;
                var0.primary = var1;
                var1 = {};
                var4 = var4[var20];
                var4 = var6.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.uJAMFX;
                var1.text = var4;
                var1.handler = var2;
                var0.secondary = var1;
                var17 = var0;
            case 563:
                var2 = _closure1_slot15;
                var1 = _closure1_slot8;
                var0 = {};
                var4 = var13.root;
                var0.style = var4;
                var8 = _closure1_slot14;
                var6 = _closure1_slot21;
                var4 = {};
                var4.useReducedMotion = var22;
                var11 = var13.background;
                var4.style = var11;
                var4.onStaticBgLoad = var10;
                var4.onAnimatedBgLoad = var9;
                var4.isAppActive = var19;
                var6 = var8.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var6 = !var5;
                if (!var6) {
                    _fun78424_ip = 655;
                    continue _fun78424
                }
            case 643:
                var8 = var22;
                if (var8) {
                    _fun78424_ip = 652;
                    continue _fun78424
                }
            case 649:
                var8 = !var7;
            case 652:
                var6 = var8;
            case 655:
                if (!var6) {
                    _fun78424_ip = 711;
                    continue _fun78424
                }
            case 658:
                var10 = _closure1_slot14;
                var9 = _closure1_slot8;
                var8 = {};
                var11 = var13.loading;
                var8.style = var11;
                var14 = _closure1_slot14;
                var12 = _closure1_slot6;
                var11 = {};
                var16 = true;
                var11.animating = var16;
                var11 = var14.bind(var3)(var12, var11);
                var8.children = var11;
                var6 = var10.bind(var3)(var9, var8);
            case 711:
                var4[1] = var6;
                if (var5) {
                    _fun78424_ip = 730;
                    continue _fun78424
                }
            case 718:
                var6 = !var22;
                if (!var6) {
                    _fun78424_ip = 727;
                    continue _fun78424
                }
            case 724:
                var6 = var7;
            case 727:
                var5 = var6;
            case 730:
                if (!var5) {
                    _fun78424_ip = 1629;
                    continue _fun78424
                }
            case 736:
                var8 = _closure1_slot15;
                var16 = _closure1_slot0;
                var24 = _closure1_slot2;
                var6 = 32;
                var6 = var24[var6];
                var6 = var16.bind(var3)(var6);
                var7 = var6.SafeAreaPaddingView;
                var6 = {
                    'style': null,
                    'top': true,
                    'bottom': true,
                    'left': true,
                    'right': true
                };
                var10 = var13.main;
                var9 = new Array(1);
                var9[0] = var10;
                var6.style = var9;
                var11 = _closure1_slot15;
                var10 = _closure1_slot8;
                var9 = {};
                var12 = var13.header;
                var9.style = var12;
                var18 = _closure1_slot14;
                var14 = _closure1_slot18;
                var12 = {};
                var14 = var18.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var18 = _closure1_slot14;
                var14 = 33;
                var14 = var24[var14];
                var14 = var16.bind(var3)(var14);
                var16 = var14.BalanceWidgetPill;
                var14 = {
                    'initialRenderedBalance': null,
                    'balance': null,
                    'animateBalanceChanges': true,
                    'onPress': null,
                    'disabled': true,
                    'variant': 'secondary'
                };
                var24 = var23;
                if (!(var29 != var25)) {
                    _fun78424_ip = 889;
                    continue _fun78424
                }
            case 886:
                var24 = var25;
            case 889:
                var14.initialRenderedBalance = var24;
                var14.balance = var23;
                var23 = function() { // Original name: onPress, environment: var26
                    var0 = undefined;
                    return var0;
                };
                var14.onPress = var23;
                var14 = var18.bind(var3)(var16, var14);
                var12[1] = var14;
                var9.children = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(4);
                var9[0] = var10;
                var12 = _closure1_slot14;
                var11 = _closure1_slot8;
                var10 = {};
                var14 = var13.animation;
                var10.style = var14;
                var18 = _closure1_slot14;
                var16 = _closure1_slot23;
                var14 = {};
                var14.useReducedMotion = var22;
                var14.isAppActive = var19;
                var14 = var18.bind(var3)(var16, var14);
                var10.children = var14;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var12 = _closure1_slot15;
                var11 = _closure1_slot8;
                var10 = {};
                var14 = var13.body;
                var10.style = var14;
                var18 = _closure1_slot14;
                var31 = _closure1_slot0;
                var32 = _closure1_slot2;
                var22 = 34;
                var14 = var32[var22];
                var14 = var31.bind(var3)(var14);
                var16 = var14.Text;
                var14 = {
                    'variant': 'heading-xl/bold',
                    'color': 'white'
                };
                var19 = var13.title;
                var14.style = var19;
                var19 = var32[var20];
                var19 = var31.bind(var3)(var19);
                var25 = var19.intl;
                var24 = var25.format;
                var19 = var32[var20];
                var19 = var31.bind(var3)(var19);
                var19 = var19.t;
                var23 = var19.FIilK5;
                var19 = {};
                var30 = 35;
                var30 = var32[var30];
                var31 = var31.bind(var3)(var30);
                var30 = var31.getVirtualCurrencyRewardOrbQuantity;
                var28 = var28.config;
                var28 = var30.bind(var31)(var28);
                var29 = var29 != var28;
                var27 = 0;
                if (!var29) {
                    _fun78424_ip = 1156;
                    continue _fun78424
                }
            case 1153:
                var27 = var28;
            case 1156:
                var19.count = var27;
                var19 = var24.bind(var25)(var23, var19);
                var14.children = var19;
                var16 = var18.bind(var3)(var16, var14);
                var14 = new Array(2);
                var14[0] = var16;
                var19 = _closure1_slot14;
                var18 = _closure1_slot0;
                var16 = _closure1_slot2;
                var16 = var16[var22];
                var16 = var18.bind(var3)(var16);
                var18 = var16.Text;
                var16 = {
                    'variant': 'text-md/normal',
                    'color': 'white'
                };
                var22 = var13.title;
                var16.style = var22;
                var23 = _closure1_slot0;
                var22 = _closure1_slot2;
                var24 = var22[var20];
                var24 = var23.bind(var3)(var24);
                var25 = var24.intl;
                if (var21) {
                    _fun78424_ip = 1293;
                    continue _fun78424
                }
            case 1259:
                var24 = var25.string;
                var21 = var22[var20];
                var21 = var23.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["97ztVq"];
                var21 = var24.bind(var25)(var21);
                _fun78424_ip = 1342;
                continue _fun78424;
            case 1293:
                var24 = var25.format;
                var22 = var22[var20];
                var22 = var23.bind(var3)(var22);
                var22 = var22.t;
                var23 = var22.Heldhm;
                var22 = {};
                var26 = function() { // Original name: profileDecoHook, environment: var26
                    var3 = _closure1_slot14;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 34;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'variant': 'text-md/semibold',
                        'color': 'white'
                    };
                    var4 = 17;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.pGDUH9;
                    var4 = var5.bind(var6)(var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var22.profileDecoHook = var26;
                var21 = var24.bind(var25)(var23, var22);
            case 1342:
                var16.children = var21;
                var16 = var19.bind(var3)(var18, var16);
                var14[1] = var16;
                var10.children = var14;
                var10 = var12.bind(var3)(var11, var10);
                var9[2] = var10;
                var12 = _closure1_slot15;
                var11 = _closure1_slot8;
                var10 = {};
                var13 = var13.buttonsContainer;
                var10.style = var13;
                var21 = _closure1_slot14;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 36;
                var13 = var18[var14];
                var13 = var19.bind(var3)(var13);
                var16 = var13.Button;
                var13 = {
                    'onPress': null,
                    'variant': 'primary',
                    'size': 'lg'
                };
                var22 = var17.primary;
                var22 = var22.handler;
                var13.onPress = var22;
                var22 = var18[var20];
                var22 = var19.bind(var3)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var17.primary;
                var22 = var22.text;
                var22 = var23.bind(var24)(var22);
                var13.text = var22;
                var16 = var21.bind(var3)(var16, var13);
                var13 = new Array(2);
                var13[0] = var16;
                var16 = _closure1_slot14;
                var14 = var18[var14];
                var14 = var19.bind(var3)(var14);
                var15 = var14.Button;
                var14 = {
                    'onPress': null,
                    'variant': 'secondary',
                    'size': 'lg'
                };
                var21 = var17.secondary;
                var21 = var21.handler;
                var14.onPress = var21;
                var18 = var18[var20];
                var18 = var19.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var17.secondary;
                var17 = var17.text;
                var17 = var18.bind(var19)(var17);
                var14.text = var17;
                var14 = var16.bind(var3)(var15, var14);
                var13[1] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[3] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 1629:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var6 = var0.quest;
        var1 = var0.orbBalancePriorToReward;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var0 = 10;
        var3 = var3[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var3 = _closure1_slot4;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun78437: for (var _fun78437_ip = 0;;) switch (_fun78437_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun78437_ip = 71;
                            continue _fun78437
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 12;
                        var2 = var1[var2];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var2);
                        var2 = 11;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var3.bind(var4)(var2, var1);
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun78437_ip = 68;
                            continue _fun78437
                        }
                    case 60:
                        var2 = var1.default;
                        return var2;
                    case 68:
                        return var1;
                    case 71:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var0)(var2);
        var2 = {};
        var2.quest = var6;
        var2.orbBalancePriorToReward = var1;
        var1 = 'QuestOrbsRewardModal';
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.openQuestOrbsRewardModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1298, 5239, 5184, 660, 3242, 33, 4518, 9948, 1307, 1297, 671, 4665, 4688, 1234, 4660, 6868, 9949, 8796, 9950, 9951, 9952, 566, 9953, 670, 7777, 4554, 5536, 9933, 4690, 9491, 4832, 5242, 4037, 2]);