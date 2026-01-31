// modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: useMuteHandlers, environment: var1
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useRef;
        var2 = null;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot8;
        var2 = new Array(7);
        var2[0] = var6;
        var6 = _closure1_slot7;
        var2[1] = var6;
        var6 = _closure1_slot12;
        var2[2] = var6;
        var6 = _closure1_slot9;
        var2[3] = var6;
        var6 = _closure1_slot10;
        var2[4] = var6;
        var6 = _closure1_slot6;
        var2[5] = var6;
        var1 = _closure1_slot5;
        var2[6] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            _fun111530: for (var _fun111530_ip = 0;;) switch (_fun111530_ip) {
                case 0:
                    var4 = _closure1_slot8;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var7 = var3.bind(var4)(var2);
                    var4 = null;
                    if (!(var4 == var7)) {
                        _fun111530_ip = 46;
                        continue _fun111530
                    }
                case 30:
                    var3 = {
                        'selfMute': false,
                        'suppress': false,
                        'mute': false
                    };
                    _fun111530_ip = 130;
                    continue _fun111530;
                case 46:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 14;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getMuteStates;
                    var2 = {};
                    var2.channel = var7;
                    var7 = _closure1_slot7;
                    var2.authenticationStore = var7;
                    var7 = _closure1_slot12;
                    var2.voiceStateStore = var7;
                    var7 = _closure1_slot9;
                    var2.mediaEngineStore = var7;
                    var7 = _closure1_slot10;
                    var2.permissionStore = var7;
                    var7 = _closure1_slot6;
                    var2.impersonateStore = var7;
                    var3 = var5.bind(var6)(var2);
                case 130:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var7 = var4 == var2;
                    var5 = undefined;
                    var6 = undefined;
                    if (var7) {
                        _fun111530_ip = 156;
                        continue _fun111530
                    }
                case 150:
                    var6 = var2.selfMute;
                case 156:
                    var2 = var3.selfMute;
                    var2 = var6 !== var2;
                    var7 = undefined;
                    if (!var2) {
                        _fun111530_ip = 191;
                        continue _fun111530
                    }
                case 171:
                    var8 = _closure1_slot11;
                    var6 = var8.getCurrentUser;
                    var6 = var6.bind(var8)();
                    var2 = var4 != var6;
                    var7 = var6;
                case 191:
                    if (!var2) {
                        _fun111530_ip = 204;
                        continue _fun111530
                    }
                case 194:
                    var6 = var7.isStaff;
                    var2 = var6.bind(var7)();
                case 204:
                    if (!var2) {
                        _fun111530_ip = 267;
                        continue _fun111530
                    }
                case 207:
                    var10 = _closure1_slot16;
                    var9 = var10.info;
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    var6 = var4 == var2;
                    var8 = undefined;
                    if (var6) {
                        _fun111530_ip = 241;
                        continue _fun111530
                    }
                case 235:
                    var8 = var2.selfMute;
                case 241:
                    var11 = var3.selfMute;
                    var14 = 'Self mute changed';
                    var12 = '>';
                    var15 = var10;
                    var13 = var8;
                    var2 = var15[var9](var14, var13, var12, var11, var10);
                case 267:
                    var1 = _closure2_slot1;
                    var1.current = var3;
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 15;
                    var1 = var6[var1];
                    var2 = var2.bind(var5)(var1);
                    var1 = var2.createMuteHandler;
                    var5 = _closure1_slot5;
                    var0 = var5.getAwaitingRemoteSessionInfo;
                    var0 = var0.bind(var5)();
                    var0 = var4 != var0;
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var0 = var3.bind(var4)(var2, var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: AnimatedMicrophoneIcon, environment: var1
        _fun111531: for (var _fun111531_ip = 0;;) switch (_fun111531_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.buttonStyles;
                var4 = var0.isMuted;
                var5 = _closure1_slot4;
                var3 = var5.useRef;
                var2 = null;
                var5 = var3.bind(var5)(var2);
                var _closure2_slot0 = var5;
                var6 = _closure1_slot4;
                var3 = var6.useRef;
                var2 = true;
                var2 = var3.bind(var6)(var2);
                var _closure2_slot1 = var2;
                var8 = _closure1_slot4;
                var6 = var8.useEffect;
                var3 = new Array(2);
                var3[0] = var4;
                var3[1] = var5;
                var1 = function() { // Environment: var1
                    _fun111532: for (var _fun111532_ip = 0;;) switch (_fun111532_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var1 = var1.current;
                            if (var1) {
                                _fun111532_ip = 42;
                                continue _fun111532
                            }
                        case 15:
                            var1 = _closure2_slot0;
                            var2 = var1.current;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun111532_ip = 54;
                                continue _fun111532
                            }
                        case 30:
                            var1 = var2.play;
                            var1 = var1.bind(var2)();
                            _fun111532_ip = 54;
                            continue _fun111532;
                        case 42:
                            var1 = _closure2_slot1;
                            var0 = false;
                            var1.current = var0;
                        case 54:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var8)(var1, var3);
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 28;
                var1 = var8[var1];
                var3 = undefined;
                var1 = var6.bind(var3)(var1);
                var6 = var1.bind(var3)(var2);
                var2 = _closure1_slot13;
                var1 = _closure1_slot0;
                var0 = 29;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.MicrophoneLottie;
                var0 = {};
                var0.ref = var5;
                if (var4) {
                    _fun111531_ip = 169;
                    continue _fun111531
                }
            case 156:
                var5 = var7.iconFill;
                var5 = var5.color;
                _fun111531_ip = 180;
                continue _fun111531;
            case 169:
                var7 = var7.iconFillRed;
                var5 = var7.color;
            case 180:
                var0.color = var5;
                var5 = 'md';
                var0.size = var5;
                var5 = var4;
                if (!var6) {
                    _fun111531_ip = 201;
                    continue _fun111531
                }
            case 198:
                var5 = !var4;
            case 201:
                var4 = 'unmute';
                if (!var5) {
                    _fun111531_ip = 212;
                    continue _fun111531
                }
            case 208:
                var4 = 'mute';
            case 212:
                var0.animation = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var3 = arg3;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot13 = var7;
    var7 = var3.Fragment;
    var _closure1_slot14 = var7;
    var3 = var3.jsxs;
    var _closure1_slot15 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'VoicePanelMicButton';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot16 = var3;
    var3 = 12;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'left': 0,
        'right': 0,
        'bottom': 4,
        'textAlign': 'center',
        'opacity': 0.5
    };
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = 'function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}';
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = 33;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: PTTButton, environment: var1
        _fun111533: for (var _fun111533_ip = 0;;) switch (_fun111533_ip) {
            case 0:
                var1 = arg0;
                var15 = var1.props;
                var2 = var1.wrapperSpecs;
                var3 = undefined;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var1 = _closure1_slot17;
                var9 = var1.bind(var3)();
                var6 = _closure1_slot4;
                var4 = var6.useContext;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 17;
                var1 = var8[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var4.bind(var6)(var1);
                var4 = var1.channelId;
                var6 = _closure1_slot4;
                var1 = var6.useState;
                var7 = false;
                var8 = var1.bind(var6)(var7);
                var6 = _closure1_slot3;
                var1 = 2;
                var6 = var6.bind(var3)(var8, var1);
                var1 = 0;
                var17 = var6[var1];
                var1 = 1;
                var1 = var6[var1];
                var _closure2_slot0 = var1;
                var1 = _closure1_slot20;
                var1 = var1.bind(var3)(var4);
                var8 = var1.mute;
                var6 = var1.onPress;
                var1 = function(arg0) { // Original name: useDeafHandlers, environment: var0
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.useStateFromStoresObject;
                    var6 = _closure1_slot8;
                    var2 = new Array(6);
                    var2[0] = var6;
                    var6 = _closure1_slot7;
                    var2[1] = var6;
                    var6 = _closure1_slot12;
                    var2[2] = var6;
                    var6 = _closure1_slot9;
                    var2[3] = var6;
                    var6 = _closure1_slot10;
                    var2[4] = var6;
                    var1 = _closure1_slot6;
                    var2[5] = var1;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var0 = function() { // Environment: var0
                        _fun111535: for (var _fun111535_ip = 0;;) switch (_fun111535_ip) {
                            case 0:
                                var3 = _closure1_slot8;
                                var2 = var3.getChannel;
                                var1 = _closure3_slot0;
                                var7 = var2.bind(var3)(var1);
                                var1 = null;
                                if (!(var1 == var7)) {
                                    _fun111535_ip = 46;
                                    continue _fun111535
                                }
                            case 30:
                                var2 = {
                                    'selfDeaf': false,
                                    'deaf': false
                                };
                                _fun111535_ip = 96;
                                continue _fun111535;
                            case 46:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 16;
                                var3 = var3[var1];
                                var1 = undefined;
                                var6 = var4.bind(var1)(var3);
                                var5 = var6.getDeafStates;
                                var10 = _closure1_slot12;
                                var9 = _closure1_slot9;
                                var8 = _closure1_slot7;
                                var12 = var6;
                                var11 = var7;
                                var2 = var12[var5](var11, var10, var9, var8, var7);
                            case 96:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                var0 = var1.createDeafHandler;
                                var0 = var0.bind(var1)(var2);
                                return var0;
                        }
                    };
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var4 = var1.bind(var3)(var4);
                var1 = var4.deaf;
                var4 = var4.onPress;
                if (var1) {
                    _fun111533_ip = 200;
                    continue _fun111533
                }
            case 189:
                var1 = undefined;
                if (!var8) {
                    _fun111533_ip = 197;
                    continue _fun111533
                }
            case 194:
                var1 = var6;
            case 197:
                var4 = var1;
            case 200:
                _closure2_slot1 = var4;
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 18;
                var1 = var14[var1];
                var6 = var18.bind(var3)(var1);
                var1 = var6.useSharedValue;
                var12 = var1.bind(var6)(var7);
                _closure2_slot2 = var12;
                var11 = _closure1_slot1;
                var1 = 19;
                var1 = var14[var1];
                var1 = var11.bind(var3)(var1);
                var1 = var1.bind(var3)();
                _closure2_slot3 = var1;
                var8 = _closure1_slot4;
                var7 = var8.useRef;
                var6 = {
                    'active': false,
                    'dragging': false
                };
                var6 = var7.bind(var8)(var6);
                _closure2_slot4 = var6;
                var8 = _closure1_slot4;
                var7 = var8.useCallback;
                var6 = new Array(3);
                var6[0] = var1;
                var6[1] = var12;
                var6[2] = var4;
                var4 = function() { // Environment: var0
                    _fun111536: for (var _fun111536_ip = 0;;) switch (_fun111536_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var1 = var1.active;
                            if (var1) {
                                _fun111536_ip = 178;
                                continue _fun111536
                            }
                        case 24:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun111536_ip = 44;
                                continue _fun111536
                            }
                        case 34:
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                        case 44:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var2 = true;
                            var1.active = var2;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 20;
                            var6 = var5[var3];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var6);
                            var6 = var7.triggerHapticFeedback;
                            var3 = var5[var3];
                            var3 = var4.bind(var1)(var3);
                            var3 = var3.HapticFeedbackTypes;
                            var3 = var3.IMPACT_MEDIUM;
                            var3 = var6.bind(var7)(var3);
                            var3 = 21;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.setPushToTalkState;
                            var3 = var3.bind(var4)(var2);
                            var4 = _closure2_slot3;
                            var3 = var4.lock;
                            var3 = var3.bind(var4)();
                            var4 = _closure2_slot2;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var2);
                            var0 = _closure2_slot0;
                            var0 = var0.bind(var1)(var2);
                        case 178:
                            var0 = undefined;
                            return var0;
                    }
                };
                var19 = var7.bind(var8)(var4, var6);
                _closure2_slot5 = var19;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var12;
                var1 = function() { // Environment: var0
                    _fun111537: for (var _fun111537_ip = 0;;) switch (_fun111537_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var1 = var1.active;
                            if (!var1) {
                                _fun111537_ip = 126;
                                continue _fun111537
                            }
                        case 21:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var2 = false;
                            var1.active = var2;
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var1.dragging = var2;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 21;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.setPushToTalkState;
                            var3 = var3.bind(var4)(var2);
                            var4 = _closure2_slot3;
                            var3 = var4.unlock;
                            var3 = var3.bind(var4)();
                            var4 = _closure2_slot2;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var2);
                            var0 = _closure2_slot0;
                            var0 = var0.bind(var1)(var2);
                        case 126:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var6.bind(var7)(var1, var4);
                _closure2_slot6 = var7;
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var4 = new Array(1);
                var4[0] = var7;
                var1 = function() { // Environment: var0
                    _fun111538: for (var _fun111538_ip = 0;;) switch (_fun111538_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var1 = var1.dragging;
                            if (var1) {
                                _fun111538_ip = 31;
                                continue _fun111538
                            }
                        case 21:
                            var1 = _closure2_slot6;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 31:
                            var0 = undefined;
                            return var0;
                    }
                };
                var16 = var6.bind(var8)(var1, var4);
                var8 = _closure1_slot4;
                var6 = var8.useCallback;
                var4 = new Array(1);
                var4[0] = var19;
                var1 = function() { // Environment: var0
                    _fun111539: for (var _fun111539_ip = 0;;) switch (_fun111539_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            var1 = var1.dragging;
                            if (var1) {
                                _fun111539_ip = 48;
                                continue _fun111539
                            }
                        case 21:
                            var1 = _closure2_slot4;
                            var2 = var1.current;
                            var1 = true;
                            var2.dragging = var1;
                            var1 = _closure2_slot5;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var6.bind(var8)(var1, var4);
                _closure2_slot7 = var1;
                var8 = _closure1_slot4;
                var6 = var8.useMemo;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var7;
                var1 = function() { // Environment: var0
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 22;
                    var1 = var9[var5];
                    var7 = undefined;
                    var1 = var8.bind(var7)(var1);
                    var2 = var1.Gesture;
                    var1 = var2.Pan;
                    var4 = var1.bind(var2)();
                    var2 = var4.manualActivation;
                    var1 = true;
                    var4 = var2.bind(var4)(var1);
                    var2 = var4.onTouchesMove;
                    var1 = function(arg0, arg1) { // Original name: n, environment: var0
                        _fun111541: for (var _fun111541_ip = 0;;) switch (_fun111541_ip) {
                            case 0:
                                var3 = arg1;
                                var0 = arg0;
                                var4 = var0.state;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 22;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var5.bind(var0)(var2);
                                var2 = var2.State;
                                var2 = var2.BEGAN;
                                if (!(var4 === var2)) {
                                    _fun111541_ip = 103;
                                    continue _fun111541
                                }
                            case 52:
                                var2 = var3.activate;
                                var2 = var2.bind(var3)();
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 18;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure2_slot7;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.bind(var0)();
                            case 103:
                                return var0;
                        }
                    };
                    var10 = {};
                    var5 = var9[var5];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.State;
                    var10.State = var5;
                    var6 = 18;
                    var5 = var9[var6];
                    var5 = var8.bind(var7)(var5);
                    var5 = var5.runOnJS;
                    var10.runOnJS = var5;
                    var11 = _closure2_slot7;
                    var10.handleDragStart = var11;
                    var1.__closure = var10;
                    var10 = 13866422602014.0;
                    var1.__workletHash = var10;
                    var10 = _closure1_slot19;
                    var1.__initData = var10;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.onFinalize;
                    var0 = function() { // Original name: t, environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.runOnJS;
                        var1 = _closure2_slot6;
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var4 = {};
                    var6 = var9[var6];
                    var6 = var8.bind(var7)(var6);
                    var6 = var6.runOnJS;
                    var4.runOnJS = var6;
                    var5 = _closure2_slot6;
                    var4.handlePTTEnd = var5;
                    var0.__closure = var4;
                    var4 = 12941114426646.0;
                    var0.__workletHash = var4;
                    var3 = _closure1_slot18;
                    var0.__initData = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var6.bind(var8)(var1, var4);
                var6 = _closure1_slot4;
                var4 = var6.useEffect;
                var1 = new Array(1);
                var1[0] = var7;
                var0 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var1 = _closure2_slot6;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var0 = var4.bind(var6)(var0, var1);
                var0 = 23;
                var0 = var14[var0];
                var1 = var18.bind(var3)(var0);
                var0 = var1.useVoicePanelButtonStyles;
                var10 = var0.bind(var1)(var2);
                var2 = _closure1_slot15;
                var1 = _closure1_slot14;
                var0 = {};
                var7 = _closure1_slot13;
                var4 = 22;
                var4 = var14[var4];
                var4 = var18.bind(var3)(var4);
                var6 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var8;
                var13 = _closure1_slot13;
                var8 = 24;
                var8 = var14[var8];
                var11 = var11.bind(var3)(var8);
                var8 = {};
                var8.onPressIn = var19;
                var8.onPressOut = var16;
                var8.props = var15;
                var8.pressed = var12;
                var12 = 25;
                var15 = var14[var12];
                var15 = var18.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var12];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.Q8gkVL;
                var14 = var15.bind(var16)(var14);
                var8.accessibilityLabel = var14;
                if (var17) {
                    _fun111533_ip = 664;
                    continue _fun111533
                }
            case 656:
                var14 = var10.iconBg;
                _fun111533_ip = 670;
                continue _fun111533;
            case 664:
                var14 = var10.iconBgSelected;
            case 670:
                var8.style = var14;
                var16 = _closure1_slot13;
                var15 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 26;
                var14 = var18[var14];
                var14 = var15.bind(var3)(var14);
                var15 = var14.MicrophoneIcon;
                var14 = {};
                if (var17) {
                    _fun111533_ip = 722;
                    continue _fun111533
                }
            case 709:
                var17 = var10.iconFill;
                var17 = var17.color;
                _fun111533_ip = 733;
                continue _fun111533;
            case 722:
                var18 = var10.iconFillSelected;
                var17 = var18.color;
            case 733:
                var14.color = var17;
                var17 = 'lg';
                var14.size = var17;
                var14 = var16.bind(var3)(var15, var14);
                var8.children = var14;
                var8 = var13.bind(var3)(var11, var8);
                var4.children = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot13;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 27;
                var5 = var8[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var13 = var9.text;
                var9 = new Array(2);
                var9[0] = var13;
                var10 = var10.iconFill;
                var9[1] = var10;
                var5.style = var9;
                var9 = 'text-xxs/medium';
                var5.variant = var9;
                var9 = var8[var12];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.Q8gkVL;
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PTTButton = var3;
    var1 = function(arg0) { // Original name: MicButton, environment: var1
        _fun111545: for (var _fun111545_ip = 0;;) switch (_fun111545_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.props;
                var11 = var1.wrapperSpecs;
                var4 = _closure1_slot20;
                var6 = _closure1_slot4;
                var5 = var6.useContext;
                var1 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 17;
                var2 = var10[var2];
                var3 = undefined;
                var2 = var1.bind(var3)(var2);
                var2 = var5.bind(var6)(var2);
                var2 = var2.channelId;
                var2 = var4.bind(var3)(var2);
                var5 = var2.mute;
                var _closure2_slot0 = var5;
                var8 = var2.onPress;
                var13 = var2.dominantMuteState;
                var _closure2_slot1 = var13;
                var4 = _closure1_slot0;
                var2 = 23;
                var2 = var10[var2];
                var6 = var4.bind(var3)(var2);
                var2 = var6.useVoicePanelButtonStyles;
                var6 = var2.bind(var6)(var11);
                var _closure2_slot2 = var6;
                var2 = 30;
                var2 = var10[var2];
                var11 = var4.bind(var3)(var2);
                var4 = var11.useManaRiveMobileExperiment;
                var2 = 'VoicePanelMicButton';
                var12 = var4.bind(var11)(var2);
                var _closure2_slot3 = var12;
                var11 = _closure1_slot4;
                var4 = var11.useMemo;
                var2 = new Array(4);
                var2[0] = var6;
                var2[1] = var5;
                var2[2] = var13;
                var2[3] = var12;
                var0 = function() { // Environment: var0
                    _fun111546: for (var _fun111546_ip = 0;;) switch (_fun111546_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 15;
                            var0 = var4[var0];
                            var4 = undefined;
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.DominantMuteState;
                            var0 = var0.SERVER_MUTE;
                            if (!(var2 !== var0)) {
                                _fun111546_ip = 178;
                                continue _fun111546
                            }
                        case 51:
                            var0 = _closure2_slot3;
                            var6 = _closure1_slot13;
                            if (var0) {
                                _fun111546_ip = 94;
                                continue _fun111546
                            }
                        case 62:
                            var2 = _closure1_slot21;
                            var0 = {};
                            var3 = _closure2_slot2;
                            var0.buttonStyles = var3;
                            var3 = _closure2_slot0;
                            var0.isMuted = var3;
                            var0 = var6.bind(var4)(var2, var0);
                            _fun111546_ip = 176;
                            continue _fun111546;
                        case 94:
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 32;
                            var2 = var7[var2];
                            var2 = var3.bind(var4)(var2);
                            var3 = var2.VoicePanelRiveMicButton;
                            var2 = {};
                            var7 = _closure2_slot0;
                            var8 = _closure2_slot2;
                            if (var7) {
                                _fun111546_ip = 146;
                                continue _fun111546
                            }
                        case 133:
                            var7 = var8.iconFill;
                            var7 = var7.color;
                            _fun111546_ip = 157;
                            continue _fun111546;
                        case 146:
                            var8 = var8.iconFillRed;
                            var7 = var8.color;
                        case 157:
                            var2.color = var7;
                            var7 = _closure2_slot0;
                            var2.muted = var7;
                            var0 = var6.bind(var4)(var3, var2);
                        case 176:
                            _fun111546_ip = 235;
                            continue _fun111546;
                        case 178:
                            var3 = _closure1_slot13;
                            var2 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 31;
                            var1 = var6[var1];
                            var1 = var2.bind(var4)(var1);
                            var2 = var1.MicrophoneDenyIcon;
                            var1 = {};
                            var5 = _closure2_slot2;
                            var5 = var5.iconFillRed;
                            var5 = var5.color;
                            var1.color = var5;
                            var0 = var3.bind(var4)(var2, var1);
                        case 235:
                            return var0;
                    }
                };
                var4 = var4.bind(var11)(var0, var2);
                var2 = _closure1_slot13;
                var0 = 24;
                var0 = var10[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.props = var9;
                var0.onPress = var8;
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 25;
                var9 = var11[var7];
                var9 = var8.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var7 = var11[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.t;
                if (var5) {
                    _fun111545_ip = 287;
                    continue _fun111545
                }
            case 274:
                var7 = var8.w4m945;
                var7 = var9.bind(var10)(var7);
                _fun111545_ip = 298;
                continue _fun111545;
            case 287:
                var8 = var8.YqAjXy;
                var7 = var9.bind(var10)(var8);
            case 298:
                var0.accessibilityLabel = var7;
                if (var5) {
                    _fun111545_ip = 313;
                    continue _fun111545
                }
            case 305:
                var5 = var6.iconBg;
                _fun111545_ip = 319;
                continue _fun111545;
            case 313:
                var5 = var6.iconBgSelected;
            case 319:
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.MicButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3478, 1664, 1216, 1372, 3435, 3050, 1613, 3480, 33, 3, 1297, 566, 5652, 8450, 8537, 11770, 3679, 14220, 3238, 8582, 4924, 14302, 14303, 1234, 10745, 3900, 4698, 8452, 8449, 8198, 8451, 2]);