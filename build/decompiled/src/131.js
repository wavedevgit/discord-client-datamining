// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function*(arg0) { // Original name: createValueIterator, environment: var0
        var0 = function*(arg0) { // Original name: ?anon_0_createValueIterator, environment: var0
            _fun2159: for (var _fun2159_ip = 0;;) switch (_fun2159_ip) {
                case 0:
                    StartGenerator();
                    var4 = arg0;
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun2159_ip = 58;
                        continue _fun2159
                    }
                case 10:
                    var1 = var4.length;
                    var3 = 0;
                    var1 = var3 < var1;
                    if (!var1) {
                        _fun2159_ip = 50;
                        continue _fun2159
                    }
                case 24:
                    var1 = var4[var3];
                    SaveGenerator(address = 32);
                case 30:
                    return var1;
                case 32:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                    if (var2) {
                        _fun2159_ip = 55;
                        continue _fun2159
                    }
                case 38:
                    var3 = var3 + 1;
                    var2 = var4.length;
                    if (var3 < var2) {
                        _fun2159_ip = 24;
                        continue _fun2159
                    }
                case 50:
                    var2 = undefined;
                    return var2;
                case 55:
                    return var1;
                case 58:
                    return var0;
            }
        };
        return var0;
    };
    var1.createValueIterator = var2;
    var2 = function*(arg0) { // Original name: createKeyIterator, environment: var0
        var0 = function*(arg0) { // Original name: ?anon_0_createKeyIterator, environment: var0
            _fun2161: for (var _fun2161_ip = 0;;) switch (_fun2161_ip) {
                case 0:
                    StartGenerator();
                    var4 = arg0;
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun2161_ip = 54;
                        continue _fun2161
                    }
                case 10:
                    var1 = var4.length;
                    var3 = 0;
                    var1 = var3 < var1;
                    if (!var1) {
                        _fun2161_ip = 46;
                        continue _fun2161
                    }
                case 24:
                    SaveGenerator(address = 28);
                case 26:
                    return var3;
                case 28:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                    if (var2) {
                        _fun2161_ip = 51;
                        continue _fun2161
                    }
                case 34:
                    var3 = var3 + 1;
                    var2 = var4.length;
                    if (var3 < var2) {
                        _fun2161_ip = 24;
                        continue _fun2161
                    }
                case 46:
                    var2 = undefined;
                    return var2;
                case 51:
                    return var1;
                case 54:
                    return var0;
            }
        };
        return var0;
    };
    var1.createKeyIterator = var2;
    var0 = function*(arg0) { // Original name: createEntriesIterator, environment: var0
        var0 = function*(arg0) { // Original name: ?anon_0_createEntriesIterator, environment: var0
            _fun2163: for (var _fun2163_ip = 0;;) switch (_fun2163_ip) {
                case 0:
                    StartGenerator();
                    var4 = arg0;
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun2163_ip = 70;
                        continue _fun2163
                    }
                case 10:
                    var1 = var4.length;
                    var3 = 0;
                    var1 = var3 < var1;
                    if (!var1) {
                        _fun2163_ip = 62;
                        continue _fun2163
                    }
                case 24:
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = var4[var3];
                    var1[1] = var2;
                    SaveGenerator(address = 44);
                case 42:
                    return var1;
                case 44:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                    if (var2) {
                        _fun2163_ip = 67;
                        continue _fun2163
                    }
                case 50:
                    var3 = var3 + 1;
                    var2 = var4.length;
                    if (var3 < var2) {
                        _fun2163_ip = 24;
                        continue _fun2163
                    }
                case 62:
                    var2 = undefined;
                    return var2;
                case 67:
                    return var1;
                case 70:
                    return var0;
            }
        };
        return var0;
    };
    var1.createEntriesIterator = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);