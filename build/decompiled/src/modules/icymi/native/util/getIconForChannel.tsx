// modules/icymi/native/util/getIconForChannel.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelTypes;
    var _closure1_slot2 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/util/getIconForChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104083: for (var _fun104083_ip = 0;;) switch (_fun104083_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = _closure1_slot2;
                var1 = var1.GUILD_ANNOUNCEMENT;
                if (!(var1 !== var2)) {
                    _fun104083_ip = 284;
                    continue _fun104083
                }
            case 28:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_VOICE;
                if (!(var1 !== var2)) {
                    _fun104083_ip = 254;
                    continue _fun104083
                }
            case 45:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_STAGE_VOICE;
                if (!(var1 !== var2)) {
                    _fun104083_ip = 224;
                    continue _fun104083
                }
            case 62:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_TEXT;
                if (!(var1 !== var2)) {
                    _fun104083_ip = 194;
                    continue _fun104083
                }
            case 76:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_FORUM;
                if (!(var1 !== var2)) {
                    _fun104083_ip = 164;
                    continue _fun104083
                }
            case 90:
                var1 = _closure1_slot2;
                var1 = var1.GUILD_MEDIA;
                if (!(var1 !== var2)) {
                    _fun104083_ip = 134;
                    continue _fun104083
                }
            case 104:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.TextIcon;
                return var1;
            case 134:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ImageIcon;
                return var1;
            case 164:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.ForumIcon;
                return var1;
            case 194:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.TextIcon;
                return var1;
            case 224:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StageIcon;
                return var1;
            case 254:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.VoiceNormalIcon;
                return var1;
            case 284:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var0 = var0.AnnouncementsIcon;
                return var0;
        }
    };
    var2.getIconForChannel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 4859, 4865, 4862, 4848, 4854, 4853, 2]);