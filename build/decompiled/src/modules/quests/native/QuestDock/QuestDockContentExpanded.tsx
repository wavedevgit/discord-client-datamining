// modules/quests/native/QuestDock/QuestDockContentExpanded.tsx
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
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var10 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestDockMode;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = var7;
    var3 = var3.QUEST_DOCK_EXPANDED_HEIGHT;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
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
    var14 = var10.absoluteFillObject;
    var15 = var9;
    var10 = copyDataProperties(var15, var14);
    var10 = 'bottom';
    var9[var10] = var0;
    var12 = 'flex';
    var10 = 'display';
    var9[var10] = var12;
    var10 = 'zIndex';
    var9[var10] = var11;
    var3.wrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = 'function QuestDockContentExpandedTsx1(){const{isEnrolled,QUEST_DOCK_EXPANDED_HEIGHT,windowDimensions,withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS,questDockWrapperSpecs}=this.__closure;return{height:isEnrolled?undefined:QUEST_DOCK_EXPANDED_HEIGHT,width:windowDimensions.get().width,opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS),transform:[{translateX:withSpring((questDockWrapperSpecs.get().width-windowDimensions.get().width)/2,QUEST_DOCK_MODE_CHANGE_PHYSICS)}]};}';
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: QuestDockContentExpanded, environment: var1
        _fun83830: for (var _fun83830_ip = 0;;) switch (_fun83830_ip) {
            case 0:
                var5 = _closure1_slot3;
                var2 = var5.useContext;
                var4 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 6;
                var1 = var8[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var2.bind(var5)(var1);
                var9 = var1.quest;
                var1 = _closure1_slot9;
                var4 = var1.bind(var3)();
                var2 = var5.useContext;
                var7 = _closure1_slot0;
                var1 = 7;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.QuestDockGestureContext;
                var1 = var2.bind(var5)(var1);
                var11 = var1.activeQuestDockMode;
                var _closure2_slot0 = var11;
                var10 = var1.questDockWrapperSpecs;
                var _closure2_slot1 = var10;
                var12 = var1.windowDimensions;
                var _closure2_slot2 = var12;
                var5 = var9.userStatus;
                var2 = null;
                var7 = var2 == var5;
                var1 = undefined;
                if (var7) {
                    _fun83830_ip = 142;
                    continue _fun83830
                }
            case 136:
                var1 = var5.enrolledAt;
            case 142:
                var5 = var2 != var1;
                var _closure2_slot3 = var5;
                var13 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 8;
                var1 = var8[var1];
                var2 = var13.bind(var3)(var1);
                var1 = var2.useAnimatedStyle;
                var0 = function() { // Original name: n, environment: var0
                    _fun83831: for (var _fun83831_ip = 0;;) switch (_fun83831_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot3;
                            var6 = undefined;
                            var2 = undefined;
                            if (var3) {
                                _fun83831_ip = 23;
                                continue _fun83831
                            }
                        case 16:
                            var2 = _closure1_slot6;
                        case 23:
                            var0.height = var2;
                            var3 = _closure2_slot2;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var2 = var2.width;
                            var0.width = var2;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var7 = 9;
                            var2 = var2[var7];
                            var8 = var4.bind(var6)(var2);
                            var4 = var8.withSpring;
                            var5 = _closure2_slot0;
                            var2 = var5.get;
                            var9 = var2.bind(var5)();
                            var2 = _closure1_slot4;
                            var5 = var2.EXPANDED;
                            var2 = 0;
                            if (!(var9 === var5)) {
                                _fun83831_ip = 109;
                                continue _fun83831
                            }
                        case 106:
                            var2 = 1;
                        case 109:
                            var5 = _closure1_slot5;
                            var2 = var4.bind(var8)(var2, var5);
                            var0.opacity = var2;
                            var2 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.withSpring;
                            var7 = _closure2_slot1;
                            var6 = var7.get;
                            var6 = var6.bind(var7)();
                            var6 = var6.width;
                            var7 = _closure2_slot2;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var1 = var1.width;
                            var6 = var6 - var1;
                            var1 = 2;
                            var1 = var6 / var1;
                            var1 = var3.bind(var4)(var1, var5);
                            var2.translateX = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.isEnrolled = var5;
                var14 = _closure1_slot6;
                var7.QUEST_DOCK_EXPANDED_HEIGHT = var14;
                var7.windowDimensions = var12;
                var12 = 9;
                var12 = var8[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.withSpring;
                var7.withSpring = var12;
                var7.activeQuestDockMode = var11;
                var11 = _closure1_slot4;
                var7.QuestDockMode = var11;
                var11 = _closure1_slot5;
                var7.QUEST_DOCK_MODE_CHANGE_PHYSICS = var11;
                var7.questDockWrapperSpecs = var10;
                var0.__closure = var7;
                var7 = 17161265612101.0;
                var0.__workletHash = var7;
                var7 = _closure1_slot10;
                var0.__initData = var7;
                var7 = var1.bind(var2)(var0);
                var2 = _closure1_slot8;
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var8 = var4.wrapper;
                var4 = new Array(2);
                var4[0] = var8;
                var4[1] = var7;
                var0.style = var4;
                var7 = !var5;
                if (var5) {
                    _fun83830_ip = 372;
                    continue _fun83830
                }
            case 340:
                var10 = _closure1_slot7;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 11;
                var4 = var11[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var7 = var10.bind(var3)(var8, var4);
            case 372:
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun83830_ip = 425;
                    continue _fun83830
                }
            case 383:
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var6 = 12;
                var6 = var10[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var9 = var9.id;
                var6.questId = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 425:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockContentExpanded.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5190, 5215, 33, 1297, 10686, 5216, 3679, 4040, 6419, 10695, 10696, 2]);