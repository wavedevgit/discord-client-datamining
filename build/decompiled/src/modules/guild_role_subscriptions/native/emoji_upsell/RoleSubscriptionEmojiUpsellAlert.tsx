// modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74607: for (var _fun74607_ip = 0;;) switch (_fun74607_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var9 = var0.onClose;
                var _closure2_slot1 = var9;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var10 = var0.width;
                var8 = var0.height;
                var0 = global;
                var7 = var0.Math;
                var6 = var7.min;
                var1 = var0.Math;
                var0 = var1.min;
                var1 = var0.bind(var1)(var10, var8);
                var0 = 0.9;
                var1 = var0 * var1;
                var0 = 500;
                var1 = var6.bind(var7)(var1, var0);
                var0 = 32;
                var7 = var1 - var0;
                var1 = _closure1_slot0;
                var0 = 7;
                var0 = var2[var0];
                var6 = var1.bind(var3)(var0);
                var2 = var6.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    _fun74608: for (var _fun74608_ip = 0;;) switch (_fun74608_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun74608_ip = 37;
                                continue _fun74608
                            }
                        case 16:
                            var3 = _closure1_slot4;
                            var2 = var3.getGuild;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var1 = var2.bind(var6)(var1, var0);
                var _closure2_slot2 = var1;
                var6 = _closure1_slot3;
                var2 = var6.useMemo;
                var0 = null;
                var8 = var0 == var1;
                var0 = undefined;
                if (var8) {
                    _fun74607_ip = 205;
                    continue _fun74607
                }
            case 200:
                var0 = var1.name;
            case 205:
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var4
                    _fun74609: for (var _fun74609_ip = 0;;) switch (_fun74609_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            var1 = var1 == var2;
                            var6 = undefined;
                            var5 = undefined;
                            if (var1) {
                                _fun74609_ip = 29;
                                continue _fun74609
                            }
                        case 20:
                            var0 = _closure2_slot2;
                            var5 = var0.name;
                        case 29:
                            var0 = {};
                            var3 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var2 = 4;
                            var2 = var7[var2];
                            var2 = var3.bind(var6)(var2);
                            var0.image = var2;
                            var2 = _closure1_slot0;
                            var1 = 5;
                            var3 = var7[var1];
                            var3 = var2.bind(var6)(var3);
                            var8 = var3.intl;
                            var4 = var8.string;
                            var3 = var7[var1];
                            var3 = var2.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3.cBjkcx;
                            var3 = var4.bind(var8)(var3);
                            var0.title = var3;
                            var3 = var7[var1];
                            var3 = var2.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.formatToPlainString;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var1 = var1.t;
                            var2 = var1["h0u/Hi"];
                            var1 = {};
                            var1.serverName = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            var0.description = var1;
                            return var0;
                    }
                };
                var6 = var2.bind(var6)(var0, var1);
                var0 = function() {
                    _fun74610: for (var _fun74610_ip = 0;;) switch (_fun74610_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.transitionToGuildSync;
                            var3 = _closure2_slot0;
                            var2 = _closure1_slot5;
                            var2 = var2.ROLE_SUBSCRIPTIONS;
                            var2 = var4.bind(var5)(var3, var0, var2);
                            var3 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun74610_ip = 73;
                                continue _fun74610
                            }
                        case 65:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)();
                        case 73:
                            return var0;
                    }
                };
                _closure2_slot3 = var0;
                var2 = _closure1_slot6;
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 9;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var5 = _closure1_slot0;
                var10 = 5;
                var11 = var8[var10];
                var11 = var5.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var8[var10];
                var10 = var5.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.cpT0Cq;
                var10 = var11.bind(var12)(var10);
                var0.cancelText = var10;
                var0.onClose = var9;
                var4 = function() {
                    var3 = _closure1_slot6;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var0 = 10;
                    var0 = var8[var0];
                    var2 = undefined;
                    var0 = var7.bind(var2)(var0);
                    var1 = var0.CreatorRevenueButton;
                    var0 = {};
                    var4 = _closure2_slot3;
                    var0.onPress = var4;
                    var4 = 5;
                    var5 = var8[var4];
                    var5 = var7.bind(var2)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var4 = var8[var4];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.t;
                    var4 = var4.p8FG1D;
                    var4 = var5.bind(var6)(var4);
                    var0.text = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var0.renderConfirmButton = var4;
                var4 = 11;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PremiumUpsellItem;
                var4 = {};
                var4.alertWidth = var7;
                var4.upsellItem = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 1379, 33, 7682, 1234, 1464, 566, 4679, 3938, 9374, 7703, 2]);