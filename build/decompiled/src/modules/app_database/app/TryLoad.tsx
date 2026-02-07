// modules/app_database/app/TryLoad.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun18864: for (var _fun18864_ip = 0;;) switch (_fun18864_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun18864_ip = 66;
                            continue _fun18864
                        }
                    case 7:
                        var1 = arg0;
                    case 10: // try_start_0
                        var2 = var1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        SaveGenerator(address = 23);
                    case 21:
                        return var1;
                    case 23:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun18864_ip = 32;
                            continue _fun18864
                        }
                    case 29: // try_end0
                        return var1;
                    case 32:
                        return var1;
                    case 35: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot3;
                        var2 = var3.log;
                        var1 = 'database load failed.';
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = null;
                        return var1;
                    case 66:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun18867: for (var _fun18867_ip = 0;;) switch (_fun18867_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun18867_ip = 233;
                            continue _fun18867
                        }
                    case 10:
                        var7 = arg0;
                        var1 = arg1;
                        var10 = arg2;
                    case 19: // try_start_0
                        var2 = var1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        SaveGenerator(address = 32);
                    case 30:
                        return var1;
                    case 32:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun18867_ip = 41;
                            continue _fun18867
                        }
                    case 38: // try_end0
                        return var1;
                    case 41:
                        return var1;
                    case 44: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var8 = _closure1_slot3;
                        var5 = var8.log;
                        var11 = var7;
                        var6 = global;
                        var3 = var6.HermesInternal;
                        var9 = var3.concat;
                        var4 = '';
                        var3 = ': exception thrown, resetting socket.';
                        var4 = var9.bind(var4)(var11, var3);
                        var3 = var1.stack;
                        var3 = var5.bind(var8)(var4, var1, var3);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 2;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'RESET_SOCKET';
                        var2.type = var5;
                        var5 = {};
                        var5.error = var1;
                        var1 = var6.HermesInternal;
                        var1 = var1.concat;
                        var9 = 'tryLoadOrResetCacheGatewayAsync (';
                        var8 = ')';
                        var1 = var1.bind(var9)(var11, var8);
                        var5.action = var1;
                        var11 = var10;
                        var1 = null;
                        if (!(var1 == var11)) {
                            _fun18867_ip = 188;
                            continue _fun18867
                        }
                    case 186:
                        _fun18867_ip = 191;
                        continue _fun18867;
                    case 188:
                        var7 = var10;
                    case 191:
                        var6 = var6.HermesInternal;
                        var6 = var6.concat;
                        var6 = var6.bind(var9)(var7, var8);
                        var5.metricAction = var6;
                        var6 = true;
                        var5.clearCache = var6;
                        var2.args = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 233:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'TryLoad';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot3 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/app/TryLoad.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun18868: for (var _fun18868_ip = 0;;) switch (_fun18868_ip) {
            case 0:
                var0 = arg0;
            case 3: // try_start_0
                var1 = var0;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 12: // try_end0
                return var0;
            case 14: // catch_target0
                CatchBlockStart(arg_register = 3);
                var2 = _closure1_slot3;
                var1 = var2.log;
                var0 = 'database load failed.';
                var0 = var1.bind(var2)(var0, var3);
                var0 = null;
                return var0;
        }
    };
    var2.tryLoad = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.tryLoadAsync = var3;
    var3 = function arg0, arg1, arg2() {
        _fun18870: for (var _fun18870_ip = 0;;) switch (_fun18870_ip) {
            case 0:
                var6 = arg0;
                var0 = arg1;
                var9 = arg2;
            case 9: // try_start_0
                var1 = var0;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 18: // try_end0
                return var0;
            case 20: // catch_target0
                CatchBlockStart(arg_register = 0);
                var7 = _closure1_slot3;
                var4 = var7.log;
                var10 = var6;
                var5 = global;
                var2 = var5.HermesInternal;
                var8 = var2.concat;
                var3 = '';
                var2 = ': exception thrown, resetting socket.';
                var3 = var8.bind(var3)(var10, var2);
                var2 = var0.stack;
                var2 = var4.bind(var7)(var3, var0, var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'RESET_SOCKET';
                var1.type = var4;
                var4 = {};
                var4.error = var0;
                var0 = var5.HermesInternal;
                var0 = var0.concat;
                var8 = 'tryLoadOrResetCacheGateway (';
                var7 = ')';
                var0 = var0.bind(var8)(var10, var7);
                var4.action = var0;
                var10 = var9;
                var0 = null;
                if (!(var0 == var10)) {
                    _fun18870_ip = 164;
                    continue _fun18870
                }
            case 162:
                _fun18870_ip = 167;
                continue _fun18870;
            case 164:
                var6 = var9;
            case 167:
                var5 = var5.HermesInternal;
                var5 = var5.concat;
                var5 = var5.bind(var8)(var6, var7);
                var4.metricAction = var5;
                var5 = true;
                var4.clearCache = var5;
                var1.args = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.tryLoadOrResetCacheGateway = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.tryLoadOrResetCacheGatewayAsync = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3, 806, 2]);