// modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var5 = metroImportAll;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useCreateCreatorMonetizationEnableRequest, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot5;
        var0 = var5.useState;
        var0 = var0.bind(var5)();
        var11 = _closure1_slot4;
        var7 = undefined;
        var10 = 2;
        var0 = var11.bind(var7)(var0, var10);
        var1 = 0;
        var8 = var0[var1];
        var9 = 1;
        var0 = var0[var9];
        var _closure2_slot1 = var0;
        var0 = var5.useState;
        var12 = false;
        var0 = var0.bind(var5)(var12);
        var0 = var11.bind(var7)(var0, var10);
        var4 = var0[var1];
        var0 = var0[var9];
        var _closure2_slot2 = var0;
        var0 = var5.useState;
        var0 = var0.bind(var5)(var12);
        var0 = var11.bind(var7)(var0, var10);
        var1 = var0[var1];
        var0 = var0[var9];
        var _closure2_slot3 = var0;
        var0 = {};
        var0.error = var8;
        var0.loading = var4;
        var4 = var5.useCallback;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117137: for (var _fun117137_ip = 0;;) switch (_fun117137_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117137_ip = 214;
                            continue _fun117137
                        }
                    case 10:
                        var3 = _closure2_slot0;
                        var1 = null;
                        if (!(var1 != var3)) {
                            _fun117137_ip = 196;
                            continue _fun117137
                        }
                    case 26:
                        var1 = _closure2_slot2;
                        var4 = undefined;
                        var6 = true;
                        var1 = var1.bind(var4)(var6);
                        var1 = _closure2_slot1;
                        var1 = var1.bind(var4)(var4);
                        var1 = _closure2_slot3;
                        var3 = false;
                        var1 = var1.bind(var4)(var3);
                    case 59: // try_start_0 // try_start_1
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var1 = 3;
                        var1 = var7[var1];
                        var7 = var5.bind(var4)(var1);
                        var5 = var7.createCreatorMonetizationEnableRequest;
                        var1 = _closure2_slot0;
                        var1 = var5.bind(var7)(var1);
                        SaveGenerator(address = 101);
                    case 99:
                        return var1;
                    case 101:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun117137_ip = 118;
                            continue _fun117137
                        }
                    case 107:
                        var5 = _closure2_slot3;
                        var5 = var5.bind(var4)(var6);
                    case 116: // try_end0
                        _fun117137_ip = 187;
                        continue _fun117137;
                    case 118: // try_end1
                        var5 = _closure2_slot2;
                        var5 = var5.bind(var4)(var3);
                        return var1;
                    case 130: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var5 = _closure2_slot1;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 4;
                        var1 = var8[var1];
                        var1 = var6.bind(var4)(var1);
                        var6 = var1.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var6;
                        var9 = var7;
                        var1 = new var10[var1](var9, var8);
                        var1 = var1 instanceof Object ? var1 : var6;
                        var1 = var5.bind(var4)(var1);
                    case 187: // try_end2
                        var1 = _closure2_slot2;
                        var1 = var1.bind(var4)(var3);
                    case 196:
                        var1 = undefined;
                        return var1;
                    case 201: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var2 = _closure2_slot2;
                        var2 = var2.bind(var4)(var3);
                        throw var1;
                    case 214:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var7)(var2);
        var2 = new Array(1);
        var2[0] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var0.createEnableRequest = var2;
        var0.submittedRequest = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 14856, 3311, 2]);