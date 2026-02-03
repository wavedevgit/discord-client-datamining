// modules/quests/native/QuestDock/QuestDock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var18 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var18;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun84262: for (var _fun84262_ip = 0;;) switch (_fun84262_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.appThemedBackgroundColor;
                var _closure2_slot0 = var14;
                var4 = _closure1_slot5;
                var2 = var4.useContext;
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var1 = 13;
                var1 = var13[var1];
                var3 = undefined;
                var1 = var12.bind(var3)(var1);
                var1 = var2.bind(var4)(var1);
                var4 = var1.quest;
                var1 = _closure1_slot24;
                var34 = var1.bind(var3)();
                var5 = _closure1_slot5;
                var2 = var5.useContext;
                var10 = _closure1_slot0;
                var1 = 14;
                var1 = var13[var1];
                var1 = var10.bind(var3)(var1);
                var1 = var1.QuestDockGestureContext;
                var1 = var2.bind(var5)(var1);
                var7 = var1.questDockWrapperSpecs;
                var _closure2_slot1 = var7;
                var15 = var1.activeQuestDockMode;
                var _closure2_slot2 = var15;
                var21 = var1.windowDimensions;
                var _closure2_slot3 = var21;
                var5 = _closure1_slot5;
                var2 = var5.useContext;
                var1 = 15;
                var1 = var13[var1];
                var1 = var10.bind(var3)(var1);
                var1 = var1.QuestDockExternalCoordinationContext;
                var1 = var2.bind(var5)(var1);
                var18 = var1.restingQuestDockMode;
                var _closure2_slot4 = var18;
                var9 = var1.setRestingQuestDockMode;
                var _closure2_slot5 = var9;
                var2 = _closure1_slot5;
                var1 = var2.useId;
                var6 = var1.bind(var2)();
                var11 = _closure1_slot5;
                var5 = var11.useCallback;
                var2 = new Array(1);
                var2[0] = var9;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot5;
                    var0 = _closure1_slot10;
                    var1 = var0.COLLAPSED;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var5.bind(var11)(var1, var2);
                var1 = 16;
                var2 = var13[var1];
                var5 = var10.bind(var3)(var2);
                var2 = var5.useQuestDockModeAnimatedReaction;
                var2 = var2.bind(var5)();
                var1 = var13[var1];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useQuestDockDismissalReset;
                var1 = var1.bind(var2)();
                var1 = 17;
                var1 = var13[var1];
                var2 = var10.bind(var3)(var1);
                var1 = var2.useIsScreenReaderEnabled;
                var5 = var1.bind(var2)();
                var1 = 18;
                var2 = var13[var1];
                var16 = var10.bind(var3)(var2);
                var10 = var16.useDerivedValue;
                var2 = function() {
                    var1 = _closure2_slot4;
                    var0 = var1.get;
                    var1 = var0.bind(var1)();
                    var0 = _closure1_slot10;
                    var0 = var0.EXPANDED;
                    var0 = var1 === var0;
                    return var0;
                };
                var17 = {};
                var17.restingQuestDockMode = var18;
                var18 = _closure1_slot10;
                var17.QuestDockMode = var18;
                var2.__closure = var17;
                var17 = 7483111521990.0;
                var2.__workletHash = var17;
                var17 = _closure1_slot27;
                var2.__initData = var17;
                var16 = var10.bind(var16)(var2);
                var2 = 19;
                var10 = var13[var2];
                var10 = var12.bind(var3)(var10);
                var31 = var10.bind(var3)(var16);
                var10 = 20;
                var10 = var13[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.bind(var3)();
                var20 = var10.top;
                var _closure2_slot6 = var20;
                var12 = var4.userStatus;
                var10 = null;
                var13 = var10 == var12;
                var4 = undefined;
                if (var13) {
                    _fun84262_ip = 439;
                    continue _fun84262
                }
            case 433:
                var4 = var12.enrolledAt;
            case 439:
                var32 = var10 != var4;
                var _closure2_slot7 = var32;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var4 = var18[var1];
                var12 = var16.bind(var3)(var4);
                var10 = var12.useAnimatedStyle;
                var4 = function() {
                    _fun84265: for (var _fun84265_ip = 0;;) switch (_fun84265_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot0;
                            var0.backgroundColor = var2;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var8 = 12;
                            var2 = var2[var8];
                            var6 = undefined;
                            var9 = var4.bind(var6)(var2);
                            var5 = var9.withSpring;
                            var4 = _closure2_slot2;
                            var2 = var4.get;
                            var10 = var2.bind(var4)();
                            var2 = _closure1_slot10;
                            var2 = var2.COLLAPSED;
                            var4 = 0;
                            if (!(var10 === var2)) {
                                _fun84265_ip = 76;
                                continue _fun84265
                            }
                        case 72:
                            var4 = _closure1_slot15;
                        case 76:
                            var2 = _closure1_slot14;
                            var2 = var5.bind(var9)(var4, var2);
                            var0.borderBottomRightRadius = var2;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var8];
                            var5 = var4.bind(var6)(var2);
                            var4 = var5.withSpring;
                            var9 = _closure2_slot2;
                            var2 = var9.get;
                            var9 = var2.bind(var9)();
                            var2 = _closure1_slot10;
                            var2 = var2.COLLAPSED;
                            var7 = 0;
                            if (!(var9 === var2)) {
                                _fun84265_ip = 146;
                                continue _fun84265
                            }
                        case 142:
                            var7 = _closure1_slot15;
                        case 146:
                            var2 = _closure1_slot14;
                            var2 = var4.bind(var5)(var7, var2);
                            var0.borderBottomLeftRadius = var2;
                            var7 = _closure2_slot1;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var1 = var1.height;
                            var0.height = var1;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var1 = var1.width;
                            var0.width = var1;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = var4[var8];
                            var11 = var5.bind(var6)(var1);
                            var10 = var11.withSpring;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var9 = var1.x;
                            var1 = 21;
                            var1 = var4[var1];
                            var13 = var5.bind(var6)(var1);
                            var12 = var13.roundToNearestPixel;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var14 = var1.width;
                            var1 = 2;
                            var1 = var14 / var1;
                            var12 = var12.bind(var13)(var1);
                            var1 = -1;
                            var1 = var1 * var12;
                            var9 = var9 + var1;
                            var1 = _closure1_slot12;
                            var1 = var10.bind(var11)(var9, var1);
                            var2.translateX = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var4 = var4[var8];
                            var6 = var5.bind(var6)(var4);
                            var5 = var6.withSpring;
                            var4 = var7.get;
                            var4 = var4.bind(var7)();
                            var4 = var4.y;
                            var3 = _closure1_slot12;
                            var3 = var5.bind(var6)(var4, var3);
                            var2.translateY = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var13 = {};
                var13.appThemedBackgroundColor = var14;
                var14 = 12;
                var17 = var18[var14];
                var17 = var16.bind(var3)(var17);
                var17 = var17.withSpring;
                var13.withSpring = var17;
                var13.activeQuestDockMode = var15;
                var17 = _closure1_slot10;
                var13.QuestDockMode = var17;
                var17 = _closure1_slot15;
                var13.QUEST_DOCK_BORDER_RADII = var17;
                var17 = _closure1_slot14;
                var13.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = var17;
                var13.questDockWrapperSpecs = var7;
                var17 = 21;
                var17 = var18[var17];
                var17 = var16.bind(var3)(var17);
                var17 = var17.roundToNearestPixel;
                var13.roundToNearestPixel = var17;
                var17 = _closure1_slot12;
                var13.QUEST_DOCK_MODE_CHANGE_PHYSICS = var17;
                var4.__closure = var13;
                var13 = 3719130074049.0;
                var4.__workletHash = var13;
                var13 = _closure1_slot28;
                var4.__initData = var13;
                var13 = var10.bind(var12)(var4);
                var4 = var18[var1];
                var12 = var16.bind(var3)(var4);
                var10 = var12.useSharedValue;
                var4 = 0;
                var4 = var10.bind(var12)(var4);
                var _closure2_slot8 = var4;
                var10 = var18[var1];
                var17 = var16.bind(var3)(var10);
                var12 = var17.useAnimatedStyle;
                var10 = function() {
                    _fun84266: for (var _fun84266_ip = 0;;) switch (_fun84266_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 12;
                            var3 = var8[var3];
                            var7 = undefined;
                            var5 = var6.bind(var7)(var3);
                            var4 = var5.withSpring;
                            var3 = 18;
                            var3 = var8[var3];
                            var10 = var6.bind(var7)(var3);
                            var9 = var10.interpolate;
                            var8 = _closure2_slot8;
                            var6 = var8.get;
                            var8 = var6.bind(var8)();
                            var6 = _closure2_slot2;
                            var3 = var6.get;
                            var11 = var3.bind(var6)();
                            var3 = _closure1_slot10;
                            var6 = var3.EXPANDED;
                            var3 = 0.98;
                            if (!(var11 === var6)) {
                                _fun84266_ip = 108;
                                continue _fun84266
                            }
                        case 105:
                            var3 = 1;
                        case 108:
                            var6 = new Array(2);
                            var6[0] = var3;
                            var3 = 1;
                            var6[1] = var3;
                            var3 = [1, 0];
                            var3 = var9.bind(var10)(var8, var3, var6);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 22;
                            var1 = var8[var1];
                            var1 = var6.bind(var7)(var1);
                            var1 = var1.springStandard;
                            var1 = var4.bind(var5)(var3, var1);
                            var2.scale = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var19 = {};
                var22 = var18[var14];
                var22 = var16.bind(var3)(var22);
                var22 = var22.withSpring;
                var19.withSpring = var22;
                var22 = var18[var1];
                var22 = var16.bind(var3)(var22);
                var22 = var22.interpolate;
                var19.interpolate = var22;
                var19.isPressed = var4;
                var19.activeQuestDockMode = var15;
                var22 = _closure1_slot10;
                var19.QuestDockMode = var22;
                var22 = 22;
                var22 = var18[var22];
                var22 = var16.bind(var3)(var22);
                var22 = var22.springStandard;
                var19.springStandard = var22;
                var10.__closure = var19;
                var19 = 9265572184444.0;
                var10.__workletHash = var19;
                var19 = _closure1_slot29;
                var10.__initData = var19;
                var25 = var12.bind(var17)(var10);
                var17 = _closure1_slot5;
                var12 = var17.useCallback;
                var10 = new Array(1);
                var10[0] = var9;
                var9 = function() { // Environment: var0
                    var2 = _closure2_slot5;
                    var0 = _closure1_slot10;
                    var1 = var0.EXPANDED;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var29 = var12.bind(var17)(var9, var10);
                var17 = _closure1_slot5;
                var12 = var17.useCallback;
                var10 = new Array(1);
                var10[0] = var4;
                var9 = function() { // Environment: var0
                    var2 = _closure2_slot8;
                    var1 = var2.set;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var36 = var12.bind(var17)(var9, var10);
                var12 = _closure1_slot5;
                var10 = var12.useCallback;
                var9 = new Array(1);
                var9[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure2_slot8;
                    var1 = var2.set;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var35 = var10.bind(var12)(var4, var9);
                var4 = var18[var1];
                var10 = var16.bind(var3)(var4);
                var9 = var10.useAnimatedStyle;
                var4 = function() {
                    _fun84270: for (var _fun84270_ip = 0;;) switch (_fun84270_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 12;
                            var3 = var3[var1];
                            var1 = undefined;
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.withSpring;
                            var6 = _closure2_slot2;
                            var3 = var6.get;
                            var7 = var3.bind(var6)();
                            var3 = _closure1_slot10;
                            var6 = var3.EXPANDED;
                            var3 = 0;
                            if (!(var7 === var6)) {
                                _fun84270_ip = 67;
                                continue _fun84270
                            }
                        case 64:
                            var3 = 1;
                        case 67:
                            var2 = _closure1_slot12;
                            var2 = var4.bind(var5)(var3, var2);
                            var0.opacity = var2;
                            var2 = _closure2_slot3;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1.height;
                            var0.height = var1;
                            return var0;
                    }
                };
                var12 = {};
                var17 = var18[var14];
                var17 = var16.bind(var3)(var17);
                var17 = var17.withSpring;
                var12.withSpring = var17;
                var12.activeQuestDockMode = var15;
                var17 = _closure1_slot10;
                var12.QuestDockMode = var17;
                var17 = _closure1_slot12;
                var12.QUEST_DOCK_MODE_CHANGE_PHYSICS = var17;
                var12.windowDimensions = var21;
                var4.__closure = var12;
                var12 = 7865007748928.0;
                var4.__workletHash = var12;
                var12 = _closure1_slot30;
                var4.__initData = var12;
                var10 = var9.bind(var10)(var4);
                var4 = var18[var1];
                var12 = var16.bind(var3)(var4);
                var9 = var12.useAnimatedProps;
                var4 = function() {
                    _fun84271: for (var _fun84271_ip = 0;;) switch (_fun84271_ip) {
                        case 0:
                            var0 = {};
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var3 = var1.bind(var2)();
                            var1 = _closure1_slot10;
                            var2 = var1.EXPANDED;
                            var1 = 'none';
                            if (!(var3 === var2)) {
                                _fun84271_ip = 43;
                                continue _fun84271
                            }
                        case 39:
                            var1 = 'auto';
                        case 43:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var17 = {};
                var17.activeQuestDockMode = var15;
                var19 = _closure1_slot10;
                var17.QuestDockMode = var19;
                var4.__closure = var17;
                var17 = 7500348584538.0;
                var4.__workletHash = var17;
                var17 = _closure1_slot31;
                var4.__initData = var17;
                var9 = var9.bind(var12)(var4);
                var4 = var18[var1];
                var17 = var16.bind(var3)(var4);
                var12 = var17.useDerivedValue;
                var4 = function() {
                    var2 = _closure2_slot1;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var3 = _closure2_slot3;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.height;
                    var1 = _closure2_slot6;
                    var2 = var2 - var1;
                    var1 = var0.height;
                    var1 = var2 - var1;
                    var0 = var0.y;
                    var0 = var1 + var0;
                    return var0;
                };
                var19 = {};
                var19.questDockWrapperSpecs = var7;
                var19.windowDimensions = var21;
                var19.safeAreaTop = var20;
                var4.__closure = var19;
                var19 = 1497371487400.0;
                var4.__workletHash = var19;
                var19 = _closure1_slot32;
                var4.__initData = var19;
                var4 = var12.bind(var17)(var4);
                var12 = _closure1_slot1;
                var2 = var18[var2];
                var2 = var12.bind(var3)(var2);
                var12 = var2.bind(var3)(var4);
                var2 = var18[var1];
                var17 = var16.bind(var3)(var2);
                var4 = var17.useAnimatedStyle;
                var2 = function() {
                    _fun84273: for (var _fun84273_ip = 0;;) switch (_fun84273_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withSpring;
                            var6 = _closure2_slot2;
                            var5 = var6.get;
                            var6 = var5.bind(var6)();
                            var5 = _closure1_slot10;
                            var5 = var5.CLOSED;
                            if (!(var6 !== var5)) {
                                _fun84273_ip = 92;
                                continue _fun84273
                            }
                        case 62:
                            var5 = _closure2_slot2;
                            var2 = var5.get;
                            var6 = var2.bind(var5)();
                            var2 = _closure1_slot10;
                            var5 = var2.SOFT_DISMISSED;
                            var2 = 1;
                            if (!(var6 === var5)) {
                                _fun84273_ip = 94;
                                continue _fun84273
                            }
                        case 92:
                            var2 = 0;
                        case 94:
                            var1 = _closure1_slot12;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var19 = {};
                var20 = var18[var14];
                var20 = var16.bind(var3)(var20);
                var20 = var20.withSpring;
                var19.withSpring = var20;
                var19.activeQuestDockMode = var15;
                var20 = _closure1_slot10;
                var19.QuestDockMode = var20;
                var20 = _closure1_slot12;
                var19.QUEST_DOCK_MODE_CHANGE_PHYSICS = var20;
                var2.__closure = var19;
                var19 = 5097935164793.0;
                var2.__workletHash = var19;
                var19 = _closure1_slot33;
                var2.__initData = var19;
                var30 = var4.bind(var17)(var2);
                var1 = var18[var1];
                var2 = var16.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() {
                    _fun84274: for (var _fun84274_ip = 0;;) switch (_fun84274_ip) {
                        case 0:
                            var0 = {};
                            var1 = _closure2_slot7;
                            if (var1) {
                                _fun84274_ip = 48;
                                continue _fun84274
                            }
                        case 12:
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var3 = var1.bind(var2)();
                            var2 = _closure1_slot10;
                            var2 = var2.EXPANDED;
                            if (!(var3 === var2)) {
                                _fun84274_ip = 48;
                                continue _fun84274
                            }
                        case 42:
                            var1 = _closure1_slot16;
                            _fun84274_ip = 55;
                            continue _fun84274;
                        case 48:
                            var1 = _closure1_slot15;
                        case 55:
                            var0.borderRadius = var1;
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var10 = 12;
                            var1 = var1[var10];
                            var9 = undefined;
                            var5 = var2.bind(var9)(var1);
                            var3 = var5.withSpring;
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var6 = var1.bind(var2)();
                            var1 = _closure1_slot10;
                            var1 = var1.COLLAPSED;
                            var2 = 0;
                            if (!(var6 === var1)) {
                                _fun84274_ip = 121;
                                continue _fun84274
                            }
                        case 118:
                            var2 = 1;
                        case 121:
                            var1 = _closure1_slot14;
                            var1 = var3.bind(var5)(var2, var1);
                            var0.opacity = var1;
                            var1 = _closure2_slot7;
                            if (!var1) {
                                _fun84274_ip = 169;
                                continue _fun84274
                            }
                        case 142:
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = _closure1_slot10;
                            var1 = var1.EXPANDED;
                            if (!(var2 !== var1)) {
                                _fun84274_ip = 175;
                                continue _fun84274
                            }
                        case 169:
                            var1 = _closure1_slot18;
                            _fun84274_ip = 193;
                            continue _fun84274;
                        case 175:
                            var3 = _closure2_slot1;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1 = var2.height;
                        case 193:
                            var0.height = var1;
                            var1 = _closure2_slot7;
                            if (var1) {
                                _fun84274_ip = 266;
                                continue _fun84274
                            }
                        case 204:
                            var2 = _closure2_slot2;
                            var1 = var2.get;
                            var2 = var1.bind(var2)();
                            var1 = _closure1_slot10;
                            var1 = var1.COLLAPSED;
                            if (!(var2 !== var1)) {
                                _fun84274_ip = 266;
                                continue _fun84274
                            }
                        case 231:
                            var2 = _closure2_slot1;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var2 = var1.width;
                            var3 = _closure1_slot17;
                            var1 = 2;
                            var1 = var1 * var3;
                            var1 = var2 - var1;
                            _fun84274_ip = 284;
                            continue _fun84274;
                        case 266:
                            var3 = _closure2_slot1;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var1 = var2.width;
                        case 284:
                            var0.width = var1;
                            var2 = {};
                            var3 = _closure2_slot7;
                            var1 = 0;
                            if (var3) {
                                _fun84274_ip = 364;
                                continue _fun84274
                            }
                        case 299:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var10];
                            var11 = var5.bind(var9)(var3);
                            var6 = var11.withSpring;
                            var5 = _closure2_slot2;
                            var3 = var5.get;
                            var12 = var3.bind(var5)();
                            var3 = _closure1_slot10;
                            var3 = var3.EXPANDED;
                            var5 = 0;
                            if (!(var12 === var3)) {
                                _fun84274_ip = 354;
                                continue _fun84274
                            }
                        case 350:
                            var5 = _closure1_slot17;
                        case 354:
                            var3 = _closure1_slot14;
                            var1 = var6.bind(var11)(var5, var3);
                        case 364:
                            var2.translateX = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var5 = _closure2_slot7;
                            var3 = 0;
                            if (var5) {
                                _fun84274_ip = 453;
                                continue _fun84274
                            }
                        case 388:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var10];
                            var6 = var6.bind(var9)(var5);
                            var5 = var6.withSpring;
                            var9 = _closure2_slot2;
                            var8 = var9.get;
                            var9 = var8.bind(var9)();
                            var8 = _closure1_slot10;
                            var8 = var8.EXPANDED;
                            var7 = 0;
                            if (!(var9 === var8)) {
                                _fun84274_ip = 443;
                                continue _fun84274
                            }
                        case 439:
                            var7 = _closure1_slot17;
                        case 443:
                            var4 = _closure1_slot14;
                            var3 = var5.bind(var6)(var7, var4);
                        case 453:
                            var2.translateY = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var4 = {};
                var4.isEnrolled = var32;
                var4.activeQuestDockMode = var15;
                var15 = _closure1_slot10;
                var4.QuestDockMode = var15;
                var15 = _closure1_slot16;
                var4.QUEST_DOCK_CONTENT_BORDER_RADII = var15;
                var15 = _closure1_slot15;
                var4.QUEST_DOCK_BORDER_RADII = var15;
                var14 = var18[var14];
                var14 = var16.bind(var3)(var14);
                var14 = var14.withSpring;
                var4.withSpring = var14;
                var14 = _closure1_slot14;
                var4.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED = var14;
                var4.questDockWrapperSpecs = var7;
                var7 = _closure1_slot18;
                var4.QUEST_DOCK_COLLAPSED_HEIGHT = var7;
                var7 = _closure1_slot17;
                var4.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED = var7;
                var0.__closure = var4;
                var4 = 3329736777299.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot34;
                var0.__initData = var4;
                var33 = var1.bind(var2)(var0);
                var2 = _closure1_slot22;
                var1 = _closure1_slot23;
                var0 = {};
                var14 = _closure1_slot21;
                var7 = _closure1_slot6;
                var4 = {};
                var15 = var34.wrapper;
                var4.style = var15;
                var28 = 'auto';
                var4.pointerEvents = var28;
                var17 = _closure1_slot21;
                var15 = 23;
                var15 = var18[var15];
                var15 = var16.bind(var3)(var15);
                var16 = var15.AccessibilityViewAnimated;
                var15 = {};
                var15.nativeID = var6;
                var6 = var34.accessibilityWrapper;
                var15.style = var6;
                var6 = !var5;
                var5 = !var6;
                if (var6) {
                    _fun84262_ip = 1484;
                    continue _fun84262
                }
            case 1481:
                var5 = var31;
            case 1484:
                var15.accessibilityViewIsModal = var5;
                var15.onAccessibilityEscape = var11;
                var5 = 'box-none';
                var15.pointerEvents = var5;
                var20 = _closure1_slot21;
                var24 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 24;
                var5 = var6[var5];
                var19 = var24.bind(var3)(var5);
                var18 = {};
                var23 = _closure1_slot21;
                var5 = 25;
                var21 = var6[var5];
                var22 = var24.bind(var3)(var21);
                var21 = {};
                var21.style = var25;
                var26 = _closure1_slot22;
                var6 = var6[var5];
                var25 = var24.bind(var3)(var6);
                var24 = {};
                var27 = var34.questDockWrapper;
                var6 = new Array(2);
                var6[0] = var27;
                var6[1] = var13;
                var24.style = var6;
                var6 = _closure1_slot26;
                var24.layout = var6;
                var27 = _closure1_slot21;
                var13 = _closure1_slot7;
                var6 = {};
                var37 = var34.nestedPressable;
                var6.style = var37;
                var6.onPressIn = var36;
                var6.onPressOut = var35;
                var6.onPress = var29;
                if (!var31) {
                    _fun84262_ip = 1640;
                    continue _fun84262
                }
            case 1636:
                var28 = 'none';
            case 1640:
                var6.pointerEvents = var28;
                var28 = 'button';
                var6.accessibilityRole = var28;
                var36 = _closure1_slot0;
                var28 = _closure1_slot2;
                var38 = 26;
                var29 = var28[var38];
                var29 = var36.bind(var3)(var29);
                var35 = var29.intl;
                var29 = var35.string;
                var28 = var28[var38];
                var28 = var36.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.rjVPdM;
                var28 = var29.bind(var35)(var28);
                var6.accessibilityLabel = var28;
                var28 = '';
                if (var31) {
                    _fun84262_ip = 1775;
                    continue _fun84262
                }
            case 1721:
                var37 = _closure1_slot0;
                var29 = _closure1_slot2;
                var35 = var29[var38];
                var35 = var37.bind(var3)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var29 = var29[var38];
                var29 = var37.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.n0MlOB;
                var28 = var35.bind(var36)(var29);
            case 1775:
                var6.accessibilityHint = var28;
                var6 = var27.bind(var3)(var13, var6);
                var27 = new Array(4);
                var27[0] = var6;
                var28 = _closure1_slot21;
                var36 = _closure1_slot1;
                var38 = _closure1_slot2;
                var6 = var38[var5];
                var13 = var36.bind(var3)(var6);
                var6 = {};
                var35 = var34.questDockHeaderBorder;
                var29 = new Array(2);
                var29[0] = var35;
                var29[1] = var33;
                var6.style = var29;
                var29 = _closure1_slot26;
                var6.layout = var29;
                var29 = 'none';
                var6.pointerEvents = var29;
                var6 = var28.bind(var3)(var13, var6);
                var27[1] = var6;
                var28 = _closure1_slot22;
                var6 = var38[var5];
                var13 = var36.bind(var3)(var6);
                var6 = {};
                var33 = var34.questDockContentWrapper;
                var29 = new Array(2);
                var29[0] = var33;
                var29[1] = var30;
                var6.style = var29;
                var33 = _closure1_slot22;
                var30 = _closure1_slot6;
                var29 = {};
                var34 = var34.questDockContentWrapper;
                var29.style = var34;
                var37 = _closure1_slot21;
                var34 = 27;
                var34 = var38[var34];
                var35 = var36.bind(var3)(var34);
                var34 = {};
                var34.hideOnExpand = var32;
                var35 = var37.bind(var3)(var35, var34);
                var34 = new Array(2);
                var34[0] = var35;
                var37 = _closure1_slot21;
                var35 = 28;
                var35 = var38[var35];
                var36 = var36.bind(var3)(var35);
                var35 = {};
                var35 = var37.bind(var3)(var36, var35);
                var34[1] = var35;
                var29.children = var34;
                var30 = var33.bind(var3)(var30, var29);
                var29 = new Array(2);
                var29[0] = var30;
                var30 = !var32;
                if (var32) {
                    _fun84262_ip = 2045;
                    continue _fun84262
                }
            case 2013:
                var34 = _closure1_slot21;
                var33 = _closure1_slot1;
                var35 = _closure1_slot2;
                var32 = 29;
                var32 = var35[var32];
                var33 = var33.bind(var3)(var32);
                var32 = {};
                var30 = var34.bind(var3)(var33, var32);
            case 2045:
                var29[1] = var30;
                var6.children = var29;
                var6 = var28.bind(var3)(var13, var6);
                var27[2] = var6;
                var30 = _closure1_slot21;
                var6 = _closure1_slot1;
                var13 = _closure1_slot2;
                var28 = 30;
                var28 = var13[var28];
                var29 = var6.bind(var3)(var28);
                var28 = {};
                var28.isExpanded = var31;
                var28 = var30.bind(var3)(var29, var28);
                var27[3] = var28;
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var21.children = var24;
                var21 = var23.bind(var3)(var22, var21);
                var18.children = var21;
                var18 = var20.bind(var3)(var19, var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var4.children = var15;
                var7 = var14.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot21;
                var5 = var13[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.style = var10;
                var5.animatedProps = var9;
                var10 = _closure1_slot21;
                var9 = _closure1_slot0;
                var8 = 31;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Backdrop;
                var8 = {};
                var8.onDismiss = var11;
                var11 = {};
                var11.height = var12;
                var8.accessibleDismissStyle = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var3 = var0.mode;
        var7 = var0.questId;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 32;
        var0 = var6[var0];
        var4 = undefined;
        var2 = var5.bind(var4)(var0);
        var1 = var2.useQuestBarOrDockModeChangeTracking;
        var0 = {};
        var0.mode = var3;
        var3 = 33;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.QuestContent;
        var8 = var8.QUEST_BAR_MOBILE;
        var0.questContent = var8;
        var0.questId = var7;
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.QuestContent;
        var3 = var3.QUEST_BAR_MOBILE;
        var0.sourceQuestContent = var3;
        var0 = var1.bind(var2)(var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function() {
        var3 = _closure1_slot5;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 34;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var2 = var1.QuestBarRenderedTriggerPoint;
            var1 = var2.trigger;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot40 = var0;
    var1 = function() {
        _fun84278: for (var _fun84278_ip = 0;;) switch (_fun84278_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.useContext;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 13;
                var0 = var11[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var1.bind(var2)(var0);
                var9 = var0.isVisible;
                var _closure2_slot0 = var9;
                var12 = var0.quest;
                var _closure2_slot1 = var12;
                var0 = _closure1_slot35;
                var6 = var0.bind(var4)();
                var2 = _closure1_slot5;
                var1 = var2.useState;
                var3 = 0;
                var0 = {
                    'width': 0,
                    'height': 0
                };
                var1 = var1.bind(var2)(var0);
                var0 = _closure1_slot4;
                var15 = 2;
                var0 = var0.bind(var4)(var1, var15);
                var17 = var0[var3];
                var _closure2_slot2 = var17;
                var13 = 1;
                var0 = var0[var13];
                var _closure2_slot3 = var0;
                var2 = _closure1_slot0;
                var0 = 35;
                var0 = var11[var0];
                var10 = var2.bind(var4)(var0);
                var7 = var10.useStateFromStores;
                var0 = _closure1_slot9;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    var0 = _closure1_slot9;
                    var0 = var0.prevRestingQuestDockMode;
                    return var0;
                };
                var0 = var7.bind(var10)(var1, var0);
                var _closure2_slot4 = var0;
                var0 = 36;
                var0 = var11[var0];
                var7 = var2.bind(var4)(var0);
                var1 = var7.useIsEligibleForQuests;
                var0 = {};
                var10 = _closure1_slot11;
                var10 = var10.QUESTS_BAR;
                var0.location = var10;
                var10 = var1.bind(var7)(var0);
                var1 = 18;
                var0 = var11[var1];
                var14 = var2.bind(var4)(var0);
                var7 = var14.useAnimatedStyle;
                var0 = function() {
                    _fun84280: for (var _fun84280_ip = 0;;) switch (_fun84280_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var8 = 12;
                            var2 = var2[var8];
                            var7 = undefined;
                            var10 = var3.bind(var7)(var2);
                            var9 = var10.withSpring;
                            var2 = _closure2_slot0;
                            var4 = 0;
                            if (!var2) {
                                _fun84280_ip = 47;
                                continue _fun84280
                            }
                        case 44:
                            var4 = 1;
                        case 47:
                            var3 = _closure1_slot36;
                            var2 = 'animate-always';
                            var2 = var9.bind(var10)(var4, var3, var2);
                            var0.opacity = var2;
                            var2 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var8];
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.withSpring;
                            var7 = _closure2_slot0;
                            var5 = 0;
                            if (var7) {
                                _fun84280_ip = 110;
                                continue _fun84280
                            }
                        case 101:
                            var6 = _closure2_slot2;
                            var5 = var6.height;
                        case 110:
                            var1 = _closure1_slot36;
                            var1 = var3.bind(var4)(var5, var1);
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var16 = {};
                var18 = 12;
                var18 = var11[var18];
                var18 = var2.bind(var4)(var18);
                var18 = var18.withSpring;
                var16.withSpring = var18;
                var16.isVisible = var9;
                var18 = _closure1_slot36;
                var16.ENTRANCE_ANIMATION_SPING_CONFIG = var18;
                var16.componentDimensions = var17;
                var0.__closure = var16;
                var16 = 4948945021130.0;
                var0.__workletHash = var16;
                var16 = _closure1_slot37;
                var0.__initData = var16;
                var7 = var7.bind(var14)(var0);
                var16 = _closure1_slot5;
                var14 = var16.useState;
                var0 = false;
                var14 = var14.bind(var16)(var0);
                var0 = _closure1_slot4;
                var0 = var0.bind(var4)(var14, var15);
                var3 = var0[var3];
                var0 = var0[var13];
                var _closure2_slot5 = var0;
                var0 = 37;
                var13 = var11[var0];
                var14 = var2.bind(var4)(var13);
                var13 = var14.useQuestDockHeroAsset;
                var13 = var13.bind(var14)(var12);
                var15 = var13.staticUrl;
                var _closure2_slot6 = var15;
                var0 = var11[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useQuestGameLogotypeAssetUrl;
                var2 = var0.bind(var2)(var12);
                var _closure2_slot7 = var2;
                var13 = var12.userStatus;
                var0 = null;
                var14 = var0 == var13;
                var11 = undefined;
                if (var14) {
                    _fun84278_ip = 443;
                    continue _fun84278
                }
            case 437:
                var11 = var13.enrolledAt;
            case 443:
                var11 = var0 != var11;
                var _closure2_slot8 = var11;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var11 = 38;
                var11 = var18[var11];
                var14 = var13.bind(var4)(var11);
                var11 = var14.useGradientBottom;
                var14 = var11.bind(var14)();
                var11 = 39;
                var11 = var18[var11];
                var16 = var13.bind(var4)(var11);
                var13 = var16.useToken;
                var17 = _closure1_slot1;
                var11 = 11;
                var11 = var18[var11];
                var11 = var17.bind(var4)(var11);
                var11 = var11.colors;
                var11 = var11.BACKGROUND_SURFACE_HIGH;
                var11 = var13.bind(var16)(var11);
                var16 = var0 == var14;
                var13 = undefined;
                if (var16) {
                    _fun84278_ip = 545;
                    continue _fun84278
                }
            case 540:
                var13 = var14.backgroundColor;
            case 545:
                if (!(var0 != var13)) {
                    _fun84278_ip = 552;
                    continue _fun84278
                }
            case 549:
                var11 = var13;
            case 552:
                var _closure2_slot9 = var11;
                var14 = _closure1_slot5;
                var13 = var14.useEffect;
                var11 = new Array(3);
                var11[0] = var15;
                var11[1] = var2;
                var2 = var12.id;
                var11[2] = var2;
                var2 = function() { // Environment: var8
                    var1 = function arg0() {
                        var0 = undefined;
                        var3 = _closure3_slot1;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var1 = function() {
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*(arg0) { // Environment: var1
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun84285: for (var _fun84285_ip = 0;;) switch (_fun84285_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun84285_ip = 143;
                                            continue _fun84285
                                        }
                                    case 10:
                                        var5 = arg0;
                                    case 13: // try_start_0
                                        var3 = _closure1_slot8;
                                        var2 = var3.prefetch;
                                        var1 = var5;
                                        var1 = var2.bind(var3)(var1);
                                        SaveGenerator(address = 38);
                                    case 36:
                                        return var1;
                                    case 38:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun84285_ip = 49;
                                            continue _fun84285
                                        }
                                    case 44: // try_end0
                                        var2 = true;
                                        return var2;
                                    case 49:
                                        return var1;
                                    case 52: // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot2;
                                        var1 = 40;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var4 = var3.bind(var1)(var2);
                                        var3 = var4.track;
                                        var1 = _closure1_slot19;
                                        var2 = var1.QUEST_ASSET_LOADING_FAILURE;
                                        var1 = {};
                                        var6 = _closure1_slot11;
                                        var6 = var6.QUESTS_BAR_MOBILE;
                                        var1.source = var6;
                                        var6 = _closure2_slot1;
                                        var6 = var6.id;
                                        var1.quest_id = var6;
                                        var1.asset_id = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        var1 = false;
                                        return var1;
                                    case 143:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot1 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot1 = var1;
                    var1 = function() {
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun84288: for (var _fun84288_ip = 0;;) switch (_fun84288_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun84288_ip = 157;
                                            continue _fun84288
                                        }
                                    case 10:
                                        var4 = new Array(0);
                                        var1 = _closure2_slot6;
                                        var3 = null;
                                        if (!(var3 != var1)) {
                                            _fun84288_ip = 55;
                                            continue _fun84288
                                        }
                                    case 27:
                                        var5 = var4.push;
                                        var7 = _closure3_slot0;
                                        var6 = _closure2_slot6;
                                        var1 = undefined;
                                        var1 = var7.bind(var1)(var6);
                                        var1 = var5.bind(var4)(var1);
                                    case 55:
                                        var1 = _closure2_slot7;
                                        if (!(var3 != var1)) {
                                            _fun84288_ip = 91;
                                            continue _fun84288
                                        }
                                    case 63:
                                        var3 = var4.push;
                                        var6 = _closure3_slot0;
                                        var5 = _closure2_slot7;
                                        var1 = undefined;
                                        var1 = var6.bind(var1)(var5);
                                        var1 = var3.bind(var4)(var1);
                                    case 91:
                                        var1 = global;
                                        var3 = var1.Promise;
                                        var1 = var3.all;
                                        var1 = var1.bind(var3)(var4);
                                        SaveGenerator(address = 114);
                                    case 112:
                                        return var1;
                                    case 114:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun84288_ip = 154;
                                            continue _fun84288
                                        }
                                    case 120:
                                        var4 = _closure2_slot5;
                                        var3 = var1.every;
                                        var2 = function(arg0) { // Environment: var2
                                            var1 = true;
                                            var0 = arg0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var3 = var3.bind(var1)(var2);
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        return var2;
                                    case 154:
                                        return var1;
                                    case 157:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot2 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot2 = var1;
                    var1 = function() {
                        var0 = undefined;
                        var3 = _closure3_slot2;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var1 = !var1;
                    return var0;
                };
                var2 = var13.bind(var14)(var2, var11);
                var2 = var0 == var12;
                if (var2) {
                    _fun84278_ip = 609;
                    continue _fun84278
                }
            case 606:
                var2 = !var10;
            case 609:
                if (var2) {
                    _fun84278_ip = 615;
                    continue _fun84278
                }
            case 612:
                var2 = !var3;
            case 615:
                var _closure2_slot10 = var2;
                var13 = _closure1_slot5;
                var11 = var13.useEffect;
                var10 = new Array(1);
                var10[0] = var2;
                var3 = function() { // Environment: var8
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 41;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.updateQuestDockVisibilityOverride;
                    var0 = {};
                    var3 = _closure2_slot10;
                    var3 = !var3;
                    var0.isVisible = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 41;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.updateQuestDockVisibilityOverride;
                        var1 = {};
                        var4 = false;
                        var1.isVisible = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = var11.bind(var13)(var3, var10);
                var0 = null;
                if (var2) {
                    _fun84278_ip = 850;
                    continue _fun84278
                }
            case 657:
                var3 = _closure1_slot21;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.View;
                var1 = {};
                var10 = 'box-none';
                var1.pointerEvents = var10;
                var10 = var6.wrapperAnimated;
                var6 = new Array(2);
                var6[0] = var10;
                var6[1] = var7;
                var1.style = var6;
                var6 = function arg0() {
                    var0 = arg0;
                    var2 = _closure2_slot3;
                    var1 = {};
                    var3 = var0.nativeEvent;
                    var3 = var3.layout;
                    var3 = var3.height;
                    var1.height = var3;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.width;
                    var1.width = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.onLayout = var6;
                var7 = _closure1_slot21;
                var10 = _closure1_slot0;
                var5 = 42;
                var5 = var11[var5];
                var5 = var10.bind(var4)(var5);
                var6 = var5.QuestContentImpressionTrackerNative;
                var5 = {};
                var5.overrideVisibility = var9;
                var9 = 33;
                var13 = var11[var9];
                var13 = var10.bind(var4)(var13);
                var13 = var13.QuestContent;
                var13 = var13.QUEST_BAR_MOBILE;
                var5.questContent = var13;
                var5.questOrQuests = var12;
                var9 = var11[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.QuestContent;
                var9 = var9.QUEST_BAR_MOBILE;
                var5.sourceQuestContent = var9;
                var8 = function() {
                    _fun84294: for (var _fun84294_ip = 0;;) switch (_fun84294_ip) {
                        case 0:
                            var3 = _closure1_slot22;
                            var2 = _closure1_slot23;
                            var1 = {};
                            var6 = _closure1_slot21;
                            var5 = _closure1_slot39;
                            var4 = {};
                            var0 = _closure2_slot1;
                            var0 = var0.id;
                            var4.questId = var0;
                            var0 = _closure2_slot4;
                            var4.mode = var0;
                            var0 = undefined;
                            var5 = var6.bind(var0)(var5, var4);
                            var4 = new Array(3);
                            var4[0] = var5;
                            var7 = _closure1_slot21;
                            var6 = _closure1_slot40;
                            var5 = {};
                            var5 = var7.bind(var0)(var6, var5);
                            var4[1] = var5;
                            var7 = _closure1_slot21;
                            var9 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var5 = 14;
                            var5 = var12[var5];
                            var5 = var9.bind(var0)(var5);
                            var6 = var5.QuestDockGestureContextProvider;
                            var5 = {};
                            var10 = _closure1_slot21;
                            var8 = 43;
                            var8 = var12[var8];
                            var8 = var9.bind(var0)(var8);
                            var9 = var8.ThemeContextProvider;
                            var8 = {};
                            var13 = _closure2_slot8;
                            var12 = undefined;
                            if (var13) {
                                _fun84294_ip = 159;
                                continue _fun84294
                            }
                        case 149:
                            var13 = _closure1_slot20;
                            var12 = var13.DARK;
                        case 159:
                            var8.theme = var12;
                            var13 = _closure1_slot21;
                            var12 = _closure1_slot38;
                            var11 = {};
                            var14 = _closure2_slot9;
                            var11.appThemedBackgroundColor = var14;
                            var11 = var13.bind(var0)(var12, var11);
                            var8.children = var11;
                            var8 = var10.bind(var0)(var9, var8);
                            var5.children = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[2] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 850:
                return var0;
        }
    };
    var _closure1_slot41 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var9 = true;
    var4.value = var9;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var18.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var19 = 1;
    var4 = var6[var19];
    var4 = var18.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = arg3;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var15 = var4.StyleSheet;
    var8 = var4.Pressable;
    var _closure1_slot7 = var8;
    var4 = var4.Image;
    var _closure1_slot8 = var4;
    var17 = 4;
    var4 = var6[var17];
    var4 = var18.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var16 = 5;
    var4 = var6[var16];
    var4 = var5.bind(var0)(var4);
    var8 = var4.QuestDockMode;
    var _closure1_slot10 = var8;
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot11 = var4;
    var14 = 6;
    var4 = var6[var14];
    var4 = var5.bind(var0)(var4);
    var8 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot12 = var8;
    var8 = var4.QUEST_DOCK_HEIGHT_CHANGE_PHYSICS;
    var _closure1_slot13 = var8;
    var8 = var4.QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED;
    var _closure1_slot14 = var8;
    var20 = var4.QUEST_DOCK_BORDER_RADII;
    var _closure1_slot15 = var20;
    var8 = var4.QUEST_DOCK_CONTENT_BORDER_RADII;
    var _closure1_slot16 = var8;
    var8 = var4.QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED;
    var _closure1_slot17 = var8;
    var4 = var4.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot18 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot19 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ThemeTypes;
    var _closure1_slot20 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot21 = var8;
    var8 = var4.jsxs;
    var _closure1_slot22 = var8;
    var4 = var4.Fragment;
    var _closure1_slot23 = var4;
    var4 = 10;
    var8 = var6[var4];
    var11 = var5.bind(var0)(var8);
    var10 = var11.createStyles;
    var8 = {};
    var12 = {
        'position': 'absolute',
        'left': '50%',
        'bottom': 0,
        'zIndex': 1
    };
    var8.wrapper = var12;
    var12 = {};
    var23 = var15.absoluteFillObject;
    var24 = var12;
    var13 = copyDataProperties(var24, var23);
    var13 = 'zIndex';
    var12[var13] = var19;
    var8.accessibilityWrapper = var12;
    var12 = {
        'position': 'absolute',
        'bottom': 0,
        'left': '50%',
        'overflow': 'hidden',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'zIndex': 1
    };
    var12.borderRadius = var20;
    var8.questDockWrapper = var12;
    var12 = {};
    var23 = var15.absoluteFillObject;
    var24 = var12;
    var20 = copyDataProperties(var24, var23);
    var21 = 'flex-end';
    var20 = 'justifyContent';
    var12[var20] = var21;
    var12[var13] = var17;
    var8.questDockContentWrapper = var12;
    var12 = {};
    var23 = var15.absoluteFillObject;
    var24 = var12;
    var17 = copyDataProperties(var24, var23);
    var17 = 'bottom';
    var12[var17] = var0;
    var17 = 'right';
    var12[var17] = var0;
    var17 = 'borderWidth';
    var12[var17] = var19;
    var17 = 11;
    var17 = var6[var17];
    var17 = var18.bind(var0)(var17);
    var17 = var17.colors;
    var18 = var17.BORDER_SUBTLE;
    var17 = 'borderColor';
    var12[var17] = var18;
    var12[var13] = var16;
    var8.questDockHeaderBorder = var12;
    var12 = {};
    var23 = var15.absoluteFillObject;
    var24 = var12;
    var15 = copyDataProperties(var24, var23);
    var12[var13] = var14;
    var8.nestedPressable = var12;
    var8 = var10.bind(var11)(var8);
    var _closure1_slot24 = var8;
    var8 = {};
    var10 = 'function dimensionsLayoutTransition_QuestDockTsx1(values){const{withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS,QUEST_DOCK_HEIGHT_CHANGE_PHYSICS}=this.__closure;return{initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight},animations:{originX:withSpring(values.targetOriginX,QUEST_DOCK_MODE_CHANGE_PHYSICS),originY:withSpring(values.targetOriginY,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:withSpring(values.targetHeight,QUEST_DOCK_HEIGHT_CHANGE_PHYSICS),width:withSpring(values.targetWidth,QUEST_DOCK_MODE_CHANGE_PHYSICS)}};}';
    var8.code = var10;
    var _closure1_slot25 = var8;
    var8 = function() { // Environment: var3
        var0 = function arg0() {
            var3 = arg0;
            var0 = {};
            var1 = {};
            var2 = var3.currentOriginX;
            var1.originX = var2;
            var2 = var3.currentOriginY;
            var1.originY = var2;
            var2 = var3.currentWidth;
            var1.width = var2;
            var2 = var3.currentHeight;
            var1.height = var2;
            var0.initialValues = var1;
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 12;
            var8 = var7[var4];
            var5 = undefined;
            var11 = var6.bind(var5)(var8);
            var10 = var11.withSpring;
            var9 = var3.targetOriginX;
            var8 = _closure1_slot12;
            var8 = var10.bind(var11)(var9, var8);
            var1.originX = var8;
            var8 = var7[var4];
            var11 = var6.bind(var5)(var8);
            var10 = var11.withSpring;
            var9 = var3.targetOriginY;
            var8 = _closure1_slot12;
            var8 = var10.bind(var11)(var9, var8);
            var1.originY = var8;
            var8 = var7[var4];
            var11 = var6.bind(var5)(var8);
            var10 = var11.withSpring;
            var9 = var3.targetHeight;
            var8 = _closure1_slot13;
            var8 = var10.bind(var11)(var9, var8);
            var1.height = var8;
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.withSpring;
            var3 = var3.targetWidth;
            var2 = _closure1_slot12;
            var2 = var4.bind(var5)(var3, var2);
            var1.width = var2;
            var0.animations = var1;
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 12;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var3 = _closure1_slot12;
        var2.QUEST_DOCK_MODE_CHANGE_PHYSICS = var3;
        var3 = _closure1_slot13;
        var2.QUEST_DOCK_HEIGHT_CHANGE_PHYSICS = var3;
        var0.__closure = var2;
        var2 = 8925051582191.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot25;
        var0.__initData = var1;
        return var0;
    };
    var8 = var8.bind(var0)();
    var _closure1_slot26 = var8;
    var8 = {};
    var10 = 'function QuestDockTsx2(){const{restingQuestDockMode,QuestDockMode}=this.__closure;return restingQuestDockMode.get()===QuestDockMode.EXPANDED;}';
    var8.code = var10;
    var _closure1_slot27 = var8;
    var8 = {};
    var10 = 'function QuestDockTsx3(){const{appThemedBackgroundColor,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_BORDER_RADII,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,roundToNearestPixel,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{backgroundColor:appThemedBackgroundColor,borderBottomRightRadius:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_BORDER_RADII:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),borderBottomLeftRadius:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?QUEST_DOCK_BORDER_RADII:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:questDockWrapperSpecs.get().height,width:questDockWrapperSpecs.get().width,transform:[{translateX:withSpring(questDockWrapperSpecs.get().x+roundToNearestPixel(questDockWrapperSpecs.get().width/2)*-1,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateY:withSpring(questDockWrapperSpecs.get().y,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}';
    var8.code = var10;
    var _closure1_slot28 = var8;
    var8 = {};
    var10 = 'function QuestDockTsx4(){const{withSpring,interpolate,isPressed,activeQuestDockMode,QuestDockMode,springStandard}=this.__closure;return{transform:[{scale:withSpring(interpolate(isPressed.get(),[1,0],[activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0.98,1]),springStandard)}]};}';
    var8.code = var10;
    var _closure1_slot29 = var8;
    var8 = {};
    var10 = 'function QuestDockTsx5(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,windowDimensions}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),height:windowDimensions.get().height};}';
    var8.code = var10;
    var _closure1_slot30 = var8;
    var8 = {};
    var10 = "function QuestDockTsx6(){const{activeQuestDockMode,QuestDockMode}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.EXPANDED?'auto':'none'};}";
    var8.code = var10;
    var _closure1_slot31 = var8;
    var8 = {};
    var10 = 'function QuestDockTsx7(){const{questDockWrapperSpecs,windowDimensions,safeAreaTop}=this.__closure;const specs=questDockWrapperSpecs.get();const windowHeight=windowDimensions.get().height;return windowHeight-safeAreaTop-specs.height+specs.y;}';
    var8.code = var10;
    var _closure1_slot32 = var8;
    var8 = {};
    var10 = 'function QuestDockTsx8(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var8.code = var10;
    var _closure1_slot33 = var8;
    var8 = {};
    var10 = 'function QuestDockTsx9(){const{isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_CONTENT_BORDER_RADII,QUEST_DOCK_BORDER_RADII,withSpring,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,questDockWrapperSpecs,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED}=this.__closure;return{borderRadius:!isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_CONTENT_BORDER_RADII:QUEST_DOCK_BORDER_RADII,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED),height:isEnrolled&&activeQuestDockMode.get()===QuestDockMode.EXPANDED?questDockWrapperSpecs.get().height:QUEST_DOCK_COLLAPSED_HEIGHT,width:isEnrolled||activeQuestDockMode.get()===QuestDockMode.COLLAPSED?questDockWrapperSpecs.get().width:questDockWrapperSpecs.get().width-QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED*2,transform:[{translateX:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)},{translateY:isEnrolled?0:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?QUEST_DOCK_UNENROLLED_HEADER_INSET_EXPANDED:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)}]};}';
    var8.code = var10;
    var _closure1_slot34 = var8;
    var4 = var6[var4];
    var10 = var5.bind(var0)(var4);
    var8 = var10.createStyles;
    var4 = function() { // Environment: var3
        var0 = {};
        var1 = {
            'position': 'absolute',
            'bottom': 0,
            'padding': 0,
            'width': '100%'
        };
        var0.wrapperAnimated = var1;
        return var0;
    };
    var4 = var8.bind(var10)(var4);
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 22;
    var8 = var6[var8];
    var8 = var5.bind(var0)(var8);
    var23 = var8.SUBTLE_SPRING;
    var24 = var4;
    var8 = copyDataProperties(var24, var23);
    var8 = 'overshootClamping';
    var4[var8] = var9;
    var9 = 54;
    var8 = 'damping';
    var4[var8] = var9;
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = "function QuestDockTsx10(){const{withSpring,isVisible,ENTRANCE_ANIMATION_SPING_CONFIG,componentDimensions}=this.__closure;return{opacity:withSpring(isVisible?1:0,ENTRANCE_ANIMATION_SPING_CONFIG,'animate-always'),transform:[{translateY:withSpring(isVisible?0:componentDimensions.height,ENTRANCE_ANIMATION_SPING_CONFIG)}]};}";
    var4.code = var8;
    var _closure1_slot37 = var4;
    var4 = var7.memo;
    var3 = function() {
        _fun84298: for (var _fun84298_ip = 0;;) switch (_fun84298_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 37;
                var3 = var2[var0];
                var4 = undefined;
                var6 = var1.bind(var4)(var3);
                var3 = var6.useMobileQuestDock;
                var7 = var3.bind(var6)();
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useIsMobileQuestDockVisibleBase;
                var8 = var0.bind(var1)(var7);
                var0 = null;
                var1 = var0 == var7;
                if (var1) {
                    _fun84298_ip = 138;
                    continue _fun84298
                }
            case 64:
                var3 = _closure1_slot21;
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 13;
                var1 = var6[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.Provider;
                var1 = {};
                var6 = {};
                var6.isVisible = var8;
                var6.quest = var7;
                var1.value = var6;
                var7 = _closure1_slot21;
                var6 = _closure1_slot41;
                var5 = {};
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 138:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDock.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.QuestDockWithEntranceAnimation = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 5251, 5228, 5253, 660, 483, 33, 1297, 671, 4081, 10783, 5254, 5257, 5250, 4070, 3720, 8190, 1568, 5252, 4087, 4066, 10785, 6458, 1234, 10786, 10793, 10796, 10797, 4071, 5313, 5230, 10798, 566, 5314, 5225, 8910, 3151, 795, 5258, 10053, 3159, 2]);