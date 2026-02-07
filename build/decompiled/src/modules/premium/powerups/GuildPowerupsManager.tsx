// modules/premium/powerups/GuildPowerupsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113886: for (var _fun113886_ip = 0;;) switch (_fun113886_ip) {
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
                _fun113886_ip = 76;
                continue _fun113886;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES;
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot15 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113890: for (var _fun113890_ip = 0;;) switch (_fun113890_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113890_ip = 84;
                        continue _fun113890
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113890_ip = 118;
                    continue _fun113890;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
                    var2 = _closure1_slot11;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'handleSelectedGuildChange';
        var4.key = var0;
        var0 = function() {
            _fun113891: for (var _fun113891_ip = 0;;) switch (_fun113891_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var1 = var2.getGuildId;
                    var2 = var1.bind(var2)();
                    var5 = null;
                    if (!(var5 != var2)) {
                        _fun113891_ip = 515;
                        continue _fun113891
                    }
                case 26:
                    var1 = _closure1_slot15;
                    if (!(var2 !== var1)) {
                        _fun113891_ip = 515;
                        continue _fun113891
                    }
                case 37:
                    var1 = _closure1_slot14;
                    if (!(var2 !== var1)) {
                        _fun113891_ip = 515;
                        continue _fun113891
                    }
                case 48:
                    var3 = _closure1_slot9;
                    var1 = var3.getGuild;
                    var8 = var1.bind(var3)(var2);
                    if (!(var5 != var8)) {
                        _fun113891_ip = 515;
                        continue _fun113891
                    }
                case 69:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 13;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var9 = var1.VanityURLPerkExperiment;
                    var4 = var9.trackExposure;
                    var1 = {};
                    var10 = var8.id;
                    var1.guildId = var10;
                    var10 = 'GuildPowerupsManager';
                    var1.location = var10;
                    var1 = var4.bind(var9)(var1);
                    var1 = 14;
                    var1 = var7[var1];
                    var1 = var6.bind(var3)(var1);
                    var9 = var1.GameServerExperiment;
                    var4 = var9.trackExposure;
                    var1 = {};
                    var11 = var8.id;
                    var1.guildId = var11;
                    var1.location = var10;
                    var1 = var4.bind(var9)(var1);
                    var1 = 15;
                    var1 = var7[var1];
                    var1 = var6.bind(var3)(var1);
                    var9 = var1.GuildTagBadgePacksWaveTwoExperiment;
                    var4 = var9.trackExposure;
                    var1 = {};
                    var11 = var8.id;
                    var1.guildId = var11;
                    var1.location = var10;
                    var1 = var4.bind(var9)(var1);
                    var4 = _closure1_slot1;
                    var1 = 16;
                    var1 = var7[var1];
                    var9 = var4.bind(var3)(var1);
                    var4 = var9.getConfig;
                    var1 = {};
                    var1.location = var10;
                    var1 = var4.bind(var9)(var1);
                    var1 = var1.enabled;
                    var4 = 17;
                    var4 = var7[var4];
                    var7 = var6.bind(var3)(var4);
                    var6 = var7.getHasAllocateBoostPermission;
                    var4 = _closure1_slot10;
                    var4 = var6.bind(var7)(var4, var8);
                    if (var4) {
                        _fun113891_ip = 415;
                        continue _fun113891
                    }
                case 289:
                    var6 = _closure1_slot12;
                    var4 = var6.getCurrentUser;
                    var7 = var4.bind(var6)();
                    var6 = var5 == var7;
                    var4 = undefined;
                    if (var6) {
                        _fun113891_ip = 316;
                        continue _fun113891
                    }
                case 311:
                    var4 = var7.id;
                case 316:
                    var4 = var5 != var4;
                    var6 = undefined;
                    if (!var4) {
                        _fun113891_ip = 346;
                        continue _fun113891
                    }
                case 325:
                    var8 = _closure1_slot8;
                    var5 = var8.getMember;
                    var4 = var7.id;
                    var6 = var5.bind(var8)(var2, var4);
                case 346:
                    if (!var1) {
                        _fun113891_ip = 381;
                        continue _fun113891
                    }
                case 349:
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 18;
                    var4 = var8[var4];
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.getIsEligibleForPowerupUpsells;
                    var1 = var4.bind(var5)(var7, var6);
                case 381:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 19;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var4 = var4.isMobile;
                    if (var4) {
                        _fun113891_ip = 413;
                        continue _fun113891
                    }
                case 410:
                    if (var1) {
                        _fun113891_ip = 415;
                        continue _fun113891
                    }
                case 413:
                    return var3;
                case 415:
                    var4 = _closure1_slot13;
                    var1 = var4.shouldFetchCatalogForGuild;
                    var1 = var1.bind(var4)(var2);
                    if (!var1) {
                        _fun113891_ip = 464;
                        continue _fun113891
                    }
                case 433:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 20;
                    var1 = var5[var1];
                    var4 = var4.bind(var3)(var1);
                    var1 = var4.fetchPowerupCatalogForGuild;
                    var1 = var1.bind(var4)(var2);
                case 464:
                    var4 = _closure1_slot13;
                    var1 = var4.shouldFetchPowerupsForGuild;
                    var1 = var1.bind(var4)(var2);
                    if (!var1) {
                        _fun113891_ip = 515;
                        continue _fun113891
                    }
                case 484:
                    var1 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 20;
                    var0 = var4[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = var1.fetchGuildBoostEntitlements;
                    var0 = var0.bind(var1)(var2);
                case 515:
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
            _fun113894: for (var _fun113894_ip = 0;;) switch (_fun113894_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 17;
                    var2 = var2[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.getHasAllocateBoostPermission;
                    var4 = _closure1_slot10;
                    var7 = _closure1_slot9;
                    var2 = var7.getGuild;
                    var2 = var2.bind(var7)(var3);
                    var4 = var5.bind(var6)(var4, var2);
                    var2 = true;
                    if (!(var2 === var4)) {
                        _fun113894_ip = 118;
                        continue _fun113894
                    }
                case 64:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 20;
                    var1 = var4[var1];
                    var5 = var2.bind(var0)(var1);
                    var1 = var5.fetchGuildBoostEntitlements;
                    var1 = var1.bind(var5)(var3);
                    var1 = 21;
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
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/GuildPowerupsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1683, 1410, 3093, 3214, 1621, 6783, 660, 1612, 13401, 5693, 6785, 14600, 10050, 14601, 3361, 10047, 6777, 4299, 2]);