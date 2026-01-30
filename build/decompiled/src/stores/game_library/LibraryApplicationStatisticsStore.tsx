// stores/game_library/LibraryApplicationStatisticsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun36545: for (var _fun36545_ip = 0;;) switch (_fun36545_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun36545_ip = 74;
                continue _fun36545;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.Distributors;
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = null;
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: LibraryApplicationStatisticsStore, environment: var5
            _fun36549: for (var _fun36549_ip = 0;;) switch (_fun36549_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun36549_ip = 69;
                        continue _fun36549
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun36549_ip = 105;
                    continue _fun36549;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'applicationStatistics';
        var4.key = var0;
        var0 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'lastFetched';
        var4.key = var6;
        var6 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot9;
            return var0;
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGameDuration';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun36552: for (var _fun36552_ip = 0;;) switch (_fun36552_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    var0 = 0;
                    if (!var2) {
                        _fun36552_ip = 31;
                        continue _fun36552
                    }
                case 25:
                    var0 = var1.total_duration;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getLastPlayedDateTime';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun36553: for (var _fun36553_ip = 0;;) switch (_fun36553_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun36553_ip = 67;
                        continue _fun36553
                    }
                case 23:
                    var2 = global;
                    var3 = var2.Date;
                    var4 = var1.last_played_at;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var5 = var2;
                    var1 = new var5[var3](var4, var3);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = var2.getTime;
                    var0 = var1.bind(var2)();
                case 67:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasApplicationStatistic';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = arg0;
            var1 = var1[var0];
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getCurrentUserStatisticsForApplication';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getQuickSwitcherScoreForApplication';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun36556: for (var _fun36556_ip = 0;;) switch (_fun36556_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var3 = var0 != var1;
                    var2 = 0;
                    var0 = 0;
                    if (!var3) {
                        _fun36556_ip = 347;
                        continue _fun36556
                    }
                case 30:
                    var3 = global;
                    var5 = var3.Date;
                    var4 = var5.now;
                    var7 = var4.bind(var5)();
                    var6 = var3.Date;
                    var8 = var1.last_played_at;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = var5;
                    var4 = new var9[var6](var8, var7);
                    var5 = var4 instanceof Object ? var4 : var5;
                    var4 = var5.getTime;
                    var4 = var4.bind(var5)();
                    var6 = var3.Math;
                    var5 = var6.floor;
                    var7 = var7 - var4;
                    var4 = 86400000;
                    var4 = var7 / var4;
                    var6 = var5.bind(var6)(var4);
                    var4 = var3.Math;
                    var3 = var4.floor;
                    var5 = var1.total_duration;
                    var1 = 1000;
                    var5 = var1 * var5;
                    var1 = 3600000;
                    var1 = var5 / var1;
                    var5 = var3.bind(var4)(var1);
                    var3 = 50;
                    var1 = var3;
                    if (!(var2 !== var6)) {
                        _fun36556_ip = 248;
                        continue _fun36556
                    }
                case 173:
                    var4 = 1;
                    if (!(var6 >= var4)) {
                        _fun36556_ip = 193;
                        continue _fun36556
                    }
                case 180:
                    var4 = 2;
                    var4 = var6 < var4;
                    var1 = 40;
                    if (var4) {
                        _fun36556_ip = 248;
                        continue _fun36556
                    }
                case 193:
                    var4 = 2;
                    if (!(var6 >= var4)) {
                        _fun36556_ip = 213;
                        continue _fun36556
                    }
                case 200:
                    var4 = 4;
                    var4 = var6 < var4;
                    var1 = 30;
                    if (var4) {
                        _fun36556_ip = 248;
                        continue _fun36556
                    }
                case 213:
                    var4 = 4;
                    if (!(var6 >= var4)) {
                        _fun36556_ip = 233;
                        continue _fun36556
                    }
                case 220:
                    var4 = 7;
                    var4 = var6 < var4;
                    var1 = 20;
                    if (var4) {
                        _fun36556_ip = 248;
                        continue _fun36556
                    }
                case 233:
                    var4 = 7;
                    var4 = var6 >= var4;
                    var1 = 0;
                    if (!var4) {
                        _fun36556_ip = 248;
                        continue _fun36556
                    }
                case 245:
                    var1 = 10;
                case 248:
                    if (!(var2 !== var5)) {
                        _fun36556_ip = 343;
                        continue _fun36556
                    }
                case 252:
                    var4 = 1;
                    if (!(var5 >= var4)) {
                        _fun36556_ip = 266;
                        continue _fun36556
                    }
                case 259:
                    var4 = 12;
                    if (!(!(var5 < var4))) {
                        _fun36556_ip = 334;
                        continue _fun36556
                    }
                case 266:
                    var4 = 12;
                    if (!(var5 >= var4)) {
                        _fun36556_ip = 280;
                        continue _fun36556
                    }
                case 273:
                    var4 = 168;
                    if (!(!(var5 < var4))) {
                        _fun36556_ip = 325;
                        continue _fun36556
                    }
                case 280:
                    var4 = 168;
                    if (!(var5 >= var4)) {
                        _fun36556_ip = 297;
                        continue _fun36556
                    }
                case 287:
                    var4 = 720;
                    if (!(!(var5 < var4))) {
                        _fun36556_ip = 316;
                        continue _fun36556
                    }
                case 297:
                    var4 = 720;
                    var0 = var1;
                    if (!(var5 >= var4)) {
                        _fun36556_ip = 347;
                        continue _fun36556
                    }
                case 310:
                    var0 = var1 + var3;
                    _fun36556_ip = 347;
                    continue _fun36556;
                case 316:
                    var3 = 40;
                    var0 = var1 + var3;
                    _fun36556_ip = 347;
                    continue _fun36556;
                case 325:
                    var3 = 20;
                    var0 = var1 + var3;
                    _fun36556_ip = 347;
                    continue _fun36556;
                case 334:
                    var3 = 10;
                    var0 = var1 + var3;
                    _fun36556_ip = 347;
                    continue _fun36556;
                case 343:
                    var0 = var1 + var2;
                case 347:
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'LibraryApplicationStatisticsStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleCurrentUserStatisticFetch, environment: var3
        var0 = arg0;
        var2 = var0.statistics;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = arg0;
            var1 = _closure1_slot8;
            var0 = var2.application_id;
            var1[var0] = var2;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = global;
        var1 = var0.Date;
        var0 = var1.now;
        var1 = var0.bind(var1)();
        _closure1_slot9 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_ACTIVITY_STATISTICS_FETCH_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleActivityUpdate, environment: var3
        _fun36559: for (var _fun36559_ip = 0;;) switch (_fun36559_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.duration;
                var2 = var0.applicationId;
                var8 = var0.distributor;
                var1 = _closure1_slot8;
                var9 = var1[var2];
                var1 = global;
                var1 = var1.Date;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var11 = var3;
                var1 = new var11[var1](var10);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = var3.toISOString;
                var4 = var1.bind(var3)();
                var10 = null;
                var7 = var10 != var9;
                var3 = 0;
                var1 = 0;
                if (!var7) {
                    _fun36559_ip = 111;
                    continue _fun36559
                }
            case 81:
                var7 = var9.total_duration;
                var9 = var9.total_discord_sku_duration;
                var10 = var10 != var9;
                var5 = 0;
                if (!var10) {
                    _fun36559_ip = 105;
                    continue _fun36559
                }
            case 102:
                var5 = var9;
            case 105:
                var1 = var5;
                var3 = var7;
            case 111:
                var5 = var3 + var6;
                var3 = _closure1_slot7;
                var7 = var3.DISCORD;
                var3 = var1;
                if (!(var8 === var7)) {
                    _fun36559_ip = 136;
                    continue _fun36559
                }
            case 132:
                var3 = var1 + var6;
            case 136:
                var1 = _closure1_slot8;
                var0 = {};
                var0.application_id = var2;
                var0.total_duration = var5;
                var0.last_played_at = var4;
                var0.total_discord_sku_duration = var3;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.ACTIVITY_UPDATE_START = var8;
    var8 = function() { // Original name: resetStore, environment: var3
        var0 = {};
        _closure1_slot8 = var0;
        var0 = null;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var8;
    var3 = function() { // Original name: handleConnectionOpen, environment: var3
        _fun36561: for (var _fun36561_ip = 0;;) switch (_fun36561_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 6;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var4 = var2.GameMentionsUserExperiment;
                var3 = var4.getCurrentConfig;
                var2 = {};
                var5 = 'LibraryApplicationStatisticsStore.handleConnectionOpen';
                var2.location = var5;
                var2 = var3.bind(var4)(var2);
                var2 = var2.enabled;
                if (!var2) {
                    _fun36561_ip = 92;
                    continue _fun36561
                }
            case 62:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.fetchActivityStatistics;
                var1 = var1.bind(var2)();
            case 92:
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/game_library/LibraryApplicationStatisticsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 3951, 3954, 566, 806, 2]);