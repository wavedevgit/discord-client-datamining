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
    var1 = function() {
        _fun12832: for (var _fun12832_ip = 0;;) switch (_fun12832_ip) {
            case 0:
                var2 = undefined;
                var6 = undefined;
                var1 = global;
                var3 = var1.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var9 = var4;
                var3 = new var9[var3](var8);
                var3 = var3 instanceof Object ? var3 : var4;
                var _closure2_slot0 = var3;
                var4 = function arg0() {
                    _fun12833: for (var _fun12833_ip = 0;;) switch (_fun12833_ip) {
                        case 0:
                            var0 = arg0;
                            var5 = var0.reason;
                            var4 = var0.category;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var3 = var1.concat;
                            var2 = '';
                            var1 = ':';
                            var4 = var3.bind(var2)(var5, var1, var4);
                            var3 = _closure2_slot0;
                            var1 = var3.get;
                            var1 = var1.bind(var3)(var4);
                            if (var1) {
                                _fun12833_ip = 80;
                                continue _fun12833
                            }
                        case 63:
                            var3 = _closure2_slot0;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var4, var0);
                            _fun12833_ip = 102;
                            continue _fun12833;
                        case 80:
                            var2 = var1.quantity;
                            var0 = var0.quantity;
                            var0 = var2 + var0;
                            var1.quantity = var0;
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot1 = var4;
                var5 = arguments.length;
                var1 = var1.Array;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var4;
                var8 = var5;
                var1 = new var9[var1](var8, var7);
                var4 = var1 instanceof Object ? var1 : var4;
                var1 = 0;
                var7 = var1 < var5;
                if (!var7) {
                    _fun12832_ip = 103;
                    continue _fun12832
                }
            case 88:
                var7 = arguments[var1];
                var4[var1] = var7;
                var1 = var1 + 1;
                if (var1 < var5) {
                    _fun12832_ip = 88;
                    continue _fun12832
                }
            case 103:
                var1 = var4.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = arg0;
                    var1 = var2.forEach;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var4)(var0);
                var1 = _closure1_slot0;
                var0 = var3.values;
                var0 = var0.bind(var3)();
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.mergeOutcomes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65]);