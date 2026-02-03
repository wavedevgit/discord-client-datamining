// modules/hang_status/parseHangStatus.tsx
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
    var3 = [null, null];
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/hang_status/parseHangStatus.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun62128: for (var _fun62128_ip = 0;;) switch (_fun62128_ip) {
            case 0:
                var3 = arg1;
                var4 = null;
                if (!(var4 != var3)) {
                    _fun62128_ip = 191;
                    continue _fun62128
                }
            case 12:
                var6 = _closure1_slot2;
                var5 = var6.getChannel;
                var7 = _closure1_slot3;
                var2 = var7.getVoiceStateForUser;
                var1 = arg0;
                var7 = var2.bind(var7)(var1);
                var8 = var4 == var7;
                var2 = undefined;
                var1 = undefined;
                if (var8) {
                    _fun62128_ip = 58;
                    continue _fun62128
                }
            case 53:
                var1 = var7.channelId;
            case 58:
                var1 = var5.bind(var6)(var1);
                var5 = var4 == var1;
                var4 = undefined;
                if (var5) {
                    _fun62128_ip = 77;
                    continue _fun62128
                }
            case 72:
                var4 = var1.guild_id;
            case 77:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.getHangStatusExperiment;
                var0 = {};
                var0.guildId = var4;
                var4 = 'parseHangStatus';
                var0.location = var4;
                var0 = var1.bind(var2)(var0);
                var2 = var0.defaultStatusVariant;
                var1 = var3.split;
                var0 = ':';
                var3 = var1.bind(var3)(var0);
                var4 = var3.length;
                var1 = 1;
                var0 = var3;
                if (!(var4 > var1)) {
                    _fun62128_ip = 189;
                    continue _fun62128
                }
            case 157:
                var1 = var3[var1];
                var0 = var3;
                if (!(var1 !== var2)) {
                    _fun62128_ip = 189;
                    continue _fun62128
                }
            case 168:
                var1 = 0;
                var3 = var3[var1];
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                var0 = var1;
            case 189:
                return var0;
            case 191:
                var0 = _closure1_slot4;
                return var0;
        }
    };
    var2.parseHangStatus = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3521, 3614, 2]);