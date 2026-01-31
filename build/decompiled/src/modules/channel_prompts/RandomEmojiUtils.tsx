// modules/channel_prompts/RandomEmojiUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: isGuildSafe, environment: var1
        _fun79263: for (var _fun79263_ip = 0;;) switch (_fun79263_ip) {
            case 0:
                var3 = _closure1_slot6;
                var1 = var3.getGuild;
                var0 = arg0;
                var3 = var1.bind(var3)(var0);
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun79263_ip = 75;
                    continue _fun79263
                }
            case 29:
                var4 = var3.nsfwLevel;
                var1 = _closure1_slot8;
                var1 = var1.DEFAULT;
                var1 = var4 === var1;
                if (var1) {
                    _fun79263_ip = 72;
                    continue _fun79263
                }
            case 52:
                var3 = var3.nsfwLevel;
                var2 = _closure1_slot8;
                var2 = var2.SAFE;
                var1 = var3 === var2;
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() { // Original name: _sendRandomStickerOrEmoji, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun79266: for (var _fun79266_ip = 0;;) switch (_fun79266_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg0;
                        var11 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79266_ip = 1031;
                            continue _fun79266
                        }
                    case 18:
                        var _closure4_slot0 = var11;
                        var2 = undefined;
                        var _closure4_slot1 = var2;
                        var _closure4_slot2 = var2;
                        var1 = var11.getGuildId;
                        var5 = var1.bind(var11)();
                        _closure4_slot1 = var5;
                        var12 = null;
                        if (!(var12 != var5)) {
                            _fun79266_ip = 1025;
                            continue _fun79266
                        }
                    case 55:
                        var4 = _closure1_slot6;
                        var1 = var4.getGuild;
                        var1 = var1.bind(var4)(var5);
                        if (!(var12 != var1)) {
                            _fun79266_ip = 1025;
                            continue _fun79266
                        }
                    case 79:
                        var4 = _closure1_slot7;
                        var1 = var4.getCurrentUser;
                        var1 = var1.bind(var4)();
                        _closure4_slot2 = var1;
                        if (!(var12 != var1)) {
                            _fun79266_ip = 1025;
                            continue _fun79266
                        }
                    case 103:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 8;
                        var1 = var5[var1];
                        var4 = var4.bind(var2)(var1);
                        var1 = var4.fetchStickerPacks;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 137);
                    case 135:
                        return var1;
                    case 137:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun79266_ip = 1028;
                            continue _fun79266
                        }
                    case 146:
                        var4 = global;
                        var8 = var4.Array;
                        var7 = var8.from;
                        var9 = _closure1_slot5;
                        var5 = var9.getAllGuildStickers;
                        var9 = var5.bind(var9)();
                        var5 = var9.values;
                        var5 = var5.bind(var9)();
                        var7 = var7.bind(var8)(var5);
                        var5 = var7.flat;
                        var8 = var5.bind(var7)();
                        var7 = var8.filter;
                        var5 = function(arg0) { // Environment: var6
                            _fun79267: for (var _fun79267_ip = 0;;) switch (_fun79267_ip) {
                                case 0:
                                    var5 = arg0;
                                    var2 = _closure1_slot11;
                                    var0 = var5.guild_id;
                                    var3 = undefined;
                                    var0 = var2.bind(var3)(var0);
                                    if (!var0) {
                                        _fun79267_ip = 69;
                                        continue _fun79267
                                    }
                                case 25:
                                    var2 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var1 = 9;
                                    var1 = var4[var1];
                                    var4 = var2.bind(var3)(var1);
                                    var3 = var4.isSendableSticker;
                                    var2 = _closure4_slot2;
                                    var1 = _closure4_slot0;
                                    var0 = var3.bind(var4)(var5, var2, var1);
                                case 69:
                                    return var0;
                            }
                        };
                        var8 = var7.bind(var8)(var5);
                        var7 = var8.sort;
                        var5 = function(arg0, arg1) { // Environment: var6
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.compare;
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = arg1;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = -var0;
                            return var0;
                        };
                        var5 = var7.bind(var8)(var5);
                        var8 = var5.length;
                        var7 = 5;
                        if (!(!(var8 > var7))) {
                            _fun79266_ip = 831;
                            continue _fun79266
                        }
                    case 247:
                        var8 = _closure1_slot6;
                        var7 = var8.getGuildIds;
                        var9 = var7.bind(var8)();
                        var8 = var9.filter;
                        var7 = _closure1_slot11;
                        var9 = var8.bind(var9)(var7);
                        var8 = var9.map;
                        var7 = function(arg0) { // Environment: var6
                            var2 = _closure1_slot4;
                            var1 = var2.getUsableGuildEmoji;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var8 = var8.bind(var9)(var7);
                        var7 = var8.flat;
                        var9 = var7.bind(var8)();
                        var8 = var9.filter;
                        var7 = function(arg0) { // Environment: var6
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.getEmojiUnavailableReason;
                            var0 = {};
                            var4 = arg0;
                            var0.emoji = var4;
                            var5 = _closure4_slot0;
                            var0.channel = var5;
                            var4 = _closure4_slot1;
                            var0.guildId = var4;
                            var3 = _closure1_slot9;
                            var3 = var3.CHAT;
                            var0.intention = var3;
                            var1 = var1.bind(var2)(var0);
                            var0 = null;
                            var0 = var0 == var1;
                            return var0;
                        };
                        var9 = var8.bind(var9)(var7);
                        var8 = var9.sort;
                        var7 = function(arg0, arg1) { // Environment: var6
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 10;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.compare;
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = arg1;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = -var0;
                            return var0;
                        };
                        var7 = var8.bind(var9)(var7);
                        var9 = var7.length;
                        var8 = 10;
                        if (!(!(var9 > var8))) {
                            _fun79266_ip = 596;
                            continue _fun79266
                        }
                    case 352:
                        var13 = var4.Array;
                        var9 = var13.from;
                        var14 = _closure1_slot5;
                        var8 = var14.getAllPackStickers;
                        var14 = var8.bind(var14)();
                        var8 = var14.values;
                        var8 = var8.bind(var14)();
                        var9 = var9.bind(var13)(var8);
                        var8 = var9.flat;
                        var9 = var8.bind(var9)();
                        var8 = var9.filter;
                        var6 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var1 = var0.type;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var2 = var2[var0];
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2);
                            var0 = var0.MetaStickerType;
                            var0 = var0.STANDARD;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var8 = var8.bind(var9)(var6);
                        var13 = var4.Math;
                        var9 = var13.floor;
                        var14 = var4.Math;
                        var6 = var14.random;
                        var14 = var6.bind(var14)();
                        var6 = var8.length;
                        var6 = var14 * var6;
                        var6 = var9.bind(var13)(var6);
                        var6 = var8[var6];
                        var6 = var6.id;
                        var15 = new Array(1);
                        var15[0] = var6;
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 11;
                        var6 = var9[var6];
                        var14 = var8.bind(var2)(var6);
                        var13 = var14.sendStickers;
                        var9 = var11.id;
                        var8 = {};
                        var6 = {};
                        var16 = var11.getGuildId;
                        var17 = var16.bind(var11)();
                        var18 = var12 != var17;
                        var16 = undefined;
                        if (!var18) {
                            _fun79266_ip = 534;
                            continue _fun79266
                        }
                    case 531:
                        var16 = var17;
                    case 534:
                        var6.guild_id = var16;
                        var16 = var11.id;
                        var6.channel_id = var16;
                        var6.message_id = var10;
                        var8.messageReference = var6;
                        var6 = _closure1_slot10;
                        var6 = var6.CHANNEL_PROMPT;
                        var8.location = var6;
                        var20 = '';
                        var23 = var14;
                        var22 = var9;
                        var21 = var15;
                        var19 = var8;
                        var6 = var23[var13](var22, var21, var20, var19, var18);
                        _fun79266_ip = 1025;
                        continue _fun79266;
                    case 596:
                        var9 = var4.Math;
                        var8 = var9.floor;
                        var15 = var4.Math;
                        var14 = var15.pow;
                        var13 = var4.Math;
                        var6 = var13.random;
                        var13 = var6.bind(var13)();
                        var6 = 2;
                        var13 = var14.bind(var15)(var13, var6);
                        var6 = var7.length;
                        var6 = var13 * var6;
                        var6 = var8.bind(var9)(var6);
                        var16 = var7[var6];
                        var7 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var6 = 11;
                        var6 = var17[var6];
                        var14 = var7.bind(var2)(var6);
                        var13 = var14.sendMessage;
                        var9 = var11.id;
                        var6 = 13;
                        var6 = var17[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.parse;
                        var15 = _closure1_slot0;
                        var6 = 12;
                        var6 = var17[var6];
                        var15 = var15.bind(var2)(var6);
                        var6 = var15.getAllEmojiNamesString;
                        var6 = var6.bind(var15)(var16);
                        var8 = var7.bind(var8)(var11, var6);
                        var7 = {};
                        var6 = _closure1_slot10;
                        var6 = var6.CHANNEL_PROMPT;
                        var7.location = var6;
                        var6 = {};
                        var15 = var11.getGuildId;
                        var16 = var15.bind(var11)();
                        var17 = var12 != var16;
                        var15 = undefined;
                        if (!var17) {
                            _fun79266_ip = 785;
                            continue _fun79266
                        }
                    case 782:
                        var15 = var16;
                    case 785:
                        var6.guild_id = var15;
                        var15 = var11.id;
                        var6.channel_id = var15;
                        var6.message_id = var10;
                        var7.messageReference = var6;
                        var20 = false;
                        var23 = var14;
                        var22 = var9;
                        var21 = var8;
                        var19 = var7;
                        var6 = var23[var13](var22, var21, var20, var19, var18);
                        _fun79266_ip = 1025;
                        continue _fun79266;
                    case 831:
                        var7 = var4.Math;
                        var6 = var7.floor;
                        var13 = var4.Math;
                        var9 = var13.pow;
                        var8 = var4.Math;
                        var4 = var8.random;
                        var8 = var4.bind(var8)();
                        var4 = 2;
                        var8 = var9.bind(var13)(var8, var4);
                        var4 = var5.length;
                        var4 = var8 * var4;
                        var4 = var6.bind(var7)(var4);
                        var4 = var5[var4];
                        var4 = var4.id;
                        var8 = new Array(1);
                        var8[0] = var4;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 11;
                        var4 = var6[var4];
                        var7 = var5.bind(var2)(var4);
                        var6 = var7.sendStickers;
                        var5 = var11.id;
                        var4 = {};
                        var9 = {};
                        var13 = var11.getGuildId;
                        var13 = var13.bind(var11)();
                        var14 = var12 != var13;
                        var12 = undefined;
                        if (!var14) {
                            _fun79266_ip = 968;
                            continue _fun79266
                        }
                    case 965:
                        var12 = var13;
                    case 968:
                        var9.guild_id = var12;
                        var11 = var11.id;
                        var9.channel_id = var11;
                        var9.message_id = var10;
                        var4.messageReference = var9;
                        var3 = _closure1_slot10;
                        var3 = var3.CHANNEL_PROMPT;
                        var4.location = var3;
                        var20 = '';
                        var23 = var7;
                        var22 = var5;
                        var21 = var8;
                        var19 = var4;
                        var3 = var23[var6](var22, var21, var20, var19, var18);
                    case 1025:
                        return var2;
                    case 1028:
                        return var1;
                    case 1031:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildNSFWContentLevel;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot10 = var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_prompts/RandomEmojiUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: sendRandomStickerOrEmoji, environment: var1
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.sendRandomStickerOrEmoji = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 4700, 5556, 1410, 1613, 660, 1616, 1346, 9319, 5573, 21, 6488, 3067, 5550, 4183, 2]);