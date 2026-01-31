// modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx
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
    var3 = 'modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useExplicitMediaActions, environment: var1
        var0 = arg0;
        var8 = var0.onError;
        var _closure2_slot0 = var8;
        var7 = var0.onSuccess;
        var _closure2_slot1 = var7;
        var6 = var0.report;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot4;
        var1 = var5.useState;
        var0 = false;
        var4 = var1.bind(var5)(var0);
        var1 = _closure1_slot3;
        var9 = undefined;
        var0 = 2;
        var4 = var1.bind(var9)(var4, var0);
        var0 = 0;
        var1 = var4[var0];
        var0 = 1;
        var0 = var4[var0];
        var _closure2_slot3 = var0;
        var _closure2_slot4 = var1;
        var0 = {};
        var4 = var5.useCallback;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun61607: for (var _fun61607_ip = 0;;) switch (_fun61607_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun61607_ip = 194;
                            continue _fun61607
                        }
                    case 10:
                        var1 = undefined;
                        var2 = undefined;
                        var4 = _closure2_slot4;
                        if (var4) {
                            _fun61607_ip = 191;
                            continue _fun61607
                        }
                    case 27:
                        var5 = _closure2_slot3;
                        var4 = true;
                        var4 = var5.bind(var1)(var4);
                    case 38: // try_start_0 // try_start_1
                        var4 = _closure2_slot2;
                        var4 = var4.bind(var1)();
                        SaveGenerator(address = 50);
                    case 48:
                        return var4;
                    case 50:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun61607_ip = 76;
                            continue _fun61607
                        }
                    case 56:
                        var6 = _closure2_slot1;
                        var5 = null;
                        if (!(var5 != var6)) {
                            _fun61607_ip = 74;
                            continue _fun61607
                        }
                    case 66:
                        var5 = _closure2_slot1;
                        var5 = var5.bind(var1)();
                    case 74: // try_end0
                        _fun61607_ip = 163;
                        continue _fun61607;
                    case 76: // try_end1
                        var6 = _closure2_slot3;
                        var5 = false;
                        var5 = var6.bind(var1)(var5);
                        return var4;
                    case 90: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 3;
                        var4 = var7[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.APIError;
                        var5 = var4.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var4
                            }
                        });
                        var9 = var5;
                        var8 = var6;
                        var4 = new var9[var4](var8, var7);
                        var2 = var4 instanceof Object ? var4 : var5;
                        var5 = _closure2_slot0;
                        var4 = null;
                        if (!(var4 != var5)) {
                            _fun61607_ip = 163;
                            continue _fun61607
                        }
                    case 154:
                        var4 = _closure2_slot0;
                        var2 = var4.bind(var1)(var2);
                    case 163: // try_end2
                        var4 = _closure2_slot3;
                        var2 = false;
                        var2 = var4.bind(var1)(var2);
                        _fun61607_ip = 191;
                        continue _fun61607;
                    case 176: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure2_slot3;
                        var3 = false;
                        var3 = var4.bind(var1)(var3);
                        throw var2;
                    case 191:
                        return var1;
                    case 194:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var9)(var2);
        var2 = new Array(4);
        var2[0] = var1;
        var2[1] = var8;
        var2[2] = var7;
        var2[3] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var0.reportFalsePositive = var2;
        var0.isReportFalsePositiveLoading = var1;
        return var0;
    };
    var2.useExplicitMediaActions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3309, 2]);