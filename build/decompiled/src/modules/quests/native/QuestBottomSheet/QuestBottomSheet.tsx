// modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var0 = function arg0() {
        _fun83301: for (var _fun83301_ip = 0;;) switch (_fun83301_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.questId;
                var2 = var0.initialStep;
                var14 = var0.sourceQuestContent;
                var0 = _closure1_slot14;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot17;
                var0 = {};
                var0.questId = var4;
                var0.initialStep = var2;
                var2 = _closure1_slot8;
                var2 = var2.QUEST_HOME_MOBILE;
                var0.location = var2;
                var0.sourceQuestContent = var14;
                var0 = var1.bind(var3)(var0);
                var18 = var0.quest;
                var13 = var0.step;
                var19 = var0.defibrillator;
                var21 = var0.stepActions;
                var17 = var0.handleTaskSelect;
                var15 = var0.showMicrophone;
                var5 = _closure1_slot0;
                var25 = _closure1_slot2;
                var0 = 16;
                var0 = var25[var0];
                var2 = var5.bind(var3)(var0);
                var1 = var2.useHasWatchVideoOnMobileTasks;
                var0 = var18.config;
                var8 = var1.bind(var2)(var0);
                var0 = 19;
                var1 = var25[var0];
                var2 = var5.bind(var3)(var1);
                var1 = var2.hasWatchVideoTasks;
                var11 = var1.bind(var2)(var18);
                var0 = var25[var0];
                var1 = var5.bind(var3)(var0);
                var0 = var1.isInGameQuest;
                var23 = var0.bind(var1)(var18);
                var0 = _closure1_slot5;
                var12 = 0;
                var2 = var0.bind(var3)(var12);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var20 = var1[var12];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot0 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = function() { // Environment: var22
                    var0 = {};
                    var1 = true;
                    var0.isInQuestBottomSheet = var1;
                    return var0;
                };
                var0 = new Array(0);
                var4 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot10;
                var0 = _closure1_slot15;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var6 = _closure1_slot10;
                var4 = 20;
                var4 = var25[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheet;
                var4 = {};
                var24 = _closure1_slot10;
                var9 = _closure1_slot1;
                var7 = 21;
                var7 = var25[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var7.quest = var18;
                var7.step = var13;
                var25 = _closure1_slot8;
                var25 = var25.QUEST_HOME_MOBILE;
                var7.location = var25;
                var7 = var24.bind(var3)(var9, var7);
                var4.header = var7;
                var7 = null;
                if (var23) {
                    _fun83301_ip = 488;
                    continue _fun83301
                }
            case 364:
                if (!var11) {
                    _fun83301_ip = 372;
                    continue _fun83301
                }
            case 367:
                var7 = null;
                if (!var8) {
                    _fun83301_ip = 488;
                    continue _fun83301
                }
            case 372:
                var11 = _closure1_slot10;
                var9 = _closure1_slot1;
                var23 = _closure1_slot2;
                var8 = 22;
                var8 = var23[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.quest = var18;
                var8.sourceQuestContent = var14;
                var8.step = var13;
                var23 = var19.isActive;
                var8.isDefibrilating = var23;
                var23 = _closure1_slot8;
                var23 = var23.QUEST_HOME_MOBILE;
                var8.location = var23;
                var22 = function arg0() {
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var8.onLayout = var22;
                var22 = var21.onBack;
                var8.onBack = var22;
                var22 = var19.start;
                var8.onDefib = var22;
                var21 = var21.onNext;
                var8.onConnectConsoleNext = var21;
                var7 = var11.bind(var3)(var9, var8);
            case 488:
                var4.footer = var7;
                var7 = true;
                var4.startExpanded = var7;
                var9 = _closure1_slot10;
                var8 = _closure1_slot6;
                var7 = {};
                var11 = var10.contentContainer;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var21 = _closure1_slot13;
                var21 = var21.TASK_SELECT;
                var12 = 0;
                if (!(var13 !== var21)) {
                    _fun83301_ip = 545;
                    continue _fun83301
                }
            case 542:
                var12 = var20;
            case 545:
                var11.paddingBottom = var12;
                var10[1] = var11;
                var7.style = var10;
                var12 = _closure1_slot10;
                var11 = _closure1_slot18;
                var10 = {};
                var10.defibrillator = var19;
                var10.quest = var18;
                var10.handleTaskSelect = var17;
                var16 = _closure1_slot8;
                var16 = var16.QUEST_HOME_MOBILE;
                var10.location = var16;
                var10.showMicrophone = var15;
                var10.sourceQuestContent = var14;
                var10.step = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var4 = function arg0() {
        _fun83304: for (var _fun83304_ip = 0;;) switch (_fun83304_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.questId;
                var12 = var0.initialStep;
                var3 = var0.location;
                var0 = var0.sourceQuestContent;
                var _closure2_slot0 = var0;
                var10 = undefined;
                var _closure2_slot3 = var10;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 13;
                var2 = var5[var0];
                var6 = var4.bind(var10)(var2);
                var2 = var6.useNonNullableQuest;
                var6 = var2.bind(var6)(var8);
                var _closure2_slot1 = var6;
                var2 = 23;
                var2 = var5[var2];
                var8 = var4.bind(var10)(var2);
                var2 = var8.useTrackQuestContentClickedWithImpression;
                var2 = var2.bind(var8)();
                var _closure2_slot2 = var2;
                var2 = 8;
                var2 = var5[var2];
                var5 = var4.bind(var10)(var2);
                var4 = var5.getQuestLogger;
                var2 = {};
                var2.quest = var6;
                var2.location = var3;
                var5 = var4.bind(var5)(var2);
                var11 = null;
                if (!(var11 == var6)) {
                    _fun83304_ip = 188;
                    continue _fun83304
                }
            case 142:
                var4 = var5.error;
                var2 = 'Quest not found in store, closing bottom sheet';
                var2 = var4.bind(var5)(var2);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 24;
                var2 = var5[var2];
                var4 = var4.bind(var10)(var2);
                var2 = var4.hideActionSheet;
                var2 = var2.bind(var4)();
            case 188:
                var4 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = var13[var0];
                var5 = var4.bind(var10)(var2);
                var2 = var5.useQuestTaskDetails;
                var5 = var2.bind(var5)(var6);
                var2 = var13[var0];
                var8 = var4.bind(var10)(var2);
                var2 = var8.useIsQuestProgressing;
                var9 = var2.bind(var8)(var6);
                var0 = var13[var0];
                var2 = var4.bind(var10)(var0);
                var0 = var2.useTaskPlatformScreen;
                var5 = var0.bind(var2)(var6, var5);
                var2 = _closure1_slot3;
                var0 = 3;
                var0 = var2.bind(var10)(var5, var0);
                var2 = 0;
                var8 = var0[var2];
                var5 = 2;
                var0 = var0[var5];
                _closure2_slot3 = var0;
                var0 = 16;
                var0 = var13[var0];
                var13 = var4.bind(var10)(var0);
                var4 = var13.useHasWatchVideoOnMobileTasks;
                var0 = var6.config;
                var0 = var4.bind(var13)(var0);
                var4 = {};
                var4.quest = var6;
                var4.initialStep = var12;
                var4.location = var3;
                var3 = function arg0() {
                    _fun83305: for (var _fun83305_ip = 0;;) switch (_fun83305_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = var1.quest;
                            var _closure3_slot0 = var3;
                            var19 = var1.initialStep;
                            var2 = undefined;
                            var _closure3_slot1 = var2;
                            var _closure3_slot2 = var2;
                            var _closure3_slot3 = var2;
                            var _closure3_slot4 = var2;
                            var _closure3_slot5 = var2;
                            var _closure3_slot6 = var2;
                            var _closure3_slot7 = var2;
                            var _closure3_slot8 = var2;
                            var _closure3_slot9 = var2;
                            var _closure3_slot10 = var2;
                            var _closure3_slot11 = var2;
                            var _closure3_slot12 = var2;
                            var _closure3_slot13 = var2;
                            var _closure3_slot14 = var2;
                            var5 = var3.userStatus;
                            var4 = null;
                            var6 = var4 == var5;
                            var1 = undefined;
                            if (var6) {
                                _fun83305_ip = 102;
                                continue _fun83305
                            }
                        case 96:
                            var1 = var5.completedAt;
                        case 102:
                            var8 = var4 != var1;
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var5 = 13;
                            var6 = var9[var5];
                            var10 = var7.bind(var2)(var6);
                            var6 = var10.useConnectedAccounts;
                            var6 = var6.bind(var10)();
                            var6 = var6.xboxAndPlaystationAccounts;
                            _closure3_slot1 = var6;
                            var12 = _closure1_slot4;
                            var11 = var12.useMemo;
                            var10 = new Array(2);
                            var10[0] = var3;
                            var10[1] = var6;
                            var6 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.supportedConsoles;
                                var0 = _closure3_slot0;
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var2 = _closure3_slot1;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.type;
                                        var0 = _closure5_slot0;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var6 = var11.bind(var12)(var6, var10);
                            var10 = var9[var5];
                            var11 = var7.bind(var2)(var10);
                            var10 = var11.useQuestTaskDetails;
                            var11 = var10.bind(var11)(var3);
                            var10 = var9[var5];
                            var12 = var7.bind(var2)(var10);
                            var10 = var12.useIsQuestProgressing;
                            var12 = var10.bind(var12)(var3);
                            var5 = var9[var5];
                            var7 = var7.bind(var2)(var5);
                            var5 = var7.useTaskPlatformScreen;
                            var9 = var5.bind(var7)(var3, var11);
                            var7 = _closure1_slot3;
                            var5 = 3;
                            var5 = var7.bind(var2)(var9, var5);
                            var9 = 0;
                            var14 = var5[var9];
                            _closure3_slot2 = var14;
                            var15 = 1;
                            var10 = var5[var15];
                            _closure3_slot3 = var10;
                            var16 = 2;
                            var5 = var5[var16];
                            _closure3_slot4 = var5;
                            var17 = _closure1_slot4;
                            var13 = var17.useState;
                            var7 = var6.length;
                            var7 = var9 === var7;
                            if (!var7) {
                                _fun83305_ip = 313;
                                continue _fun83305
                            }
                        case 310:
                            var7 = !var8;
                        case 313:
                            if (!var7) {
                                _fun83305_ip = 352;
                                continue _fun83305
                            }
                        case 316:
                            var20 = _closure1_slot0;
                            var21 = _closure1_slot2;
                            var18 = 15;
                            var18 = var21[var18];
                            var18 = var20.bind(var2)(var18);
                            var18 = var18.TaskPlatformScreen;
                            var18 = var18.CONSOLE;
                            var7 = var14 === var18;
                        case 352:
                            if (var7) {
                                _fun83305_ip = 369;
                                continue _fun83305
                            }
                        case 355:
                            var18 = _closure1_slot13;
                            var18 = var18.CONSOLE_CONNECT;
                            var7 = var19 === var18;
                        case 369:
                            var13 = var13.bind(var17)(var7);
                            var7 = _closure1_slot3;
                            var7 = var7.bind(var2)(var13, var16);
                            var13 = var7[var9];
                            _closure3_slot5 = var13;
                            var7 = var7[var15];
                            _closure3_slot6 = var7;
                            if (var12) {
                                _fun83305_ip = 413;
                                continue _fun83305
                            }
                        case 403:
                            var11 = var11.progressSeconds;
                            var12 = var11 > var9;
                        case 413:
                            _closure3_slot7 = var12;
                            var6 = var6.length;
                            var6 = var9 !== var6;
                            if (var6) {
                                _fun83305_ip = 432;
                                continue _fun83305
                            }
                        case 429:
                            var6 = var8;
                        case 432:
                            if (var6) {
                                _fun83305_ip = 471;
                                continue _fun83305
                            }
                        case 435:
                            var9 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var8 = 15;
                            var8 = var11[var8];
                            var8 = var9.bind(var2)(var8);
                            var8 = var8.TaskPlatformScreen;
                            var8 = var8.CONSOLE;
                            var6 = var14 !== var8;
                        case 471:
                            if (var6) {
                                _fun83305_ip = 477;
                                continue _fun83305
                            }
                        case 474:
                            var6 = var13;
                        case 477:
                            if (var6) {
                                _fun83305_ip = 487;
                                continue _fun83305
                            }
                        case 480:
                            var6 = true;
                            var6 = var7.bind(var2)(var6);
                        case 487:
                            var8 = _closure1_slot4;
                            var7 = var8.useCallback;
                            var6 = new Array(1);
                            var6[0] = var5;
                            var5 = function() { // Environment: var0
                                var3 = _closure3_slot6;
                                var0 = undefined;
                                var2 = false;
                                var2 = var3.bind(var0)(var2);
                                var2 = _closure3_slot4;
                                var1 = null;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var5 = var7.bind(var8)(var5, var6);
                            _closure3_slot8 = var5;
                            var6 = function() {
                                var2 = _closure3_slot6;
                                var1 = undefined;
                                var0 = true;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            _closure3_slot9 = var6;
                            var6 = function() {
                                var2 = _closure3_slot6;
                                var1 = undefined;
                                var0 = false;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            _closure3_slot10 = var6;
                            var9 = _closure1_slot4;
                            var8 = var9.useMemo;
                            var7 = function() { // Environment: var0
                                var1 = {};
                                var0 = _closure1_slot13;
                                var0 = var0.TASK_STATUS;
                                var1.type = var0;
                                var0 = true;
                                var1.shouldShow = var0;
                                var0 = new Array(1);
                                var0[0] = var1;
                                return var0;
                            };
                            var6 = new Array(0);
                            var8 = var8.bind(var9)(var7, var6);
                            _closure3_slot11 = var8;
                            var11 = _closure1_slot4;
                            var9 = var11.useMemo;
                            var7 = new Array(2);
                            var7[0] = var13;
                            var7[1] = var12;
                            var6 = function() { // Environment: var0
                                _fun83313: for (var _fun83313_ip = 0;;) switch (_fun83313_ip) {
                                    case 0:
                                        var1 = {};
                                        var0 = _closure1_slot13;
                                        var0 = var0.CONSOLE_CONNECT;
                                        var1.type = var0;
                                        var0 = _closure3_slot5;
                                        var1.shouldShow = var0;
                                        var0 = _closure3_slot10;
                                        var1.onNext = var0;
                                        var0 = new Array(2);
                                        var0[0] = var1;
                                        var1 = {};
                                        var2 = _closure1_slot13;
                                        var2 = var2.TASK_STATUS;
                                        var1.type = var2;
                                        var2 = true;
                                        var1.shouldShow = var2;
                                        var4 = _closure3_slot7;
                                        var2 = undefined;
                                        if (var4) {
                                            _fun83313_ip = 84;
                                            continue _fun83313
                                        }
                                    case 80:
                                        var2 = _closure3_slot9;
                                    case 84:
                                        var1.onBack = var2;
                                        var0[1] = var1;
                                        return var0;
                                }
                            };
                            var7 = var9.bind(var11)(var6, var7);
                            _closure3_slot12 = var7;
                            var11 = _closure1_slot4;
                            var9 = var11.useMemo;
                            var6 = new Array(4);
                            var6[0] = var14;
                            var6[1] = var13;
                            var6[2] = var12;
                            var6[3] = var5;
                            var5 = function() { // Environment: var0
                                _fun83314: for (var _fun83314_ip = 0;;) switch (_fun83314_ip) {
                                    case 0:
                                        var1 = {};
                                        var0 = _closure1_slot13;
                                        var0 = var0.TASK_SELECT;
                                        var1.type = var0;
                                        var5 = _closure3_slot2;
                                        var6 = _closure1_slot0;
                                        var2 = _closure1_slot2;
                                        var8 = 15;
                                        var0 = var2[var8];
                                        var7 = undefined;
                                        var0 = var6.bind(var7)(var0);
                                        var0 = var0.TaskPlatformScreen;
                                        var0 = var0.SELECT;
                                        var0 = var5 === var0;
                                        var1.shouldShow = var0;
                                        var0 = new Array(3);
                                        var0[0] = var1;
                                        var1 = {};
                                        var5 = _closure1_slot13;
                                        var5 = var5.CONSOLE_CONNECT;
                                        var1.type = var5;
                                        var5 = _closure3_slot2;
                                        var2 = var2[var8];
                                        var2 = var6.bind(var7)(var2);
                                        var2 = var2.TaskPlatformScreen;
                                        var2 = var2.CONSOLE;
                                        var2 = var5 === var2;
                                        if (!var2) {
                                            _fun83314_ip = 129;
                                            continue _fun83314
                                        }
                                    case 125:
                                        var2 = _closure3_slot5;
                                    case 129:
                                        var1.shouldShow = var2;
                                        var2 = _closure3_slot8;
                                        var1.onBack = var2;
                                        var2 = _closure3_slot10;
                                        var1.onNext = var2;
                                        var0[1] = var1;
                                        var1 = {};
                                        var2 = _closure1_slot13;
                                        var2 = var2.TASK_STATUS;
                                        var1.type = var2;
                                        var2 = true;
                                        var1.shouldShow = var2;
                                        var5 = _closure3_slot7;
                                        var2 = undefined;
                                        if (var5) {
                                            _fun83314_ip = 238;
                                            continue _fun83314
                                        }
                                    case 188:
                                        var5 = _closure3_slot2;
                                        var6 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var3 = var3[var8];
                                        var3 = var6.bind(var7)(var3);
                                        var3 = var3.TaskPlatformScreen;
                                        var3 = var3.CONSOLE;
                                        if (!(var5 !== var3)) {
                                            _fun83314_ip = 231;
                                            continue _fun83314
                                        }
                                    case 225:
                                        var3 = _closure3_slot8;
                                        _fun83314_ip = 235;
                                        continue _fun83314;
                                    case 231:
                                        var3 = _closure3_slot9;
                                    case 235:
                                        var2 = var3;
                                    case 238:
                                        var1.onBack = var2;
                                        var0[2] = var1;
                                        return var0;
                                }
                            };
                            var9 = var9.bind(var11)(var5, var6);
                            _closure3_slot13 = var9;
                            var6 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var5 = 16;
                            var5 = var11[var5];
                            var6 = var6.bind(var2)(var5);
                            var5 = var6.useHasWatchVideoOnMobileTasks;
                            var3 = var3.config;
                            var6 = var5.bind(var6)(var3);
                            _closure3_slot14 = var6;
                            var5 = _closure1_slot4;
                            var3 = var5.useMemo;
                            var1 = new Array(5);
                            var1[0] = var10;
                            var1[1] = var9;
                            var1[2] = var8;
                            var1[3] = var7;
                            var1[4] = var6;
                            var0 = function() { // Environment: var0
                                _fun83315: for (var _fun83315_ip = 0;;) switch (_fun83315_ip) {
                                    case 0:
                                        var1 = _closure3_slot3;
                                        var1 = var1.length;
                                        var2 = 1;
                                        var3 = var2 === var1;
                                        if (!var3) {
                                            _fun83315_ip = 49;
                                            continue _fun83315
                                        }
                                    case 22:
                                        var5 = _closure3_slot3;
                                        var4 = var5.includes;
                                        var1 = _closure1_slot9;
                                        var1 = var1.DESKTOP;
                                        var3 = var4.bind(var5)(var1);
                                    case 49:
                                        var1 = _closure3_slot3;
                                        var1 = var1.length;
                                        var1 = var2 === var1;
                                        if (!var1) {
                                            _fun83315_ip = 92;
                                            continue _fun83315
                                        }
                                    case 65:
                                        var5 = _closure3_slot3;
                                        var4 = var5.includes;
                                        var2 = _closure1_slot9;
                                        var2 = var2.CONSOLE;
                                        var1 = var4.bind(var5)(var2);
                                    case 92:
                                        var2 = _closure3_slot13;
                                        if (var3) {
                                            _fun83315_ip = 115;
                                            continue _fun83315
                                        }
                                    case 99:
                                        var3 = _closure3_slot14;
                                        if (var3) {
                                            _fun83315_ip = 115;
                                            continue _fun83315
                                        }
                                    case 106:
                                        if (!var1) {
                                            _fun83315_ip = 119;
                                            continue _fun83315
                                        }
                                    case 109:
                                        var2 = _closure3_slot12;
                                        _fun83315_ip = 119;
                                        continue _fun83315;
                                    case 115:
                                        var2 = _closure3_slot11;
                                    case 119:
                                        var1 = var2.find;
                                        var0 = function(arg0) { // Environment: var0
                                            var0 = arg0;
                                            var0 = var0.shouldShow;
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var1 = null;
                                        var3 = var2;
                                        if (!(var1 == var0)) {
                                            _fun83315_ip = 164;
                                            continue _fun83315
                                        }
                                    case 147:
                                        var2 = var3.at;
                                        var1 = -1;
                                        var0 = var2.bind(var3)(var1);
                                    case 164:
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var5)(var0, var1);
                            var1 = var3.type;
                            var0 = new Array(2);
                            var0[0] = var1;
                            var1 = {};
                            var6 = var4 == var3;
                            var5 = undefined;
                            if (var6) {
                                _fun83305_ip = 773;
                                continue _fun83305
                            }
                        case 767:
                            var5 = var3.onBack;
                        case 773:
                            var1.onBack = var5;
                            var4 = var4 == var3;
                            var2 = undefined;
                            if (var4) {
                                _fun83305_ip = 793;
                                continue _fun83305
                            }
                        case 787:
                            var2 = var3.onNext;
                        case 793:
                            var1.onNext = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var4 = var3.bind(var10)(var4);
                var3 = _closure1_slot3;
                var3 = var3.bind(var10)(var4, var5);
                var4 = var3[var2];
                var2 = 1;
                var3 = var3[var2];
                var2 = function arg0() {
                    var9 = arg0;
                    var _closure3_slot0 = var9;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 8;
                    var2 = var4[var2];
                    var11 = undefined;
                    var4 = var3.bind(var11)(var2);
                    var3 = var4.getQuestLogger;
                    var2 = {};
                    var2.quest = var9;
                    var5 = _closure1_slot8;
                    var5 = var5.QUEST_HOME_MOBILE;
                    var2.location = var5;
                    var8 = var3.bind(var4)(var2);
                    var _closure3_slot1 = var8;
                    var3 = _closure1_slot5;
                    var2 = new Array(0);
                    var3 = var3.bind(var11)(var2);
                    var2 = _closure1_slot3;
                    var10 = 2;
                    var4 = var2.bind(var11)(var3, var10);
                    var2 = 0;
                    var3 = var4[var2];
                    var5 = 1;
                    var6 = var4[var5];
                    var _closure3_slot2 = var6;
                    var7 = _closure1_slot5;
                    var4 = false;
                    var7 = var7.bind(var11)(var4);
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var11)(var7, var10);
                    var2 = var4[var2];
                    var7 = var4[var5];
                    var _closure3_slot3 = var7;
                    var5 = _closure1_slot4;
                    var4 = var5.useCallback;
                    var1 = new Array(4);
                    var1[0] = var9;
                    var1[1] = var8;
                    var1[2] = var7;
                    var1[3] = var6;
                    var0 = function() { // Environment: var0
                        var4 = _closure3_slot3;
                        var0 = undefined;
                        var3 = true;
                        var3 = var4.bind(var0)(var3);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 9;
                        var3 = var5[var3];
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.manuallyStartConsoleQuest;
                        var2 = _closure3_slot0;
                        var2 = var2.id;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.then;
                        var2 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var2 = var0.errorHints;
                            var1 = _closure3_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.catch;
                        var2 = function(arg0) { // Environment: var1
                            var3 = _closure3_slot2;
                            var0 = undefined;
                            var2 = new Array(0);
                            var2 = var3.bind(var0)(var2);
                            var4 = _closure3_slot1;
                            var3 = var4.error;
                            var2 = 'Failed to start console quest';
                            var1 = arg0;
                            var1 = var3.bind(var4)(var2, var1);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var1 = 10;
                            var1 = var6[var1];
                            var3 = var5.bind(var0)(var1);
                            var2 = var3.open;
                            var1 = {};
                            var7 = 'START_DEFIBRILLATOR_ERROR';
                            var1.key = var7;
                            var9 = _closure1_slot0;
                            var4 = 11;
                            var7 = var6[var4];
                            var7 = var9.bind(var0)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var4 = var6[var4];
                            var4 = var9.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.CKsXk3;
                            var4 = var7.bind(var8)(var4);
                            var1.content = var4;
                            var4 = 12;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var1.icon = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.finally;
                        var1 = function() { // Environment: var1
                            var2 = _closure3_slot3;
                            var1 = undefined;
                            var0 = false;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var0, var1);
                    var0 = {};
                    var0.errorHints = var3;
                    var0.isActive = var2;
                    var0.start = var1;
                    return var0;
                };
                var5 = var2.bind(var10)(var6);
                var12 = var6.userStatus;
                var13 = var11 == var12;
                var2 = undefined;
                if (var13) {
                    _fun83304_ip = 397;
                    continue _fun83304
                }
            case 391:
                var2 = var12.completedAt;
            case 397:
                var11 = var11 != var2;
                var2 = !var11;
                if (var11) {
                    _fun83304_ip = 410;
                    continue _fun83304
                }
            case 407:
                var2 = !var9;
            case 410:
                if (!var2) {
                    _fun83304_ip = 449;
                    continue _fun83304
                }
            case 413:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 15;
                var7 = var11[var7];
                var7 = var9.bind(var10)(var7);
                var7 = var7.TaskPlatformScreen;
                var7 = var7.CONSOLE;
                var2 = var8 === var7;
            case 449:
                if (!var2) {
                    _fun83304_ip = 455;
                    continue _fun83304
                }
            case 452:
                var2 = !var0;
            case 455:
                var0 = {};
                var0.quest = var6;
                var0.defibrillator = var5;
                var0.step = var4;
                var0.stepActions = var3;
                var0.showMicrophone = var2;
                var1 = function arg0() {
                    _fun83322: for (var _fun83322_ip = 0;;) switch (_fun83322_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure2_slot2;
                            var3 = {};
                            var0 = _closure2_slot1;
                            var0 = var0.id;
                            var3.questId = var0;
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 15;
                            var5 = var5[var0];
                            var0 = undefined;
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.QuestContent;
                            var5 = var5.QUEST_BOTTOM_SHEET;
                            var3.questContent = var5;
                            var5 = _closure1_slot9;
                            var5 = var5.CONSOLE;
                            if (!(var2 !== var5)) {
                                _fun83322_ip = 164;
                                continue _fun83322
                            }
                        case 82:
                            var5 = _closure1_slot9;
                            var5 = var5.DESKTOP;
                            if (!(var2 !== var5)) {
                                _fun83322_ip = 130;
                                continue _fun83322
                            }
                        case 96:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 25;
                            var5 = var8[var5];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.QuestContentCTA;
                            var5 = var5.DESELECT_PLATFORM;
                            _fun83322_ip = 162;
                            continue _fun83322;
                        case 130:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 25;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.QuestContentCTA;
                            var5 = var7.SELECT_DESKTOP_PLATFORM;
                        case 162:
                            _fun83322_ip = 196;
                            continue _fun83322;
                        case 164:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 25;
                            var6 = var8[var6];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.QuestContentCTA;
                            var5 = var6.SELECT_CONSOLE_PLATFORM;
                        case 196:
                            var3.questContentCTA = var5;
                            var5 = _closure2_slot0;
                            var3.sourceQuestContent = var5;
                            var3 = var4.bind(var0)(var3);
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                    }
                };
                var0.handleTaskSelect = var1;
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var3 = function arg0() {
        _fun83323: for (var _fun83323_ip = 0;;) switch (_fun83323_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.defibrillator;
                var14 = var1.quest;
                var _closure2_slot0 = var14;
                var9 = var1.handleTaskSelect;
                var10 = var1.showMicrophone;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun83323_ip = 41;
                    continue _fun83323
                }
            case 39:
                var10 = false;
            case 41:
                var16 = var1.sourceQuestContent;
                var _closure2_slot1 = var16;
                var6 = var1.step;
                var _closure2_slot2 = var3;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useHasWatchVideoOnMobileTasks;
                var1 = var14.config;
                var12 = var2.bind(var4)(var1);
                _closure2_slot2 = var12;
                var4 = _closure1_slot4;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var14;
                var1[1] = var12;
                var1[2] = var16;
                var0 = function() { // Environment: var0
                    _fun83324: for (var _fun83324_ip = 0;;) switch (_fun83324_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun83324_ip = 148;
                                continue _fun83324
                            }
                        case 16:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 19;
                            var0 = var3[var0];
                            var6 = undefined;
                            var3 = var2.bind(var6)(var0);
                            var2 = var3.isInGameQuest;
                            var0 = _closure2_slot0;
                            var0 = var2.bind(var3)(var0);
                            var4 = _closure1_slot10;
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 26;
                            var2 = var7[var2];
                            var2 = var3.bind(var6)(var2);
                            if (var0) {
                                _fun83324_ip = 114;
                                continue _fun83324
                            }
                        case 80:
                            var3 = var2.QuestBottomSheetProgressCardPlayStreamTask;
                            var0 = {};
                            var7 = _closure2_slot0;
                            var0.quest = var7;
                            var7 = _closure2_slot1;
                            var0.sourceQuestContent = var7;
                            var0 = var4.bind(var6)(var3, var0);
                            _fun83324_ip = 146;
                            continue _fun83324;
                        case 114:
                            var3 = var2.QuestBottomSheetProgressCardInGameTask;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var2.quest = var7;
                            var7 = _closure2_slot1;
                            var2.sourceQuestContent = var7;
                            var0 = var4.bind(var6)(var3, var2);
                        case 146:
                            _fun83324_ip = 206;
                            continue _fun83324;
                        case 148:
                            var4 = _closure1_slot10;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 26;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.QuestBottomSheetProgressCardWatchTask;
                            var1 = {};
                            var6 = _closure2_slot0;
                            var1.quest = var6;
                            var5 = _closure2_slot1;
                            var1.sourceQuestContent = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 206:
                            return var0;
                    }
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var4 = _closure1_slot13;
                var4 = var4.TASK_SELECT;
                var5 = var6 === var4;
                if (!var5) {
                    _fun83323_ip = 206;
                    continue _fun83323
                }
            case 169:
                var8 = _closure1_slot10;
                var7 = _closure1_slot1;
                var17 = _closure1_slot2;
                var4 = 27;
                var4 = var17[var4];
                var7 = var7.bind(var3)(var4);
                var4 = {};
                var4.onTaskSelect = var9;
                var5 = var8.bind(var3)(var7, var4);
            case 206:
                var4 = new Array(3);
                var4[0] = var5;
                var5 = _closure1_slot13;
                var5 = var5.CONSOLE_CONNECT;
                var5 = var6 === var5;
                if (!var5) {
                    _fun83323_ip = 278;
                    continue _fun83323
                }
            case 231:
                var9 = _closure1_slot10;
                var8 = _closure1_slot1;
                var17 = _closure1_slot2;
                var7 = 28;
                var7 = var17[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var7.quest = var14;
                var7.step = var6;
                var7.sourceQuestContent = var16;
                var5 = var9.bind(var3)(var8, var7);
            case 278:
                var4[1] = var5;
                var5 = _closure1_slot13;
                var5 = var5.TASK_STATUS;
                var5 = var6 === var5;
                if (!var5) {
                    _fun83323_ip = 383;
                    continue _fun83323
                }
            case 299:
                var8 = _closure1_slot11;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = new Array(2);
                var9[0] = var13;
                if (!var10) {
                    _fun83323_ip = 323;
                    continue _fun83323
                }
            case 320:
                var10 = !var12;
            case 323:
                if (!var10) {
                    _fun83323_ip = 369;
                    continue _fun83323
                }
            case 326:
                var13 = _closure1_slot10;
                var12 = _closure1_slot19;
                var11 = {};
                var11.quest = var14;
                var14 = null;
                var16 = var14 == var15;
                var14 = undefined;
                if (var16) {
                    _fun83323_ip = 358;
                    continue _fun83323
                }
            case 352:
                var14 = var15.errorHints;
            case 358:
                var11.errorHints = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 369:
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 383:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var0 = function arg0() {
        _fun83325: for (var _fun83325_ip = 0;;) switch (_fun83325_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.quest;
                var6 = var0.errorHints;
                var0 = _closure1_slot14;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 13;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useQuestHowToHelpArticle;
                var0 = var0.bind(var1)();
                var1 = var0.message;
                var0 = null;
                var2 = var0 == var6;
                var7 = undefined;
                if (var2) {
                    _fun83325_ip = 81;
                    continue _fun83325
                }
            case 76:
                var7 = var6.length;
            case 81:
                var8 = var0 != var7;
                var4 = 0;
                var2 = 0;
                if (!var8) {
                    _fun83325_ip = 95;
                    continue _fun83325
                }
            case 92:
                var2 = var7;
            case 95:
                var13 = var2 > var4;
                if (!var13) {
                    _fun83325_ip = 109;
                    continue _fun83325
                }
            case 102:
                if (!(var0 == var6)) {
                    _fun83325_ip = 269;
                    continue _fun83325
                }
            case 109:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 29;
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.isSponsoredPlayQuest;
                var0 = var0.bind(var2)(var18);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 11;
                var7 = var11[var2];
                var7 = var10.bind(var3)(var7);
                var8 = var7.intl;
                if (var0) {
                    _fun83325_ip = 227;
                    continue _fun83325
                }
            case 168:
                var12 = var8.formatToPlainString;
                var0 = var11[var2];
                var0 = var10.bind(var3)(var0);
                var0 = var0.t;
                var7 = var0.GXqvC1;
                var0 = {};
                var15 = var18.config;
                var15 = var15.messages;
                var15 = var15.gameTitle;
                var0.gameTitle = var15;
                var0 = var12.bind(var8)(var7, var0);
                _fun83325_ip = 259;
                continue _fun83325;
            case 227:
                var7 = var8.string;
                var2 = var11[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.bUyEZZ;
                var0 = var7.bind(var8)(var2);
            case 259:
                var7 = new Array(1);
                var7[0] = var0;
                _fun83325_ip = 314;
                continue _fun83325;
            case 269:
                var2 = var6.map;
                var0 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var0 = var0.message;
                    return var0;
                };
                var21 = var2.bind(var6)(var0);
                var0 = new Array(1);
                var22 = var0;
                var20 = 0;
                var2 = arraySpread(var22, var21, var20);
                var0[var2] = var1;
                var1 = 1;
                var1 = var2 + var1;
                var7 = var0;
            case 314:
                var2 = _closure1_slot11;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var9.microphoneUnit;
                var0.style = var4;
                var8 = _closure1_slot11;
                var6 = _closure1_slot6;
                var4 = {};
                var9 = var9.microphoneUnitHeader;
                var4.style = var9;
                var11 = _closure1_slot10;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 30;
                var9 = var12[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.WarningIcon;
                var9 = {};
                var12 = 'text-feedback-warning';
                if (!var13) {
                    _fun83325_ip = 401;
                    continue _fun83325
                }
            case 395:
                var12 = 'text-feedback-critical';
            case 401:
                var9.color = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot10;
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var10 = 31;
                var10 = var15[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-md/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 11;
                var16 = var19[var14];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                if (var13) {
                    _fun83325_ip = 524;
                    continue _fun83325
                }
            case 490:
                var16 = var17.string;
                var13 = var19[var14];
                var13 = var15.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.YstzGO;
                var13 = var16.bind(var17)(var13);
                _fun83325_ip = 581;
                continue _fun83325;
            case 524:
                var16 = var17.formatToPlainString;
                var14 = var19[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14["28Ql27"];
                var14 = {};
                var18 = var18.config;
                var18 = var18.messages;
                var18 = var18.gameTitle;
                var14.gameTitle = var18;
                var13 = var16.bind(var17)(var15, var14);
            case 581:
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var4.children = var9;
                var6 = var8.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var7.map;
                var5 = function(arg0, arg1) { // Environment: var5
                    var4 = _closure1_slot10;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 31;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {};
                    var0 = 'text-sm/normal';
                    var1.variant = var0;
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var7 = var0.Object;
    var5 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var9[var0];
    var0 = undefined;
    var1 = var14.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var15 = 1;
    var1 = var9[var15];
    var10 = var14.bind(var0)(var1);
    var _closure1_slot4 = var10;
    var1 = var9[var15];
    var1 = var8.bind(var0)(var1);
    var1 = var1.useState;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var9[var1];
    var1 = var14.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var5 = var1.QuestsExperimentLocations;
    var _closure1_slot8 = var5;
    var1 = var1.QuestTaskPlatform;
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var9[var1];
    var1 = var8.bind(var0)(var1);
    var5 = var1.jsx;
    var _closure1_slot10 = var5;
    var5 = var1.jsxs;
    var _closure1_slot11 = var5;
    var1 = var1.Fragment;
    var _closure1_slot12 = var1;
    var5 = {};
    var1 = 'TASK_SELECT';
    var5.TASK_SELECT = var1;
    var1 = 'CONSOLE_CONNECT';
    var5.CONSOLE_CONNECT = var1;
    var1 = 'TASK_STATUS';
    var5.TASK_STATUS = var1;
    var _closure1_slot13 = var5;
    var1 = 6;
    var1 = var9[var1];
    var11 = var8.bind(var0)(var1);
    var7 = var11.createStyles;
    var1 = {};
    var12 = {};
    var16 = 'flex';
    var12.display = var16;
    var13 = 7;
    var17 = var9[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_16;
    var12.paddingHorizontal = var17;
    var17 = var9[var13];
    var17 = var14.bind(var0)(var17);
    var17 = var17.spacing;
    var17 = var17.PX_24;
    var12.gap = var17;
    var1.contentContainer = var12;
    var12 = {};
    var12.display = var16;
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var12.gap = var16;
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var16 = -var16;
    var12.marginHorizontal = var16;
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var12.paddingHorizontal = var16;
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var12.marginTop = var16;
    var16 = var9[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_16;
    var12.paddingTop = var16;
    var12.borderTopWidth = var15;
    var15 = var9[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BORDER_SUBTLE;
    var12.borderTopColor = var15;
    var1.microphoneUnit = var12;
    var12 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var15 = var9[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var12.gap = var15;
    var1.microphoneUnitHeader = var12;
    var12 = {};
    var15 = 'absolute';
    var12.position = var15;
    var15 = var9[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_32;
    var12.right = var15;
    var13 = var9[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var12.top = var13;
    var13 = 0.1;
    var12.opacity = var13;
    var1.previewContainer = var12;
    var1 = var7.bind(var11)(var1);
    var _closure1_slot14 = var1;
    var7 = var10.createContext;
    var1 = {};
    var11 = false;
    var1.isInQuestBottomSheet = var11;
    var1 = var7.bind(var10)(var1);
    var _closure1_slot15 = var1;
    var7 = 32;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheet.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function arg0() {
        _fun83328: for (var _fun83328_ip = 0;;) switch (_fun83328_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.questId;
                var _closure2_slot0 = var1;
                var1 = var0.initialStep;
                var _closure2_slot1 = var1;
                var6 = var0.sourceQuestContent;
                var _closure2_slot2 = var6;
                var7 = var0.questContentPosition;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 17;
                var0 = var3[var0];
                var4 = undefined;
                var8 = var2.bind(var4)(var0);
                var3 = var8.useStateFromStores;
                var0 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot7;
                    var1 = var2.getQuest;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var3.bind(var8)(var2, var0);
                var0 = null;
                var2 = var0 == var8;
                if (var2) {
                    _fun83328_ip = 205;
                    continue _fun83328
                }
            case 105:
                var3 = _closure1_slot10;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 18;
                var1 = var10[var1];
                var1 = var9.bind(var4)(var1);
                var2 = var1.QuestContentImpressionTrackerNative;
                var1 = {};
                var11 = true;
                var1.overrideVisibility = var11;
                var1.questOrQuests = var8;
                var8 = 15;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.QuestContent;
                var8 = var8.QUEST_BOTTOM_SHEET;
                var1.questContent = var8;
                var1.questContentPosition = var7;
                var1.sourceQuestContent = var6;
                var5 = function() {
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot16;
                    var1 = {};
                    var4 = _closure2_slot0;
                    var1.questId = var4;
                    var4 = _closure2_slot1;
                    var1.initialStep = var4;
                    var0 = _closure2_slot2;
                    var1.sourceQuestContent = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 205:
                return var0;
        }
    };
    var2.default = var6;
    var2.QuestBottomSheetStep = var5;
    var2.useEnrolledQuestContentProps = var4;
    var2.QuestBottomSheetContent = var3;
    var2.QuestBottomSheetContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5226, 5228, 33, 1297, 671, 5240, 5258, 3148, 1234, 7457, 5313, 5317, 5230, 5225, 566, 10053, 5267, 4931, 10713, 10714, 5303, 3278, 5277, 10763, 10765, 10766, 5266, 6444, 3941, 2]);