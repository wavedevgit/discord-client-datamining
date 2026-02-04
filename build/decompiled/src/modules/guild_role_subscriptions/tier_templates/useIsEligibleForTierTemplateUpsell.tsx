// modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/tier_templates/useIsEligibleForTierTemplateUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102780: for (var _fun102780_ip = 0;;) switch (_fun102780_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var6 = undefined;
                var8 = var2.bind(var6)(var1);
                var5 = var8.useStateFromStores;
                var9 = _closure1_slot2;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var5.bind(var8)(var1, var0);
                var0 = 3;
                var1 = var3[var0];
                var5 = var2.bind(var6)(var1);
                var1 = var5.useGuildEligibleForTierTemplates;
                var1 = var1.bind(var5)(var7);
                var0 = var3[var0];
                var2 = var2.bind(var6)(var0);
                var0 = var2.useUserEligibleForTierTemplates;
                var3 = var0.bind(var2)();
                var2 = null;
                var0 = var2 == var8;
                var5 = undefined;
                if (var0) {
                    _fun102780_ip = 143;
                    continue _fun102780
                }
            case 117:
                var10 = var8.features;
                var9 = var10.has;
                var0 = _closure1_slot3;
                var0 = var0.ROLE_SUBSCRIPTIONS_ENABLED;
                var5 = var9.bind(var10)(var0);
            case 143:
                var0 = true;
                var0 = var0 === var5;
                if (!var0) {
                    _fun102780_ip = 193;
                    continue _fun102780
                }
            case 152:
                var2 = var2 == var8;
                var5 = undefined;
                if (var2) {
                    _fun102780_ip = 187;
                    continue _fun102780
                }
            case 161:
                var10 = var8.features;
                var9 = var10.has;
                var2 = _closure1_slot3;
                var2 = var2.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                var5 = var9.bind(var10)(var2);
            case 187:
                var2 = false;
                var0 = var2 === var5;
            case 193:
                var5 = _closure1_slot0;
                var9 = _closure1_slot1;
                var2 = 4;
                var2 = var9[var2];
                var5 = var5.bind(var6)(var2);
                var2 = var5.canManageGuildRoleSubscriptions;
                var2 = var2.bind(var5)(var8);
                var5 = var0;
                if (!var0) {
                    _fun102780_ip = 233;
                    continue _fun102780
                }
            case 230:
                var5 = var3;
            case 233:
                if (!var5) {
                    _fun102780_ip = 239;
                    continue _fun102780
                }
            case 236:
                var5 = var2;
            case 239:
                if (!var5) {
                    _fun102780_ip = 295;
                    continue _fun102780
                }
            case 242:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 5;
                var4 = var8[var4];
                var4 = var5.bind(var6)(var4);
                var6 = var4.GuildRoleSubscriptionsTierTemplatesExperiment;
                var5 = var6.trackExposure;
                var4 = {};
                var4.guildId = var7;
                var7 = 'ca30d9_1';
                var4.location = var7;
                var4 = var5.bind(var6)(var4);
            case 295:
                if (!var0) {
                    _fun102780_ip = 301;
                    continue _fun102780
                }
            case 298:
                var0 = var3;
            case 301:
                if (!var0) {
                    _fun102780_ip = 307;
                    continue _fun102780
                }
            case 304:
                var0 = var2;
            case 307:
                if (!var0) {
                    _fun102780_ip = 313;
                    continue _fun102780
                }
            case 310:
                var0 = var1;
            case 313:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 660, 566, 5633, 5632, 5634, 2]);