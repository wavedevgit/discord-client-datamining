// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: CreateDataProperty, environment: var0
        _fun29006: for (var _fun29006_ip = 0;;) switch (_fun29006_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var1 = var1.bind(var2)(var4);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                if (var1) {
                    _fun29006_ip = 86;
                    continue _fun29006
                }
            case 46:
                var1 = 1;
                var1 = var6[var1];
                var8 = var5.bind(var2)(var1);
                var1 = var8.prototype;
                var7 = Object.create(var1, {
                    constructor: {
                        value: var8
                    }
                });
                var11 = 'Assertion failed: Type(O) is not Object';
                var12 = var7;
                var1 = new var12[var8](var11, var10);
                var1 = var1 instanceof Object ? var1 : var7;
                throw var1;
            case 86:
                var1 = 2;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun29006_ip = 154;
                    continue _fun29006
                }
            case 106:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var1 = var6[var1];
                var6 = var5.bind(var2)(var1);
                var1 = var6.prototype;
                var5 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = 'Assertion failed: P is not a Property Key';
                var12 = var5;
                var1 = new var12[var6](var11, var10);
                var1 = var1 instanceof Object ? var1 : var5;
                throw var1;
            case 154:
                var1 = {
                    '[[Configurable]]': true,
                    '[[Enumerable]]': true,
                    '[[Value]]': null,
                    '[[Writable]]': true
                };
                var5 = arg2;
                var1['[[Value]]'] = var5;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var0 = var6[var0];
                var0 = var5.bind(var2)(var0);
                var0 = var0.bind(var2)(var4, var3, var1);
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3327, 518, 3374, 3390]);