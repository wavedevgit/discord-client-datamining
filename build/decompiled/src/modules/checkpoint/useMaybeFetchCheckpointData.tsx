// modules/checkpoint/useMaybeFetchCheckpointData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.useEffect;
    var _closure1_slot3 = var6;
    var3 = var3.useMemo;
    var _closure1_slot4 = var3;
    var3 = 1;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FetchStates;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EntitlementTypes;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/checkpoint/useMaybeFetchCheckpointData.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useMaybeFetchCheckpointData, environment: var1
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var5 = 3;
        var0 = var7[var5];
        var4 = undefined;
        var10 = var6.bind(var4)(var0);
        var9 = var10.useStateFromStores;
        var3 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var3;
        var0 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getFetchState;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var9.bind(var10)(var8, var0);
        var _closure2_slot0 = var0;
        var5 = var7[var5];
        var7 = var6.bind(var4)(var5);
        var6 = var7.useStateFromStores;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() { // Environment: var1
            var1 = _closure1_slot5;
            var0 = var1.getCheckpointData;
            var0 = var0.bind(var1)();
            return var0;
        };
        var3 = var6.bind(var7)(var5, var3);
        var _closure2_slot1 = var3;
        var6 = _closure1_slot4;
        var3 = var3.applications;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() { // Environment: var1
            _fun87135: for (var _fun87135_ip = 0;;) switch (_fun87135_ip) {
                case 0:
                    var0 = _closure2_slot1;
                    var2 = var0.applications;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun87135_ip = 25;
                        continue _fun87135
                    }
                case 19:
                    var0 = new Array(0);
                    _fun87135_ip = 60;
                    continue _fun87135;
                case 25:
                    var1 = _closure2_slot1;
                    var1 = var1.applications;
                    var3 = var1.applications;
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.game;
                        var0 = var0.id;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 60:
                    return var0;
            }
        };
        var5 = var6.bind(var4)(var3, var5);
        var _closure2_slot2 = var5;
        var3 = _closure1_slot3;
        var6 = new Array(1);
        var6[0] = var0;
        var2 = function() { // Environment: var1
            _fun87137: for (var _fun87137_ip = 0;;) switch (_fun87137_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = _closure1_slot6;
                    var0 = var0.INIT;
                    if (!(var1 === var0)) {
                        _fun87137_ip = 96;
                        continue _fun87137
                    }
                case 24:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 4;
                    var0 = var4[var0];
                    var1 = undefined;
                    var5 = var2.bind(var1)(var0);
                    var0 = var5.fetchCheckpointData;
                    var0 = var0.bind(var5)();
                    var0 = 5;
                    var0 = var4[var0];
                    var2 = var2.bind(var1)(var0);
                    var1 = var2.fetchUserEntitlements;
                    var0 = {};
                    var3 = _closure1_slot7;
                    var3 = var3.FREE_PURCHASE;
                    var0.entitlementType = var3;
                    var0 = var1.bind(var2)(var0);
                case 96:
                    var0 = undefined;
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var2, var6);
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.getDetectableGamesSupplemental;
            var1 = _closure2_slot2;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useMaybeFetchCheckpointData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11134, 660, 566, 11135, 4616, 4631, 2]);