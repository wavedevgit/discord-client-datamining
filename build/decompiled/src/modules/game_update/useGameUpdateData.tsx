// modules/game_update/useGameUpdateData.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var7 = var1.bind(var0)(var3);
    var _closure1_slot2 = var7;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.QueryIds;
    var1 = 2;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createFetchStore;
    var1 = {};
    var9 = var9.GAME_UPDATE;
    var1.getQueryId = var9;
    var9 = function arg0, arg1() {
        _fun118205: for (var _fun118205_ip = 0;;) switch (_fun118205_ip) {
            case 0:
                var4 = arg1;
                var3 = null;
                var1 = var3 != var4;
                var0 = null;
                if (!var1) {
                    _fun118205_ip = 43;
                    continue _fun118205
                }
            case 14:
                var2 = _closure1_slot2;
                var1 = var2.get;
                var1 = var1.bind(var2)(var4);
                var2 = var3 != var1;
                var0 = null;
                if (!var2) {
                    _fun118205_ip = 43;
                    continue _fun118205
                }
            case 40:
                var0 = var1;
            case 43:
                return var0;
        }
    };
    var1.get = var9;
    var9 = function arg0, arg1() {
        _fun118206: for (var _fun118206_ip = 0;;) switch (_fun118206_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun118206_ip = 16;
                    continue _fun118206
                }
            case 12:
                if (!(var0 == var3)) {
                    _fun118206_ip = 36;
                    continue _fun118206
                }
            case 16:
                var0 = global;
                var1 = var0.Promise;
                var0 = var1.resolve;
                var0 = var0.bind(var1)();
                _fun118206_ip = 73;
                continue _fun118206;
            case 36:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var1 = var2.fetchGameUpdate;
                var0 = var1.bind(var2)(var4, var3);
            case 73:
                return var0;
        }
    };
    var1.load = var9;
    var9 = function arg0, arg1() {
        _fun118207: for (var _fun118207_ip = 0;;) switch (_fun118207_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun118207_ip = 30;
                    continue _fun118207
                }
            case 12:
                var2 = _closure1_slot2;
                var1 = var2.isLoading;
                var0 = var1.bind(var2)(var3);
            case 30:
                return var0;
        }
    };
    var1.getIsLoading = var9;
    var8 = function arg0, arg1() {
        _fun118208: for (var _fun118208_ip = 0;;) switch (_fun118208_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                var1 = var0 != var3;
                if (!var1) {
                    _fun118208_ip = 30;
                    continue _fun118208
                }
            case 12:
                var2 = _closure1_slot2;
                var1 = var2.getError;
                var0 = var1.bind(var2)(var3);
            case 30:
                return var0;
        }
    };
    var1.getError = var8;
    var1 = var3.bind(var6)(var7, var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_update/useGameUpdateData.tsx';
    var3 = var4.bind(var5)(var3);
    var2.useGameUpdateData = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15089, 660, 566, 15090, 2]);