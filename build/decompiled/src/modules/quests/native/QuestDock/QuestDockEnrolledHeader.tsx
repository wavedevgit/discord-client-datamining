// modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'alignItems': 'center',
        'display': 'flex',
        'flexDirection': 'row',
        'flexGrow': 1,
        'flexShrink': 1,
        'gap': 8,
        'justifyContent': 'center',
        'padding': 8
    };
    var3.wrapper = var9;
    var9 = {
        'flexGrow': 0,
        'flexShrink': 0
    };
    var3.progressIndicatorWrapper = var9;
    var9 = {
        'flexGrow': 1,
        'flexShrink': 1
    };
    var3.copy = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function() {
        var2 = _closure1_slot4;
        var1 = var2.useContext;
        var7 = _closure1_slot1;
        var11 = _closure1_slot2;
        var0 = 5;
        var0 = var11[var0];
        var3 = undefined;
        var0 = var7.bind(var3)(var0);
        var0 = var1.bind(var2)(var0);
        var14 = var0.quest;
        var0 = _closure1_slot8;
        var6 = var0.bind(var3)();
        var8 = _closure1_slot0;
        var0 = 6;
        var1 = var11[var0];
        var2 = var8.bind(var3)(var1);
        var1 = var2.useQuestTaskDetails;
        var12 = var1.bind(var2)(var14);
        var0 = var11[var0];
        var1 = var8.bind(var3)(var0);
        var0 = var1.useTaskPlatformScreen;
        var2 = var0.bind(var1)(var14, var12);
        var1 = _closure1_slot3;
        var0 = 1;
        var1 = var1.bind(var3)(var2, var0);
        var0 = 0;
        var5 = var1[var0];
        var0 = 7;
        var1 = var11[var0];
        var2 = var8.bind(var3)(var1);
        var1 = var2.useQuestBarTitle;
        var13 = var1.bind(var2)(var14);
        var0 = var11[var0];
        var2 = var8.bind(var3)(var0);
        var1 = var2.useQuestBarSubtitle;
        var0 = {};
        var0.quest = var14;
        var9 = false;
        var0.isExpanded = var9;
        var0.activeScreen = var5;
        var5 = 8;
        var5 = var11[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.QuestContent;
        var5 = var5.QUEST_BAR_MOBILE;
        var0.sourceQuestContent = var5;
        var10 = var1.bind(var2)(var0);
        var2 = _closure1_slot7;
        var1 = _closure1_slot5;
        var0 = {};
        var5 = var6.wrapper;
        var0.style = var5;
        var9 = _closure1_slot6;
        var4 = {};
        var5 = var6.progressIndicatorWrapper;
        var4.style = var5;
        var5 = 9;
        var5 = var11[var5];
        var7 = var7.bind(var3)(var5);
        var5 = {
            'quest': null,
            'size': 'x-sm',
            'progress': null,
            'loading': false,
            'hasConfetti': true
        };
        var5.quest = var14;
        var12 = var12.percentComplete;
        var5.progress = var12;
        var5 = var9.bind(var3)(var7, var5);
        var4.children = var5;
        var5 = var9.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var6 = var6.copy;
        var5.style = var6;
        var7 = 10;
        var6 = var11[var7];
        var6 = var8.bind(var3)(var6);
        var12 = var6.Text;
        var6 = {
            'variant': 'heading-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var6.children = var13;
        var12 = var9.bind(var3)(var12, var6);
        var6 = new Array(2);
        var6[0] = var12;
        var7 = var11[var7];
        var7 = var8.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {
            'variant': 'text-sm/medium',
            'color': 'text-muted'
        };
        var7.children = var10;
        var7 = var9.bind(var3)(var8, var7);
        var6[1] = var7;
        var5.children = var6;
        var5 = var2.bind(var3)(var1, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 10804, 5317, 10064, 5234, 10770, 3941, 2]);