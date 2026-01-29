// modules/game_console/ConsoleVoiceUpsellStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var4);
    var4 = var0.Object;
    var3 = var4.freeze;
    var0 = {
        'voiceUpsellDismissed': false,
        'showSparkles': false
    };
    var0 = var3.bind(var4)(var0);
    var _closure1_slot2 = var0;
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function() { // Environment: var1
        var0 = _closure1_slot2;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/ConsoleVoiceUpsellStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useConsoleVoiceUpsellStore = var3;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.showSparkles = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setShowConsoleVoiceSparkles = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot3;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.voiceUpsellDismissed = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setVoiceUpsellDismissed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 802, 2]);