// modules/forwarding/native/ForwardMessageFooter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DraftType;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forwarding/native/ForwardMessageFooter.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun73138: for (var _fun73138_ip = 0;;) switch (_fun73138_ip) {
            case 0:
                var0 = arg0;
                var24 = var0.message;
                var _closure2_slot0 = var24;
                var22 = var0.forwardOptions;
                var19 = var0.sendLabel;
                var18 = var0.canSend;
                var5 = var0.selectedDestinations;
                var17 = var0.isSending;
                var25 = var0.onSend;
                var _closure2_slot1 = var25;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 4;
                var0 = var7[var0];
                var3 = undefined;
                var1 = var2.bind(var3)(var0);
                var0 = var1.useTrackForwardEditContextMessageOnce;
                var4 = var0.bind(var1)();
                var _closure2_slot2 = var4;
                var0 = 5;
                var1 = var7[var0];
                var9 = var2.bind(var3)(var1);
                var1 = var9.useSelectedDestinationChannel;
                var23 = var1.bind(var9)(var5);
                var1 = 6;
                var1 = var7[var1];
                var11 = var2.bind(var3)(var1);
                var10 = var11.useStateFromStoresObject;
                var1 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = function() { // Environment: var8
                    var3 = _closure1_slot5;
                    var2 = var3.getDraft;
                    var1 = _closure2_slot0;
                    var1 = var1.channel_id;
                    var0 = _closure1_slot6;
                    var0 = var0.ForwardContextMessage;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var9 = var10.bind(var11)(var9, var1);
                var21 = _closure1_slot4;
                var1 = var21.useState;
                var10 = var1.bind(var21)(var9);
                var9 = _closure1_slot3;
                var1 = 2;
                var10 = var9.bind(var3)(var10, var1);
                var1 = 0;
                var15 = var10[var1];
                var _closure2_slot3 = var15;
                var9 = 1;
                var10 = var10[var9];
                var _closure2_slot4 = var10;
                var11 = var21.useCallback;
                var9 = new Array(2);
                var9[0] = var24;
                var9[1] = var4;
                var4 = function(arg0) { // Environment: var8
                    var3 = _closure2_slot4;
                    var0 = undefined;
                    var2 = arg0;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var2 = var1.channel_id;
                    var1 = var1.id;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var14 = var11.bind(var21)(var4, var9);
                var11 = var21.useEffect;
                var9 = new Array(2);
                var9[0] = var15;
                var4 = var24.channel_id;
                var9[1] = var4;
                var4 = function() { // Environment: var8
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.saveDraft;
                    var3 = _closure2_slot0;
                    var3 = var3.channel_id;
                    var2 = _closure2_slot3;
                    var1 = _closure1_slot6;
                    var1 = var1.ForwardContextMessage;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4 = var11.bind(var21)(var4, var9);
                var4 = 8;
                var4 = var7[var4];
                var9 = var2.bind(var3)(var4);
                var4 = var9.useShareChatInputActions;
                var9 = var4.bind(var9)(var10, var23);
                var16 = var9.textInputRef;
                var4 = var9.isInputFocused;
                var13 = var9.handleSelectionChange;
                var12 = var9.handleMessageFocus;
                var11 = var9.handleMessageBlur;
                var10 = var9.handlePressEmoji;
                var20 = var21.useCallback;
                var9 = new Array(3);
                var9[0] = var15;
                var26 = var24.channel_id;
                var9[1] = var26;
                var9[2] = var25;
                var8 = function() { // Environment: var8
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var1);
                    var4 = var5.clearDraft;
                    var3 = _closure2_slot0;
                    var3 = var3.channel_id;
                    var2 = _closure1_slot6;
                    var2 = var2.ForwardContextMessage;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var9 = var20.bind(var21)(var8, var9);
                var0 = var7[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useDestinationNamesWithSlowmode;
                var21 = var0.bind(var2)(var5);
                var0 = var21.length;
                var0 = var0 > var1;
                var5 = undefined;
                if (!var0) {
                    _fun73138_ip = 512;
                    continue _fun73138
                }
            case 405:
                var0 = var15.length;
                var0 = var0 > var1;
                var5 = undefined;
                if (!var0) {
                    _fun73138_ip = 512;
                    continue _fun73138
                }
            case 419:
                var1 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 9;
                var2 = var8[var0];
                var2 = var1.bind(var3)(var2);
                var7 = var2.intl;
                var2 = var7.formatToPlainString;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.xJFpij;
                var0 = {};
                var8 = var21.length;
                var0.count = var8;
                var20 = var21.join;
                var8 = ', ';
                var8 = var20.bind(var21)(var8);
                var0.channelNames = var8;
                var5 = var2.bind(var7)(var1, var0);
            case 512:
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var20 = _closure1_slot2;
                var0 = 10;
                var0 = var20[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var8 = _closure1_slot0;
                var7 = 11;
                var7 = var20[var7];
                var7 = var8.bind(var3)(var7);
                var21 = var7.ForwardPreview;
                var7 = {};
                var7.message = var24;
                var7.channel = var23;
                var7.forwardOptions = var22;
                var7 = var2.bind(var3)(var21, var7);
                var0.preview = var7;
                var7 = 12;
                var7 = var20[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Button;
                var7 = {
                    'variant': 'primary',
                    'size': 'md'
                };
                var7.text = var19;
                var18 = !var18;
                var7.disabled = var18;
                var18 = undefined;
                if (var17) {
                    _fun73138_ip = 637;
                    continue _fun73138
                }
            case 634:
                var18 = var9;
            case 637:
                var7.onPress = var18;
                var7.loading = var17;
                var7 = var2.bind(var3)(var8, var7);
                var0.sendButton = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot1;
                var17 = _closure1_slot2;
                var6 = 13;
                var6 = var17[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.inputRef = var16;
                var6.text = var15;
                var6.onChange = var14;
                var6.onSelectionChange = var13;
                var6.onFocus = var12;
                var6.onBlur = var11;
                var6.onPressEmoji = var10;
                var6.onSend = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.chatInput = var6;
                var0.warningText = var5;
                var0.avoidKeyboard = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ForwardMessageFooter = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4000, 33, 8913, 6642, 566, 6501, 9195, 1234, 9196, 9197, 4084, 9204, 2]);