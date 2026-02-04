// ../discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var0 = var0.window;
    var _closure1_slot0 = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/design/utils/requestSafeIdleCallback.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        _closure1_slot0 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setOriginWindow = var3;
    var1 = function arg0, arg1() {
        _fun8468: for (var _fun8468_ip = 0;;) switch (_fun8468_ip) {
            case 0:
                var7 = arg0;
                var5 = arg1;
                var _closure2_slot0 = var7;
                var4 = _closure1_slot0;
                var _closure2_slot1 = var4;
                var1 = undefined;
                if (!(var1 !== var4)) {
                    _fun8468_ip = 51;
                    continue _fun8468
                }
            case 29:
                var3 = var4.requestIdleCallback;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun8468_ip = 51;
                    continue _fun8468
                }
            case 41:
                var3 = var4.cancelIdleCallback;
                if (!(var2 == var3)) {
                    _fun8468_ip = 75;
                    continue _fun8468
                }
            case 51:
                var6 = var4.setTimeout;
                var3 = 0;
                var3 = var6.bind(var4)(var7, var3);
                var _closure2_slot6 = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.clearTimeout;
                    var0 = _closure2_slot6;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                return var3;
            case 75:
                var3 = false;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var2;
                var6 = function() {
                    _fun8469: for (var _fun8469_ip = 0;;) switch (_fun8469_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun8469_ip = 59;
                                continue _fun8469
                            }
                        case 10:
                            var1 = true;
                            _closure2_slot2 = var1;
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun8469_ip = 49;
                                continue _fun8469
                            }
                        case 26:
                            var4 = _closure2_slot1;
                            var3 = var4.clearTimeout;
                            var2 = _closure2_slot3;
                            var2 = var3.bind(var4)(var2);
                            _closure2_slot3 = var1;
                        case 49:
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot4 = var6;
                var3 = var4.requestIdleCallback;
                var3 = var3.bind(var4)(var6, var5);
                var _closure2_slot5 = var3;
                var3 = var4.setTimeout;
                var6 = var2 == var5;
                var1 = undefined;
                if (var6) {
                    _fun8468_ip = 130;
                    continue _fun8468
                }
            case 124:
                var1 = var5.timeout;
            case 130:
                var5 = var2 != var1;
                var2 = 1000;
                if (!var5) {
                    _fun8468_ip = 146;
                    continue _fun8468
                }
            case 143:
                var2 = var1;
            case 146:
                var1 = function() { // Environment: var0
                    _fun8470: for (var _fun8470_ip = 0;;) switch (_fun8470_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun8470_ip = 29;
                                continue _fun8470
                            }
                        case 10:
                            var3 = _closure2_slot1;
                            var2 = var3.cancelIdleCallback;
                            var1 = _closure2_slot5;
                            var1 = var2.bind(var3)(var1);
                        case 29:
                            var1 = _closure2_slot4;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                _closure2_slot3 = var1;
                var0 = function() { // Environment: var0
                    _fun8471: for (var _fun8471_ip = 0;;) switch (_fun8471_ip) {
                        case 0:
                            var3 = _closure2_slot1;
                            var2 = var3.cancelIdleCallback;
                            var0 = _closure2_slot5;
                            var0 = var2.bind(var3)(var0);
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun8471_ip = 55;
                                continue _fun8471
                            }
                        case 32:
                            var4 = _closure2_slot1;
                            var3 = var4.clearTimeout;
                            var2 = _closure2_slot3;
                            var2 = var3.bind(var4)(var2);
                            _closure2_slot3 = var0;
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                return var0;
        }
    };
    var2.requestSafeIdleCallback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);