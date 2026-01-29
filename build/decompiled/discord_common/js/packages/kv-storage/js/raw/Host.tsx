// ../discord_common/js/packages/kv-storage/js/raw/Host.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot4;
        var3 = function() { // Original name: Host, environment: var5
            var3 = _closure1_slot3;
            var2 = _closure2_slot1;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot1 = var3;
        var0 = {};
        var2 = 'open';
        var0.key = var2;
        var2 = function(arg0, arg1) { // Original name: value, environment: var5
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.Runtime;
            var2 = var3.executeAsync;
            var1 = 'database_open';
            var0 = function(arg0) { // Environment: var0
                _fun18563: for (var _fun18563_ip = 0;;) switch (_fun18563_ip) {
                    case 0:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 4;
                        var0 = var2[var0];
                        var4 = undefined;
                        var0 = var1.bind(var4)(var0);
                        var3 = var0.KV_RAW;
                        var2 = var3.databaseOpen;
                        var1 = {};
                        var0 = _closure3_slot0;
                        var1.database = var0;
                        var6 = _closure3_slot1;
                        var0 = null;
                        var6 = var0 == var6;
                        if (var6) {
                            _fun18563_ip = 74;
                            continue _fun18563
                        }
                    case 64:
                        var5 = _closure3_slot1;
                        var4 = var5.invalidateDisabledHandles;
                    case 74:
                        var0 = var0 != var4;
                        if (!var0) {
                            _fun18563_ip = 84;
                            continue _fun18563
                        }
                    case 81:
                        var0 = var4;
                    case 84:
                        var1.invalidateDisabledHandles = var0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var2;
        var2 = new Array(6);
        var2[0] = var0;
        var0 = {};
        var6 = 'openSyncUnsafe';
        var0.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun18564: for (var _fun18564_ip = 0;;) switch (_fun18564_ip) {
                case 0:
                    var0 = arg1;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 4;
                    var1 = var3[var1];
                    var5 = undefined;
                    var1 = var2.bind(var5)(var1);
                    var4 = var1.KV_RAW;
                    var3 = var4.databaseOpen;
                    var2 = {};
                    var1 = arg0;
                    var2.database = var1;
                    var1 = null;
                    var6 = var1 == var0;
                    if (var6) {
                        _fun18564_ip = 65;
                        continue _fun18564
                    }
                case 59:
                    var5 = var0.invalidateDisabledHandles;
                case 65:
                    var0 = var1 != var5;
                    if (!var0) {
                        _fun18564_ip = 75;
                        continue _fun18564
                    }
                case 72:
                    var0 = var5;
                case 75:
                    var2.invalidateDisabledHandles = var0;
                    var0 = {};
                    var5 = true;
                    var0.synchronous = var5;
                    var0 = var3.bind(var4)(var1, var2, var0);
                    return var0;
            }
        };
        var0.value = var6;
        var2[1] = var0;
        var0 = {};
        var6 = 'delete';
        var0.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.Runtime;
            var2 = var3.executeAsync;
            var1 = 'database_delete';
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var3 = var0.KV_RAW;
                var2 = var3.databaseDelete;
                var1 = {};
                var0 = _closure3_slot0;
                var1.database = var0;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var6;
        var2[2] = var0;
        var0 = {};
        var6 = 'list';
        var0.key = var6;
        var7 = _closure1_slot2;
        var1 = undefined;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun18568: for (var _fun18568_ip = 0;;) switch (_fun18568_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun18568_ip = 94;
                            continue _fun18568
                        }
                    case 9:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 3;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var5 = var1.Runtime;
                        var4 = var5.executeAsync;
                        var3 = 'database_list';
                        var1 = function(arg0) { // Environment: var2
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.KV_RAW;
                            var1 = var2.databaseList;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var4.bind(var5)(var3, var1);
                        SaveGenerator(address = 67);
                    case 65:
                        return var1;
                    case 67:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun18568_ip = 91;
                            continue _fun18568
                        }
                    case 73:
                        var3 = var1.map;
                        var2 = function(arg0) { // Environment: var2
                            var0 = arg0;
                            var0 = var0.data;
                            return var0;
                        };
                        var2 = var3.bind(var1)(var2);
                        return var2;
                    case 91:
                        return var1;
                    case 94:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot0 = var6;
        var6 = function() { // Original name: list, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var6;
        var2[3] = var0;
        var0 = {};
        var6 = 'optimize';
        var0.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.Runtime;
            var2 = var3.executeAsync;
            var1 = 'database_optimize';
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var3 = var0.KV_RAW;
                var2 = var3.databaseOptimize;
                var1 = {};
                var0 = _closure3_slot0;
                var1.aggressive = var0;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0.value = var6;
        var2[4] = var0;
        var0 = {};
        var6 = 'raise';
        var0.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 4;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.KV_RAW;
            var2 = var3.raise;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/kv-storage/js/raw/Host.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Host = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 1646, 1639, 2]);