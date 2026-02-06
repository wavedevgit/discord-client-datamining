// modules/instant_invite/native/InstantInviteUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var8[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.InviteTargetTypes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.IOS_COPY_TO_PASTEBOARD;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot13 = var4;
    var4 = var3.InviteOptionsType;
    var _closure1_slot14 = var4;
    var3 = var3.Permissions;
    var _closure1_slot15 = var3;
    var5 = function arg0, arg1() {
        _fun67336: for (var _fun67336_ip = 0;;) switch (_fun67336_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var9 = {
                    'isActionSheet': true,
                    'location': 'IOS Instant Invite Action Sheet Mount'
                };
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var7 = 11;
                var2 = var0[var7];
                var0 = undefined;
                var10 = var3.bind(var0)(var2);
                var8 = var10.track;
                var2 = _closure1_slot13;
                var6 = var2.OPEN_POPOUT;
                var2 = {};
                var3 = 'Instant Invite';
                var2.type = var3;
                var3 = null;
                var12 = var3 == var4;
                var11 = undefined;
                if (var12) {
                    _fun67336_ip = 88;
                    continue _fun67336
                }
            case 83:
                var11 = var4.source;
            case 88:
                var2.source = var11;
                var2 = var8.bind(var10)(var6, var2);
                var6 = var3 == var4;
                var2 = undefined;
                if (var6) {
                    _fun67336_ip = 113;
                    continue _fun67336
                }
            case 107:
                var2 = var4.stream;
            case 113:
                if (!(var3 == var2)) {
                    _fun67336_ip = 172;
                    continue _fun67336
                }
            case 117:
                var6 = var3 == var4;
                var2 = undefined;
                if (var6) {
                    _fun67336_ip = 132;
                    continue _fun67336
                }
            case 126:
                var2 = var4.targetApplicationId;
            case 132:
                if (!(var3 != var2)) {
                    _fun67336_ip = 365;
                    continue _fun67336
                }
            case 139:
                var2 = _closure1_slot11;
                var2 = var2.EMBEDDED_APPLICATION;
                var9.targetType = var2;
                var2 = var4.targetApplicationId;
                var9.targetApplicationId = var2;
                _fun67336_ip = 365;
                continue _fun67336;
            case 172:
                var10 = var4.stream;
                var2 = _closure1_slot11;
                var2 = var2.STREAM;
                var9.targetType = var2;
                var2 = var10.ownerId;
                var9.targetUserId = var2;
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = 12;
                var6 = var2[var6];
                var11 = var8.bind(var0)(var6);
                var8 = var11.getStreamerApplication;
                var6 = _closure1_slot8;
                var11 = var8.bind(var11)(var10, var6);
                var6 = _closure1_slot1;
                var2 = var2[var7];
                var8 = var6.bind(var0)(var2);
                var7 = var8.track;
                var2 = _closure1_slot13;
                var6 = var2.OPEN_MODAL;
                var2 = {};
                var12 = 'Send Stream Invite';
                var2.type = var12;
                var12 = var9.location;
                var2.location = var12;
                var10 = var10.ownerId;
                var2.other_user_id = var10;
                var12 = var3 == var11;
                var10 = undefined;
                if (var12) {
                    _fun67336_ip = 316;
                    continue _fun67336
                }
            case 311:
                var10 = var11.id;
            case 316:
                var2.application_id = var10;
                var12 = var3 == var11;
                var10 = undefined;
                if (var12) {
                    _fun67336_ip = 335;
                    continue _fun67336
                }
            case 330:
                var10 = var11.name;
            case 335:
                var2.application_name = var10;
                var12 = var3 == var11;
                var10 = undefined;
                if (var12) {
                    _fun67336_ip = 354;
                    continue _fun67336
                }
            case 349:
                var10 = var11.id;
            case 354:
                var2.game_id = var10;
                var2 = var7.bind(var8)(var6, var2);
            case 365:
                var2 = var3 == var4;
                var6 = undefined;
                if (var2) {
                    _fun67336_ip = 380;
                    continue _fun67336
                }
            case 374:
                var6 = var4.createInvite;
            case 380:
                var2 = false;
                var2 = var2 !== var6;
                if (!var2) {
                    _fun67336_ip = 407;
                    continue _fun67336
                }
            case 389:
                var7 = var3 == var4;
                var6 = undefined;
                if (var7) {
                    _fun67336_ip = 403;
                    continue _fun67336
                }
            case 398:
                var6 = var4.code;
            case 403:
                var2 = var3 == var6;
            case 407:
                if (!var2) {
                    _fun67336_ip = 458;
                    continue _fun67336
                }
            case 410:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var8 = var6.bind(var0)(var2);
                var7 = var8.init;
                var2 = var5.getGuildId;
                var6 = var2.bind(var5)();
                var2 = var5.id;
                var2 = var7.bind(var8)(var6, var2, var9);
            case 458:
                var2 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 14;
                var1 = var6[var1];
                var2 = var2.bind(var0)(var1);
                var1 = {};
                var1.channel = var5;
                var6 = var3 == var4;
                var5 = undefined;
                if (var6) {
                    _fun67336_ip = 498;
                    continue _fun67336
                }
            case 493:
                var5 = var4.source;
            case 498:
                var1.source = var5;
                var6 = var3 == var4;
                var5 = undefined;
                if (var6) {
                    _fun67336_ip = 517;
                    continue _fun67336
                }
            case 511:
                var5 = var4.guildScheduledEventId;
            case 517:
                var1.guildScheduledEventId = var5;
                var6 = var3 == var4;
                var5 = undefined;
                if (var6) {
                    _fun67336_ip = 537;
                    continue _fun67336
                }
            case 531:
                var5 = var4.targetApplicationId;
            case 537:
                var1.targetApplicationId = var5;
                var6 = var3 == var4;
                var5 = undefined;
                if (var6) {
                    _fun67336_ip = 556;
                    continue _fun67336
                }
            case 551:
                var5 = var4.code;
            case 556:
                var1.code = var5;
                var1.vanityURLCode = var3;
                var5 = var3 == var4;
                var3 = undefined;
                if (var5) {
                    _fun67336_ip = 580;
                    continue _fun67336
                }
            case 574:
                var3 = var4.stackingBehavior;
            case 580:
                var1.stackingBehavior = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot16 = var5;
    var4 = function arg0, arg1, arg2() {
        var3 = arg2;
        var2 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 11;
        var5 = var4[var0];
        var0 = undefined;
        var7 = var2.bind(var0)(var5);
        var6 = var7.track;
        var1 = _closure1_slot13;
        var5 = var1.OPEN_POPOUT;
        var1 = {};
        var8 = 'Vanity URL Invite';
        var1.type = var8;
        var1.source = var3;
        var1 = var6.bind(var7)(var5, var1);
        var1 = 14;
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = {};
        var4 = arg0;
        var4 = var4.vanityURLCode;
        var1.vanityURLCode = var4;
        var4 = arg1;
        var1.channel = var4;
        var1.source = var3;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot17 = var4;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun67338: for (var _fun67338_ip = 0;;) switch (_fun67338_ip) {
            case 0:
                var11 = arg0;
                var9 = arg1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var12 = 15;
                var1 = var3[var12];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.parseExtraDataFromInviteKey;
                var1 = var1.bind(var2)(var11);
                var4 = _closure1_slot7;
                var2 = var4.getInvite;
                var1 = var1.baseCode;
                var6 = var2.bind(var4)(var1);
                var2 = _closure1_slot1;
                var1 = 11;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot13;
                var2 = var1.INSTANT_INVITE_OPTION_CLICKED;
                var1 = {};
                var7 = arg2;
                var1.invite_type = var7;
                var7 = null;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun67338_ip = 120;
                    continue _fun67338
                }
            case 115:
                var8 = var9.guild_id;
            case 120:
                var1.guild_id = var8;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun67338_ip = 138;
                    continue _fun67338
                }
            case 133:
                var8 = var9.id;
            case 138:
                var1.channel_id = var8;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var10 = var10.bind(var0)(var8);
                var8 = var10.parseInviteCodeFromInviteKey;
                var8 = var8.bind(var10)(var11);
                var1.invite_code = var8;
                var10 = var7 == var9;
                var8 = undefined;
                if (var10) {
                    _fun67338_ip = 189;
                    continue _fun67338
                }
            case 184:
                var8 = var9.type;
            case 189:
                var1.invite_channel_type = var8;
                var8 = _closure1_slot9;
                var5 = var8.getCurrentUser;
                var8 = var5.bind(var8)();
                var9 = var7 == var8;
                var5 = undefined;
                if (var9) {
                    _fun67338_ip = 221;
                    continue _fun67338
                }
            case 216:
                var5 = var8.id;
            case 221:
                var1.invite_inviter_id = var5;
                var5 = arg3;
                var1.location = var5;
                var8 = var7 == var6;
                var5 = undefined;
                if (var8) {
                    _fun67338_ip = 262;
                    continue _fun67338
                }
            case 242:
                var6 = var6.target_application;
                var7 = var7 == var6;
                var5 = undefined;
                if (var7) {
                    _fun67338_ip = 262;
                    continue _fun67338
                }
            case 257:
                var5 = var6.id;
            case 262:
                var1.application_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot18 = var3;
    var6 = 24;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/instant_invite/native/InstantInviteUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function arg0() {
        _fun67339: for (var _fun67339_ip = 0;;) switch (_fun67339_ip) {
            case 0:
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = arg0;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 != var2)) {
                    _fun67339_ip = 37;
                    continue _fun67339
                }
            case 26:
                var1 = _closure1_slot16;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
            case 37:
                var0 = undefined;
                return var0;
        }
    };
    var2.showInstantInviteActionSheetForChannel = var6;
    var2.showInstantInviteActionSheet = var5;
    var2.showVanityUrlInviteActionSheet = var4;
    var2.trackOptionClicked = var3;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        return var0;
    };
    var2.getShareMessage = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        _fun67341: for (var _fun67341_ip = 0;;) switch (_fun67341_ip) {
            case 0:
                var6 = arg0;
                var4 = arg1;
                var5 = arg3;
                var2 = arguments[4];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun67341_ip = 20;
                    continue _fun67341
                }
            case 18:
                var2 = true;
            case 20:
                var12 = null;
                if (!(var12 != var6)) {
                    _fun67341_ip = 381;
                    continue _fun67341
                }
            case 29:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 15;
                var3 = var8[var3];
                var7 = var7.bind(var0)(var3);
                var3 = var7.parseExtraDataFromInviteKey;
                var10 = var3.bind(var7)(var6);
                var9 = _closure1_slot7;
                var7 = var9.getInvite;
                var3 = var10.baseCode;
                var11 = var7.bind(var9)(var3);
                var7 = _closure1_slot1;
                var3 = 11;
                var3 = var8[var3];
                var9 = var7.bind(var0)(var3);
                var8 = var9.track;
                var3 = _closure1_slot13;
                var7 = var3.INSTANT_INVITE_SHARED;
                var3 = {};
                var14 = var12 == var4;
                var13 = undefined;
                if (var14) {
                    _fun67341_ip = 131;
                    continue _fun67341
                }
            case 126:
                var13 = var4.guild_id;
            case 131:
                var3.guild_id = var13;
                var14 = var12 == var4;
                var13 = undefined;
                if (var14) {
                    _fun67341_ip = 149;
                    continue _fun67341
                }
            case 144:
                var13 = var4.id;
            case 149:
                var3.channel_id = var13;
                var13 = var10.baseCode;
                var3.invite_code = var13;
                var14 = var12 == var4;
                var13 = undefined;
                if (var14) {
                    _fun67341_ip = 178;
                    continue _fun67341
                }
            case 173:
                var13 = var4.type;
            case 178:
                var3.invite_channel_type = var13;
                var14 = _closure1_slot9;
                var13 = var14.getCurrentUser;
                var14 = var13.bind(var14)();
                var15 = var12 == var14;
                var13 = undefined;
                if (var15) {
                    _fun67341_ip = 210;
                    continue _fun67341
                }
            case 205:
                var13 = var14.id;
            case 210:
                var3.invite_inviter_id = var13;
                var10 = var10.guildScheduledEventId;
                var3.invite_guild_scheduled_event_id = var10;
                var3.location = var5;
                var13 = var12 == var11;
                var10 = undefined;
                if (var13) {
                    _fun67341_ip = 261;
                    continue _fun67341
                }
            case 241:
                var11 = var11.target_application;
                var12 = var12 == var11;
                var10 = undefined;
                if (var12) {
                    _fun67341_ip = 261;
                    continue _fun67341
                }
            case 256:
                var10 = var11.id;
            case 261:
                var3.application_id = var10;
                var3 = var8.bind(var9)(var7, var3);
                if (!var2) {
                    _fun67341_ip = 304;
                    continue _fun67341
                }
            case 275:
                var3 = _closure1_slot18;
                var2 = _closure1_slot14;
                var17 = var2.SHARE;
                var20 = undefined;
                var19 = var6;
                var18 = var4;
                var16 = var5;
                var2 = var20[var3](var19, var18, var17, var16, var15);
            case 304:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 16;
                var2 = var3[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.hideActionSheet;
                var2 = var2.bind(var4)();
                var2 = _closure1_slot0;
                var1 = 17;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.showShareActionSheet;
                var2 = {};
                var1 = arg2;
                var2.message = var1;
                var1 = function(arg0) { // Environment: var1
                    _fun67342: for (var _fun67342_ip = 0;;) switch (_fun67342_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.includes;
                            var1 = _closure1_slot12;
                            var1 = var2.bind(var3)(var1);
                            if (var1) {
                                _fun67342_ip = 55;
                                continue _fun67342
                            }
                        case 23:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 18;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.presentInviteSent;
                            var0 = var0.bind(var1)();
                        case 55:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var5, var1);
            case 381:
                return var0;
        }
    };
    var2.handleOpenShareSheet = var3;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun67343: for (var _fun67343_ip = 0;;) switch (_fun67343_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var2 = arguments[3];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun67343_ip = 17;
                    continue _fun67343
                }
            case 15:
                var2 = true;
            case 17:
                var11 = null;
                if (!(var11 != var5)) {
                    _fun67343_ip = 332;
                    continue _fun67343
                }
            case 26:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 15;
                var3 = var7[var3];
                var6 = var8.bind(var0)(var3);
                var3 = var6.parseExtraDataFromInviteKey;
                var9 = var3.bind(var6)(var5);
                var6 = _closure1_slot1;
                var3 = 19;
                var3 = var7[var3];
                var3 = var6.bind(var0)(var3);
                var10 = var3.bind(var0)(var5);
                var3 = 20;
                var3 = var7[var3];
                var8 = var8.bind(var0)(var3);
                var3 = var8.copy;
                var3 = var3.bind(var8)(var10);
                var10 = _closure1_slot7;
                var8 = var10.getInvite;
                var3 = var9.baseCode;
                var10 = var8.bind(var10)(var3);
                var3 = 11;
                var3 = var7[var3];
                var8 = var6.bind(var0)(var3);
                var7 = var8.track;
                var3 = _closure1_slot13;
                var6 = var3.COPY_INSTANT_INVITE;
                var3 = {};
                var13 = var11 == var4;
                var12 = undefined;
                if (var13) {
                    _fun67343_ip = 168;
                    continue _fun67343
                }
            case 163:
                var12 = var4.guild_id;
            case 168:
                var3.server = var12;
                var13 = var11 == var4;
                var12 = undefined;
                if (var13) {
                    _fun67343_ip = 187;
                    continue _fun67343
                }
            case 182:
                var12 = var4.id;
            case 187:
                var3.channel = var12;
                var13 = var11 == var4;
                var12 = undefined;
                if (var13) {
                    _fun67343_ip = 205;
                    continue _fun67343
                }
            case 200:
                var12 = var4.type;
            case 205:
                var3.channel_type = var12;
                var12 = arg2;
                var3.location = var12;
                var12 = var9.baseCode;
                var3.code = var12;
                var9 = var9.guildScheduledEventId;
                var3.guild_scheduled_event_id = var9;
                var12 = var11 == var10;
                var9 = undefined;
                if (var12) {
                    _fun67343_ip = 267;
                    continue _fun67343
                }
            case 247:
                var10 = var10.target_application;
                var11 = var11 == var10;
                var9 = undefined;
                if (var11) {
                    _fun67343_ip = 267;
                    continue _fun67343
                }
            case 262:
                var9 = var10.id;
            case 267:
                var3.application_id = var9;
                var3 = var7.bind(var8)(var6, var3);
                if (!var2) {
                    _fun67343_ip = 302;
                    continue _fun67343
                }
            case 281:
                var3 = _closure1_slot18;
                var2 = _closure1_slot14;
                var2 = var2.COPY;
                var2 = var3.bind(var0)(var5, var4, var2);
            case 302:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.presentLinkCopied;
                var1 = var1.bind(var2)();
            case 332:
                return var0;
        }
    };
    var2.handleCopy = var3;
    var3 = function(arg0, arg1, arg2) { // Environment: var1
        _fun67344: for (var _fun67344_ip = 0;;) switch (_fun67344_ip) {
            case 0:
                var2 = arg0;
                var7 = arg2;
                var _closure2_slot0 = var2;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 16;
                var6 = var5[var0];
                var0 = undefined;
                var8 = var4.bind(var0)(var6);
                var6 = var8.hideActionSheet;
                var6 = var6.bind(var8)();
                var6 = _closure1_slot5;
                var3 = var6.getPendingSettings;
                var3 = var3.bind(var6)();
                var _closure2_slot2 = var3;
                var3 = 13;
                var3 = var5[var3];
                var6 = var4.bind(var0)(var3);
                var5 = var6.openSettings;
                var4 = var2.guild_id;
                var3 = var2.id;
                var2 = null;
                var8 = var2 != var7;
                var2 = 'Instant Invite Action Sheet';
                if (!var8) {
                    _fun67344_ip = 118;
                    continue _fun67344
                }
            case 115:
                var2 = var7;
            case 118:
                var9 = function() { // Environment: var1
                    _fun67345: for (var _fun67345_ip = 0;;) switch (_fun67345_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var5 = null;
                            if (!(var5 == var1)) {
                                _fun67345_ip = 83;
                                continue _fun67345
                            }
                        case 13:
                            var4 = _closure1_slot16;
                            var3 = _closure2_slot0;
                            var2 = {};
                            var1 = false;
                            var2.createInvite = var1;
                            var1 = _closure2_slot2;
                            var7 = var5 == var1;
                            var1 = undefined;
                            var6 = undefined;
                            if (var7) {
                                _fun67345_ip = 58;
                                continue _fun67345
                            }
                        case 48:
                            var7 = _closure2_slot2;
                            var6 = var7.targetApplicationId;
                        case 58:
                            var7 = var5 != var6;
                            var5 = undefined;
                            if (!var7) {
                                _fun67345_ip = 70;
                                continue _fun67345
                            }
                        case 67:
                            var5 = var6;
                        case 70:
                            var2.targetApplicationId = var5;
                            var1 = var4.bind(var1)(var3, var2);
                            _fun67345_ip = 93;
                            continue _fun67345;
                        case 83:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var6;
                var12 = var4;
                var11 = var3;
                var10 = var2;
                var1 = var13[var5](var12, var11, var10, var9, var8);
                return var0;
        }
    };
    var2.handlePressSettings = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 21;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.canOpenUrlScheme;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isAppInstalled = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        _fun67347: for (var _fun67347_ip = 0;;) switch (_fun67347_ip) {
            case 0:
                var4 = arg0;
                var3 = arg3;
                var5 = _closure1_slot4;
                var2 = var5.getChannel;
                var0 = arg1;
                var2 = var2.bind(var5)(var0);
                var5 = null;
                if (!(var5 == var2)) {
                    _fun67347_ip = 66;
                    continue _fun67347
                }
            case 32:
                var9 = _closure1_slot6;
                var8 = var9.getDefaultChannel;
                var7 = var4.id;
                var0 = _closure1_slot15;
                var6 = var0.CREATE_INSTANT_INVITE;
                var0 = true;
                var2 = var8.bind(var9)(var7, var0, var6);
            case 66:
                var7 = _closure1_slot1;
                var0 = _closure1_slot2;
                var10 = 22;
                var6 = var0[var10];
                var0 = undefined;
                var7 = var7.bind(var0)(var6);
                var6 = var5 != var2;
                var8 = 'Channel cannot be null';
                var6 = var7.bind(var0)(var6, var8);
                var6 = var4.vanityURLCode;
                if (!(var5 != var6)) {
                    _fun67347_ip = 131;
                    continue _fun67347
                }
            case 114:
                var7 = var4.vanityURLCode;
                var6 = '';
                if (!(var6 === var7)) {
                    _fun67347_ip = 272;
                    continue _fun67347
                }
            case 131:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 23;
                var6 = var9[var6];
                var11 = var7.bind(var0)(var6);
                var9 = var11.getInviteChannelId;
                var7 = var2.id;
                var6 = arg2;
                var9 = var9.bind(var11)(var7, var6);
                if (!(var5 != var9)) {
                    _fun67347_ip = 283;
                    continue _fun67347
                }
            case 175:
                var7 = _closure1_slot4;
                var6 = var7.getChannel;
                var7 = var6.bind(var7)(var9);
                if (!(var5 == var7)) {
                    _fun67347_ip = 227;
                    continue _fun67347
                }
            case 193:
                var13 = _closure1_slot6;
                var12 = var13.getDefaultChannel;
                var11 = var4.id;
                var6 = _closure1_slot15;
                var9 = var6.CREATE_INSTANT_INVITE;
                var6 = true;
                var7 = var12.bind(var13)(var11, var6, var9);
            case 227:
                var9 = _closure1_slot1;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var6 = var9.bind(var0)(var6);
                var5 = var5 != var7;
                var5 = var6.bind(var0)(var5, var8);
                var6 = _closure1_slot16;
                var5 = {};
                var5.source = var3;
                var5 = var6.bind(var0)(var7, var5);
                _fun67347_ip = 283;
                continue _fun67347;
            case 272:
                var1 = _closure1_slot17;
                var1 = var1.bind(var0)(var4, var2, var3);
            case 283:
                return var0;
        }
    };
    var2.handleOpenInviteActionsheet = var3;
    var1 = function() { // Environment: var1
        _fun67348: for (var _fun67348_ip = 0;;) switch (_fun67348_ip) {
            case 0:
                var1 = _closure1_slot10;
                var0 = var1.getDisplayedInviteCode;
                var6 = var0.bind(var1)();
                var1 = _closure1_slot3;
                var0 = var1.getDisplayedGuildTemplateCode;
                var5 = var0.bind(var1)();
                var2 = null;
                var1 = var2 != var6;
                var0 = null;
                if (!var1) {
                    _fun67348_ip = 57;
                    continue _fun67348
                }
            case 42:
                var4 = _closure1_slot7;
                var1 = var4.getInvite;
                var0 = var1.bind(var4)(var6);
            case 57:
                var4 = var2 != var5;
                var1 = null;
                if (!var4) {
                    _fun67348_ip = 81;
                    continue _fun67348
                }
            case 66:
                var4 = _closure1_slot3;
                var3 = var4.getGuildTemplate;
                var1 = var3.bind(var4)(var5);
            case 81:
                var0 = var2 != var0;
                if (var0) {
                    _fun67348_ip = 92;
                    continue _fun67348
                }
            case 88:
                var0 = var2 != var1;
            case 92:
                return var0;
        }
    };
    var2.hasDeferredInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6552, 1372, 8357, 1671, 3325, 3612, 1621, 8365, 3337, 8366, 660, 795, 6566, 8367, 8368, 3326, 3280, 8299, 3149, 6573, 5296, 3622, 44, 8363, 2]);