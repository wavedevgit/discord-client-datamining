// modules/parent_tools/RestrictedHoursActionCreators.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117932: for (var _fun117932_ip = 0;;) switch (_fun117932_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117932_ip = 94;
                            continue _fun117932
                        }
                    case 7:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 1;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var4.bind(var2)(var3);
                        var5 = var6.pushLazy;
                        var4 = _closure1_slot3;
                        var3 = function*() { // Environment: var3
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun117934: for (var _fun117934_ip = 0;;) switch (_fun117934_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun117934_ip = 71;
                                            continue _fun117934
                                        }
                                    case 7:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var2 = 3;
                                        var2 = var1[var2];
                                        var4 = undefined;
                                        var3 = var3.bind(var4)(var2);
                                        var2 = 2;
                                        var2 = var1[var2];
                                        var1 = var1.paths;
                                        var1 = var3.bind(var4)(var2, var1);
                                        SaveGenerator(address = 54);
                                    case 52:
                                        return var1;
                                    case 54:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun117934_ip = 68;
                                            continue _fun117934
                                        }
                                    case 60:
                                        var2 = var1.default;
                                        return var2;
                                    case 68:
                                        return var1;
                                    case 71:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var4 = var4.bind(var2)(var3);
                        var3 = {};
                        var7 = _closure1_slot6;
                        var3.onClose = var7;
                        var1 = _closure1_slot4;
                        var1 = var5.bind(var6)(var4, var3, var1);
                        SaveGenerator(address = 82);
                    case 80:
                        return var1;
                    case 82:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun117932_ip = 91;
                            continue _fun117932
                        }
                    case 88:
                        return var2;
                    case 91:
                        return var1;
                    case 94:
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
    var1 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.popWithKey;
        var1 = _closure1_slot4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot6 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 'RESTRICTED_HOURS_MODAL_KEY';
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/RestrictedHoursActionCreators.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.openRestrictedHoursModal = var3;
    var2.closeRestrictedHoursModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4561, 15032, 1307, 2]);