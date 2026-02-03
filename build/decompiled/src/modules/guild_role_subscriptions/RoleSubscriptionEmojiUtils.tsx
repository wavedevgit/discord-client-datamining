// modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var3 = function arg0() {
        _fun43949: for (var _fun43949_ip = 0;;) switch (_fun43949_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun43949_ip = 22;
                    continue _fun43949
                }
            case 16:
                var2 = var1.roles;
            case 22:
                if (!(var3 != var2)) {
                    _fun43949_ip = 105;
                    continue _fun43949
                }
            case 26:
                var2 = var1.roles;
                var4 = var2.length;
                var2 = 0;
                if (!(var2 !== var4)) {
                    _fun43949_ip = 105;
                    continue _fun43949
                }
            case 43:
                var2 = var1.guildId;
                if (!(var3 != var2)) {
                    _fun43949_ip = 105;
                    continue _fun43949
                }
            case 52:
                var4 = _closure1_slot0;
                var3 = var4.getPurchasableSubscriptionRoles;
                var2 = var1.guildId;
                var2 = var3.bind(var4)(var2);
                var _closure2_slot0 = var2;
                var2 = var1.roles;
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 105:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var6 = var5[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = arg1;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun43951: for (var _fun43951_ip = 0;;) switch (_fun43951_ip) {
            case 0:
                var1 = arg0;
                var4 = arg1;
                var2 = null;
                var5 = var2 == var1;
                var3 = undefined;
                if (var5) {
                    _fun43951_ip = 25;
                    continue _fun43951
                }
            case 19:
                var3 = var1.roles;
            case 25:
                if (!(var2 != var3)) {
                    _fun43951_ip = 96;
                    continue _fun43951
                }
            case 29:
                var3 = var1.roles;
                var5 = var3.length;
                var3 = 0;
                if (!(var3 !== var5)) {
                    _fun43951_ip = 96;
                    continue _fun43951
                }
            case 46:
                if (!(var2 != var4)) {
                    _fun43951_ip = 96;
                    continue _fun43951
                }
            case 50:
                var3 = _closure1_slot0;
                var2 = var3.getSubscriptionRoles;
                var2 = var2.bind(var3)(var4);
                var _closure2_slot0 = var2;
                var2 = var1.roles;
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 96:
                var0 = false;
                return var0;
        }
    };
    var2.isRoleSubscriptionEmoji = var4;
    var2.isPurchasableRoleSubscriptionEmoji = var3;
    var1 = function arg0, arg1() {
        _fun43953: for (var _fun43953_ip = 0;;) switch (_fun43953_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var5 = var3 == var2;
                var4 = undefined;
                var1 = undefined;
                if (var5) {
                    _fun43953_ip = 24;
                    continue _fun43953
                }
            case 18:
                var1 = var2.roles;
            case 24:
                if (!(var3 != var1)) {
                    _fun43953_ip = 167;
                    continue _fun43953
                }
            case 31:
                var1 = var2.roles;
                var5 = var1.length;
                var1 = 0;
                if (!(var1 !== var5)) {
                    _fun43953_ip = 167;
                    continue _fun43953
                }
            case 48:
                var1 = var2.guildId;
                if (!(var3 != var1)) {
                    _fun43953_ip = 167;
                    continue _fun43953
                }
            case 57:
                var1 = _closure1_slot1;
                var1 = var1.bind(var4)(var2);
                if (!var1) {
                    _fun43953_ip = 163;
                    continue _fun43953
                }
            case 72:
                var5 = _closure1_slot0;
                var4 = var5.getUserSubscriptionRoles;
                var1 = var2.guildId;
                var1 = var4.bind(var5)(var1);
                var _closure2_slot0 = var1;
                var4 = var2.roles;
                var1 = var4.some;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var1.bind(var4)(var0);
                var4 = var2.guildId;
                var0 = arg1;
                var0 = var0 === var4;
                if (!var0) {
                    _fun43953_ip = 153;
                    continue _fun43953
                }
            case 133:
                var4 = _closure1_slot0;
                var3 = var4.getUserIsAdmin;
                var2 = var2.guildId;
                var0 = var3.bind(var4)(var2);
            case 153:
                if (var1) {
                    _fun43953_ip = 163;
                    continue _fun43953
                }
            case 156:
                if (var0) {
                    _fun43953_ip = 163;
                    continue _fun43953
                }
            case 159:
                var0 = true;
                return var0;
            case 163:
                var0 = false;
                return var0;
            case 167:
                var0 = false;
                return var0;
        }
    };
    var2.isUnusableRoleSubscriptionEmoji = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4738, 2]);