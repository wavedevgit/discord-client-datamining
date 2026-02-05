// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var0 = 0;
    var2 = var4[var0];
    var0 = undefined;
    var2 = var3.bind(var0)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var4[var2];
    var2 = var3.bind(var0)(var2);
    var _closure1_slot1 = var2;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 1000;
            var2.max = var1;
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.map = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'get';
        var0.key = var1;
        var1 = function arg0() {
            _fun94203: for (var _fun94203_ip = 0;;) switch (_fun94203_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var1 = var2.map;
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var4);
                    var0 = undefined;
                    if (!(var0 !== var1)) {
                        _fun94203_ip = 61;
                        continue _fun94203
                    }
                case 27:
                    var5 = var2.map;
                    var3 = var5.delete;
                    var3 = var3.bind(var5)(var4);
                    var3 = var2.map;
                    var2 = var3.set;
                    var2 = var2.bind(var3)(var4, var1);
                    var0 = var1;
                case 61:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'delete';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0.map;
            var1 = var2.delete;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'set';
        var0.key = var5;
        var4 = function arg0, arg1() {
            _fun94205: for (var _fun94205_ip = 0;;) switch (_fun94205_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = var0.delete;
                    var1 = var1.bind(var0)(var4);
                    if (var1) {
                        _fun94205_ip = 101;
                        continue _fun94205
                    }
                case 22:
                    var1 = undefined;
                    if (!(var1 !== var3)) {
                        _fun94205_ip = 101;
                        continue _fun94205
                    }
                case 28:
                    var1 = var0.map;
                    var2 = var1.size;
                    var1 = var0.max;
                    if (!(var2 >= var1)) {
                        _fun94205_ip = 85;
                        continue _fun94205
                    }
                case 47:
                    var2 = var0.map;
                    var1 = var2.keys;
                    var2 = var1.bind(var2)();
                    var1 = var2.next;
                    var1 = var1.bind(var2)();
                    var2 = var1.value;
                    var1 = var0.delete;
                    var1 = var1.bind(var0)(var2);
                case 85:
                    var2 = var0.map;
                    var1 = var2.set;
                    var1 = var1.bind(var2)(var4, var3);
                case 101:
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2 = var1.bind(var0)();
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7]);