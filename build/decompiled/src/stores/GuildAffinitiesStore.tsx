// stores/GuildAffinitiesStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun70618: for (var _fun70618_ip = 0;;) switch (_fun70618_ip) {
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
                _fun70618_ip = 76;
                continue _fun70618;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = function() {
        var1 = {};
        var0 = {};
        var1.guildAffinitiesByGuildId = var0;
        var0 = new Array(0);
        var1.guildAffinities = var0;
        var0 = 0;
        var1.lastFetched = var0;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot9 = var1;
    var1 = var1.bind(var0)();
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun70623: for (var _fun70623_ip = 0;;) switch (_fun70623_ip) {
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
                        _fun70623_ip = 69;
                        continue _fun70623
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun70623_ip = 105;
                    continue _fun70623;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun70624: for (var _fun70624_ip = 0;;) switch (_fun70624_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun70624_ip = 19;
                        continue _fun70624
                    }
                case 12:
                    _closure1_slot8 = var1;
                case 19:
                    var1 = var2.waitFor;
                    var0 = _closure1_slot7;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getGuildAffinity';
        var4.key = var6;
        var6 = function arg0() {
            var0 = _closure1_slot8;
            var1 = var0.guildAffinitiesByGuildId;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'affinities';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            var0 = var0.guildAffinities;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasRequestResolved';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot8;
            var1 = var0.lastFetched;
            var0 = 0;
            var0 = var0 !== var1;
            return var0;
        };
        var4.get = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GuildAffinitiesStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        _fun70629: for (var _fun70629_ip = 0;;) switch (_fun70629_ip) {
            case 0:
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var2 = var0.bind(var1)();
                var1 = _closure1_slot8;
                var1 = var1.lastFetched;
                var2 = var2 - var1;
                var1 = 86400000;
                if (!(var2 > var1)) {
                    _fun70629_ip = 76;
                    continue _fun70629
                }
            case 44:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 6;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.fetchGuildAffinities;
                var0 = var0.bind(var1)();
            case 76:
                var0 = false;
                return var0;
        }
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.guildAffinities;
        var3 = _closure1_slot8;
        var1 = new Array(0);
        var3.guildAffinities = var1;
        var3 = _closure1_slot8;
        var1 = {};
        var3.guildAffinitiesByGuildId = var1;
        var1 = _closure1_slot8;
        var0 = global;
        var3 = var0.Date;
        var0 = var3.now;
        var0 = var0.bind(var3)();
        var1.lastFetched = var0;
        var1 = var2.forEach;
        var0 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var0 = var1.affinity;
            var3 = var1.guild_id;
            var2 = {};
            var2.score = var0;
            var2.guildId = var3;
            var0 = arg1;
            var2.index = var0;
            var1 = _closure1_slot8;
            var1 = var1.guildAffinitiesByGuildId;
            var1[var3] = var2;
            var0 = _closure1_slot8;
            var1 = var0.guildAffinities;
            var0 = var1.push;
            var0 = var0.bind(var1)(var2);
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.LOAD_GUILD_AFFINITIES_SUCCESS = var8;
    var3 = function() {
        var1 = _closure1_slot9;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var3;
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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildAffinitiesStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1410, 8826, 566, 806, 2]);