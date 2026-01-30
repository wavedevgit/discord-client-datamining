// modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: AnimatedContainer, environment: var1
        _fun92325: for (var _fun92325_ip = 0;;) switch (_fun92325_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.scale;
                var _closure2_slot0 = var17;
                var0 = var1.translateX;
                var _closure2_slot1 = var0;
                var8 = var1.shadow;
                var14 = var1.translateY;
                var _closure2_slot2 = var14;
                var11 = var1.animateOnMount;
                var4 = var1.children;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var5 = _closure1_slot11;
                var7 = var5.bind(var3)();
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 9;
                var5 = var6[var5];
                var13 = var9.bind(var3)(var5);
                var12 = var13.useStateFromStores;
                var5 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var2
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var15 = var12.bind(var13)(var10, var5);
                var _closure2_slot3 = var15;
                var5 = 10;
                var6 = var6[var5];
                var10 = var9.bind(var3)(var6);
                var9 = var10.useSharedValue;
                var6 = 1;
                if (!var11) {
                    _fun92325_ip = 161;
                    continue _fun92325
                }
            case 159:
                var6 = 0;
            case 161:
                var16 = var9.bind(var10)(var6);
                _closure2_slot4 = var16;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var5];
                var12 = var9.bind(var3)(var6);
                var9 = var12.useSharedValue;
                var6 = 0;
                if (var11) {
                    _fun92325_ip = 201;
                    continue _fun92325
                }
            case 198:
                var6 = var14;
            case 201:
                var12 = var9.bind(var12)(var6);
                _closure2_slot5 = var12;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var5];
                var9 = var9.bind(var3)(var6);
                var6 = var9.useSharedValue;
                var10 = 0;
                if (var11) {
                    _fun92325_ip = 241;
                    continue _fun92325
                }
            case 238:
                var10 = var0;
            case 241:
                var13 = var6.bind(var9)(var10);
                _closure2_slot6 = var13;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var5];
                var10 = var9.bind(var3)(var6);
                var9 = var10.useSharedValue;
                var6 = var17;
                if (!var11) {
                    _fun92325_ip = 286;
                    continue _fun92325
                }
            case 279:
                var11 = 2;
                var6 = var17 / var11;
            case 286:
                var11 = var9.bind(var10)(var6);
                _closure2_slot7 = var11;
                var10 = _closure1_slot3;
                var9 = var10.useEffect;
                var6 = new Array(7);
                var6[0] = var16;
                var6[1] = var11;
                var6[2] = var12;
                var6[3] = var13;
                var6[4] = var17;
                var6[5] = var14;
                var6[6] = var0;
                var0 = function() { // Environment: var2
                    var3 = _closure2_slot4;
                    var2 = var3.set;
                    var1 = 1;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot7;
                    var2 = var3.set;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var3 = _closure2_slot5;
                    var2 = var3.set;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    var2 = _closure2_slot6;
                    var1 = var2.set;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var9.bind(var10)(var0, var6);
                var14 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = var0[var5];
                var9 = var14.bind(var3)(var6);
                var6 = var9.useAnimatedStyle;
                var2 = function() { // Original name: b, environment: var2
                    _fun92328: for (var _fun92328_ip = 0;;) switch (_fun92328_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 11;
                            var1 = var4[var1];
                            var7 = undefined;
                            var5 = var2.bind(var7)(var1);
                            var2 = var5.withTiming;
                            var6 = _closure2_slot4;
                            var1 = var6.get;
                            var1 = var1.bind(var6)();
                            var1 = var2.bind(var5)(var1);
                            var0.opacity = var1;
                            var2 = {};
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun92328_ip = 116;
                                continue _fun92328
                            }
                        case 66:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 12;
                            var1 = var6[var1];
                            var8 = var5.bind(var7)(var1);
                            var6 = var8.withSpring;
                            var5 = _closure2_slot6;
                            var1 = var5.get;
                            var5 = var1.bind(var5)();
                            var1 = _closure1_slot10;
                            var1 = var6.bind(var8)(var5, var1);
                            _fun92328_ip = 129;
                            continue _fun92328;
                        case 116:
                            var6 = _closure2_slot6;
                            var5 = var6.get;
                            var1 = var5.bind(var6)();
                        case 129:
                            var2.translateX = var1;
                            var1 = new Array(3);
                            var1[0] = var2;
                            var2 = {};
                            var5 = _closure2_slot3;
                            if (var5) {
                                _fun92328_ip = 201;
                                continue _fun92328
                            }
                        case 151:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 12;
                            var5 = var8[var5];
                            var9 = var6.bind(var7)(var5);
                            var8 = var9.withSpring;
                            var6 = _closure2_slot5;
                            var5 = var6.get;
                            var6 = var5.bind(var6)();
                            var5 = _closure1_slot10;
                            var5 = var8.bind(var9)(var6, var5);
                            _fun92328_ip = 214;
                            continue _fun92328;
                        case 201:
                            var8 = _closure2_slot5;
                            var6 = var8.get;
                            var5 = var6.bind(var8)();
                        case 214:
                            var2.translateY = var5;
                            var1[1] = var2;
                            var2 = {};
                            var5 = _closure2_slot3;
                            if (var5) {
                                _fun92328_ip = 282;
                                continue _fun92328
                            }
                        case 232:
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 12;
                            var5 = var8[var5];
                            var7 = var6.bind(var7)(var5);
                            var6 = var7.withSpring;
                            var8 = _closure2_slot7;
                            var5 = var8.get;
                            var5 = var5.bind(var8)();
                            var3 = _closure1_slot9;
                            var3 = var6.bind(var7)(var5, var3);
                            _fun92328_ip = 295;
                            continue _fun92328;
                        case 282:
                            var5 = _closure2_slot7;
                            var4 = var5.get;
                            var3 = var4.bind(var5)();
                        case 295:
                            var2.scale = var3;
                            var1[2] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var10 = {};
                var17 = 11;
                var17 = var0[var17];
                var17 = var14.bind(var3)(var17);
                var17 = var17.withTiming;
                var10.withTiming = var17;
                var10.opacityAnimation = var16;
                var10.useReducedMotion = var15;
                var10.translateXAnimation = var13;
                var13 = 12;
                var13 = var0[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.withSpring;
                var10.withSpring = var13;
                var13 = _closure1_slot10;
                var10.SPRING_OPTIONS_POSITION = var13;
                var10.translateYAnimation = var12;
                var10.scaleAnimation = var11;
                var11 = _closure1_slot9;
                var10.SPRING_OPTIONS_SCALE = var11;
                var2.__closure = var10;
                var10 = 8800301056148.0;
                var2.__workletHash = var10;
                var10 = _closure1_slot13;
                var2.__initData = var10;
                var6 = var6.bind(var9)(var2);
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var9 = var7.avatarContainer;
                var5 = new Array(3);
                var5[0] = var9;
                var5[1] = var6;
                var6 = undefined;
                if (!var8) {
                    _fun92325_ip = 568;
                    continue _fun92325
                }
            case 562:
                var6 = var7.shadow;
            case 568:
                var5[2] = var6;
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0) { // Original name: GroupMemberCount, environment: var1
        var0 = arg0;
        var11 = var0.count;
        var0 = _closure1_slot11;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var8.avatarWrapper;
        var0.style = var4;
        var6 = _closure1_slot6;
        var5 = _closure1_slot4;
        var4 = {};
        var8 = var8.overflowCount;
        var4.style = var8;
        var9 = _closure1_slot7;
        var8 = _closure1_slot0;
        var10 = _closure1_slot2;
        var7 = 13;
        var7 = var10[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {};
        var10 = 'text-sm/semibold';
        var7.variant = var10;
        var10 = ['+'];
        var10[1] = var11;
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: GroupMemberAvatar, environment: var1
        _fun92330: for (var _fun92330_ip = 0;;) switch (_fun92330_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.guildId;
                var _closure2_slot0 = var7;
                var6 = var1.user;
                var _closure2_slot1 = var6;
                var1 = _closure1_slot11;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var7;
                var1[1] = var6;
                var0 = function() { // Environment: var0
                    _fun92331: for (var _fun92331_ip = 0;;) switch (_fun92331_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun92331_ip = 44;
                                continue _fun92331
                            }
                        case 18:
                            var5 = _closure2_slot1;
                            var4 = var5.getAvatarSource;
                            var3 = _closure2_slot0;
                            var2 = false;
                            var1 = 32;
                            var0 = var4.bind(var5)(var3, var2, var1);
                        case 44:
                            return var0;
                    }
                };
                var8 = var2.bind(var3)(var0, var1);
                var0 = null;
                var1 = var0 == var8;
                if (var1) {
                    _fun92330_ip = 155;
                    continue _fun92330
                }
            case 79:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var9.avatarWrapper;
                var1.style = var6;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 14;
                var5 = var10[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var9 = var9.avatar;
                var5.style = var9;
                var5.source = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 155:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var6 = arg3;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var11 = 2;
    var6 = var5[var11];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot6 = var7;
    var6 = var6.jsxs;
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createElement;
    var _closure1_slot8 = var3;
    var3 = {
        'damping': 30,
        'stiffness': 400
    };
    var _closure1_slot9 = var3;
    var3 = {
        'damping': 30,
        'stiffness': 400
    };
    var _closure1_slot10 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'relative';
    var8.position = var9;
    var3.groupContainer = var8;
    var8 = {
        'borderRadius': null,
        'shadowColor': null,
        'shadowOffset': null,
        'shadowRadius': 5,
        'shadowOpacity': 0.2,
        'elevation': 10
    };
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var8.shadowColor = var12;
    var12 = {
        'width': 0,
        'height': 0
    };
    var8.shadowOffset = var12;
    var3.shadowContainer = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var3.shadowContainerBackground = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var8.backgroundColor = var12;
    var12 = 0.4;
    var8.opacity = var12;
    var3.shadowContainerBackgroundLight = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var8.backgroundColor = var12;
    var12 = 0.15;
    var8.opacity = var12;
    var3.shadowContainerBackgroundDark = var8;
    var8 = {
        'width': 72,
        'height': 72,
        'overflow': 'hidden'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_BACKGROUND_DEFAULT;
    var8.backgroundColor = var12;
    var3.gradientContainer = var8;
    var8 = {
        'position': 'absolute',
        'left': 0,
        'top': 0,
        'right': 0,
        'bottom': 0
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var8.backgroundColor = var12;
    var3.gradientDimOverlay = var8;
    var8 = {
        'width': 72,
        'height': 72,
        'borderRadius': null,
        'borderWidth': 1,
        'borderColor': null,
        'position': 'absolute'
    };
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.borderColor = var12;
    var3.gradientImageBorder = var8;
    var8 = {
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'width': 38,
        'height': 38,
        'marginTop': 4294967277,
        'marginLeft': 4294967277
    };
    var3.avatarContainer = var8;
    var8 = {};
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BLACK;
    var8.shadowColor = var12;
    var12 = 6;
    var12 = var5[var12];
    var12 = var4.bind(var0)(var12);
    var12 = var12.DARK_03_LIGHT_02;
    var8.shadowOpacity = var12;
    var12 = {
        'width': 0,
        'height': 3
    };
    var8.shadowOffset = var12;
    var8.shadowRadius = var11;
    var3.shadow = var8;
    var8 = {
        'width': 32,
        'height': 32,
        'position': 'absolute',
        'borderRadius': 16
    };
    var3.avatar = var8;
    var8 = {
        'position': 'absolute',
        'width': 38,
        'height': 38,
        'justifyContent': 'center',
        'alignItems': 'center',
        'borderRadius': 19
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.avatarWrapper = var8;
    var8 = {
        'width': 38,
        'height': 38,
        'position': 'absolute',
        'borderRadius': 19,
        'backgroundColor': null,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.overflowCount = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var6 = new Array(4);
    var3 = {
        'translateY': 0,
        'translateX': 0,
        'scale': 1
    };
    var6[0] = var3;
    var3 = {
        'translateY': 0,
        'translateX': 0,
        'scale': 0
    };
    var6[1] = var3;
    var3 = {
        'translateY': 0,
        'translateX': 0,
        'scale': 0
    };
    var6[2] = var3;
    var3 = {
        'translateY': 0,
        'translateX': 0,
        'scale': 0
    };
    var6[3] = var3;
    var3 = new Array(4);
    var3[0] = var6;
    var6 = new Array(4);
    var7 = {
        'translateY': 4294967282,
        'translateX': 4294967282,
        'scale': 0.75
    };
    var6[0] = var7;
    var7 = {
        'translateY': 12,
        'translateX': 12,
        'scale': 0.875
    };
    var6[1] = var7;
    var7 = {
        'translateY': 0,
        'translateX': 0,
        'scale': 0
    };
    var6[2] = var7;
    var7 = {
        'translateY': 0,
        'translateX': 0,
        'scale': 0
    };
    var6[3] = var7;
    var3[1] = var6;
    var6 = new Array(4);
    var7 = {
        'translateY': 4294967292,
        'translateX': 16,
        'scale': 0.75
    };
    var6[0] = var7;
    var7 = {
        'translateY': 14,
        'translateX': 4294967282,
        'scale': 0.875
    };
    var6[1] = var7;
    var7 = {
        'translateY': 4294967278,
        'translateX': 4294967284,
        'scale': 0.625
    };
    var6[2] = var7;
    var7 = {
        'translateY': 0,
        'translateX': 0,
        'scale': 0
    };
    var6[3] = var7;
    var3[2] = var6;
    var6 = new Array(4);
    var7 = {
        'translateY': 4294967282,
        'translateX': 4294967282,
        'scale': 0.875
    };
    var6[0] = var7;
    var7 = {
        'translateY': 14,
        'translateX': 14,
        'scale': 0.875
    };
    var6[1] = var7;
    var7 = {
        'translateY': 4294967278,
        'translateX': 18,
        'scale': 0.625
    };
    var6[2] = var7;
    var7 = {
        'translateY': 18,
        'translateX': 4294967278,
        'scale': 0.625
    };
    var6[3] = var7;
    var3[3] = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function GroupAvatarTsx1(){const{withTiming,opacityAnimation,useReducedMotion,translateXAnimation,withSpring,SPRING_OPTIONS_POSITION,translateYAnimation,scaleAnimation,SPRING_OPTIONS_SCALE}=this.__closure;return{opacity:withTiming(opacityAnimation.get()),transform:[{translateX:useReducedMotion?translateXAnimation.get():withSpring(translateXAnimation.get(),SPRING_OPTIONS_POSITION)},{translateY:useReducedMotion?translateYAnimation.get():withSpring(translateYAnimation.get(),SPRING_OPTIONS_POSITION)},{scale:useReducedMotion?scaleAnimation.get():withSpring(scaleAnimation.get(),SPRING_OPTIONS_SCALE)}]};}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/GroupAvatar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: GroupAvatar, environment: var1
        _fun92332: for (var _fun92332_ip = 0;;) switch (_fun92332_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.users;
                var _closure2_slot0 = var1;
                var2 = var2.guildId;
                var _closure2_slot1 = var2;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var2 = _closure1_slot11;
                var12 = var2.bind(var3)();
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var5 = var6[var2];
                var7 = var4.bind(var3)(var5);
                var5 = var7.useThemeContext;
                var7 = var5.bind(var7)();
                var5 = var7.theme;
                var14 = var7.primaryColor;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.isThemeLight;
                var2 = var2.bind(var4)(var5);
                if (var2) {
                    _fun92332_ip = 130;
                    continue _fun92332
                }
            case 122:
                var10 = var12.shadowContainerBackgroundDark;
                _fun92332_ip = 136;
                continue _fun92332;
            case 130:
                var10 = var12.shadowContainerBackgroundLight;
            case 136:
                var5 = _closure1_slot3;
                var4 = var5.useRef;
                var2 = false;
                var4 = var4.bind(var5)(var2);
                _closure2_slot2 = var4;
                var7 = _closure1_slot3;
                var6 = var7.useEffect;
                var5 = function() { // Environment: var0
                    var1 = _closure2_slot2;
                    var0 = true;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = new Array(0);
                var2 = var6.bind(var7)(var5, var2);
                var2 = global;
                var13 = var2.Math;
                var11 = var13.min;
                var6 = _closure1_slot12;
                var7 = var6.length;
                var5 = 1;
                var8 = var7 - var5;
                var7 = var1.length;
                var7 = var7 - var5;
                var11 = var11.bind(var13)(var8, var7);
                var8 = var2.Math;
                var7 = var8.max;
                var2 = 0;
                var2 = var7.bind(var8)(var2, var11);
                var2 = var6[var2];
                var7 = var1.length;
                var6 = 4;
                var6 = var7 > var6;
                _closure2_slot3 = var6;
                var6 = var1.length;
                var1 = 3;
                var7 = var6 - var1;
                _closure2_slot4 = var7;
                var1 = 2;
                var6 = 10;
                if (!(var7 >= var6)) {
                    _fun92332_ip = 294;
                    continue _fun92332
                }
            case 291:
                var1 = var5;
            case 294:
                _closure2_slot5 = var1;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 8;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)(var4);
                _closure2_slot6 = var1;
                var1 = var2.map;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun92334: for (var _fun92334_ip = 0;;) switch (_fun92334_ip) {
                        case 0:
                            var8 = arg1;
                            var0 = _closure2_slot0;
                            var2 = var0[var8];
                            var0 = null;
                            var3 = var0 == var2;
                            if (var3) {
                                _fun92334_ip = 184;
                                continue _fun92334
                            }
                        case 26:
                            var5 = _closure1_slot8;
                            var4 = _closure1_slot14;
                            var3 = {};
                            var12 = arg0;
                            var13 = var3;
                            var7 = copyDataProperties(var13, var12);
                            var9 = var2.id;
                            var7 = 'key';
                            var3[var7] = var9;
                            var9 = _closure2_slot6;
                            var7 = 'animateOnMount';
                            var3[var7] = var9;
                            var7 = _closure2_slot0;
                            var9 = var7.length;
                            var7 = 2;
                            var9 = var9 >= var7;
                            var7 = 'shadow';
                            var3[var7] = var9;
                            var7 = _closure2_slot3;
                            if (!var7) {
                                _fun92334_ip = 116;
                                continue _fun92334
                            }
                        case 108:
                            var7 = _closure2_slot5;
                            if (!(var8 !== var7)) {
                                _fun92334_ip = 148;
                                continue _fun92334
                            }
                        case 116:
                            var9 = _closure1_slot6;
                            var8 = _closure1_slot16;
                            var7 = {};
                            var10 = _closure2_slot1;
                            var7.guildId = var10;
                            var7.user = var2;
                            var2 = undefined;
                            var2 = var9.bind(var2)(var8, var7);
                            _fun92334_ip = 175;
                            continue _fun92334;
                        case 148:
                            var8 = _closure1_slot6;
                            var7 = _closure1_slot15;
                            var6 = {};
                            var1 = _closure2_slot4;
                            var6.count = var1;
                            var1 = undefined;
                            var2 = var8.bind(var1)(var7, var6);
                        case 175:
                            var1 = undefined;
                            var0 = var5.bind(var1)(var4, var3, var2);
                        case 184:
                            return var0;
                    }
                };
                var5 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var12.groupContainer;
                var0.style = var4;
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var4 = {};
                var11 = var12.shadowContainer;
                var8 = new Array(2);
                var8[0] = var11;
                var13 = null;
                if (!(var13 == var14)) {
                    _fun92332_ip = 400;
                    continue _fun92332
                }
            case 394:
                var10 = var12.shadowContainerBackground;
            case 400:
                var8[1] = var10;
                var4.style = var8;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                var8 = {};
                var15 = var12.gradientContainer;
                var8.style = var15;
                var13 = var13 == var14;
                if (!var13) {
                    _fun92332_ip = 461;
                    continue _fun92332
                }
            case 435:
                var16 = _closure1_slot6;
                var15 = _closure1_slot4;
                var14 = {};
                var17 = var12.gradientDimOverlay;
                var14.style = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 461:
                var8.children = var13;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                var9 = {};
                var12 = var12.gradientImageBorder;
                var9.style = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 1297, 671, 4834, 3165, 4697, 632, 3679, 4056, 4040, 3901, 4666, 2]);