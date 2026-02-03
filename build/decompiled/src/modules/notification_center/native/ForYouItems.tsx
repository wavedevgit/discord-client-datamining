// modules/notification_center/native/ForYouItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function arg0() {
        _fun103151: for (var _fun103151_ip = 0;;) switch (_fun103151_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.loading;
                var0 = null;
                if (!var1) {
                    _fun103151_ip = 57;
                    continue _fun103151
                }
            case 14:
                var4 = _closure1_slot20;
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 17;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.ForYouMentionPlaceholder;
                var1 = {};
                var0 = var4.bind(var3)(var2, var1);
            case 57:
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0() {
        _fun103152: for (var _fun103152_ip = 0;;) switch (_fun103152_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot29;
                var1 = var1.ATTACHMENT;
                if (!(var1 !== var2)) {
                    _fun103152_ip = 100;
                    continue _fun103152
                }
            case 20:
                var1 = _closure1_slot29;
                var1 = var1.STICKER;
                if (!(var1 !== var2)) {
                    _fun103152_ip = 76;
                    continue _fun103152
                }
            case 34:
                var1 = _closure1_slot29;
                var1 = var1.VOICE_MESSAGE;
                if (!(var1 !== var2)) {
                    _fun103152_ip = 52;
                    continue _fun103152
                }
            case 48:
                var1 = null;
                return var1;
            case 52:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 24;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 76:
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 23;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            case 100:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 22;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun103153: for (var _fun103153_ip = 0;;) switch (_fun103153_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.item;
                var12 = var0.acked;
                var11 = var0.compactMode;
                var0 = _closure1_slot28;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var1 = _closure1_slot2;
                var13 = _closure1_slot3;
                var0 = 16;
                var0 = var13[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.getParser;
                var0 = _closure1_slot25;
                var0 = var0.bind(var3)();
                var9 = var1.bind(var2)(var0);
                var2 = _closure1_slot21;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var10.calloutContainer;
                var0.style = var4;
                var4 = 'none';
                var0.pointerEvents = var4;
                var7 = _closure1_slot20;
                var6 = _closure1_slot7;
                var4 = {};
                var14 = var10.messagePreviewBarV2;
                var4.style = var14;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot20;
                var6 = _closure1_slot0;
                var5 = 14;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                if (var12) {
                    _fun103153_ip = 173;
                    continue _fun103153
                }
            case 165:
                var12 = var10.calloutTextNotAcked;
                _fun103153_ip = 179;
                continue _fun103153;
            case 173:
                var12 = var10.calloutTextAcked;
            case 179:
                var10 = new Array(1);
                var10[0] = var12;
                var5.style = var10;
                var10 = 'redesign/message-preview/medium';
                var5.variant = var10;
                var10 = 10;
                if (!var11) {
                    _fun103153_ip = 210;
                    continue _fun103153
                }
            case 207:
                var10 = 3;
            case 210:
                var5.lineClamp = var10;
                var8 = var8.callout;
                var8 = var9.bind(var3)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun103154: for (var _fun103154_ip = 0;;) switch (_fun103154_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.item;
                var _closure2_slot0 = var8;
                var10 = var1.acked;
                var11 = var1.compactMode;
                var6 = var1.roleStyle;
                var1 = _closure1_slot28;
                var3 = undefined;
                var16 = var1.bind(var3)();
                var2 = _closure1_slot2;
                var12 = _closure1_slot3;
                var1 = 16;
                var1 = var12[var1];
                var5 = var2.bind(var3)(var1);
                var4 = var5.getNotifCenterV2MessagePreviewParser;
                var1 = _closure1_slot26;
                var2 = var1.bind(var3)();
                var1 = _closure1_slot27;
                var13 = var4.bind(var5)(var2, var1, var6);
                var1 = {};
                var1.item = var8;
                var1 = var1.item;
                var4 = _closure1_slot0;
                var19 = 18;
                var2 = var12[var19];
                var2 = var4.bind(var3)(var2);
                var6 = var2.intl;
                var5 = var6.string;
                var2 = var12[var19];
                var2 = var4.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.BOi07B;
                var6 = var5.bind(var6)(var2);
                var7 = 19;
                var2 = var12[var7];
                var15 = var4.bind(var3)(var2);
                var5 = var15.hasFlag;
                var4 = var1.message;
                var9 = null;
                var14 = var9 == var4;
                var2 = undefined;
                if (var14) {
                    _fun103154_ip = 193;
                    continue _fun103154
                }
            case 188:
                var2 = var4.flags;
            case 193:
                var17 = var9 != var2;
                var14 = 0;
                var4 = 0;
                if (!var17) {
                    _fun103154_ip = 207;
                    continue _fun103154
                }
            case 204:
                var4 = var2;
            case 207:
                var2 = _closure1_slot16;
                var2 = var2.IS_VOICE_MESSAGE;
                var15 = var5.bind(var15)(var4, var2);
                var2 = var1.message;
                var4 = var9 == var2;
                var21 = undefined;
                if (var4) {
                    _fun103154_ip = 242;
                    continue _fun103154
                }
            case 237:
                var21 = var2.type;
            case 242:
                var2 = _closure1_slot18;
                var17 = var2.POLL_RESULT;
                var4 = var1.message;
                var5 = var9 == var4;
                var2 = undefined;
                if (var5) {
                    _fun103154_ip = 272;
                    continue _fun103154
                }
            case 266:
                var2 = var4.attachments;
            case 272:
                if (!(var9 == var2)) {
                    _fun103154_ip = 280;
                    continue _fun103154
                }
            case 276:
                var2 = new Array(0);
            case 280:
                var5 = var2.length;
                var4 = var1.message;
                var20 = var9 == var4;
                var2 = undefined;
                if (var20) {
                    _fun103154_ip = 305;
                    continue _fun103154
                }
            case 299:
                var2 = var4.stickers;
            case 305:
                if (!(var9 == var2)) {
                    _fun103154_ip = 313;
                    continue _fun103154
                }
            case 309:
                var2 = new Array(0);
            case 313:
                var4 = var2.length;
                var20 = var1.message;
                var22 = var9 == var20;
                var2 = undefined;
                if (var22) {
                    _fun103154_ip = 338;
                    continue _fun103154
                }
            case 332:
                var2 = var20.embeds;
            case 338:
                if (!(var9 == var2)) {
                    _fun103154_ip = 346;
                    continue _fun103154
                }
            case 342:
                var2 = new Array(0);
            case 346:
                var2 = var2.length;
                var22 = var1.message;
                var23 = var9 == var22;
                var20 = undefined;
                if (var23) {
                    _fun103154_ip = 371;
                    continue _fun103154
                }
            case 365:
                var20 = var22.interaction;
            case 371:
                var20 = var9 != var20;
                if (!(var21 !== var17)) {
                    _fun103154_ip = 796;
                    continue _fun103154
                }
            case 382:
                if (!(!(var4 > var14))) {
                    _fun103154_ip = 732;
                    continue _fun103154
                }
            case 389:
                var17 = _closure1_slot0;
                var4 = _closure1_slot3;
                if (var20) {
                    _fun103154_ip = 681;
                    continue _fun103154
                }
            case 403:
                if (var15) {
                    _fun103154_ip = 622;
                    continue _fun103154
                }
            case 409:
                var7 = var4[var7];
                var21 = var17.bind(var3)(var7);
                var20 = var21.hasFlag;
                var15 = var1.message;
                var22 = var9 == var15;
                var7 = undefined;
                if (var22) {
                    _fun103154_ip = 443;
                    continue _fun103154
                }
            case 438:
                var7 = var15.flags;
            case 443:
                var22 = var9 != var7;
                var15 = 0;
                if (!var22) {
                    _fun103154_ip = 455;
                    continue _fun103154
                }
            case 452:
                var15 = var7;
            case 455:
                var7 = _closure1_slot16;
                var7 = var7.IS_COMPONENTS_V2;
                var7 = var20.bind(var21)(var15, var7);
                if (var7) {
                    _fun103154_ip = 563;
                    continue _fun103154
                }
            case 474:
                var7 = var5 > var14;
                if (var7) {
                    _fun103154_ip = 485;
                    continue _fun103154
                }
            case 481:
                var7 = var2 > var14;
            case 485:
                var2 = undefined;
                var5 = var6;
                if (!var7) {
                    _fun103154_ip = 899;
                    continue _fun103154
                }
            case 496:
                var21 = _closure1_slot0;
                var7 = _closure1_slot3;
                var15 = var7[var19];
                var15 = var21.bind(var3)(var15);
                var20 = var15.intl;
                var15 = var20.string;
                var7 = var7[var19];
                var7 = var21.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.JAKsM8;
                var5 = var15.bind(var20)(var7);
                var15 = _closure1_slot29;
                var2 = var15.ATTACHMENT;
                _fun103154_ip = 899;
                continue _fun103154;
            case 563:
                var21 = _closure1_slot0;
                var7 = _closure1_slot3;
                var15 = var7[var19];
                var15 = var21.bind(var3)(var15);
                var20 = var15.intl;
                var15 = var20.string;
                var7 = var7[var19];
                var7 = var21.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.Xxm5i3;
                var5 = var15.bind(var20)(var7);
                var2 = undefined;
                _fun103154_ip = 899;
                continue _fun103154;
            case 622:
                var7 = var4[var19];
                var7 = var17.bind(var3)(var7);
                var20 = var7.intl;
                var15 = var20.string;
                var7 = var4[var19];
                var7 = var17.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["6bhHrc"];
                var5 = var15.bind(var20)(var7);
                var15 = _closure1_slot29;
                var2 = var15.VOICE_MESSAGE;
                _fun103154_ip = 899;
                continue _fun103154;
            case 681:
                var7 = var4[var19];
                var7 = var17.bind(var3)(var7);
                var15 = var7.intl;
                var7 = var15.string;
                var4 = var4[var19];
                var4 = var17.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["2v7kfl"];
                var5 = var7.bind(var15)(var4);
                var2 = undefined;
                _fun103154_ip = 899;
                continue _fun103154;
            case 732:
                var17 = _closure1_slot0;
                var4 = _closure1_slot3;
                var7 = var4[var19];
                var7 = var17.bind(var3)(var7);
                var15 = var7.intl;
                var7 = var15.string;
                var4 = var4[var19];
                var4 = var17.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["7K5Lma"];
                var5 = var7.bind(var15)(var4);
                var7 = _closure1_slot29;
                var2 = var7.STICKER;
                _fun103154_ip = 899;
                continue _fun103154;
            case 796:
                var4 = var1.message;
                var15 = var9 == var4;
                var7 = undefined;
                if (var15) {
                    _fun103154_ip = 829;
                    continue _fun103154
                }
            case 810:
                var4 = var4.embeds;
                var15 = var9 == var4;
                var7 = undefined;
                if (var15) {
                    _fun103154_ip = 829;
                    continue _fun103154
                }
            case 825:
                var7 = var4[var14];
            case 829:
                var14 = _closure1_slot1;
                var15 = _closure1_slot3;
                var4 = 20;
                var4 = var15[var4];
                var4 = var14.bind(var3)(var4);
                var7 = var4.bind(var3)(var7);
                var4 = var9 != var7;
                var2 = undefined;
                var5 = var6;
                if (!var4) {
                    _fun103154_ip = 899;
                    continue _fun103154
                }
            case 866:
                var6 = _closure1_slot0;
                var14 = _closure1_slot3;
                var4 = 21;
                var4 = var14[var4];
                var6 = var6.bind(var3)(var4);
                var4 = var6.formatPollResultNotificationCenterText;
                var5 = var4.bind(var6)(var7);
                var2 = undefined;
            case 899:
                var1 = var1.message;
                var4 = var9 == var1;
                var6 = undefined;
                if (var4) {
                    _fun103154_ip = 918;
                    continue _fun103154
                }
            case 913:
                var6 = var1.content;
            case 918:
                var4 = var9 != var6;
                if (!var4) {
                    _fun103154_ip = 933;
                    continue _fun103154
                }
            case 925:
                var1 = '';
                var4 = var1 !== var6;
            case 933:
                var1 = {};
                if (!var4) {
                    _fun103154_ip = 941;
                    continue _fun103154
                }
            case 938:
                var5 = var6;
            case 941:
                var1.content = var5;
                var4 = !var4;
                var1.isSystemMessage = var4;
                var1.iconType = var2;
                var19 = var1.content;
                var20 = var1.isSystemMessage;
                var21 = var1.iconType;
                var17 = var8.guild_id;
                var _closure2_slot1 = var17;
                var15 = var8.message_channel_id;
                var _closure2_slot2 = var15;
                var14 = var8.message_id;
                var6 = _closure1_slot0;
                var1 = 25;
                var2 = var12[var1];
                var7 = var6.bind(var3)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot12;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot12;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var5.bind(var7)(var4, var2);
                var2 = var12[var1];
                var7 = var6.bind(var3)(var2);
                var5 = var7.useStateFromStores;
                var2 = _closure1_slot11;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot11;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var5.bind(var7)(var4, var2);
                var1 = var12[var1];
                var4 = var6.bind(var3)(var1);
                var2 = var4.useStateFromStoresArray;
                var5 = _closure1_slot13;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    _fun103157: for (var _fun103157_ip = 0;;) switch (_fun103157_ip) {
                        case 0:
                            var5 = _closure1_slot13;
                            var3 = var5.getUser;
                            var0 = _closure2_slot0;
                            var6 = var0.message;
                            var1 = null;
                            var7 = var1 == var6;
                            var0 = undefined;
                            if (var7) {
                                _fun103157_ip = 47;
                                continue _fun103157
                            }
                        case 36:
                            var6 = var6.author;
                            var0 = var6.id;
                        case 47:
                            var3 = var3.bind(var5)(var0);
                            var0 = new Array(1);
                            var0[0] = var3;
                            var2 = _closure2_slot0;
                            var3 = var2.message;
                            var5 = var1 == var3;
                            var2 = undefined;
                            if (var5) {
                                _fun103157_ip = 112;
                                continue _fun103157
                            }
                        case 78:
                            var5 = var3.mentions;
                            var3 = var1 == var5;
                            var2 = undefined;
                            if (var3) {
                                _fun103157_ip = 112;
                                continue _fun103157
                            }
                        case 93:
                            var4 = var5.map;
                            var3 = function(arg0) { // Environment: var3
                                var2 = _closure1_slot13;
                                var1 = var2.getUser;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var2 = var4.bind(var5)(var3);
                        case 112:
                            if (!(var1 == var2)) {
                                _fun103157_ip = 120;
                                continue _fun103157
                            }
                        case 116:
                            var2 = new Array(0);
                        case 120:
                            var8 = 1;
                            var10 = var0;
                            var9 = var2;
                            var1 = arraySpread(var10, var9, var8);
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot21;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var16.messagePreviewContainerV2;
                var0.style = var4;
                var4 = 'none';
                var0.pointerEvents = var4;
                var7 = _closure1_slot20;
                var5 = _closure1_slot7;
                var4 = {};
                var22 = var16.messagePreviewBarV2;
                var4.style = var22;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot21;
                var5 = 14;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                if (var10) {
                    _fun103154_ip = 1222;
                    continue _fun103154
                }
            case 1214:
                var12 = var16.messagePreviewTextV2NotAcked;
                _fun103154_ip = 1228;
                continue _fun103154;
            case 1222:
                var12 = var16.messagePreviewTextV2Acked;
            case 1228:
                var10 = new Array(2);
                var10[0] = var12;
                var12 = undefined;
                if (!var20) {
                    _fun103154_ip = 1247;
                    continue _fun103154
                }
            case 1241:
                var12 = var16.messagePreviewSystemTextV2;
            case 1247:
                var10[1] = var12;
                var5.style = var10;
                var10 = 'redesign/message-preview/medium';
                var5.variant = var10;
                var10 = 10;
                if (!var11) {
                    _fun103154_ip = 1274;
                    continue _fun103154
                }
            case 1271:
                var10 = 3;
            case 1274:
                var5.lineClamp = var10;
                var11 = _closure1_slot0;
                var12 = _closure1_slot3;
                var10 = 26;
                var10 = var12[var10];
                var12 = var11.bind(var3)(var10);
                var11 = var12.renderMessageContentMarkup;
                var10 = {};
                var10.content = var19;
                var10.guildId = var17;
                var10.channelId = var15;
                var10.messageId = var14;
                var14 = var8.message;
                var15 = var9 == var14;
                var8 = undefined;
                if (var15) {
                    _fun103154_ip = 1348;
                    continue _fun103154
                }
            case 1337:
                var14 = var14.author;
                var8 = var14.id;
            case 1348:
                var10.authorId = var8;
                var8 = {};
                var10 = var11.bind(var12)(var13, var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var9 = var9 != var21;
                if (!var9) {
                    _fun103154_ip = 1491;
                    continue _fun103154
                }
            case 1377:
                var12 = _closure1_slot20;
                var11 = _closure1_slot7;
                var10 = {};
                var13 = var16.messagePreviewIconV2Container;
                var10.style = var13;
                var15 = _closure1_slot20;
                var14 = _closure1_slot1;
                var19 = _closure1_slot3;
                var17 = 27;
                var13 = var19[var17];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var20 = _closure1_slot33;
                var20 = var20.bind(var3)(var21);
                var13.source = var20;
                var18 = _closure1_slot0;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.IconSizes;
                var17 = var17.SMALL;
                var13.size = var17;
                var16 = var16.messagePreviewIconV2;
                var13.style = var16;
                var13 = var15.bind(var3)(var14, var13);
                var10.children = var13;
                var9 = var12.bind(var3)(var11, var10);
            case 1491:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function arg0() {
        _fun103159: for (var _fun103159_ip = 0;;) switch (_fun103159_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.applicationId;
                var _closure2_slot0 = var2;
                var6 = var1.textVariant;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 25;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var3 = var5.useStateFromStores;
                var7 = _closure1_slot10;
                var2 = new Array(1);
                var2[0] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot10;
                    var1 = var2.getApplication;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var3.bind(var5)(var2, var0);
                var2 = null;
                if (!(var2 != var0)) {
                    _fun103159_ip = 138;
                    continue _fun103159
                }
            case 81:
                var5 = _closure1_slot20;
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var2 = 28;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.application = var0;
                var2.textVariant = var6;
                var6 = 16;
                var2.iconSize = var6;
                var0 = var0.id;
                var0 = var5.bind(var4)(var3, var2, var0);
                _fun103159_ip = 154;
                continue _fun103159;
            case 138:
                var3 = _closure1_slot20;
                var2 = _closure1_slot7;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 154:
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var2 = var0.scrollRef;
        var3 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 52;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var0 = var1.useScrollToTop;
        var0 = var0.bind(var1)(var2);
        var0 = null;
        return var0;
    };
    var _closure1_slot37 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var14 = 1;
    var3 = var5[var14];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot6 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot7 = var7;
    var12 = var3.StyleSheet;
    var3 = var3.RefreshControl;
    var _closure1_slot8 = var3;
    var16 = 4;
    var3 = var5[var16];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var13 = 6;
    var3 = var5[var13];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var15 = 8;
    var3 = var5[var15];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot15 = var7;
    var7 = var3.MessageFlags;
    var _closure1_slot16 = var7;
    var7 = var3.AnalyticsLocations;
    var _closure1_slot17 = var7;
    var3 = var3.MessageTypes;
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NotificationTypes;
    var _closure1_slot19 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot20 = var7;
    var3 = var3.jsxs;
    var _closure1_slot21 = var3;
    var3 = {
        'waitForInteraction': false,
        'viewAreaCoveragePercentThreshold': 100,
        'minimumViewTime': 1000
    };
    var _closure1_slot22 = var3;
    var3 = 13;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var17 = {};
    var18 = 14;
    var10 = var5[var18];
    var10 = var4.bind(var0)(var10);
    var10 = var10.TextStyleSheet;
    var22 = var10["text-md/medium"];
    var23 = var17;
    var10 = copyDataProperties(var23, var22);
    var10 = 15;
    var19 = var5[var10];
    var19 = var11.bind(var0)(var19);
    var19 = var19.colors;
    var20 = var19.MOBILE_TEXT_HEADING_PRIMARY;
    var19 = 'color';
    var17[var19] = var20;
    var7.strong = var17;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot23 = var7;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var17 = {};
    var18 = var5[var18];
    var18 = var4.bind(var0)(var18);
    var18 = var18.TextStyleSheet;
    var22 = var18["text-md/medium"];
    var23 = var17;
    var18 = copyDataProperties(var23, var22);
    var18 = var5[var10];
    var18 = var11.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.TEXT_MUTED;
    var17[var19] = var18;
    var7.strong = var17;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot24 = var7;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var17 = {};
    var18 = var5[var10];
    var18 = var11.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.MENTION_FOREGROUND;
    var17.color = var18;
    var18 = var5[var10];
    var18 = var11.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.MENTION_BACKGROUND;
    var17.backgroundColor = var18;
    var7.mention = var17;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot25 = var7;
    var7 = var5[var3];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var17 = {};
    var18 = var5[var10];
    var18 = var11.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.MENTION_FOREGROUND;
    var17.color = var18;
    var18 = 'transparent';
    var17.backgroundColor = var18;
    var7.mention = var17;
    var17 = {};
    var18 = 'normal';
    var17.fontStyle = var18;
    var7.em = var17;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot26 = var7;
    var7 = {};
    var8 = 'redesign/message-preview/medium';
    var7.channelMentionText = var8;
    var _closure1_slot27 = var7;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var14;
    var3.container = var9;
    var9 = {
        'marginHorizontal': 4,
        'paddingHorizontal': 12,
        'paddingVertical': 8,
        'marginBottom': 4,
        'borderRadius': null,
        'flexDirection': 'row',
        'justifyContent': 'space-between'
    };
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.lg;
    var9.borderRadius = var17;
    var3.row = var9;
    var9 = {};
    var9.paddingVertical = var13;
    var3.rowCompact = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_MUTED;
    var9.backgroundColor = var13;
    var3.rowActive = var9;
    var9 = {
        'flexDirection': 'column',
        'flex': 1
    };
    var3.col = var9;
    var9 = {
        'flex': 1,
        'flexDirection': 'row'
    };
    var3.rowContentContainer = var9;
    var9 = {
        'top': 28,
        'backgroundColor': null,
        'height': 8,
        'width': 8,
        'borderRadius': null,
        'position': 'absolute',
        'left': 4294967288
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_ACTIVE;
    var9.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9.borderRadius = var13;
    var3.unreadIndicator = var9;
    var9 = {
        'top': 28,
        'backgroundColor': null,
        'height': 8,
        'width': 8,
        'borderRadius': null,
        'position': 'absolute',
        'left': 4
    };
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BRAND;
    var9.backgroundColor = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.xs;
    var9.borderRadius = var13;
    var3.unreadIndicatorV2 = var9;
    var9 = {};
    var13 = 18;
    var9.top = var13;
    var3.unreadIndicatorCompactV2 = var9;
    var9 = {};
    var9.flex = var14;
    var3.rowText = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between'
    };
    var3.rowTextV2 = var9;
    var9 = {};
    var13 = 20;
    var9.lineHeight = var13;
    var3.rowBody = var9;
    var9 = {};
    var17 = 30;
    var9.marginRight = var17;
    var3.rowBodyV2 = var9;
    var9 = {};
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_MUTED;
    var9.color = var17;
    var3.rowBodyAcked = var9;
    var9 = {};
    var9.lineHeight = var13;
    var3.rowTime = var9;
    var9 = {};
    var13 = -24;
    var9.marginLeft = var13;
    var3.rowTimeV2 = var9;
    var9 = {
        'alignItems': 'flex-start',
        'marginRight': 4
    };
    var3.item = var9;
    var9 = {
        'alignItems': 'flex-start',
        'marginRight': 4,
        'marginLeft': 8
    };
    var3.itemV2 = var9;
    var9 = {};
    var13 = 32;
    var9.paddingLeft = var13;
    var3.actionButtons = var9;
    var9 = {
        'height': 24,
        'width': 24
    };
    var3.checkbox = var9;
    var9 = {
        'marginTop': 4,
        'flexDirection': 'row',
        'marginRight': 16
    };
    var3.calloutContainer = var9;
    var9 = {
        'marginRight': 8,
        'borderLeftColor': null,
        'borderLeftWidth': 3,
        'borderRadius': 2,
        'height': 'auto'
    };
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_SUBTLE;
    var9.borderLeftColor = var17;
    var3.calloutBar = var9;
    var9 = {};
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_MUTED;
    var9.color = var17;
    var3.calloutTextAcked = var9;
    var9 = {};
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_DEFAULT;
    var9.color = var17;
    var3.calloutTextNotAcked = var9;
    var9 = {
        'marginTop': 4,
        'padding': 8,
        'backgroundColor': null,
        'borderRadius': null,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var17;
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.sm;
    var9.borderRadius = var17;
    var3.messagePreviewContainer = var9;
    var9 = {
        'marginTop': 4,
        'flexDirection': 'row',
        'marginRight': 16
    };
    var3.messagePreviewContainerV2 = var9;
    var9 = {
        'marginRight': 8,
        'borderLeftColor': null,
        'borderLeftWidth': 3,
        'borderRadius': 2,
        'height': 'auto'
    };
    var17 = var5[var10];
    var17 = var11.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BORDER_SUBTLE;
    var9.borderLeftColor = var17;
    var3.messagePreviewBarV2 = var9;
    var9 = {};
    var9.paddingTop = var16;
    var3.messagePreviewIconV2Container = var9;
    var9 = {};
    var9.marginLeft = var16;
    var16 = var5[var10];
    var16 = var11.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.TEXT_SUBTLE;
    var9.tintColor = var16;
    var3.messagePreviewIconV2 = var9;
    var9 = {};
    var9.marginRight = var15;
    var3.messagePreviewAvatar = var9;
    var9 = {};
    var9.flex = var14;
    var3.messagePreviewText = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_MUTED;
    var9.color = var14;
    var3.messagePreviewTextV2Acked = var9;
    var9 = {};
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.TEXT_DEFAULT;
    var9.color = var14;
    var3.messagePreviewTextV2NotAcked = var9;
    var9 = {
        'fontStyle': 'italic',
        'fontWeight': 'normal'
    };
    var3.messagePreviewSystemTextV2 = var9;
    var9 = {};
    var9.paddingLeft = var13;
    var3.lifecycleContainer = var9;
    var9 = {};
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.INTERACTIVE_TEXT_DEFAULT;
    var9.color = var13;
    var3.refreshSpinner = var9;
    var9 = {};
    var12 = var12.hairlineWidth;
    var9.borderTopWidth = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderTopColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.marginTop = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9.marginBottom = var10;
    var3.forYouDivider = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'sticker';
    var3.STICKER = var7;
    var7 = 'voice_message';
    var3.VOICE_MESSAGE = var7;
    var7 = 'attachment';
    var3.ATTACHMENT = var7;
    var _closure1_slot29 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun103162: for (var _fun103162_ip = 0;;) switch (_fun103162_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.item;
                var _closure2_slot0 = var20;
                var4 = var0.ackedBeforeId;
                var14 = var0.rowIndex;
                var _closure2_slot1 = var14;
                var19 = var0.isSoftAcked;
                var11 = var0.onSoftAckItem;
                var _closure2_slot2 = var11;
                var15 = var0.forceHoistItem;
                var10 = var0.isForceHoisted;
                var18 = var0.compactMode;
                var22 = var0.roleStyle;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var0 = _closure1_slot28;
                var28 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 29;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useNotificationCenterItemAcked;
                var0 = var0.bind(var1)(var20, var4);
                var _closure2_slot3 = var0;
                if (var19) {
                    _fun103162_ip = 137;
                    continue _fun103162
                }
            case 134:
                var19 = var0;
            case 137:
                var6 = _closure1_slot0;
                var13 = _closure1_slot3;
                var1 = 30;
                var1 = var13[var1];
                var4 = var6.bind(var3)(var1);
                var1 = var4.useNavigation;
                var9 = var1.bind(var4)();
                _closure2_slot4 = var9;
                var7 = _closure1_slot6;
                var5 = var7.useCallback;
                var4 = new Array(1);
                var4[0] = var20;
                var1 = function() { // Environment: var2
                    _fun103163: for (var _fun103163_ip = 0;;) switch (_fun103163_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var2 = var1.deeplink;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun103163_ip = 102;
                                continue _fun103163
                            }
                        case 19:
                            var1 = _closure1_slot1;
                            var4 = _closure1_slot3;
                            var2 = 31;
                            var3 = var4[var2];
                            var2 = undefined;
                            var3 = var1.bind(var2)(var3);
                            var0 = _closure2_slot0;
                            var0 = var0.deeplink;
                            var0 = var3.bind(var2)(var0);
                            var3 = var0.payload;
                            var0 = 32;
                            var0 = var4[var0];
                            var1 = var1.bind(var2)(var0);
                            var0 = {
                                'payload': null,
                                'safe': true,
                                'navigationReplace': false
                            };
                            var0.payload = var3;
                            var0 = var1.bind(var2)(var0);
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var5.bind(var7)(var1, var4);
                _closure2_slot5 = var8;
                var5 = var7.useCallback;
                var4 = new Array(6);
                var4[0] = var0;
                var4[1] = var20;
                var4[2] = var8;
                var4[3] = var14;
                var4[4] = var11;
                var4[5] = var9;
                var1 = function() { // Environment: var2
                    _fun103164: for (var _fun103164_ip = 0;;) switch (_fun103164_ip) {
                        case 0:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun103164_ip = 25;
                                continue _fun103164
                            }
                        case 10:
                            var2 = _closure2_slot2;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 25:
                            var0 = _closure2_slot0;
                            var2 = var0.type;
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var8 = 33;
                            var1 = var0[var8];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.NotificationCenterLocalItems;
                            var1 = var1.FRIEND_REQUESTS_GROUPED;
                            if (!(var2 === var1)) {
                                _fun103164_ip = 116;
                                continue _fun103164
                            }
                        case 75:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun103164_ip = 116;
                                continue _fun103164
                            }
                        case 85:
                            var4 = _closure2_slot4;
                            var3 = var4.navigate;
                            var2 = {};
                            var1 = 'requests';
                            var2.screen = var1;
                            var1 = 'friends';
                            var1 = var3.bind(var4)(var1, var2);
                        case 116:
                            var1 = _closure2_slot5;
                            var1 = var1.bind(var0)();
                            var2 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var1 = 34;
                            var1 = var5[var1];
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot15;
                            var2 = var1.NOTIFICATION_CENTER_ACTION;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var5 = var5[var8];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.NotificationCenterActionTypes;
                            var5 = var5.CLICKED;
                            var1.action_type = var5;
                            var5 = _closure2_slot0;
                            var7 = var5.id;
                            var1.notification_center_id = var7;
                            var7 = var5.type;
                            var1.item_type = var7;
                            var7 = _closure2_slot3;
                            var1.acked = var7;
                            var6 = _closure2_slot1;
                            var1.item_index = var6;
                            var5 = var5.deeplink;
                            var1.deeplink = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var5 = var5.bind(var7)(var1, var4);
                var16 = var7.useCallback;
                var4 = new Array(1);
                var4[0] = var20;
                var1 = function() { // Environment: var2
                    _fun103165: for (var _fun103165_ip = 0;;) switch (_fun103165_ip) {
                        case 0:
                            var4 = new Array(0);
                            var0 = _closure2_slot0;
                            var6 = var0.type;
                            var7 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 33;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var7.bind(var0)(var3);
                            var3 = var3.NotificationCenterItems;
                            var3 = var3.TRENDING_CONTENT;
                            if (!(var6 !== var3)) {
                                _fun103165_ip = 193;
                                continue _fun103165
                            }
                        case 62:
                            var6 = var4.push;
                            var3 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var7 = 18;
                            var10 = var9[var7];
                            var10 = var8.bind(var0)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7["08rqg5"];
                            var7 = var10.bind(var11)(var7);
                            var3.label = var7;
                            var10 = _closure1_slot1;
                            var7 = 35;
                            var7 = var9[var7];
                            var7 = var10.bind(var0)(var7);
                            var3.icon = var7;
                            var7 = 36;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.LightbulbIcon;
                            var3.IconComponent = var7;
                            var7 = function() {
                                _fun103167: for (var _fun103167_ip = 0;;) switch (_fun103167_ip) {
                                    case 0: // try_start_0
                                        var2 = _closure1_slot0;
                                        var5 = _closure1_slot3;
                                        var1 = 40;
                                        var1 = var5[var1];
                                        var3 = undefined;
                                        var4 = var2.bind(var3)(var1);
                                        var1 = 39;
                                        var2 = var5[var1];
                                        var1 = var5.paths;
                                        var4 = var4.bind(var3)(var2, var1);
                                        var2 = _closure1_slot1;
                                        var1 = 41;
                                        var1 = var5[var1];
                                        var3 = var2.bind(var3)(var1);
                                        var2 = var3.openLazy;
                                        var1 = {};
                                        var5 = _closure2_slot0;
                                        var5 = var5.type;
                                        var1.notificationType = var5;
                                        var0 = _closure1_slot17;
                                        var0 = var0.NOTIFICATION_CENTER;
                                        var1.location = var0;
                                        var0 = 'NotificationSurvey';
                                        var0 = var2.bind(var3)(var4, var0, var1);
                                    case 111: // try_end0
                                        _fun103167_ip = 218;
                                        continue _fun103167;
                                    case 113: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        var1 = _closure1_slot1;
                                        var8 = _closure1_slot3;
                                        var0 = 38;
                                        var0 = var8[var0];
                                        var7 = undefined;
                                        var2 = var1.bind(var7)(var0);
                                        var1 = var2.open;
                                        var0 = {};
                                        var4 = 'USER_SURVEY_ERROR';
                                        var0.key = var4;
                                        var6 = _closure1_slot0;
                                        var3 = 18;
                                        var4 = var8[var3];
                                        var4 = var6.bind(var7)(var4);
                                        var5 = var4.intl;
                                        var4 = var5.string;
                                        var3 = var8[var3];
                                        var3 = var6.bind(var7)(var3);
                                        var3 = var3.t;
                                        var3 = var3.HO9Lf2;
                                        var3 = var4.bind(var5)(var3);
                                        var0.content = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 218:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var3.onPress = var7;
                            var3 = var6.bind(var4)(var3);
                            _fun103165_ip = 319;
                            continue _fun103165;
                        case 193:
                            var6 = var4.push;
                            var3 = {};
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var7 = 18;
                            var10 = var9[var7];
                            var10 = var8.bind(var0)(var10);
                            var11 = var10.intl;
                            var10 = var11.string;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7["gSMz/x"];
                            var7 = var10.bind(var11)(var7);
                            var3.label = var7;
                            var10 = _closure1_slot1;
                            var7 = 35;
                            var7 = var9[var7];
                            var7 = var10.bind(var0)(var7);
                            var3.icon = var7;
                            var7 = 36;
                            var7 = var9[var7];
                            var7 = var8.bind(var0)(var7);
                            var7 = var7.LightbulbIcon;
                            var3.IconComponent = var7;
                            var7 = function() {
                                _fun103166: for (var _fun103166_ip = 0;;) switch (_fun103166_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var1 = undefined;
                                        var3 = undefined;
                                    case 6: // try_start_0
                                        var4 = _closure2_slot0;
                                        var5 = var4.deeplink;
                                        var1 = var5;
                                        var4 = null;
                                        var5 = var4 != var5;
                                        var6 = '';
                                        if (!var5) {
                                            _fun103166_ip = 38;
                                            continue _fun103166
                                        }
                                    case 35:
                                        var6 = var1;
                                    case 38:
                                        var5 = var6.match;
                                        var1 = /channels\\/(\d * )\\ / (\d * )\\ / (\d * )\ ? summaryId = (\d * ) / ;
                                        var1 = var5.bind(var6)(var1);
                                        var3 = var1;
                                        if (!(var4 != var1)) {
                                            _fun103166_ip = 210;
                                            continue _fun103166
                                        }
                                    case 73:
                                        var5 = _closure1_slot5;
                                        var4 = var3;
                                        var3 = 5;
                                        var6 = var5.bind(var0)(var4, var3);
                                        var3 = 0;
                                        var3 = var6[var3];
                                        var3 = 1;
                                        var8 = var6[var3];
                                        var3 = 2;
                                        var3 = var6[var3];
                                        var4 = 3;
                                        var4 = var6[var4];
                                        var5 = 4;
                                        var9 = var6[var5];
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var5 = 37;
                                        var5 = var7[var5];
                                        var7 = var6.bind(var0)(var5);
                                        var6 = var7.openGuildHighlightNotificationForPush;
                                        var5 = {};
                                        var5.id = var4;
                                        var5.channel_id = var3;
                                        var3 = _closure1_slot19;
                                        var12 = var3.TRENDING_CONTENT_PUSH;
                                        var1 = _closure1_slot17;
                                        var11 = var1.NOTIFICATION_CENTER;
                                        var1 = {};
                                        var1.summary_id = var9;
                                        var15 = var7;
                                        var14 = var8;
                                        var13 = var5;
                                        var10 = var1;
                                        var1 = var15[var6](var14, var13, var12, var11, var10, var9);
                                    case 205: // try_end0
                                        _fun103166_ip = 375;
                                        continue _fun103166;
                                    case 210: // try_start_1
                                        var1 = global;
                                        var3 = var1.Error;
                                        var2 = _closure2_slot0;
                                        var4 = var2.deeplink;
                                        var1 = var1.HermesInternal;
                                        var2 = var1.concat;
                                        var1 = 'Invalid deeplink: ';
                                        var14 = var2.bind(var1)(var4);
                                        var2 = var3.prototype;
                                        var2 = Object.create(var2, {
                                            constructor: {
                                                value: var3
                                            }
                                        });
                                        var15 = var2;
                                        var1 = new var15[var3](var14, var13);
                                        var1 = var1 instanceof Object ? var1 : var2;
                                        throw var1;
                                    case 272: // try_end1 // catch_target0 // catch_target1
                                        CatchBlockStart(arg_register = 1);
                                        var2 = _closure1_slot1;
                                        var8 = _closure1_slot3;
                                        var1 = 38;
                                        var1 = var8[var1];
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.open;
                                        var1 = {};
                                        var5 = 'USER_SURVEY_ERROR';
                                        var1.key = var5;
                                        var7 = _closure1_slot0;
                                        var4 = 18;
                                        var5 = var8[var4];
                                        var5 = var7.bind(var0)(var5);
                                        var6 = var5.intl;
                                        var5 = var6.string;
                                        var4 = var8[var4];
                                        var4 = var7.bind(var0)(var4);
                                        var4 = var4.t;
                                        var4 = var4.HO9Lf2;
                                        var4 = var5.bind(var6)(var4);
                                        var1.content = var4;
                                        var1 = var2.bind(var3)(var1);
                                    case 375:
                                        return var0;
                                }
                            };
                            var3.onPress = var7;
                            var3 = var6.bind(var4)(var3);
                        case 319:
                            var2 = _closure2_slot0;
                            var3 = var2.local_id;
                            var2 = null;
                            if (!(var2 == var3)) {
                                _fun103165_ip = 485;
                                continue _fun103165
                            }
                        case 338:
                            var3 = var4.unshift;
                            var2 = {};
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var6 = 18;
                            var9 = var8[var6];
                            var9 = var7.bind(var0)(var9);
                            var10 = var9.intl;
                            var9 = var10.string;
                            var6 = var8[var6];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.D8z9ju;
                            var6 = var9.bind(var10)(var6);
                            var2.label = var6;
                            var9 = _closure1_slot1;
                            var6 = 42;
                            var6 = var8[var6];
                            var6 = var9.bind(var0)(var6);
                            var2.icon = var6;
                            var6 = 43;
                            var6 = var8[var6];
                            var6 = var7.bind(var0)(var6);
                            var6 = var6.TrashIcon;
                            var2.IconComponent = var6;
                            var7 = _closure1_slot4;
                            var6 = function*() { // Environment: var5
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun103169: for (var _fun103169_ip = 0;;) switch (_fun103169_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun103169_ip = 180;
                                                continue _fun103169
                                            }
                                        case 10: // try_start_0
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot3;
                                            var1 = 44;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var3 = var3.bind(var1)(var2);
                                            var2 = var3.deleteNotificationCenterItem;
                                            var1 = _closure2_slot0;
                                            var1 = var2.bind(var3)(var1);
                                            SaveGenerator(address = 57);
                                        case 55:
                                            return var1;
                                        case 57:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (var2) {
                                                _fun103169_ip = 65;
                                                continue _fun103169
                                            }
                                        case 63: // try_end0
                                            _fun103169_ip = 175;
                                            continue _fun103169;
                                        case 65:
                                            return var1;
                                        case 68: // catch_target0
                                            CatchBlockStart(arg_register = 1);
                                            var2 = _closure1_slot1;
                                            var9 = _closure1_slot3;
                                            var1 = 38;
                                            var1 = var9[var1];
                                            var8 = undefined;
                                            var3 = var2.bind(var8)(var1);
                                            var2 = var3.open;
                                            var1 = {};
                                            var5 = 'REMOVE_NOTIFICATION_ERROR';
                                            var1.key = var5;
                                            var7 = _closure1_slot0;
                                            var4 = 18;
                                            var5 = var9[var4];
                                            var5 = var7.bind(var8)(var5);
                                            var6 = var5.intl;
                                            var5 = var6.string;
                                            var4 = var9[var4];
                                            var4 = var7.bind(var8)(var4);
                                            var4 = var4.t;
                                            var4 = var4.WDxhvB;
                                            var4 = var5.bind(var6)(var4);
                                            var1.content = var4;
                                            var1 = var2.bind(var3)(var1);
                                        case 175:
                                            var1 = undefined;
                                            return var1;
                                        case 180:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var6 = var7.bind(var0)(var6);
                            var _closure3_slot0 = var6;
                            var5 = function() { // Environment: var5
                                var0 = undefined;
                                var3 = _closure3_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            var2.onPress = var5;
                            var2 = var3.bind(var4)(var2);
                        case 485:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 45;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.showSimpleActionSheet;
                            var1 = {};
                            var5 = 'ForYouItemLongPress';
                            var1.key = var5;
                            var1.options = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var4 = var16.bind(var7)(var1, var4);
                var1 = var7.useState;
                var16 = var1.bind(var7)(var3);
                var7 = _closure1_slot5;
                var1 = 2;
                var7 = var7.bind(var3)(var16, var1);
                var1 = 0;
                var30 = var7[var1];
                var1 = 1;
                var34 = var7[var1];
                var16 = 46;
                var1 = var13[var16];
                var6 = var6.bind(var3)(var1);
                var1 = var6.useItemActionButtonPropsV2;
                var41 = var6;
                var40 = var20;
                var39 = var8;
                var38 = var9;
                var37 = var15;
                var36 = var10;
                var35 = var11;
                var33 = var18;
                var1 = var41[var1](var40, var39, var38, var37, var36, var35, var34, var33, var32);
                var10 = var1.actionButtons;
                var9 = var1.actionsNode;
                var7 = var1.accessibilityActions;
                var6 = var1.onAccessibilityAction;
                var8 = _closure1_slot2;
                var1 = 16;
                var15 = var13[var1];
                var21 = var8.bind(var3)(var15);
                var17 = var21.getParser;
                var15 = _closure1_slot24;
                var15 = var15.bind(var3)();
                var29 = var17.bind(var21)(var15);
                var1 = var13[var1];
                var13 = var8.bind(var3)(var1);
                var8 = var13.getParser;
                var1 = _closure1_slot23;
                var1 = var1.bind(var3)();
                var26 = var8.bind(var13)(var1);
                var13 = null;
                var15 = null;
                if (var0) {
                    _fun103162_ip = 529;
                    continue _fun103162
                }
            case 453:
                var8 = _closure1_slot20;
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var16];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ForYouItemActionButtons;
                var0 = {
                    'aria-hidden': true,
                    'accessibilityLabel': ''
                };
                var0.item = var20;
                var0.rowIndex = var14;
                var0.onSoftAckItem = var11;
                var0.actionButtons = var10;
                var0.actionsNode = var9;
                var0.compactMode = var18;
                var15 = var8.bind(var3)(var1, var0);
            case 529:
                var24 = 'text-md/semibold';
                if (!var19) {
                    _fun103162_ip = 540;
                    continue _fun103162
                }
            case 536:
                var24 = 'text-md/medium';
            case 540:
                _closure2_slot6 = var24;
                if (!(var13 == var30)) {
                    _fun103162_ip = 591;
                    continue _fun103162
                }
            case 548:
                var1 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 47;
                var0 = var8[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.item = var20;
                var2 = function arg0() {
                    var3 = _closure1_slot20;
                    var2 = _closure1_slot36;
                    var1 = {};
                    var0 = arg0;
                    var1.applicationId = var0;
                    var0 = _closure2_slot6;
                    var1.textVariant = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0.renderApplication = var2;
                var30 = var1.bind(var3)(var0);
            case 591:
                var1 = _closure1_slot1;
                var8 = _closure1_slot3;
                var0 = 48;
                var0 = var8[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.extractTimestamp;
                var0 = var20.id;
                var27 = var1.bind(var2)(var0);
                var2 = _closure1_slot21;
                var1 = _closure1_slot0;
                var0 = 49;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableHighlight;
                var0 = {};
                var8 = 'button';
                var0.accessibilityRole = var8;
                var0.accessibilityActions = var7;
                var0.onAccessibilityAction = var6;
                var7 = var28.row;
                var6 = new Array(2);
                var6[0] = var7;
                var8 = !var18;
                var7 = !var8;
                if (var8) {
                    _fun103162_ip = 702;
                    continue _fun103162
                }
            case 696:
                var7 = var28.rowCompact;
            case 702:
                var6[1] = var7;
                var0.style = var6;
                var0.onPress = var5;
                var0.onAccessibilityTap = var5;
                var0.onLongPress = var4;
                var4 = var28.rowActive;
                var4 = var4.backgroundColor;
                var0.underlayColor = var4;
                var4 = var20.enableBadge;
                var5 = null;
                if (!var4) {
                    _fun103162_ip = 809;
                    continue _fun103162
                }
            case 751:
                var5 = null;
                if (var19) {
                    _fun103162_ip = 809;
                    continue _fun103162
                }
            case 756:
                var7 = _closure1_slot20;
                var6 = _closure1_slot7;
                var4 = {};
                var9 = var28.unreadIndicatorV2;
                var8 = new Array(2);
                var8[0] = var9;
                var10 = !var18;
                var9 = !var10;
                if (var10) {
                    _fun103162_ip = 795;
                    continue _fun103162
                }
            case 789:
                var9 = var28.unreadIndicatorCompactV2;
            case 795:
                var8[1] = var9;
                var4.style = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 809:
                var4 = new Array(3);
                var4[0] = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var28.itemV2;
                var5.style = var8;
                var10 = _closure1_slot20;
                var21 = _closure1_slot0;
                var17 = _closure1_slot3;
                var8 = 50;
                var8 = var17[var8];
                var8 = var21.bind(var3)(var8);
                var9 = var8.ForYouItemImage;
                var8 = {};
                var8.item = var20;
                var8.compactMode = var18;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot20;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = {
                    'flex': 1,
                    'flexDirection': 'row'
                };
                var5.style = var8;
                var10 = _closure1_slot21;
                var9 = _closure1_slot7;
                var8 = {};
                var11 = var28.col;
                var8.style = var11;
                var16 = _closure1_slot21;
                var14 = _closure1_slot7;
                var11 = {};
                var25 = var28.rowText;
                var23 = new Array(2);
                var23[0] = var25;
                var25 = var28.rowTextV2;
                var23[1] = var25;
                var11.style = var23;
                var23 = _closure1_slot20;
                var25 = 14;
                var17 = var17[var25];
                var17 = var21.bind(var3)(var17);
                var21 = var17.Text;
                var17 = {};
                var17.variant = var24;
                var31 = var28.rowBody;
                var24 = new Array(3);
                var24[0] = var31;
                var31 = var28.rowBodyV2;
                var24[1] = var31;
                var32 = !var19;
                var31 = !var32;
                if (var32) {
                    _fun103162_ip = 1050;
                    continue _fun103162
                }
            case 1044:
                var31 = var28.rowBodyAcked;
            case 1050:
                var24[2] = var31;
                var17.style = var24;
                var24 = 'text-default';
                var17.color = var24;
                var32 = 'string';
                var31 = typeof var30;
                var24 = var30;
                if (!(var32 === var31)) {
                    _fun103162_ip = 1100;
                    continue _fun103162
                }
            case 1082:
                if (var19) {
                    _fun103162_ip = 1092;
                    continue _fun103162
                }
            case 1085:
                var26 = var26.bind(var3)(var30);
                _fun103162_ip = 1097;
                continue _fun103162;
            case 1092:
                var26 = var29.bind(var3)(var30);
            case 1097:
                var24 = var26;
            case 1100:
                var17.children = var24;
                var21 = var23.bind(var3)(var21, var17);
                var17 = new Array(2);
                var17[0] = var21;
                var24 = _closure1_slot20;
                var23 = _closure1_slot0;
                var21 = _closure1_slot3;
                var21 = var21[var25];
                var21 = var23.bind(var3)(var21);
                var23 = var21.Text;
                var21 = {
                    'variant': 'text-xs/medium',
                    'style': null,
                    'color': 'text-default'
                };
                var26 = var28.rowTime;
                var25 = new Array(3);
                var25[0] = var26;
                var26 = var28.rowTimeV2;
                var25[1] = var26;
                var29 = !var19;
                var26 = !var29;
                if (var29) {
                    _fun103162_ip = 1197;
                    continue _fun103162
                }
            case 1191:
                var26 = var28.rowBodyAcked;
            case 1197:
                var25[2] = var26;
                var21.style = var25;
                var26 = _closure1_slot0;
                var28 = _closure1_slot3;
                var25 = 51;
                var29 = var28[var25];
                var31 = var26.bind(var3)(var29);
                var30 = var31.getRelativeTimestamp;
                var29 = false;
                var29 = var30.bind(var31)(var27, var29);
                var21.accessibilityLabel = var29;
                var25 = var28[var25];
                var26 = var26.bind(var3)(var25);
                var25 = var26.getRelativeTimestamp;
                var25 = var25.bind(var26)(var27);
                var21.children = var25;
                var21 = var24.bind(var3)(var23, var21);
                var17[1] = var21;
                var11.children = var17;
                var14 = var16.bind(var3)(var14, var11);
                var11 = new Array(4);
                var11[0] = var14;
                var16 = var20.message;
                var17 = var13 == var16;
                var14 = undefined;
                if (var17) {
                    _fun103162_ip = 1316;
                    continue _fun103162
                }
            case 1311:
                var14 = var16.content;
            case 1316:
                var16 = var13 != var14;
                var14 = null;
                if (!var16) {
                    _fun103162_ip = 1360;
                    continue _fun103162
                }
            case 1325:
                var21 = _closure1_slot20;
                var17 = _closure1_slot35;
                var16 = {};
                var16.item = var20;
                var16.acked = var19;
                var16.compactMode = var18;
                var16.roleStyle = var22;
                var14 = var21.bind(var3)(var17, var16);
            case 1360:
                var11[1] = var14;
                var14 = var20.callout;
                var14 = var13 != var14;
                var13 = null;
                if (!var14) {
                    _fun103162_ip = 1409;
                    continue _fun103162
                }
            case 1379:
                var17 = _closure1_slot20;
                var16 = _closure1_slot34;
                var14 = {};
                var14.item = var20;
                var14.acked = var19;
                var14.compactMode = var18;
                var13 = var17.bind(var3)(var16, var14);
            case 1409:
                var11[2] = var13;
                var14 = _closure1_slot20;
                var13 = _closure1_slot7;
                var12 = {};
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var11[3] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot30 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.id;
        return var0;
    };
    var _closure1_slot31 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun103173: for (var _fun103173_ip = 0;;) switch (_fun103173_ip) {
            case 0:
                var1 = arg0;
                var14 = var1.items;
                var13 = var1.onScroll;
                var9 = var1.loadMore;
                var _closure2_slot0 = var9;
                var12 = var1.loadingMore;
                var4 = var1.nestedInLaunchPad;
                var0 = var1.shouldScrollToTop;
                var _closure2_slot1 = var0;
                var21 = var1.isSoftAcked;
                var _closure2_slot2 = var21;
                var20 = var1.onSoftAckItem;
                var _closure2_slot3 = var20;
                var19 = var1.forceHoistItem;
                var _closure2_slot4 = var19;
                var18 = var1.isForceHoisted;
                var _closure2_slot5 = var18;
                var24 = var1.suggestedFriendAdded;
                var _closure2_slot6 = var24;
                var23 = var1.onAddSuggestionAnimationFinish;
                var _closure2_slot7 = var23;
                var1 = var1.panelVariant;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun103173_ip = 122;
                    continue _fun103173
                }
            case 120:
                var1 = false;
            case 122:
                var _closure2_slot8 = var1;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var2 = _closure1_slot28;
                var16 = var2.bind(var3)();
                _closure2_slot9 = var16;
                var7 = _closure1_slot0;
                var11 = _closure1_slot3;
                var2 = 53;
                var6 = var11[var2];
                var6 = var7.bind(var3)(var6);
                var10 = var6.NotificationCenterAckedBeforeId;
                var6 = var10.useSetting;
                var10 = var6.bind(var10)();
                _closure2_slot10 = var10;
                var6 = 25;
                var15 = var11[var6];
                var25 = var7.bind(var3)(var15);
                var22 = var25.useStateFromStores;
                var15 = _closure1_slot9;
                var17 = new Array(1);
                var17[0] = var15;
                var15 = function() { // Environment: var5
                    var0 = _closure1_slot9;
                    var0 = var0.roleStyle;
                    return var0;
                };
                var22 = var22.bind(var25)(var17, var15);
                _closure2_slot11 = var22;
                var6 = var11[var6];
                var25 = var7.bind(var3)(var6);
                var17 = var25.useStateFromStores;
                var6 = _closure1_slot14;
                var15 = new Array(1);
                var15[0] = var6;
                var6 = function() { // Environment: var5
                    var1 = _closure1_slot14;
                    var0 = var1.isRefreshing;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var17 = var17.bind(var25)(var15, var6);
                _closure2_slot12 = var17;
                var2 = var11[var2];
                var2 = var7.bind(var3)(var2);
                var6 = var2.ChannelListLayoutSetting;
                var2 = var6.useSetting;
                var6 = var2.bind(var6)();
                var2 = 54;
                var2 = var11[var2];
                var2 = var7.bind(var3)(var2);
                var2 = var2.ChannelListLayoutTypes;
                var2 = var2.COMPACT;
                var15 = var6 === var2;
                _closure2_slot13 = var15;
                var2 = _closure1_slot6;
                var11 = var2.useCallback;
                var7 = new Array(1);
                var7[0] = var9;
                var6 = function() { // Environment: var5
                    var2 = _closure2_slot0;
                    var0 = undefined;
                    var1 = true;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11 = var11.bind(var2)(var6, var7);
                _closure2_slot14 = var11;
                var7 = var2.useCallback;
                var25 = var16.forYouDivider;
                var6 = new Array(12);
                var6[0] = var25;
                var6[1] = var24;
                var6[2] = var23;
                var6[3] = var22;
                var6[4] = var10;
                var6[5] = var21;
                var6[6] = var20;
                var6[7] = var19;
                var6[8] = var18;
                var6[9] = var15;
                var6[10] = var11;
                var6[11] = var1;
                var1 = function(arg0) { // Environment: var5
                    _fun103177: for (var _fun103177_ip = 0;;) switch (_fun103177_ip) {
                        case 0:
                            var0 = arg0;
                            var4 = var0.item;
                            var9 = var0.index;
                            var1 = var4.kind;
                            var0 = 'read-section-header';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 856;
                                continue _fun103177
                            }
                        case 31:
                            var0 = 'recent-activity-section-header';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 811;
                                continue _fun103177
                            }
                        case 44:
                            var0 = 'hoisted-items-header';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 766;
                                continue _fun103177
                            }
                        case 57:
                            var0 = 'suggested-friends-header';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 716;
                                continue _fun103177
                            }
                        case 70:
                            var0 = 'suggested-friends-row';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 636;
                                continue _fun103177
                            }
                        case 83:
                            var0 = 'suggested-friends-show-all-row';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 568;
                                continue _fun103177
                            }
                        case 96:
                            var0 = 'for-you-divider';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 528;
                                continue _fun103177
                            }
                        case 109:
                            var0 = 'notification-center-item';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 340;
                                continue _fun103177
                            }
                        case 122:
                            var0 = 'mentions-placeholder';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 295;
                                continue _fun103177
                            }
                        case 135:
                            var0 = 'unread-cleared-placeholder';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 250;
                                continue _fun103177
                            }
                        case 145:
                            var0 = 'load-more';
                            if (!(var0 !== var1)) {
                                _fun103177_ip = 193;
                                continue _fun103177
                            }
                        case 155:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 64;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.assertNever;
                            var1 = var1.bind(var2)(var4);
                            return var0;
                        case 193:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 63;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ForYouLoadMore;
                            var0 = {};
                            var5 = _closure2_slot14;
                            var0.onPressLoad = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 250:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 62;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ForYouUnreadClearedState;
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 295:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 17;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ForYouMentionPlaceholder;
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 340:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 61;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ErrorBoundary;
                            var0 = {};
                            var8 = _closure1_slot20;
                            var7 = _closure1_slot30;
                            var6 = {};
                            var6.item = var4;
                            var10 = _closure2_slot10;
                            var6.ackedBeforeId = var10;
                            var11 = _closure2_slot2;
                            var10 = var4.id;
                            var10 = var11.bind(var2)(var10);
                            var6.isSoftAcked = var10;
                            var10 = _closure2_slot3;
                            var6.onSoftAckItem = var10;
                            var10 = _closure2_slot4;
                            var6.forceHoistItem = var10;
                            var10 = _closure2_slot5;
                            var6.isForceHoisted = var10;
                            var6.rowIndex = var9;
                            var9 = _closure2_slot13;
                            var6.compactMode = var9;
                            var9 = _closure2_slot11;
                            var6.roleStyle = var9;
                            var12 = var4.id;
                            var11 = _closure2_slot11;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var10 = var5.concat;
                            var9 = '';
                            var5 = '-';
                            var5 = var10.bind(var9)(var12, var5, var11);
                            var5 = var8.bind(var2)(var7, var6, var5);
                            var0.children = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 528:
                            var3 = _closure1_slot20;
                            var2 = _closure1_slot7;
                            var1 = {};
                            var0 = _closure2_slot9;
                            var0 = var0.forYouDivider;
                            var1.style = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        case 568:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 60;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ForYouSuggestedFriendShowAllRow;
                            var0 = {};
                            var5 = var4.suggestedFriends;
                            var0.suggestedFriends = var5;
                            var5 = _closure2_slot8;
                            var0.panelVariant = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 636:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 59;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var5 = var4.suggestedFriend;
                            var0.suggestedFriend = var5;
                            var6 = _closure2_slot6;
                            var0.onAddSuggestion = var6;
                            var6 = _closure2_slot7;
                            var0.onAddSuggestionAnimationFinish = var6;
                            var5 = _closure2_slot8;
                            var0.panelVariant = var5;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 716:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var0 = 58;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var4 = var4.showDivider;
                            var0.showDivider = var4;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 766:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 57;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ForYouHoistedItemsHeader;
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 811:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 56;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ForYouRecentActivitySectionHeader;
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        case 856:
                            var3 = _closure1_slot20;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 55;
                            var0 = var2[var0];
                            var2 = undefined;
                            var0 = var1.bind(var2)(var0);
                            var1 = var0.ForYouReadSectionHeader;
                            var0 = {};
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                    }
                };
                var11 = var7.bind(var2)(var1, var6);
                var6 = var2.useRef;
                var1 = null;
                var19 = var6.bind(var2)(var1);
                _closure2_slot15 = var19;
                var6 = var2.useEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    _fun103178: for (var _fun103178_ip = 0;;) switch (_fun103178_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun103178_ip = 50;
                                continue _fun103178
                            }
                        case 10:
                            var0 = _closure2_slot15;
                            var2 = var0.current;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun103178_ip = 50;
                                continue _fun103178
                            }
                        case 25:
                            var1 = var2.scrollToOffset;
                            var0 = {
                                'animated': false,
                                'offset': 0
                            };
                            var0 = var1.bind(var2)(var0);
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var6.bind(var2)(var0, var1);
                var6 = var2.useCallback;
                var1 = new Array(1);
                var1[0] = var17;
                var0 = function() { // Environment: var5
                    _fun103179: for (var _fun103179_ip = 0;;) switch (_fun103179_ip) {
                        case 0:
                            var0 = _closure2_slot12;
                            if (var0) {
                                _fun103179_ip = 45;
                                continue _fun103179
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 65;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            var0 = var1.refreshNotifications;
                            var0 = var0.bind(var1)();
                        case 45:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18 = var6.bind(var2)(var0, var1);
                var1 = var2.useState;
                var0 = 0;
                var6 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var1 = 2;
                var1 = var2.bind(var3)(var6, var1);
                var20 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                _closure2_slot16 = var0;
                var2 = _closure1_slot21;
                var1 = _closure1_slot7;
                var0 = {};
                var6 = var16.container;
                var0.style = var6;
                var5 = function arg0() {
                    var2 = _closure2_slot16;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onLayout = var5;
                var5 = !var4;
                if (!var5) {
                    _fun103173_ip = 635;
                    continue _fun103173
                }
            case 614:
                var7 = _closure1_slot20;
                var6 = _closure1_slot37;
                var4 = {};
                var4.scrollRef = var19;
                var5 = var7.bind(var3)(var6, var4);
            case 635:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot20;
                var15 = _closure1_slot0;
                var21 = _closure1_slot3;
                var5 = 66;
                var5 = var21[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.FlashList;
                var5 = {};
                var5.ref = var19;
                var5.data = var14;
                var19 = _closure1_slot20;
                var14 = 67;
                var14 = var21[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.ForYouEmptyState;
                var14 = {};
                var14.height = var20;
                var14 = var19.bind(var3)(var15, var14);
                var5.ListEmptyComponent = var14;
                var5.onScroll = var13;
                var15 = _closure1_slot20;
                var14 = _closure1_slot8;
                var13 = {};
                var13.onRefresh = var18;
                var13.refreshing = var17;
                var16 = var16.refreshSpinner;
                var16 = var16.color;
                var13.tintColor = var16;
                var13 = var15.bind(var3)(var14, var13);
                var5.refreshControl = var13;
                var13 = 70;
                var5.estimatedItemSize = var13;
                var13 = _closure1_slot31;
                var5.keyExtractor = var13;
                var5.renderItem = var11;
                var5.extraData = var10;
                var5.onEndReached = var9;
                var9 = 0.8;
                var5.onEndReachedThreshold = var9;
                var11 = _closure1_slot20;
                var10 = _closure1_slot32;
                var9 = {};
                var9.loading = var12;
                var9 = var11.bind(var3)(var10, var9);
                var5.ListFooterComponent = var9;
                var8 = _closure1_slot22;
                var5.viewabilityConfig = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 68;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/native/ForYouItems.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ForYouItems = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1298, 3445, 1372, 1410, 1613, 13459, 660, 4556, 33, 1297, 3932, 671, 3929, 13464, 1234, 1384, 6757, 6546, 9599, 6755, 6449, 566, 6778, 4077, 11788, 13466, 1469, 3273, 3462, 3962, 795, 6808, 13467, 9703, 3139, 9726, 1307, 3269, 13469, 3260, 13461, 7724, 13470, 13471, 21, 4897, 13472, 4218, 1470, 1348, 8783, 13480, 13481, 13482, 13483, 13484, 13489, 810, 13490, 13491, 1304, 13463, 5748, 13492, 2]);