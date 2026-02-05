// actions/InstantInviteActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var8;
    var0 = function arg0() {
        _fun51787: for (var _fun51787_ip = 0;;) switch (_fun51787_ip) {
            case 0:
                var3 = arg0;
                var0 = {};
                var2 = var3.target_type;
                var1 = _closure1_slot34;
                var1 = var1.STREAM;
                if (!(var1 !== var2)) {
                    _fun51787_ip = 112;
                    continue _fun51787
                }
            case 28:
                var1 = _closure1_slot34;
                var1 = var1.EMBEDDED_APPLICATION;
                if (!(var1 !== var2)) {
                    _fun51787_ip = 70;
                    continue _fun51787
                }
            case 42:
                var1 = _closure1_slot34;
                var1 = var1.ROLE_SUBSCRIPTIONS_PURCHASE;
                if (!(var1 === var2)) {
                    _fun51787_ip = 152;
                    continue _fun51787
                }
            case 56:
                var1 = var3.target_type;
                var0.targetType = var1;
                _fun51787_ip = 152;
                continue _fun51787;
            case 70:
                var1 = var3.target_type;
                var0.targetType = var1;
                var2 = var3.target_application;
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun51787_ip = 104;
                    continue _fun51787
                }
            case 99:
                var1 = var2.id;
            case 104:
                var0.targetApplicationId = var1;
                _fun51787_ip = 152;
                continue _fun51787;
            case 112:
                var1 = var3.target_type;
                var0.targetType = var1;
                var2 = var3.target_user;
                var1 = null;
                var4 = var1 == var2;
                var1 = undefined;
                if (var4) {
                    _fun51787_ip = 146;
                    continue _fun51787
                }
            case 141:
                var1 = var2.id;
            case 146:
                var0.targetUserId = var1;
            case 152:
                var7 = _closure1_slot16;
                var6 = var7.getGuild;
                var8 = var3.guild;
                var4 = null;
                var9 = var4 == var8;
                var2 = undefined;
                var1 = undefined;
                if (var9) {
                    _fun51787_ip = 184;
                    continue _fun51787
                }
            case 179:
                var1 = var8.id;
            case 184:
                var1 = var6.bind(var7)(var1);
                var6 = var4 != var1;
                var1 = !var6;
                if (!var6) {
                    _fun51787_ip = 205;
                    continue _fun51787
                }
            case 199:
                var1 = var3.new_member;
            case 205:
                var6 = var1;
                if (!var6) {
                    _fun51787_ip = 220;
                    continue _fun51787
                }
            case 211:
                var7 = var3.channel;
                var6 = var4 != var7;
            case 220:
                if (!var6) {
                    _fun51787_ip = 242;
                    continue _fun51787
                }
            case 223:
                var8 = _closure1_slot8;
                var7 = var3.channel;
                var7 = var7.type;
                var6 = var8.bind(var2)(var7);
            case 242:
                if (!var6) {
                    _fun51787_ip = 261;
                    continue _fun51787
                }
            case 245:
                var6 = var3.channel;
                var6 = var6.id;
                var0.welcomeModalChannelId = var6;
            case 261:
                var6 = var3.guild_scheduled_event;
                if (!(var4 != var6)) {
                    _fun51787_ip = 283;
                    continue _fun51787
                }
            case 271:
                var6 = var3.guild_scheduled_event;
                var0.guildScheduledEvent = var6;
            case 283:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var9 = 19;
                var6 = var6[var9];
                var14 = var7.bind(var2)(var6);
                var13 = var14.hasFlag;
                var6 = var3.flags;
                var7 = var4 != var6;
                var12 = 0;
                if (!var7) {
                    _fun51787_ip = 326;
                    continue _fun51787
                }
            case 323:
                var12 = var6;
            case 326:
                var7 = _closure1_slot0;
                var6 = _closure1_slot3;
                var10 = 20;
                var11 = var6[var10];
                var11 = var7.bind(var2)(var11);
                var11 = var11.GuildInviteFlags;
                var11 = var11.IS_GUEST_INVITE;
                var11 = var13.bind(var14)(var12, var11);
                var0.isGuestInvite = var11;
                var6 = var6[var9];
                var7 = var7.bind(var2)(var6);
                var6 = var7.hasFlag;
                var9 = var3.flags;
                var11 = var4 != var9;
                var8 = 0;
                if (!var11) {
                    _fun51787_ip = 402;
                    continue _fun51787
                }
            case 399:
                var8 = var9;
            case 402:
                var9 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var10];
                var5 = var9.bind(var2)(var5);
                var5 = var5.GuildInviteFlags;
                var5 = var5.IS_APPLICATION_BYPASS;
                var5 = var6.bind(var7)(var8, var5);
                var0.isApplicationBypassInvite = var5;
                var3 = var3.inviter;
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun51787_ip = 463;
                    continue _fun51787
                }
            case 458:
                var2 = var3.id;
            case 463:
                var0.inviterUserId = var2;
                if (var1) {
                    _fun51787_ip = 480;
                    continue _fun51787
                }
            case 472:
                var1 = true;
                var0.forceTransition = var1;
            case 480:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function arg0() {
        _fun51788: for (var _fun51788_ip = 0;;) switch (_fun51788_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.guildId;
                var _closure2_slot0 = var6;
                var4 = var0.channel;
                var _closure2_slot1 = var4;
                var3 = var0.options;
                var _closure2_slot2 = var3;
                var8 = var0.analyticsLocations;
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun51788_ip = 48;
                    continue _fun51788
                }
            case 44:
                var8 = new Array(0);
            case 48:
                var _closure2_slot3 = var8;
                var _closure2_slot4 = var0;
                var _closure2_slot5 = var0;
                var _closure2_slot6 = var0;
                var _closure2_slot7 = var0;
                var _closure2_slot8 = var0;
                var _closure2_slot9 = var0;
                var _closure2_slot10 = var0;
                var7 = _closure1_slot16;
                var2 = var7.getGuild;
                var7 = var2.bind(var7)(var6);
                var9 = null;
                var10 = var9 == var7;
                var2 = undefined;
                if (var10) {
                    _fun51788_ip = 134;
                    continue _fun51788
                }
            case 108:
                var11 = var7.features;
                var10 = var11.has;
                var7 = _closure1_slot26;
                var7 = var7.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                var2 = var10.bind(var11)(var7);
            case 134:
                var7 = var3;
                if (!(var9 == var7)) {
                    _fun51788_ip = 143;
                    continue _fun51788
                }
            case 141:
                var7 = {};
            case 143:
                var10 = var7.targetUserId;
                _closure2_slot4 = var10;
                var13 = var7.targetType;
                _closure2_slot5 = var13;
                var10 = var7.targetApplicationId;
                _closure2_slot6 = var10;
                var11 = var7.isGuestInvite;
                _closure2_slot7 = var11;
                var7 = var7.isApplicationBypassInvite;
                if (var11) {
                    _fun51788_ip = 232;
                    continue _fun51788
                }
            case 192:
                if (var7) {
                    _fun51788_ip = 232;
                    continue _fun51788
                }
            case 195:
                if (!(var9 != var3)) {
                    _fun51788_ip = 208;
                    continue _fun51788
                }
            case 199:
                var7 = var3.forceTransition;
                if (var7) {
                    _fun51788_ip = 232;
                    continue _fun51788
                }
            case 208:
                if (!var2) {
                    _fun51788_ip = 232;
                    continue _fun51788
                }
            case 211:
                var7 = _closure1_slot19;
                var2 = var7.getGuildId;
                var2 = var2.bind(var7)();
                if (!(var2 === var6)) {
                    _fun51788_ip = 770;
                    continue _fun51788
                }
            case 232:
                var12 = var4.type;
                var11 = _closure1_slot13;
                var7 = var11.getChannel;
                var2 = var4.id;
                var14 = var7.bind(var11)(var2);
                var7 = var9 == var3;
                var2 = undefined;
                if (var7) {
                    _fun51788_ip = 271;
                    continue _fun51788
                }
            case 265:
                var2 = var3.targetType;
            case 271:
                if (!(var9 == var2)) {
                    _fun51788_ip = 338;
                    continue _fun51788
                }
            case 275:
                var7 = _closure1_slot9;
                var2 = var4.type;
                var2 = var7.bind(var0)(var2);
                if (var2) {
                    _fun51788_ip = 338;
                    continue _fun51788
                }
            case 292:
                var7 = _closure1_slot0;
                var11 = _closure1_slot3;
                var2 = 21;
                var2 = var11[var2];
                var7 = var7.bind(var0)(var2);
                var2 = var7.canSeeOnboardingHome;
                var2 = var2.bind(var7)(var6);
                if (!var2) {
                    _fun51788_ip = 338;
                    continue _fun51788
                }
            case 326:
                var2 = _closure1_slot32;
                var11 = var2.GUILD_HOME;
                _fun51788_ip = 448;
                continue _fun51788;
            case 338:
                var15 = _closure1_slot13;
                var7 = var15.getChannel;
                var2 = var4.id;
                var16 = var7.bind(var15)(var2);
                var15 = _closure1_slot18;
                var7 = var15.can;
                var2 = _closure1_slot29;
                var2 = var2.VIEW_CHANNEL;
                var2 = var7.bind(var15)(var2, var16);
                if (var2) {
                    _fun51788_ip = 440;
                    continue _fun51788
                }
            case 386:
                var16 = _closure1_slot14;
                var15 = var16.getDefaultChannel;
                var2 = _closure1_slot29;
                var7 = var2.CREATE_INSTANT_INVITE;
                var2 = true;
                var7 = var15.bind(var16)(var6, var2, var7);
                var15 = var9 == var7;
                var2 = undefined;
                if (var15) {
                    _fun51788_ip = 429;
                    continue _fun51788
                }
            case 424:
                var2 = var7.id;
            case 429:
                if (!(var9 == var2)) {
                    _fun51788_ip = 438;
                    continue _fun51788
                }
            case 433:
                var2 = var4.id;
            case 438:
                _fun51788_ip = 445;
                continue _fun51788;
            case 440:
                var2 = var4.id;
            case 445:
                var11 = var2;
            case 448:
                _closure2_slot8 = var11;
                var2 = _closure1_slot22;
                var2 = var2.GUILD_STAGE_VOICE;
                var2 = var12 === var2;
                _closure2_slot9 = var2;
                var7 = _closure1_slot23;
                var2 = var7.CHANNEL;
                var2 = var2.bind(var7)(var6, var11);
                _closure2_slot10 = var2;
                var7 = _closure1_slot9;
                var7 = var7.bind(var0)(var12);
                if (var7) {
                    _fun51788_ip = 740;
                    continue _fun51788
                }
            case 505:
                var12 = _closure1_slot0;
                var15 = _closure1_slot3;
                var7 = 34;
                var7 = var15[var7];
                var12 = var12.bind(var0)(var7);
                var7 = var12.isActivityInTextSupportedForChannel;
                var7 = var7.bind(var12)(var14);
                if (!var7) {
                    _fun51788_ip = 553;
                    continue _fun51788
                }
            case 539:
                var12 = _closure1_slot34;
                var12 = var12.EMBEDDED_APPLICATION;
                var7 = var13 === var12;
            case 553:
                if (!var7) {
                    _fun51788_ip = 560;
                    continue _fun51788
                }
            case 556:
                var7 = var9 != var10;
            case 560:
                if (!var7) {
                    _fun51788_ip = 754;
                    continue _fun51788
                }
            case 566:
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var7 = 23;
                var7 = var13[var7];
                var12 = var12.bind(var0)(var7);
                var7 = var12.transitionTo;
                var14 = _closure1_slot23;
                var13 = var14.CHANNEL;
                if (!(var9 == var6)) {
                    _fun51788_ip = 610;
                    continue _fun51788
                }
            case 606:
                var6 = _closure1_slot24;
            case 610:
                var6 = var13.bind(var14)(var6, var11);
                var6 = var7.bind(var12)(var6);
                var7 = _closure1_slot1;
                var12 = _closure1_slot3;
                var6 = 30;
                var6 = var12[var6];
                var7 = var7.bind(var0)(var6);
                var6 = {};
                var6.channelId = var11;
                var6.applicationId = var10;
                var11 = var9 == var3;
                var10 = undefined;
                if (var11) {
                    _fun51788_ip = 666;
                    continue _fun51788
                }
            case 660:
                var10 = var3.intent;
            case 666:
                var6.intent = var10;
                var10 = var9 == var3;
                var9 = undefined;
                if (var10) {
                    _fun51788_ip = 686;
                    continue _fun51788
                }
            case 680:
                var9 = var3.inviterUserId;
            case 686:
                var6.inviterUserId = var9;
                var6.analyticsLocations = var8;
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var8 = 31;
                var8 = var10[var8];
                var8 = var9.bind(var0)(var8);
                var8 = var8.CommandOrigin;
                var8 = var8.CHAT;
                var6.commandOrigin = var8;
                var6 = var7.bind(var0)(var6);
                _fun51788_ip = 754;
                continue _fun51788;
            case 740:
                var6 = _closure1_slot5;
                var5 = function() { // Environment: var1
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 25;
                    var2 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = 24;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun51790: for (var _fun51790_ip = 0;;) switch (_fun51790_ip) {
                            case 0:
                                var1 = arg0;
                                var1 = var1.default;
                                var _closure4_slot0 = var1;
                                var1 = function() {
                                    _fun51791: for (var _fun51791_ip = 0;;) switch (_fun51791_ip) {
                                        case 0:
                                            var1 = _closure2_slot9;
                                            if (var1) {
                                                _fun51791_ip = 493;
                                                continue _fun51791
                                            }
                                        case 13:
                                            var1 = _closure2_slot2;
                                            var6 = null;
                                            var1 = var6 != var1;
                                            if (!var1) {
                                                _fun51791_ip = 36;
                                                continue _fun51791
                                            }
                                        case 26:
                                            var2 = _closure2_slot2;
                                            var1 = var2.muteOnJoinVoiceChannel;
                                        case 36:
                                            if (!var1) {
                                                _fun51791_ip = 106;
                                                continue _fun51791
                                            }
                                        case 39:
                                            var3 = _closure1_slot1;
                                            var7 = _closure1_slot3;
                                            var2 = 27;
                                            var2 = var7[var2];
                                            var5 = undefined;
                                            var4 = var3.bind(var5)(var2);
                                            var3 = var4.setSelfMute;
                                            var2 = _closure1_slot0;
                                            var1 = 28;
                                            var1 = var7[var1];
                                            var1 = var2.bind(var5)(var1);
                                            var1 = var1.MediaEngineContextTypes;
                                            var2 = var1.DEFAULT;
                                            var1 = true;
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 106:
                                            var3 = _closure4_slot0;
                                            var2 = var3.selectVoiceChannel;
                                            var1 = _closure2_slot8;
                                            var1 = var2.bind(var3)(var1);
                                            var2 = _closure2_slot5;
                                            var1 = _closure1_slot34;
                                            var1 = var1.STREAM;
                                            var1 = var2 === var1;
                                            if (!var1) {
                                                _fun51791_ip = 160;
                                                continue _fun51791
                                            }
                                        case 152:
                                            var2 = _closure2_slot4;
                                            var1 = var6 != var2;
                                        case 160:
                                            if (!var1) {
                                                _fun51791_ip = 238;
                                                continue _fun51791
                                            }
                                        case 163:
                                            var3 = _closure1_slot2;
                                            var2 = _closure1_slot3;
                                            var1 = 29;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var3 = var3.bind(var1)(var2);
                                            var2 = var3.watchStreamAndTransitionToStream;
                                            var1 = {};
                                            var5 = _closure1_slot33;
                                            var5 = var5.GUILD;
                                            var1.streamType = var5;
                                            var5 = _closure2_slot4;
                                            var1.ownerId = var5;
                                            var5 = _closure2_slot0;
                                            var1.guildId = var5;
                                            var5 = _closure2_slot8;
                                            var1.channelId = var5;
                                            var1 = var2.bind(var3)(var1);
                                        case 238:
                                            var2 = _closure2_slot5;
                                            var1 = _closure1_slot34;
                                            var1 = var1.EMBEDDED_APPLICATION;
                                            var1 = var2 === var1;
                                            if (!var1) {
                                                _fun51791_ip = 267;
                                                continue _fun51791
                                            }
                                        case 259:
                                            var2 = _closure2_slot6;
                                            var1 = var6 != var2;
                                        case 267:
                                            if (!var1) {
                                                _fun51791_ip = 489;
                                                continue _fun51791
                                            }
                                        case 273:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot3;
                                            var1 = 23;
                                            var1 = var3[var1];
                                            var3 = undefined;
                                            var5 = var2.bind(var3)(var1);
                                            var2 = var5.transitionTo;
                                            var9 = _closure1_slot23;
                                            var8 = var9.CHANNEL;
                                            var1 = _closure2_slot0;
                                            if (!(var6 == var1)) {
                                                _fun51791_ip = 325;
                                                continue _fun51791
                                            }
                                        case 319:
                                            var7 = _closure1_slot24;
                                            _fun51791_ip = 329;
                                            continue _fun51791;
                                        case 325:
                                            var7 = _closure2_slot0;
                                        case 329:
                                            var1 = _closure2_slot8;
                                            var1 = var8.bind(var9)(var7, var1);
                                            var1 = var2.bind(var5)(var1);
                                            var2 = _closure1_slot1;
                                            var5 = _closure1_slot3;
                                            var1 = 30;
                                            var1 = var5[var1];
                                            var2 = var2.bind(var3)(var1);
                                            var1 = {};
                                            var5 = _closure2_slot8;
                                            var1.channelId = var5;
                                            var5 = _closure2_slot6;
                                            var1.applicationId = var5;
                                            var5 = _closure2_slot2;
                                            var7 = var6 == var5;
                                            var5 = undefined;
                                            if (var7) {
                                                _fun51791_ip = 405;
                                                continue _fun51791
                                            }
                                        case 395:
                                            var7 = _closure2_slot2;
                                            var5 = var7.intent;
                                        case 405:
                                            var1.intent = var5;
                                            var5 = _closure2_slot2;
                                            var6 = var6 == var5;
                                            var5 = undefined;
                                            if (var6) {
                                                _fun51791_ip = 433;
                                                continue _fun51791
                                            }
                                        case 423:
                                            var6 = _closure2_slot2;
                                            var5 = var6.inviterUserId;
                                        case 433:
                                            var1.inviterUserId = var5;
                                            var5 = _closure2_slot3;
                                            var1.analyticsLocations = var5;
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot3;
                                            var4 = 31;
                                            var4 = var6[var4];
                                            var4 = var5.bind(var3)(var4);
                                            var4 = var4.CommandOrigin;
                                            var4 = var4.CHAT;
                                            var1.commandOrigin = var4;
                                            var1 = var2.bind(var3)(var1);
                                        case 489:
                                            var1 = undefined;
                                            return var1;
                                        case 493:
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot3;
                                            var2 = 26;
                                            var2 = var3[var2];
                                            var3 = undefined;
                                            var5 = var4.bind(var3)(var2);
                                            var4 = var5.connectAndOpen;
                                            var6 = _closure2_slot1;
                                            var2 = _closure1_slot11;
                                            var2 = var6 instanceof var2;
                                            if (var2) {
                                                _fun51791_ip = 554;
                                                continue _fun51791
                                            }
                                        case 539:
                                            var6 = _closure1_slot10;
                                            var2 = _closure2_slot1;
                                            var2 = var6.bind(var3)(var2);
                                            _fun51791_ip = 558;
                                            continue _fun51791;
                                        case 554:
                                            var2 = _closure2_slot1;
                                        case 558:
                                            var2 = var4.bind(var5)(var2);
                                            var2 = _closure1_slot0;
                                            var4 = _closure1_slot3;
                                            var1 = 23;
                                            var1 = var4[var1];
                                            var2 = var2.bind(var3)(var1);
                                            var1 = var2.transitionTo;
                                            var0 = _closure2_slot10;
                                            var0 = var1.bind(var2)(var0);
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var2 = _closure2_slot7;
                                if (var2) {
                                    _fun51790_ip = 139;
                                    continue _fun51790
                                }
                            case 29:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var3 = 32;
                                var3 = var4[var3];
                                var4 = undefined;
                                var7 = var5.bind(var4)(var3);
                                var6 = var7.shouldShowMembershipVerificationGate;
                                var5 = _closure2_slot0;
                                var8 = _closure1_slot16;
                                var3 = new Array(3);
                                var3[0] = var8;
                                var8 = _closure1_slot20;
                                var3[1] = var8;
                                var8 = _closure1_slot15;
                                var3[2] = var8;
                                var3 = var6.bind(var7)(var5, var3);
                                if (!var3) {
                                    _fun51790_ip = 139;
                                    continue _fun51790
                                }
                            case 101:
                                var3 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var2 = 33;
                                var2 = var5[var2];
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.openMemberVerificationModal;
                                var0 = _closure2_slot0;
                                var0 = var2.bind(var3)(var0, var1);
                                _fun51790_ip = 145;
                                continue _fun51790;
                            case 139:
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 145:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = var6.bind(var0)(var5);
            case 754:
                var1 = function arg0, arg1() {
                    _fun51792: for (var _fun51792_ip = 0;;) switch (_fun51792_ip) {
                        case 0:
                            var1 = arg1;
                            var2 = arg0;
                            var6 = var2.type;
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun51792_ip = 21;
                                continue _fun51792
                            }
                        case 19:
                            var1 = {};
                        case 21:
                            var2 = var1.transitionTo;
                            var _closure3_slot0 = var2;
                            var7 = var1.welcomeModalChannelId;
                            var1 = var1.guildScheduledEvent;
                            var2 = _closure1_slot22;
                            var4 = var2.GUILD_STAGE_VOICE;
                            var2 = {};
                            var10 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var8 = 22;
                            var9 = var9[var8];
                            var8 = undefined;
                            var8 = var10.bind(var8)(var9);
                            var8 = var8.INVITE_ACCEPT;
                            var2.source = var8;
                            var8 = true;
                            var2.navigationReplace = var8;
                            var _closure3_slot1 = var2;
                            if (!(var3 != var7)) {
                                _fun51792_ip = 111;
                                continue _fun51792
                            }
                        case 105:
                            var2.welcomeModalChannelId = var7;
                        case 111:
                            if (!(var6 === var4)) {
                                _fun51792_ip = 134;
                                continue _fun51792
                            }
                        case 115:
                            var4 = {};
                            var5 = _closure1_slot35;
                            var4.stageInviteKey = var5;
                            var2.state = var4;
                        case 134:
                            if (!(var3 != var1)) {
                                _fun51792_ip = 149;
                                continue _fun51792
                            }
                        case 138:
                            var1 = var1.id;
                            var2.guildScheduledEventId = var1;
                        case 149:
                            var0 = function(arg0) { // Environment: var0
                                _fun51793: for (var _fun51793_ip = 0;;) switch (_fun51793_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var2 = _closure3_slot0;
                                        var0 = null;
                                        if (!(var0 == var2)) {
                                            _fun51793_ip = 59;
                                            continue _fun51793
                                        }
                                    case 16:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var0 = 23;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.transitionTo;
                                        var0 = _closure3_slot1;
                                        var0 = var2.bind(var3)(var4, var0);
                                        _fun51793_ip = 75;
                                        continue _fun51793;
                                    case 59:
                                        var3 = _closure3_slot0;
                                        var2 = _closure3_slot1;
                                        var1 = undefined;
                                        var0 = var3.bind(var1)(var4, var2);
                                    case 75:
                                        return var0;
                                }
                            };
                            return var0;
                    }
                };
                var1 = var1.bind(var0)(var4, var3);
                var1 = var1.bind(var0)(var2);
            case 770:
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var1 = function arg0, arg1, arg2() {
        _fun51794: for (var _fun51794_ip = 0;;) switch (_fun51794_ip) {
            case 0:
                var6 = arg2;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 40;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot27;
                var2 = var1.INVITE_SERVER_CLICKED;
                var1 = {};
                var5 = arg0;
                var1.guild_id = var5;
                var5 = arg1;
                var1.action = var5;
                var5 = null;
                var7 = var5 != var6;
                if (!var7) {
                    _fun51794_ip = 71;
                    continue _fun51794
                }
            case 68:
                var5 = var6;
            case 71:
                var1.location_stack = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var0 = global;
    var9 = var0.Object;
    var6 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var8[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.addPostConnectionCallback;
    var _closure1_slot5 = var4;
    var4 = 2;
    var6 = var8[var4];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.isGuildScheduledEventActive;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var6 = var4.isGuildTextChannelType;
    var _closure1_slot8 = var6;
    var6 = var4.isGuildVocalChannelOrVocalThreadType;
    var _closure1_slot9 = var6;
    var6 = var4.createChannelRecord;
    var _closure1_slot10 = var6;
    var4 = var4.ChannelRecordBase;
    var _closure1_slot11 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot14 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot15 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot16 = var4;
    var4 = 9;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var8[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot20 = var4;
    var4 = 13;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var5 = var4.Endpoints;
    var _closure1_slot21 = var5;
    var5 = var4.ChannelTypes;
    var _closure1_slot22 = var5;
    var5 = var4.Routes;
    var _closure1_slot23 = var5;
    var5 = var4.ME;
    var _closure1_slot24 = var5;
    var5 = var4.RPCCommands;
    var _closure1_slot25 = var5;
    var5 = var4.GuildFeatures;
    var _closure1_slot26 = var5;
    var5 = var4.AnalyticEvents;
    var _closure1_slot27 = var5;
    var5 = var4.UserFlags;
    var _closure1_slot28 = var5;
    var5 = var4.Permissions;
    var _closure1_slot29 = var5;
    var4 = var4.AbortCodes;
    var _closure1_slot30 = var4;
    var4 = 14;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.AgeGateSource;
    var _closure1_slot31 = var4;
    var4 = 15;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.StaticChannelRoute;
    var _closure1_slot32 = var4;
    var4 = 16;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.StreamTypes;
    var _closure1_slot33 = var4;
    var4 = 17;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.InviteTargetTypes;
    var _closure1_slot34 = var4;
    var4 = 18;
    var4 = var8[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.STAGE_INVITE_STATE_KEY;
    var _closure1_slot35 = var4;
    var4 = null;
    var _closure1_slot36 = var4;
    var6 = function arg0, arg1() {
        _fun51795: for (var _fun51795_ip = 0;;) switch (_fun51795_ip) {
            case 0:
                var2 = arguments[2];
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun51795_ip = 29;
                    continue _fun51795
                }
            case 25:
                var2 = new Array(0);
            case 29:
                var _closure2_slot2 = var2;
                var3 = _closure1_slot13;
                var2 = var3.addConditionalChangeListener;
                var1 = function() { // Environment: var1
                    _fun51796: for (var _fun51796_ip = 0;;) switch (_fun51796_ip) {
                        case 0:
                            var3 = _closure1_slot13;
                            var1 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var6 = var1.bind(var3)(var0);
                            var1 = _closure1_slot20;
                            var0 = var1.getCurrentUser;
                            var3 = var0.bind(var1)();
                            var9 = null;
                            var0 = var9 == var6;
                            if (var0) {
                                _fun51796_ip = 50;
                                continue _fun51796
                            }
                        case 46:
                            var0 = var9 == var3;
                        case 50:
                            if (var0) {
                                _fun51796_ip = 244;
                                continue _fun51796
                            }
                        case 56:
                            var1 = var6.nsfw;
                            if (!var1) {
                                _fun51796_ip = 74;
                                continue _fun51796
                            }
                        case 65:
                            var3 = var3.nsfwAllowed;
                            var1 = !var3;
                        case 74:
                            if (var1) {
                                _fun51796_ip = 130;
                                continue _fun51796
                            }
                        case 77:
                            var3 = var6.isGuildVocalOrThread;
                            var3 = var3.bind(var6)();
                            if (!var3) {
                                _fun51796_ip = 127;
                                continue _fun51796
                            }
                        case 90:
                            var7 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 38;
                            var5 = var5[var4];
                            var4 = undefined;
                            var7 = var7.bind(var4)(var5);
                            var5 = var7.maybeOpenAgeGateForVoiceChannel;
                            var4 = _closure2_slot0;
                            var3 = var5.bind(var7)(var4);
                        case 127:
                            var1 = var3;
                        case 130:
                            var1 = !var1;
                            if (!var1) {
                                _fun51796_ip = 241;
                                continue _fun51796
                            }
                        case 136:
                            var3 = _closure2_slot1;
                            var5 = var9 == var3;
                            var4 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun51796_ip = 161;
                                continue _fun51796
                            }
                        case 151:
                            var5 = _closure2_slot1;
                            var3 = var5.guildScheduledEvent;
                        case 161:
                            if (!(var9 == var3)) {
                                _fun51796_ip = 223;
                                continue _fun51796
                            }
                        case 165:
                            var5 = _closure1_slot39;
                            var3 = {};
                            var7 = var6.getGuildId;
                            var7 = var7.bind(var6)();
                            if (!(var9 == var7)) {
                                _fun51796_ip = 189;
                                continue _fun51796
                            }
                        case 185:
                            var7 = _closure1_slot24;
                        case 189:
                            var3.guildId = var7;
                            var3.channel = var6;
                            var6 = _closure2_slot1;
                            var3.options = var6;
                            var6 = _closure2_slot2;
                            var3.analyticsLocations = var6;
                            var3 = var5.bind(var4)(var3);
                            var1 = false;
                            _fun51796_ip = 241;
                            continue _fun51796;
                        case 223:
                            var3 = _closure2_slot1;
                            var2 = function arg0() {
                                _fun51797: for (var _fun51797_ip = 0;;) switch (_fun51797_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var2 = var1.guildScheduledEvent;
                                        var _closure4_slot0 = var2;
                                        var1 = var1.welcomeModalChannelId;
                                        var _closure4_slot1 = var1;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun51797_ip = 50;
                                            continue _fun51797
                                        }
                                    case 31:
                                        var2 = _closure1_slot5;
                                        var1 = undefined;
                                        var0 = function() { // Environment: var0
                                            _fun51798: for (var _fun51798_ip = 0;;) switch (_fun51798_ip) {
                                                case 0:
                                                    var4 = {};
                                                    var0 = _closure4_slot0;
                                                    var0 = var0.id;
                                                    var4.guildScheduledEventId = var0;
                                                    var2 = _closure4_slot1;
                                                    var0 = null;
                                                    if (!(var0 != var2)) {
                                                        _fun51798_ip = 39;
                                                        continue _fun51798
                                                    }
                                                case 29:
                                                    var0 = _closure4_slot1;
                                                    var4.welcomeModalChannelId = var0;
                                                case 39:
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot3;
                                                    var0 = 35;
                                                    var2 = var2[var0];
                                                    var0 = undefined;
                                                    var3 = var3.bind(var0)(var2);
                                                    var2 = var3.transitionToEventDetailsFromInvite;
                                                    var1 = _closure4_slot0;
                                                    var1 = var2.bind(var3)(var1, var4);
                                                    return var0;
                                            }
                                        };
                                        var0 = var2.bind(var1)(var0);
                                    case 50:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var2.bind(var4)(var3);
                            var1 = false;
                        case 241:
                            var0 = var1;
                        case 244:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot37 = var6;
    var4 = function() { // Environment: var3
        var3 = _closure1_slot4;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun51801: for (var _fun51801_ip = 0;;) switch (_fun51801_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51801_ip = 99;
                            continue _fun51801
                        }
                    case 10:
                        var6 = var5.guild_id;
                        var3 = var5.channel_id;
                        var4 = _closure1_slot7;
                        var1 = undefined;
                        var4 = var4.bind(var1)(var5);
                        if (!var4) {
                            _fun51801_ip = 43;
                            continue _fun51801
                        }
                    case 37:
                        var4 = null;
                        if (!(var4 == var3)) {
                            _fun51801_ip = 87;
                            continue _fun51801
                        }
                    case 43:
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var4 = 39;
                        var4 = var7[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.transitionToGuildSync;
                        var4 = var4.bind(var5)(var6);
                        SaveGenerator(address = 78);
                    case 76:
                        return var4;
                    case 78:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (!var5) {
                            _fun51801_ip = 96;
                            continue _fun51801
                        }
                    case 84:
                        return var4;
                    case 87:
                        var2 = _closure1_slot37;
                        var2 = var2.bind(var1)(var3);
                    case 96:
                        return var1;
                    case 99:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var4.bind(var0)();
    var5 = {};
    var9 = function arg0, arg1, arg2() {
        _fun51803: for (var _fun51803_ip = 0;;) switch (_fun51803_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var _closure2_slot0 = var5;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var3;
                var8 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 36;
                var6 = var2[var0];
                var2 = undefined;
                var8 = var8.bind(var2)(var6);
                var6 = var8.isDispatching;
                var6 = var6.bind(var8)();
                if (var6) {
                    _fun51803_ip = 138;
                    continue _fun51803
                }
            case 61:
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var0 = var7[var0];
                var9 = var6.bind(var2)(var0);
                var8 = var9.dispatch;
                var0 = {};
                var10 = 'INVITE_RESOLVE';
                var0.type = var10;
                var0.code = var5;
                var0 = var8.bind(var9)(var0);
                var0 = 37;
                var0 = var7[var0];
                var0 = var6.bind(var2)(var0);
                var3 = var0.bind(var2)(var5, var4, var3);
                var2 = var3.then;
                var0 = function(arg0) { // Environment: var1
                    _fun51805: for (var _fun51805_ip = 0;;) switch (_fun51805_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = var0.invite;
                            var1 = var0.code;
                            var5 = var0.banned;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun51805_ip = 84;
                                continue _fun51805
                            }
                        case 26:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 36;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.dispatch;
                            var0 = {};
                            var6 = 'INVITE_RESOLVE_FAILURE';
                            var0.type = var6;
                            var0.code = var1;
                            var0.banned = var5;
                            var0 = var3.bind(var4)(var0);
                            _fun51805_ip = 138;
                            continue _fun51805;
                        case 84:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 36;
                            var3 = var3[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.dispatch;
                            var0 = {};
                            var5 = 'INVITE_RESOLVE_SUCCESS';
                            var0.type = var5;
                            var0.invite = var2;
                            var0.code = var1;
                            var0 = var3.bind(var4)(var0);
                        case 138:
                            var0 = {};
                            var0.invite = var2;
                            var0.code = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                _fun51803_ip = 171;
                continue _fun51803;
            case 138:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var3 = var2.bind(var3)();
                var2 = var3.then;
                var1 = function() { // Environment: var1
                    var4 = _closure1_slot40;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 171:
                return var0;
        }
    };
    var _closure1_slot40 = var9;
    var5.resolveInvite = var9;
    var9 = function arg0, arg1() {
        _fun51806: for (var _fun51806_ip = 0;;) switch (_fun51806_ip) {
            case 0:
                var2 = arg1;
                var0 = {};
                var1 = arg0;
                var0.location = var1;
                var1 = var2.guild;
                var4 = null;
                var5 = var4 != var1;
                var3 = undefined;
                if (!var5) {
                    _fun51806_ip = 38;
                    continue _fun51806
                }
            case 28:
                var5 = var2.guild;
                var3 = var5.id;
            case 38:
                var0.location_guild_id = var3;
                var3 = var2.channel;
                var5 = var4 != var3;
                var3 = undefined;
                if (!var5) {
                    _fun51806_ip = 69;
                    continue _fun51806
                }
            case 59:
                var5 = var2.channel;
                var3 = var5.id;
            case 69:
                var0.location_channel_id = var3;
                var3 = var2.channel;
                var3 = var4 != var3;
                var1 = undefined;
                if (!var3) {
                    _fun51806_ip = 100;
                    continue _fun51806
                }
            case 90:
                var2 = var2.channel;
                var1 = var2.type;
            case 100:
                var0.location_channel_type = var1;
                return var0;
        }
    };
    var5.getInviteContext = var9;
    var9 = function arg0() {
        _fun51807: for (var _fun51807_ip = 0;;) switch (_fun51807_ip) {
            case 0:
                var2 = arguments[1];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun51807_ip = 20;
                    continue _fun51807
                }
            case 18:
                var2 = {};
            case 20:
                var _closure2_slot1 = var2;
                var2 = arguments[2];
                var _closure2_slot2 = var2;
                var2 = _closure1_slot4;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun51809: for (var _fun51809_ip = 0;;) switch (_fun51809_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun51809_ip = 331;
                                    continue _fun51809
                                }
                            case 10:
                                var4 = undefined;
                                var1 = undefined;
                                var6 = undefined;
                            case 16: // try_start_0
                                var2 = {};
                                var11 = _closure2_slot1;
                                var12 = var2;
                                var3 = copyDataProperties(var12, var11);
                                var6 = var2;
                                var3 = var2.role_ids;
                                var1 = var3;
                                var2 = null;
                                var3 = var2 == var3;
                                var2 = undefined;
                                if (var3) {
                                    _fun51809_ip = 60;
                                    continue _fun51809
                                }
                            case 55:
                                var2 = var1.length;
                            case 60:
                                var1 = 0;
                                if (!(var1 === var2)) {
                                    _fun51809_ip = 74;
                                    continue _fun51809
                                }
                            case 66:
                                var1 = var6;
                                var1 = delete var1.role_ids;
                            case 74:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var1 = 41;
                                var1 = var5[var1];
                                var1 = var2.bind(var4)(var1);
                                var5 = var1.HTTP;
                                var2 = var5.post;
                                var1 = {};
                                var10 = _closure1_slot21;
                                var9 = var10.INSTANT_INVITES;
                                var8 = _closure2_slot0;
                                var8 = var9.bind(var10)(var8);
                                var1.url = var8;
                                var1.body = var6;
                                var6 = {};
                                var8 = _closure2_slot2;
                                var6.location = var8;
                                var1.context = var6;
                                var6 = true;
                                var1.rejectWithError = var6;
                                var1 = var2.bind(var5)(var1);
                                SaveGenerator(address = 166);
                            case 164:
                                return var1;
                            case 166:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun51809_ip = 233;
                                    continue _fun51809
                                }
                            case 172:
                                var2 = var1.body;
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var3 = 36;
                                var3 = var6[var3];
                                var6 = var5.bind(var4)(var3);
                                var5 = var6.dispatch;
                                var3 = {};
                                var8 = 'INSTANT_INVITE_CREATE_SUCCESS';
                                var3.type = var8;
                                var7 = _closure2_slot0;
                                var3.channelId = var7;
                                var3.invite = var2;
                                var3 = var5.bind(var6)(var3);
                            case 230: // try_end0
                                return var2;
                            case 233:
                                return var1;
                            case 236: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var2 = _closure1_slot1;
                                var5 = _closure1_slot3;
                                var1 = 36;
                                var1 = var5[var1];
                                var7 = var2.bind(var4)(var1);
                                var6 = var7.dispatch;
                                var1 = {};
                                var8 = 'INSTANT_INVITE_CREATE_FAILURE';
                                var1.type = var8;
                                var8 = _closure2_slot0;
                                var1.channelId = var8;
                                var1 = var6.bind(var7)(var1);
                                var1 = 42;
                                var1 = var5[var1];
                                var1 = var2.bind(var4)(var1);
                                var2 = var1.prototype;
                                var2 = Object.create(var2, {
                                    constructor: {
                                        value: var1
                                    }
                                });
                                var13 = var2;
                                var12 = var3;
                                var1 = new var13[var1](var12, var11);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 331:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var5.createInvite = var9;
    var9 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = this;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun51812: for (var _fun51812_ip = 0;;) switch (_fun51812_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51812_ip = 186;
                            continue _fun51812
                        }
                    case 10:
                        var5 = _closure1_slot17;
                        var4 = var5.getInvite;
                        var3 = _closure2_slot0;
                        var3 = var3.id;
                        var4 = var4.bind(var5)(var3);
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun51812_ip = 67;
                            continue _fun51812
                        }
                    case 46:
                        var5 = var4.isExpired;
                        var5 = var5.bind(var4)();
                        if (var5) {
                            _fun51812_ip = 67;
                            continue _fun51812
                        }
                    case 59:
                        var4 = var4.code;
                        return var4;
                    case 67:
                        var7 = {};
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 43;
                        var4 = var4[var2];
                        var2 = undefined;
                        var4 = var5.bind(var2)(var4);
                        var4 = var4.Seconds;
                        var4 = var4.DAY;
                        var7.max_age = var4;
                        var6 = _closure2_slot2;
                        var5 = var6.createInvite;
                        var4 = _closure2_slot0;
                        var4 = var4.id;
                        var1 = _closure2_slot1;
                        var5 = var5.bind(var6)(var4, var7, var1);
                        var4 = var5.catch;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 36;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED';
                            var0.type = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var1 = var4.bind(var5)(var1);
                        SaveGenerator(address = 160);
                    case 158:
                        return var1;
                    case 160:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun51812_ip = 183;
                            continue _fun51812
                        }
                    case 166:
                        var3 = var3 == var1;
                        var2 = undefined;
                        if (var3) {
                            _fun51812_ip = 180;
                            continue _fun51812
                        }
                    case 175:
                        var2 = var1.code;
                    case 180:
                        return var2;
                    case 183:
                        return var1;
                    case 186:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.mobileCreateInvite = var9;
    var9 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun51816: for (var _fun51816_ip = 0;;) switch (_fun51816_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51816_ip = 424;
                            continue _fun51816
                        }
                    case 12:
                        var2 = global;
                        var5 = var2.Promise;
                        var1 = var5.prototype;
                        var4 = Object.create(var1, {
                            constructor: {
                                value: var5
                            }
                        });
                        var12 = function(arg0) { // Environment: var3
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 36;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.wait;
                            var0 = function() { // Environment: var0
                                var2 = _closure5_slot0;
                                var1 = undefined;
                                var0 = null;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var13 = var4;
                        var1 = new var13[var5](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var4;
                        SaveGenerator(address = 49);
                    case 47:
                        return var1;
                    case 49:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun51816_ip = 421;
                            continue _fun51816
                        }
                    case 58:
                        var6 = _closure1_slot17;
                        var5 = var6.getFriendInvitesFetching;
                        var5 = var5.bind(var6)();
                        if (var5) {
                            _fun51816_ip = 338;
                            continue _fun51816
                        }
                    case 83:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var6 = 41;
                        var6 = var5[var6];
                        var9 = undefined;
                        var6 = var7.bind(var9)(var6);
                        var8 = var6.HTTP;
                        var7 = var8.get;
                        var6 = {};
                        var10 = _closure1_slot21;
                        var10 = var10.FRIEND_INVITES;
                        var6.url = var10;
                        var10 = {};
                        var11 = _closure2_slot0;
                        var10.location = var11;
                        var6.context = var10;
                        var10 = false;
                        var6.rejectWithError = var10;
                        var6 = var7.bind(var8)(var6);
                        _closure1_slot36 = var6;
                        var6 = _closure1_slot1;
                        var10 = 36;
                        var5 = var5[var10];
                        var7 = var6.bind(var9)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var8 = 'FRIEND_INVITES_FETCH_REQUEST';
                        var5.type = var8;
                        var8 = var2.Date;
                        var11 = var8.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var8
                            }
                        });
                        var13 = var11;
                        var8 = new var13[var8](var12);
                        var8 = var8 instanceof Object ? var8 : var11;
                        var5.requestedAt = var8;
                        var5 = var6.bind(var7)(var5);
                        var5 = _closure1_slot36;
                        SaveGenerator(address = 240);
                    case 238:
                        return var5;
                    case 240:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun51816_ip = 335;
                            continue _fun51816
                        }
                    case 246:
                        var6 = var5.body;
                        var7 = null;
                        _closure1_slot36 = var7;
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var7 = var7[var10];
                        var9 = var8.bind(var9)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var10 = 'FRIEND_INVITES_FETCH_RESPONSE';
                        var7.type = var10;
                        var10 = var2.Date;
                        var11 = var10.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var10
                            }
                        });
                        var13 = var11;
                        var10 = new var13[var10](var12);
                        var10 = var10 instanceof Object ? var10 : var11;
                        var7.receivedAt = var10;
                        var7.invites = var6;
                        var7 = var8.bind(var9)(var7);
                        return var6;
                    case 335:
                        return var5;
                    case 338:
                        var6 = _closure1_slot36;
                        var5 = null;
                        if (!(var5 == var6)) {
                            _fun51816_ip = 399;
                            continue _fun51816
                        }
                    case 348:
                        var6 = var2.Promise;
                        var5 = var6.reject;
                        var8 = var2.Error;
                        var2 = var8.prototype;
                        var7 = Object.create(var2, {
                            constructor: {
                                value: var8
                            }
                        });
                        var12 = 'Invalid friend invite fetch request';
                        var13 = var7;
                        var2 = new var13[var8](var12, var11);
                        var2 = var2 instanceof Object ? var2 : var7;
                        var2 = var5.bind(var6)(var2);
                        _fun51816_ip = 418;
                        continue _fun51816;
                    case 399:
                        var5 = _closure1_slot36;
                        var4 = var5.then;
                        var3 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var0 = var0.body;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var3);
                    case 418:
                        return var2;
                    case 421:
                        return var1;
                    case 424:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.getAllFriendInvites = var9;
    var9 = function arg0, arg1() {
        _fun51820: for (var _fun51820_ip = 0;;) switch (_fun51820_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot1;
                var6 = _closure1_slot3;
                var1 = 36;
                var1 = var6[var1];
                var3 = undefined;
                var7 = var2.bind(var3)(var1);
                var2 = var7.dispatch;
                var1 = {};
                var8 = 'FRIEND_INVITE_CREATE_REQUEST';
                var1.type = var8;
                var1 = var2.bind(var7)(var1);
                var2 = _closure1_slot0;
                var1 = 41;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var3 = var1.HTTP;
                var2 = var3.post;
                var1 = {};
                var5 = _closure1_slot21;
                var5 = var5.FRIEND_INVITES;
                var1.url = var5;
                var5 = null;
                if (!(var5 == var4)) {
                    _fun51820_ip = 103;
                    continue _fun51820
                }
            case 101:
                var4 = {};
            case 103:
                var1.body = var4;
                var4 = {};
                var5 = arg1;
                var4.location = var5;
                var1.context = var4;
                var4 = false;
                var1.rejectWithError = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.body;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'FRIEND_INVITE_CREATE_SUCCESS';
                    var1.type = var4;
                    var1.invite = var0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 36;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'FRIEND_INVITE_CREATE_FAILURE';
                    var1.type = var4;
                    var1.error = var0;
                    var1 = var2.bind(var3)(var1);
                    throw var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var5.createFriendInvite = var9;
    var9 = function() {
        var1 = _closure1_slot1;
        var4 = _closure1_slot3;
        var0 = 36;
        var0 = var4[var0];
        var2 = undefined;
        var5 = var1.bind(var2)(var0);
        var1 = var5.dispatch;
        var0 = {};
        var6 = 'FRIEND_INVITE_REVOKE_REQUEST';
        var0.type = var6;
        var0 = var1.bind(var5)(var0);
        var1 = _closure1_slot0;
        var0 = 41;
        var0 = var4[var0];
        var0 = var1.bind(var2)(var0);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var3 = _closure1_slot21;
        var3 = var3.FRIEND_INVITES;
        var0.url = var3;
        var3 = {};
        var4 = global;
        var4 = var4.location;
        var3.location = var4;
        var0.context = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var4 = var0.body;
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 36;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'FRIEND_INVITE_REVOKE_SUCCESS';
            var1.type = var5;
            var1.invites = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var5.revokeFriendInvites = var9;
    var9 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 41;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {};
        var5 = _closure1_slot21;
        var4 = var5.INVITE;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var5.revokeFriendInvite = var9;
    var9 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot4;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun51828: for (var _fun51828_ip = 0;;) switch (_fun51828_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun51828_ip = 277;
                            continue _fun51828
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var1 = 44;
                        var1 = var10[var1];
                        var4 = undefined;
                        var5 = var3.bind(var4)(var1);
                        var3 = var5.get;
                        var1 = {};
                        var9 = _closure1_slot21;
                        var8 = var9.INVITE_FRIEND_MEMBERS;
                        var7 = _closure2_slot0;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = {};
                        var9 = _closure1_slot0;
                        var8 = 45;
                        var8 = var10[var8];
                        var8 = var9.bind(var4)(var8);
                        var8 = var8.NetworkActionNames;
                        var8 = var8.INVITE_FRIEND_MEMBERS_FETCH;
                        var7.event = var8;
                        var8 = function arg0() {
                            _fun51829: for (var _fun51829_ip = 0;;) switch (_fun51829_ip) {
                                case 0:
                                    var5 = arg0;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var0 = 46;
                                    var0 = var2[var0];
                                    var7 = undefined;
                                    var2 = var1.bind(var7)(var0);
                                    var1 = var2.exact;
                                    var0 = {};
                                    var3 = _closure2_slot0;
                                    var0.code = var3;
                                    var3 = null;
                                    var6 = var3 == var5;
                                    var4 = undefined;
                                    if (var6) {
                                        _fun51829_ip = 92;
                                        continue _fun51829
                                    }
                                case 58:
                                    var5 = var5.body;
                                    var6 = var3 == var5;
                                    var4 = undefined;
                                    if (var6) {
                                        _fun51829_ip = 92;
                                        continue _fun51829
                                    }
                                case 72:
                                    var5 = var5.friend_member_ids;
                                    var6 = var3 == var5;
                                    var4 = undefined;
                                    if (var6) {
                                        _fun51829_ip = 92;
                                        continue _fun51829
                                    }
                                case 87:
                                    var4 = var5.length;
                                case 92:
                                    var5 = var3 != var4;
                                    var3 = 0;
                                    if (!var5) {
                                        _fun51829_ip = 104;
                                        continue _fun51829
                                    }
                                case 101:
                                    var3 = var4;
                                case 104:
                                    var0.friend_count = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var7.properties = var8;
                        var1.trackedActionData = var7;
                        var7 = true;
                        var1.rejectWithError = var7;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 135);
                    case 133:
                        return var1;
                    case 135:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun51828_ip = 209;
                            continue _fun51828
                        }
                    case 141:
                        var5 = var1.body;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var2 = 36;
                        var2 = var7[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'INVITE_FRIEND_MEMBERS_FETCH_SUCCESS';
                        var2.type = var7;
                        var6 = _closure2_slot0;
                        var2.code = var6;
                        var5 = var5.friend_member_ids;
                        var2.friendMemberIds = var5;
                        var2 = var3.bind(var4)(var2);
                    case 207: // try_end0
                        _fun51828_ip = 272;
                        continue _fun51828;
                    case 209:
                        return var1;
                    case 212: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 36;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'INVITE_FRIEND_MEMBERS_FETCH_FAILURE';
                        var1.type = var4;
                        var4 = _closure2_slot0;
                        var1.code = var4;
                        var1 = var2.bind(var3)(var1);
                    case 272:
                        var1 = undefined;
                        return var1;
                    case 277:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.fetchFriendMembers = var9;
    var9 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 36;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'INSTANT_INVITE_CLEAR';
        var1.type = var4;
        var4 = arg0;
        var1.channelId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var5.clearInviteFromStore = var9;
    var9 = function arg0() {
        var6 = arg0;
        var10 = var6.code;
        var _closure2_slot0 = var10;
        var1 = var6.channel;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot1;
        var9 = _closure1_slot3;
        var1 = 44;
        var1 = var9[var1];
        var8 = undefined;
        var3 = var2.bind(var8)(var1);
        var2 = var3.delete;
        var1 = {};
        var7 = _closure1_slot21;
        var4 = var7.INVITE;
        var4 = var4.bind(var7)(var10);
        var1.url = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = {};
        var7 = _closure1_slot0;
        var5 = 45;
        var5 = var9[var5];
        var5 = var7.bind(var8)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.INVITE_REVOKE;
        var4.event = var5;
        var5 = {};
        var7 = var6.uses;
        var5.uses = var7;
        var7 = var6.maxUses;
        var5.max_uses = var7;
        var7 = var6.maxAge;
        var5.max_age = var7;
        var6 = var6.type;
        var5.invite_type = var6;
        var4.properties = var5;
        var1.trackedActionData = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 36;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'INSTANT_INVITE_REVOKE_SUCCESS';
            var1.type = var4;
            var5 = _closure2_slot0;
            var1.code = var5;
            var4 = _closure2_slot1;
            var4 = var4.id;
            var1.channelId = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var5.revokeInvite = var9;
    var9 = function arg0() {
        _fun51833: for (var _fun51833_ip = 0;;) switch (_fun51833_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.inviteKey;
                var11 = var0.context;
                var2 = var0.callback;
                var _closure2_slot0 = var2;
                var0 = var0.skipOnboarding;
                var _closure2_slot1 = var0;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 47;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var5.bind(var3)(var0);
                var0 = var5.parseExtraDataFromInviteKey;
                var0 = var0.bind(var5)(var6);
                var _closure2_slot2 = var0;
                var10 = var0.baseCode;
                var _closure2_slot3 = var10;
                var6 = _closure1_slot12;
                var5 = var6.getSessionId;
                var7 = var5.bind(var6)();
                var6 = {};
                var12 = var6;
                var4 = copyDataProperties(var12, var11);
                var4 = var0.guildScheduledEventId;
                var0 = 'invite_guild_scheduled_event_id';
                var6[var0] = var4;
                var4 = _closure1_slot20;
                var0 = var4.getCurrentUser;
                var9 = var0.bind(var4)();
                var4 = null;
                var5 = var4 == var9;
                var0 = undefined;
                if (var5) {
                    _fun51833_ip = 171;
                    continue _fun51833
                }
            case 150:
                var8 = var9.hasFlag;
                var5 = _closure1_slot28;
                var5 = var5.QUARANTINED;
                var0 = var8.bind(var9)(var5);
            case 171:
                if (!(var4 != var0)) {
                    _fun51833_ip = 181;
                    continue _fun51833
                }
            case 175:
                if (var0) {
                    _fun51833_ip = 333;
                    continue _fun51833
                }
            case 181:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 36;
                var0 = var5[var0];
                var8 = var4.bind(var3)(var0);
                var4 = var8.dispatch;
                var0 = {};
                var9 = 'INVITE_ACCEPT';
                var0.type = var9;
                var0.code = var10;
                var0 = var4.bind(var8)(var0);
                var4 = _closure1_slot0;
                var0 = 41;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var5 = var0.HTTP;
                var4 = var5.post;
                var0 = {};
                var9 = _closure1_slot21;
                var8 = var9.INVITE;
                var8 = var8.bind(var9)(var10);
                var0.url = var8;
                var0.context = var6;
                var6 = true;
                var0.oldFormErrors = var6;
                var6 = {};
                var6.session_id = var7;
                var0.body = var6;
                var6 = false;
                var0.rejectWithError = var6;
                var6 = var4.bind(var5)(var0);
                var5 = var6.then;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot4;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun51837: for (var _fun51837_ip = 0;;) switch (_fun51837_ip) {
                                case 0:
                                    StartGenerator();
                                    var1 = arg0;
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun51837_ip = 312;
                                        continue _fun51837
                                    }
                                case 13:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot3;
                                    var2 = 36;
                                    var2 = var4[var2];
                                    var4 = undefined;
                                    var7 = var3.bind(var4)(var2);
                                    var6 = var7.dispatch;
                                    var3 = {};
                                    var2 = 'INVITE_ACCEPT_SUCCESS';
                                    var3.type = var2;
                                    var2 = var1.body;
                                    var3.invite = var2;
                                    var8 = _closure2_slot3;
                                    var3.code = var8;
                                    var3 = var6.bind(var7)(var3);
                                    var7 = _closure1_slot6;
                                    var6 = var7.getGuildScheduledEvent;
                                    var3 = _closure2_slot2;
                                    var3 = var3.guildScheduledEventId;
                                    var7 = var6.bind(var7)(var3);
                                    var3 = {};
                                    var11 = var1.body;
                                    var12 = var3;
                                    var6 = copyDataProperties(var12, var11);
                                    var6 = 'guild_scheduled_event';
                                    var3[var6] = var7;
                                    var6 = null;
                                    var7 = var6 == var3;
                                    var9 = undefined;
                                    if (var7) {
                                        _fun51837_ip = 143;
                                        continue _fun51837
                                    }
                                case 138:
                                    var9 = var3.guild_id;
                                case 143:
                                    if (!(var6 == var9)) {
                                        _fun51837_ip = 178;
                                        continue _fun51837
                                    }
                                case 147:
                                    var8 = var6 == var3;
                                    var7 = undefined;
                                    if (var8) {
                                        _fun51837_ip = 175;
                                        continue _fun51837
                                    }
                                case 156:
                                    var8 = var3.guild;
                                    var10 = var6 == var8;
                                    var7 = undefined;
                                    if (var10) {
                                        _fun51837_ip = 175;
                                        continue _fun51837
                                    }
                                case 170:
                                    var7 = var8.id;
                                case 175:
                                    var9 = var7;
                                case 178:
                                    var7 = _closure2_slot1;
                                    if (var7) {
                                        _fun51837_ip = 287;
                                        continue _fun51837
                                    }
                                case 185:
                                    if (!(var6 != var9)) {
                                        _fun51837_ip = 287;
                                        continue _fun51837
                                    }
                                case 189:
                                    var7 = var3.new_member;
                                    if (!var7) {
                                        _fun51837_ip = 287;
                                        continue _fun51837
                                    }
                                case 198:
                                    var7 = var3.show_verification_form;
                                    if (var7) {
                                        _fun51837_ip = 287;
                                        continue _fun51837
                                    }
                                case 207:
                                    var8 = _closure1_slot0;
                                    var5 = _closure1_slot3;
                                    var7 = 25;
                                    var7 = var5[var7];
                                    var8 = var8.bind(var4)(var7);
                                    var7 = 49;
                                    var7 = var5[var7];
                                    var5 = var5.paths;
                                    var5 = var8.bind(var4)(var7, var5);
                                    SaveGenerator(address = 249);
                                case 247:
                                    return var5;
                                case 249:
                                    ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun51837_ip = 284;
                                        continue _fun51837
                                    }
                                case 255:
                                    var8 = var5.default;
                                    var7 = {};
                                    var7.guildId = var9;
                                    var7 = var8.bind(var4)(var7);
                                    SaveGenerator(address = 275);
                                case 273:
                                    return var7;
                                case 275:
                                    ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                                    if (!var8) {
                                        _fun51837_ip = 287;
                                        continue _fun51837
                                    }
                                case 281:
                                    return var7;
                                case 284:
                                    return var5;
                                case 287:
                                    var5 = _closure2_slot0;
                                    if (!(var6 != var5)) {
                                        _fun51837_ip = 304;
                                        continue _fun51837
                                    }
                                case 295:
                                    var2 = _closure2_slot0;
                                    var2 = var2.bind(var4)(var3);
                                case 304:
                                    var1 = var1.body;
                                    return var1;
                                case 312:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var3.bind(var2)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    return var0;
                };
                var4 = var0.bind(var3)();
                var0 = function(arg0) { // Environment: var1
                    _fun51839: for (var _fun51839_ip = 0;;) switch (_fun51839_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = var2.body;
                            var7 = null;
                            var1 = var7 == var0;
                            var3 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun51839_ip = 26;
                                continue _fun51839
                            }
                        case 21:
                            var4 = var0.code;
                        case 26:
                            var1 = _closure1_slot30;
                            var1 = var1.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED;
                            if (!(var4 === var1)) {
                                _fun51839_ip = 84;
                                continue _fun51839
                            }
                        case 43:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var1 = 50;
                            var1 = var5[var1];
                            var5 = var4.bind(var3)(var1);
                            var4 = var5.openAgeGateModal;
                            var1 = _closure1_slot31;
                            var1 = var1.JOIN_LARGE_GUILD_UNDERAGE;
                            var1 = var4.bind(var5)(var1);
                        case 84:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 36;
                            var1 = var5[var1];
                            var5 = var4.bind(var3)(var1);
                            var4 = var5.dispatch;
                            var1 = {};
                            var6 = 'INVITE_ACCEPT_FAILURE';
                            var1.type = var6;
                            var6 = _closure2_slot3;
                            var1.code = var6;
                            var6 = {};
                            var9 = var2.body;
                            var10 = var7 == var9;
                            var8 = undefined;
                            if (var10) {
                                _fun51839_ip = 153;
                                continue _fun51839
                            }
                        case 148:
                            var8 = var9.message;
                        case 153:
                            var6.message = var8;
                            var8 = var2.body;
                            var9 = var7 == var8;
                            var7 = undefined;
                            if (var9) {
                                _fun51839_ip = 176;
                                continue _fun51839
                            }
                        case 171:
                            var7 = var8.code;
                        case 176:
                            var6.code = var7;
                            var1.error = var6;
                            var1 = var4.bind(var5)(var1);
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var0 = 51;
                            var0 = var4[var0];
                            var0 = var1.bind(var3)(var0);
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var12 = var1;
                            var11 = var2;
                            var0 = new var12[var0](var11, var10);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var0 = var5.bind(var6)(var4, var0);
                _fun51833_ip = 390;
                continue _fun51833;
            case 333:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 48;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = function(arg0, arg1) { // Environment: var1
                    var0 = global;
                    var0 = var0.Error;
                    var1 = var0.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var0
                        }
                    });
                    var4 = var1;
                    var0 = new var4[var0](var3);
                    var2 = var0 instanceof Object ? var0 : var1;
                    var1 = arg1;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                    return var0;
                };
                var13 = var2;
                var1 = new var13[var3](var12, var11);
                var0 = var1 instanceof Object ? var1 : var2;
            case 390:
                return var0;
        }
    };
    var5.acceptInvite = var9;
    var9 = function arg0() {
        var0 = arg0;
        var2 = this;
        var6 = var0.inviteKey;
        var5 = var0.context;
        var1 = var0.analyticsLocations;
        var _closure2_slot0 = var1;
        var1 = var0.callback;
        var _closure2_slot1 = var1;
        var4 = var0.skipOnboarding;
        var1 = var2.acceptInvite;
        var0 = {};
        var0.inviteKey = var6;
        var0.context = var5;
        var0.skipOnboarding = var4;
        var3 = function arg0() {
            _fun51841: for (var _fun51841_ip = 0;;) switch (_fun51841_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2.channel;
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun51841_ip = 70;
                        continue _fun51841
                    }
                case 14:
                    var1 = _closure1_slot38;
                    var6 = undefined;
                    var5 = var1.bind(var6)(var2);
                    var4 = _closure1_slot37;
                    var0 = var2.channel;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    if (!(var3 == var0)) {
                        _fun51841_ip = 59;
                        continue _fun51841
                    }
                case 53:
                    var0 = new Array(0);
                    _fun51841_ip = 63;
                    continue _fun51841;
                case 59:
                    var0 = _closure2_slot0;
                case 63:
                    var0 = var4.bind(var6)(var1, var5, var0);
                case 70:
                    var1 = _closure2_slot1;
                    if (!(var3 != var1)) {
                        _fun51841_ip = 92;
                        continue _fun51841
                    }
                case 81:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var2);
                case 92:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.callback = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var5.acceptInviteAndTransitionToInviteChannel = var9;
    var9 = function arg0, arg1, arg2() {
        _fun51842: for (var _fun51842_ip = 0;;) switch (_fun51842_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = arg2;
                var6 = var2.channel;
                var8 = var2.guild;
                var9 = null;
                if (!(var9 != var8)) {
                    _fun51842_ip = 64;
                    continue _fun51842
                }
            case 25:
                var7 = var8.features;
                if (!(var9 != var7)) {
                    _fun51842_ip = 64;
                    continue _fun51842
                }
            case 35:
                var5 = var7.includes;
                var4 = _closure1_slot26;
                var4 = var4.HUB;
                var4 = var5.bind(var7)(var4);
                if (var4) {
                    _fun51842_ip = 308;
                    continue _fun51842
                }
            case 64:
                var10 = _closure1_slot0;
                var5 = _closure1_slot3;
                var4 = 19;
                var5 = var5[var4];
                var4 = undefined;
                var12 = var10.bind(var4)(var5);
                var11 = var12.hasFlag;
                var5 = var2.flags;
                var13 = var9 != var5;
                var10 = 0;
                if (!var13) {
                    _fun51842_ip = 112;
                    continue _fun51842
                }
            case 109:
                var10 = var5;
            case 112:
                var13 = _closure1_slot0;
                var14 = _closure1_slot3;
                var5 = 20;
                var5 = var14[var5];
                var5 = var13.bind(var4)(var5);
                var5 = var5.GuildInviteFlags;
                var5 = var5.IS_APPLICATION_BYPASS;
                var5 = var11.bind(var12)(var10, var5);
                if (!(var9 != var8)) {
                    _fun51842_ip = 235;
                    continue _fun51842
                }
            case 154:
                if (var5) {
                    _fun51842_ip = 235;
                    continue _fun51842
                }
            case 157:
                var5 = var2.new_member;
                if (!var5) {
                    _fun51842_ip = 235;
                    continue _fun51842
                }
            case 166:
                var10 = _closure1_slot0;
                var5 = _closure1_slot3;
                var11 = 53;
                var5 = var5[var11];
                var10 = var10.bind(var4)(var5);
                var5 = var10.inviteGuildHasPendingMemberDisabledVerification;
                var5 = var5.bind(var10)(var8);
                if (!var5) {
                    _fun51842_ip = 235;
                    continue _fun51842
                }
            case 200:
                var10 = _closure1_slot0;
                var5 = _closure1_slot3;
                var5 = var5[var11];
                var11 = var10.bind(var4)(var5);
                var10 = var11.openVerificationModalOrTransitionToApplication;
                var5 = var8.id;
                var5 = var10.bind(var11)(var5);
                _fun51842_ip = 341;
                continue _fun51842;
            case 235:
                if (!(var9 != var6)) {
                    _fun51842_ip = 341;
                    continue _fun51842
                }
            case 239:
                var5 = _closure1_slot38;
                var5 = var5.bind(var4)(var2);
                if (!(var9 != var3)) {
                    _fun51842_ip = 258;
                    continue _fun51842
                }
            case 252:
                var5.transitionTo = var3;
            case 258:
                if (!(var9 != var1)) {
                    _fun51842_ip = 268;
                    continue _fun51842
                }
            case 262:
                var5.muteOnJoinVoiceChannel = var1;
            case 268:
                var3 = _closure1_slot39;
                var1 = {};
                if (!(var9 == var8)) {
                    _fun51842_ip = 284;
                    continue _fun51842
                }
            case 278:
                var7 = _closure1_slot24;
                _fun51842_ip = 289;
                continue _fun51842;
            case 284:
                var7 = var8.id;
            case 289:
                var1.guildId = var7;
                var1.channel = var6;
                var1.options = var5;
                var1 = var3.bind(var4)(var1);
                _fun51842_ip = 341;
                continue _fun51842;
            case 308:
                var3 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 52;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.onOpenHubInvite;
                var0 = var0.bind(var1)(var2);
            case 341:
                var0 = undefined;
                return var0;
        }
    };
    var5.transitionToInvite = var9;
    var9 = function arg0, arg1, arg2() {
        _fun51843: for (var _fun51843_ip = 0;;) switch (_fun51843_ip) {
            case 0:
                var0 = arg0;
                var3 = this;
                var2 = var0.channel;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun51843_ip = 97;
                    continue _fun51843
                }
            case 17:
                var2 = _closure1_slot38;
                var1 = undefined;
                var6 = var2.bind(var1)(var0);
                var2 = var3.transitionToInviteChannelSync;
                var0 = var0.channel;
                var1 = var0.id;
                var0 = {};
                var7 = var0;
                var4 = copyDataProperties(var7, var6);
                var5 = arg2;
                var4 = 'intent';
                var0[var4] = var5;
                var5 = arg1;
                var4 = 'transitionTo';
                var0[var4] = var5;
                var5 = true;
                var4 = 'forceTransition';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
            case 97:
                var0 = undefined;
                return var0;
        }
    };
    var5.transitionToInviteSync = var9;
    var9 = function arg0() {
        var5 = {};
        var3 = _closure1_slot0;
        var4 = _closure1_slot3;
        var0 = 54;
        var2 = var4[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = var2.InviteAppLaunchedContextExperiment;
        var2 = var2.definition;
        var3 = var2.id;
        var2 = new Array(1);
        var2[0] = var3;
        var5.experiments = var2;
        var3 = _closure1_slot1;
        var2 = 55;
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.openNativeAppModal;
        var1 = _closure1_slot25;
        var2 = var1.INVITE_BROWSER;
        var1 = arg0;
        var1 = var3.bind(var4)(var1, var2, var5);
        return var0;
    };
    var5.openNativeAppModal = var9;
    var9 = function arg0, arg1, arg2, arg3, arg4() {
        _fun51845: for (var _fun51845_ip = 0;;) switch (_fun51845_ip) {
            case 0:
                var4 = arg0;
                var7 = arg1;
                var15 = arg2;
                var _closure2_slot0 = var4;
                var9 = null;
                var0 = var9 != var4;
                var10 = null;
                if (!var0) {
                    _fun51845_ip = 62;
                    continue _fun51845
                }
            case 26:
                var3 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 47;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.parseExtraDataFromInviteKey;
                var10 = var0.bind(var1)(var4);
            case 62:
                var1 = var9 == var10;
                var0 = undefined;
                var11 = undefined;
                if (var1) {
                    _fun51845_ip = 79;
                    continue _fun51845
                }
            case 73:
                var11 = var10.baseCode;
            case 79:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var3 = 36;
                var8 = var5[var3];
                var13 = var6.bind(var0)(var8);
                var12 = var13.dispatch;
                var8 = {};
                var14 = 'INVITE_APP_OPENING';
                var8.type = var14;
                var8.code = var4;
                var8 = var12.bind(var13)(var8);
                var8 = 56;
                var5 = var5[var8];
                var5 = var6.bind(var0)(var5);
                var5 = var5.ua;
                if (!(var9 != var5)) {
                    _fun51845_ip = 213;
                    continue _fun51845
                }
            case 150:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var8];
                var5 = var6.bind(var0)(var5);
                var6 = var5.ua;
                var5 = var6.toLowerCase;
                var12 = var5.bind(var6)();
                var6 = var12.indexOf;
                var5 = 'googlebot';
                var6 = var6.bind(var12)(var5);
                var5 = -1;
                if (!(!(var6 > var5))) {
                    _fun51845_ip = 738;
                    continue _fun51845
                }
            case 213:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var8];
                var5 = var6.bind(var0)(var5);
                var5 = var5.os;
                var12 = var9 == var5;
                var6 = undefined;
                if (var12) {
                    _fun51845_ip = 251;
                    continue _fun51845
                }
            case 245:
                var6 = var5.family;
            case 251:
                var5 = 'Android';
                if (!(var5 !== var6)) {
                    _fun51845_ip = 397;
                    continue _fun51845
                }
            case 264:
                var6 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var8];
                var5 = var6.bind(var0)(var5);
                var5 = var5.os;
                var8 = var9 == var5;
                var6 = undefined;
                if (var8) {
                    _fun51845_ip = 302;
                    continue _fun51845
                }
            case 296:
                var6 = var5.family;
            case 302:
                var5 = 'iOS';
                if (!(var5 !== var6)) {
                    _fun51845_ip = 397;
                    continue _fun51845
                }
            case 312:
                var5 = var9 != var7;
                var8 = '';
                if (!var5) {
                    _fun51845_ip = 338;
                    continue _fun51845
                }
            case 323:
                var6 = _closure1_slot23;
                var5 = var6.INVITE_PROXY;
                var8 = var5.bind(var6)(var7);
            case 338:
                var5 = 0;
                var6 = var8[var5];
                var5 = '#';
                var7 = var8;
                if (!(var5 === var6)) {
                    _fun51845_ip = 368;
                    continue _fun51845
                }
            case 355:
                var6 = var8.slice;
                var5 = 1;
                var7 = var6.bind(var8)(var5);
            case 368:
                var5 = global;
                var5 = var5.HermesInternal;
                var6 = var5.concat;
                var5 = 'discord://';
                var7 = var6.bind(var5)(var7);
                _fun51845_ip = 699;
                continue _fun51845;
            case 397:
                if (!(var9 == var11)) {
                    _fun51845_ip = 433;
                    continue _fun51845
                }
            case 401:
                var6 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 57;
                var5 = var8[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getDefaultDynamicLinkTemplate;
                var8 = var5.bind(var6)();
                _fun51845_ip = 464;
                continue _fun51845;
            case 433:
                var6 = _closure1_slot0;
                var12 = _closure1_slot3;
                var5 = 57;
                var5 = var12[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.getInviteDynamicLinkTemplate;
                var8 = var5.bind(var6)(var11);
            case 464:
                var12 = _closure1_slot0;
                var13 = _closure1_slot3;
                var5 = 58;
                var6 = var13[var5];
                var12 = var12.bind(var0)(var6);
                var6 = var12.generateAttemptId;
                var12 = var6.bind(var12)();
                var6 = _closure1_slot1;
                var5 = var13[var5];
                var6 = var6.bind(var0)(var5);
                var5 = {};
                var13 = 'friend_invite';
                var16 = 2;
                var14 = arg4;
                if (!(var16 !== var14)) {
                    _fun51845_ip = 529;
                    continue _fun51845
                }
            case 525:
                var13 = 'invite';
            case 529:
                var5.utmSource = var13;
                var5.fingerprint = var15;
                var13 = arg3;
                var5.username = var13;
                var5.attemptId = var12;
                var13 = var9 == var10;
                var9 = undefined;
                if (var13) {
                    _fun51845_ip = 566;
                    continue _fun51845
                }
            case 560:
                var9 = var10.guildScheduledEventId;
            case 566:
                var5.event = var9;
                var9 = global;
                var9 = var9.HermesInternal;
                var10 = var9.concat;
                var9 = 'https://discord.com/api/download/mobile?invite_code=';
                var9 = var10.bind(var9)(var11);
                var5.iosFallbackLink = var9;
                var7 = var6.bind(var0)(var8, var5);
                var8 = _closure1_slot1;
                var16 = _closure1_slot3;
                var6 = 40;
                var6 = var16[var6];
                var10 = var8.bind(var0)(var6);
                var9 = var10.track;
                var6 = _closure1_slot27;
                var8 = var6.DEEP_LINK_CLICKED;
                var6 = {};
                var14 = _closure1_slot0;
                var13 = 59;
                var13 = var16[var13];
                var14 = var14.bind(var0)(var13);
                var13 = var14.maybeExtractId;
                var13 = var13.bind(var14)(var15);
                var6.fingerprint = var13;
                var6.attempt_id = var12;
                var12 = 'invite';
                var6.source = var12;
                var6.invite_code = var11;
                var6 = var9.bind(var10)(var8, var6);
            case 699:
                var6 = _closure1_slot1;
                var8 = _closure1_slot3;
                var5 = 60;
                var5 = var8[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.launch;
                var2 = function(arg0) { // Environment: var2
                    _fun51846: for (var _fun51846_ip = 0;;) switch (_fun51846_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 36;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var4 = {};
                            var1 = arg0;
                            if (var1) {
                                _fun51846_ip = 64;
                                continue _fun51846
                            }
                        case 38:
                            var1 = 'INVITE_APP_NOT_OPENED';
                            var4.type = var1;
                            var1 = _closure2_slot0;
                            var4.code = var1;
                            var1 = var4;
                            _fun51846_ip = 86;
                            continue _fun51846;
                        case 64:
                            var5 = 'INVITE_APP_OPENED';
                            var4.type = var5;
                            var5 = _closure2_slot0;
                            var4.code = var5;
                            var1 = var4;
                        case 86:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var2 = var5.bind(var6)(var7, var2);
                _fun51845_ip = 781;
                continue _fun51845;
            case 738:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'INVITE_APP_NOT_OPENED';
                var1.type = var5;
                var1.code = var4;
                var1 = var2.bind(var3)(var1);
            case 781:
                return var0;
        }
    };
    var5.openApp = var9;
    var5.transitionToInviteChannelSync = var6;
    var5.trackInviteServerClicked = var1;
    var6 = 61;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'actions/InstantInviteActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.transitionToGuildFromEventInvite = var4;
    var3 = function arg0, arg1() {
        _fun51847: for (var _fun51847_ip = 0;;) switch (_fun51847_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var5 = var0.invite;
                var7 = var0.action;
                var9 = var0.inviter_id;
                var8 = var0.invite_message_id;
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 40;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot27;
                var2 = var1.INVITE_EMBED_ACTIONED;
                var1 = {};
                var1.action = var7;
                var7 = var5.code;
                var1.invite_code = var7;
                var11 = var5.type;
                var5 = null;
                var10 = var5 == var11;
                var7 = undefined;
                if (var10) {
                    _fun51847_ip = 110;
                    continue _fun51847
                }
            case 101:
                var10 = var11.toString;
                var7 = var10.bind(var11)();
            case 110:
                var1.invite_type = var7;
                var10 = var5 != var9;
                var7 = null;
                if (!var10) {
                    _fun51847_ip = 127;
                    continue _fun51847
                }
            case 124:
                var7 = var9;
            case 127:
                var1.inviter_id = var7;
                var9 = var5 != var8;
                var7 = null;
                if (!var9) {
                    _fun51847_ip = 144;
                    continue _fun51847
                }
            case 141:
                var7 = var8;
            case 144:
                var1.invite_message_id = var7;
                var7 = var5 != var6;
                var5 = null;
                if (!var7) {
                    _fun51847_ip = 161;
                    continue _fun51847
                }
            case 158:
                var5 = var6;
            case 161:
                var1.location_stack = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackInviteEmbedActioned = var3;
    var2.trackInviteServerClicked = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3472, 3334, 1376, 1216, 1372, 1671, 1681, 1410, 5903, 3091, 3213, 1621, 660, 1219, 1379, 3506, 3335, 4235, 1384, 5914, 4580, 1232, 1220, 4231, 1307, 5915, 8230, 3633, 8035, 12140, 4547, 4826, 7465, 6844, 8207, 806, 12141, 4551, 4679, 795, 507, 3352, 667, 4525, 481, 1385, 3324, 4680, 4683, 4556, 3351, 12142, 12143, 12144, 6888, 3442, 12145, 12146, 490, 12148, 2]);