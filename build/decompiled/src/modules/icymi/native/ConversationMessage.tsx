// modules/icymi/native/ConversationMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot8 = var6;
    var3 = var3.MessageEmbedTypes;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'row';
    var8.flexDirection = var9;
    var9 = 8;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.gap = var12;
    var3.messageContainer = var8;
    var8 = {};
    var8.flex = var11;
    var3.messageContent = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.marginTop = var9;
    var9 = 'none';
    var8.pointerEvents = var9;
    var3.emojiContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/icymi/native/ConversationMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun104295: for (var _fun104295_ip = 0;;) switch (_fun104295_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.message;
                var _closure2_slot0 = var2;
                var15 = var0.channel;
                var _closure2_slot1 = var15;
                var20 = var0.showTimestamps;
                var18 = var0.muted;
                var3 = undefined;
                if (!(var18 === var3)) {
                    _fun104295_ip = 43;
                    continue _fun104295
                }
            case 41:
                var18 = false;
            case 43:
                var _closure2_slot2 = var3;
                var0 = _closure1_slot12;
                var12 = var0.bind(var3)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 9;
                var0 = var5[var2];
                var8 = var4.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot7;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    _fun104296: for (var _fun104296_ip = 0;;) switch (_fun104296_ip) {
                        case 0:
                            var4 = _closure1_slot7;
                            var3 = var4.getMessage;
                            var0 = _closure2_slot0;
                            var2 = var0.channel_id;
                            var0 = var0.id;
                            var0 = var3.bind(var4)(var2, var0);
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun104296_ip = 46;
                                continue _fun104296
                            }
                        case 42:
                            var0 = _closure2_slot0;
                        case 46:
                            return var0;
                    }
                };
                var13 = var7.bind(var8)(var6, var0);
                _closure2_slot2 = var13;
                var0 = var5[var2];
                var8 = var4.bind(var3)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var1
                    var3 = _closure1_slot5;
                    var2 = var3.getMember;
                    var1 = _closure2_slot1;
                    var1 = var1.guild_id;
                    var0 = _closure2_slot2;
                    var0 = var0.author;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var6, var0);
                var2 = var5[var2];
                var6 = var4.bind(var3)(var2);
                var5 = var6.useStateFromStores;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot6;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14 = var5.bind(var6)(var4, var2);
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var2 = var13.attachments;
                var6 = var2.length;
                var2 = new Array(3);
                var2[0] = var6;
                var6 = var13.content;
                var2[1] = var6;
                var6 = var13.embeds;
                var2[2] = var6;
                var1 = function() { // Environment: var1
                    _fun104299: for (var _fun104299_ip = 0;;) switch (_fun104299_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var0 = var0.embeds;
                            var1 = var0.length;
                            var0 = 1;
                            var1 = var0 !== var1;
                            if (var1) {
                                _fun104299_ip = 49;
                                continue _fun104299
                            }
                        case 28:
                            var0 = _closure2_slot2;
                            var0 = var0.attachments;
                            var3 = var0.length;
                            var0 = 0;
                            var1 = var3 > var0;
                        case 49:
                            var0 = !var1;
                            if (var1) {
                                _fun104299_ip = 131;
                                continue _fun104299
                            }
                        case 55:
                            var1 = _closure2_slot2;
                            var1 = var1.embeds;
                            var4 = 0;
                            var1 = var1[var4];
                            var3 = var1.type;
                            var1 = _closure1_slot9;
                            var1 = var1.GIFV;
                            var1 = var3 === var1;
                            if (!var1) {
                                _fun104299_ip = 128;
                                continue _fun104299
                            }
                        case 96:
                            var3 = _closure2_slot2;
                            var3 = var3.embeds;
                            var3 = var3[var4];
                            var3 = var3.url;
                            var2 = _closure2_slot2;
                            var2 = var2.content;
                            var1 = var3 === var2;
                        case 128:
                            var0 = var1;
                        case 131:
                            return var0;
                    }
                };
                var17 = var4.bind(var5)(var1, var2);
                var7 = null;
                var1 = var7 == var0;
                var21 = undefined;
                if (var1) {
                    _fun104295_ip = 267;
                    continue _fun104295
                }
            case 261:
                var21 = var0.colorString;
            case 267:
                if (!(var7 == var21)) {
                    _fun104295_ip = 275;
                    continue _fun104295
                }
            case 271:
                var21 = _closure1_slot8;
            case 275:
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 10;
                var0 = var6[var0];
                var4 = var8.bind(var3)(var0);
                var2 = var4.extractMediaSourcesFromMessage;
                var29 = var15.guild_id;
                var0 = 11;
                var0 = var6[var0];
                var0 = var8.bind(var3)(var0);
                var28 = var0.GRAVITY_VALID_EMBED_TYPES;
                var32 = var4;
                var31 = var13;
                var30 = var13;
                var10 = var32[var2](var31, var30, var29, var28, var27);
                var0 = 12;
                var0 = var6[var0];
                var5 = var8.bind(var3)(var0);
                var4 = var5.useName;
                var2 = var15.guild_id;
                var1 = var15.id;
                var0 = var13.author;
                var19 = var4.bind(var5)(var2, var1, var0);
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var12.messageContainer;
                var0.style = var4;
                var9 = _closure1_slot10;
                var5 = _closure1_slot1;
                var16 = 13;
                var4 = var6[var16];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var22 = var13.author;
                var4.user = var22;
                var16 = var6[var16];
                var16 = var8.bind(var3)(var16);
                var16 = var16.AvatarSizes;
                var16 = var16.REFRESH_MEDIUM_32;
                var4.size = var16;
                var16 = var15.guild_id;
                var4.guildId = var16;
                var5 = var9.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var9 = var12.messageContent;
                var5.style = var9;
                var16 = 14;
                var6 = var6[var16];
                var6 = var8.bind(var3)(var6);
                var8 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'text-strong'
                };
                var9 = {};
                var9.color = var21;
                var6.style = var9;
                var9 = new Array(2);
                var9[0] = var19;
                var19 = null;
                if (!var20) {
                    _fun104295_ip = 665;
                    continue _fun104295
                }
            case 546:
                var22 = _closure1_slot11;
                var24 = _closure1_slot0;
                var27 = _closure1_slot2;
                var20 = var27[var16];
                var20 = var24.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var23 = 15;
                var23 = var27[var23];
                var25 = var24.bind(var3)(var23);
                var24 = var25.getRelativeTimestamp;
                var26 = _closure1_slot1;
                var23 = 16;
                var23 = var27[var23];
                var27 = var26.bind(var3)(var23);
                var26 = var27.extractTimestamp;
                var23 = var13.id;
                var23 = var26.bind(var27)(var23);
                var24 = var24.bind(var25)(var23);
                var23 = ['   '];
                var23[1] = var24;
                var20.children = var23;
                var19 = var22.bind(var3)(var21, var20);
            case 665:
                var9[1] = var19;
                var6.children = var9;
                var8 = var2.bind(var3)(var8, var6);
                var6 = new Array(4);
                var6[0] = var8;
                var8 = var13.content;
                var8 = var8.length;
                var9 = 0;
                var8 = var8 > var9;
                if (!var8) {
                    _fun104295_ip = 709;
                    continue _fun104295
                }
            case 706:
                var8 = !var17;
            case 709:
                if (!var8) {
                    _fun104295_ip = 797;
                    continue _fun104295
                }
            case 712:
                var19 = _closure1_slot10;
                var17 = _closure1_slot0;
                var22 = _closure1_slot2;
                var16 = var22[var16];
                var16 = var17.bind(var3)(var16);
                var17 = var16.Text;
                var16 = {
                    'variant': 'text-md/normal',
                    'lineClamp': 5,
                    'color': 'text-strong'
                };
                var21 = _closure1_slot1;
                var20 = 17;
                var20 = var22[var20];
                var23 = var21.bind(var3)(var20);
                var22 = var23.parseInlineReply;
                var21 = var13.content;
                var20 = true;
                var20 = var22.bind(var23)(var21, var20);
                var16.children = var20;
                var8 = var19.bind(var3)(var17, var16);
            case 797:
                var6[1] = var8;
                var8 = var7 != var10;
                if (!var8) {
                    _fun104295_ip = 817;
                    continue _fun104295
                }
            case 808:
                var10 = var10.length;
                var8 = var10 > var9;
            case 817:
                if (!var8) {
                    _fun104295_ip = 875;
                    continue _fun104295
                }
            case 820:
                var17 = _closure1_slot10;
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var10 = 18;
                var10 = var19[var10];
                var10 = var16.bind(var3)(var10);
                var16 = var10.MediaOnlyRowPreview;
                var10 = {};
                var10.message = var13;
                var10.muted = var18;
                var18 = 2;
                var10.lineClamp = var18;
                var8 = var17.bind(var3)(var16, var10);
            case 875:
                var6[2] = var8;
                var7 = var7 != var14;
                if (!var7) {
                    _fun104295_ip = 901;
                    continue _fun104295
                }
            case 886:
                var8 = var13.reactions;
                var8 = var8.length;
                var7 = var8 > var9;
            case 901:
                if (!var7) {
                    _fun104295_ip = 999;
                    continue _fun104295
                }
            case 904:
                var10 = _closure1_slot10;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var12.emojiContainer;
                var8.style = var12;
                var12 = _closure1_slot1;
                var16 = _closure1_slot2;
                var11 = 19;
                var11 = var16[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.message = var13;
                var11.channel = var15;
                var11.guild = var14;
                var13 = var13.id;
                var11.id = var13;
                var13 = 'message';
                var11.itemType = var13;
                var13 = true;
                var11.hideAdditionalButtons = var13;
                var11 = var10.bind(var3)(var12, var11);
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 999:
                var6[3] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1681, 1410, 4252, 660, 33, 1297, 671, 566, 8883, 6645, 3961, 5457, 3943, 4223, 21, 4784, 13599, 13602, 2]);