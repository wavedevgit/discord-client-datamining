// modules/game_detection/GameAnalyticsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function arg0() {
        _fun33050: for (var _fun33050_ip = 0;;) switch (_fun33050_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.toLowerCase;
                var4 = var0.bind(var1)();
                var1 = var4.endsWith;
                var0 = '/';
                var1 = var1.bind(var4)(var0);
                var0 = var4;
                if (!var1) {
                    _fun33050_ip = 53;
                    continue _fun33050
                }
            case 34:
                var3 = var4.slice;
                var2 = 0;
                var1 = -1;
                var0 = var3.bind(var4)(var2, var1);
            case 53:
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var3 = function arg0() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var1 = var2.bind(var1)(var0);
        var0 = var1.split;
        var2 = '/';
        var3 = var0.bind(var1)(var2);
        var1 = var3.slice;
        var0 = -2;
        var1 = var1.bind(var3)(var0);
        var0 = var1.join;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var _closure1_slot4 = var3;
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
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_detection/GameAnalyticsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.removeExecutablePathPrefix = var3;
    var3 = function arg0() {
        _fun33052: for (var _fun33052_ip = 0;;) switch (_fun33052_ip) {
            case 0:
                var5 = arg0;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun33052_ip = 250;
                    continue _fun33052
                }
            case 12:
                var4 = _closure1_slot2;
                var1 = var4.getGameByName;
                var0 = var5.name;
                var8 = var1.bind(var4)(var0);
                var0 = 'exePath';
                var0 = var0 in var5;
                if (var0) {
                    _fun33052_ip = 54;
                    continue _fun33052
                }
            case 46:
                var1 = var5.exe;
                _fun33052_ip = 60;
                continue _fun33052;
            case 54:
                var1 = var5.exePath;
            case 60:
                var0 = {};
                var7 = var5.name;
                var9 = var2 != var7;
                var6 = undefined;
                var4 = undefined;
                if (!var9) {
                    _fun33052_ip = 81;
                    continue _fun33052
                }
            case 78:
                var4 = var7;
            case 81:
                var0.gameName = var4;
                var7 = var5.id;
                if (!(var2 == var7)) {
                    _fun33052_ip = 112;
                    continue _fun33052
                }
            case 95:
                var9 = var2 == var8;
                var4 = undefined;
                if (var9) {
                    _fun33052_ip = 109;
                    continue _fun33052
                }
            case 104:
                var4 = var8.id;
            case 109:
                var7 = var4;
            case 112:
                var8 = var2 != var7;
                var4 = undefined;
                if (!var8) {
                    _fun33052_ip = 124;
                    continue _fun33052
                }
            case 121:
                var4 = var7;
            case 124:
                var0.gameId = var4;
                var7 = var2 != var1;
                var4 = undefined;
                if (!var7) {
                    _fun33052_ip = 147;
                    continue _fun33052
                }
            case 138:
                var7 = _closure1_slot4;
                var4 = var7.bind(var6)(var1);
            case 147:
                var0.exe = var4;
                var7 = var5.distributor;
                var8 = var2 != var7;
                var4 = undefined;
                if (!var8) {
                    _fun33052_ip = 170;
                    continue _fun33052
                }
            case 167:
                var4 = var7;
            case 170:
                var0.distributor = var4;
                var7 = var5.sku;
                var8 = var2 != var7;
                var4 = undefined;
                if (!var8) {
                    _fun33052_ip = 193;
                    continue _fun33052
                }
            case 190:
                var4 = var7;
            case 193:
                var0.sku = var4;
                var4 = var2 != var5;
                var2 = undefined;
                if (!var4) {
                    _fun33052_ip = 238;
                    continue _fun33052
                }
            case 207:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 1;
                var3 = var7[var3];
                var4 = var4.bind(var6)(var3);
                var3 = var4.getSubgameMetadata;
                var2 = var3.bind(var4)(var5);
            case 238:
                var0.gameMetadata = var2;
                var0.rawExePath = var1;
                return var0;
            case 250:
                var0 = {};
                var1 = undefined;
                var0.gameName = var1;
                var0.gameId = var1;
                var0.exe = var1;
                var0.distributor = var1;
                var0.sku = var1;
                var0.gameMetadata = var1;
                var0.rawExePath = var1;
                return var0;
        }
    };
    var2.getRunningGameAnalytics = var3;
    var1 = function arg0, arg1() {
        _fun33053: for (var _fun33053_ip = 0;;) switch (_fun33053_ip) {
            case 0:
                var5 = arg0;
                var2 = arg1;
                var1 = null;
                if (!(var1 != var5)) {
                    _fun33053_ip = 88;
                    continue _fun33053
                }
            case 14:
                if (!(var1 != var2)) {
                    _fun33053_ip = 88;
                    continue _fun33053
                }
            case 18:
                var3 = _closure1_slot3;
                var4 = undefined;
                var3 = var3.bind(var4)(var5);
                var _closure2_slot0 = var3;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var3 = var3.bind(var4)(var1);
                var1 = var3.getPlatformName;
                var1 = var1.bind(var3)();
                var _closure2_slot1 = var1;
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    _fun33054: for (var _fun33054_ip = 0;;) switch (_fun33054_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = var2.os;
                            var0 = _closure2_slot1;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun33054_ip = 61;
                                continue _fun33054
                            }
                        case 23:
                            var4 = _closure2_slot0;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if (var4) {
                                _fun33054_ip = 58;
                                continue _fun33054
                            }
                        case 38:
                            var4 = _closure2_slot0;
                            var3 = var4.endsWith;
                            var2 = var2.name;
                            var1 = var3.bind(var4)(var2);
                        case 58:
                            var0 = var1;
                        case 61:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 88:
                var0 = false;
                return var0;
        }
    };
    var2.isVerifiedGameExecutable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3486, 3619, 478, 2]);