// modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'gap': 6
    };
    var10 = 5;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.paddingTop = var9;
    var3.container = var8;
    var8 = {
        'alignItems': 'center',
        'flexDirection': 'row'
    };
    var9 = 'center';
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.paddingHorizontal = var10;
    var3.containerWithActionSheet = var8;
    var8 = {};
    var8.textAlign = var9;
    var3.title = var8;
    var8 = {
        'textAlign': 'left',
        'flex': 1
    };
    var3.titleWithActionSheet = var8;
    var8 = {
        'flexGrow': 0,
        'flexShrink': 0
    };
    var3.actionSheetButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun82863: for (var _fun82863_ip = 0;;) switch (_fun82863_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.quest;
                var2 = var0.step;
                var5 = var0.withActionSheet;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun82863_ip = 29;
                    continue _fun82863
                }
            case 27:
                var5 = false;
            case 29:
                var0 = var0.location;
                var1 = _closure1_slot8;
                var9 = var1.bind(var3)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 14;
                var1 = var7[var1];
                var6 = var6.bind(var3)(var1);
                var1 = var6.useActionSheetPressHandler;
                var12 = var1.bind(var6)(var4);
                var1 = {};
                var1.quest = var4;
                var1.step = var2;
                var1.location = var0;
                var0 = function arg0() {
                    _fun82864: for (var _fun82864_ip = 0;;) switch (_fun82864_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = var1.quest;
                            var _closure3_slot0 = var4;
                            var13 = var1.step;
                            var _closure3_slot1 = var13;
                            var5 = undefined;
                            var _closure3_slot2 = var5;
                            var _closure3_slot3 = var5;
                            var _closure3_slot4 = var5;
                            var _closure3_slot5 = var5;
                            var _closure3_slot6 = var5;
                            var _closure3_slot7 = var5;
                            var _closure3_slot8 = var5;
                            var _closure3_slot9 = var5;
                            var _closure3_slot10 = var5;
                            var _closure3_slot11 = var5;
                            var3 = var4.userStatus;
                            var2 = null;
                            var6 = var2 == var3;
                            var1 = undefined;
                            if (var6) {
                                _fun82864_ip = 90;
                                continue _fun82864
                            }
                        case 84:
                            var1 = var3.completedAt;
                        case 90:
                            var15 = var2 != var1;
                            _closure3_slot2 = var15;
                            var1 = var4.config;
                            var1 = var1.messages;
                            var10 = var1.gameTitle;
                            _closure3_slot3 = var10;
                            var2 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var7 = 6;
                            var3 = var16[var7];
                            var6 = var2.bind(var5)(var3);
                            var3 = var6.useQuestTaskDetails;
                            var3 = var3.bind(var6)(var4);
                            var6 = 7;
                            var8 = var16[var6];
                            var9 = var2.bind(var5)(var8);
                            var8 = var9.hasWatchVideoTasks;
                            var14 = var8.bind(var9)(var4);
                            _closure3_slot4 = var14;
                            var6 = var16[var6];
                            var8 = var2.bind(var5)(var6);
                            var6 = var8.isInGameQuest;
                            var6 = var6.bind(var8)(var4);
                            _closure3_slot5 = var6;
                            var7 = var16[var7];
                            var8 = var2.bind(var5)(var7);
                            var7 = var8.useTaskPlatformScreen;
                            var9 = var7.bind(var8)(var4, var3);
                            var8 = _closure1_slot3;
                            var7 = 1;
                            var8 = var8.bind(var5)(var9, var7);
                            var7 = 0;
                            var12 = var8[var7];
                            _closure3_slot6 = var12;
                            var8 = var3.targetMinutes;
                            _closure3_slot7 = var8;
                            var3 = _closure1_slot4;
                            var9 = var3.useMemo;
                            var7 = new Array(1);
                            var7[0] = var4;
                            var1 = function() { // Environment: var0
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 7;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.hasStreamOnDesktopTask;
                                var0 = {};
                                var3 = _closure3_slot0;
                                var0.quest = var3;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var11 = var9.bind(var3)(var1, var7);
                            _closure3_slot8 = var11;
                            var1 = 8;
                            var1 = var16[var1];
                            var9 = var2.bind(var5)(var1);
                            var7 = var9.useHasWatchVideoOnMobileTasks;
                            var1 = var4.config;
                            var7 = var7.bind(var9)(var1);
                            _closure3_slot9 = var7;
                            var1 = 9;
                            var1 = var16[var1];
                            var17 = var2.bind(var5)(var1);
                            var9 = var17.getDefaultRewardNameWithArticle;
                            var1 = var4.config;
                            var9 = var9.bind(var17)(var1);
                            _closure3_slot10 = var9;
                            var1 = 10;
                            var1 = var16[var1];
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.isSponsoredPlayQuest;
                            var5 = var1.bind(var2)(var4);
                            _closure3_slot11 = var5;
                            var2 = var3.useMemo;
                            var1 = new Array(12);
                            var1[0] = var15;
                            var1[1] = var14;
                            var1[2] = var13;
                            var1[3] = var12;
                            var1[4] = var11;
                            var1[5] = var10;
                            var1[6] = var9;
                            var1[7] = var8;
                            var1[8] = var7;
                            var1[9] = var6;
                            var1[10] = var5;
                            var4 = var4.config;
                            var1[11] = var4;
                            var0 = function() { // Environment: var0
                                _fun82866: for (var _fun82866_ip = 0;;) switch (_fun82866_ip) {
                                    case 0:
                                        var0 = _closure3_slot2;
                                        if (var0) {
                                            _fun82866_ip = 725;
                                            continue _fun82866
                                        }
                                    case 13:
                                        var0 = _closure3_slot4;
                                        if (var0) {
                                            _fun82866_ip = 615;
                                            continue _fun82866
                                        }
                                    case 23:
                                        var0 = _closure3_slot5;
                                        if (!var0) {
                                            _fun82866_ip = 84;
                                            continue _fun82866
                                        }
                                    case 30:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 7;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.getDefaultInGameTask;
                                        var0 = _closure3_slot0;
                                        var0 = var0.config;
                                        var0 = var1.bind(var2)(var0);
                                        var1 = null;
                                        if (!(var1 == var0)) {
                                            _fun82866_ip = 601;
                                            continue _fun82866
                                        }
                                    case 84:
                                        var3 = _closure3_slot1;
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var6 = 12;
                                        var1 = var1[var6];
                                        var7 = undefined;
                                        var1 = var4.bind(var7)(var1);
                                        var1 = var1.QuestBottomSheetStep;
                                        var1 = var1.TASK_SELECT;
                                        if (!(var3 !== var1)) {
                                            _fun82866_ip = 542;
                                            continue _fun82866
                                        }
                                    case 132:
                                        var3 = _closure3_slot1;
                                        var4 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var1 = var1[var6];
                                        var1 = var4.bind(var7)(var1);
                                        var1 = var1.QuestBottomSheetStep;
                                        var1 = var1.CONSOLE_CONNECT;
                                        if (!(var3 !== var1)) {
                                            _fun82866_ip = 483;
                                            continue _fun82866
                                        }
                                    case 172:
                                        var1 = _closure3_slot11;
                                        if (var1) {
                                            _fun82866_ip = 403;
                                            continue _fun82866
                                        }
                                    case 182:
                                        var3 = _closure3_slot6;
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var1 = 13;
                                        var1 = var6[var1];
                                        var1 = var4.bind(var7)(var1);
                                        var1 = var1.TaskPlatformScreen;
                                        var1 = var1.DESKTOP;
                                        if (!(var3 === var1)) {
                                            _fun82866_ip = 229;
                                            continue _fun82866
                                        }
                                    case 222:
                                        var1 = _closure3_slot8;
                                        if (var1) {
                                            _fun82866_ip = 316;
                                            continue _fun82866
                                        }
                                    case 229:
                                        var3 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var1 = 11;
                                        var4 = var8[var1];
                                        var4 = var3.bind(var7)(var4);
                                        var6 = var4.intl;
                                        var4 = var6.formatToPlainString;
                                        var1 = var8[var1];
                                        var1 = var3.bind(var7)(var1);
                                        var1 = var1.t;
                                        var3 = var1.NIimTt;
                                        var1 = {};
                                        var8 = _closure3_slot3;
                                        var1.gameTitle = var8;
                                        var8 = _closure3_slot10;
                                        var1.rewardNameWithArticle = var8;
                                        var8 = _closure3_slot7;
                                        var1.targetMinutes = var8;
                                        var1 = var4.bind(var6)(var3, var1);
                                        _fun82866_ip = 401;
                                        continue _fun82866;
                                    case 316:
                                        var4 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var3 = 11;
                                        var6 = var9[var3];
                                        var6 = var4.bind(var7)(var6);
                                        var8 = var6.intl;
                                        var6 = var8.formatToPlainString;
                                        var3 = var9[var3];
                                        var3 = var4.bind(var7)(var3);
                                        var3 = var3.t;
                                        var4 = var3["hkJ+Gs"];
                                        var3 = {};
                                        var9 = _closure3_slot3;
                                        var3.gameTitle = var9;
                                        var9 = _closure3_slot10;
                                        var3.questReward = var9;
                                        var9 = _closure3_slot7;
                                        var3.streamingDurationRequirement = var9;
                                        var1 = var6.bind(var8)(var4, var3);
                                    case 401:
                                        _fun82866_ip = 481;
                                        continue _fun82866;
                                    case 403:
                                        var4 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var3 = 11;
                                        var6 = var9[var3];
                                        var6 = var4.bind(var7)(var6);
                                        var8 = var6.intl;
                                        var6 = var8.formatToPlainString;
                                        var3 = var9[var3];
                                        var3 = var4.bind(var7)(var3);
                                        var3 = var3.t;
                                        var4 = var3["2GJLK2"];
                                        var3 = {};
                                        var9 = _closure3_slot7;
                                        var3.targetMinutes = var9;
                                        var9 = _closure3_slot10;
                                        var3.rewardNameWithArticle = var9;
                                        var1 = var6.bind(var8)(var4, var3);
                                    case 481:
                                        _fun82866_ip = 540;
                                        continue _fun82866;
                                    case 483:
                                        var8 = _closure1_slot0;
                                        var9 = _closure1_slot2;
                                        var3 = 11;
                                        var4 = var9[var3];
                                        var4 = var8.bind(var7)(var4);
                                        var6 = var4.intl;
                                        var4 = var6.string;
                                        var3 = var9[var3];
                                        var3 = var8.bind(var7)(var3);
                                        var3 = var3.t;
                                        var3 = var3.svdwbA;
                                        var1 = var4.bind(var6)(var3);
                                    case 540:
                                        _fun82866_ip = 599;
                                        continue _fun82866;
                                    case 542:
                                        var6 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var2 = 11;
                                        var3 = var8[var2];
                                        var3 = var6.bind(var7)(var3);
                                        var4 = var3.intl;
                                        var3 = var4.string;
                                        var2 = var8[var2];
                                        var2 = var6.bind(var7)(var2);
                                        var2 = var2.t;
                                        var2 = var2.drVw4T;
                                        var1 = var3.bind(var4)(var2);
                                    case 599:
                                        return var1;
                                    case 601:
                                        var0 = var0.messages;
                                        var0 = var0.taskDescription;
                                        return var0;
                                    case 615:
                                        var0 = _closure3_slot9;
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var1 = 11;
                                        var3 = var7[var1];
                                        var2 = undefined;
                                        var3 = var6.bind(var2)(var3);
                                        var4 = var3.intl;
                                        var3 = var4.formatToPlainString;
                                        var1 = var7[var1];
                                        var1 = var6.bind(var2)(var1);
                                        var1 = var1.t;
                                        if (var0) {
                                            _fun82866_ip = 698;
                                            continue _fun82866
                                        }
                                    case 671:
                                        var2 = var1.IpoqqA;
                                        var0 = {};
                                        var6 = _closure3_slot10;
                                        var0.questReward = var6;
                                        var0 = var3.bind(var4)(var2, var0);
                                        _fun82866_ip = 723;
                                        continue _fun82866;
                                    case 698:
                                        var2 = var1.ttFsLj;
                                        var1 = {};
                                        var5 = _closure3_slot10;
                                        var1.reward = var5;
                                        var0 = var3.bind(var4)(var2, var1);
                                    case 723:
                                        return var0;
                                    case 725:
                                        var4 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var0 = 11;
                                        var1 = var5[var0];
                                        var3 = undefined;
                                        var1 = var4.bind(var3)(var1);
                                        var2 = var1.intl;
                                        var1 = var2.string;
                                        var0 = var5[var0];
                                        var0 = var4.bind(var3)(var0);
                                        var0 = var0.t;
                                        var0 = var0["ij5E/5"];
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var10 = var0.bind(var3)(var1);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var6 = var9.container;
                var4 = new Array(2);
                var4[0] = var6;
                var6 = var5;
                if (!var5) {
                    _fun82863_ip = 141;
                    continue _fun82863
                }
            case 135:
                var6 = var9.containerWithActionSheet;
            case 141:
                var4[1] = var6;
                var0.style = var4;
                var4 = null;
                var6 = var4 != var10;
                if (!var6) {
                    _fun82863_ip = 244;
                    continue _fun82863
                }
            case 158:
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 15;
                var4 = var13[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.Text;
                var4 = {
                    'variant': 'redesign/heading-18/bold',
                    'color': 'mobile-text-heading-primary',
                    'accessibilityRole': 'header'
                };
                var14 = var9.title;
                var13 = new Array(2);
                var13[0] = var14;
                var14 = var5;
                if (!var5) {
                    _fun82863_ip = 226;
                    continue _fun82863
                }
            case 220:
                var14 = var9.titleWithActionSheet;
            case 226:
                var13[1] = var14;
                var4.style = var13;
                var4.children = var10;
                var6 = var8.bind(var3)(var7, var4);
            case 244:
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun82863_ip = 430;
                    continue _fun82863
                }
            case 258:
                var8 = _closure1_slot6;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 16;
                var6 = var13[var6];
                var6 = var10.bind(var3)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var14 = 'button';
                var6.accessibilityRole = var14;
                var14 = 11;
                var15 = var13[var14];
                var15 = var10.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var13[var14];
                var14 = var10.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["UKOtz+"];
                var14 = var15.bind(var16)(var14);
                var6.accessibilityLabel = var14;
                var6.onPress = var12;
                var9 = var9.actionSheetButton;
                var6.style = var9;
                var9 = 17;
                var9 = var13[var9];
                var9 = var10.bind(var3)(var9);
                var10 = var9.MoreHorizontalIcon;
                var9 = {};
                var12 = _closure1_slot1;
                var11 = 5;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.colors;
                var11 = var11.INTERACTIVE_TEXT_DEFAULT;
                var9.color = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 430:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 5275, 5229, 5188, 5249, 5228, 1234, 10617, 5193, 5213, 3900, 4865, 8893, 2]);