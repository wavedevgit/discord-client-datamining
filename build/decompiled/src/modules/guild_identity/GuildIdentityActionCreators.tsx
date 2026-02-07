// modules/guild_identity/GuildIdentityActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun51339: for (var _fun51339_ip = 0;;) switch (_fun51339_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun51339_ip = 725;
                            continue _fun51339
                        }
                    case 13:
                        var6 = arg0;
                        var17 = var1.nick;
                        var13 = var1.avatar;
                        var11 = var1.avatarDescription;
                        var12 = var1.avatarId;
                        var14 = var1.avatarDecoration;
                        var19 = var1.nameplate;
                        var16 = var1.displayNameStyles;
                        var5 = undefined;
                        var15 = undefined;
                        var10 = undefined;
                        var4 = undefined;
                        SaveGenerator(address = 70);
                    case 68:
                        return var5;
                    case 70:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun51339_ip = 722;
                            continue _fun51339
                        }
                    case 79:
                        var3 = var6;
                        var9 = null;
                        if (!(var9 != var3)) {
                            _fun51339_ip = 686;
                            continue _fun51339
                        }
                    case 91:
                        var18 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var7 = 3;
                        var8 = var8[var7];
                        var20 = var18.bind(var5)(var8);
                        var18 = var20.dispatch;
                        var8 = {};
                        var21 = 'USER_SETTINGS_ACCOUNT_SUBMIT';
                        var8.type = var21;
                        var21 = var6;
                        var8.guildId = var21;
                        var8 = var18.bind(var20)(var8);
                        var8 = {};
                        var8.nick = var17;
                        var17 = var13;
                        var8.avatar = var17;
                        var8.avatar_description = var11;
                        var11 = var12;
                        var8.avatar_id = var11;
                        var11 = undefined;
                        if (!(var5 !== var14)) {
                            _fun51339_ip = 207;
                            continue _fun51339
                        }
                    case 177:
                        var18 = var9 == var14;
                        var17 = undefined;
                        if (var18) {
                            _fun51339_ip = 192;
                            continue _fun51339
                        }
                    case 186:
                        var17 = var14.skuId;
                    case 192:
                        var18 = var9 != var17;
                        var14 = null;
                        if (!var18) {
                            _fun51339_ip = 204;
                            continue _fun51339
                        }
                    case 201:
                        var14 = var17;
                    case 204:
                        var11 = var14;
                    case 207:
                        var8.avatar_decoration_sku_id = var11;
                        var11 = undefined;
                        if (!(var5 !== var19)) {
                            _fun51339_ip = 250;
                            continue _fun51339
                        }
                    case 218:
                        var14 = {};
                        var17 = null;
                        if (!(var9 !== var19)) {
                            _fun51339_ip = 242;
                            continue _fun51339
                        }
                    case 226:
                        var18 = {};
                        var19 = var19.skuId;
                        var18.sku_id = var19;
                        var17 = var18;
                    case 242:
                        var14.nameplate = var17;
                        var11 = var14;
                    case 250:
                        var8.collectibles = var11;
                        var14 = var5 !== var16;
                        var11 = undefined;
                        if (!var14) {
                            _fun51339_ip = 279;
                            continue _fun51339
                        }
                    case 264:
                        var17 = null;
                        if (!(var9 !== var16)) {
                            _fun51339_ip = 276;
                            continue _fun51339
                        }
                    case 270:
                        var17 = var16.fontId;
                    case 276:
                        var11 = var17;
                    case 279:
                        var8.display_name_font_id = var11;
                        var11 = undefined;
                        if (!var14) {
                            _fun51339_ip = 304;
                            continue _fun51339
                        }
                    case 289:
                        var17 = null;
                        if (!(var9 !== var16)) {
                            _fun51339_ip = 301;
                            continue _fun51339
                        }
                    case 295:
                        var17 = var16.effectId;
                    case 301:
                        var11 = var17;
                    case 304:
                        var8.display_name_effect_id = var11;
                        var11 = undefined;
                        if (!var14) {
                            _fun51339_ip = 328;
                            continue _fun51339
                        }
                    case 314:
                        var14 = null;
                        if (!(var14 !== var16)) {
                            _fun51339_ip = 325;
                            continue _fun51339
                        }
                    case 320:
                        var14 = var16.colors;
                    case 325:
                        var11 = var14;
                    case 328:
                        var8.display_name_colors = var11;
                        var15 = var8;
                    case 336: // try_start_0
                        var11 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var8 = 4;
                        var8 = var14[var8];
                        var8 = var11.bind(var5)(var8);
                        var14 = var8.HTTP;
                        var11 = var14.patch;
                        var8 = {};
                        var18 = _closure1_slot5;
                        var17 = var18.SET_GUILD_MEMBER;
                        var16 = var6;
                        var16 = var17.bind(var18)(var16);
                        var8.url = var16;
                        var8.body = var15;
                        var15 = true;
                        var8.oldFormErrors = var15;
                        var15 = false;
                        var8.rejectWithError = var15;
                        var8 = var11.bind(var14)(var8);
                        SaveGenerator(address = 417);
                    case 415:
                        return var8;
                    case 417:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 11);
                        if (var11) {
                            _fun51339_ip = 577;
                            continue _fun51339
                        }
                    case 426:
                        var10 = var8;
                        var17 = var8.body;
                        var14 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var15 = var11[var7];
                        var19 = var14.bind(var5)(var15);
                        var18 = var19.dispatch;
                        var15 = {};
                        var16 = 'USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS';
                        var15.type = var16;
                        var16 = var6;
                        var15.guildId = var16;
                        var15 = var18.bind(var19)(var15);
                        var11 = var11[var7];
                        var15 = var14.bind(var5)(var11);
                        var14 = var15.dispatch;
                        var11 = {};
                        var18 = 'GUILD_MEMBER_PROFILE_UPDATE';
                        var11.type = var18;
                        var11.guildMember = var17;
                        var11.guildId = var16;
                        var11 = var14.bind(var15)(var11);
                        var13 = var9 == var13;
                        var11 = var13;
                        if (!var13) {
                            _fun51339_ip = 532;
                            continue _fun51339
                        }
                    case 528:
                        var11 = var9 == var12;
                    case 532:
                        if (var11) {
                            _fun51339_ip = 574;
                            continue _fun51339
                        }
                    case 535:
                        var12 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var11 = var11[var7];
                        var13 = var12.bind(var5)(var11);
                        var12 = var13.dispatch;
                        var11 = {};
                        var14 = 'RECENT_AVATARS_UPDATE';
                        var11.type = var14;
                        var11 = var12.bind(var13)(var11);
                    case 574: // try_end0
                        return var10;
                    case 577:
                        return var8;
                    case 580: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var2 = var8;
                        var8 = var8.body;
                        var4 = var8;
                        var10 = var9 == var8;
                        var8 = undefined;
                        if (var10) {
                            _fun51339_ip = 610;
                            continue _fun51339
                        }
                    case 602:
                        var10 = var4;
                        var8 = var10.username;
                    case 610:
                        if (!(var9 != var8)) {
                            _fun51339_ip = 630;
                            continue _fun51339
                        }
                    case 614:
                        var8 = var4.username;
                        var4.nick = var8;
                        var4 = delete var4.username;
                    case 630:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE';
                        var3.type = var7;
                        var3.guildId = var6;
                        var6 = var2.body;
                        var3.errors = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 686:
                        var2 = global;
                        var4 = var2.Error;
                        var2 = var4.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var4
                            }
                        });
                        var22 = 'Need guildId';
                        var23 = var3;
                        var2 = new var23[var4](var22, var21);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 722:
                        return var1;
                    case 725:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_identity/GuildIdentityActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.saveGuildIdentityChanges = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_SET_GUILD';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setCurrentGuild = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_INIT';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.initGuildIdentitySettings = var3;
    var3 = function arg0() {
        var1 = _closure1_slot4;
        var4 = var1.selectedGuildId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR';
        var1.type = var5;
        var1.guildId = var4;
        var4 = arg0;
        var1.avatar = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingAvatar = var3;
    var3 = function arg0() {
        var1 = _closure1_slot4;
        var4 = var1.selectedGuildId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM';
        var1.type = var5;
        var1.guildId = var4;
        var4 = arg0;
        var1.item = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingCollectiblesItem = var3;
    var3 = function arg0() {
        var1 = _closure1_slot4;
        var4 = var1.selectedGuildId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER';
        var1.type = var5;
        var1.guildId = var4;
        var4 = arg0;
        var1.banner = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingBanner = var3;
    var3 = function arg0() {
        var1 = _closure1_slot4;
        var4 = var1.selectedGuildId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO';
        var1.type = var5;
        var1.guildId = var4;
        var4 = arg0;
        var1.bio = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingBio = var3;
    var3 = function arg0() {
        var1 = _closure1_slot4;
        var4 = var1.selectedGuildId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS';
        var1.type = var5;
        var1.guildId = var4;
        var4 = arg0;
        var1.pronouns = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingPronouns = var3;
    var3 = function arg0() {
        _fun51348: for (var _fun51348_ip = 0;;) switch (_fun51348_ip) {
            case 0:
                var1 = _closure1_slot4;
                var3 = var1.selectedGuildId;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun51348_ip = 75;
                    continue _fun51348
                }
            case 19:
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_NICKNAME';
                var0.type = var4;
                var0.guildId = var3;
                var3 = arg0;
                var0.nickname = var3;
                var0 = var1.bind(var2)(var0);
            case 75:
                var0 = undefined;
                return var0;
        }
    };
    var2.setPendingNickname = var3;
    var3 = function arg0() {
        var1 = _closure1_slot4;
        var4 = var1.selectedGuildId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS';
        var1.type = var5;
        var1.guildId = var4;
        var4 = arg0;
        var1.themeColors = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingThemeColors = var3;
    var3 = function arg0() {
        var1 = _closure1_slot4;
        var4 = var1.selectedGuildId;
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var5 = 'USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES';
        var1.type = var5;
        var1.guildId = var4;
        var4 = arg0;
        var1.displayNameStyles = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setGuildMemberPendingDisplayNameStyles = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_ACCOUNT_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPendingMemberChanges = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_PROFILE_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPendingProfileChanges = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_RESET_PENDING_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetAllPending = var3;
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_SETTINGS_ACCOUNT_CLEAR_ERRORS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearErrors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 5634, 660, 806, 507, 2]);