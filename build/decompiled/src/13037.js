// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var0 = var0.WeakMap;
    var5 = var0.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var0
        }
    });
    var12 = var5;
    var0 = new var12[var0](var11);
    var0 = var0 instanceof Object ? var0 : var5;
    var _closure1_slot3 = var0;
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        var0 = {};
        var2 = 'FunctionToString';
        var0.name = var2;
        var2 = function() {
            _fun100117: for (var _fun100117_ip = 0;;) switch (_fun100117_ip) {
                case 0:
                    var0 = global;
                    var1 = var0.Function;
                    var1 = var1.prototype;
                    var2 = var1.toString;
                    var _closure1_slot2 = var2;
                case 25: // try_start_0
                    var0 = var0.Function;
                    var1 = var0.prototype;
                    var0 = function() { // Environment: var0
                        _fun100118: for (var _fun100118_ip = 0;;) switch (_fun100118_ip) {
                            case 0:
                                var6 = this;
                                var2 = undefined;
                                var5 = undefined;
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot1;
                                var4 = 0;
                                var1 = var10[var4];
                                var3 = var9.bind(var2)(var1);
                                var1 = var3.getOriginalFunction;
                                var1 = var1.bind(var3)(var6);
                                var8 = _closure1_slot3;
                                var7 = var8.has;
                                var3 = 1;
                                var3 = var10[var3];
                                var9 = var9.bind(var2)(var3);
                                var3 = var9.getClient;
                                var3 = var3.bind(var9)();
                                var7 = var7.bind(var8)(var3);
                                var3 = var6;
                                if (!var7) {
                                    _fun100118_ip = 91;
                                    continue _fun100118
                                }
                            case 81:
                                var3 = var6;
                                if (!(var2 !== var1)) {
                                    _fun100118_ip = 91;
                                    continue _fun100118
                                }
                            case 88:
                                var3 = var1;
                            case 91:
                                var1 = arguments.length;
                                var2 = global;
                                var2 = var2.Array;
                                var6 = var2.prototype;
                                var6 = Object.create(var6, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var13 = var6;
                                var12 = var1;
                                var2 = new var13[var2](var12, var11);
                                var2 = var2 instanceof Object ? var2 : var6;
                                var6 = var4 < var1;
                                var4 = 0;
                                if (!var6) {
                                    _fun100118_ip = 149;
                                    continue _fun100118
                                }
                            case 134:
                                var6 = arguments[var4];
                                var2[var4] = var6;
                                var4 = var4 + 1;
                                if (var4 < var1) {
                                    _fun100118_ip = 134;
                                    continue _fun100118
                                }
                            case 149:
                                var1 = _closure1_slot2;
                                var0 = var1.apply;
                                var0 = var0.bind(var1)(var3, var2);
                                return var0;
                        }
                    };
                    var1.toString = var0;
                case 51: // try_end0
                    _fun100117_ip = 55;
                    continue _fun100117;
                case 53: // catch_target0
                    CatchBlockStart(arg_register = 0);
                case 55:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.setupOnce = var2;
        var1 = function arg0() {
            var3 = _closure1_slot3;
            var2 = var3.set;
            var1 = arg0;
            var0 = true;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.setup = var1;
        return var0;
    };
    var1 = var3.bind(var4)(var1);
    var2.functionToStringIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12935, 13000, 13024]);