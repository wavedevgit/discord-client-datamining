// modules/replies/native/replyToMessage.tsx
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
    var6 = var3.AnalyticEvents;
    var _closure1_slot6 = var6;
    var3 = var3.Routes;
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/replies/native/replyToMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73879: for (var _fun73879_ip = 0;;) switch (_fun73879_ip) {
            case 0:
                var2 = arg0;
                var9 = var2.message;
                var1 = var2.channel;
                var3 = var2.chatInputRef;
                var11 = var2.actionSource;
                var6 = var2.invertible;
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun73879_ip = 39;
                    continue _fun73879
                }
            case 37:
                var6 = false;
            case 39:
                var5 = var2.scrollToMessage;
                if (!(var5 === var0)) {
                    _fun73879_ip = 51;
                    continue _fun73879
                }
            case 49:
                var5 = false;
            case 51:
                var8 = _closure1_slot3;
                var7 = var8.getEditingMessage;
                var4 = var1.id;
                var14 = var7.bind(var8)(var4);
                var4 = null;
                if (!(var4 != var14)) {
                    _fun73879_ip = 241;
                    continue _fun73879
                }
            case 83:
                var8 = _closure1_slot4;
                var7 = var8.getCurrentUser;
                var15 = var7.bind(var8)();
                var8 = _closure1_slot1;
                var18 = _closure1_slot2;
                var7 = 4;
                var7 = var18[var7];
                var12 = var8.bind(var0)(var7);
                var10 = var12.track;
                var7 = _closure1_slot6;
                var8 = var7.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                var7 = {};
                var13 = var9.id;
                var7.message_id = var13;
                var13 = var1.id;
                var7.channel_id = var13;
                var13 = var1.guild_id;
                var7.guild_id = var13;
                var17 = 'edit';
                var7.context_action = var17;
                var16 = _closure1_slot0;
                var13 = 5;
                var13 = var18[var13];
                var16 = var16.bind(var0)(var13);
                var13 = var16.getContextBarCancelReason;
                var13 = var13.bind(var16)(var17, var11);
                var7.reason = var13;
                var13 = var4 != var15;
                if (!var13) {
                    _fun73879_ip = 230;
                    continue _fun73879
                }
            case 210:
                var15 = var15.id;
                var14 = var14.author;
                var14 = var14.id;
                var13 = var15 === var14;
            case 230:
                var7.is_own_message = var13;
                var7 = var10.bind(var12)(var8, var7);
            case 241:
                var8 = _closure1_slot1;
                var10 = _closure1_slot2;
                var7 = 6;
                var7 = var10[var7];
                var10 = var8.bind(var0)(var7);
                var8 = var10.endEditMessage;
                var7 = var1.id;
                var7 = var8.bind(var10)(var7);
                var10 = _closure1_slot5;
                var8 = var10.getPendingReply;
                var7 = var1.id;
                var10 = var8.bind(var10)(var7);
                if (!var6) {
                    _fun73879_ip = 336;
                    continue _fun73879
                }
            case 300:
                var6 = 'message_swipe';
                if (!(var6 === var11)) {
                    _fun73879_ip = 336;
                    continue _fun73879
                }
            case 310:
                if (!(var4 != var10)) {
                    _fun73879_ip = 336;
                    continue _fun73879
                }
            case 314:
                var6 = var10.message;
                var7 = var6.id;
                var6 = var9.id;
                if (!(var7 !== var6)) {
                    _fun73879_ip = 668;
                    continue _fun73879
                }
            case 336:
                var7 = _closure1_slot1;
                var15 = _closure1_slot2;
                var6 = 4;
                var6 = var15[var6];
                var12 = var7.bind(var0)(var6);
                var8 = var12.track;
                var6 = _closure1_slot6;
                var7 = var6.REPLY_MESSAGE_STARTED;
                var6 = {};
                var6.source = var11;
                var14 = _closure1_slot0;
                var13 = 8;
                var16 = var15[var13];
                var18 = var14.bind(var0)(var16);
                var17 = var18.collectGuildAnalyticsMetadata;
                var16 = var1.guild_id;
                var20 = var17.bind(var18)(var16);
                var21 = var6;
                var16 = copyDataProperties(var21, var20);
                var13 = var15[var13];
                var14 = var14.bind(var0)(var13);
                var13 = var14.collectChannelAnalyticsMetadata;
                var20 = var13.bind(var14)(var1);
                var21 = var6;
                var13 = copyDataProperties(var21, var20);
                var6 = var8.bind(var12)(var7, var6);
                var7 = _closure1_slot4;
                var6 = var7.getCurrentUser;
                var6 = var6.bind(var7)();
                var7 = var1.isDM;
                var7 = var7.bind(var1)();
                var12 = !var7;
                if (!var12) {
                    _fun73879_ip = 482;
                    continue _fun73879
                }
            case 478:
                var12 = var4 != var6;
            case 482:
                if (!var12) {
                    _fun73879_ip = 505;
                    continue _fun73879
                }
            case 485:
                var7 = var9.author;
                var7 = var7.id;
                var6 = var6.id;
                var12 = var7 !== var6;
            case 505:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 7;
                var6 = var8[var6];
                var8 = var7.bind(var0)(var6);
                var7 = var8.createPendingReply;
                var6 = {};
                var6.message = var9;
                var6.channel = var1;
                var6.shouldMention = var12;
                var6.source = var11;
                var6 = var7.bind(var8)(var6);
                var6 = var4 == var3;
                var7 = undefined;
                if (var6) {
                    _fun73879_ip = 576;
                    continue _fun73879
                }
            case 564:
                var8 = var3.current;
                var6 = var4 == var8;
                var7 = var8;
            case 576:
                if (var6) {
                    _fun73879_ip = 589;
                    continue _fun73879
                }
            case 579:
                var6 = var7.openSystemKeyboard;
                var6 = var6.bind(var7)();
            case 589:
                if (!var5) {
                    _fun73879_ip = 920;
                    continue _fun73879
                }
            case 595:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 9;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.transitionTo;
                var13 = _closure1_slot7;
                var12 = var13.CHANNEL;
                var5 = var1.getGuildId;
                var11 = var5.bind(var1)();
                var8 = var1.id;
                var5 = var9.id;
                var5 = var12.bind(var13)(var11, var8, var5);
                var5 = var6.bind(var7)(var5);
                _fun73879_ip = 920;
                continue _fun73879;
            case 668:
                var6 = _closure1_slot4;
                var5 = var6.getCurrentUser;
                var11 = var5.bind(var6)();
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 4;
                var5 = var7[var5];
                var8 = var6.bind(var0)(var5);
                var7 = var8.track;
                var5 = _closure1_slot6;
                var6 = var5.CHAT_CONTEXT_BAR_ACTION_CANCELED;
                var5 = {};
                var9 = var9.id;
                var5.message_id = var9;
                var9 = var1.id;
                var5.channel_id = var9;
                var9 = var1.guild_id;
                var5.guild_id = var9;
                var9 = 'reply';
                var5.context_action = var9;
                var9 = 'swipe_reply_undo';
                var5.reason = var9;
                var9 = var4 != var11;
                if (!var9) {
                    _fun73879_ip = 798;
                    continue _fun73879
                }
            case 773:
                var11 = var11.id;
                var10 = var10.message;
                var10 = var10.author;
                var10 = var10.id;
                var9 = var11 === var10;
            case 798:
                var5.is_own_message = var9;
                var5 = var7.bind(var8)(var6, var5);
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 7;
                var2 = var6[var2];
                var5 = var5.bind(var0)(var2);
                var2 = var5.deletePendingReply;
                var1 = var1.id;
                var1 = var2.bind(var5)(var1);
                var1 = var4 == var3;
                var2 = undefined;
                if (var1) {
                    _fun73879_ip = 878;
                    continue _fun73879
                }
            case 854:
                var5 = var3.current;
                var1 = var4 == var5;
                var2 = undefined;
                if (var1) {
                    _fun73879_ip = 878;
                    continue _fun73879
                }
            case 868:
                var1 = var5.getText;
                var2 = var1.bind(var5)();
            case 878:
                var1 = '';
                if (!(var1 === var2)) {
                    _fun73879_ip = 920;
                    continue _fun73879
                }
            case 886:
                var1 = var4 == var3;
                var2 = undefined;
                if (var1) {
                    _fun73879_ip = 907;
                    continue _fun73879
                }
            case 895:
                var3 = var3.current;
                var1 = var4 == var3;
                var2 = var3;
            case 907:
                if (var1) {
                    _fun73879_ip = 920;
                    continue _fun73879
                }
            case 910:
                var1 = var2.dismissKeyboard;
                var1 = var1.bind(var2)();
            case 920:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6557, 1621, 6556, 660, 795, 9290, 6550, 9292, 4303, 1220, 2]);