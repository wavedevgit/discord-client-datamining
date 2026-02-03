// modules/interaction_components/content_inventory_entry/utils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageEmbedFlags;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/interaction_components/content_inventory_entry/utils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56139: for (var _fun56139_ip = 0;;) switch (_fun56139_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var2.bind(var3)(var0);
                var4 = var5.hasFlag;
                var0 = arg0;
                var0 = var0.flags;
                var2 = null;
                var6 = var2 != var0;
                var2 = 0;
                if (!var6) {
                    _fun56139_ip = 53;
                    continue _fun56139
                }
            case 50:
                var2 = var0;
            case 53:
                var0 = _closure1_slot2;
                var0 = var0.IS_CONTENT_INVENTORY_ENTRY;
                var0 = var4.bind(var5)(var2, var0);
                if (!var0) {
                    _fun56139_ip = 107;
                    continue _fun56139
                }
            case 72:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.isContentInventoryEmbedEnabled;
                var1 = 'isContentInventoryFallbackEmbed';
                var0 = var2.bind(var3)(var1);
            case 107:
                return var0;
        }
    };
    var2.isContentInventoryFallbackEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1384, 3977, 2]);