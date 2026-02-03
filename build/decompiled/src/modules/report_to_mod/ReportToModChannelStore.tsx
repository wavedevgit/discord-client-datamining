// modules/report_to_mod/ReportToModChannelStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = 1;
    var8 = var6[var3];
    var10 = var5.bind(var0)(var8);
    var9 = var10.persist;
    var8 = {};
    var11 = 'report-to-mod-channel-storage';
    var8.name = var11;
    var3 = var6[var3];
    var12 = var5.bind(var0)(var3);
    var11 = var12.createJSONStorage;
    var3 = function() { // Environment: var1
        var0 = global;
        var0 = var0.localStorage;
        return var0;
    };
    var3 = var11.bind(var12)(var3);
    var8.storage = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = {};
        var0.channelShowResolvedFlags = var2;
        var2 = function arg0, arg1() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.batchUpdates;
            var0 = function() { // Environment: var0
                var2 = _closure2_slot0;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    var0 = {};
                    var1 = {};
                    var2 = arg0;
                    var4 = var2.channelShowResolvedFlags;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = _closure3_slot1;
                    var1[var3] = var2;
                    var0.channelShowResolvedFlags = var1;
                    return var0;
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.setShowResolvedFlags = var2;
        var1 = function arg0() {
            _fun91401: for (var _fun91401_ip = 0;;) switch (_fun91401_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var1 = var0.channelShowResolvedFlags;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun91401_ip = 38;
                        continue _fun91401
                    }
                case 35:
                    var0 = var1;
                case 38:
                    return var0;
            }
        };
        var0.getShowResolvedFlags = var1;
        return var0;
    };
    var3 = var9.bind(var10)(var3, var8);
    var3 = var4.bind(var7)(var3);
    var _closure1_slot2 = var3;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/report_to_mod/ReportToModChannelStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useReportToModChannelFiltersStore = var3;
    var1 = function(arg0) { // Environment: var1
        _fun91403: for (var _fun91403_ip = 0;;) switch (_fun91403_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var1 = _closure1_slot2;
                var0 = undefined;
                var4 = var1.bind(var0)();
                var _closure2_slot1 = var4;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun91403_ip = 74;
                    continue _fun91403
                }
            case 32:
                var0 = {};
                var3 = var4.getShowResolvedFlags;
                var3 = var3.bind(var4)(var5);
                var1 = var1 == var3;
                if (var1) {
                    _fun91403_ip = 55;
                    continue _fun91403
                }
            case 52:
                var1 = var3;
            case 55:
                var0.showResolvedFlags = var1;
                var1 = function arg0() {
                    var3 = _closure2_slot1;
                    var2 = var3.setShowResolvedFlags;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0.setShowResolvedFlags = var1;
                _fun91403_ip = 98;
                continue _fun91403;
            case 74:
                var1 = {};
                var3 = true;
                var1.showResolvedFlags = var3;
                var2 = function() {
                    var0 = undefined;
                    return var0;
                };
                var1.setShowResolvedFlags = var2;
                var0 = var1;
            case 98:
                return var0;
        }
    };
    var2.useShouldShowResolvedFlagsForChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 3917, 802, 2]);