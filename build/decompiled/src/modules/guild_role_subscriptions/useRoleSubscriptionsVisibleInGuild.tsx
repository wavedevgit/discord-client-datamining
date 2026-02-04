// modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun49799: for (var _fun49799_ip = 0;;) switch (_fun49799_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var6 = undefined;
                if (!(var1 === var6)) {
                    _fun49799_ip = 38;
                    continue _fun49799
                }
            case 12:
                var4 = _closure1_slot4;
                var0 = new Array(2);
                var0[0] = var4;
                var2 = _closure1_slot3;
                var0[1] = var2;
                var1 = var0;
            case 38:
                var5 = var1;
                var0 = var5[Symbol.iterator];
                var5 = var0().next;
                var2 = var5().value;
                var1 = var0;
                var4 = var1 === var6;
                var1 = undefined;
                if (var4) {
                    _fun49799_ip = 63;
                    continue _fun49799
                }
            case 60:
                var1 = var2;
            case 63:
                var2 = undefined;
                if (var4) {
                    _fun49799_ip = 93;
                    continue _fun49799
                }
            case 68:
                var7 = var5().value;
                var5 = var0;
                var5 = var5 === var6;
                var2 = undefined;
                var4 = var5;
                if (var5) {
                    _fun49799_ip = 93;
                    continue _fun49799
                }
            case 87:
                var2 = var7;
                var4 = var5;
            case 93:
                if (var4) {
                    _fun49799_ip = 99;
                    continue _fun49799
                }
            case 96:
                var0.return();
            case 99:
                var0 = var1.getGuild;
                var4 = var0.bind(var1)(var3);
                var0 = null;
                if (!(var0 != var4)) {
                    _fun49799_ip = 209;
                    continue _fun49799
                }
            case 115:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 3;
                var1 = var7[var1];
                var5 = var5.bind(var6)(var1);
                var1 = var5.isCreatorMonetizationEnabledGuild;
                var1 = var1.bind(var5)(var4);
                var5 = var4.features;
                var4 = var5.has;
                var0 = _closure1_slot5;
                var0 = var0.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE;
                var0 = var4.bind(var5)(var0);
                var1 = !var1;
                if (var1) {
                    _fun49799_ip = 184;
                    continue _fun49799
                }
            case 181:
                var1 = !var0;
            case 184:
                var0 = !var1;
                if (!var1) {
                    _fun49799_ip = 207;
                    continue _fun49799
                }
            case 190:
                var1 = var2.isViewingServerShop;
                var1 = var1.bind(var2)(var3);
                var1 = !var1;
                var0 = !var1;
            case 207:
                return var0;
            case 209:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot6 = var0;
    var3 = function arg0() {
        _fun49800: for (var _fun49800_ip = 0;;) switch (_fun49800_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var5 = undefined;
                var2 = var3.bind(var5)(var2);
                var2 = var2.bind(var5)(var4);
                var3 = _closure1_slot0;
                var7 = 5;
                var7 = var6[var7];
                var9 = var3.bind(var5)(var7);
                var8 = var9.useStateFromStores;
                var10 = _closure1_slot4;
                var7 = new Array(2);
                var7[0] = var10;
                var1 = _closure1_slot3;
                var7[1] = var1;
                var1 = new Array(1);
                var1[0] = var4;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot6;
                    var2 = _closure2_slot0;
                    var4 = _closure1_slot4;
                    var1 = new Array(2);
                    var1[0] = var4;
                    var0 = _closure1_slot3;
                    var1[1] = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var8.bind(var9)(var7, var0, var1);
                var0 = 6;
                var0 = var6[var0];
                var3 = var3.bind(var5)(var0);
                var0 = var3.useShouldHideGuildPurchaseEntryPoints;
                var0 = var0.bind(var3)(var4);
                var0 = var0.shouldHideGuildPurchaseEntryPoints;
                var0 = !var0;
                if (!var0) {
                    _fun49800_ip = 144;
                    continue _fun49800
                }
            case 135:
                if (var1) {
                    _fun49800_ip = 141;
                    continue _fun49800
                }
            case 138:
                var1 = var2;
            case 141:
                var0 = var1;
            case 144:
                return var0;
        }
    };
    var _closure1_slot7 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0, arg1() {
        _fun49802: for (var _fun49802_ip = 0;;) switch (_fun49802_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot6;
                var3 = undefined;
                var2 = var0.bind(var3)(var4);
                var0 = !var2;
                var0 = !var0;
                if (var2) {
                    _fun49802_ip = 61;
                    continue _fun49802
                }
            case 26:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.computeHasRoleSubscriptionsInGuild;
                var1 = arg1;
                var0 = var2.bind(var3)(var4, var1);
            case 61:
                return var0;
        }
    };
    var2.areRoleSubscriptionsVisibleInGuild = var4;
    var2.useRoleSubscriptionsVisibleInGuild = var3;
    var1 = function arg0() {
        _fun49803: for (var _fun49803_ip = 0;;) switch (_fun49803_ip) {
            case 0:
                var4 = arg0;
                var0 = _closure1_slot7;
                var3 = undefined;
                var0 = var0.bind(var3)(var4);
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.useIsEligibleForSubscriptionsInGuildShop;
                var1 = 'useShowRoleSubscriptionsInChannelList';
                var1 = var2.bind(var3)(var4, var1);
                if (!var0) {
                    _fun49803_ip = 67;
                    continue _fun49803
                }
            case 56:
                var1 = !var1;
                if (var1) {
                    _fun49803_ip = 64;
                    continue _fun49803
                }
            case 62:
                var1 = true;
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var2.useShowRoleSubscriptionsInChannelList = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1673, 1410, 660, 5620, 5621, 566, 5622, 5627, 2]);