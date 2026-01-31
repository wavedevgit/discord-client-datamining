// modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var3;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5.value = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var2, var1, var5);
    var1 = {};
    var5 = function arg0() {
        _fun83611: for (var _fun83611_ip = 0;;) switch (_fun83611_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.quest;
                var7 = var0.isTargetedDisclosure;
                var12 = var0.trackingCtx;
                var0 = var6.config;
                var0 = var0.messages;
                var9 = var0.gamePublisher;
                var8 = var0.gameTitle;
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 0;
                var1 = var2[var0];
                var0 = undefined;
                var4 = var10.bind(var0)(var1);
                var1 = var4.hasWatchVideoTasks;
                var1 = var1.bind(var4)(var6);
                var4 = 1;
                var4 = var2[var4];
                var11 = var10.bind(var0)(var4);
                var5 = var11.trackQuestContentClicked;
                var4 = {};
                var13 = var6.id;
                var4.questId = var13;
                var13 = var12.content;
                var4.questContent = var13;
                var13 = var12.ctaContent;
                var4.questContentCTA = var13;
                var13 = var12.position;
                var4.questContentPosition = var13;
                var12 = var12.sourceQuestContent;
                var4.sourceQuestContent = var12;
                var4 = var5.bind(var11)(var4);
                var4 = _closure1_slot1;
                var3 = 2;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.pushLazy;
                var3 = 4;
                var3 = var2[var3];
                var10 = var10.bind(var0)(var3);
                var3 = 3;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var10.bind(var0)(var3, var2);
                var2 = {};
                var2.gamePublisher = var9;
                var2.gameTitle = var8;
                var2.isTargetedDisclosure = var7;
                var6 = var6.config;
                var7 = var6.cosponsorMetadata;
                var6 = null;
                var8 = var6 == var7;
                var6 = undefined;
                if (var8) {
                    _fun83611_ip = 252;
                    continue _fun83611
                }
            case 247:
                var6 = var7.name;
            case 252:
                var2.cosponsorName = var6;
                var2.isVideoQuest = var1;
                var1 = 'QUEST_DISCLOSURE_MODAL';
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var1.showModal = var5;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.popWithKey;
        var1 = 'QUEST_DISCLOSURE_MODAL';
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.hideModal = var0;
    var0 = 5;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5229, 5224, 4525, 10659, 1307, 2]);