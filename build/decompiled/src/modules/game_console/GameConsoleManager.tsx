// modules/game_console/GameConsoleManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113177: for (var _fun113177_ip = 0;;) switch (_fun113177_ip) {
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
                _fun113177_ip = 76;
                continue _fun113177;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot19 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun113183: for (var _fun113183_ip = 0;;) switch (_fun113183_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113183_ip = 214;
                            continue _fun113183
                        }
                    case 13:
                        var2 = _closure1_slot11;
                        var1 = var2.getChannelId;
                        var5 = var1.bind(var2)();
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 15;
                        var1 = var2[var1];
                        var2 = undefined;
                        var6 = var6.bind(var2)(var1);
                        var1 = null;
                        var5 = var1 == var5;
                        var1 = 'Syncing to remote while in voice!';
                        var1 = var6.bind(var2)(var5, var1);
                        var5 = var4.selfMute;
                        var6 = _closure1_slot10;
                        var1 = var6.isSelfMute;
                        var1 = var1.bind(var6)();
                        if (!(var5 !== var1)) {
                            _fun113183_ip = 144;
                            continue _fun113183
                        }
                    case 94:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 16;
                        var1 = var6[var1];
                        var6 = var5.bind(var2)(var1);
                        var5 = var6.toggleSelfMute;
                        var1 = {};
                        var7 = false;
                        var1.syncRemote = var7;
                        var1 = var5.bind(var6)(var1);
                        SaveGenerator(address = 138);
                    case 136:
                        return var1;
                    case 138:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun113183_ip = 211;
                            continue _fun113183
                        }
                    case 144:
                        var5 = var4.selfDeaf;
                        var6 = _closure1_slot10;
                        var4 = var6.isSelfDeaf;
                        var4 = var4.bind(var6)();
                        if (!(var5 !== var4)) {
                            _fun113183_ip = 208;
                            continue _fun113183
                        }
                    case 168:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 16;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.toggleSelfDeaf;
                        var3 = {};
                        var6 = false;
                        var3.syncRemote = var6;
                        var3 = var4.bind(var5)(var3);
                    case 208:
                        return var2;
                    case 211:
                        return var1;
                    case 214:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.GAME_CONSOLE_SESSIONS;
    var _closure1_slot15 = var7;
    var3 = var3.USER_ACTION_REQUIRED_ERROR_CODES;
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot17 = var3;
    var3 = 14;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'GameConsoleManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot18 = var3;
    var3 = 25;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun113185: for (var _fun113185_ip = 0;;) switch (_fun113185_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun113185_ip = 86;
                        continue _fun113185
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun113185_ip = 120;
                    continue _fun113185;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var6 = var5[var2];
                    var6 = var3.bind(var4)(var6);
                    var6 = var6.Timeout;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var14 = var7;
                    var6 = new var14[var6](var13);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var0.rollbackCommandTimeout = var6;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.Timeout;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.awaitRemoteTimeout = var2;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleWaitForRemoteSession;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.WAIT_FOR_REMOTE_SESSION = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleSessionsChanged;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleSessionsChanged;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.SESSIONS_REPLACE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleAudioStateToggle;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.AUDIO_TOGGLE_SELF_DEAF = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleAudioStateToggle;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.AUDIO_TOGGLE_SELF_MUTE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleVoiceStateUpdates;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.VOICE_STATE_UPDATES = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleConsoleCommandUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.CONSOLE_COMMAND_UPDATE = var3;
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleVoiceStateUpdates;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2.PASSIVE_UPDATE_V2 = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleRemoteSessionDisconnect;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.REMOTE_SESSION_DISCONNECT = var3;
                    var0.actions = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113195: for (var _fun113195_ip = 0;;) switch (_fun113195_ip) {
                            case 0:
                                var2 = function arg0() {
                                    var2 = arg0;
                                    var3 = _closure1_slot14;
                                    var1 = var3.getAwaitingRemoteSessionInfo;
                                    var1 = var1.bind(var3)();
                                    var _closure5_slot0 = var1;
                                    var1 = var2.find;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun113197: for (var _fun113197_ip = 0;;) switch (_fun113197_ip) {
                                            case 0:
                                                var3 = arg0;
                                                var2 = _closure1_slot15;
                                                var1 = var2.has;
                                                var0 = var3.clientInfo;
                                                var0 = var0.os;
                                                var0 = var1.bind(var2)(var0);
                                                var6 = _closure1_slot13;
                                                var4 = var6.getVoiceStateForSession;
                                                var2 = _closure1_slot9;
                                                var1 = var2.getId;
                                                var2 = var1.bind(var2)();
                                                var1 = var3.sessionId;
                                                var1 = var4.bind(var6)(var2, var1);
                                                var6 = null;
                                                var1 = var6 != var1;
                                                var2 = _closure5_slot0;
                                                var2 = var6 == var2;
                                                if (var2) {
                                                    _fun113197_ip = 146;
                                                    continue _fun113197
                                                }
                                            case 88:
                                                var7 = _closure1_slot0;
                                                var6 = _closure1_slot2;
                                                var5 = 17;
                                                var6 = var6[var5];
                                                var5 = undefined;
                                                var6 = var7.bind(var5)(var6);
                                                var5 = var6.coercePlatformTypeToConsoleType;
                                                var4 = _closure5_slot0;
                                                var4 = var4.type;
                                                var4 = var5.bind(var6)(var4);
                                                var3 = var3.clientInfo;
                                                var3 = var3.os;
                                                var2 = var4 === var3;
                                            case 146:
                                                if (!var0) {
                                                    _fun113197_ip = 152;
                                                    continue _fun113197
                                                }
                                            case 149:
                                                var0 = var2;
                                            case 152:
                                                if (!var0) {
                                                    _fun113197_ip = 158;
                                                    continue _fun113197
                                                }
                                            case 155:
                                                var0 = var1;
                                            case 158:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1 = undefined;
                                var0 = arg0;
                                var3 = var2.bind(var1)(var0);
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun113195_ip = 139;
                                    continue _fun113195
                                }
                            case 25:
                                var2 = _closure3_slot0;
                                var4 = var2.awaitRemoteTimeout;
                                var2 = var4.stop;
                                var2 = var2.bind(var4)();
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 19;
                                var4 = var6[var4];
                                var6 = var5.bind(var1)(var4);
                                var5 = var6.connectToRemote;
                                var4 = var3.sessionId;
                                var4 = var5.bind(var6)(var4);
                                var6 = _closure1_slot13;
                                var5 = var6.getVoiceStateForSession;
                                var7 = _closure1_slot9;
                                var4 = var7.getId;
                                var4 = var4.bind(var7)();
                                var3 = var3.sessionId;
                                var3 = var5.bind(var6)(var4, var3);
                                if (!(var0 != var3)) {
                                    _fun113195_ip = 137;
                                    continue _fun113195
                                }
                            case 128:
                                var2 = _closure1_slot20;
                                var2 = var2.bind(var1)(var3);
                            case 137:
                                return var1;
                            case 139:
                                return var0;
                        }
                    };
                    var0.maybeConnect = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113198: for (var _fun113198_ip = 0;;) switch (_fun113198_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.syncRemote;
                                var4 = var0.context;
                                var0 = undefined;
                                var _closure4_slot0 = var0;
                                if (!var2) {
                                    _fun113198_ip = 244;
                                    continue _fun113198
                                }
                            case 28:
                                var3 = _closure1_slot17;
                                var3 = var3.DEFAULT;
                                if (!(var4 === var3)) {
                                    _fun113198_ip = 244;
                                    continue _fun113198
                                }
                            case 48:
                                var4 = _closure1_slot10;
                                var3 = var4.isSelfDeaf;
                                var7 = var3.bind(var4)();
                                var4 = _closure1_slot10;
                                var3 = var4.isSelfMute;
                                var6 = var3.bind(var4)();
                                var4 = _closure1_slot9;
                                var3 = var4.getId;
                                var9 = var3.bind(var4)();
                                var4 = _closure1_slot14;
                                var3 = var4.getRemoteSessionId;
                                var5 = var3.bind(var4)();
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun113198_ip = 244;
                                    continue _fun113198
                                }
                            case 113:
                                var8 = _closure1_slot13;
                                var4 = var8.getVoiceStateForSession;
                                var4 = var4.bind(var8)(var9, var5);
                                _closure4_slot0 = var4;
                                if (!(var3 != var4)) {
                                    _fun113198_ip = 244;
                                    continue _fun113198
                                }
                            case 137:
                                var3 = var4.selfDeaf;
                                var3 = var3 === var7;
                                if (!var3) {
                                    _fun113198_ip = 160;
                                    continue _fun113198
                                }
                            case 150:
                                var4 = var4.selfMute;
                                var3 = var4 === var6;
                            case 160:
                                if (var3) {
                                    _fun113198_ip = 244;
                                    continue _fun113198
                                }
                            case 163:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 19;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.remoteVoiceStateUpdate;
                                var2 = {};
                                var2.selfDeaf = var7;
                                var2.selfMute = var6;
                                var2 = var3.bind(var4)(var5, var2);
                                var2 = _closure3_slot0;
                                var4 = var2.rollbackCommandTimeout;
                                var3 = var4.start;
                                var2 = 3000;
                                var1 = function() { // Environment: var1
                                    var2 = _closure1_slot20;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var2, var1);
                            case 244:
                                return var0;
                        }
                    };
                    var0.handleAudioStateToggle = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113200: for (var _fun113200_ip = 0;;) switch (_fun113200_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.voiceStates;
                                var4 = _closure1_slot14;
                                var2 = var4.getRemoteSessionId;
                                var4 = var2.bind(var4)();
                                var _closure4_slot0 = var4;
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun113200_ip = 97;
                                    continue _fun113200
                                }
                            case 38:
                                var5 = var3.find;
                                var4 = function(arg0) { // Environment: var1
                                    var0 = arg0;
                                    var1 = var0.sessionId;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var5 = var5.bind(var3)(var4);
                                if (!(var2 != var5)) {
                                    _fun113200_ip = 93;
                                    continue _fun113200
                                }
                            case 59:
                                var2 = _closure3_slot0;
                                var4 = var2.rollbackCommandTimeout;
                                var2 = var4.stop;
                                var2 = var2.bind(var4)();
                                var4 = _closure1_slot20;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var5);
                            case 93:
                                var2 = undefined;
                                return var2;
                            case 97:
                                var2 = var3.map;
                                var1 = function(arg0) { // Environment: var1
                                    _fun113201: for (var _fun113201_ip = 0;;) switch (_fun113201_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.sessionId;
                                            var0 = null;
                                            var1 = var0 != var3;
                                            if (!var1) {
                                                _fun113201_ip = 36;
                                                continue _fun113201
                                            }
                                        case 18:
                                            var2 = _closure1_slot12;
                                            var1 = var2.getSessionById;
                                            var0 = var1.bind(var2)(var3);
                                        case 36:
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.filter;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 20;
                                var3 = var3[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3);
                                var0 = var0.isNotNullish;
                                var2 = var1.bind(var2)(var0);
                                var1 = _closure3_slot0;
                                var0 = var1.maybeConnect;
                                var0 = var0.bind(var1)(var2);
                                return var0;
                        }
                    };
                    var0.handleVoiceStateUpdates = var2;
                    var2 = function() { // Environment: var1
                        _fun113203: for (var _fun113203_ip = 0;;) switch (_fun113203_ip) {
                            case 0:
                                var2 = _closure1_slot14;
                                var1 = var2.getRemoteSessionId;
                                var2 = var1.bind(var2)();
                                var1 = null;
                                var3 = var1 != var2;
                                if (!var3) {
                                    _fun113203_ip = 45;
                                    continue _fun113203
                                }
                            case 26:
                                var5 = _closure1_slot12;
                                var4 = var5.getSessionById;
                                var4 = var4.bind(var5)(var2);
                                var3 = var1 == var4;
                            case 45:
                                if (!var3) {
                                    _fun113203_ip = 80;
                                    continue _fun113203
                                }
                            case 48:
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 19;
                                var4 = var4[var3];
                                var3 = undefined;
                                var4 = var5.bind(var3)(var4);
                                var3 = var4.disconnectRemote;
                                var3 = var3.bind(var4)();
                            case 80:
                                if (!(var1 == var2)) {
                                    _fun113203_ip = 134;
                                    continue _fun113203
                                }
                            case 84:
                                var2 = _closure3_slot0;
                                var1 = var2.maybeConnect;
                                var3 = global;
                                var4 = var3.Object;
                                var3 = var4.values;
                                var5 = _closure1_slot12;
                                var0 = var5.getSessions;
                                var0 = var0.bind(var5)();
                                var0 = var3.bind(var4)(var0);
                                var0 = var1.bind(var2)(var0);
                            case 134:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSessionsChanged = var2;
                    var2 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var3 = var0.awaitRemoteTimeout;
                        var2 = var3.start;
                        var1 = 60000;
                        var0 = function() { // Environment: var0
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var0 = 19;
                            var2 = var8[var0];
                            var0 = undefined;
                            var3 = var7.bind(var0)(var2);
                            var2 = var3.disconnectRemote;
                            var2 = var2.bind(var3)();
                            var2 = _closure1_slot1;
                            var1 = 21;
                            var1 = var8[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var4 = 22;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var9 = var5.intl;
                            var6 = var9.string;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5.wGMxr3;
                            var5 = var6.bind(var9)(var5);
                            var1.title = var5;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.i5k8b5;
                            var4 = var5.bind(var6)(var4);
                            var1.body = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleWaitForRemoteSession = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun113206: for (var _fun113206_ip = 0;;) switch (_fun113206_ip) {
                            case 0:
                                var0 = arg0;
                                var6 = var0.id;
                                var7 = var0.result;
                                var0 = var0.error;
                                var1 = 'failed';
                                var2 = var1 === var7;
                                if (var2) {
                                    _fun113206_ip = 45;
                                    continue _fun113206
                                }
                            case 32:
                                var1 = 'n/a';
                                if (!(var1 === var7)) {
                                    _fun113206_ip = 523;
                                    continue _fun113206
                                }
                            case 45:
                                var4 = null;
                                if (!(var4 != var0)) {
                                    _fun113206_ip = 523;
                                    continue _fun113206
                                }
                            case 54:
                                var8 = _closure1_slot18;
                                var5 = var8.info;
                                var3 = 'Console command Error result:';
                                var3 = var5.bind(var8)(var3, var7, var0);
                                var5 = _closure1_slot14;
                                var3 = var5.getAwaitingRemoteSessionInfo;
                                var8 = var3.bind(var5)();
                                var9 = var4 == var8;
                                var3 = undefined;
                                var5 = undefined;
                                if (var9) {
                                    _fun113206_ip = 111;
                                    continue _fun113206
                                }
                            case 105:
                                var5 = var8.commandId;
                            case 111:
                                if (!(var5 === var6)) {
                                    _fun113206_ip = 523;
                                    continue _fun113206
                                }
                            case 118:
                                var10 = _closure1_slot14;
                                var9 = var10.getDevice;
                                var6 = var8.type;
                                var11 = var8.deviceId;
                                var12 = var4 != var11;
                                var5 = '';
                                if (!var12) {
                                    _fun113206_ip = 153;
                                    continue _fun113206
                                }
                            case 150:
                                var5 = var11;
                            case 153:
                                var5 = var9.bind(var10)(var6, var5);
                                var9 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var6 = 23;
                                var6 = var10[var6];
                                var6 = var9.bind(var3)(var6);
                                if (!(var4 == var5)) {
                                    _fun113206_ip = 307;
                                    continue _fun113206
                                }
                            case 186:
                                var9 = {};
                                var10 = 'id';
                                var9.id = var10;
                                var13 = _closure1_slot0;
                                var14 = _closure1_slot2;
                                var10 = 22;
                                var11 = var14[var10];
                                var11 = var13.bind(var3)(var11);
                                var15 = var11.intl;
                                var12 = var15.string;
                                var11 = var14[var10];
                                var11 = var13.bind(var3)(var11);
                                var11 = var11.t;
                                var11 = var11["UQMV/E"];
                                var11 = var12.bind(var15)(var11);
                                var9.platform = var11;
                                var11 = var14[var10];
                                var11 = var13.bind(var3)(var11);
                                var12 = var11.intl;
                                var11 = var12.string;
                                var10 = var14[var10];
                                var10 = var13.bind(var3)(var10);
                                var10 = var10.t;
                                var10 = var10["UQMV/E"];
                                var10 = var11.bind(var12)(var10);
                                var9.name = var10;
                                var5 = var9;
                            case 307:
                                var7 = var6.bind(var3)(var5, var7, var0);
                                if (!(var4 != var7)) {
                                    _fun113206_ip = 401;
                                    continue _fun113206
                                }
                            case 318:
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var4 = 24;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.showSelfDismissableAlert;
                                var4 = {};
                                var9 = var7.title;
                                var4.title = var9;
                                var9 = var7.body;
                                var4.body = var9;
                                var9 = var7.errorCodeMessage;
                                var4.errorCodeMessage = var9;
                                var9 = var7.isAccountLinkError;
                                var7 = undefined;
                                if (!var9) {
                                    _fun113206_ip = 391;
                                    continue _fun113206
                                }
                            case 386:
                                var7 = var8.type;
                            case 391:
                                var4.reconnectPlatformType = var7;
                                var4 = var5.bind(var6)(var4);
                            case 401:
                                var5 = _closure1_slot16;
                                var4 = var5.has;
                                var0 = var0.code;
                                var0 = var4.bind(var5)(var0);
                                if (!var0) {
                                    _fun113206_ip = 449;
                                    continue _fun113206
                                }
                            case 423:
                                var4 = _closure3_slot0;
                                var5 = var4.awaitRemoteTimeout;
                                var4 = var5.isStarted;
                                var4 = var4.bind(var5)();
                                if (var4) {
                                    _fun113206_ip = 484;
                                    continue _fun113206
                                }
                            case 449:
                                if (!var2) {
                                    _fun113206_ip = 523;
                                    continue _fun113206
                                }
                            case 452:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 19;
                                var1 = var4[var1];
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.disconnectRemote;
                                var1 = var1.bind(var2)();
                                _fun113206_ip = 523;
                                continue _fun113206;
                            case 484:
                                var0 = _closure3_slot0;
                                var4 = var0.awaitRemoteTimeout;
                                var3 = var4.start;
                                var2 = 180000;
                                var1 = function() { // Environment: var0
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 19;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var0 = var1.disconnectRemote;
                                    var0 = var0.bind(var1)();
                                    return var0;
                                };
                                var0 = true;
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 523:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleConsoleCommandUpdate = var2;
                    var1 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.awaitRemoteTimeout;
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleRemoteSessionDisconnect = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_console/GameConsoleManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 5, 1216, 3437, 3479, 3481, 3482, 3480, 5303, 3471, 3, 44, 8171, 8458, 3591, 8257, 1304, 3964, 1234, 14481, 8260, 4265, 2]);