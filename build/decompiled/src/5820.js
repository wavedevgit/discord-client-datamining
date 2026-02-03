// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var0 = function() { // Environment: var0
            _fun51296: for (var _fun51296_ip = 0;;) switch (_fun51296_ip) {
                case 0:
                    var0 = undefined;
                    var5 = undefined;
                    var1 = _closure2_slot2;
                    if (var1) {
                        _fun51296_ip = 117;
                        continue _fun51296
                    }
                case 14:
                    var4 = arguments.length;
                    var1 = global;
                    var3 = var1.Array;
                    var6 = var3.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var3
                        }
                    });
                    var10 = var6;
                    var9 = var4;
                    var3 = new var10[var3](var9, var8);
                    var6 = var3 instanceof Object ? var3 : var6;
                    var3 = 0;
                    var7 = var3 < var4;
                    if (!var7) {
                        _fun51296_ip = 72;
                        continue _fun51296
                    }
                case 57:
                    var7 = arguments[var3];
                    var6[var3] = var7;
                    var3 = var3 + 1;
                    if (var3 < var4) {
                        _fun51296_ip = 57;
                        continue _fun51296
                    }
                case 72:
                    var5 = _closure2_slot0;
                    var4 = var5.apply;
                    var3 = this;
                    var3 = var4.bind(var5)(var3, var6);
                    var4 = var1.setTimeout;
                    var3 = _closure2_slot1;
                    var1 = function() { // Environment: var1
                        var0 = undefined;
                        _closure2_slot2 = var0;
                        return var0;
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var _closure2_slot2 = var1;
                case 117:
                    return var0;
            }
        };
        return var0;
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);