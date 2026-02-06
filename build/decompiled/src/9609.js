// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun75764: for (var _fun75764_ip = 0;;) switch (_fun75764_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun75764_ip = 71;
                            continue _fun75764
                        }
                    case 9:
                        var2 = arg0;
                        var _closure4_slot0 = var2;
                        var4 = _closure1_slot2;
                        var3 = undefined;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun75766: for (var _fun75766_ip = 0;;) switch (_fun75766_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun75766_ip = 197;
                                            continue _fun75766
                                        }
                                    case 10:
                                        var2 = _closure4_slot0;
                                        var2 = var2.sourceUris;
                                        var7 = var2.length;
                                        var2 = 1;
                                        if (!(var7 > var2)) {
                                            _fun75766_ip = 84;
                                            continue _fun75766
                                        }
                                    case 37:
                                        var2 = global;
                                        var4 = var2.console;
                                        var3 = var4.warn;
                                        var2 = var2.HermesInternal;
                                        var6 = var2.concat;
                                        var5 = 'DocumentPicker.saveDocuments: Android only allows to save one file at a time.\n\n      You provided an array with ';
                                        var2 = ' entries.';
                                        var2 = var6.bind(var5)(var7, var2);
                                        var2 = var3.bind(var4)(var2);
                                    case 84:
                                        var6 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var5 = 2;
                                        var3 = var3[var5];
                                        var4 = undefined;
                                        var3 = var6.bind(var4)(var3);
                                        var6 = var3.NativeDocumentPicker;
                                        var3 = var6.saveDocument;
                                        var1 = _closure4_slot0;
                                        var1 = var3.bind(var6)(var1);
                                        SaveGenerator(address = 136);
                                    case 134:
                                        return var1;
                                    case 136:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun75766_ip = 194;
                                            continue _fun75766
                                        }
                                    case 142:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var2 = var2[var5];
                                        var2 = var3.bind(var4)(var2);
                                        var3 = var2.NativeDocumentPicker;
                                        var2 = var3.writeDocuments;
                                        var2 = var2.bind(var3)(var1);
                                        SaveGenerator(address = 182);
                                    case 180:
                                        return var2;
                                    case 182:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun75766_ip = 191;
                                            continue _fun75766
                                        }
                                    case 188:
                                        return var2;
                                    case 191:
                                        return var2;
                                    case 194:
                                        return var1;
                                    case 197:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 45);
                    case 43:
                        return var1;
                    case 45:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun75764_ip = 68;
                            continue _fun75764
                        }
                    case 51:
                        var3 = var1.map;
                        var2 = _closure1_slot4;
                        var2 = var3.bind(var1)(var2);
                        return var2;
                    case 68:
                        return var1;
                    case 71:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot3 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.uri;
        var0.uri = var2;
        var2 = var1.name;
        var0.name = var2;
        var1 = var1.error;
        var0.error = var1;
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
    var6 = var5[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Platform;
    var1 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.saveDocuments = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 9602]);