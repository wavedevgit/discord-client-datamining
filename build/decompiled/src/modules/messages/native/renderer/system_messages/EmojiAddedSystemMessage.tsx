// modules/messages/native/renderer/system_messages/EmojiAddedSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/EmojiAddedSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56478: for (var _fun56478_ip = 0;;) switch (_fun56478_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.message;
                var0 = var0.author;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 4;
                var4 = var9[var2];
                var2 = undefined;
                var6 = var8.bind(var2)(var4);
                var5 = var6.getMessageAuthorWithProcessedColor;
                var4 = var3.message;
                var5 = var5.bind(var6)(var4);
                var10 = var5.nick;
                var4 = var5.colorString;
                var7 = var5.colorStrings;
                var6 = var5.guildId;
                var5 = 5;
                var5 = var9[var5];
                var11 = var8.bind(var2)(var5);
                var9 = var11.isNativeMessageEligibleForEnhancedRoleColors;
                var8 = var0.id;
                var5 = var3.roleStyle;
                var8 = var9.bind(var11)(var6, var8, var5);
                var9 = {};
                var5 = 'bindUserMenu';
                var9.action = var5;
                var0 = var0.id;
                var9.userId = var0;
                var0 = var3.message;
                var0 = var0.channel_id;
                var9.messageChannelId = var0;
                var0 = true;
                var9.medium = var0;
                var9.colorString = var4;
                var12 = var3.roleStyle;
                var5 = null;
                var11 = 'username';
                var0 = null;
                if (!(var11 === var12)) {
                    _fun56478_ip = 183;
                    continue _fun56478
                }
            case 180:
                var0 = var4;
            case 183:
                var9.linkColor = var0;
                var9.roleColor = var4;
                var0 = null;
                if (!var8) {
                    _fun56478_ip = 201;
                    continue _fun56478
                }
            case 198:
                var0 = var7;
            case 201:
                var9.roleColors = var0;
                var7 = var3.roleStyle;
                var0 = 'dot';
                var0 = var0 === var7;
                if (!var0) {
                    _fun56478_ip = 227;
                    continue _fun56478
                }
            case 223:
                var0 = var5 != var4;
            case 227:
                var9.shouldShowRoleDot = var0;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 6;
                var0 = var7[var0];
                var7 = var4.bind(var2)(var0);
                var4 = var7.getSystemMessageEmoji;
                var0 = var3.message;
                var0 = var0.content;
                var8 = var4.bind(var7)(var0);
                if (!(var5 != var8)) {
                    _fun56478_ip = 872;
                    continue _fun56478
                }
            case 280:
                var4 = _closure1_slot3;
                var0 = var4.getDisambiguatedEmojiContext;
                var7 = var0.bind(var4)(var6);
                var4 = var5 == var7;
                var0 = undefined;
                if (var4) {
                    _fun56478_ip = 320;
                    continue _fun56478
                }
            case 304:
                var6 = var7.getById;
                var4 = var8.id;
                var0 = var6.bind(var7)(var4);
            case 320:
                var6 = _closure1_slot1;
                var14 = _closure1_slot2;
                var4 = 9;
                var7 = var14[var4];
                var12 = var6.bind(var2)(var7);
                var11 = var12.getEmojiURL;
                var7 = {};
                var13 = var8.id;
                var7.id = var13;
                var13 = var8.animated;
                var7.animated = var13;
                var13 = 48;
                var7.size = var13;
                var11 = var11.bind(var12)(var7);
                var4 = var14[var4];
                var12 = var6.bind(var2)(var4);
                var7 = var12.getEmojiURL;
                var4 = {
                    'id': null,
                    'animated': false,
                    'size': 48
                };
                var6 = var8.id;
                var4.id = var6;
                var6 = false;
                var4 = var7.bind(var12)(var4);
                var12 = {};
                var13 = _closure1_slot0;
                var7 = 10;
                var7 = var14[var7];
                var7 = var13.bind(var2)(var7);
                var7 = var7.AST_KEY;
                var7 = var7.CUSTOM_EMOJI;
                var12.type = var7;
                var12.jumboable = var6;
                var12.src = var11;
                var12.frozenSrc = var4;
                var4 = var8.name;
                var12.alt = var4;
                var4 = var8.id;
                var12.id = var4;
                var4 = var8.animated;
                var12.animateEmoji = var4;
                var13 = {
                    'action': 'bindInsertText',
                    'text': null,
                    'addSpace': true
                };
                var4 = var5 == var0;
                var6 = undefined;
                if (var4) {
                    _fun56478_ip = 534;
                    continue _fun56478
                }
            case 529:
                var6 = var0.name;
            case 534:
                if (!(var5 == var6)) {
                    _fun56478_ip = 543;
                    continue _fun56478
                }
            case 538:
                var6 = var8.name;
            case 543:
                var0 = global;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var0 = ':';
                var0 = var4.bind(var0)(var6, var0);
                var13.text = var0;
                var4 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 7;
                var6 = var14[var0];
                var6 = var4.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var0 = var14[var0];
                var0 = var4.bind(var2)(var0);
                var0 = var0.t;
                var4 = var0.SYlkPk;
                var0 = {};
                var0.username = var10;
                var0.usernameOnClick = var9;
                var14 = var8.name;
                var0.emojiName = var14;
                var0.emojiOnClick = var13;
                var0.emojiPreview = var12;
                var6 = var6.bind(var7)(var4, var0);
                var7 = _closure1_slot4;
                var4 = var7.getChannel;
                var0 = var3.message;
                var0 = var0.channel_id;
                var12 = var4.bind(var7)(var0);
                var7 = _closure1_slot5;
                var4 = var7.can;
                var0 = _closure1_slot6;
                var0 = var0.ADD_REACTIONS;
                var0 = var4.bind(var7)(var0, var12);
                var4 = undefined;
                if (!var0) {
                    _fun56478_ip = 786;
                    continue _fun56478
                }
            case 719:
                var0 = {
                    'count': 0,
                    'burst_count': 0,
                    'me': false,
                    'me_burst': false
                };
                var7 = {};
                var12 = var8.id;
                var7.id = var12;
                var12 = var8.name;
                var7.name = var12;
                var12 = var8.animated;
                var7.animated = var12;
                var7.src = var11;
                var8 = var8.name;
                var7.displayName = var8;
                var0.emoji = var7;
                var4 = var0;
            case 786:
                var0 = {};
                var0.content = var6;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 8;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                var16 = var6.bind(var2)(var3);
                var17 = var0;
                var6 = copyDataProperties(var17, var16);
                var6 = var3.reactions;
                var7 = var6.length;
                var6 = 0;
                if (!(!(var7 > var6))) {
                    _fun56478_ip = 855;
                    continue _fun56478
                }
            case 841:
                if (!(var5 != var4)) {
                    _fun56478_ip = 855;
                    continue _fun56478
                }
            case 845:
                var5 = new Array(1);
                var5[0] = var4;
                _fun56478_ip = 861;
                continue _fun56478;
            case 855:
                var5 = var3.reactions;
            case 861:
                var4 = 'reactions';
                var0[var4] = var5;
                return var0;
            case 872:
                var0 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 7;
                var7 = var5[var4];
                var7 = var6.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var4 = var5[var4];
                var4 = var6.bind(var2)(var4);
                var4 = var4.t;
                var6 = var4["7NBgIX"];
                var4 = {};
                var4.username = var10;
                var4.usernameOnClick = var9;
                var4 = var7.bind(var8)(var6, var4);
                var0.content = var4;
                var4 = _closure1_slot1;
                var1 = 8;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var16 = var1.bind(var2)(var3);
                var17 = var0;
                var1 = copyDataProperties(var17, var16);
                return var0;
        }
    };
    var2.createEmojiAddedSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4739, 1372, 3093, 660, 6743, 6744, 6835, 1234, 6745, 1417, 4788, 2]);