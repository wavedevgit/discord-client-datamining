// modules/frames/panel/native/QuestActivityButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun110602: for (var _fun110602_ip = 0;;) switch (_fun110602_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.quest;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 9;
                var0 = var5[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useQuestCompletionDetails;
                var0 = var0.bind(var2)(var4);
                var2 = var0.completedRatio;
                var _closure2_slot0 = var2;
                var0 = 10;
                var0 = var5[var0];
                var6 = var1.bind(var3)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var18
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var1 = var5.bind(var6)(var1, var0);
                var _closure2_slot1 = var1;
                var0 = global;
                var0 = var0.Math;
                var5 = var0.PI;
                var0 = 2;
                var5 = var0 * var5;
                var0 = 14.3;
                var12 = var5 * var0;
                var _closure2_slot2 = var12;
                var6 = null;
                var5 = var6 == var4;
                var0 = undefined;
                if (var5) {
                    _fun110602_ip = 194;
                    continue _fun110602
                }
            case 173:
                var4 = var4.userStatus;
                var5 = var6 == var4;
                var0 = undefined;
                if (var5) {
                    _fun110602_ip = 194;
                    continue _fun110602
                }
            case 188:
                var0 = var4.completedAt;
            case 194:
                var14 = var6 != var0;
                _closure2_slot3 = var14;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var7 = var4[var0];
                var9 = var5.bind(var3)(var7);
                var7 = var9.useSharedValue;
                var19 = var7.bind(var9)(var2);
                _closure2_slot4 = var19;
                var4 = var4[var0];
                var7 = var5.bind(var3)(var4);
                var5 = var7.useSharedValue;
                var4 = 0;
                if (!var14) {
                    _fun110602_ip = 260;
                    continue _fun110602
                }
            case 257:
                var4 = 1;
            case 260:
                var16 = var5.bind(var7)(var4);
                _closure2_slot5 = var16;
                var5 = _closure1_slot3;
                var4 = var5.useRef;
                var13 = var4.bind(var5)(var6);
                _closure2_slot6 = var13;
                var4 = _closure1_slot12;
                var9 = var4.bind(var3)();
                _closure2_slot7 = var9;
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = var15[var0];
                var7 = var6.bind(var3)(var4);
                var5 = var7.useAnimatedStyle;
                var4 = function() {
                    var0 = {};
                    var2 = _closure2_slot7;
                    var3 = var2.completionGlow;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot5;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 'shadowOpacity';
                    var0[var1] = var2;
                    return var0;
                };
                var10 = {};
                var10.styles = var9;
                var10.glowOpacity = var16;
                var4.__closure = var10;
                var10 = 13949105036113.0;
                var4.__workletHash = var10;
                var10 = _closure1_slot13;
                var4.__initData = var10;
                var5 = var5.bind(var7)(var4);
                var11 = _closure1_slot3;
                var10 = var11.useMemo;
                var4 = var9.confetti;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var18
                    var0 = {};
                    var1 = _closure2_slot7;
                    var4 = var1.confetti;
                    var5 = var0;
                    var1 = copyDataProperties(var5, var4);
                    var3 = _closure1_slot10;
                    var2 = 'width';
                    var0[var2] = var3;
                    var2 = _closure1_slot10;
                    var1 = 'height';
                    var0[var1] = var2;
                    var1 = {};
                    var2 = 1.6;
                    var1.scale = var2;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = 'transform';
                    var0[var1] = var2;
                    return var0;
                };
                var10 = var10.bind(var11)(var4, var7);
                var4 = var15[var0];
                var11 = var6.bind(var3)(var4);
                var7 = var11.useAnimatedProps;
                var4 = function() {
                    var0 = {};
                    var2 = _closure2_slot2;
                    var3 = _closure2_slot4;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var2 * var1;
                    var1 = var2 - var1;
                    var0.strokeDashoffset = var1;
                    return var0;
                };
                var17 = {};
                var17.circumference = var12;
                var17.animatedProgress = var19;
                var4.__closure = var17;
                var17 = 3373122453897.0;
                var4.__workletHash = var17;
                var17 = _closure1_slot14;
                var4.__initData = var17;
                var11 = var7.bind(var11)(var4);
                var17 = _closure1_slot3;
                var7 = var17.useEffect;
                var4 = new Array(3);
                var4[0] = var19;
                var4[1] = var2;
                var4[2] = var1;
                var2 = function() { // Environment: var18
                    _fun110607: for (var _fun110607_ip = 0;;) switch (_fun110607_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = var2.set;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 11;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.withTiming;
                            var3 = _closure2_slot0;
                            var0 = {};
                            var7 = _closure2_slot1;
                            var6 = 500;
                            if (!var7) {
                                _fun110607_ip = 63;
                                continue _fun110607
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
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.cancelAnimation;
                                var1 = _closure2_slot4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var2 = var7.bind(var17)(var2, var4);
                var7 = _closure1_slot3;
                var4 = var7.useEffect;
                var2 = new Array(3);
                var2[0] = var16;
                var2[1] = var14;
                var2[2] = var1;
                var1 = function() { // Environment: var18
                    _fun110609: for (var _fun110609_ip = 0;;) switch (_fun110609_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun110609_ip = 119;
                                continue _fun110609
                            }
                        case 10:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun110609_ip = 119;
                                continue _fun110609
                            }
                        case 17:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun110609_ip = 160;
                                continue _fun110609
                            }
                        case 27:
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 11;
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
                            var1 = _closure2_slot6;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun110609_ip = 160;
                                continue _fun110609
                            }
                        case 107:
                            var1 = var2.play;
                            var1 = var1.bind(var2)();
                            _fun110609_ip = 160;
                            continue _fun110609;
                        case 119:
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var0 = _closure2_slot6;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun110609_ip = 160;
                                continue _fun110609
                            }
                        case 150:
                            var0 = var1.reset;
                            var0 = var0.bind(var1)();
                        case 160:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var7)(var1, var2);
                var2 = _closure1_slot9;
                var14 = _closure1_slot1;
                var0 = var15[var0];
                var0 = var14.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var7 = var9.container;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var5;
                var0.style = var4;
                var7 = _closure1_slot8;
                var4 = 12;
                var4 = var15[var4];
                var5 = var14.bind(var3)(var4);
                var4 = {};
                var4.ref = var13;
                var4.style = var10;
                var10 = 13;
                var10 = var15[var10];
                var10 = var6.bind(var3)(var10);
                var4.source = var10;
                var10 = false;
                var4.autoPlay = var10;
                var4.loop = var10;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var10 = _closure1_slot8;
                var7 = _closure1_slot4;
                var5 = {};
                var13 = var9.buttonWrapper;
                var5.style = var13;
                var17 = _closure1_slot8;
                var13 = 14;
                var13 = var15[var13];
                var13 = var6.bind(var3)(var13);
                var16 = var13.IconButton;
                var13 = {};
                var18 = function() {
                    var0 = undefined;
                    return var0;
                };
                var13.onPress = var18;
                var18 = 15;
                var18 = var15[var18];
                var18 = var14.bind(var3)(var18);
                var13.icon = var18;
                var18 = 16;
                var19 = var15[var18];
                var19 = var6.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var15[var18];
                var18 = var6.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18.JALI2K;
                var18 = var19.bind(var20)(var18);
                var13.accessibilityLabel = var18;
                var18 = 'secondary-overlay';
                var13.variant = var18;
                var18 = 'sm';
                var13.size = var18;
                var13 = var17.bind(var3)(var16, var13);
                var5.children = var13;
                var5 = var10.bind(var3)(var7, var5);
                var4[1] = var5;
                var16 = _closure1_slot8;
                var5 = 7;
                var7 = var15[var5];
                var7 = var6.bind(var3)(var7);
                var10 = var7.Svg;
                var7 = {};
                var13 = _closure1_slot10;
                var7.height = var13;
                var13 = _closure1_slot10;
                var7.width = var13;
                var13 = var9.canvas;
                var7.style = var13;
                var19 = _closure1_slot8;
                var13 = var15[var5];
                var13 = var6.bind(var3)(var13);
                var18 = var13.Circle;
                var17 = {
                    'cx': 16,
                    'cy': 16,
                    'r': 14.3,
                    'fill': 'none',
                    'stroke': null,
                    'strokeWidth': 3.4,
                    'strokeDasharray': null,
                    'strokeLinecap': 'round'
                };
                var13 = 17;
                var20 = var15[var13];
                var20 = var14.bind(var3)(var20);
                var20 = var20.unsafe_rawColors;
                var20 = var20.OPACITY_24;
                var17.stroke = var20;
                var17.strokeDasharray = var12;
                var17 = var19.bind(var3)(var18, var17);
                var7.children = var17;
                var7 = var16.bind(var3)(var10, var7);
                var4[2] = var7;
                var7 = _closure1_slot8;
                var5 = var15[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Svg;
                var5 = {};
                var10 = _closure1_slot10;
                var5.height = var10;
                var10 = _closure1_slot10;
                var5.width = var10;
                var9 = var9.canvas;
                var5.style = var9;
                var10 = _closure1_slot8;
                var9 = _closure1_slot11;
                var8 = {
                    'cx': 16,
                    'cy': 16,
                    'r': 14.3,
                    'fill': 'none',
                    'stroke': null,
                    'strokeWidth': 3.4
                };
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.unsafe_rawColors;
                var13 = var13.GREEN_300;
                var8.stroke = var13;
                var8.strokeDasharray = var12;
                var8.animatedProps = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestVariants;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot8 = var8;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 32;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var7.bind(var0)(var3);
    var7 = var8.createAnimatedComponent;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Circle;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'position': 'relative',
        'width': 32,
        'height': 32,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var9;
    var9 = {
        'shadowOffset': null,
        'shadowRadius': 12,
        'shadowOpacity': 0,
        'elevation': 4,
        'shadowColor': '#30C77399'
    };
    var10 = {
        'width': 0,
        'height': 0
    };
    var9.shadowOffset = var10;
    var3.completionGlow = var9;
    var9 = {};
    var10 = 'absolute';
    var9.position = var10;
    var12 = {};
    var11 = '-90deg';
    var12.rotate = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var9.transform = var11;
    var3.canvas = var9;
    var9 = {};
    var9.position = var10;
    var3.buttonWrapper = var9;
    var9 = {
        'position': 'absolute',
        'pointerEvents': 'none'
    };
    var3.confetti = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = 'function QuestActivityButtonTsx1(){const{styles,glowOpacity}=this.__closure;return{...styles.completionGlow,shadowOpacity:glowOpacity.get()};}';
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function QuestActivityButtonTsx2(){const{circumference,animatedProgress}=this.__closure;return{strokeDashoffset:circumference-circumference*animatedProgress.get()};}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun110611: for (var _fun110611_ip = 0;;) switch (_fun110611_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.applicationId;
                var _closure2_slot0 = var6;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 10;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.quests;
                    return var0;
                };
                var7 = var5.bind(var7)(var3, var2);
                var _closure2_slot1 = var7;
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getEligibleQuestsForApplicationId;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var0 = true;
                    var2 = var3.bind(var4)(var2, var1, var0);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.config;
                        var2 = var0.features;
                        var1 = var2.includes;
                        var0 = _closure1_slot7;
                        var0 = var0.MOBILE_ACTIVITY_QUEST;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var3.bind(var5)(var0, var2);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun110611_ip = 137;
                    continue _fun110611
                }
            case 116:
                var3 = _closure1_slot8;
                var2 = _closure1_slot15;
                var1 = {};
                var1.quest = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 137:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/panel/native/QuestActivityButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 5231, 5233, 33, 3722, 5465, 1297, 5318, 566, 4098, 6623, 10773, 7535, 10724, 1234, 671, 12163, 2]);