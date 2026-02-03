// modules/premium/powerups/GuildPowerupsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun113217: for (var _fun113217_ip = 0;;) switch (_fun113217_ip) {
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
                _fun113217_ip = 76;
                continue _fun113217;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES;
    var _closure1_slot11 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot12 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113221: for (var _fun113221_ip = 0;;) switch (_fun113221_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113221_ip = 84;
                        continue _fun113221
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113221_ip = 118;
                    continue _fun113221;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var3 = var4.set;
                    var2 = _closure1_slot9;
                    var1 = var0.handleSelectedGuildChange;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.stores = var1;
                    var1 = {};
                    var3 = var0.handleEntitlementUpdate;
                    var2 = var3.bind;
                    var2 = var2.bind(var3)(var0);
                    var1.GUILD_POWERUP_ENTITLEMENTS_CREATE = var2;
                    var3 = var0.handleEntitlementUpdate;
                    var2 = var3.bind;
                    var2 = var2.bind(var3)(var0);
                    var1.GUILD_POWERUP_ENTITLEMENTS_DELETE = var2;
                    var3 = var0.handleAppliedBoostUpdate;
                    var2 = var3.bind;
                    var2 = var2.bind(var3)(var0);
                    var1.GUILD_APPLIED_BOOSTS_UPDATE = var2;
                    var0.actions = var1;
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
        var0 = 'handleSelectedGuildChange';
        var4.key = var0;
        var0 = function() {
            _fun113222: for (var _fun113222_ip = 0;;) switch (_fun113222_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getGuildId;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun113222_ip = 304;
                        continue _fun113222
                    }
                case 26:
                    var3 = _closure1_slot12;
                    if (!(var2 !== var3)) {
                        _fun113222_ip = 304;
                        continue _fun113222
                    }
                case 37:
                    var3 = _closure1_slot11;
                    if (!(var2 !== var3)) {
                        _fun113222_ip = 304;
                        continue _fun113222
                    }
                case 48:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var6 = var3.bind(var4)(var2);
                    if (!(var1 != var6)) {
                        _fun113222_ip = 304;
                        continue _fun113222
                    }
                case 69:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 11;
                    var1 = var5[var1];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var8 = var1.VanityURLPerkExperiment;
                    var7 = var8.trackExposure;
                    var1 = {};
                    var9 = var6.id;
                    var1.guildId = var9;
                    var9 = 'GuildPowerupsManager';
                    var1.location = var9;
                    var1 = var7.bind(var8)(var1);
                    var1 = 12;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var8 = var1.GameServerExperiment;
                    var7 = var8.trackExposure;
                    var1 = {};
                    var10 = var6.id;
                    var1.guildId = var10;
                    var1.location = var9;
                    var1 = var7.bind(var8)(var1);
                    var1 = 13;
                    var1 = var5[var1];
                    var5 = var4.bind(var3)(var1);
                    var4 = var5.getHasAllocateBoostPermission;
                    var1 = _closure1_slot8;
                    var1 = var4.bind(var5)(var1, var6);
                    if (!var1) {
                        _fun113222_ip = 304;
                        continue _fun113222
                    }
                case 204:
                    var4 = _closure1_slot10;
                    var1 = var4.shouldFetchCatalogForGuild;
                    var1 = var1.bind(var4)(var2);
                    if (!var1) {
                        _fun113222_ip = 253;
                        continue _fun113222
                    }
                case 222:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 14;
                    var1 = var5[var1];
                    var4 = var4.bind(var3)(var1);
                    var1 = var4.fetchPowerupCatalogForGuild;
                    var1 = var1.bind(var4)(var2);
                case 253:
                    var4 = _closure1_slot10;
                    var1 = var4.shouldFetchPowerupsForGuild;
                    var1 = var1.bind(var4)(var2);
                    if (!var1) {
                        _fun113222_ip = 304;
                        continue _fun113222
                    }
                case 273:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 14;
                    var0 = var4[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.fetchGuildBoostEntitlements;
                    var0 = var0.bind(var1)(var2);
                case 304:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleEntitlementUpdate';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var0 = arg0;
            var1 = var0.guildId;
            var0 = var2.refreshGuildPowerups;
            var0 = var0.bind(var2)(var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleAppliedBoostUpdate';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var0 = arg0;
            var1 = var0.guildId;
            var0 = var2.refreshGuildPowerups;
            var0 = var0.bind(var2)(var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'refreshGuildPowerups';
        var4.key = var6;
        var5 = function arg0() {
            _fun113225: for (var _fun113225_ip = 0;;) switch (_fun113225_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.getHasAllocateBoostPermission;
                    var4 = _closure1_slot8;
                    var7 = _closure1_slot7;
                    var2 = var7.getGuild;
                    var2 = var2.bind(var7)(var3);
                    var4 = var5.bind(var6)(var4, var2);
                    var2 = true;
                    if (!(var2 === var4)) {
                        _fun113225_ip = 118;
                        continue _fun113225
                    }
                case 64:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 14;
                    var1 = var4[var1];
                    var5 = var2.bind(var0)(var1);
                    var1 = var5.fetchGuildBoostEntitlements;
                    var1 = var1.bind(var5)(var3);
                    var1 = 15;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.fetchAppliedGuildBoostsForGuild;
                    var1 = var1.bind(var2)(var3);
                case 118:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/GuildPowerupsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1410, 3082, 3204, 6711, 660, 1612, 13328, 5637, 9959, 9956, 6705, 4295, 2]);