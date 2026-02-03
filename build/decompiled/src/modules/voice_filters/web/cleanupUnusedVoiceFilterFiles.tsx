// modules/voice_filters/web/cleanupUnusedVoiceFilterFiles.tsx
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
                _fun94487: for (var _fun94487_ip = 0;;) switch (_fun94487_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94487_ip = 198;
                            continue _fun94487
                        }
                    case 10:
                        var2 = arg0;
                        var1 = undefined;
                        var5 = undefined;
                        var3 = undefined;
                    case 19: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var6 = 2;
                        var6 = var8[var6];
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.cleanupUnusedVoiceFilterFiles;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 57);
                    case 55:
                        return var2;
                    case 57:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun94487_ip = 160;
                            continue _fun94487
                        }
                    case 63:
                        var6 = var2.deletedFiles;
                        var5 = var6;
                        var3 = var2.errors;
                        var7 = var6.length;
                        var6 = 0;
                        if (!(var7 > var6)) {
                            _fun94487_ip = 118;
                            continue _fun94487
                        }
                    case 89:
                        var9 = _closure1_slot3;
                        var8 = var9.info;
                        var7 = {};
                        var7.deletedFiles = var5;
                        var5 = 'VF cleanup completed';
                        var5 = var8.bind(var9)(var5, var7);
                    case 118:
                        var5 = var3;
                        var5 = var5.length;
                        if (!(var5 > var6)) {
                            _fun94487_ip = 158;
                            continue _fun94487
                        }
                    case 130:
                        var6 = _closure1_slot3;
                        var5 = var6.warn;
                        var4 = {};
                        var4.errors = var3;
                        var3 = 'VF cleanup had errors';
                        var3 = var5.bind(var6)(var3, var4);
                    case 158: // try_end0
                        _fun94487_ip = 195;
                        continue _fun94487;
                    case 160:
                        return var2;
                    case 163: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var5 = _closure1_slot3;
                        var4 = var5.warn;
                        var3 = {};
                        var3.error = var2;
                        var2 = 'VF cleanup failed';
                        var2 = var4.bind(var5)(var2, var3);
                    case 195:
                        return var1;
                    case 198:
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
    var10 = 'cleanupUnusedVoiceFilterFiles';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot3 = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_filters/web/cleanupUnusedVoiceFilterFiles.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.cleanupUnusedVoiceFilterFiles = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3, 7441, 2]);