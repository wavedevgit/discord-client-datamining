// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = function(arg0, arg1) { // Original name: getExtendedError, environment: var1
        _fun3422: for (var _fun3422_ip = 0;;) switch (_fun3422_ip) {
            case 0:
                var6 = arg0;
                var1 = arg1;
                var7 = undefined;
                var0 = undefined;
                var2 = global;
                var2 = var2.Error;
                var3 = var6 instanceof var2;
                var2 = var6;
                if (var3) {
                    _fun3422_ip = 154;
                    continue _fun3422
                }
            case 31:
                var4 = 'string';
                var3 = typeof var6;
                if (!(var4 !== var3)) {
                    _fun3422_ip = 99;
                    continue _fun3422
                }
            case 42:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 1;
                var3 = var5[var3];
                var3 = var4.bind(var7)(var3);
                var5 = var3.SyntheticError;
                var3 = var5.prototype;
                var4 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = 'Unspecified error';
                var10 = var4;
                var3 = new var10[var5](var9, var8);
                var3 = var3 instanceof Object ? var3 : var4;
                _fun3422_ip = 151;
                continue _fun3422;
            case 99:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 1;
                var4 = var8[var4];
                var4 = var5.bind(var7)(var4);
                var4 = var4.SyntheticError;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var5;
                var9 = var6;
                var4 = new var10[var4](var9, var8);
                var3 = var4 instanceof Object ? var4 : var5;
            case 151:
                var2 = var3;
            case 154:
                var0 = var2;
            case 157: // try_start_0
                var2 = var0;
                var1 = var1.componentStack;
                var2.componentStack = var1;
                var1 = true;
                var2.isComponentError = var1;
            case 180: // try_end0
                _fun3422_ip = 184;
                continue _fun3422;
            case 182: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 184:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var3 = function(arg0, arg1) { // Original name: onUncaughtError, environment: var1
        var4 = _closure1_slot3;
        var0 = undefined;
        var3 = arg0;
        var2 = arg1;
        var4 = var4.bind(var0)(var3, var2);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 1;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.handleException;
        var1 = true;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.onUncaughtError = var3;
    var3 = function(arg0, arg1) { // Original name: onCaughtError, environment: var1
        var4 = _closure1_slot3;
        var0 = undefined;
        var3 = arg0;
        var2 = arg1;
        var4 = var4.bind(var0)(var3, var2);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 1;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.handleException;
        var1 = false;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.onCaughtError = var3;
    var1 = function(arg0, arg1) { // Original name: onRecoverableError, environment: var1
        var3 = _closure1_slot3;
        var0 = undefined;
        var2 = arg0;
        var1 = arg1;
        var3 = var3.bind(var0)(var2, var1);
        var1 = global;
        var2 = var1.console;
        var1 = var2.warn;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var2.onRecoverableError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 183]);