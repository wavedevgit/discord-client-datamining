// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        var0 = global;
        var0 = var0.Set;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var9 = var1;
        var0 = new var9[var0](var8);
        var0 = var0 instanceof Object ? var0 : var1;
        var _closure2_slot1 = var0;
        var5 = function arg0, arg1() {
            _fun7101: for (var _fun7101_ip = 0;;) switch (_fun7101_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var2 = 'function';
                    var1 = typeof var3;
                    var5 = var3;
                    if (!(var2 === var1)) {
                        _fun7101_ip = 36;
                        continue _fun7101
                    }
                case 22:
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                case 36:
                    var3 = global;
                    var7 = var3.Object;
                    var6 = var7.is;
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var7)(var5, var2);
                    var7 = var5;
                    if (var2) {
                        _fun7101_ip = 157;
                        continue _fun7101
                    }
                case 69:
                    var2 = _closure2_slot0;
                    var _closure3_slot0 = var2;
                    var5 = null;
                    if (!(var5 == var4)) {
                        _fun7101_ip = 104;
                        continue _fun7101
                    }
                case 83:
                    var6 = 'object';
                    var2 = typeof var7;
                    var2 = var6 !== var2;
                    if (var2) {
                        _fun7101_ip = 101;
                        continue _fun7101
                    }
                case 97:
                    var2 = var5 === var7;
                case 101:
                    var4 = var2;
                case 104:
                    var2 = var7;
                    if (var4) {
                        _fun7101_ip = 134;
                        continue _fun7101
                    }
                case 110:
                    var6 = var3.Object;
                    var5 = var6.assign;
                    var4 = _closure2_slot0;
                    var3 = {};
                    var2 = var5.bind(var6)(var3, var4, var7);
                case 134:
                    _closure2_slot0 = var2;
                    var2 = _closure2_slot1;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure2_slot0;
                        var2 = _closure3_slot0;
                        var1 = arg0;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var3, var2);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 157:
                    var0 = undefined;
                    return var0;
            }
        };
        var4 = function() {
            var0 = _closure2_slot0;
            return var0;
        };
        var0 = {};
        var0.setState = var5;
        var0.getState = var4;
        var1 = function() {
            var0 = _closure2_slot2;
            return var0;
        };
        var0.getInitialState = var1;
        var1 = function arg0() {
            var3 = arg0;
            var _closure3_slot0 = var3;
            var2 = _closure2_slot1;
            var1 = var2.add;
            var1 = var1.bind(var2)(var3);
            var0 = function() { // Environment: var0
                var2 = _closure2_slot1;
                var1 = var2.delete;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            return var0;
        };
        var0.subscribe = var1;
        var3 = arg0;
        var1 = undefined;
        var1 = var3.bind(var1)(var5, var4, var0);
        var _closure2_slot0 = var1;
        var _closure2_slot2 = var1;
        return var0;
    };
    var _closure1_slot0 = var1;
    var1 = function arg0() {
        _fun7107: for (var _fun7107_ip = 0;;) switch (_fun7107_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot0;
                if (var3) {
                    _fun7107_ip = 18;
                    continue _fun7107
                }
            case 13:
                var0 = var2;
                _fun7107_ip = 25;
                continue _fun7107;
            case 18:
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 25:
                return var0;
        }
    };
    var0 = arg5;
    var0.createStore = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);