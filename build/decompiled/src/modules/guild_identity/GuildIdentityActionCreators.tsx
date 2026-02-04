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
                _fun50880: for (var _fun50880_ip = 0;;) switch (_fun50880_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun50880_ip = 707;
                            continue _fun50880
                        }
                    case 13:
                        var15 = arg0;
                        var17 = var1.nick;
                        var12 = var1.avatar;
                        var10 = var1.avatarDescription;
                        var11 = var1.avatarId;
                        var13 = var1.avatarDecoration;
                        var19 = var1.nameplate;
                        var16 = var1.displayNameStyles;
                        var5 = undefined;
                        var14 = undefined;
                        var9 = undefined;
                        var4 = undefined;
                        SaveGenerator(address = 70);
                    case 68:
                        return var5;
                    case 70:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun50880_ip = 704;
                            continue _fun50880
                        }
                    case 79:
                        var3 = var15;
                        var8 = null;
                        if (!(var8 != var3)) {
                            _fun50880_ip = 668;
                            continue _fun50880
                        }
                    case 91:
                        var18 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var6 = 2;
                        var7 = var7[var6];
                        var20 = var18.bind(var5)(var7);
                        var18 = var20.dispatch;
                        var7 = {};
                        var21 = 'GUILD_IDENTITY_SETTINGS_SUBMIT';
                        var7.type = var21;
                        var7 = var18.bind(var20)(var7);
                        var7 = {};
                        var7.nick = var17;
                        var17 = var12;
                        var7.avatar = var17;
                        var7.avatar_description = var10;
                        var10 = var11;
                        var7.avatar_id = var10;
                        var10 = undefined;
                        if (!(var5 !== var13)) {
                            _fun50880_ip = 200;
                            continue _fun50880
                        }
                    case 170:
                        var18 = var8 == var13;
                        var17 = undefined;
                        if (var18) {
                            _fun50880_ip = 185;
                            continue _fun50880
                        }
                    case 179:
                        var17 = var13.skuId;
                    case 185:
                        var18 = var8 != var17;
                        var13 = null;
                        if (!var18) {
                            _fun50880_ip = 197;
                            continue _fun50880
                        }
                    case 194:
                        var13 = var17;
                    case 197:
                        var10 = var13;
                    case 200:
                        var7.avatar_decoration_sku_id = var10;
                        var10 = undefined;
                        if (!(var5 !== var19)) {
                            _fun50880_ip = 243;
                            continue _fun50880
                        }
                    case 211:
                        var13 = {};
                        var17 = null;
                        if (!(var8 !== var19)) {
                            _fun50880_ip = 235;
                            continue _fun50880
                        }
                    case 219:
                        var18 = {};
                        var19 = var19.skuId;
                        var18.sku_id = var19;
                        var17 = var18;
                    case 235:
                        var13.nameplate = var17;
                        var10 = var13;
                    case 243:
                        var7.collectibles = var10;
                        var13 = var5 !== var16;
                        var10 = undefined;
                        if (!var13) {
                            _fun50880_ip = 272;
                            continue _fun50880
                        }
                    case 257:
                        var17 = null;
                        if (!(var8 !== var16)) {
                            _fun50880_ip = 269;
                            continue _fun50880
                        }
                    case 263:
                        var17 = var16.fontId;
                    case 269:
                        var10 = var17;
                    case 272:
                        var7.display_name_font_id = var10;
                        var10 = undefined;
                        if (!var13) {
                            _fun50880_ip = 297;
                            continue _fun50880
                        }
                    case 282:
                        var17 = null;
                        if (!(var8 !== var16)) {
                            _fun50880_ip = 294;
                            continue _fun50880
                        }
                    case 288:
                        var17 = var16.effectId;
                    case 294:
                        var10 = var17;
                    case 297:
                        var7.display_name_effect_id = var10;
                        var10 = undefined;
                        if (!var13) {
                            _fun50880_ip = 321;
                            continue _fun50880
                        }
                    case 307:
                        var13 = null;
                        if (!(var13 !== var16)) {
                            _fun50880_ip = 318;
                            continue _fun50880
                        }
                    case 313:
                        var13 = var16.colors;
                    case 318:
                        var10 = var13;
                    case 321:
                        var7.display_name_colors = var10;
                        var14 = var7;
                    case 329: // try_start_0
                        var10 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 3;
                        var7 = var13[var7];
                        var7 = var10.bind(var5)(var7);
                        var13 = var7.HTTP;
                        var10 = var13.patch;
                        var7 = {};
                        var18 = _closure1_slot4;
                        var17 = var18.SET_GUILD_MEMBER;
                        var16 = var15;
                        var16 = var17.bind(var18)(var16);
                        var7.url = var16;
                        var7.body = var14;
                        var14 = true;
                        var7.oldFormErrors = var14;
                        var14 = false;
                        var7.rejectWithError = var14;
                        var7 = var10.bind(var13)(var7);
                        SaveGenerator(address = 410);
                    case 408:
                        return var7;
                    case 410:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 10);
                        if (var10) {
                            _fun50880_ip = 563;
                            continue _fun50880
                        }
                    case 419:
                        var9 = var7;
                        var16 = var7.body;
                        var13 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var14 = var10[var6];
                        var18 = var13.bind(var5)(var14);
                        var17 = var18.dispatch;
                        var14 = {};
                        var19 = 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS';
                        var14.type = var19;
                        var14 = var17.bind(var18)(var14);
                        var10 = var10[var6];
                        var14 = var13.bind(var5)(var10);
                        var13 = var14.dispatch;
                        var10 = {};
                        var17 = 'GUILD_MEMBER_PROFILE_UPDATE';
                        var10.type = var17;
                        var10.guildMember = var16;
                        var10.guildId = var15;
                        var10 = var13.bind(var14)(var10);
                        var12 = var8 == var12;
                        var10 = var12;
                        if (!var12) {
                            _fun50880_ip = 518;
                            continue _fun50880
                        }
                    case 514:
                        var10 = var8 == var11;
                    case 518:
                        if (var10) {
                            _fun50880_ip = 560;
                            continue _fun50880
                        }
                    case 521:
                        var11 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var10 = var10[var6];
                        var12 = var11.bind(var5)(var10);
                        var11 = var12.dispatch;
                        var10 = {};
                        var13 = 'RECENT_AVATARS_UPDATE';
                        var10.type = var13;
                        var10 = var11.bind(var12)(var10);
                    case 560: // try_end0
                        return var9;
                    case 563:
                        return var7;
                    case 566: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var2 = var7;
                        var7 = var7.body;
                        var4 = var7;
                        var9 = var8 == var7;
                        var7 = undefined;
                        if (var9) {
                            _fun50880_ip = 596;
                            continue _fun50880
                        }
                    case 588:
                        var9 = var4;
                        var7 = var9.username;
                    case 596:
                        if (!(var8 != var7)) {
                            _fun50880_ip = 616;
                            continue _fun50880
                        }
                    case 600:
                        var7 = var4.username;
                        var4.nick = var7;
                        var4 = delete var4.username;
                    case 616:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE';
                        var3.type = var6;
                        var6 = var2.body;
                        var3.errors = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 668:
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
                    case 704:
                        return var1;
                    case 707:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_identity/GuildIdentityActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
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
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_GUILD';
        var1.type = var4;
        var4 = arg0;
        var1.guild = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setCurrentGuild = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_INIT';
        var1.type = var4;
        var4 = arg0;
        var1.guild = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.initGuildIdentitySettings = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetAndCloseGuildIdentityForm = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR';
        var1.type = var4;
        var4 = arg0;
        var1.avatar = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingAvatar = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM';
        var1.type = var4;
        var4 = arg0;
        var1.item = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingCollectiblesItem = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER';
        var1.type = var4;
        var4 = arg0;
        var1.banner = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingBanner = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO';
        var1.type = var4;
        var4 = arg0;
        var1.bio = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingBio = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS';
        var1.type = var4;
        var4 = arg0;
        var1.pronouns = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingPronouns = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME';
        var1.type = var4;
        var4 = arg0;
        var1.nickname = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingNickname = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS';
        var1.type = var4;
        var4 = arg0;
        var1.themeColors = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setPendingThemeColors = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES';
        var1.type = var4;
        var4 = arg0;
        var1.displayNameStyles = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setGuildMemberPendingDisplayNameStyles = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPendingMemberChanges = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPendingProfileChanges = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetAllPending = var3;
    var1 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 2;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearErrors = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 806, 507, 2]);