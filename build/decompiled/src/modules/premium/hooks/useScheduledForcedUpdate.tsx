// modules/premium/hooks/useScheduledForcedUpdate.tsx
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
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/hooks/useScheduledForcedUpdate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useScheduledForcedUpdate, environment: var1
        _fun57973: for (var _fun57973_ip = 0;;) switch (_fun57973_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.delay;
                var _closure2_slot0 = var7;
                var6 = var0.disable;
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun57973_ip = 29;
                    continue _fun57973
                }
            case 27:
                var6 = false;
            case 29:
                var _closure2_slot1 = var6;
                var _closure2_slot2 = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.useForceUpdate;
                var5 = var3.bind(var4)();
                _closure2_slot2 = var5;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    _fun57974: for (var _fun57974_ip = 0;;) switch (_fun57974_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = 0;
                            if (!(!(var3 <= var2))) {
                                _fun57974_ip = 58;
                                continue _fun57974
                            }
                        case 15:
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun57974_ip = 58;
                                continue _fun57974
                            }
                        case 22:
                            var2 = global;
                            var4 = var2.setTimeout;
                            var3 = _closure2_slot0;
                            var2 = undefined;
                            var1 = function() { // Environment: var0
                                var1 = _closure2_slot2;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1 = var4.bind(var2)(var1, var3);
                            var _closure3_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = global;
                                var2 = var0.clearTimeout;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            return var0;
                        case 58:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7020, 2]);