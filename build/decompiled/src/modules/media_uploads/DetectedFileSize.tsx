// modules/media_uploads/DetectedFileSize.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot0;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun37736: for (var _fun37736_ip = 0;;) switch (_fun37736_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun37736_ip = 89;
                            continue _fun37736
                        }
                    case 12:
                        var _closure4_slot0 = var1;
                        var4 = var1.size;
                        var2 = 0;
                        if (!(!(var4 > var2))) {
                            _fun37736_ip = 81;
                            continue _fun37736
                        }
                    case 27: // try_start_0
                        var4 = global;
                        var5 = var4.Promise;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var6 = function(arg0, arg1) { // Environment: var3
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var0 = global;
                            var2 = var0.FileReader;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var8 = var3;
                            var2 = new var8[var2](var7);
                            var3 = var2 instanceof Object ? var2 : var3;
                            var5 = var0.setTimeout;
                            var0 = undefined;
                            var4 = function() { // Environment: var1
                                var2 = _closure5_slot1;
                                var0 = global;
                                var3 = var0.Error;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = 'File read timeout';
                                var5 = var1;
                                var0 = new var5[var3](var4, var3);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = 10000;
                            var2 = var5.bind(var0)(var4, var2);
                            var _closure5_slot2 = var2;
                            var2 = function(arg0) { // Environment: var1
                                _fun37739: for (var _fun37739_ip = 0;;) switch (_fun37739_ip) {
                                    case 0:
                                        var3 = global;
                                        var4 = var3.clearTimeout;
                                        var1 = _closure5_slot2;
                                        var0 = undefined;
                                        var1 = var4.bind(var0)(var1);
                                        var1 = arg0;
                                        var4 = var1.target;
                                        var1 = null;
                                        var5 = var1 == var4;
                                        var1 = undefined;
                                        if (var5) {
                                            _fun37739_ip = 48;
                                            continue _fun37739
                                        }
                                    case 42:
                                        var1 = var4.result;
                                    case 48:
                                        var4 = var3.ArrayBuffer;
                                        var4 = var1 instanceof var4;
                                        if (var4) {
                                            _fun37739_ip = 104;
                                            continue _fun37739
                                        }
                                    case 61:
                                        var4 = _closure5_slot1;
                                        var6 = var3.Error;
                                        var3 = var6.prototype;
                                        var5 = Object.create(var3, {
                                            constructor: {
                                                value: var6
                                            }
                                        });
                                        var7 = 'Unexpected FileReader result type';
                                        var8 = var5;
                                        var3 = new var8[var6](var7, var6);
                                        var3 = var3 instanceof Object ? var3 : var5;
                                        var3 = var4.bind(var0)(var3);
                                        _fun37739_ip = 119;
                                        continue _fun37739;
                                    case 104:
                                        var2 = _closure5_slot0;
                                        var1 = var1.byteLength;
                                        var1 = var2.bind(var0)(var1);
                                    case 119:
                                        return var0;
                                }
                            };
                            var3.onload = var2;
                            var1 = function() { // Environment: var1
                                var1 = global;
                                var4 = var1.clearTimeout;
                                var3 = _closure5_slot2;
                                var0 = undefined;
                                var3 = var4.bind(var0)(var3);
                                var2 = _closure5_slot1;
                                var4 = var1.Error;
                                var1 = var4.prototype;
                                var3 = Object.create(var1, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var5 = 'Could not read file';
                                var6 = var3;
                                var1 = new var6[var4](var5, var4);
                                var1 = var1 instanceof Object ? var1 : var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var3.onerror = var1;
                            var2 = var3.readAsArrayBuffer;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var7 = var4;
                        var3 = new var7[var5](var6, var5);
                        var3 = var3 instanceof Object ? var3 : var4;
                        SaveGenerator(address = 64);
                    case 62:
                        return var3;
                    case 64:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun37736_ip = 73;
                            continue _fun37736
                        }
                    case 70: // try_end0
                        return var3;
                    case 73:
                        return var3;
                    case 76: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        return var2;
                    case 81:
                        var1 = var1.size;
                        return var1;
                    case 89:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot1 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_uploads/DetectedFileSize.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot1;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getDetectedFileSize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 2]);