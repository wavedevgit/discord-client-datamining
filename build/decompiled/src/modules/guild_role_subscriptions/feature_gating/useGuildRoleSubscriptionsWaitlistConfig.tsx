// modules/guild_role_subscriptions/feature_gating/useGuildRoleSubscriptionsWaitlistConfig.tsx
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
    var3 = var3.GuildSettingsSections;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/feature_gating/useGuildRoleSubscriptionsWaitlistConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun116720: for (var _fun116720_ip = 0;;) switch (_fun116720_ip) {
            case 0:
                var3 = arg0;
                var _closure2_slot0 = var3;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var6 = 1;
                var4 = var0[var6];
                var7 = undefined;
                var8 = var5.bind(var7)(var4);
                var4 = var8.useGuildRoleSubscriptionSettingsVisibility;
                var4 = var4.bind(var8)(var3);
                var0 = var0[var6];
                var0 = var5.bind(var7)(var0);
                var0 = var0.GuildRoleSubscriptionSettingsVisibility;
                var0 = var0.NEEDS_COMMUNITY;
                if (!(var0 !== var4)) {
                    _fun116720_ip = 249;
                    continue _fun116720
                }
            case 73:
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var5.bind(var7)(var0);
                var0 = var0.GuildRoleSubscriptionSettingsVisibility;
                var0 = var0.WAITLIST_ONLY;
                if (!(var0 !== var4)) {
                    _fun116720_ip = 108;
                    continue _fun116720
                }
            case 106:
                return var7;
            case 108:
                var0 = {};
                var0.visibility = var4;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 2;
                var6 = var10[var5];
                var6 = var9.bind(var7)(var6);
                var11 = var6.intl;
                var8 = var11.string;
                var6 = var10[var5];
                var6 = var9.bind(var7)(var6);
                var6 = var6.t;
                var6 = var6["5vz88G"];
                var6 = var8.bind(var11)(var6);
                var0.noticeText = var6;
                var6 = var10[var5];
                var6 = var9.bind(var7)(var6);
                var8 = var6.intl;
                var6 = var8.string;
                var5 = var10[var5];
                var5 = var9.bind(var7)(var5);
                var5 = var5.t;
                var5 = var5["6yjvmg"];
                var5 = var6.bind(var8)(var5);
                var0.ctaLabel = var5;
                var5 = true;
                var0.ctaClickable = var5;
                var5 = function() {
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 5;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = 'https://dis.gd/creators-waitlist';
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onCtaClicked = var5;
                return var0;
            case 249:
                var0 = {};
                var0.visibility = var4;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var4 = var8[var2];
                var4 = var6.bind(var7)(var4);
                var9 = var4.intl;
                var5 = var9.string;
                var4 = var8[var2];
                var4 = var6.bind(var7)(var4);
                var4 = var4.t;
                var4 = var4["0Z2Qxt"];
                var4 = var5.bind(var9)(var4);
                var0.noticeText = var4;
                var4 = var8[var2];
                var4 = var6.bind(var7)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var2 = var8[var2];
                var2 = var6.bind(var7)(var2);
                var2 = var2.t;
                var2 = var2.BOJpl0;
                var2 = var4.bind(var5)(var2);
                var0.ctaLabel = var2;
                var2 = null;
                var2 = var2 != var3;
                var0.ctaClickable = var2;
                var1 = function() {
                    _fun116721: for (var _fun116721_ip = 0;;) switch (_fun116721_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var0 = 3;
                            var2 = var7[var0];
                            var0 = undefined;
                            var9 = var4.bind(var0)(var2);
                            var5 = _closure2_slot0;
                            var2 = null;
                            var8 = var2 != var5;
                            var3 = 'Guild must be not null open COMMUNITY settings';
                            var3 = var9.bind(var0)(var8, var3);
                            var3 = 4;
                            var3 = var7[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.open;
                            var7 = var2 == var5;
                            var5 = undefined;
                            if (var7) {
                                _fun116721_ip = 86;
                                continue _fun116721
                            }
                        case 77:
                            var6 = _closure2_slot0;
                            var5 = var6.id;
                        case 86:
                            var6 = var2 != var5;
                            var2 = '';
                            if (!var6) {
                                _fun116721_ip = 100;
                                continue _fun116721
                            }
                        case 97:
                            var2 = var5;
                        case 100:
                            var1 = _closure1_slot3;
                            var1 = var1.COMMUNITY;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var0.onCtaClicked = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5636, 1234, 44, 8180, 3140, 2]);