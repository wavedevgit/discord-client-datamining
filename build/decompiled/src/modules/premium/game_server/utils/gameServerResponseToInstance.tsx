// modules/premium/game_server/utils/gameServerResponseToInstance.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/premium/game_server/utils/gameServerResponseToInstance.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Original name: gameServerResponseToInstance, environment: var1
        _fun55640: for (var _fun55640_ip = 0;;) switch (_fun55640_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.id;
                var0.id = var2;
                var2 = var1.name;
                var0.name = var2;
                var2 = var1.region_id;
                var0.regionId = var2;
                var2 = var1.region_name;
                var0.regionName = var2;
                var2 = var1.sku_id;
                var0.planId = var2;
                var2 = var1.plan_name;
                var0.planName = var2;
                var3 = var1.players_count;
                var2 = null;
                var4 = var2 != var3;
                var2 = 0;
                if (!var4) {
                    _fun55640_ip = 95;
                    continue _fun55640
                }
            case 92:
                var2 = var3;
            case 95:
                var0.onlineConnectionsCount = var2;
                var2 = var1.max_players_count;
                var0.maxConnectionsCount = var2;
                var2 = var1.ip;
                var0.serverIP = var2;
                var2 = var1.port;
                var0.port = var2;
                var2 = var1.entitlement_id;
                var0.entitlementId = var2;
                var2 = var1.provider_type;
                var0.providerType = var2;
                var2 = var1.provider_url;
                var0.gameServerPanelUrl = var2;
                var2 = var1.status;
                var0.status = var2;
                var2 = var1.game_id;
                var0.gameId = var2;
                var1 = var1.game_config;
                var0.gameConfig = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);