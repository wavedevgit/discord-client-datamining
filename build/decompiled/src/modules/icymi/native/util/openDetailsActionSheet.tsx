// modules/icymi/native/util/openDetailsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/util/openDetailsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.guildId;
        var6 = var0.channelId;
        var1 = var0.id;
        var10 = var0.type;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var4 = 0;
        var8 = var2[var4];
        var0 = undefined;
        var11 = var5.bind(var0)(var8);
        var9 = var11.itemInteracted;
        var8 = 'overflow_menu';
        var8 = var9.bind(var11)(var1, var10, var8);
        var4 = var2[var4];
        var9 = var5.bind(var0)(var4);
        var8 = var9.feedItemActioned;
        var4 = {};
        var4.itemId = var1;
        var4.itemType = var10;
        var10 = {
            'actionGestureType': 'press',
            'actionTargetElement': 'overflow_menu_button',
            'actionIntentType': 'open',
            'actionDestinationType': null
        };
        var4.actionParameters = var10;
        var4 = var8.bind(var9)(var4);
        var4 = 1;
        var4 = var2[var4];
        var5 = var5.bind(var0)(var4);
        var4 = var5.openLazy;
        var8 = _closure1_slot0;
        var3 = 3;
        var3 = var2[var3];
        var8 = var8.bind(var0)(var3);
        var3 = 2;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var8.bind(var0)(var3, var2);
        var2 = {};
        var2.guildId = var7;
        var2.channelId = var6;
        var2.id = var1;
        var1 = 'ItemDetailsActionSheet';
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.openDetailsActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8906, 3278, 13557, 1307, 2]);