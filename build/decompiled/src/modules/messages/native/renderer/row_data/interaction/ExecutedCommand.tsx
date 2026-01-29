// modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: getCommandUserAvatar, environment: var1
        _fun56078: for (var _fun56078_ip = 0;;) switch (_fun56078_ip) {
            case 0:
                var9 = arg0;
                var6 = arg1;
                var1 = var9.interaction;
                var0 = null;
                var2 = var0 == var1;
                var5 = undefined;
                var7 = undefined;
                if (var2) {
                    _fun56078_ip = 30;
                    continue _fun56078
                }
            case 25:
                var7 = var1.user;
            case 30:
                var4 = _closure1_slot6;
                var2 = var4.getUser;
                var8 = var0 == var7;
                var1 = undefined;
                if (var8) {
                    _fun56078_ip = 57;
                    continue _fun56078
                }
            case 52:
                var1 = var7.id;
            case 57:
                var8 = var2.bind(var4)(var1);
                if (!(var0 == var8)) {
                    _fun56078_ip = 68;
                    continue _fun56078
                }
            case 66:
                return var5;
            case 68:
                var7 = var6;
                if (!(var0 == var7)) {
                    _fun56078_ip = 99;
                    continue _fun56078
                }
            case 75:
                var4 = _closure1_slot5;
                var2 = var4.getChannel;
                var1 = var9.getChannelId;
                var1 = var1.bind(var9)();
                var7 = var2.bind(var4)(var1);
            case 99:
                var1 = {};
                var1.user = var8;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 7;
                var2 = var9[var2];
                var4 = var4.bind(var5)(var2);
                var2 = var4.getUserAuthor;
                var2 = var2.bind(var4)(var8, var7);
                var2 = var2.guildMemberAvatar;
                var1.guildMemberAvatar = var2;
                var4 = var0 == var6;
                var2 = undefined;
                if (var4) {
                    _fun56078_ip = 167;
                    continue _fun56078
                }
            case 157:
                var4 = var6.getGuildId;
                var2 = var4.bind(var6)();
            case 167:
                var1.guildId = var2;
                var6 = var1.user;
                var8 = var1.guildMemberAvatar;
                var7 = var1.guildId;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.ensureAvatarSource;
                if (!(var0 != var8)) {
                    _fun56078_ip = 221;
                    continue _fun56078
                }
            case 217:
                if (!(var0 == var7)) {
                    _fun56078_ip = 234;
                    continue _fun56078
                }
            case 221:
                var0 = var6.getAvatarSource;
                var0 = var0.bind(var6)(var5);
                _fun56078_ip = 286;
                continue _fun56078;
            case 234:
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var3 = 6;
                var3 = var9[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.getGuildMemberAvatarSource;
                var3 = {};
                var9 = var6.id;
                var3.userId = var9;
                var3.avatar = var8;
                var3.guildId = var7;
                var0 = var4.bind(var5)(var3, var6);
            case 286:
                var0 = var1.bind(var2)(var0);
                var0 = var0.uri;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.processColor;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageTypes;
    var _closure1_slot7 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/interaction/ExecutedCommand.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: createExecutedCommand, environment: var1
        _fun56079: for (var _fun56079_ip = 0;;) switch (_fun56079_ip) {
            case 0:
                var11 = arg0;
                var17 = arg1;
                var10 = arg2;
                var12 = arg4;
                var0 = var11.activityInstance;
                var9 = null;
                var0 = var9 != var0;
                if (!var0) {
                    _fun56079_ip = 39;
                    continue _fun56079
                }
            case 27:
                var2 = var11.activityInstance;
                var1 = undefined;
                var0 = var1 !== var2;
            case 39:
                var1 = var11.interaction;
                if (!(var9 != var1)) {
                    _fun56079_ip = 71;
                    continue _fun56079
                }
            case 49:
                var1 = var11.interaction;
                var2 = var1.displayName;
                var1 = '';
                if (!(var1 === var2)) {
                    _fun56079_ip = 75;
                    continue _fun56079
                }
            case 68:
                if (var0) {
                    _fun56079_ip = 75;
                    continue _fun56079
                }
            case 71:
                var1 = undefined;
                return var1;
            case 75:
                var2 = _closure1_slot8;
                var4 = undefined;
                var6 = var2.bind(var4)(var11, var17);
                var3 = var11.type;
                var2 = _closure1_slot7;
                var2 = var2.CHAT_INPUT_COMMAND;
                var21 = var3 === var2;
                if (var21) {
                    _fun56079_ip = 131;
                    continue _fun56079
                }
            case 112:
                var3 = var11.type;
                var2 = _closure1_slot7;
                var2 = var2.INTERACTION_PREMIUM_UPSELL;
                var21 = var3 === var2;
            case 131:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 8;
                var2 = var7[var2];
                var3 = var5.bind(var4)(var2);
                var2 = var3.isPrimaryEntryPointCommandMessage;
                var16 = var2.bind(var3)(var11);
                var19 = 7;
                var2 = var7[var19];
                var8 = var5.bind(var4)(var2);
                var3 = var8.getUserAuthor;
                var2 = var11.interaction;
                var2 = var2.user;
                var2 = var3.bind(var8)(var2, var17);
                var8 = var2.colorString;
                var2 = var11.interaction;
                var13 = var2.displayName;
                var3 = _closure1_slot1;
                var2 = 9;
                var14 = var7[var2];
                var14 = var3.bind(var4)(var14);
                var15 = var14.internal;
                var14 = var15.resolveSemanticColor;
                var2 = var7[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.colors;
                var3 = var2.MENTION_BACKGROUND;
                var2 = arg3;
                var3 = var14.bind(var15)(var2, var3);
                var2 = 10;
                var2 = var7[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.getInitialInteractionMetadata;
                var2 = var2.bind(var5)(var11);
                var5 = var9 == var2;
                var14 = undefined;
                if (var5) {
                    _fun56079_ip = 308;
                    continue _fun56079
                }
            case 303:
                var14 = var2.type;
            case 308:
                var7 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 11;
                var5 = var15[var5];
                var5 = var7.bind(var4)(var5);
                var5 = var5.InteractionTypes;
                var7 = var5.APPLICATION_COMMAND;
                var5 = null;
                if (!(var14 === var7)) {
                    _fun56079_ip = 391;
                    continue _fun56079
                }
            case 346:
                var7 = var2.target_user;
                var7 = var9 != var7;
                var5 = null;
                if (!var7) {
                    _fun56079_ip = 391;
                    continue _fun56079
                }
            case 361:
                var14 = _closure1_slot4;
                var26 = var2.target_user;
                var7 = var14.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var14
                    }
                });
                var27 = var7;
                var2 = new var27[var14](var26, var25);
                var5 = var2 instanceof Object ? var2 : var7;
            case 391:
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var19];
                var7 = var7.bind(var4)(var2);
                var2 = var7.getUserAuthor;
                var2 = var2.bind(var7)(var5, var17);
                var15 = var2.colorString;
                var2 = 'username';
                var2 = var2 === var10;
                var18 = var5;
                var5 = var12;
                if (!var2) {
                    _fun56079_ip = 474;
                    continue _fun56079
                }
            case 443:
                var14 = _closure1_slot3;
                var20 = var9 != var15;
                var7 = undefined;
                if (!var20) {
                    _fun56079_ip = 459;
                    continue _fun56079
                }
            case 456:
                var7 = var15;
            case 459:
                var7 = var14.bind(var4)(var7);
                var5 = var12;
                if (!(var9 != var7)) {
                    _fun56079_ip = 474;
                    continue _fun56079
                }
            case 471:
                var5 = var7;
            case 474:
                var7 = var12;
                if (!var2) {
                    _fun56079_ip = 511;
                    continue _fun56079
                }
            case 480:
                var14 = _closure1_slot3;
                var15 = var9 != var8;
                var2 = undefined;
                if (!var15) {
                    _fun56079_ip = 496;
                    continue _fun56079
                }
            case 493:
                var2 = var8;
            case 496:
                var2 = var14.bind(var4)(var2);
                var7 = var12;
                if (!(var9 != var2)) {
                    _fun56079_ip = 511;
                    continue _fun56079
                }
            case 508:
                var7 = var2;
            case 511:
                var23 = {};
                var12 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var19];
                var14 = var12.bind(var4)(var2);
                var12 = var14.getUserAuthor;
                var2 = var11.interaction;
                var2 = var2.user;
                var2 = var12.bind(var14)(var2, var17);
                var2 = var2.nick;
                var23.username = var2;
                var2 = {
                    'name': 'usernameOnClick',
                    'action': 'bindUserMenu'
                };
                var12 = var11.interaction;
                var12 = var12.user;
                var12 = var12.id;
                var2.userId = var12;
                var12 = var11.channel_id;
                var2.messageChannelId = var12;
                var2.linkColor = var7;
                var23.usernameOnClick = var2;
                if (!var0) {
                    _fun56079_ip = 816;
                    continue _fun56079
                }
            case 623:
                if (var16) {
                    _fun56079_ip = 816;
                    continue _fun56079
                }
            case 629:
                var2 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 12;
                var0 = var12[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.isActivitiesInTextEnabled;
                var2 = var0.bind(var2)(var17);
                var12 = _closure1_slot0;
                var20 = _closure1_slot2;
                var0 = 13;
                var14 = var20[var0];
                var14 = var12.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.formatToParts;
                var0 = var20[var0];
                var0 = var12.bind(var4)(var0);
                var0 = var0.t;
                if (var2) {
                    _fun56079_ip = 736;
                    continue _fun56079
                }
            case 708:
                var12 = var0.k964Wm;
                var2 = {};
                var26 = var2;
                var25 = var23;
                var20 = copyDataProperties(var26, var25);
                var2 = var14.bind(var15)(var12, var2);
                _fun56079_ip = 811;
                continue _fun56079;
            case 736:
                var12 = var0["R/mrBi"];
                var0 = {};
                var26 = var0;
                var25 = var23;
                var20 = copyDataProperties(var26, var25);
                var22 = {};
                var20 = 'bindTapActivityText';
                var22.action = var20;
                var20 = var11.author;
                var20 = var20.id;
                var22.applicationUserId = var20;
                var20 = var11.channel_id;
                var22.messageChannelId = var20;
                var20 = 'activityTextOnClick';
                var0[var20] = var22;
                var2 = var14.bind(var15)(var12, var0);
            case 811:
                _fun56079_ip = 1223;
                continue _fun56079;
            case 816:
                var22 = var13;
                if (!var16) {
                    _fun56079_ip = 853;
                    continue _fun56079
                }
            case 822:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 14;
                var0 = var14[var0];
                var12 = var12.bind(var4)(var0);
                var0 = var12.formatPrimaryEntryPointCommandName;
                var22 = var0.bind(var12)(var13);
            case 853:
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 13;
                var14 = var12[var0];
                var14 = var13.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.formatToParts;
                var12 = var12[var0];
                var12 = var13.bind(var4)(var12);
                var12 = var12.t;
                var13 = var12.SSrolr;
                var12 = {};
                var26 = var12;
                var25 = var23;
                var20 = copyDataProperties(var26, var25);
                var20 = 'commandName';
                var12[var20] = var22;
                if (!(var9 != var17)) {
                    _fun56079_ip = 937;
                    continue _fun56079
                }
            case 931:
                if (var21) {
                    _fun56079_ip = 941;
                    continue _fun56079
                }
            case 934:
                if (var16) {
                    _fun56079_ip = 941;
                    continue _fun56079
                }
            case 937:
                var16 = {};
                _fun56079_ip = 1023;
                continue _fun56079;
            case 941:
                var21 = {
                    'name': 'commandNameOnClick',
                    'action': 'bindTapCommandName'
                };
                var24 = var11.interaction;
                var24 = var24.user;
                var24 = var24.id;
                var21.userId = var24;
                var24 = var11.id;
                var21.messageId = var24;
                var24 = var11.author;
                var24 = var24.id;
                var21.applicationUserId = var24;
                var24 = var11.type;
                var21.messageType = var24;
                var24 = var11.channel_id;
                var21.messageChannelId = var24;
                var16 = var21;
            case 1023:
                var21 = 'commandNameOnClick';
                var12[var21] = var16;
                var2 = var14.bind(var15)(var13, var12);
                if (!(var9 != var18)) {
                    _fun56079_ip = 1223;
                    continue _fun56079
                }
            case 1047:
                var16 = _closure1_slot0;
                var15 = _closure1_slot2;
                var12 = var15[var0];
                var12 = var16.bind(var4)(var12);
                var14 = var12.intl;
                var13 = var14.formatToParts;
                var0 = var15[var0];
                var0 = var16.bind(var4)(var0);
                var0 = var0.t;
                var12 = var0.mqKdCM;
                var0 = {};
                var26 = var0;
                var25 = var23;
                var23 = copyDataProperties(var26, var25);
                var0[var20] = var22;
                var20 = {};
                var0[var21] = var20;
                var15 = var15[var19];
                var16 = var16.bind(var4)(var15);
                var15 = var16.getUserAuthor;
                var15 = var15.bind(var16)(var18, var17);
                var16 = var15.nick;
                var15 = 'targetUsername';
                var0[var15] = var16;
                var16 = {
                    'name': 'targetUsernameOnClick',
                    'action': 'bindUserMenu'
                };
                var15 = 'targetUsernameOnClick';
                var19 = var9 == var18;
                var17 = undefined;
                if (var19) {
                    _fun56079_ip = 1193;
                    continue _fun56079
                }
            case 1188:
                var17 = var18.id;
            case 1193:
                var16.userId = var17;
                var17 = var11.channel_id;
                var16.messageChannelId = var17;
                var16.linkColor = var5;
                var0[var15] = var16;
                var2 = var13.bind(var14)(var12, var0);
            case 1223:
                var0 = {};
                var11 = var11.interaction;
                var11 = var11.user;
                var11 = var11.id;
                var0.userId = var11;
                var0.usernameColor = var7;
                var11 = _closure1_slot3;
                var12 = var9 != var8;
                var7 = undefined;
                if (!var12) {
                    _fun56079_ip = 1266;
                    continue _fun56079
                }
            case 1263:
                var7 = var8;
            case 1266:
                var11 = var11.bind(var4)(var7);
                var12 = var9 != var11;
                var7 = null;
                if (!var12) {
                    _fun56079_ip = 1283;
                    continue _fun56079
                }
            case 1280:
                var7 = var11;
            case 1283:
                var0.roleColor = var7;
                var7 = 'dot';
                var7 = var7 === var10;
                if (!var7) {
                    _fun56079_ip = 1303;
                    continue _fun56079
                }
            case 1299:
                var7 = var9 != var8;
            case 1303:
                var0.shouldShowRoleDot = var7;
                var0.avatarURL = var6;
                var0.targetUsernameColor = var5;
                var0.content = var2;
                var2 = {
                    'color': null,
                    'borderRadius': 4,
                    'spaceAround': true
                };
                var1 = _closure1_slot3;
                var1 = var1.bind(var4)(var3);
                var2.color = var1;
                var1 = true;
                var0.commandNameBackgroundStyles = var2;
                var0.showAppsIcon = var1;
                return var0;
        }
    };
    var2.createExecutedCommand = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1620, 1372, 1613, 660, 1418, 1417, 3936, 6776, 671, 4501, 1636, 6777, 1234, 4629, 2]);