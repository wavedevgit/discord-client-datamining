// modules/hang_status/useVisibleRecentStatuses.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hang_status/useVisibleRecentStatuses.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: useVisibleRecentStatuses, environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var1 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var0 = {};
            var2 = _closure1_slot3;
            var1 = var2.getRecentStatuses;
            var1 = var1.bind(var2)();
            var0.recentStatuses = var1;
            var1 = var2.getCurrentHangStatus;
            var1 = var1.bind(var2)();
            var0.currentHangStatus = var1;
            var1 = var2.getCustomHangStatus;
            var1 = var1.bind(var2)();
            var0.customHangStatus = var1;
            var1 = var2.getFavoritedStatuses;
            var1 = var1.bind(var2)();
            var0.favoritedStatuses = var1;
            return var0;
        };
        var1 = var3.bind(var4)(var2, var1);
        var2 = var1.recentStatuses;
        var3 = var1.currentHangStatus;
        var _closure2_slot0 = var3;
        var3 = var1.customHangStatus;
        var _closure2_slot1 = var3;
        var1 = var1.favoritedStatuses;
        var3 = var1.length;
        var1 = 6;
        var3 = var1 - var3;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun111419: for (var _fun111419_ip = 0;;) switch (_fun111419_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 2;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.bind(var4)(var3);
                    if (var1) {
                        _fun111419_ip = 71;
                        continue _fun111419
                    }
                case 36:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 3;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var4)(var3, var1);
                    _fun111419_ip = 82;
                    continue _fun111419;
                case 71:
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
                case 82:
                    var2 = _closure1_slot3;
                    var0 = var2.isFavorited;
                    var0 = var0.bind(var2)(var3);
                    var0 = !var0;
                    if (!var0) {
                        _fun111419_ip = 106;
                        continue _fun111419
                    }
                case 103:
                    var0 = !var1;
                case 106:
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.slice;
        var0 = 0;
        var0 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var2.default = var3;
    var1 = function() { // Original name: getVisibleRecentStatuses, environment: var1
        var3 = _closure1_slot3;
        var1 = var3.getRecentStatuses;
        var2 = var1.bind(var3)();
        var1 = var3.getCurrentHangStatus;
        var1 = var1.bind(var3)();
        var _closure2_slot0 = var1;
        var1 = var3.getCustomHangStatus;
        var1 = var1.bind(var3)();
        var _closure2_slot1 = var1;
        var1 = var3.getFavoritedStatuses;
        var1 = var1.bind(var3)();
        var3 = var1.length;
        var1 = 6;
        var3 = var1 - var3;
        var1 = var2.filter;
        var0 = function(arg0) { // Environment: var0
            _fun111421: for (var _fun111421_ip = 0;;) switch (_fun111421_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 2;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var1 = var1.bind(var4)(var3);
                    if (var1) {
                        _fun111421_ip = 71;
                        continue _fun111421
                    }
                case 36:
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 3;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var4)(var3, var1);
                    _fun111421_ip = 82;
                    continue _fun111421;
                case 71:
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
                case 82:
                    var2 = _closure1_slot3;
                    var0 = var2.isFavorited;
                    var0 = var0.bind(var2)(var3);
                    var0 = !var0;
                    if (!var0) {
                        _fun111421_ip = 106;
                        continue _fun111421
                    }
                case 103:
                    var0 = !var1;
                case 106:
                    return var0;
            }
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.slice;
        var0 = 0;
        var0 = var1.bind(var2)(var0, var3);
        return var0;
    };
    var2.getVisibleRecentStatuses = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3568, 566, 3570, 644, 2]);