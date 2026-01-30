// modules/application_account_linking/hooks/useProviderConnection.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/application_account_linking/hooks/useProviderConnection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useProviderConnection, environment: var1
        _fun77449: for (var _fun77449_ip = 0;;) switch (_fun77449_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 3;
                var1 = var8[var5];
                var2 = undefined;
                var11 = var6.bind(var2)(var1);
                var10 = var11.useStateFromStores;
                var3 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var3;
                var1 = function() { // Environment: var0
                    _fun77450: for (var _fun77450_ip = 0;;) switch (_fun77450_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = null;
                            var2 = var4 != var0;
                            var0 = null;
                            if (!var2) {
                                _fun77450_ip = 41;
                                continue _fun77450
                            }
                        case 18:
                            var3 = _closure1_slot5;
                            var2 = var3.getAccount;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var4, var1);
                        case 41:
                            return var0;
                    }
                };
                var1 = var10.bind(var11)(var9, var1);
                var5 = var8[var5];
                var8 = var6.bind(var2)(var5);
                var6 = var8.useStateFromStores;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.isFetching;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var6.bind(var8)(var5, var3);
                var3 = null;
                var5 = var3 != var1;
                if (!var5) {
                    _fun77449_ip = 117;
                    continue _fun77449
                }
            case 108:
                var8 = var1.revoked;
                var5 = !var8;
            case 117:
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun77454: for (var _fun77454_ip = 0;;) switch (_fun77454_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun77454_ip = 219;
                                        continue _fun77454
                                    }
                                case 10:
                                    var10 = arg0;
                                    var2 = undefined;
                                    var5 = undefined;
                                    var4 = undefined;
                                    var6 = _closure2_slot0;
                                    var3 = null;
                                    if (!(var3 != var6)) {
                                        _fun77454_ip = 207;
                                        continue _fun77454
                                    }
                                case 35: // try_start_0
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var6 = 4;
                                    var6 = var8[var6];
                                    var8 = var7.bind(var2)(var6);
                                    var7 = var8.authorize;
                                    var6 = _closure2_slot0;
                                    var1 = {};
                                    var9 = var10;
                                    var11 = var3 != var9;
                                    var9 = 'Account Linking';
                                    if (!var11) {
                                        _fun77454_ip = 89;
                                        continue _fun77454
                                    }
                                case 86:
                                    var9 = var10;
                                case 89:
                                    var1.location = var9;
                                    var1 = var7.bind(var8)(var6, var1);
                                    SaveGenerator(address = 103);
                                case 101:
                                    return var1;
                                case 103:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun77454_ip = 190;
                                        continue _fun77454
                                    }
                                case 109:
                                    var4 = var1;
                                    var6 = var1.ok;
                                    if (!var6) {
                                        _fun77454_ip = 150;
                                        continue _fun77454
                                    }
                                case 121:
                                    var6 = var4;
                                    var6 = var6.body;
                                    var5 = var6;
                                    var6 = var3 == var6;
                                    var2 = undefined;
                                    if (var6) {
                                        _fun77454_ip = 146;
                                        continue _fun77454
                                    }
                                case 141:
                                    var2 = var5.url;
                                case 146:
                                    if (!(var3 == var2)) {
                                        _fun77454_ip = 161;
                                        continue _fun77454
                                    }
                                case 150:
                                    var2 = {};
                                    var3 = false;
                                    var2.success = var3;
                                    _fun77454_ip = 187;
                                    continue _fun77454;
                                case 161:
                                    var3 = {};
                                    var5 = true;
                                    var3.success = var5;
                                    var4 = var4.body;
                                    var4 = var4.url;
                                    var3.url = var4;
                                    var2 = var3;
                                case 187: // try_end0
                                    return var2;
                                case 190:
                                    return var1;
                                case 193: // catch_target0
                                    CatchBlockStart(arg_register = 1);
                                    var1 = {};
                                    var2 = false;
                                    var1.success = var2;
                                    return var1;
                                case 207:
                                    var1 = {};
                                    var2 = false;
                                    var1.success = var2;
                                    return var1;
                                case 219:
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
                var0[0] = var4;
                var2 = var7.bind(var8)(var2, var0);
                var0 = {};
                var0.loading = var6;
                var0.hasConnection = var5;
                var3 = var3 != var4;
                var0.canConnect = var3;
                var0.startConnection = var2;
                var0.account = var1;
                return var0;
        }
    };
    var2.useProviderConnection = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 4482, 566, 4484, 2]);