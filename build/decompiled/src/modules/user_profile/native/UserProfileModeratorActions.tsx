// modules/user_profile/native/UserProfileModeratorActions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.GuildFeatures;
    var _closure1_slot11 = var6;
    var3 = var3.Permissions;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildMemberFlags;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.paddingBottom = var9;
    var3.cardContainer = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.cardTitle = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot15 = var3;
    var3 = 52;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileModeratorActions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: UserProfileModeratorActions, environment: var1
        _fun92165: for (var _fun92165_ip = 0;;) switch (_fun92165_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.user;
                var _closure2_slot0 = var20;
                var15 = var0.currentUser;
                var19 = var0.guildId;
                var _closure2_slot1 = var19;
                var2 = var0.channelId;
                var _closure2_slot2 = var2;
                var3 = var0.showUserProfile;
                var _closure2_slot3 = var3;
                var12 = var0.style;
                var5 = undefined;
                var _closure2_slot13 = var5;
                var _closure2_slot14 = var5;
                var0 = _closure1_slot15;
                var10 = var0.bind(var5)();
                var3 = _closure1_slot0;
                var22 = _closure1_slot3;
                var0 = 11;
                var0 = var22[var0];
                var4 = var3.bind(var5)(var0);
                var0 = var4.useUserProfileAnalyticsContext;
                var0 = var0.bind(var4)();
                var0 = var0.trackUserProfileAction;
                var _closure2_slot4 = var0;
                var16 = _closure1_slot1;
                var0 = 12;
                var0 = var22[var0];
                var0 = var16.bind(var5)(var0);
                var0 = var0.hideActionSheet;
                var _closure2_slot5 = var0;
                var0 = 13;
                var0 = var22[var0];
                var4 = var16.bind(var5)(var0);
                var0 = {};
                var6 = var20.id;
                var0.userId = var6;
                var0.guildId = var19;
                var0 = var4.bind(var5)(var0);
                var18 = var0.voiceState;
                var _closure2_slot6 = var18;
                var36 = var0.voiceChannel;
                var _closure2_slot7 = var36;
                var34 = 14;
                var0 = var22[var34];
                var8 = var3.bind(var5)(var0);
                var6 = var8.useStateFromStores;
                var0 = _closure1_slot9;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var1
                    var2 = _closure1_slot9;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var24 = var6.bind(var8)(var4, var0);
                var _closure2_slot8 = var24;
                var0 = var22[var34];
                var8 = var3.bind(var5)(var0);
                var6 = var8.useStateFromStores;
                var0 = _closure1_slot8;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot8;
                    var2 = var3.getMember;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var25 = var6.bind(var8)(var4, var0);
                var _closure2_slot9 = var25;
                var4 = var20.id;
                var0 = var15.id;
                var4 = var4 === var0;
                var _closure2_slot10 = var4;
                var0 = var22[var34];
                var11 = var3.bind(var5)(var0);
                var9 = var11.useStateFromStores;
                var0 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var0;
                var6 = function() { // Environment: var1
                    _fun92168: for (var _fun92168_ip = 0;;) switch (_fun92168_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot2;
                            var3 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun92168_ip = 45;
                                continue _fun92168
                            }
                        case 35:
                            var2 = var3.isThread;
                            var1 = var2.bind(var3)();
                        case 45:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun92168_ip = 55;
                                continue _fun92168
                            }
                        case 52:
                            var0 = var1;
                        case 55:
                            return var0;
                    }
                };
                var11 = var9.bind(var11)(var8, var6);
                var6 = var22[var34];
                var9 = var3.bind(var5)(var6);
                var8 = var9.useStateFromStores;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    _fun92169: for (var _fun92169_ip = 0;;) switch (_fun92169_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getChannel;
                            var0 = _closure2_slot2;
                            var3 = var1.bind(var2)(var0);
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun92169_ip = 45;
                                continue _fun92169
                            }
                        case 35:
                            var2 = var3.isForumPost;
                            var1 = var2.bind(var3)();
                        case 45:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun92169_ip = 55;
                                continue _fun92169
                            }
                        case 52:
                            var0 = var1;
                        case 55:
                            return var0;
                    }
                };
                var9 = var8.bind(var9)(var6, var0);
                var _closure2_slot11 = var9;
                var0 = 15;
                var0 = var22[var0];
                var6 = var3.bind(var5)(var0);
                var0 = var6.useCanRemoveThreadMember;
                var6 = var0.bind(var6)(var2);
                var0 = var22[var34];
                var13 = var3.bind(var5)(var0);
                var8 = var13.useStateFromStoresObject;
                var0 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var1
                    _fun92170: for (var _fun92170_ip = 0;;) switch (_fun92170_ip) {
                        case 0:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var4 = 16;
                            var2 = var8[var4];
                            var6 = undefined;
                            var10 = var5.bind(var6)(var2);
                            var9 = var10.canKickMember;
                            var7 = _closure2_slot0;
                            var2 = _closure2_slot8;
                            var9 = var9.bind(var10)(var7, var2);
                            var0.canKickUser = var9;
                            var4 = var8[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.canBanMember;
                            var4 = var4.bind(var5)(var7, var2);
                            var0.canBanUser = var4;
                            var4 = null;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun92170_ip = 125;
                                continue _fun92170
                            }
                        case 90:
                            var10 = _closure1_slot10;
                            var9 = var10.canManageUser;
                            var5 = _closure1_slot12;
                            var8 = var5.MANAGE_NICKNAMES;
                            var7 = _closure2_slot0;
                            var5 = _closure2_slot8;
                            var2 = var9.bind(var10)(var8, var7, var5);
                        case 125:
                            var0.canChangeNick = var2;
                            var2 = _closure2_slot8;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun92170_ip = 176;
                                continue _fun92170
                            }
                        case 141:
                            var10 = _closure1_slot10;
                            var9 = var10.canManageUser;
                            var5 = _closure1_slot12;
                            var8 = var5.MANAGE_ROLES;
                            var7 = _closure2_slot0;
                            var5 = _closure2_slot8;
                            var2 = var9.bind(var10)(var8, var7, var5);
                        case 176:
                            var0.canManageUserRoles = var2;
                            var2 = _closure2_slot8;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun92170_ip = 222;
                                continue _fun92170
                            }
                        case 192:
                            var9 = _closure1_slot10;
                            var8 = var9.can;
                            var5 = _closure1_slot12;
                            var7 = var5.MANAGE_ROLES;
                            var5 = _closure2_slot8;
                            var2 = var8.bind(var9)(var7, var5);
                        case 222:
                            var0.canManageGuildRoles = var2;
                            var2 = _closure2_slot8;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun92170_ip = 273;
                                continue _fun92170
                            }
                        case 238:
                            var10 = _closure1_slot10;
                            var9 = var10.canManageUser;
                            var5 = _closure1_slot12;
                            var8 = var5.MANAGE_GUILD;
                            var7 = _closure2_slot0;
                            var5 = _closure2_slot8;
                            var2 = var9.bind(var10)(var8, var7, var5);
                        case 273:
                            var0.canManageGuild = var2;
                            var2 = _closure2_slot8;
                            var2 = var4 != var2;
                            if (!var2) {
                                _fun92170_ip = 324;
                                continue _fun92170
                            }
                        case 289:
                            var9 = _closure1_slot10;
                            var8 = var9.canManageUser;
                            var4 = _closure1_slot12;
                            var7 = var4.MODERATE_MEMBERS;
                            var5 = _closure2_slot0;
                            var4 = _closure2_slot8;
                            var2 = var8.bind(var9)(var7, var5, var4);
                        case 324:
                            var0.canModerateMembers = var2;
                            var4 = _closure1_slot10;
                            var7 = var4.can;
                            var2 = _closure1_slot12;
                            var5 = var2.MOVE_MEMBERS;
                            var3 = _closure2_slot7;
                            var5 = var7.bind(var4)(var5, var3);
                            var0.canMoveMembers = var5;
                            var7 = var4.can;
                            var5 = var2.MUTE_MEMBERS;
                            var5 = var7.bind(var4)(var5, var3);
                            var0.canMuteMembers = var5;
                            var5 = var4.can;
                            var2 = var2.DEAFEN_MEMBERS;
                            var2 = var5.bind(var4)(var2, var3);
                            var0.canDeafenMembers = var2;
                            var2 = var4.can;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 17;
                            var1 = var7[var1];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                            var1 = var2.bind(var4)(var1, var3);
                            var0.canModerateStage = var1;
                            return var0;
                    }
                };
                var8 = var8.bind(var13)(var3, var0);
                var14 = var8.canKickUser;
                var13 = var8.canBanUser;
                var27 = var8.canChangeNick;
                var0 = var8.canManageUserRoles;
                var26 = var8.canManageGuildRoles;
                var3 = var8.canManageGuild;
                var29 = var8.canModerateMembers;
                var17 = var8.canMoveMembers;
                var _closure2_slot12 = var17;
                var23 = var8.canMuteMembers;
                var21 = var8.canDeafenMembers;
                var30 = var8.canModerateStage;
                var8 = 18;
                var8 = var22[var8];
                var16 = var16.bind(var5)(var8);
                var8 = var20.id;
                var19 = var16.bind(var5)(var19, var8);
                if (!var29) {
                    _fun92165_ip = 539;
                    continue _fun92165
                }
            case 536:
                var29 = var14;
            case 539:
                if (!var29) {
                    _fun92165_ip = 545;
                    continue _fun92165
                }
            case 542:
                var29 = var13;
            case 545:
                if (var29) {
                    _fun92165_ip = 551;
                    continue _fun92165
                }
            case 548:
                var29 = var3;
            case 551:
                if (var29) {
                    _fun92165_ip = 557;
                    continue _fun92165
                }
            case 554:
                var29 = var0;
            case 557:
                var3 = _closure1_slot1;
                var0 = _closure1_slot3;
                var31 = 19;
                var0 = var0[var31];
                var16 = var3.bind(var5)(var0);
                var8 = var20.id;
                var0 = null;
                var22 = var0 == var36;
                var3 = undefined;
                if (var22) {
                    _fun92165_ip = 598;
                    continue _fun92165
                }
            case 593:
                var3 = var36.id;
            case 598:
                var28 = var16.bind(var5)(var8, var3);
                var16 = var0 != var36;
                if (!var16) {
                    _fun92165_ip = 629;
                    continue _fun92165
                }
            case 611:
                var8 = var0 == var18;
                var3 = undefined;
                if (var8) {
                    _fun92165_ip = 625;
                    continue _fun92165
                }
            case 620:
                var3 = var18.channelId;
            case 625:
                var16 = var0 != var3;
            case 629:
                var32 = var0 != var36;
                if (!var32) {
                    _fun92165_ip = 646;
                    continue _fun92165
                }
            case 636:
                var3 = var36.isGuildStageVoice;
                var32 = var3.bind(var36)();
            case 646:
                var22 = var0 != var36;
                if (!var22) {
                    _fun92165_ip = 695;
                    continue _fun92165
                }
            case 653:
                var3 = !var32;
                if (var3) {
                    _fun92165_ip = 692;
                    continue _fun92165
                }
            case 659:
                var33 = _closure1_slot0;
                var8 = _closure1_slot3;
                var8 = var8[var31];
                var8 = var33.bind(var5)(var8);
                var8 = var8.RequestToSpeakStates;
                var8 = var8.ON_STAGE;
                var3 = var28 === var8;
            case 692:
                var22 = var3;
            case 695:
                var33 = _closure1_slot0;
                var8 = _closure1_slot3;
                var3 = var8[var34];
                var38 = var33.bind(var5)(var3);
                var37 = var38.useStateFromStores;
                var3 = _closure1_slot4;
                var35 = new Array(1);
                var35[0] = var3;
                var3 = function() { // Environment: var1
                    _fun92171: for (var _fun92171_ip = 0;;) switch (_fun92171_ip) {
                        case 0:
                            var3 = _closure1_slot4;
                            var2 = var3.getPermissionsForUser;
                            var0 = _closure2_slot0;
                            var1 = var0.id;
                            var5 = _closure2_slot7;
                            var0 = null;
                            var5 = var0 == var5;
                            var0 = undefined;
                            if (var5) {
                                _fun92171_ip = 49;
                                continue _fun92171
                            }
                        case 40:
                            var4 = _closure2_slot7;
                            var0 = var4.id;
                        case 49:
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = var0.speaker;
                            return var0;
                    }
                };
                var3 = var37.bind(var38)(var35, var3);
                var8 = var8[var34];
                var35 = var33.bind(var5)(var8);
                var34 = var35.useStateFromStoresArray;
                var8 = _closure1_slot6;
                var33 = new Array(1);
                var33[0] = var8;
                var8 = function() { // Environment: var1
                    _fun92172: for (var _fun92172_ip = 0;;) switch (_fun92172_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            if (!var0) {
                                _fun92172_ip = 22;
                                continue _fun92172
                            }
                        case 12:
                            var2 = _closure2_slot7;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun92172_ip = 28;
                                continue _fun92172
                            }
                        case 22:
                            var0 = new Array(0);
                            _fun92172_ip = 92;
                            continue _fun92172;
                        case 28:
                            var5 = _closure1_slot6;
                            var4 = var5.getChannels;
                            var3 = _closure2_slot1;
                            var3 = var4.bind(var5)(var3);
                            var2 = _closure1_slot7;
                            var4 = var3[var2];
                            var3 = var4.filter;
                            var2 = function(arg0) { // Environment: var1
                                _fun92173: for (var _fun92173_ip = 0;;) switch (_fun92173_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var6 = var0.channel;
                                        var1 = var6.id;
                                        var0 = _closure2_slot7;
                                        var0 = var0.id;
                                        var0 = var1 !== var0;
                                        if (!var0) {
                                            _fun92173_ip = 97;
                                            continue _fun92173
                                        }
                                    case 32:
                                        var3 = _closure1_slot2;
                                        var2 = _closure1_slot3;
                                        var1 = 20;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.can;
                                        var1 = {};
                                        var1.context = var6;
                                        var5 = _closure1_slot12;
                                        var5 = var5.CONNECT;
                                        var1.permission = var5;
                                        var4 = _closure2_slot0;
                                        var1.user = var4;
                                        var0 = var2.bind(var3)(var1);
                                    case 97:
                                        return var0;
                                }
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.map;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = var0.channel;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 92:
                            return var0;
                    }
                };
                var8 = var34.bind(var35)(var33, var8);
                _closure2_slot13 = var8;
                if (!(var0 != var24)) {
                    _fun92165_ip = 3781;
                    continue _fun92165
                }
            case 793:
                if (!(var0 != var25)) {
                    _fun92165_ip = 3781;
                    continue _fun92165
                }
            case 800:
                var8 = new Array(0);
                var33 = var32;
                if (!var33) {
                    _fun92165_ip = 813;
                    continue _fun92165
                }
            case 810:
                var33 = var30;
            case 813:
                if (!var33) {
                    _fun92165_ip = 819;
                    continue _fun92165
                }
            case 816:
                var33 = var3;
            case 819:
                if (!var33) {
                    _fun92165_ip = 1055;
                    continue _fun92165
                }
            case 825:
                var34 = var8.push;
                var38 = _closure1_slot14;
                var35 = _closure1_slot0;
                var37 = _closure1_slot3;
                var33 = 21;
                var33 = var37[var33];
                var33 = var35.bind(var5)(var33);
                var37 = var33.UserProfileFormRow;
                var35 = {};
                var39 = var20.id;
                var33 = var15.id;
                if (!(var39 !== var33)) {
                    _fun92165_ip = 935;
                    continue _fun92165
                }
            case 876:
                var41 = _closure1_slot0;
                var42 = _closure1_slot3;
                var33 = 22;
                var39 = var42[var33];
                var39 = var41.bind(var5)(var39);
                var40 = var39.intl;
                var39 = var40.string;
                var33 = var42[var33];
                var33 = var41.bind(var5)(var33);
                var33 = var33.t;
                var33 = var33.r23NoB;
                var33 = var39.bind(var40)(var33);
                _fun92165_ip = 992;
                continue _fun92165;
            case 935:
                var42 = _closure1_slot0;
                var43 = _closure1_slot3;
                var39 = 22;
                var40 = var43[var39];
                var40 = var42.bind(var5)(var40);
                var41 = var40.intl;
                var40 = var41.string;
                var39 = var43[var39];
                var39 = var42.bind(var5)(var39);
                var39 = var39.t;
                var39 = var39["6C6PJx"];
                var33 = var40.bind(var41)(var39);
            case 992:
                var35.label = var33;
                var39 = _closure1_slot0;
                var40 = _closure1_slot3;
                var33 = 23;
                var33 = var40[var33];
                var33 = var39.bind(var5)(var33);
                var33 = var33.GroupArrowDownIcon;
                var35.icon = var33;
                var33 = function() { // Original name: onPress, environment: var1
                    var3 = _closure2_slot4;
                    var1 = {};
                    var0 = 'PRESS_REMOVE_FROM_STAGE';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var4 = 24;
                    var4 = var3[var4];
                    var6 = var5.bind(var0)(var4);
                    var5 = var6.moveUserToAudience;
                    var4 = _closure2_slot0;
                    var2 = _closure2_slot7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure1_slot1;
                    var1 = 12;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var35.onPress = var33;
                var33 = 'remove-from-stage';
                var33 = var38.bind(var5)(var37, var35, var33);
                var33 = var34.bind(var8)(var33);
            case 1055:
                if (!var32) {
                    _fun92165_ip = 1332;
                    continue _fun92165
                }
            case 1061:
                if (!var30) {
                    _fun92165_ip = 1332;
                    continue _fun92165
                }
            case 1067:
                if (var3) {
                    _fun92165_ip = 1332;
                    continue _fun92165
                }
            case 1073:
                var30 = _closure1_slot0;
                var3 = _closure1_slot3;
                var3 = var3[var31];
                var3 = var30.bind(var5)(var3);
                var3 = var3.RequestToSpeakStates;
                var3 = var3.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                var3 = var28 === var3;
                var32 = _closure1_slot0;
                var28 = _closure1_slot3;
                var39 = 22;
                var30 = var28[var39];
                var30 = var32.bind(var5)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var28 = var28[var39];
                var28 = var32.bind(var5)(var28);
                var28 = var28.t;
                if (var3) {
                    _fun92165_ip = 1168;
                    continue _fun92165
                }
            case 1153:
                var32 = var28.VUCWcO;
                var33 = var30.bind(var31)(var32);
                _fun92165_ip = 1181;
                continue _fun92165;
            case 1168:
                var28 = var28.tHj7Tb;
                var33 = var30.bind(var31)(var28);
            case 1181:
                var28 = var8.push;
                var32 = _closure1_slot14;
                var35 = _closure1_slot0;
                var37 = _closure1_slot3;
                var30 = 21;
                var30 = var37[var30];
                var30 = var35.bind(var5)(var30);
                var31 = var30.UserProfileFormRow;
                var30 = {};
                var34 = 25;
                var34 = var37[var34];
                var34 = var35.bind(var5)(var34);
                var34 = var34.MicrophoneArrowRightIcon;
                var30.icon = var34;
                if (!var4) {
                    _fun92165_ip = 1295;
                    continue _fun92165
                }
            case 1243:
                var38 = _closure1_slot0;
                var34 = _closure1_slot3;
                var35 = var34[var39];
                var35 = var38.bind(var5)(var35);
                var37 = var35.intl;
                var35 = var37.string;
                var34 = var34[var39];
                var34 = var38.bind(var5)(var34);
                var34 = var34.t;
                var34 = var34["8Joh+p"];
                var33 = var35.bind(var37)(var34);
            case 1295:
                var30.label = var33;
                var30.disabled = var3;
                var3 = function() { // Original name: onPress, environment: var1
                    _fun92176: for (var _fun92176_ip = 0;;) switch (_fun92176_ip) {
                        case 0:
                            var3 = _closure2_slot4;
                            var1 = {};
                            var0 = 'PRESS_INVITE_TO_SPEAK';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var3 = _closure2_slot10;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var4 = 24;
                            var4 = var6[var4];
                            var5 = var5.bind(var0)(var4);
                            if (var3) {
                                _fun92176_ip = 83;
                                continue _fun92176
                            }
                        case 56:
                            var6 = var5.inviteUserToStage;
                            var4 = _closure2_slot7;
                            var3 = _closure2_slot0;
                            var3 = var3.id;
                            var3 = var6.bind(var5)(var4, var3);
                            _fun92176_ip = 101;
                            continue _fun92176;
                        case 83:
                            var4 = var5.audienceAckRequestToSpeak;
                            var3 = _closure2_slot7;
                            var2 = false;
                            var2 = var4.bind(var5)(var3, var2);
                        case 101:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var1 = 12;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.hideActionSheet;
                            var1 = var1.bind(var2)();
                            return var0;
                    }
                };
                var30.onPress = var3;
                var3 = 'invite-to-speak';
                var3 = var32.bind(var5)(var31, var30, var3);
                var3 = var28.bind(var8)(var3);
            case 1332:
                var3 = var16;
                if (!var16) {
                    _fun92165_ip = 1341;
                    continue _fun92165
                }
            case 1338:
                var3 = var17;
            case 1341:
                if (!var3) {
                    _fun92165_ip = 1562;
                    continue _fun92165
                }
            case 1347:
                var28 = var8.push;
                var32 = _closure1_slot14;
                var33 = _closure1_slot0;
                var34 = _closure1_slot3;
                var3 = 21;
                var3 = var34[var3];
                var3 = var33.bind(var5)(var3);
                var31 = var3.UserProfileFormRow;
                var30 = {};
                var3 = 22;
                var35 = var34[var3];
                var35 = var33.bind(var5)(var35);
                var37 = var35.intl;
                var35 = var37.string;
                var3 = var34[var3];
                var3 = var33.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.FAplms;
                var3 = var35.bind(var37)(var3);
                var30.label = var3;
                var3 = 26;
                var3 = var34[var3];
                var3 = var33.bind(var5)(var3);
                var3 = var3.FormArrow;
                var30.hint = var3;
                var3 = 27;
                var3 = var34[var3];
                var3 = var33.bind(var5)(var3);
                var35 = var3.Text;
                var3 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-subtle'
                };
                var36 = var36.name;
                var3.children = var36;
                var3 = var32.bind(var5)(var35, var3);
                var30.sublabel = var3;
                var3 = 28;
                var3 = var34[var3];
                var3 = var33.bind(var5)(var3);
                var3 = var3.VoiceNormalIcon;
                var30.icon = var3;
                var3 = function() { // Original name: onPress, environment: var1
                    var3 = _closure2_slot4;
                    var2 = {};
                    var0 = 'PRESS_MOVE_TO_CHANNEL';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var3 = 12;
                    var3 = var11[var3];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var10 = _closure1_slot0;
                    var2 = 30;
                    var2 = var11[var2];
                    var4 = var10.bind(var0)(var2);
                    var2 = 29;
                    var3 = var11[var2];
                    var2 = var11.paths;
                    var4 = var4.bind(var0)(var3, var2);
                    var3 = {};
                    var2 = _closure2_slot8;
                    var3.guild = var2;
                    var2 = {};
                    var7 = 22;
                    var8 = var11[var7];
                    var8 = var10.bind(var0)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var0)(var7);
                    var7 = var7.t;
                    var7 = var7.r2ptsz;
                    var7 = var8.bind(var9)(var7);
                    var2.title = var7;
                    var3.header = var2;
                    var1 = _closure2_slot13;
                    var3.channels = var1;
                    var1 = function(arg0) { // Original name: onSelect, environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 31;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.setChannel;
                        var1 = _closure2_slot8;
                        var2 = var1.id;
                        var0 = _closure2_slot0;
                        var1 = var0.id;
                        var0 = arg0;
                        var0 = var0.id;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var3.onSelect = var1;
                    var1 = null;
                    var3.selectedChannel = var1;
                    var14 = 'ChannelPicker';
                    var12 = 'stack';
                    var16 = var6;
                    var15 = var4;
                    var13 = var3;
                    var1 = var16[var5](var15, var14, var13, var12, var11);
                    return var0;
                };
                var30.onPress = var3;
                var3 = 'move-to-channel';
                var3 = var32.bind(var5)(var31, var30, var3);
                var3 = var28.bind(var8)(var3);
            case 1562:
                var3 = var14;
                if (var3) {
                    _fun92165_ip = 1571;
                    continue _fun92165
                }
            case 1568:
                var3 = var13;
            case 1571:
                if (var3) {
                    _fun92165_ip = 1577;
                    continue _fun92165
                }
            case 1574:
                var3 = var27;
            case 1577:
                if (var3) {
                    _fun92165_ip = 1583;
                    continue _fun92165
                }
            case 1580:
                var3 = var26;
            case 1583:
                if (!var3) {
                    _fun92165_ip = 1599;
                    continue _fun92165
                }
            case 1586:
                var26 = var20.isNonUserBot;
                var26 = var26.bind(var20)();
                var3 = !var26;
            case 1599:
                if (!var3) {
                    _fun92165_ip = 1742;
                    continue _fun92165
                }
            case 1605:
                var26 = var8.push;
                var30 = _closure1_slot14;
                var31 = _closure1_slot0;
                var32 = _closure1_slot3;
                var3 = 21;
                var3 = var32[var3];
                var3 = var31.bind(var5)(var3);
                var28 = var3.UserProfileFormRow;
                var27 = {};
                var3 = 22;
                var33 = var32[var3];
                var33 = var31.bind(var5)(var33);
                var34 = var33.intl;
                var33 = var34.string;
                var3 = var32[var3];
                var3 = var31.bind(var5)(var3);
                var3 = var3.t;
                var3 = var3.HxrBOZ;
                var3 = var33.bind(var34)(var3);
                var27.label = var3;
                var3 = 32;
                var3 = var32[var3];
                var3 = var31.bind(var5)(var3);
                var3 = var3.SettingsIcon;
                var27.icon = var3;
                var3 = function() { // Original name: onPress, environment: var1
                    var2 = _closure2_slot4;
                    var1 = {};
                    var0 = 'PRESS_MANAGE_USER';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var0)();
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var3 = 33;
                    var3 = var1[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.pushLazy;
                    var7 = _closure1_slot0;
                    var2 = 30;
                    var2 = var1[var2];
                    var7 = var7.bind(var0)(var2);
                    var2 = 34;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var2 = var7.bind(var0)(var2, var1);
                    var1 = {};
                    var7 = _closure2_slot0;
                    var7 = var7.id;
                    var1.userId = var7;
                    var6 = _closure2_slot8;
                    var6 = var6.id;
                    var1.guildId = var6;
                    var6 = function() { // Original name: onClose, environment: var5
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 33;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        var1 = _closure2_slot3;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1.onClose = var6;
                    var5 = function() { // Original name: onRemove, environment: var5
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 33;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.pop;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1.onRemove = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var27.onPress = var3;
                var3 = 'manage';
                var3 = var30.bind(var5)(var28, var27, var3);
                var3 = var26.bind(var8)(var3);
            case 1742:
                var28 = var24.features;
                var27 = var28.has;
                var3 = _closure1_slot11;
                var26 = var3.COMMUNITY;
                var28 = var27.bind(var28)(var26);
                var26 = var24.features;
                var24 = var26.has;
                var3 = var3.GUILD_ONBOARDING_EVER_ENABLED;
                var27 = var24.bind(var26)(var3);
                var24 = _closure1_slot0;
                var26 = _closure1_slot3;
                var3 = 35;
                var3 = var26[var3];
                var31 = var24.bind(var5)(var3);
                var30 = var31.hasFlag;
                var24 = var25.flags;
                var32 = var0 != var24;
                var3 = 0;
                var26 = 0;
                if (!var32) {
                    _fun92165_ip = 1835;
                    continue _fun92165
                }
            case 1832:
                var26 = var24;
            case 1835:
                var24 = _closure1_slot13;
                var24 = var24.BYPASSES_VERIFICATION;
                var26 = var30.bind(var31)(var26, var24);
                var24 = !var4;
                var30 = var24;
                if (var4) {
                    _fun92165_ip = 1863;
                    continue _fun92165
                }
            case 1860:
                var30 = var29;
            case 1863:
                if (!var30) {
                    _fun92165_ip = 1869;
                    continue _fun92165
                }
            case 1866:
                var30 = var28;
            case 1869:
                if (!var30) {
                    _fun92165_ip = 1875;
                    continue _fun92165
                }
            case 1872:
                var30 = var27;
            case 1875:
                if (!var30) {
                    _fun92165_ip = 1881;
                    continue _fun92165
                }
            case 1878:
                var30 = var26;
            case 1881:
                if (!var30) {
                    _fun92165_ip = 2028;
                    continue _fun92165
                }
            case 1887:
                var31 = var8.push;
                var34 = _closure1_slot14;
                var35 = _closure1_slot0;
                var36 = _closure1_slot3;
                var30 = 21;
                var30 = var36[var30];
                var30 = var35.bind(var5)(var30);
                var33 = var30.UserProfileFormRow;
                var32 = {};
                var30 = 22;
                var37 = var36[var30];
                var37 = var35.bind(var5)(var37);
                var38 = var37.intl;
                var37 = var38.string;
                var30 = var36[var30];
                var30 = var35.bind(var5)(var30);
                var30 = var30.t;
                var30 = var30.NbhSI7;
                var30 = var37.bind(var38)(var30);
                var32.label = var30;
                var30 = 36;
                var30 = var36[var30];
                var30 = var35.bind(var5)(var30);
                var30 = var30.StampIcon;
                var32.icon = var30;
                var30 = function() { // Original name: onPress, environment: var1
                    _fun92182: for (var _fun92182_ip = 0;;) switch (_fun92182_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = {};
                            var0 = 'PRESS_UNVERIFY_USER';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var2 = 31;
                            var2 = var9[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.setMemberFlags;
                            var2 = _closure2_slot8;
                            var3 = var2.id;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var8 = _closure1_slot0;
                            var7 = 35;
                            var7 = var9[var7];
                            var9 = var8.bind(var0)(var7);
                            var8 = var9.setFlag;
                            var6 = _closure2_slot9;
                            var6 = var6.flags;
                            var7 = null;
                            var10 = var7 != var6;
                            var7 = 0;
                            if (!var10) {
                                _fun92182_ip = 118;
                                continue _fun92182
                            }
                        case 115:
                            var7 = var6;
                        case 118:
                            var1 = _closure1_slot13;
                            var6 = var1.BYPASSES_VERIFICATION;
                            var1 = false;
                            var1 = var8.bind(var9)(var7, var6, var1);
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var32.onPress = var30;
                var30 = 'unverify';
                var30 = var34.bind(var5)(var33, var32, var30);
                var30 = var31.bind(var8)(var30);
            case 2028:
                if (var4) {
                    _fun92165_ip = 2034;
                    continue _fun92165
                }
            case 2031:
                var24 = var29;
            case 2034:
                if (!var24) {
                    _fun92165_ip = 2040;
                    continue _fun92165
                }
            case 2037:
                var24 = var28;
            case 2040:
                if (!var24) {
                    _fun92165_ip = 2046;
                    continue _fun92165
                }
            case 2043:
                var24 = var27;
            case 2046:
                if (!var24) {
                    _fun92165_ip = 2052;
                    continue _fun92165
                }
            case 2049:
                var24 = !var26;
            case 2052:
                if (!var24) {
                    _fun92165_ip = 2197;
                    continue _fun92165
                }
            case 2058:
                var26 = var8.push;
                var29 = _closure1_slot14;
                var30 = _closure1_slot0;
                var31 = _closure1_slot3;
                var24 = 21;
                var24 = var31[var24];
                var24 = var30.bind(var5)(var24);
                var28 = var24.UserProfileFormRow;
                var27 = {};
                var24 = 22;
                var32 = var31[var24];
                var32 = var30.bind(var5)(var32);
                var33 = var32.intl;
                var32 = var33.string;
                var24 = var31[var24];
                var24 = var30.bind(var5)(var24);
                var24 = var24.t;
                var24 = var24["6QlTeK"];
                var24 = var32.bind(var33)(var24);
                var27.label = var24;
                var24 = 36;
                var24 = var31[var24];
                var24 = var30.bind(var5)(var24);
                var24 = var24.StampIcon;
                var27.icon = var24;
                var24 = function() { // Original name: onPress, environment: var1
                    _fun92183: for (var _fun92183_ip = 0;;) switch (_fun92183_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = {};
                            var0 = 'PRESS_VERIFY_USER';
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var3 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var2 = 31;
                            var2 = var9[var2];
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.setMemberFlags;
                            var2 = _closure2_slot8;
                            var3 = var2.id;
                            var2 = _closure2_slot0;
                            var2 = var2.id;
                            var8 = _closure1_slot0;
                            var7 = 35;
                            var7 = var9[var7];
                            var9 = var8.bind(var0)(var7);
                            var8 = var9.setFlag;
                            var6 = _closure2_slot9;
                            var6 = var6.flags;
                            var7 = null;
                            var10 = var7 != var6;
                            var7 = 0;
                            if (!var10) {
                                _fun92183_ip = 118;
                                continue _fun92183
                            }
                        case 115:
                            var7 = var6;
                        case 118:
                            var1 = _closure1_slot13;
                            var6 = var1.BYPASSES_VERIFICATION;
                            var1 = true;
                            var1 = var8.bind(var9)(var7, var6, var1);
                            var1 = var4.bind(var5)(var3, var2, var1);
                            return var0;
                    }
                };
                var27.onPress = var24;
                var24 = 'verify';
                var24 = var29.bind(var5)(var28, var27, var24);
                var24 = var26.bind(var8)(var24);
            case 2197:
                if (!var19) {
                    _fun92165_ip = 2401;
                    continue _fun92165
                }
            case 2203:
                var26 = _closure1_slot0;
                var28 = _closure1_slot3;
                var19 = 37;
                var19 = var28[var19];
                var24 = var26.bind(var5)(var19);
                var19 = var24.isMemberCommunicationDisabled;
                var19 = var19.bind(var24)(var25);
                _closure2_slot14 = var19;
                var24 = var8.push;
                var27 = _closure1_slot14;
                var25 = 21;
                var25 = var28[var25];
                var25 = var26.bind(var5)(var25);
                var26 = var25.UserProfileFormRow;
                var25 = {};
                var31 = _closure1_slot0;
                var32 = _closure1_slot3;
                var28 = 22;
                var29 = var32[var28];
                var29 = var31.bind(var5)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var32[var28];
                var28 = var31.bind(var5)(var28);
                var28 = var28.t;
                if (var19) {
                    _fun92165_ip = 2327;
                    continue _fun92165
                }
            case 2314:
                var19 = var28.xpsADY;
                var19 = var29.bind(var30)(var19);
                _fun92165_ip = 2338;
                continue _fun92165;
            case 2327:
                var28 = var28.qXtNtS;
                var19 = var29.bind(var30)(var28);
            case 2338:
                var25.label = var19;
                var28 = _closure1_slot0;
                var29 = _closure1_slot3;
                var19 = 38;
                var19 = var29[var19];
                var19 = var28.bind(var5)(var19);
                var19 = var19.ClockWarningIcon;
                var25.icon = var19;
                var19 = function() { // Original name: onPress, environment: var1
                    _fun92184: for (var _fun92184_ip = 0;;) switch (_fun92184_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = {};
                            var3 = _closure2_slot14;
                            var0 = 'PRESS_TIME_OUT_USER';
                            if (!var3) {
                                _fun92184_ip = 28;
                                continue _fun92184
                            }
                        case 22:
                            var0 = 'PRESS_REMOVE_TIME_OUT';
                        case 28:
                            var1.action = var0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot14;
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var2 = 39;
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            if (var1) {
                                _fun92184_ip = 123;
                                continue _fun92184
                            }
                        case 77:
                            var2 = var3.openDisableCommunication;
                            var1 = {};
                            var5 = _closure2_slot9;
                            var6 = var5.guildId;
                            var1.guildId = var6;
                            var5 = var5.userId;
                            var1.userId = var5;
                            var5 = _closure2_slot3;
                            var1.cancelButtonCallback = var5;
                            var1 = var2.bind(var3)(var1);
                            _fun92184_ip = 167;
                            continue _fun92184;
                        case 123:
                            var2 = var3.openEnableCommunication;
                            var1 = {};
                            var5 = _closure2_slot9;
                            var6 = var5.guildId;
                            var1.guildId = var6;
                            var5 = var5.userId;
                            var1.userId = var5;
                            var4 = _closure2_slot3;
                            var1.cancelButtonCallback = var4;
                            var1 = var2.bind(var3)(var1);
                        case 167:
                            return var0;
                    }
                };
                var25.onPress = var19;
                var19 = 'time-out';
                var19 = var27.bind(var5)(var26, var25, var19);
                var19 = var24.bind(var8)(var19);
            case 2401:
                var19 = var16;
                if (!var16) {
                    _fun92165_ip = 2410;
                    continue _fun92165
                }
            case 2407:
                var19 = var22;
            case 2410:
                if (!var19) {
                    _fun92165_ip = 2416;
                    continue _fun92165
                }
            case 2413:
                var19 = var23;
            case 2416:
                if (!var19) {
                    _fun92165_ip = 2632;
                    continue _fun92165
                }
            case 2422:
                var23 = var8.push;
                var26 = _closure1_slot14;
                var24 = _closure1_slot0;
                var25 = _closure1_slot3;
                var19 = 21;
                var19 = var25[var19];
                var19 = var24.bind(var5)(var19);
                var25 = var19.UserProfileFormRow;
                var24 = {};
                var19 = var18.mute;
                var30 = _closure1_slot0;
                var31 = _closure1_slot3;
                var27 = 22;
                var28 = var31[var27];
                var28 = var30.bind(var5)(var28);
                var29 = var28.intl;
                var28 = var29.string;
                var27 = var31[var27];
                var27 = var30.bind(var5)(var27);
                var27 = var27.t;
                if (var19) {
                    _fun92165_ip = 2527;
                    continue _fun92165
                }
            case 2512:
                var19 = var27.e9e9Ua;
                var19 = var28.bind(var29)(var19);
                _fun92165_ip = 2540;
                continue _fun92165;
            case 2527:
                var27 = var27.wG9K2n;
                var19 = var28.bind(var29)(var27);
            case 2540:
                var24.label = var19;
                var19 = var18.mute;
                var28 = _closure1_slot0;
                var29 = _closure1_slot3;
                if (var19) {
                    _fun92165_ip = 2581;
                    continue _fun92165
                }
            case 2561:
                var19 = 41;
                var19 = var29[var19];
                var19 = var28.bind(var5)(var19);
                var19 = var19.MicrophoneIcon;
                _fun92165_ip = 2599;
                continue _fun92165;
            case 2581:
                var27 = 40;
                var27 = var29[var27];
                var27 = var28.bind(var5)(var27);
                var19 = var27.MicrophoneSlashIcon;
            case 2599:
                var24.icon = var19;
                var19 = function() { // Original name: onPress, environment: var1
                    var3 = _closure2_slot4;
                    var2 = {};
                    var0 = 'SERVER_MUTE';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 31;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.setServerMute;
                    var2 = _closure2_slot8;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot6;
                    var1 = var1.mute;
                    var1 = !var1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var24.onPress = var19;
                var19 = 'server-mute';
                var19 = var26.bind(var5)(var25, var24, var19);
                var19 = var23.bind(var8)(var19);
            case 2632:
                var19 = var16;
                if (!var16) {
                    _fun92165_ip = 2641;
                    continue _fun92165
                }
            case 2638:
                var19 = var22;
            case 2641:
                if (!var19) {
                    _fun92165_ip = 2647;
                    continue _fun92165
                }
            case 2644:
                var19 = var21;
            case 2647:
                if (!var19) {
                    _fun92165_ip = 2861;
                    continue _fun92165
                }
            case 2653:
                var19 = var8.push;
                var23 = _closure1_slot14;
                var22 = _closure1_slot0;
                var24 = _closure1_slot3;
                var21 = 21;
                var21 = var24[var21];
                var21 = var22.bind(var5)(var21);
                var22 = var21.UserProfileFormRow;
                var21 = {};
                var24 = var18.deaf;
                var28 = _closure1_slot0;
                var29 = _closure1_slot3;
                var25 = 22;
                var26 = var29[var25];
                var26 = var28.bind(var5)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var29[var25];
                var25 = var28.bind(var5)(var25);
                var25 = var25.t;
                if (var24) {
                    _fun92165_ip = 2758;
                    continue _fun92165
                }
            case 2743:
                var24 = var25.hMA2GE;
                var24 = var26.bind(var27)(var24);
                _fun92165_ip = 2771;
                continue _fun92165;
            case 2758:
                var25 = var25.Gbw4Z9;
                var24 = var26.bind(var27)(var25);
            case 2771:
                var21.label = var24;
                var18 = var18.deaf;
                var25 = _closure1_slot0;
                var26 = _closure1_slot3;
                if (var18) {
                    _fun92165_ip = 2812;
                    continue _fun92165
                }
            case 2792:
                var18 = 43;
                var18 = var26[var18];
                var18 = var25.bind(var5)(var18);
                var18 = var18.HeadphonesIcon;
                _fun92165_ip = 2830;
                continue _fun92165;
            case 2812:
                var24 = 42;
                var24 = var26[var24];
                var24 = var25.bind(var5)(var24);
                var18 = var24.HeadphonesSlashIcon;
            case 2830:
                var21.icon = var18;
                var18 = function() { // Original name: onPress, environment: var1
                    var3 = _closure2_slot4;
                    var2 = {};
                    var0 = 'DEAFEN';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 31;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.setServerDeaf;
                    var2 = _closure2_slot8;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = _closure2_slot6;
                    var1 = var1.deaf;
                    var1 = !var1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var21.onPress = var18;
                var18 = 'deafen';
                var18 = var23.bind(var5)(var22, var21, var18);
                var18 = var19.bind(var8)(var18);
            case 2861:
                if (!var16) {
                    _fun92165_ip = 2867;
                    continue _fun92165
                }
            case 2864:
                var16 = var17;
            case 2867:
                if (!var16) {
                    _fun92165_ip = 3106;
                    continue _fun92165
                }
            case 2873:
                var16 = var8.push;
                var19 = _closure1_slot14;
                var18 = _closure1_slot0;
                var21 = _closure1_slot3;
                var17 = 21;
                var17 = var21[var17];
                var17 = var18.bind(var5)(var17);
                var18 = var17.UserProfileFormRow;
                var17 = {};
                var20 = var20.id;
                var15 = var15.id;
                if (!(var20 !== var15)) {
                    _fun92165_ip = 2983;
                    continue _fun92165
                }
            case 2924:
                var22 = _closure1_slot0;
                var23 = _closure1_slot3;
                var15 = 22;
                var20 = var23[var15];
                var20 = var22.bind(var5)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var15 = var23[var15];
                var15 = var22.bind(var5)(var15);
                var15 = var15.t;
                var15 = var15["/jERiG"];
                var15 = var20.bind(var21)(var15);
                _fun92165_ip = 3038;
                continue _fun92165;
            case 2983:
                var23 = _closure1_slot0;
                var24 = _closure1_slot3;
                var20 = 22;
                var21 = var24[var20];
                var21 = var23.bind(var5)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var5)(var20);
                var20 = var20.t;
                var20 = var20["6vrfgt"];
                var15 = var21.bind(var22)(var20);
            case 3038:
                var17.label = var15;
                var20 = _closure1_slot0;
                var21 = _closure1_slot3;
                var15 = 44;
                var15 = var21[var15];
                var15 = var20.bind(var5)(var15);
                var15 = var15.PhoneHangUpIcon;
                var17.icon = var15;
                var15 = true;
                var17.isDestructive = var15;
                var15 = function() { // Original name: onPress, environment: var1
                    var3 = _closure2_slot4;
                    var2 = {};
                    var0 = 'DISCONNECT';
                    var2.action = var0;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var2 = 31;
                    var2 = var4[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.setChannel;
                    var2 = _closure2_slot8;
                    var3 = var2.id;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = null;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var17.onPress = var15;
                var15 = 'disconnect';
                var15 = var19.bind(var5)(var18, var17, var15);
                var15 = var16.bind(var8)(var15);
            case 3106:
                if (!var14) {
                    _fun92165_ip = 3258;
                    continue _fun92165
                }
            case 3112:
                var15 = var8.push;
                var18 = _closure1_slot14;
                var19 = _closure1_slot0;
                var20 = _closure1_slot3;
                var14 = 21;
                var14 = var20[var14];
                var14 = var19.bind(var5)(var14);
                var17 = var14.UserProfileFormRow;
                var16 = {};
                var14 = 22;
                var21 = var20[var14];
                var21 = var19.bind(var5)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var14 = var20[var14];
                var14 = var19.bind(var5)(var14);
                var14 = var14.t;
                var14 = var14["3glT6Z"];
                var14 = var21.bind(var22)(var14);
                var16.label = var14;
                var14 = 45;
                var14 = var20[var14];
                var14 = var19.bind(var5)(var14);
                var14 = var14.UserMinusIcon;
                var16.icon = var14;
                var14 = true;
                var16.isDestructive = var14;
                var14 = function() { // Original name: onPress, environment: var1
                    var2 = _closure2_slot4;
                    var1 = {};
                    var0 = 'PRESS_KICK_USER';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = _closure2_slot5;
                    var1 = var1.bind(var0)();
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 46;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot8;
                    var4 = var4.id;
                    var1.guildId = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.userId = var4;
                    var3 = _closure2_slot3;
                    var1.cancelButtonCallback = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var16.onPress = var14;
                var14 = 'kick';
                var14 = var18.bind(var5)(var17, var16, var14);
                var14 = var15.bind(var8)(var14);
            case 3258:
                if (!var13) {
                    _fun92165_ip = 3410;
                    continue _fun92165
                }
            case 3264:
                var14 = var8.push;
                var17 = _closure1_slot14;
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var13 = 21;
                var13 = var19[var13];
                var13 = var18.bind(var5)(var13);
                var16 = var13.UserProfileFormRow;
                var15 = {};
                var13 = 22;
                var20 = var19[var13];
                var20 = var18.bind(var5)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var13 = var19[var13];
                var13 = var18.bind(var5)(var13);
                var13 = var13.t;
                var13 = var13["5MBJ5M"];
                var13 = var20.bind(var21)(var13);
                var15.label = var13;
                var13 = 47;
                var13 = var19[var13];
                var13 = var18.bind(var5)(var13);
                var13 = var13.HammerIcon;
                var15.icon = var13;
                var13 = true;
                var15.isDestructive = var13;
                var13 = function() { // Original name: onPress, environment: var1
                    var2 = _closure2_slot4;
                    var1 = {};
                    var0 = 'PRESS_BAN_USER';
                    var1.action = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var1 = 48;
                    var1 = var4[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot8;
                    var4 = var4.id;
                    var1.guildId = var4;
                    var4 = _closure2_slot0;
                    var4 = var4.id;
                    var1.userId = var4;
                    var3 = _closure2_slot3;
                    var1.cancelButtonCallback = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var15.onPress = var13;
                var13 = 'ban';
                var13 = var17.bind(var5)(var16, var15, var13);
                var13 = var14.bind(var8)(var13);
            case 3410:
                if (var11) {
                    _fun92165_ip = 3419;
                    continue _fun92165
                }
            case 3413:
                if (!var9) {
                    _fun92165_ip = 3612;
                    continue _fun92165
                }
            case 3419:
                if (!var6) {
                    _fun92165_ip = 3612;
                    continue _fun92165
                }
            case 3425:
                if (var4) {
                    _fun92165_ip = 3612;
                    continue _fun92165
                }
            case 3431:
                if (!(var0 != var2)) {
                    _fun92165_ip = 3612;
                    continue _fun92165
                }
            case 3438:
                var11 = _closure1_slot0;
                var13 = _closure1_slot3;
                var2 = 22;
                var4 = var13[var2];
                var4 = var11.bind(var5)(var4);
                var6 = var4.intl;
                var4 = var6.string;
                var2 = var13[var2];
                var2 = var11.bind(var5)(var2);
                var2 = var2.t;
                if (var9) {
                    _fun92165_ip = 3500;
                    continue _fun92165
                }
            case 3485:
                var9 = var2.at1yY3;
                var11 = var4.bind(var6)(var9);
                _fun92165_ip = 3513;
                continue _fun92165;
            case 3500:
                var2 = var2["6+b8ae"];
                var11 = var4.bind(var6)(var2);
            case 3513:
                var2 = var8.push;
                var9 = _closure1_slot14;
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var4 = 21;
                var4 = var14[var4];
                var4 = var13.bind(var5)(var4);
                var6 = var4.UserProfileFormRow;
                var4 = {};
                var15 = true;
                var4.isDestructive = var15;
                var4.label = var11;
                var11 = 49;
                var11 = var14[var11];
                var11 = var13.bind(var5)(var11);
                var11 = var11.ThreadMinusIcon;
                var4.icon = var11;
                var1 = function() { // Original name: onPress, environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 50;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.confirmThreadRemove;
                    var1 = {};
                    var5 = _closure2_slot11;
                    var1.isForumPost = var5;
                    var4 = _closure2_slot0;
                    var1.user = var4;
                    var4 = function() { // Original name: onConfirm, environment: var4
                        var3 = _closure2_slot4;
                        var2 = {};
                        var0 = 'PRESS_REMOVE_FROM_THREAD';
                        var2.action = var0;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 51;
                        var2 = var4[var2];
                        var6 = var3.bind(var0)(var2);
                        var5 = var6.removeMember;
                        var4 = _closure2_slot2;
                        var2 = _closure2_slot0;
                        var3 = var2.id;
                        var2 = 'Context Menu';
                        var2 = var5.bind(var6)(var4, var3, var2);
                        var1 = _closure2_slot5;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var1.onConfirm = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.onPress = var1;
                var1 = 'remove-from-thread';
                var1 = var9.bind(var5)(var6, var4, var1);
                var1 = var2.bind(var8)(var1);
            case 3612:
                var2 = var8.length;
                var1 = null;
                if (!(var3 !== var2)) {
                    _fun92165_ip = 3779;
                    continue _fun92165
                }
            case 3626:
                var4 = _closure1_slot14;
                var3 = _closure1_slot1;
                var9 = _closure1_slot3;
                var6 = 21;
                var2 = var9[var6];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var7 = _closure1_slot0;
                var11 = 22;
                var13 = var9[var11];
                var13 = var7.bind(var5)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var11 = var9[var11];
                var11 = var7.bind(var5)(var11);
                var11 = var11.t;
                var11 = var11["EApw/R"];
                var11 = var13.bind(var14)(var11);
                var2.title = var11;
                var11 = new Array(2);
                var11[0] = var12;
                var12 = var10.cardContainer;
                var11[1] = var12;
                var2.style = var11;
                var10 = var10.cardTitle;
                var2.titleStyle = var10;
                var6 = var9[var6];
                var6 = var7.bind(var5)(var6);
                var7 = var6.UserProfileCardRows;
                var6 = {};
                var6.children = var8;
                var6 = var4.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 3779:
                return var1;
            case 3781:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4204, 1372, 1662, 1672, 1410, 3050, 660, 3038, 33, 1297, 6931, 3237, 7724, 566, 6655, 9998, 1380, 7682, 4196, 3055, 7699, 1234, 8380, 5874, 8382, 5335, 3895, 4819, 9726, 1307, 4635, 5326, 4518, 9999, 1384, 11941, 3039, 10016, 10002, 8198, 10737, 8194, 10551, 8739, 3211, 10017, 10019, 10021, 11943, 8958, 6425, 2]);