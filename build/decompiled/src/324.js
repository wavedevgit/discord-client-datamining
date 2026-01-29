// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var4 = 0;
    var7 = var5[var4];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var5 = var5[var4];
    var4 = require;
    var4 = var4.bind(var0)(var5);
    var4 = var4.useRef;
    var _closure1_slot3 = var4;
    var3 = var3.Set;
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var11 = var4;
    var3 = new var11[var3](var10);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot4 = var3;
    var3 = function(arg0) { // Original name: unstable_setImageComponentDecorator, environment: var1
        var0 = arg0;
        var _closure1_slot2 = var0;
        var0 = undefined;
        return var0;
    };
    var2.unstable_setImageComponentDecorator = var3;
    var3 = function() { // Original name: unstable_getImageComponentDecorator, environment: var1
        var0 = _closure1_slot2;
        return var0;
    };
    var2.unstable_getImageComponentDecorator = var3;
    var3 = function(arg0) { // Original name: unstable_registerImageAttachedCallback, environment: var1
        var2 = _closure1_slot4;
        var1 = var2.add;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.unstable_registerImageAttachedCallback = var3;
    var3 = function(arg0) { // Original name: unstable_unregisterImageAttachedCallback, environment: var1
        var2 = _closure1_slot4;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.unstable_unregisterImageAttachedCallback = var3;
    var1 = function(arg0) { // Original name: useWrapRefWithImageAttachedCallbacks, environment: var1
        _fun4885: for (var _fun4885_ip = 0;;) switch (_fun4885_ip) {
            case 0:
                var0 = _closure1_slot3;
                var3 = undefined;
                var4 = new Array(0);
                var4 = var0.bind(var3)(var4);
                var _closure2_slot0 = var4;
                var5 = null;
                var0 = var0.bind(var3)(var5);
                var4 = var0.current;
                if (!(var5 == var4)) {
                    _fun4885_ip = 51;
                    continue _fun4885
                }
            case 40:
                var2 = function(arg0) { // Environment: var2
                    _fun4886: for (var _fun4886_ip = 0;;) switch (_fun4886_ip) {
                        case 0:
                            var2 = arg0;
                            var _closure3_slot0 = var2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun4886_ip = 39;
                                continue _fun4886
                            }
                        case 15:
                            var3 = _closure1_slot4;
                            var2 = var3.forEach;
                            var1 = function(arg0) { // Environment: var0
                                _fun4888: for (var _fun4888_ip = 0;;) switch (_fun4888_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var1 = arg0;
                                        var0 = undefined;
                                        var3 = var1.bind(var0)(var2);
                                        var1 = null;
                                        if (!(var1 != var3)) {
                                            _fun4888_ip = 45;
                                            continue _fun4888
                                        }
                                    case 23:
                                        var1 = _closure2_slot0;
                                        var2 = var1.current;
                                        var1 = var2.push;
                                        var1 = var1.bind(var2)(var3);
                                    case 45:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            _fun4886_ip = 96;
                            continue _fun4886;
                        case 39:
                            var2 = _closure2_slot0;
                            var2 = var2.current;
                            var3 = var2.length;
                            var2 = 0;
                            if (!(var3 > var2)) {
                                _fun4886_ip = 96;
                                continue _fun4886
                            }
                        case 62:
                            var1 = _closure2_slot0;
                            var3 = var1.current;
                            var2 = var3.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0);
                            var0 = new Array(0);
                            var1.current = var0;
                        case 96:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.current = var2;
            case 51:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var0.current;
                var0 = arg0;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useWrapRefWithImageAttachedCallbacks = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 325]);