// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun44751: for (var _fun44751_ip = 0;;) switch (_fun44751_ip) {
        case 0:
            var13 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var14 = dependencyMap;
            var _closure1_slot0 = var13;
            var _closure1_slot1 = var14;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
                _fun44752: for (var _fun44752_ip = 0;;) switch (_fun44752_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun44752_ip = 74;
                        continue _fun44752;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot7 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot7 = var0;
            var0 = global;
            var5 = var0.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var4.bind(var5)(var2, var0, var3);
            var0 = 0;
            var3 = var14[var0];
            var0 = undefined;
            var12 = var8.bind(var0)(var3);
            var3 = 1;
            var3 = var14[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot2 = var3;
            var3 = 2;
            var3 = var14[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var3 = 3;
            var3 = var14[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot4 = var3;
            var3 = 4;
            var3 = var14[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot5 = var3;
            var3 = 5;
            var3 = var14[var3];
            var3 = var8.bind(var0)(var3);
            var _closure1_slot6 = var3;
            var3 = 6;
            var3 = var14[var3];
            var4 = var8.bind(var0)(var3);
            var3 = 7;
            var3 = var14[var3];
            var6 = var8.bind(var0)(var3);
            var3 = ['minForce', 'maxForce', 'feedbackOnActivation'];
            var4 = var4.Component;
            var1 = function(arg0) { // Environment: var1
                var3 = function() { // Original name: ForceTouchFallback, environment: var5
                    _fun44756: for (var _fun44756_ip = 0;;) switch (_fun44756_ip) {
                        case 0:
                            var3 = this;
                            var2 = undefined;
                            var4 = undefined;
                            var0 = _closure1_slot2;
                            var1 = _closure2_slot0;
                            var0 = var0.bind(var2)(var3, var1);
                            var0 = _closure1_slot5;
                            var8 = var0.bind(var2)(var1);
                            var1 = _closure1_slot4;
                            var0 = _closure1_slot7;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun44756_ip = 69;
                                continue _fun44756
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun44756_ip = 105;
                            continue _fun44756;
                        case 69:
                            var6 = global;
                            var7 = var6.Reflect;
                            var6 = var7.construct;
                            var5 = _closure1_slot5;
                            var5 = var5.bind(var2)(var3);
                            var5 = var5.constructor;
                            var4 = arguments;
                            var0 = var6.bind(var7)(var8, var4, var5);
                        case 105:
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot6;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot3;
                var4 = {};
                var0 = 'componentDidMount';
                var4.key = var0;
                var0 = function() { // Original name: componentDidMount, environment: var5
                    var0 = global;
                    var3 = var0.console;
                    var2 = var3.warn;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var1);
                    var4 = var5.tagMessage;
                    var1 = 'ForceTouchGestureHandler is not available on this platform. Please use ForceTouchGestureHandler.forceTouchAvailable to conditionally render other components that would provide a fallback behavior specific to your usecase';
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(2);
                var0[0] = var4;
                var4 = {};
                var6 = 'render';
                var4.key = var6;
                var5 = function() { // Original name: render, environment: var5
                    var0 = this;
                    var0 = var0.props;
                    var0 = var0.children;
                    return var0;
                };
                var4.value = var5;
                var0[1] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var9 = var1.bind(var0)(var4);
            var5 = false;
            var9.forceTouchAvailable = var5;
            var4 = null;
            var1 = var9;
            if (!(var4 != var6)) {
                _fun44751_ip = 311;
                continue _fun44751
            }
        case 223:
            var7 = var6.forceTouchAvailable;
            var1 = var9;
            if (!var7) {
                _fun44751_ip = 311;
                continue _fun44751
            }
        case 235:
            var7 = 9;
            var7 = var14[var7];
            var8 = var8.bind(var0)(var7);
            var7 = {};
            var9 = 'ForceTouchGestureHandler';
            var7.name = var9;
            var11 = new Array(0);
            var10 = var11.concat;
            var9 = 10;
            var9 = var14[var9];
            var9 = var13.bind(var0)(var9);
            var9 = var9.baseGestureHandlerProps;
            var9 = var12.bind(var0)(var9);
            var9 = var10.bind(var11)(var9, var3);
            var7.allowedProps = var9;
            var9 = {};
            var7.config = var9;
            var1 = var8.bind(var0)(var7);
        case 311:
            var7 = var4 == var6;
            var4 = undefined;
            if (var7) {
                _fun44751_ip = 326;
                continue _fun44751
            }
        case 320:
            var4 = var6.forceTouchAvailable;
        case 326:
            if (var4) {
                _fun44751_ip = 331;
                continue _fun44751
            }
        case 329:
            var4 = false;
        case 331:
            var1.forceTouchAvailable = var4;
            var2.forceTouchGestureHandlerProps = var3;
            var3 = 'ForceTouchGestureHandler';
            var2.forceTouchHandlerName = var3;
            var2.ForceTouchGestureHandler = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 15, 17, 18, 31, 4952, 4928, 4943, 4941]);