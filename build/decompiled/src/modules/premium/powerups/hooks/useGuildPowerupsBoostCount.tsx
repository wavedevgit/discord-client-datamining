// modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/hooks/useGuildPowerupsBoostCount.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun55789: for (var _fun55789_ip = 0;;) switch (_fun55789_ip) {
            case 0:
                var10 = arg0;
                var _closure2_slot0 = var10;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var8 = 5;
                var2 = var2[var8];
                var5 = undefined;
                var6 = var3.bind(var5)(var2);
                var4 = var6.useStateFromStores;
                var2 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun55790: for (var _fun55790_ip = 0;;) switch (_fun55790_ip) {
                        case 0:
                            var2 = _closure1_slot3;
                            var1 = var2.getGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun55790_ip = 41;
                                continue _fun55790
                            }
                        case 35:
                            var0 = var1.premiumSubscriberCount;
                        case 41:
                            return var0;
                    }
                };
                var2 = var4.bind(var6)(var3, var2);
                var3 = null;
                var3 = var3 != var2;
                var7 = 0;
                if (!var3) {
                    _fun55789_ip = 76;
                    continue _fun55789
                }
            case 73:
                var7 = var2;
            case 76:
                var _closure2_slot1 = var7;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 4;
                var4 = var2[var4];
                var9 = var3.bind(var5)(var4);
                var6 = var9.useGameServerEnabled;
                var4 = 'GuildPowerupsBoostCount';
                var4 = var6.bind(var9)(var10, var4);
                var _closure2_slot2 = var4;
                var6 = var2[var8];
                var11 = var3.bind(var5)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var0
                    _fun55791: for (var _fun55791_ip = 0;;) switch (_fun55791_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getStateForGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun55791_ip = 42;
                                continue _fun55791
                            }
                        case 36:
                            var0 = var1.appliedBoosts;
                        case 42:
                            return var0;
                    }
                };
                var6 = var10.bind(var11)(var9, var6);
                var _closure2_slot3 = var6;
                var2 = var2[var8];
                var8 = var3.bind(var5)(var2);
                var5 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun55792: for (var _fun55792_ip = 0;;) switch (_fun55792_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getStateForGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun55792_ip = 42;
                                continue _fun55792
                            }
                        case 36:
                            var0 = var1.appliedBoosts;
                        case 42:
                            return var0;
                    }
                };
                var5 = var5.bind(var8)(var3, var2);
                var _closure2_slot4 = var5;
                var3 = _closure1_slot2;
                var2 = var3.useMemo;
                var1 = new Array(4);
                var1[0] = var7;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var0 = function() { // Environment: var0
                    _fun55793: for (var _fun55793_ip = 0;;) switch (_fun55793_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var0)) {
                                _fun55793_ip = 105;
                                continue _fun55793
                            }
                        case 13:
                            var0 = _closure2_slot2;
                            if (!var0) {
                                _fun55793_ip = 28;
                                continue _fun55793
                            }
                        case 20:
                            var0 = _closure2_slot4;
                            if (!(var3 != var0)) {
                                _fun55793_ip = 105;
                                continue _fun55793
                            }
                        case 28:
                            var2 = _closure2_slot3;
                            var0 = _closure2_slot4;
                            var3 = var3 != var0;
                            var6 = 0;
                            var0 = 0;
                            if (!var3) {
                                _fun55793_ip = 51;
                                continue _fun55793
                            }
                        case 47:
                            var0 = _closure2_slot4;
                        case 51:
                            var2 = var2 + var0;
                            var0 = {};
                            var3 = global;
                            var5 = var3.Math;
                            var4 = var5.max;
                            var3 = _closure2_slot1;
                            var3 = var3 - var2;
                            var3 = var4.bind(var5)(var6, var3);
                            var0.available = var3;
                            var0.spent = var2;
                            var2 = _closure2_slot1;
                            var0.total = var2;
                            return var0;
                        case 105:
                            var0 = {
                                'available': 0,
                                'spent': 0
                            };
                            var1 = _closure2_slot1;
                            var0.total = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun55794: for (var _fun55794_ip = 0;;) switch (_fun55794_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot3;
                var0 = var1.getGuild;
                var1 = var0.bind(var1)(var8);
                var0 = null;
                var4 = var0 == var1;
                var3 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun55794_ip = 39;
                    continue _fun55794
                }
            case 33:
                var2 = var1.premiumSubscriberCount;
            case 39:
                var4 = var0 != var2;
                var6 = 0;
                var1 = 0;
                if (!var4) {
                    _fun55794_ip = 53;
                    continue _fun55794
                }
            case 50:
                var1 = var2;
            case 53:
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 4;
                var2 = var7[var2];
                var7 = var4.bind(var3)(var2);
                var4 = var7.getGameServerEnabled;
                var2 = 'GuildPowerupsBoostCount';
                var4 = var4.bind(var7)(var8, var2);
                var7 = _closure1_slot5;
                var2 = var7.getStateForGuild;
                var7 = var2.bind(var7)(var8);
                var9 = var0 == var7;
                var2 = undefined;
                if (var9) {
                    _fun55794_ip = 121;
                    continue _fun55794
                }
            case 115:
                var2 = var7.appliedBoosts;
            case 121:
                var7 = _closure1_slot4;
                var5 = var7.getStateForGuild;
                var5 = var5.bind(var7)(var8);
                var7 = var0 == var5;
                var3 = undefined;
                if (var7) {
                    _fun55794_ip = 151;
                    continue _fun55794
                }
            case 145:
                var3 = var5.appliedBoosts;
            case 151:
                if (!(var0 != var2)) {
                    _fun55794_ip = 220;
                    continue _fun55794
                }
            case 155:
                if (!var4) {
                    _fun55794_ip = 162;
                    continue _fun55794
                }
            case 158:
                if (!(var0 != var3)) {
                    _fun55794_ip = 220;
                    continue _fun55794
                }
            case 162:
                var4 = var0 != var3;
                var0 = 0;
                if (!var4) {
                    _fun55794_ip = 174;
                    continue _fun55794
                }
            case 171:
                var0 = var3;
            case 174:
                var2 = var2 + var0;
                var0 = {};
                var3 = global;
                var5 = var3.Math;
                var4 = var5.max;
                var3 = var1 - var2;
                var3 = var4.bind(var5)(var6, var3);
                var0.available = var3;
                var0.spent = var2;
                var0.total = var1;
                return var0;
            case 220:
                var0 = {
                    'available': 0,
                    'spent': 0
                };
                var0.total = var1;
                return var0;
        }
    };
    var2.getGuildPowerupsBoostCount = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1410, 6714, 6716, 5642, 566, 2]);