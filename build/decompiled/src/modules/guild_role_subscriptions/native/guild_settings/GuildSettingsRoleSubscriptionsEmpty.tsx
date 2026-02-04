// modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun116350: for (var _fun116350_ip = 0;;) switch (_fun116350_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.guild;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.useNavigation;
                var6 = var0.bind(var2)();
                var2 = _closure1_slot1;
                var0 = 6;
                var0 = var3[var0];
                var3 = var2.bind(var4)(var0);
                var2 = var7.id;
                var0 = _closure1_slot6;
                var0 = var0.GUILD_ROLE_SUBSCRIPTIONS;
                var0 = var3.bind(var4)(var2, var0);
                var3 = var0.application;
                var0 = var0.loading;
                if (var0) {
                    _fun116350_ip = 247;
                    continue _fun116350
                }
            case 97:
                var5 = var7.features;
                var2 = var5.has;
                var0 = _closure1_slot4;
                var0 = var0.CREATOR_MONETIZABLE;
                var0 = var2.bind(var5)(var0);
                if (var0) {
                    _fun116350_ip = 193;
                    continue _fun116350
                }
            case 126:
                var5 = var7.features;
                var2 = var5.has;
                var0 = _closure1_slot4;
                var0 = var0.CREATOR_MONETIZABLE_PROVISIONAL;
                var0 = var2.bind(var5)(var0);
                if (var0) {
                    _fun116350_ip = 193;
                    continue _fun116350
                }
            case 155:
                var5 = _closure1_slot7;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 8;
                var0 = var8[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.guild = var7;
                var0 = var5.bind(var4)(var2, var0);
                _fun116350_ip = 245;
                continue _fun116350;
            case 193:
                var2 = null;
                if (!(var2 != var3)) {
                    _fun116350_ip = 223;
                    continue _fun116350
                }
            case 199:
                var5 = var6.replace;
                var3 = _closure1_slot5;
                var3 = var3.ROLE_SUBSCRIPTIONS_TIERS;
                var3 = var5.bind(var6)(var3);
                var0 = null;
                _fun116350_ip = 245;
                continue _fun116350;
            case 223:
                var5 = var6.replace;
                var3 = _closure1_slot5;
                var3 = var3.ROLE_SUBSCRIPTIONS_ENABLE_MONETIZATION;
                var3 = var5.bind(var6)(var3);
                var0 = null;
            case 245:
                _fun116350_ip = 279;
                continue _fun116350;
            case 247:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 279:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot4 = var6;
    var3 = var3.GuildSettingsSections;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationTypes;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionsEmpty.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116351: for (var _fun116351_ip = 0;;) switch (_fun116351_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.guildId;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var2 = var3[var2];
                var4 = undefined;
                var6 = var5.bind(var4)(var2);
                var5 = var6.useStateFromStores;
                var7 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var5.bind(var6)(var2, var0);
                var2 = _closure1_slot1;
                var0 = 10;
                var0 = var3[var0];
                var0 = var2.bind(var4)(var0);
                var6 = var0.bind(var4)(var7);
                var0 = null;
                if (!(var0 != var7)) {
                    _fun116351_ip = 164;
                    continue _fun116351
                }
            case 96:
                if (!(var0 == var6)) {
                    _fun116351_ip = 122;
                    continue _fun116351
                }
            case 100:
                var3 = _closure1_slot7;
                var2 = _closure1_slot8;
                var0 = {};
                var0.guild = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun116351_ip = 162;
                continue _fun116351;
            case 122:
                var5 = _closure1_slot7;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 11;
                var2 = var8[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.guild = var7;
                var2.config = var6;
                var0 = var5.bind(var4)(var3, var2);
            case 162:
                _fun116351_ip = 196;
                continue _fun116351;
            case 164:
                var3 = _closure1_slot7;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 196:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 660, 3485, 33, 1469, 14824, 14825, 14826, 566, 14863, 14864, 2]);