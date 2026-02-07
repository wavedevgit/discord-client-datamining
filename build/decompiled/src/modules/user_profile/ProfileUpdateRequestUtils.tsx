// modules/user_profile/ProfileUpdateRequestUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/ProfileUpdateRequestUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun57539: for (var _fun57539_ip = 0;;) switch (_fun57539_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.pendingBanner;
                var3 = undefined;
                if (!(var3 !== var2)) {
                    _fun57539_ip = 29;
                    continue _fun57539
                }
            case 17:
                var2 = var1.pendingBanner;
                var0.banner = var2;
            case 29:
                var4 = var1.pendingBio;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun57539_ip = 53;
                    continue _fun57539
                }
            case 41:
                var4 = var1.pendingBio;
                var0.bio = var4;
            case 53:
                var4 = var1.pendingPronouns;
                if (!(var2 != var4)) {
                    _fun57539_ip = 75;
                    continue _fun57539
                }
            case 63:
                var4 = var1.pendingPronouns;
                var0.pronouns = var4;
            case 75:
                var4 = var1.pendingAccentColor;
                if (!(var3 !== var4)) {
                    _fun57539_ip = 97;
                    continue _fun57539
                }
            case 85:
                var4 = var1.pendingAccentColor;
                var0.accent_color = var4;
            case 97:
                var4 = var1.pendingThemeColors;
                if (!(var3 !== var4)) {
                    _fun57539_ip = 119;
                    continue _fun57539
                }
            case 107:
                var4 = var1.pendingThemeColors;
                var0.theme_colors = var4;
            case 119:
                var4 = var1.pendingProfileEffect;
                if (!(var3 !== var4)) {
                    _fun57539_ip = 202;
                    continue _fun57539
                }
            case 129:
                var4 = var0.collectibles_sku_ids;
                if (!(var2 == var4)) {
                    _fun57539_ip = 143;
                    continue _fun57539
                }
            case 139:
                var4 = new Array(0);
            case 143:
                var0.collectibles_sku_ids = var4;
                var4 = var1.pendingProfileEffect;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun57539_ip = 170;
                    continue _fun57539
                }
            case 164:
                var3 = var4.skuId;
            case 170:
                if (!(var2 != var3)) {
                    _fun57539_ip = 202;
                    continue _fun57539
                }
            case 174:
                var3 = var0.collectibles_sku_ids;
                var2 = var3.push;
                var1 = var1.pendingProfileEffect;
                var1 = var1.skuId;
                var1 = var2.bind(var3)(var1);
            case 202:
                return var0;
        }
    };
    var2.getProfileChangesForUpdateRequest = var3;
    var3 = function arg0() {
        _fun57540: for (var _fun57540_ip = 0;;) switch (_fun57540_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.pendingGlobalName;
                var3 = undefined;
                if (!(var3 !== var2)) {
                    _fun57540_ip = 29;
                    continue _fun57540
                }
            case 17:
                var2 = var1.pendingGlobalName;
                var0.globalName = var2;
            case 29:
                var2 = var1.pendingNameplate;
                if (!(var3 !== var2)) {
                    _fun57540_ip = 51;
                    continue _fun57540
                }
            case 39:
                var2 = var1.pendingNameplate;
                var0.nameplate = var2;
            case 51:
                var2 = var1.pendingAvatar;
                if (!(var3 !== var2)) {
                    _fun57540_ip = 167;
                    continue _fun57540
                }
            case 61:
                var4 = var1.pendingAvatar;
                var2 = null;
                if (!(var2 !== var4)) {
                    _fun57540_ip = 161;
                    continue _fun57540
                }
            case 73:
                var6 = var4.assetOrigin;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 0;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.AssetOriginTypes;
                var5 = var5.ARCHIVED_ASSET;
                if (!(var6 !== var5)) {
                    _fun57540_ip = 142;
                    continue _fun57540
                }
            case 117:
                var5 = var4.imageUri;
                var0.avatar = var5;
                var5 = var4.description;
                var0.avatarDescription = var5;
                _fun57540_ip = 167;
                continue _fun57540;
            case 142:
                var4 = var4.originalAsset;
                var4 = var4.id;
                var0.avatarId = var4;
                _fun57540_ip = 167;
                continue _fun57540;
            case 161:
                var0.avatar = var2;
            case 167:
                var2 = var1.pendingAvatarDecoration;
                if (!(var3 !== var2)) {
                    _fun57540_ip = 189;
                    continue _fun57540
                }
            case 177:
                var2 = var1.pendingAvatarDecoration;
                var0.avatarDecoration = var2;
            case 189:
                var2 = var1.pendingDisplayNameStyles;
                if (!(var3 !== var2)) {
                    _fun57540_ip = 211;
                    continue _fun57540
                }
            case 199:
                var1 = var1.pendingDisplayNameStyles;
                var0.displayNameStyles = var1;
            case 211:
                return var0;
        }
    };
    var2.getAccountUpdateForUpdateRequest = var3;
    var3 = function arg0() {
        _fun57541: for (var _fun57541_ip = 0;;) switch (_fun57541_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var2 = var1.pendingAvatar;
                var3 = undefined;
                if (!(var3 !== var2)) {
                    _fun57541_ip = 123;
                    continue _fun57541
                }
            case 17:
                var4 = var1.pendingAvatar;
                var2 = null;
                if (!(var2 !== var4)) {
                    _fun57541_ip = 117;
                    continue _fun57541
                }
            case 29:
                var6 = var4.assetOrigin;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 0;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.AssetOriginTypes;
                var5 = var5.ARCHIVED_ASSET;
                if (!(var6 !== var5)) {
                    _fun57541_ip = 98;
                    continue _fun57541
                }
            case 73:
                var5 = var4.imageUri;
                var0.avatar = var5;
                var5 = var4.description;
                var0.avatarDescription = var5;
                _fun57541_ip = 123;
                continue _fun57541;
            case 98:
                var4 = var4.originalAsset;
                var4 = var4.id;
                var0.avatarId = var4;
                _fun57541_ip = 123;
                continue _fun57541;
            case 117:
                var0.avatar = var2;
            case 123:
                var2 = var1.pendingNickname;
                if (!(var3 !== var2)) {
                    _fun57541_ip = 161;
                    continue _fun57541
                }
            case 133:
                var4 = var1.pendingNickname;
                var2 = null;
                var5 = var2 != var4;
                var2 = '';
                if (!var5) {
                    _fun57541_ip = 155;
                    continue _fun57541
                }
            case 152:
                var2 = var4;
            case 155:
                var0.nick = var2;
            case 161:
                var2 = var1.pendingAvatarDecoration;
                if (!(var3 !== var2)) {
                    _fun57541_ip = 183;
                    continue _fun57541
                }
            case 171:
                var2 = var1.pendingAvatarDecoration;
                var0.avatarDecoration = var2;
            case 183:
                var2 = var1.pendingNameplate;
                if (!(var3 !== var2)) {
                    _fun57541_ip = 205;
                    continue _fun57541
                }
            case 193:
                var2 = var1.pendingNameplate;
                var0.nameplate = var2;
            case 205:
                var2 = var1.pendingDisplayNameStyles;
                if (!(var3 !== var2)) {
                    _fun57541_ip = 227;
                    continue _fun57541
                }
            case 215:
                var1 = var1.pendingDisplayNameStyles;
                var0.displayNameStyles = var1;
            case 227:
                return var0;
        }
    };
    var2.getGuildMemberChangesForUpdateRequest = var3;
    var1 = function arg0() {
        _fun57542: for (var _fun57542_ip = 0;;) switch (_fun57542_ip) {
            case 0:
                var1 = arg0;
                var0 = {};
                var3 = var1.pendingPrimaryGuildId;
                var2 = undefined;
                if (!(var2 !== var3)) {
                    _fun57542_ip = 29;
                    continue _fun57542
                }
            case 17:
                var1 = var1.pendingPrimaryGuildId;
                var0.primaryGuildId = var1;
            case 29:
                return var0;
        }
    };
    var2.getPrimaryGuildChangesForUpdateRequest = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5775, 2]);