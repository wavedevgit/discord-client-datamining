// modules/voice_messages/native/components/VoiceMessageOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun91072: for (var _fun91072_ip = 0;;) switch (_fun91072_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.safeAreaBottom;
                var _closure2_slot0 = var6;
                var10 = var1.initialAnimation;
                var _closure2_slot1 = var10;
                var5 = var1.voiceMessageAnimationState;
                var _closure2_slot2 = var5;
                var1 = _closure1_slot21;
                var3 = undefined;
                var11 = var1.bind(var3)();
                var4 = _closure1_slot4;
                var2 = var4.useState;
                var1 = false;
                var4 = var2.bind(var4)(var1);
                var2 = _closure1_slot3;
                var1 = 2;
                var4 = var2.bind(var3)(var4, var1);
                var1 = 0;
                var1 = var4[var1];
                var2 = 1;
                var14 = var4[var2];
                var _closure2_slot3 = var14;
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 11;
                var2 = var15[var4];
                var12 = var16.bind(var3)(var2);
                var9 = var12.useAnimatedReaction;
                var7 = function() {
                    _fun91073: for (var _fun91073_ip = 0;;) switch (_fun91073_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var3 = 1;
                            var4 = var0[var3];
                            var0 = _closure1_slot10;
                            var0 = var0.LOCKED;
                            var0 = var4 === var0;
                            if (var0) {
                                _fun91073_ip = 74;
                                continue _fun91073
                            }
                        case 43:
                            var4 = _closure2_slot2;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var2 = var2[var3];
                            var1 = _closure1_slot10;
                            var1 = var1.LOCKING;
                            var0 = var2 === var1;
                        case 74:
                            return var0;
                    }
                };
                var2 = {};
                var2.voiceMessageAnimationState = var5;
                var13 = _closure1_slot10;
                var2.VoiceMessageAnimationState = var13;
                var7.__closure = var2;
                var2 = 16672558304670.0;
                var7.__workletHash = var2;
                var2 = _closure1_slot41;
                var7.__initData = var2;
                var2 = function arg0, arg1() {
                    _fun91074: for (var _fun91074_ip = 0;;) switch (_fun91074_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            if (!(var2 !== var0)) {
                                _fun91074_ip = 57;
                                continue _fun91074
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.runOnJS;
                            var0 = _closure2_slot3;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.bind(var1)(var2);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = {};
                var15 = var15[var4];
                var15 = var16.bind(var3)(var15);
                var15 = var15.runOnJS;
                var13.runOnJS = var15;
                var13.setLocked = var14;
                var2.__closure = var13;
                var13 = 10857258354778.0;
                var2.__workletHash = var13;
                var13 = _closure1_slot42;
                var2.__initData = var13;
                var2 = var9.bind(var12)(var7, var2);
                var2 = function arg0() {
                    _fun91075: for (var _fun91075_ip = 0;;) switch (_fun91075_ip) {
                        case 0:
                            var11 = arg0;
                            var _closure3_slot0 = var11;
                            var7 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var0 = 24;
                            var0 = var5[var0];
                            var9 = undefined;
                            var0 = var7.bind(var9)(var0);
                            var8 = var0.bind(var9)();
                            var12 = _closure1_slot0;
                            var2 = 25;
                            var0 = var5[var2];
                            var10 = var12.bind(var9)(var0);
                            var6 = var10.useToken;
                            var0 = 18;
                            var3 = var5[var0];
                            var3 = var7.bind(var9)(var3);
                            var3 = var3.colors;
                            var3 = var3.BACKGROUND_BASE_LOWEST;
                            var3 = var6.bind(var10)(var3);
                            var6 = var5[var0];
                            var6 = var7.bind(var9)(var6);
                            var6 = var6.unsafe_rawColors;
                            var7 = var6.WHITE;
                            var6 = _closure1_slot34;
                            var10 = 26;
                            var5 = var5[var10];
                            var12 = var12.bind(var9)(var5);
                            var5 = var12.isThemeLight;
                            var12 = var5.bind(var12)(var8);
                            var5 = var3;
                            if (!var12) {
                                _fun91075_ip = 144;
                                continue _fun91075
                            }
                        case 141:
                            var5 = var7;
                        case 144:
                            var13 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var12 = var12[var10];
                            var13 = var13.bind(var9)(var12);
                            var12 = var13.isThemeLight;
                            var12 = var12.bind(var13)(var8);
                            if (!var12) {
                                _fun91075_ip = 178;
                                continue _fun91075
                            }
                        case 175:
                            var3 = var7;
                        case 178:
                            var21 = undefined;
                            var20 = var11;
                            var19 = var5;
                            var18 = var3;
                            var17 = var7;
                            var16 = var7;
                            var13 = var21[var6](var20, var19, var18, var17, var16, var15);
                            var _closure3_slot1 = var13;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = var3[var2];
                            var6 = var7.bind(var9)(var5);
                            var5 = var6.useToken;
                            var3 = var3[var10];
                            var7 = var7.bind(var9)(var3);
                            var3 = var7.isThemeLight;
                            var3 = var3.bind(var7)(var8);
                            var8 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var7 = var7[var0];
                            var7 = var8.bind(var9)(var7);
                            var7 = var7.colors;
                            if (var3) {
                                _fun91075_ip = 279;
                                continue _fun91075
                            }
                        case 271:
                            var3 = var7.INTERACTIVE_TEXT_ACTIVE;
                            _fun91075_ip = 285;
                            continue _fun91075;
                        case 279:
                            var3 = var7.INTERACTIVE_TEXT_DEFAULT;
                        case 285:
                            var3 = var5.bind(var6)(var3);
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var2 = var10[var2];
                            var5 = var8.bind(var9)(var2);
                            var2 = var5.useToken;
                            var6 = _closure1_slot1;
                            var0 = var10[var0];
                            var0 = var6.bind(var9)(var0);
                            var0 = var0.colors;
                            var0 = var0.STATUS_POSITIVE;
                            var2 = var2.bind(var5)(var0);
                            var0 = _closure1_slot34;
                            var21 = undefined;
                            var20 = var11;
                            var19 = var3;
                            var18 = var3;
                            var17 = var2;
                            var16 = var2;
                            var12 = var21[var0](var20, var19, var18, var17, var16, var15);
                            var _closure3_slot2 = var12;
                            var7 = 11;
                            var0 = var10[var7];
                            var3 = var8.bind(var9)(var0);
                            var2 = var3.useDerivedValue;
                            var0 = function() {
                                var1 = _closure3_slot0;
                                var0 = var1.get;
                                var1 = var0.bind(var1)();
                                var0 = 1;
                                var3 = var1[var0];
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 23;
                                var0 = var7[var0];
                                var5 = undefined;
                                var2 = var6.bind(var5)(var0);
                                var1 = var2.withTiming;
                                var0 = {};
                                var4 = 11;
                                var4 = var7[var4];
                                var4 = var6.bind(var5)(var4);
                                var4 = var4.Easing;
                                var4 = var4.linear;
                                var0.easing = var4;
                                var4 = 150;
                                var0.duration = var4;
                                var0 = var1.bind(var2)(var3, var0);
                                return var0;
                            };
                            var5 = {};
                            var5.voiceMessageAnimationState = var11;
                            var6 = 23;
                            var6 = var10[var6];
                            var6 = var8.bind(var9)(var6);
                            var6 = var6.withTiming;
                            var5.withTiming = var6;
                            var6 = var10[var7];
                            var6 = var8.bind(var9)(var6);
                            var6 = var6.Easing;
                            var5.Easing = var6;
                            var0.__closure = var5;
                            var5 = 11385805572554.0;
                            var0.__workletHash = var5;
                            var5 = _closure1_slot35;
                            var0.__initData = var5;
                            var6 = var2.bind(var3)(var0);
                            var _closure3_slot3 = var6;
                            var0 = var10[var7];
                            var3 = var8.bind(var9)(var0);
                            var2 = var3.useDerivedValue;
                            var0 = function() {
                                _fun91077: for (var _fun91077_ip = 0;;) switch (_fun91077_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var0 = var2.get;
                                        var4 = var0.bind(var2)();
                                        var2 = _closure1_slot3;
                                        var5 = undefined;
                                        var3 = 2;
                                        var6 = var2.bind(var5)(var4, var3);
                                        var2 = 0;
                                        var4 = var6[var2];
                                        var2 = 1;
                                        var2 = var6[var2];
                                        var2 = var4 + var2;
                                        if (!(var2 !== var3)) {
                                            _fun91077_ip = 67;
                                            continue _fun91077
                                        }
                                    case 55:
                                        var4 = [1, 0, 1, 0];
                                        _fun91077_ip = 77;
                                        continue _fun91077;
                                    case 67:
                                        var4 = [1, 1, 1, 0];
                                    case 77:
                                        var3 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var2 = 11;
                                        var2 = var6[var2];
                                        var3 = var3.bind(var5)(var2);
                                        var2 = var3.interpolate;
                                        var5 = _closure3_slot3;
                                        var1 = var5.get;
                                        var1 = var1.bind(var5)();
                                        var0 = _closure1_slot23;
                                        var0 = var2.bind(var3)(var1, var0, var4);
                                        return var0;
                                }
                            };
                            var5 = {};
                            var5.voiceMessageAnimationState = var11;
                            var11 = var10[var7];
                            var11 = var8.bind(var9)(var11);
                            var11 = var11.interpolate;
                            var5.interpolate = var11;
                            var5.timing = var6;
                            var11 = _closure1_slot23;
                            var5.VOICE_MESSAGE_ANIMATION_STATES = var11;
                            var0.__closure = var5;
                            var5 = 13564673991122.0;
                            var0.__workletHash = var5;
                            var5 = _closure1_slot36;
                            var0.__initData = var5;
                            var14 = var2.bind(var3)(var0);
                            var _closure3_slot4 = var14;
                            var0 = {};
                            var2 = var10[var7];
                            var5 = var8.bind(var9)(var2);
                            var3 = var5.useAnimatedStyle;
                            var2 = function() {
                                var0 = {};
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 11;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.interpolate;
                                var3 = _closure3_slot3;
                                var2 = var3.get;
                                var3 = var2.bind(var3)();
                                var2 = _closure1_slot23;
                                var1 = [68, 68, 104, 104];
                                var1 = var4.bind(var5)(var3, var2, var1);
                                var0.height = var1;
                                return var0;
                            };
                            var11 = {};
                            var15 = var10[var7];
                            var15 = var8.bind(var9)(var15);
                            var15 = var15.interpolate;
                            var11.interpolate = var15;
                            var11.timing = var6;
                            var15 = _closure1_slot23;
                            var11.VOICE_MESSAGE_ANIMATION_STATES = var15;
                            var2.__closure = var11;
                            var11 = 16239675884614.0;
                            var2.__workletHash = var11;
                            var11 = _closure1_slot37;
                            var2.__initData = var11;
                            var2 = var3.bind(var5)(var2);
                            var0.lockParentContainerStyle = var2;
                            var2 = var10[var7];
                            var5 = var8.bind(var9)(var2);
                            var3 = var5.useAnimatedStyle;
                            var2 = function() {
                                var0 = {};
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 11;
                                var2 = var6[var3];
                                var4 = undefined;
                                var11 = var5.bind(var4)(var2);
                                var10 = var11.interpolate;
                                var8 = _closure3_slot3;
                                var7 = var8.get;
                                var9 = var7.bind(var8)();
                                var8 = _closure1_slot23;
                                var7 = [40, 40, 56, 56];
                                var7 = var10.bind(var11)(var9, var8, var7);
                                var0.width = var7;
                                var7 = var6[var3];
                                var11 = var5.bind(var4)(var7);
                                var10 = var11.interpolate;
                                var8 = _closure3_slot3;
                                var7 = var8.get;
                                var9 = var7.bind(var8)();
                                var8 = _closure1_slot23;
                                var7 = [68, 68, 56, 56];
                                var7 = var10.bind(var11)(var9, var8, var7);
                                var0.height = var7;
                                var8 = _closure3_slot4;
                                var7 = var8.get;
                                var7 = var7.bind(var8)();
                                var0.opacity = var7;
                                var8 = _closure3_slot1;
                                var7 = var8.get;
                                var7 = var7.bind(var8)();
                                var0.backgroundColor = var7;
                                var7 = var6[var3];
                                var11 = var5.bind(var4)(var7);
                                var10 = var11.interpolate;
                                var8 = _closure3_slot3;
                                var7 = var8.get;
                                var9 = var7.bind(var8)();
                                var8 = _closure1_slot23;
                                var7 = [0, 0];
                                var12 = -8;
                                var7[2] = var12;
                                var7[3] = var12;
                                var7 = var10.bind(var11)(var9, var8, var7);
                                var0.marginHorizontal = var7;
                                var3 = var6[var3];
                                var5 = var5.bind(var4)(var3);
                                var4 = var5.interpolate;
                                var3 = _closure3_slot3;
                                var2 = var3.get;
                                var3 = var2.bind(var3)();
                                var2 = _closure1_slot23;
                                var1 = [0, 0, 36, 36];
                                var1 = var4.bind(var5)(var3, var2, var1);
                                var0.marginBottom = var1;
                                return var0;
                            };
                            var11 = {};
                            var15 = var10[var7];
                            var15 = var8.bind(var9)(var15);
                            var15 = var15.interpolate;
                            var11.interpolate = var15;
                            var11.timing = var6;
                            var15 = _closure1_slot23;
                            var11.VOICE_MESSAGE_ANIMATION_STATES = var15;
                            var11.lockContainerOpacity = var14;
                            var11.lockedBackgroundColor = var13;
                            var2.__closure = var11;
                            var11 = 16191961901595.0;
                            var2.__workletHash = var11;
                            var11 = _closure1_slot38;
                            var2.__initData = var11;
                            var2 = var3.bind(var5)(var2);
                            var0.lockContainerStyle = var2;
                            var2 = var10[var7];
                            var5 = var8.bind(var9)(var2);
                            var3 = var5.useAnimatedStyle;
                            var2 = function() {
                                var0 = {};
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 11;
                                var1 = var6[var3];
                                var4 = undefined;
                                var11 = var5.bind(var4)(var1);
                                var10 = var11.interpolate;
                                var8 = _closure3_slot3;
                                var7 = var8.get;
                                var9 = var7.bind(var8)();
                                var8 = _closure1_slot23;
                                var7 = [24, 24, 32, 32];
                                var7 = var10.bind(var11)(var9, var8, var7);
                                var0.width = var7;
                                var7 = var6[var3];
                                var11 = var5.bind(var4)(var7);
                                var10 = var11.interpolate;
                                var8 = _closure3_slot3;
                                var7 = var8.get;
                                var9 = var7.bind(var8)();
                                var8 = _closure1_slot23;
                                var7 = [24, 24, 32, 32];
                                var7 = var10.bind(var11)(var9, var8, var7);
                                var0.height = var7;
                                var3 = var6[var3];
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.interpolate;
                                var4 = _closure3_slot3;
                                var3 = var4.get;
                                var4 = var3.bind(var4)();
                                var3 = _closure1_slot23;
                                var2 = [12, 12, 10, 10];
                                var2 = var5.bind(var6)(var4, var3, var2);
                                var0.marginTop = var2;
                                var2 = _closure3_slot2;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var0.tintColor = var1;
                                return var0;
                            };
                            var11 = {};
                            var13 = var10[var7];
                            var13 = var8.bind(var9)(var13);
                            var13 = var13.interpolate;
                            var11.interpolate = var13;
                            var11.timing = var6;
                            var13 = _closure1_slot23;
                            var11.VOICE_MESSAGE_ANIMATION_STATES = var13;
                            var11.lockIconColor = var12;
                            var2.__closure = var11;
                            var11 = 10256653077678.0;
                            var2.__workletHash = var11;
                            var11 = _closure1_slot39;
                            var2.__initData = var11;
                            var2 = var3.bind(var5)(var2);
                            var0.lockIconStyle = var2;
                            var2 = var10[var7];
                            var3 = var8.bind(var9)(var2);
                            var2 = var3.useAnimatedStyle;
                            var1 = function() {
                                var0 = {};
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 11;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.interpolate;
                                var3 = _closure3_slot3;
                                var2 = var3.get;
                                var3 = var2.bind(var3)();
                                var2 = _closure1_slot23;
                                var1 = [1, 1, 0, 0];
                                var1 = var4.bind(var5)(var3, var2, var1);
                                var0.opacity = var1;
                                return var0;
                            };
                            var5 = {};
                            var7 = var10[var7];
                            var7 = var8.bind(var9)(var7);
                            var7 = var7.interpolate;
                            var5.interpolate = var7;
                            var5.timing = var6;
                            var6 = _closure1_slot23;
                            var5.VOICE_MESSAGE_ANIMATION_STATES = var6;
                            var1.__closure = var5;
                            var5 = 13143453012261.0;
                            var1.__workletHash = var5;
                            var4 = _closure1_slot40;
                            var1.__initData = var4;
                            var1 = var2.bind(var3)(var1);
                            var0.chevonStyle = var1;
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var5);
                var7 = var2.lockParentContainerStyle;
                var9 = var2.lockContainerStyle;
                var16 = var2.lockIconStyle;
                var14 = var2.chevonStyle;
                var2 = _closure1_slot1;
                var12 = _closure1_slot2;
                if (var1) {
                    _fun91072_ip = 303;
                    continue _fun91072
                }
            case 294:
                var1 = 28;
                var1 = var12[var1];
                _fun91072_ip = 310;
                continue _fun91072;
            case 303:
                var5 = 27;
                var1 = var12[var5];
            case 310:
                var15 = var2.bind(var3)(var1);
                var2 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = var13[var4];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var3 = _closure2_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var0.opacity = var2;
                    var2 = _closure2_slot0;
                    var1 = _closure1_slot12;
                    var2 = var2 + var1;
                    var1 = 24;
                    var2 = var2 + var1;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 8;
                    var1 = var1 * var3;
                    var1 = var2 + var1;
                    var0.bottom = var1;
                    return var0;
                };
                var5 = {};
                var5.initialAnimation = var10;
                var5.safeAreaBottom = var6;
                var6 = _closure1_slot12;
                var5.CHAT_INPUT_HEIGHT = var6;
                var6 = 32;
                var5.LOCK_PILL_BOTTOM_OFFSET = var6;
                var6 = 8;
                var5.INITIAL_SHIFT = var6;
                var0.__closure = var5;
                var5 = 601776335657.0;
                var0.__workletHash = var5;
                var5 = _closure1_slot43;
                var0.__initData = var5;
                var6 = var1.bind(var2)(var0);
                var2 = _closure1_slot14;
                var12 = _closure1_slot1;
                var0 = var13[var4];
                var0 = var12.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var10 = var11.lockParentContainer;
                var5 = new Array(3);
                var5[0] = var10;
                var5[1] = var7;
                var5[2] = var6;
                var0.style = var5;
                var6 = _closure1_slot15;
                var4 = var13[var4];
                var4 = var12.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var10 = var11.lockContainer;
                var7 = new Array(2);
                var7[0] = var10;
                var7[1] = var9;
                var4.style = var7;
                var10 = _closure1_slot14;
                var9 = _closure1_slot17;
                var7 = {};
                var7.style = var16;
                var7.source = var15;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot14;
                var9 = _closure1_slot17;
                var8 = {};
                var15 = var11.chevon;
                var11 = new Array(2);
                var11[0] = var15;
                var11[1] = var14;
                var8.style = var11;
                var11 = 29;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var8.source = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot53 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = arg3;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot5 = var4;
    var12 = var1.StyleSheet;
    var1 = var1.AppState;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.useVoiceMessagesUIStore;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.VoiceMessageAnimationState;
    var _closure1_slot10 = var4;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ComponentActionsKeyed;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var13 = var1.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var9 = var1.CHAT_INPUT_HEIGHT;
    var _closure1_slot12 = var9;
    var14 = var1.CHAT_INPUT_HORIZONTAL_PADDING;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot13 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var9 = var1.jsx;
    var _closure1_slot14 = var9;
    var9 = var1.jsxs;
    var _closure1_slot15 = var9;
    var1 = var1.Fragment;
    var _closure1_slot16 = var1;
    var1 = 11;
    var9 = var6[var1];
    var11 = var8.bind(var0)(var9);
    var10 = var11.createAnimatedComponent;
    var9 = 12;
    var9 = var6[var9];
    var9 = var8.bind(var0)(var9);
    var9 = var10.bind(var11)(var9);
    var _closure1_slot17 = var9;
    var9 = var6[var1];
    var11 = var8.bind(var0)(var9);
    var10 = var11.createAnimatedComponent;
    var9 = 13;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var9 = var9.PressableOpacity;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot18 = var9;
    var1 = var6[var1];
    var10 = var8.bind(var0)(var1);
    var9 = var10.createAnimatedComponent;
    var1 = 14;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Text;
    var1 = var9.bind(var10)(var1);
    var _closure1_slot19 = var1;
    var1 = 15;
    var1 = var6[var1];
    var10 = var8.bind(var0)(var1);
    var9 = var10.memoize;
    var1 = function() { // Environment: var3
        var2 = _closure1_slot1;
        var5 = _closure1_slot2;
        var1 = 11;
        var1 = var5[var1];
        var4 = undefined;
        var2 = var2.bind(var4)(var1);
        var1 = var2.createAnimatedComponent;
        var3 = _closure1_slot0;
        var0 = 16;
        var0 = var5[var0];
        var0 = var3.bind(var4)(var0);
        var0 = var0.Ellipse;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1 = var9.bind(var10)(var1);
    var _closure1_slot20 = var1;
    var1 = 17;
    var1 = var6[var1];
    var11 = var5.bind(var0)(var1);
    var10 = var11.createStyles;
    var9 = {};
    var1 = {};
    var16 = 'center';
    var1.alignItems = var16;
    var19 = var12.absoluteFillObject;
    var20 = var1;
    var12 = copyDataProperties(var20, var19);
    var15 = 'hidden';
    var12 = 'overflow';
    var1[var12] = var15;
    var9.container = var1;
    var1 = {
        'flexDirection': 'row',
        'alignItems': 'flex-end',
        'paddingTop': 8,
        'paddingHorizontal': null,
        'paddingBottom': 9
    };
    var1.paddingHorizontal = var14;
    var9.innerContainer = var1;
    var15 = 'absolute';
    var1 = {
        'position': 'absolute',
        'bottom': 0,
        'width': '100%',
        'alignItems': 'center',
        'overflow': 'hidden'
    };
    var9.contentContainer = var1;
    var12 = {};
    var12.width = var13;
    var12.height = var13;
    var1 = 18;
    var17 = var6[var1];
    var17 = var8.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var12.borderRadius = var17;
    var12.alignItems = var16;
    var12.justifyContent = var16;
    var9.trashContainer = var12;
    var12 = {};
    var12.width = var13;
    var12.height = var13;
    var17 = var6[var1];
    var17 = var8.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var12.borderRadius = var17;
    var12.alignItems = var16;
    var12.justifyContent = var16;
    var9.sendContainer = var12;
    var12 = {
        'flex': 1,
        'height': null,
        'marginRight': 8,
        'alignItems': 'flex-end'
    };
    var12.height = var13;
    var9.voiceChatContainer = var12;
    var12 = {
        'height': 68,
        'width': null,
        'borderRadius': null,
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'column',
        'elevation': 12
    };
    var12.width = var13;
    var16 = var6[var1];
    var16 = var8.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.round;
    var12.borderRadius = var16;
    var16 = var6[var1];
    var16 = var8.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.BLACK;
    var12.shadowColor = var16;
    var16 = {
        'width': 0,
        'height': 12
    };
    var12.shadowOffset = var16;
    var16 = 0.12;
    var12.shadowOpacity = var16;
    var16 = 36;
    var12.shadowRadius = var16;
    var16 = 19;
    var16 = var6[var16];
    var16 = var5.bind(var0)(var16);
    var16 = var16.DARK_0_LIGHT_1;
    var12.borderWidth = var16;
    var16 = 'solid';
    var12.borderStyle = var16;
    var16 = 'rgba(0, 0, 0, 0.08)';
    var12.borderColor = var16;
    var9.lockContainer = var12;
    var12 = {};
    var12.position = var15;
    var12.right = var14;
    var12.width = var13;
    var9.lockParentContainer = var12;
    var12 = {
        'height': 16,
        'width': 16,
        'marginTop': 8
    };
    var13 = var6[var1];
    var13 = var8.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.ICON_SUBTLE;
    var12.tintColor = var13;
    var9.chevon = var12;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot21 = var9;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.unsafe_rawColors;
    var1 = var1.PLUM_13;
    var _closure1_slot22 = var1;
    var8 = var4.SENDING;
    var1 = new Array(4);
    var1[0] = var8;
    var8 = var4.CANCELLING;
    var1[1] = var8;
    var8 = var4.LOCKING;
    var1[2] = var8;
    var4 = var4.LOCKED;
    var1[3] = var4;
    var _closure1_slot23 = var1;
    var1 = {};
    var4 = 'function VoiceMessageOverlayTsx1(){const{useReducedMotion,currWaveHeight}=this.__closure;var _currWaveHeight$get,_currWaveHeight;return useReducedMotion?0.5:(_currWaveHeight$get=(_currWaveHeight=currWaveHeight)===null||_currWaveHeight===void 0?void 0:_currWaveHeight.get())!==null&&_currWaveHeight$get!==void 0?_currWaveHeight$get:0;}';
    var1.code = var4;
    var _closure1_slot24 = var1;
    var1 = {};
    var4 = 'function VoiceMessageOverlayTsx2(){const{derivedCurrWaveHeight,offsetThreshold}=this.__closure;return derivedCurrWaveHeight.get()*offsetThreshold;}';
    var1.code = var4;
    var _closure1_slot25 = var1;
    var1 = {};
    var4 = 'function VoiceMessageOverlayTsx3(){const{voiceMessageEllipseBgColor,radius,offset}=this.__closure;return{fill:voiceMessageEllipseBgColor.get(),ry:radius+offset.get(),rx:radius,cy:radius+offset.get(),cx:radius};}';
    var1.code = var4;
    var _closure1_slot26 = var1;
    var1 = {};
    var4 = "function VoiceMessageOverlayTsx4(){const{radius,height,offset}=this.__closure;return{position:'absolute',width:radius*2,height:height.get()+offset.get(),bottom:0};}";
    var1.code = var4;
    var _closure1_slot27 = var1;
    var4 = var7.memo;
    var1 = function(arg0) { // Environment: var3
        var0 = arg0;
        var14 = var0.radius;
        var _closure2_slot0 = var14;
        var10 = var0.opacity;
        var13 = var0.height;
        var _closure2_slot1 = var13;
        var12 = var0.offsetThreshold;
        var _closure2_slot2 = var12;
        var17 = var0.voiceMessageAnimationState;
        var5 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 20;
        var0 = var8[var0];
        var3 = undefined;
        var9 = var5.bind(var3)(var0);
        var6 = var9.useStateFromStores;
        var0 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var0;
        var1 = function() { // Environment: var2
            var0 = _closure1_slot7;
            var0 = var0.useReducedMotion;
            return var0;
        };
        var0 = new Array(0);
        var15 = var6.bind(var9)(var4, var1, var0);
        var _closure2_slot3 = var15;
        var1 = _closure1_slot9;
        var0 = function(arg0) { // Environment: var2
            var0 = arg0;
            var0 = var0.currWaveHeight;
            return var0;
        };
        var11 = var1.bind(var3)(var0);
        var _closure2_slot4 = var11;
        var0 = 11;
        var1 = var8[var0];
        var6 = var5.bind(var3)(var1);
        var4 = var6.useDerivedValue;
        var1 = function() {
            _fun91087: for (var _fun91087_ip = 0;;) switch (_fun91087_ip) {
                case 0:
                    var1 = _closure2_slot3;
                    var0 = 0.5;
                    if (var1) {
                        _fun91087_ip = 63;
                        continue _fun91087
                    }
                case 20:
                    var2 = _closure2_slot4;
                    var1 = null;
                    var4 = var1 == var2;
                    var2 = undefined;
                    if (var4) {
                        _fun91087_ip = 48;
                        continue _fun91087
                    }
                case 35:
                    var4 = _closure2_slot4;
                    var3 = var4.get;
                    var2 = var3.bind(var4)();
                case 48:
                    var3 = var1 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun91087_ip = 60;
                        continue _fun91087
                    }
                case 57:
                    var1 = var2;
                case 60:
                    var0 = var1;
                case 63:
                    return var0;
            }
        };
        var9 = {};
        var9.useReducedMotion = var15;
        var9.currWaveHeight = var11;
        var1.__closure = var9;
        var9 = 2925868096827.0;
        var1.__workletHash = var9;
        var9 = _closure1_slot24;
        var1.__initData = var9;
        var16 = var4.bind(var6)(var1);
        var _closure2_slot5 = var16;
        var15 = _closure1_slot34;
        var1 = _closure1_slot1;
        var4 = 18;
        var6 = var8[var4];
        var6 = var1.bind(var3)(var6);
        var6 = var6.unsafe_rawColors;
        var21 = var6.BRAND_500;
        var6 = var8[var4];
        var6 = var1.bind(var3)(var6);
        var6 = var6.unsafe_rawColors;
        var20 = var6.RED_400;
        var6 = var8[var4];
        var6 = var1.bind(var3)(var6);
        var6 = var6.unsafe_rawColors;
        var19 = var6.BRAND_500;
        var4 = var8[var4];
        var4 = var1.bind(var3)(var4);
        var4 = var4.unsafe_rawColors;
        var18 = var4.BRAND_500;
        var23 = undefined;
        var22 = var17;
        var15 = var23[var15](var22, var21, var20, var19, var18, var17);
        var _closure2_slot6 = var15;
        var4 = var8[var0];
        var9 = var5.bind(var3)(var4);
        var6 = var9.useDerivedValue;
        var4 = function() {
            var2 = _closure2_slot5;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0 = _closure2_slot2;
            var0 = var1 * var0;
            return var0;
        };
        var11 = {};
        var11.derivedCurrWaveHeight = var16;
        var11.offsetThreshold = var12;
        var4.__closure = var11;
        var11 = 7278593580538.0;
        var4.__workletHash = var11;
        var11 = _closure1_slot25;
        var4.__initData = var11;
        var12 = var6.bind(var9)(var4);
        var _closure2_slot7 = var12;
        var4 = var8[var0];
        var9 = var5.bind(var3)(var4);
        var6 = var9.useAnimatedProps;
        var4 = function() {
            var0 = {};
            var3 = _closure2_slot6;
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var0.fill = var1;
            var1 = _closure2_slot0;
            var3 = _closure2_slot7;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var2 = var1 + var2;
            var0.ry = var2;
            var0.rx = var1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var2 = var1 + var2;
            var0.cy = var2;
            var0.cx = var1;
            return var0;
        };
        var11 = {};
        var11.voiceMessageEllipseBgColor = var15;
        var11.radius = var14;
        var11.offset = var12;
        var4.__closure = var11;
        var11 = 12489173275515.0;
        var4.__workletHash = var11;
        var11 = _closure1_slot26;
        var4.__initData = var11;
        var11 = var6.bind(var9)(var4);
        var4 = var8[var0];
        var6 = var5.bind(var3)(var4);
        var4 = var6.useAnimatedStyle;
        var2 = function() {
            var0 = {};
            var1 = 'absolute';
            var0.position = var1;
            var3 = _closure2_slot0;
            var2 = 2;
            var2 = var2 * var3;
            var0.width = var2;
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var3 = _closure2_slot7;
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var1 = var2 + var1;
            var0.height = var1;
            var1 = 0;
            var0.bottom = var1;
            return var0;
        };
        var9 = {};
        var9.radius = var14;
        var9.height = var13;
        var9.offset = var12;
        var2.__closure = var9;
        var9 = 16593476434034.0;
        var2.__workletHash = var9;
        var9 = _closure1_slot27;
        var2.__initData = var9;
        var4 = var4.bind(var6)(var2);
        var2 = _closure1_slot20;
        var9 = var2.bind(var3)();
        var2 = _closure1_slot14;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var0.style = var4;
        var6 = _closure1_slot14;
        var4 = 16;
        var4 = var8[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.Svg;
        var4 = {};
        var8 = _closure1_slot14;
        var7 = {};
        var7.animatedProps = var11;
        var7.opacity = var10;
        var7 = var8.bind(var3)(var9, var7);
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var4.bind(var7)(var1);
    var _closure1_slot28 = var1;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx5(){const{voiceMessageAnimationState,runOnJS,setVoiceMessageState}=this.__closure;if(voiceMessageAnimationState.get()==null)return;runOnJS(setVoiceMessageState)(voiceMessageAnimationState.get()[1]);return voiceMessageAnimationState.get();}';
    var4.code = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx6(){const{initialAnimation,recordingAnimation,INITIAL_SHIFT}=this.__closure;const animationValue=Math.min(initialAnimation.get(),recordingAnimation.get());return{opacity:animationValue,marginBottom:-INITIAL_SHIFT*(1-animationValue)};}';
    var4.code = var8;
    var _closure1_slot30 = var4;
    var8 = var7.memo;
    var4 = function(arg0) { // Environment: var3
        _fun91091: for (var _fun91091_ip = 0;;) switch (_fun91091_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.initialAnimation;
                var _closure2_slot0 = var8;
                var7 = var1.recordingAnimation;
                var _closure2_slot1 = var7;
                var9 = var1.exiting;
                var4 = undefined;
                var _closure2_slot4 = var4;
                var3 = _closure1_slot9;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.voiceMessageAnimationState;
                    return var0;
                };
                var16 = var3.bind(var4)(var2);
                var _closure2_slot2 = var16;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.isUsingHoldGesture;
                    return var0;
                };
                var5 = var3.bind(var4)(var2);
                var10 = _closure1_slot4;
                var6 = var10.useState;
                var2 = _closure1_slot10;
                var2 = var2.SENDING;
                var10 = var6.bind(var10)(var2);
                var6 = _closure1_slot3;
                var2 = 2;
                var6 = var6.bind(var4)(var10, var2);
                var2 = 0;
                var10 = var6[var2];
                var2 = 1;
                var15 = var6[var2];
                var _closure2_slot3 = var15;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.savedVoiceMessageUploadData;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var17 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 11;
                var2 = var13[var6];
                var12 = var17.bind(var4)(var2);
                var11 = var12.useDerivedValue;
                var2 = function() {
                    _fun91095: for (var _fun91095_ip = 0;;) switch (_fun91095_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun91095_ip = 26;
                                continue _fun91095
                            }
                        case 22:
                            var1 = undefined;
                            return var1;
                        case 26:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 11;
                            var1 = var3[var1];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var1);
                            var2 = var4.runOnJS;
                            var1 = _closure2_slot3;
                            var2 = var2.bind(var4)(var1);
                            var1 = _closure2_slot2;
                            var0 = var1.get;
                            var4 = var0.bind(var1)();
                            var0 = 1;
                            var0 = var4[var0];
                            var0 = var2.bind(var3)(var0);
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            return var0;
                    }
                };
                var14 = {};
                var14.voiceMessageAnimationState = var16;
                var16 = var13[var6];
                var16 = var17.bind(var4)(var16);
                var16 = var16.runOnJS;
                var14.runOnJS = var16;
                var14.setVoiceMessageState = var15;
                var2.__closure = var14;
                var14 = 8577984959763.0;
                var2.__workletHash = var14;
                var14 = _closure1_slot29;
                var2.__initData = var14;
                var2 = var11.bind(var12)(var2);
                var11 = _closure1_slot4;
                var2 = var11.useRef;
                var11 = var2.bind(var11)(var4);
                var _closure2_slot5 = var11;
                var12 = _closure1_slot1;
                var2 = 21;
                var2 = var13[var2];
                var2 = var12.bind(var4)(var2);
                var2 = var2.bind(var4)(var11);
                if (var9) {
                    _fun91091_ip = 795;
                    continue _fun91091
                }
            case 285:
                if (!var3) {
                    _fun91091_ip = 357;
                    continue _fun91091
                }
            case 288:
                if (var5) {
                    _fun91091_ip = 357;
                    continue _fun91091
                }
            case 291:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 22;
                var9 = var13[var5];
                var9 = var12.bind(var4)(var9);
                var11 = var9.intl;
                var9 = var11.string;
                var5 = var13[var5];
                var5 = var12.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["m+sRVL"];
                var5 = var9.bind(var11)(var5);
                _closure2_slot4 = var5;
                _fun91091_ip = 802;
                continue _fun91091;
            case 357:
                if (!var3) {
                    _fun91091_ip = 377;
                    continue _fun91091
                }
            case 360:
                var9 = _closure1_slot10;
                var9 = var9.SENDING;
                if (!(var10 !== var9)) {
                    _fun91091_ip = 729;
                    continue _fun91091
                }
            case 377:
                if (!var3) {
                    _fun91091_ip = 397;
                    continue _fun91091
                }
            case 380:
                var9 = _closure1_slot10;
                var9 = var9.CANCELLING;
                if (!(var10 !== var9)) {
                    _fun91091_ip = 663;
                    continue _fun91091
                }
            case 397:
                if (var3) {
                    _fun91091_ip = 483;
                    continue _fun91091
                }
            case 400:
                var9 = _closure1_slot10;
                var9 = var9.SENDING;
                if (!(var10 === var9)) {
                    _fun91091_ip = 483;
                    continue _fun91091
                }
            case 414:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 22;
                var11 = var14[var9];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.cyL7DJ;
                var9 = var11.bind(var12)(var9);
                _closure2_slot4 = var9;
                var5 = var9;
                _fun91091_ip = 802;
                continue _fun91091;
            case 483:
                if (var3) {
                    _fun91091_ip = 569;
                    continue _fun91091
                }
            case 486:
                var9 = _closure1_slot10;
                var9 = var9.CANCELLING;
                if (!(var10 === var9)) {
                    _fun91091_ip = 569;
                    continue _fun91091
                }
            case 500:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var9 = 22;
                var11 = var14[var9];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var9 = var14[var9];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["a+A3+f"];
                var9 = var11.bind(var12)(var9);
                _closure2_slot4 = var9;
                var5 = var9;
                _fun91091_ip = 802;
                continue _fun91091;
            case 569:
                if (var3) {
                    _fun91091_ip = 586;
                    continue _fun91091
                }
            case 572:
                var9 = _closure1_slot10;
                var9 = var9.LOCKING;
                var3 = var10 !== var9;
            case 586:
                var5 = undefined;
                if (var3) {
                    _fun91091_ip = 802;
                    continue _fun91091
                }
            case 594:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 22;
                var9 = var12[var3];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var3 = var12[var3];
                var3 = var11.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3["3qvtks"];
                var3 = var9.bind(var10)(var3);
                _closure2_slot4 = var3;
                var5 = var3;
                _fun91091_ip = 802;
                continue _fun91091;
            case 663:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 22;
                var9 = var12[var3];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var3 = var12[var3];
                var3 = var11.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.sB81Bo;
                var3 = var9.bind(var10)(var3);
                _closure2_slot4 = var3;
                var5 = var3;
                _fun91091_ip = 802;
                continue _fun91091;
            case 729:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 22;
                var9 = var12[var3];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var3 = var12[var3];
                var3 = var11.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3["zPxm/X"];
                var3 = var9.bind(var10)(var3);
                _closure2_slot4 = var3;
                var5 = var3;
                _fun91091_ip = 802;
                continue _fun91091;
            case 795:
                _closure2_slot4 = var2;
                var5 = var2;
            case 802:
                var10 = _closure1_slot4;
                var9 = var10.useEffect;
                var3 = new Array(1);
                var3[0] = var5;
                var2 = function() { // Environment: var0
                    var1 = _closure2_slot5;
                    var0 = _closure2_slot4;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var9.bind(var10)(var2, var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var6];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useAnimatedStyle;
                var0 = function() {
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.min;
                    var4 = _closure2_slot0;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var4 = _closure2_slot1;
                    var0 = var4.get;
                    var0 = var0.bind(var4)();
                    var2 = var2.bind(var3)(var1, var0);
                    var0 = {};
                    var0.opacity = var2;
                    var1 = 1;
                    var2 = var1 - var2;
                    var1 = -8;
                    var1 = var1 * var2;
                    var0.marginBottom = var1;
                    return var0;
                };
                var6 = {};
                var6.initialAnimation = var8;
                var6.recordingAnimation = var7;
                var7 = 8;
                var6.INITIAL_SHIFT = var7;
                var0.__closure = var6;
                var6 = 60645179998.0;
                var0.__workletHash = var6;
                var6 = _closure1_slot30;
                var0.__initData = var6;
                var6 = var2.bind(var3)(var0);
                var0 = null;
                var2 = var0 == var5;
                if (var2) {
                    _fun91091_ip = 966;
                    continue _fun91091
                }
            case 928:
                var3 = _closure1_slot14;
                var2 = _closure1_slot19;
                var1 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 966:
                return var0;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx7(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}';
    var4.code = var8;
    var _closure1_slot32 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx8(){const{voiceMessageAnimationState,sendingColor,lockingColor,lockedColor,cancelingColor,interpolateColor,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const colors=distance===2?[sendingColor,sendingColor,lockingColor,lockedColor]:[sendingColor,cancelingColor,lockingColor,lockedColor];return interpolateColor(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,colors);}';
    var4.code = var8;
    var _closure1_slot33 = var4;
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        var14 = arg0;
        var13 = arg1;
        var10 = arg2;
        var12 = arg3;
        var11 = arg4;
        var _closure2_slot0 = var14;
        var _closure2_slot1 = var13;
        var _closure2_slot2 = var10;
        var _closure2_slot3 = var12;
        var _closure2_slot4 = var11;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var6 = 11;
        var1 = var9[var6];
        var7 = undefined;
        var4 = var8.bind(var7)(var1);
        var2 = var4.useDerivedValue;
        var1 = function() {
            var1 = _closure2_slot0;
            var0 = var1.get;
            var1 = var0.bind(var1)();
            var0 = 1;
            var3 = var1[var0];
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var0 = 23;
            var0 = var7[var0];
            var5 = undefined;
            var2 = var6.bind(var5)(var0);
            var1 = var2.withTiming;
            var0 = {};
            var4 = 11;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.Easing;
            var4 = var4.linear;
            var0.easing = var4;
            var4 = 150;
            var0.duration = var4;
            var0 = var1.bind(var2)(var3, var0);
            return var0;
        };
        var5 = {};
        var5.voiceMessageAnimationState = var14;
        var15 = 23;
        var15 = var9[var15];
        var15 = var8.bind(var7)(var15);
        var15 = var15.withTiming;
        var5.withTiming = var15;
        var15 = var9[var6];
        var15 = var8.bind(var7)(var15);
        var15 = var15.Easing;
        var5.Easing = var15;
        var1.__closure = var5;
        var5 = 7432526131204.0;
        var1.__workletHash = var5;
        var5 = _closure1_slot32;
        var1.__initData = var5;
        var5 = var2.bind(var4)(var1);
        var _closure2_slot5 = var5;
        var1 = var9[var6];
        var2 = var8.bind(var7)(var1);
        var1 = var2.useDerivedValue;
        var0 = function() {
            _fun91100: for (var _fun91100_ip = 0;;) switch (_fun91100_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var0 = var2.get;
                    var4 = var0.bind(var2)();
                    var2 = _closure1_slot3;
                    var5 = undefined;
                    var3 = 2;
                    var6 = var2.bind(var5)(var4, var3);
                    var2 = 0;
                    var4 = var6[var2];
                    var2 = 1;
                    var2 = var6[var2];
                    var2 = var4 + var2;
                    if (!(var2 !== var3)) {
                        _fun91100_ip = 93;
                        continue _fun91100
                    }
                case 55:
                    var2 = _closure2_slot1;
                    var4 = new Array(4);
                    var4[0] = var2;
                    var2 = _closure2_slot2;
                    var4[1] = var2;
                    var2 = _closure2_slot3;
                    var4[2] = var2;
                    var2 = _closure2_slot4;
                    var4[3] = var2;
                    _fun91100_ip = 128;
                    continue _fun91100;
                case 93:
                    var3 = _closure2_slot1;
                    var2 = new Array(4);
                    var2[0] = var3;
                    var2[1] = var3;
                    var3 = _closure2_slot3;
                    var2[2] = var3;
                    var3 = _closure2_slot4;
                    var2[3] = var3;
                    var4 = var2;
                case 128:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 11;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.interpolateColor;
                    var5 = _closure2_slot5;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var0 = _closure1_slot23;
                    var0 = var2.bind(var3)(var1, var0, var4);
                    return var0;
            }
        };
        var4 = {};
        var4.voiceMessageAnimationState = var14;
        var4.sendingColor = var13;
        var4.lockingColor = var12;
        var4.lockedColor = var11;
        var4.cancelingColor = var10;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.interpolateColor;
        var4.interpolateColor = var6;
        var4.timing = var5;
        var5 = _closure1_slot23;
        var4.VOICE_MESSAGE_ANIMATION_STATES = var5;
        var0.__closure = var4;
        var4 = 8474040050475.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot33;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx9(){const{voiceMessageAnimationState,withTiming,Easing}=this.__closure;const currValue=voiceMessageAnimationState.get()[1];return withTiming(currValue,{easing:Easing.linear,duration:150});}';
    var4.code = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx10(){const{voiceMessageAnimationState,interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;const[prevValue,currValue]=voiceMessageAnimationState.get();const distance=prevValue+currValue;const opacity=distance===2?[1,1,1,0]:[1,0,1,0];return interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,opacity);}';
    var4.code = var8;
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx11(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[68,68,104,104])};}';
    var4.code = var8;
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx12(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockContainerOpacity,lockedBackgroundColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[40,40,56,56]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[68,68,56,56]),opacity:lockContainerOpacity.get(),backgroundColor:lockedBackgroundColor.get(),marginHorizontal:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,-8,-8]),marginBottom:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[0,0,36,36])};}';
    var4.code = var8;
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx13(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES,lockIconColor}=this.__closure;return{width:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),height:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[24,24,32,32]),marginTop:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[12,12,10,10]),tintColor:lockIconColor.get()};}';
    var4.code = var8;
    var _closure1_slot39 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx14(){const{interpolate,timing,VOICE_MESSAGE_ANIMATION_STATES}=this.__closure;return{opacity:interpolate(timing.get(),VOICE_MESSAGE_ANIMATION_STATES,[1,1,0,0])};}';
    var4.code = var8;
    var _closure1_slot40 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx15(){const{voiceMessageAnimationState,VoiceMessageAnimationState}=this.__closure;return voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKED||voiceMessageAnimationState.get()[1]===VoiceMessageAnimationState.LOCKING;}';
    var4.code = var8;
    var _closure1_slot41 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx16(result,previous){const{runOnJS,setLocked}=this.__closure;if(result!==previous){runOnJS(setLocked)(result);}}';
    var4.code = var8;
    var _closure1_slot42 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx17(){const{initialAnimation,safeAreaBottom,CHAT_INPUT_HEIGHT,LOCK_PILL_BOTTOM_OFFSET,INITIAL_SHIFT}=this.__closure;return{opacity:initialAnimation.get(),bottom:safeAreaBottom+CHAT_INPUT_HEIGHT+(LOCK_PILL_BOTTOM_OFFSET-INITIAL_SHIFT)+INITIAL_SHIFT*initialAnimation.get()};}';
    var4.code = var8;
    var _closure1_slot43 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx18(){const{INITIAL_SHIFT,initialAnimation,trashContainerBgColor}=this.__closure;return{marginLeft:INITIAL_SHIFT*2*(1-initialAnimation.get()),marginRight:8-INITIAL_SHIFT*2*(1-initialAnimation.get()),backgroundColor:trashContainerBgColor.get()};}';
    var4.code = var8;
    var _closure1_slot44 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx19(){const{trashIconColor}=this.__closure;return{tintColor:trashIconColor.get()};}';
    var4.code = var8;
    var _closure1_slot45 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx20(){const{recordingAnimation,sendContainerBgColor}=this.__closure;return{opacity:0.5+0.5*recordingAnimation.get(),backgroundColor:sendContainerBgColor.get()};}';
    var4.code = var8;
    var _closure1_slot46 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx21(){const{sendIconColor}=this.__closure;return{tintColor:sendIconColor.get()};}';
    var4.code = var8;
    var _closure1_slot47 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx22(){const{initialAnimation}=this.__closure;return{opacity:initialAnimation.get()};}';
    var4.code = var8;
    var _closure1_slot48 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx23(){const{exiting,INITIAL_SHIFT,initialAnimation,keyboardHeight}=this.__closure;const shift=exiting?INITIAL_SHIFT*3:INITIAL_SHIFT*1.5;return{opacity:initialAnimation.get(),bottom:keyboardHeight-shift*(1-initialAnimation.get())};}';
    var4.code = var8;
    var _closure1_slot49 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx24(){const{insetsNoKeyboard,CHAT_INPUT_HEIGHT,recordingAnimation}=this.__closure;return insetsNoKeyboard.bottom+CHAT_INPUT_HEIGHT*(1.6+0.3*recordingAnimation.get());}';
    var4.code = var8;
    var _closure1_slot50 = var4;
    var4 = {};
    var8 = 'function VoiceMessageOverlayTsx25(){const{insetsNoKeyboard,CHAT_INPUT_HEIGHT}=this.__closure;return insetsNoKeyboard.bottom+CHAT_INPUT_HEIGHT*1.6;}';
    var4.code = var8;
    var _closure1_slot51 = var4;
    var8 = var7.memo;
    var4 = function(arg0) { // Environment: var3
        _fun91101: for (var _fun91101_ip = 0;;) switch (_fun91101_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channelId;
                var _closure2_slot0 = var0;
                var8 = var1.voiceMessageAnimationState;
                var15 = var1.exiting;
                var _closure2_slot1 = var15;
                var1 = _closure1_slot21;
                var3 = undefined;
                var30 = var1.bind(var3)();
                var24 = _closure1_slot1;
                var29 = _closure1_slot2;
                var19 = 30;
                var1 = var29[var19];
                var2 = var24.bind(var3)(var1);
                var1 = {
                    'includeCustomKeyboardHeight': true,
                    'includeKeyboardHeight': true
                };
                var1 = var2.bind(var3)(var1);
                var1 = var1.insets;
                var2 = 31;
                var2 = var29[var2];
                var2 = var24.bind(var3)(var2);
                var6 = var2.bind(var3)();
                var _closure2_slot2 = var6;
                var4 = var1.bottom;
                var2 = var6.bottom;
                var7 = var4 - var2;
                var _closure2_slot3 = var7;
                var10 = var1.bottom;
                var2 = _closure1_slot9;
                var1 = function(arg0) { // Environment: var20
                    var0 = arg0;
                    var1 = var0.startTimeMillis;
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var23 = var2.bind(var3)(var1);
                var1 = function arg0, arg1() {
                    var6 = arg0;
                    var9 = arg1;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var9;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 11;
                    var2 = var8[var1];
                    var4 = undefined;
                    var10 = var7.bind(var4)(var2);
                    var2 = var10.useSharedValue;
                    var5 = 0;
                    var2 = var2.bind(var10)(var5);
                    var _closure3_slot2 = var2;
                    var12 = _closure1_slot4;
                    var11 = var12.useRef;
                    var10 = global;
                    var13 = var10.performance;
                    var10 = var13.now;
                    var10 = var10.bind(var13)();
                    var10 = var11.bind(var12)(var10);
                    var _closure3_slot3 = var10;
                    var13 = _closure1_slot4;
                    var12 = var13.useEffect;
                    var11 = new Array(1);
                    var11[0] = var2;
                    var10 = function() { // Environment: var0
                        var3 = _closure3_slot2;
                        var2 = var3.set;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var1 = 11;
                        var4 = var10[var1];
                        var0 = undefined;
                        var6 = var9.bind(var0)(var4);
                        var5 = var6.withDelay;
                        var4 = 23;
                        var4 = var10[var4];
                        var8 = var9.bind(var0)(var4);
                        var7 = var8.withTiming;
                        var4 = {};
                        var1 = var10[var1];
                        var1 = var9.bind(var0)(var1);
                        var1 = var1.Easing;
                        var1 = var1.quad;
                        var4.easing = var1;
                        var1 = 250;
                        var4.duration = var1;
                        var1 = 1;
                        var4 = var7.bind(var8)(var1, var4);
                        var1 = 500;
                        var1 = var5.bind(var6)(var1, var4);
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var10 = var12.bind(var13)(var10, var11);
                    var12 = _closure1_slot4;
                    var11 = var12.useEffect;
                    var10 = new Array(2);
                    var10[0] = var2;
                    var10[1] = var9;
                    var9 = function() { // Environment: var0
                        _fun91105: for (var _fun91105_ip = 0;;) switch (_fun91105_ip) {
                            case 0:
                                var1 = _closure3_slot1;
                                if (!var1) {
                                    _fun91105_ip = 100;
                                    continue _fun91105
                                }
                            case 10:
                                var2 = _closure3_slot2;
                                var1 = var2.set;
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var0 = 23;
                                var0 = var8[var0];
                                var6 = undefined;
                                var5 = var7.bind(var6)(var0);
                                var4 = var5.withTiming;
                                var3 = {};
                                var0 = 11;
                                var0 = var8[var0];
                                var0 = var7.bind(var6)(var0);
                                var0 = var0.Easing;
                                var0 = var0.quad;
                                var3.easing = var0;
                                var0 = 100;
                                var3.duration = var0;
                                var0 = 0;
                                var0 = var4.bind(var5)(var0, var3);
                                var0 = var1.bind(var2)(var0);
                            case 100:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var9 = var11.bind(var12)(var9, var10);
                    var1 = var8[var1];
                    var4 = var7.bind(var4)(var1);
                    var1 = var4.useSharedValue;
                    var1 = var1.bind(var4)(var5);
                    var _closure3_slot4 = var1;
                    var5 = _closure1_slot4;
                    var4 = var5.useEffect;
                    var3 = new Array(3);
                    var3[0] = var2;
                    var3[1] = var1;
                    var3[2] = var6;
                    var0 = function() { // Environment: var0
                        _fun91106: for (var _fun91106_ip = 0;;) switch (_fun91106_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                if (!var0) {
                                    _fun91106_ip = 221;
                                    continue _fun91106
                                }
                            case 13:
                                var6 = _closure3_slot4;
                                var4 = var6.set;
                                var11 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 23;
                                var2 = var5[var0];
                                var8 = undefined;
                                var10 = var11.bind(var8)(var2);
                                var7 = var10.withTiming;
                                var2 = {};
                                var9 = 11;
                                var5 = var5[var9];
                                var5 = var11.bind(var8)(var5);
                                var5 = var5.Easing;
                                var5 = var5.quad;
                                var2.easing = var5;
                                var5 = 200;
                                var2.duration = var5;
                                var5 = 1;
                                var2 = var7.bind(var10)(var5, var2);
                                var2 = var4.bind(var6)(var2);
                                var2 = global;
                                var4 = var2.performance;
                                var2 = var4.now;
                                var4 = var2.bind(var4)();
                                var2 = _closure3_slot3;
                                var2 = var2.current;
                                var4 = var4 - var2;
                                var2 = 500;
                                if (!(!(var4 >= var2))) {
                                    _fun91106_ip = 221;
                                    continue _fun91106
                                }
                            case 144:
                                var2 = _closure3_slot2;
                                var1 = var2.set;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var0 = var6[var0];
                                var4 = var7.bind(var8)(var0);
                                var3 = var4.withTiming;
                                var0 = {};
                                var6 = var6[var9];
                                var6 = var7.bind(var8)(var6);
                                var6 = var6.Easing;
                                var6 = var6.quad;
                                var0.easing = var6;
                                var6 = 250;
                                var0.duration = var6;
                                var0 = var3.bind(var4)(var5, var0);
                                var0 = var1.bind(var2)(var0);
                            case 221:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var4.bind(var5)(var0, var3);
                    var0 = {};
                    var0.initialAnimation = var2;
                    var0.recordingAnimation = var1;
                    return var0;
                };
                var1 = var1.bind(var3)(var23, var15);
                var9 = var1.initialAnimation;
                var _closure2_slot4 = var9;
                var16 = var1.recordingAnimation;
                var _closure2_slot5 = var16;
                var4 = _closure1_slot4;
                var2 = var4.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var20
                    var4 = _closure1_slot6;
                    var3 = var4.addEventListener;
                    var2 = 'change';
                    var1 = function(arg0) { // Environment: var0
                        _fun91108: for (var _fun91108_ip = 0;;) switch (_fun91108_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = 'inactive';
                                var0 = var0 !== var2;
                                if (!var0) {
                                    _fun91108_ip = 22;
                                    continue _fun91108
                                }
                            case 14:
                                var1 = 'background';
                                var0 = var1 !== var2;
                            case 22:
                                if (var0) {
                                    _fun91108_ip = 124;
                                    continue _fun91108
                                }
                            case 25:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var1 = 32;
                                var1 = var8[var1];
                                var6 = undefined;
                                var1 = var7.bind(var6)(var1);
                                var4 = var1.ComponentDispatch;
                                var3 = var4.dispatchKeyed;
                                var0 = _closure1_slot11;
                                var2 = var0.VOICE_MESSAGE_SEND;
                                var1 = _closure2_slot0;
                                var0 = {};
                                var5 = true;
                                var0.isCancelling = var5;
                                var5 = 33;
                                var5 = var8[var5];
                                var5 = var7.bind(var6)(var5);
                                var5 = var5.VoiceMessageRecordingResult;
                                var5 = var5.CANCELLED_ON_BACKGROUND;
                                var0.cancelReason = var5;
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 124:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var0 = 34;
                var0 = var29[var0];
                var0 = var24.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var1 = var0.width;
                var0 = 5;
                var1 = var0 * var1;
                var0 = 2;
                var18 = var1 / var0;
                var12 = _closure1_slot34;
                var0 = 18;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var41 = var1.BRAND_600;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var40 = var1.RED_500;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var39 = var1.BRAND_600;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var38 = var1.BRAND_600;
                var43 = undefined;
                var42 = var8;
                var36 = var43[var12](var42, var41, var40, var39, var38, var37);
                var12 = _closure1_slot34;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var41 = var1.BRAND_600;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var40 = var1.WHITE;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var39 = var1.BRAND_600;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var38 = var1.BRAND_600;
                var43 = undefined;
                var42 = var8;
                var13 = var43[var12](var42, var41, var40, var39, var38, var37);
                var _closure2_slot6 = var13;
                var28 = _closure1_slot0;
                var17 = 11;
                var1 = var29[var17];
                var4 = var28.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var5 = _closure2_slot4;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var3 = 1;
                    var2 = var3 - var2;
                    var4 = 16;
                    var2 = var4 * var2;
                    var0.marginLeft = var2;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var2 = var3 - var2;
                    var3 = 8;
                    var2 = var4 * var2;
                    var2 = var3 - var2;
                    var0.marginRight = var2;
                    var2 = _closure2_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.backgroundColor = var1;
                    return var0;
                };
                var12 = {};
                var11 = 8;
                var12.INITIAL_SHIFT = var11;
                var12.initialAnimation = var9;
                var12.trashContainerBgColor = var13;
                var1.__closure = var12;
                var12 = 16442762939311.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot44;
                var1.__initData = var12;
                var22 = var2.bind(var4)(var1);
                var13 = _closure1_slot34;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var41 = var1.WHITE;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var40 = var1.RED_500;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var39 = var1.WHITE;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var38 = var1.WHITE;
                var43 = undefined;
                var42 = var8;
                var13 = var43[var13](var42, var41, var40, var39, var38, var37);
                var _closure2_slot7 = var13;
                var1 = var29[var17];
                var4 = var28.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var2 = _closure2_slot7;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.tintColor = var1;
                    return var0;
                };
                var12 = {};
                var12.trashIconColor = var13;
                var1.__closure = var12;
                var12 = 4758994609248.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot45;
                var1.__initData = var12;
                var25 = var2.bind(var4)(var1);
                var13 = _closure1_slot34;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var41 = var1.WHITE;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var40 = var1.RED_500;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var39 = var1.BRAND_600;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var38 = var1.WHITE;
                var43 = undefined;
                var42 = var8;
                var13 = var43[var13](var42, var41, var40, var39, var38, var37);
                var _closure2_slot8 = var13;
                var1 = var29[var17];
                var4 = var28.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    var0 = {};
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = 0.5;
                    var2 = var3 * var2;
                    var2 = var3 + var2;
                    var0.opacity = var2;
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.backgroundColor = var1;
                    return var0;
                };
                var12 = {};
                var12.recordingAnimation = var16;
                var12.sendContainerBgColor = var13;
                var1.__closure = var12;
                var12 = 2463646995928.0;
                var1.__workletHash = var12;
                var12 = _closure1_slot46;
                var1.__initData = var12;
                var31 = var2.bind(var4)(var1);
                var4 = _closure1_slot34;
                var2 = _closure1_slot22;
                var1 = var29[var0];
                var1 = var24.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var40 = var1.WHITE;
                var0 = var29[var0];
                var0 = var24.bind(var3)(var0);
                var0 = var0.unsafe_rawColors;
                var39 = var0.WHITE;
                var43 = undefined;
                var42 = var8;
                var41 = var2;
                var38 = var2;
                var12 = var43[var4](var42, var41, var40, var39, var38, var37);
                var _closure2_slot9 = var12;
                var0 = var29[var17];
                var2 = var28.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var2 = _closure2_slot9;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.tintColor = var1;
                    return var0;
                };
                var4 = {};
                var4.sendIconColor = var12;
                var0.__closure = var4;
                var4 = 13732877930795.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot47;
                var0.__initData = var4;
                var26 = var1.bind(var2)(var0);
                var0 = var29[var17];
                var2 = var28.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    var0 = {};
                    var2 = _closure2_slot4;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var4 = {};
                var4.initialAnimation = var9;
                var0.__closure = var4;
                var4 = 11009128299499.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot48;
                var0.__initData = var4;
                var13 = var1.bind(var2)(var0);
                var0 = var29[var17];
                var2 = var28.bind(var3)(var0);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun91115: for (var _fun91115_ip = 0;;) switch (_fun91115_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var3 = 12;
                            if (!var0) {
                                _fun91115_ip = 16;
                                continue _fun91115
                            }
                        case 13:
                            var3 = 24;
                        case 16:
                            var0 = {};
                            var4 = _closure2_slot4;
                            var2 = var4.get;
                            var2 = var2.bind(var4)();
                            var0.opacity = var2;
                            var2 = _closure2_slot3;
                            var1 = var4.get;
                            var4 = var1.bind(var4)();
                            var1 = 1;
                            var1 = var1 - var4;
                            var1 = var3 * var1;
                            var1 = var2 - var1;
                            var0.bottom = var1;
                            return var0;
                    }
                };
                var4 = {};
                var4.exiting = var15;
                var4.INITIAL_SHIFT = var11;
                var4.initialAnimation = var9;
                var4.keyboardHeight = var7;
                var0.__closure = var4;
                var4 = 4588671012938.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot49;
                var0.__initData = var4;
                var11 = var1.bind(var2)(var0);
                var0 = 35;
                var0 = var29[var0];
                var2 = var28.bind(var3)(var0);
                var1 = var2.useWakeLock;
                var0 = 'VoiceMessageOverlay';
                var0 = var1.bind(var2)(var0);
                var0 = var29[var17];
                var2 = var28.bind(var3)(var0);
                var1 = var2.useDerivedValue;
                var0 = function() {
                    var1 = _closure2_slot2;
                    var1 = var1.bottom;
                    var2 = _closure1_slot12;
                    var3 = _closure2_slot5;
                    var0 = var3.get;
                    var3 = var0.bind(var3)();
                    var0 = 0.3;
                    var3 = var0 * var3;
                    var0 = 1.6;
                    var0 = var0 + var3;
                    var0 = var2 * var0;
                    var0 = var1 + var0;
                    return var0;
                };
                var4 = {};
                var4.insetsNoKeyboard = var6;
                var7 = _closure1_slot12;
                var4.CHAT_INPUT_HEIGHT = var7;
                var4.recordingAnimation = var16;
                var0.__closure = var4;
                var4 = 14315468936108.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot50;
                var0.__initData = var4;
                var12 = var1.bind(var2)(var0);
                var0 = var29[var17];
                var2 = var28.bind(var3)(var0);
                var1 = var2.useDerivedValue;
                var0 = function() {
                    var0 = _closure2_slot2;
                    var1 = var0.bottom;
                    var2 = _closure1_slot12;
                    var0 = 1.6;
                    var0 = var0 * var2;
                    var0 = var1 + var0;
                    return var0;
                };
                var4 = {};
                var4.insetsNoKeyboard = var6;
                var6 = _closure1_slot12;
                var4.CHAT_INPUT_HEIGHT = var6;
                var0.__closure = var4;
                var4 = 5416150236821.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot51;
                var0.__initData = var4;
                var21 = var1.bind(var2)(var0);
                var2 = _closure1_slot15;
                var1 = _closure1_slot16;
                var0 = {};
                var4 = var29[var17];
                var4 = var24.bind(var3)(var4);
                var6 = var4.View;
                var4 = {};
                var14 = var30.container;
                var7 = new Array(2);
                var7[0] = var14;
                var7[1] = var11;
                var4.style = var7;
                var7 = 'none';
                var4.pointerEvents = var7;
                var11 = _closure1_slot14;
                var14 = _closure1_slot28;
                var7 = {
                    'height': null,
                    'offsetThreshold': 60,
                    'opacity': 0.24
                };
                var7.height = var12;
                var7.radius = var18;
                var7.voiceMessageAnimationState = var8;
                var11 = var11.bind(var3)(var14, var7);
                var7 = new Array(2);
                var7[0] = var11;
                var12 = _closure1_slot14;
                var11 = {};
                var11.height = var21;
                var11.offsetThreshold = var19;
                var11.radius = var18;
                var11.voiceMessageAnimationState = var8;
                var11 = var12.bind(var3)(var14, var11);
                var7[1] = var11;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var11 = _closure1_slot15;
                var6 = var29[var17];
                var6 = var24.bind(var3)(var6);
                var7 = var6.View;
                var6 = {};
                var14 = var30.contentContainer;
                var12 = new Array(3);
                var12[0] = var14;
                var14 = {};
                var14.bottom = var10;
                var12[1] = var14;
                var12[2] = var13;
                var6.style = var12;
                var14 = _closure1_slot14;
                var13 = _closure1_slot31;
                var12 = {};
                var12.initialAnimation = var9;
                var12.recordingAnimation = var16;
                var12.exiting = var15;
                var13 = var14.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot15;
                var14 = _closure1_slot5;
                var13 = {};
                var16 = var30.innerContainer;
                var13.style = var16;
                var18 = _closure1_slot14;
                var19 = _closure1_slot18;
                var16 = {};
                var27 = var30.trashContainer;
                var21 = new Array(2);
                var21[0] = var27;
                var21[1] = var22;
                var16.style = var21;
                var27 = _closure1_slot13;
                var16.androidRippleConfig = var27;
                var22 = 'button';
                var16.accessibilityRole = var22;
                var21 = 22;
                var32 = var29[var21];
                var32 = var28.bind(var3)(var32);
                var34 = var32.intl;
                var33 = var34.string;
                var32 = var29[var21];
                var32 = var28.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.RdK9sV;
                var32 = var33.bind(var34)(var32);
                var16.accessibilityLabel = var32;
                var32 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.triggerHaptic;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var16.onPressIn = var32;
                var32 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 32;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var5 = var2.ComponentDispatch;
                    var4 = var5.dispatchKeyed;
                    var1 = _closure1_slot11;
                    var3 = var1.VOICE_MESSAGE_SEND;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var6 = true;
                    var1.isCancelling = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var16.onPress = var32;
                var34 = _closure1_slot14;
                var33 = _closure1_slot17;
                var32 = {};
                var32.style = var25;
                var25 = 37;
                var25 = var29[var25];
                var25 = var24.bind(var3)(var25);
                var32.source = var25;
                var25 = 12;
                var35 = var29[var25];
                var35 = var24.bind(var3)(var35);
                var35 = var35.Sizes;
                var35 = var35.MEDIUM;
                var32.size = var35;
                var32 = var34.bind(var3)(var33, var32);
                var16.children = var32;
                var18 = var18.bind(var3)(var19, var16);
                var16 = new Array(3);
                var16[0] = var18;
                var32 = _closure1_slot14;
                var17 = var29[var17];
                var17 = var24.bind(var3)(var17);
                var18 = var17.View;
                var17 = {};
                var33 = var30.voiceChatContainer;
                var17.style = var33;
                var35 = _closure1_slot14;
                var33 = 38;
                var33 = var29[var33];
                var34 = var24.bind(var3)(var33);
                var33 = {};
                var33.isRecording = var23;
                var33.initialAnimation = var9;
                var33.backgroundColor = var36;
                var33 = var35.bind(var3)(var34, var33);
                var17.children = var33;
                var17 = var32.bind(var3)(var18, var17);
                var16[1] = var17;
                var18 = _closure1_slot14;
                var17 = {};
                var32 = var30.sendContainer;
                var30 = new Array(2);
                var30[0] = var32;
                var30[1] = var31;
                var17.style = var30;
                var17.androidRippleConfig = var27;
                var17.accessibilityRole = var22;
                var22 = var29[var21];
                var22 = var28.bind(var3)(var22);
                var27 = var22.intl;
                var22 = var27.string;
                var21 = var29[var21];
                var21 = var28.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21["+8GStU"];
                var21 = var22.bind(var27)(var21);
                var17.accessibilityLabel = var21;
                var20 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 32;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var5 = var2.ComponentDispatch;
                    var4 = var5.dispatchKeyed;
                    var1 = _closure1_slot11;
                    var3 = var1.VOICE_MESSAGE_SEND;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var6 = false;
                    var1.isCancelling = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var17.onPress = var20;
                var22 = _closure1_slot14;
                var21 = _closure1_slot17;
                var20 = {};
                var20.style = var26;
                var27 = _closure1_slot2;
                if (var23) {
                    _fun91101_ip = 2014;
                    continue _fun91101
                }
            case 2005:
                var23 = 40;
                var23 = var27[var23];
                _fun91101_ip = 2021;
                continue _fun91101;
            case 2014:
                var26 = 39;
                var23 = var27[var26];
            case 2021:
                var23 = var24.bind(var3)(var23);
                var20.source = var23;
                var24 = _closure1_slot1;
                var23 = _closure1_slot2;
                var23 = var23[var25];
                var23 = var24.bind(var3)(var23);
                var23 = var23.Sizes;
                var23 = var23.MEDIUM;
                var20.size = var23;
                var20 = var22.bind(var3)(var21, var20);
                var17.children = var20;
                var17 = var18.bind(var3)(var19, var17);
                var16[2] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var6.children = var12;
                var6 = var11.bind(var3)(var7, var6);
                var4[1] = var6;
                var7 = _closure1_slot14;
                var6 = _closure1_slot53;
                var5 = {};
                var5.safeAreaBottom = var10;
                var5.initialAnimation = var9;
                var5.voiceMessageAnimationState = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot52 = var4;
    var4 = var7.memo;
    var3 = function(arg0) { // Environment: var3
        _fun91121: for (var _fun91121_ip = 0;;) switch (_fun91121_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.channelId;
                var _closure2_slot0 = var9;
                var4 = _closure1_slot9;
                var5 = undefined;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.showRecordingOverlay;
                    return var0;
                };
                var7 = var4.bind(var5)(var1);
                var _closure2_slot1 = var7;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 20;
                var1 = var6[var1];
                var8 = var3.bind(var5)(var1);
                var6 = var8.useStateFromStores;
                var1 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var6.bind(var8)(var3, var1);
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.voiceMessageAnimationState;
                    return var0;
                };
                var8 = var4.bind(var5)(var3);
                var4 = _closure1_slot4;
                var3 = var4.useState;
                var6 = var3.bind(var4)(var7);
                var4 = _closure1_slot3;
                var3 = 2;
                var4 = var4.bind(var5)(var6, var3);
                var3 = 0;
                var6 = var4[var3];
                var3 = 1;
                var3 = var4[var3];
                var _closure2_slot2 = var3;
                var10 = _closure1_slot4;
                var4 = var10.useEffect;
                var3 = new Array(1);
                var3[0] = var7;
                var0 = function() { // Environment: var0
                    _fun91125: for (var _fun91125_ip = 0;;) switch (_fun91125_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun91125_ip = 51;
                                continue _fun91125
                            }
                        case 12:
                            var2 = global;
                            var5 = var2.setTimeout;
                            var4 = undefined;
                            var3 = function() { // Environment: var1
                                var2 = _closure2_slot2;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var2 = 100;
                            var2 = var5.bind(var4)(var3, var2);
                            var _closure3_slot0 = var2;
                            var1 = function() { // Environment: var1
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var1;
                        case 51:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var1 = true;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = var4.bind(var10)(var0, var3);
                var3 = null;
                if (!(var3 != var1)) {
                    _fun91121_ip = 196;
                    continue _fun91121
                }
            case 181:
                var0 = var1.isForumLikeChannel;
                var1 = var0.bind(var1)();
                var0 = null;
                if (var1) {
                    _fun91121_ip = 249;
                    continue _fun91121
                }
            case 196:
                var4 = var3 != var8;
                var1 = null;
                if (!var4) {
                    _fun91121_ip = 246;
                    continue _fun91121
                }
            case 205:
                var1 = null;
                if (!var6) {
                    _fun91121_ip = 246;
                    continue _fun91121
                }
            case 210:
                var4 = _closure1_slot14;
                var3 = _closure1_slot52;
                var2 = {};
                var2.channelId = var9;
                var2.voiceMessageAnimationState = var8;
                if (!var6) {
                    _fun91121_ip = 235;
                    continue _fun91121
                }
            case 232:
                var6 = !var7;
            case 235:
                var2.exiting = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 246:
                var0 = var1;
            case 249:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_messages/native/components/VoiceMessageOverlay.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.VoiceMessageEllipse = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 1372, 11623, 11624, 660, 11625, 4876, 33, 3720, 4086, 4904, 3941, 22, 5464, 1297, 671, 4874, 566, 4737, 1234, 4097, 3246, 3151, 3206, 4838, 9710, 11598, 4895, 1568, 1229, 10162, 1464, 8079, 11776, 3270, 11854, 3257, 9711, 2]);