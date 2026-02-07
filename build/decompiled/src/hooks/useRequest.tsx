// hooks/useRequest.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useRequest.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot5;
        var3 = var5.useState;
        var2 = false;
        var2 = var3.bind(var5)(var2);
        var10 = _closure1_slot4;
        var7 = undefined;
        var9 = 2;
        var4 = var10.bind(var7)(var2, var9);
        var2 = 0;
        var3 = var4[var2];
        var8 = 1;
        var4 = var4[var8];
        var _closure2_slot1 = var4;
        var11 = var5.useState;
        var4 = null;
        var4 = var11.bind(var5)(var4);
        var4 = var10.bind(var7)(var4, var9);
        var2 = var4[var2];
        var4 = var4[var8];
        var _closure2_slot2 = var4;
        var4 = var5.useCallback;
        var1 = _closure1_slot3;
        var0 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun84973: for (var _fun84973_ip = 0;;) switch (_fun84973_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun84973_ip = 323;
                            continue _fun84973
                        }
                    case 10:
                        var13 = 0;
                        var2 = copyRestArgs(var13);
                        var5 = undefined;
                        SaveGenerator(address = 22);
                    case 20:
                        return var5;
                    case 22:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun84973_ip = 320;
                            continue _fun84973
                        }
                    case 31: // try_start_0 // try_start_1
                        var7 = _closure2_slot2;
                        var6 = null;
                        var6 = var7.bind(var5)(var6);
                        var7 = _closure2_slot1;
                        var6 = true;
                        var6 = var7.bind(var5)(var6);
                        var6 = _closure2_slot0;
                        var12 = var2;
                        var2 = new Array(0);
                        var13 = var2;
                        var11 = 0;
                        var7 = arraySpread(var13, var12, var11);
                        var13 = var6;
                        var12 = var2;
                        var11 = undefined;
                        var2 = apply(var13, var12, var11);
                        SaveGenerator(address = 92);
                    case 90:
                        return var2;
                    case 92:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun84973_ip = 112;
                            continue _fun84973
                        }
                    case 98: // try_end0 // try_end1
                        var7 = _closure2_slot1;
                        var6 = false;
                        var6 = var7.bind(var5)(var6);
                        return var2;
                    case 112:
                        var6 = _closure2_slot1;
                        var3 = false;
                        var3 = var6.bind(var5)(var3);
                        return var2;
                    case 126: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = var2;
                        var6 = var2.message;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 3;
                        var7 = var10[var3];
                        var7 = var9.bind(var5)(var7);
                        var8 = var7.intl;
                        var7 = var8.string;
                        var3 = var10[var3];
                        var3 = var9.bind(var5)(var3);
                        var3 = var3.t;
                        var3 = var3.N2yb9a;
                        var3 = var7.bind(var8)(var3);
                        if (!(var6 !== var3)) {
                            _fun84973_ip = 285;
                            continue _fun84973
                        }
                    case 198:
                        var3 = _closure2_slot2;
                        var8 = var4;
                        var9 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var7 = 4;
                        var6 = var6[var7];
                        var6 = var9.bind(var5)(var6);
                        var6 = var8 instanceof var6;
                        if (var6) {
                            _fun84973_ip = 277;
                            continue _fun84973
                        }
                    case 235:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var7];
                        var7 = var6.bind(var5)(var2);
                        var13 = var4;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var14 = var6;
                        var2 = new var14[var7](var13, var12);
                        var2 = var2 instanceof Object ? var2 : var6;
                        _fun84973_ip = 280;
                        continue _fun84973;
                    case 277:
                        var2 = var4;
                    case 280:
                        var2 = var3.bind(var5)(var2);
                    case 285: // try_end2
                        var3 = _closure2_slot1;
                        var2 = false;
                        var2 = var3.bind(var5)(var2);
                        return var5;
                    case 302: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure2_slot1;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 320:
                        return var1;
                    case 323:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var1 = var1.bind(var7)(var0);
        var0 = new Array(1);
        var0[0] = var6;
        var1 = var4.bind(var5)(var1, var0);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1234, 3353, 2]);