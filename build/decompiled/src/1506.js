// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var4 = var1[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot0 = var1;
    var1 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var0 = var0.HermesInternal;
            var2 = var0.concat;
            var1 = '- ';
            var0 = arg0;
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = '\n';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun17192: for (var _fun17192_ip = 0;;) switch (_fun17192_ip) {
            case 0:
                var2 = arg0;
                var4 = undefined;
                var6 = undefined;
                var3 = ['initialRouteName', 'screens'];
                var _closure2_slot0 = var3;
                var0 = arguments.length;
                var5 = 1;
                var7 = var0 > var5;
                if (!var7) {
                    _fun17192_ip = 44;
                    continue _fun17192
                }
            case 36:
                var0 = arguments[var5];
                var7 = var4 !== var0;
            case 44:
                var0 = !var7;
                if (!var7) {
                    _fun17192_ip = 54;
                    continue _fun17192
                }
            case 50:
                var0 = arguments[var5];
            case 54:
                if (var0) {
                    _fun17192_ip = 85;
                    continue _fun17192
                }
            case 57:
                var8 = var3.push;
                var12 = 'path';
                var11 = 'exact';
                var10 = 'stringify';
                var9 = 'parse';
                var13 = var3;
                var0 = var13[var8](var12, var11, var10, var9, var8);
            case 85:
                var0 = global;
                var6 = var0.Object;
                var5 = var6.keys;
                var7 = var5.bind(var6)(var2);
                var6 = var7.filter;
                var5 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var6 = var5.length;
                if (var6) {
                    _fun17192_ip = 175;
                    continue _fun17192
                }
            case 126:
                var6 = var2.screens;
                if (!var6) {
                    _fun17192_ip = 173;
                    continue _fun17192
                }
            case 135:
                var7 = var0.Object;
                var6 = var7.entries;
                var2 = var2.screens;
                var6 = var6.bind(var7)(var2);
                var2 = var6.forEach;
                var1 = function(arg0) { // Environment: var1
                    _fun17194: for (var _fun17194_ip = 0;;) switch (_fun17194_ip) {
                        case 0:
                            var4 = _closure1_slot0;
                            var0 = undefined;
                            var3 = arg0;
                            var2 = 2;
                            var3 = var4.bind(var0)(var3, var2);
                            var2 = 0;
                            var2 = var3[var2];
                            var2 = 1;
                            var3 = var3[var2];
                            var4 = 'string';
                            var2 = typeof var3;
                            if (!(var4 !== var2)) {
                                _fun17194_ip = 57;
                                continue _fun17194
                            }
                        case 45:
                            var2 = _closure1_slot2;
                            var1 = false;
                            var1 = var2.bind(var0)(var3, var1);
                        case 57:
                            return var0;
                    }
                };
                var1 = var2.bind(var6)(var1);
            case 173:
                return var4;
            case 175:
                var2 = var0.Error;
                var1 = _closure1_slot1;
                var6 = var1.bind(var4)(var5);
                var10 = var1.bind(var4)(var3);
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var13 = 'Found invalid properties in the configuration:\n';
                var11 = "\n\nDid you forget to specify them under a 'screens' property?\n\nYou can only specify the following properties:\n";
                var9 = '\n\nSee https://reactnavigation.org/docs/configuring-links for more details on how to specify a linking configuration.';
                var12 = var6;
                var12 = var13[var4](var12, var11, var10, var9, var8);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var1;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot2 = var1;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57]);