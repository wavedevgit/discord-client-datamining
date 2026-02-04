// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var1 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var1;
    var2 = function arg0, arg1() {
        _fun8264: for (var _fun8264_ip = 0;;) switch (_fun8264_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var0;
                var2 = 'function';
                var3 = typeof var3;
                if (!(var2 === var3)) {
                    _fun8264_ip = 114;
                    continue _fun8264
                }
            case 27:
                var3 = null;
                if (!(var3 != var0)) {
                    _fun8264_ip = 40;
                    continue _fun8264
                }
            case 33:
                var0 = typeof var0;
                if (!(var2 === var0)) {
                    _fun8264_ip = 114;
                    continue _fun8264
                }
            case 40:
                var0 = function() {
                    _fun8265: for (var _fun8265_ip = 0;;) switch (_fun8265_ip) {
                        case 0:
                            var6 = this;
                            var0 = undefined;
                            var1 = _closure2_slot1;
                            if (var1) {
                                _fun8265_ip = 22;
                                continue _fun8265
                            }
                        case 14:
                            var1 = 0;
                            var1 = arguments[var1];
                            _fun8265_ip = 42;
                            continue _fun8265;
                        case 22:
                            var5 = _closure2_slot1;
                            var4 = var5.apply;
                            var0 = arguments;
                            var2 = var0;
                            var1 = var4.bind(var5)(var6, var2);
                        case 42:
                            var2 = _closure2_slot2;
                            var2 = var2.cache;
                            var4 = var2.has;
                            var4 = var4.bind(var2)(var1);
                            if (var4) {
                                _fun8265_ip = 111;
                                continue _fun8265
                            }
                        case 65:
                            var5 = _closure2_slot0;
                            var4 = var5.apply;
                            var0 = arguments;
                            var0 = var4.bind(var5)(var6, var0);
                            var4 = _closure2_slot2;
                            var3 = var2.set;
                            var3 = var3.bind(var2)(var1, var0);
                            if (var3) {
                                _fun8265_ip = 103;
                                continue _fun8265
                            }
                        case 100:
                            var3 = var2;
                        case 103:
                            var4.cache = var3;
                            return var0;
                        case 111:
                            var0 = var2.get;
                            var0 = var0.bind(var2)(var1);
                            return var0;
                    }
                };
                var _closure2_slot2 = var0;
                var1 = _closure1_slot2;
                var1 = var1.Cache;
                if (var1) {
                    _fun8264_ip = 86;
                    continue _fun8264
                }
            case 65:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
            case 86:
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var6 = var2;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var2;
                var0.cache = var1;
                return var0;
            case 114:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'Expected a function';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot2 = var2;
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var2.Cache = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [692]);