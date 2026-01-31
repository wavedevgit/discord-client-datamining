// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            _fun2935: for (var _fun2935_ip = 0;;) switch (_fun2935_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var4 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var1, var3);
                    var3 = !var2;
                    var4 = !var3;
                    if (var3) {
                        _fun2935_ip = 54;
                        continue _fun2935
                    }
                case 37:
                    var3 = var2.addListener;
                    var5 = 'function';
                    var3 = typeof var3;
                    var4 = var5 === var3;
                case 54:
                    var5 = !var2;
                    var3 = !var5;
                    if (var5) {
                        _fun2935_ip = 80;
                        continue _fun2935
                    }
                case 63:
                    var5 = var2.removeListeners;
                    var6 = 'function';
                    var5 = typeof var5;
                    var3 = var6 === var5;
                case 80:
                    if (!var2) {
                        _fun2935_ip = 89;
                        continue _fun2935
                    }
                case 83:
                    if (!var4) {
                        _fun2935_ip = 89;
                        continue _fun2935
                    }
                case 86:
                    if (var3) {
                        _fun2935_ip = 151;
                        continue _fun2935
                    }
                case 89:
                    var5 = null;
                    if (!(var5 != var2)) {
                        _fun2935_ip = 157;
                        continue _fun2935
                    }
                case 95:
                    if (var4) {
                        _fun2935_ip = 122;
                        continue _fun2935
                    }
                case 98:
                    var4 = global;
                    var6 = var4.console;
                    var5 = var6.warn;
                    var4 = '`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.';
                    var4 = var5.bind(var6)(var4);
                case 122:
                    if (var3) {
                        _fun2935_ip = 157;
                        continue _fun2935
                    }
                case 125:
                    var3 = global;
                    var5 = var3.console;
                    var4 = var5.warn;
                    var3 = '`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.';
                    var3 = var4.bind(var5)(var3);
                    _fun2935_ip = 157;
                    continue _fun2935;
                case 151:
                    var1._nativeModule = var2;
                case 157:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addListener';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun2936: for (var _fun2936_ip = 0;;) switch (_fun2936_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = var0._nativeModule;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun2936_ip = 35;
                        continue _fun2936
                    }
                case 24:
                    var0 = var2.addListener;
                    var0 = var0.bind(var2)(var5);
                case 35:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 2;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.addListener;
                    var2 = arg1;
                    var0 = arg2;
                    var0 = var3.bind(var4)(var5, var2, var0);
                    var _closure3_slot1 = var0;
                    var0 = {};
                    var1 = function() {
                        _fun2937: for (var _fun2937_ip = 0;;) switch (_fun2937_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun2937_ip = 59;
                                    continue _fun2937
                                }
                            case 13:
                                var2 = _closure3_slot0;
                                var4 = var2._nativeModule;
                                if (!(var0 != var4)) {
                                    _fun2937_ip = 41;
                                    continue _fun2937
                                }
                            case 27:
                                var3 = var4.removeListeners;
                                var2 = 1;
                                var2 = var3.bind(var4)(var2);
                            case 41:
                                var3 = _closure3_slot1;
                                var2 = var3.remove;
                                var2 = var2.bind(var3)();
                                _closure3_slot1 = var0;
                            case 59:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.remove = var1;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'emit';
        var0.key = var5;
        var5 = function arg0() {
            _fun2938: for (var _fun2938_ip = 0;;) switch (_fun2938_ip) {
                case 0:
                    var0 = undefined;
                    var4 = undefined;
                    var3 = arguments.length;
                    var1 = global;
                    var6 = var1.Array;
                    var2 = 1;
                    var5 = var3 > var2;
                    var1 = 0;
                    if (!var5) {
                        _fun2938_ip = 31;
                        continue _fun2938
                    }
                case 27:
                    var1 = var3 - var2;
                case 31:
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var5;
                    var9 = var1;
                    var1 = new var10[var6](var9, var8);
                    var6 = var1 instanceof Object ? var1 : var5;
                    var5 = var2 < var3;
                    var1 = var2;
                    if (!var5) {
                        _fun2938_ip = 83;
                        continue _fun2938
                    }
                case 64:
                    var7 = var1 - var2;
                    var5 = arguments[var1];
                    var6[var7] = var5;
                    var1 = var1 + 1;
                    if (var1 < var3) {
                        _fun2938_ip = 64;
                        continue _fun2938
                    }
                case 83:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 2;
                    var3 = var5[var1];
                    var3 = var2.bind(var0)(var3);
                    var4 = var3.emit;
                    var3 = var4.apply;
                    var1 = var5[var1];
                    var2 = var2.bind(var0)(var1);
                    var5 = new Array(1);
                    var1 = arg0;
                    var5[0] = var1;
                    var1 = var5.concat;
                    var1 = var1.bind(var5)(var6);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'removeAllListeners';
        var0.key = var5;
        var5 = function arg0() {
            _fun2939: for (var _fun2939_ip = 0;;) switch (_fun2939_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 3;
                    var2 = var2[var0];
                    var0 = undefined;
                    var7 = var4.bind(var0)(var2);
                    var2 = null;
                    var5 = var2 != var3;
                    var4 = '`NativeEventEmitter.removeAllListener()` requires a non-null argument.';
                    var4 = var7.bind(var0)(var5, var4);
                    var5 = var6._nativeModule;
                    if (!(var2 != var5)) {
                        _fun2939_ip = 81;
                        continue _fun2939
                    }
                case 59:
                    var4 = var5.removeListeners;
                    var2 = var6.listenerCount;
                    var2 = var2.bind(var6)(var3);
                    var2 = var4.bind(var5)(var2);
                case 81:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 2;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.removeAllListeners;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'listenerCount';
        var0.key = var5;
        var4 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.listenerCount;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 101, 44]);