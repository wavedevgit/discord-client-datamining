// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun3069: for (var _fun3069_ip = 0;;) switch (_fun3069_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun3069_ip = 74;
                continue _fun3069;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot7 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1, arg2() {
            _fun3073: for (var _fun3073_ip = 0;;) switch (_fun3073_ip) {
                case 0:
                    var0 = arg0;
                    var2 = arg1;
                    var4 = this;
                    var7 = _closure1_slot2;
                    var6 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var7.bind(var3)(var4, var6);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var6 = 5;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var6 = null;
                    var7 = var6 != var0;
                    if (!var7) {
                        _fun3073_ip = 64;
                        continue _fun3073
                    }
                case 60:
                    var7 = var6 != var2;
                case 64:
                    var6 = 'Failed to construct `File`: Must pass both `parts` and `name` arguments.';
                    var6 = var8.bind(var3)(var7, var6);
                    var1 = _closure2_slot0;
                    var9 = new Array(2);
                    var9[0] = var0;
                    var0 = arg2;
                    var9[1] = var0;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot7;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun3073_ip = 132;
                        continue _fun3073
                    }
                case 119:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun3073_ip = 166;
                    continue _fun3073;
                case 132:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 166:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = var0.data;
                    var1.name = var2;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'name';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = var0.data;
            var2 = var1.name;
            var1 = null;
            var2 = var1 != var2;
            var1 = 'Files must have a name set.';
            var1 = var3.bind(var4)(var2, var1);
            var0 = var0.data;
            var0 = var0.name;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'lastModified';
        var4.key = var6;
        var5 = function() {
            _fun3075: for (var _fun3075_ip = 0;;) switch (_fun3075_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.data;
                    var0 = var0.lastModified;
                    if (var0) {
                        _fun3075_ip = 19;
                        continue _fun3075
                    }
                case 17:
                    var0 = 0;
                case 19:
                    return var0;
            }
        };
        var4.get = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 44, 197]);