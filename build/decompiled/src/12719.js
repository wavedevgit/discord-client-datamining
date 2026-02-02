// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var6 = function arg0() {
        _fun97668: for (var _fun97668_ip = 0;;) switch (_fun97668_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun97668_ip = 18;
                    continue _fun97668
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun97668_ip = 27;
                    continue _fun97668
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = undefined;
    var2.default = var0;
    var3 = 0;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var1 = function() {
        var0 = function() { // Environment: var0
            var0 = _closure1_slot0;
            var1 = var0.default;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var _closure3_slot0 = var0;
            var0 = {};
            var1 = function arg0() {
                _fun97671: for (var _fun97671_ip = 0;;) switch (_fun97671_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.type;
                        var3 = 'storybook';
                        if (!(var3 === var1)) {
                            _fun97671_ip = 43;
                            continue _fun97671
                        }
                    case 18:
                        var2 = _closure3_slot0;
                        var1 = var2.emit;
                        var0 = var0.payload;
                        var0 = var1.bind(var2)(var3, var0);
                    case 43:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onCommand = var1;
            var1 = {};
            var2 = function arg0() {
                var1 = arg0;
                var _closure4_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure5_slot0 = var1;
                    var0 = function arg0() {
                        var0 = _closure1_slot2;
                        var3 = var0.jsx;
                        var1 = _closure1_slot1;
                        var2 = var1.default;
                        var1 = {};
                        var4 = _closure4_slot0;
                        var1.storybookUi = var4;
                        var4 = _closure3_slot0;
                        var1.emitter = var4;
                        var6 = var0.jsx;
                        var5 = _closure5_slot0;
                        var0 = global;
                        var8 = var0.Object;
                        var7 = var8.assign;
                        var4 = {};
                        var0 = arg0;
                        var4 = var7.bind(var8)(var4, var0);
                        var0 = undefined;
                        var4 = var6.bind(var0)(var5, var4);
                        var1.children = var4;
                        var0 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                return var0;
            };
            var1.storybookSwitcher = var2;
            var0.features = var1;
            return var0;
        };
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 12701, 12720, 33]);