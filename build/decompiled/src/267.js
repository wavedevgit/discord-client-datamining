// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var0 = dependencyMap;
    var _closure1_slot2 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var2 = function(arg0) { // Original name: showErrorDialog, environment: var2
        _fun3370: for (var _fun3370_ip = 0;;) switch (_fun3370_ip) {
            case 0:
                var2 = arg0;
                var3 = undefined;
                var0 = undefined;
                var1 = undefined;
                var1 = var2.componentStack;
                var7 = var2.error;
                var2 = global;
                var2 = var2.Error;
                var4 = var7 instanceof var2;
                var2 = var7;
                if (var4) {
                    _fun3370_ip = 159;
                    continue _fun3370
                }
            case 38:
                var5 = 'string';
                var4 = typeof var7;
                if (!(var5 !== var4)) {
                    _fun3370_ip = 105;
                    continue _fun3370
                }
            case 49:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 0;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var6 = var4.SyntheticError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var10 = 'Unspecified error';
                var11 = var5;
                var4 = new var11[var6](var10, var9);
                var4 = var4 instanceof Object ? var4 : var5;
                _fun3370_ip = 156;
                continue _fun3370;
            case 105:
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 0;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.SyntheticError;
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var6;
                var10 = var7;
                var5 = new var11[var5](var10, var9);
                var4 = var5 instanceof Object ? var5 : var6;
            case 156:
                var2 = var4;
            case 159:
                var0 = var2;
            case 162: // try_start_0
                var2 = var0;
                var2.componentStack = var1;
                var1 = true;
                var2.isComponentError = var1;
            case 179: // try_end0
                _fun3370_ip = 183;
                continue _fun3370;
            case 181: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 183:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 0;
                var1 = var4[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.handleException;
                var1 = var0;
                var0 = false;
                var1 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0.showErrorDialog = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [183]);