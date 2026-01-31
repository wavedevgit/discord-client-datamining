// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var _closure1_slot0 = var2;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = 1;
    var _closure1_slot1 = var3;
    var2 = var2.Set;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var10 = var3;
    var2 = new var10[var2](var9);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot2 = var2;
    var2 = function arg0() {
        _fun2572: for (var _fun2572_ip = 0;;) switch (_fun2572_ip) {
            case 0:
                var1 = arg0;
                var3 = undefined;
                var _closure2_slot0 = var1;
                var7 = arguments.length;
                var0 = global;
                var8 = var0.Array;
                var4 = 1;
                var6 = var7 > var4;
                var5 = 0;
                if (!var6) {
                    _fun2572_ip = 38;
                    continue _fun2572
                }
            case 34:
                var5 = var7 - var4;
            case 38:
                var6 = var8.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = var6;
                var10 = var5;
                var5 = new var11[var8](var10, var9);
                var6 = var5 instanceof Object ? var5 : var6;
                var _closure2_slot1 = var6;
                var8 = var4 < var7;
                var5 = var4;
                if (!var8) {
                    _fun2572_ip = 94;
                    continue _fun2572
                }
            case 75:
                var9 = var5 - var4;
                var8 = arguments[var5];
                var6[var9] = var8;
                var5 = var5 + 1;
                if (var5 < var7) {
                    _fun2572_ip = 75;
                    continue _fun2572
                }
            case 94:
                var3 = arguments.length;
                if (!(!(var3 < var4))) {
                    _fun2572_ip = 220;
                    continue _fun2572
                }
            case 101:
                var3 = 'function';
                var1 = typeof var1;
                if (!(var3 === var1)) {
                    _fun2572_ip = 186;
                    continue _fun2572
                }
            case 112:
                var1 = _closure1_slot1;
                var1 = parseFloat(var1);
                var4 = var1 + 1;
                _closure1_slot1 = var4;
                var _closure2_slot2 = var1;
                var5 = _closure1_slot2;
                var4 = var5.has;
                var4 = var4.bind(var5)(var1);
                if (!var4) {
                    _fun2572_ip = 164;
                    continue _fun2572
                }
            case 150:
                var5 = _closure1_slot2;
                var4 = var5.delete;
                var4 = var4.bind(var5)(var1);
            case 164:
                var4 = _closure1_slot0;
                var3 = var4.queueMicrotask;
                var2 = function() { // Environment: var2
                    _fun2573: for (var _fun2573_ip = 0;;) switch (_fun2573_ip) {
                        case 0:
                            var4 = _closure1_slot2;
                            var3 = var4.has;
                            var2 = _closure2_slot2;
                            var2 = var3.bind(var4)(var2);
                            if (var2) {
                                _fun2573_ip = 50;
                                continue _fun2573
                            }
                        case 27:
                            var5 = _closure2_slot0;
                            var4 = var5.apply;
                            var3 = _closure2_slot1;
                            var2 = undefined;
                            var2 = var4.bind(var5)(var2, var3);
                            _fun2573_ip = 68;
                            continue _fun2573;
                        case 50:
                            var2 = _closure1_slot2;
                            var1 = var2.delete;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                        case 68:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            case 186:
                var3 = var0.TypeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var10 = 'The first argument to setImmediate must be a function.';
                var11 = var2;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 220:
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'setImmediate must be called with at least one argument (a function to call)';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1.setImmediate = var2;
    var0 = function arg0() {
        var2 = _closure1_slot2;
        var1 = var2.add;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.clearImmediate = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);