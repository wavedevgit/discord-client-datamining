// modules/user_affinities/UserAffinitiesV2Store.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun56003: for (var _fun56003_ip = 0;;) switch (_fun56003_ip) {
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
                _fun56003_ip = 74;
                continue _fun56003;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var1 = global;
        var3 = var1.Map;
        var2 = _closure1_slot10;
        var5 = var2.userAffinities;
        var4 = var5.filter;
        var2 = function(arg0) { // Environment: var0
            var2 = _closure1_slot5;
            var1 = var2.isBlockedOrIgnored;
            var0 = arg0;
            var0 = var0.otherUserId;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var4 = var4.bind(var5)(var2);
        var2 = var4.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var2 = var1.otherUserId;
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var6 = var2.bind(var4)(var0);
        var2 = var3.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var3
            }
        });
        var7 = var2;
        var0 = new var7[var3](var6, var5);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot12 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var9 = 0;
    var7 = var5[var9];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.USER_AFFINITY_TTL;
    var _closure1_slot6 = var7;
    var7 = var1.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var14 = var8;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var7;
    var7 = false;
    var _closure1_slot8 = var7;
    var8 = var1.Object;
    var7 = var8.freeze;
    var1 = {};
    var10 = new Array(0);
    var1.userAffinities = var10;
    var10 = {};
    var1.userFlags = var10;
    var1.lastFetched = var9;
    var7 = var7.bind(var8)(var1);
    var _closure1_slot9 = var7;
    var1 = {};
    var13 = var1;
    var12 = var7;
    var7 = copyDataProperties(var13, var12);
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun56010: for (var _fun56010_ip = 0;;) switch (_fun56010_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun56010_ip = 69;
                        continue _fun56010
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun56010_ip = 105;
                    continue _fun56010;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun56011: for (var _fun56011_ip = 0;;) switch (_fun56011_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var4 = var3.waitFor;
                    var2 = _closure1_slot5;
                    var2 = var4.bind(var3)(var2);
                    var5 = null;
                    if (!(var5 != var1)) {
                        _fun56011_ip = 94;
                        continue _fun56011
                    }
                case 30:
                    var4 = _closure1_slot10;
                    var2 = var1.userAffinities;
                    var4.userAffinities = var2;
                    var4 = _closure1_slot10;
                    var2 = var1.userFlags;
                    if (!(var5 == var2)) {
                        _fun56011_ip = 62;
                        continue _fun56011
                    }
                case 60:
                    var2 = {};
                case 62:
                    var4.userFlags = var2;
                    var2 = _closure1_slot10;
                    var1 = var1.lastFetched;
                    var2.lastFetched = var1;
                    var2 = _closure1_slot12;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 94:
                    var2 = var3.syncWith;
                    var4 = _closure1_slot5;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot12;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldFetch';
        var4.key = var6;
        var6 = function() {
            _fun56012: for (var _fun56012_ip = 0;;) switch (_fun56012_ip) {
                case 0:
                    var1 = _closure1_slot8;
                    if (var1) {
                        _fun56012_ip = 51;
                        continue _fun56012
                    }
                case 10:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = _closure1_slot10;
                    var1 = var1.lastFetched;
                    var1 = var2 - var1;
                    var0 = _closure1_slot6;
                    var0 = var1 > var0;
                    return var0;
                case 51:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isFetching';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getUserAffinities';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            var0 = var0.userAffinities;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getUserAffinitiesMap';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getUserFlags';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            var0 = var0.userFlags;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'compare';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun56017: for (var _fun56017_ip = 0;;) switch (_fun56017_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.get;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var3 = null;
                    var1 = var3 == var0;
                    var5 = undefined;
                    if (var1) {
                        _fun56017_ip = 37;
                        continue _fun56017
                    }
                case 31:
                    var5 = var0.communicationProbability;
                case 37:
                    var6 = var3 != var5;
                    var0 = 0;
                    if (!var6) {
                        _fun56017_ip = 49;
                        continue _fun56017
                    }
                case 46:
                    var0 = var5;
                case 49:
                    var6 = _closure1_slot7;
                    var5 = var6.get;
                    var4 = arg0;
                    var4 = var5.bind(var6)(var4);
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun56017_ip = 81;
                        continue _fun56017
                    }
                case 75:
                    var2 = var4.communicationProbability;
                case 81:
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun56017_ip = 93;
                        continue _fun56017
                    }
                case 90:
                    var1 = var2;
                case 93:
                    var0 = var0 - var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'compareByDmProbability';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun56018: for (var _fun56018_ip = 0;;) switch (_fun56018_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.get;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var3 = null;
                    var1 = var3 == var0;
                    var5 = undefined;
                    if (var1) {
                        _fun56018_ip = 37;
                        continue _fun56018
                    }
                case 31:
                    var5 = var0.dmProbability;
                case 37:
                    var6 = var3 != var5;
                    var0 = 0;
                    if (!var6) {
                        _fun56018_ip = 49;
                        continue _fun56018
                    }
                case 46:
                    var0 = var5;
                case 49:
                    var6 = _closure1_slot7;
                    var5 = var6.get;
                    var4 = arg0;
                    var4 = var5.bind(var6)(var4);
                    var5 = var3 == var4;
                    var2 = undefined;
                    if (var5) {
                        _fun56018_ip = 81;
                        continue _fun56018
                    }
                case 75:
                    var2 = var4.dmProbability;
                case 81:
                    var3 = var3 != var2;
                    var1 = 0;
                    if (!var3) {
                        _fun56018_ip = 93;
                        continue _fun56018
                    }
                case 90:
                    var1 = var2;
                case 93:
                    var0 = var0 - var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getUserAffinity';
        var4.key = var6;
        var6 = function arg0() {
            var2 = _closure1_slot7;
            var1 = var2.get;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isHighlyAffinedVCUser';
        var4.key = var6;
        var5 = function arg0() {
            _fun56021: for (var _fun56021_ip = 0;;) switch (_fun56021_ip) {
                case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun56021_ip = 37;
                        continue _fun56021
                    }
                case 31:
                    var0 = var2.vcProbability;
                case 37:
                    var2 = var1 != var0;
                    var1 = 0;
                    if (!var2) {
                        _fun56021_ip = 49;
                        continue _fun56021
                    }
                case 46:
                    var1 = var0;
                case 49:
                    var0 = 0.5;
                    var0 = var1 > var0;
                    return var0;
            }
        };
        var4.value = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'UserAffinitiesV2Store';
    var7.displayName = var1;
    var1 = 'UserAffinitiesStoreV2';
    var7.persistKey = var1;
    var1 = 8;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var0 = true;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOAD_USER_AFFINITIES_V2 = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.affineUsers;
        var2 = var0.userFlags;
        var4 = _closure1_slot10;
        var1 = global;
        var5 = var1.Date;
        var1 = var5.now;
        var1 = var1.bind(var5)();
        var4.lastFetched = var1;
        var1 = false;
        _closure1_slot8 = var1;
        var1 = _closure1_slot10;
        var1.userAffinities = var3;
        var1 = _closure1_slot10;
        var1.userFlags = var2;
        var1 = _closure1_slot12;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOAD_USER_AFFINITIES_V2_SUCCESS = var8;
    var8 = function() {
        var0 = false;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOAD_USER_AFFINITIES_V2_FAILURE = var8;
    var3 = function() {
        var0 = {};
        var3 = _closure1_slot9;
        var4 = var0;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot10 = var0;
        var0 = global;
        var0 = var0.Map;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var5 = var2;
        var0 = new var5[var0](var4);
        var0 = var0 instanceof Object ? var0 : var2;
        _closure1_slot7 = var0;
        var0 = false;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_affinities/UserAffinitiesV2Store.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3100, 6774, 566, 806, 2]);