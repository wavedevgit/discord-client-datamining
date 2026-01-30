// modules/chat_input/native/accessories/ChatInputSendButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: renderChatInputSendButton, environment: var1
        var4 = arg0;
        var3 = _closure1_slot7;
        var2 = _closure1_slot10;
        var1 = {};
        var1.type = var4;
        var0 = arg2;
        var1.state = var0;
        var0 = arg3;
        var1.cleanup = var0;
        var6 = arg1;
        var7 = var1;
        var0 = copyDataProperties(var7, var6);
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1, var4);
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0) { // Original name: getChatInputSendButtonItemKey, environment: var1
        _fun91079: for (var _fun91079_ip = 0;;) switch (_fun91079_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.isOnCooldown;
                var3 = var0.sendVoiceMessageEnabled;
                var0 = var0.sendEnabled;
                var2 = _closure1_slot8;
                if (var3) {
                    _fun91079_ip = 50;
                    continue _fun91079
                }
            case 31:
                if (var0) {
                    _fun91079_ip = 42;
                    continue _fun91079
                }
            case 34:
                var0 = var2.BUTTON_SEND_DISABLED;
                _fun91079_ip = 48;
                continue _fun91079;
            case 42:
                var0 = var2.BUTTON_SEND;
            case 48:
                _fun91079_ip = 70;
                continue _fun91079;
            case 50:
                if (var1) {
                    _fun91079_ip = 61;
                    continue _fun91079
                }
            case 53:
                var1 = var2.BUTTON_SEND_VOICE_MESSAGE;
                _fun91079_ip = 67;
                continue _fun91079;
            case 61:
                var1 = var2.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
            case 67:
                var0 = var1;
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var12 = var3.CHAT_INPUT_ACTION_BUTTON_WIDTH;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = {};
    var7 = 'send-button';
    var3.BUTTON_SEND = var7;
    var7 = 'send-button-disabled';
    var3.BUTTON_SEND_DISABLED = var7;
    var7 = 'voice-message-button';
    var3.BUTTON_SEND_VOICE_MESSAGE = var7;
    var7 = 'voice-message-button-disabled';
    var3.BUTTON_SEND_VOICE_MESSAGE_DISABLED = var7;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.width = var12;
    var9.height = var10;
    var3.container = var9;
    var9 = {};
    var10 = 7;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BRAND;
    var9.backgroundColor = var12;
    var3.sendButtonActive = var9;
    var9 = {};
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.WHITE;
    var9.tintColor = var10;
    var3.sendButtonIconActive = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun91080: for (var _fun91080_ip = 0;;) switch (_fun91080_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.onSendMessage;
                var10 = var0.sendEnabled;
                var9 = var0.isOnCooldown;
                var8 = var0.channelId;
                var4 = var0.state;
                var7 = var0.cleanup;
                var6 = var0.type;
                var0 = _closure1_slot9;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 8;
                var0 = var13[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.cleanup = var7;
                var0.state = var4;
                var4 = _closure1_slot8;
                var4 = var4.BUTTON_SEND_VOICE_MESSAGE;
                if (!(var6 !== var4)) {
                    _fun91080_ip = 275;
                    continue _fun91080
                }
            case 107:
                var4 = _closure1_slot8;
                var4 = var4.BUTTON_SEND_VOICE_MESSAGE_DISABLED;
                if (!(var6 !== var4)) {
                    _fun91080_ip = 275;
                    continue _fun91080
                }
            case 124:
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var16 = _closure1_slot2;
                var4 = 10;
                var4 = var16[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var13 = true;
                var4.active = var13;
                var13 = var12.sendButtonActive;
                var4.activeStyle = var13;
                var12 = var12.sendButtonIconActive;
                var4.activeIconStyle = var12;
                var15 = _closure1_slot0;
                var12 = 11;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.SendMessageIcon;
                var4.IconComponent = var12;
                var12 = 12;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.TXNS7S;
                var12 = var13.bind(var14)(var12);
                var4.accessibilityLabel = var12;
                var4.onPress = var11;
                var10 = !var10;
                var4.disabled = var10;
                var4 = var7.bind(var3)(var6, var4);
                _fun91080_ip = 315;
                continue _fun91080;
            case 275:
                var7 = _closure1_slot7;
                var6 = _closure1_slot1;
                var10 = _closure1_slot2;
                var5 = 9;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.disabled = var9;
                var5.channelId = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 315:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot10 = var3;
    var3 = var6.forwardRef;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun91081: for (var _fun91081_ip = 0;;) switch (_fun91081_ip) {
            case 0:
                var3 = arg0;
                var2 = var3.channel;
                var _closure2_slot0 = var2;
                var5 = var3.defaultValue;
                var1 = var3.canSendVoiceMessage;
                var11 = var3.hasPendingAttachments;
                var12 = var3.hasPendingEdit;
                var9 = var3.onSendMessage;
                var _closure2_slot1 = var9;
                var6 = var3.requireTextContent;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun91081_ip = 62;
                    continue _fun91081
                }
            case 60:
                var6 = false;
            case 62:
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var4 = _closure1_slot9;
                var4 = var4.bind(var3)();
                var13 = _closure1_slot4;
                var10 = var13.useState;
                var8 = var5.length;
                var5 = 0;
                var8 = var8 > var5;
                var13 = var10.bind(var13)(var8);
                var10 = _closure1_slot3;
                var8 = 2;
                var10 = var10.bind(var3)(var13, var8);
                var5 = var10[var5];
                var8 = 1;
                var8 = var10[var8];
                _closure2_slot2 = var8;
                var10 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 13;
                var8 = var13[var8];
                var15 = var10.bind(var3)(var8);
                var14 = var15.useStateFromStores;
                var8 = _closure1_slot6;
                var13 = new Array(1);
                var13[0] = var8;
                var10 = new Array(1);
                var10[0] = var2;
                var8 = function() { // Environment: var0
                    var2 = _closure1_slot6;
                    var1 = var2.isChannelOnCooldown;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var14.bind(var15)(var13, var8, var10);
                _closure2_slot3 = var10;
                var8 = !var10;
                if (var8) {
                    _fun91081_ip = 214;
                    continue _fun91081
                }
            case 211:
                var8 = var12;
            case 214:
                if (!var8) {
                    _fun91081_ip = 232;
                    continue _fun91081
                }
            case 217:
                if (var5) {
                    _fun91081_ip = 223;
                    continue _fun91081
                }
            case 220:
                var5 = var11;
            case 223:
                if (var5) {
                    _fun91081_ip = 229;
                    continue _fun91081
                }
            case 226:
                var5 = !var6;
            case 229:
                var8 = var5;
            case 232:
                _closure2_slot4 = var8;
                if (!var1) {
                    _fun91081_ip = 242;
                    continue _fun91081
                }
            case 239:
                var1 = !var8;
            case 242:
                _closure2_slot5 = var1;
                var5 = _closure1_slot4;
                var6 = var5.useMemo;
                var11 = var2.id;
                var2 = new Array(5);
                var2[0] = var11;
                var2[1] = var10;
                var2[2] = var9;
                var2[3] = var8;
                var2[4] = var1;
                var1 = function() { // Environment: var0
                    var1 = {};
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1.channelId = var2;
                    var2 = _closure2_slot3;
                    var1.isOnCooldown = var2;
                    var2 = _closure2_slot1;
                    var1.onSendMessage = var2;
                    var2 = _closure2_slot4;
                    var1.sendEnabled = var2;
                    var0 = _closure2_slot5;
                    var1.sendVoiceMessageEnabled = var0;
                    var0 = new Array(1);
                    var0[0] = var1;
                    return var0;
                };
                var8 = var6.bind(var5)(var1, var2);
                var2 = var5.useImperativeHandle;
                var1 = arg1;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure2_slot2;
                    var0.setHasText = var1;
                    return var0;
                };
                var0 = var2.bind(var5)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var4.container;
                var0.style = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 14;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.TransitionGroup;
                var4 = {};
                var4.items = var8;
                var8 = _closure1_slot11;
                var4.renderItem = var8;
                var7 = _closure1_slot12;
                var4.getItemKey = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var3.bind(var6)(var1);
    var1 = 'ChatInputSendButton';
    var3.displayName = var1;
    var1 = var6.memo;
    var1 = var1.bind(var6)(var3);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/accessories/ChatInputSendButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 6496, 11624, 33, 1297, 671, 11762, 11774, 11744, 3215, 1234, 566, 3987, 2]);