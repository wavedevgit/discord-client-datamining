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
    var0 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = new Array(0);
        var _closure2_slot1 = var0;
        var0 = {};
        var _closure2_slot2 = var0;
        var0 = {};
        var2 = function arg0, arg1() {
            _fun59074: for (var _fun59074_ip = 0;;) switch (_fun59074_ip) {
                case 0:
                    var3 = arg0;
                    var4 = this;
                    var0 = _closure2_slot1;
                    var5 = var0.length;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    if (!(var5 >= var2)) {
                        _fun59074_ip = 70;
                        continue _fun59074
                    }
                case 27:
                    var5 = _closure2_slot1;
                    var2 = var5.shift;
                    var5 = var2.bind(var5)();
                    if (!(var0 !== var5)) {
                        _fun59074_ip = 53;
                        continue _fun59074
                    }
                case 45:
                    var2 = _closure2_slot2;
                    var2 = delete var2[var5];
                case 53:
                    var2 = _closure2_slot1;
                    var5 = var2.length;
                    var2 = _closure2_slot0;
                    if (var5 >= var2) {
                        _fun59074_ip = 27;
                        continue _fun59074
                    }
                case 70:
                    var2 = _closure2_slot2;
                    var2 = var2[var3];
                    if (!var2) {
                        _fun59074_ip = 91;
                        continue _fun59074
                    }
                case 81:
                    var2 = var4.delete;
                    var2 = var2.bind(var4)(var3);
                case 91:
                    var4 = _closure2_slot1;
                    var2 = var4.push;
                    var2 = var2.bind(var4)(var3);
                    var2 = _closure2_slot2;
                    var1 = arg1;
                    var2[var3] = var1;
                    return var0;
            }
        };
        var0.add = var2;
        var2 = function() {
            var0 = {};
            _closure2_slot2 = var0;
            var0 = new Array(0);
            _closure2_slot1 = var0;
            var0 = undefined;
            return var0;
        };
        var0.clear = var2;
        var2 = function arg0() {
            var1 = _closure2_slot2;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.get = var2;
        var2 = function() {
            var0 = _closure2_slot1;
            var0 = var0.length;
            return var0;
        };
        var0.size = var2;
        var1 = function arg0() {
            _fun59078: for (var _fun59078_ip = 0;;) switch (_fun59078_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure2_slot2;
                    var1 = var1[var4];
                    if (var1) {
                        _fun59078_ip = 21;
                        continue _fun59078
                    }
                case 17:
                    var1 = false;
                    return var1;
                case 21:
                    var1 = _closure2_slot2;
                    var1 = delete var1[var4];
                    var1 = _closure2_slot1;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var2 < var1;
                    if (!var1) {
                        _fun59078_ip = 99;
                        continue _fun59078
                    }
                case 47:
                    var1 = _closure2_slot1;
                    var1 = var1[var2];
                    var3 = var2;
                    if (!(var1 !== var4)) {
                        _fun59078_ip = 80;
                        continue _fun59078
                    }
                case 62:
                    var2 = var3 + 1;
                    var1 = _closure2_slot1;
                    var1 = var1.length;
                    if (var2 < var1) {
                        _fun59078_ip = 47;
                        continue _fun59078
                    }
                case 78:
                    _fun59078_ip = 99;
                    continue _fun59078;
                case 80:
                    var2 = _closure2_slot1;
                    var1 = var2.splice;
                    var0 = 1;
                    var0 = var1.bind(var2)(var3, var0);
                case 99:
                    var0 = true;
                    return var0;
            }
        };
        var0.delete = var1;
        return var0;
    };
    var1.makeFifoCache = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);