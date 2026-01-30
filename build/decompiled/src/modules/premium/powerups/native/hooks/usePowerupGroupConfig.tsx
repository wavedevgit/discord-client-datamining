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
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/powerups/native/hooks/usePowerupGroupConfig.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: usePowerupGroupConfig, environment: var1
        _fun103143: for (var _fun103143_ip = 0;;) switch (_fun103143_ip) {
            case 0:
                var5 = arg1;
                var1 = arg0;
                var _closure2_slot0 = var1;
                var _closure2_slot1 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 2;
                var2 = var4[var2];
                var8 = undefined;
                var6 = var3.bind(var8)(var2);
                var4 = var6.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun103144: for (var _fun103144_ip = 0;;) switch (_fun103144_ip) {
                        case 0:
                            var2 = _closure1_slot4;
                            var1 = var2.getStateForGuild;
                            var0 = _closure2_slot0;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun103144_ip = 42;
                                continue _fun103144
                            }
                        case 36:
                            var0 = var1.unlockedPowerups;
                        case 42:
                            return var0;
                    }
                };
                var6 = var4.bind(var6)(var3, var2);
                var3 = null;
                var4 = var3 == var6;
                var2 = undefined;
                if (var4) {
                    _fun103143_ip = 112;
                    continue _fun103143
                }
            case 82:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 3;
                var4 = var9[var4];
                var4 = var7.bind(var8)(var4);
                var4 = var4.GUILD_POWERUP_TAG_SKU_ID;
                var2 = var6[var4];
            case 112:
                var4 = var3 != var2;
                var _closure2_slot2 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function() { // Environment: var0
                    _fun103145: for (var _fun103145_ip = 0;;) switch (_fun103145_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var2 = var0.group;
                            var0 = 'guildTagsBadgePacks';
                            if (!(var0 !== var2)) {
                                _fun103145_ip = 71;
                                continue _fun103145
                            }
                        case 23:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 8;
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
                            var4 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var3 = 4;
                            var2 = var9[var3];
                            var6 = undefined;
                            var2 = var4.bind(var6)(var2);
                            var11 = var2.intl;
                            var10 = var11.string;
                            var8 = _closure1_slot1;
                            var7 = 5;
                            var2 = var9[var7];
                            var2 = var8.bind(var6)(var2);
                            var2 = var2.KC9HRW;
                            var2 = var10.bind(var11)(var2);
                            var0.title = var2;
                            var2 = var9[var3];
                            var2 = var4.bind(var6)(var2);
                            var10 = var2.intl;
                            var4 = var10.string;
                            var2 = var9[var7];
                            var2 = var8.bind(var6)(var2);
                            var2 = var2.GJiSmP;
                            var2 = var4.bind(var10)(var2);
                            var0.description = var2;
                            var2 = {};
                            var4 = 6;
                            var4 = var9[var4];
                            var4 = var8.bind(var6)(var4);
                            var2.staticUrl = var4;
                            var4 = 7;
                            var4 = var9[var4];
                            var4 = var8.bind(var6)(var4);
                            var2.animatedUrl = var4;
                            var0.image = var2;
                            var2 = _closure2_slot2;
                            var1 = undefined;
                            if (var2) {
                                _fun103145_ip = 289;
                                continue _fun103145
                            }
                        case 236:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var3 = var2[var3];
                            var3 = var4.bind(var6)(var3);
                            var4 = var3.intl;
                            var3 = var4.string;
                            var5 = _closure1_slot1;
                            var2 = var2[var7];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.lvk1Gc;
                            var1 = var3.bind(var4)(var2);
                        case 289:
                            var0.disabledReason = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6677, 566, 6601, 1234, 1881, 13414, 13415, 1304, 2]);