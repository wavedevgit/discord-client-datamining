// modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun111724: for (var _fun111724_ip = 0;;) switch (_fun111724_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.isVideoEnabled;
                var9 = var0.color;
                var3 = _closure1_slot10;
                var2 = _closure1_slot4;
                var1 = {};
                var4 = {
                    'width': 24,
                    'height': 24,
                    'pointerEvents': 'none'
                };
                var1.style = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 20;
                var4 = var4[var0];
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                var5 = var4.CameraRive;
                var4 = {};
                var7 = {};
                var7.fill = var9;
                var7.on = var8;
                var4.dataBinding = var7;
                var7 = 'CamOff';
                if (!var8) {
                    _fun111724_ip = 111;
                    continue _fun111724
                }
            case 105:
                var7 = 'CamOn';
            case 111:
                var4.defaultViewModelInstance = var7;
                var4 = var6.bind(var0)(var5, var4);
                var1.children = var4;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelVideoButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111725: for (var _fun111725_ip = 0;;) switch (_fun111725_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.props;
                var8 = var0.wrapperSpecs;
                var12 = _closure1_slot3;
                var2 = var12.useContext;
                var1 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 8;
                var0 = var11[var0];
                var3 = undefined;
                var0 = var1.bind(var3)(var0);
                var0 = var2.bind(var12)(var0);
                var13 = var0.channelId;
                var _closure2_slot0 = var13;
                var2 = _closure1_slot0;
                var0 = 9;
                var0 = var11[var0];
                var7 = var2.bind(var3)(var0);
                var0 = var7.useVoicePanelButtonStyles;
                var10 = var0.bind(var7)(var8);
                var _closure2_slot1 = var10;
                var7 = var12.useRef;
                var0 = null;
                var0 = var7.bind(var12)(var0);
                var _closure2_slot2 = var0;
                var7 = 10;
                var0 = var11[var7];
                var14 = var2.bind(var3)(var0);
                var9 = var14.useStateFromStores;
                var0 = _closure1_slot7;
                var8 = new Array(3);
                var8[0] = var0;
                var0 = _closure1_slot9;
                var8[1] = var0;
                var0 = _closure1_slot6;
                var8[2] = var0;
                var0 = function() { // Environment: var4
                    _fun111726: for (var _fun111726_ip = 0;;) switch (_fun111726_ip) {
                        case 0:
                            var3 = _closure1_slot6;
                            var1 = var3.getChannel;
                            var0 = _closure2_slot0;
                            var7 = var1.bind(var3)(var0);
                            var0 = null;
                            var0 = var0 != var7;
                            if (!var0) {
                                _fun111726_ip = 97;
                                continue _fun111726
                            }
                        case 33:
                            var1 = var7.isPrivate;
                            var1 = var1.bind(var7)();
                            if (var1) {
                                _fun111726_ip = 94;
                                continue _fun111726
                            }
                        case 46:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 11;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.canStreamInChannel;
                            var10 = _closure1_slot7;
                            var9 = _closure1_slot9;
                            var8 = false;
                            var12 = var6;
                            var11 = var7;
                            var1 = var12[var5](var11, var10, var9, var8, var7);
                        case 94:
                            var0 = var1;
                        case 97:
                            return var0;
                    }
                };
                var0 = var9.bind(var14)(var8, var0);
                var _closure2_slot3 = var0;
                var7 = var11[var7];
                var14 = var2.bind(var3)(var7);
                var9 = var14.useStateFromStores;
                var7 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var4
                    var1 = _closure1_slot8;
                    var0 = var1.isVideoEnabled;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var9 = var9.bind(var14)(var8, var7);
                var _closure2_slot4 = var9;
                var8 = var12.useCallback;
                var7 = new Array(3);
                var7[0] = var13;
                var7[1] = var9;
                var7[2] = var0;
                var0 = function() { // Environment: var4
                    _fun111728: for (var _fun111728_ip = 0;;) switch (_fun111728_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun111728_ip = 94;
                                continue _fun111728
                            }
                        case 15:
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 12;
                            var1 = var10[var1];
                            var9 = undefined;
                            var6 = var7.bind(var9)(var1);
                            var5 = var6.openAlert;
                            var1 = 13;
                            var4 = var10[var1];
                            var4 = var7.bind(var9)(var4);
                            var4 = var4.VOICE_PANEL_NO_VIDEO_PERMS_KEY;
                            var8 = _closure1_slot10;
                            var7 = _closure1_slot1;
                            var1 = var10[var1];
                            var7 = var7.bind(var9)(var1);
                            var1 = {};
                            var1 = var8.bind(var9)(var7, var1);
                            var1 = var5.bind(var6)(var4, var1);
                            _fun111728_ip = 205;
                            continue _fun111728;
                        case 94:
                            var5 = _closure1_slot6;
                            var4 = var5.getChannel;
                            var1 = _closure2_slot0;
                            var4 = var4.bind(var5)(var1);
                            var _closure3_slot0 = var4;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun111728_ip = 205;
                                continue _fun111728
                            }
                        case 122:
                            var1 = function() {
                                _fun111729: for (var _fun111729_ip = 0;;) switch (_fun111729_ip) {
                                    case 0:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 14;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.handleToggleVideo;
                                        var1 = _closure3_slot0;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = _closure2_slot2;
                                        var4 = null;
                                        var1 = var4 == var1;
                                        var2 = undefined;
                                        if (var1) {
                                            _fun111729_ip = 77;
                                            continue _fun111729
                                        }
                                    case 61:
                                        var3 = _closure2_slot2;
                                        var3 = var3.current;
                                        var1 = var4 == var3;
                                        var2 = var3;
                                    case 77:
                                        if (var1) {
                                            _fun111729_ip = 90;
                                            continue _fun111729
                                        }
                                    case 80:
                                        var1 = var2.play;
                                        var1 = var1.bind(var2)();
                                    case 90:
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var1;
                            var3 = _closure2_slot4;
                            if (var3) {
                                _fun111728_ip = 199;
                                continue _fun111728
                            }
                        case 140:
                            var4 = _closure1_slot5;
                            var3 = var4.isReactingToThermalState;
                            var3 = var3.bind(var4)();
                            if (!var3) {
                                _fun111728_ip = 199;
                                continue _fun111728
                            }
                        case 157:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 15;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.openIgnoreThermalStateAlert;
                            var0 = function() { // Environment: var0
                                var1 = _closure3_slot1;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var0 = var2.bind(var3)(var0);
                            _fun111728_ip = 205;
                            continue _fun111728;
                        case 199:
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 205:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var8.bind(var12)(var0, var7);
                var0 = 16;
                var0 = var11[var0];
                var8 = var2.bind(var3)(var0);
                var2 = var8.useManaRiveMobileExperiment;
                var0 = 'VoicePanelVideoButton';
                var8 = var2.bind(var8)(var0);
                var _closure2_slot5 = var8;
                var2 = _closure1_slot10;
                var0 = 17;
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var7;
                var0.props = var6;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 18;
                var11 = var13[var6];
                var11 = var7.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var6 = var13[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.t;
                if (var9) {
                    _fun111725_ip = 372;
                    continue _fun111725
                }
            case 357:
                var6 = var7["v8K+8W"];
                var6 = var11.bind(var12)(var6);
                _fun111725_ip = 385;
                continue _fun111725;
            case 372:
                var7 = var7.EnX2Jl;
                var6 = var11.bind(var12)(var7);
            case 385:
                var0.accessibilityLabel = var6;
                if (var9) {
                    _fun111725_ip = 400;
                    continue _fun111725
                }
            case 392:
                var6 = var10.iconBg;
                _fun111725_ip = 406;
                continue _fun111725;
            case 400:
                var6 = var10.iconBgSelected;
            case 406:
                var0.style = var6;
                var7 = _closure1_slot3;
                var6 = var7.useMemo;
                var5 = var10.iconFill;
                var11 = var5.color;
                var5 = new Array(4);
                var5[0] = var11;
                var10 = var10.iconFillSelected;
                var10 = var10.color;
                var5[1] = var10;
                var5[2] = var9;
                var5[3] = var8;
                var4 = function() { // Environment: var4
                    _fun111731: for (var _fun111731_ip = 0;;) switch (_fun111731_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var4 = _closure1_slot10;
                            if (var0) {
                                _fun111731_ip = 122;
                                continue _fun111731
                            }
                        case 17:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 19;
                            var0 = var3[var0];
                            var3 = undefined;
                            var0 = var2.bind(var3)(var0);
                            var2 = var0.CameraLottie;
                            var0 = {};
                            var6 = _closure2_slot2;
                            var0.ref = var6;
                            var6 = _closure2_slot4;
                            var7 = _closure2_slot1;
                            if (var6) {
                                _fun111731_ip = 79;
                                continue _fun111731
                            }
                        case 66:
                            var6 = var7.iconFill;
                            var6 = var6.color;
                            _fun111731_ip = 90;
                            continue _fun111731;
                        case 79:
                            var7 = var7.iconFillSelected;
                            var6 = var7.color;
                        case 90:
                            var0.color = var6;
                            var7 = _closure2_slot4;
                            var6 = 'unmute';
                            if (!var7) {
                                _fun111731_ip = 109;
                                continue _fun111731
                            }
                        case 105:
                            var6 = 'mute';
                        case 109:
                            var0.animation = var6;
                            var0 = var4.bind(var3)(var2, var0);
                            _fun111731_ip = 180;
                            continue _fun111731;
                        case 122:
                            var3 = _closure1_slot11;
                            var2 = {};
                            var1 = _closure2_slot4;
                            var2.isVideoEnabled = var1;
                            var5 = _closure2_slot1;
                            if (var1) {
                                _fun111731_ip = 157;
                                continue _fun111731
                            }
                        case 144:
                            var1 = var5.iconFill;
                            var1 = var1.color;
                            _fun111731_ip = 168;
                            continue _fun111731;
                        case 157:
                            var5 = var5.iconFillSelected;
                            var1 = var5.color;
                        case 168:
                            var2.color = var1;
                            var1 = undefined;
                            var0 = var4.bind(var1)(var3, var2);
                        case 180:
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4, var5);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 7922, 1372, 1410, 3478, 3093, 33, 11839, 14375, 566, 5274, 4029, 14389, 8230, 8019, 8516, 14376, 1234, 8479, 3161, 2]);