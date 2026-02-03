// modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.isGuildOwner;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102763: for (var _fun102763_ip = 0;;) switch (_fun102763_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var4 = var5[var1];
                var6 = undefined;
                var9 = var2.bind(var6)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot3;
                var7 = new Array(1);
                var7[0] = var4;
                var4 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var8.bind(var9)(var7, var4);
                var1 = var5[var1];
                var5 = var2.bind(var6)(var1);
                var2 = var5.useStateFromStores;
                var7 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var2.bind(var5)(var1, var0);
                var2 = null;
                var0 = var2 != var4;
                if (!var0) {
                    _fun102763_ip = 122;
                    continue _fun102763
                }
            case 112:
                var1 = _closure1_slot2;
                var0 = var1.bind(var6)(var4, var5);
            case 122:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 5;
                var1 = var7[var1];
                var5 = var5.bind(var6)(var1);
                var1 = var5.useIsUserInCreatorMonetizationEligibleCountry;
                var1 = var1.bind(var5)();
                var5 = undefined;
                if (!var0) {
                    _fun102763_ip = 199;
                    continue _fun102763
                }
            case 157:
                var7 = var2 == var4;
                var6 = undefined;
                if (var7) {
                    _fun102763_ip = 192;
                    continue _fun102763
                }
            case 166:
                var9 = var4.features;
                var8 = var9.has;
                var7 = _closure1_slot5;
                var7 = var7.COMMUNITY;
                var6 = var8.bind(var9)(var7);
            case 192:
                var0 = var2 != var6;
                var5 = var6;
            case 199:
                if (!var0) {
                    _fun102763_ip = 205;
                    continue _fun102763
                }
            case 202:
                var0 = var5;
            case 205:
                if (!var0) {
                    _fun102763_ip = 211;
                    continue _fun102763
                }
            case 208:
                var0 = var1;
            case 211:
                if (!var0) {
                    _fun102763_ip = 328;
                    continue _fun102763
                }
            case 214:
                var1 = var2 != var4;
                if (!var1) {
                    _fun102763_ip = 247;
                    continue _fun102763
                }
            case 221:
                var7 = var4.features;
                var6 = var7.has;
                var5 = _closure1_slot5;
                var5 = var5.CREATOR_MONETIZABLE;
                var1 = var6.bind(var7)(var5);
            case 247:
                if (var1) {
                    _fun102763_ip = 286;
                    continue _fun102763
                }
            case 250:
                var5 = var2 != var4;
                if (!var5) {
                    _fun102763_ip = 283;
                    continue _fun102763
                }
            case 257:
                var8 = var4.features;
                var7 = var8.has;
                var6 = _closure1_slot5;
                var6 = var6.CREATOR_MONETIZABLE_PROVISIONAL;
                var5 = var7.bind(var8)(var6);
            case 283:
                var1 = var5;
            case 286:
                if (var1) {
                    _fun102763_ip = 325;
                    continue _fun102763
                }
            case 289:
                var2 = var2 != var4;
                if (!var2) {
                    _fun102763_ip = 322;
                    continue _fun102763
                }
            case 296:
                var5 = var4.features;
                var4 = var5.has;
                var3 = _closure1_slot5;
                var3 = var3.CREATOR_MONETIZABLE_DISABLED;
                var2 = var4.bind(var5)(var3);
            case 322:
                var1 = var2;
            case 325:
                var0 = !var1;
            case 328:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1416, 1410, 1621, 660, 566, 5636, 2]);