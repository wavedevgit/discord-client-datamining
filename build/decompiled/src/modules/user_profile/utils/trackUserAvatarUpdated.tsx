// modules/user_profile/utils/trackUserAvatarUpdated.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/utils/trackUserAvatarUpdated.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57110: for (var _fun57110_ip = 0;;) switch (_fun57110_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.avatarHash;
                var10 = var1.avatarId;
                var8 = var1.isGuildProfile;
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun57110_ip = 29;
                    continue _fun57110
                }
            case 27:
                var8 = false;
            case 29:
                var6 = var1.avatarAssetOrigin;
                if (!(var6 === var0)) {
                    _fun57110_ip = 74;
                    continue _fun57110
                }
            case 39:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 1;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.AssetOriginTypes;
                var6 = var1.NEW_ASSET;
            case 74:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 2;
                var1 = var7[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot3;
                var2 = var1.USER_AVATAR_UPDATED;
                var1 = {};
                var9 = _closure1_slot0;
                var11 = 3;
                var11 = var7[var11];
                var12 = var9.bind(var0)(var11);
                var11 = var12.isAnimatedIconHash;
                var11 = var11.bind(var12)(var13);
                var1.animated = var11;
                var1.is_guild_profile = var8;
                var8 = 1;
                var7 = var7[var8];
                var7 = var9.bind(var0)(var7);
                var7 = var7.AssetOriginTypes;
                var9 = var7.ARCHIVED_ASSET;
                var7 = undefined;
                if (!(var6 === var9)) {
                    _fun57110_ip = 194;
                    continue _fun57110
                }
            case 181:
                var9 = global;
                var9 = var9.Number;
                var7 = var9.bind(var0)(var10);
            case 194:
                var1.recent_avatar_id = var7;
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var8];
                var5 = var7.bind(var0)(var5);
                var5 = var5.AssetOriginTypes;
                var5 = var5.EDITED_ARCHIVED_ASSET;
                var5 = var6 === var5;
                var1.is_edited_recent_avatar = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackUserAvatarUpdated = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5732, 795, 1417, 2]);