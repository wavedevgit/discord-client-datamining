// actions/LibraryApplicationStatisticsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun36761: for (var _fun36761_ip = 0;;) switch (_fun36761_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun36761_ip = 201;
                            continue _fun36761
                        }
                    case 10:
                        var1 = _closure1_slot4;
                        var3 = var1.lastFetched;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun36761_ip = 61;
                            continue _fun36761
                        }
                    case 29:
                        var1 = global;
                        var4 = var1.Date;
                        var1 = var4.now;
                        var1 = var1.bind(var4)();
                        var3 = var1 - var3;
                        var1 = _closure1_slot6;
                        if (!(!(var3 < var1))) {
                            _fun36761_ip = 196;
                            continue _fun36761
                        }
                    case 61: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var6 = _closure1_slot5;
                        var6 = var6.USER_ACTIVITY_STATISTICS;
                        var1.url = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 128);
                    case 126:
                        return var1;
                    case 128:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun36761_ip = 188;
                            continue _fun36761
                        }
                    case 134:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 5;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'USER_ACTIVITY_STATISTICS_FETCH_SUCCESS';
                        var2.type = var5;
                        var5 = var1.body;
                        var2.statistics = var5;
                        var2 = var3.bind(var4)(var2);
                    case 186: // try_end0
                        _fun36761_ip = 196;
                        continue _fun36761;
                    case 188:
                        return var1;
                    case 191: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        return var1;
                    case 196:
                        var1 = undefined;
                        return var1;
                    case 201:
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var6 = var3.HOUR;
    var3 = 6;
    var6 = var3 * var6;
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/LibraryApplicationStatisticsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchActivityStatistics = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3994, 660, 667, 507, 806, 2]);