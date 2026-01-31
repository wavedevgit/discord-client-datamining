// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var0 = var0.Symbol;
    var2 = var0.toStringTag;
    var0 = {};
    var5 = 'Module';
    var0.value = var5;
    var0 = var3.bind(var4)(var1, var2, var0);
    var0 = function(arg0, arg1) { // Original name: observe, environment: var0
        _fun10775: for (var _fun10775_ip = 0;;) switch (_fun10775_ip) {
            case 0:
                var0 = undefined;
                var5 = undefined;
                var7 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var2 = undefined;
                var3 = arguments.length;
                var4 = 2;
                if (!(var3 > var4)) {
                    _fun10775_ip = 36;
                    continue _fun10775
                }
            case 28:
                var3 = arguments[var4];
                if (!(var0 === var3)) {
                    _fun10775_ip = 40;
                    continue _fun10775
                }
            case 36:
                var3 = {};
                _fun10775_ip = 44;
                continue _fun10775;
            case 40:
                var3 = arguments[var4];
            case 44:
                var2 = var3;
            case 47: // try_start_0
                var4 = global;
                var3 = var4.PerformanceObserver;
                var6 = var3.supportedEntryTypes;
                var5 = var6.includes;
                var3 = var7;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun10775_ip = 79;
                    continue _fun10775
                }
            case 77: // try_end0
                _fun10775_ip = 155;
                continue _fun10775;
            case 79: // try_start_1
                var5 = var4.PerformanceObserver;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var9 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.resolve;
                    var2 = var1.bind(var2)();
                    var1 = var2.then;
                    var0 = function() { // Environment: var0
                        var2 = _closure2_slot0;
                        var1 = _closure3_slot0;
                        var0 = var1.getEntries;
                        var1 = var0.bind(var1)();
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var10 = var3;
                var1 = new var10[var5](var9, var8);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = var1.observe;
                var6 = var4.Object;
                var5 = var6.assign;
                var4 = {};
                var4.type = var7;
                var7 = true;
                var4.buffered = var7;
                var2 = var5.bind(var6)(var4, var2);
                var2 = var3.bind(var1)(var2);
            case 151: // try_end1
                return var1;
            case 153: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
            case 155:
                return var0;
        }
    };
    var1.observe = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);