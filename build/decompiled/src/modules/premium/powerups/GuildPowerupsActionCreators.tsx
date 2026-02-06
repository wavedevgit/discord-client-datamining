// modules/premium/powerups/GuildPowerupsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.GUILD_POWERUP_APPLICATION_ID;
    var _closure1_slot3 = var6;
    var3 = var3.GuildPowerupType;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/GuildPowerupsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_POWERUPS_ACK_NOTIFICATION';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.guildPowerupsAckNotification = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_POWERUPS_RESET_NOTIFICATIONS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.guildPowerupsResetNotifications = var3;
    var3 = function arg0, arg1() {
        _fun78630: for (var _fun78630_ip = 0;;) switch (_fun78630_ip) {
            case 0:
                var5 = arg0;
                var _closure2_slot0 = var5;
                var3 = true;
                var0 = arg1;
                if (!(var3 !== var0)) {
                    _fun78630_ip = 120;
                    continue _fun78630
                }
            case 18:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.httpGetWithCountryCodeQuery;
                var0 = {};
                var6 = _closure1_slot5;
                var6 = var6.STORE_PUBLISHED_LISTINGS_SKUS;
                var0.url = var6;
                var6 = {};
                var7 = _closure1_slot3;
                var6.application_id = var7;
                var6.guild_id = var5;
                var0.query = var6;
                var0.oldFormErrors = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var2 = var1.bind(var2)(var0);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = var0.body;
                    var3 = var4.map;
                    var1 = function(arg0) { // Environment: var2
                        var1 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 5;
                        var0 = var2[var0];
                        var3 = undefined;
                        var2 = var1.bind(var3)(var0);
                        var0 = _closure3_slot0;
                        var1 = var0.body;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var7 = var3.bind(var4)(var1);
                    var5 = var7.filter;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var4 = var6[var3];
                    var3 = undefined;
                    var4 = var8.bind(var3)(var4);
                    var4 = var4.isNotNullish;
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.sort;
                    var4 = function(arg0, arg1) { // Environment: var2
                        _fun78635: for (var _fun78635_ip = 0;;) switch (_fun78635_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.skuId;
                                var0 = arg1;
                                var0 = var0.skuId;
                                var1 = var1 >= var0;
                                var0 = -1;
                                if (!var1) {
                                    _fun78635_ip = 34;
                                    continue _fun78635
                                }
                            case 31:
                                var0 = 1;
                            case 34:
                                return var0;
                        }
                    };
                    var7 = var5.bind(var7)(var4);
                    var5 = var7.reduce;
                    var4 = {};
                    var8 = {};
                    var4.allPowerups = var8;
                    var8 = {};
                    var4.powerupCatalog = var8;
                    var2 = function(arg0, arg1) { // Environment: var2
                        _fun78636: for (var _fun78636_ip = 0;;) switch (_fun78636_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = arg1;
                                var4 = var0.allPowerups;
                                var2 = var0.powerupCatalog;
                                var1 = var3.skuId;
                                var4[var1] = var3;
                                var1 = var3.type;
                                var1 = var2[var1];
                                var5 = null;
                                if (!(var5 == var1)) {
                                    _fun78636_ip = 56;
                                    continue _fun78636
                                }
                            case 43:
                                var4 = var3.type;
                                var1 = new Array(0);
                                var2[var4] = var1;
                            case 56:
                                var1 = var3.type;
                                var2 = var2[var1];
                                var1 = var5 == var2;
                                if (var1) {
                                    _fun78636_ip = 81;
                                    continue _fun78636
                                }
                            case 72:
                                var4 = var2.push;
                                var1 = var5 == var4;
                            case 81:
                                if (var1) {
                                    _fun78636_ip = 94;
                                    continue _fun78636
                                }
                            case 84:
                                var1 = var2.push;
                                var1 = var1.bind(var2)(var3);
                            case 94:
                                return var0;
                        }
                    };
                    var2 = var5.bind(var7)(var2, var4);
                    var5 = var2.allPowerups;
                    var4 = var2.powerupCatalog;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var1 = var6[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var6 = 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS';
                    var1.type = var6;
                    var6 = _closure2_slot0;
                    var1.guildId = var6;
                    var1.allPowerups = var5;
                    var1.powerupCatalog = var4;
                    var1 = var2.bind(var3)(var1);
                    var0 = var0.body;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 120:
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var3 = var6[var1];
                var2 = undefined;
                var3 = var9.bind(var2)(var3);
                var8 = var3.MOCK_LEVELS;
                var7 = var8.concat;
                var3 = var6[var1];
                var3 = var9.bind(var2)(var3);
                var3 = var3.MOCK_PERKS;
                var7 = var7.bind(var8)(var3);
                var3 = {};
                var8 = _closure1_slot4;
                var11 = var8.LEVEL;
                var10 = var6[var1];
                var10 = var9.bind(var2)(var10);
                var10 = var10.MOCK_LEVELS;
                var3[var11] = var10;
                var8 = var8.PERK;
                var1 = var6[var1];
                var1 = var9.bind(var2)(var1);
                var1 = var1.MOCK_PERKS;
                var3[var8] = var1;
                var1 = _closure1_slot1;
                var0 = 2;
                var0 = var6[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var6 = 'GUILD_POWERUP_CATALOG_FETCH_SUCCESS';
                var0.type = var6;
                var0.guildId = var5;
                var6 = var7.sort;
                var5 = function(arg0, arg1) { // Environment: var4
                    _fun78631: for (var _fun78631_ip = 0;;) switch (_fun78631_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.skuId;
                            var0 = arg1;
                            var0 = var0.skuId;
                            var1 = var1 >= var0;
                            var0 = -1;
                            if (!var1) {
                                _fun78631_ip = 34;
                                continue _fun78631
                            }
                        case 31:
                            var0 = 1;
                        case 34:
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var5);
                var6 = var7.reduce;
                var5 = function(arg0, arg1) { // Environment: var4
                    var0 = arg0;
                    var2 = arg1;
                    var1 = var2.skuId;
                    var0[var1] = var2;
                    return var0;
                };
                var4 = {};
                var4 = var6.bind(var7)(var5, var4);
                var0.allPowerups = var4;
                var0.powerupCatalog = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var2.fetchPowerupCatalogForGuild = var3;
    var3 = function arg0() {
        _fun78637: for (var _fun78637_ip = 0;;) switch (_fun78637_ip) {
            case 0:
                var7 = arg0;
                var5 = arguments[1];
                var _closure2_slot0 = var7;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun78637_ip = 20;
                    continue _fun78637
                }
            case 18:
                var5 = true;
            case 20:
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 4;
                var1 = var6[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.httpGetWithCountryCodeQuery;
                var1 = {};
                var6 = _closure1_slot5;
                var4 = var6.GUILD_POWERUPS;
                var4 = var4.bind(var6)(var7);
                var1.url = var4;
                var4 = {};
                var4.include_ends_at = var5;
                var1.query = var4;
                var4 = true;
                var1.oldFormErrors = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var2 = var2.bind(var3)(var1);
                var1 = var2.then;
                var0 = function(arg0) { // Environment: var0
                    var5 = {};
                    var _closure3_slot0 = var5;
                    var4 = {};
                    var _closure3_slot1 = var4;
                    var1 = arg0;
                    var2 = var1.body;
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun78639: for (var _fun78639_ip = 0;;) switch (_fun78639_ip) {
                            case 0:
                                var3 = arg0;
                                var4 = var3.sku;
                                var2 = null;
                                var5 = var2 == var4;
                                var0 = undefined;
                                var1 = undefined;
                                if (var5) {
                                    _fun78639_ip = 58;
                                    continue _fun78639
                                }
                            case 22:
                                var4 = var4.tenant_metadata;
                                var5 = var2 == var4;
                                var1 = undefined;
                                if (var5) {
                                    _fun78639_ip = 58;
                                    continue _fun78639
                                }
                            case 37:
                                var4 = var4.guild_monetization;
                                var5 = var2 == var4;
                                var1 = undefined;
                                if (var5) {
                                    _fun78639_ip = 58;
                                    continue _fun78639
                                }
                            case 52:
                                var1 = var4.powerup;
                            case 58:
                                if (!(var2 == var1)) {
                                    _fun78639_ip = 169;
                                    continue _fun78639
                                }
                            case 62:
                                var4 = var2 == var3;
                                var1 = undefined;
                                if (var4) {
                                    _fun78639_ip = 92;
                                    continue _fun78639
                                }
                            case 71:
                                var4 = var3.sku;
                                var5 = var2 == var4;
                                var1 = undefined;
                                if (var5) {
                                    _fun78639_ip = 92;
                                    continue _fun78639
                                }
                            case 86:
                                var1 = var4.powerup_metadata;
                            case 92:
                                if (!(var2 == var1)) {
                                    _fun78639_ip = 169;
                                    continue _fun78639
                                }
                            case 96:
                                var4 = var3.sku;
                                var5 = var2 == var4;
                                var1 = undefined;
                                if (var5) {
                                    _fun78639_ip = 147;
                                    continue _fun78639
                                }
                            case 111:
                                var4 = var4.tenant_metadata;
                                var5 = var2 == var4;
                                var1 = undefined;
                                if (var5) {
                                    _fun78639_ip = 147;
                                    continue _fun78639
                                }
                            case 126:
                                var4 = var4.guild_monetization;
                                var5 = var2 == var4;
                                var1 = undefined;
                                if (var5) {
                                    _fun78639_ip = 147;
                                    continue _fun78639
                                }
                            case 141:
                                var1 = var4.game_server;
                            case 147:
                                if (!(var2 != var1)) {
                                    _fun78639_ip = 186;
                                    continue _fun78639
                                }
                            case 151:
                                var2 = _closure3_slot1;
                                var1 = var3.id;
                                var2[var1] = var3;
                                _fun78639_ip = 186;
                                continue _fun78639;
                            case 169:
                                var2 = _closure3_slot0;
                                var1 = var3.sku_id;
                                var2[var1] = var3;
                            case 186:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var6 = 'GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS';
                    var1.type = var6;
                    var6 = _closure2_slot0;
                    var1.guildId = var6;
                    var1.unlockedPowerups = var5;
                    var1.unlockedGameServers = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.fetchGuildBoostEntitlements = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var6 = _closure1_slot5;
        var5 = var6.GUILD_POWERUP_TOGGLE;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.enablePowerupForGuild = var3;
    var1 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 7;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var6 = _closure1_slot5;
        var5 = var6.GUILD_POWERUP_TOGGLE;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = true;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.disablePowerupForGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6741, 660, 806, 10003, 3363, 10004, 1304, 507, 2]);