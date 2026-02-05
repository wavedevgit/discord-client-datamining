// modules/connectivity/native/useGlobalStatusIndicatorState.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.RTC_PANEL_HEIGHT;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connectivity/native/useGlobalStatusIndicatorState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        _fun68902: for (var _fun68902_ip = 0;;) switch (_fun68902_ip) {
            case 0:
                var1 = arguments[0];
                var7 = undefined;
                if (!(var1 === var7)) {
                    _fun68902_ip = 13;
                    continue _fun68902
                }
            case 11:
                var1 = false;
            case 13:
                var _closure2_slot0 = var7;
                var _closure2_slot1 = var7;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 4;
                var3 = var12[var3];
                var5 = var11.bind(var7)(var3);
                var4 = var5.useHasPipParticipant;
                var3 = {};
                var6 = false;
                var3.isActivityViewFocused = var6;
                var8 = var4.bind(var5)(var3);
                var5 = _closure1_slot1;
                var3 = 5;
                var3 = var12[var3];
                var3 = var5.bind(var7)(var3);
                var9 = var3.bind(var7)();
                var3 = 6;
                var4 = var12[var3];
                var13 = var11.bind(var7)(var4);
                var10 = var13.useStateFromStores;
                var4 = _closure1_slot4;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var2
                    var1 = _closure1_slot4;
                    var0 = var1.getChannelId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var13 = var10.bind(var13)(var6, var4);
                _closure2_slot0 = var13;
                var4 = 7;
                var4 = var12[var4];
                var4 = var5.bind(var7)(var4);
                var5 = var4.bind(var7)();
                _closure2_slot1 = var5;
                var3 = var12[var3];
                var10 = var11.bind(var7)(var3);
                var6 = var10.useStateFromStores;
                var3 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(2);
                var3[0] = var13;
                var3[1] = var5;
                var2 = function() { // Environment: var2
                    _fun68904: for (var _fun68904_ip = 0;;) switch (_fun68904_ip) {
                        case 0:
                            var3 = _closure1_slot3;
                            var2 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var3 = var2.bind(var3)(var0);
                            var0 = null;
                            var2 = var0 == var3;
                            var0 = undefined;
                            if (var2) {
                                _fun68904_ip = 45;
                                continue _fun68904
                            }
                        case 35:
                            var2 = var3.isGuildStageVoice;
                            var0 = var2.bind(var3)();
                        case 45:
                            if (!var0) {
                                _fun68904_ip = 55;
                                continue _fun68904
                            }
                        case 48:
                            var1 = _closure2_slot1;
                            var0 = !var1;
                        case 55:
                            return var0;
                    }
                };
                var2 = var6.bind(var10)(var4, var2, var3);
                var6 = null;
                var3 = var6 != var13;
                var4 = 8;
                var4 = var12[var4];
                var10 = var11.bind(var7)(var4);
                var4 = var10.useGetStageRTCPanelHeight;
                var4 = var4.bind(var10)(var13);
                var10 = 9;
                var10 = var12[var10];
                var11 = var11.bind(var7)(var10);
                var10 = var11.useOpenModalKey;
                var11 = var10.bind(var11)();
                var10 = var6 != var9;
                if (!var10) {
                    _fun68902_ip = 308;
                    continue _fun68902
                }
            case 260:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 10;
                var12 = var14[var12];
                var13 = var13.bind(var7)(var12);
                var12 = var13.getVoiceChannelKey;
                var9 = var9.channelId;
                if (!(var6 == var9)) {
                    _fun68902_ip = 299;
                    continue _fun68902
                }
            case 295:
                var9 = _closure1_slot6;
            case 299:
                var9 = var12.bind(var13)(var9);
                var10 = var9 !== var11;
            case 308:
                var11 = {};
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var12 = 11;
                var12 = var9[var12];
                var13 = var13.bind(var7)(var12);
                var12 = var13.useIsVoicePanelShowing;
                var12 = var12.bind(var13)();
                var11.voicePanelEnabled = var12;
                var11.isRemoteVisible = var10;
                var11.isVoiceChannelSelected = var3;
                var11.hasPipParticipant = var8;
                var11.showWhenParticipantOnScreen = var1;
                var8 = _closure1_slot1;
                var1 = 12;
                var1 = var9[var1];
                var1 = var8.bind(var7)(var1);
                var1 = var1.bind(var7)();
                var1 = var6 != var1;
                var11.isConnectedToStageChannel = var1;
                var11.isInvitedToSpeak = var5;
                var1 = var11.voicePanelEnabled;
                var6 = var11.isRemoteVisible;
                var7 = var11.isVoiceChannelSelected;
                var8 = var11.hasPipParticipant;
                var9 = var11.showWhenParticipantOnScreen;
                var10 = var11.isConnectedToStageChannel;
                var11 = var11.isInvitedToSpeak;
                if (var1) {
                    _fun68902_ip = 486;
                    continue _fun68902
                }
            case 444:
                var6 = !var6;
                if (!var6) {
                    _fun68902_ip = 462;
                    continue _fun68902
                }
            case 450:
                var10 = !var10;
                if (var10) {
                    _fun68902_ip = 459;
                    continue _fun68902
                }
            case 456:
                var10 = !var11;
            case 459:
                var6 = var10;
            case 462:
                if (!var6) {
                    _fun68902_ip = 483;
                    continue _fun68902
                }
            case 465:
                var7 = !var7;
                if (var7) {
                    _fun68902_ip = 480;
                    continue _fun68902
                }
            case 471:
                if (!var8) {
                    _fun68902_ip = 477;
                    continue _fun68902
                }
            case 474:
                var8 = !var9;
            case 477:
                var7 = var8;
            case 480:
                var6 = var7;
            case 483:
                var1 = var6;
            case 486:
                var1 = !var1;
                if (!var1) {
                    _fun68902_ip = 495;
                    continue _fun68902
                }
            case 492:
                if (var5) {
                    _fun68902_ip = 504;
                    continue _fun68902
                }
            case 495:
                var4 = 0;
                if (!var1) {
                    _fun68902_ip = 504;
                    continue _fun68902
                }
            case 500:
                var4 = _closure1_slot5;
            case 504:
                var0 = {};
                var0.height = var4;
                var0.isVisible = var1;
                if (!var1) {
                    _fun68902_ip = 521;
                    continue _fun68902
                }
            case 518:
                var1 = var3;
            case 521:
                if (!var1) {
                    _fun68902_ip = 527;
                    continue _fun68902
                }
            case 524:
                var1 = !var2;
            case 527:
                var0.isCustomBackground = var1;
                return var0;
        }
    };
    var2.useGlobalStatusIndicatorState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3518, 8640, 660, 7921, 8313, 566, 8638, 8521, 3919, 7898, 7902, 8641, 2]);