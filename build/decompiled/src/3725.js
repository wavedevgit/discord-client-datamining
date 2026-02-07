// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var4 = function() {
        var0 = global;
        var0 = var0.process;
        var0 = var0.env;
        var0 = var0.JEST_WORKER_ID;
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var _closure1_slot2 = var4;
    var3 = function() {
        _fun33215: for (var _fun33215_ip = 0;;) switch (_fun33215_ip) {
            case 0:
                var0 = _closure1_slot0;
                var0 = var0.nativeCallSyncHook;
                if (!var0) {
                    _fun33215_ip = 29;
                    continue _fun33215
                }
            case 16:
                var2 = _closure1_slot0;
                var2 = var2.__REMOTEDEV__;
                var0 = !var2;
            case 29:
                if (var0) {
                    _fun33215_ip = 42;
                    continue _fun33215
                }
            case 32:
                var1 = _closure1_slot0;
                var0 = var1.RN$Bridgeless;
            case 42:
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.version;
    var _closure1_slot1 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.Platform;
    var2.isJest = var4;
    var2.isChromeDebugger = var3;
    var3 = function() {
        var0 = false;
        return var0;
    };
    var2.isWeb = var3;
    var3 = function() {
        var0 = true;
        return var0;
    };
    var2.isAndroid = var3;
    var3 = function() {
        var0 = false;
        return var0;
    };
    var2.isIOS = var3;
    var3 = function() {
        var0 = false;
        return var0;
    };
    var2.isMacOS = var3;
    var3 = function() {
        _fun33220: for (var _fun33220_ip = 0;;) switch (_fun33220_ip) {
            case 0:
                var0 = _closure1_slot2;
                var2 = undefined;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun33220_ip = 24;
                    continue _fun33220
                }
            case 16:
                var1 = _closure1_slot3;
                var0 = var1.bind(var2)();
            case 24:
                if (var0) {
                    _fun33220_ip = 29;
                    continue _fun33220
                }
            case 27:
                var0 = false;
            case 29:
                return var0;
        }
    };
    var2.shouldBeUseWeb = var3;
    var3 = function() {
        var0 = _closure1_slot0;
        var0 = var0._IS_FABRIC;
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var2.isFabric = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = var2.startsWith;
        var0 = '19.';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isReact19 = var3;
    var1 = function() {
        var0 = global;
        var0 = var0.window;
        var1 = 'undefined';
        var0 = typeof var0;
        var0 = var1 !== var0;
        return var0;
    };
    var2.isWindowAvailable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27]);