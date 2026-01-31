// modules/markup/MarkupChannelMentionRule.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: makeGuild, environment: var6
        var4 = arg0;
        var0 = {};
        var1 = 'guild';
        var0.type = var1;
        var1 = var4.id;
        var0.guildId = var1;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 7;
        var2 = var5[var2];
        var3 = undefined;
        var8 = var6.bind(var3)(var2);
        var7 = var8.truncateText;
        var6 = var4.name;
        var2 = 32;
        var2 = var7.bind(var8)(var6, var2);
        var0.content = var2;
        var2 = _closure1_slot1;
        var1 = 8;
        var1 = var5[var1];
        var3 = var2.bind(var3)(var1);
        var2 = var3.getGuildIconURL;
        var1 = {};
        var5 = var4.id;
        var1.id = var5;
        var4 = var4.icon;
        var1.icon = var4;
        var4 = 40;
        var1.size = var4;
        var1 = var2.bind(var3)(var1);
        var0.icon = var1;
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: makeChannel, environment: var6
        _fun44024: for (var _fun44024_ip = 0;;) switch (_fun44024_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot17;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var2 = undefined;
                var6 = var4.bind(var2)(var0);
                var5 = var6.truncateText;
                var4 = var1.name;
                var0 = 32;
                var0 = var5.bind(var6)(var4, var0);
                var5 = var3.bind(var2)(var0);
                var0 = {};
                var2 = 'channel';
                var0.type = var2;
                var4 = 'italics';
                var2 = arg1;
                var3 = var5;
                if (!(var4 === var2)) {
                    _fun44024_ip = 106;
                    continue _fun44024
                }
            case 81:
                var2 = {};
                var4 = 'em';
                var2.type = var4;
                var4 = new Array(1);
                var4[0] = var5;
                var2.content = var4;
                var3 = var2;
            case 106:
                var2 = new Array(1);
                var2[0] = var3;
                var0.content = var2;
                var2 = var1.type;
                var0.channelType = var2;
                var1 = var1.iconType;
                var0.iconType = var1;
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = function(arg0) { // Original name: makeMessage, environment: var6
        _fun44025: for (var _fun44025_ip = 0;;) switch (_fun44025_ip) {
            case 0:
                var0 = {};
                var1 = 'channel';
                var0.type = var1;
                var3 = _closure1_slot17;
                var2 = undefined;
                var1 = '';
                var2 = var3.bind(var2)(var1);
                var1 = new Array(1);
                var1[0] = var2;
                var0.content = var1;
                var1 = 'message';
                var2 = arg0;
                if (!var2) {
                    _fun44025_ip = 54;
                    continue _fun44025
                }
            case 50:
                var1 = 'post';
            case 54:
                var0.iconType = var1;
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function(arg0, arg1) { // Original name: getChannel, environment: var6
        _fun44026: for (var _fun44026_ip = 0;;) switch (_fun44026_ip) {
            case 0:
                var12 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var12;
                var2 = _closure1_slot4;
                var1 = var2.getChannel;
                var2 = var1.bind(var2)(var12);
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var3 = var6[var1];
                var1 = undefined;
                var11 = var4.bind(var1)(var3);
                var10 = var11.getChannelRoleSubscriptionStatus;
                var16 = _closure1_slot4;
                var15 = _closure1_slot3;
                var14 = _closure1_slot6;
                var18 = var11;
                var17 = var12;
                var3 = var18[var10](var17, var16, var15, var14, var13);
                var5 = var3.isSubscriptionGated;
                var3 = 11;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.getMentionIconType;
                var6 = var3.bind(var4)(var2);
                var3 = null;
                var9 = var3 != var6;
                var4 = 'text';
                if (!var9) {
                    _fun44026_ip = 124;
                    continue _fun44026
                }
            case 121:
                var4 = var6;
            case 124:
                if (!(var3 != var7)) {
                    _fun44026_ip = 150;
                    continue _fun44026
                }
            case 128:
                var6 = var7.find;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 === var0;
                    return var0;
                };
                var6 = var6.bind(var7)(var0);
                if (!(var3 == var6)) {
                    _fun44026_ip = 353;
                    continue _fun44026
                }
            case 150:
                var7 = var3 != var2;
                var0 = null;
                if (!var7) {
                    _fun44026_ip = 351;
                    continue _fun44026
                }
            case 162:
                var7 = {};
                var9 = var2.type;
                var7.type = var9;
                var9 = var2.id;
                var7.id = var9;
                var9 = var2.guild_id;
                var7.guildId = var9;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = 12;
                var11 = var10[var11];
                var13 = var9.bind(var1)(var11);
                var12 = var13.computeChannelName;
                var11 = _closure1_slot8;
                var8 = _closure1_slot7;
                var8 = var12.bind(var13)(var2, var11, var8);
                var7.name = var8;
                var8 = var2.isPrivate;
                var8 = var8.bind(var2)();
                var7.isDm = var8;
                var8 = var2.isForumPost;
                var8 = var8.bind(var2)();
                var7.isForumPost = var8;
                var8 = 13;
                var8 = var10[var8];
                var12 = var9.bind(var1)(var8);
                var11 = var12.isChannelTypeMentionable;
                var8 = var2.type;
                var8 = var11.bind(var12)(var8);
                var7.isMentionable = var8;
                var8 = 14;
                var8 = var10[var8];
                var9 = var9.bind(var1)(var8);
                var8 = var9.canViewChannel;
                var8 = var8.bind(var9)(var2);
                var7.canViewChannel = var8;
                var7.roleSubscriptionGated = var5;
                var7.iconType = var4;
                var8 = var2.parent_id;
                var7.parentId = var8;
                var0 = var7;
            case 351:
                return var0;
            case 353:
                var0 = {};
                var7 = var6.type;
                var0.type = var7;
                var7 = var6.id;
                var0.id = var7;
                var7 = var6.guild_id;
                var0.guildId = var7;
                var6 = var6.name;
                var0.name = var6;
                var6 = var3 != var2;
                if (!var6) {
                    _fun44026_ip = 408;
                    continue _fun44026
                }
            case 398:
                var7 = var2.isPrivate;
                var6 = var7.bind(var2)();
            case 408:
                var0.isDm = var6;
                var6 = var3 != var2;
                if (!var6) {
                    _fun44026_ip = 430;
                    continue _fun44026
                }
            case 420:
                var7 = var2.isForumPost;
                var6 = var7.bind(var2)();
            case 430:
                var0.isForumPost = var6;
                var6 = true;
                var0.isMentionable = var6;
                var0.canViewChannel = var6;
                var0.roleSubscriptionGated = var5;
                var0.iconType = var4;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun44026_ip = 472;
                    continue _fun44026
                }
            case 466:
                var1 = var2.parent_id;
            case 472:
                var0.parentId = var1;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: makeLink, environment: var6
        var1 = arg0;
        var0 = {};
        var2 = 'link';
        var0.type = var2;
        var3 = {};
        var2 = 'text';
        var3.type = var2;
        var3.content = var1;
        var2 = new Array(1);
        var2[0] = var3;
        var0.content = var2;
        var0.target = var1;
        var1 = undefined;
        var0.title = var1;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: makeText, environment: var6
        var0 = {};
        var1 = 'text';
        var0.type = var1;
        var1 = arg0;
        var0.content = var1;
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: handleUnknownChannel, environment: var6
        _fun44030: for (var _fun44030_ip = 0;;) switch (_fun44030_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot5;
                var0 = var3.getGuild;
                var5 = var0.bind(var3)(var2);
                var7 = null;
                var0 = var7 == var5;
                var4 = undefined;
                var6 = undefined;
                if (var0) {
                    _fun44030_ip = 38;
                    continue _fun44030
                }
            case 33:
                var6 = var5.id;
            case 38:
                var0 = {};
                var3 = 'channelMention';
                var0.type = var3;
                var0.guildId = var2;
                var2 = arg1;
                var0.channelId = var2;
                var2 = arg2;
                var0.messageId = var2;
                var2 = arg4;
                var0.originalLink = var2;
                var3 = var7 == var5;
                var2 = null;
                if (var3) {
                    _fun44030_ip = 112;
                    continue _fun44030
                }
            case 83:
                var3 = arg3;
                var2 = null;
                if (!(var6 !== var3)) {
                    _fun44030_ip = 112;
                    continue _fun44030
                }
            case 92:
                var3 = _closure1_slot12;
                var5 = var3.bind(var4)(var5);
                var3 = new Array(1);
                var3[0] = var5;
                var2 = var3;
            case 112:
                var0.inContent = var2;
                var3 = _closure1_slot13;
                var2 = {};
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 9;
                var6 = var9[var5];
                var6 = var8.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var9[var5];
                var5 = var8.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.zLZPmk;
                var6 = var6.bind(var7)(var5);
                var5 = var6.toLowerCase;
                var5 = var5.bind(var6)();
                var2.name = var5;
                var1 = _closure1_slot9;
                var1 = var1.UNKNOWN;
                var2.type = var1;
                var1 = 'text';
                var2.iconType = var1;
                var1 = 'italics';
                var2 = var3.bind(var4)(var2, var1);
                var1 = new Array(1);
                var1[0] = var2;
                var0.content = var1;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: formatChannelMentionContent, environment: var6
        _fun44031: for (var _fun44031_ip = 0;;) switch (_fun44031_ip) {
            case 0:
                var0 = arg1;
                var9 = arg2;
                var8 = arg3;
                var2 = _closure1_slot12;
                var4 = undefined;
                var1 = arg0;
                var10 = var2.bind(var4)(var1);
                var1 = _closure1_slot13;
                var2 = var1.bind(var4)(var0);
                var3 = _closure1_slot14;
                var1 = var0.isForumPost;
                var3 = var3.bind(var4)(var1);
                if (!var9) {
                    _fun44031_ip = 59;
                    continue _fun44031
                }
            case 53:
                if (var8) {
                    _fun44031_ip = 186;
                    continue _fun44031
                }
            case 59:
                if (!var9) {
                    _fun44031_ip = 88;
                    continue _fun44031
                }
            case 62:
                if (var8) {
                    _fun44031_ip = 88;
                    continue _fun44031
                }
            case 65:
                var1 = {};
                var5 = null;
                var1.inContent = var5;
                var5 = new Array(1);
                var5[0] = var2;
                var1.content = var5;
                _fun44031_ip = 184;
                continue _fun44031;
            case 88:
                if (var9) {
                    _fun44031_ip = 138;
                    continue _fun44031
                }
            case 91:
                if (!var8) {
                    _fun44031_ip = 138;
                    continue _fun44031
                }
            case 94:
                var5 = {};
                var7 = new Array(1);
                var7[0] = var10;
                var5.inContent = var7;
                var7 = var0.isForumPost;
                var11 = var3;
                if (!var7) {
                    _fun44031_ip = 124;
                    continue _fun44031
                }
            case 121:
                var11 = var2;
            case 124:
                var7 = new Array(1);
                var7[0] = var11;
                var5.content = var7;
                _fun44031_ip = 181;
                continue _fun44031;
            case 138:
                var7 = undefined;
                if (var9) {
                    _fun44031_ip = 178;
                    continue _fun44031
                }
            case 143:
                var7 = undefined;
                if (var8) {
                    _fun44031_ip = 178;
                    continue _fun44031
                }
            case 148:
                var8 = {};
                var9 = new Array(1);
                var9[0] = var10;
                var8.inContent = var9;
                var9 = new Array(1);
                var9[0] = var2;
                var8.content = var9;
                var7 = var8;
            case 178:
                var5 = var7;
            case 181:
                var1 = var5;
            case 184:
                return var1;
            case 186:
                var1 = var0.isForumPost;
                if (!var1) {
                    _fun44031_ip = 221;
                    continue _fun44031
                }
            case 195:
                var5 = _closure1_slot4;
                var1 = var5.getChannel;
                var0 = var0.parentId;
                var8 = var1.bind(var5)(var0);
                var5 = null;
                if (!(var5 == var8)) {
                    _fun44031_ip = 250;
                    continue _fun44031
                }
            case 221:
                var0 = {};
                var1 = new Array(1);
                var1[0] = var2;
                var0.inContent = var1;
                var1 = new Array(1);
                var1[0] = var3;
                var0.content = var1;
                return var0;
            case 250:
                var0 = {};
                var3 = _closure1_slot13;
                var1 = {};
                var7 = var8.name;
                var1.name = var7;
                var7 = var8.type;
                var1.type = var7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 11;
                var6 = var9[var6];
                var7 = var7.bind(var4)(var6);
                var6 = var7.getMentionIconType;
                var6 = var6.bind(var7)(var8);
                var7 = var5 != var6;
                var5 = 'forum';
                if (!var7) {
                    _fun44031_ip = 323;
                    continue _fun44031
                }
            case 320:
                var5 = var6;
            case 323:
                var1.iconType = var5;
                var3 = var3.bind(var4)(var1);
                var1 = new Array(1);
                var1[0] = var3;
                var0.inContent = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var0.content = var1;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: parseChannel, environment: var6
        _fun44032: for (var _fun44032_ip = 0;;) switch (_fun44032_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var6 = arg3;
                var0 = var5.canViewChannel;
                if (var0) {
                    _fun44032_ip = 223;
                    continue _fun44032
                }
            case 21:
                var2 = {};
                var0 = 'channel';
                var2.type = var0;
                var7 = _closure1_slot17;
                var1 = var5.roleSubscriptionGated;
                if (var1) {
                    _fun44032_ip = 106;
                    continue _fun44032
                }
            case 47:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 9;
                var3 = var11[var1];
                var9 = undefined;
                var3 = var10.bind(var9)(var3);
                var8 = var3.intl;
                var3 = var8.string;
                var1 = var11[var1];
                var1 = var10.bind(var9)(var1);
                var1 = var1.t;
                var1 = var1["/YzI63"];
                var3 = var3.bind(var8)(var1);
                _fun44032_ip = 111;
                continue _fun44032;
            case 106:
                var3 = var5.name;
            case 111:
                var1 = undefined;
                var3 = var7.bind(var1)(var3);
                var1 = new Array(1);
                var1[0] = var3;
                var2.content = var1;
                var1 = var5.roleSubscriptionGated;
                if (var1) {
                    _fun44032_ip = 151;
                    continue _fun44032
                }
            case 139:
                var0 = _closure1_slot9;
                var0 = var0.UNKNOWN;
                _fun44032_ip = 156;
                continue _fun44032;
            case 151:
                var0 = var5.type;
            case 156:
                var2.channelType = var0;
                var0 = 'locked';
                var2.iconType = var0;
                var0 = {};
                var1 = 'channelMention';
                var0.type = var1;
                var1 = var5.guildId;
                var0.guildId = var1;
                var1 = var5.id;
                var0.channelId = var1;
                var0.messageId = var4;
                var1 = null;
                var0.inContent = var1;
                var1 = new Array(1);
                var1[0] = var2;
                var0.content = var1;
                return var0;
            case 223:
                var0 = var5.isMentionable;
                if (var0) {
                    _fun44032_ip = 275;
                    continue _fun44032
                }
            case 232:
                var2 = _closure1_slot17;
                var3 = var5.name;
                var0 = global;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = '#';
                var1 = var1.bind(var0)(var3);
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            case 275:
                var3 = {};
                var0 = 'channelMention';
                var3.type = var0;
                var0 = var5.id;
                var3.channelId = var0;
                var0 = var5.guildId;
                var3.guildId = var0;
                var3.messageId = var4;
                var3.originalLink = var6;
                var7 = _closure1_slot5;
                var1 = var7.getGuild;
                var0 = var5.guildId;
                var10 = var1.bind(var7)(var0);
                var0 = null;
                if (!(var0 != var10)) {
                    _fun44032_ip = 393;
                    continue _fun44032
                }
            case 340:
                var11 = var5.guildId;
                var1 = {};
                var15 = var1;
                var14 = var3;
                var7 = copyDataProperties(var15, var14);
                var9 = _closure1_slot19;
                var12 = var0 != var4;
                var16 = undefined;
                var4 = arg2;
                var13 = var11 === var4;
                var15 = var10;
                var14 = var5;
                var14 = var16[var9](var15, var14, var13, var12, var11);
                var15 = var1;
                var4 = copyDataProperties(var15, var14);
                return var1;
            case 393:
                var1 = var5.isDm;
                if (var1) {
                    _fun44032_ip = 509;
                    continue _fun44032
                }
            case 402:
                if (!(var0 == var6)) {
                    _fun44032_ip = 496;
                    continue _fun44032
                }
            case 406:
                var4 = _closure1_slot17;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 9;
                var7 = var10[var0];
                var1 = undefined;
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var0 = var10[var0];
                var0 = var9.bind(var1)(var0);
                var0 = var0.t;
                var0 = var0.J90oLW;
                var8 = var7.bind(var8)(var0);
                var0 = global;
                var0 = var0.HermesInternal;
                var7 = var0.concat;
                var0 = '#';
                var0 = var7.bind(var0)(var8);
                var0 = var4.bind(var1)(var0);
                _fun44032_ip = 507;
                continue _fun44032;
            case 496:
                var4 = _closure1_slot16;
                var1 = undefined;
                var0 = var4.bind(var1)(var6);
            case 507:
                _fun44032_ip = 593;
                continue _fun44032;
            case 509:
                var1 = {};
                var15 = var1;
                var14 = var3;
                var3 = copyDataProperties(var15, var14);
                var4 = _closure1_slot10;
                var3 = 'guildId';
                var1[var3] = var4;
                var3 = _closure1_slot13;
                var4 = undefined;
                var3 = var3.bind(var4)(var5);
                var5 = new Array(1);
                var5[0] = var3;
                var3 = 'inContent';
                var1[var3] = var5;
                var3 = _closure1_slot14;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                var3 = new Array(1);
                var3[0] = var2;
                var2 = 'content';
                var1[var2] = var3;
                var0 = var1;
            case 593:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var9.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3 = var1.ChannelTypes;
    var _closure1_slot9 = var3;
    var1 = var1.ME;
    var _closure1_slot10 = var1;
    var1 = function(arg0) { // Original name: getGuildIdFromChannelId, environment: var6
        _fun44033: for (var _fun44033_ip = 0;;) switch (_fun44033_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = var2.getChannel;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                var1 = var0 == var2;
                var0 = undefined;
                if (var1) {
                    _fun44033_ip = 41;
                    continue _fun44033
                }
            case 31:
                var1 = var2.getGuildId;
                var0 = var1.bind(var2)();
            case 41:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var1 = {};
    var3 = {};
    var7 = 15;
    var7 = var5[var7];
    var7 = var9.bind(var0)(var7);
    var7 = var7.order;
    var3.order = var7;
    var7 = ['<'];
    var3.requiredFirstCharacters = var7;
    var7 = function(arg0) { // Original name: match, environment: var6
        var2 = /^<#(\d+)>/;
        var1 = var2.exec;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.match = var7;
    var7 = function(arg0, arg1, arg2) { // Original name: parse, environment: var6
        _fun44035: for (var _fun44035_ip = 0;;) switch (_fun44035_ip) {
            case 0:
                var2 = arg2;
                var1 = arg0;
                var0 = 1;
                var1 = var1[var0];
                var0 = var2.returnMentionIds;
                if (var0) {
                    _fun44035_ip = 109;
                    continue _fun44035
                }
            case 22:
                var3 = _closure1_slot15;
                var0 = var2.mentionChannels;
                var5 = undefined;
                var7 = var3.bind(var5)(var1, var0);
                var4 = null;
                if (!(var4 != var7)) {
                    _fun44035_ip = 76;
                    continue _fun44035
                }
            case 49:
                var3 = _closure1_slot20;
                var8 = _closure1_slot11;
                var0 = var2.channelId;
                var0 = var8.bind(var5)(var0);
                var0 = var3.bind(var5)(var7, var4, var0);
                _fun44035_ip = 107;
                continue _fun44035;
            case 76:
                var3 = _closure1_slot18;
                var6 = _closure1_slot11;
                var2 = var2.channelId;
                var9 = var6.bind(var5)(var2);
                var13 = undefined;
                var12 = null;
                var11 = var1;
                var10 = null;
                var0 = var13[var3](var12, var11, var10, var9, var8);
            case 107:
                return var0;
            case 109:
                var0 = {};
                var2 = 'channelMention';
                var0.type = var2;
                var0.id = var1;
                return var0;
        }
    };
    var3.parse = var7;
    var1.channelMention = var3;
    var3 = {};
    var7 = 16;
    var8 = var5[var7];
    var8 = var9.bind(var0)(var8);
    var8 = var8.defaultRules;
    var8 = var8.url;
    var10 = var8.order;
    var8 = 0.5;
    var10 = var10 - var8;
    var3.order = var10;
    var10 = ['h'];
    var3.requiredFirstCharacters = var10;
    var10 = function(arg0) { // Original name: match, environment: var6
        _fun44036: for (var _fun44036_ip = 0;;) switch (_fun44036_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 14;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.CHANNEL_OR_MESSAGES_URL_RE;
                var1 = var2.exec;
                var0 = arg0;
                var1 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var0 != var1)) {
                    _fun44036_ip = 135;
                    continue _fun44036
                }
            case 51:
                var2 = 2;
                var3 = var1[var2];
                if (!(var0 != var3)) {
                    _fun44036_ip = 93;
                    continue _fun44036
                }
            case 62:
                var4 = /\D/;
                var3 = var4.test;
                var2 = var1[var2];
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun44036_ip = 139;
                    continue _fun44036
                }
            case 93:
                var2 = 3;
                var3 = var1[var2];
                if (!(var0 != var3)) {
                    _fun44036_ip = 135;
                    continue _fun44036
                }
            case 104:
                var4 = /\D/;
                var3 = var4.test;
                var2 = var1[var2];
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun44036_ip = 137;
                    continue _fun44036
                }
            case 135:
                return var1;
            case 137:
                return var0;
            case 139:
                return var0;
        }
    };
    var3.match = var10;
    var10 = function(arg0, arg1, arg2) { // Original name: parse, environment: var6
        _fun44037: for (var _fun44037_ip = 0;;) switch (_fun44037_ip) {
            case 0:
                var3 = arg0;
                var1 = arg2;
                var0 = 0;
                var2 = var3[var0];
                var0 = 1;
                var7 = var3[var0];
                var0 = 2;
                var6 = var3[var0];
                var0 = 3;
                var5 = var3[var0];
                var0 = null;
                if (!(var0 != var6)) {
                    _fun44037_ip = 131;
                    continue _fun44037
                }
            case 39:
                var3 = _closure1_slot15;
                var4 = undefined;
                var9 = var3.bind(var4)(var6, var0);
                if (!(var0 != var9)) {
                    _fun44037_ip = 93;
                    continue _fun44037
                }
            case 58:
                var3 = _closure1_slot20;
                var10 = _closure1_slot11;
                var0 = var1.channelId;
                var13 = var10.bind(var4)(var0);
                var16 = undefined;
                var15 = var9;
                var14 = var5;
                var12 = var2;
                var0 = var16[var3](var15, var14, var13, var12, var11);
                _fun44037_ip = 129;
                continue _fun44037;
            case 93:
                var3 = _closure1_slot18;
                var8 = _closure1_slot11;
                var1 = var1.channelId;
                var12 = var8.bind(var4)(var1);
                var16 = undefined;
                var15 = var7;
                var14 = var6;
                var13 = var5;
                var11 = var2;
                var0 = var16[var3](var15, var14, var13, var12, var11, var10);
            case 129:
                return var0;
            case 131:
                var1 = _closure1_slot16;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var3.parse = var10;
    var1.channelOrMessageUrl = var3;
    var3 = {};
    var7 = var5[var7];
    var7 = var9.bind(var0)(var7);
    var7 = var7.defaultRules;
    var7 = var7.url;
    var7 = var7.order;
    var7 = var7 - var8;
    var3.order = var7;
    var7 = ['h'];
    var3.requiredFirstCharacters = var7;
    var7 = function(arg0) { // Original name: match, environment: var6
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 14;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.MEDIA_POST_URL_RE;
        var1 = var2.exec;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.match = var7;
    var6 = function(arg0, arg1, arg2) { // Original name: parse, environment: var6
        _fun44039: for (var _fun44039_ip = 0;;) switch (_fun44039_ip) {
            case 0:
                var3 = arg0;
                var0 = arg2;
                var1 = 0;
                var2 = var3[var1];
                var1 = 1;
                var10 = var3[var1];
                var1 = 2;
                var8 = var3[var1];
                var1 = 3;
                var7 = var3[var1];
                var1 = 4;
                var5 = var3[var1];
                var1 = null;
                if (!(var1 != var8)) {
                    _fun44039_ip = 197;
                    continue _fun44039
                }
            case 49:
                if (!(var1 != var7)) {
                    _fun44039_ip = 197;
                    continue _fun44039
                }
            case 56:
                var3 = _closure1_slot15;
                var4 = undefined;
                var3 = var3.bind(var4)(var7, var1);
                if (!(var1 == var3)) {
                    _fun44039_ip = 162;
                    continue _fun44039
                }
            case 75:
                var7 = _closure1_slot15;
                var9 = var7.bind(var4)(var8, var1);
                if (!(var1 == var9)) {
                    _fun44039_ip = 127;
                    continue _fun44039
                }
            case 89:
                var7 = _closure1_slot18;
                var11 = _closure1_slot11;
                var1 = var0.channelId;
                var13 = var11.bind(var4)(var1);
                var17 = undefined;
                var16 = var10;
                var15 = var8;
                var14 = var5;
                var12 = var2;
                var1 = var17[var7](var16, var15, var14, var13, var12, var11);
                _fun44039_ip = 160;
                continue _fun44039;
            case 127:
                var8 = _closure1_slot20;
                var10 = _closure1_slot11;
                var7 = var0.channelId;
                var14 = var10.bind(var4)(var7);
                var17 = undefined;
                var16 = var9;
                var15 = var5;
                var13 = var2;
                var1 = var17[var8](var16, var15, var14, var13, var12);
            case 160:
                return var1;
            case 162:
                var1 = _closure1_slot20;
                var6 = _closure1_slot11;
                var0 = var0.channelId;
                var14 = var6.bind(var4)(var0);
                var17 = undefined;
                var16 = var3;
                var15 = var5;
                var13 = var2;
                var0 = var17[var1](var16, var15, var14, var13, var12);
                return var0;
            case 197:
                var1 = _closure1_slot16;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                return var0;
        }
    };
    var3.parse = var6;
    var1.mediaPostLink = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/MarkupChannelMentionRule.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1663, 1372, 1410, 3050, 3059, 1613, 660, 1607, 1417, 1234, 4754, 4200, 4755, 4756, 3422, 4751, 3105, 2]);