// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var3 = var0.exports;
    var2 = function(arg0, arg1) { // Environment: var1
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot0;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var9 = var2;
        var1 = new var9[var1](var8);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot2 = var1;
        var4 = global;
        var3 = var4.Promise;
        var2 = var3.race;
        var1 = new Array(2);
        var5 = arg0;
        var1[0] = var5;
        var6 = var4.Promise;
        var4 = var6.prototype;
        var5 = Object.create(var4, {
            constructor: {
                value: var6
            }
        });
        var8 = function(arg0, arg1) { // Environment: var0
            var0 = arg1;
            var _closure3_slot0 = var0;
            var0 = global;
            var4 = var0.setTimeout;
            var3 = _closure2_slot0;
            var0 = undefined;
            var1 = function() { // Environment: var1
                var2 = _closure3_slot0;
                var1 = _closure2_slot2;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = var4.bind(var0)(var1, var3);
            var _closure2_slot1 = var1;
            return var0;
        };
        var9 = var5;
        var4 = new var9[var6](var8, var7);
        var4 = var4 instanceof Object ? var4 : var5;
        var1[1] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.clearTimeout;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = arg0;
            return var0;
        };
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var2 = var0.clearTimeout;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = arg0;
            throw var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3.timeout = var2;
    var2 = var0.exports;
    var0 = function() { // Environment: var1
        var2 = this;
        var0 = global;
        var3 = var0.Error;
        var1 = var3.call;
        var1 = var1.bind(var3)(var2);
        var1 = var0.Error;
        var0 = undefined;
        var1 = var1.bind(var0)();
        var1 = var1.stack;
        var2.stack = var1;
        var1 = 'Timeout';
        var2.message = var1;
        return var0;
    };
    var2.TimeoutError = var0;
    var _closure1_slot0 = var0;
    var1 = global;
    var3 = var1.Object;
    var2 = var3.create;
    var1 = var1.Error;
    var1 = var1.prototype;
    var1 = var2.bind(var3)(var1);
    var0.prototype = var1;
    var1 = var0.prototype;
    var0 = 'TimeoutError';
    var1.name = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);