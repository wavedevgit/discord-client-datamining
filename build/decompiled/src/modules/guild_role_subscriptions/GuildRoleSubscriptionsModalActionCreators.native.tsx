// modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/GuildRoleSubscriptionsModalActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var7 = var0.guildId;
        var1 = var0.listingId;
        var8 = var0.type;
        var6 = var0.onSave;
        var2 = _closure1_slot3;
        var0 = var2.resetImperatively;
        var0 = var0.bind(var2)();
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 1;
        var4 = var2[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.pushLazy;
        var9 = _closure1_slot0;
        var3 = 3;
        var3 = var2[var3];
        var9 = var9.bind(var0)(var3);
        var3 = 2;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var9.bind(var0)(var3, var2);
        var2 = {};
        var2.benefitType = var8;
        var2.guildId = var7;
        var2.onSave = var6;
        var2.listingId = var1;
        var1 = 'GuildRoleSubscriptionBenefitEditorModal';
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.showCreateBenefitModal = var3;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.guildId;
        var9 = var0.benefit;
        var1 = var0.listingId;
        var7 = var0.onDelete;
        var6 = var0.onSave;
        var2 = _closure1_slot3;
        var0 = var2.initializeImperatively;
        var0 = var0.bind(var2)(var9);
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 1;
        var4 = var2[var0];
        var0 = undefined;
        var5 = var5.bind(var0)(var4);
        var4 = var5.pushLazy;
        var10 = _closure1_slot0;
        var3 = 3;
        var3 = var2[var3];
        var10 = var10.bind(var0)(var3);
        var3 = 2;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var10.bind(var0)(var3, var2);
        var2 = {};
        var9 = var9.ref_type;
        var2.benefitType = var9;
        var2.guildId = var8;
        var2.onDelete = var7;
        var2.onSave = var6;
        var2.listingId = var1;
        var1 = 'GuildRoleSubscriptionBenefitEditorModal';
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var2.showEditBenefitModal = var3;
    var1 = function arg0() {
        _fun116792: for (var _fun116792_ip = 0;;) switch (_fun116792_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.guildId;
                var8 = var0.subscriptionRoleId;
                var6 = var0.listingId;
                var7 = var0.initialTierEmojiIds;
                var1 = var0.onSave;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 1;
                var4 = var2[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.pushLazy;
                var10 = _closure1_slot0;
                var3 = 3;
                var3 = var2[var3];
                var10 = var10.bind(var0)(var3);
                var3 = 4;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var10.bind(var0)(var3, var2);
                var2 = {};
                var2.guildId = var9;
                var2.subscriptionRoleId = var8;
                var8 = null;
                if (!(var8 == var7)) {
                    _fun116792_ip = 142;
                    continue _fun116792
                }
            case 114:
                var8 = global;
                var8 = var8.Set;
                var9 = var8.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var8
                    }
                });
                var14 = var9;
                var8 = new var14[var8](var13);
                var7 = var8 instanceof Object ? var8 : var9;
            case 142:
                var2.initialTierEmojiIds = var7;
                var2.listingId = var6;
                var2.onSave = var1;
                var1 = 'GuildRoleSubscriptionEmojiEditorModal';
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
        }
    };
    var2.showEditEmojisModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [14900, 4561, 14901, 1307, 14907, 2]);