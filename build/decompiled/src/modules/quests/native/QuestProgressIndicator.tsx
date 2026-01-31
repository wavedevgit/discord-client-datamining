// modules/quests/native/QuestProgressIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var8 = var6.useMemo;
    var _closure1_slot3 = var8;
    var8 = var6.useEffect;
    var _closure1_slot4 = var8;
    var6 = var6.useRef;
    var _closure1_slot5 = var6;
    var3 = var5[var3];
    var6 = var7.bind(var0)(var3);
    var _closure1_slot6 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot9 = var8;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = ['#666777', '#535564'];
    var _closure1_slot11 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var7.bind(var0)(var3);
    var7 = var8.createAnimatedComponent;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Circle;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = function(arg0) { // Environment: var1
        var3 = arg0;
        var0 = {};
        var1 = {};
        var2 = 'relative';
        var1.position = var2;
        var0.wrapper = var1;
        var1 = {
            'position': 'relative',
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'zIndex': 1
        };
        var0.container = var1;
        var1 = {
            'shadowOffset': null,
            'shadowRadius': 20,
            'shadowOpacity': 0,
            'elevation': 4,
            'shadowColor': '#30C77399'
        };
        var2 = {
            'width': 0,
            'height': 0
        };
        var1.shadowOffset = var2;
        var0.completionGlow = var1;
        var1 = {};
        var4 = {};
        var2 = '-90deg';
        var4.rotate = var2;
        var2 = new Array(1);
        var2[0] = var4;
        var1.transform = var2;
        var0.canvas = var1;
        var1 = {};
        var2 = 'absolute';
        var1.position = var2;
        var2 = 0.78;
        var4 = var2 * var3;
        var1.height = var4;
        var2 = var2 * var3;
        var1.width = var2;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 7;
        var6 = var5[var2];
        var3 = undefined;
        var6 = var4.bind(var3)(var6);
        var6 = var6.radii;
        var6 = var6.round;
        var1.borderRadius = var6;
        var6 = 'hidden';
        var1.overflow = var6;
        var0.imageContainer = var1;
        var1 = {
            'height': '100%',
            'width': '100%'
        };
        var0.image = var1;
        var1 = {};
        var6 = var5[var2];
        var6 = var4.bind(var3)(var6);
        var6 = var6.unsafe_rawColors;
        var6 = var6.GREEN_300;
        var1.color = var6;
        var0.progressPath = var1;
        var1 = {
            'position': 'absolute',
            'pointerEvents': 'none'
        };
        var0.confetti = var1;
        var1 = {
            'backgroundColor': null,
            'position': 'absolute',
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
            'zIndex': 2
        };
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.colors;
        var2 = var2.CARD_BACKGROUND_DEFAULT;
        var1.backgroundColor = var2;
        var0.opacityMask = var1;
        return var0;
    };
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function QuestProgressIndicatorTsx1(){const{styles,glowOpacity}=this.__closure;return{...styles.completionGlow,shadowOpacity:glowOpacity.get()};}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = {};
    var7 = 'function QuestProgressIndicatorTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}';
    var3.code = var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var7 = 'function QuestProgressIndicatorTsx3(){const{underlayOpacity,styles}=this.__closure;return{opacity:underlayOpacity.get(),...styles.opacityMask};}';
    var3.code = var7;
    var _closure1_slot16 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun83574: for (var _fun83574_ip = 0;;) switch (_fun83574_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.quest;
                var8 = var1.size;
                var19 = var1.progress;
                var _closure2_slot0 = var19;
                var10 = var1.loading;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun83574_ip = 40;
                    continue _fun83574
                }
            case 38:
                var10 = false;
            case 40:
                var _closure2_slot1 = var10;
                var12 = var1.hasConfetti;
                if (!(var12 === var3)) {
                    _fun83574_ip = 56;
                    continue _fun83574
                }
            case 54:
                var12 = false;
            case 56:
                var16 = var1.withAnimation;
                var5 = var1.onPress;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var1 = var2[var1];
                var9 = var6.bind(var3)(var1);
                var7 = var9.useStateFromStores;
                var1 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot8;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var4 = var7.bind(var9)(var4, var1);
                _closure2_slot2 = var4;
                var7 = 4;
                var1 = {
                    'x-sm': 3,
                    'sm': 3,
                    'md': 3,
                    'md-lg': 4,
                    'lg': 6
                };
                var27 = var1[var8];
                var1 = {
                    'x-sm': 40,
                    'sm': 64,
                    'md': 70,
                    'md-lg': 100,
                    'lg': 128
                };
                var18 = var1[var8];
                _closure2_slot3 = var18;
                var38 = 1;
                var1 = {
                    'x-sm': 1.6,
                    'sm': 1,
                    'md': 1.4,
                    'md-lg': 1.5,
                    'lg': 1.6
                };
                var1 = var1[var8];
                _closure2_slot4 = var1;
                var30 = 2;
                var9 = var18 / var30;
                var8 = var27 / var30;
                var29 = var9 - var8;
                var8 = global;
                var8 = var8.Math;
                var8 = var8.PI;
                var8 = var30 * var8;
                var26 = var8 * var29;
                _closure2_slot5 = var26;
                var8 = _closure1_slot13;
                var15 = var8.bind(var3)(var18);
                _closure2_slot6 = var15;
                var8 = var2[var7];
                var9 = var6.bind(var3)(var8);
                var8 = var9.useSharedValue;
                var22 = var8.bind(var9)(var19);
                _closure2_slot7 = var22;
                var2 = var2[var7];
                var8 = var6.bind(var3)(var2);
                var6 = var8.useSharedValue;
                var36 = 0;
                var2 = 0;
                if (!var10) {
                    _fun83574_ip = 342;
                    continue _fun83574
                }
            case 332:
                var2 = 0.7;
            case 342:
                var20 = var6.bind(var8)(var2);
                _closure2_slot8 = var20;
                var6 = var17.userStatus;
                var11 = null;
                var8 = var11 == var6;
                var2 = undefined;
                if (var8) {
                    _fun83574_ip = 374;
                    continue _fun83574
                }
            case 368:
                var2 = var6.completedAt;
            case 374:
                var8 = var11 != var2;
                _closure2_slot9 = var8;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var9 = var6.bind(var3)(var2);
                var6 = var9.useSharedValue;
                var2 = 0;
                if (!var8) {
                    _fun83574_ip = 413;
                    continue _fun83574
                }
            case 410:
                var2 = var38;
            case 413:
                var6 = var6.bind(var9)(var2);
                _closure2_slot10 = var6;
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var13 = var2[var7];
                var23 = var9.bind(var3)(var13);
                var21 = var23.useAnimatedStyle;
                var13 = function() {
                    var0 = {};
                    var2 = _closure2_slot6;
                    var3 = var2.completionGlow;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot10;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 'shadowOpacity';
                    var0[var1] = var2;
                    return var0;
                };
                var24 = {};
                var24.styles = var15;
                var24.glowOpacity = var6;
                var13.__closure = var24;
                var24 = 6810183053526.0;
                var13.__workletHash = var24;
                var24 = _closure1_slot14;
                var13.__initData = var24;
                var13 = var21.bind(var23)(var13);
                var21 = var2[var7];
                var24 = var9.bind(var3)(var21);
                var23 = var24.useAnimatedProps;
                var21 = function() {
                    var0 = {};
                    var2 = _closure2_slot5;
                    var3 = _closure2_slot7;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var2 * var1;
                    var1 = var2 - var1;
                    var0.strokeDashoffset = var1;
                    return var0;
                };
                var25 = {};
                var25.circumference = var26;
                var25.animatedProgress = var22;
                var21.__closure = var25;
                var25 = 17281152506254.0;
                var21.__workletHash = var25;
                var25 = _closure1_slot15;
                var21.__initData = var25;
                var25 = var23.bind(var24)(var21);
                var2 = var2[var7];
                var21 = var9.bind(var3)(var2);
                var9 = var21.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.opacity = var2;
                    var1 = _closure2_slot6;
                    var4 = var1.opacityMask;
                    var5 = var0;
                    var1 = copyDataProperties(var5, var4);
                    return var0;
                };
                var23 = {};
                var23.underlayOpacity = var20;
                var23.styles = var15;
                var2.__closure = var23;
                var23 = 4427598698568.0;
                var2.__workletHash = var23;
                var23 = _closure1_slot16;
                var2.__initData = var23;
                var9 = var9.bind(var21)(var2);
                var2 = _closure1_slot4;
                var21 = new Array(3);
                var21[0] = var22;
                var21[1] = var19;
                var21[2] = var4;
                var19 = function() { // Environment: var0
                    _fun83579: for (var _fun83579_ip = 0;;) switch (_fun83579_ip) {
                        case 0:
                            var2 = _closure2_slot7;
                            var1 = var2.set;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 9;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.withTiming;
                            var3 = _closure2_slot0;
                            var0 = {};
                            var7 = _closure2_slot2;
                            var6 = 500;
                            if (!var7) {
                                _fun83579_ip = 63;
                                continue _fun83579
                            }
                        case 61:
                            var6 = 0;
                        case 63:
                            var0.duration = var6;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 4;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.cancelAnimation;
                                var1 = _closure2_slot7;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var19 = var2.bind(var3)(var19, var21);
                var19 = new Array(2);
                var19[0] = var20;
                var19[1] = var10;
                var10 = function() { // Environment: var0
                    _fun83581: for (var _fun83581_ip = 0;;) switch (_fun83581_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = var2.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 9;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.withTiming;
                            var0 = _closure2_slot1;
                            var3 = 0;
                            if (!var0) {
                                _fun83581_ip = 61;
                                continue _fun83581
                            }
                        case 51:
                            var3 = 0.7;
                        case 61:
                            var0 = {};
                            var6 = 500;
                            var0.duration = var6;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = var1.bind(var2)(var0);
                            var0 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 4;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.cancelAnimation;
                                var1 = _closure2_slot8;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var10 = var2.bind(var3)(var10, var19);
                var10 = _closure1_slot5;
                var21 = var10.bind(var3)(var11);
                _closure2_slot11 = var21;
                var19 = _closure1_slot3;
                var20 = var15.confetti;
                var10 = new Array(3);
                var10[0] = var20;
                var10[1] = var1;
                var10[2] = var18;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure2_slot6;
                    var4 = var1.confetti;
                    var5 = var0;
                    var1 = copyDataProperties(var5, var4);
                    var3 = _closure2_slot3;
                    var1 = 'width';
                    var0[var1] = var3;
                    var3 = _closure2_slot3;
                    var1 = 'height';
                    var0[var1] = var3;
                    var1 = {};
                    var2 = _closure2_slot4;
                    var1.scale = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'transform';
                    var0[var1] = var2;
                    return var0;
                };
                var20 = var19.bind(var3)(var1, var10);
                var1 = new Array(3);
                var1[0] = var8;
                var1[1] = var6;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun83584: for (var _fun83584_ip = 0;;) switch (_fun83584_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun83584_ip = 119;
                                continue _fun83584
                            }
                        case 10:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun83584_ip = 119;
                                continue _fun83584
                            }
                        case 17:
                            var1 = _closure2_slot9;
                            if (!var1) {
                                _fun83584_ip = 160;
                                continue _fun83584
                            }
                        case 27:
                            var3 = _closure2_slot10;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 9;
                            var4 = var4[var1];
                            var1 = undefined;
                            var6 = var5.bind(var1)(var4);
                            var5 = var6.withTiming;
                            var4 = {};
                            var1 = 500;
                            var4.duration = var1;
                            var1 = 1;
                            var1 = var5.bind(var6)(var1, var4);
                            var1 = var2.bind(var3)(var1);
                            var1 = _closure2_slot11;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun83584_ip = 160;
                                continue _fun83584
                            }
                        case 107:
                            var1 = var2.play;
                            var1 = var1.bind(var2)();
                            _fun83584_ip = 160;
                            continue _fun83584;
                        case 119:
                            var3 = _closure2_slot10;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var0 = _closure2_slot11;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun83584_ip = 160;
                                continue _fun83584
                            }
                        case 150:
                            var0 = var1.reset;
                            var0 = var0.bind(var1)();
                        case 160:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                if (!(var11 != var5)) {
                    _fun83574_ip = 822;
                    continue _fun83574
                }
            case 794:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 10;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var2 = var0.PressableOpacity;
                _fun83574_ip = 832;
                continue _fun83574;
            case 822:
                var0 = _closure1_slot6;
                var2 = var0.Fragment;
            case 832:
                var1 = _closure1_slot9;
                var0 = {};
                if (!(var11 != var5)) {
                    _fun83574_ip = 850;
                    continue _fun83574
                }
            case 842:
                var4 = {};
                var4.onPress = var5;
                _fun83574_ip = 852;
                continue _fun83574;
            case 850:
                var4 = {};
            case 852:
                var41 = var0;
                var40 = var4;
                var4 = copyDataProperties(var41, var40);
                var6 = _closure1_slot10;
                var8 = _closure1_slot1;
                var28 = _closure1_slot2;
                var4 = var28[var7];
                var4 = var8.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var19 = var15.wrapper;
                var10 = new Array(2);
                var10[0] = var19;
                var10[1] = var13;
                var4.style = var10;
                var24 = _closure1_slot9;
                var7 = var28[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.View;
                var7 = {};
                var7.style = var9;
                var8 = var24.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var9 = _closure1_slot7;
                var8 = {};
                var10 = var15.container;
                var8.style = var10;
                var23 = _closure1_slot0;
                var22 = 5;
                var10 = var28[var22];
                var10 = var23.bind(var3)(var10);
                var13 = var10.Svg;
                var10 = {};
                var10.height = var18;
                var10.width = var18;
                var19 = var15.canvas;
                var10.style = var19;
                var19 = var28[var22];
                var19 = var23.bind(var3)(var19);
                var31 = var19.Defs;
                var19 = {};
                var32 = var28[var22];
                var32 = var23.bind(var3)(var32);
                var33 = var32.LinearGradient;
                var32 = {
                    'id': 'underlayGradient',
                    'x1': '0',
                    'y1': '0.5',
                    'x2': '1',
                    'y2': '0.5'
                };
                var37 = '0';
                var39 = '1';
                var34 = var28[var22];
                var34 = var23.bind(var3)(var34);
                var35 = var34.Stop;
                var34 = {};
                var34.offset = var37;
                var37 = _closure1_slot11;
                var36 = var37[var36];
                var34.stopColor = var36;
                var35 = var24.bind(var3)(var35, var34);
                var34 = new Array(2);
                var34[0] = var35;
                var35 = var28[var22];
                var35 = var23.bind(var3)(var35);
                var36 = var35.Stop;
                var35 = {};
                var35.offset = var39;
                var37 = var37[var38];
                var35.stopColor = var37;
                var35 = var24.bind(var3)(var36, var35);
                var34[1] = var35;
                var32.children = var34;
                var32 = var6.bind(var3)(var33, var32);
                var19.children = var32;
                var31 = var24.bind(var3)(var31, var19);
                var19 = new Array(3);
                var19[0] = var31;
                var22 = var28[var22];
                var22 = var23.bind(var3)(var22);
                var23 = var22.Circle;
                var22 = {};
                var28 = var18 / var30;
                var22.cx = var28;
                var28 = var18 / var30;
                var22.cy = var28;
                var22.r = var29;
                var28 = 'none';
                var22.fill = var28;
                var31 = 'url(#underlayGradient)';
                var22.stroke = var31;
                var22.strokeWidth = var27;
                var22 = var24.bind(var3)(var23, var22);
                var19[1] = var22;
                var23 = _closure1_slot12;
                var22 = {};
                var31 = var18 / var30;
                var22.cx = var31;
                var30 = var18 / var30;
                var22.cy = var30;
                var22.r = var29;
                var22.fill = var28;
                var28 = var15.progressPath;
                var28 = var28.color;
                var22.stroke = var28;
                var22.strokeWidth = var27;
                var22.strokeDasharray = var26;
                var26 = 'round';
                var22.strokeLinecap = var26;
                var22.animatedProps = var25;
                var22 = var24.bind(var3)(var23, var22);
                var19[2] = var22;
                var10.children = var19;
                var13 = var6.bind(var3)(var13, var10);
                var10 = new Array(3);
                var10[0] = var13;
                var11 = null;
                if (!var12) {
                    _fun83574_ip = 1435;
                    continue _fun83574
                }
            case 1363:
                var19 = _closure1_slot9;
                var13 = _closure1_slot1;
                var22 = _closure1_slot2;
                var12 = 11;
                var12 = var22[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var12.ref = var21;
                var12.style = var20;
                var21 = _closure1_slot0;
                var20 = 12;
                var20 = var22[var20];
                var20 = var21.bind(var3)(var20);
                var12.source = var20;
                var20 = false;
                var12.autoPlay = var20;
                var12.loop = var20;
                var11 = var19.bind(var3)(var13, var12);
            case 1435:
                var10[1] = var11;
                var13 = _closure1_slot9;
                var12 = _closure1_slot7;
                var11 = {};
                var15 = var15.imageContainer;
                var11.style = var15;
                var15 = _closure1_slot1;
                var19 = _closure1_slot2;
                var14 = 13;
                var14 = var19[var14];
                var15 = var15.bind(var3)(var14);
                var14 = {};
                var14.quest = var17;
                var17 = 0.78;
                var19 = var17 * var18;
                var14.height = var19;
                var17 = var17 * var18;
                var14.width = var17;
                var14.withAnimation = var16;
                var14 = var13.bind(var3)(var15, var14);
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                var10[2] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestProgressIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 3679, 5422, 1297, 671, 566, 4056, 4865, 6561, 10655, 9942, 2]);