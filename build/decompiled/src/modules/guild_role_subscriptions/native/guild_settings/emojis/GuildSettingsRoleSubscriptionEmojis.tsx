// modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx
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
        _fun116981: for (var _fun116981_ip = 0;;) switch (_fun116981_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var0 = var3.useRoleSubscriptionSettingsDisabled;
                var5 = var0.bind(var3)();
                var0 = 9;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var6
                    var2 = _closure1_slot3;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var2.bind(var3)(var1, var0);
                var _closure2_slot1 = var9;
                var0 = null;
                if (!(var0 != var9)) {
                    _fun116981_ip = 258;
                    continue _fun116981
                }
            case 104:
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 7;
                var3 = var10[var1];
                var3 = var2.bind(var4)(var3);
                var11 = var3.intl;
                var8 = var11.formatToPlainString;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var3 = var1.H9Jxp6;
                var1 = {};
                var13 = _closure1_slot1;
                var12 = 6;
                var12 = var10[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.bind(var4)(var9);
                var1.maxSlots = var12;
                var8 = var8.bind(var11)(var3, var1);
                var3 = _closure1_slot4;
                var1 = 5;
                var1 = var10[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ManageEmojisModal;
                var1 = {};
                var1.guild = var9;
                var1.headerDescription = var8;
                var7 = _closure1_slot5;
                var1.computeEmojiItems = var7;
                var6 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = global;
                    var2 = var1.Promise;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = function(arg0, arg1) { // Environment: var0
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var3 = var1[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.openLazy;
                        var3 = _closure1_slot0;
                        var2 = 12;
                        var2 = var1[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = 11;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var0)(var2, var1);
                        var7 = _closure2_slot1;
                        var8 = var7.id;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'role-subscription-emoji-';
                        var2 = var2.bind(var1)(var8);
                        var1 = {};
                        var7 = var7.id;
                        var1.guildId = var7;
                        var7 = _closure3_slot0;
                        var1.emoji = var7;
                        var7 = function arg0() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var2 = _closure4_slot0;
                            var1 = arg0;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1.onSave = var7;
                        var6 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            var2 = _closure4_slot1;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var3 = Object.create(var1, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var5 = 'User cancelled';
                            var6 = var3;
                            var1 = new var6[var4](var5, var4);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var1.onCancel = var6;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var0;
                    };
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
                };
                var1.onSelectRolesForEmoji = var6;
                var1.disabled = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 258:
                return var0;
        }
    };
    var _closure1_slot6 = var0;
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var6 = var7.memoize;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun116987: for (var _fun116987_ip = 0;;) switch (_fun116987_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var3;
                var1 = var2.filter;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.isRoleSubscriptionEmoji;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var5 = var1.bind(var2)(var0);
                var1 = var5.length;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun116987_ip = 212;
                    continue _fun116987
                }
            case 43:
                var4 = var5.map;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 5;
                var2 = var9[var0];
                var7 = undefined;
                var2 = var8.bind(var7)(var2);
                var2 = var2.computeEmojiItem;
                var4 = var4.bind(var5)(var2);
                var2 = var4.reverse;
                var2 = var2.bind(var4)();
                var4 = _closure1_slot1;
                var1 = 6;
                var1 = var9[var1];
                var1 = var4.bind(var7)(var1);
                var5 = var1.bind(var7)(var3);
                var0 = var9[var0];
                var4 = var8.bind(var7)(var0);
                var3 = var4.computeSectionItem;
                var0 = 7;
                var1 = var9[var0];
                var1 = var8.bind(var7)(var1);
                var6 = var1.intl;
                var1 = var6.string;
                var0 = var9[var0];
                var0 = var8.bind(var7)(var0);
                var0 = var0.t;
                var0 = var0.sMOuuS;
                var1 = var1.bind(var6)(var0);
                var0 = var2.length;
                var1 = var3.bind(var4)(var1, var0, var5);
                var0 = new Array(1);
                var0[0] = var1;
                var10 = 1;
                var12 = var0;
                var11 = var2;
                var1 = arraySpread(var12, var11, var10);
                return var0;
            case 212:
                var0 = new Array(0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/emojis/GuildSettingsRoleSubscriptionEmojis.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var7 = var0.guildId;
        var3 = _closure1_slot4;
        var1 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 13;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var0.guildId = var7;
        var6 = _closure1_slot4;
        var5 = _closure1_slot6;
        var4 = {};
        var4.guildId = var7;
        var4 = var6.bind(var2)(var5, var4);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 33, 22, 4705, 14669, 14887, 1234, 14825, 566, 3237, 14888, 1307, 14841, 2]);