// modules/premium/game_server/GameServerStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun55566: for (var _fun55566_ip = 0;;) switch (_fun55566_ip) {
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
                _fun55566_ip = 74;
                continue _fun55566;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0) { // Original name: getStateForGuild, environment: var3
        _fun55569: for (var _fun55569_ip = 0;;) switch (_fun55569_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot7;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 == var3)) {
                    _fun55569_ip = 58;
                    continue _fun55569
                }
            case 20:
                var3 = _closure1_slot7;
                var2 = {};
                var4 = {};
                var2.catalog = var4;
                var4 = {};
                var2.instances = var4;
                var4 = {};
                var2.instructions = var4;
                var4 = {};
                var2.entitlements = var4;
                var3[var1] = var2;
            case 58:
                var0 = _closure1_slot7;
                var0 = var0[var1];
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: recalculateAppliedBoosts, environment: var3
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var0 = arg1;
        var3 = var1.bind(var2)(var0);
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun55571: for (var _fun55571_ip = 0;;) switch (_fun55571_ip) {
                case 0:
                    var0 = arg1;
                    var2 = var0.sku;
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun55571_ip = 71;
                        continue _fun55571
                    }
                case 20:
                    var2 = var2.tenant_metadata;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun55571_ip = 71;
                        continue _fun55571
                    }
                case 35:
                    var2 = var2.guild_monetization;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun55571_ip = 71;
                        continue _fun55571
                    }
                case 50:
                    var2 = var2.game_server;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun55571_ip = 71;
                        continue _fun55571
                    }
                case 65:
                    var0 = var2.boost_price;
                case 71:
                    var2 = var1 != var0;
                    var1 = 0;
                    if (!var2) {
                        _fun55571_ip = 83;
                        continue _fun55571
                    }
                case 80:
                    var1 = var0;
                case 83:
                    var0 = arg0;
                    var0 = var0 + var1;
                    return var0;
            }
        };
        var0 = 0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var7 = function(arg0) { // Original name: handleGameServerInstanceCreated, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var8 = var0.gameServer;
        var1 = _closure1_slot9;
        var0 = undefined;
        var5 = var1.bind(var0)(var4);
        var1 = {};
        var11 = _closure1_slot7;
        var12 = var1;
        var3 = copyDataProperties(var12, var11);
        var3 = {};
        var12 = var3;
        var11 = var5;
        var6 = copyDataProperties(var12, var11);
        var6 = {};
        var11 = var5.instances;
        var12 = var6;
        var5 = copyDataProperties(var12, var11);
        var7 = var8.id;
        var9 = _closure1_slot0;
        var10 = _closure1_slot1;
        var5 = 5;
        var5 = var10[var5];
        var5 = var9.bind(var0)(var5);
        var5 = var5.bind(var0)(var8);
        var6[var7] = var5;
        var5 = 'instances';
        var3[var5] = var6;
        var1[var4] = var3;
        _closure1_slot7 = var1;
        return var0;
    };
    var0 = function(arg0, arg1) { // Original name: handleGameServerEntitlementsChanged, environment: var3
        var3 = arg1;
        var4 = _closure1_slot10;
        var1 = var3.entitlements;
        var0 = undefined;
        var5 = var4.bind(var0)(var0, var1);
        var1 = {};
        var6 = _closure1_slot7;
        var7 = var1;
        var4 = copyDataProperties(var7, var6);
        var4 = {};
        var7 = var4;
        var6 = var3;
        var3 = copyDataProperties(var7, var6);
        var3 = 'appliedBoosts';
        var4[var3] = var5;
        var3 = arg0;
        var1[var3] = var4;
        _closure1_slot7 = var1;
        return var0;
    };
    var _closure1_slot11 = var0;
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: GameServerStore, environment: var5
            _fun55575: for (var _fun55575_ip = 0;;) switch (_fun55575_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55575_ip = 69;
                        continue _fun55575
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun55575_ip = 105;
                    continue _fun55575;
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
        var0 = 'getState';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getStateForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun55577: for (var _fun55577_ip = 0;;) switch (_fun55577_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    var1 = var0 != var2;
                    var0 = undefined;
                    if (!var1) {
                        _fun55577_ip = 25;
                        continue _fun55577
                    }
                case 14:
                    var1 = _closure1_slot7;
                    var0 = var1[var2];
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLowestGameCostForGuild';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun55578: for (var _fun55578_ip = 0;;) switch (_fun55578_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun55578_ip = 128;
                        continue _fun55578
                    }
                case 9:
                    var1 = _closure1_slot7;
                    var5 = var1[var2];
                    var2 = global;
                    var4 = var2.Object;
                    var3 = var4.values;
                    var6 = var0 == var5;
                    var1 = undefined;
                    if (var6) {
                        _fun55578_ip = 48;
                        continue _fun55578
                    }
                case 42:
                    var1 = var5.catalog;
                case 48:
                    if (!(var0 == var1)) {
                        _fun55578_ip = 54;
                        continue _fun55578
                    }
                case 52:
                    var1 = {};
                case 54:
                    var7 = var3.bind(var4)(var1);
                    var3 = var7.length;
                    var6 = 0;
                    var1 = null;
                    if (!(var6 !== var3)) {
                        _fun55578_ip = 126;
                        continue _fun55578
                    }
                case 72:
                    var4 = var2.Math;
                    var3 = var4.min;
                    var5 = var7.map;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var0 = var0.baseCost;
                        return var0;
                    };
                    var9 = var5.bind(var7)(var2);
                    var2 = new Array(0);
                    var10 = var2;
                    var8 = 0;
                    var5 = arraySpread(var10, var9, var8);
                    var10 = var3;
                    var9 = var2;
                    var8 = var4;
                    var1 = apply(var10, var9, var8);
                case 126:
                    return var1;
                case 128:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasFetchedCatalog';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun55580: for (var _fun55580_ip = 0;;) switch (_fun55580_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var0 = var2 != var3;
                    if (!var0) {
                        _fun55580_ip = 46;
                        continue _fun55580
                    }
                case 12:
                    var1 = _closure1_slot7;
                    var1 = var1[var3];
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun55580_ip = 40;
                        continue _fun55580
                    }
                case 32:
                    var2 = var1.hasFetchedCatalog;
                case 40:
                    var1 = true;
                    var0 = var1 === var2;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'hasFetchedInstances';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun55581: for (var _fun55581_ip = 0;;) switch (_fun55581_ip) {
                case 0:
                    var3 = arg0;
                    var2 = null;
                    var0 = var2 != var3;
                    if (!var0) {
                        _fun55581_ip = 46;
                        continue _fun55581
                    }
                case 12:
                    var1 = _closure1_slot7;
                    var1 = var1[var3];
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun55581_ip = 40;
                        continue _fun55581
                    }
                case 32:
                    var2 = var1.hasFetchedInstances;
                case 40:
                    var1 = true;
                    var0 = var1 === var2;
                case 46:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'GameServerStore';
    var6.displayName = var1;
    var1 = 7;
    var1 = var4[var1];
    var11 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function() { // Original name: handleReset, environment: var3
        var0 = {};
        _closure1_slot7 = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOGOUT = var8;
    var8 = function(arg0) { // Original name: handleFetchCatalogSuccess, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var6 = var0.catalog;
        var2 = {};
        var7 = _closure1_slot7;
        var8 = var2;
        var0 = copyDataProperties(var8, var7);
        var3 = {};
        var5 = _closure1_slot9;
        var0 = undefined;
        var7 = var5.bind(var0)(var4);
        var8 = var3;
        var5 = copyDataProperties(var8, var7);
        var5 = 'catalog';
        var3[var5] = var6;
        var6 = true;
        var5 = 'hasFetchedCatalog';
        var3[var5] = var6;
        var2[var4] = var3;
        _closure1_slot7 = var2;
        return var0;
    };
    var1.GAME_SERVER_FETCH_CATALOG_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleFetchInstancesSuccess, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var6 = var0.instances;
        var2 = {};
        var7 = _closure1_slot7;
        var8 = var2;
        var0 = copyDataProperties(var8, var7);
        var3 = {};
        var5 = _closure1_slot9;
        var0 = undefined;
        var7 = var5.bind(var0)(var4);
        var8 = var3;
        var5 = copyDataProperties(var8, var7);
        var5 = 'instances';
        var3[var5] = var6;
        var6 = true;
        var5 = 'hasFetchedInstances';
        var3[var5] = var6;
        var2[var4] = var3;
        _closure1_slot7 = var2;
        return var0;
    };
    var1.GAME_SERVER_FETCH_INSTANCES_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleFetchProductSuccess, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var7 = var0.skuId;
        var5 = var0.instructions;
        var2 = {};
        var9 = _closure1_slot7;
        var10 = var2;
        var0 = copyDataProperties(var10, var9);
        var3 = {};
        var8 = _closure1_slot9;
        var0 = undefined;
        var9 = var8.bind(var0)(var4);
        var10 = var3;
        var6 = copyDataProperties(var10, var9);
        var6 = {};
        var8 = var8.bind(var0)(var4);
        var9 = var8.instructions;
        var10 = var6;
        var8 = copyDataProperties(var10, var9);
        var6[var7] = var5;
        var5 = 'instructions';
        var3[var5] = var6;
        var2[var4] = var3;
        _closure1_slot7 = var2;
        return var0;
    };
    var1.GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleUpdateInstanceSuccess, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var7 = var0.instance;
        var1 = _closure1_slot9;
        var0 = undefined;
        var5 = var1.bind(var0)(var4);
        var1 = {};
        var8 = _closure1_slot7;
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var3 = {};
        var9 = var3;
        var8 = var5;
        var6 = copyDataProperties(var9, var8);
        var6 = {};
        var8 = var5.instances;
        var9 = var6;
        var5 = copyDataProperties(var9, var8);
        var5 = var7.id;
        var6[var5] = var7;
        var5 = 'instances';
        var3[var5] = var6;
        var1[var4] = var3;
        _closure1_slot7 = var1;
        return var0;
    };
    var1.GAME_SERVER_UPDATE_INSTANCE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleFetchBoostEntitlementsSuccess, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var7 = var0.unlockedGameServers;
        var1 = _closure1_slot10;
        var0 = undefined;
        var6 = var1.bind(var0)(var0, var7);
        var1 = {};
        var8 = _closure1_slot7;
        var9 = var1;
        var3 = copyDataProperties(var9, var8);
        var3 = {};
        var5 = _closure1_slot9;
        var8 = var5.bind(var0)(var4);
        var9 = var3;
        var5 = copyDataProperties(var9, var8);
        var5 = 'entitlements';
        var3[var5] = var7;
        var5 = 'appliedBoosts';
        var3[var5] = var6;
        var1[var4] = var3;
        _closure1_slot7 = var1;
        return var0;
    };
    var1.GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS = var8;
    var1.GAME_SERVER_CREATE = var7;
    var1.GAME_SERVER_UPDATE = var7;
    var7 = function(arg0) { // Original name: handleGameServerInstanceDeleted, environment: var3
        var0 = arg0;
        var4 = var0.guildId;
        var3 = var0.gameServerId;
        var1 = _closure1_slot9;
        var0 = undefined;
        var5 = var1.bind(var0)(var4);
        var1 = var5.instances;
        var1 = delete var1[var3];
        var1 = {};
        var6 = _closure1_slot7;
        var7 = var1;
        var3 = copyDataProperties(var7, var6);
        var3 = {};
        var7 = var3;
        var6 = var5;
        var5 = copyDataProperties(var7, var6);
        var1[var4] = var3;
        _closure1_slot7 = var1;
        return var0;
    };
    var1.GAME_SERVER_DELETE = var7;
    var7 = function(arg0) { // Original name: handleGameServerEntitlementCreated, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var7 = var0.entitlements;
        var2 = _closure1_slot9;
        var0 = undefined;
        var2 = var2.bind(var0)(var3);
        var _closure2_slot0 = var2;
        var6 = var7.filter;
        var5 = function(arg0) { // Environment: var4
            _fun55590: for (var _fun55590_ip = 0;;) switch (_fun55590_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.sku;
                    var1 = null;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun55590_ip = 56;
                        continue _fun55590
                    }
                case 20:
                    var2 = var2.tenant_metadata;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun55590_ip = 56;
                        continue _fun55590
                    }
                case 35:
                    var2 = var2.guild_monetization;
                    var3 = var1 == var2;
                    var0 = undefined;
                    if (var3) {
                        _fun55590_ip = 56;
                        continue _fun55590
                    }
                case 50:
                    var0 = var2.game_server;
                case 56:
                    var0 = var1 != var0;
                    return var0;
            }
        };
        var6 = var6.bind(var7)(var5);
        var5 = var6.forEach;
        var4 = function(arg0) { // Environment: var4
            var2 = arg0;
            var0 = _closure2_slot0;
            var1 = var0.entitlements;
            var0 = var2.id;
            var1[var0] = var2;
            var0 = undefined;
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var1 = _closure1_slot11;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var1.GUILD_POWERUP_ENTITLEMENTS_CREATE = var7;
    var3 = function(arg0) { // Original name: handleGameServerEntitlementDeleted, environment: var3
        var0 = arg0;
        var3 = var0.guildId;
        var6 = var0.entitlements;
        var2 = _closure1_slot9;
        var0 = undefined;
        var2 = var2.bind(var0)(var3);
        var _closure2_slot0 = var2;
        var5 = var6.forEach;
        var4 = function(arg0) { // Environment: var4
            var0 = _closure2_slot0;
            var1 = var0.entitlements;
            var0 = arg0;
            var0 = var0.id;
            var0 = delete var1[var0];
            var0 = undefined;
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var1 = _closure1_slot11;
        var1 = var1.bind(var0)(var3, var2);
        return var0;
    };
    var1.GUILD_POWERUP_ENTITLEMENTS_DELETE = var3;
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
    var3 = 8;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/game_server/GameServerStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6673, 566, 806, 2]);