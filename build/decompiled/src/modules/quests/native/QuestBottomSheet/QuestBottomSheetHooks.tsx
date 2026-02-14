// modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = _closure1_slot4;
        var3 = var4.useContext;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 3;
        var2 = var8[var2];
        var6 = undefined;
        var2 = var7.bind(var6)(var2);
        var2 = var2.QuestDockExternalCoordinationContext;
        var2 = var3.bind(var4)(var2);
        var4 = var2.setRestingQuestDockMode;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = var5.useContext;
        var2 = 4;
        var2 = var8[var2];
        var2 = var7.bind(var6)(var2);
        var2 = var2.QuestBottomSheetContext;
        var2 = var3.bind(var5)(var2);
        var5 = var2.isInQuestBottomSheet;
        var _closure2_slot1 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun83780: for (var _fun83780_ip = 0;;) switch (_fun83780_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    if (var2) {
                        _fun83780_ip = 36;
                        continue _fun83780
                    }
                case 13:
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot5;
                    var2 = var1.COLLAPSED;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    _fun83780_ip = 75;
                    continue _fun83780;
                case 36:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var0 = 'QuestBottomSheet';
                    var0 = var1.bind(var2)(var0);
                case 75:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestDockMode;
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var7 = var1.questId;
        var _closure2_slot0 = var7;
        var4 = var1.sourceQuestContent;
        var _closure2_slot1 = var4;
        var2 = _closure1_slot6;
        var5 = undefined;
        var6 = var2.bind(var5)();
        var _closure2_slot2 = var6;
        var3 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 6;
        var2 = var8[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.useQuestImpression;
        var5 = var2.bind(var3)();
        var _closure2_slot3 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun83782: for (var _fun83782_ip = 0;;) switch (_fun83782_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 7;
                    var2 = var5[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2.questId = var5;
                    var5 = _closure2_slot3;
                    var6 = null;
                    var7 = var6 == var5;
                    var5 = undefined;
                    if (var7) {
                        _fun83782_ip = 76;
                        continue _fun83782
                    }
                case 62:
                    var8 = _closure2_slot3;
                    var7 = var8.getQuestContentPosition;
                    var5 = var7.bind(var8)();
                case 76:
                    var2.questContentPosition = var5;
                    var5 = _closure2_slot1;
                    var2.sourceQuestContent = var5;
                    var2 = var3.bind(var0)(var2);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 8;
                    var1 = var8[var1];
                    var3 = var7.bind(var0)(var1);
                    var2 = var3.trackQuestContentClicked;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.questId = var5;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.QUEST_BOTTOM_SHEET;
                    var1.questContent = var5;
                    var5 = 10;
                    var5 = var8[var5];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.QuestContentCTA;
                    var5 = var5.WATCH_VIDEO;
                    var1.questContentCTA = var5;
                    var5 = _closure2_slot3;
                    var7 = var6 == var5;
                    var5 = undefined;
                    if (var7) {
                        _fun83782_ip = 217;
                        continue _fun83782
                    }
                case 203:
                    var8 = _closure2_slot3;
                    var7 = var8.getQuestContentPosition;
                    var5 = var7.bind(var8)();
                case 217:
                    var1.questContentPosition = var5;
                    var5 = _closure2_slot3;
                    var6 = var6 == var5;
                    var5 = undefined;
                    if (var6) {
                        _fun83782_ip = 249;
                        continue _fun83782
                    }
                case 235:
                    var7 = _closure2_slot3;
                    var6 = var7.getId;
                    var5 = var6.bind(var7)();
                case 249:
                    var1.impressionId = var5;
                    var4 = _closure2_slot1;
                    var1.sourceQuestContent = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useWatchTaskPressHandler = var3;
    var1 = function arg0() {
        var1 = arg0;
        var8 = var1.questId;
        var _closure2_slot0 = var8;
        var4 = var1.sourceQuestContent;
        var _closure2_slot1 = var4;
        var6 = var1.launchMobileActivity;
        var _closure2_slot2 = var6;
        var2 = _closure1_slot6;
        var9 = undefined;
        var7 = var2.bind(var9)();
        var _closure2_slot3 = var7;
        var3 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 6;
        var2 = var5[var2];
        var3 = var3.bind(var9)(var2);
        var2 = var3.useQuestImpression;
        var5 = var2.bind(var3)();
        var _closure2_slot4 = var5;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var1 = _closure1_slot3;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun83785: for (var _fun83785_ip = 0;;) switch (_fun83785_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun83785_ip = 228;
                            continue _fun83785
                        }
                    case 10:
                        var1 = _closure2_slot3;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        var1 = _closure2_slot2;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 35);
                    case 33:
                        return var1;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun83785_ip = 225;
                            continue _fun83785
                        }
                    case 44:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 8;
                        var3 = var9[var3];
                        var5 = var8.bind(var2)(var3);
                        var4 = var5.trackQuestContentClicked;
                        var3 = {};
                        var7 = _closure2_slot0;
                        var3.questId = var7;
                        var7 = 9;
                        var7 = var9[var7];
                        var7 = var8.bind(var2)(var7);
                        var7 = var7.QuestContent;
                        var7 = var7.QUEST_BOTTOM_SHEET;
                        var3.questContent = var7;
                        var7 = 10;
                        var7 = var9[var7];
                        var7 = var8.bind(var2)(var7);
                        var7 = var7.QuestContentCTA;
                        var7 = var7.LAUNCH_MOBILE_ACTIVITY;
                        var3.questContentCTA = var7;
                        var7 = _closure2_slot4;
                        var8 = null;
                        var9 = var8 == var7;
                        var7 = undefined;
                        if (var9) {
                            _fun83785_ip = 171;
                            continue _fun83785
                        }
                    case 157:
                        var10 = _closure2_slot4;
                        var9 = var10.getQuestContentPosition;
                        var7 = var9.bind(var10)();
                    case 171:
                        var3.questContentPosition = var7;
                        var7 = _closure2_slot4;
                        var8 = var8 == var7;
                        var7 = undefined;
                        if (var8) {
                            _fun83785_ip = 203;
                            continue _fun83785
                        }
                    case 189:
                        var9 = _closure2_slot4;
                        var8 = var9.getId;
                        var7 = var8.bind(var9)();
                    case 203:
                        var3.impressionId = var7;
                        var6 = _closure2_slot1;
                        var3.sourceQuestContent = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 225:
                        return var1;
                    case 228:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var1.bind(var9)(var0);
        var0 = new Array(5);
        var0[0] = var8;
        var0[1] = var7;
        var0[2] = var6;
        var0[3] = var5;
        var0[4] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useMobileActivityPressHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 5289, 5318, 10738, 3284, 5366, 10742, 5322, 5291, 5339, 2]);