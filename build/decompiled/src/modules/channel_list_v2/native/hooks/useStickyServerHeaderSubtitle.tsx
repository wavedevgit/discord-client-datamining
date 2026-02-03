// modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx
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
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun101837: for (var _fun101837_ip = 0;;) switch (_fun101837_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var4 = var0.features;
                    var3 = var4.has;
                    var0 = _closure1_slot3;
                    var0 = var0.COMMUNITY;
                    var3 = var3.bind(var4)(var0);
                    var0 = undefined;
                    if (!var3) {
                        _fun101837_ip = 65;
                        continue _fun101837
                    }
                case 41:
                    var3 = _closure1_slot2;
                    var2 = var3.getMemberCount;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = var2.bind(var3)(var1);
                case 65:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1599, 660, 566, 2]);