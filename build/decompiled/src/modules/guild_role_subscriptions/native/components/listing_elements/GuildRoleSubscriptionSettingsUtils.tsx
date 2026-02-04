// modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104728: for (var _fun104728_ip = 0;;) switch (_fun104728_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot2;
                var3 = var4.getApplicationIdForGuild;
                var1 = var0.guild_id;
                var5 = var3.bind(var4)(var1);
                var4 = null;
                var3 = var4 != var5;
                if (!var3) {
                    _fun104728_ip = 47;
                    continue _fun104728
                }
            case 37:
                var1 = var0.cover_image_asset;
                var3 = var4 != var1;
            case 47:
                var1 = '';
                if (!var3) {
                    _fun104728_ip = 101;
                    continue _fun104728
                }
            case 54:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getAssetURL;
                var2 = var0.cover_image_asset;
                var0 = 1024;
                var1 = var3.bind(var4)(var5, var2, var0);
            case 101:
                var0 = {};
                var0.uri = var1;
                return var0;
        }
    };
    var2.getCoverImageURI = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3085, 3361, 2]);