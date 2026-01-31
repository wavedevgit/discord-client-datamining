// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Environment: var0
        _fun113656: for (var _fun113656_ip = 0;;) switch (_fun113656_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var1;
                if (var1) {
                    _fun113656_ip = 22;
                    continue _fun113656
                }
            case 15:
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
            case 22:
                _closure2_slot0 = var1;
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var3 = var1.Promise;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var2 = var1.bind(var0)();
                        var1 = arg0;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var2.then;
                    var0 = function() { // Environment: var0
                        var0 = _closure3_slot0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var3 = var1.Promise;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var4 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot0;
                        var0 = undefined;
                        var2 = var1.bind(var0)();
                        var1 = arg0;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var2.then;
                    var0 = function() { // Environment: var0
                        var0 = _closure3_slot0;
                        throw var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);