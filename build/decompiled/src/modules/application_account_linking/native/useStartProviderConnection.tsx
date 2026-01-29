// modules/application_account_linking/native/useStartProviderConnection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_account_linking/native/useStartProviderConnection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useStartProviderConnection, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var4 = var3.bind(var2)(var1);
        var3 = var4.useProviderConnection;
        var1 = arg0;
        var1 = var3.bind(var4)(var1);
        var5 = var1.loading;
        var4 = var1.hasConnection;
        var3 = var1.canConnect;
        var8 = var1.startConnection;
        var _closure2_slot0 = var8;
        var1 = var1.account;
        var7 = _closure1_slot4;
        var6 = var7.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun77402: for (var _fun77402_ip = 0;;) switch (_fun77402_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun77402_ip = 158;
                                continue _fun77402
                            }
                        case 10:
                            var5 = undefined;
                            var2 = undefined;
                            var3 = _closure2_slot0;
                            var1 = arg0;
                            var1 = var3.bind(var5)(var1);
                            SaveGenerator(address = 33);
                        case 31:
                            return var1;
                        case 33:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun77402_ip = 155;
                                continue _fun77402
                            }
                        case 39:
                            var2 = var1;
                            var3 = var1.success;
                            if (!var3) {
                                _fun77402_ip = 65;
                                continue _fun77402
                            }
                        case 51:
                            var3 = var2;
                            var4 = var3.url;
                            var3 = null;
                            if (!(var3 == var4)) {
                                _fun77402_ip = 77;
                                continue _fun77402
                            }
                        case 65:
                            var3 = {};
                            var4 = false;
                            var3.success = var4;
                            return var3;
                        case 77: // try_start_0
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 3;
                            var3 = var6[var3];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.openURL;
                            var2 = var2.url;
                            var2 = var3.bind(var4)(var2);
                            SaveGenerator(address = 120);
                        case 118:
                            return var2;
                        case 120:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                            if (var3) {
                                _fun77402_ip = 138;
                                continue _fun77402
                            }
                        case 126:
                            var3 = {};
                            var4 = true;
                            var3.success = var4;
                        case 135: // try_end0
                            return var3;
                        case 138:
                            return var2;
                        case 141: // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var2 = {};
                            var3 = false;
                            var2.success = var3;
                            return var2;
                        case 155:
                            return var1;
                        case 158:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var2 = var0.bind(var2)();
        var0 = new Array(1);
        var0[0] = var8;
        var2 = var6.bind(var7)(var2, var0);
        var0 = {};
        var0.loading = var5;
        var0.hasConnection = var4;
        var0.canConnect = var3;
        var0.startConnection = var2;
        var0.account = var1;
        return var0;
    };
    var2.useStartProviderConnection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 9787, 3103, 2]);