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
                _fun49104: for (var _fun49104_ip = 0;;) switch (_fun49104_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49104_ip = 225;
                            continue _fun49104
                        }
                    case 13:
                        var1 = null;
                        if (!var4) {
                            _fun49104_ip = 157;
                            continue _fun49104
                        }
                    case 21:
                        var3 = var4.startsWith;
                        var2 = 'data:image/svg+xml;utf8';
                        var2 = var3.bind(var4)(var2);
                        if (var2) {
                            _fun49104_ip = 93;
                            continue _fun49104
                        }
                    case 41:
                        var3 = var4.startsWith;
                        var2 = 'data:image/svg+xml;base64';
                        var2 = var3.bind(var4)(var2);
                        if (var2) {
                            _fun49104_ip = 77;
                            continue _fun49104
                        }
                    case 61:
                        var3 = function arg0() {
                            var0 = undefined;
                            var3 = _closure1_slot5;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var2 = undefined;
                        var3 = var3.bind(var2)(var4);
                        _fun49104_ip = 91;
                        continue _fun49104;
                    case 77:
                        var5 = _closure1_slot3;
                        var2 = undefined;
                        var3 = var5.bind(var2)(var4);
                    case 91:
                        _fun49104_ip = 154;
                        continue _fun49104;
                    case 93:
                        var2 = var4;
                    case 96: // try_start_0
                        var4 = global;
                        var6 = var4.decodeURIComponent;
                        var5 = var2;
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.split;
                        var6 = ',';
                        var7 = var4.bind(var5)(var6);
                        var5 = var7.slice;
                        var4 = 1;
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.join;
                        var4 = var4.bind(var5)(var6);
                    case 151: // try_end0
                        var3 = var4;
                    case 154:
                        var1 = var3;
                    case 157:
                        return var1;
                    case 160: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var1 = global;
                        var3 = var1.Error;
                        var5 = var2;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var2 = 'Decoding ';
                        var1 = ' failed with error: ';
                        var10 = var4.bind(var2)(var5, var1, var6);
                        var2 = var3.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var3
                            }
                        });
                        var11 = var2;
                        var1 = new var11[var3](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 225:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun49108: for (var _fun49108_ip = 0;;) switch (_fun49108_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun49108_ip = 172;
                            continue _fun49108
                        }
                    case 13:
                        var2 = global;
                        var3 = var2.fetch;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var7);
                        SaveGenerator(address = 32);
                    case 30:
                        return var1;
                    case 32:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49108_ip = 169;
                            continue _fun49108
                        }
                    case 41:
                        var3 = var1.ok;
                        if (var3) {
                            _fun49108_ip = 144;
                            continue _fun49108
                        }
                    case 50:
                        var4 = var1.status;
                        var3 = 0;
                        if (!(var3 === var4)) {
                            _fun49108_ip = 81;
                            continue _fun49108
                        }
                    case 61:
                        var4 = var7.startsWith;
                        var3 = 'file://';
                        var3 = var4.bind(var7)(var3);
                        if (var3) {
                            _fun49108_ip = 144;
                            continue _fun49108
                        }
                    case 81:
                        var4 = var2.Error;
                        var6 = var1.status;
                        var2 = var2.HermesInternal;
                        var5 = var2.concat;
                        var3 = 'Fetching ';
                        var2 = ' failed with status ';
                        var10 = var5.bind(var3)(var7, var2, var6);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var11 = var3;
                        var2 = new var11[var4](var10, var9);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 144:
                        var2 = var1.text;
                        var2 = var2.bind(var1)();
                        SaveGenerator(address = 157);
                    case 155:
                        return var2;
                    case 157:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun49108_ip = 166;
                            continue _fun49108
                        }
                    case 163:
                        return var2;
                    case 166:
                        return var2;
                    case 169:
                        return var1;
                    case 172:
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
    var3 = function arg0() {
        var0 = global;
        var1 = var0.decodeURIComponent;
        var4 = undefined;
        var0 = arg0;
        var2 = var1.bind(var4)(var0);
        var1 = var2.split;
        var0 = ';';
        var0 = var1.bind(var2)(var0);
        var5 = 1;
        var1 = var0[var5];
        var0 = var1.split;
        var2 = ',';
        var1 = var0.bind(var1)(var2);
        var0 = 0;
        var3 = var1[var0];
        var0 = var1.slice;
        var1 = var0.bind(var1)(var5);
        var0 = var1.join;
        var2 = var0.bind(var1)(var2);
        var1 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 2;
        var0 = var5[var0];
        var0 = var1.bind(var4)(var0);
        var1 = var0.Buffer;
        var0 = var1.from;
        var2 = var0.bind(var1)(var2, var3);
        var1 = var2.toString;
        var0 = 'utf-8';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot3 = var3;
    var1 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 488]);