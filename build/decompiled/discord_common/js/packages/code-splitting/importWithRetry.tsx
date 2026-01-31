// ../discord_common/js/packages/code-splitting/importWithRetry.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var0 = function() { // Original name: _importWithRetry, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot1;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun25447: for (var _fun25447_ip = 0;;) switch (_fun25447_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun25447_ip = 209;
                            continue _fun25447
                        }
                    case 13:
                        var11 = var1.createPromise;
                        var12 = var1.webpackId;
                        var10 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        SaveGenerator(address = 35);
                    case 33:
                        return var10;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun25447_ip = 206;
                            continue _fun25447
                        }
                    case 44:
                        var13 = 500;
                        var14 = 0;
                        var9 = global;
                        var8 = 2;
                        var7 = 5000;
                        var5 = 50;
                    case 69: // try_start_0
                        var3 = var11;
                        var3 = var3.bind(var10)();
                        SaveGenerator(address = 80);
                    case 78:
                        return var3;
                    case 80:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun25447_ip = 89;
                            continue _fun25447
                        }
                    case 86: // try_end0
                        return var3;
                    case 89:
                        return var3;
                    case 92: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = var12;
                        var3 = _closure1_slot0;
                        var3 = var3.cache;
                        var3 = var4 in var3;
                        if (var3) {
                            _fun25447_ip = 204;
                            continue _fun25447
                        }
                    case 114:
                        var3 = var14;
                        if (!(!(var3 >= var5))) {
                            _fun25447_ip = 199;
                            continue _fun25447
                        }
                    case 121:
                        var4 = _closure1_slot2;
                        var3 = var13;
                        var3 = var4.bind(var10)(var3);
                        SaveGenerator(address = 137);
                    case 135:
                        return var3;
                    case 137:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun25447_ip = 196;
                            continue _fun25447
                        }
                    case 143:
                        var4 = _closure1_slot3;
                        var4 = var4.bind(var10)();
                        SaveGenerator(address = 155);
                    case 153:
                        return var4;
                    case 155:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 15);
                        if (var15) {
                            _fun25447_ip = 193;
                            continue _fun25447
                        }
                    case 161:
                        var17 = var9.Math;
                        var16 = var17.min;
                        var15 = var13;
                        var15 = var8 * var15;
                        var13 = var16.bind(var17)(var7, var15);
                        var15 = var14;
                        var14 = var15 + 1;
                        _fun25447_ip = 69;
                        continue _fun25447;
                    case 193:
                        return var4;
                    case 196:
                        return var3;
                    case 199:
                        var3 = var2;
                        throw var3;
                    case 204:
                        throw var2;
                    case 206:
                        return var1;
                    case 209:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var7[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot1 = var3;
    var3 = function(arg0) { // Original name: pausedPromise, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var0 = global;
            var3 = var0.setTimeout;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var0, var2);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot2 = var3;
    var4 = function() { // Original name: awaitOnline, environment: var1
        var0 = global;
        var1 = var0.Promise;
        var0 = var1.resolve;
        var0 = var0.bind(var1)();
        return var0;
    };
    var _closure1_slot3 = var4;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/code-splitting/importWithRetry.tsx';
    var5 = var6.bind(var7)(var5);
    var2.awaitOnline = var4;
    var4 = function(arg0) { // Original name: setAwaitOnline, environment: var1
        var0 = arg0;
        _closure1_slot3 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setAwaitOnline = var4;
    var2.pausedPromise = var3;
    var1 = function() { // Original name: importWithRetry, environment: var1
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.importWithRetry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 2]);