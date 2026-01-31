// modules/panels/morphable/native/useScreenNameSharedValue.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/panels/morphable/native/useScreenNameSharedValue.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useScreenNameSharedValue, environment: var1
        _fun110290: for (var _fun110290_ip = 0;;) switch (_fun110290_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var5 = undefined;
                var6 = var3.bind(var5)(var0);
                var0 = var6.getRootNavigationRef;
                var9 = var0.bind(var6)();
                var0 = 2;
                var0 = var4[var0];
                var4 = var3.bind(var5)(var0);
                var3 = var4.useSharedValue;
                var6 = null;
                var0 = var6 == var9;
                var10 = undefined;
                if (var0) {
                    _fun110290_ip = 76;
                    continue _fun110290
                }
            case 66:
                var0 = var9.isReady;
                var10 = var0.bind(var9)();
            case 76:
                var7 = 'unknown';
                var8 = true;
                var0 = var7;
                if (!(var8 === var10)) {
                    _fun110290_ip = 126;
                    continue _fun110290
                }
            case 89:
                var8 = var9.getCurrentRoute;
                var8 = var8.bind(var9)();
                var9 = var6 == var8;
                var5 = undefined;
                if (var9) {
                    _fun110290_ip = 113;
                    continue _fun110290
                }
            case 108:
                var5 = var8.name;
            case 113:
                var6 = var6 != var5;
                var0 = var7;
                if (!var6) {
                    _fun110290_ip = 126;
                    continue _fun110290
                }
            case 123:
                var0 = var5;
            case 126:
                var0 = var3.bind(var4)(var0);
                var _closure2_slot0 = var0;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var1
                    _fun110291: for (var _fun110291_ip = 0;;) switch (_fun110291_ip) {
                        case 0:
                            var4 = function() { // Original name: handleStateChange, environment: var0
                                _fun110292: for (var _fun110292_ip = 0;;) switch (_fun110292_ip) {
                                    case 0:
                                        var2 = _closure3_slot0;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun110292_ip = 89;
                                            continue _fun110292
                                        }
                                    case 13:
                                        var3 = _closure3_slot0;
                                        var2 = var3.isReady;
                                        var2 = var2.bind(var3)();
                                        if (!var2) {
                                            _fun110292_ip = 89;
                                            continue _fun110292
                                        }
                                    case 30:
                                        var2 = _closure3_slot0;
                                        var1 = var2.getCurrentRoute;
                                        var4 = var1.bind(var2)();
                                        var2 = _closure2_slot0;
                                        var1 = var2.set;
                                        var5 = var0 == var4;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun110292_ip = 70;
                                            continue _fun110292
                                        }
                                    case 65:
                                        var3 = var4.name;
                                    case 70:
                                        var4 = var0 != var3;
                                        var0 = 'unknown';
                                        if (!var4) {
                                            _fun110292_ip = 84;
                                            continue _fun110292
                                        }
                                    case 81:
                                        var0 = var3;
                                    case 84:
                                        var0 = var1.bind(var2)(var0);
                                    case 89:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var4;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 1;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getRootNavigationRef;
                            var3 = var2.bind(var3)();
                            var _closure3_slot0 = var3;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun110291_ip = 60;
                                continue _fun110291
                            }
                        case 58:
                            return var1;
                        case 60:
                            var2 = var3.addListener;
                            var1 = 'state';
                            var1 = var2.bind(var3)(var1, var4);
                            var0 = function() { // Environment: var0
                                var3 = _closure3_slot0;
                                var2 = var3.removeListener;
                                var1 = _closure3_slot1;
                                var0 = 'state';
                                var0 = var2.bind(var3)(var0, var1);
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3879, 3679, 2]);