// modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
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
        'display': 'flex',
        'alignItems': 'flex-end',
        'justifyContent': 'center',
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = {};
    var9 = 300;
    var8.height = var9;
    var3.consistentHeight = var8;
    var8 = {
        'maxWidth': 375,
        'width': '100%',
        'height': 'auto'
    };
    var3.animation = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0
    };
    var3.baseAnimation = var8;
    var8 = {};
    var9 = 275;
    var8.height = var9;
    var3.lottie = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/native/gifting/PremiumGiftBackgroundAnimation.android.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PremiumGiftBackgroundAnimation, environment: var1
        _fun75121: for (var _fun75121_ip = 0;;) switch (_fun75121_ip) {
            case 0:
                var1 = arg0;
                var26 = var1.giftStyle;
                var _closure2_slot0 = var26;
                var5 = var1.withConsistentHeight;
                var1 = _closure1_slot9;
                var3 = undefined;
                var18 = var1.bind(var3)();
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 6;
                var1 = var6[var1];
                var8 = var7.bind(var3)(var1);
                var4 = var8.useStateFromStores;
                var1 = _closure1_slot6;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var8 = var4.bind(var8)(var2, var1);
                var _closure2_slot1 = var8;
                var4 = _closure1_slot4;
                var1 = var4.useRef;
                var2 = null;
                var25 = var1.bind(var4)(var2);
                var _closure2_slot2 = var25;
                var1 = var4.useRef;
                var13 = var1.bind(var4)(var2);
                var _closure2_slot3 = var13;
                var2 = var4.useState;
                var12 = 7;
                var1 = var6[var12];
                var1 = var7.bind(var3)(var1);
                var1 = var1.AnimationState;
                var1 = var1.ACTION;
                var1 = var2.bind(var4)(var1);
                var15 = _closure1_slot3;
                var11 = 2;
                var1 = var15.bind(var3)(var1, var11);
                var21 = 0;
                var10 = var1[var21];
                var _closure2_slot4 = var10;
                var19 = 1;
                var1 = var1[var19];
                var _closure2_slot5 = var1;
                var1 = var4.useState;
                var1 = var1.bind(var4)(var3);
                var1 = var15.bind(var3)(var1, var11);
                var20 = var1[var21];
                var _closure2_slot6 = var20;
                var1 = var1[var19];
                var _closure2_slot7 = var1;
                var1 = var4.useState;
                var1 = var1.bind(var4)(var3);
                var1 = var15.bind(var3)(var1, var11);
                var2 = var1[var21];
                var _closure2_slot8 = var2;
                var1 = var1[var19];
                var _closure2_slot9 = var1;
                var1 = var4.useState;
                var14 = false;
                var1 = var1.bind(var4)(var14);
                var11 = var15.bind(var3)(var1, var11);
                var1 = var11[var21];
                var _closure2_slot10 = var1;
                var11 = var11[var19];
                var _closure2_slot11 = var11;
                var16 = var4.useMemo;
                var15 = new Array(1);
                var15[0] = var26;
                var11 = function() { // Environment: var0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 8;
                    var0 = var6[var0];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var0);
                    var2 = var3.getGiftAnimationData;
                    var1 = _closure2_slot0;
                    var0 = 7;
                    var0 = var6[var0];
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.AnimationState;
                    var0 = var0.ACTION;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var24 = var16.bind(var4)(var11, var15);
                var16 = var4.useMemo;
                var15 = new Array(1);
                var15[0] = var26;
                var11 = function() { // Environment: var0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 8;
                    var0 = var6[var0];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var0);
                    var2 = var3.getGiftAnimationData;
                    var1 = _closure2_slot0;
                    var0 = 7;
                    var0 = var6[var0];
                    var0 = var5.bind(var4)(var0);
                    var0 = var0.AnimationState;
                    var0 = var0.LOOP;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var11 = var16.bind(var4)(var11, var15);
                var17 = 8;
                var6 = var6[var17];
                var7 = var7.bind(var3)(var6);
                var6 = var7.getLottieType;
                var15 = var6.bind(var7)(var26);
                var7 = var4.useMemo;
                var6 = new Array(4);
                var6[0] = var2;
                var6[1] = var20;
                var6[2] = var26;
                var6[3] = var10;
                var2 = function() { // Environment: var0
                    _fun75125: for (var _fun75125_ip = 0;;) switch (_fun75125_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = _closure2_slot0;
                            if (!(var2 !== var0)) {
                                _fun75125_ip = 133;
                                continue _fun75125
                            }
                        case 15:
                            var3 = _closure2_slot7;
                            var0 = _closure2_slot0;
                            var2 = undefined;
                            var0 = var3.bind(var2)(var0);
                            var5 = _closure2_slot11;
                            var6 = _closure2_slot4;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var4 = 7;
                            var3 = var3[var4];
                            var3 = var7.bind(var2)(var3);
                            var3 = var3.AnimationState;
                            var3 = var3.LOOP;
                            var3 = var6 !== var3;
                            if (!var3) {
                                _fun75125_ip = 90;
                                continue _fun75125
                            }
                        case 80:
                            var7 = _closure2_slot8;
                            var6 = null;
                            var3 = var6 != var7;
                        case 90:
                            var3 = var5.bind(var2)(var3);
                            var1 = _closure2_slot5;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var4];
                            var0 = var3.bind(var2)(var0);
                            var0 = var0.AnimationState;
                            var0 = var0.ACTION;
                            var0 = var1.bind(var2)(var0);
                        case 133:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var4)(var2, var6);
                var6 = var4.useCallback;
                var2 = new Array(2);
                var2[0] = var10;
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun75126: for (var _fun75126_ip = 0;;) switch (_fun75126_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot10;
                            if (var1) {
                                _fun75126_ip = 140;
                                continue _fun75126
                            }
                        case 16:
                            var6 = _closure2_slot4;
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = 7;
                            var2 = var2[var5];
                            var3 = undefined;
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.AnimationState;
                            var2 = var2.LOOP;
                            var2 = var6 === var2;
                            if (var2) {
                                _fun75126_ip = 67;
                                continue _fun75126
                            }
                        case 64:
                            var2 = var4;
                        case 67:
                            if (var2) {
                                _fun75126_ip = 153;
                                continue _fun75126
                            }
                        case 70:
                            var6 = _closure2_slot9;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var2 = var1[var5];
                            var2 = var4.bind(var3)(var2);
                            var2 = var2.AnimationState;
                            var2 = var2.ACTION;
                            var2 = var6.bind(var3)(var2);
                            var2 = _closure2_slot5;
                            var1 = var1[var5];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.AnimationState;
                            var1 = var1.LOOP;
                            var1 = var2.bind(var3)(var1);
                            _fun75126_ip = 153;
                            continue _fun75126;
                        case 140:
                            var2 = _closure2_slot11;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                        case 153:
                            var0 = undefined;
                            return var0;
                    }
                };
                var23 = var6.bind(var4)(var1, var2);
                var6 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var10;
                var1 = function() { // Environment: var0
                    _fun75127: for (var _fun75127_ip = 0;;) switch (_fun75127_ip) {
                        case 0:
                            var3 = _closure2_slot4;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 7;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.AnimationState;
                            var2 = var2.LOOP;
                            if (!(var3 !== var2)) {
                                _fun75127_ip = 75;
                                continue _fun75127
                            }
                        case 48:
                            var2 = _closure2_slot3;
                            var3 = var2.current;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun75127_ip = 100;
                                continue _fun75127
                            }
                        case 63:
                            var2 = var3.reset;
                            var2 = var2.bind(var3)();
                            _fun75127_ip = 100;
                            continue _fun75127;
                        case 75:
                            var1 = _closure2_slot2;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun75127_ip = 100;
                                continue _fun75127
                            }
                        case 90:
                            var1 = var2.reset;
                            var1 = var1.bind(var2)();
                        case 100:
                            return var0;
                    }
                };
                var1 = var6.bind(var4)(var1, var2);
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    _fun75128: for (var _fun75128_ip = 0;;) switch (_fun75128_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun75128_ip = 35;
                                continue _fun75128
                            }
                        case 10:
                            var0 = _closure2_slot2;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun75128_ip = 35;
                                continue _fun75128
                            }
                        case 25:
                            var0 = var1.reset;
                            var0 = var0.bind(var1)();
                        case 35:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot8;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var18.container;
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun75121_ip = 515;
                    continue _fun75121
                }
            case 509:
                var5 = var18.consistentHeight;
            case 515:
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var22 = _closure1_slot2;
                var5 = 9;
                var4 = var22[var5];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var27 = var18.baseAnimation;
                var16 = new Array(4);
                var16[0] = var27;
                var27 = var18.animation;
                var16[1] = var27;
                var27 = _closure1_slot0;
                var22 = var22[var17];
                var22 = var27.bind(var3)(var22);
                var22 = var22.LottieType;
                var22 = var22.LOTTIE;
                var22 = var15 === var22;
                if (!var22) {
                    _fun75121_ip = 611;
                    continue _fun75121
                }
            case 605:
                var22 = var18.lottie;
            case 611:
                var16[2] = var22;
                var22 = {};
                var20 = var20 === var26;
                var26 = 0;
                if (!var20) {
                    _fun75121_ip = 664;
                    continue _fun75121
                }
            case 626:
                var28 = _closure1_slot0;
                var27 = _closure1_slot2;
                var27 = var27[var12];
                var27 = var28.bind(var3)(var27);
                var27 = var27.AnimationState;
                var27 = var27.LOOP;
                var26 = 0;
                if (!(var10 !== var27)) {
                    _fun75121_ip = 664;
                    continue _fun75121
                }
            case 661:
                var26 = var19;
            case 664:
                var22.opacity = var26;
                var16[3] = var22;
                var4.style = var16;
                var22 = _closure1_slot0;
                var16 = _closure1_slot2;
                var26 = var16[var17];
                var26 = var22.bind(var3)(var26);
                var26 = var26.LottieType;
                var26 = var26.LOTTIE;
                var26 = var15 === var26;
                var4.hardwareAccelerationAndroid = var26;
                var4.ref = var25;
                var4.source = var24;
                var24 = !var8;
                var4.autoPlay = var24;
                var4.onAnimationFinish = var23;
                var4.loop = var14;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var5 = var16[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var23 = var18.animation;
                var14 = new Array(3);
                var14[0] = var23;
                var16 = var16[var17];
                var16 = var22.bind(var3)(var16);
                var16 = var16.LottieType;
                var16 = var16.LOTTIE;
                var16 = var15 === var16;
                if (!var16) {
                    _fun75121_ip = 821;
                    continue _fun75121
                }
            case 815:
                var16 = var18.lottie;
            case 821:
                var14[1] = var16;
                var16 = {};
                var18 = 0;
                if (!var20) {
                    _fun75121_ip = 870;
                    continue _fun75121
                }
            case 832:
                var22 = _closure1_slot0;
                var20 = _closure1_slot2;
                var20 = var20[var12];
                var20 = var22.bind(var3)(var20);
                var20 = var20.AnimationState;
                var20 = var20.LOOP;
                var18 = 0;
                if (!(var10 === var20)) {
                    _fun75121_ip = 870;
                    continue _fun75121
                }
            case 867:
                var18 = var19;
            case 870:
                var16.opacity = var18;
                var14[2] = var16;
                var5.style = var14;
                var16 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var17];
                var14 = var16.bind(var3)(var14);
                var14 = var14.LottieType;
                var14 = var14.LOTTIE;
                var14 = var15 === var14;
                var5.hardwareAccelerationAndroid = var14;
                var5.ref = var13;
                var5.source = var11;
                var8 = !var8;
                if (!var8) {
                    _fun75121_ip = 967;
                    continue _fun75121
                }
            case 934:
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var12];
                var9 = var11.bind(var3)(var9);
                var9 = var9.AnimationState;
                var9 = var9.LOOP;
                var8 = var10 === var9;
            case 967:
                var5.autoPlay = var8;
                var8 = true;
                var5.loop = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 33, 1297, 566, 9443, 9444, 6557, 2]);