// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = undefined;
    var2.default = var0;
    var1 = function() {
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = {};
            var _closure3_slot1 = var0;
            var0 = {};
            var1 = function arg0() {
                _fun97632: for (var _fun97632_ip = 0;;) switch (_fun97632_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.type;
                        var0 = var0.payload;
                        var _closure4_slot0 = var0;
                        var4 = var3.substr;
                        var0 = 0;
                        var2 = 5;
                        var4 = var4.bind(var3)(var0, var2);
                        var0 = 'repl.';
                        if (!(var0 === var4)) {
                            _fun97632_ip = 174;
                            continue _fun97632
                        }
                    case 50:
                        var0 = var3.substr;
                        var2 = var0.bind(var3)(var2);
                        var0 = 'ls';
                        if (!(var0 !== var2)) {
                            _fun97632_ip = 127;
                            continue _fun97632
                        }
                    case 71:
                        var0 = 'execute';
                        if (!(var0 === var2)) {
                            _fun97632_ip = 174;
                            continue _fun97632
                        }
                    case 79:
                        var3 = _closure3_slot0;
                        var2 = var3.send;
                        var4 = function() { // Environment: var1
                            var0 = _closure4_slot0;
                            var0 = eval(var0);
                            return var0;
                        };
                        var1 = var4.call;
                        var0 = _closure3_slot1;
                        var1 = var1.bind(var4)(var0);
                        var0 = 'repl.execute.response';
                        var0 = var2.bind(var3)(var0, var1);
                        _fun97632_ip = 174;
                        continue _fun97632;
                    case 127:
                        var3 = _closure3_slot0;
                        var2 = var3.send;
                        var1 = global;
                        var4 = var1.Object;
                        var1 = var4.keys;
                        var0 = _closure3_slot1;
                        var1 = var1.bind(var4)(var0);
                        var0 = 'repl.ls.response';
                        var0 = var2.bind(var3)(var0, var1);
                    case 174:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onCommand = var1;
            var1 = {};
            var2 = function arg0, arg1() {
                _fun97634: for (var _fun97634_ip = 0;;) switch (_fun97634_ip) {
                    case 0:
                        var2 = arg0;
                        if (var2) {
                            _fun97634_ip = 42;
                            continue _fun97634
                        }
                    case 6:
                        var0 = global;
                        var3 = var0.Error;
                        var0 = var3.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var3
                            }
                        });
                        var4 = 'You must provide a name for your REPL';
                        var5 = var1;
                        var0 = new var5[var3](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 42:
                        var1 = _closure3_slot1;
                        var1 = var1[var2];
                        if (var1) {
                            _fun97634_ip = 71;
                            continue _fun97634
                        }
                    case 56:
                        var1 = _closure3_slot1;
                        var0 = arg1;
                        var1[var2] = var0;
                        var0 = undefined;
                        return var0;
                    case 71:
                        var0 = global;
                        var2 = var0.Error;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = 'You are already REPLing an item with that name';
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var1.repl = var2;
            var0.features = var1;
            return var0;
        };
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);