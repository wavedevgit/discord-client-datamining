// modules/collectibles/native/useShopOrientationLock.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var3 = 0;
    var7 = var5[var3];
    var6 = metroImportAll;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/useShopOrientationLock.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot2;
        var2 = var3.useRef;
        var1 = false;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var2 = var3.useEffect;
        var1 = function() { // Environment: var0
            _fun88642: for (var _fun88642_ip = 0;;) switch (_fun88642_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.isMetaQuest;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun88642_ip = 123;
                        continue _fun88642
                    }
                case 38:
                    var3 = _closure1_slot3;
                    var1 = 0;
                    if (!(var1 === var3)) {
                        _fun88642_ip = 86;
                        continue _fun88642
                    }
                case 48:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 2;
                    var1 = var4[var1];
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.lockOrientation;
                    var3 = 'PORTRAIT';
                    var1 = true;
                    var1 = var4.bind(var5)(var3, var1);
                case 86:
                    var3 = _closure2_slot0;
                    var1 = true;
                    var3.current = var1;
                    var1 = _closure1_slot3;
                    var1 = var1 + 1;
                    _closure1_slot3 = var1;
                    var1 = function() { // Environment: var1
                        _fun88643: for (var _fun88643_ip = 0;;) switch (_fun88643_ip) {
                            case 0:
                                var1 = _closure2_slot0;
                                var1 = var1.current;
                                if (!var1) {
                                    _fun88643_ip = 89;
                                    continue _fun88643
                                }
                            case 15:
                                var2 = _closure1_slot3;
                                var3 = var2 - 1;
                                _closure1_slot3 = var3;
                                var2 = 0;
                                if (!(var2 === var3)) {
                                    _fun88643_ip = 77;
                                    continue _fun88643
                                }
                            case 35:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var1 = 2;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.unlockOrientation;
                                var1 = {};
                                var4 = false;
                                var1.unlockAfterRotatingToPreviousLock = var4;
                                var1 = var2.bind(var3)(var1);
                            case 77:
                                var1 = _closure2_slot0;
                                var0 = false;
                                var1.current = var0;
                            case 89:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var1;
                case 123:
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.useShopOrientationLock = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4065, 7780, 2]);