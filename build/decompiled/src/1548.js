// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot3 = var3;
    var1 = function() {
        var3 = _closure1_slot3;
        var4 = var3.useContext;
        var5 = _closure1_slot0;
        var7 = _closure1_slot2;
        var2 = 1;
        var2 = var7[var2];
        var6 = undefined;
        var2 = var5.bind(var6)(var2);
        var2 = var2.NavigationContainerRefContext;
        var4 = var4.bind(var3)(var2);
        var _closure2_slot0 = var4;
        var2 = var3.useContext;
        var5 = _closure1_slot1;
        var1 = 2;
        var1 = var7[var1];
        var1 = var5.bind(var6)(var1);
        var5 = var2.bind(var3)(var1);
        var _closure2_slot1 = var5;
        var2 = var3.useCallback;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function(arg0) { // Environment: var0
            _fun17489: for (var _fun17489_ip = 0;;) switch (_fun17489_ip) {
                case 0:
                    var7 = arg0;
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    if (!(var0 !== var2)) {
                        _fun17489_ip = 357;
                        continue _fun17489
                    }
                case 19:
                    var3 = 'string';
                    var2 = typeof var7;
                    if (!(var3 !== var2)) {
                        _fun17489_ip = 63;
                        continue _fun17489
                    }
                case 30:
                    var5 = _closure2_slot0;
                    var4 = var5.navigate;
                    var3 = var7.screen;
                    var2 = var7.params;
                    var2 = var4.bind(var5)(var3, var2);
                    _fun17489_ip = 355;
                    continue _fun17489;
                case 63:
                    var3 = var7.startsWith;
                    var2 = '/';
                    var2 = var3.bind(var7)(var2);
                    if (var2) {
                        _fun17489_ip = 140;
                        continue _fun17489
                    }
                case 81:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var3 = "The path must start with '/' (";
                    var2 = ').';
                    var10 = var5.bind(var3)(var7, var2);
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var11 = var3;
                    var2 = new var11[var4](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
                case 140:
                    var2 = _closure2_slot1;
                    var6 = var2.options;
                    var2 = null;
                    if (!(var2 != var6)) {
                        _fun17489_ip = 164;
                        continue _fun17489
                    }
                case 155:
                    var3 = var6.getStateFromPath;
                    if (var3) {
                        _fun17489_ip = 215;
                        continue _fun17489
                    }
                case 164:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 1;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.getStateFromPath;
                    var8 = var2 == var6;
                    var3 = undefined;
                    if (var8) {
                        _fun17489_ip = 207;
                        continue _fun17489
                    }
                case 202:
                    var3 = var6.config;
                case 207:
                    var5 = var4.bind(var5)(var7, var3);
                    _fun17489_ip = 232;
                    continue _fun17489;
                case 215:
                    var4 = var6.getStateFromPath;
                    var3 = var6.config;
                    var5 = var4.bind(var6)(var7, var3);
                case 232:
                    if (var5) {
                        _fun17489_ip = 271;
                        continue _fun17489
                    }
                case 235:
                    var3 = global;
                    var7 = var3.Error;
                    var3 = var7.prototype;
                    var4 = Object.create(var3, {
                        constructor: {
                            value: var7
                        }
                    });
                    var10 = 'Failed to parse the path to a navigation state.';
                    var11 = var4;
                    var3 = new var11[var7](var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
                case 271:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 1;
                    var3 = var7[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.getActionFromState;
                    var7 = var2 == var6;
                    var2 = undefined;
                    if (var7) {
                        _fun17489_ip = 314;
                        continue _fun17489
                    }
                case 309:
                    var2 = var6.config;
                case 314:
                    var3 = var3.bind(var4)(var5, var2);
                    if (!(var0 === var3)) {
                        _fun17489_ip = 341;
                        continue _fun17489
                    }
                case 324:
                    var4 = _closure2_slot0;
                    var2 = var4.reset;
                    var2 = var2.bind(var4)(var5);
                    _fun17489_ip = 355;
                    continue _fun17489;
                case 341:
                    var2 = _closure2_slot0;
                    var1 = var2.dispatch;
                    var1 = var1.bind(var2)(var3);
                case 355:
                    return var0;
                case 357:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = "Couldn't find a navigation object. Is your component inside NavigationContainer?";
                    var11 = var1;
                    var0 = new var11[var2](var10, var9);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1472, 1547]);