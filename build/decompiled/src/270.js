// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun3375: for (var _fun3375_ip = 0;;) switch (_fun3375_ip) {
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
                _fun3375_ip = 74;
                continue _fun3375;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0, arg1) { // Original name: CustomEvent, environment: var0
            _fun3379: for (var _fun3379_ip = 0;;) switch (_fun3379_ip) {
                case 0:
                    var2 = arg1;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var0 = var0.bind(var1)(var4, var3);
                    var9 = new Array(2);
                    var0 = arg0;
                    var9[0] = var0;
                    var9[1] = var2;
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var1)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun3379_ip = 80;
                        continue _fun3379
                    }
                case 67:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun3379_ip = 114;
                    continue _fun3379;
                case 80:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var1)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 114:
                    var0 = var3.bind(var1)(var4, var0);
                    var3 = null;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun3379_ip = 137;
                        continue _fun3379
                    }
                case 131:
                    var1 = var2.detail;
                case 137:
                    var0._detail = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot4;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot1;
        var4 = {};
        var5 = 'detail';
        var4.key = var5;
        var0 = function() { // Original name: get, environment: var0
            var0 = this;
            var0 = var0._detail;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 201]);