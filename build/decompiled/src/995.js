// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = function() { // Original name: _symbolicateStackTrace, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun10190: for (var _fun10190_ip = 0;;) switch (_fun10190_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun10190_ip = 261;
                            continue _fun10190
                        }
                    case 10:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 1;
                        var1 = var4[var1];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.default;
                        var1 = var1.bind(var3)();
                        var3 = var1.bundleLoadedFromServer;
                        if (var3) {
                            _fun10190_ip = 89;
                            continue _fun10190
                        }
                    case 53:
                        var3 = global;
                        var6 = var3.Error;
                        var3 = var6.prototype;
                        var5 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var10 = 'Bundle was not loaded from Metro.';
                        var11 = var5;
                        var3 = new var11[var6](var10, var9);
                        var3 = var3 instanceof Object ? var3 : var5;
                        throw var3;
                    case 89:
                        var3 = _closure1_slot0;
                        var3 = var3.fetch;
                        var5 = null;
                        if (!(var5 == var3)) {
                            _fun10190_ip = 131;
                            continue _fun10190
                        }
                    case 105:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 2;
                        var2 = var6[var2];
                        var2 = var5.bind(var4)(var2);
                        var3 = var2.fetch;
                    case 131:
                        var2 = var1.url;
                        var1 = 'symbolicate';
                        var2 = var2 + var1;
                        var1 = {};
                        var5 = 'POST';
                        var1.method = var5;
                        var5 = {};
                        var6 = 'application/json';
                        var5['Content-Type'] = var6;
                        var1.headers = var5;
                        var5 = global;
                        var7 = var5.JSON;
                        var6 = var7.stringify;
                        var5 = {};
                        var8 = arg0;
                        var5.stack = var8;
                        var8 = arg1;
                        var5.extraData = var8;
                        var5 = var6.bind(var7)(var5);
                        var1.body = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        SaveGenerator(address = 226);
                    case 224:
                        return var1;
                    case 226:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun10190_ip = 258;
                            continue _fun10190
                        }
                    case 232:
                        var2 = var1.json;
                        var2 = var2.bind(var1)();
                        SaveGenerator(address = 246);
                    case 244:
                        return var2;
                    case 246:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun10190_ip = 255;
                            continue _fun10190
                        }
                    case 252:
                        return var2;
                    case 255:
                        return var2;
                    case 258:
                        return var1;
                    case 261:
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
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var1 = function(arg0, arg1) { // Original name: symbolicateStackTrace, environment: var1
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 996, 215]);