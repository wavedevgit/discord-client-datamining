// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: findHandler, environment: var0
        var2 = _closure1_slot2;
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot5 = var2;
    var3 = global;
    var7 = var3.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var1, var4, var5);
    var4 = var3.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var11 = var5;
    var4 = new var11[var4](var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot2 = var4;
    var4 = var3.Map;
    var5 = var4.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var4
        }
    });
    var11 = var5;
    var4 = new var11[var4](var10);
    var4 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot3 = var4;
    var3 = var3.Map;
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
    var3 = {};
    var1.handlerIDToTag = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: registerHandler, environment: var0
        _fun44634: for (var _fun44634_ip = 0;;) switch (_fun44634_ip) {
            case 0:
                var4 = arg0;
                var3 = arg2;
                var5 = _closure1_slot2;
                var2 = var5.set;
                var0 = arg1;
                var0 = var2.bind(var5)(var4, var0);
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var2);
                var2 = var5.isTestEnv;
                var2 = var2.bind(var5)();
                if (!var2) {
                    _fun44634_ip = 64;
                    continue _fun44634
                }
            case 61:
                var2 = var3;
            case 64:
                if (!var2) {
                    _fun44634_ip = 82;
                    continue _fun44634
                }
            case 67:
                var2 = _closure1_slot4;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var4);
            case 82:
                return var0;
        }
    };
    var1.registerHandler = var3;
    var3 = function(arg0, arg1) { // Original name: registerOldGestureHandler, environment: var0
        var3 = _closure1_slot3;
        var2 = var3.set;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var1.registerOldGestureHandler = var3;
    var3 = function(arg0) { // Original name: unregisterOldGestureHandler, environment: var0
        var2 = _closure1_slot3;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.unregisterOldGestureHandler = var3;
    var3 = function(arg0, arg1) { // Original name: unregisterHandler, environment: var0
        _fun44637: for (var _fun44637_ip = 0;;) switch (_fun44637_ip) {
            case 0:
                var3 = arg1;
                var4 = _closure1_slot2;
                var2 = var4.delete;
                var0 = arg0;
                var0 = var2.bind(var4)(var0);
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.isTestEnv;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun44637_ip = 60;
                    continue _fun44637
                }
            case 57:
                var2 = var3;
            case 60:
                if (!var2) {
                    _fun44637_ip = 77;
                    continue _fun44637
                }
            case 63:
                var2 = _closure1_slot4;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
            case 77:
                return var0;
        }
    };
    var1.unregisterHandler = var3;
    var1.findHandler = var2;
    var2 = function(arg0) { // Original name: findOldGestureHandler, environment: var0
        var2 = _closure1_slot3;
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.findOldGestureHandler = var2;
    var0 = function(arg0) { // Original name: findHandlerByTestID, environment: var0
        _fun44639: for (var _fun44639_ip = 0;;) switch (_fun44639_ip) {
            case 0:
                var3 = _closure1_slot4;
                var2 = var3.get;
                var0 = arg0;
                var4 = var2.bind(var3)(var0);
                var3 = null;
                var2 = undefined;
                var0 = null;
                if (!(var2 !== var4)) {
                    _fun44639_ip = 51;
                    continue _fun44639
                }
            case 30:
                var1 = _closure1_slot5;
                var1 = var1.bind(var2)(var4);
                var2 = var3 != var1;
                var0 = null;
                if (!var2) {
                    _fun44639_ip = 51;
                    continue _fun44639
                }
            case 48:
                var0 = var1;
            case 51:
                return var0;
        }
    };
    var1.findHandlerByTestID = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4927]);