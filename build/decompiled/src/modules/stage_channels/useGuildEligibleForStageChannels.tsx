// modules/stage_channels/useGuildEligibleForStageChannels.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0) { // Original name: isGuildEligibleForStageChannels, environment: var1
        _fun109122: for (var _fun109122_ip = 0;;) switch (_fun109122_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun109122_ip = 27;
                    continue _fun109122
                }
            case 9:
                var1 = _closure1_slot2;
                var0 = new Array(1);
                var0[0] = var1;
                var3 = var0;
            case 27:
                var1 = var3;
                var0 = var1[Symbol.iterator];
                var1 = var0().next;
                var3 = var1().value;
                var1 = var0;
                var1 = var1 === var2;
                var4 = undefined;
                if (var1) {
                    _fun109122_ip = 52;
                    continue _fun109122
                }
            case 49:
                var4 = var3;
            case 52:
                if (var1) {
                    _fun109122_ip = 58;
                    continue _fun109122
                }
            case 55:
                var0.return();
            case 58:
                var0 = global;
                var1 = var0.Boolean;
                var3 = var4.getGuild;
                var0 = arg0;
                var3 = var3.bind(var4)(var0);
                var0 = null;
                var4 = var0 == var3;
                var0 = undefined;
                if (var4) {
                    _fun109122_ip = 119;
                    continue _fun109122
                }
            case 90:
                var5 = var3.features;
                var4 = var5.has;
                var3 = _closure1_slot3;
                var3 = var3.COMMUNITY;
                var0 = var4.bind(var5)(var3);
            case 119:
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stage_channels/useGuildEligibleForStageChannels.tsx';
    var4 = var5.bind(var6)(var4);
    var2.isGuildEligibleForStageChannels = var3;
    var1 = function(arg0) { // Original name: useGuildEligibleForStageChannels, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var0 = _closure1_slot2;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var2.useGuildEligibleForStageChannels = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 660, 566, 2]);