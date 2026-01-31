// modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.channelId;
        var1 = var0.requesterUser;
        var3 = var0.requestToSpeakTimestamp;
        var0 = {};
        var7 = _closure1_slot0;
        var6 = _closure1_slot1;
        var5 = 2;
        var6 = var6[var5];
        var5 = undefined;
        var7 = var7.bind(var5)(var6);
        var6 = var7.fromTimestamp;
        var5 = global;
        var8 = var5.Date;
        var5 = var8.parse;
        var5 = var5.bind(var8)(var3);
        var5 = var6.bind(var7)(var5);
        var0.id = var5;
        var5 = _closure1_slot4;
        var5 = var5.STAGE_RAISE_HAND;
        var0.type = var5;
        var5 = _closure1_slot2;
        var5 = var5.EPHEMERAL;
        var0.flags = var5;
        var5 = '';
        var0.content = var5;
        var0.channel_id = var4;
        var0.author = var1;
        var1 = new Array(0);
        var0.attachments = var1;
        var1 = new Array(0);
        var0.embeds = var1;
        var1 = false;
        var0.pinned = var1;
        var4 = new Array(0);
        var0.mentions = var4;
        var4 = new Array(0);
        var0.mention_channels = var4;
        var4 = new Array(0);
        var0.mention_roles = var4;
        var0.mention_everyone = var1;
        var0.timestamp = var3;
        var2 = _closure1_slot3;
        var2 = var2.SENT;
        var0.state = var2;
        var0.tts = var1;
        return var0;
    };
    var _closure1_slot5 = var0;
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
    var6 = var3.MessageFlags;
    var _closure1_slot2 = var6;
    var6 = var3.MessageStates;
    var _closure1_slot3 = var6;
    var3 = var3.MessageTypes;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var6 = arg0;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {
            'type': 'MESSAGE_CREATE',
            'channelId': null,
            'message': null,
            'optimistic': false,
            'sendMessageOptions': null,
            'isPushNotification': false
        };
        var1.channelId = var6;
        var5 = _closure1_slot5;
        var4 = {};
        var4.channelId = var6;
        var6 = arg1;
        var4.requesterUser = var6;
        var6 = arg2;
        var4.requestToSpeakTimestamp = var6;
        var4 = var5.bind(var0)(var4);
        var1.message = var4;
        var4 = {};
        var1.sendMessageOptions = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.sendStageRequestToSpeakEphemeralMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 806, 21, 2]);