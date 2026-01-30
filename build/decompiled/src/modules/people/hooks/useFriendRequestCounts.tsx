// modules/people/hooks/useFriendRequestCounts.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function(arg0) { // Original name: getIncomingFriendRequestCount, environment: var1
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = arg0;
        var0 = 2;
        var2 = var3.bind(var2)(var1, var0);
        var0 = 0;
        var1 = var2[var0];
        var0 = 1;
        var2 = var2[var0];
        var0 = var1.getPendingCount;
        var1 = var0.bind(var1)();
        var0 = var2.getPendingIncomingCount;
        var0 = var0.bind(var2)();
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/people/hooks/useFriendRequestCounts.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getIncomingFriendRequestCount = var3;
    var3 = function() { // Original name: useIncomingFriendRequestCount, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot4;
        var1 = new Array(2);
        var1[0] = var4;
        var0 = _closure1_slot3;
        var1[1] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var3 = _closure1_slot4;
            var1 = new Array(2);
            var1[0] = var3;
            var0 = _closure1_slot3;
            var1[1] = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIncomingFriendRequestCount = var3;
    var1 = function() { // Original name: getOutgoingFriendRequestCount, environment: var1
        _fun107787: for (var _fun107787_ip = 0;;) switch (_fun107787_ip) {
            case 0:
                var3 = arguments[0];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun107787_ip = 38;
                    continue _fun107787
                }
            case 9:
                var1 = global;
                var4 = var1.o;
                var0 = new Array(2);
                var0[0] = var4;
                var1 = var1.s;
                var0[1] = var1;
                var3 = var0;
            case 38:
                var1 = _closure1_slot2;
                var0 = 2;
                var2 = var1.bind(var2)(var3, var0);
                var0 = 0;
                var1 = var2[var0];
                var0 = 1;
                var2 = var2[var0];
                var0 = var1.getOutgoingCount;
                var1 = var0.bind(var1)();
                var0 = var2.getPendingOutgoingCount;
                var0 = var0.bind(var2)();
                var0 = var1 + var0;
                return var0;
        }
    };
    var2.getOutgoingFriendRequestCount = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 11178, 3059, 566, 2]);