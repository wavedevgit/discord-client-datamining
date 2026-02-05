// modules/reactions/native/ReactionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
    var5 = function arg0() {
        _fun73509: for (var _fun73509_ip = 0;;) switch (_fun73509_ip) {
            case 0:
                var1 = _closure1_slot6;
                var0 = var1.getCurrentUser;
                var3 = var0.bind(var1)();
                var0 = null;
                if (!(var0 == var3)) {
                    _fun73509_ip = 26;
                    continue _fun73509
                }
            case 22:
                var0 = undefined;
                return var0;
            case 26:
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var6 = undefined;
                var1 = var1.bind(var6)(var0);
                var0 = var1.isPremium;
                var1 = var0.bind(var1)(var3);
                var0 = undefined;
                if (var1) {
                    _fun73509_ip = 147;
                    continue _fun73509
                }
            case 64:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 12;
                var3 = var1[var3];
                var5 = var4.bind(var6)(var3);
                var4 = var5.openLazy;
                var3 = _closure1_slot0;
                var2 = 14;
                var2 = var1[var2];
                var3 = var3.bind(var6)(var2);
                var2 = 13;
                var2 = var1[var2];
                var1 = var1.paths;
                var3 = var3.bind(var6)(var2, var1);
                var2 = {};
                var1 = arg0;
                var2.onDismiss = var1;
                var1 = 'SuperReactionUpsellActionSheet';
                var0 = var4.bind(var5)(var3, var1, var2);
            case 147:
                return var0;
        }
    };
    var _closure1_slot12 = var5;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var8[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var8[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var4 = var3.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = var3.AnalyticsPages;
    var _closure1_slot8 = var4;
    var3 = var3.AnalyticsSections;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.EmojiIntention;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var8[var3];
    var3 = var7.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot11 = var3;
    var4 = {};
    var6 = 17;
    var3 = var8[var6];
    var3 = var7.bind(var0)(var3);
    var3 = var3.ReactionTypes;
    var9 = var3.NORMAL;
    var3 = 21;
    var3 = var8[var3];
    var3 = var10.bind(var0)(var3);
    var4[var9] = var3;
    var3 = var8[var6];
    var3 = var7.bind(var0)(var3);
    var3 = var3.ReactionTypes;
    var9 = var3.BURST;
    var3 = 22;
    var3 = var8[var3];
    var3 = var10.bind(var0)(var3);
    var4[var9] = var3;
    var3 = {};
    var9 = var8[var6];
    var9 = var7.bind(var0)(var9);
    var9 = var9.ReactionTypes;
    var10 = var9.NORMAL;
    var9 = 23;
    var9 = var8[var9];
    var9 = var7.bind(var0)(var9);
    var9 = var9.ReactionIcon;
    var3[var10] = var9;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ReactionTypes;
    var9 = var6.BURST;
    var6 = 24;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.SuperReactionIcon;
    var3[var9] = var6;
    var6 = 28;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/reactions/native/ReactionUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.handleOutOfSuperReactions = var5;
    var5 = function arg0, arg1() {
        _fun73510: for (var _fun73510_ip = 0;;) switch (_fun73510_ip) {
            case 0:
                var9 = arg0;
                var4 = arg1;
                var5 = arguments[2];
                var2 = arguments[3];
                var _closure2_slot0 = var9;
                var _closure2_slot1 = var4;
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun73510_ip = 63;
                    continue _fun73510
                }
            case 28:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 10;
                var1 = var6[var1];
                var1 = var3.bind(var0)(var1);
                var1 = var1.ReactionLocations;
                var5 = var1.MESSAGE;
            case 63:
                var _closure2_slot2 = var5;
                var1 = null;
                var6 = var1 == var2;
                var3 = undefined;
                if (var6) {
                    _fun73510_ip = 84;
                    continue _fun73510
                }
            case 78:
                var3 = var2.burst;
            case 84:
                var2 = true;
                var8 = var2 === var3;
                var3 = _closure1_slot6;
                var2 = var3.getCurrentUser;
                var6 = var2.bind(var3)();
                if (!(var1 != var6)) {
                    _fun73510_ip = 364;
                    continue _fun73510
                }
            case 113:
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 11;
                var2 = var11[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isPremium;
                var6 = var2.bind(var3)(var6);
                var2 = var8;
                if (!var2) {
                    _fun73510_ip = 153;
                    continue _fun73510
                }
            case 150:
                var2 = !var6;
            case 153:
                if (!var2) {
                    _fun73510_ip = 164;
                    continue _fun73510
                }
            case 156:
                var2 = _closure1_slot12;
                var2 = var2.bind(var0)();
            case 164:
                var3 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 15;
                var2 = var11[var2];
                var11 = var3.bind(var0)(var2);
                var3 = var11.getBestActiveInputForChannelId;
                var2 = var9.id;
                var2 = var3.bind(var11)(var2);
                if (!(var1 != var2)) {
                    _fun73510_ip = 214;
                    continue _fun73510
                }
            case 204:
                var1 = var2.closeCustomKeyboard;
                var1 = var1.bind(var2)();
            case 214:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 16;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.openEmojiPickerActionSheet;
                var1 = {};
                var10 = function arg0, arg1() {
                    _fun73511: for (var _fun73511_ip = 0;;) switch (_fun73511_ip) {
                        case 0:
                            var9 = arg0;
                            var1 = _closure2_slot0;
                            var6 = var1.id;
                            var5 = _closure2_slot1;
                            var4 = _closure2_slot2;
                            var3 = {};
                            var0 = arg1;
                            var3.burst = var0;
                            var1 = null;
                            if (!(var1 != var9)) {
                                _fun73511_ip = 195;
                                continue _fun73511
                            }
                        case 42:
                            var8 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 7;
                            var2 = var7[var2];
                            var7 = undefined;
                            var8 = var8.bind(var7)(var2);
                            var2 = var8.toReactionEmoji;
                            var2 = var2.bind(var8)(var9);
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun73511_ip = 91;
                                continue _fun73511
                            }
                        case 85:
                            var1 = var3.burst;
                        case 91:
                            if (var1) {
                                _fun73511_ip = 147;
                                continue _fun73511
                            }
                        case 94:
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var1 = 8;
                            var1 = var11[var1];
                            var9 = var8.bind(var7)(var1);
                            var8 = var9.triggerHapticFeedback;
                            var10 = _closure1_slot1;
                            var1 = 9;
                            var1 = var11[var1];
                            var1 = var10.bind(var7)(var1);
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var8.bind(var9)(var1);
                        case 147:
                            var1 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 10;
                            var0 = var8[var0];
                            var1 = var1.bind(var7)(var0);
                            var0 = var1.addReaction;
                            var17 = var1;
                            var16 = var6;
                            var15 = var5;
                            var14 = var2;
                            var13 = var4;
                            var12 = var3;
                            var0 = var17[var0](var16, var15, var14, var13, var12, var11);
                        case 195:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1.onPressEmoji = var10;
                var1.channel = var9;
                var9 = _closure1_slot10;
                var9 = var9.REACTION;
                var1.pickerIntention = var9;
                if (!var8) {
                    _fun73510_ip = 279;
                    continue _fun73510
                }
            case 276:
                if (var6) {
                    _fun73510_ip = 313;
                    continue _fun73510
                }
            case 279:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 17;
                var6 = var9[var6];
                var6 = var8.bind(var0)(var6);
                var6 = var6.ReactionTypes;
                var6 = var6.NORMAL;
                _fun73510_ip = 345;
                continue _fun73510;
            case 313:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 17;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var7 = var7.ReactionTypes;
                var6 = var7.BURST;
            case 345:
                var1.reactionType = var6;
                var1.analyticsObject = var5;
                var1.messageId = var4;
                var1 = var2.bind(var3)(var1);
            case 364:
                return var0;
        }
    };
    var2.handleAddNewReactions = var5;
    var5 = function arg0() {
        _fun73512: for (var _fun73512_ip = 0;;) switch (_fun73512_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.messageId;
                var7 = var4.channelId;
                var13 = var4.location;
                var0 = undefined;
                if (!(var13 === var0)) {
                    _fun73512_ip = 26;
                    continue _fun73512
                }
            case 24:
                var13 = {};
            case 26:
                var12 = var4.isPoll;
                var6 = var4.emoji;
                var3 = {
                    'messageId': 0,
                    'channelId': 0,
                    'location': 0,
                    'isPoll': 0,
                    'emoji': 0
                };
                var2 = null;
                var20 = var3;
                var19 = null;
                var1 = silentSetPrototypeOf(var20, var19);
                var20 = {};
                var19 = var4;
                var18 = var3;
                var1 = copyDataProperties(var20, var19, var18);
                var5 = _closure1_slot3;
                var4 = var5.getChannel;
                var5 = var4.bind(var5)(var7);
                if (!(var2 != var5)) {
                    _fun73512_ip = 109;
                    continue _fun73512
                }
            case 96:
                var4 = var5.isPrivate;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun73512_ip = 121;
                    continue _fun73512
                }
            case 109:
                var4 = _closure1_slot8;
                var15 = var4.GUILD_CHANNEL;
                _fun73512_ip = 131;
                continue _fun73512;
            case 121:
                var4 = _closure1_slot8;
                var15 = var4.DM_CHANNEL;
            case 131:
                if (!(var2 != var5)) {
                    _fun73512_ip = 148;
                    continue _fun73512
                }
            case 135:
                var4 = var5.isForumLikeChannel;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun73512_ip = 177;
                    continue _fun73512
                }
            case 148:
                if (!(var2 != var5)) {
                    _fun73512_ip = 165;
                    continue _fun73512
                }
            case 152:
                var4 = var5.isForumPost;
                var4 = var4.bind(var5)();
                if (var4) {
                    _fun73512_ip = 177;
                    continue _fun73512
                }
            case 165:
                var4 = _closure1_slot9;
                var14 = var4.CHANNEL;
                _fun73512_ip = 187;
                continue _fun73512;
            case 177:
                var4 = _closure1_slot9;
                var14 = var4.FORUM_CHANNEL_POST;
            case 187:
                if (!(var2 == var12)) {
                    _fun73512_ip = 232;
                    continue _fun73512
                }
            case 191:
                var5 = _closure1_slot4;
                var4 = var5.getMessage;
                var5 = var4.bind(var5)(var7, var8);
                var2 = var2 == var5;
                var4 = undefined;
                if (var2) {
                    _fun73512_ip = 226;
                    continue _fun73512
                }
            case 216:
                var2 = var5.isPoll;
                var4 = var2.bind(var5)();
            case 226:
                var2 = true;
                var12 = var2 === var4;
            case 232:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 18;
                var4 = var2[var4];
                var11 = var5.bind(var0)(var4);
                var10 = var11.trackWithMetadata;
                var4 = _closure1_slot7;
                var9 = var4.REACTION_ACTION_SHEET_OPENED;
                var4 = {};
                var17 = _closure1_slot5;
                var16 = var17.getGuildId;
                var16 = var16.bind(var17)();
                var4.guild_id = var16;
                var4.channel_id = var7;
                var4.location_message_id = var8;
                var4.location_message_is_poll = var12;
                var12 = {};
                var12.page = var15;
                var12.section = var14;
                var20 = var12;
                var19 = var13;
                var13 = copyDataProperties(var20, var19);
                var4.location = var12;
                var4 = var10.bind(var11)(var9, var4);
                var4 = 12;
                var4 = var2[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.openLazy;
                var9 = _closure1_slot0;
                var3 = 14;
                var3 = var2[var3];
                var9 = var9.bind(var0)(var3);
                var3 = 19;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var9.bind(var0)(var3, var2);
                var2 = {};
                var2.messageId = var8;
                var2.channelId = var7;
                var2.emoji = var6;
                var20 = var2;
                var19 = var1;
                var1 = copyDataProperties(var20, var19);
                var1 = 'MessageReactions';
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
        }
    };
    var2.handleViewReactions = var5;
    var5 = function arg0, arg1, arg2() {
        var4 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 12;
        var3 = var1[var0];
        var0 = undefined;
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var3 = _closure1_slot0;
        var2 = 14;
        var2 = var1[var2];
        var3 = var3.bind(var0)(var2);
        var2 = 20;
        var2 = var1[var2];
        var1 = var1.paths;
        var3 = var3.bind(var0)(var2, var1);
        var2 = {};
        var1 = arg0;
        var2.messageId = var1;
        var1 = arg1;
        var2.channelId = var1;
        var1 = arg2;
        var2.emoji = var1;
        var1 = 'MessagePreviewReactions';
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.handleViewPreviewReactions = var5;
    var2.ADD_REACTION_ICONS = var4;
    var2.ADD_REACTION_ICON_COMPONENTS = var3;
    var1 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var0 = 25;
        var1 = var9[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var8 = _closure1_slot0;
        var5 = 26;
        var7 = var9[var5];
        var7 = var8.bind(var0)(var7);
        var11 = var7.intl;
        var10 = var11.string;
        var7 = var9[var5];
        var7 = var8.bind(var0)(var7);
        var7 = var7.t;
        var7 = var7.ZbtGBm;
        var7 = var10.bind(var11)(var7);
        var1.title = var7;
        var10 = _closure1_slot11;
        var6 = 27;
        var6 = var9[var6];
        var6 = var8.bind(var0)(var6);
        var7 = var6.Text;
        var6 = {};
        var11 = 'text-md/normal';
        var6.variant = var11;
        var11 = var9[var5];
        var11 = var8.bind(var0)(var11);
        var13 = var11.intl;
        var12 = var13.string;
        var11 = var9[var5];
        var11 = var8.bind(var0)(var11);
        var11 = var11.t;
        var11 = var11.VpjOCo;
        var11 = var12.bind(var13)(var11);
        var6.children = var11;
        var6 = var10.bind(var0)(var7, var6);
        var1.children = var6;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6["ETE/oC"];
        var6 = var7.bind(var10)(var6);
        var1.cancelText = var6;
        var6 = var9[var5];
        var6 = var8.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var0)(var5);
        var5 = var5.t;
        var5 = var5.oyYWHE;
        var5 = var6.bind(var7)(var5);
        var1.confirmText = var5;
        var4 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.removeAllReactions;
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var1.onConfirm = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.handleRemoveAllReactions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 4249, 3213, 1621, 660, 1624, 33, 3102, 3279, 3280, 6573, 3109, 3278, 7059, 1307, 3718, 7012, 6574, 4302, 9254, 9263, 9264, 9265, 7698, 7037, 4002, 1234, 3941, 2]);