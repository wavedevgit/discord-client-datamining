// modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var4 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var4);
    var _closure1_slot2 = var6;
    var4 = var6.createContext;
    var3 = {
        'quest': null,
        'videoSessionId': ''
    };
    var3 = var4.bind(var6)(var3);
    var _closure1_slot3 = var3;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestModalContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() {
        var3 = _closure1_slot2;
        var2 = var3.useContext;
        var0 = _closure1_slot3;
        var0 = var2.bind(var3)(var0);
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var1 = var3[var1];
        var4 = undefined;
        var3 = var2.bind(var4)(var1);
        var1 = null;
        var2 = var1 != var0;
        var1 = 'useVideoQuestModalContext must be used within a VideoQuestModalProvider';
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.useVideoQuestModalContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 44, 2]);