// modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx
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
    var10 = var3.StyleSheet;
    var11 = 2;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestDockMode;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QUEST_DOCK_MODE_CHANGE_PHYSICS;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var13 = var10.absoluteFillObject;
    var14 = var9;
    var10 = copyDataProperties(var14, var13);
    var10 = 'bottom';
    var9[var10] = var0;
    var10 = 'zIndex';
    var9[var10] = var11;
    var3.questDockContentCollapsed = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = {};
    var7 = 'function QuestDockContentCollapsedTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,hideOnExpand,QUEST_DOCK_MODE_CHANGE_PHYSICS}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?1:0,QUEST_DOCK_MODE_CHANGE_PHYSICS)};}';
    var3.code = var7;
    var _closure1_slot9 = var3;
    var3 = {};
    var7 = "function QuestDockContentCollapsedTsx2(){const{activeQuestDockMode,QuestDockMode,hideOnExpand}=this.__closure;return{pointerEvents:activeQuestDockMode.get()===QuestDockMode.COLLAPSED||!hideOnExpand?'auto':'none'};}";
    var3.code = var7;
    var _closure1_slot10 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun83846: for (var _fun83846_ip = 0;;) switch (_fun83846_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.hideOnExpand;
                var3 = undefined;
                var10 = var3 === var1;
                if (var10) {
                    _fun83846_ip = 23;
                    continue _fun83846
                }
            case 20:
                var10 = var1;
            case 23:
                var _closure2_slot0 = var10;
                var4 = _closure1_slot3;
                var2 = var4.useContext;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 6;
                var1 = var7[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var2.bind(var4)(var1);
                var1 = var1.quest;
                var2 = _closure1_slot8;
                var7 = var2.bind(var3)();
                var4 = var1.userStatus;
                var2 = null;
                var5 = var2 == var4;
                var1 = undefined;
                if (var5) {
                    _fun83846_ip = 102;
                    continue _fun83846
                }
            case 96:
                var1 = var4.enrolledAt;
            case 102:
                var5 = var2 != var1;
                var8 = _closure1_slot3;
                var4 = var8.useContext;
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.QuestDockGestureContext;
                var1 = var4.bind(var8)(var1);
                var12 = var1.activeQuestDockMode;
                var _closure2_slot1 = var12;
                var1 = 8;
                var4 = var9[var1];
                var13 = var2.bind(var3)(var4);
                var8 = var13.useAnimatedStyle;
                var4 = function() {
                    _fun83847: for (var _fun83847_ip = 0;;) switch (_fun83847_ip) {
                        case 0:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 9;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.withSpring;
                            var6 = _closure2_slot1;
                            var2 = var6.get;
                            var8 = var2.bind(var6)();
                            var2 = _closure1_slot4;
                            var7 = var2.COLLAPSED;
                            var6 = 1;
                            var2 = var6;
                            if (!(var8 !== var7)) {
                                _fun83847_ip = 80;
                                continue _fun83847
                            }
                        case 68:
                            var5 = _closure2_slot0;
                            var2 = var6;
                            if (!var5) {
                                _fun83847_ip = 80;
                                continue _fun83847
                            }
                        case 78:
                            var2 = 0;
                        case 80:
                            var1 = _closure1_slot5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var14 = {};
                var11 = 9;
                var11 = var9[var11];
                var11 = var2.bind(var3)(var11);
                var11 = var11.withSpring;
                var14.withSpring = var11;
                var14.activeQuestDockMode = var12;
                var11 = _closure1_slot4;
                var14.QuestDockMode = var11;
                var14.hideOnExpand = var10;
                var15 = _closure1_slot5;
                var14.QUEST_DOCK_MODE_CHANGE_PHYSICS = var15;
                var4.__closure = var14;
                var14 = 13361221764426.0;
                var4.__workletHash = var14;
                var14 = _closure1_slot9;
                var4.__initData = var14;
                var8 = var8.bind(var13)(var4);
                var1 = var9[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.useAnimatedProps;
                var0 = function() {
                    _fun83848: for (var _fun83848_ip = 0;;) switch (_fun83848_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot1;
                            var1 = var3.get;
                            var5 = var1.bind(var3)();
                            var1 = _closure1_slot4;
                            var4 = var1.COLLAPSED;
                            var3 = 'auto';
                            var1 = var3;
                            if (!(var5 !== var4)) {
                                _fun83848_ip = 56;
                                continue _fun83848
                            }
                        case 42:
                            var2 = _closure2_slot0;
                            var1 = var3;
                            if (!var2) {
                                _fun83848_ip = 56;
                                continue _fun83848
                            }
                        case 52:
                            var1 = 'none';
                        case 56:
                            var0.pointerEvents = var1;
                            return var0;
                    }
                };
                var4 = {};
                var4.activeQuestDockMode = var12;
                var4.QuestDockMode = var11;
                var4.hideOnExpand = var10;
                var0.__closure = var4;
                var4 = 14339269503421.0;
                var0.__workletHash = var4;
                var4 = _closure1_slot10;
                var0.__initData = var4;
                var4 = var1.bind(var2)(var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = 10;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var9 = var7.questDockContentCollapsed;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var0.style = var7;
                var0.animatedProps = var4;
                var7 = !var5;
                if (var5) {
                    _fun83846_ip = 433;
                    continue _fun83846
                }
            case 401:
                var9 = _closure1_slot6;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 11;
                var4 = var10[var4];
                var8 = var8.bind(var3)(var4);
                var4 = {};
                var7 = var9.bind(var3)(var8, var4);
            case 433:
                var4 = new Array(2);
                var4[0] = var7;
                if (!var5) {
                    _fun83846_ip = 476;
                    continue _fun83846
                }
            case 444:
                var8 = _closure1_slot6;
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var6 = 12;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var5 = var8.bind(var3)(var7, var6);
            case 476:
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
    var3 = 'modules/quests/native/QuestDock/QuestDockContentCollapsed.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 5193, 5218, 33, 1297, 10690, 5219, 3681, 4042, 6422, 10694, 10697, 2]);