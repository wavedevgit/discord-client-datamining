// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var1 = function arg0, arg1() {
        _fun45616: for (var _fun45616_ip = 0;;) switch (_fun45616_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = 'function';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun45616_ip = 26;
                    continue _fun45616
                }
            case 17:
                var0 = null;
                if (!(var0 === var2)) {
                    _fun45616_ip = 152;
                    continue _fun45616
                }
            case 26:
                var0 = global;
                var6 = var0.Object;
                var5 = var6.create;
                var4 = var2;
                if (!var4) {
                    _fun45616_ip = 50;
                    continue _fun45616
                }
            case 45:
                var4 = var2.prototype;
            case 50:
                var1 = {};
                var7 = {
                    'value': null,
                    'writable': true,
                    'configurable': true
                };
                var7.value = var3;
                var1.constructor = var7;
                var1 = var5.bind(var6)(var4, var1);
                var3.prototype = var1;
                var5 = var0.Object;
                var4 = var5.defineProperty;
                var1 = {};
                var0 = false;
                var1.writable = var0;
                var0 = 'prototype';
                var0 = var4.bind(var5)(var3, var0, var1);
                if (!var2) {
                    _fun45616_ip = 148;
                    continue _fun45616
                }
            case 118:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var4.bind(var1)(var0);
                var0 = var0.bind(var1)(var3, var2);
            case 148:
                var0 = undefined;
                return var0;
            case 152:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = 'Super expression must either be null or a function';
                var12 = var1;
                var0 = new var12[var2](var11, var10);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3216]);