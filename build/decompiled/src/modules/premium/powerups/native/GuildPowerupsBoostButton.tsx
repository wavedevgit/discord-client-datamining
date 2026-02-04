// modules/premium/powerups/native/GuildPowerupsBoostButton.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticsSections;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot8 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/GuildPowerupsBoostButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102565: for (var _fun102565_ip = 0;;) switch (_fun102565_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 6;
                var2 = var5[var0];
                var4 = undefined;
                var9 = var3.bind(var4)(var2);
                var7 = var9.useStateFromStores;
                var2 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var7.bind(var9)(var6, var2);
                var2 = var5[var0];
                var9 = var3.bind(var4)(var2);
                var7 = var9.useStateFromStores;
                var2 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = _closure1_slot6;
                    var0 = var0.boostSlots;
                    return var0;
                };
                var2 = var7.bind(var9)(var6, var2);
                var _closure2_slot1 = var2;
                var7 = _closure1_slot1;
                var6 = 7;
                var6 = var5[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var9 = true;
                var6.forceFetch = var9;
                var7 = var7.bind(var4)(var6);
                var0 = var5[var0];
                var6 = var3.bind(var4)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var5.bind(var6)(var3, var0);
                var0 = null;
                if (!(var0 == var3)) {
                    _fun102565_ip = 221;
                    continue _fun102565
                }
            case 187:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 8;
                var5 = var9[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.PremiumSubscriptionGroupRole;
                var5 = var5.UNSPECIFIED;
                _fun102565_ip = 227;
                continue _fun102565;
            case 221:
                var5 = var3.premiumGroupRole;
            case 227:
                var6 = _closure1_slot3;
                var9 = var6.useMemo;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var1
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.values;
                    var0 = _closure2_slot1;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.isAvailable;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = var9.bind(var6)(var2, var3);
                var3 = var6.useCallback;
                var2 = function(arg0, arg1) { // Environment: var1
                    _fun102571: for (var _fun102571_ip = 0;;) switch (_fun102571_ip) {
                        case 0:
                            var4 = arg1;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun102571_ip = 67;
                                continue _fun102571
                            }
                        case 9:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.openTransferModal;
                            var0 = {};
                            var3 = new Array(1);
                            var3[0] = var4;
                            var0.guildBoostSlots = var3;
                            var3 = arg0;
                            var0.guildId = var3;
                            var0 = var1.bind(var2)(var0);
                        case 67:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = new Array(0);
                var6 = var3.bind(var6)(var2, var1);
                var1 = var0 == var10;
                var0 = null;
                if (var1) {
                    _fun102565_ip = 365;
                    continue _fun102565
                }
            case 288:
                var3 = _closure1_slot8;
                var2 = _closure1_slot1;
                var11 = _closure1_slot2;
                var1 = 10;
                var1 = var11[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var1.guild = var10;
                var1.previousGuildSubscriptionSlot = var9;
                var8 = _closure1_slot7;
                var8 = var8.GUILD_POWERUPS_OVERVIEW_SIDEBAR;
                var1.analyticsSection = var8;
                var7 = var7.fractionalState;
                var1.fractionalPremiumState = var7;
                var1.onAvailableSlotPress = var6;
                var1.premiumGroupRole = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 365:
                return var0;
        }
    };
    var2.GuildPowerupsBoostButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 1621, 6708, 660, 33, 566, 4651, 1637, 9952, 9960, 2]);