// modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun90678: for (var _fun90678_ip = 0;;) switch (_fun90678_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var3 = undefined;
                var4 = var1.bind(var3)(var0);
                var0 = var4.useNavigation;
                var0 = var0.bind(var4)();
                var _closure2_slot1 = var0;
                var4 = 4;
                var4 = var2[var4];
                var9 = var1.bind(var3)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var6
                    var2 = _closure1_slot4;
                    var1 = var2.getUser;
                    var3 = _closure2_slot0;
                    var0 = var3.getRecipientId;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var8.bind(var9)(var5, var4);
                var4 = 5;
                var4 = var2[var4];
                var10 = var1.bind(var3)(var4);
                var9 = var10.useLongestChannelMessageBeforeReply;
                var8 = var11.id;
                var4 = var11.getRecipientId;
                var4 = var4.bind(var11)();
                var4 = var9.bind(var10)(var8, var4);
                var _closure2_slot2 = var4;
                var9 = _closure1_slot3;
                var8 = var9.useCallback;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var6
                    var1 = _closure2_slot1;
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var4 = var8.bind(var9)(var0, var4);
                var0 = 6;
                var0 = var2[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var2.useMessageRequestActions;
                var0 = {};
                var0.user = var5;
                var5 = function() {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 7;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.open;
                    var1 = {};
                    var7 = 'MESSAGE_REQUEST_REQUEST_ERROR_ALERT_TITLE';
                    var1.key = var7;
                    var9 = _closure1_slot0;
                    var4 = 8;
                    var7 = var6[var4];
                    var7 = var9.bind(var0)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var4 = var6[var4];
                    var4 = var9.bind(var0)(var4);
                    var4 = var4.t;
                    var4 = var4["EDYbS+"];
                    var4 = var7.bind(var8)(var4);
                    var1.content = var4;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var1.icon = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onError = var5;
                var0.onRejectSuccess = var4;
                var0 = var1.bind(var2)(var0);
                var1 = var0.rejectMessageRequest;
                var _closure2_slot3 = var1;
                var8 = var0.isRejectLoading;
                var4 = var0.isUserProfileLoading;
                var9 = var0.isOptimisticRejected;
                var0 = var0.markAsNotSpam;
                var _closure2_slot4 = var0;
                var5 = var8;
                if (var8) {
                    _fun90678_ip = 261;
                    continue _fun90678
                }
            case 258:
                var5 = var4;
            case 261:
                if (var5) {
                    _fun90678_ip = 267;
                    continue _fun90678
                }
            case 264:
                var5 = var9;
            case 267:
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var0 = 10;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var11 = 'button-action';
                var0.type = var11;
                var14 = _closure1_slot0;
                var11 = 8;
                var12 = var10[var11];
                var12 = var14.bind(var3)(var12);
                var15 = var12.intl;
                var13 = var15.string;
                var12 = var10[var11];
                var12 = var14.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.fS08qB;
                var12 = var13.bind(var15)(var12);
                var0.message = var12;
                var12 = var10[var11];
                var12 = var14.bind(var3)(var12);
                var15 = var12.intl;
                var13 = var15.string;
                var12 = var10[var11];
                var12 = var14.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["8U5OXE"];
                var12 = var13.bind(var15)(var12);
                var0.subtext = var12;
                var12 = var10[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var10 = var10[var11];
                var10 = var14.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.cpT0Cq;
                var10 = var12.bind(var13)(var10);
                var0.buttonPrimaryText = var10;
                var10 = function arg0() {
                    var1 = arg0;
                    var0 = var1.stopPropagation;
                    var0 = var0.bind(var1)();
                    var2 = _closure2_slot3;
                    var0 = _closure2_slot0;
                    var1 = var0.id;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.buttonPrimaryOnPress = var10;
                var0.buttonPrimaryDisabled = var5;
                if (var8) {
                    _fun90678_ip = 483;
                    continue _fun90678
                }
            case 480:
                var8 = var9;
            case 483:
                var0.buttonPrimaryLoading = var8;
                var8 = 'destructive';
                var0.buttonPrimaryVariant = var8;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = var7[var11];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var7[var11];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.olZgw5;
                var7 = var8.bind(var9)(var7);
                var0.buttonSecondaryText = var7;
                var6 = function arg0() {
                    var1 = arg0;
                    var0 = var1.stopPropagation;
                    var0 = var0.bind(var1)();
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.transitionToChannel;
                        var0 = _closure2_slot0;
                        var1 = var0.id;
                        var0 = {};
                        var4 = true;
                        var0.navigationReplace = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var0.buttonSecondaryOnPress = var6;
                var0.buttonSecondaryDisabled = var5;
                var0.buttonSecondaryLoading = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/guard/ChatInputGuardSpamMessageRequest.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 33, 1469, 566, 11775, 11767, 3148, 1234, 7460, 11773, 3943, 2]);