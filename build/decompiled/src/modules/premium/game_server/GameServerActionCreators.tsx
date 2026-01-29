// modules/premium/game_server/GameServerActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.GAME_SERVER_COLLECTION_ID;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot5 = var6;
    var3 = var3.Endpoints;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/game_server/GameServerActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: fetchGameServerCatalog, environment: var1
        _fun102579: for (var _fun102579_ip = 0;;) switch (_fun102579_ip) {
            case 0:
                var7 = arg0;
                var2 = arguments[1];
                var _closure2_slot0 = var7;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun102579_ip = 20;
                    continue _fun102579
                }
            case 18:
                var2 = false;
            case 20:
                if (var2) {
                    _fun102579_ip = 188;
                    continue _fun102579
                }
            case 26:
                var3 = _closure1_slot3;
                var2 = var3.getCurrentUser;
                var6 = var2.bind(var3)();
                var3 = null;
                var4 = var3 == var6;
                var2 = undefined;
                if (var4) {
                    _fun102579_ip = 63;
                    continue _fun102579
                }
            case 53:
                var4 = var6.isStaff;
                var2 = var4.bind(var6)();
            case 63:
                var6 = var3 != var2;
                if (!var6) {
                    _fun102579_ip = 73;
                    continue _fun102579
                }
            case 70:
                var6 = var2;
            case 73:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 5;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.httpGetWithCountryCodeQuery;
                var2 = {
                    'url': null,
                    'query': null,
                    'oldFormErrors': true,
                    'rejectWithError': false,
                    'retries': 2
                };
                var9 = _closure1_slot6;
                var8 = var9.COLLECTION_PUBLISHED_LISTINGS_SKU;
                var5 = _closure1_slot4;
                var5 = var8.bind(var9)(var5);
                var2.url = var5;
                var5 = {};
                var5.guild_id = var7;
                var5.include_unpublished_products = var6;
                var5.include_unpublished_collection = var6;
                var2.query = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.body;
                    var3 = var0.products;
                    var2 = var3.reduce;
                    var1 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.productToGameServerGame;
                        var1 = arg1;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.id;
                        var0[var1] = var2;
                        return var0;
                    };
                    var0 = {};
                    var4 = var2.bind(var3)(var1, var0);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GAME_SERVER_FETCH_CATALOG_SUCCESS';
                    var1.type = var5;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var1.catalog = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                return var2;
            case 188:
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 3;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GAME_SERVER_FETCH_CATALOG_SUCCESS';
                    var1.type = var5;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = _closure1_slot0;
                    var4 = 4;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var7 = var4.GAME_SERVER_GAME_MOCKS;
                    var6 = var7.reduce;
                    var5 = function(arg0, arg1) { // Environment: var4
                        var0 = arg0;
                        var2 = arg1;
                        var1 = var2.id;
                        var0[var1] = var2;
                        return var0;
                    };
                    var4 = {};
                    var4 = var6.bind(var7)(var5, var4);
                    var1.catalog = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = 5000;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var2.fetchGameServerCatalog = var3;
    var3 = function(arg0) { // Original name: fetchGameServerInstances, environment: var1
        _fun102584: for (var _fun102584_ip = 0;;) switch (_fun102584_ip) {
            case 0:
                var7 = arg0;
                var0 = arguments[1];
                var _closure2_slot0 = var7;
                var5 = undefined;
                if (!(var0 === var5)) {
                    _fun102584_ip = 20;
                    continue _fun102584
                }
            case 18:
                var0 = false;
            case 20:
                if (var0) {
                    _fun102584_ip = 123;
                    continue _fun102584
                }
            case 23:
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var0 = var1.bind(var5)(var0);
                var3 = var0.HTTP;
                var1 = var3.get;
                var0 = {
                    'url': null,
                    'rejectWithError': true,
                    'retries': 2
                };
                var6 = _closure1_slot6;
                var4 = var6.GAME_SERVERS;
                var4 = var4.bind(var6)(var7);
                var0.url = var4;
                var4 = arguments[2];
                var0.signal = var4;
                var3 = var1.bind(var3)(var0);
                var1 = var3.then;
                var0 = function(arg0) { // Environment: var2
                    _fun102587: for (var _fun102587_ip = 0;;) switch (_fun102587_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.body;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun102587_ip = 103;
                                continue _fun102587
                            }
                        case 14:
                            var3 = var0.body;
                            var2 = var3.reduce;
                            var1 = function(arg0, arg1) { // Environment: var0
                                var0 = arg0;
                                var4 = arg1;
                                var2 = var4.id;
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var1 = 8;
                                var1 = var3[var1];
                                var3 = undefined;
                                var1 = var5.bind(var3)(var1);
                                var1 = var1.bind(var3)(var4);
                                var0[var2] = var1;
                                return var0;
                            };
                            var0 = {};
                            var3 = var2.bind(var3)(var1, var0);
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 3;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var4 = 'GAME_SERVER_FETCH_INSTANCES_SUCCESS';
                            var0.type = var4;
                            var4 = _closure2_slot0;
                            var0.guildId = var4;
                            var0.instances = var3;
                            var0 = var1.bind(var2)(var0);
                        case 103:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
                _fun102584_ip = 166;
                continue _fun102584;
            case 123:
                var1 = global;
                var4 = var1.setTimeout;
                var3 = function() { // Environment: var2
                    var2 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 3;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'GAME_SERVER_FETCH_INSTANCES_SUCCESS';
                    var1.type = var5;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = _closure1_slot0;
                    var4 = 4;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var7 = var4.GAME_SERVER_INSTANCE_MOCKS;
                    var6 = var7.reduce;
                    var5 = function(arg0, arg1) { // Environment: var4
                        var0 = arg0;
                        var2 = arg1;
                        var1 = var2.id;
                        var0[var1] = var2;
                        return var0;
                    };
                    var4 = {};
                    var4 = var6.bind(var7)(var5, var4);
                    var1.instances = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = 5000;
                var2 = var4.bind(var5)(var3, var2);
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)();
            case 166:
                return var0;
        }
    };
    var2.fetchGameServerInstances = var3;
    var3 = function(arg0, arg1) { // Original name: fetchGameServerInstructions, environment: var1
        var6 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {
            'url': null,
            'rejectWithError': true,
            'retries': 3
        };
        var5 = _closure1_slot6;
        var4 = var5.PRODUCT_FOR_SKU;
        var4 = var4.bind(var5)(var6);
        var1.url = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            _fun102590: for (var _fun102590_ip = 0;;) switch (_fun102590_ip) {
                case 0:
                    var1 = arg0;
                    var2 = var1.body;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun102590_ip = 161;
                        continue _fun102590
                    }
                case 17:
                    var1 = var1.body;
                    var1 = var1.tenant_metadata;
                    var4 = var0 == var1;
                    var2 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun102590_ip = 83;
                        continue _fun102590
                    }
                case 39:
                    var1 = var1.guild_monetization;
                    var4 = var0 == var1;
                    var3 = undefined;
                    if (var4) {
                        _fun102590_ip = 83;
                        continue _fun102590
                    }
                case 54:
                    var1 = var1.game_server;
                    var4 = var0 == var1;
                    var3 = undefined;
                    if (var4) {
                        _fun102590_ip = 83;
                        continue _fun102590
                    }
                case 69:
                    var1 = var1.instructions;
                    var3 = var1.pc;
                case 83:
                    if (!(var0 == var3)) {
                        _fun102590_ip = 91;
                        continue _fun102590
                    }
                case 87:
                    var3 = new Array(0);
                case 91:
                    var1 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 3;
                    var0 = var4[var0];
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.dispatch;
                    var0 = {};
                    var4 = 'GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS';
                    var0.type = var4;
                    var5 = _closure2_slot0;
                    var0.guildId = var5;
                    var4 = _closure2_slot1;
                    var0.skuId = var4;
                    var0.instructions = var3;
                    var0 = var1.bind(var2)(var0);
                case 161:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchGameServerInstructions = var3;
    var3 = function(arg0, arg1) { // Original name: acceptGameServerToS, environment: var1
        _fun102591: for (var _fun102591_ip = 0;;) switch (_fun102591_ip) {
            case 0:
                var0 = arg0;
                if (!var0) {
                    _fun102591_ip = 94;
                    continue _fun102591
                }
            case 6:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var2 = var3.track;
                var0 = _closure1_slot5;
                var1 = var0.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED;
                var0 = {};
                var6 = _closure1_slot3;
                var5 = var6.getCurrentUser;
                var5 = var5.bind(var6)();
                var6 = null;
                var6 = var6 == var5;
                if (var6) {
                    _fun102591_ip = 75;
                    continue _fun102591
                }
            case 70:
                var4 = var5.id;
            case 75:
                var0.user_id = var4;
                var4 = arg1;
                var0.provider = var4;
                var0 = var2.bind(var3)(var1, var0);
            case 94:
                var0 = undefined;
                return var0;
        }
    };
    var2.acceptGameServerToS = var3;
    var3 = function() { // Original name: resetGameServerRegionState, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GAME_SERVER_REGION_PING_STATE_RESET';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetGameServerRegionState = var3;
    var3 = function(arg0, arg1) { // Original name: updateGameServerRegionPingState, environment: var1
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GAME_SERVER_REGION_PING_STATE_UPDATE';
        var1.type = var4;
        var4 = arg0;
        var1.pingUrl = var4;
        var4 = arg1;
        var1.state = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateGameServerRegionPingState = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: enableGameServerForGuild, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var6 = _closure1_slot6;
        var5 = var6.GUILD_POWERUP_TOGGLE;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = {};
        var4 = arg2;
        var3.game_server_name = var4;
        var4 = arg3;
        var3.game_server_region = var4;
        var0.body = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0.oldFormErrors = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.enableGameServerForGuild = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Original name: updateGameServerForGuild, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var6 = _closure1_slot6;
        var5 = var6.GUILD_POWERUP_UPDATE;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = {};
        var4 = arg3;
        var3.game_server_name = var4;
        var4 = arg2;
        var3.sku_id = var4;
        var0.body = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0.oldFormErrors = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.updateGameServerForGuild = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: disableGameServerForGuild, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var6 = _closure1_slot6;
        var5 = var6.GUILD_POWERUP_TOGGLE;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = {};
        var4 = arg2;
        var3.entitlement_id = var4;
        var0.query = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0.oldFormErrors = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.disableGameServerForGuild = var3;
    var3 = function(arg0) { // Original name: fetchGameServerRegions, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.get;
        var0 = {
            'url': null,
            'rejectWithError': true,
            'oldFormErrors': true,
            'retries': 3
        };
        var5 = _closure1_slot6;
        var4 = var5.GAME_SERVER_REGIONS;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var0 = 3;
            var1 = var8[var0];
            var0 = undefined;
            var3 = var7.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GAME_SERVER_FETCH_REGIONS_SUCCESS';
            var1.type = var4;
            var4 = arg0;
            var6 = var4.body;
            var5 = var6.map;
            var4 = 10;
            var4 = var8[var4];
            var4 = var7.bind(var0)(var4);
            var6 = var5.bind(var6)(var4);
            var5 = var6.sort;
            var4 = function(arg0, arg1) { // Environment: var4
                var0 = arg0;
                var2 = var0.name;
                var1 = var2.localeCompare;
                var0 = arg1;
                var0 = var0.name;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var4 = var5.bind(var6)(var4);
            var1.regions = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.fetchGameServerRegions = var3;
    var1 = function(arg0, arg1) { // Original name: wakeGameServer, environment: var1
        var7 = arg0;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot6;
        var5 = var6.GAME_SERVER_WAKE;
        var4 = arg1;
        var4 = var5.bind(var6)(var7, var4);
        var1.url = var4;
        var4 = true;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 3;
            var1 = var6[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GAME_SERVER_UPDATE_INSTANCE_SUCCESS';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.guildId = var4;
            var4 = 8;
            var4 = var6[var4];
            var5 = var5.bind(var0)(var4);
            var4 = arg0;
            var4 = var4.body;
            var4 = var5.bind(var0)(var4);
            var1.instance = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.wakeGameServer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 9866, 660, 806, 13331, 3320, 13333, 507, 6673, 795, 13334, 2]);