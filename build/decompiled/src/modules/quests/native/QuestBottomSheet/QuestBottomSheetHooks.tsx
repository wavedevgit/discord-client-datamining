// modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx
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
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.QuestDockMode;
    var _closure1_slot4 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestBottomSheet/QuestBottomSheetHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var8 = var1.questId;
        var _closure2_slot0 = var8;
        var4 = var1.sourceQuestContent;
        var _closure2_slot1 = var4;
        var3 = _closure1_slot3;
        var6 = var3.useContext;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 2;
        var1 = var9[var1];
        var2 = undefined;
        var1 = var5.bind(var2)(var1);
        var1 = var1.QuestDockExternalCoordinationContext;
        var1 = var6.bind(var3)(var1);
        var7 = var1.setRestingQuestDockMode;
        var _closure2_slot2 = var7;
        var6 = var3.useContext;
        var1 = 3;
        var1 = var9[var1];
        var1 = var5.bind(var2)(var1);
        var1 = var1.QuestBottomSheetContext;
        var1 = var6.bind(var3)(var1);
        var6 = var1.isInQuestBottomSheet;
        var _closure2_slot3 = var6;
        var1 = 4;
        var1 = var9[var1];
        var2 = var5.bind(var2)(var1);
        var1 = var2.useQuestImpression;
        var5 = var1.bind(var2)();
        var _closure2_slot4 = var5;
        var2 = var3.useCallback;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            _fun83252: for (var _fun83252_ip = 0;;) switch (_fun83252_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    if (var0) {
                        _fun83252_ip = 36;
                        continue _fun83252
                    }
                case 13:
                    var3 = _closure2_slot2;
                    var0 = _closure1_slot4;
                    var2 = var0.COLLAPSED;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    _fun83252_ip = 75;
                    continue _fun83252;
                case 36:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.hideActionSheet;
                    var0 = 'QuestBottomSheet';
                    var0 = var2.bind(var3)(var0);
                case 75:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 6;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = {};
                    var5 = _closure2_slot0;
                    var2.questId = var5;
                    var5 = _closure2_slot4;
                    var6 = null;
                    var7 = var6 == var5;
                    var5 = undefined;
                    if (var7) {
                        _fun83252_ip = 137;
                        continue _fun83252
                    }
                case 123:
                    var8 = _closure2_slot4;
                    var7 = var8.getQuestContentPosition;
                    var5 = var7.bind(var8)();
                case 137:
                    var2.questContentPosition = var5;
                    var5 = _closure2_slot1;
                    var2.sourceQuestContent = var5;
                    var2 = var3.bind(var0)(var2);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 7;
                    var1 = var8[var1];
                    var3 = var7.bind(var0)(var1);
                    var2 = var3.trackQuestContentClicked;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.questId = var5;
                    var5 = 8;
                    var5 = var8[var5];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.QuestContent;
                    var5 = var5.QUEST_BOTTOM_SHEET;
                    var1.questContent = var5;
                    var5 = 9;
                    var5 = var8[var5];
                    var5 = var7.bind(var0)(var5);
                    var5 = var5.QuestContentCTA;
                    var5 = var5.WATCH_VIDEO;
                    var1.questContentCTA = var5;
                    var5 = _closure2_slot4;
                    var7 = var6 == var5;
                    var5 = undefined;
                    if (var7) {
                        _fun83252_ip = 278;
                        continue _fun83252
                    }
                case 264:
                    var8 = _closure2_slot4;
                    var7 = var8.getQuestContentPosition;
                    var5 = var7.bind(var8)();
                case 278:
                    var1.questContentPosition = var5;
                    var5 = _closure2_slot4;
                    var6 = var6 == var5;
                    var5 = undefined;
                    if (var6) {
                        _fun83252_ip = 310;
                        continue _fun83252
                    }
                case 296:
                    var7 = _closure2_slot4;
                    var6 = var7.getId;
                    var5 = var6.bind(var7)();
                case 310:
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
    var2.useWatchTaskPressHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 5223, 5252, 10693, 5299, 3269, 10697, 5256, 5225, 5272, 2]);