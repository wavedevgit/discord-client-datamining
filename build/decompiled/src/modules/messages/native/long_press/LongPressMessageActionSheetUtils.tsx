// modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var7 = function arg0, arg1() {
        _fun73818: for (var _fun73818_ip = 0;;) switch (_fun73818_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = 'message_swipe';
                if (!(var0 !== var1)) {
                    _fun73818_ip = 68;
                    continue _fun73818
                }
            case 16:
                var0 = 'action_sheet';
                if (!(var0 !== var1)) {
                    _fun73818_ip = 46;
                    continue _fun73818
                }
            case 26:
                var0 = 'cancel';
                if (!(var0 !== var1)) {
                    _fun73818_ip = 38;
                    continue _fun73818
                }
            case 34:
                var0 = undefined;
                return var0;
            case 38:
                var0 = 'pressed_cancel';
                return var0;
            case 46:
                var0 = 'action_sheet_reply';
                var1 = 'reply';
                if (!(var1 === var2)) {
                    _fun73818_ip = 66;
                    continue _fun73818
                }
            case 60:
                var0 = 'action_sheet_edit';
            case 66:
                return var0;
            case 68:
                var0 = 'swipe_reply';
                var1 = 'reply';
                if (!(var1 === var2)) {
                    _fun73818_ip = 88;
                    continue _fun73818
                }
            case 82:
                var0 = 'swipe_edit';
            case 88:
                return var0;
        }
    };
    var _closure1_slot19 = var7;
    var6 = function arg0, arg1, arg2, arg3() {
        _fun73819: for (var _fun73819_ip = 0;;) switch (_fun73819_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var3 = arg2;
                var10 = arg3;
                var1 = arguments[4];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun73819_ip = 23;
                    continue _fun73819
                }
            case 21:
                var1 = false;
            case 23:
                var2 = var6.isForumPost;
                var2 = var2.bind(var6)();
                if (!var2) {
                    _fun73819_ip = 99;
                    continue _fun73819
                }
            case 36:
                var7 = var6.id;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 12;
                var2 = var9[var2];
                var9 = var8.bind(var0)(var2);
                var8 = var9.castMessageIdAsChannelId;
                var2 = var4.id;
                var2 = var8.bind(var9)(var2);
                if (!(var7 === var2)) {
                    _fun73819_ip = 99;
                    continue _fun73819
                }
            case 84:
                var7 = var6.parent_id;
                var2 = null;
                if (!(var2 == var7)) {
                    _fun73819_ip = 652;
                    continue _fun73819
                }
            case 99:
                if (!var1) {
                    _fun73819_ip = 147;
                    continue _fun73819
                }
            case 102:
                var1 = 'message_swipe';
                if (!(var1 === var10)) {
                    _fun73819_ip = 147;
                    continue _fun73819
                }
            case 112:
                var9 = _closure1_slot5;
                var8 = var9.isEditing;
                var7 = var6.id;
                var2 = var4.id;
                var2 = var8.bind(var9)(var7, var2);
                if (var2) {
                    _fun73819_ip = 436;
                    continue _fun73819
                }
            case 147:
                var9 = _closure1_slot3;
                var8 = var9.getPendingReply;
                var7 = var6.id;
                var14 = var8.bind(var9)(var7);
                var9 = null;
                if (!(var9 != var14)) {
                    _fun73819_ip = 324;
                    continue _fun73819
                }
            case 179:
                var8 = _closure1_slot7;
                var7 = var8.getCurrentUser;
                var15 = var7.bind(var8)();
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var7 = 16;
                var7 = var11[var7];
                var12 = var8.bind(var0)(var7);
                var11 = var12.track;
                var7 = _closure1_slot9;
                var8 = var7.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                var7 = {};
                var13 = var4.id;
                var7.message_id = var13;
                var13 = var6.id;
                var7.channel_id = var13;
                var13 = var6.guild_id;
                var7.guild_id = var13;
                var16 = 'reply';
                var7.context_action = var16;
                var13 = _closure1_slot19;
                var13 = var13.bind(var0)(var16, var10);
                var7.reason = var13;
                var13 = var9 != var15;
                if (!var13) {
                    _fun73819_ip = 313;
                    continue _fun73819
                }
            case 288:
                var15 = var15.id;
                var14 = var14.message;
                var14 = var14.author;
                var14 = var14.id;
                var13 = var15 === var14;
            case 313:
                var7.is_own_message = var13;
                var7 = var11.bind(var12)(var8, var7);
            case 324:
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var7 = 13;
                var7 = var8[var7];
                var12 = var11.bind(var0)(var7);
                var11 = var12.deletePendingReply;
                var7 = var6.id;
                var7 = var11.bind(var12)(var7);
                var7 = _closure1_slot1;
                var2 = 17;
                var2 = var8[var2];
                var8 = var7.bind(var0)(var2);
                var7 = var8.startEditMessageRecord;
                var2 = var6.id;
                var2 = var7.bind(var8)(var2, var4, var10);
                var2 = var9 == var3;
                var7 = undefined;
                if (var2) {
                    _fun73819_ip = 415;
                    continue _fun73819
                }
            case 403:
                var8 = var3.current;
                var2 = var9 == var8;
                var7 = var8;
            case 415:
                if (var2) {
                    _fun73819_ip = 864;
                    continue _fun73819
                }
            case 421:
                var2 = var7.openSystemKeyboard;
                var2 = var2.bind(var7)();
                _fun73819_ip = 864;
                continue _fun73819;
            case 436:
                var7 = _closure1_slot7;
                var2 = var7.getCurrentUser;
                var12 = var2.bind(var7)();
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 16;
                var2 = var8[var2];
                var10 = var7.bind(var0)(var2);
                var9 = var10.track;
                var2 = _closure1_slot9;
                var8 = var2.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                var2 = {};
                var7 = var4.id;
                var2.message_id = var7;
                var7 = var6.id;
                var2.channel_id = var7;
                var7 = var6.guild_id;
                var2.guild_id = var7;
                var7 = 'edit';
                var2.context_action = var7;
                var7 = 'swipe_edit_undo';
                var2.reason = var7;
                var7 = null;
                var11 = var7 != var12;
                if (!var11) {
                    _fun73819_ip = 563;
                    continue _fun73819
                }
            case 543:
                var13 = var12.id;
                var12 = var4.author;
                var12 = var12.id;
                var11 = var13 === var12;
            case 563:
                var2.is_own_message = var11;
                var2 = var9.bind(var10)(var8, var2);
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 17;
                var1 = var8[var1];
                var8 = var2.bind(var0)(var1);
                var2 = var8.endEditMessage;
                var1 = var6.id;
                var1 = var2.bind(var8)(var1);
                var1 = var7 == var3;
                var2 = undefined;
                if (var1) {
                    _fun73819_ip = 631;
                    continue _fun73819
                }
            case 619:
                var3 = var3.current;
                var1 = var7 == var3;
                var2 = var3;
            case 631:
                if (var1) {
                    _fun73819_ip = 864;
                    continue _fun73819
                }
            case 637:
                var1 = var2.dismissKeyboard;
                var1 = var1.bind(var2)();
                _fun73819_ip = 864;
                continue _fun73819;
            case 652:
                var2 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 13;
                var1 = var8[var1];
                var7 = var2.bind(var0)(var1);
                var3 = var7.deletePendingReply;
                var1 = var6.id;
                var1 = var3.bind(var7)(var1);
                var1 = 14;
                var1 = var8[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.openCreateForumPostModal;
                var1 = {};
                var7 = var6.guild_id;
                var1.guildId = var7;
                var7 = var6.parent_id;
                var1.parentChannelId = var7;
                var6 = var6.id;
                var1.threadId = var6;
                var4 = var4.id;
                var1.messageId = var4;
                var4 = true;
                var1.isEdit = var4;
                var7 = _closure1_slot1;
                var6 = 15;
                var4 = var8[var6];
                var4 = var7.bind(var0)(var4);
                var9 = var4.FORUM_CHANNEL;
                var4 = new Array(2);
                var4[0] = var9;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var6 = var6.GUILD_CHANNEL;
                var4[1] = var6;
                var1.analyticsLocations = var4;
                var4 = {};
                var6 = _closure1_slot11;
                var6 = var6.GUILD_CHANNEL;
                var4.page = var6;
                var6 = _closure1_slot12;
                var6 = var6.FORUM_POST_HEADER;
                var4.section = var6;
                var5 = _closure1_slot10;
                var5 = var5.CONTEXT_MENU;
                var4.object = var5;
                var1.analyticsLocationObject = var4;
                var1 = var2.bind(var3)(var1);
            case 864:
                return var0;
        }
    };
    var _closure1_slot20 = var6;
    var0 = function arg0, arg1() {
        _fun73820: for (var _fun73820_ip = 0;;) switch (_fun73820_ip) {
            case 0:
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun73820_ip = 11;
                    continue _fun73820
                }
            case 9:
                var5 = false;
            case 11:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.deleteMessage;
                var2 = arg0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1, var5);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var5 = function arg0, arg1() {
        _fun73821: for (var _fun73821_ip = 0;;) switch (_fun73821_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var8 = arguments[2];
                var0 = undefined;
                if (!(var8 === var0)) {
                    _fun73821_ip = 21;
                    continue _fun73821
                }
            case 15:
                var8 = 'Message';
            case 21:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 26;
                var3 = var6[var3];
                var7 = var4.bind(var0)(var3);
                var6 = var7.openThreadCreationForMobile;
                var3 = null;
                var9 = var3 == var1;
                var4 = undefined;
                if (var9) {
                    _fun73821_ip = 66;
                    continue _fun73821
                }
            case 61:
                var4 = var1.id;
            case 66:
                var4 = var6.bind(var7)(var2, var4, var8);
                var3 = var3 == var1;
                if (var3) {
                    _fun73821_ip = 149;
                    continue _fun73821
                }
            case 80:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 27;
                var4 = var10[var4];
                var8 = var6.bind(var0)(var4);
                var7 = var8.navigateToCreateThread;
                var6 = var2.guild_id;
                var9 = _closure1_slot1;
                var4 = 12;
                var4 = var10[var4];
                var10 = var9.bind(var0)(var4);
                var9 = var10.castMessageIdAsChannelId;
                var4 = var1.id;
                var4 = var9.bind(var10)(var4);
                var3 = var7.bind(var8)(var6, var4);
            case 149:
                if (var3) {
                    _fun73821_ip = 221;
                    continue _fun73821
                }
            case 152:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 28;
                var3 = var7[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.transitionToGuild;
                var2 = var2.guild_id;
                var6 = _closure1_slot1;
                var5 = 12;
                var5 = var7[var5];
                var6 = var6.bind(var0)(var5);
                var5 = var6.castMessageIdAsChannelId;
                var1 = var1.id;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
            case 221:
                return var0;
        }
    };
    var _closure1_slot22 = var5;
    var4 = function arg0, arg1() {
        var1 = arg0;
        var6 = arg1;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 16;
        var2 = var5[var0];
        var0 = undefined;
        var8 = var4.bind(var0)(var2);
        var7 = var8.track;
        var2 = _closure1_slot9;
        var4 = var2.MESSAGE_LINK_COPIED;
        var2 = {};
        var2.message_id = var6;
        var9 = var1.id;
        var2.channel = var9;
        var2 = var7.bind(var8)(var4, var2);
        var2 = _closure1_slot25;
        var4 = _closure1_slot0;
        var3 = 32;
        var3 = var5[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.getChannelPermalink;
        var3 = var1.guild_id;
        var1 = var1.id;
        var1 = var4.bind(var5)(var3, var1, var6);
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot23 = var4;
    var0 = function arg0() {
        _fun73823: for (var _fun73823_ip = 0;;) switch (_fun73823_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot16;
                var1 = undefined;
                var3 = var0.bind(var1)(var2);
                var0 = {};
                var4 = undefined;
                if (var3) {
                    _fun73823_ip = 27;
                    continue _fun73823
                }
            case 24:
                var4 = var2;
            case 27:
                var0.channel_id = var4;
                var1 = undefined;
                if (!var3) {
                    _fun73823_ip = 39;
                    continue _fun73823
                }
            case 36:
                var1 = var2;
            case 39:
                var0.channel_static_route = var1;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0() {
        _fun73824: for (var _fun73824_ip = 0;;) switch (_fun73824_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun73824_ip = 72;
                    continue _fun73824
                }
            case 12:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 30;
                var1 = var4[var1];
                var2 = undefined;
                var5 = var3.bind(var2)(var1);
                var1 = var5.copy;
                var1 = var1.bind(var5)(var6);
                var1 = 31;
                var1 = var4[var1];
                var2 = var3.bind(var2)(var1);
                var1 = var2.presentLinkCopied;
                var1 = var1.bind(var2)();
                var0 = true;
            case 72:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 30;
        var1 = var3[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var1);
        var4 = var5.copy;
        var1 = arg0;
        var1 = var4.bind(var5)(var1);
        var1 = 31;
        var1 = var3[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.presentMessageIdCopied;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot26 = var3;
    var0 = function arg0, arg1, arg2() {
        _fun73826: for (var _fun73826_ip = 0;;) switch (_fun73826_ip) {
            case 0:
                var3 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var5 = null;
                var1 = var5 == var3;
                var0 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun73826_ip = 44;
                    continue _fun73826
                }
            case 32:
                var3 = var3.current;
                var1 = var5 == var3;
                var2 = var3;
            case 44:
                if (var1) {
                    _fun73826_ip = 57;
                    continue _fun73826
                }
            case 47:
                var1 = var2.dismissKeyboard;
                var1 = var1.bind(var2)();
            case 57:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 18;
                var1 = var9[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var8 = _closure1_slot0;
                var5 = 19;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.VL1KOk;
                var6 = var7.bind(var10)(var6);
                var1.title = var6;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6["vXZ+Fo"];
                var6 = var7.bind(var10)(var6);
                var1.body = var6;
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
                var5 = var5.YEHppG;
                var5 = var6.bind(var7)(var5);
                var1.confirmText = var5;
                var4 = function() {
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.suppressEmbeds;
                    var1 = var1.bind(var2)(var4, var3);
                    return var0;
                };
                var1.onConfirm = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun73828: for (var _fun73828_ip = 0;;) switch (_fun73828_ip) {
            case 0:
                var3 = arg1;
                var1 = arg3;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg2;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var1;
                var5 = null;
                var6 = var5 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var6) {
                    _fun73828_ip = 45;
                    continue _fun73828
                }
            case 39:
                var2 = var1.sourceType;
            case 45:
                var1 = 'attachment';
                if (!(var1 === var2)) {
                    _fun73828_ip = 343;
                    continue _fun73828
                }
            case 56:
                var1 = var5 == var3;
                var2 = undefined;
                if (var1) {
                    _fun73828_ip = 77;
                    continue _fun73828
                }
            case 65:
                var3 = var3.current;
                var1 = var5 == var3;
                var2 = var3;
            case 77:
                if (var1) {
                    _fun73828_ip = 90;
                    continue _fun73828
                }
            case 80:
                var1 = var2.dismissKeyboard;
                var1 = var1.bind(var2)();
            case 90:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 18;
                var1 = var9[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.show;
                var1 = {};
                var8 = _closure1_slot0;
                var5 = 19;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.CbTIEo;
                var6 = var7.bind(var10)(var6);
                var1.title = var6;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var10 = var6.intl;
                var7 = var10.string;
                var6 = var9[var5];
                var6 = var8.bind(var0)(var6);
                var6 = var6.t;
                var6 = var6.faHmO3;
                var6 = var7.bind(var10)(var6);
                var1.body = var6;
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
                var5 = var5.kFwAsa;
                var5 = var6.bind(var7)(var5);
                var1.confirmText = var5;
                var4 = function() {
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    var0 = var0.source;
                    var2 = var0.id;
                    var1 = function arg0, arg1, arg2() {
                        var1 = arg1;
                        var2 = arg2;
                        var _closure4_slot0 = var2;
                        var3 = var1.attachments;
                        var2 = var3.filter;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var1 = var0.id;
                            var0 = _closure4_slot0;
                            var0 = var1 !== var0;
                            return var0;
                        };
                        var5 = var2.bind(var3)(var0);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 17;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.patchMessageAttachments;
                        var2 = var1.id;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var2, var5);
                        return var0;
                    };
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4, var3, var2);
                    return var0;
                };
                var1.onConfirm = var4;
                var1 = var2.bind(var3)(var1);
            case 343:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var0 = true;
    var8.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var12 = var10[var0];
    var8 = arg3;
    var0 = undefined;
    var8 = var8.bind(var0)(var12);
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.isMessageComponentsV2;
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var11.bind(var0)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var11 = var8.AnalyticEvents;
    var _closure1_slot9 = var11;
    var11 = var8.AnalyticsObjects;
    var _closure1_slot10 = var11;
    var11 = var8.AnalyticsPages;
    var _closure1_slot11 = var11;
    var11 = var8.AnalyticsSections;
    var _closure1_slot12 = var11;
    var11 = var8.MediaType;
    var _closure1_slot13 = var11;
    var11 = var8.MessageStates;
    var _closure1_slot14 = var11;
    var8 = var8.MessageTypes;
    var _closure1_slot15 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.isStaticChannelRoute;
    var _closure1_slot16 = var8;
    var8 = 9;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
    var _closure1_slot17 = var8;
    var8 = 10;
    var8 = var10[var8];
    var8 = var9.bind(var0)(var8);
    var8 = var8.jsx;
    var _closure1_slot18 = var8;
    var8 = 58;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/messages/native/long_press/LongPressMessageActionSheetUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var2.getContextBarCancelReason = var7;
    var2.handleEdit = var6;
    var2.handleCreateThread = var5;
    var2.handleCopyMessageLink = var4;
    var2.handleCopyId = var3;
    var1 = function arg0() {
        _fun73832: for (var _fun73832_ip = 0;;) switch (_fun73832_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.label;
                var6 = var0.message;
                var11 = var0.channel;
                var8 = var0.chatInputRef;
                var13 = var0.selectedMedia;
                var12 = var0.actionSheetSource;
                var9 = var0.analyticsLocations;
                var1 = var0.onActionExecuted;
                var17 = var0.onBack;
                var3 = var0.disabled;
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun73832_ip = 69;
                    continue _fun73832
                }
            case 67:
                var3 = false;
            case 69:
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var15 = var11.guild_id;
                var10 = var11.id;
                _closure2_slot0 = var10;
                var5 = var6.id;
                _closure2_slot1 = var5;
                if (var3) {
                    _fun73832_ip = 5404;
                    continue _fun73832
                }
            case 106:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var19 = 19;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.PHjkRE;
                var7 = var14.bind(var16)(var7);
                if (!(var2 !== var7)) {
                    _fun73832_ip = 198;
                    continue _fun73832
                }
            case 168:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 39;
                var7 = var16[var7];
                var14 = var14.bind(var0)(var7);
                var7 = var14.hideActionSheet;
                var7 = var7.bind(var14)();
            case 198:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["+78Pfm"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 5321;
                    continue _fun73832
                }
            case 257:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.n5EBAJ;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 5321;
                    continue _fun73832
                }
            case 316:
                var14 = _closure1_slot0;
                var20 = _closure1_slot2;
                var7 = var20[var19];
                var7 = var14.bind(var0)(var7);
                var16 = var7.intl;
                var14 = var16.string;
                var18 = _closure1_slot1;
                var7 = 44;
                var7 = var20[var7];
                var7 = var18.bind(var0)(var7);
                var7 = var7["1D+vqy"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 5254;
                    continue _fun73832
                }
            case 377:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.k5WiPf;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 5150;
                    continue _fun73832
                }
            case 436:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.zBoHlf;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 5136;
                    continue _fun73832
                }
            case 495:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.P8tvKG;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4919;
                    continue _fun73832
                }
            case 554:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.cduTBL;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4854;
                    continue _fun73832
                }
            case 615:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.fsBWmS;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4824;
                    continue _fun73832
                }
            case 674:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.MFGE51;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4805;
                    continue _fun73832
                }
            case 733:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.CvQ18w;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4786;
                    continue _fun73832
                }
            case 792:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["Bse+F/"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4767;
                    continue _fun73832
                }
            case 851:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.xwMqD7;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4591;
                    continue _fun73832
                }
            case 910:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["5911Lb"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4420;
                    continue _fun73832
                }
            case 969:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.JrGD7E;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4259;
                    continue _fun73832
                }
            case 1028:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.lfIHs4;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4222;
                    continue _fun73832
                }
            case 1087:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.gHp0C4;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4110;
                    continue _fun73832
                }
            case 1146:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.ZbtGBm;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4073;
                    continue _fun73832
                }
            case 1205:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["g33r/P"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4019;
                    continue _fun73832
                }
            case 1264:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.Xrt5Po;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 4004;
                    continue _fun73832
                }
            case 1323:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.RpE9k7;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3973;
                    continue _fun73832
                }
            case 1382:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["S/xNKV"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3955;
                    continue _fun73832
                }
            case 1441:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.JVuuz3;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3938;
                    continue _fun73832
                }
            case 1500:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.vbAEaA;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3871;
                    continue _fun73832
                }
            case 1559:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["92CPQ+"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3727;
                    continue _fun73832
                }
            case 1618:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["5IEsGx"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3671;
                    continue _fun73832
                }
            case 1677:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.I3ltXO;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3619;
                    continue _fun73832
                }
            case 1736:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.rBIGBL;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3604;
                    continue _fun73832
                }
            case 1795:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["39d0Wj"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3530;
                    continue _fun73832
                }
            case 1854:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.PHjkRE;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3258;
                    continue _fun73832
                }
            case 1913:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.tpxJto;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3205;
                    continue _fun73832
                }
            case 1972:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.SvXS1Z;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3152;
                    continue _fun73832
                }
            case 2031:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.mJ3P0N;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 3037;
                    continue _fun73832
                }
            case 2090:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.vrbqs1;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 2910;
                    continue _fun73832
                }
            case 2149:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.ZH7P2h;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 2692;
                    continue _fun73832
                }
            case 2208:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.grdwwt;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 2636;
                    continue _fun73832
                }
            case 2267:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.Rjezbz;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 2543;
                    continue _fun73832
                }
            case 2326:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7["4sxKOb"];
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 2527;
                    continue _fun73832
                }
            case 2385:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.wUIMqa;
                var7 = var14.bind(var16)(var7);
                if (!(var7 !== var2)) {
                    _fun73832_ip = 2527;
                    continue _fun73832
                }
            case 2441:
                var18 = _closure1_slot0;
                var7 = _closure1_slot2;
                var14 = var7[var19];
                var14 = var18.bind(var0)(var14);
                var16 = var14.intl;
                var14 = var16.string;
                var7 = var7[var19];
                var7 = var18.bind(var0)(var7);
                var7 = var7.t;
                var7 = var7.kFwAsa;
                var7 = var14.bind(var16)(var7);
                if (!(var7 === var2)) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 2500:
                var7 = _closure1_slot28;
                var27 = undefined;
                var26 = var10;
                var25 = var8;
                var24 = var6;
                var23 = var13;
                var7 = var27[var7](var26, var25, var24, var23, var22);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 2527:
                var7 = _closure1_slot27;
                var7 = var7.bind(var0)(var10, var8, var5);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 2543:
                var16 = _closure1_slot1;
                var7 = _closure1_slot2;
                var14 = 39;
                var14 = var7[var14];
                var19 = var16.bind(var0)(var14);
                var18 = var19.openLazy;
                var16 = _closure1_slot0;
                var14 = 41;
                var14 = var7[var14];
                var16 = var16.bind(var0)(var14);
                var14 = 57;
                var14 = var7[var14];
                var7 = var7.paths;
                var16 = var16.bind(var0)(var14, var7);
                var14 = {};
                var14.message = var6;
                var14.guildId = var15;
                var14.onBack = var17;
                var7 = 'AppInteractionInfoActionSheet';
                var7 = var18.bind(var19)(var16, var7, var14);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 2636:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 56;
                var7 = var16[var7];
                var16 = var14.bind(var0)(var7);
                var14 = var16.endPollEarly;
                var7 = {};
                var18 = var6.channel_id;
                var7.channelId = var18;
                var18 = var6.id;
                var7.messageId = var18;
                var7 = var14.bind(var16)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 2692:
                var7 = null;
                if (!(var7 != var13)) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 2701:
                var14 = var13.sourceType;
                var7 = 'embed';
                var20 = undefined;
                if (!(var7 === var14)) {
                    _fun73832_ip = 2727;
                    continue _fun73832
                }
            case 2717:
                var7 = var13.source;
                var20 = var7.id;
            case 2727:
                var14 = var13.sourceType;
                var7 = 'attachment';
                var21 = undefined;
                if (!(var7 === var14)) {
                    _fun73832_ip = 2753;
                    continue _fun73832
                }
            case 2743:
                var7 = var13.source;
                var21 = var7.id;
            case 2753:
                var7 = var0 !== var20;
                if (var7) {
                    _fun73832_ip = 2764;
                    continue _fun73832
                }
            case 2760:
                var7 = var0 !== var21;
            case 2764:
                if (var7) {
                    _fun73832_ip = 2798;
                    continue _fun73832
                }
            case 2767:
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 38;
                var14 = var18[var14];
                var16 = var16.bind(var0)(var14);
                var14 = var16.messageHasObscurableMedia;
                var7 = var14.bind(var16)(var6);
            case 2798:
                if (!var7) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 2804:
                var16 = _closure1_slot1;
                var7 = _closure1_slot2;
                var14 = 39;
                var14 = var7[var14];
                var19 = var16.bind(var0)(var14);
                var18 = var19.openLazy;
                var16 = _closure1_slot0;
                var14 = 41;
                var14 = var7[var14];
                var16 = var16.bind(var0)(var14);
                var14 = 40;
                var14 = var7[var14];
                var7 = var7.paths;
                var16 = var16.bind(var0)(var14, var7);
                var14 = _closure1_slot17;
                var7 = {};
                var22 = var6.channel_id;
                var7.channelId = var22;
                var22 = var6.id;
                var7.messageId = var22;
                var7.attachmentId = var21;
                var7.embedId = var20;
                var7 = var18.bind(var19)(var16, var14, var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 2910:
                var16 = _closure1_slot1;
                var7 = _closure1_slot2;
                var14 = 39;
                var14 = var7[var14];
                var19 = var16.bind(var0)(var14);
                var18 = var19.openLazy;
                var16 = _closure1_slot0;
                var14 = 41;
                var14 = var7[var14];
                var16 = var16.bind(var0)(var14);
                var14 = 55;
                var14 = var7[var14];
                var7 = var7.paths;
                var16 = var16.bind(var0)(var14, var7);
                var14 = {};
                var7 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 54;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.addOrUpdateSavedMessage;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.channelId = var4;
                    var3 = _closure2_slot1;
                    var0.messageId = var3;
                    var3 = arg0;
                    var0.dueAt = var3;
                    var3 = true;
                    var0.displayToast = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14.createReminder = var7;
                var7 = function() {
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 54;
                    var0 = var2[var0];
                    var3 = undefined;
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.addOrUpdateSavedMessage;
                    var0 = {};
                    var5 = _closure2_slot0;
                    var0.channelId = var5;
                    var4 = _closure2_slot1;
                    var0.messageId = var4;
                    var0.dueAt = var3;
                    var3 = true;
                    var0.displayToast = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14.removeReminder = var7;
                var7 = var6.channel_id;
                var14.channelId = var7;
                var7 = var6.id;
                var14.messageId = var7;
                var14.onBack = var17;
                var7 = 'MessageReminderDurationActionSheet';
                var7 = var18.bind(var19)(var16, var7, var14);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3037:
                var16 = _closure1_slot1;
                var7 = _closure1_slot2;
                var14 = 39;
                var14 = var7[var14];
                var19 = var16.bind(var0)(var14);
                var18 = var19.openLazy;
                var16 = _closure1_slot0;
                var14 = 41;
                var14 = var7[var14];
                var16 = var16.bind(var0)(var14);
                var14 = 55;
                var14 = var7[var14];
                var7 = var7.paths;
                var16 = var16.bind(var0)(var14, var7);
                var14 = {};
                var7 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 54;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.addOrUpdateSavedMessage;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.channelId = var4;
                    var3 = _closure2_slot1;
                    var0.messageId = var3;
                    var3 = arg0;
                    var0.dueAt = var3;
                    var3 = true;
                    var0.displayToast = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var14.createReminder = var7;
                var7 = var6.channel_id;
                var14.channelId = var7;
                var7 = var6.id;
                var14.messageId = var7;
                var14.onBack = var17;
                var7 = 'MessageReminderDurationActionSheet';
                var7 = var18.bind(var19)(var16, var7, var14);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3152:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 54;
                var7 = var16[var7];
                var16 = var14.bind(var0)(var7);
                var14 = var16.removeSavedMessage;
                var7 = {};
                var7.channelId = var10;
                var7.messageId = var5;
                var18 = true;
                var7.displayToast = var18;
                var7 = var14.bind(var16)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3205:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 54;
                var7 = var16[var7];
                var16 = var14.bind(var0)(var7);
                var14 = var16.addOrUpdateSavedMessage;
                var7 = {};
                var7.channelId = var10;
                var7.messageId = var5;
                var18 = true;
                var7.displayToast = var18;
                var7 = var14.bind(var16)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3258:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 51;
                var7 = var16[var7];
                var16 = var14.bind(var0)(var7);
                var14 = var16.getConfig;
                var7 = {};
                var18 = 'LongPressMessageActionSheetUtils';
                var7.location = var18;
                var7 = var14.bind(var16)(var7);
                var7 = var7.newUIEnabled;
                var16 = _closure1_slot1;
                var20 = _closure1_slot2;
                var14 = 39;
                var14 = var20[var14];
                var14 = var16.bind(var0)(var14);
                if (var7) {
                    _fun73832_ip = 3438;
                    continue _fun73832
                }
            case 3330:
                var19 = var14.openLazy;
                var21 = _closure1_slot0;
                var7 = 41;
                var7 = var20[var7];
                var18 = var21.bind(var0)(var7);
                var7 = 53;
                var16 = var20[var7];
                var7 = var20.paths;
                var18 = var18.bind(var0)(var16, var7);
                var16 = {};
                var16.channel = var11;
                var7 = 52;
                var7 = var20[var7];
                var7 = var21.bind(var0)(var7);
                var7 = var7.ApplicationCommandType;
                var7 = var7.MESSAGE;
                var16.commandType = var7;
                var7 = var6.id;
                var16.commandTargetId = var7;
                var16.onBack = var17;
                var7 = 'CommandContextMenuActionSheet';
                var7 = var19.bind(var14)(var18, var7, var16);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3438:
                var7 = var14.hideActionSheet;
                var7 = var7.bind(var14)();
                var19 = _closure1_slot0;
                var7 = 27;
                var7 = var20[var7];
                var16 = var19.bind(var0)(var7);
                var14 = var16.navigateToContextMenuCommands;
                var7 = {};
                var7.channel = var11;
                var18 = 52;
                var18 = var20[var18];
                var18 = var19.bind(var0)(var18);
                var18 = var18.ApplicationCommandType;
                var18 = var18.MESSAGE;
                var7.commandType = var18;
                var18 = var6.id;
                var7.commandTargetId = var18;
                var7.onClose = var17;
                var7 = var14.bind(var16)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3530:
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var7 = 28;
                var7 = var19[var7];
                var17 = var14.bind(var0)(var7);
                var16 = var17.transitionToGuild;
                var14 = var11.guild_id;
                var18 = _closure1_slot1;
                var7 = 12;
                var7 = var19[var7];
                var19 = var18.bind(var0)(var7);
                var18 = var19.castMessageIdAsChannelId;
                var7 = var6.id;
                var7 = var18.bind(var19)(var7);
                var7 = var16.bind(var17)(var14, var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3604:
                var7 = _closure1_slot22;
                var7 = var7.bind(var0)(var11, var6);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3619:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 50;
                var7 = var16[var7];
                var16 = var14.bind(var0)(var7);
                var14 = var16.openForwardModal;
                var7 = {};
                var7.message = var6;
                var17 = 'long-press-sheet';
                var7.source = var17;
                var7 = var14.bind(var16)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3671:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 49;
                var7 = var16[var7];
                var14 = var14.bind(var0)(var7);
                var7 = {};
                var7.message = var6;
                var7.channel = var11;
                var7.chatInputRef = var8;
                var16 = 'action_sheet';
                var7.actionSource = var16;
                var7 = var14.bind(var0)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3727:
                var18 = null;
                var7 = var18 == var13;
                var14 = undefined;
                if (var7) {
                    _fun73832_ip = 3744;
                    continue _fun73832
                }
            case 3738:
                var14 = var13.mediaUrl;
            case 3744:
                var7 = _closure1_slot25;
                var7 = var7.bind(var0)(var14);
                var21 = var14;
                if (!var7) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 3762:
                var14 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 16;
                var7 = var16[var7];
                var17 = var14.bind(var0)(var7);
                var16 = var17.track;
                var7 = _closure1_slot9;
                var14 = var7.CONTEXT_MENU_MEDIA_LINK_COPIED;
                var7 = {};
                var19 = var18 != var21;
                var18 = undefined;
                if (!var19) {
                    _fun73832_ip = 3839;
                    continue _fun73832
                }
            case 3808:
                var20 = _closure1_slot0;
                var22 = _closure1_slot2;
                var19 = 37;
                var19 = var22[var19];
                var20 = var20.bind(var0)(var19);
                var19 = var20.getHostname;
                var18 = var19.bind(var20)(var21);
            case 3839:
                var7.hostname = var18;
                var18 = _closure1_slot24;
                var25 = var18.bind(var0)(var10);
                var26 = var7;
                var18 = copyDataProperties(var26, var25);
                var7 = var16.bind(var17)(var14, var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3871:
                var7 = null;
                var14 = var7 == var13;
                var17 = undefined;
                if (var14) {
                    _fun73832_ip = 3888;
                    continue _fun73832
                }
            case 3882:
                var17 = var13.mediaUrl;
            case 3888:
                if (!(var7 != var17)) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 3895:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var7 = 36;
                var7 = var16[var7];
                var16 = var14.bind(var0)(var7);
                var14 = var16.handleClick;
                var7 = {};
                var7.href = var17;
                var7 = var14.bind(var16)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3938:
                var7 = function arg0() {
                    _fun73844: for (var _fun73844_ip = 0;;) switch (_fun73844_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = null;
                            var5 = var4 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun73844_ip = 24;
                                continue _fun73844
                            }
                        case 18:
                            var3 = var2.mediaUrl;
                        case 24:
                            if (!(var4 != var3)) {
                                _fun73844_ip = 111;
                                continue _fun73844
                            }
                        case 28:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 35;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.downloadMediaAssetWithContentType;
                            var4 = var2.mediaUrl;
                            var3 = _closure1_slot13;
                            var3 = var3.VIDEO;
                            var2 = var2.contentType;
                            var4 = var5.bind(var6)(var4, var3, var2);
                            var3 = var4.then;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 31;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.presentVideoSaved;
                                var1 = var1.bind(var2)();
                                return var0;
                            };
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var0 = 18;
                                var1 = var8[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.show;
                                var1 = {};
                                var7 = _closure1_slot0;
                                var4 = 19;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var9 = var5.intl;
                                var6 = var9.string;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var5 = var5.t;
                                var5 = var5.cV3alD;
                                var5 = var6.bind(var9)(var5);
                                var1.title = var5;
                                var5 = var8[var4];
                                var5 = var7.bind(var0)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var8[var4];
                                var4 = var7.bind(var0)(var4);
                                var4 = var4.t;
                                var4 = var4.r4Zjzv;
                                var4 = var5.bind(var6)(var4);
                                var1.body = var4;
                                var4 = true;
                                var1.isDismissable = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                        case 111:
                            return var0;
                    }
                };
                var7 = var7.bind(var0)(var13);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3955:
                var7 = function arg0, arg1() {
                    _fun73841: for (var _fun73841_ip = 0;;) switch (_fun73841_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = arg1;
                            var _closure3_slot0 = var0;
                            var4 = null;
                            var5 = var4 == var2;
                            var0 = undefined;
                            var3 = undefined;
                            if (var5) {
                                _fun73841_ip = 31;
                                continue _fun73841
                            }
                        case 25:
                            var3 = var2.mediaUrl;
                        case 31:
                            if (!(var4 != var3)) {
                                _fun73841_ip = 118;
                                continue _fun73841
                            }
                        case 35:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 35;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.downloadMediaAssetWithContentType;
                            var4 = var2.mediaUrl;
                            var3 = _closure1_slot13;
                            var3 = var3.IMAGE;
                            var2 = var2.contentType;
                            var4 = var5.bind(var6)(var4, var3, var2);
                            var3 = var4.then;
                            var2 = function() { // Environment: var1
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 31;
                                var1 = var3[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.presentImageSaved;
                                var1 = var1.bind(var2)();
                                var2 = _closure1_slot1;
                                var1 = 16;
                                var1 = var3[var1];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.track;
                                var1 = _closure1_slot9;
                                var2 = var1.CONTEXT_MENU_IMAGE_SAVED;
                                var1 = {};
                                var6 = _closure1_slot24;
                                var5 = _closure3_slot0;
                                var7 = var6.bind(var0)(var5);
                                var8 = var1;
                                var5 = copyDataProperties(var8, var7);
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 18;
                                var1 = var3[var0];
                                var0 = undefined;
                                var6 = var2.bind(var0)(var1);
                                var4 = var6.show;
                                var1 = {};
                                var10 = _closure1_slot0;
                                var7 = 19;
                                var8 = var3[var7];
                                var8 = var10.bind(var0)(var8);
                                var11 = var8.intl;
                                var9 = var11.string;
                                var8 = var3[var7];
                                var8 = var10.bind(var0)(var8);
                                var8 = var8.t;
                                var8 = var8.cV3alD;
                                var8 = var9.bind(var11)(var8);
                                var1.title = var8;
                                var8 = var3[var7];
                                var8 = var10.bind(var0)(var8);
                                var9 = var8.intl;
                                var8 = var9.string;
                                var7 = var3[var7];
                                var7 = var10.bind(var0)(var7);
                                var7 = var7.t;
                                var7 = var7.r4Zjzv;
                                var7 = var8.bind(var9)(var7);
                                var1.body = var7;
                                var7 = true;
                                var1.isDismissable = var7;
                                var1 = var4.bind(var6)(var1);
                                var1 = 16;
                                var1 = var3[var1];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.track;
                                var1 = _closure1_slot9;
                                var2 = var1.CONTEXT_MENU_IMAGE_SAVE_FAILED;
                                var1 = {};
                                var6 = _closure1_slot24;
                                var5 = _closure3_slot0;
                                var12 = var6.bind(var0)(var5);
                                var13 = var1;
                                var5 = copyDataProperties(var13, var12);
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                            };
                            var1 = var3.bind(var4)(var2, var1);
                        case 118:
                            return var0;
                    }
                };
                var7 = var7.bind(var0)(var13, var10);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 3973:
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 34;
                var7 = var14[var7];
                var7 = var13.bind(var0)(var7);
                var7 = var7.bind(var0)(var10, var5);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4004:
                var7 = _closure1_slot23;
                var7 = var7.bind(var0)(var11, var5);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4019:
                var7 = var6.author;
                var16 = var7.id;
                var13 = _closure1_slot1;
                var14 = _closure1_slot2;
                var7 = 33;
                var7 = var14[var7];
                var14 = var13.bind(var0)(var7);
                var13 = var14.openPrivateChannel;
                var7 = {};
                var7.recipientIds = var16;
                var7 = var13.bind(var14)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4073:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 48;
                var7 = var14[var7];
                var13 = var13.bind(var0)(var7);
                var7 = var13.handleRemoveAllReactions;
                var7 = var7.bind(var13)(var10, var5);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4110:
                var7 = 'Preview';
                if (!(var7 !== var12)) {
                    _fun73832_ip = 4185;
                    continue _fun73832
                }
            case 4118:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 48;
                var7 = var13[var7];
                var13 = var12.bind(var0)(var7);
                var12 = var13.handleViewReactions;
                var7 = {};
                var7.messageId = var5;
                var7.channelId = var10;
                var14 = {};
                var16 = _closure1_slot10;
                var16 = var16.MESSAGE_ACTION_SHEET;
                var14.object = var16;
                var7.location = var14;
                var7 = var12.bind(var13)(var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4185:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 48;
                var7 = var13[var7];
                var12 = var12.bind(var0)(var7);
                var7 = var12.handleViewPreviewReactions;
                var7 = var7.bind(var12)(var5, var10);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4222:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 48;
                var7 = var13[var7];
                var12 = var12.bind(var0)(var7);
                var7 = var12.handleAddNewReactions;
                var7 = var7.bind(var12)(var11, var5);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4259:
                var7 = var6.getContentMessage;
                var7 = var7.bind(var6)();
                var12 = _closure1_slot4;
                var12 = var12.bind(var0)(var7);
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                if (var12) {
                    _fun73832_ip = 4319;
                    continue _fun73832
                }
            case 4289:
                var12 = 30;
                var12 = var14[var12];
                var17 = var13.bind(var0)(var12);
                var16 = var17.copy;
                var12 = var7.content;
                var12 = var16.bind(var17)(var12);
                _fun73832_ip = 4385;
                continue _fun73832;
            case 4319:
                var12 = 29;
                var12 = var14[var12];
                var13 = var13.bind(var0)(var12);
                var12 = var13.getAllTextDisplayContent;
                var7 = var7.components;
                var13 = var12.bind(var13)(var7);
                var7 = null;
                if (!(var7 != var13)) {
                    _fun73832_ip = 4385;
                    continue _fun73832
                }
            case 4354:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 30;
                var7 = var14[var7];
                var12 = var12.bind(var0)(var7);
                var7 = var12.copy;
                var7 = var7.bind(var12)(var13);
            case 4385:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 31;
                var7 = var13[var7];
                var12 = var12.bind(var0)(var7);
                var7 = var12.presentMessageCopied;
                var7 = var7.bind(var12)();
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4420:
                var13 = _closure1_slot6;
                var12 = var13.getUploaderFileForMessageId;
                var7 = var6.id;
                var13 = var12.bind(var13)(var7);
                var12 = null;
                var14 = var12 == var13;
                var7 = undefined;
                if (var14) {
                    _fun73832_ip = 4456;
                    continue _fun73832
                }
            case 4451:
                var7 = var13.items;
            case 4456:
                var12 = var12 != var7;
                var16 = undefined;
                if (!var12) {
                    _fun73832_ip = 4468;
                    continue _fun73832
                }
            case 4465:
                var16 = var7;
            case 4468:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 25;
                var7 = var13[var7];
                var14 = var12.bind(var0)(var7);
                var18 = _closure1_slot8;
                var17 = var18.getOptions;
                var7 = var6.id;
                var23 = var17.bind(var18)(var7);
                var27 = undefined;
                var26 = var11;
                var25 = var6;
                var24 = var16;
                var7 = var27[var14](var26, var25, var24, var23, var22);
                var7 = 47;
                var7 = var13[var7];
                var14 = var12.bind(var0)(var7);
                var13 = var14.trackWithMetadata;
                var7 = _closure1_slot9;
                var12 = var7.MESSAGE_ACTION_SHEET_OPTION_PRESSED;
                var7 = {};
                var7.channel_id = var10;
                var7.guild_id = var15;
                var16 = 'retry';
                var7.action_sheet_option = var16;
                var16 = var6.state;
                var7.message_state = var16;
                var7 = var13.bind(var14)(var12, var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4591:
                var12 = var6.state;
                var7 = _closure1_slot14;
                var7 = var7.SENDING;
                if (!(var12 !== var7)) {
                    _fun73832_ip = 4660;
                    continue _fun73832
                }
            case 4610:
                var12 = var6.state;
                var7 = _closure1_slot14;
                var7 = var7.SEND_FAILED;
                if (!(var12 !== var7)) {
                    _fun73832_ip = 4645;
                    continue _fun73832
                }
            case 4629:
                var7 = function arg0, arg1, arg2() {
                    _fun73839: for (var _fun73839_ip = 0;;) switch (_fun73839_ip) {
                        case 0:
                            var3 = arg1;
                            var11 = arg2;
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var _closure3_slot1 = var11;
                            var5 = null;
                            var1 = var5 == var3;
                            var0 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun73839_ip = 44;
                                continue _fun73839
                            }
                        case 32:
                            var3 = var3.current;
                            var1 = var5 == var3;
                            var2 = var3;
                        case 44:
                            if (var1) {
                                _fun73839_ip = 57;
                                continue _fun73839
                            }
                        case 47:
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                        case 57:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 18;
                            var1 = var9[var1];
                            var3 = var7.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var5 = 19;
                            var10 = var9[var5];
                            var10 = var8.bind(var0)(var10);
                            var13 = var10.intl;
                            var12 = var13.string;
                            var10 = var9[var5];
                            var10 = var8.bind(var0)(var10);
                            var10 = var10.t;
                            var10 = var10.MWMcg7;
                            var10 = var12.bind(var13)(var10);
                            var1.title = var10;
                            var10 = _closure1_slot18;
                            var6 = 21;
                            var6 = var9[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = {};
                            var12 = var9[var5];
                            var12 = var8.bind(var0)(var12);
                            var14 = var12.intl;
                            var13 = var14.string;
                            var12 = var9[var5];
                            var12 = var8.bind(var0)(var12);
                            var12 = var12.t;
                            var12 = var12.AMvpS4;
                            var12 = var13.bind(var14)(var12);
                            var6.title = var12;
                            var6.message = var11;
                            var6 = var10.bind(var0)(var7, var6);
                            var1.children = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.gm1Vej;
                            var6 = var7.bind(var10)(var6);
                            var1.cancelText = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5.p89ACt;
                            var5 = var6.bind(var7)(var5);
                            var1.confirmText = var5;
                            var4 = function() {
                                var3 = _closure1_slot21;
                                var2 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                var1 = var0.id;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var1.onConfirm = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var7 = var7.bind(var0)(var10, var8, var6);
                _fun73832_ip = 4691;
                continue _fun73832;
            case 4645:
                var12 = _closure1_slot21;
                var7 = true;
                var7 = var12.bind(var0)(var10, var5, var7);
                _fun73832_ip = 4691;
                continue _fun73832;
            case 4660:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 24;
                var7 = var13[var7];
                var12 = var12.bind(var0)(var7);
                var7 = var12.cancelRequest;
                var7 = var7.bind(var12)(var5);
            case 4691:
                var12 = _closure1_slot1;
                var13 = _closure1_slot2;
                var7 = 47;
                var7 = var13[var7];
                var14 = var12.bind(var0)(var7);
                var13 = var14.trackWithMetadata;
                var7 = _closure1_slot9;
                var12 = var7.MESSAGE_ACTION_SHEET_OPTION_PRESSED;
                var7 = {};
                var7.channel_id = var10;
                var7.guild_id = var15;
                var15 = 'delete';
                var7.action_sheet_option = var15;
                var15 = var6.state;
                var7.message_state = var15;
                var7 = var13.bind(var14)(var12, var7);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4767:
                var7 = function arg0, arg1, arg2() {
                    _fun73837: for (var _fun73837_ip = 0;;) switch (_fun73837_ip) {
                        case 0:
                            var3 = arg1;
                            var11 = arg2;
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var _closure3_slot1 = var11;
                            var5 = null;
                            var1 = var5 == var3;
                            var0 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun73837_ip = 44;
                                continue _fun73837
                            }
                        case 32:
                            var3 = var3.current;
                            var1 = var5 == var3;
                            var2 = var3;
                        case 44:
                            if (var1) {
                                _fun73837_ip = 57;
                                continue _fun73837
                            }
                        case 47:
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                        case 57:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 18;
                            var1 = var9[var1];
                            var3 = var7.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var5 = 19;
                            var10 = var9[var5];
                            var10 = var8.bind(var0)(var10);
                            var13 = var10.intl;
                            var12 = var13.string;
                            var10 = var9[var5];
                            var10 = var8.bind(var0)(var10);
                            var10 = var10.t;
                            var10 = var10["Bse+F/"];
                            var10 = var12.bind(var13)(var10);
                            var1.title = var10;
                            var10 = _closure1_slot18;
                            var6 = 21;
                            var6 = var9[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = {};
                            var12 = var9[var5];
                            var12 = var8.bind(var0)(var12);
                            var14 = var12.intl;
                            var13 = var14.string;
                            var12 = var9[var5];
                            var12 = var8.bind(var0)(var12);
                            var12 = var12.t;
                            var12 = var12.NjEPp7;
                            var12 = var13.bind(var14)(var12);
                            var6.title = var12;
                            var6.message = var11;
                            var6 = var10.bind(var0)(var7, var6);
                            var1.children = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.gm1Vej;
                            var6 = var7.bind(var10)(var6);
                            var1.cancelText = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5.p89ACt;
                            var5 = var6.bind(var7)(var5);
                            var1.confirmText = var5;
                            var4 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 22;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.unpinMessage;
                                var1 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                var0 = var0.id;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1.onConfirm = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var7 = var7.bind(var0)(var11, var8, var6);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4786:
                var7 = function arg0, arg1, arg2() {
                    _fun73835: for (var _fun73835_ip = 0;;) switch (_fun73835_ip) {
                        case 0:
                            var3 = arg1;
                            var11 = arg2;
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var _closure3_slot1 = var11;
                            var5 = null;
                            var1 = var5 == var3;
                            var0 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun73835_ip = 44;
                                continue _fun73835
                            }
                        case 32:
                            var3 = var3.current;
                            var1 = var5 == var3;
                            var2 = var3;
                        case 44:
                            if (var1) {
                                _fun73835_ip = 57;
                                continue _fun73835
                            }
                        case 47:
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                        case 57:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 18;
                            var1 = var9[var1];
                            var3 = var7.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var5 = 19;
                            var10 = var9[var5];
                            var10 = var8.bind(var0)(var10);
                            var13 = var10.intl;
                            var12 = var13.string;
                            var10 = var9[var5];
                            var10 = var8.bind(var0)(var10);
                            var10 = var10.t;
                            var10 = var10.CvQ18w;
                            var10 = var12.bind(var13)(var10);
                            var1.title = var10;
                            var10 = _closure1_slot18;
                            var6 = 21;
                            var6 = var9[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = {};
                            var12 = var9[var5];
                            var12 = var8.bind(var0)(var12);
                            var14 = var12.intl;
                            var13 = var14.string;
                            var12 = var9[var5];
                            var12 = var8.bind(var0)(var12);
                            var12 = var12.t;
                            var12 = var12.WG5dyo;
                            var12 = var13.bind(var14)(var12);
                            var6.title = var12;
                            var6.message = var11;
                            var6 = var10.bind(var0)(var7, var6);
                            var1.children = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var10 = var6.intl;
                            var7 = var10.string;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var6 = var6.t;
                            var6 = var6.gm1Vej;
                            var6 = var7.bind(var10)(var6);
                            var1.cancelText = var6;
                            var6 = var9[var5];
                            var6 = var8.bind(var0)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var9[var5];
                            var5 = var8.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5.p89ACt;
                            var5 = var6.bind(var7)(var5);
                            var1.confirmText = var5;
                            var4 = function() {
                                var3 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var0 = 22;
                                var2 = var7[var0];
                                var0 = undefined;
                                var5 = var3.bind(var0)(var2);
                                var4 = var5.pinMessage;
                                var3 = _closure3_slot0;
                                var2 = _closure3_slot1;
                                var2 = var2.id;
                                var2 = var4.bind(var5)(var3, var2);
                                var6 = _closure1_slot0;
                                var1 = 23;
                                var1 = var7[var1];
                                var1 = var6.bind(var0)(var1);
                                var3 = var1.AccessibilityAnnouncer;
                                var2 = var3.announce;
                                var1 = 19;
                                var4 = var7[var1];
                                var4 = var6.bind(var0)(var4);
                                var5 = var4.intl;
                                var4 = var5.string;
                                var1 = var7[var1];
                                var1 = var6.bind(var0)(var1);
                                var1 = var1.t;
                                var1 = var1.sCfDDl;
                                var1 = var4.bind(var5)(var1);
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var1.onConfirm = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var7 = var7.bind(var0)(var11, var8, var6);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4805:
                var4 = function arg0, arg1, arg2() {
                    _fun73833: for (var _fun73833_ip = 0;;) switch (_fun73833_ip) {
                        case 0:
                            var11 = arg0;
                            var3 = arg1;
                            var _closure3_slot0 = var11;
                            var0 = arg2;
                            var _closure3_slot1 = var0;
                            var5 = null;
                            var1 = var5 == var3;
                            var0 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun73833_ip = 44;
                                continue _fun73833
                            }
                        case 32:
                            var3 = var3.current;
                            var1 = var5 == var3;
                            var2 = var3;
                        case 44:
                            if (var1) {
                                _fun73833_ip = 57;
                                continue _fun73833
                            }
                        case 47:
                            var1 = var2.dismissKeyboard;
                            var1 = var1.bind(var2)();
                        case 57:
                            var7 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 18;
                            var1 = var9[var1];
                            var3 = var7.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var8 = _closure1_slot0;
                            var5 = 19;
                            var10 = var9[var5];
                            var10 = var8.bind(var0)(var10);
                            var13 = var10.intl;
                            var12 = var13.string;
                            var10 = var9[var5];
                            var10 = var8.bind(var0)(var10);
                            var10 = var10.t;
                            var10 = var10.aIz1oV;
                            var10 = var12.bind(var13)(var10);
                            var1.title = var10;
                            var10 = _closure1_slot18;
                            var6 = 20;
                            var6 = var9[var6];
                            var7 = var7.bind(var0)(var6);
                            var6 = {};
                            var6.channelId = var11;
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
                            var5 = var5["cY+Oob"];
                            var5 = var6.bind(var7)(var5);
                            var1.confirmText = var5;
                            var4 = function() {
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.crosspostMessage;
                                var1 = _closure3_slot0;
                                var0 = _closure3_slot1;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var1.onConfirm = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var4 = var4.bind(var0)(var10, var8, var5);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4824:
                var7 = _closure1_slot20;
                var23 = 'action_sheet';
                var27 = undefined;
                var26 = var6;
                var25 = var11;
                var24 = var8;
                var4 = var27[var7](var26, var25, var24, var23, var22);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4854:
                var7 = _closure1_slot1;
                var11 = _closure1_slot2;
                var4 = 46;
                var4 = var11[var4];
                var7 = var7.bind(var0)(var4);
                var4 = {};
                var11 = var6.author;
                var11 = var11.id;
                var4.userId = var11;
                var4.channelId = var10;
                var10 = var6.id;
                var4.messageId = var10;
                var4.sourceAnalyticsLocations = var9;
                var4 = var7.bind(var0)(var4);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 4919:
                var4 = var6.author;
                var9 = var4.id;
                var7 = _closure1_slot7;
                var4 = var7.getUser;
                var13 = var4.bind(var7)(var9);
                var9 = null;
                if (!(var9 != var13)) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 4954:
                var4 = var9 == var8;
                var11 = undefined;
                if (var4) {
                    _fun73832_ip = 4975;
                    continue _fun73832
                }
            case 4963:
                var7 = var8.current;
                var4 = var9 == var7;
                var11 = var7;
            case 4975:
                if (var4) {
                    _fun73832_ip = 5060;
                    continue _fun73832
                }
            case 4978:
                var10 = var11.insertText;
                var7 = _closure1_slot1;
                var12 = _closure1_slot2;
                var4 = 11;
                var4 = var12[var4];
                var12 = var7.bind(var0)(var4);
                var7 = var12.getUserTag;
                var4 = {};
                var14 = 'never';
                var4.decoration = var14;
                var12 = var7.bind(var12)(var13, var4);
                var4 = global;
                var4 = var4.HermesInternal;
                var7 = var4.concat;
                var4 = '@';
                var7 = var7.bind(var4)(var12);
                var4 = true;
                var4 = var10.bind(var11)(var7, var9, var4);
            case 5060:
                var4 = var9 == var8;
                var7 = undefined;
                if (var4) {
                    _fun73832_ip = 5081;
                    continue _fun73832
                }
            case 5069:
                var10 = var8.current;
                var4 = var9 == var10;
                var7 = var10;
            case 5081:
                if (var4) {
                    _fun73832_ip = 5094;
                    continue _fun73832
                }
            case 5084:
                var4 = var7.focus;
                var4 = var4.bind(var7)();
            case 5094:
                var4 = var9 == var8;
                var7 = undefined;
                if (var4) {
                    _fun73832_ip = 5115;
                    continue _fun73832
                }
            case 5103:
                var8 = var8.current;
                var4 = var9 == var8;
                var7 = var8;
            case 5115:
                if (var4) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 5121:
                var4 = var7.openSystemKeyboard;
                var4 = var4.bind(var7)();
                _fun73832_ip = 5393;
                continue _fun73832;
            case 5136:
                var4 = _closure1_slot26;
                var4 = var4.bind(var0)(var5);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 5150:
                var5 = var6.type;
                var4 = _closure1_slot15;
                var4 = var4.THREAD_STARTER_MESSAGE;
                if (!(var5 === var4)) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 5172:
                var5 = var6.messageReference;
                var4 = null;
                if (!(var4 != var5)) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 5187:
                var5 = var6.messageReference;
                var9 = var5.message_id;
                var8 = var5.guild_id;
                var7 = var5.channel_id;
                if (!(var4 != var8)) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 5216:
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 28;
                var4 = var10[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.transitionToGuild;
                var4 = var4.bind(var5)(var8, var7, var9);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 5254:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 45;
                var4 = var7[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.canReportMessageToMods;
                var4 = var4.bind(var5)(var6);
                if (!var4) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 5288:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 43;
                var4 = var7[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.showReportToModMessageModal;
                var4 = var4.bind(var5)(var6);
                _fun73832_ip = 5393;
                continue _fun73832;
            case 5321:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 42;
                var4 = var7[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.canReportMessage;
                var4 = var4.bind(var5)(var6);
                if (!var4) {
                    _fun73832_ip = 5393;
                    continue _fun73832
                }
            case 5355:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 43;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.showReportModalForMessage;
                var3 = 'mobile_message_action_sheet';
                var3 = var4.bind(var5)(var6, var3);
            case 5393:
                var3 = null;
                if (!(var3 != var1)) {
                    _fun73832_ip = 5404;
                    continue _fun73832
                }
            case 5399:
                var1 = var1.bind(var0)(var2);
            case 5404:
                return var0;
        }
    };
    var2.longPressMessageOptionHandler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6532, 3101, 6533, 6614, 1621, 9263, 660, 1379, 4259, 33, 3236, 21, 9264, 9265, 5579, 795, 6526, 4003, 1234, 9623, 9627, 9628, 3160, 4301, 9630, 6467, 3919, 1220, 3974, 5291, 3147, 4236, 3945, 9631, 8856, 5890, 5893, 4270, 3278, 9188, 1307, 5678, 6493, 1986, 5645, 7350, 4302, 9232, 9261, 8891, 9632, 1645, 9633, 9638, 9652, 9662, 9669, 2]);