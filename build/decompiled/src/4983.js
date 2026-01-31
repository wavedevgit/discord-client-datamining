// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun44998: for (var _fun44998_ip = 0;;) switch (_fun44998_ip) {
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
                _fun44998_ip = 74;
                continue _fun44998;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot5 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var4 = var4[var3];
    var3 = arg1;
    var3 = var3.bind(var0)(var4);
    var3 = var3.BaseGesture;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: NativeGesture, environment: var5
            _fun45002: for (var _fun45002_ip = 0;;) switch (_fun45002_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot5;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun45002_ip = 62;
                        continue _fun45002
                    }
                case 49:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var2);
                    _fun45002_ip = 100;
                    continue _fun45002;
                case 62:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var4 = _closure1_slot3;
                    var4 = var4.bind(var2)(var3);
                    var5 = var4.constructor;
                    var4 = new Array(0);
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 100:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var0.config = var1;
                    var1 = 'NativeViewGestureHandler';
                    var0.handlerName = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'shouldActivateOnStart';
        var4.key = var0;
        var0 = function(arg0) { // Original name: shouldActivateOnStart, environment: var5
            var0 = this;
            var2 = var0.config;
            var1 = arg0;
            var2.shouldActivateOnStart = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'disallowInterruption';
        var4.key = var6;
        var5 = function(arg0) { // Original name: disallowInterruption, environment: var5
            var0 = this;
            var2 = var0.config;
            var1 = arg0;
            var2.disallowInterruption = var1;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.NativeGesture = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4963]);