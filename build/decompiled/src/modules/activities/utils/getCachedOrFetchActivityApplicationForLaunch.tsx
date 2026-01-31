// modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _getCachedOrFetchActivityApplicationForLaunch, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun63976: for (var _fun63976_ip = 0;;) switch (_fun63976_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun63976_ip = 295;
                            continue _fun63976
                        }
                    case 13:
                        var2 = _closure1_slot4;
                        var1 = var2.getApplication;
                        var1 = var1.bind(var2)(var9);
                        var2 = _closure1_slot8;
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        if (var2) {
                            _fun63976_ip = 292;
                            continue _fun63976
                        }
                    case 48:
                        var5 = _closure1_slot6;
                        var4 = var5.getChannel;
                        var2 = arg1;
                        var2 = var4.bind(var5)(var2);
                        var5 = null;
                        var4 = var5 == var2;
                        var8 = undefined;
                        if (var4) {
                            _fun63976_ip = 81;
                            continue _fun63976
                        }
                    case 76:
                        var8 = var2.guild_id;
                    case 81:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 4;
                        var2 = var6[var2];
                        var6 = var4.bind(var3)(var2);
                        var4 = var6.fetchShelf;
                        var2 = {};
                        var2.guildId = var8;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 122);
                    case 120:
                        return var2;
                    case 122:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun63976_ip = 289;
                            continue _fun63976
                        }
                    case 131:
                        var10 = var2.activityConfigs;
                        var8 = var2.applications;
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 5;
                        var4 = var11[var4];
                        var6 = var6.bind(var3)(var4);
                        var4 = {};
                        var4.applicationId = var9;
                        var4.activityConfigs = var10;
                        var4.applications = var8;
                        var4 = var6.bind(var3)(var4);
                        var8 = _closure1_slot8;
                        var10 = var5 == var4;
                        var6 = undefined;
                        if (var10) {
                            _fun63976_ip = 202;
                            continue _fun63976
                        }
                    case 197:
                        var6 = var4.application;
                    case 202:
                        var6 = var8.bind(var3)(var6);
                        if (var6) {
                            _fun63976_ip = 272;
                            continue _fun63976
                        }
                    case 210:
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 6;
                        var6 = var10[var6];
                        var8 = var8.bind(var3)(var6);
                        var6 = var8.fetchApplication;
                        var6 = var6.bind(var8)(var9);
                        SaveGenerator(address = 245);
                    case 243:
                        return var6;
                    case 245:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 8);
                        if (var8) {
                            _fun63976_ip = 269;
                            continue _fun63976
                        }
                    case 251:
                        var8 = _closure1_slot5;
                        var7 = var8.createFromServer;
                        var7 = var7.bind(var8)(var6);
                        return var7;
                    case 269:
                        return var6;
                    case 272:
                        var5 = var5 == var4;
                        var3 = undefined;
                        if (var5) {
                            _fun63976_ip = 286;
                            continue _fun63976
                        }
                    case 281:
                        var3 = var4.application;
                    case 286:
                        return var3;
                    case 289:
                        return var2;
                    case 292:
                        return var1;
                    case 295:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
    var0 = function(arg0) { // Original name: isUsableApplicationRecord, environment: var1
        _fun63977: for (var _fun63977_ip = 0;;) switch (_fun63977_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var0 = var2 != var1;
                if (!var0) {
                    _fun63977_ip = 22;
                    continue _fun63977
                }
            case 12:
                var1 = var1.embeddedActivityConfig;
                var0 = var2 != var1;
            case 22:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getCachedOrFetchActivityApplicationForLaunch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: getCachedOrFetchActivityApplicationForLaunch, environment: var1
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3413, 3414, 1372, 7874, 7913, 7930, 2]);