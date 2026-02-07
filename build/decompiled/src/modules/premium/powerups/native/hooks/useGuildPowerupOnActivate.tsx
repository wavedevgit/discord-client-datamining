// modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx
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
    var3 = var4.bind(var0)(var3);
    var6 = var3.BoostPurchaseIntent;
    var _closure1_slot6 = var6;
    var3 = var3.GuildPowerupType;
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/hooks/useGuildPowerupOnActivate.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var8 = arg0;
        var12 = arg1;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var12;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 4;
        var0 = var7[var0];
        var6 = undefined;
        var0 = var5.bind(var6)(var0);
        var0 = var0.bind(var6)(var8, var12);
        var13 = var0.onToggle;
        var _closure2_slot2 = var13;
        var2 = var0.isLoading;
        var1 = var0.error;
        var9 = _closure1_slot0;
        var0 = 5;
        var0 = var7[var0];
        var11 = var9.bind(var6)(var0);
        var10 = var11.useStateFromStores;
        var0 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var0;
        var0 = function() { // Environment: var3
            var2 = _closure1_slot4;
            var1 = var2.getGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var10 = var10.bind(var11)(var9, var0);
        var _closure2_slot3 = var10;
        var0 = 6;
        var0 = var7[var0];
        var0 = var5.bind(var6)(var0);
        var11 = var0.bind(var6)(var8, var12);
        var _closure2_slot4 = var11;
        var0 = 7;
        var0 = var7[var0];
        var0 = var5.bind(var6)(var0);
        var0 = var0.bind(var6)();
        var9 = var0.analyticsLocations;
        var _closure2_slot5 = var9;
        var0 = 8;
        var0 = var7[var0];
        var5 = var5.bind(var6)(var0);
        var0 = 'guild_powerup_activation';
        var0 = var5.bind(var6)(var0);
        var8 = var0.shouldUseMwebRedirect;
        var _closure2_slot6 = var8;
        var7 = var0.handleMwebRedirect;
        var _closure2_slot7 = var7;
        var0 = {};
        var6 = _closure1_slot3;
        var5 = var6.useCallback;
        var4 = new Array(7);
        var4[0] = var13;
        var4[1] = var12;
        var4[2] = var11;
        var4[3] = var10;
        var4[4] = var9;
        var4[5] = var8;
        var4[6] = var7;
        var3 = function() { // Environment: var3
            _fun102973: for (var _fun102973_ip = 0;;) switch (_fun102973_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    var1 = null;
                    if (!(var1 != var0)) {
                        _fun102973_ip = 431;
                        continue _fun102973
                    }
                case 18:
                    var0 = _closure2_slot1;
                    if (!(var1 != var0)) {
                        _fun102973_ip = 431;
                        continue _fun102973
                    }
                case 29:
                    var1 = function() {
                        var2 = _closure2_slot2;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var2 = _closure2_slot4;
                    var0 = _closure2_slot1;
                    var0 = var0.cost;
                    if (!(!(var2 >= var0))) {
                        _fun102973_ip = 425;
                        continue _fun102973
                    }
                case 61:
                    var2 = _closure2_slot1;
                    var3 = var2.cost;
                    var0 = _closure2_slot4;
                    var10 = var3 - var0;
                    var _closure3_slot1 = var10;
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 9;
                    var5 = var5[var3];
                    var3 = undefined;
                    var8 = var7.bind(var3)(var5);
                    var7 = var8.getAvailableGuildBoostSlots;
                    var5 = _closure1_slot5;
                    var5 = var5.boostSlots;
                    var9 = var7.bind(var8)(var5);
                    var5 = var2.type;
                    var2 = _closure1_slot7;
                    var2 = var2.LEVEL;
                    if (!(var5 !== var2)) {
                        _fun102973_ip = 160;
                        continue _fun102973
                    }
                case 148:
                    var2 = _closure1_slot6;
                    var5 = var2.PERK;
                    _fun102973_ip = 170;
                    continue _fun102973;
                case 160:
                    var2 = _closure1_slot6;
                    var5 = var2.LEVEL;
                case 170:
                    var _closure3_slot2 = var5;
                    var7 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 10;
                    var2 = var12[var2];
                    var8 = var7.bind(var3)(var2);
                    var7 = var8.hideActionSheet;
                    var11 = _closure1_slot0;
                    var2 = 11;
                    var2 = var12[var2];
                    var2 = var11.bind(var3)(var2);
                    var2 = var2.GUILD_POWERUPS_BOTTOM_SHEET_KEY;
                    var2 = var7.bind(var8)(var2);
                    var2 = var9.length;
                    var8 = 0;
                    if (!(!(var2 > var8))) {
                        _fun102973_ip = 344;
                        continue _fun102973
                    }
                case 238:
                    var2 = _closure2_slot6;
                    if (var2) {
                        _fun102973_ip = 319;
                        continue _fun102973
                    }
                case 245:
                    var7 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 13;
                    var2 = var11[var2];
                    var15 = var7.bind(var3)(var2);
                    var14 = var15.launchGuildBoostFlowOrAlert;
                    var19 = _closure2_slot5;
                    var20 = {
                        'page': 'Guild Powerups',
                        'section': 'Powerup Activation'
                    };
                    var18 = function() { // Environment: var4
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 14;
                        var1 = var5[var1];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.popWithKey;
                        var3 = _closure1_slot0;
                        var0 = 15;
                        var0 = var5[var0];
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.PREMIUM_KEY;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var17 = function() { // Environment: var4
                        _fun102977: for (var _fun102977_ip = 0;;) switch (_fun102977_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.getAvailableGuildBoostSlots;
                                var2 = _closure1_slot5;
                                var2 = var2.boostSlots;
                                var9 = var3.bind(var4)(var2);
                                var3 = var9.length;
                                var2 = _closure3_slot1;
                                if (!(var3 >= var2)) {
                                    _fun102977_ip = 162;
                                    continue _fun102977
                                }
                            case 62:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 12;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openTransferModal;
                                var1 = {};
                                var8 = var9.slice;
                                var6 = _closure2_slot1;
                                var7 = var6.cost;
                                var6 = 0;
                                var6 = var8.bind(var9)(var6, var7);
                                var1.guildBoostSlots = var6;
                                var5 = _closure2_slot3;
                                var5 = var5.id;
                                var1.guildId = var5;
                                var4 = _closure3_slot2;
                                var1.intent = var4;
                                var4 = function arg0() {
                                    _fun102978: for (var _fun102978_ip = 0;;) switch (_fun102978_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (!var0) {
                                                _fun102978_ip = 19;
                                                continue _fun102978
                                            }
                                        case 6:
                                            var1 = _closure3_slot0;
                                            var0 = undefined;
                                            var0 = var1.bind(var0)();
                                        case 19:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1.onResult = var4;
                                var1 = var2.bind(var3)(var1);
                            case 162:
                                return var0;
                        }
                    };
                    var16 = function() { // Environment: var4
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 14;
                        var1 = var5[var1];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.popWithKey;
                        var3 = _closure1_slot0;
                        var0 = 15;
                        var0 = var5[var0];
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.PREMIUM_KEY;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var21 = var15;
                    var2 = var21[var14](var20, var19, var18, var17, var16, var15);
                    _fun102973_ip = 431;
                    continue _fun102973;
                case 319:
                    var11 = _closure2_slot7;
                    var7 = _closure2_slot5;
                    var2 = _closure2_slot3;
                    var2 = var2.id;
                    var2 = var11.bind(var3)(var7, var2);
                    _fun102973_ip = 431;
                    continue _fun102973;
                case 344:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 12;
                    var0 = var7[var0];
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.openTransferModal;
                    var0 = {};
                    var7 = var9.slice;
                    var7 = var7.bind(var9)(var8, var10);
                    var0.guildBoostSlots = var7;
                    var6 = _closure2_slot3;
                    var6 = var6.id;
                    var0.guildId = var6;
                    var0.intent = var5;
                    var4 = function arg0() {
                        _fun102975: for (var _fun102975_ip = 0;;) switch (_fun102975_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun102975_ip = 19;
                                    continue _fun102975
                                }
                            case 6:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 19:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onResult = var4;
                    var0 = var2.bind(var3)(var0);
                    _fun102973_ip = 431;
                    continue _fun102973;
                case 425:
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 431:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var0.onActivate = var3;
        var0.isLoading = var2;
        var0.error = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 6775, 6784, 13435, 566, 13436, 5777, 10033, 6774, 3279, 13423, 10021, 10030, 4561, 7116, 2]);