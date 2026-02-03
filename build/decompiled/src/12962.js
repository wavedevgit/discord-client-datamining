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
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() {
        _fun99543: for (var _fun99543_ip = 0;;) switch (_fun99543_ip) {
            case 0:
                var4 = undefined;
                var3 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun99543_ip = 23;
                    continue _fun99543
                }
            case 15:
                var0 = arguments[var2];
                if (!(var4 === var0)) {
                    _fun99543_ip = 27;
                    continue _fun99543
                }
            case 23:
                var0 = {};
                _fun99543_ip = 31;
                continue _fun99543;
            case 27:
                var0 = arguments[var2];
            case 31:
                var2 = var0.limit;
                if (var2) {
                    _fun99543_ip = 42;
                    continue _fun99543
                }
            case 39:
                var2 = 5;
            case 42:
                var _closure2_slot0 = var2;
                var0 = var0.key;
                if (var0) {
                    _fun99543_ip = 58;
                    continue _fun99543
                }
            case 54:
                var0 = 'cause';
            case 58:
                var _closure2_slot1 = var0;
                var0 = {};
                var2 = 'LinkedErrors';
                var0.name = var2;
                var1 = function arg0, arg1, arg2() {
                    var1 = arg2;
                    var0 = var1.getOptions;
                    var1 = var0.bind(var1)();
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 0;
                    var5 = var4[var2];
                    var0 = undefined;
                    var9 = var3.bind(var0)(var5);
                    var8 = var9.applyAggregateErrorsToEvent;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var16 = var2.exceptionFromError;
                    var15 = var1.stackParser;
                    var14 = var1.maxValueLength;
                    var13 = _closure2_slot1;
                    var12 = _closure2_slot0;
                    var11 = arg0;
                    var10 = arg1;
                    var17 = var9;
                    var1 = var17[var8](var16, var15, var14, var13, var12, var11, var10, var9);
                    return var0;
                };
                var0.preprocessEvent = var1;
                return var0;
        }
    };
    var1 = var3.bind(var4)(var1);
    var2.linkedErrorsIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12858, 12947]);