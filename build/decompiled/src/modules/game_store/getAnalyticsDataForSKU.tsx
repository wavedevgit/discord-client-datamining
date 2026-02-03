// modules/game_store/getAnalyticsDataForSKU.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SKUFeatureTypes;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_store/getAnalyticsDataForSKU.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun29606: for (var _fun29606_ip = 0;;) switch (_fun29606_ip) {
            case 0:
                var6 = arg0;
                var0 = arguments[1];
                var5 = arguments[2];
                var1 = undefined;
                if (!(var0 === var1)) {
                    _fun29606_ip = 17;
                    continue _fun29606
                }
            case 15:
                var0 = false;
            case 17:
                if (!(var5 === var1)) {
                    _fun29606_ip = 23;
                    continue _fun29606
                }
            case 21:
                var5 = true;
            case 23:
                var3 = _closure1_slot0;
                var2 = var3.getApplication;
                var1 = var6.applicationId;
                var7 = var2.bind(var3)(var1);
                var1 = var6.getPrice;
                var8 = var1.bind(var6)();
                var3 = var6.getPrice;
                var1 = null;
                var2 = false;
                var9 = var3.bind(var6)(var1, var2);
                var3 = {};
                var2 = var6.id;
                var3.sku_id = var2;
                var2 = var6.type;
                var3.sku_type = var2;
                var2 = var6.applicationId;
                var3.application_id = var2;
                var10 = var1 != var7;
                var2 = null;
                if (!var10) {
                    _fun29606_ip = 118;
                    continue _fun29606
                }
            case 113:
                var2 = var7.name;
            case 118:
                var3.application_name = var2;
                var2 = var6.name;
                var3.store_title = var2;
                var7 = var6.premium;
                var2 = 'distribution';
                if (!var7) {
                    _fun29606_ip = 150;
                    continue _fun29606
                }
            case 146:
                var2 = 'premium';
            case 150:
                var3.distribution_type = var2;
                var2 = null;
                if (!var5) {
                    _fun29606_ip = 227;
                    continue _fun29606
                }
            case 162:
                var5 = {};
                var10 = var1 != var8;
                var7 = null;
                if (!var10) {
                    _fun29606_ip = 179;
                    continue _fun29606
                }
            case 173:
                var7 = var8.amount;
            case 179:
                var5.price = var7;
                var10 = var1 != var9;
                var7 = null;
                if (!var10) {
                    _fun29606_ip = 199;
                    continue _fun29606
                }
            case 193:
                var7 = var9.amount;
            case 199:
                var5.regular_price = var7;
                var9 = var1 != var8;
                var7 = null;
                if (!var9) {
                    _fun29606_ip = 219;
                    continue _fun29606
                }
            case 213:
                var7 = var8.currency;
            case 219:
                var5.currency = var7;
                var2 = var5;
            case 227:
                var1 = null;
                if (!var0) {
                    _fun29606_ip = 556;
                    continue _fun29606
                }
            case 235:
                var0 = {};
                var7 = var6.hasFeature;
                var4 = _closure1_slot1;
                var5 = var4.SINGLE_PLAYER;
                var5 = var7.bind(var6)(var5);
                var0.has_single_player = var5;
                var7 = var6.hasFeature;
                var5 = var4.ONLINE_MULTIPLAYER;
                var5 = var7.bind(var6)(var5);
                var0.has_online_multiplayer = var5;
                var7 = var6.hasFeature;
                var5 = var4.LOCAL_MULTIPLAYER;
                var5 = var7.bind(var6)(var5);
                var0.has_local_multiplayer = var5;
                var7 = var6.hasFeature;
                var5 = var4.PVP;
                var5 = var7.bind(var6)(var5);
                var0.has_pvp_features = var5;
                var7 = var6.hasFeature;
                var5 = var4.LOCAL_COOP;
                var5 = var7.bind(var6)(var5);
                var0.has_local_coop = var5;
                var7 = var6.hasFeature;
                var5 = var4.ONLINE_COOP;
                var5 = var7.bind(var6)(var5);
                var0.has_online_coop = var5;
                var7 = var6.hasFeature;
                var5 = var4.CROSS_PLATFORM;
                var5 = var7.bind(var6)(var5);
                var0.has_cross_platform = var5;
                var7 = var6.hasFeature;
                var5 = var4.RICH_PRESENCE;
                var5 = var7.bind(var6)(var5);
                var0.has_rich_presence = var5;
                var7 = var6.hasFeature;
                var5 = var4.DISCORD_GAME_INVITES;
                var5 = var7.bind(var6)(var5);
                var0.has_game_invites = var5;
                var7 = var6.hasFeature;
                var5 = var4.SPECTATOR_MODE;
                var5 = var7.bind(var6)(var5);
                var0.has_spectator_mode = var5;
                var7 = var6.hasFeature;
                var5 = var4.CONTROLLER_SUPPORT;
                var5 = var7.bind(var6)(var5);
                var0.has_controller_support = var5;
                var7 = var6.hasFeature;
                var5 = var4.CLOUD_SAVES;
                var5 = var7.bind(var6)(var5);
                var0.has_cloud_saves = var5;
                var5 = var6.hasFeature;
                var4 = var4.SECURE_NETWORKING;
                var4 = var5.bind(var6)(var4);
                var0.has_secure_networking = var4;
                var1 = var0;
            case 556:
                var0 = {};
                var12 = var0;
                var11 = var3;
                var3 = copyDataProperties(var12, var11);
                var12 = var0;
                var11 = var2;
                var2 = copyDataProperties(var12, var11);
                var12 = var0;
                var11 = var1;
                var1 = copyDataProperties(var12, var11);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3454, 660, 2]);