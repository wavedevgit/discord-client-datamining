// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var1 = exports;
    var4 = dependencyMap;
    var5 = function(arg0) { // Original name: _interopRequireDefault, environment: var2
        _fun97883: for (var _fun97883_ip = 0;;) switch (_fun97883_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun97883_ip = 18;
                    continue _fun97883
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun97883_ip = 27;
                    continue _fun97883
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
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var6);
    var0 = function() { // Original name: OverlayCreator, environment: var2
        var0 = function() { // Original name: overlay, environment: var0
            var0 = _closure1_slot1;
            var1 = var0.default;
            var0 = undefined;
            var0 = var1.bind(var0)();
            var _closure3_slot0 = var0;
            var0 = {};
            var1 = function(arg0) { // Original name: onCommand, environment: var2
                _fun97886: for (var _fun97886_ip = 0;;) switch (_fun97886_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.type;
                        var3 = 'overlay';
                        if (!(var3 === var1)) {
                            _fun97886_ip = 41;
                            continue _fun97886
                        }
                    case 16:
                        var2 = _closure3_slot0;
                        var1 = var2.emit;
                        var0 = var0.payload;
                        var0 = var1.bind(var2)(var3, var0);
                    case 41:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onCommand = var1;
            var1 = {};
            var2 = function(arg0) { // Original name: overlay, environment: var2
                var1 = arg0;
                var _closure4_slot0 = var1;
                var0 = function() { // Environment: var0
                    _fun97888: for (var _fun97888_ip = 0;;) switch (_fun97888_ip) {
                        case 0:
                            var3 = undefined;
                            var1 = undefined;
                            var2 = arguments.length;
                            var0 = 0;
                            if (!(var2 > var0)) {
                                _fun97888_ip = 21;
                                continue _fun97888
                            }
                        case 13:
                            var2 = arguments[var0];
                            if (!(var3 === var2)) {
                                _fun97888_ip = 25;
                                continue _fun97888
                            }
                        case 21:
                            var10 = {};
                            _fun97888_ip = 29;
                            continue _fun97888;
                        case 25:
                            var10 = arguments[var0];
                        case 29:
                            var0 = _closure1_slot3;
                            var2 = var0.jsxs;
                            var0 = _closure1_slot0;
                            var1 = var0.View;
                            var0 = {};
                            var4 = {};
                            var6 = 1;
                            var4.flex = var6;
                            var0.style = var4;
                            var4 = _closure1_slot3;
                            var7 = var4.jsx;
                            var6 = _closure4_slot0;
                            var4 = global;
                            var9 = var4.Object;
                            var8 = var9.assign;
                            var4 = {};
                            var4 = var8.bind(var9)(var4, var10);
                            var6 = var7.bind(var3)(var6, var4);
                            var4 = new Array(2);
                            var4[0] = var6;
                            var6 = _closure1_slot3;
                            var7 = var6.jsx;
                            var5 = _closure1_slot2;
                            var6 = var5.default;
                            var5 = {};
                            var8 = _closure3_slot0;
                            var5.emitter = var8;
                            var5 = var7.bind(var3)(var6, var5);
                            var4[1] = var5;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                return var0;
            };
            var1.overlay = var2;
            var0.features = var1;
            return var0;
        };
        return var0;
    };
    var1.default = var0;
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var1 = var5.bind(var0)(var1);
    var1 = 1;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 12739, 12740, 33]);