// modules/quests/native/QuestDock/QuestDockDragHandle.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var12 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestDockMode;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot6 = var3;
    var14 = 4;
    var3 = var5[var14];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var16 = var12.absoluteFillObject;
    var17 = var9;
    var10 = copyDataProperties(var17, var16);
    var11 = 'bottom';
    var9[var11] = var0;
    var10 = 'right';
    var9[var10] = var0;
    var13 = 'zIndex';
    var9[var13] = var14;
    var3.dragHandleWrapper = var9;
    var9 = {};
    var16 = var12.absoluteFillObject;
    var17 = var9;
    var12 = copyDataProperties(var17, var16);
    var9[var11] = var0;
    var9[var10] = var0;
    var3.dragHandleOverlay = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'function QuestDockDragHandleTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{transform:[{translateY:withSpring(activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?6:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)},{translateX:withSpring(questDockWrapperSpecs.get().width/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}';
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function QuestDockDragHandleTsx2(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(isEnrolled||activeQuestDockMode.get()===QuestDockMode.CLOSED||activeQuestDockMode.get()===QuestDockMode.SOFT_DISMISSED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'function QuestDockDragHandleTsx3(){const{withSpring,isEnrolled,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(!isEnrolled&&activeQuestDockMode.get()!==QuestDockMode.CLOSED&&activeQuestDockMode.get()!==QuestDockMode.SOFT_DISMISSED?0.5:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var3.code = var7;
    var _closure1_slot12 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: QuestDockDragHandle, environment: var1
        _fun83892: for (var _fun83892_ip = 0;;) switch (_fun83892_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.isExpanded;
                var5 = _closure1_slot3;
                var2 = var5.useContext;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var2.bind(var5)(var1);
                var1 = var1.quest;
                var2 = _closure1_slot9;
                var14 = var2.bind(var3)();
                var4 = var5.useContext;
                var6 = _closure1_slot0;
                var2 = 7;
                var2 = var7[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.QuestDockGestureContext;
                var2 = var4.bind(var5)(var2);
                var8 = var2.activeQuestDockMode;
                var _closure2_slot0 = var8;
                var13 = var2.questDockWrapperSpecs;
                var _closure2_slot1 = var13;
                var4 = var1.userStatus;
                var2 = null;
                var5 = var2 == var4;
                var1 = undefined;
                if (var5) {
                    _fun83892_ip = 141;
                    continue _fun83892
                }
            case 135:
                var1 = var4.enrolledAt;
            case 141:
                var9 = var2 != var1;
                var _closure2_slot2 = var9;
                var19 = _closure1_slot0;
                var18 = _closure1_slot2;
                var1 = 8;
                var2 = var18[var1];
                var7 = var19.bind(var3)(var2);
                var4 = var7.useAnimatedStyle;
                var2 = function() { // Original name: D, environment: var0
                    _fun83893: for (var _fun83893_ip = 0;;) switch (_fun83893_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var8 = 9;
                            var1 = var1[var8];
                            var7 = undefined;
                            var9 = var3.bind(var7)(var1);
                            var5 = var9.withSpring;
                            var6 = _closure2_slot0;
                            var1 = var6.get;
                            var6 = var1.bind(var6)();
                            var1 = _closure1_slot5;
                            var1 = var1.CLOSED;
                            if (!(var6 !== var1)) {
                                _fun83893_ip = 93;
                                continue _fun83893
                            }
                        case 64:
                            var6 = _closure2_slot0;
                            var1 = var6.get;
                            var10 = var1.bind(var6)();
                            var1 = _closure1_slot5;
                            var6 = var1.SOFT_DISMISSED;
                            var1 = 0;
                            if (!(var10 === var6)) {
                                _fun83893_ip = 96;
                                continue _fun83893
                            }
                        case 93:
                            var1 = 6;
                        case 96:
                            var6 = _closure1_slot6;
                            var1 = var5.bind(var9)(var1, var6);
                            var2.translateY = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var8];
                            var5 = var5.bind(var7)(var4);
                            var4 = var5.withSpring;
                            var7 = _closure2_slot1;
                            var3 = var7.get;
                            var3 = var3.bind(var7)();
                            var7 = var3.width;
                            var3 = 2;
                            var3 = var7 / var3;
                            var3 = var4.bind(var5)(var3, var6);
                            var2.translateX = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var11 = {};
                var10 = 9;
                var5 = var18[var10];
                var5 = var19.bind(var3)(var5);
                var5 = var5.withSpring;
                var11.withSpring = var5;
                var11.activeQuestDockMode = var8;
                var6 = _closure1_slot5;
                var11.QuestDockMode = var6;
                var5 = _closure1_slot6;
                var11.QUEST_DOCK_MODE_CHANGE_PHYSICS = var5;
                var11.questDockWrapperSpecs = var13;
                var2.__closure = var11;
                var11 = 9438955055878.0;
                var2.__workletHash = var11;
                var11 = _closure1_slot10;
                var2.__initData = var11;
                var7 = var4.bind(var7)(var2);
                var2 = var18[var1];
                var11 = var19.bind(var3)(var2);
                var4 = var11.useAnimatedStyle;
                var2 = function() { // Original name: p, environment: var0
                    _fun83894: for (var _fun83894_ip = 0;;) switch (_fun83894_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 9;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withSpring;
                            var5 = _closure2_slot2;
                            if (var5) {
                                _fun83894_ip = 98;
                                continue _fun83894
                            }
                        case 42:
                            var6 = _closure2_slot0;
                            var5 = var6.get;
                            var6 = var5.bind(var6)();
                            var5 = _closure1_slot5;
                            var5 = var5.CLOSED;
                            if (!(var6 !== var5)) {
                                _fun83894_ip = 98;
                                continue _fun83894
                            }
                        case 69:
                            var5 = _closure2_slot0;
                            var2 = var5.get;
                            var6 = var2.bind(var5)();
                            var2 = _closure1_slot5;
                            var5 = var2.SOFT_DISMISSED;
                            var2 = 0;
                            if (!(var6 === var5)) {
                                _fun83894_ip = 101;
                                continue _fun83894
                            }
                        case 98:
                            var2 = 1;
                        case 101:
                            var1 = _closure1_slot6;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var13 = {};
                var15 = var18[var10];
                var15 = var19.bind(var3)(var15);
                var15 = var15.withSpring;
                var13.withSpring = var15;
                var13.isEnrolled = var9;
                var13.activeQuestDockMode = var8;
                var13.QuestDockMode = var6;
                var13.QUEST_DOCK_MODE_CHANGE_PHYSICS = var5;
                var2.__closure = var13;
                var13 = 1642273909925.0;
                var2.__workletHash = var13;
                var13 = _closure1_slot11;
                var2.__initData = var13;
                var16 = var4.bind(var11)(var2);
                var1 = var18[var1];
                var2 = var19.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: C, environment: var0
                    _fun83895: for (var _fun83895_ip = 0;;) switch (_fun83895_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 9;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withSpring;
                            var5 = _closure2_slot2;
                            if (var5) {
                                _fun83895_ip = 106;
                                continue _fun83895
                            }
                        case 42:
                            var6 = _closure2_slot0;
                            var5 = var6.get;
                            var6 = var5.bind(var6)();
                            var5 = _closure1_slot5;
                            var5 = var5.CLOSED;
                            if (!(var6 !== var5)) {
                                _fun83895_ip = 106;
                                continue _fun83895
                            }
                        case 69:
                            var5 = _closure2_slot0;
                            var2 = var5.get;
                            var6 = var2.bind(var5)();
                            var2 = _closure1_slot5;
                            var5 = var2.SOFT_DISMISSED;
                            var2 = 0.5;
                            if (!(var6 === var5)) {
                                _fun83895_ip = 108;
                                continue _fun83895
                            }
                        case 106:
                            var2 = 0;
                        case 108:
                            var1 = _closure1_slot6;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var4 = {};
                var10 = var18[var10];
                var10 = var19.bind(var3)(var10);
                var10 = var10.withSpring;
                var4.withSpring = var10;
                var4.isEnrolled = var9;
                var4.activeQuestDockMode = var8;
                var4.QuestDockMode = var6;
                var4.QUEST_DOCK_MODE_CHANGE_PHYSICS = var5;
                var0.__closure = var4;
                var4 = 139735065055.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot12;
                var0.__initData = var4;
                var11 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var14.dragHandleWrapper;
                var0.style = var4;
                var6 = _closure1_slot8;
                var9 = _closure1_slot1;
                var8 = 10;
                var4 = var18[var8];
                var5 = var9.bind(var3)(var4);
                var4 = {};
                var4.style = var7;
                var7 = var18[var8];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var13 = var14.dragHandleOverlay;
                var10 = new Array(2);
                var10[0] = var13;
                var10[1] = var11;
                var7.style = var10;
                var11 = 11;
                var10 = var18[var11];
                var10 = var19.bind(var3)(var10);
                var13 = var10.ActionSheetHeaderBar;
                var10 = {};
                var15 = 12;
                var18 = var18[var15];
                var18 = var19.bind(var3)(var18);
                var18 = var18.ActionSheetHeaderBarVariants;
                var18 = var18.OVERLAY;
                var10.variant = var18;
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var18 = 13;
                var19 = var22[var18];
                var19 = var21.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var22[var18];
                var18 = var21.bind(var3)(var18);
                var18 = var18.t;
                if (var17) {
                    _fun83892_ip = 657;
                    continue _fun83892
                }
            case 642:
                var17 = var18.Yplnt6;
                var17 = var19.bind(var20)(var17);
                _fun83892_ip = 670;
                continue _fun83892;
            case 657:
                var18 = var18["GQ+4bk"];
                var17 = var19.bind(var20)(var18);
            case 670:
                var10.accessibilityLabel = var17;
                var10 = var2.bind(var3)(var13, var10);
                var7.children = var10;
                var9 = var2.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                var10 = _closure1_slot7;
                var9 = _closure1_slot1;
                var13 = _closure1_slot2;
                var8 = var13[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {
                    'style': null,
                    'pointerEvents': 'none',
                    'accessibilityElementsHidden': true,
                    'importantForAccessibility': 'no-hide-descendants'
                };
                var17 = var14.dragHandleOverlay;
                var14 = new Array(2);
                var14[0] = var17;
                var14[1] = var16;
                var8.style = var14;
                var14 = _closure1_slot0;
                var11 = var13[var11];
                var11 = var14.bind(var3)(var11);
                var12 = var11.ActionSheetHeaderBar;
                var11 = {};
                var13 = var13[var15];
                var13 = var14.bind(var3)(var13);
                var13 = var13.ActionSheetHeaderBarVariants;
                var13 = var13.FLOATING;
                var11.variant = var13;
                var11 = var10.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockDragHandle.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5191, 5216, 33, 1297, 10688, 5217, 3679, 4040, 6420, 5165, 5165, 1234, 2]);