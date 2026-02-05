// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useLayoutEffect;
    var _closure1_slot2 = var3;
    var1 = function arg0, arg1() {
        _fun45445: for (var _fun45445_ip = 0;;) switch (_fun45445_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.isFabricInstalled;
                var3 = var3.bind(var4)();
                if (!var3) {
                    _fun45445_ip = 68;
                    continue _fun45445
                }
            case 54:
                var2 = _closure1_slot2;
                var1 = function() { // Environment: var1
                    _fun45446: for (var _fun45446_ip = 0;;) switch (_fun45446_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (!var1) {
                                _fun45446_ip = 124;
                                continue _fun45446
                            }
                        case 10:
                            var1 = _closure2_slot0;
                            var1 = var1.current;
                            if (!var1) {
                                _fun45446_ip = 124;
                                continue _fun45446
                            }
                        case 22:
                            var1 = _closure2_slot0;
                            var1 = var1.current;
                            var1 = var1.unstable_getBoundingClientRect;
                            var2 = null;
                            if (!(var2 !== var1)) {
                                _fun45446_ip = 75;
                                continue _fun45446
                            }
                        case 43:
                            var1 = _closure2_slot0;
                            var3 = var1.current;
                            var1 = var3.unstable_getBoundingClientRect;
                            var4 = var1.bind(var3)();
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var4);
                            _fun45446_ip = 124;
                            continue _fun45446;
                        case 75:
                            var1 = _closure2_slot0;
                            var1 = var1.current;
                            var1 = var1.getBoundingClientRect;
                            if (!(var2 !== var1)) {
                                _fun45446_ip = 124;
                                continue _fun45446
                            }
                        case 94:
                            var1 = _closure2_slot0;
                            var2 = var1.current;
                            var1 = var2.getBoundingClientRect;
                            var2 = var1.bind(var2)();
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 124:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
            case 68:
                return var0;
        }
    };
    var2.useBoundingClientRect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4958]);