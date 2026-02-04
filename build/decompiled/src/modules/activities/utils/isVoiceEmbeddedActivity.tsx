// modules/activities/utils/isVoiceEmbeddedActivity.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/isVoiceEmbeddedActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64115: for (var _fun64115_ip = 0;;) switch (_fun64115_ip) {
            case 0:
                var3 = arguments[1];
                var1 = arguments[2];
                var8 = undefined;
                if (!(var3 === var8)) {
                    _fun64115_ip = 19;
                    continue _fun64115
                }
            case 12:
                var3 = _closure1_slot3;
            case 19:
                if (!(var1 === var8)) {
                    _fun64115_ip = 30;
                    continue _fun64115
                }
            case 23:
                var1 = _closure1_slot4;
            case 30:
                var2 = var3.getChannel;
                var0 = arg0;
                var6 = var2.bind(var3)(var0);
                var0 = var1.getVoiceChannelId;
                var7 = var0.bind(var1)();
                var5 = null;
                var0 = var5 != var6;
                if (!var0) {
                    _fun64115_ip = 194;
                    continue _fun64115
                }
            case 65:
                var2 = var6.type;
                var3 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 4;
                var1 = var9[var1];
                var1 = var3.bind(var8)(var1);
                var1 = var1.ChannelTypes;
                var1 = var1.GUILD_VOICE;
                var1 = var2 === var1;
                if (var1) {
                    _fun64115_ip = 191;
                    continue _fun64115
                }
            case 112:
                var2 = var6.isPrivate;
                var2 = var2.bind(var6)();
                var3 = !var2;
                var2 = !var3;
                if (var3) {
                    _fun64115_ip = 188;
                    continue _fun64115
                }
            case 131:
                var3 = var6.id;
                var3 = var3 === var7;
                if (var3) {
                    _fun64115_ip = 185;
                    continue _fun64115
                }
            case 143:
                var8 = _closure1_slot5;
                var7 = var8.getVoiceStatesForChannel;
                var6 = var6.id;
                var6 = var7.bind(var8)(var6);
                var7 = _closure1_slot2;
                var4 = var7.getId;
                var4 = var4.bind(var7)();
                var4 = var6[var4];
                var3 = var5 != var4;
            case 185:
                var2 = var3;
            case 188:
                var1 = var2;
            case 191:
                var0 = var1;
            case 194:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 1372, 1670, 3521, 790, 2]);