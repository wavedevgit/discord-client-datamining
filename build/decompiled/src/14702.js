// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportAll;
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
    var3 = var3.Platform;
    var3 = function arg0, arg1() {
        _fun114695: for (var _fun114695_ip = 0;;) switch (_fun114695_ip) {
            case 0:
                var1 = arg1;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 1;
                var2 = var2[var4];
                var3 = undefined;
                var5 = var5.bind(var3)(var2);
                var2 = null;
                if (!(var2 != var5)) {
                    _fun114695_ip = 80;
                    continue _fun114695
                }
            case 40:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var4];
                var3 = var2.bind(var3)(var1);
                var2 = var3.get;
                var1 = arg0;
                var0 = function() { // Environment: var0
                    var0 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)();
                    var2 = var0.validAttributes;
                    var1 = function arg0() {
                        _fun114697: for (var _fun114697_ip = 0;;) switch (_fun114697_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3;
                                var1 = global;
                                var2 = var1.Object;
                                var1 = var2.keys;
                                var1 = var1.bind(var2)(var3);
                                var3 = var1;
                                var2 = var3[Symbol.iterator];
                                var3 = var2().next;
                                var1 = undefined;
                            case 34:
                                var7 = var3().value;
                                var5 = var2;
                                if (!(var5 !== var1)) {
                                    _fun114697_ip = 87;
                                    continue _fun114697
                                }
                            case 45: // try_start_0
                                var6 = var0;
                                var5 = {};
                                var8 = function arg0, arg1() {
                                    var1 = arg0;
                                    var0 = arg1;
                                    var0 = var1 !== var0;
                                    return var0;
                                };
                                var5.diff = var8;
                                var8 = function arg0() {
                                    var0 = arg0;
                                    return var0;
                                };
                                var5.process = var8;
                                var6[var7] = var5;
                            case 78: // try_end0
                                _fun114697_ip = 34;
                                continue _fun114697;
                            case 80: // catch_target0
                                CatchBlockStart(arg_register = 1);
                                var2.return();
                                throw var1;
                            case 87:
                                return var0;
                        }
                    };
                    var1 = var1.bind(var3)(var2);
                    var0.validAttributes = var1;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 80:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = 'NativeComponentRegistry is not available on android!';
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.getHostComponent = var3;
    var1 = function arg0() {
        _fun114700: for (var _fun114700_ip = 0;;) switch (_fun114700_ip) {
            case 0:
                var2 = arg0;
                var3 = 'function';
                var1 = typeof var2;
                var0 = var2;
                if (!(var3 === var1)) {
                    _fun114700_ip = 27;
                    continue _fun114700
                }
            case 17:
                var1 = {};
                var1.f = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var2.callback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 42]);