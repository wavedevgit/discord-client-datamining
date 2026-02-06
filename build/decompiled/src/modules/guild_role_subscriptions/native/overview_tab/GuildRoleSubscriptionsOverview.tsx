// modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        var3 = _closure1_slot7;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 5;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {
            'variant': 'heading-lg/extrabold',
            'color': 'interactive-text-active'
        };
        var4 = arg0;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot8 = var3;
    var1 = function arg0() {
        var0 = arg0;
        var12 = var0.serverName;
        var3 = _closure1_slot7;
        var1 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 6;
        var0 = var8[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var7 = _closure1_slot0;
        var4 = 7;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var10 = var5.intl;
        var9 = var10.format;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var5 = var5.t;
        var6 = var5.uEqG1M;
        var5 = {};
        var5.serverName = var12;
        var11 = _closure1_slot8;
        var5.serverNameHook = var11;
        var5 = var9.bind(var10)(var6, var5);
        var0.title = var5;
        var5 = var8[var4];
        var5 = var7.bind(var2)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var2)(var4);
        var4 = var4.t;
        var4 = var4["+3DKTf"];
        var4 = var5.bind(var6)(var4);
        var0.description = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot9 = var1;
    var0 = function arg0() {
        _fun104780: for (var _fun104780_ip = 0;;) switch (_fun104780_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guildId;
                var7 = var0.gatedChannelId;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNativeIAPPayments;
                var0 = var0.bind(var1)();
                var0 = var0.storeFront;
                var6 = null;
                var1 = var6 == var0;
                var5 = undefined;
                if (var1) {
                    _fun104780_ip = 72;
                    continue _fun104780
                }
            case 66:
                var5 = var0.country;
            case 72:
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 9;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.GroupListingsFetchContextProvider;
                var0 = {};
                var0.guildId = var8;
                var10 = var6 == var7;
                var0.refetchOnMount = var10;
                var0.countryCode = var5;
                var5 = var6 == var5;
                var0.dontFetchWhileTrue = var5;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var4 = 10;
                var4 = var9[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.guildId = var8;
                var4.gatedChannelId = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var9 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot7 = var5;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function arg0() {
        _fun104781: for (var _fun104781_ip = 0;;) switch (_fun104781_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var _closure2_slot0 = var6;
                var5 = var0.gatedChannelId;
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var8 = var7[var0];
                var4 = undefined;
                var12 = var3.bind(var4)(var8);
                var11 = var12.useStateFromStores;
                var8 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var8;
                var9 = new Array(1);
                var9[0] = var6;
                var8 = function() { // Environment: var2
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var11.bind(var12)(var10, var8, var9);
                var _closure2_slot1 = var9;
                var0 = var7[var0];
                var11 = var3.bind(var4)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var0;
                var0 = function() { // Environment: var2
                    var1 = _closure1_slot4;
                    var0 = var1.isConnected;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var11 = var10.bind(var11)(var8, var0);
                var _closure2_slot2 = var11;
                var8 = _closure1_slot1;
                var0 = 12;
                var0 = var7[var0];
                var0 = var8.bind(var4)(var0);
                var10 = var0.bind(var4)(var6);
                var _closure2_slot3 = var10;
                var0 = 13;
                var0 = var7[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useCanUseRoleSubscriptionIAP;
                var0 = var0.bind(var3)(var6);
                var8 = _closure1_slot3;
                var7 = var8.useEffect;
                var3 = new Array(3);
                var3[0] = var9;
                var3[1] = var11;
                var3[2] = var10;
                var2 = function() { // Environment: var2
                    _fun104784: for (var _fun104784_ip = 0;;) switch (_fun104784_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var0 = !var0;
                            if (var0) {
                                _fun104784_ip = 33;
                                continue _fun104784
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var1 = null;
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun104784_ip = 30;
                                continue _fun104784
                            }
                        case 26:
                            var1 = _closure2_slot3;
                        case 30:
                            var0 = var1;
                        case 33:
                            if (var0) {
                                _fun104784_ip = 262;
                                continue _fun104784
                            }
                        case 39:
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 14;
                            var1 = var4[var1];
                            var3 = undefined;
                            var6 = var2.bind(var3)(var1);
                            var5 = var6.show;
                            var1 = {};
                            var2 = _closure1_slot0;
                            var7 = 7;
                            var8 = var4[var7];
                            var8 = var2.bind(var3)(var8);
                            var10 = var8.intl;
                            var9 = var10.string;
                            var8 = var4[var7];
                            var8 = var2.bind(var3)(var8);
                            var8 = var8.t;
                            var8 = var8.r0DLNm;
                            var8 = var9.bind(var10)(var8);
                            var1.title = var8;
                            var8 = var4[var7];
                            var8 = var2.bind(var3)(var8);
                            var10 = var8.intl;
                            var9 = var10.string;
                            var8 = var4[var7];
                            var8 = var2.bind(var3)(var8);
                            var8 = var8.t;
                            var8 = var8["6Y0JlN"];
                            var8 = var9.bind(var10)(var8);
                            var1.body = var8;
                            var8 = var4[var7];
                            var8 = var2.bind(var3)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var4[var7];
                            var7 = var2.bind(var3)(var7);
                            var7 = var7.t;
                            var7 = var7.BddRzS;
                            var7 = var8.bind(var9)(var7);
                            var1.confirmText = var7;
                            var1 = var5.bind(var6)(var1);
                            var1 = 15;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.replaceWith;
                            var0 = _closure1_slot5;
                            var0 = var0.defaultRoute;
                            var0 = var1.bind(var2)(var0);
                        case 262:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var8)(var2, var3);
                var3 = _closure1_slot7;
                if (var0) {
                    _fun104781_ip = 273;
                    continue _fun104781
                }
            case 224:
                var2 = _closure1_slot9;
                var0 = {};
                var7 = null;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun104781_ip = 246;
                    continue _fun104781
                }
            case 241:
                var8 = var9.name;
            case 246:
                var9 = var7 != var8;
                var7 = '';
                if (!var9) {
                    _fun104781_ip = 260;
                    continue _fun104781
                }
            case 257:
                var7 = var8;
            case 260:
                var0.serverName = var7;
                var0 = var3.bind(var4)(var2, var0);
                _fun104781_ip = 294;
                continue _fun104781;
            case 273:
                var2 = _closure1_slot10;
                var1 = {};
                var1.guildId = var6;
                var1.gatedChannelId = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 294:
                return var0;
        }
    };
    var2.default = var4;
    var2.serverNameHook = var3;
    var2.RoleSubscriptionsUnavailableNotice = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3476, 3219, 1410, 33, 3943, 13672, 1234, 10837, 10829, 13673, 632, 5624, 4780, 3938, 1220, 2]);