// modules/video_calls/native/components/ChannelCallMicButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var7 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/components/ChannelCallMicButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun68036: for (var _fun68036_ip = 0;;) switch (_fun68036_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channel;
                var7 = var0.isSmallSize;
                var8 = var0.disableTint;
                var3 = undefined;
                if (!(var8 === var3)) {
                    _fun68036_ip = 30;
                    continue _fun68036
                }
            case 28:
                var8 = false;
            case 30:
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var14 = _closure1_slot0;
                var15 = _closure1_slot3;
                var0 = 3;
                var0 = var15[var0];
                var4 = var14.bind(var3)(var0);
                var1 = var4.useManaRiveMobileExperiment;
                var0 = 'ChannelCallMicButton';
                var0 = var1.bind(var4)(var0);
                _closure2_slot0 = var0;
                var10 = _closure1_slot1;
                var1 = 4;
                var1 = var15[var1];
                var1 = var10.bind(var3)(var1);
                var4 = var1.bind(var3)(var2);
                var1 = 5;
                var1 = var15[var1];
                var11 = var14.bind(var3)(var1);
                var6 = var11.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var9
                    var1 = _closure1_slot5;
                    var0 = var1.getAwaitingRemoteSessionInfo;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var11 = var6.bind(var11)(var2, var1);
                var1 = 6;
                var1 = var15[var1];
                var2 = var14.bind(var3)(var1);
                var1 = var2.createMuteHandler;
                var1 = var1.bind(var2)(var4, var11);
                var6 = var1.mute;
                _closure2_slot1 = var6;
                var1 = var1.onPress;
                _closure2_slot2 = var1;
                var4 = _closure1_slot4;
                var2 = var4.useRef;
                var1 = null;
                var12 = var2.bind(var4)(var1);
                _closure2_slot3 = var12;
                var2 = var4.useMemo;
                var1 = new Array(3);
                var1[0] = var6;
                var1[1] = var12;
                var1[2] = var0;
                var0 = function() { // Environment: var9
                    _fun68038: for (var _fun68038_ip = 0;;) switch (_fun68038_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = _closure1_slot6;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            if (var0) {
                                _fun68038_ip = 91;
                                continue _fun68038
                            }
                        case 25:
                            var0 = 8;
                            var0 = var3[var0];
                            var6 = undefined;
                            var0 = var2.bind(var6)(var0);
                            var1 = var0.MicrophoneLottie;
                            var0 = {};
                            var7 = _closure2_slot3;
                            var0.ref = var7;
                            var7 = 'md';
                            var0.size = var7;
                            var8 = _closure2_slot1;
                            var7 = 'mute';
                            if (!var8) {
                                _fun68038_ip = 78;
                                continue _fun68038
                            }
                        case 74:
                            var7 = 'unmute';
                        case 78:
                            var0.animation = var7;
                            var0 = var4.bind(var6)(var1, var0);
                            _fun68038_ip = 128;
                            continue _fun68038;
                        case 91:
                            var1 = 7;
                            var1 = var3[var1];
                            var3 = undefined;
                            var1 = var2.bind(var3)(var1);
                            var2 = var1.VoicePanelRiveMicButton;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var1.muted = var5;
                            var0 = var4.bind(var3)(var2, var1);
                        case 128:
                            return var0;
                    }
                };
                var4 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot2;
                var0 = 9;
                var0 = var15[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ToggledActionButton;
                var0 = {};
                var0.appearsDisabled = var11;
                var11 = 10;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.B3zz0G;
                var11 = var12.bind(var13)(var11);
                var0.accessibilityLabel = var11;
                var9 = function() {
                    _fun68039: for (var _fun68039_ip = 0;;) switch (_fun68039_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot3;
                            var4 = null;
                            var1 = var4 == var1;
                            var2 = undefined;
                            if (var1) {
                                _fun68039_ip = 44;
                                continue _fun68039
                            }
                        case 28:
                            var3 = _closure2_slot3;
                            var3 = var3.current;
                            var1 = var4 == var3;
                            var2 = var3;
                        case 44:
                            if (var1) {
                                _fun68039_ip = 57;
                                continue _fun68039
                            }
                        case 47:
                            var1 = var2.play;
                            var1 = var1.bind(var2)();
                        case 57:
                            return var0;
                    }
                };
                var0.onPress = var9;
                var12 = _closure1_slot3;
                if (var6) {
                    _fun68036_ip = 361;
                    continue _fun68036
                }
            case 352:
                var9 = 12;
                var9 = var12[var9];
                _fun68036_ip = 368;
                continue _fun68036;
            case 361:
                var11 = 11;
                var9 = var12[var11];
            case 368:
                var9 = var10.bind(var3)(var9);
                var0.source = var9;
                if (var8) {
                    _fun68036_ip = 383;
                    continue _fun68036
                }
            case 380:
                var8 = var6;
            case 383:
                var0.isActive = var8;
                var0.isSmallSize = var7;
                var0.lottieComponent = var4;
                var4 = undefined;
                if (!var6) {
                    _fun68036_ip = 434;
                    continue _fun68036
                }
            case 403:
                var6 = _closure1_slot1;
                var7 = _closure1_slot3;
                var5 = 13;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.unsafe_rawColors;
                var4 = var5.RED_400;
            case 434:
                var0.tintColor = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ChannelCallMicButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3480, 33, 8451, 5654, 566, 8452, 8453, 8454, 7869, 1234, 8456, 8457, 671, 2]);