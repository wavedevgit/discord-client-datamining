// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var1);
        var1 = var3.unprocessColorsInProps;
        var1 = var1.bind(var3)(var2);
        var1 = function arg0() {
            _fun34118: for (var _fun34118_ip = 0;;) switch (_fun34118_ip) {
                case 0:
                    var1 = arg0;
                    var0 = global;
                    var3 = var0.Array;
                    var2 = var3.isArray;
                    var0 = var1.boxShadow;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun34118_ip = 59;
                        continue _fun34118
                    }
                case 30:
                    var3 = var1.boxShadow;
                    var2 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        var4 = arg0;
                        var0 = global;
                        var3 = var0.Object;
                        var2 = var3.assign;
                        var1 = {};
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var0 = 1;
                        var5 = var5[var0];
                        var0 = undefined;
                        var6 = var6.bind(var0)(var5);
                        var5 = var6.unprocessColor;
                        var0 = var4.color;
                        var0 = var5.bind(var6)(var0);
                        var1.color = var0;
                        var0 = {};
                        var0 = var2.bind(var3)(var0, var4, var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var1.boxShadow = var0;
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var _closure1_slot2 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var1, var0, var4);
    var0 = {
        'viewsCount': 0,
        'viewsMap': null,
        'intervalId': null
    };
    var3 = var3.Map;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var10 = var4;
    var3 = new var10[var3](var9);
    var3 = var3 instanceof Object ? var3 : var4;
    var0.viewsMap = var3;
    var3 = function arg0, arg1() {
        _fun34120: for (var _fun34120_ip = 0;;) switch (_fun34120_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var2 = var1.viewsMap;
                var0 = var2.has;
                var0 = var0.bind(var2)(var4);
                if (var0) {
                    _fun34120_ip = 83;
                    continue _fun34120
                }
            case 25:
                var3 = var1.viewsMap;
                var2 = var3.set;
                var0 = arg1;
                var0 = var2.bind(var3)(var4, var0);
                var0 = var1.viewsCount;
                var0 = var0 + 1;
                var1.viewsCount = var0;
                var2 = var1.viewsCount;
                var0 = 1;
                if (!(var0 === var2)) {
                    _fun34120_ip = 83;
                    continue _fun34120
                }
            case 73:
                var0 = var1.registerInterval;
                var0 = var0.bind(var1)();
            case 83:
                var0 = undefined;
                return var0;
        }
    };
    var0.registerView = var3;
    var3 = function arg0() {
        _fun34121: for (var _fun34121_ip = 0;;) switch (_fun34121_ip) {
            case 0:
                var1 = this;
                var3 = var1.viewsMap;
                var2 = var3.delete;
                var0 = arg0;
                var0 = var2.bind(var3)(var0);
                var0 = var1.viewsCount;
                var0 = var0 - 1;
                var1.viewsCount = var0;
                var2 = var1.viewsCount;
                var0 = 0;
                if (!(var0 === var2)) {
                    _fun34121_ip = 59;
                    continue _fun34121
                }
            case 49:
                var0 = var1.unregisterInterval;
                var0 = var0.bind(var1)();
            case 59:
                var0 = undefined;
                return var0;
        }
    };
    var0.unregisterView = var3;
    var3 = function() {
        _fun34122: for (var _fun34122_ip = 0;;) switch (_fun34122_ip) {
            case 0:
                var7 = this;
                var0 = undefined;
                var5 = undefined;
                var6 = undefined;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var1.ReanimatedModule;
                var1 = var2.getSettledUpdates;
                var1 = var1.bind(var2)();
                var3 = var1;
                var2 = var3[Symbol.iterator];
                var3 = var2().next;
                var1 = null;
            case 55:
                var8 = var3().value;
                var9 = var2;
                if (!(var9 !== var0)) {
                    _fun34122_ip = 143;
                    continue _fun34122
                }
            case 66: // try_start_0
                var11 = var8.viewTag;
                var10 = var8.styleProps;
                var5 = var10;
                var9 = var7.viewsMap;
                var8 = var9.get;
                var8 = var8.bind(var9)(var11);
                var6 = var8;
                var9 = _closure1_slot2;
                var9 = var9.bind(var0)(var10);
                if (!(var1 != var8)) {
                    _fun34122_ip = 134;
                    continue _fun34122
                }
            case 115:
                var10 = var6;
                var9 = var10._syncStylePropsBackToReact;
                var8 = var5;
                var8 = var9.bind(var10)(var8);
            case 134: // try_end0
                _fun34122_ip = 55;
                continue _fun34122;
            case 136: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 143:
                return var0;
        }
    };
    var0.syncPropsBackToReact = var3;
    var3 = function() {
        var2 = this;
        var0 = global;
        var4 = var0.setInterval;
        var1 = var2.syncPropsBackToReact;
        var0 = var1.bind;
        var3 = var0.bind(var1)(var2);
        var0 = undefined;
        var1 = 500;
        var1 = var4.bind(var0)(var3, var1);
        var2.intervalId = var1;
        return var0;
    };
    var0.registerInterval = var3;
    var2 = function() {
        _fun34124: for (var _fun34124_ip = 0;;) switch (_fun34124_ip) {
            case 0:
                var1 = this;
                var2 = var1.intervalId;
                var0 = null;
                if (!(var0 !== var2)) {
                    _fun34124_ip = 42;
                    continue _fun34124
                }
            case 15:
                var2 = global;
                var4 = var2.clearInterval;
                var3 = var1.intervalId;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var1.intervalId = var0;
            case 42:
                var0 = undefined;
                return var0;
        }
    };
    var0.unregisterInterval = var2;
    var1.PropsRegistryGarbageCollector = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3720, 3822]);