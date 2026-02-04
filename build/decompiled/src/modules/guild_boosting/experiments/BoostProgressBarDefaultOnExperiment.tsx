// modules/guild_boosting/experiments/BoostProgressBarDefaultOnExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function arg0, arg1() {
        _fun66044: for (var _fun66044_ip = 0;;) switch (_fun66044_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                if (!var0) {
                    _fun66044_ip = 21;
                    continue _fun66044
                }
            case 9:
                var3 = var1.premiumProgressBarEnabledUserUpdatedAt;
                var2 = null;
                var0 = var2 == var3;
            case 21:
                if (var0) {
                    _fun66044_ip = 30;
                    continue _fun66044
                }
            case 24:
                var0 = var1.premiumProgressBarEnabled;
            case 30:
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'guild',
        'id': '2026-01_boost_progress_bar_default_on',
        'label': 'Boost Progress Bar Default On'
    };
    var4 = {};
    var9 = false;
    var4.enabled = var9;
    var3.defaultConfig = var4;
    var10 = {
        'id': 1,
        'label': 'Progress bar default-on'
    };
    var4 = 1;
    var9 = {};
    var9.enabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_boosting/experiments/BoostProgressBarDefaultOnExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var3 = function arg0, arg1() {
        var3 = arg0;
        var2 = _closure1_slot1;
        var5 = _closure1_slot0;
        var4 = var5.getCurrentConfig;
        var1 = {};
        var0 = var3.id;
        var1.guildId = var0;
        var7 = arg1;
        var8 = var1;
        var0 = copyDataProperties(var8, var7);
        var0 = {};
        var6 = false;
        var0.autoTrackExposure = var6;
        var0 = var4.bind(var5)(var1, var0);
        var1 = var0.enabled;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var2.getIsBoostProgressBarEnabled = var3;
    var1 = function arg0, arg1() {
        var3 = arg0;
        var2 = _closure1_slot1;
        var4 = _closure1_slot0;
        var1 = var4.useExperiment;
        var0 = {};
        var7 = arg1;
        var8 = var0;
        var5 = copyDataProperties(var8, var7);
        var6 = var3.id;
        var5 = 'guildId';
        var0[var5] = var6;
        var0 = var1.bind(var4)(var0);
        var1 = var0.enabled;
        var0 = undefined;
        var0 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var2.useIsBoostProgressBarEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3115, 2]);