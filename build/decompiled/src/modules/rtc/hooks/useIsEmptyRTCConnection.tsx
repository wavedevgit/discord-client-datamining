// modules/rtc/hooks/useIsEmptyRTCConnection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun67038: for (var _fun67038_ip = 0;;) switch (_fun67038_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.size;
                var0 = 0;
                var0 = var0 === var1;
                if (var0) {
                    _fun67038_ip = 48;
                    continue _fun67038
                }
            case 17:
                var2 = var4.size;
                var1 = 1;
                var1 = var1 === var2;
                if (!var1) {
                    _fun67038_ip = 45;
                    continue _fun67038
                }
            case 32:
                var3 = var4.has;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
            case 45:
                var0 = var1;
            case 48:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/hooks/useIsEmptyRTCConnection.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var5 = _closure1_slot4;
        var1 = new Array(2);
        var1[0] = var5;
        var4 = _closure1_slot2;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun67040: for (var _fun67040_ip = 0;;) switch (_fun67040_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun67040_ip = 70;
                        continue _fun67040
                    }
                case 13:
                    var4 = _closure1_slot4;
                    var3 = var4.getUserIds;
                    var2 = _closure2_slot0;
                    var4 = var3.bind(var4)(var2);
                    var0 = var0 == var4;
                    if (var0) {
                        _fun67040_ip = 68;
                        continue _fun67040
                    }
                case 42:
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot2;
                    var1 = var2.getId;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var0 = var3.bind(var1)(var4, var2);
                case 68:
                    return var0;
                case 70:
                    var0 = true;
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsStreamRTCConnectionEmpty = var3;
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var4;
        var0 = _closure1_slot2;
        var1[1] = var0;
        var0 = function() { // Environment: var0
            _fun67042: for (var _fun67042_ip = 0;;) switch (_fun67042_ip) {
                case 0:
                    var2 = _closure1_slot3;
                    var0 = var2.getUserIds;
                    var4 = var0.bind(var2)();
                    var0 = null;
                    var0 = var0 == var4;
                    if (var0) {
                        _fun67042_ip = 52;
                        continue _fun67042
                    }
                case 26:
                    var3 = _closure1_slot5;
                    var2 = _closure1_slot2;
                    var1 = var2.getId;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var0 = var3.bind(var1)(var4, var2);
                case 52:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsCallRTCConnectionEmpty = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 3518, 3609, 566, 2]);