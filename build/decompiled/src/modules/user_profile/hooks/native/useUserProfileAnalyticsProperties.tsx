// modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserProfileAnalyticsTypes;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/native/useUserProfileAnalyticsProperties.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59651: for (var _fun59651_ip = 0;;) switch (_fun59651_ip) {
            case 0:
                var2 = arg0;
                var13 = var2.userId;
                var _closure2_slot0 = var13;
                var11 = var2.user;
                var _closure2_slot1 = var11;
                var12 = var2.channelId;
                var _closure2_slot2 = var12;
                var6 = var2.guildId;
                var _closure2_slot3 = var6;
                var7 = var2.displayProfile;
                var _closure2_slot4 = var7;
                var1 = var2.guildMember;
                var _closure2_slot5 = var1;
                var9 = var2.profileEffectSkuId;
                var _closure2_slot6 = var9;
                var3 = var2.type;
                var _closure2_slot7 = var3;
                var10 = undefined;
                var _closure2_slot8 = var10;
                var _closure2_slot9 = var10;
                var8 = _closure1_slot0;
                var5 = var8.useMemo;
                var4 = new Array(8);
                var4[0] = var13;
                var4[1] = var12;
                var4[2] = var6;
                var4[3] = var7;
                var12 = null;
                var14 = var12 == var1;
                var13 = undefined;
                if (var14) {
                    _fun59651_ip = 141;
                    continue _fun59651
                }
            case 135:
                var13 = var1.avatarDecoration;
            case 141:
                var4[4] = var13;
                var12 = var12 == var11;
                var10 = undefined;
                if (var12) {
                    _fun59651_ip = 160;
                    continue _fun59651
                }
            case 154:
                var10 = var11.avatarDecoration;
            case 160:
                var4[5] = var10;
                var4[6] = var9;
                var4[7] = var3;
                var3 = function() { // Environment: var0
                    _fun59652: for (var _fun59652_ip = 0;;) switch (_fun59652_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot7;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun59652_ip = 30;
                                continue _fun59652
                            }
                        case 15:
                            var3 = _closure1_slot1;
                            var3 = var3.USER_SHEET;
                            _fun59652_ip = 34;
                            continue _fun59652;
                        case 30:
                            var3 = _closure2_slot7;
                        case 34:
                            var0.type = var3;
                            var3 = _closure2_slot0;
                            var0.other_user_id = var3;
                            var3 = _closure2_slot2;
                            var0.channel_id = var3;
                            var3 = _closure2_slot3;
                            var0.guild_id = var3;
                            var3 = _closure2_slot4;
                            var3 = var2 != var3;
                            if (!var3) {
                                _fun59652_ip = 104;
                                continue _fun59652
                            }
                        case 74:
                            var4 = _closure2_slot4;
                            var5 = var2 == var4;
                            var4 = undefined;
                            if (var5) {
                                _fun59652_ip = 101;
                                continue _fun59652
                            }
                        case 87:
                            var6 = _closure2_slot4;
                            var5 = var6.hasPremiumCustomization;
                            var4 = var5.bind(var6)();
                        case 101:
                            var3 = var4;
                        case 104:
                            var0.profile_has_nitro_customization = var3;
                            var3 = _closure2_slot4;
                            var3 = var2 != var3;
                            if (!var3) {
                                _fun59652_ip = 134;
                                continue _fun59652
                            }
                        case 120:
                            var5 = _closure2_slot4;
                            var4 = var5.hasThemeColors;
                            var3 = var4.bind(var5)();
                        case 134:
                            var0.profile_has_theme_color_customized = var3;
                            var3 = _closure2_slot4;
                            var4 = var2 == var3;
                            var6 = undefined;
                            var3 = undefined;
                            if (var4) {
                                _fun59652_ip = 164;
                                continue _fun59652
                            }
                        case 154:
                            var4 = _closure2_slot4;
                            var3 = var4.popoutAnimationParticleType;
                        case 164:
                            var3 = var2 != var3;
                            var0.profile_has_theme_animation = var3;
                            var4 = global;
                            var5 = var4.Boolean;
                            var3 = _closure2_slot5;
                            var7 = var2 == var3;
                            var3 = undefined;
                            if (var7) {
                                _fun59652_ip = 204;
                                continue _fun59652
                            }
                        case 194:
                            var7 = _closure2_slot5;
                            var3 = var7.avatarDecoration;
                        case 204:
                            var3 = var5.bind(var6)(var3);
                            if (var3) {
                                _fun59652_ip = 246;
                                continue _fun59652
                            }
                        case 212:
                            var5 = var4.Boolean;
                            var4 = _closure2_slot1;
                            var7 = var2 == var4;
                            var4 = undefined;
                            if (var7) {
                                _fun59652_ip = 241;
                                continue _fun59652
                            }
                        case 231:
                            var7 = _closure2_slot1;
                            var4 = var7.avatarDecoration;
                        case 241:
                            var3 = var5.bind(var6)(var4);
                        case 246:
                            var0.has_avatar_decoration = var3;
                            var1 = _closure2_slot6;
                            var1 = var2 != var1;
                            var0.has_profile_effect = var1;
                            return var0;
                    }
                };
                var5 = var5.bind(var8)(var3, var4);
                _closure2_slot8 = var5;
                var3 = _closure1_slot0;
                var4 = var3.useMemo;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    _fun59653: for (var _fun59653_ip = 0;;) switch (_fun59653_ip) {
                        case 0:
                            var0 = {};
                            var3 = global;
                            var6 = var3.Boolean;
                            var1 = _closure2_slot5;
                            var4 = null;
                            var7 = var4 == var1;
                            var1 = undefined;
                            var5 = undefined;
                            if (var7) {
                                _fun59653_ip = 40;
                                continue _fun59653
                            }
                        case 30:
                            var7 = _closure2_slot5;
                            var5 = var7.nick;
                        case 40:
                            var5 = var6.bind(var1)(var5);
                            var0.has_nickname = var5;
                            var5 = var3.Boolean;
                            var3 = _closure2_slot5;
                            var6 = var4 == var3;
                            var3 = undefined;
                            if (var6) {
                                _fun59653_ip = 81;
                                continue _fun59653
                            }
                        case 71:
                            var6 = _closure2_slot5;
                            var3 = var6.avatar;
                        case 81:
                            var3 = var5.bind(var1)(var3);
                            var0.has_guild_member_avatar = var3;
                            var3 = _closure2_slot4;
                            var5 = var4 == var3;
                            var3 = undefined;
                            if (var5) {
                                _fun59653_ip = 120;
                                continue _fun59653
                            }
                        case 106:
                            var6 = _closure2_slot4;
                            var5 = var6.isUsingGuildMemberBanner;
                            var3 = var5.bind(var6)();
                        case 120:
                            var0.has_guild_member_banner = var3;
                            var3 = _closure2_slot4;
                            var3 = var4 == var3;
                            var1 = undefined;
                            if (var3) {
                                _fun59653_ip = 154;
                                continue _fun59653
                            }
                        case 140:
                            var3 = _closure2_slot4;
                            var2 = var3.isUsingGuildMemberBio;
                            var1 = var2.bind(var3)();
                        case 154:
                            var0.has_guild_member_bio = var1;
                            return var0;
                    }
                };
                var4 = var4.bind(var3)(var1, var2);
                _closure2_slot9 = var4;
                var2 = var3.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    _fun59654: for (var _fun59654_ip = 0;;) switch (_fun59654_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun59654_ip = 39;
                                continue _fun59654
                            }
                        case 13:
                            var0 = {};
                            var3 = _closure2_slot8;
                            var4 = var0;
                            var2 = copyDataProperties(var4, var3);
                            var3 = _closure2_slot9;
                            var4 = var0;
                            var2 = copyDataProperties(var4, var3);
                            _fun59654_ip = 43;
                            continue _fun59654;
                        case 39:
                            var0 = _closure2_slot8;
                        case 43:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6975, 2]);