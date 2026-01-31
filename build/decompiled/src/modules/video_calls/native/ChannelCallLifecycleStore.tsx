// modules/video_calls/native/ChannelCallLifecycleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun62768: for (var _fun62768_ip = 0;;) switch (_fun62768_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun62768_ip = 74;
                continue _fun62768;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot16 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7.value = var1;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.VoiceCallOverlayType;
    var10 = false;
    var _closure1_slot9 = var10;
    var _closure1_slot10 = var10;
    var _closure1_slot11 = var10;
    var _closure1_slot12 = var10;
    var7 = {};
    var12 = var8.VOICE_CONTROLS_TOGGLE_BUTTON;
    var9 = {};
    var9.x = var0;
    var9.y = var0;
    var9.width = var0;
    var9.height = var0;
    var11 = 7;
    var13 = var5[var11];
    var13 = var4.bind(var0)(var13);
    var13 = var13.OrientationType;
    var13 = var13.PORTRAIT;
    var9.screenOrientation = var13;
    var9.hasUserInteractedSinceOrientationChange = var10;
    var9.isInitialized = var10;
    var9.isVisible = var10;
    var7[var12] = var9;
    var9 = var8.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
    var8 = {};
    var8.x = var0;
    var8.y = var0;
    var8.width = var0;
    var8.height = var0;
    var11 = var5[var11];
    var11 = var4.bind(var0)(var11);
    var11 = var11.OrientationType;
    var11 = var11.PORTRAIT;
    var8.screenOrientation = var11;
    var8.hasUserInteractedSinceOrientationChange = var10;
    var8.isInitialized = var10;
    var8.isVisible = var10;
    var7[var9] = var8;
    var _closure1_slot13 = var7;
    var _closure1_slot14 = var7;
    var _closure1_slot15 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun62772: for (var _fun62772_ip = 0;;) switch (_fun62772_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot16;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun62772_ip = 69;
                        continue _fun62772
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun62772_ip = 105;
                    continue _fun62772;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(8);
        var0[0] = var4;
        var4 = {};
        var6 = 'shouldReactToSeriousThermalStateWhenActivityFocused';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'consumedRequestToRespondToSeriousThermalState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'disregardSeriousThermalState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isReactingToThermalState';
        var4.key = var6;
        var6 = function() {
            _fun62777: for (var _fun62777_ip = 0;;) switch (_fun62777_ip) {
                case 0:
                    var0 = _closure1_slot10;
                    if (!var0) {
                        _fun62777_ip = 17;
                        continue _fun62777
                    }
                case 10:
                    var1 = _closure1_slot11;
                    var0 = !var1;
                case 17:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getShowActivitiesDebugOverlay';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getVoiceCallOverlayLayoutStates';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isPipEnabledWhileFocusedOnActivityOrStream';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var5;
        var0[7] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'ChannelCallLifecycleStore';
    var7.displayName = var1;
    var1 = 10;
    var1 = var5[var1];
    var16 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun62781: for (var _fun62781_ip = 0;;) switch (_fun62781_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun62781_ip = 68;
                    continue _fun62781
                }
            case 9:
                var3 = _closure1_slot7;
                var0 = var3.getVoiceChannelId;
                var0 = var0.bind(var3)();
                var3 = _closure1_slot8;
                if (!(var0 !== var3)) {
                    _fun62781_ip = 60;
                    continue _fun62781
                }
            case 34:
                var3 = false;
                _closure1_slot9 = var3;
                _closure1_slot10 = var3;
                _closure1_slot12 = var3;
                _closure1_slot11 = var3;
                var3 = _closure1_slot13;
                _closure1_slot14 = var3;
            case 60:
                var _closure1_slot8 = var0;
                var0 = undefined;
                return var0;
            case 68:
                var5 = "Cannot destructure 'undefined' or 'null'.";
                var6 = var1;
                var0 = throwTypeError(var6, var5);
                var0 = undefined;
                throw var0;
        }
    };
    var1.VOICE_CHANNEL_SELECT = var8;
    var8 = function arg0() {
        _fun62782: for (var _fun62782_ip = 0;;) switch (_fun62782_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun62782_ip = 22;
                    continue _fun62782
                }
            case 9:
                var0 = true;
                _closure1_slot9 = var0;
                var0 = undefined;
                return var0;
            case 22:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var1.EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE = var8;
    var8 = function arg0() {
        _fun62783: for (var _fun62783_ip = 0;;) switch (_fun62783_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun62783_ip = 22;
                    continue _fun62783
                }
            case 9:
                var0 = true;
                _closure1_slot10 = var0;
                var0 = undefined;
                return var0;
            case 22:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var1.EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST = var8;
    var8 = function arg0() {
        _fun62784: for (var _fun62784_ip = 0;;) switch (_fun62784_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun62784_ip = 22;
                    continue _fun62784
                }
            case 9:
                var0 = true;
                _closure1_slot11 = var0;
                var0 = undefined;
                return var0;
            case 22:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var1.EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.visible;
        _closure1_slot12 = var1;
        var0 = undefined;
        return var0;
    };
    var1.EMBEDDED_ACTIVITY_SET_DEBUG_OVERLAY_VISIBILITY = var8;
    var8 = function arg0() {
        _fun62786: for (var _fun62786_ip = 0;;) switch (_fun62786_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.voiceCallOverlayType;
                var0 = var0.voiceCallOverlayLayoutState;
                var4 = _closure1_slot14;
                var1 = {};
                var7 = var1;
                var6 = var4;
                var5 = copyDataProperties(var7, var6);
                var1[var3] = var0;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 8;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var3 = var3.bind(var0)(var1, var4);
                if (var3) {
                    _fun62786_ip = 74;
                    continue _fun62786
                }
            case 70:
                _closure1_slot14 = var1;
            case 74:
                return var0;
        }
    };
    var1.VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var1 = var0.pipEnabledWhileFocusedOnActivityOrStream;
        _closure1_slot15 = var1;
        var0 = undefined;
        return var0;
    };
    var1.VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM = var8;
    var8 = function arg0() {
        _fun62788: for (var _fun62788_ip = 0;;) switch (_fun62788_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun62788_ip = 22;
                    continue _fun62788
                }
            case 9:
                var0 = true;
                _closure1_slot15 = var0;
                var0 = undefined;
                return var0;
            case 22:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var1.EMBEDDED_ACTIVITY_OPEN = var8;
    var3 = function arg0() {
        _fun62789: for (var _fun62789_ip = 0;;) switch (_fun62789_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun62789_ip = 22;
                    continue _fun62789
                }
            case 9:
                var0 = true;
                _closure1_slot15 = var0;
                var0 = undefined;
                return var0;
            case 22:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var1.STREAM_WATCH = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var17 = var3;
    var15 = var1;
    var1 = new var17[var7](var16, var15, var14);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/native/ChannelCallLifecycleStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1661, 7845, 7779, 644, 566, 806, 2]);