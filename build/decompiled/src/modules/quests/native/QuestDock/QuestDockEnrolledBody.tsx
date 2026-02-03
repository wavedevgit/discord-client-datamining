// modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var17 = var1.quest;
        var _closure2_slot0 = var17;
        var1 = _closure1_slot13;
        var3 = undefined;
        var14 = var1.bind(var3)();
        var4 = _closure1_slot4;
        var2 = var4.useContext;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 9;
        var1 = var13[var1];
        var1 = var12.bind(var3)(var1);
        var1 = var1.QuestDockExternalCoordinationContext;
        var1 = var2.bind(var4)(var1);
        var2 = var1.restingQuestDockMode;
        var6 = var1.setRestingQuestDockMode;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useContext;
        var1 = 10;
        var1 = var13[var1];
        var1 = var12.bind(var3)(var1);
        var1 = var1.QuestDockGestureContext;
        var1 = var4.bind(var5)(var1);
        var7 = var1.questDockWrapperSpecs;
        var _closure2_slot2 = var7;
        var9 = _closure1_slot1;
        var1 = 11;
        var1 = var13[var1];
        var1 = var9.bind(var3)(var1);
        var8 = var1.bind(var3)(var2);
        var _closure2_slot3 = var8;
        var1 = 12;
        var1 = var13[var1];
        var4 = var12.bind(var3)(var1);
        var2 = var4.useHasWatchVideoOnMobileTasks;
        var1 = var17.config;
        var5 = var2.bind(var4)(var1);
        var _closure2_slot4 = var5;
        var4 = _closure1_slot4;
        var2 = var4.useEffect;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var7 = var17.id;
        var1[2] = var7;
        var1[3] = var6;
        var1[4] = var5;
        var0 = function() { // Environment: var0
            _fun84245: for (var _fun84245_ip = 0;;) switch (_fun84245_ip) {
                case 0:
                    var1 = function() {
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun84248: for (var _fun84248_ip = 0;;) switch (_fun84248_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun84248_ip = 211;
                                            continue _fun84248
                                        }
                                    case 10:
                                        var2 = _closure2_slot2;
                                        var1 = var2.get;
                                        var1 = var1.bind(var2)();
                                        var2 = var1.prevDeltaY;
                                        var1 = 0;
                                        var1 = var2 < var1;
                                        if (!var1) {
                                            _fun84248_ip = 62;
                                            continue _fun84248
                                        }
                                    case 41:
                                        var4 = _closure2_slot3;
                                        var2 = _closure1_slot7;
                                        var2 = var2.RESET_TO_PREVIOUS;
                                        var1 = var4 === var2;
                                    case 62:
                                        if (!var1) {
                                            _fun84248_ip = 92;
                                            continue _fun84248
                                        }
                                    case 65:
                                        var4 = _closure1_slot6;
                                        var4 = var4.prevRestingQuestDockMode;
                                        var2 = _closure1_slot7;
                                        var2 = var2.EXPANDED;
                                        var1 = var4 === var2;
                                    case 92:
                                        if (!var1) {
                                            _fun84248_ip = 203;
                                            continue _fun84248
                                        }
                                    case 95:
                                        var5 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var1 = 13;
                                        var1 = var8[var1];
                                        var4 = undefined;
                                        var5 = var5.bind(var4)(var1);
                                        var1 = {};
                                        var6 = _closure2_slot0;
                                        var6 = var6.id;
                                        var1.questId = var6;
                                        var7 = _closure1_slot0;
                                        var6 = 14;
                                        var6 = var8[var6];
                                        var6 = var7.bind(var4)(var6);
                                        var6 = var6.QuestContent;
                                        var6 = var6.QUEST_BAR_MOBILE;
                                        var1.sourceQuestContent = var6;
                                        var1 = var5.bind(var4)(var1);
                                        SaveGenerator(address = 178);
                                    case 176:
                                        return var1;
                                    case 178:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun84248_ip = 208;
                                            continue _fun84248
                                        }
                                    case 184:
                                        var3 = _closure2_slot1;
                                        var2 = _closure1_slot7;
                                        var2 = var2.COLLAPSED;
                                        var2 = var3.bind(var4)(var2);
                                    case 203:
                                        var2 = undefined;
                                        return var2;
                                    case 208:
                                        return var1;
                                    case 211:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot0 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var1 = _closure2_slot4;
                    if (!var1) {
                        _fun84245_ip = 36;
                        continue _fun84245
                    }
                case 23:
                    var1 = function() {
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot12;
        var1 = _closure1_slot11;
        var0 = {};
        var6 = _closure1_slot10;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var14.headerWrapper;
        var4.style = var7;
        var10 = _closure1_slot10;
        var7 = 15;
        var7 = var13[var7];
        var8 = var9.bind(var3)(var7);
        var7 = {};
        var7.quest = var17;
        var16 = 16;
        var11 = var13[var16];
        var11 = var12.bind(var3)(var11);
        var11 = var11.QuestBottomSheetStep;
        var11 = var11.TASK_STATUS;
        var7.step = var11;
        var11 = true;
        var7.withActionSheet = var11;
        var11 = _closure1_slot8;
        var11 = var11.QUESTS_BAR_MOBILE;
        var7.location = var11;
        var7 = var10.bind(var3)(var8, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var7 = _closure1_slot10;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = var14.contentWrapper;
        var5.style = var8;
        var18 = _closure1_slot10;
        var8 = var13[var16];
        var8 = var12.bind(var3)(var8);
        var10 = var8.QuestBottomSheetContent;
        var8 = {};
        var8.quest = var17;
        var11 = _closure1_slot8;
        var11 = var11.QUESTS_BAR_MOBILE;
        var8.location = var11;
        var11 = var13[var16];
        var11 = var12.bind(var3)(var11);
        var11 = var11.QuestBottomSheetStep;
        var11 = var11.TASK_STATUS;
        var8.step = var11;
        var11 = 14;
        var19 = var13[var11];
        var19 = var12.bind(var3)(var19);
        var19 = var19.QuestContent;
        var19 = var19.QUEST_BAR_MOBILE;
        var8.sourceQuestContent = var19;
        var8 = var18.bind(var3)(var10, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var7 = _closure1_slot10;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = var14.footerWrapper;
        var5.style = var8;
        var10 = _closure1_slot10;
        var8 = 17;
        var8 = var13[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.quest = var17;
        var16 = var13[var16];
        var16 = var12.bind(var3)(var16);
        var16 = var16.QuestBottomSheetStep;
        var16 = var16.TASK_STATUS;
        var8.step = var16;
        var15 = _closure1_slot8;
        var15 = var15.QUESTS_BAR_MOBILE;
        var8.location = var15;
        var14 = var14.footer;
        var8.style = var14;
        var14 = false;
        var8.withSafeArea = var14;
        var11 = var13[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.QuestContent;
        var11 = var11.QUEST_BAR_MOBILE;
        var8.sourceQuestContent = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var19 = var0.quest;
        var0 = _closure1_slot13;
        var3 = undefined;
        var14 = var0.bind(var3)();
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var8 = 16;
        var0 = var13[var8];
        var2 = var12.bind(var3)(var0);
        var1 = var2.useEnrolledQuestContentProps;
        var0 = {};
        var4 = var19.id;
        var0.questId = var4;
        var4 = _closure1_slot8;
        var4 = var4.QUESTS_BAR_MOBILE;
        var0.location = var4;
        var11 = 14;
        var4 = var13[var11];
        var4 = var12.bind(var3)(var4);
        var4 = var4.QuestContent;
        var4 = var4.QUEST_BAR_MOBILE;
        var0.sourceQuestContent = var4;
        var0 = var1.bind(var2)(var0);
        var18 = var0.step;
        var16 = var0.defibrillator;
        var15 = var0.stepActions;
        var22 = var0.handleTaskSelect;
        var21 = var0.showMicrophone;
        var2 = _closure1_slot12;
        var1 = _closure1_slot11;
        var0 = {};
        var6 = _closure1_slot10;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var14.headerWrapper;
        var4.style = var7;
        var20 = _closure1_slot10;
        var9 = _closure1_slot1;
        var7 = 15;
        var7 = var13[var7];
        var10 = var9.bind(var3)(var7);
        var7 = {};
        var7.quest = var19;
        var7.step = var18;
        var23 = true;
        var7.withActionSheet = var23;
        var23 = _closure1_slot8;
        var23 = var23.QUESTS_BAR_MOBILE;
        var7.location = var23;
        var7 = var20.bind(var3)(var10, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var7 = _closure1_slot10;
        var6 = _closure1_slot5;
        var5 = {};
        var10 = var14.contentWrapper;
        var5.style = var10;
        var20 = _closure1_slot10;
        var8 = var13[var8];
        var8 = var12.bind(var3)(var8);
        var10 = var8.QuestBottomSheetContent;
        var8 = {};
        var8.defibrillator = var16;
        var8.quest = var19;
        var8.handleTaskSelect = var22;
        var22 = _closure1_slot8;
        var22 = var22.QUESTS_BAR_MOBILE;
        var8.location = var22;
        var8.showMicrophone = var21;
        var8.step = var18;
        var21 = var13[var11];
        var21 = var12.bind(var3)(var21);
        var21 = var21.QuestContent;
        var21 = var21.QUEST_BAR_MOBILE;
        var8.sourceQuestContent = var21;
        var8 = var20.bind(var3)(var10, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var7 = _closure1_slot10;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = var14.footerWrapper;
        var5.style = var8;
        var10 = _closure1_slot10;
        var8 = 17;
        var8 = var13[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8.quest = var19;
        var8.step = var18;
        var18 = var16.isActive;
        var8.isDefibrilating = var18;
        var17 = _closure1_slot8;
        var17 = var17.QUESTS_BAR_MOBILE;
        var8.location = var17;
        var17 = var15.onBack;
        var8.onBack = var17;
        var16 = var16.start;
        var8.onDefib = var16;
        var15 = var15.onNext;
        var8.onConnectConsoleNext = var15;
        var14 = var14.footer;
        var8.style = var14;
        var14 = false;
        var8.withSafeArea = var14;
        var11 = var13[var11];
        var11 = var12.bind(var3)(var11);
        var11 = var11.QuestContent;
        var11 = var11.QUEST_BAR_MOBILE;
        var8.sourceQuestContent = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.QuestDockMode;
    var _closure1_slot7 = var7;
    var3 = var3.QuestsExperimentLocations;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.QUEST_DOCK_EXPANDED_ENROLLED_PADDING_TOP;
    var7 = var3.QUEST_DOCK_EXPANDED_HEIGHT;
    var _closure1_slot9 = var7;
    var13 = var3.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
    var11 = var3.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var7 = var3.Fragment;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flexGrow': 0,
        'flexShrink': 0
    };
    var9.paddingBottom = var13;
    var9.paddingTop = var10;
    var9.paddingHorizontal = var11;
    var3.wrapper = var9;
    var9 = {};
    var10 = 8;
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.marginBottom = var13;
    var3.headerWrapper = var9;
    var9 = {
        'display': 'flex',
        'gap': null,
        'flexGrow': 0,
        'flexShrink': 0
    };
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.gap = var13;
    var3.contentWrapper = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginTop = var10;
    var3.footer = var9;
    var9 = {};
    var10 = -1;
    var12 = var10 * var11;
    var9.marginLeft = var12;
    var10 = var10 * var11;
    var9.marginRight = var10;
    var3.footerWrapper = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun84251: for (var _fun84251_ip = 0;;) switch (_fun84251_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.questId;
                var1 = _closure1_slot13;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var8 = _closure1_slot4;
                var2 = var8.useContext;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 10;
                var1 = var7[var1];
                var1 = var6.bind(var3)(var1);
                var1 = var1.QuestDockGestureContext;
                var1 = var2.bind(var8)(var1);
                var11 = var1.minExpandedContentHeight;
                var _closure2_slot0 = var11;
                var1 = 18;
                var1 = var7[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.useNonNullableQuest;
                var8 = var1.bind(var2)(var4);
                var10 = _closure1_slot4;
                var4 = var10.useCallback;
                var2 = new Array(1);
                var2[0] = var11;
                var1 = function(arg0) { // Environment: var0
                    _fun84252: for (var _fun84252_ip = 0;;) switch (_fun84252_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.height;
                            var3 = _closure2_slot0;
                            var1 = var3.get;
                            var1 = var1.bind(var3)();
                            if (!(var1 !== var2)) {
                                _fun84252_ip = 54;
                                continue _fun84252
                            }
                        case 40:
                            var1 = _closure2_slot0;
                            var0 = var1.set;
                            var0 = var0.bind(var1)(var2);
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var4.bind(var10)(var1, var2);
                var10 = _closure1_slot4;
                var2 = var10.useEffect;
                var1 = new Array(1);
                var1[0] = var11;
                var0 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        _fun84254: for (var _fun84254_ip = 0;;) switch (_fun84254_ip) {
                            case 0:
                                var2 = _closure2_slot0;
                                var0 = var2.get;
                                var3 = var0.bind(var2)();
                                var2 = _closure1_slot9;
                                if (!(var3 !== var2)) {
                                    _fun84254_ip = 45;
                                    continue _fun84254
                                }
                            case 27:
                                var2 = _closure2_slot0;
                                var1 = var2.set;
                                var0 = _closure1_slot9;
                                var0 = var1.bind(var2)(var0);
                            case 45:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var10)(var0, var1);
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var9 = var9.wrapper;
                var0.style = var9;
                var0.onLayout = var4;
                var4 = 19;
                var4 = var7[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.hasWatchVideoTasks;
                var4 = var4.bind(var6)(var8);
                var7 = _closure1_slot10;
                if (var4) {
                    _fun84251_ip = 232;
                    continue _fun84251
                }
            case 213:
                var6 = _closure1_slot15;
                var4 = {};
                var4.quest = var8;
                var4 = var7.bind(var3)(var6, var4);
                _fun84251_ip = 249;
                continue _fun84251;
            case 232:
                var6 = _closure1_slot14;
                var5 = {};
                var5.quest = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 249:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockEnrolledBody.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 5246, 5223, 5248, 33, 1297, 671, 5252, 5249, 8185, 5220, 10697, 5225, 10694, 10693, 10695, 5308, 5262, 2]);