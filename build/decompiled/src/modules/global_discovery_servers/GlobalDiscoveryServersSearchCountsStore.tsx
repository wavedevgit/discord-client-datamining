// modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun95448: for (var _fun95448_ip = 0;;) switch (_fun95448_ip) {
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
            case 72: // try_end0
                _fun95448_ip = 76;
                continue _fun95448;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0() {
        _fun95451: for (var _fun95451_ip = 0;;) switch (_fun95451_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot7;
                var0 = var2.get;
                var0 = var0.bind(var2)(var3);
                var2 = null;
                if (!(var2 == var0)) {
                    _fun95451_ip = 50;
                    continue _fun95451
                }
            case 26:
                var2 = _closure1_slot8;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var4;
                var2 = new var7[var2](var6);
                var0 = var2 instanceof Object ? var2 : var4;
            case 50:
                var2 = _closure1_slot7;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun95452: for (var _fun95452_ip = 0;;) switch (_fun95452_ip) {
            case 0:
                var2 = _closure1_slot7;
                var1 = var2.get;
                var0 = arg0;
                var3 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 != var3;
                if (!var1) {
                    _fun95452_ip = 39;
                    continue _fun95452
                }
            case 29:
                var2 = arg1;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 39:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var1 = var1.Map;
    var7 = var1.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var1
        }
    });
    var13 = var7;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot7 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot6;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot5;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = false;
            var2.isInitialFetchComplete = var1;
            var2.isFetching = var1;
            var1 = null;
            var2.error = var1;
            var2.counts = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'handleSearchCountStart';
        var0.key = var1;
        var1 = function() {
            var1 = this;
            var0 = null;
            var1.error = var0;
            var0 = true;
            var1.isFetching = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'handleSearchCountSuccess';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var0 = arg0;
            var1.counts = var0;
            var0 = false;
            var1.isFetching = var0;
            var0 = true;
            var1.isInitialFetchComplete = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleSearchCountFailure';
        var0.key = var5;
        var4 = function arg0() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 5;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var4 = var1.APIError;
            var1 = var4.prototype;
            var3 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var5 = arg0;
            var6 = var3;
            var1 = new var6[var4](var5, var4);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.error = var1;
            var1 = false;
            var2.isFetching = var1;
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun95459: for (var _fun95459_ip = 0;;) switch (_fun95459_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun95459_ip = 69;
                        continue _fun95459
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95459_ip = 105;
                    continue _fun95459;
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
        var1 = _closure1_slot6;
        var4 = {};
        var0 = 'getIsInitialFetchComplete';
        var4.key = var0;
        var0 = function arg0() {
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isInitialFetchComplete;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getIsFetchingCounts';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.isFetching;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCounts';
        var4.key = var6;
        var5 = function arg0() {
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = arg0;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.counts;
                return var0;
            };
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GlobalDiscoveryServersSearchCountStore';
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var1 = _closure1_slot7;
        var0 = var1.clear;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.query;
        var1 = _closure1_slot10;
        var0 = undefined;
        var2 = var1.bind(var0)(var2);
        var1 = var2.handleSearchCountStart;
        var1 = var1.bind(var2)();
        return var0;
    };
    var1.GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.query;
        var3 = var0.categoryCounts;
        var1 = _closure1_slot10;
        var0 = undefined;
        var2 = var1.bind(var0)(var2);
        var1 = var2.handleSearchCountSuccess;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.query;
        var3 = var0.error;
        var1 = _closure1_slot10;
        var0 = undefined;
        var2 = var1.bind(var0)(var2);
        var1 = var2.handleSearchCountFailure;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE = var8;
    var3 = function arg0() {
        var1 = arg0;
        var4 = var1.ignoreQueries;
        var1 = global;
        var1 = var1.Set;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var5 = var2;
        var1 = new var5[var1](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot7;
        var1 = var2.forEach;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun95471: for (var _fun95471_ip = 0;;) switch (_fun95471_ip) {
                case 0:
                    var2 = arg1;
                    var1 = _closure2_slot0;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var2);
                    if (var0) {
                        _fun95471_ip = 40;
                        continue _fun95471
                    }
                case 23:
                    var1 = _closure1_slot7;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/global_discovery_servers/GlobalDiscoveryServersSearchCountsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 18, 6, 7, 3350, 566, 806, 2]);