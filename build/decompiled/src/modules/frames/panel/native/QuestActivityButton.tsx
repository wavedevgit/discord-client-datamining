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
        _fun111076: for (var _fun111076_ip = 0;;) switch (_fun111076_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.quest;
                var _closure2_slot0 = var4;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var2 = var5.bind(var3)(var0);
                var0 = var2.useQuestCompletionDetails;
                var0 = var0.bind(var2)(var4);
                var2 = var0.completedRatio;
                var _closure2_slot1 = var2;
                var0 = 10;
                var0 = var6[var0];
                var7 = var5.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var1
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var7 = var6.bind(var7)(var5, var0);
                var _closure2_slot2 = var7;
                var8 = _closure1_slot3;
                var6 = var8.useCallback;
                var0 = var4.id;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var1
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 11;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 13;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 12;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var2.questId = var1;
                    var1 = 'QuestProgressBottomSheet';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var19 = var6.bind(var8)(var0, var5);
                var0 = global;
                var0 = var0.Math;
                var5 = var0.PI;
                var0 = 2;
                var5 = var0 * var5;
                var0 = 14.3;
                var15 = var5 * var0;
                var _closure2_slot3 = var15;
                var6 = null;
                var5 = var6 == var4;
                var0 = undefined;
                if (var5) {
                    _fun111076_ip = 233;
                    continue _fun111076
                }
            case 212:
                var4 = var4.userStatus;
                var5 = var6 == var4;
                var0 = undefined;
                if (var5) {
                    _fun111076_ip = 233;
                    continue _fun111076
                }
            case 227:
                var0 = var4.completedAt;
            case 233:
                var8 = var6 != var0;
                _closure2_slot4 = var8;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 6;
                var9 = var4[var0];
                var10 = var5.bind(var3)(var9);
                var9 = var10.useSharedValue;
                var17 = var9.bind(var10)(var2);
                _closure2_slot5 = var17;
                var4 = var4[var0];
                var9 = var5.bind(var3)(var4);
                var5 = var9.useSharedValue;
                var4 = 0;
                if (!var8) {
                    _fun111076_ip = 299;
                    continue _fun111076
                }
            case 296:
                var4 = 1;
            case 299:
                var12 = var5.bind(var9)(var4);
                _closure2_slot6 = var12;
                var5 = _closure1_slot3;
                var4 = var5.useRef;
                var20 = var4.bind(var5)(var6);
                _closure2_slot7 = var20;
                var4 = _closure1_slot12;
                var10 = var4.bind(var3)();
                _closure2_slot8 = var10;
                var9 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = var18[var0];
                var6 = var9.bind(var3)(var4);
                var5 = var6.useAnimatedStyle;
                var4 = function() {
                    var0 = {};
                    var2 = _closure2_slot8;
                    var3 = var2.completionGlow;
                    var4 = var0;
                    var2 = copyDataProperties(var4, var3);
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 'shadowOpacity';
                    var0[var1] = var2;
                    return var0;
                };
                var13 = {};
                var13.styles = var10;
                var13.glowOpacity = var12;
                var4.__closure = var13;
                var13 = 13949105036113.0;
                var4.__workletHash = var13;
                var13 = _closure1_slot13;
                var4.__initData = var13;
                var5 = var5.bind(var6)(var4);
                var14 = _closure1_slot3;
                var13 = var14.useMemo;
                var4 = var10.confetti;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var1
                    var0 = {};
                    var1 = _closure2_slot8;
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
                var16 = var13.bind(var14)(var4, var6);
                var4 = var18[var0];
                var13 = var9.bind(var3)(var4);
                var6 = var13.useAnimatedProps;
                var4 = function() {
                    var0 = {};
                    var2 = _closure2_slot3;
                    var3 = _closure2_slot5;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var1 = var2 * var1;
                    var1 = var2 - var1;
                    var0.strokeDashoffset = var1;
                    return var0;
                };
                var14 = {};
                var14.circumference = var15;
                var14.animatedProgress = var17;
                var4.__closure = var14;
                var14 = 3373122453897.0;
                var4.__workletHash = var14;
                var14 = _closure1_slot14;
                var4.__initData = var14;
                var14 = var6.bind(var13)(var4);
                var13 = _closure1_slot3;
                var6 = var13.useEffect;
                var4 = new Array(3);
                var4[0] = var17;
                var4[1] = var2;
                var4[2] = var7;
                var2 = function() { // Environment: var1
                    _fun111082: for (var _fun111082_ip = 0;;) switch (_fun111082_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = var2.set;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 14;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.withTiming;
                            var3 = _closure2_slot1;
                            var0 = {};
                            var7 = _closure2_slot2;
                            var6 = 500;
                            if (!var7) {
                                _fun111082_ip = 63;
                                continue _fun111082
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
                                var1 = _closure2_slot5;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            return var0;
                    }
                };
                var2 = var6.bind(var13)(var2, var4);
                var6 = _closure1_slot3;
                var4 = var6.useEffect;
                var2 = new Array(3);
                var2[0] = var12;
                var2[1] = var8;
                var2[2] = var7;
                var1 = function() { // Environment: var1
                    _fun111084: for (var _fun111084_ip = 0;;) switch (_fun111084_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun111084_ip = 119;
                                continue _fun111084
                            }
                        case 10:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun111084_ip = 119;
                                continue _fun111084
                            }
                        case 17:
                            var1 = _closure2_slot4;
                            if (!var1) {
                                _fun111084_ip = 160;
                                continue _fun111084
                            }
                        case 27:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 14;
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
                            var1 = _closure2_slot7;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun111084_ip = 160;
                                continue _fun111084
                            }
                        case 107:
                            var1 = var2.play;
                            var1 = var1.bind(var2)();
                            _fun111084_ip = 160;
                            continue _fun111084;
                        case 119:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                            var0 = _closure2_slot7;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun111084_ip = 160;
                                continue _fun111084
                            }
                        case 150:
                            var0 = var1.reset;
                            var0 = var0.bind(var1)();
                        case 160:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var4.bind(var6)(var1, var2);
                var2 = _closure1_slot9;
                var17 = _closure1_slot1;
                var0 = var18[var0];
                var0 = var17.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = var10.container;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var4 = 'box-none';
                var0.pointerEvents = var4;
                var6 = _closure1_slot8;
                var5 = _closure1_slot4;
                var4 = {};
                var12 = 'none';
                var4.pointerEvents = var12;
                var13 = _closure1_slot8;
                var7 = 15;
                var7 = var18[var7];
                var8 = var17.bind(var3)(var7);
                var7 = {};
                var7.ref = var20;
                var20 = 16;
                var20 = var18[var20];
                var20 = var9.bind(var3)(var20);
                var7.source = var20;
                var7.style = var16;
                var16 = false;
                var7.autoPlay = var16;
                var7.loop = var16;
                var7 = var13.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var10.buttonWrapper;
                var5.style = var8;
                var16 = _closure1_slot8;
                var8 = 17;
                var8 = var18[var8];
                var8 = var9.bind(var3)(var8);
                var13 = var8.IconButton;
                var8 = {
                    'onPress': null,
                    'icon': null,
                    'accessibilityLabel': null,
                    'variant': 'secondary-overlay',
                    'maxFontSizeMultiplier': 4,
                    'size': 'sm'
                };
                var8.onPress = var19;
                var19 = 18;
                var19 = var18[var19];
                var19 = var17.bind(var3)(var19);
                var8.icon = var19;
                var19 = 19;
                var20 = var18[var19];
                var20 = var9.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var18[var19];
                var19 = var9.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.JALI2K;
                var19 = var20.bind(var21)(var19);
                var8.accessibilityLabel = var19;
                var8 = var16.bind(var3)(var13, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var5.pointerEvents = var12;
                var8 = var10.canvas;
                var5.style = var8;
                var20 = _closure1_slot8;
                var8 = 7;
                var13 = var18[var8];
                var13 = var9.bind(var3)(var13);
                var19 = var13.Svg;
                var13 = {};
                var16 = _closure1_slot10;
                var13.height = var16;
                var16 = _closure1_slot10;
                var13.width = var16;
                var23 = _closure1_slot8;
                var16 = var18[var8];
                var16 = var9.bind(var3)(var16);
                var22 = var16.Circle;
                var21 = {
                    'cx': 16,
                    'cy': 16,
                    'r': 14.3,
                    'fill': 'none',
                    'stroke': null,
                    'strokeWidth': 3.4
                };
                var16 = 20;
                var24 = var18[var16];
                var24 = var17.bind(var3)(var24);
                var24 = var24.unsafe_rawColors;
                var24 = var24.OPACITY_32;
                var21.stroke = var24;
                var21.strokeDasharray = var15;
                var21 = var23.bind(var3)(var22, var21);
                var13.children = var21;
                var13 = var20.bind(var3)(var19, var13);
                var5.children = var13;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var5.pointerEvents = var12;
                var10 = var10.canvas;
                var5.style = var10;
                var10 = _closure1_slot8;
                var8 = var18[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Svg;
                var8 = {};
                var12 = _closure1_slot10;
                var8.height = var12;
                var12 = _closure1_slot10;
                var8.width = var12;
                var13 = _closure1_slot8;
                var12 = _closure1_slot11;
                var11 = {
                    'cx': 16,
                    'cy': 16,
                    'r': 14.3,
                    'fill': 'none',
                    'stroke': null,
                    'strokeWidth': 3.4
                };
                var16 = var18[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.unsafe_rawColors;
                var16 = var16.GREEN_300;
                var11.stroke = var16;
                var11.strokeDasharray = var15;
                var11.animatedProps = var14;
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
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
    var9 = {};
    var9.position = var10;
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
        _fun111085: for (var _fun111085_ip = 0;;) switch (_fun111085_ip) {
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
                    var0 = 21;
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
                    _fun111085_ip = 137;
                    continue _fun111085
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
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/frames/panel/native/QuestActivityButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 5278, 5280, 33, 3721, 5512, 1297, 5365, 566, 3279, 14303, 1307, 4097, 6666, 10811, 7579, 10762, 1234, 671, 12209, 2]);