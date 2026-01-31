// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun47158: for (var _fun47158_ip = 0;;) switch (_fun47158_ip) {
        case 0:
            var2 = exports;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = undefined;
            var2.addListener = var0;
            var2.removeAllListeners = var0;
            var4 = dependencyMap;
            var3 = 0;
            var4 = var4[var3];
            var3 = require;
            var3 = var3.bind(var0)(var4);
            var6 = var3.TurboModuleRegistry;
            var5 = var6.getEnforcing;
            var4 = 'RNCClipboard';
            var5 = var5.bind(var6)(var4);
            var _closure1_slot0 = var5;
            var2.default = var5;
            var3 = var3.NativeEventEmitter;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var10 = var4;
            var9 = var5;
            var3 = new var10[var3](var9, var8);
            var6 = var3 instanceof Object ? var3 : var4;
            var _closure1_slot1 = var6;
            var3 = var6.listenerCount;
            var _closure1_slot2 = var3;
            if (var3) {
                _fun47158_ip = 154;
                continue _fun47158
            }
        case 147:
            var3 = function(arg0) { // Original name: listenerCount, environment: var1
                var2 = _closure1_slot1;
                var1 = var2.listeners;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = var0.length;
                return var0;
            };
            _fun47158_ip = 170;
            continue _fun47158;
        case 154:
            var5 = var6.listenerCount;
            var4 = var5.bind;
            var3 = var4.bind(var5)(var6);
        case 170:
            _closure1_slot2 = var3;
            var3 = function(arg0) { // Original name: addListener, environment: var1
                _fun47160: for (var _fun47160_ip = 0;;) switch (_fun47160_ip) {
                    case 0:
                        var2 = _closure1_slot2;
                        var1 = undefined;
                        var3 = 'RNCClipboard_TEXT_CHANGED';
                        var2 = var2.bind(var1)(var3);
                        var1 = 0;
                        if (!(var1 === var2)) {
                            _fun47160_ip = 42;
                            continue _fun47160
                        }
                    case 26:
                        var2 = _closure1_slot0;
                        var1 = var2.setListener;
                        var1 = var1.bind(var2)();
                    case 42:
                        var2 = _closure1_slot1;
                        var1 = var2.addListener;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var3, var0);
                        var1 = var0.remove;
                        var0._remove = var1;
                        var1 = function() { // Environment: var1
                            _fun47161: for (var _fun47161_ip = 0;;) switch (_fun47161_ip) {
                                case 0:
                                    var1 = this;
                                    var0 = var1._remove;
                                    var0 = var0.bind(var1)();
                                    var3 = _closure1_slot2;
                                    var0 = undefined;
                                    var2 = 'RNCClipboard_TEXT_CHANGED';
                                    var3 = var3.bind(var0)(var2);
                                    var2 = 0;
                                    if (!(var2 === var3)) {
                                        _fun47161_ip = 53;
                                        continue _fun47161
                                    }
                                case 39:
                                    var2 = _closure1_slot0;
                                    var1 = var2.removeListener;
                                    var1 = var1.bind(var2)();
                                case 53:
                                    return var0;
                            }
                        };
                        var0.remove = var1;
                        return var0;
                }
            };
            var2.addListener = var3;
            var1 = function() { // Original name: removeAllListeners, environment: var1
                var3 = _closure1_slot1;
                var2 = var3.removeAllListeners;
                var1 = 'RNCClipboard_TEXT_CHANGED';
                var1 = var2.bind(var3)(var1);
                var1 = _closure1_slot0;
                var0 = var1.removeListener;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var2.removeAllListeners = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);