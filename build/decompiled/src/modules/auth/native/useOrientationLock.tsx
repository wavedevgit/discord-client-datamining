// modules/auth/native/useOrientationLock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun101097: for (var _fun101097_ip = 0;;) switch (_fun101097_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var0 = var3[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var2.isIpadOS;
                var0 = var0.bind(var2)();
                var0 = !var0;
                if (!var0) {
                    _fun101097_ip = 74;
                    continue _fun101097
                }
            case 41:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isMetaQuest;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 74:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/useOrientationLock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot2;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            _fun101099: for (var _fun101099_ip = 0;;) switch (_fun101099_ip) {
                case 0:
                    var1 = _closure1_slot3;
                    var2 = undefined;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun101099_ip = 54;
                        continue _fun101099
                    }
                case 16:
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var0 = var3[var0];
                    var3 = var1.bind(var2)(var0);
                    var2 = var3.lockOrientation;
                    var1 = 'PORTRAIT';
                    var0 = false;
                    var0 = var2.bind(var3)(var1, var0);
                case 54:
                    var0 = function() { // Environment: var0
                        _fun101100: for (var _fun101100_ip = 0;;) switch (_fun101100_ip) {
                            case 0:
                                var2 = _closure1_slot3;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                if (!var2) {
                                    _fun101100_ip = 56;
                                    continue _fun101100
                                }
                            case 16:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 3;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.unlockOrientation;
                                var1 = {};
                                var4 = false;
                                var1.unlockAfterRotatingToPreviousLock = var4;
                                var1 = var2.bind(var3)(var1);
                            case 56:
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1309, 4106, 7888, 2]);