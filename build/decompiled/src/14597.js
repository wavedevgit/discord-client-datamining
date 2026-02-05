// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2._queue = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'enqueue';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun113769: for (var _fun113769_ip = 0;;) switch (_fun113769_ip) {
                case 0:
                    var0 = this;
                    var2 = {};
                    var1 = global;
                    var6 = var1.Object;
                    var4 = var6.assign;
                    var3 = {};
                    var5 = 0;
                    var3.priority = var5;
                    var1 = arg1;
                    var1 = var4.bind(var6)(var3, var1);
                    var3 = var1.priority;
                    var2.priority = var3;
                    var3 = arg0;
                    var2.run = var3;
                    var3 = var0.size;
                    if (!var3) {
                        _fun113769_ip = 101;
                        continue _fun113769
                    }
                case 63:
                    var4 = var0._queue;
                    var6 = var0.size;
                    var3 = 1;
                    var3 = var6 - var3;
                    var3 = var4[var3];
                    var3 = var3.priority;
                    var1 = var1.priority;
                    if (!(!(var3 >= var1))) {
                        _fun113769_ip = 174;
                        continue _fun113769
                    }
                case 101:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var6 = var4.bind(var1)(var3);
                    var4 = var6.default;
                    var3 = var0._queue;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var0 = arg1;
                        var1 = var0.priority;
                        var0 = arg0;
                        var0 = var0.priority;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var4 = var4.bind(var6)(var3, var2, var1);
                    var3 = var0._queue;
                    var1 = var3.splice;
                    var1 = var1.bind(var3)(var4, var5, var2);
                    _fun113769_ip = 190;
                    continue _fun113769;
                case 174:
                    var1 = var0._queue;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 190:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'dequeue';
        var0.key = var5;
        var5 = function() {
            _fun113771: for (var _fun113771_ip = 0;;) switch (_fun113771_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._queue;
                    var0 = var1.shift;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun113771_ip = 36;
                        continue _fun113771
                    }
                case 30:
                    var0 = var1.run;
                case 36:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'filter';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = this;
            var3 = var1._queue;
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.priority;
                var0 = _closure3_slot0;
                var0 = var0.priority;
                var0 = var1 === var0;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.run;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'size';
        var0.key = var5;
        var4 = function() {
            var0 = this;
            var0 = var0._queue;
            var0 = var0.length;
            return var0;
        };
        var0.get = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 14598]);