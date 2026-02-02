// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun58588: for (var _fun58588_ip = 0;;) switch (_fun58588_ip) {
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
                _fun58588_ip = 74;
                continue _fun58588;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var4 = var4.bind(var0)(var3);
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var3 = var3.Error;
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun58592: for (var _fun58592_ip = 0;;) switch (_fun58592_ip) {
                case 0:
                    var2 = arg0;
                    var5 = this;
                    var4 = undefined;
                    var3 = undefined;
                    var1 = arguments.length;
                    var0 = 1;
                    var6 = var1 > var0;
                    var7 = 'warn';
                    var1 = var7;
                    if (!var6) {
                        _fun58592_ip = 45;
                        continue _fun58592
                    }
                case 30:
                    var6 = arguments[var0];
                    var1 = var7;
                    if (!(var4 !== var6)) {
                        _fun58592_ip = 45;
                        continue _fun58592
                    }
                case 41:
                    var1 = arguments[var0];
                case 45:
                    var0 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    var0 = var0.bind(var4)(var5, var3);
                    var10 = new Array(1);
                    var10[0] = var2;
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun58592_ip = 110;
                        continue _fun58592
                    }
                case 97:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun58592_ip = 144;
                    continue _fun58592;
                case 110:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot3;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 144:
                    var0 = var3.bind(var4)(var5, var0);
                    var0.message = var2;
                    var2 = new.target;
                    var3 = var2.prototype;
                    var3 = var3.constructor;
                    var3 = var3.name;
                    var0.name = var3;
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.setPrototypeOf;
                    var2 = var2.prototype;
                    var2 = var3.bind(var4)(var0, var2);
                    var0.logLevel = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot4;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot0;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.SentryError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162]);