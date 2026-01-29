// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() { // Original name: _linkedErrorsIntegration, environment: var1
        _fun11006: for (var _fun11006_ip = 0;;) switch (_fun11006_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun11006_ip = 23;
                    continue _fun11006
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun11006_ip = 27;
                    continue _fun11006
                }
            case 23:
                var0 = {};
                _fun11006_ip = 31;
                continue _fun11006;
            case 27:
                var0 = arguments[var2];
            case 31:
                var2 = var0.limit;
                if (var2) {
                    _fun11006_ip = 42;
                    continue _fun11006
                }
            case 39:
                var2 = 5;
            case 42:
                var _closure2_slot0 = var2;
                var0 = var0.key;
                if (var0) {
                    _fun11006_ip = 58;
                    continue _fun11006
                }
            case 54:
                var0 = 'cause';
            case 58:
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = 'LinkedErrors';
                var0.name = var2;
                var1 = function(arg0, arg1, arg2) { // Original name: preprocessEvent, environment: var1
                    var1 = arg2;
                    var0 = var1.getOptions;
                    var1 = var0.bind(var1)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 0;
                    var2 = var4[var0];
                    var0 = undefined;
                    var8 = var3.bind(var0)(var2);
                    var7 = var8.applyAggregateErrorsToEvent;
                    var2 = 1;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var14 = var2.exceptionFromError;
                    var13 = var1.stackParser;
                    var12 = _closure2_slot1;
                    var11 = _closure2_slot0;
                    var10 = arg0;
                    var9 = arg1;
                    var15 = var8;
                    var1 = var15[var7](var14, var13, var12, var11, var10, var9, var8);
                    return var0;
                };
                var0.preprocessEvent = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.linkedErrorsIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1028]);