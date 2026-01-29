// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() { // Original name: instrumentUnhandledRejection, environment: var0
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var4 = var3[var1];
        var0 = undefined;
        var4 = var2.bind(var0)(var4);
        var4 = var4.GLOBAL_OBJ;
        var4 = var4.onunhandledrejection;
        _closure1_slot2 = var4;
        var4 = var3[var1];
        var4 = var2.bind(var0)(var4);
        var5 = var4.GLOBAL_OBJ;
        var4 = function(arg0) { // Environment: var4
            _fun99216: for (var _fun99216_ip = 0;;) switch (_fun99216_ip) {
                case 0:
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 0;
                    var0 = var5[var0];
                    var5 = var3.bind(var4)(var0);
                    var4 = var5.triggerHandlers;
                    var3 = 'unhandledrejection';
                    var0 = arg0;
                    var0 = var4.bind(var5)(var3, var0);
                    var0 = _closure1_slot2;
                    if (!var0) {
                        _fun99216_ip = 67;
                        continue _fun99216
                    }
                case 54:
                    var3 = _closure1_slot2;
                    var3 = var3.__SENTRY_LOADER__;
                    var0 = !var3;
                case 67:
                    var0 = !var0;
                    if (var0) {
                        _fun99216_ip = 95;
                        continue _fun99216
                    }
                case 73:
                    var4 = _closure1_slot2;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var0 = var3.bind(var4)(var1, var2);
                case 95:
                    return var0;
            }
        };
        var5.onunhandledrejection = var4;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.GLOBAL_OBJ;
        var2 = var1.onunhandledrejection;
        var1 = true;
        var2.__SENTRY_INSTRUMENTED__ = var1;
        return var0;
    };
    var _closure1_slot3 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = null;
    var _closure1_slot2 = var2;
    var0 = function(arg0) { // Original name: addGlobalUnhandledRejectionInstrumentationHandler, environment: var0
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 0;
        var4 = var5[var2];
        var0 = undefined;
        var8 = var3.bind(var0)(var4);
        var7 = var8.addHandler;
        var4 = 'unhandledrejection';
        var6 = arg0;
        var6 = var7.bind(var8)(var4, var6);
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.maybeInstrument;
        var1 = _closure1_slot3;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var1.addGlobalUnhandledRejectionInstrumentationHandler = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12875, 12868]);