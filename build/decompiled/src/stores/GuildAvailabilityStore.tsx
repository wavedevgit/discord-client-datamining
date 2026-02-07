// stores/GuildAvailabilityStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun36875: for (var _fun36875_ip = 0;;) switch (_fun36875_ip) {
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
                _fun36875_ip = 74;
                continue _fun36875;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var8 = function arg0() {
        _fun36878: for (var _fun36878_ip = 0;;) switch (_fun36878_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var4 = var0.Set;
                var9 = var3.unavailableGuilds;
                var2 = var4.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var2;
                var1 = new var10[var4](var9, var8);
                var2 = var1 instanceof Object ? var1 : var2;
                _closure1_slot7 = var2;
                var2 = var3.unavailableGuilds;
                var4 = var2.length;
                var2 = 0;
                if (!(var4 > var2)) {
                    _fun36878_ip = 120;
                    continue _fun36878
                }
            case 61:
                var2 = _closure1_slot6;
                var1 = var2.warn;
                var4 = var3.unavailableGuilds;
                var6 = var4.length;
                var5 = var3.unavailableGuilds;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = '';
                var0 = ' guilds are unavailable on connection open: ';
                var0 = var4.bind(var3)(var6, var0, var5);
                var0 = var1.bind(var2)(var0);
            case 120:
                var0 = undefined;
                return var0;
        }
    };
    var7 = function arg0() {
        _fun36879: for (var _fun36879_ip = 0;;) switch (_fun36879_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot7;
                var3 = var4.has;
                var2 = var0.guild;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun36879_ip = 37;
                    continue _fun36879
                }
            case 33:
                var2 = false;
                return var2;
            case 37:
                var4 = _closure1_slot7;
                var3 = var4.delete;
                var2 = var0.guild;
                var2 = var2.id;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot6;
                var1 = var2.info;
                var0 = var0.guild;
                var4 = var0.id;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'Guild has become available: ';
                var0 = var3.bind(var0)(var4);
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var6 = global;
    var10 = var6.Object;
    var9 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var1);
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
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var4[var1];
    var9 = var5.bind(var0)(var1);
    var1 = var9.prototype;
    var10 = Object.create(var1, {
        constructor: {
            value: var9
        }
    });
    var1 = 'GuildAvailabilityStore';
    var14 = var10;
    var13 = var1;
    var9 = new var14[var9](var13, var12);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot6 = var9;
    var6 = var6.Set;
    var9 = var6.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var6
        }
    });
    var14 = var9;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot7 = var6;
    var6 = 7;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var9 = var6.Store;
    var6 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun36881: for (var _fun36881_ip = 0;;) switch (_fun36881_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun36881_ip = 69;
                        continue _fun36881
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun36881_ip = 105;
                    continue _fun36881;
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
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot5;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'isUnavailable';
        var4.key = var6;
        var6 = function arg0() {
            _fun36883: for (var _fun36883_ip = 0;;) switch (_fun36883_ip) {
                case 0:
                    var3 = arg0;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun36883_ip = 29;
                        continue _fun36883
                    }
                case 12:
                    var2 = _closure1_slot7;
                    var1 = var2.has;
                    var0 = var1.bind(var2)(var3);
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'totalGuilds';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getGuildCount;
            var1 = var1.bind(var2)();
            var0 = _closure1_slot7;
            var0 = var0.size;
            var0 = var1 + var0;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'totalUnavailableGuilds';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            var0 = var0.size;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'unavailableGuilds';
        var4.key = var6;
        var5 = function() {
            var0 = global;
            var2 = var0.Array;
            var1 = var2.from;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.get = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var9);
    var6.displayName = var1;
    var1 = 8;
    var1 = var4[var1];
    var13 = var5.bind(var0)(var1);
    var1 = {};
    var1.CONNECTION_OPEN = var8;
    var1.OVERLAY_INITIALIZE = var8;
    var8 = function arg0() {
        _fun36887: for (var _fun36887_ip = 0;;) switch (_fun36887_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot7;
                var3 = var4.has;
                var2 = var0.guildId;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun36887_ip = 160;
                    continue _fun36887
                }
            case 31:
                var4 = _closure1_slot5;
                var3 = var4.getGuild;
                var2 = var0.guildId;
                var2 = var3.bind(var4)(var2);
                var5 = null;
                var3 = var5 != var2;
                if (!var3) {
                    _fun36887_ip = 68;
                    continue _fun36887
                }
            case 59:
                var4 = var2.name;
                var3 = var5 != var4;
            case 68:
                var9 = '???';
                if (!var3) {
                    _fun36887_ip = 82;
                    continue _fun36887
                }
            case 77:
                var9 = var2.name;
            case 82:
                var4 = _closure1_slot6;
                var3 = var4.warn;
                var13 = var0.guildId;
                var2 = global;
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var14 = 'Guild has gone unavailable: ';
                var12 = ' (';
                var10 = ')';
                var11 = var9;
                var2 = var14[var7](var13, var12, var11, var10, var9);
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot7;
                var1 = var2.add;
                var0 = var0.guildId;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            case 160:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_UNAVAILABLE = var8;
    var8 = function arg0() {
        _fun36888: for (var _fun36888_ip = 0;;) switch (_fun36888_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var2 = var1.unavailable;
                var1 = true;
                if (!(var1 !== var2)) {
                    _fun36888_ip = 47;
                    continue _fun36888
                }
            case 20:
                var2 = _closure1_slot7;
                var1 = var2.delete;
                var0 = var0.guild;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 47:
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_DELETE = var8;
    var1.GUILD_CREATE = var7;
    var1.GUILD_UPDATE = var7;
    var3 = function arg0() {
        _fun36889: for (var _fun36889_ip = 0;;) switch (_fun36889_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot7;
                var3 = var4.has;
                var2 = var0.guildId;
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun36889_ip = 32;
                    continue _fun36889
                }
            case 28:
                var2 = false;
                return var2;
            case 32:
                var2 = _closure1_slot7;
                var1 = var2.delete;
                var0 = var0.guildId;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var1.GUILD_GEO_RESTRICTED = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var6](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/GuildAvailabilityStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1410, 3, 566, 806, 2]);