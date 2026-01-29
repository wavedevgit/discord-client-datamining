// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function(arg0) { // Original name: queueMicrotask, environment: var0
        _fun2613: for (var _fun2613_ip = 0;;) switch (_fun2613_ip) {
            case 0:
                var3 = arg0;
                var0 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var1 = 1;
                if (!(!(var2 < var1))) {
                    _fun2613_ip = 129;
                    continue _fun2613
                }
            case 17:
                var2 = 'function';
                var1 = typeof var3;
                if (!(var2 === var1)) {
                    _fun2613_ip = 93;
                    continue _fun2613
                }
            case 28:
                var2 = _closure1_slot0;
                if (var2) {
                    _fun2613_ip = 63;
                    continue _fun2613
                }
            case 38:
                var1 = global;
                var5 = var1.Promise;
                var1 = var5.resolve;
                var1 = var1.bind(var5)();
                var _closure1_slot0 = var1;
                var2 = var1;
            case 63:
                var1 = var2.then;
                var3 = var1.bind(var2)(var3);
                var2 = var3.catch;
                var1 = function(arg0) { // Environment: var1
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var3 = var1.setTimeout;
                    var2 = undefined;
                    var1 = function() { // Environment: var0
                        var0 = _closure3_slot0;
                        throw var0;
                    };
                    var0 = 0;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 93:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = 'The argument to queueMicrotask must be a function.';
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 129:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = 'queueMicrotask must be called with at least one argument (a function to call)';
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);