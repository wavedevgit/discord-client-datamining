// modules/premium/ReverseTrialPerkAccessKillSwitchExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.PurchasedFlags;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var7 = var5.bind(var0)(var3);
    var4 = var7.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2025-02_reverse_trial_perk_access_kill_switch',
        'label': 'Reverse Trial Perk Access Kill Switch'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var9 = {
        'id': 1,
        'label': 'Prevent perk access for users with reverse trials'
    };
    var8 = {};
    var8.enabled = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var3.treatments = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/ReverseTrialPerkAccessKillSwitchExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun96705: for (var _fun96705_ip = 0;;) switch (_fun96705_ip) {
            case 0:
                var2 = arg1;
                var0 = null;
                var1 = var0 == var2;
                if (var1) {
                    _fun96705_ip = 68;
                    continue _fun96705
                }
            case 12:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 2;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.hasFlag;
                var2 = var2.purchasedFlags;
                var0 = _closure1_slot2;
                var0 = var0.ON_REVERSE_TRIAL;
                var0 = var3.bind(var4)(var2, var0);
                var1 = !var0;
            case 68:
                var0 = !var1;
                if (var1) {
                    _fun96705_ip = 116;
                    continue _fun96705
                }
            case 74:
                var4 = _closure1_slot3;
                var3 = var4.getCurrentConfig;
                var2 = {};
                var1 = arg0;
                var2.location = var1;
                var1 = {};
                var5 = false;
                var1.autoTrackExposure = var5;
                var1 = var3.bind(var4)(var2, var1);
                var0 = var1.enabled;
            case 116:
                return var0;
        }
    };
    var2.preventReverseTrialPerkAccess = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1623, 3115, 1384, 2]);