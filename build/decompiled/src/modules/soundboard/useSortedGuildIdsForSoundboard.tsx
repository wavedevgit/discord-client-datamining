// modules/soundboard/useSortedGuildIdsForSoundboard.tsx
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
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/useSortedGuildIdsForSoundboard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun68464: for (var _fun68464_ip = 0;;) switch (_fun68464_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var7;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var9 = 6;
                var2 = var2[var9];
                var4 = undefined;
                var8 = var5.bind(var4)(var2);
                var6 = var8.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot6;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var8 = var6.bind(var8)(var5, var2);
                var _closure2_slot2 = var8;
                var2 = null;
                var5 = var2 == var3;
                var6 = undefined;
                if (var5) {
                    _fun68464_ip = 91;
                    continue _fun68464
                }
            case 86:
                var6 = var3.guild_id;
            case 91:
                if (!(var2 == var6)) {
                    _fun68464_ip = 99;
                    continue _fun68464
                }
            case 95:
                var6 = _closure1_slot7;
            case 99:
                var _closure2_slot3 = var6;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var5 = var2[var9];
                var12 = var3.bind(var4)(var5);
                var11 = var12.useStateFromStores;
                var5 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var5;
                var5 = function() { // Environment: var0
                    var1 = _closure1_slot5;
                    var0 = var1.getFlattenedGuildIds;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var11.bind(var12)(var10, var5);
                var _closure2_slot4 = var5;
                var2 = var2[var9];
                var9 = var3.bind(var4)(var2);
                var4 = var9.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun68467: for (var _fun68467_ip = 0;;) switch (_fun68467_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = null;
                            var0 = var3 == var0;
                            if (var0) {
                                _fun68467_ip = 29;
                                continue _fun68467
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var2 = var2.guild_id;
                            var0 = var3 == var2;
                        case 29:
                            if (var0) {
                                _fun68467_ip = 65;
                                continue _fun68467
                            }
                        case 32:
                            var4 = _closure1_slot4;
                            var3 = var4.can;
                            var2 = _closure1_slot8;
                            var2 = var2.USE_EXTERNAL_SOUNDS;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 65:
                            return var0;
                    }
                };
                var4 = var4.bind(var9)(var3, var2);
                var _closure2_slot5 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(5);
                var1[0] = var8;
                var1[1] = var7;
                var1[2] = var6;
                var1[3] = var5;
                var1[4] = var4;
                var0 = function() { // Environment: var0
                    _fun68468: for (var _fun68468_ip = 0;;) switch (_fun68468_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.canUseSoundboardEverywhere;
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var0);
                            if (var0) {
                                _fun68468_ip = 53;
                                continue _fun68468
                            }
                        case 46:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun68468_ip = 60;
                                continue _fun68468
                            }
                        case 53:
                            var0 = _closure2_slot5;
                            if (var0) {
                                _fun68468_ip = 74;
                                continue _fun68468
                            }
                        case 60:
                            var2 = _closure2_slot3;
                            var0 = new Array(1);
                            var0[0] = var2;
                            return var0;
                        case 74:
                            var2 = _closure2_slot3;
                            var0 = '';
                            var2 = var0 !== var2;
                            var5 = _closure2_slot4;
                            if (var2) {
                                _fun68468_ip = 98;
                                continue _fun68468
                            }
                        case 93:
                            var0 = var5;
                            _fun68468_ip = 117;
                            continue _fun68468;
                        case 98:
                            var4 = var5.filter;
                            var3 = function(arg0) { // Environment: var3
                                var1 = _closure2_slot3;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var0 = var4.bind(var5)(var3);
                        case 117:
                            if (!var2) {
                                _fun68468_ip = 135;
                                continue _fun68468
                            }
                        case 120:
                            var2 = var0.unshift;
                            var1 = _closure2_slot3;
                            var1 = var2.bind(var0)(var1);
                        case 135:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.useSortedGuildIdsForSoundboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3093, 4377, 1621, 660, 483, 632, 3111, 2]);