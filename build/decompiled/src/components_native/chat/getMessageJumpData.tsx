// components_native/chat/getMessageJumpData.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/chat/getMessageJumpData.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1, arg2) { // Original name: getMessageJumpData, environment: var1
        _fun77048: for (var _fun77048_ip = 0;;) switch (_fun77048_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var13 = arg2;
                var0 = var10.messages;
                var1 = var0.last;
                var14 = var1.bind(var0)();
                var8 = var13.messages;
                var1 = var8.last;
                var5 = var1.bind(var8)();
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var7 = var1.bind(var2)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var15 = undefined;
                var1 = var2.bind(var15)(var1);
                var1 = var1.JumpTypes;
                var11 = var1.ANIMATED;
                var6 = var0.jumpSequenceId;
                var3 = var0.focusTargetId;
                var2 = var0.initialScrollSequenceId;
                var1 = var8.initialScrollSequenceId;
                var1 = var2 !== var1;
                var16 = var1;
                if (var1) {
                    _fun77048_ip = 141;
                    continue _fun77048
                }
            case 125:
                var4 = var8.jumpSequenceId;
                var2 = var0.jumpSequenceId;
                var16 = var4 !== var2;
            case 141:
                var4 = var1;
                if (var4) {
                    _fun77048_ip = 163;
                    continue _fun77048
                }
            case 147:
                var17 = var8.focusSequenceId;
                var2 = var0.focusSequenceId;
                var4 = var17 !== var2;
            case 163:
                var17 = var0.jumpTargetId;
                var2 = null;
                if (!(var2 != var17)) {
                    _fun77048_ip = 181;
                    continue _fun77048
                }
            case 175:
                if (var16) {
                    _fun77048_ip = 485;
                    continue _fun77048
                }
            case 181:
                var17 = var9.isAtBottom;
                if (var17) {
                    _fun77048_ip = 354;
                    continue _fun77048
                }
            case 193:
                var9 = var9.hasPreviousMessages;
                if (!var9) {
                    _fun77048_ip = 354;
                    continue _fun77048
                }
            case 205:
                var8 = var8.loadingMore;
                if (var8) {
                    _fun77048_ip = 354;
                    continue _fun77048
                }
            case 217:
                if (!(var2 != var14)) {
                    _fun77048_ip = 354;
                    continue _fun77048
                }
            case 224:
                if (!(var2 != var7)) {
                    _fun77048_ip = 354;
                    continue _fun77048
                }
            case 231:
                var8 = var14.author;
                var9 = var8.id;
                var8 = var7.id;
                if (!(var9 !== var8)) {
                    _fun77048_ip = 285;
                    continue _fun77048
                }
            case 251:
                var9 = var14.interaction;
                var17 = var2 == var9;
                var8 = undefined;
                if (var17) {
                    _fun77048_ip = 276;
                    continue _fun77048
                }
            case 266:
                var9 = var9.user;
                var8 = var9.id;
            case 276:
                var7 = var7.id;
                if (!(var8 === var7)) {
                    _fun77048_ip = 354;
                    continue _fun77048
                }
            case 285:
                if (!(var2 != var5)) {
                    _fun77048_ip = 337;
                    continue _fun77048
                }
            case 289:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 7;
                var7 = var9[var7];
                var9 = var8.bind(var15)(var7);
                var8 = var9.compare;
                var7 = var5.id;
                var5 = var14.id;
                var7 = var8.bind(var9)(var7, var5);
                var5 = 0;
                if (!(var7 < var5)) {
                    _fun77048_ip = 354;
                    continue _fun77048
                }
            case 337:
                var9 = var14.id;
                var8 = null;
                var7 = var11;
                var5 = false;
                _fun77048_ip = 541;
                continue _fun77048;
            case 354:
                var17 = var0.loadingMore;
                if (var17) {
                    _fun77048_ip = 396;
                    continue _fun77048
                }
            case 363:
                var17 = var0.jumpedToPresent;
                if (!var17) {
                    _fun77048_ip = 396;
                    continue _fun77048
                }
            case 372:
                if (!var16) {
                    _fun77048_ip = 396;
                    continue _fun77048
                }
            case 375:
                if (!(var2 != var14)) {
                    _fun77048_ip = 396;
                    continue _fun77048
                }
            case 379:
                var9 = var14.id;
                var5 = false;
                var8 = null;
                var7 = var11;
                _fun77048_ip = 541;
                continue _fun77048;
            case 396:
                var14 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 4;
                var12 = var16[var12];
                var14 = var14.bind(var15)(var12);
                var12 = var14.isAndroid;
                var12 = var12.bind(var14)();
                if (!var12) {
                    _fun77048_ip = 445;
                    continue _fun77048
                }
            case 429:
                var14 = var13.androidKeyboardHeight;
                var13 = var10.androidKeyboardHeight;
                var12 = var14 < var13;
            case 445:
                if (!var12) {
                    _fun77048_ip = 458;
                    continue _fun77048
                }
            case 448:
                var13 = var10.replyingMessageId;
                var12 = var2 != var13;
            case 458:
                var5 = false;
                var9 = null;
                var8 = null;
                var7 = var11;
                if (!var12) {
                    _fun77048_ip = 541;
                    continue _fun77048
                }
            case 470:
                var9 = var10.replyingMessageId;
                var5 = true;
                var8 = null;
                var7 = var11;
                _fun77048_ip = 541;
                continue _fun77048;
            case 485:
                var12 = var0.channelId;
                var11 = var0.jumpTargetId;
                var10 = var0.first;
                var10 = var10.bind(var0)();
                if (!(var12 === var11)) {
                    _fun77048_ip = 514;
                    continue _fun77048
                }
            case 510:
                if (!(var2 == var10)) {
                    _fun77048_ip = 522;
                    continue _fun77048
                }
            case 514:
                var11 = var0.jumpTargetId;
                _fun77048_ip = 527;
                continue _fun77048;
            case 522:
                var11 = var10.id;
            case 527:
                var7 = var0.jumpType;
                var5 = false;
                var9 = var11;
                var8 = var9;
            case 541:
                var0 = {};
                var0.scrollToMessageId = var9;
                var0.jumpTargetId = var8;
                var0.jumpType = var7;
                var0.jumpSequenceId = var6;
                var0.minimizeScrolling = var5;
                var2 = null;
                if (!var4) {
                    _fun77048_ip = 576;
                    continue _fun77048
                }
            case 573:
                var2 = var3;
            case 576:
                var0.focusTargetId = var2;
                var0.shouldInitialScroll = var1;
                return var0;
        }
    };
    var2.default = var3;
    var1 = function() { // Original name: useMessageJumpAndroidKeyboardHeight, environment: var1
        _fun77049: for (var _fun77049_ip = 0;;) switch (_fun77049_ip) {
            case 0:
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var6 = undefined;
                var3 = var3.bind(var6)(var0);
                var0 = var3.isAndroid;
                var7 = var0.bind(var3)();
                var0 = 0;
                var3 = 0;
                if (!var7) {
                    _fun77049_ip = 83;
                    continue _fun77049
                }
            case 53:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 5;
                var7 = var9[var7];
                var8 = var8.bind(var6)(var7);
                var7 = var8.getSystemKeyboardHeight;
                var3 = var7.bind(var8)();
            case 83:
                var5 = var4.bind(var5)(var3);
                var4 = _closure1_slot3;
                var3 = 2;
                var4 = var4.bind(var6)(var5, var3);
                var0 = var4[var0];
                var3 = 1;
                var3 = var4[var3];
                var _closure2_slot0 = var3;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot5;
                    var1 = undefined;
                    var0 = function(arg0) { // Environment: var0
                        _fun77051: for (var _fun77051_ip = 0;;) switch (_fun77051_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 4;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isAndroid;
                                var1 = var1.bind(var2)();
                                if (!var1) {
                                    _fun77051_ip = 59;
                                    continue _fun77051
                                }
                            case 38:
                                var2 = _closure2_slot0;
                                var1 = arg0;
                                var1 = var1.keyboardHeight;
                                var1 = var2.bind(var0)(var1);
                            case 59:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.useMessageJumpAndroidKeyboardHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1466, 1613, 478, 1585, 4209, 21, 2]);