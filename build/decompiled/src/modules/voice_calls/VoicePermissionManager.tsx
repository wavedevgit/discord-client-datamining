// modules/voice_calls/VoicePermissionManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun113303: for (var _fun113303_ip = 0;;) switch (_fun113303_ip) {
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
            case 72: // try_end0
                _fun113303_ip = 76;
                continue _fun113303;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() { // Original name: voicePermissionRequest, environment: var3
        _fun113306: for (var _fun113306_ip = 0;;) switch (_fun113306_ip) {
            case 0:
                var3 = _closure1_slot1;
                var0 = _closure1_slot2;
                var4 = 13;
                var2 = var0[var4];
                var0 = undefined;
                var5 = var3.bind(var0)(var2);
                var3 = var5.requestPermission;
                var2 = _closure1_slot15;
                var2 = var2.AUDIO;
                var5 = var3.bind(var5)(var2);
                var3 = var5.then;
                var2 = function(arg0) { // Environment: var2
                    _fun113307: for (var _fun113307_ip = 0;;) switch (_fun113307_ip) {
                        case 0:
                            var0 = arg0;
                            if (!var0) {
                                _fun113307_ip = 38;
                                continue _fun113307
                            }
                        case 6:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 14;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot12;
                var2 = var3.getMode;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot14;
                var2 = var2.PUSH_TO_TALK;
                if (!(var3 === var2)) {
                    _fun113306_ip = 131;
                    continue _fun113306
                }
            case 93:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.requestPermission;
                var1 = _closure1_slot15;
                var1 = var1.INPUT_MONITORING;
                var1 = var2.bind(var3)(var1);
            case 131:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var1 = function(arg0, arg1) { // Original name: shouldImmediatelyRequestVoicePermissions, environment: var3
        _fun113308: for (var _fun113308_ip = 0;;) switch (_fun113308_ip) {
            case 0:
                var4 = arg1;
                var2 = _closure1_slot11;
                var0 = var2.getChannel;
                var3 = var0.bind(var2)(var4);
                var0 = null;
                var2 = var0 == var3;
                var0 = undefined;
                if (var2) {
                    _fun113308_ip = 41;
                    continue _fun113308
                }
            case 31:
                var2 = var3.isListenModeCapable;
                var0 = var2.bind(var3)();
            case 41:
                var0 = !var0;
                if (var0) {
                    _fun113308_ip = 66;
                    continue _fun113308
                }
            case 47:
                var3 = _closure1_slot8;
                var2 = var3.isSpeaker;
                var1 = arg0;
                var0 = var2.bind(var3)(var1, var4);
            case 66:
                return var0;
        }
    };
    var _closure1_slot19 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.InputModes;
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot15 = var4;
    var4 = null;
    var _closure1_slot16 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var3
        var3 = function(arg0) { // Original name: VoicePermissionManager, environment: var5
            _fun113310: for (var _fun113310_ip = 0;;) switch (_fun113310_ip) {
                case 0:
                    var3 = this;
                    var11 = 0;
                    var0 = copyRestArgs(var11);
                    var6 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3, var1);
                    var8 = new Array(0);
                    var11 = var8;
                    var10 = var0;
                    var9 = 0;
                    var0 = arraySpread(var11, var10, var9);
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun113310_ip = 84;
                        continue _fun113310
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun113310_ip = 118;
                    continue _fun113310;
                case 84:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 118:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = {};
                    var2 = var0.handleVoiceStateUpdates;
                    var1.VOICE_STATE_UPDATES = var2;
                    var2 = var0.handleVoiceChannelSelect;
                    var1.VOICE_CHANNEL_SELECT = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'handleVoiceChannelSelect';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun113311: for (var _fun113311_ip = 0;;) switch (_fun113311_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.channelId;
                    var1 = null;
                    if (!(var1 == var0)) {
                        _fun113311_ip = 21;
                        continue _fun113311
                    }
                case 14:
                    _closure1_slot16 = var1;
                case 21:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleVoiceStateUpdates';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            var0 = arg0;
            var2 = var0.voiceStates;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun113313: for (var _fun113313_ip = 0;;) switch (_fun113313_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = var5.userId;
                        var2 = var5.channelId;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun113313_ip = 182;
                            continue _fun113313
                        }
                    case 22:
                        var6 = _closure1_slot10;
                        var0 = var6.getId;
                        var0 = var0.bind(var6)();
                        if (!(var0 === var4)) {
                            _fun113313_ip = 182;
                            continue _fun113313
                        }
                    case 46:
                        var6 = _closure1_slot13;
                        var0 = var6.getRTCConnectionId;
                        var0 = var0.bind(var6)();
                        if (!(var3 != var0)) {
                            _fun113313_ip = 182;
                            continue _fun113313
                        }
                    case 64:
                        var0 = _closure1_slot16;
                        if (!(var0 !== var2)) {
                            _fun113313_ip = 182;
                            continue _fun113313
                        }
                    case 72:
                        var3 = _closure1_slot19;
                        var0 = undefined;
                        var3 = var3.bind(var0)(var4, var2);
                        if (var3) {
                            _fun113313_ip = 186;
                            continue _fun113313
                        }
                    case 87:
                        var3 = _closure1_slot9;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var3
                            }
                        });
                        var11 = var4;
                        var10 = var5;
                        var3 = new var11[var3](var10, var9);
                        var8 = var3 instanceof Object ? var3 : var4;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var3 = 15;
                        var4 = var6[var3];
                        var7 = var5.bind(var0)(var4);
                        var4 = var7.getAudienceRequestToSpeakState;
                        var4 = var4.bind(var7)(var8);
                        var3 = var6[var3];
                        var3 = var5.bind(var0)(var3);
                        var3 = var3.RequestToSpeakStates;
                        var3 = var3.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                        if (!(var4 === var3)) {
                            _fun113313_ip = 182;
                            continue _fun113313
                        }
                    case 170:
                        _closure1_slot16 = var2;
                        var3 = _closure1_slot18;
                        var3 = var3.bind(var0)();
                    case 182:
                        var3 = undefined;
                        return var3;
                    case 186:
                        _closure1_slot16 = var2;
                        var1 = _closure1_slot18;
                        var1 = var1.bind(var0)();
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = var3.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var3
        }
    });
    var13 = var4;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/VoicePermissionManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.shouldImmediatelyRequestVoicePermissions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4210, 3481, 1216, 1372, 3435, 3477, 660, 3973, 3974, 14497, 4202, 4262, 2]);