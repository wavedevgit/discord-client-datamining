// utils/LazyAPIPromise.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/LazyAPIPromise.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var9 = _closure1_slot4;
        var3 = var9.useState;
        var2 = false;
        var2 = var3.bind(var9)(var2);
        var7 = _closure1_slot3;
        var1 = undefined;
        var6 = 2;
        var4 = var7.bind(var1)(var2, var6);
        var2 = 0;
        var3 = var4[var2];
        var5 = 1;
        var4 = var4[var5];
        var _closure2_slot2 = var4;
        var8 = var9.useState;
        var4 = null;
        var4 = var8.bind(var9)(var4);
        var4 = var7.bind(var1)(var4, var6);
        var2 = var4[var2];
        var4 = var4[var5];
        var _closure2_slot3 = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = function*() { // Environment: var0
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun65496: for (var _fun65496_ip = 0;;) switch (_fun65496_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun65496_ip = 180;
                                continue _fun65496
                            }
                        case 10:
                            var4 = undefined;
                            var3 = undefined;
                            var5 = _closure2_slot2;
                            var1 = true;
                            var1 = var5.bind(var4)(var1);
                            var5 = _closure2_slot3;
                            var1 = null;
                            var5 = var5.bind(var4)(var1);
                        case 39: // try_start_0
                            var5 = _closure2_slot0;
                            var5 = var5.bind(var4)();
                            SaveGenerator(address = 51);
                        case 49:
                            return var5;
                        case 51:
                            ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                            if (var6) {
                                _fun65496_ip = 80;
                                continue _fun65496
                            }
                        case 57:
                            var7 = _closure2_slot2;
                            var6 = false;
                            var6 = var7.bind(var4)(var6);
                            var6 = _closure2_slot3;
                            var6 = var6.bind(var4)(var1);
                        case 77: // try_end0
                            return var5;
                        case 80:
                            return var5;
                        case 83: // catch_target0
                            CatchBlockStart(arg_register = 7);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var5 = 3;
                            var5 = var8[var5];
                            var5 = var6.bind(var4)(var5);
                            var5 = var5.APIError;
                            var6 = var5.prototype;
                            var6 = Object.create(var6, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var10 = var6;
                            var9 = var7;
                            var5 = new var10[var5](var9, var8);
                            var3 = var5 instanceof Object ? var5 : var6;
                            var5 = _closure2_slot1;
                            if (!(var1 != var5)) {
                                _fun65496_ip = 157;
                                continue _fun65496
                            }
                        case 145:
                            var6 = _closure2_slot1;
                            var5 = var3;
                            var5 = var6.bind(var4)(var5);
                        case 157:
                            var5 = _closure2_slot3;
                            var3 = var5.bind(var4)(var3);
                            var3 = _closure2_slot2;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        case 180:
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
        var1 = var0.bind(var1)();
        var0 = new Array(2);
        var0[0] = var1;
        var1 = {};
        var1.loading = var3;
        var1.error = var2;
        var0[1] = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3352, 2]);