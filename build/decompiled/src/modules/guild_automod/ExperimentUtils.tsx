// modules/guild_automod/ExperimentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_automod/ExperimentUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: isInMentionRaidExperiment, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.AutomodMentionRaidLimit;
        var1 = var2.getCurrentConfig;
        var0 = {};
        var3 = arg0;
        var0.guildId = var3;
        var3 = '988d4e_3';
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.isInMentionRaidExperiment = var3;
    var1 = function(arg0) { // Original name: useIsMentionRaidExperimentEnabled, environment: var1
        _fun69623: for (var _fun69623_ip = 0;;) switch (_fun69623_ip) {
            case 0:
                var4 = arguments[1];
                var2 = undefined;
                if (!(var4 === var2)) {
                    _fun69623_ip = 11;
                    continue _fun69623
                }
            case 9:
                var4 = true;
            case 11:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var3 = var0.AutomodMentionRaidLimit;
                var2 = var3.useExperiment;
                var1 = {};
                var0 = arg0;
                var1.guildId = var0;
                var0 = '988d4e_4';
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.useIsMentionRaidExperimentEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8688, 2]);