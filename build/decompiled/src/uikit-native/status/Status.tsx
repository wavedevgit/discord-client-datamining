// uikit-native/status/Status.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun51649: for (var _fun51649_ip = 0;;) switch (_fun51649_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                if (var1) {
                    _fun51649_ip = 246;
                    continue _fun51649
                }
            case 15:
                var1 = arg3;
                if (var1) {
                    _fun51649_ip = 222;
                    continue _fun51649
                }
            case 24:
                var1 = arg2;
                if (var1) {
                    _fun51649_ip = 198;
                    continue _fun51649
                }
            case 33:
                var1 = _closure1_slot7;
                var1 = var1.IDLE;
                if (!(var1 !== var2)) {
                    _fun51649_ip = 174;
                    continue _fun51649
                }
            case 50:
                var1 = _closure1_slot7;
                var1 = var1.DND;
                if (!(var1 !== var2)) {
                    _fun51649_ip = 150;
                    continue _fun51649
                }
            case 64:
                var1 = _closure1_slot7;
                var1 = var1.OFFLINE;
                if (!(var1 !== var2)) {
                    _fun51649_ip = 126;
                    continue _fun51649
                }
            case 78:
                var1 = _closure1_slot7;
                var1 = var1.INVISIBLE;
                if (!(var1 !== var2)) {
                    _fun51649_ip = 126;
                    continue _fun51649
                }
            case 92:
                var1 = _closure1_slot7;
                var1 = var1.ONLINE;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 126:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 150:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 174:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 198:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 222:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 11;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 246:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot17 = var0;
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
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot4 = var6;
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STATUS_PADDING;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.TYPING_ENTERING;
    var _closure1_slot8 = var6;
    var6 = var3.TYPING_EXITING;
    var _closure1_slot9 = var6;
    var3 = var3.CHANNEL_SPRING_CONFIG;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'width': '100%',
        'height': '100%'
    };
    var6.statusIcon = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot13 = var6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun51650: for (var _fun51650_ip = 0;;) switch (_fun51650_ip) {
            case 0:
                var9 = arg1;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var3.getStatusTypingDimensions;
                var0 = arg0;
                var0 = var1.bind(var3)(var0);
                var6 = var0.width;
                var7 = var0.height;
                var3 = var0.dotSize;
                var0 = {};
                var1 = {};
                var8 = _closure1_slot7;
                var8 = var8.ONLINE;
                if (!(var8 !== var9)) {
                    _fun51650_ip = 300;
                    continue _fun51650
                }
            case 79:
                var8 = _closure1_slot7;
                var8 = var8.IDLE;
                if (!(var8 !== var9)) {
                    _fun51650_ip = 267;
                    continue _fun51650
                }
            case 96:
                var8 = _closure1_slot7;
                var8 = var8.DND;
                if (!(var8 !== var9)) {
                    _fun51650_ip = 234;
                    continue _fun51650
                }
            case 113:
                var8 = _closure1_slot7;
                var8 = var8.STREAMING;
                if (!(var8 !== var9)) {
                    _fun51650_ip = 201;
                    continue _fun51650
                }
            case 127:
                var8 = _closure1_slot7;
                var8 = var8.INVISIBLE;
                if (!(var8 !== var9)) {
                    _fun51650_ip = 165;
                    continue _fun51650
                }
            case 141:
                var8 = _closure1_slot7;
                var8 = var8.UNKNOWN;
                if (!(var8 !== var9)) {
                    _fun51650_ip = 165;
                    continue _fun51650
                }
            case 155:
                var8 = _closure1_slot7;
                var8 = var8.OFFLINE;
            case 165:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 9;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.unsafe_rawColors;
                var8 = var8.PRIMARY_400;
                _fun51650_ip = 331;
                continue _fun51650;
            case 201:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                var8 = var9.TWITCH;
                _fun51650_ip = 331;
                continue _fun51650;
            case 234:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                var8 = var9.RED_400;
                _fun51650_ip = 331;
                continue _fun51650;
            case 267:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                var8 = var9.YELLOW_300;
                _fun51650_ip = 331;
                continue _fun51650;
            case 300:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.unsafe_rawColors;
                var8 = var9.GREEN_360;
            case 331:
                var1.backgroundColor = var8;
                var1.borderRadius = var7;
                var1.height = var7;
                var1.width = var6;
                var6 = 4;
                var1.paddingStart = var6;
                var6 = 2;
                var1.paddingEnd = var6;
                var6 = 0;
                var1.marginRight = var6;
                var0.ellipsis = var1;
                var1 = {};
                var1.width = var3;
                var1.height = var3;
                var3 = _closure1_slot1;
                var2 = 9;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var2 = var2.WHITE;
                var1.backgroundColor = var2;
                var0.ellipsisDot = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = "function StatusTsx1(){const{enableAnimation,withSpring,width,CHANNEL_SPRING_CONFIG,height,onAnimationFinished,borderRadius,translateX}=this.__closure;const shouldAnimate=enableAnimation.get()?'respect-motion-settings':'animate-never';return{width:withSpring(width,CHANNEL_SPRING_CONFIG,shouldAnimate),height:withSpring(height,CHANNEL_SPRING_CONFIG,shouldAnimate,onAnimationFinished),borderRadius:withSpring(borderRadius,CHANNEL_SPRING_CONFIG,shouldAnimate),transform:[{translateX:withSpring(translateX,CHANNEL_SPRING_CONFIG,shouldAnimate)}]};}";
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function StatusTsx2(){const{withSpring,statusOpacity,CHANNEL_SPRING_CONFIG}=this.__closure;return{opacity:withSpring(statusOpacity,CHANNEL_SPRING_CONFIG)};}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/status/Status.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun51651: for (var _fun51651_ip = 0;;) switch (_fun51651_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.isMobileOnline;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun51651_ip = 17;
                    continue _fun51651
                }
            case 15:
                var10 = false;
            case 17:
                var9 = var0.isVROnline;
                if (!(var9 === var3)) {
                    _fun51651_ip = 29;
                    continue _fun51651
                }
            case 27:
                var9 = false;
            case 29:
                var5 = var0.style;
                var8 = var0.status;
                var12 = var0.size;
                var7 = var0.streaming;
                if (!(var7 === var3)) {
                    _fun51651_ip = 56;
                    continue _fun51651
                }
            case 54:
                var7 = false;
            case 56:
                var0 = _closure1_slot13;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 17;
                var4 = var14[var4];
                var4 = var13.bind(var3)(var4);
                var12 = var4.bind(var3)(var12, var10);
                var4 = new Array(2);
                var4[0] = var12;
                var4[1] = var5;
                var0.style = var4;
                var5 = _closure1_slot4;
                var4 = {};
                var11 = var11.statusIcon;
                var4.style = var11;
                var6 = _closure1_slot17;
                var19 = undefined;
                var18 = var8;
                var17 = var7;
                var16 = var10;
                var15 = var9;
                var6 = var19[var6](var18, var17, var16, var15, var14);
                var4.source = var6;
                var6 = 'stretch';
                var4.resizeMode = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun51652: for (var _fun51652_ip = 0;;) switch (_fun51652_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.isMobileOnline;
                var3 = undefined;
                if (!(var14 === var3)) {
                    _fun51652_ip = 19;
                    continue _fun51652
                }
            case 17:
                var14 = false;
            case 19:
                var13 = var0.isVROnline;
                if (!(var13 === var3)) {
                    _fun51652_ip = 31;
                    continue _fun51652
                }
            case 29:
                var13 = false;
            case 31:
                var6 = var0.style;
                var12 = var0.status;
                var2 = var0.size;
                var11 = var0.streaming;
                if (!(var11 === var3)) {
                    _fun51652_ip = 58;
                    continue _fun51652
                }
            case 56:
                var11 = false;
            case 58:
                var5 = var0.typing;
                var7 = var0.userId;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot13;
                var15 = var0.bind(var3)();
                var0 = _closure1_slot14;
                var18 = var0.bind(var3)(var2, var12);
                var8 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 17;
                var0 = var4[var0];
                var0 = var8.bind(var3)(var0);
                var16 = var0.bind(var3)(var2, var14);
                var2 = _closure1_slot0;
                var0 = 18;
                var0 = var4[var0];
                var4 = var2.bind(var3)(var0);
                var2 = var4.useFlashListAnimationDisabler;
                var0 = null;
                var8 = var0 != var7;
                var0 = '';
                if (!var8) {
                    _fun51652_ip = 182;
                    continue _fun51652
                }
            case 179:
                var0 = var7;
            case 182:
                var4 = var2.bind(var4)(var0);
                var0 = _closure1_slot3;
                var2 = 2;
                var4 = var0.bind(var3)(var4, var2);
                var0 = 0;
                var19 = var4[var0];
                _closure2_slot0 = var19;
                var17 = 1;
                var22 = var4[var17];
                _closure2_slot1 = var22;
                if (var5) {
                    _fun51652_ip = 231;
                    continue _fun51652
                }
            case 224:
                var24 = var16.width;
                _fun51652_ip = 254;
                continue _fun51652;
            case 231:
                var4 = var18.ellipsis;
                var7 = var4.width;
                var4 = _closure1_slot6;
                var4 = var2 * var4;
                var24 = var7 + var4;
            case 254:
                _closure2_slot2 = var24;
                if (var5) {
                    _fun51652_ip = 268;
                    continue _fun51652
                }
            case 261:
                var23 = var16.height;
                _fun51652_ip = 291;
                continue _fun51652;
            case 268:
                var4 = var18.ellipsis;
                var7 = var4.height;
                var4 = _closure1_slot6;
                var4 = var2 * var4;
                var23 = var7 + var4;
            case 291:
                _closure2_slot3 = var23;
                if (var5) {
                    _fun51652_ip = 305;
                    continue _fun51652
                }
            case 298:
                var21 = var16.borderRadius;
                _fun51652_ip = 309;
                continue _fun51652;
            case 305:
                var21 = var24 / var2;
            case 309:
                _closure2_slot4 = var21;
                var20 = 0;
                if (!var5) {
                    _fun51652_ip = 354;
                    continue _fun51652
                }
            case 318:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var7 = var4.bind(var3)(var2);
                var4 = var7.getAnimatedTypingTranslateX;
                var2 = var16.width;
                var20 = var4.bind(var7)(var2);
            case 354:
                _closure2_slot5 = var20;
                var26 = _closure1_slot0;
                var25 = _closure1_slot2;
                var9 = 19;
                var2 = var25[var9];
                var7 = var26.bind(var3)(var2);
                var4 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun51653: for (var _fun51653_ip = 0;;) switch (_fun51653_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            var6 = 'animate-never';
                            if (!var0) {
                                _fun51653_ip = 31;
                                continue _fun51653
                            }
                        case 25:
                            var6 = 'respect-motion-settings';
                        case 31:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 20;
                            var2 = var8[var3];
                            var4 = undefined;
                            var10 = var7.bind(var4)(var2);
                            var9 = var10.withSpring;
                            var2 = _closure2_slot2;
                            var5 = _closure1_slot10;
                            var2 = var9.bind(var10)(var2, var5, var6);
                            var0.width = var2;
                            var2 = var8[var3];
                            var11 = var7.bind(var4)(var2);
                            var10 = var11.withSpring;
                            var15 = _closure2_slot3;
                            var12 = _closure2_slot1;
                            var16 = var11;
                            var14 = var5;
                            var13 = var6;
                            var2 = var16[var10](var15, var14, var13, var12, var11);
                            var0.height = var2;
                            var2 = var8[var3];
                            var10 = var7.bind(var4)(var2);
                            var9 = var10.withSpring;
                            var2 = _closure2_slot4;
                            var2 = var9.bind(var10)(var2, var5, var6);
                            var0.borderRadius = var2;
                            var2 = {};
                            var3 = var8[var3];
                            var4 = var7.bind(var4)(var3);
                            var3 = var4.withSpring;
                            var1 = _closure2_slot5;
                            var1 = var3.bind(var4)(var1, var5, var6);
                            var2.translateX = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var8 = {};
                var8.enableAnimation = var19;
                var19 = 20;
                var25 = var25[var19];
                var25 = var26.bind(var3)(var25);
                var25 = var25.withSpring;
                var8.withSpring = var25;
                var8.width = var24;
                var24 = _closure1_slot10;
                var8.CHANNEL_SPRING_CONFIG = var24;
                var8.height = var23;
                var8.onAnimationFinished = var22;
                var8.borderRadius = var21;
                var8.translateX = var20;
                var2.__closure = var8;
                var8 = 2188820017597.0;
                var2.__workletHash = var8;
                var8 = _closure1_slot15;
                var2.__initData = var8;
                var7 = var4.bind(var7)(var2);
                if (!var5) {
                    _fun51652_ip = 490;
                    continue _fun51652
                }
            case 488:
                var17 = 0;
            case 490:
                _closure2_slot6 = var17;
                var20 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var9];
                var4 = var20.bind(var3)(var2);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var2 = _closure2_slot6;
                    var1 = _closure1_slot10;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
                };
                var8 = {};
                var19 = var0[var19];
                var19 = var20.bind(var3)(var19);
                var19 = var19.withSpring;
                var8.withSpring = var19;
                var8.statusOpacity = var17;
                var17 = _closure1_slot10;
                var8.CHANNEL_SPRING_CONFIG = var17;
                var1.__closure = var8;
                var8 = 7224613224414.0;
                var1.__workletHash = var8;
                var8 = _closure1_slot16;
                var1.__initData = var8;
                var8 = var2.bind(var4)(var1);
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var0 = var0[var9];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var4 = new Array(3);
                var4[0] = var16;
                var4[1] = var7;
                var4[2] = var6;
                var0.style = var4;
                var16 = false;
                var0.collapsable = var16;
                if (!var5) {
                    _fun51652_ip = 795;
                    continue _fun51652
                }
            case 652:
                var7 = _closure1_slot11;
                var17 = _closure1_slot1;
                var19 = _closure1_slot2;
                var4 = var19[var9];
                var4 = var17.bind(var3)(var4);
                var6 = var4.View;
                var4 = {};
                var4.collapsable = var16;
                var16 = _closure1_slot8;
                var4.entering = var16;
                var16 = _closure1_slot9;
                var4.exiting = var16;
                var20 = {};
                var16 = 'absolute';
                var20.position = var16;
                var16 = _closure1_slot6;
                var20.left = var16;
                var20.top = var16;
                var16 = new Array(1);
                var16[0] = var20;
                var4.style = var16;
                var16 = 21;
                var16 = var19[var16];
                var17 = var17.bind(var3)(var16);
                var16 = {};
                var19 = var18.ellipsis;
                var16.style = var19;
                var18 = var18.ellipsisDot;
                var16.dotStyle = var18;
                var18 = true;
                var16.disableScale = var18;
                var16 = var7.bind(var3)(var17, var16);
                var4.children = var16;
                var5 = var7.bind(var3)(var6, var4);
            case 795:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var5.style = var8;
                var9 = _closure1_slot4;
                var8 = {};
                var15 = var15.statusIcon;
                var8.style = var15;
                var10 = _closure1_slot17;
                var31 = undefined;
                var30 = var12;
                var29 = var11;
                var28 = var14;
                var27 = var13;
                var10 = var31[var10](var30, var29, var28, var27, var26);
                var8.source = var10;
                var10 = 'stretch';
                var8.resizeMode = var10;
                var8 = var7.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.StatusWithTyping = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5516, 660, 5518, 33, 1297, 5635, 671, 5818, 5819, 5820, 5821, 5822, 5823, 5824, 5636, 5825, 3719, 4089, 5826, 2]);