// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRef;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Animated;
    var _closure1_slot3 = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function arg0() {
            _fun68960: for (var _fun68960_ip = 0;;) switch (_fun68960_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = function() {
                        _fun68961: for (var _fun68961_ip = 0;;) switch (_fun68961_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.findNodeHandle;
                                var1 = _closure2_slot0;
                                var1 = var1.current;
                                var3 = var2.bind(var3)(var1);
                                if (!var3) {
                                    _fun68961_ip = 103;
                                    continue _fun68961
                                }
                            case 51:
                                var4 = _closure3_slot0;
                                var2 = 'workletEventHandler';
                                var2 = var2 in var4;
                                var1 = _closure3_slot0;
                                if (var2) {
                                    _fun68961_ip = 86;
                                    continue _fun68961
                                }
                            case 73:
                                var2 = var1.registerForEvents;
                                var2 = var2.bind(var1)(var3);
                                _fun68961_ip = 103;
                                continue _fun68961;
                            case 86:
                                var2 = var1.workletEventHandler;
                                var1 = var2.registerForEvents;
                                var1 = var1.bind(var2)(var3);
                            case 103:
                                return var0;
                        }
                    };
                    var1 = _closure2_slot0;
                    var3 = var1.current;
                    var1 = undefined;
                    if (var3) {
                        _fun68960_ip = 48;
                        continue _fun68960
                    }
                case 33:
                    var3 = global;
                    var3 = var3.queueMicrotask;
                    var3 = var3.bind(var1)(var2);
                    _fun68960_ip = 52;
                    continue _fun68960;
                case 48:
                    var1 = var2.bind(var1)();
                case 52:
                    var0 = function() { // Environment: var0
                        _fun68962: for (var _fun68962_ip = 0;;) switch (_fun68962_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 2;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.findNodeHandle;
                                var1 = _closure2_slot0;
                                var1 = var1.current;
                                var3 = var2.bind(var3)(var1);
                                if (!var3) {
                                    _fun68962_ip = 103;
                                    continue _fun68962
                                }
                            case 51:
                                var4 = _closure3_slot0;
                                var2 = 'workletEventHandler';
                                var2 = var2 in var4;
                                var1 = _closure3_slot0;
                                if (var2) {
                                    _fun68962_ip = 86;
                                    continue _fun68962
                                }
                            case 73:
                                var2 = var1.unregisterFromEvents;
                                var2 = var2.bind(var1)(var3);
                                _fun68962_ip = 103;
                                continue _fun68962;
                            case 86:
                                var2 = var1.workletEventHandler;
                                var1 = var2.unregisterFromEvents;
                                var1 = var1.bind(var2)(var3);
                            case 103:
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        return var0;
    };
    var2.useEventHandlerRegistration = var3;
    var1 = function arg0, arg1() {
        _fun68963: for (var _fun68963_ip = 0;;) switch (_fun68963_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = undefined;
                var3 = null;
                var0 = var2.bind(var0)(var3);
                var2 = var0.current;
                if (!(var3 === var2)) {
                    _fun68963_ip = 67;
                    continue _fun68963
                }
            case 25:
                var1 = _closure1_slot3;
                var4 = var1.Value;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = arg0;
                var5 = arg1;
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                var0.current = var1;
            case 67:
                var0 = var0.current;
                return var0;
        }
    };
    var2.useAnimatedValue = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8596]);