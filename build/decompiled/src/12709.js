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
    var1 = function() { // Original name: benchmark, environment: var1
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var _closure3_slot0 = var0;
            var0 = var0.startTimer;
            var _closure3_slot1 = var0;
            var0 = {};
            var1 = {};
            var2 = function(arg0) { // Original name: benchmark, environment: var2
                var5 = arg0;
                var _closure4_slot0 = var5;
                var4 = new Array(0);
                var _closure4_slot1 = var4;
                var2 = _closure3_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var _closure4_slot2 = var1;
                var2 = function(arg0) { // Original name: step, environment: var0
                    _fun97608: for (var _fun97608_ip = 0;;) switch (_fun97608_ip) {
                        case 0:
                            var0 = _closure4_slot1;
                            var0 = var0.length;
                            var5 = 0;
                            if (!(var5 !== var0)) {
                                _fun97608_ip = 44;
                                continue _fun97608
                            }
                        case 18:
                            var2 = _closure4_slot1;
                            var3 = var2.length;
                            var0 = 1;
                            var0 = var3 - var0;
                            var0 = var2[var0];
                            var5 = var0.time;
                        case 44:
                            var2 = _closure4_slot2;
                            var0 = undefined;
                            var4 = var2.bind(var0)();
                            var3 = _closure4_slot1;
                            var2 = var3.push;
                            var1 = {};
                            var6 = arg0;
                            var1.title = var6;
                            var1.time = var4;
                            var4 = var4 - var5;
                            var1.delta = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var _closure4_slot3 = var2;
                var3 = var4.push;
                var1 = {
                    'title': null,
                    'time': 0,
                    'delta': 0
                };
                var1.title = var5;
                var1 = var3.bind(var4)(var1);
                var1 = function(arg0) { // Original name: stop, environment: var0
                    var3 = _closure4_slot3;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var4 = _closure3_slot0;
                    var3 = var4.send;
                    var2 = {};
                    var5 = _closure4_slot0;
                    var2.title = var5;
                    var1 = _closure4_slot1;
                    var2.steps = var1;
                    var1 = 'benchmark.report';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                };
                var0 = {};
                var0.step = var2;
                var0.stop = var1;
                var0.last = var1;
                return var0;
            };
            var1.benchmark = var2;
            var0.features = var1;
            return var0;
        };
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);