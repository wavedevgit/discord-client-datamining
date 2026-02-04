// modules/quests/native/QuestDock/QuestDockGestureDetector.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function() {
        var3 = _closure1_slot3;
        var2 = var3.useContext;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var0 = 4;
        var0 = var10[var0];
        var8 = undefined;
        var0 = var9.bind(var8)(var0);
        var0 = var0.QuestDockGestureContext;
        var0 = var2.bind(var3)(var0);
        var13 = var0.questDockWrapperSpecs;
        var _closure2_slot0 = var13;
        var12 = var0.activeQuestDockMode;
        var _closure2_slot1 = var12;
        var14 = var0.windowDimensions;
        var _closure2_slot2 = var14;
        var0 = var0.minExpandedContentHeight;
        var _closure2_slot3 = var0;
        var3 = _closure1_slot1;
        var2 = 5;
        var2 = var10[var2];
        var2 = var3.bind(var8)(var2);
        var16 = var2.bind(var8)();
        var _closure2_slot4 = var16;
        var4 = _closure1_slot3;
        var3 = var4.useContext;
        var2 = 6;
        var2 = var10[var2];
        var2 = var9.bind(var8)(var2);
        var2 = var2.QuestDockExternalCoordinationContext;
        var2 = var3.bind(var4)(var2);
        var18 = var2.restingQuestDockMode;
        var _closure2_slot5 = var18;
        var6 = var2.setRestingQuestDockMode;
        var _closure2_slot6 = var6;
        var2 = 7;
        var2 = var10[var2];
        var3 = var9.bind(var8)(var2);
        var2 = var3.useIsMobileQuestDockVisible;
        var2 = var2.bind(var3)();
        var _closure2_slot7 = var2;
        var7 = 8;
        var3 = var10[var7];
        var15 = var9.bind(var8)(var3);
        var4 = var15.useSharedValue;
        var3 = {
            'absoluteX': 0,
            'absoluteY': 0,
            'x': 0,
            'y': 0,
            'height': 0,
            'isDrawer': null,
            'active': false
        };
        var11 = 0;
        var17 = var18.get;
        var19 = var17.bind(var18)();
        var17 = _closure1_slot4;
        var17 = var17.EXPANDED;
        var17 = var19 === var17;
        var3.isDrawer = var17;
        var17 = var4.bind(var15)(var3);
        var _closure2_slot8 = var17;
        var3 = var10[var7];
        var4 = var9.bind(var8)(var3);
        var3 = var4.useSharedValue;
        var15 = var3.bind(var4)(var11);
        var _closure2_slot9 = var15;
        var3 = var10[var7];
        var4 = var9.bind(var8)(var3);
        var3 = var4.useSharedValue;
        var11 = var3.bind(var4)(var2);
        var _closure2_slot10 = var11;
        var19 = _closure1_slot3;
        var4 = var19.useEffect;
        var3 = new Array(2);
        var3[0] = var2;
        var3[1] = var11;
        var2 = function() { // Environment: var1
            var2 = _closure2_slot10;
            var1 = var2.set;
            var0 = _closure2_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var2 = var4.bind(var19)(var2, var3);
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(9);
        var2[0] = var18;
        var2[1] = var17;
        var2[2] = var16;
        var2[3] = var15;
        var2[4] = var14;
        var2[5] = var13;
        var2[6] = var6;
        var2[7] = var12;
        var2[8] = var0;
        var0 = function() { // Environment: var1
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var14 = 9;
            var1 = var9[var14];
            var7 = undefined;
            var1 = var8.bind(var7)(var1);
            var2 = var1.Gesture;
            var1 = var2.Pan;
            var2 = var1.bind(var2)();
            var1 = var2.manualActivation;
            var4 = false;
            var5 = var1.bind(var2)(var4);
            var2 = var5.maxPointers;
            var1 = 1;
            var2 = var2.bind(var5)(var1);
            var1 = var2.shouldCancelWhenOutside;
            var4 = var1.bind(var2)(var4);
            var2 = var4.onTouchesDown;
            var1 = function arg0() {
                var4 = arg0;
                var1 = _closure2_slot9;
                var0 = var1.set;
                var5 = 0;
                var0 = var0.bind(var1)(var5);
                var2 = _closure2_slot8;
                var1 = var2.set;
                var0 = {};
                var6 = var4.changedTouches;
                var6 = var6[var5];
                var6 = var6.absoluteX;
                var0.absoluteX = var6;
                var4 = var4.changedTouches;
                var4 = var4[var5];
                var4 = var4.absoluteY;
                var0.absoluteY = var4;
                var5 = _closure2_slot0;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var4 = var4.x;
                var0.x = var4;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var4 = var4.y;
                var0.y = var4;
                var4 = var5.get;
                var4 = var4.bind(var5)();
                var4 = var4.height;
                var0.height = var4;
                var4 = _closure2_slot5;
                var3 = var4.get;
                var4 = var3.bind(var4)();
                var3 = _closure1_slot4;
                var3 = var3.EXPANDED;
                var3 = var4 === var3;
                var0.isDrawer = var3;
                var3 = false;
                var0.active = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var12 = {};
            var13 = _closure2_slot9;
            var12.touchMoveCount = var13;
            var10 = _closure2_slot8;
            var12.initialGestureOffset = var10;
            var6 = _closure2_slot0;
            var12.questDockWrapperSpecs = var6;
            var11 = _closure2_slot5;
            var12.restingQuestDockMode = var11;
            var15 = _closure1_slot4;
            var12.QuestDockMode = var15;
            var1.__closure = var12;
            var12 = 15649211210155.0;
            var1.__workletHash = var12;
            var12 = _closure1_slot21;
            var1.__initData = var12;
            var4 = var2.bind(var4)(var1);
            var2 = var4.onTouchesMove;
            var1 = function arg0() {
                _fun84321: for (var _fun84321_ip = 0;;) switch (_fun84321_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = var1.state;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 9;
                        var2 = var2[var0];
                        var0 = undefined;
                        var2 = var5.bind(var0)(var2);
                        var2 = var2.State;
                        var2 = var2.BEGAN;
                        if (!(var3 === var2)) {
                            _fun84321_ip = 620;
                            continue _fun84321
                        }
                    case 52:
                        var3 = _closure2_slot8;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.active;
                        if (var2) {
                            _fun84321_ip = 620;
                            continue _fun84321
                        }
                    case 80:
                        var3 = _closure2_slot9;
                        var6 = var3.set;
                        var2 = var3.get;
                        var7 = var2.bind(var3)();
                        var2 = 1;
                        var2 = var7 + var2;
                        var2 = var6.bind(var3)(var2);
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot13;
                        var2 = var3 <= var2;
                        var1 = var1.changedTouches;
                        var9 = 0;
                        var1 = var1[var9];
                        var6 = var1.absoluteY;
                        var7 = var1.absoluteX;
                        var3 = _closure2_slot8;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var1 = var1.absoluteY;
                        var3 = var1 - var6;
                        var1 = global;
                        var8 = var1.Math;
                        var1 = var8.abs;
                        var8 = var1.bind(var8)(var3);
                        var10 = _closure2_slot5;
                        var1 = var10.get;
                        var10 = var1.bind(var10)();
                        var1 = _closure1_slot4;
                        var1 = var1.EXPANDED;
                        var1 = var10 === var1;
                        if (!var1) {
                            _fun84321_ip = 226;
                            continue _fun84321
                        }
                    case 223:
                        var1 = var2;
                    case 226:
                        if (!var1) {
                            _fun84321_ip = 233;
                            continue _fun84321
                        }
                    case 229:
                        var1 = var3 >= var9;
                    case 233:
                        if (var1) {
                            _fun84321_ip = 620;
                            continue _fun84321
                        }
                    case 239:
                        var2 = _closure2_slot5;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = _closure1_slot4;
                        var1 = var1.COLLAPSED;
                        var1 = var2 === var1;
                        if (!var1) {
                            _fun84321_ip = 277;
                            continue _fun84321
                        }
                    case 269:
                        var2 = _closure1_slot8;
                        var1 = var3 > var2;
                    case 277:
                        if (var1) {
                            _fun84321_ip = 338;
                            continue _fun84321
                        }
                    case 280:
                        var10 = _closure2_slot5;
                        var2 = var10.get;
                        var10 = var2.bind(var10)();
                        var2 = _closure1_slot4;
                        var2 = var2.EXPANDED;
                        var2 = var10 === var2;
                        if (!var2) {
                            _fun84321_ip = 335;
                            continue _fun84321
                        }
                    case 310:
                        var10 = _closure1_slot8;
                        var10 = -var10;
                        var10 = var3 < var10;
                        if (var10) {
                            _fun84321_ip = 332;
                            continue _fun84321
                        }
                    case 324:
                        var11 = _closure1_slot8;
                        var10 = var3 > var11;
                    case 332:
                        var2 = var10;
                    case 335:
                        var1 = var2;
                    case 338:
                        if (var1) {
                            _fun84321_ip = 389;
                            continue _fun84321
                        }
                    case 341:
                        var10 = _closure2_slot5;
                        var2 = var10.get;
                        var10 = var2.bind(var10)();
                        var2 = _closure1_slot4;
                        var2 = var2.COLLAPSED;
                        var2 = var10 === var2;
                        if (!var2) {
                            _fun84321_ip = 375;
                            continue _fun84321
                        }
                    case 371:
                        var2 = var3 < var9;
                    case 375:
                        if (!var2) {
                            _fun84321_ip = 386;
                            continue _fun84321
                        }
                    case 378:
                        var10 = _closure1_slot9;
                        var2 = var8 > var10;
                    case 386:
                        var1 = var2;
                    case 389:
                        if (var1) {
                            _fun84321_ip = 440;
                            continue _fun84321
                        }
                    case 392:
                        var10 = _closure2_slot5;
                        var2 = var10.get;
                        var10 = var2.bind(var10)();
                        var2 = _closure1_slot4;
                        var2 = var2.CLOSED;
                        var2 = var10 === var2;
                        if (!var2) {
                            _fun84321_ip = 426;
                            continue _fun84321
                        }
                    case 422:
                        var2 = var3 > var9;
                    case 426:
                        if (!var2) {
                            _fun84321_ip = 437;
                            continue _fun84321
                        }
                    case 429:
                        var10 = _closure1_slot9;
                        var2 = var3 > var10;
                    case 437:
                        var1 = var2;
                    case 440:
                        if (var1) {
                            _fun84321_ip = 491;
                            continue _fun84321
                        }
                    case 443:
                        var10 = _closure2_slot5;
                        var2 = var10.get;
                        var10 = var2.bind(var10)();
                        var2 = _closure1_slot4;
                        var2 = var2.CLOSED;
                        var2 = var10 === var2;
                        if (!var2) {
                            _fun84321_ip = 477;
                            continue _fun84321
                        }
                    case 473:
                        var2 = var3 < var9;
                    case 477:
                        if (!var2) {
                            _fun84321_ip = 488;
                            continue _fun84321
                        }
                    case 480:
                        var3 = _closure1_slot9;
                        var2 = var8 > var3;
                    case 488:
                        var1 = var2;
                    case 491:
                        if (!var1) {
                            _fun84321_ip = 620;
                            continue _fun84321
                        }
                    case 497:
                        var3 = _closure2_slot8;
                        var2 = var3.set;
                        var1 = {};
                        var1.absoluteX = var7;
                        var1.absoluteY = var6;
                        var7 = _closure2_slot0;
                        var6 = var7.get;
                        var6 = var6.bind(var7)();
                        var6 = var6.x;
                        var1.x = var6;
                        var6 = var7.get;
                        var6 = var6.bind(var7)();
                        var6 = var6.y;
                        var1.y = var6;
                        var6 = var7.get;
                        var6 = var6.bind(var7)();
                        var6 = var6.height;
                        var1.height = var6;
                        var6 = _closure2_slot5;
                        var5 = var6.get;
                        var5 = var5.bind(var6)();
                        var4 = _closure1_slot4;
                        var4 = var4.EXPANDED;
                        var4 = var5 === var4;
                        var1.isDrawer = var4;
                        var4 = true;
                        var1.active = var4;
                        var1 = var2.bind(var3)(var1);
                    case 620:
                        return var0;
                }
            };
            var12 = {};
            var14 = var9[var14];
            var14 = var8.bind(var7)(var14);
            var14 = var14.State;
            var12.State = var14;
            var12.initialGestureOffset = var10;
            var12.touchMoveCount = var13;
            var13 = _closure1_slot13;
            var12.QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD = var13;
            var12.restingQuestDockMode = var11;
            var13 = _closure1_slot4;
            var12.QuestDockMode = var13;
            var13 = _closure1_slot8;
            var12.QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM = var13;
            var13 = _closure1_slot9;
            var12.QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM = var13;
            var12.questDockWrapperSpecs = var6;
            var1.__closure = var12;
            var12 = 16451041821957.0;
            var1.__workletHash = var12;
            var12 = _closure1_slot20;
            var1.__initData = var12;
            var4 = var2.bind(var4)(var1);
            var2 = var4.onChange;
            var1 = function arg0() {
                _fun84322: for (var _fun84322_ip = 0;;) switch (_fun84322_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.absoluteY;
                        var4 = _closure2_slot8;
                        var0 = var4.get;
                        var0 = var0.bind(var4)();
                        var0 = var0.absoluteY;
                        var6 = var2 - var0;
                        var2 = _closure2_slot3;
                        var0 = var2.get;
                        var2 = var0.bind(var2)();
                        var0 = var4.get;
                        var0 = var0.bind(var4)();
                        var3 = var0.height;
                        var0 = var4.get;
                        var0 = var0.bind(var4)();
                        var0 = var0.y;
                        var0 = var3 - var0;
                        var0 = var0 - var6;
                        var3 = var0 > var2;
                        if (!var3) {
                            _fun84322_ip = 121;
                            continue _fun84322
                        }
                    case 91:
                        var5 = _closure2_slot1;
                        var4 = var5.get;
                        var5 = var4.bind(var5)();
                        var4 = _closure1_slot4;
                        var4 = var4.EXPANDED;
                        var3 = var5 === var4;
                    case 121:
                        var9 = var0;
                        if (!var3) {
                            _fun84322_ip = 146;
                            continue _fun84322
                        }
                    case 127:
                        var3 = var0 - var2;
                        var0 = _closure1_slot16;
                        var0 = var3 * var0;
                        var9 = var2 + var0;
                    case 146:
                        var2 = _closure2_slot3;
                        var0 = var2.get;
                        var0 = var0.bind(var2)();
                        var5 = 0;
                        if (!(!(var0 > var5))) {
                            _fun84322_ip = 174;
                            continue _fun84322
                        }
                    case 165:
                        var0 = _closure1_slot10;
                        _fun84322_ip = 213;
                        continue _fun84322;
                    case 174:
                        var2 = global;
                        var7 = var2.Math;
                        var4 = var7.min;
                        var3 = _closure2_slot3;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot10;
                        var0 = var4.bind(var7)(var3, var2);
                    case 213:
                        if (!(!(var9 >= var0))) {
                            _fun84322_ip = 980;
                            continue _fun84322
                        }
                    case 220:
                        var2 = _closure1_slot11;
                        if (!(!(var9 < var2))) {
                            _fun84322_ip = 686;
                            continue _fun84322
                        }
                    case 234:
                        var2 = _closure1_slot10;
                        var11 = var9 / var2;
                        var2 = _closure1_slot5;
                        var2 = var9 - var2;
                        var8 = -1;
                        var10 = var8 * var2;
                        var3 = _closure2_slot8;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.isDrawer;
                        if (!var2) {
                            _fun84322_ip = 325;
                            continue _fun84322
                        }
                    case 282:
                        var4 = _closure2_slot8;
                        var3 = var4.set;
                        var2 = {};
                        var7 = var4.get;
                        var16 = var7.bind(var4)();
                        var17 = var2;
                        var7 = copyDataProperties(var17, var16);
                        var12 = false;
                        var7 = 'isDrawer';
                        var2[var7] = var12;
                        var2 = var3.bind(var4)(var2);
                    case 325:
                        var3 = _closure1_slot5;
                        var4 = _closure2_slot0;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var2.height;
                        var2 = var3 !== var2;
                        if (!var2) {
                            _fun84322_ip = 381;
                            continue _fun84322
                        }
                    case 354:
                        var4 = _closure2_slot1;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var3 = _closure1_slot4;
                        var3 = var3.EXPANDED;
                        var2 = var4 !== var3;
                    case 381:
                        if (!var2) {
                            _fun84322_ip = 460;
                            continue _fun84322
                        }
                    case 384:
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 8;
                        var2 = var12[var2];
                        var4 = undefined;
                        var14 = var7.bind(var4)(var2);
                        var13 = var14.runOnJS;
                        var2 = 11;
                        var3 = var12[var2];
                        var3 = var7.bind(var4)(var3);
                        var3 = var3.triggerHapticFeedback;
                        var3 = var13.bind(var14)(var3);
                        var2 = var12[var2];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.HapticFeedbackTypes;
                        var2 = var2.IMPACT_MEDIUM;
                        var2 = var3.bind(var4)(var2);
                    case 460:
                        var4 = _closure2_slot0;
                        var3 = var4.set;
                        var2 = {};
                        var7 = var4.get;
                        var16 = var7.bind(var4)();
                        var17 = var2;
                        var7 = copyDataProperties(var17, var16);
                        var7 = 'x';
                        var2[var7] = var5;
                        var7 = _closure1_slot7;
                        var8 = var8 * var7;
                        var7 = _closure1_slot14;
                        var11 = var11 / var7;
                        var7 = 1;
                        var7 = var7 - var11;
                        var7 = var10 * var7;
                        var8 = var8 + var7;
                        var7 = 'y';
                        var2[var7] = var8;
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var7 = 10;
                        var8 = var8[var7];
                        var7 = undefined;
                        var12 = var10.bind(var7)(var8);
                        var11 = var12.getQuestDockCollapsedWidth;
                        var8 = _closure2_slot2;
                        var7 = var8.get;
                        var7 = var7.bind(var8)();
                        var10 = var7.width;
                        var13 = _closure2_slot4;
                        var7 = var13.get;
                        var7 = var7.bind(var13)();
                        var8 = var7.left;
                        var7 = var13.get;
                        var7 = var7.bind(var13)();
                        var7 = var7.right;
                        var8 = var11.bind(var12)(var10, var8, var7);
                        var7 = 'width';
                        var2[var7] = var8;
                        var8 = _closure1_slot5;
                        var7 = 'height';
                        var2[var7] = var8;
                        var7 = 'prevDeltaY';
                        var2[var7] = var6;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure2_slot1;
                        var3 = var4.set;
                        var2 = _closure1_slot4;
                        var2 = var2.COLLAPSED;
                        var2 = var3.bind(var4)(var2);
                        _fun84322_ip = 1267;
                        continue _fun84322;
                    case 686:
                        var3 = _closure2_slot1;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot4;
                        var2 = var2.CLOSED;
                        if (!(var3 === var2)) {
                            _fun84322_ip = 1267;
                            continue _fun84322
                        }
                    case 716:
                        var2 = global;
                        var3 = var2.Math;
                        var2 = var3.min;
                        var3 = var2.bind(var3)(var9, var5);
                        var2 = _closure1_slot6;
                        var3 = var3 / var2;
                        var2 = 1;
                        var3 = var2 - var3;
                        var2 = _closure1_slot6;
                        var2 = var2 - var9;
                        var11 = var3 * var2;
                        var7 = var11 > var5;
                        var4 = _closure2_slot0;
                        var3 = var4.set;
                        var2 = {};
                        var8 = var4.get;
                        var16 = var8.bind(var4)();
                        var17 = var2;
                        var8 = copyDataProperties(var17, var16);
                        var8 = 'x';
                        var2[var8] = var5;
                        var10 = 0;
                        if (!var7) {
                            _fun84322_ip = 815;
                            continue _fun84322
                        }
                    case 807:
                        var8 = _closure1_slot15;
                        var10 = var11 * var8;
                    case 815:
                        var8 = 'y';
                        var2[var8] = var10;
                        var11 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var8 = 10;
                        var10 = var10[var8];
                        var8 = undefined;
                        var13 = var11.bind(var8)(var10);
                        var12 = var13.getQuestDockClosedWidth;
                        var10 = _closure2_slot2;
                        var8 = var10.get;
                        var8 = var8.bind(var10)();
                        var11 = var8.width;
                        var14 = _closure2_slot4;
                        var8 = var14.get;
                        var8 = var8.bind(var14)();
                        var10 = var8.left;
                        var8 = var14.get;
                        var8 = var8.bind(var14)();
                        var8 = var8.right;
                        var10 = var12.bind(var13)(var11, var10, var8);
                        var8 = 'width';
                        var2[var8] = var10;
                        var8 = var9;
                        if (!var7) {
                            _fun84322_ip = 928;
                            continue _fun84322
                        }
                    case 924:
                        var8 = _closure1_slot6;
                    case 928:
                        var7 = 'height';
                        var2[var7] = var8;
                        var7 = 'prevDeltaY';
                        var2[var7] = var6;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure2_slot1;
                        var2 = var3.set;
                        var0 = _closure1_slot4;
                        var0 = var0.CLOSED;
                        var0 = var2.bind(var3)(var0);
                        _fun84322_ip = 1267;
                        continue _fun84322;
                    case 980:
                        var2 = _closure2_slot8;
                        var0 = var2.get;
                        var0 = var0.bind(var2)();
                        var0 = var0.isDrawer;
                        if (var0) {
                            _fun84322_ip = 1045;
                            continue _fun84322
                        }
                    case 1002:
                        var3 = _closure2_slot8;
                        var2 = var3.set;
                        var0 = {};
                        var4 = var3.get;
                        var16 = var4.bind(var3)();
                        var17 = var0;
                        var4 = copyDataProperties(var17, var16);
                        var7 = true;
                        var4 = 'isDrawer';
                        var0[var4] = var7;
                        var0 = var2.bind(var3)(var0);
                    case 1045:
                        var4 = _closure2_slot0;
                        var3 = var4.set;
                        var2 = {};
                        var0 = var4.get;
                        var16 = var0.bind(var4)();
                        var17 = var2;
                        var0 = copyDataProperties(var17, var16);
                        var0 = 'x';
                        var2[var0] = var5;
                        var0 = 'y';
                        var2[var0] = var5;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 10;
                        var7 = var7[var5];
                        var5 = undefined;
                        var12 = var8.bind(var5)(var7);
                        var11 = var12.getQuestDockExpandedWidth;
                        var10 = _closure2_slot2;
                        var5 = var10.get;
                        var5 = var5.bind(var10)();
                        var8 = var5.width;
                        var13 = _closure2_slot4;
                        var5 = var13.get;
                        var5 = var5.bind(var13)();
                        var7 = var5.left;
                        var5 = var13.get;
                        var5 = var5.bind(var13)();
                        var5 = var5.right;
                        var7 = var11.bind(var12)(var8, var7, var5);
                        var5 = 'width';
                        var2[var5] = var7;
                        var5 = global;
                        var8 = var5.Math;
                        var7 = var8.min;
                        var5 = var10.get;
                        var5 = var5.bind(var10)();
                        var5 = var5.height;
                        var7 = var7.bind(var8)(var9, var5);
                        var5 = 'height';
                        var2[var5] = var7;
                        var5 = 'prevDeltaY';
                        var2[var5] = var6;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure2_slot1;
                        var1 = var2.set;
                        var0 = _closure1_slot4;
                        var0 = var0.EXPANDED;
                        var0 = var1.bind(var2)(var0);
                    case 1267:
                        var0 = undefined;
                        return var0;
                }
            };
            var12 = {};
            var12.initialGestureOffset = var10;
            var13 = _closure2_slot3;
            var12.minExpandedContentHeight = var13;
            var13 = _closure2_slot1;
            var12.activeQuestDockMode = var13;
            var13 = _closure1_slot4;
            var12.QuestDockMode = var13;
            var13 = _closure1_slot16;
            var12.QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR = var13;
            var13 = _closure1_slot10;
            var12.QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT = var13;
            var12.questDockWrapperSpecs = var6;
            var13 = 10;
            var6 = var9[var13];
            var6 = var8.bind(var7)(var6);
            var6 = var6.getQuestDockExpandedWidth;
            var12.getQuestDockExpandedWidth = var6;
            var6 = _closure2_slot2;
            var12.windowDimensions = var6;
            var6 = _closure2_slot4;
            var12.safeArea = var6;
            var6 = _closure1_slot11;
            var12.QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT = var6;
            var6 = _closure1_slot6;
            var12.QUEST_DOCK_CLOSED_HEIGHT = var6;
            var6 = _closure1_slot15;
            var12.QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR = var6;
            var6 = var9[var13];
            var6 = var8.bind(var7)(var6);
            var6 = var6.getQuestDockClosedWidth;
            var12.getQuestDockClosedWidth = var6;
            var6 = _closure1_slot5;
            var12.QUEST_DOCK_COLLAPSED_HEIGHT = var6;
            var6 = _closure1_slot14;
            var12.QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR = var6;
            var6 = 8;
            var14 = var9[var6];
            var14 = var8.bind(var7)(var14);
            var14 = var14.runOnJS;
            var12.runOnJS = var14;
            var14 = 11;
            var15 = var9[var14];
            var15 = var8.bind(var7)(var15);
            var15 = var15.triggerHapticFeedback;
            var12.triggerHapticFeedback = var15;
            var14 = var9[var14];
            var14 = var8.bind(var7)(var14);
            var14 = var14.HapticFeedbackTypes;
            var12.HapticFeedbackTypes = var14;
            var14 = _closure1_slot7;
            var12.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED = var14;
            var13 = var9[var13];
            var13 = var8.bind(var7)(var13);
            var13 = var13.getQuestDockCollapsedWidth;
            var12.getQuestDockCollapsedWidth = var13;
            var1.__closure = var12;
            var12 = 3365256624774.0;
            var1.__workletHash = var12;
            var12 = _closure1_slot19;
            var1.__initData = var12;
            var2 = var2.bind(var4)(var1);
            var1 = var2.onEnd;
            var0 = function arg0() {
                _fun84323: for (var _fun84323_ip = 0;;) switch (_fun84323_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = var0.velocityY;
                        var6 = var0.y;
                        var0 = global;
                        var2 = var0.Math;
                        var1 = var2.abs;
                        var3 = var1.bind(var2)(var4);
                        var1 = var0.Math;
                        var0 = var1.abs;
                        var5 = var0.bind(var1)(var6);
                        var1 = _closure1_slot12;
                        if (!(var3 > var1)) {
                            _fun84323_ip = 70;
                            continue _fun84323
                        }
                    case 61:
                        var1 = 0;
                        if (!(!(var4 < var1))) {
                            _fun84323_ip = 336;
                            continue _fun84323
                        }
                    case 70:
                        var1 = _closure1_slot12;
                        if (!(var3 < var1)) {
                            _fun84323_ip = 106;
                            continue _fun84323
                        }
                    case 78:
                        var2 = _closure2_slot8;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var1 = var1.isDrawer;
                        if (var1) {
                            _fun84323_ip = 336;
                            continue _fun84323
                        }
                    case 106:
                        var7 = _closure2_slot5;
                        var2 = var7.get;
                        var7 = var2.bind(var7)();
                        var2 = _closure1_slot4;
                        var2 = var2.COLLAPSED;
                        if (!(var7 === var2)) {
                            _fun84323_ip = 158;
                            continue _fun84323
                        }
                    case 136:
                        var2 = _closure1_slot12;
                        if (!(!(var4 > var2))) {
                            _fun84323_ip = 324;
                            continue _fun84323
                        }
                    case 147:
                        var2 = _closure1_slot11;
                        if (!(!(var6 > var2))) {
                            _fun84323_ip = 324;
                            continue _fun84323
                        }
                    case 158:
                        var2 = _closure1_slot12;
                        if (!(var4 > var2)) {
                            _fun84323_ip = 193;
                            continue _fun84323
                        }
                    case 166:
                        var7 = _closure2_slot5;
                        var2 = var7.get;
                        var7 = var2.bind(var7)();
                        var2 = _closure1_slot4;
                        var2 = var2.COLLAPSED;
                        if (!(var7 === var2)) {
                            _fun84323_ip = 312;
                            continue _fun84323
                        }
                    case 193:
                        var2 = 0;
                        if (!(var4 < var2)) {
                            _fun84323_ip = 234;
                            continue _fun84323
                        }
                    case 199:
                        var2 = _closure1_slot12;
                        if (!(var3 > var2)) {
                            _fun84323_ip = 234;
                            continue _fun84323
                        }
                    case 207:
                        var3 = _closure2_slot5;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot4;
                        var2 = var2.CLOSED;
                        if (!(var3 !== var2)) {
                            _fun84323_ip = 312;
                            continue _fun84323
                        }
                    case 234:
                        var3 = _closure2_slot5;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = _closure1_slot4;
                        var2 = var2.COLLAPSED;
                        if (!(var3 !== var2)) {
                            _fun84323_ip = 300;
                            continue _fun84323
                        }
                    case 261:
                        var2 = _closure2_slot5;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = _closure1_slot4;
                        var1 = var1.CLOSED;
                        if (!(var2 !== var1)) {
                            _fun84323_ip = 300;
                            continue _fun84323
                        }
                    case 288:
                        var1 = _closure1_slot4;
                        var2 = var1.COLLAPSED;
                        _fun84323_ip = 310;
                        continue _fun84323;
                    case 300:
                        var1 = _closure1_slot4;
                        var2 = var1.RESET_TO_PREVIOUS;
                    case 310:
                        _fun84323_ip = 322;
                        continue _fun84323;
                    case 312:
                        var1 = _closure1_slot4;
                        var2 = var1.COLLAPSED;
                    case 322:
                        _fun84323_ip = 334;
                        continue _fun84323;
                    case 324:
                        var1 = _closure1_slot4;
                        var2 = var1.SOFT_DISMISSED;
                    case 334:
                        _fun84323_ip = 391;
                        continue _fun84323;
                    case 336:
                        var3 = _closure2_slot5;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = _closure1_slot4;
                        var1 = var1.EXPANDED;
                        if (!(var3 !== var1)) {
                            _fun84323_ip = 378;
                            continue _fun84323
                        }
                    case 366:
                        var1 = _closure1_slot4;
                        var1 = var1.EXPANDED;
                        _fun84323_ip = 388;
                        continue _fun84323;
                    case 378:
                        var3 = _closure1_slot4;
                        var1 = var3.RESET_TO_PREVIOUS;
                    case 388:
                        var2 = var1;
                    case 391:
                        var4 = _closure2_slot5;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var3 = _closure1_slot4;
                        var3 = var3.CLOSED;
                        var3 = var4 === var3;
                        if (!var3) {
                            _fun84323_ip = 438;
                            continue _fun84323
                        }
                    case 424:
                        var4 = _closure1_slot4;
                        var4 = var4.EXPANDED;
                        var3 = var2 !== var4;
                    case 438:
                        if (!var3) {
                            _fun84323_ip = 447;
                            continue _fun84323
                        }
                    case 441:
                        var4 = 0;
                        var3 = var6 < var4;
                    case 447:
                        if (!var3) {
                            _fun84323_ip = 458;
                            continue _fun84323
                        }
                    case 450:
                        var4 = _closure1_slot11;
                        var3 = var5 > var4;
                    case 458:
                        if (!var3) {
                            _fun84323_ip = 471;
                            continue _fun84323
                        }
                    case 461:
                        var3 = _closure1_slot4;
                        var2 = var3.COLLAPSED;
                    case 471:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 8;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.runOnJS;
                        var1 = _closure2_slot6;
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var4 = {};
            var12 = _closure1_slot12;
            var4.QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY = var12;
            var4.restingQuestDockMode = var11;
            var11 = _closure1_slot4;
            var4.QuestDockMode = var11;
            var4.initialGestureOffset = var10;
            var10 = _closure1_slot11;
            var4.QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT = var10;
            var6 = var9[var6];
            var6 = var8.bind(var7)(var6);
            var6 = var6.runOnJS;
            var4.runOnJS = var6;
            var5 = _closure2_slot6;
            var4.setRestingQuestDockMode = var5;
            var0.__closure = var4;
            var4 = 10107537449160.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot18;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var3.bind(var4)(var0, var2);
        var2 = var10[var7];
        var4 = var9.bind(var8)(var2);
        var3 = var4.useAnimatedReaction;
        var2 = function() {
            var0 = {};
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var0.mode = var2;
            var2 = _closure2_slot10;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var0.isVisible = var1;
            return var0;
        };
        var6 = {};
        var6.activeQuestDockMode = var12;
        var6.isVisibleSharedValue = var11;
        var2.__closure = var6;
        var6 = 13629688537260.0;
        var2.__workletHash = var6;
        var6 = _closure1_slot22;
        var2.__initData = var6;
        var1 = function arg0, arg1() {
            _fun84325: for (var _fun84325_ip = 0;;) switch (_fun84325_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var5 = var2.mode;
                    var4 = null;
                    var6 = var4 == var3;
                    var0 = undefined;
                    var1 = undefined;
                    if (var6) {
                        _fun84325_ip = 29;
                        continue _fun84325
                    }
                case 24:
                    var1 = var3.mode;
                case 29:
                    var1 = var5 !== var1;
                    if (!var1) {
                        _fun84325_ip = 58;
                        continue _fun84325
                    }
                case 36:
                    var6 = var2.mode;
                    var5 = _closure1_slot4;
                    var5 = var5.CLOSED;
                    var1 = var6 !== var5;
                case 58:
                    if (!var1) {
                        _fun84325_ip = 92;
                        continue _fun84325
                    }
                case 61:
                    var5 = var4 == var3;
                    var4 = undefined;
                    if (var5) {
                        _fun84325_ip = 75;
                        continue _fun84325
                    }
                case 70:
                    var4 = var3.mode;
                case 75:
                    var3 = _closure1_slot4;
                    var3 = var3.CLOSED;
                    var1 = var4 !== var3;
                case 92:
                    if (!var1) {
                        _fun84325_ip = 101;
                        continue _fun84325
                    }
                case 95:
                    var1 = var2.isVisible;
                case 101:
                    if (!var1) {
                        _fun84325_ip = 181;
                        continue _fun84325
                    }
                case 104:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 8;
                    var1 = var4[var1];
                    var6 = var3.bind(var0)(var1);
                    var5 = var6.runOnJS;
                    var1 = 11;
                    var2 = var4[var1];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.triggerHapticFeedback;
                    var2 = var5.bind(var6)(var2);
                    var1 = var4[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.HapticFeedbackTypes;
                    var1 = var1.IMPACT_MEDIUM;
                    var1 = var2.bind(var0)(var1);
                case 181:
                    return var0;
            }
        };
        var6 = {};
        var11 = _closure1_slot4;
        var6.QuestDockMode = var11;
        var7 = var10[var7];
        var7 = var9.bind(var8)(var7);
        var7 = var7.runOnJS;
        var6.runOnJS = var7;
        var7 = 11;
        var11 = var10[var7];
        var11 = var9.bind(var8)(var11);
        var11 = var11.triggerHapticFeedback;
        var6.triggerHapticFeedback = var11;
        var7 = var10[var7];
        var7 = var9.bind(var8)(var7);
        var7 = var7.HapticFeedbackTypes;
        var6.HapticFeedbackTypes = var7;
        var1.__closure = var6;
        var6 = 17417080823410.0;
        var1.__workletHash = var6;
        var5 = _closure1_slot23;
        var1.__initData = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var _closure1_slot24 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var7 = var4.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.QuestDockMode;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.QUEST_DOCK_COLLAPSED_HEIGHT;
    var _closure1_slot5 = var8;
    var8 = var4.QUEST_DOCK_CLOSED_HEIGHT;
    var _closure1_slot6 = var8;
    var8 = var4.QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED;
    var _closure1_slot7 = var8;
    var8 = var4.QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM;
    var _closure1_slot8 = var8;
    var8 = var4.QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM;
    var _closure1_slot9 = var8;
    var8 = var4.QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;
    var _closure1_slot10 = var8;
    var8 = var4.QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT;
    var _closure1_slot11 = var8;
    var8 = var4.QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY;
    var _closure1_slot12 = var8;
    var8 = var4.QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;
    var _closure1_slot13 = var8;
    var8 = var4.QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR;
    var _closure1_slot14 = var8;
    var8 = var4.QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;
    var _closure1_slot15 = var8;
    var4 = var4.QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;
    var _closure1_slot16 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function QuestDockGestureDetectorTsx1(event){const{QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY,restingQuestDockMode,QuestDockMode,initialGestureOffset,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,runOnJS,setRestingQuestDockMode}=this.__closure;const{velocityY:velocityY,y:y}=event;const absoluteVelocityY=Math.abs(velocityY);const absoluteY=Math.abs(y);let resultingDockMode;if(absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&velocityY<0){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(absoluteVelocityY<QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&initialGestureOffset.get().isDrawer){if(restingQuestDockMode.get()===QuestDockMode.EXPANDED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.EXPANDED;}}else if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY||y>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT)){resultingDockMode=QuestDockMode.SOFT_DISMISSED;}else if(velocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()!==QuestDockMode.COLLAPSED){resultingDockMode=QuestDockMode.COLLAPSED;}else if(velocityY<0&&absoluteVelocityY>QUEST_DOCK_GESTURE_MODE_TRANSITION_VELOCITY&&restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.COLLAPSED;}else{if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED||restingQuestDockMode.get()===QuestDockMode.CLOSED){resultingDockMode=QuestDockMode.RESET_TO_PREVIOUS;}else{resultingDockMode=QuestDockMode.COLLAPSED;}}if(restingQuestDockMode.get()===QuestDockMode.CLOSED&&resultingDockMode!==QuestDockMode.EXPANDED&&y<0&&absoluteY>QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){resultingDockMode=QuestDockMode.COLLAPSED;}runOnJS(setRestingQuestDockMode)(resultingDockMode);}';
    var4.code = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function QuestDockGestureDetectorTsx2(event){const{initialGestureOffset,minExpandedContentHeight,activeQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR,QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT,questDockWrapperSpecs,getQuestDockExpandedWidth,windowDimensions,safeArea,QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT,QUEST_DOCK_CLOSED_HEIGHT,QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR,getQuestDockClosedWidth,QUEST_DOCK_COLLAPSED_HEIGHT,QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED,getQuestDockCollapsedWidth}=this.__closure;const deltaY=event.absoluteY-initialGestureOffset.get().absoluteY;const expandedContentHeight=minExpandedContentHeight.get();let nextHeight=initialGestureOffset.get().height-initialGestureOffset.get().y-deltaY;if(nextHeight>expandedContentHeight&&activeQuestDockMode.get()===QuestDockMode.EXPANDED){const overage=nextHeight-expandedContentHeight;const additionalHeight=overage*QUEST_DOCK_GESTURE_EXPANDED_EXCESS_HEIGHT_FACTOR;nextHeight=expandedContentHeight+additionalHeight;}const expandedModeTransitionHeight=minExpandedContentHeight.get()>0?Math.min(minExpandedContentHeight.get(),QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT):QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;if(nextHeight>=expandedModeTransitionHeight){if(!initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:true});}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:0,width:getQuestDockExpandedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:Math.min(nextHeight,windowDimensions.get().height),prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.EXPANDED);}else if(nextHeight<QUEST_DOCK_GESTURE_MODE_CLOSED_TRANSITION_HEIGHT){if(activeQuestDockMode.get()===QuestDockMode.CLOSED){const progress=1-Math.min(nextHeight,0)/QUEST_DOCK_CLOSED_HEIGHT;const newChange=progress*(QUEST_DOCK_CLOSED_HEIGHT-nextHeight);const nextY=newChange*QUEST_DOCK_GESTURE_CLOSED_Y_OFFSET_FACTOR;const isDraggingDown=newChange>0;questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:isDraggingDown?nextY:0,width:getQuestDockClosedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:isDraggingDown?QUEST_DOCK_CLOSED_HEIGHT:nextHeight,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.CLOSED);}}else{const progress=nextHeight/QUEST_DOCK_GESTURE_MODE_TRANSITION_HEIGHT;const yOffset=(nextHeight-QUEST_DOCK_COLLAPSED_HEIGHT)*-1;const newChange=yOffset*(1-progress/QUEST_DOCK_GESTURE_COLLAPSED_Y_OFFSET_FACTOR);if(initialGestureOffset.get().isDrawer){initialGestureOffset.set({...initialGestureOffset.get(),isDrawer:false});}if(QUEST_DOCK_COLLAPSED_HEIGHT!==questDockWrapperSpecs.get().height&&activeQuestDockMode.get()!==QuestDockMode.EXPANDED){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}questDockWrapperSpecs.set({...questDockWrapperSpecs.get(),x:0,y:QUEST_DOCK_VERTICAL_EDGE_GUTTER_EXPANDED*-1+newChange,width:getQuestDockCollapsedWidth(windowDimensions.get().width,safeArea.get().left,safeArea.get().right),height:QUEST_DOCK_COLLAPSED_HEIGHT,prevDeltaY:deltaY});activeQuestDockMode.set(QuestDockMode.COLLAPSED);}}';
    var4.code = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = 'function QuestDockGestureDetectorTsx3(event){const{State,initialGestureOffset,touchMoveCount,QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD,restingQuestDockMode,QuestDockMode,QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM,QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM,questDockWrapperSpecs}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active){return;}touchMoveCount.set(touchMoveCount.get()+1);const isDragging=touchMoveCount.get()<=QUEST_DOCK_GESTURE_TOUCH_MOVE_COUNT_THRESHOLD;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const computed=initialGestureOffset.get().absoluteY-absoluteY;const computedAbsolute=Math.abs(computed);if(restingQuestDockMode.get()===QuestDockMode.EXPANDED&&isDragging&&computed>=0){return;}if(restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.EXPANDED&&(computed<-QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM||computed>QUEST_DOCK_GESTURE_VERTICAL_DELTA_MINIMUM)||restingQuestDockMode.get()===QuestDockMode.COLLAPSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed>0&&computed>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM||restingQuestDockMode.get()===QuestDockMode.CLOSED&&computed<0&&computedAbsolute>QUEST_DOCK_GESTURE_CLOSED_VERTICAL_DELTA_MINIMUM){initialGestureOffset.set({absoluteX:absoluteX,absoluteY:absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:true});}}';
    var4.code = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = 'function QuestDockGestureDetectorTsx4(event){const{touchMoveCount,initialGestureOffset,questDockWrapperSpecs,restingQuestDockMode,QuestDockMode}=this.__closure;touchMoveCount.set(0);initialGestureOffset.set({absoluteX:event.changedTouches[0].absoluteX,absoluteY:event.changedTouches[0].absoluteY,x:questDockWrapperSpecs.get().x,y:questDockWrapperSpecs.get().y,height:questDockWrapperSpecs.get().height,isDrawer:restingQuestDockMode.get()===QuestDockMode.EXPANDED,active:false});}';
    var4.code = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function QuestDockGestureDetectorTsx5(){const{activeQuestDockMode,isVisibleSharedValue}=this.__closure;return{mode:activeQuestDockMode.get(),isVisible:isVisibleSharedValue.get()};}';
    var4.code = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function QuestDockGestureDetectorTsx6(current,previous){const{QuestDockMode,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current.mode===(previous===null||previous===void 0?void 0:previous.mode)||current.mode===QuestDockMode.CLOSED||(previous===null||previous===void 0?void 0:previous.mode)===QuestDockMode.CLOSED||!current.isVisible){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}';
    var4.code = var8;
    var _closure1_slot23 = var4;
    var4 = var7.memo;
    var3 = function arg0() {
        var1 = _closure1_slot24;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot17;
        var1 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 9;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.GestureDetector;
        var0 = {};
        var0.gesture = var4;
        var4 = arg0;
        var4 = var4.children;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/QuestDock/QuestDockGestureDetector.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.useQuestDockSwipeGesture = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5228, 5253, 33, 5254, 5300, 5257, 5225, 3720, 4961, 5252, 3279, 2]);