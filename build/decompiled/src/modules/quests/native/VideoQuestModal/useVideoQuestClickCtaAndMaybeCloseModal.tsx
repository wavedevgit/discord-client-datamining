// modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx
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
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/VideoQuestModal/useVideoQuestClickCtaAndMaybeCloseModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var7 = var1.quest;
        var _closure2_slot0 = var7;
        var4 = var1.onClose;
        var _closure2_slot1 = var4;
        var5 = var1.sourceQuestContent;
        var _closure2_slot2 = var5;
        var6 = var1.impressionId;
        var _closure2_slot3 = var6;
        var3 = _closure1_slot3;
        var2 = var3.useCallback;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun84144: for (var _fun84144_ip = 0;;) switch (_fun84144_ip) {
                case 0:
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 1;
                    var2 = var5[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var4 = var6.isDiscordUrl;
                    var3 = _closure1_slot0;
                    var2 = 2;
                    var2 = var5[var2];
                    var7 = var3.bind(var0)(var2);
                    var3 = var7.getCtaLink;
                    var2 = _closure2_slot0;
                    var2 = var2.config;
                    var3 = var3.bind(var7)(var2);
                    var2 = true;
                    var2 = var4.bind(var6)(var3, var2);
                    if (!var2) {
                        _fun84144_ip = 89;
                        continue _fun84144
                    }
                case 81:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var0)();
                case 89:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 3;
                    var1 = var8[var1];
                    var4 = var7.bind(var0)(var1);
                    var3 = var4.openGameLinkDirectly;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var6 = 4;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.QuestContent;
                    var6 = var6.VIDEO_MODAL_MOBILE;
                    var1.content = var6;
                    var6 = 5;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.QuestContentCTA;
                    var6 = var6.OPEN_GAME_LINK;
                    var1.ctaContent = var6;
                    var6 = _closure2_slot3;
                    var1.impressionId = var6;
                    var5 = _closure2_slot2;
                    var1.sourceQuestContent = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useVideoQuestClickCtaAndMaybeCloseModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1457, 5295, 5322, 5235, 5282, 2]);