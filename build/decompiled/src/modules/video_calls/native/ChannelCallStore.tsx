// modules/video_calls/native/ChannelCallStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var9 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var10;
    var4 = function() {
        _fun62823: for (var _fun62823_ip = 0;;) switch (_fun62823_ip) {
            case 0:
                var2 = _closure1_slot10;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var2 = var0.voiceChatDrawerState;
                var0 = _closure1_slot5;
                var0 = var0.OPEN;
                var0 = var2 === var0;
                if (var0) {
                    _fun62823_ip = 50;
                    continue _fun62823
                }
            case 36:
                var1 = _closure1_slot5;
                var1 = var1.CLOSING;
                var0 = var2 === var1;
            case 50:
                return var0;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var6 = var10[var0];
    var5 = arg3;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var10[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var12 = var5.VoiceCallOverlayType;
    var11 = var5.VoiceChatDrawerState;
    var _closure1_slot5 = var11;
    var5 = 3;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.OrientationLockState;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.ParticipantTypes;
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var10[var5];
    var5 = var9.bind(var0)(var5);
    var5 = var5.Timeout;
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var21 = var6;
    var5 = new var21[var5](var20);
    var7 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot8 = var7;
    var6 = var1.Object;
    var5 = var6.freeze;
    var1 = {
        'focus': true,
        'pipFocus': false,
        'isGestureEnabled': true
    };
    var14 = false;
    var11 = var11.CLOSED;
    var1.voiceChatDrawerState = var11;
    var11 = {};
    var16 = var12.VOICE_CONTROLS_TOGGLE_BUTTON;
    var13 = {};
    var13.x = var0;
    var13.y = var0;
    var13.width = var0;
    var13.height = var0;
    var15 = 6;
    var17 = var10[var15];
    var17 = var9.bind(var0)(var17);
    var17 = var17.OrientationType;
    var17 = var17.PORTRAIT;
    var13.screenOrientation = var17;
    var13.hasUserInteractedSinceOrientationChange = var14;
    var13.isInitialized = var14;
    var13.isVisible = var14;
    var11[var16] = var13;
    var13 = var12.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
    var12 = {};
    var12.x = var0;
    var12.y = var0;
    var12.width = var0;
    var12.height = var0;
    var15 = var10[var15];
    var15 = var9.bind(var0)(var15);
    var15 = var15.OrientationType;
    var15 = var15.PORTRAIT;
    var12.screenOrientation = var15;
    var12.hasUserInteractedSinceOrientationChange = var14;
    var12.isInitialized = var14;
    var12.isVisible = var14;
    var11[var13] = var12;
    var1.voiceCallOverlayLayoutStates = var11;
    var1 = var5.bind(var6)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var10[var1];
    var6 = var9.bind(var0)(var1);
    var5 = var6.create;
    var1 = function() { // Environment: var3
        var0 = _closure1_slot9;
        return var0;
    };
    var1 = var5.bind(var6)(var1);
    var _closure1_slot10 = var1;
    var6 = function() {
        var3 = _closure1_slot8;
        var0 = var3.stop;
        var0 = var0.bind(var3)();
        var2 = var3.start;
        var1 = 5000;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 8;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.batchUpdates;
            var1 = function() { // Environment: var1
                var2 = _closure1_slot10;
                var1 = var2.setState;
                var0 = {};
                var3 = false;
                var0.focus = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot11 = var6;
    var5 = 11;
    var5 = var10[var5];
    var12 = var8.bind(var0)(var5);
    var11 = var12.throttle;
    var8 = function() { // Environment: var3
        var3 = _closure1_slot10;
        var2 = var3.getState;
        var2 = var2.bind(var3)();
        var2 = var2.pipFocus;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot10;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var3 = !var3;
            var0.pipFocus = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var5 = 300;
    var5 = var11.bind(var12)(var8, var5);
    var8 = 17;
    var8 = var10[var8];
    var10 = var9.bind(var0)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/video_calls/native/ChannelCallStore.tsx';
    var8 = var9.bind(var10)(var8);
    var2.focusTimeout = var7;
    var7 = function(arg0) { // Environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot10;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.focus = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setFocus = var7;
    var7 = function() { // Environment: var3
        var3 = _closure1_slot10;
        var2 = var3.getState;
        var2 = var2.bind(var3)();
        var2 = var2.focus;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot10;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var3 = !var3;
            var0.focus = var3;
            var3 = false;
            var0.pipFocus = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.toggleFocus = var7;
    var2.resetFocusTimer = var6;
    var6 = function() { // Environment: var3
        _fun62834: for (var _fun62834_ip = 0;;) switch (_fun62834_ip) {
            case 0:
                var2 = _closure1_slot10;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.focus;
                if (var1) {
                    _fun62834_ip = 68;
                    continue _fun62834
                }
            case 26:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot10;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = true;
                    var0.focus = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                _fun62834_ip = 78;
                continue _fun62834;
            case 68:
                var1 = _closure1_slot11;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 78:
                var0 = undefined;
                return var0;
        }
    };
    var2.resetFocus = var6;
    var6 = function() { // Environment: var3
        var1 = _closure1_slot8;
        var0 = var1.stop;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.clearFocusTimer = var6;
    var6 = function(arg0, arg1) { // Environment: var3
        _fun62837: for (var _fun62837_ip = 0;;) switch (_fun62837_ip) {
            case 0:
                var4 = arg1;
                var0 = arg0;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var4;
                var2 = _closure1_slot5;
                var2 = var2.OPEN;
                var2 = var4 !== var2;
                if (!var2) {
                    _fun62837_ip = 50;
                    continue _fun62837
                }
            case 36:
                var3 = _closure1_slot5;
                var3 = var3.CLOSED;
                var2 = var4 !== var3;
            case 50:
                if (var2) {
                    _fun62837_ip = 91;
                    continue _fun62837
                }
            case 53:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.wait;
                var2 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateChatOpen;
                    var1 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var0 = _closure1_slot5;
                    var0 = var0.OPEN;
                    var0 = var4 === var0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
            case 91:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot10;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = _closure2_slot1;
                    var0.voiceChatDrawerState = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.setVoiceChatDrawerState = var6;
    var2.togglePipFocus = var5;
    var2.useIsVoiceChatFocused = var4;
    var4 = function(arg0) { // Environment: var3
        _fun62840: for (var _fun62840_ip = 0;;) switch (_fun62840_ip) {
            case 0:
                var8 = arg0;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 12;
                var3 = var5[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var7 = var3.bind(var0)(var8);
                var _closure2_slot0 = var7;
                var3 = 13;
                var3 = var5[var3];
                var3 = var4.bind(var0)(var3);
                var9 = var3.bind(var0)(var8);
                var _closure2_slot1 = var9;
                var3 = var8.isGuildStageVoice;
                var6 = var3.bind(var8)();
                if (!var6) {
                    _fun62840_ip = 79;
                    continue _fun62840
                }
            case 73:
                var3 = null;
                var6 = var3 == var9;
            case 79:
                var _closure2_slot2 = var6;
                var3 = _closure1_slot12;
                var4 = var3.bind(var0)();
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 14;
                var3 = var10[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.useIsConnectedToVoiceChannel;
                var3 = var3.bind(var5)(var8);
                var3 = !var3;
                var5 = var4;
                if (var5) {
                    _fun62840_ip = 134;
                    continue _fun62840
                }
            case 131:
                var5 = var3;
            case 134:
                var _closure2_slot3 = var5;
                var4 = _closure1_slot4;
                var3 = var4.getCurrentEmbeddedActivity;
                var3 = var3.bind(var4)();
                var4 = null;
                var4 = var4 == var3;
                var8 = undefined;
                if (var4) {
                    _fun62840_ip = 168;
                    continue _fun62840
                }
            case 163:
                var8 = var3.applicationId;
            case 168:
                var _closure2_slot4 = var8;
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var3 = 15;
                var3 = var10[var3];
                var12 = var4.bind(var0)(var3);
                var11 = var12.useStateFromStores;
                var3 = _closure1_slot4;
                var10 = new Array(1);
                var10[0] = var3;
                var4 = new Array(1);
                var4[0] = var8;
                var3 = function() { // Environment: var1
                    _fun62841: for (var _fun62841_ip = 0;;) switch (_fun62841_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun62841_ip = 39;
                                continue _fun62841
                            }
                        case 13:
                            var3 = _closure1_slot4;
                            var2 = var3.getOrientationLockStateForApp;
                            var0 = _closure2_slot4;
                            var0 = var2.bind(var3)(var0);
                            if (!(var1 == var0)) {
                                _fun62841_ip = 52;
                                continue _fun62841
                            }
                        case 39:
                            var1 = _closure1_slot6;
                            var0 = var1.UNLOCKED;
                        case 52:
                            return var0;
                    }
                };
                var10 = var11.bind(var12)(var10, var3, var4);
                var _closure2_slot5 = var10;
                var4 = _closure1_slot3;
                var11 = var4.useEffect;
                var3 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.restoreDefaultOrientation;
                    return var0;
                };
                var2 = new Array(0);
                var2 = var11.bind(var4)(var3, var2);
                var3 = var4.useEffect;
                var2 = new Array(6);
                var2[0] = var10;
                var2[1] = var9;
                var2[2] = var8;
                var2[3] = var7;
                var2[4] = var6;
                var2[5] = var5;
                var1 = function() { // Environment: var1
                    _fun62843: for (var _fun62843_ip = 0;;) switch (_fun62843_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            if (var0) {
                                _fun62843_ip = 365;
                                continue _fun62843
                            }
                        case 13:
                            var0 = _closure2_slot3;
                            if (var0) {
                                _fun62843_ip = 365;
                                continue _fun62843
                            }
                        case 23:
                            var2 = _closure2_slot1;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun62843_ip = 76;
                                continue _fun62843
                            }
                        case 33:
                            var0 = _closure2_slot1;
                            var3 = var0.type;
                            var2 = _closure1_slot7;
                            var2 = var2.ACTIVITY;
                            if (!(var3 === var2)) {
                                _fun62843_ip = 76;
                                continue _fun62843
                            }
                        case 59:
                            var2 = _closure2_slot1;
                            var3 = var2.applicationId;
                            var2 = _closure2_slot4;
                            if (!(var3 !== var2)) {
                                _fun62843_ip = 153;
                                continue _fun62843
                            }
                        case 76:
                            var2 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 6;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            if (var2) {
                                _fun62843_ip = 133;
                                continue _fun62843
                            }
                        case 108:
                            var3 = var4.unlockOrientation;
                            var2 = {};
                            var5 = false;
                            var2.unlockAfterRotatingToPreviousLock = var5;
                            var2 = var3.bind(var4)(var2);
                            _fun62843_ip = 434;
                            continue _fun62843;
                        case 133:
                            var3 = var4.lockOrientationForiOS;
                            var2 = 'PORTRAIT';
                            var2 = var3.bind(var4)(var2);
                            _fun62843_ip = 434;
                            continue _fun62843;
                        case 153:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 16;
                            var3 = var3[var2];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.isIpadOS;
                            var3 = var3.bind(var4)();
                            if (var3) {
                                _fun62843_ip = 434;
                                continue _fun62843
                            }
                        case 191:
                            var3 = _closure2_slot5;
                            var1 = _closure1_slot6;
                            var1 = var1.UNLOCKED;
                            if (!(var1 !== var3)) {
                                _fun62843_ip = 323;
                                continue _fun62843
                            }
                        case 209:
                            var1 = _closure1_slot6;
                            var1 = var1.PORTRAIT;
                            if (!(var1 !== var3)) {
                                _fun62843_ip = 283;
                                continue _fun62843
                            }
                        case 223:
                            var1 = _closure1_slot6;
                            var1 = var1.LANDSCAPE;
                            if (!(var1 === var3)) {
                                _fun62843_ip = 434;
                                continue _fun62843
                            }
                        case 240:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 6;
                            var1 = var4[var1];
                            var5 = var3.bind(var2)(var1);
                            var4 = var5.lockOrientation;
                            var3 = 'LANDSCAPE';
                            var1 = true;
                            var1 = var4.bind(var5)(var3, var1);
                            _fun62843_ip = 434;
                            continue _fun62843;
                        case 283:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 6;
                            var1 = var4[var1];
                            var5 = var3.bind(var2)(var1);
                            var4 = var5.lockOrientation;
                            var3 = 'PORTRAIT';
                            var1 = true;
                            var1 = var4.bind(var5)(var3, var1);
                            _fun62843_ip = 434;
                            continue _fun62843;
                        case 323:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 6;
                            var0 = var3[var0];
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.unlockOrientation;
                            var0 = {};
                            var3 = true;
                            var0.unlockAfterRotatingToPreviousLock = var3;
                            var0 = var1.bind(var2)(var0);
                            _fun62843_ip = 434;
                            continue _fun62843;
                        case 365:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 6;
                            var4 = var3[var0];
                            var1 = undefined;
                            var6 = var2.bind(var1)(var4);
                            var5 = var6.unlockOrientation;
                            var4 = {};
                            var7 = false;
                            var4.unlockAfterRotatingToPreviousLock = var7;
                            var4 = var5.bind(var6)(var4);
                            var0 = var3[var0];
                            var2 = var2.bind(var1)(var0);
                            var1 = var2.lockOrientationForiOS;
                            var0 = 'PORTRAIT';
                            var0 = var1.bind(var2)(var0);
                        case 434:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.useChannelCallOrientationHandlers = var4;
    var3 = function() { // Environment: var3
        var2 = _closure1_slot8;
        var1 = var2.stop;
        var1 = var1.bind(var2)();
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 8;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot10;
            var1 = var2.setState;
            var0 = _closure1_slot9;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetChannelCallStore = var3;
    var2.useChannelCallStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 7886, 3457, 3523, 3630, 7820, 629, 802, 806, 7881, 22, 7887, 7888, 7889, 566, 1309, 2]);