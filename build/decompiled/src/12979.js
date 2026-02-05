// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getCurrentScope;
        var3 = var1.bind(var2)();
        var2 = var3.setClient;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot2 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = function arg0, arg1() {
        _fun99548: for (var _fun99548_ip = 0;;) switch (_fun99548_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var2 = var0.debug;
                var1 = true;
                if (!(var1 === var2)) {
                    _fun99548_ip = 109;
                    continue _fun99548
                }
            case 18:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 0;
                var2 = var5[var2];
                var5 = undefined;
                var2 = var3.bind(var5)(var2);
                var2 = var2.DEBUG_BUILD;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var1 = var6[var1];
                var1 = var3.bind(var5)(var1);
                if (var2) {
                    _fun99548_ip = 93;
                    continue _fun99548
                }
            case 71:
                var3 = var1.consoleSandbox;
                var2 = function() { // Environment: var2
                    var0 = global;
                    var2 = var0.console;
                    var1 = var2.warn;
                    var0 = '[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.';
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var3.bind(var1)(var2);
                _fun99548_ip = 109;
                continue _fun99548;
            case 93:
                var2 = var1.logger;
                var1 = var2.enable;
                var1 = var1.bind(var2)();
            case 109:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var5.bind(var2)(var3);
                var3 = var5.getCurrentScope;
                var6 = var3.bind(var5)();
                var5 = var6.update;
                var3 = var0.initialScope;
                var3 = var5.bind(var6)(var3);
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = var3;
                var7 = var0;
                var0 = new var8[var4](var7, var6);
                var0 = var0 instanceof Object ? var0 : var3;
                var1 = _closure1_slot2;
                var1 = var1.bind(var2)(var0);
                var1 = var0.init;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.initAndBind = var2;
    var1.setCurrentClient = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12953, 12887, 12952]);