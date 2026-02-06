// modules/soundboard/canChannelUseSoundboard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var3 = function arg0() {
        _fun50862: for (var _fun50862_ip = 0;;) switch (_fun50862_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun50862_ip = 120;
                    continue _fun50862
                }
            case 9:
                var1 = _closure1_slot3;
                var4 = var1.CALLABLE;
                var2 = var4.has;
                var1 = var3.type;
                var1 = var2.bind(var4)(var1);
                if (var1) {
                    _fun50862_ip = 116;
                    continue _fun50862
                }
            case 40:
                var4 = _closure1_slot1;
                var2 = var4.can;
                var1 = _closure1_slot4;
                var1 = var1.USE_SOUNDBOARD;
                var2 = var2.bind(var4)(var1, var3);
                var4 = _closure1_slot1;
                var1 = var4.can;
                var0 = _closure1_slot4;
                var0 = var0.SPEAK;
                var1 = var1.bind(var4)(var0, var3);
                var0 = var3.isGuildVoiceOrThread;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun50862_ip = 108;
                    continue _fun50862
                }
            case 105:
                var0 = var2;
            case 108:
                if (!var0) {
                    _fun50862_ip = 114;
                    continue _fun50862
                }
            case 111:
                var0 = var1;
            case 114:
                return var0;
            case 116:
                var0 = true;
                return var0;
            case 120:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ChannelTypesSets;
    var _closure1_slot3 = var7;
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundboard/canChannelUseSoundboard.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() {
        var2 = _closure1_slot2;
        var1 = var2.getVoiceChannelId;
        var3 = var1.bind(var2)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot0;
        var0 = var1.getChannel;
        var1 = var0.bind(var1)(var3);
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.canSelectedVoiceChannelUseSoundboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3093, 1670, 660, 2]);