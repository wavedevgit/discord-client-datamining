// modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77433: for (var _fun77433_ip = 0;;) switch (_fun77433_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var2 = var4[var1];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.useStateFromStores;
                var8 = _closure1_slot2;
                var2 = new Array(2);
                var2[0] = var8;
                var8 = _closure1_slot3;
                var2[1] = var8;
                var0 = function() { // Environment: var0
                    _fun77434: for (var _fun77434_ip = 0;;) switch (_fun77434_ip) {
                        case 0:
                            var3 = _closure1_slot2;
                            var1 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var3)(var0);
                            var4 = null;
                            if (!(var4 != var0)) {
                                _fun77434_ip = 122;
                                continue _fun77434
                            }
                        case 30:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 5;
                            var3 = var3[var1];
                            var1 = undefined;
                            var7 = var5.bind(var1)(var3);
                            var6 = var7.hasFlag;
                            var5 = var0.flags;
                            var3 = _closure1_slot5;
                            var3 = var3.IS_GUILD_RESOURCE_CHANNEL;
                            var3 = var6.bind(var7)(var5, var3);
                            if (!var3) {
                                _fun77434_ip = 122;
                                continue _fun77434
                            }
                        case 82:
                            var3 = _closure1_slot3;
                            var2 = var3.getSelectedResourceChannelId;
                            var4 = var4 == var0;
                            var1 = undefined;
                            if (var4) {
                                _fun77434_ip = 108;
                                continue _fun77434
                            }
                        case 103:
                            var1 = var0.guild_id;
                        case 108:
                            var2 = var2.bind(var3)(var1);
                            var1 = var0.id;
                            if (!(var2 !== var1)) {
                                _fun77434_ip = 126;
                                continue _fun77434
                            }
                        case 122:
                            var1 = undefined;
                            return var1;
                        case 126:
                            var0 = var0.guild_id;
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var2, var0);
                var0 = 6;
                var0 = var4[var0];
                var4 = var3.bind(var1)(var0);
                var3 = var4.useCanSeeOnboardingHome;
                var0 = null;
                var1 = var2;
                if (!(var0 == var1)) {
                    _fun77433_ip = 103;
                    continue _fun77433
                }
            case 99:
                var1 = _closure1_slot4;
            case 103:
                var1 = var3.bind(var4)(var1);
                var0 = var0 != var2;
                if (!var0) {
                    _fun77433_ip = 118;
                    continue _fun77433
                }
            case 115:
                var0 = var1;
            case 118:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 9871, 660, 1379, 632, 1384, 4580, 2]);