// modules/opt_in_channels/useShowChannelOptInNotice.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NULL_STRING_GUILD_ID;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelFlags;
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/opt_in_channels/useShowChannelOptInNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77228: for (var _fun77228_ip = 0;;) switch (_fun77228_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var3 = undefined;
                var7 = var5.bind(var3)(var0);
                var6 = var7.useOptInEnabledForGuild;
                var5 = null;
                var8 = var5 == var2;
                var0 = undefined;
                if (var8) {
                    _fun77228_ip = 61;
                    continue _fun77228
                }
            case 51:
                var8 = var2.getGuildId;
                var0 = var8.bind(var2)();
            case 61:
                if (!(var5 == var0)) {
                    _fun77228_ip = 71;
                    continue _fun77228
                }
            case 65:
                var0 = _closure1_slot3;
                _fun77228_ip = 76;
                continue _fun77228;
            case 71:
                var0 = var2.guild_id;
            case 76:
                var0 = var6.bind(var7)(var0);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 4;
                var6 = var8[var6];
                var10 = var7.bind(var3)(var6);
                var9 = var10.useStateFromStores;
                var11 = _closure1_slot2;
                var6 = new Array(1);
                var6[0] = var11;
                var1 = function() { // Environment: var1
                    _fun77229: for (var _fun77229_ip = 0;;) switch (_fun77229_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun77229_ip = 38;
                                continue _fun77229
                            }
                        case 16:
                            var3 = _closure1_slot2;
                            var2 = var3.isChannelRecordOrParentOptedIn;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var1 = var9.bind(var10)(var6, var1);
                var6 = 5;
                var6 = var8[var6];
                var7 = var7.bind(var3)(var6);
                var6 = var7.useCanSeeOnboardingHome;
                var8 = var5 == var2;
                var3 = undefined;
                if (var8) {
                    _fun77228_ip = 163;
                    continue _fun77228
                }
            case 158:
                var3 = var2.guild_id;
            case 163:
                if (!(var5 == var3)) {
                    _fun77228_ip = 171;
                    continue _fun77228
                }
            case 167:
                var3 = _closure1_slot3;
            case 171:
                var3 = var6.bind(var7)(var3);
                if (!(var5 != var2)) {
                    _fun77228_ip = 234;
                    continue _fun77228
                }
            case 180:
                if (!var3) {
                    _fun77228_ip = 204;
                    continue _fun77228
                }
            case 183:
                var5 = var2.hasFlag;
                var4 = _closure1_slot4;
                var4 = var4.IS_GUILD_RESOURCE_CHANNEL;
                var3 = var5.bind(var2)(var4);
            case 204:
                if (!var0) {
                    _fun77228_ip = 210;
                    continue _fun77228
                }
            case 207:
                var0 = !var3;
            case 210:
                if (!var0) {
                    _fun77228_ip = 216;
                    continue _fun77228
                }
            case 213:
                var0 = !var1;
            case 216:
                if (!var0) {
                    _fun77228_ip = 232;
                    continue _fun77228
                }
            case 219:
                var1 = var2.isThread;
                var1 = var1.bind(var2)();
                var0 = !var1;
            case 232:
                return var0;
            case 234:
                var0 = false;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4303, 660, 1379, 4579, 566, 4580, 2]);