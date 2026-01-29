// modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: renderChatInputActionButtonGiftAndThread, environment: var1
        _fun90782: for (var _fun90782_ip = 0;;) switch (_fun90782_ip) {
            case 0:
                var1 = arg1;
                var13 = var1.accessible;
                var10 = var1.canStartThreads;
                var16 = var1.channel;
                var15 = var1.onPress;
                var _closure2_slot0 = var15;
                var0 = var1.shouldShowThread;
                var8 = var1.styleButton;
                var14 = var1.styleButtonWrapper;
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = arg3;
                var1.cleanup = var5;
                var5 = arg2;
                var1.state = var5;
                var7 = _closure1_slot6;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                if (var0) {
                    _fun90782_ip = 155;
                    continue _fun90782
                }
            case 109:
                var0 = 9;
                var0 = var12[var0];
                var5 = var6.bind(var3)(var0);
                var0 = {};
                var0.accessible = var13;
                var0.channel = var16;
                var0.onPress = var15;
                var0.style = var14;
                var0.styleButton = var8;
                var0 = var7.bind(var3)(var5, var0);
                _fun90782_ip = 278;
                continue _fun90782;
            case 155:
                var5 = 6;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.accessible = var13;
                var11 = _closure1_slot0;
                var13 = 7;
                var14 = var12[var13];
                var14 = var11.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var12[var13];
                var13 = var11.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["4WNcpu"];
                var13 = var14.bind(var15)(var13);
                var5.accessibilityLabel = var13;
                var10 = !var10;
                var5.disabled = var10;
                var10 = 8;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.ThreadPlusIcon;
                var5.IconComponent = var10;
                var9 = function(arg0) { // Original name: onPress, environment: var9
                    var3 = _closure2_slot0;
                    var0 = _closure1_slot5;
                    var2 = var0.THREAD;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0, var2);
                    return var0;
                };
                var5.onPress = var9;
                var5.style = var8;
                var0 = var7.bind(var3)(var6, var5);
            case 278:
                var1.children = var0;
                var0 = arg0;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function(arg0) { // Original name: getChatInputActionButtonGiftAndThreadKey, environment: var1
        _fun90784: for (var _fun90784_ip = 0;;) switch (_fun90784_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.shouldShowThread;
                var0 = 'gift';
                if (!var1) {
                    _fun90784_ip = 20;
                    continue _fun90784
                }
            case 16:
                var0 = 'thread';
            case 20:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.CHAT_INPUT_ACTION_BUTTON_SIZE;
    var11 = var3.CHAT_INPUT_ACTION_BUTTON_WIDTH;
    var3 = var3.ChatInputActionType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.width = var11;
    var9.height = var10;
    var3.container = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Original name: ChatInputActionButtonGiftOrThread, environment: var1
        var6 = arg0;
        var _closure2_slot0 = var6;
        var1 = _closure1_slot7;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var5 = _closure1_slot3;
        var2 = var5.useMemo;
        var1 = new Array(1);
        var1[0] = var6;
        var0 = function() { // Environment: var0
            var1 = _closure2_slot0;
            var0 = new Array(1);
            var0[0] = var1;
            return var0;
        };
        var8 = var2.bind(var5)(var0, var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot4;
        var0 = {};
        var4 = var4.container;
        var0.style = var4;
        var6 = _closure1_slot6;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 10;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.TransitionGroup;
        var4 = {};
        var4.items = var8;
        var8 = _closure1_slot8;
        var4.renderItem = var8;
        var7 = _closure1_slot9;
        var4.getItemKey = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11602, 33, 1297, 11740, 11722, 1234, 11741, 11743, 3981, 2]);