// modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx
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
    var3 = var3.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET;
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun103035: for (var _fun103035_ip = 0;;) switch (_fun103035_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var6;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 3;
                var2 = var4[var2];
                var9 = undefined;
                var10 = var3.bind(var9)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot4;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    _fun103036: for (var _fun103036_ip = 0;;) switch (_fun103036_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getStateForGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun103036_ip = 42;
                                continue _fun103036
                            }
                        case 36:
                            var0 = var1.unlockedPowerups;
                        case 42:
                            return var0;
                    }
                };
                var7 = var8.bind(var10)(var7, var2);
                var2 = 4;
                var2 = var4[var2];
                var4 = var3.bind(var9)(var2);
                var3 = var4.useGuildTagBadgePacksWaveTwoExperimentEnabled;
                var2 = 'usePowerupGroupConfig';
                var4 = var3.bind(var4)(var5, var2);
                var _closure2_slot2 = var4;
                var3 = null;
                var5 = var3 == var7;
                var2 = undefined;
                if (var5) {
                    _fun103035_ip = 146;
                    continue _fun103035
                }
            case 116:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 5;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.GUILD_POWERUP_TAG_SKU_ID;
                var2 = var7[var5];
            case 146:
                var5 = var3 != var2;
                var _closure2_slot3 = var5;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun103037: for (var _fun103037_ip = 0;;) switch (_fun103037_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = var0.group;
                            var0 = 'guildTagsBadgePacks';
                            if (!(var0 !== var2)) {
                                _fun103037_ip = 71;
                                continue _fun103037
                            }
                        case 23:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 10;
                            var2 = var2[var0];
                            var0 = undefined;
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.assertNever;
                            var2 = _closure2_slot1;
                            var2 = var2.group;
                            var2 = var3.bind(var4)(var2);
                            return var0;
                        case 71:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var6 = 6;
                            var4 = var8[var6];
                            var2 = undefined;
                            var4 = var5.bind(var2)(var4);
                            var11 = var4.intl;
                            var10 = var11.string;
                            var7 = _closure1_slot1;
                            var9 = 7;
                            var4 = var8[var9];
                            var4 = var7.bind(var2)(var4);
                            var4 = var4.KC9HRW;
                            var4 = var10.bind(var11)(var4);
                            var0.title = var4;
                            var4 = var8[var6];
                            var4 = var5.bind(var2)(var4);
                            var10 = var4.intl;
                            var5 = var10.string;
                            var4 = var8[var9];
                            var4 = var7.bind(var2)(var4);
                            var4 = var4.GJiSmP;
                            var4 = var5.bind(var10)(var4);
                            var0.description = var4;
                            var4 = {};
                            var5 = 8;
                            var5 = var8[var5];
                            var5 = var7.bind(var2)(var5);
                            var4.staticUrl = var5;
                            var5 = 9;
                            var5 = var8[var5];
                            var5 = var7.bind(var2)(var5);
                            var4.animatedUrl = var5;
                            var0.image = var4;
                            var5 = _closure2_slot3;
                            var4 = undefined;
                            if (var5) {
                                _fun103037_ip = 289;
                                continue _fun103037
                            }
                        case 236:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var6 = var5[var6];
                            var6 = var7.bind(var2)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var8 = _closure1_slot1;
                            var5 = var5[var9];
                            var5 = var8.bind(var2)(var5);
                            var5 = var5.lvk1Gc;
                            var4 = var6.bind(var7)(var5);
                        case 289:
                            var0.disabledReason = var4;
                            var5 = _closure2_slot2;
                            var4 = undefined;
                            if (!var5) {
                                _fun103037_ip = 307;
                                continue _fun103037
                            }
                        case 303:
                            var4 = 'new';
                        case 307:
                            var0.badge = var4;
                            var4 = _closure2_slot2;
                            var2 = undefined;
                            if (!var4) {
                                _fun103037_ip = 325;
                                continue _fun103037
                            }
                        case 321:
                            var2 = _closure1_slot5;
                        case 325:
                            var0.newPowerupSkuIdSet = var2;
                            var1 = _closure2_slot2;
                            var0.forceStaticImages = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6783, 6784, 566, 6785, 6707, 1234, 1892, 13451, 13452, 1304, 2]);