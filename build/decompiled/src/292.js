// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var4 = var3.useEffect;
    var _closure1_slot2 = var4;
    var3 = var3.useRef;
    var _closure1_slot3 = var3;
    var1 = function arg0() {
        _fun4481: for (var _fun4481_ip = 0;;) switch (_fun4481_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var2 = _closure1_slot3;
                var5 = undefined;
                var0 = null;
                var2 = var2.bind(var5)(var0);
                var6 = var0 != var3;
                if (!var6) {
                    _fun4481_ip = 41;
                    continue _fun4481
                }
            case 32:
                var7 = var2.current;
                var6 = var0 == var7;
            case 41:
                if (!var6) {
                    _fun4481_ip = 93;
                    continue _fun4481
                }
            case 44:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 1;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var6
                    }
                });
                var11 = var7;
                var10 = var3;
                var6 = new var11[var6](var10, var9);
                var6 = var6 instanceof Object ? var6 : var7;
                var2.current = var6;
            case 93:
                var2 = var2.current;
                var _closure2_slot1 = var2;
                var4 = _closure1_slot2;
                var6 = new Array(2);
                var6[0] = var3;
                var6[1] = var2;
                var3 = function() { // Environment: var1
                    _fun4482: for (var _fun4482_ip = 0;;) switch (_fun4482_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var3 = null;
                            var1 = var3 != var1;
                            if (!var1) {
                                _fun4482_ip = 24;
                                continue _fun4482
                            }
                        case 16:
                            var2 = _closure2_slot1;
                            var1 = var3 != var2;
                        case 24:
                            if (!var1) {
                                _fun4482_ip = 46;
                                continue _fun4482
                            }
                        case 27:
                            var2 = _closure2_slot1;
                            var1 = var2.configure;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 46:
                            var0 = undefined;
                            return var0;
                    }
                };
                var3 = var4.bind(var5)(var3, var6);
                var3 = new Array(1);
                var3[0] = var2;
                var1 = function() { // Environment: var1
                    _fun4483: for (var _fun4483_ip = 0;;) switch (_fun4483_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun4483_ip = 17;
                                continue _fun4483
                            }
                        case 13:
                            var0 = undefined;
                            return var0;
                        case 17:
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot1;
                                var0 = var1.reset;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var3);
                var1 = var0 == var2;
                var0 = null;
                if (var1) {
                    _fun4481_ip = 167;
                    continue _fun4481
                }
            case 157:
                var1 = var2.getEventHandlers;
                var0 = var1.bind(var2)();
            case 167:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 282]);