// modules/messages/tryInjectMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 3;
        var2 = var5[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = {};
        var6 = arg1;
        var2.channelId = var6;
        var6 = _closure1_slot8;
        var6 = var6.IN_GAME_MESSAGE_NUX;
        var2.type = var6;
        var6 = '';
        var2.content = var6;
        var6 = var1.author;
        var2.author = var6;
        var6 = _closure1_slot6;
        var6 = var6.EPHEMERAL;
        var2.flags = var6;
        var6 = _closure1_slot7;
        var6 = var6.SENT;
        var2.state = var6;
        var3 = var3.bind(var4)(var2);
        var2 = _closure1_slot0;
        var0 = 4;
        var0 = var5[var0];
        var2 = var2.bind(var4)(var0);
        var0 = var2.createMessageRecord;
        var0 = var0.bind(var2)(var3);
        var2 = var1.applicationId;
        var0.applicationId = var2;
        var1 = var1.timestamp;
        var0.timestamp = var1;
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun77773: for (var _fun77773_ip = 0;;) switch (_fun77773_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 8;
                var0 = var5[var0];
                var7 = undefined;
                var1 = var1.bind(var7)(var0);
                var0 = var1.areAdvancedSignalsEnabled;
                var1 = var0.bind(var1)();
                var0 = null;
                if (var1) {
                    _fun77773_ip = 48;
                    continue _fun77773
                }
            case 46:
                return var0;
            case 48:
                var6 = var4.attachments;
                var5 = var6.find;
                var1 = function(arg0) { // Environment: var1
                    _fun77774: for (var _fun77774_ip = 0;;) switch (_fun77774_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.hasFlag;
                            var1 = arg0;
                            var4 = var1.flags;
                            var1 = null;
                            var5 = var1 != var4;
                            var1 = 0;
                            if (!var5) {
                                _fun77774_ip = 53;
                                continue _fun77774
                            }
                        case 50:
                            var1 = var4;
                        case 53:
                            var0 = _closure1_slot5;
                            var0 = var0.IS_CLIP;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1);
                if (!(var0 != var1)) {
                    _fun77773_ip = 464;
                    continue _fun77773
                }
            case 80:
                var1 = var4.author;
                var5 = var1.id;
                var6 = _closure1_slot4;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                if (!(var5 !== var1)) {
                    _fun77773_ip = 462;
                    continue _fun77773
                }
            case 112:
                var10 = var4.content;
                var5 = var10;
                var6 = undefined;
                var1 = undefined;
                var9 = var10.indexOf;
                var8 = '__CLIP_METADATA__';
                var9 = var9.bind(var10)(var8);
                var6 = var9;
                var8 = -1;
                if (!(var8 !== var9)) {
                    _fun77773_ip = 228;
                    continue _fun77773
                }
            case 154:
                var8 = var6;
                var6 = 17;
                var8 = var8 + var6;
                var6 = var5;
                var5 = var6.substring;
                var1 = var5.bind(var6)(var8);
            case 178: // try_start_0
                var5 = global;
                var6 = var5.JSON;
                var5 = var6.parse;
                var5 = var5.bind(var6)(var1);
                var1 = {};
                var6 = var5.id;
                var1.clipId = var6;
                var5 = var5.remoteTriggerClipId;
                var1.remoteTriggerClipId = var5;
            case 220: // try_end0
                _fun77773_ip = 230;
                continue _fun77773;
            case 222: // catch_target0
                CatchBlockStart(arg_register = 5);
                var1 = {};
                _fun77773_ip = 230;
                continue _fun77773;
            case 228:
                var1 = {};
            case 230:
                var8 = var1.clipId;
                var6 = var1.remoteTriggerClipId;
                if (!(var0 == var8)) {
                    _fun77773_ip = 253;
                    continue _fun77773
                }
            case 246:
                if (!(var0 != var6)) {
                    _fun77773_ip = 460;
                    continue _fun77773
                }
            case 253:
                var5 = _closure1_slot3;
                var1 = var5.getMatchingGroupClip;
                var5 = var1.bind(var5)(var8, var6);
                var6 = var0 == var5;
                var1 = null;
                if (var6) {
                    _fun77773_ip = 458;
                    continue _fun77773
                }
            case 283:
                var9 = _closure1_slot3;
                var8 = var9.wasClipSharedInChannel;
                var6 = var5.id;
                var5 = var3.id;
                var5 = var8.bind(var9)(var6, var5);
                var1 = null;
                if (var5) {
                    _fun77773_ip = 458;
                    continue _fun77773
                }
            case 319:
                var5 = var3.id;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var3 = 3;
                var3 = var8[var3];
                var6 = var6.bind(var7)(var3);
                var3 = {
                    'channelId': null,
                    'type': 66,
                    'content': ''
                };
                var3.channelId = var5;
                var9 = var4.author;
                var3.author = var9;
                var9 = _closure1_slot7;
                var9 = var9.SENT;
                var3.state = var9;
                var6 = var6.bind(var7)(var3);
                var3 = _closure1_slot0;
                var2 = 4;
                var2 = var8[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.createMessageRecord;
                var2 = var2.bind(var3)(var6);
                var3 = var4.timestamp;
                var2.timestamp = var3;
                var3 = {};
                var3.channel_id = var5;
                var4 = var4.id;
                var3.message_id = var4;
                var2.messageReference = var3;
                var1 = var2;
            case 458:
                return var1;
            case 460:
                return var0;
            case 462:
                return var0;
            case 464:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.MessageAttachmentFlags;
    var _closure1_slot5 = var7;
    var7 = var6.MessageFlags;
    var _closure1_slot6 = var7;
    var7 = var6.MessageStates;
    var _closure1_slot7 = var7;
    var6 = var6.MessageTypes;
    var _closure1_slot8 = var6;
    var3 = var3.Map;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/tryInjectMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun77775: for (var _fun77775_ip = 0;;) switch (_fun77775_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = _closure1_slot9;
                var1 = var3.get;
                var0 = var4.id;
                var1 = var1.bind(var3)(var0);
                var0 = var5.id;
                if (!(var1 !== var0)) {
                    _fun77775_ip = 457;
                    continue _fun77775
                }
            case 40:
                var0 = var5.applicationId;
                var9 = null;
                var0 = var9 == var0;
                var1 = null;
                if (var0) {
                    _fun77775_ip = 474;
                    continue _fun77775
                }
            case 59:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var10 = 5;
                var0 = var0[var10];
                var7 = undefined;
                var8 = var3.bind(var7)(var0);
                var6 = var8.hasFlag;
                var3 = var5.flags;
                var0 = _closure1_slot6;
                var0 = var0.SENT_BY_SOCIAL_LAYER_INTEGRATION;
                var0 = var6.bind(var8)(var3, var0);
                var1 = null;
                if (!var0) {
                    _fun77775_ip = 474;
                    continue _fun77775
                }
            case 116:
                var0 = var4.isDM;
                var0 = var0.bind(var4)();
                var1 = null;
                if (!var0) {
                    _fun77775_ip = 474;
                    continue _fun77775
                }
            case 134:
                var0 = var5.author;
                var3 = var0.id;
                var6 = _closure1_slot4;
                var0 = var6.getId;
                var0 = var0.bind(var6)();
                var1 = null;
                if (!(var3 !== var0)) {
                    _fun77775_ip = 474;
                    continue _fun77775
                }
            case 168:
                var0 = var5.activity;
                var0 = var9 != var0;
                var1 = null;
                if (var0) {
                    _fun77775_ip = 474;
                    continue _fun77775
                }
            case 186:
                var3 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var10];
                var12 = var3.bind(var7)(var0);
                var8 = var12.hasFlag;
                var0 = var4.recipientFlags;
                var3 = var9 != var0;
                var6 = 0;
                if (!var3) {
                    _fun77775_ip = 227;
                    continue _fun77775
                }
            case 224:
                var6 = var0;
            case 227:
                var13 = _closure1_slot0;
                var0 = _closure1_slot2;
                var3 = 6;
                var0 = var0[var3];
                var0 = var13.bind(var7)(var0);
                var0 = var0.ChannelRecipientPrivateUserDataFlags;
                var0 = var0.DISMISSED_IN_GAME_MESSAGE_NUX;
                var0 = var8.bind(var12)(var6, var0);
                var1 = null;
                if (var0) {
                    _fun77775_ip = 474;
                    continue _fun77775
                }
            case 273:
                var8 = _closure1_slot9;
                var6 = var8.has;
                var0 = var4.id;
                var0 = var6.bind(var8)(var0);
                var1 = null;
                if (var0) {
                    _fun77775_ip = 474;
                    continue _fun77775
                }
            case 300:
                var6 = _closure1_slot10;
                var0 = var4.id;
                var0 = var6.bind(var7)(var5, var0);
                var13 = _closure1_slot9;
                var12 = var13.set;
                var8 = var4.id;
                var6 = var5.id;
                var6 = var12.bind(var13)(var8, var6);
                var8 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var10];
                var10 = var8.bind(var7)(var6);
                var8 = var10.setFlag;
                var6 = var4.recipientFlags;
                var9 = var9 != var6;
                var11 = 0;
                if (!var9) {
                    _fun77775_ip = 381;
                    continue _fun77775
                }
            case 378:
                var11 = var6;
            case 381:
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = var9[var3];
                var3 = var6.bind(var7)(var3);
                var3 = var3.ChannelRecipientPrivateUserDataFlags;
                var6 = var3.DISMISSED_IN_GAME_MESSAGE_NUX;
                var3 = true;
                var8 = var8.bind(var10)(var11, var6, var3);
                var6 = _closure1_slot1;
                var3 = 7;
                var3 = var9[var3];
                var7 = var6.bind(var7)(var3);
                var6 = var7.updatePrivateChannelRecipientFlags;
                var3 = var4.id;
                var3 = var6.bind(var7)(var3, var8);
                var1 = var0;
                _fun77775_ip = 474;
                continue _fun77775;
            case 457:
                var6 = _closure1_slot10;
                var3 = var4.id;
                var0 = undefined;
                var1 = var6.bind(var0)(var5, var3);
            case 474:
                var0 = null;
                if (!(var0 == var1)) {
                    _fun77775_ip = 520;
                    continue _fun77775
                }
            case 480:
                var3 = _closure1_slot11;
                var2 = undefined;
                var3 = var3.bind(var2)(var5, var4);
                var2 = var0 != var3;
                var0 = null;
                if (!var2) {
                    _fun77775_ip = 518;
                    continue _fun77775
                }
            case 501:
                var2 = {};
                var2.message = var3;
                var3 = 'after';
                var2.position = var3;
                var0 = var2;
            case 518:
                return var0;
            case 520:
                var0 = {};
                var0.message = var1;
                var1 = 'before';
                var0.position = var1;
                return var0;
        }
    };
    var2.tryCreateInjectedMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3482, 1216, 660, 6543, 3972, 1384, 9878, 9879, 3508, 2]);