// modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.GuildFeatures;
    var _closure1_slot4 = var6;
    var1 = var1.Permissions;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 3;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.aTFQKh;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var6;
    var6 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 3;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0.oTbFQg;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.description = var6;
    var6 = false;
    var1.canCreateGuild = var6;
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var1;
        var0 = _closure1_slot3;
        var2[1] = var0;
        var1 = function() { // Environment: var0
            var0 = function(arg0) { // Environment: var0
                _fun96912: for (var _fun96912_ip = 0;;) switch (_fun96912_ip) {
                    case 0:
                        var1 = arg0;
                        var4 = var1.features;
                        var3 = var4.has;
                        var0 = _closure1_slot4;
                        var0 = var0.ROLE_SUBSCRIPTIONS_ENABLED;
                        var0 = var3.bind(var4)(var0);
                        if (!var0) {
                            _fun96912_ip = 64;
                            continue _fun96912
                        }
                    case 35:
                        var5 = var1.features;
                        var4 = var5.has;
                        var3 = _closure1_slot4;
                        var3 = var3.CREATOR_MONETIZABLE_RESTRICTED;
                        var3 = var4.bind(var5)(var3);
                        var0 = !var3;
                    case 64:
                        if (!var0) {
                            _fun96912_ip = 93;
                            continue _fun96912
                        }
                    case 67:
                        var5 = _closure1_slot3;
                        var4 = var5.can;
                        var3 = _closure1_slot5;
                        var3 = var3.ADMINISTRATOR;
                        var0 = var4.bind(var5)(var3, var1);
                    case 93:
                        if (!var0) {
                            _fun96912_ip = 128;
                            continue _fun96912
                        }
                    case 96:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 5;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.isUserEligibleForTierTemplates;
                        var0 = var3.bind(var4)();
                    case 128:
                        if (!var0) {
                            _fun96912_ip = 169;
                            continue _fun96912
                        }
                    case 131:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 5;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.isGuildEligibleForTierTemplates;
                        var1 = var1.id;
                        var0 = var2.bind(var3)(var1);
                    case 169:
                        return var0;
                }
            };
            return var0;
        };
        var0 = new Array(0);
        var0 = var3.bind(var4)(var2, var1, var0);
        return var0;
    };
    var1.useIsGuildSupported = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/ui/RoleSubscriptionsCreateTierFromTemplatePickerFeatureSpec.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1590, 3093, 660, 1234, 566, 5684, 2]);