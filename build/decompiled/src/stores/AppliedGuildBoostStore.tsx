// stores/AppliedGuildBoostStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun78263: for (var _fun78263_ip = 0;;) switch (_fun78263_ip) {
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
                _fun78263_ip = 76;
                continue _fun78263;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var7 = function() {
        var0 = true;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = {};
    var _closure1_slot5 = var1;
    var1 = null;
    var _closure1_slot6 = var1;
    var6 = new Array(0);
    var _closure1_slot7 = var6;
    var6 = false;
    var _closure1_slot8 = var6;
    var _closure1_slot9 = var6;
    var _closure1_slot10 = var1;
    var _closure1_slot11 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun78268: for (var _fun78268_ip = 0;;) switch (_fun78268_ip) {
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
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun78268_ip = 69;
                        continue _fun78268
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun78268_ip = 105;
                    continue _fun78268;
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
        var0 = 'getAppliedGuildBoostsForGuild';
        var4.key = var0;
        var0 = function arg0() {
            _fun78269: for (var _fun78269_ip = 0;;) switch (_fun78269_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot5;
                    var3 = var0[var2];
                    var0 = null;
                    var3 = var0 != var3;
                    if (!var3) {
                        _fun78269_ip = 37;
                        continue _fun78269
                    }
                case 23:
                    var1 = _closure1_slot5;
                    var1 = var1[var2];
                    var0 = var1.subscriptions;
                case 37:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'getLastFetchedAtForGuild';
        var4.key = var6;
        var6 = function arg0() {
            _fun78270: for (var _fun78270_ip = 0;;) switch (_fun78270_ip) {
                case 0:
                    var2 = arg0;
                    var0 = _closure1_slot5;
                    var3 = var0[var2];
                    var0 = null;
                    var3 = var0 != var3;
                    if (!var3) {
                        _fun78270_ip = 37;
                        continue _fun78270
                    }
                case 23:
                    var1 = _closure1_slot5;
                    var1 = var1[var2];
                    var0 = var1.lastFetchedAt;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCurrentUserAppliedBoosts';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getAppliedGuildBoost';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot7;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.id;
                var0 = _closure3_slot0;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isModifyingAppliedBoost';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'applyBoostError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'unapplyBoostError';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'cooldownEndsAt';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isFetchingCurrentUserAppliedBoosts';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.get = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'AppliedGuildBoostStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.guildId;
        var3 = var0.appliedBoosts;
        var1 = _closure1_slot5;
        var0 = {};
        var0.subscriptions = var3;
        var3 = global;
        var4 = var3.Date;
        var3 = var4.now;
        var3 = var3.bind(var4)();
        var0.lastFetchedAt = var3;
        var1[var2] = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_APPLIED_BOOSTS_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.appliedGuildBoosts;
        var2 = false;
        _closure1_slot8 = var2;
        _closure1_slot7 = var1;
        var0 = undefined;
        return var0;
    };
    var1.USER_APPLIED_BOOSTS_FETCH_SUCCESS = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.endsAt;
        _closure1_slot6 = var1;
        var0 = undefined;
        return var0;
    };
    var1.APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS = var8;
    var1.GUILD_UNAPPLY_BOOST_START = var7;
    var1.GUILD_APPLY_BOOST_START = var7;
    var7 = function arg0() {
        var0 = arg0;
        var3 = var0.appliedGuildBoost;
        var0 = global;
        var4 = var0.Set;
        var1 = var3.map;
        var0 = function(arg0) { // Environment: var2
            var0 = arg0;
            var0 = var0.id;
            return var0;
        };
        var8 = var1.bind(var3)(var0);
        var1 = var4.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var4
            }
        });
        var9 = var1;
        var0 = new var9[var4](var8, var7);
        var0 = var0 instanceof Object ? var0 : var1;
        var _closure2_slot0 = var0;
        var0 = new Array(0);
        var6 = 0;
        var8 = var0;
        var7 = var3;
        var6 = arraySpread(var8, var7, var6);
        var5 = _closure1_slot7;
        var4 = var5.filter;
        var2 = function(arg0) { // Environment: var2
            var2 = _closure2_slot0;
            var1 = var2.has;
            var0 = arg0;
            var0 = var0.id;
            var0 = var1.bind(var2)(var0);
            var0 = !var0;
            return var0;
        };
        var7 = var4.bind(var5)(var2);
        var8 = var0;
        var2 = arraySpread(var8, var7, var6);
        _closure1_slot7 = var0;
        var0 = null;
        _closure1_slot10 = var0;
        var0 = false;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_APPLY_BOOST_SUCCESS = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.error;
        var2 = false;
        _closure1_slot9 = var2;
        _closure1_slot10 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_APPLY_BOOST_FAIL = var7;
    var7 = function arg0() {
        var1 = arg0;
        var1 = var1.boostId;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot7;
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var1 = var0.id;
            var0 = _closure2_slot0;
            var0 = var1 !== var0;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        _closure1_slot7 = var0;
        var0 = false;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_UNAPPLY_BOOST_SUCCESS = var7;
    var7 = function arg0() {
        var0 = arg0;
        var1 = var0.error;
        var2 = false;
        _closure1_slot9 = var2;
        _closure1_slot11 = var1;
        var0 = undefined;
        return var0;
    };
    var1.GUILD_UNAPPLY_BOOST_FAIL = var7;
    var3 = function() {
        var0 = true;
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1.USER_APPLIED_BOOSTS_FETCH_START = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var6](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/AppliedGuildBoostStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);