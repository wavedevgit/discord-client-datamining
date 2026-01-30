// stores/VideoStreamStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun35857: for (var _fun35857_ip = 0;;) switch (_fun35857_ip) {
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
                _fun35857_ip = 74;
                continue _fun35857;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1) { // Original name: makeTimeoutKey, environment: var3
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = ':';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function(arg0, arg1) { // Original name: clearUser, environment: var3
        _fun35861: for (var _fun35861_ip = 0;;) switch (_fun35861_ip) {
            case 0:
                var6 = arg0;
                var3 = arg1;
                var9 = arguments[2];
                var0 = undefined;
                if (!(var9 === var0)) {
                    _fun35861_ip = 17;
                    continue _fun35861
                }
            case 15:
                var9 = null;
            case 17:
                var1 = _closure1_slot9;
                var2 = var1[var6];
                var5 = null;
                if (!(var5 != var2)) {
                    _fun35861_ip = 171;
                    continue _fun35861
                }
            case 37:
                var1 = var3;
                if (!(var5 == var3)) {
                    _fun35861_ip = 48;
                    continue _fun35861
                }
            case 44:
                var1 = _closure1_slot5;
            case 48:
                var2 = var2[var1];
                if (!(var5 != var2)) {
                    _fun35861_ip = 171;
                    continue _fun35861
                }
            case 56:
                var1 = global;
                var8 = var1.Object;
                var7 = var8.values;
                var1 = _closure1_slot6;
                var8 = var7.bind(var8)(var1);
                var1 = var8.length;
                var7 = 0;
                var1 = var7 < var1;
                if (!var1) {
                    _fun35861_ip = 151;
                    continue _fun35861
                }
            case 92:
                var11 = var8[var7];
                var1 = var9 !== var11;
                if (!var1) {
                    _fun35861_ip = 107;
                    continue _fun35861
                }
            case 103:
                var1 = var5 != var9;
            case 107:
                if (var1) {
                    _fun35861_ip = 139;
                    continue _fun35861
                }
            case 110:
                var1 = delete var2[var11];
                var10 = _closure1_slot10;
                var1 = _closure1_slot12;
                if (!(var5 != var9)) {
                    _fun35861_ip = 129;
                    continue _fun35861
                }
            case 126:
                var11 = var9;
            case 129:
                var1 = var1.bind(var0)(var11, var6);
                var1 = delete var10[var1];
            case 139:
                var7 = var7 + 1;
                var1 = var8.length;
                if (var7 < var1) {
                    _fun35861_ip = 92;
                    continue _fun35861
                }
            case 151:
                var1 = _closure1_slot9;
                var1 = var1[var6];
                if (!(var5 == var3)) {
                    _fun35861_ip = 167;
                    continue _fun35861
                }
            case 163:
                var3 = _closure1_slot5;
            case 167:
                var1[var3] = var2;
            case 171:
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NULL_STRING_GUILD_ID;
    var _closure1_slot5 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MediaEngineContextTypes;
    var _closure1_slot6 = var1;
    var1 = null;
    var _closure1_slot7 = var1;
    var _closure1_slot8 = var1;
    var1 = {};
    var _closure1_slot9 = var1;
    var1 = {};
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: VideoStreamStore, environment: var5
            _fun35863: for (var _fun35863_ip = 0;;) switch (_fun35863_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun35863_ip = 69;
                        continue _fun35863
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun35863_ip = 105;
                    continue _fun35863;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
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
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'getStreamId';
        var4.key = var0;
        var0 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun35864: for (var _fun35864_ip = 0;;) switch (_fun35864_ip) {
                case 0:
                    var5 = arg1;
                    var4 = arguments[2];
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun35864_ip = 25;
                        continue _fun35864
                    }
                case 12:
                    var0 = _closure1_slot6;
                    var4 = var0.DEFAULT;
                case 25:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var2 = null;
                    var7 = var2 == var1;
                    var0 = undefined;
                    if (var7) {
                        _fun35864_ip = 90;
                        continue _fun35864
                    }
                case 50:
                    if (!(var2 == var5)) {
                        _fun35864_ip = 58;
                        continue _fun35864
                    }
                case 54:
                    var5 = _closure1_slot5;
                case 58:
                    var1 = var1[var5];
                    var5 = var2 == var1;
                    var0 = undefined;
                    if (var5) {
                        _fun35864_ip = 90;
                        continue _fun35864
                    }
                case 71:
                    var1 = var1[var4];
                    var2 = var2 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun35864_ip = 90;
                        continue _fun35864
                    }
                case 84:
                    var0 = var1.streamId;
                case 90:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserStreamData';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun35865: for (var _fun35865_ip = 0;;) switch (_fun35865_ip) {
                case 0:
                    var5 = arg1;
                    var2 = arguments[2];
                    var4 = undefined;
                    if (!(var2 === var4)) {
                        _fun35865_ip = 25;
                        continue _fun35865
                    }
                case 12:
                    var0 = _closure1_slot6;
                    var2 = var0.DEFAULT;
                case 25:
                    var1 = _closure1_slot9;
                    var0 = arg0;
                    var1 = var1[var0];
                    var3 = null;
                    var7 = var3 == var1;
                    var0 = undefined;
                    if (var7) {
                        _fun35865_ip = 75;
                        continue _fun35865
                    }
                case 50:
                    if (!(var3 == var5)) {
                        _fun35865_ip = 58;
                        continue _fun35865
                    }
                case 54:
                    var5 = _closure1_slot5;
                case 58:
                    var1 = var1[var5];
                    var3 = var3 == var1;
                    var0 = undefined;
                    if (var3) {
                        _fun35865_ip = 75;
                        continue _fun35865
                    }
                case 71:
                    var0 = var1[var2];
                case 75:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getTimedoutVideos';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getTimedoutVideo';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            var1 = _closure1_slot10;
            var4 = _closure1_slot12;
            var3 = undefined;
            var2 = arg0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var0);
            var0 = var1[var0];
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'VideoStreamStore';
    var7.displayName = var1;
    var1 = 8;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleConnectionOpen, environment: var3
        var1 = arg0;
        var0 = var1.user;
        var1 = var1.sessionId;
        var2 = var0.id;
        _closure1_slot7 = var2;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function(arg0) { // Original name: handleOverlayInitialize, environment: var3
        var1 = arg0;
        var0 = var1.user;
        var1 = var1.sessionId;
        var2 = var0.id;
        _closure1_slot7 = var2;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var8;
    var8 = function(arg0) { // Original name: handleVideo, environment: var3
        _fun35870: for (var _fun35870_ip = 0;;) switch (_fun35870_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var2 = var0.guildId;
                var7 = var0.streamId;
                var3 = var0.context;
                var1 = null;
                if (!(var1 == var7)) {
                    _fun35870_ip = 48;
                    continue _fun35870
                }
            case 30:
                var5 = _closure1_slot13;
                var0 = undefined;
                var0 = var5.bind(var0)(var4, var2, var3);
                _fun35870_ip = 165;
                continue _fun35870;
            case 48:
                var5 = _closure1_slot9;
                var5 = var4 in var5;
                if (var5) {
                    _fun35870_ip = 72;
                    continue _fun35870
                }
            case 62:
                var6 = _closure1_slot9;
                var5 = {};
                var6[var4] = var5;
            case 72:
                var5 = _closure1_slot9;
                var6 = var5[var4];
                var5 = var2;
                if (!(var1 == var2)) {
                    _fun35870_ip = 91;
                    continue _fun35870
                }
            case 87:
                var5 = _closure1_slot5;
            case 91:
                var6 = var6[var5];
                if (!(var1 == var6)) {
                    _fun35870_ip = 101;
                    continue _fun35870
                }
            case 99:
                var6 = {};
            case 101:
                var5 = _closure1_slot9;
                var5 = var5[var4];
                if (!(var1 == var2)) {
                    _fun35870_ip = 117;
                    continue _fun35870
                }
            case 113:
                var2 = _closure1_slot5;
            case 117:
                var1 = {};
                var11 = var1;
                var10 = var6;
                var6 = copyDataProperties(var11, var10);
                var6 = {};
                var6.streamId = var7;
                var1[var3] = var6;
                var5[var2] = var1;
                var1 = _closure1_slot10;
                var2 = _closure1_slot12;
                var0 = undefined;
                var0 = var2.bind(var0)(var3, var4);
                var0 = delete var1[var0];
            case 165:
                var0 = undefined;
                return var0;
        }
    };
    var1.RTC_CONNECTION_VIDEO = var8;
    var8 = function(arg0) { // Original name: handleVoiceStateUpdates, environment: var3
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun35872: for (var _fun35872_ip = 0;;) switch (_fun35872_ip) {
                case 0:
                    var0 = arg0;
                    var2 = arg1;
                    var6 = var2.userId;
                    var3 = var2.sessionId;
                    var1 = var2.channelId;
                    var5 = var2.guildId;
                    var8 = null;
                    if (!(var8 == var1)) {
                        _fun35872_ip = 44;
                        continue _fun35872
                    }
                case 33:
                    var4 = _closure1_slot7;
                    if (!(var6 !== var4)) {
                        _fun35872_ip = 103;
                        continue _fun35872
                    }
                case 44:
                    if (!(var8 == var1)) {
                        _fun35872_ip = 101;
                        continue _fun35872
                    }
                case 48:
                    var4 = _closure1_slot9;
                    var10 = var4[var6];
                    var9 = var8 == var10;
                    var4 = undefined;
                    var7 = undefined;
                    if (var9) {
                        _fun35872_ip = 85;
                        continue _fun35872
                    }
                case 70:
                    var9 = var5;
                    if (!(var8 == var9)) {
                        _fun35872_ip = 81;
                        continue _fun35872
                    }
                case 77:
                    var9 = _closure1_slot5;
                case 81:
                    var7 = var10[var9];
                case 85:
                    if (!(var8 != var7)) {
                        _fun35872_ip = 101;
                        continue _fun35872
                    }
                case 89:
                    var1 = _closure1_slot13;
                    var1 = var1.bind(var4)(var6, var5);
                    _fun35872_ip = 123;
                    continue _fun35872;
                case 101:
                    return var0;
                case 103:
                    var1 = _closure1_slot8;
                    if (!(var3 === var1)) {
                        _fun35872_ip = 127;
                        continue _fun35872
                    }
                case 111:
                    var1 = {};
                    _closure1_slot9 = var1;
                    var1 = {};
                    _closure1_slot10 = var1;
                case 123:
                    var1 = true;
                    return var1;
                case 127:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var8;
    var8 = function(arg0) { // Original name: handleVideoStreamReadyTimeout, environment: var3
        var0 = arg0;
        var7 = var0.videoStreamId;
        var6 = var0.userId;
        var5 = var0.streamKey;
        var4 = var0.mediaContext;
        var3 = _closure1_slot10;
        var1 = _closure1_slot12;
        var0 = undefined;
        var2 = var1.bind(var0)(var4, var6);
        var1 = {};
        var1.videoStreamId = var7;
        var1.userId = var6;
        var1.streamKey = var5;
        var1.mediaContext = var4;
        var3[var2] = var1;
        return var0;
    };
    var1.VIDEO_STREAM_READY_TIMEOUT = var8;
    var3 = function(arg0) { // Original name: handleClearVideoStreamTimeout, environment: var3
        _fun35874: for (var _fun35874_ip = 0;;) switch (_fun35874_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.mediaContext;
                var3 = var0.userId;
                var2 = _closure1_slot12;
                var0 = undefined;
                var2 = var2.bind(var0)(var4, var3);
                var3 = _closure1_slot10;
                var4 = var3[var2];
                var3 = null;
                if (!(var3 != var4)) {
                    _fun35874_ip = 53;
                    continue _fun35874
                }
            case 43:
                var1 = _closure1_slot10;
                var1 = delete var1[var2];
                return var0;
            case 53:
                var0 = false;
                return var0;
        }
    };
    var1.CLEAR_VIDEO_STREAM_READY_TIMEOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/VideoStreamStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 3469, 566, 806, 2]);