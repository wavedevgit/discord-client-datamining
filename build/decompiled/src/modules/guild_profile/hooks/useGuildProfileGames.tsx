// modules/guild_profile/hooks/useGuildProfileGames.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 1;
        var2 = var4[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = arg0;
        var2 = var2.gameApplicationIds;
        var4 = var3.bind(var4)(var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.filter;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 2;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.isNotNullish;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_profile/hooks/useGuildProfileGames.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var5 = arg0;
        var0 = var5.gameActivity;
        var _closure2_slot0 = var0;
        var4 = _closure1_slot4;
        var3 = undefined;
        var6 = var4.bind(var3)(var5);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var6;
        var3[1] = var0;
        var0 = function() { // Environment: var1
            var3 = _closure2_slot0;
            var2 = function arg0() {
                var1 = arg0;
                var _closure4_slot0 = var1;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun59865: for (var _fun59865_ip = 0;;) switch (_fun59865_ip) {
                        case 0:
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var0.id;
                            var0 = var1[var0];
                            var1 = null;
                            var2 = var1 == var0;
                            var5 = undefined;
                            if (var2) {
                                _fun59865_ip = 36;
                                continue _fun59865
                            }
                        case 30:
                            var5 = var0.score;
                        case 36:
                            var6 = var1 != var5;
                            var2 = 0;
                            if (!var6) {
                                _fun59865_ip = 48;
                                continue _fun59865
                            }
                        case 45:
                            var2 = var5;
                        case 48:
                            var5 = _closure4_slot0;
                            var4 = arg1;
                            var4 = var4.id;
                            var4 = var5[var4];
                            var5 = var1 == var4;
                            var3 = undefined;
                            if (var5) {
                                _fun59865_ip = 79;
                                continue _fun59865
                            }
                        case 73:
                            var3 = var4.score;
                        case 79:
                            var4 = var1 != var3;
                            var1 = 0;
                            if (!var4) {
                                _fun59865_ip = 91;
                                continue _fun59865
                            }
                        case 88:
                            var1 = var3;
                        case 91:
                            var0 = 0;
                            if (!(var2 !== var1)) {
                                _fun59865_ip = 101;
                                continue _fun59865
                            }
                        case 97:
                            var0 = var1 - var2;
                        case 101:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var0 = _closure2_slot1;
            var1 = var0.sort;
            var1 = var1.bind(var0)(var2);
            return var0;
        };
        var5 = var4.bind(var5)(var0, var3);
        var _closure2_slot2 = var5;
        var0 = {};
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var4 = new Array(1);
        var4[0] = var5;
        var3 = function() { // Environment: var1
            var3 = _closure2_slot2;
            var2 = var3.slice;
            var1 = 0;
            var0 = 5;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var3 = var6.bind(var7)(var3, var4);
        var0.gamesToDisplay = var3;
        var7 = _closure1_slot3;
        var6 = var7.useMemo;
        var4 = new Array(1);
        var4[0] = var5;
        var3 = function() { // Environment: var1
            _fun59867: for (var _fun59867_ip = 0;;) switch (_fun59867_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun59867_ip = 26;
                        continue _fun59867
                    }
                case 23:
                    var0 = var1;
                case 26:
                    return var0;
            }
        };
        var3 = var6.bind(var7)(var3, var4);
        var0.lastGameToDisplay = var3;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            var2 = _closure2_slot2;
            var1 = var2.slice;
            var0 = 5;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.remainingGames = var1;
        return var0;
    };
    var2.default = var3;
    var2.useAllGuildProfileGames = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6874, 1304, 2]);