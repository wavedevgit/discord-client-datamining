// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var4 = var3[var1];
        var0 = undefined;
        var4 = var2.bind(var0)(var4);
        var4 = var4.GLOBAL_OBJ;
        var4 = var4.onerror;
        _closure1_slot2 = var4;
        var4 = var3[var1];
        var4 = var2.bind(var0)(var4);
        var5 = var4.GLOBAL_OBJ;
        var4 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var4
            _fun8972: for (var _fun8972_ip = 0;;) switch (_fun8972_ip) {
                case 0:
                    var4 = undefined;
                    var1 = undefined;
                    var5 = {};
                    var0 = arg3;
                    var5.column = var0;
                    var0 = arg4;
                    var5.error = var0;
                    var0 = arg2;
                    var5.line = var0;
                    var0 = arg0;
                    var5.msg = var0;
                    var0 = arg1;
                    var5.url = var0;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 0;
                    var0 = var6[var0];
                    var4 = var3.bind(var4)(var0);
                    var3 = var4.triggerHandlers;
                    var0 = 'error';
                    var0 = var3.bind(var4)(var0, var5);
                    var0 = _closure1_slot2;
                    var3 = !var0;
                    var0 = !var3;
                    if (var3) {
                        _fun8972_ip = 117;
                        continue _fun8972
                    }
                case 95:
                    var4 = _closure1_slot2;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var0 = var3.bind(var4)(var1, var2);
                case 117:
                    return var0;
            }
        };
        var5.onerror = var4;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var1 = var1.GLOBAL_OBJ;
        var2 = var1.onerror;
        var1 = true;
        var2.__SENTRY_INSTRUMENTED__ = var1;
        return var0;
    };
    var _closure1_slot3 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var2 = null;
    var _closure1_slot2 = var2;
    var0 = function arg0() {
        var3 = _closure1_slot0;
        var5 = _closure1_slot1;
        var2 = 0;
        var4 = var5[var2];
        var0 = undefined;
        var8 = var3.bind(var0)(var4);
        var7 = var8.addHandler;
        var4 = 'error';
        var6 = arg0;
        var6 = var7.bind(var8)(var4, var6);
        var2 = var5[var2];
        var3 = var3.bind(var0)(var2);
        var2 = var3.maybeInstrument;
        var1 = _closure1_slot3;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var1.addGlobalErrorInstrumentationHandler = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [849, 821]);