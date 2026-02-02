// modules/user_settings/DefaultGuildActivityExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = 0;
    var4 = var7[var3];
    var0 = undefined;
    var8 = var6.bind(var0)(var4);
    var5 = var8.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-01_default_activity_status',
        'label': 'Guild activity status defaults'
    };
    var9 = {};
    var10 = false;
    var9.enabled = var10;
    var4.defaultConfig = var9;
    var12 = {
        'id': 1,
        'label': 'Enable new defaults'
    };
    var9 = {};
    var9.enabled = var11;
    var12.config = var9;
    var9 = new Array(1);
    var9[0] = var12;
    var4.treatments = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2025-01_default_activity_status_new_users',
        'label': 'Guild activity status defaults'
    };
    var9 = {};
    var9.enabled = var10;
    var3.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Enable new defaults'
    };
    var9 = {};
    var9.enabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var3.treatments = var9;
    var3 = var5.bind(var8)(var3);
    var _closure1_slot3 = var3;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_settings/DefaultGuildActivityExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var2.DefaultGuildActivityExperiment = var4;
    var2.DefaultGuildActivityExperimentNewUsers = var3;
    var3 = function(arg0) { // Environment: var1
        _fun96652: for (var _fun96652_ip = 0;;) switch (_fun96652_ip) {
            case 0:
                var2 = arg0;
                var5 = _closure1_slot2;
                var4 = var5.getCurrentConfig;
                var3 = {};
                var3.location = var2;
                var0 = {};
                var6 = false;
                var0.autoTrackExposure = var6;
                var0 = var4.bind(var5)(var3, var0);
                var0 = var0.enabled;
                if (var0) {
                    _fun96652_ip = 79;
                    continue _fun96652
                }
            case 45:
                var5 = _closure1_slot3;
                var4 = var5.getCurrentConfig;
                var3 = {};
                var3.location = var2;
                var2 = {};
                var2.autoTrackExposure = var6;
                var2 = var4.bind(var5)(var3, var2);
                var0 = var2.enabled;
            case 79:
                if (var0) {
                    _fun96652_ip = 139;
                    continue _fun96652
                }
            case 82:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var1 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var1);
                var2 = var3.isSettingTeenByDefault;
                var1 = 2;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.SettingsDefaultFeature;
                var1 = var1.GUILD_ACTIVITY_STATUS;
                var0 = var2.bind(var3)(var1);
            case 139:
                return var0;
        }
    };
    var2.isEligibleForDefaultGuildActivity = var3;
    var1 = function(arg0) { // Environment: var1
        _fun96653: for (var _fun96653_ip = 0;;) switch (_fun96653_ip) {
            case 0:
                var2 = arg0;
                var5 = _closure1_slot2;
                var4 = var5.useExperiment;
                var3 = {};
                var3.location = var2;
                var0 = {};
                var6 = false;
                var0.autoTrackExposure = var6;
                var0 = var4.bind(var5)(var3, var0);
                var0 = var0.enabled;
                var5 = _closure1_slot3;
                var4 = var5.useExperiment;
                var3 = {};
                var3.location = var2;
                var2 = {};
                var2.autoTrackExposure = var6;
                var2 = var4.bind(var5)(var3, var2);
                var2 = var2.enabled;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 1;
                var1 = var7[var1];
                var5 = undefined;
                var4 = var6.bind(var5)(var1);
                var3 = var4.useIsSettingTeenByDefault;
                var1 = 2;
                var1 = var7[var1];
                var1 = var6.bind(var5)(var1);
                var1 = var1.SettingsDefaultFeature;
                var1 = var1.GUILD_ACTIVITY_STATUS;
                var1 = var3.bind(var4)(var1);
                if (var0) {
                    _fun96653_ip = 139;
                    continue _fun96653
                }
            case 136:
                var0 = var2;
            case 139:
                if (var0) {
                    _fun96653_ip = 145;
                    continue _fun96653
                }
            case 142:
                var0 = var1;
            case 145:
                return var0;
        }
    };
    var2.useIsEligibleForDefaultGuildActivity = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3076, 4242, 4245, 2]);