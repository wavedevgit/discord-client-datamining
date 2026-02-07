// modules/stickers/StickerSendability.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var7;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var7[var9];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var8 = 1;
    var3 = var7[var8];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var5 = 2;
    var3 = var7[var5];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var4 = {};
    var4.SENDABLE = var9;
    var3 = 'SENDABLE';
    var4[var9] = var3;
    var4.SENDABLE_WITH_PREMIUM = var8;
    var3 = 'SENDABLE_WITH_PREMIUM';
    var4[var8] = var3;
    var4.NONSENDABLE = var5;
    var3 = 'NONSENDABLE';
    var4[var5] = var3;
    var5 = 3;
    var4.SENDABLE_WITH_BOOSTED_GUILD = var5;
    var3 = 'SENDABLE_WITH_BOOSTED_GUILD';
    var4[var5] = var3;
    var _closure1_slot7 = var4;
    var3 = function arg0, arg1, arg2() {
        _fun50173: for (var _fun50173_ip = 0;;) switch (_fun50173_ip) {
            case 0:
                var1 = arg0;
                var10 = arg1;
                var9 = arg2;
                var3 = null;
                if (!(var3 != var10)) {
                    _fun50173_ip = 412;
                    continue _fun50173
                }
            case 18:
                var5 = _closure1_slot1;
                var0 = _closure1_slot3;
                var4 = 3;
                var4 = var0[var4];
                var8 = undefined;
                var5 = var5.bind(var8)(var4);
                var4 = var5.canUseCustomStickersEverywhere;
                var6 = var4.bind(var5)(var10);
                var4 = _closure1_slot0;
                var5 = 4;
                var0 = var0[var5];
                var4 = var4.bind(var8)(var0);
                var0 = var4.isStandardSticker;
                var0 = var0.bind(var4)(var1);
                if (var0) {
                    _fun50173_ip = 360;
                    continue _fun50173
                }
            case 87:
                var4 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var5];
                var4 = var4.bind(var8)(var0);
                var0 = var4.isGuildSticker;
                var0 = var0.bind(var4)(var1);
                if (!var0) {
                    _fun50173_ip = 122;
                    continue _fun50173
                }
            case 118:
                if (!(var3 == var9)) {
                    _fun50173_ip = 137;
                    continue _fun50173
                }
            case 122:
                var0 = _closure1_slot7;
                var0 = var0.NONSENDABLE;
                _fun50173_ip = 358;
                continue _fun50173;
            case 137:
                var7 = _closure1_slot4;
                var5 = var7.getSelfMember;
                var4 = var1.guild_id;
                var4 = var5.bind(var7)(var4);
                if (!(var3 != var4)) {
                    _fun50173_ip = 345;
                    continue _fun50173
                }
            case 164:
                var4 = var1.available;
                if (var4) {
                    _fun50173_ip = 188;
                    continue _fun50173
                }
            case 173:
                var4 = _closure1_slot7;
                var4 = var4.SENDABLE_WITH_BOOSTED_GUILD;
                _fun50173_ip = 343;
                continue _fun50173;
            case 188:
                var5 = var9.guild_id;
                if (!(var3 != var5)) {
                    _fun50173_ip = 224;
                    continue _fun50173
                }
            case 197:
                var7 = var9.guild_id;
                var5 = '';
                if (!(var5 !== var7)) {
                    _fun50173_ip = 224;
                    continue _fun50173
                }
            case 210:
                var7 = var9.guild_id;
                var5 = var1.guild_id;
                if (!(var7 !== var5)) {
                    _fun50173_ip = 330;
                    continue _fun50173
                }
            case 224:
                var5 = var9.guild_id;
                if (!(var3 != var5)) {
                    _fun50173_ip = 304;
                    continue _fun50173
                }
            case 233:
                var7 = _closure1_slot2;
                var11 = _closure1_slot3;
                var5 = 5;
                var5 = var11[var5];
                var8 = var7.bind(var8)(var5);
                var7 = var8.can;
                var5 = {};
                var11 = _closure1_slot6;
                var11 = var11.USE_EXTERNAL_STICKERS;
                var5.permission = var11;
                var5.user = var10;
                var5.context = var9;
                var5 = var7.bind(var8)(var5);
                if (var5) {
                    _fun50173_ip = 304;
                    continue _fun50173
                }
            case 292:
                var5 = _closure1_slot7;
                var5 = var5.NONSENDABLE;
                _fun50173_ip = 328;
                continue _fun50173;
            case 304:
                var7 = _closure1_slot7;
                if (var6) {
                    _fun50173_ip = 319;
                    continue _fun50173
                }
            case 311:
                var6 = var7.SENDABLE_WITH_PREMIUM;
                _fun50173_ip = 325;
                continue _fun50173;
            case 319:
                var6 = var7.SENDABLE;
            case 325:
                var5 = var6;
            case 328:
                _fun50173_ip = 340;
                continue _fun50173;
            case 330:
                var6 = _closure1_slot7;
                var5 = var6.SENDABLE;
            case 340:
                var4 = var5;
            case 343:
                _fun50173_ip = 355;
                continue _fun50173;
            case 345:
                var5 = _closure1_slot7;
                var4 = var5.NONSENDABLE;
            case 355:
                var0 = var4;
            case 358:
                _fun50173_ip = 410;
                continue _fun50173;
            case 360:
                var5 = _closure1_slot5;
                var4 = var5.getStickerPack;
                var1 = var1.pack_id;
                var1 = var4.bind(var5)(var1);
                if (!(var3 != var1)) {
                    _fun50173_ip = 397;
                    continue _fun50173
                }
            case 385:
                var1 = _closure1_slot7;
                var1 = var1.SENDABLE;
                _fun50173_ip = 407;
                continue _fun50173;
            case 397:
                var2 = _closure1_slot7;
                var1 = var2.NONSENDABLE;
            case 407:
                var0 = var1;
            case 410:
                return var0;
            case 412:
                var0 = _closure1_slot7;
                var0 = var0.NONSENDABLE;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var5 = 6;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/stickers/StickerSendability.tsx';
    var5 = var6.bind(var7)(var5);
    var2.StickerSendability = var4;
    var2.getStickerSendability = var3;
    var1 = function(arg0, arg1, arg2) { // Environment: var1
        var5 = _closure1_slot8;
        var4 = undefined;
        var3 = arg0;
        var2 = arg1;
        var1 = arg2;
        var1 = var5.bind(var4)(var3, var2, var1);
        var0 = _closure1_slot7;
        var0 = var0.SENDABLE;
        var0 = var1 === var0;
        return var0;
    };
    var2.isSendableSticker = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1683, 5647, 660, 3111, 3998, 3098, 2]);