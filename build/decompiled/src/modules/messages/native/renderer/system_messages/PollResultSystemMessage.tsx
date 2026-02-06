// modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = _closure2_slot0;
            return var0;
        };
        return var0;
    };
    var _closure1_slot4 = var0;
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
    var3 = var3.EMOJI_URL_BASE_SIZE;
    var _closure1_slot3 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/PollResultSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56013: for (var _fun56013_ip = 0;;) switch (_fun56013_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 6;
                var0 = var3[var0];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = var5.message;
                var0 = var0.embeds;
                var3 = 0;
                var0 = var0[var3];
                var6 = var1.bind(var4)(var0);
                var0 = null;
                if (!(var0 != var6)) {
                    _fun56013_ip = 1116;
                    continue _fun56013
                }
            case 59:
                var1 = var5.message;
                var1 = var1.messageReference;
                if (!(var0 != var1)) {
                    _fun56013_ip = 1114;
                    continue _fun56013
                }
            case 77:
                var8 = var5.message;
                var11 = var5.roleStyle;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 1;
                var1 = var13[var1];
                var7 = var9.bind(var4)(var1);
                var1 = var7.getMessageAuthorWithProcessedColor;
                var7 = var1.bind(var7)(var8);
                var1 = var7.nick;
                var10 = var7.colorString;
                var12 = var7.colorStrings;
                var14 = var7.guildId;
                var7 = 2;
                var7 = var13[var7];
                var13 = var9.bind(var4)(var7);
                var9 = var13.isNativeMessageEligibleForEnhancedRoleColors;
                var7 = var8.author;
                var7 = var7.id;
                var13 = var9.bind(var13)(var14, var7, var11);
                var9 = {};
                var9.username = var1;
                var1 = {};
                var7 = 'bindUserMenu';
                var1.action = var7;
                var7 = var8.author;
                var7 = var7.id;
                var1.userId = var7;
                var1.colorString = var10;
                var14 = 'username';
                var7 = null;
                if (!(var14 === var11)) {
                    _fun56013_ip = 229;
                    continue _fun56013
                }
            case 226:
                var7 = var10;
            case 229:
                var1.linkColor = var7;
                var1.roleColor = var10;
                var7 = null;
                if (!var13) {
                    _fun56013_ip = 247;
                    continue _fun56013
                }
            case 244:
                var7 = var12;
            case 247:
                var1.roleColors = var7;
                var7 = 'dot';
                var7 = var7 === var11;
                if (!var7) {
                    _fun56013_ip = 267;
                    continue _fun56013
                }
            case 263:
                var7 = var0 != var10;
            case 267:
                var1.shouldShowRoleDot = var7;
                var7 = var8.channel_id;
                var1.messageChannelId = var7;
                var7 = true;
                var1.medium = var7;
                var9.usernameOnClick = var1;
                var1 = var6.questionText;
                var9.title = var1;
                var1 = {};
                var10 = 'bindJumpToMessage';
                var1.action = var10;
                var10 = var8.messageReference;
                var10 = var10.channel_id;
                var1.targetChannelId = var10;
                var8 = var8.messageReference;
                var8 = var8.message_id;
                var1.targetMessageId = var8;
                var1.medium = var7;
                var9.titleOnClick = var1;
                var1 = var6.totalVotes;
                if (!(var3 !== var1)) {
                    _fun56013_ip = 964;
                    continue _fun56013
                }
            case 374:
                var1 = global;
                var8 = var1.Math;
                var7 = var8.round;
                var10 = var6.victorAnswerVotes;
                var3 = var6.totalVotes;
                var10 = var10 / var3;
                var3 = 100;
                var3 = var10 * var3;
                var8 = var7.bind(var8)(var3);
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var3 = '';
                var1 = '%';
                var11 = var7.bind(var3)(var8, var1);
                var1 = var6.victorAnswerId;
                if (!(var0 != var1)) {
                    _fun56013_ip = 882;
                    continue _fun56013
                }
            case 453:
                var12 = new Array(0);
                var14 = var6.victorEmoji;
                if (!(var0 != var14)) {
                    _fun56013_ip = 733;
                    continue _fun56013
                }
            case 470:
                var1 = var14.id;
                if (!(var0 == var1)) {
                    _fun56013_ip = 557;
                    continue _fun56013
                }
            case 479:
                var3 = var12.push;
                var1 = {};
                var7 = 'emoji';
                var1.type = var7;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 5;
                var7 = var10[var7];
                var13 = var8.bind(var4)(var7);
                var10 = var13.convertSurrogateToName;
                var8 = var14.name;
                var7 = false;
                var7 = var10.bind(var13)(var8, var7);
                var1.content = var7;
                var7 = var14.name;
                var1.surrogate = var7;
                var1 = var3.bind(var12)(var1);
                _fun56013_ip = 709;
                continue _fun56013;
            case 557:
                var3 = var12.push;
                var1 = {};
                var7 = var14.id;
                var1.id = var7;
                var7 = 'customEmoji';
                var1.type = var7;
                var7 = var14.name;
                var1.alt = var7;
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 4;
                var13 = var10[var7];
                var17 = var8.bind(var4)(var13);
                var16 = var17.getEmojiURL;
                var15 = {};
                var13 = var14.id;
                var15.id = var13;
                var13 = var14.animated;
                var15.animated = var13;
                var13 = _closure1_slot3;
                var15.size = var13;
                var15 = var16.bind(var17)(var15);
                var1.src = var15;
                var7 = var10[var7];
                var10 = var8.bind(var4)(var7);
                var8 = var10.getEmojiURL;
                var7 = {};
                var14 = var14.id;
                var7.id = var14;
                var14 = false;
                var7.animated = var14;
                var7.size = var13;
                var7 = var8.bind(var10)(var7);
                var1.frozenSrc = var7;
                var1 = var3.bind(var12)(var1);
            case 709:
                var3 = var12.push;
                var1 = {
                    'type': 'text',
                    'content': ' '
                };
                var1 = var3.bind(var12)(var1);
            case 733:
                var3 = var12.push;
                var1 = {};
                var7 = 'text';
                var1.type = var7;
                var6 = var6.victorAnswerText;
                var1.content = var6;
                var1 = var3.bind(var12)(var1);
                var3 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 3;
                var6 = var8[var1];
                var6 = var3.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var1 = var8[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.t;
                var3 = var1.zFwIxC;
                var1 = {};
                var21 = var1;
                var20 = var9;
                var8 = copyDataProperties(var21, var20);
                var10 = _closure1_slot4;
                var8 = {};
                var13 = 'strong';
                var8.type = var13;
                var8.content = var12;
                var10 = var10.bind(var4)(var8);
                var8 = 'answerHook';
                var1[var8] = var10;
                var8 = 'percentage';
                var1[var8] = var11;
                var3 = var6.bind(var7)(var3, var1);
                _fun56013_ip = 1069;
                continue _fun56013;
            case 882:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 3;
                var7 = var10[var1];
                var7 = var6.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var6 = var1.dqftZ2;
                var1 = {};
                var21 = var1;
                var20 = var9;
                var10 = copyDataProperties(var21, var20);
                var10 = 'percentage';
                var1[var10] = var11;
                var3 = var7.bind(var8)(var6, var1);
                _fun56013_ip = 1069;
                continue _fun56013;
            case 964:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 3;
                var7 = var10[var1];
                var7 = var6.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var1 = var10[var1];
                var1 = var6.bind(var4)(var1);
                var1 = var1.t;
                var6 = var1["9dPxsm"];
                var1 = {};
                var21 = var1;
                var20 = var9;
                var9 = copyDataProperties(var21, var20);
                var10 = _closure1_slot4;
                var9 = {
                    'type': 'emoji',
                    'content': 'frowning',
                    'surrogate': '😦'
                };
                var10 = var10.bind(var4)(var9);
                var9 = 'sadEmojiHook';
                var1[var9] = var10;
                var3 = var7.bind(var8)(var6, var1);
            case 1069:
                var1 = {};
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var20 = var2.bind(var4)(var5);
                var21 = var1;
                var2 = copyDataProperties(var21, var20);
                var2 = 'content';
                var1[var2] = var3;
                return var1;
            case 1114:
                return var0;
            case 1116:
                return var0;
        }
    };
    var2.createPollResultSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1624, 6700, 6701, 1234, 1417, 3106, 6786, 6702, 2]);