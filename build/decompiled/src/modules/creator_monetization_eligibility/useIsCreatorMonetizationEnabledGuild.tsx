// modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function(arg0) { // Original name: isCreatorMonetizationEnabledGuild, environment: var3
        _fun49634: for (var _fun49634_ip = 0;;) switch (_fun49634_ip) {
            case 0:
                var3 = arg0;
                var4 = var3.features;
                var1 = var4.has;
                var0 = _closure1_slot3;
                var0 = var0.CREATOR_MONETIZABLE_DISABLED;
                var0 = var1.bind(var4)(var0);
                var0 = !var0;
                if (!var0) {
                    _fun49634_ip = 96;
                    continue _fun49634
                }
            case 38:
                var5 = var3.features;
                var4 = var5.has;
                var1 = _closure1_slot3;
                var1 = var1.CREATOR_MONETIZABLE;
                var1 = var4.bind(var5)(var1);
                if (var1) {
                    _fun49634_ip = 93;
                    continue _fun49634
                }
            case 67:
                var4 = var3.features;
                var3 = var4.has;
                var2 = _closure1_slot3;
                var2 = var2.CREATOR_MONETIZABLE_PROVISIONAL;
                var1 = var3.bind(var4)(var2);
            case 93:
                var0 = var1;
            case 96:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
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
    var4 = 'modules/creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: useIsCreatorMonetizationEnabledGuild, environment: var3
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
            _fun49636: for (var _fun49636_ip = 0;;) switch (_fun49636_ip) {
                case 0:
                    var3 = _closure1_slot2;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var3 = var2.bind(var3)(var0);
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun49636_ip = 44;
                        continue _fun49636
                    }
                case 33:
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var0 = var2.bind(var1)(var3);
                case 44:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.isCreatorMonetizationEnabledGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 660, 566, 2]);