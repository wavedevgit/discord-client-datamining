// modules/app_startup/native/executeRunnable.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
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
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.init;
    var _closure1_slot5 = var6;
    var3 = var3.applicationReady;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_startup/native/executeRunnable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var7 = arg0;
        var _closure2_slot0 = var7;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var6 = _closure1_slot3;
        var1 = 2;
        var1 = var6[var1];
        var5 = undefined;
        var1 = var2.bind(var5)(var1);
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var13 = var2;
        var12 = var7;
        var1 = new var13[var1](var12, var11);
        var8 = var1 instanceof Object ? var1 : var2;
        var3 = var8.log;
        var1 = global;
        var2 = var1.HermesInternal;
        var10 = var2.concat;
        var9 = 'Loading the ';
        var2 = ' Discord runnable';
        var2 = var10.bind(var9)(var7, var2);
        var2 = var3.bind(var8)(var2);
        var3 = _closure1_slot2;
        var2 = 3;
        var2 = var6[var2];
        var9 = var3.bind(var5)(var2);
        var8 = var9.setIsPaused;
        var2 = false;
        var2 = var8.bind(var9)(var2);
        var2 = 4;
        var2 = var6[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.withRequest;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var1 = 'executeRunnable:';
        var1 = var6.bind(var1)(var7);
        var4 = _closure1_slot4;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun111927: for (var _fun111927_ip = 0;;) switch (_fun111927_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun111927_ip = 247;
                            continue _fun111927
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 5;
                        var1 = var4[var1];
                        var5 = undefined;
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.identifyWebSocket;
                        var1 = var1.bind(var2)();
                        var2 = _closure1_slot1;
                        var1 = 6;
                        var1 = var4[var1];
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.init;
                        var2 = var4.measureAsync;
                        var1 = _closure1_slot5;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 86);
                    case 84:
                        return var1;
                    case 86:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun111927_ip = 244;
                            continue _fun111927
                        }
                    case 95:
                        var2 = _closure1_slot6;
                        var2 = var2.promise;
                        SaveGenerator(address = 109);
                    case 107:
                        return var2;
                    case 109:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun111927_ip = 241;
                            continue _fun111927
                        }
                    case 118:
                        var7 = _closure1_slot2;
                        var6 = _closure1_slot3;
                        var4 = 4;
                        var4 = var6[var4];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.startBridgeTo;
                        var9 = _closure2_slot0;
                        var4 = var9.toLowerCase;
                        var10 = var4.bind(var9)();
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var9 = var4.concat;
                        var4 = 'AppContainer:';
                        var4 = var9.bind(var4)(var10);
                        var4 = var7.bind(var8)(var4);
                        var4 = _closure1_slot1;
                        var3 = 7;
                        var3 = var6[var3];
                        var7 = var4.bind(var5)(var3);
                        var6 = var7.time;
                        var5 = '🏃';
                        var4 = 'Run';
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.Emitter;
                            var1 = var2.batched;
                            var0 = _closure2_slot1;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var6.bind(var7)(var5, var4, var3);
                        return var3;
                    case 241:
                        return var2;
                    case 244:
                        return var1;
                    case 247:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var4.bind(var5)(var0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 14342, 3, 12353, 659, 25, 14, 20, 566, 2]);