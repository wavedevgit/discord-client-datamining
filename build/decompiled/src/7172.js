// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun58537: for (var _fun58537_ip = 0;;) switch (_fun58537_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58537_ip = 253;
                            continue _fun58537
                        }
                    case 13:
                        var2 = global;
                        var5 = var2.fetch;
                        var7 = var2.Object;
                        var6 = var7.assign;
                        var3 = {};
                        var1 = null;
                        var8 = var1 == var9;
                        var4 = undefined;
                        var10 = undefined;
                        if (var8) {
                            _fun58537_ip = 53;
                            continue _fun58537
                        }
                    case 47:
                        var10 = var9.method;
                    case 53:
                        var11 = var1 != var10;
                        var8 = 'GET';
                        if (!var11) {
                            _fun58537_ip = 69;
                            continue _fun58537
                        }
                    case 66:
                        var8 = var10;
                    case 69:
                        var3.method = var8;
                        var8 = {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        };
                        var3.headers = var8;
                        if (!(var1 != var9)) {
                            _fun58537_ip = 105;
                            continue _fun58537
                        }
                    case 97:
                        var1 = var9.body;
                        if (var1) {
                            _fun58537_ip = 109;
                            continue _fun58537
                        }
                    case 105:
                        var1 = {};
                        _fun58537_ip = 140;
                        continue _fun58537;
                    case 109:
                        var8 = {};
                        var11 = var2.JSON;
                        var10 = var11.stringify;
                        var9 = var9.body;
                        var9 = var10.bind(var11)(var9);
                        var8.body = var9;
                        var1 = var8;
                    case 140:
                        var3 = var6.bind(var7)(var3, var1);
                        var1 = arg0;
                        var1 = var5.bind(var4)(var1, var3);
                        SaveGenerator(address = 159);
                    case 157:
                        return var1;
                    case 159:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58537_ip = 250;
                            continue _fun58537
                        }
                    case 165:
                        var3 = var1.ok;
                        if (var3) {
                            _fun58537_ip = 237;
                            continue _fun58537
                        }
                    case 174:
                        var5 = var2.Object;
                        var4 = var5.assign;
                        var6 = var2.Error;
                        var13 = var1.statusText;
                        var3 = var6.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var14 = var3;
                        var2 = new var14[var6](var13, var12);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var2 = {};
                        var6 = var1.status;
                        var2.statusCode = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        throw var2;
                    case 237:
                        var2 = var1.json;
                        var2 = var2.bind(var1)();
                        return var2;
                    case 250:
                        return var1;
                    case 253:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function arg0, arg1() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.enhancedFetch = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5]);