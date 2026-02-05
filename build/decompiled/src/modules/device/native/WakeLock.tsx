// modules/device/native/WakeLock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useEffect;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun64835: for (var _fun64835_ip = 0;;) switch (_fun64835_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 2;
                    var1 = var2[var1];
                    var2 = undefined;
                    var3 = var3.bind(var2)(var1);
                    var1 = var3.isAndroid;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun64835_ip = 68;
                        continue _fun64835
                    }
                case 38:
                    var1 = _closure1_slot4;
                    var4 = var1.ScreenWakeLockManager;
                    var3 = var4.requestLock;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var1);
                    _fun64835_ip = 106;
                    continue _fun64835;
                case 68:
                    var1 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 3;
                    var0 = var3[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.requestLock;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                case 106:
                    var0 = function() { // Environment: var0
                        _fun64836: for (var _fun64836_ip = 0;;) switch (_fun64836_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 2;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.isAndroid;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun64836_ip = 68;
                                    continue _fun64836
                                }
                            case 38:
                                var2 = _closure1_slot4;
                                var4 = var2.ScreenWakeLockManager;
                                var3 = var4.releaseLock;
                                var2 = _closure2_slot0;
                                var2 = var3.bind(var4)(var2);
                                _fun64836_ip = 106;
                                continue _fun64836;
                            case 68:
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 3;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.releaseLock;
                                var1 = _closure2_slot0;
                                var1 = var2.bind(var3)(var1);
                            case 106:
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot5 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/device/native/WakeLock.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var0 = arg0;
        var2 = var0.wakeLockKey;
        var1 = _closure1_slot5;
        var0 = undefined;
        var0 = var1.bind(var0)(var2);
        var0 = null;
        return var0;
    };
    var2.default = var3;
    var2.useWakeLock = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 478, 8080, 2]);