// lib/RTCControlSocket.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var0 = function() {
        _fun93547: for (var _fun93547_ip = 0;;) switch (_fun93547_ip) {
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
                _fun93547_ip = 76;
                continue _fun93547;
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
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var1 = arg0;
            var0 = {};
            var2 = var1.name;
            var0.name = var2;
            var2 = var1.type;
            var0.type = var2;
            var3 = var1.priority;
            var2 = 1000;
            var2 = var2 * var3;
            var0.priority = var2;
            var2 = var1.payloadType;
            var0.payload_type = var2;
            var2 = var1.rtxPayloadType;
            var0.rtx_payload_type = var2;
            var2 = var1.encode;
            var0.encode = var2;
            var1 = var1.decode;
            var0.decode = var1;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = function arg0() {
        _fun93553: for (var _fun93553_ip = 0;;) switch (_fun93553_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 == var3;
                var0 = undefined;
                if (var1) {
                    _fun93553_ip = 33;
                    continue _fun93553
                }
            case 14:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun93554: for (var _fun93554_ip = 0;;) switch (_fun93554_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = {};
                            var1 = var3.type;
                            var0.type = var1;
                            var1 = var3.rid;
                            var0.rid = var1;
                            var1 = var3.ssrc;
                            var0.ssrc = var1;
                            var1 = var3.active;
                            var0.active = var1;
                            var1 = var3.quality;
                            var0.quality = var1;
                            var1 = var3.rtxSsrc;
                            var0.rtx_ssrc = var1;
                            var1 = var3.maxBitrate;
                            var0.max_bitrate = var1;
                            var1 = var3.maxFrameRate;
                            var0.max_framerate = var1;
                            var2 = var3.maxResolution;
                            var1 = null;
                            var2 = var1 != var2;
                            var1 = undefined;
                            if (!var2) {
                                _fun93554_ip = 158;
                                continue _fun93554
                            }
                        case 108:
                            var2 = {};
                            var4 = var3.maxResolution;
                            var4 = var4.type;
                            var2.type = var4;
                            var4 = var3.maxResolution;
                            var4 = var4.width;
                            var2.width = var4;
                            var3 = var3.maxResolution;
                            var3 = var3.height;
                            var2.height = var3;
                            var1 = var2;
                        case 158:
                            var0.max_resolution = var1;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 33:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function arg0() {
        _fun93555: for (var _fun93555_ip = 0;;) switch (_fun93555_ip) {
            case 0:
                var4 = arg0;
                var1 = null;
                var2 = var1 == var4;
                var0 = undefined;
                if (var2) {
                    _fun93555_ip = 33;
                    continue _fun93555
                }
            case 14:
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var2
                    _fun93556: for (var _fun93556_ip = 0;;) switch (_fun93556_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = {};
                            var2 = var3.type;
                            var1 = 'audio';
                            if (!(var1 !== var2)) {
                                _fun93556_ip = 79;
                                continue _fun93556
                            }
                        case 18:
                            var1 = 'test';
                            if (!(var1 !== var2)) {
                                _fun93556_ip = 64;
                                continue _fun93556
                            }
                        case 26:
                            var1 = 'screen';
                            if (!(var1 !== var2)) {
                                _fun93556_ip = 49;
                                continue _fun93556
                            }
                        case 34:
                            var1 = _closure1_slot10;
                            var1 = var1.VIDEO;
                            _fun93556_ip = 62;
                            continue _fun93556;
                        case 49:
                            var2 = _closure1_slot10;
                            var1 = var2.SCREEN;
                        case 62:
                            _fun93556_ip = 77;
                            continue _fun93556;
                        case 64:
                            var2 = _closure1_slot10;
                            var1 = var2.TEST;
                        case 77:
                            _fun93556_ip = 92;
                            continue _fun93556;
                        case 79:
                            var2 = _closure1_slot10;
                            var1 = var2.AUDIO;
                        case 92:
                            var0.type = var1;
                            var1 = var3.rid;
                            var0.rid = var1;
                            var1 = var3.ssrc;
                            var0.ssrc = var1;
                            var1 = var3.rtx_ssrc;
                            var0.rtxSsrc = var1;
                            var1 = var3.active;
                            var0.active = var1;
                            var1 = var3.quality;
                            var0.quality = var1;
                            var1 = var3.max_bitrate;
                            var0.maxBitrate = var1;
                            var1 = var3.max_framerate;
                            var0.maxFrameRate = var1;
                            var2 = var3.max_resolution;
                            var1 = null;
                            var2 = var1 != var2;
                            var1 = undefined;
                            if (!var2) {
                                _fun93556_ip = 240;
                                continue _fun93556
                            }
                        case 190:
                            var2 = {};
                            var4 = var3.max_resolution;
                            var4 = var4.type;
                            var2.type = var4;
                            var4 = var3.max_resolution;
                            var4 = var4.width;
                            var2.width = var4;
                            var3 = var3.max_resolution;
                            var3 = var3.height;
                            var2.height = var3;
                            var1 = var2;
                        case 240:
                            var0.maxResolution = var1;
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2);
            case 33:
                if (!(var1 == var0)) {
                    _fun93555_ip = 41;
                    continue _fun93555
                }
            case 37:
                var0 = new Array(0);
            case 41:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var18 = 0;
    var1 = var7[var18];
    var0 = undefined;
    var1 = var9.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var1 = var7[var12];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var17 = 2;
    var1 = var7[var17];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var16 = 3;
    var1 = var7[var16];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var15 = 4;
    var1 = var7[var15];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var10 = 5;
    var1 = var7[var10];
    var1 = var9.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var5 = 6;
    var1 = var7[var5];
    var1 = var6.bind(var0)(var1);
    var3 = var1.MediaEngineContextTypes;
    var _closure1_slot9 = var3;
    var3 = var1.MediaTypes;
    var _closure1_slot10 = var3;
    var1 = var1.SpeakingFlags;
    var _closure1_slot11 = var1;
    var3 = {};
    var3.IDENTIFY = var18;
    var1 = 'IDENTIFY';
    var3[var18] = var1;
    var3.SELECT_PROTOCOL = var12;
    var1 = 'SELECT_PROTOCOL';
    var3[var12] = var1;
    var3.READY = var17;
    var1 = 'READY';
    var3[var17] = var1;
    var3.HEARTBEAT = var16;
    var1 = 'HEARTBEAT';
    var3[var16] = var1;
    var3.SELECT_PROTOCOL_ACK = var15;
    var1 = 'SELECT_PROTOCOL_ACK';
    var3[var15] = var1;
    var3.SPEAKING = var10;
    var1 = 'SPEAKING';
    var3[var10] = var1;
    var3.HEARTBEAT_ACK = var5;
    var1 = 'HEARTBEAT_ACK';
    var3[var5] = var1;
    var1 = 7;
    var3.RESUME = var1;
    var5 = 'RESUME';
    var3[var1] = var5;
    var8 = 8;
    var3.HELLO = var8;
    var5 = 'HELLO';
    var3[var8] = var5;
    var8 = 9;
    var3.RESUMED = var8;
    var5 = 'RESUMED';
    var3[var8] = var5;
    var8 = 11;
    var3.CLIENT_CONNECT = var8;
    var5 = 'CLIENT_CONNECT';
    var3[var8] = var5;
    var8 = 12;
    var3.VIDEO = var8;
    var5 = 'VIDEO';
    var3[var8] = var5;
    var8 = 13;
    var3.CLIENT_DISCONNECT = var8;
    var5 = 'CLIENT_DISCONNECT';
    var3[var8] = var5;
    var5 = 14;
    var3.SESSION_UPDATE = var5;
    var11 = 'SESSION_UPDATE';
    var3[var5] = var11;
    var13 = 15;
    var3.MEDIA_SINK_WANTS = var13;
    var11 = 'MEDIA_SINK_WANTS';
    var3[var13] = var11;
    var13 = 16;
    var3.VOICE_BACKEND_VERSION = var13;
    var11 = 'VOICE_BACKEND_VERSION';
    var3[var13] = var11;
    var13 = 17;
    var3.CHANNEL_OPTIONS_UPDATE = var13;
    var11 = 'CHANNEL_OPTIONS_UPDATE';
    var3[var13] = var11;
    var13 = 18;
    var3.FLAGS = var13;
    var11 = 'FLAGS';
    var3[var13] = var11;
    var13 = 20;
    var3.PLATFORM = var13;
    var11 = 'PLATFORM';
    var3[var13] = var11;
    var14 = 21;
    var3.DAVE_PROTOCOL_PREPARE_TRANSITION = var14;
    var11 = 'DAVE_PROTOCOL_PREPARE_TRANSITION';
    var3[var14] = var11;
    var14 = 22;
    var3.DAVE_PROTOCOL_EXECUTE_TRANSITION = var14;
    var11 = 'DAVE_PROTOCOL_EXECUTE_TRANSITION';
    var3[var14] = var11;
    var14 = 23;
    var3.DAVE_PROTOCOL_READY_FOR_TRANSITION = var14;
    var11 = 'DAVE_PROTOCOL_READY_FOR_TRANSITION';
    var3[var14] = var11;
    var14 = 24;
    var3.DAVE_PROTOCOL_PREPARE_EPOCH = var14;
    var11 = 'DAVE_PROTOCOL_PREPARE_EPOCH';
    var3[var14] = var11;
    var14 = 25;
    var3.MLS_EXTERNAL_SENDER_PACKAGE = var14;
    var11 = 'MLS_EXTERNAL_SENDER_PACKAGE';
    var3[var14] = var11;
    var14 = 26;
    var3.MLS_KEY_PACKAGE = var14;
    var11 = 'MLS_KEY_PACKAGE';
    var3[var14] = var11;
    var14 = 27;
    var3.MLS_PROPOSALS = var14;
    var11 = 'MLS_PROPOSALS';
    var3[var14] = var11;
    var14 = 28;
    var3.MLS_COMMIT_WELCOME = var14;
    var11 = 'MLS_COMMIT_WELCOME';
    var3[var14] = var11;
    var14 = 29;
    var3.MLS_PREPARE_COMMIT_TRANSITION = var14;
    var11 = 'MLS_PREPARE_COMMIT_TRANSITION';
    var3[var14] = var11;
    var14 = 30;
    var3.MLS_WELCOME = var14;
    var11 = 'MLS_WELCOME';
    var3[var14] = var11;
    var14 = 31;
    var3.MLS_INVALID_COMMIT_WELCOME = var14;
    var11 = 'MLS_INVALID_COMMIT_WELCOME';
    var3[var14] = var11;
    var14 = 32;
    var3.CLIENT_CANNOT_REACH_RTC_SERVER = var14;
    var11 = 'CLIENT_CANNOT_REACH_RTC_SERVER';
    var3[var14] = var11;
    var _closure1_slot12 = var3;
    var11 = {};
    var19 = 4004;
    var11.AUTHENTICATION_FAILED = var19;
    var14 = 'AUTHENTICATION_FAILED';
    var11[var19] = var14;
    var19 = 4006;
    var11.INVALID_SESSION = var19;
    var14 = 'INVALID_SESSION';
    var11[var19] = var14;
    var19 = 4011;
    var11.SERVER_NOT_FOUND = var19;
    var14 = 'SERVER_NOT_FOUND';
    var11[var19] = var14;
    var19 = 4015;
    var11.SERVER_CRASH = var19;
    var14 = 'SERVER_CRASH';
    var11[var19] = var14;
    var19 = 4016;
    var11.CANCELED = var19;
    var14 = 'CANCELED';
    var11[var19] = var14;
    var19 = 4800;
    var11.HEARTBEAT_TIMEOUT = var19;
    var14 = 'HEARTBEAT_TIMEOUT';
    var11[var19] = var14;
    var19 = 4801;
    var11.UNRESUMABLE = var19;
    var14 = 'UNRESUMABLE';
    var11[var19] = var14;
    var19 = 4802;
    var11.RESET_BACKOFF = var19;
    var14 = 'RESET_BACKOFF';
    var11[var19] = var14;
    var _closure1_slot13 = var11;
    var11 = {};
    var11.DISCONNECTED = var18;
    var14 = 'DISCONNECTED';
    var11[var18] = var14;
    var11.CONNECTING = var12;
    var14 = 'CONNECTING';
    var11[var12] = var14;
    var11.IDENTIFYING = var17;
    var14 = 'IDENTIFYING';
    var11[var17] = var14;
    var11.RESUMING = var16;
    var14 = 'RESUMING';
    var11[var16] = var14;
    var11.CONNECTED = var15;
    var14 = 'CONNECTED';
    var11[var15] = var14;
    var11.RECONNECTING = var10;
    var14 = 'RECONNECTING';
    var11[var10] = var14;
    var _closure1_slot14 = var11;
    var11 = var7[var1];
    var11 = var9.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.SECOND;
    var11 = var13 * var11;
    var _closure1_slot15 = var11;
    var11 = var7[var1];
    var11 = var9.bind(var0)(var11);
    var11 = var11.Millis;
    var11 = var11.MINUTE;
    var11 = var12 * var11;
    var _closure1_slot16 = var11;
    var1 = var7[var1];
    var1 = var9.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.SECOND;
    var1 = var10 * var1;
    var _closure1_slot17 = var1;
    var1 = {};
    var10 = 'connecting';
    var1.Connecting = var10;
    var10 = 'connect';
    var1.Connect = var10;
    var10 = 'disconnect';
    var1.Disconnect = var10;
    var10 = 'resuming';
    var1.Resuming = var10;
    var10 = 'ready';
    var1.Ready = var10;
    var10 = 'speaking';
    var1.Speaking = var10;
    var10 = 'video';
    var1.Video = var10;
    var10 = 'ping';
    var1.Ping = var10;
    var10 = 'client-connect';
    var1.ClientConnect = var10;
    var10 = 'client-disconnect';
    var1.ClientDisconnect = var10;
    var10 = 'codecs';
    var1.Codecs = var10;
    var10 = 'media-session-id';
    var1.MediaSessionId = var10;
    var10 = 'media-sink-wants';
    var1.MediaSinkWants = var10;
    var10 = 'voice-backend-version';
    var1.VoiceBackendVersion = var10;
    var10 = 'keyframe-interval';
    var1.KeyframeInterval = var10;
    var10 = 'update-secure-frames-protocol';
    var1.ChannelOptionsUpdateSecureFramesProtocol = var10;
    var10 = 'flags';
    var1.Flags = var10;
    var10 = 'platform';
    var1.Platform = var10;
    var10 = 'sdp';
    var1.SDP = var10;
    var10 = 'encryption';
    var1.Encryption = var10;
    var10 = 'bandwidth-estimation-experiment';
    var1.BandwidthEstimationExperiment = var10;
    var10 = 'secure-frames-init';
    var1.SecureFramesInit = var10;
    var10 = 'secure-frames-prepare-transition';
    var1.SecureFramesPrepareTransition = var10;
    var10 = 'secure-frames-execute-transition';
    var1.SecureFramesExecuteTransition = var10;
    var10 = 'secure-frames-prepare-epoch';
    var1.SecureFramesPrepareEpoch = var10;
    var10 = 'mls-external-sender-package';
    var1.MLSExternalSenderPackage = var10;
    var10 = 'mls-proposals';
    var1.MLSProposals = var10;
    var10 = 'mls-prepare-commit-transition';
    var1.MLSPrepareCommitTransition = var10;
    var10 = 'mls-welcome';
    var1.MLSWelcome = var10;
    var10 = 'receive-message';
    var1.ReceiveMessage = var10;
    var10 = 'send-message';
    var1.SendMessage = var10;
    var _closure1_slot18 = var1;
    var8 = var7[var8];
    var8 = var9.bind(var0)(var8);
    var4 = function(arg0) { // Environment: var4
        var3 = function arg0() {
            _fun93558: for (var _fun93558_ip = 0;;) switch (_fun93558_ip) {
                case 0:
                    var7 = arguments[1];
                    var2 = this;
                    var5 = undefined;
                    if (!(var7 === var5)) {
                        _fun93558_ip = 25;
                        continue _fun93558
                    }
                case 12:
                    var0 = _closure1_slot9;
                    var7 = var0.DEFAULT;
                case 25:
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var5)(var2, var1);
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var5)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot19;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun93558_ip = 82;
                        continue _fun93558
                    }
                case 69:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var2, var5);
                    _fun93558_ip = 120;
                    continue _fun93558;
                case 82:
                    var3 = global;
                    var9 = var3.Reflect;
                    var8 = var9.construct;
                    var3 = _closure1_slot6;
                    var3 = var3.bind(var5)(var2);
                    var6 = var3.constructor;
                    var3 = new Array(0);
                    var0 = var8.bind(var9)(var10, var3, var6);
                case 120:
                    var0 = var1.bind(var5)(var2, var0);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var1 = var6[var1];
                    var9 = var3.bind(var5)(var1);
                    var1 = var9.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var9
                        }
                    });
                    var13 = 1000;
                    var12 = 5000;
                    var14 = var2;
                    var1 = new var14[var9](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.backoff = var1;
                    var2 = 0;
                    var0.serverVersion = var2;
                    var1 = arg0;
                    var0.url = var1;
                    var1 = 9;
                    var1 = var6[var1];
                    var5 = var3.bind(var5)(var1);
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var3 = 'RTCControlSocket(';
                    var1 = ')';
                    var13 = var6.bind(var3)(var7, var1);
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var14 = var3;
                    var1 = new var14[var5](var13, var12);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0.logger = var1;
                    var5 = var0.logger;
                    var1 = var5.enableNativeLogger;
                    var3 = true;
                    var1 = var1.bind(var5)(var3);
                    var1 = null;
                    var0.webSocket = var1;
                    var4 = _closure1_slot14;
                    var4 = var4.DISCONNECTED;
                    var0.connectionState = var4;
                    var0.helloTimeout = var1;
                    var0.lastHeartbeatAckTime = var1;
                    var0.heartbeatInterval = var1;
                    var0.heartbeater = var1;
                    var0.heartbeatAck = var3;
                    var0.expeditedHeartbeatTimeout = var1;
                    var3 = 1;
                    var0.heartbeatIntervalModifier = var3;
                    var0.connectionStartTime = var2;
                    var0.lastRecvSeqNum = var1;
                    var0.sessionId = var1;
                    var0.serverId = var1;
                    var0.channelId = var1;
                    var0.token = var1;
                    var1 = false;
                    var0.resumable = var1;
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
        var0 = 'createWebSocket';
        var4.key = var0;
        var0 = function() {
            _fun93559: for (var _fun93559_ip = 0;;) switch (_fun93559_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var5 = var3.logger;
                    var4 = var5.info;
                    var7 = var3.url;
                    var2 = global;
                    var0 = var2.HermesInternal;
                    var6 = var0.concat;
                    var0 = '[CONNECT] ';
                    var0 = var6.bind(var0)(var7);
                    var0 = var4.bind(var5)(var0);
                    var4 = var3.webSocket;
                    var0 = null;
                    if (!(var0 !== var4)) {
                        _fun93559_ip = 107;
                        continue _fun93559
                    }
                case 67:
                    var5 = var3.logger;
                    var4 = var5.error;
                    var0 = 'Connect called with already existing websocket';
                    var0 = var4.bind(var5)(var0);
                    var4 = var3.cleanupWebSocket;
                    var0 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var1 = var2.close;
                        var0 = 4000;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var4.bind(var3)(var0);
                case 107:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 10;
                    var5 = var5[var0];
                    var0 = undefined;
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var3.connectionStartTime = var5;
                    var6 = var2.setTimeout;
                    var5 = _closure1_slot15;
                    var4 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.now;
                        var2 = var1.bind(var2)();
                        var5 = _closure3_slot0;
                        var1 = var5.connectionStartTime;
                        var6 = var2 - var1;
                        var4 = var5.handleClose;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var3 = var1.concat;
                        var2 = 'The connection timed out after ';
                        var1 = ' ms - did not receive OP_HELLO in time.';
                        var3 = var3.bind(var2)(var6, var1);
                        var2 = false;
                        var1 = 0;
                        var1 = var4.bind(var5)(var2, var1, var3);
                        return var0;
                    };
                    var4 = var6.bind(var0)(var4, var5);
                    var3.helloTimeout = var4;
                    var5 = var2.WebSocket;
                    var7 = var3.url;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var4 = '';
                    var2 = '?v=9';
                    var9 = var6.bind(var4)(var7, var2);
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var10 = var4;
                    var2 = new var10[var5](var9, var8);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3.webSocket = var2;
                    var3 = 'arraybuffer';
                    var2.binaryType = var3;
                    var3 = function() { // Environment: var1
                        _fun93562: for (var _fun93562_ip = 0;;) switch (_fun93562_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = var1.connectionState;
                                var1 = _closure1_slot14;
                                var1 = var1.CONNECTING;
                                if (!(var3 !== var1)) {
                                    _fun93562_ip = 72;
                                    continue _fun93562
                                }
                            case 30:
                                var1 = _closure3_slot0;
                                var3 = var1.connectionState;
                                var1 = _closure1_slot14;
                                var1 = var1.RECONNECTING;
                                if (!(var3 === var1)) {
                                    _fun93562_ip = 97;
                                    continue _fun93562
                                }
                            case 54:
                                var3 = _closure3_slot0;
                                var1 = var3.doResumeOrClose;
                                var1 = var1.bind(var3)();
                                _fun93562_ip = 97;
                                continue _fun93562;
                            case 72:
                                var4 = _closure3_slot0;
                                var3 = var4.emit;
                                var1 = _closure1_slot18;
                                var1 = var1.Connect;
                                var1 = var3.bind(var4)(var1);
                            case 97:
                                var4 = _closure3_slot0;
                                var0 = _closure1_slot14;
                                var0 = var0.CONNECTED;
                                var4.connectionState = var0;
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var1);
                                var1 = var3.now;
                                var3 = var1.bind(var3)();
                                var1 = var4.connectionStartTime;
                                var7 = var3 - var1;
                                var6 = var4.logger;
                                var5 = var6.info;
                                var15 = var4.url;
                                var1 = global;
                                var3 = var1.HermesInternal;
                                var10 = var3.concat;
                                var16 = '[CONNECTED] ';
                                var14 = ' in ';
                                var12 = ' ms';
                                var13 = var7;
                                var3 = var16[var10](var15, var14, var13, var12, var11);
                                var3 = var5.bind(var6)(var3);
                                var3 = var4.emit;
                                var2 = _closure1_slot18;
                                var2 = var2.Ping;
                                var6 = var1.Math;
                                var5 = var6.round;
                                var1 = 2;
                                var1 = var7 / var1;
                                var1 = var5.bind(var6)(var1);
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    var2.onopen = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun93563: for (var _fun93563_ip = 0;;) switch (_fun93563_ip) {
                            case 0:
                                var6 = _closure3_slot0;
                                var2 = var6.parseWebSocketMessage;
                                var1 = arg0;
                                var1 = var2.bind(var6)(var1);
                                var7 = var1.op;
                                var4 = var1.seq;
                                var2 = var1.d;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var3 = var3.ReceiveMessage;
                                var3 = var5.bind(var6)(var3, var7, var2);
                                if (!var4) {
                                    _fun93563_ip = 78;
                                    continue _fun93563
                                }
                            case 68:
                                var3 = _closure3_slot0;
                                var3.lastRecvSeqNum = var4;
                            case 78:
                                var3 = _closure1_slot8;
                                var3 = var3.isLoggingGatewayEvents;
                                if (!var3) {
                                    _fun93563_ip = 279;
                                    continue _fun93563
                                }
                            case 94:
                                var3 = global;
                                var4 = var3.Uint8Array;
                                var4 = var2 instanceof var4;
                                if (var4) {
                                    _fun93563_ip = 179;
                                    continue _fun93563
                                }
                            case 109:
                                var4 = _closure3_slot0;
                                var6 = var4.logger;
                                var5 = var6.info;
                                var8 = var3.JSON;
                                var4 = var8.stringify;
                                var10 = var4.bind(var8)(var2);
                                var4 = var3.HermesInternal;
                                var9 = var4.concat;
                                var8 = '~> ';
                                var4 = ': ';
                                var4 = var9.bind(var8)(var7, var4, var10);
                                var4 = var5.bind(var6)(var4);
                                _fun93563_ip = 279;
                                continue _fun93563;
                            case 179:
                                var6 = new Array(0);
                                var14 = 0;
                                var16 = var6;
                                var15 = var2;
                                var4 = arraySpread(var16, var15, var14);
                                var5 = var6.map;
                                var4 = function(arg0) { // Environment: var4
                                    var2 = arg0;
                                    var1 = var2.toString;
                                    var0 = 16;
                                    var3 = var1.bind(var2)(var0);
                                    var2 = var3.padStart;
                                    var1 = 2;
                                    var0 = '0';
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var6 = var5.bind(var6)(var4);
                                var5 = var6.join;
                                var4 = '';
                                var9 = var5.bind(var6)(var4);
                                var4 = _closure3_slot0;
                                var5 = var4.logger;
                                var4 = var5.info;
                                var3 = var3.HermesInternal;
                                var8 = var3.concat;
                                var6 = '~> ';
                                var3 = ': 0x';
                                var3 = var8.bind(var6)(var7, var3, var9);
                                var3 = var4.bind(var5)(var3);
                            case 279:
                                var3 = _closure1_slot12;
                                var3 = var3.HELLO;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 2204;
                                    continue _fun93563
                                }
                            case 296:
                                var3 = _closure1_slot12;
                                var3 = var3.READY;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 2185;
                                    continue _fun93563
                                }
                            case 313:
                                var3 = _closure1_slot12;
                                var3 = var3.RESUMED;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 2166;
                                    continue _fun93563
                                }
                            case 330:
                                var3 = _closure1_slot12;
                                var3 = var3.SELECT_PROTOCOL_ACK;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1860;
                                    continue _fun93563
                                }
                            case 347:
                                var3 = _closure1_slot12;
                                var3 = var3.SPEAKING;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1769;
                                    continue _fun93563
                                }
                            case 364:
                                var3 = _closure1_slot12;
                                var3 = var3.HEARTBEAT;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1750;
                                    continue _fun93563
                                }
                            case 381:
                                var3 = _closure1_slot12;
                                var3 = var3.HEARTBEAT_ACK;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1728;
                                    continue _fun93563
                                }
                            case 398:
                                var3 = _closure1_slot12;
                                var3 = var3.VIDEO;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1658;
                                    continue _fun93563
                                }
                            case 415:
                                var3 = _closure1_slot12;
                                var3 = var3.CLIENT_CONNECT;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1621;
                                    continue _fun93563
                                }
                            case 432:
                                var3 = _closure1_slot12;
                                var3 = var3.CLIENT_DISCONNECT;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1584;
                                    continue _fun93563
                                }
                            case 449:
                                var3 = _closure1_slot12;
                                var3 = var3.SESSION_UPDATE;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1426;
                                    continue _fun93563
                                }
                            case 466:
                                var3 = _closure1_slot12;
                                var3 = var3.MEDIA_SINK_WANTS;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1395;
                                    continue _fun93563
                                }
                            case 483:
                                var3 = _closure1_slot12;
                                var3 = var3.VOICE_BACKEND_VERSION;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1320;
                                    continue _fun93563
                                }
                            case 500:
                                var3 = _closure1_slot12;
                                var3 = var3.FLAGS;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1247;
                                    continue _fun93563
                                }
                            case 517:
                                var3 = _closure1_slot12;
                                var3 = var3.PLATFORM;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1172;
                                    continue _fun93563
                                }
                            case 534:
                                var3 = _closure1_slot12;
                                var3 = var3.DAVE_PROTOCOL_PREPARE_TRANSITION;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1097;
                                    continue _fun93563
                                }
                            case 551:
                                var3 = _closure1_slot12;
                                var3 = var3.DAVE_PROTOCOL_EXECUTE_TRANSITION;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 1045;
                                    continue _fun93563
                                }
                            case 568:
                                var3 = _closure1_slot12;
                                var3 = var3.DAVE_PROTOCOL_PREPARE_EPOCH;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 970;
                                    continue _fun93563
                                }
                            case 585:
                                var3 = _closure1_slot12;
                                var3 = var3.MLS_EXTERNAL_SENDER_PACKAGE;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 939;
                                    continue _fun93563
                                }
                            case 602:
                                var3 = _closure1_slot12;
                                var3 = var3.MLS_PROPOSALS;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 908;
                                    continue _fun93563
                                }
                            case 619:
                                var3 = _closure1_slot12;
                                var3 = var3.MLS_PREPARE_COMMIT_TRANSITION;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 804;
                                    continue _fun93563
                                }
                            case 636:
                                var3 = _closure1_slot12;
                                var3 = var3.MLS_WELCOME;
                                if (!(var3 !== var7)) {
                                    _fun93563_ip = 700;
                                    continue _fun93563
                                }
                            case 650:
                                var3 = _closure3_slot0;
                                var5 = var3.logger;
                                var4 = var5.info;
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var6 = var3.concat;
                                var3 = 'Unhandled op ';
                                var3 = var6.bind(var3)(var7);
                                var3 = var4.bind(var5)(var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 700:
                                var3 = global;
                                var7 = var3.DataView;
                                var16 = var2.buffer;
                                var15 = var2.byteOffset;
                                var4 = var7.prototype;
                                var5 = Object.create(var4, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var4 = 2;
                                var17 = var5;
                                var14 = var4;
                                var3 = new var17[var7](var16, var15, var14, var13);
                                var7 = var3 instanceof Object ? var3 : var5;
                                var6 = var7.getUint16;
                                var5 = 0;
                                var3 = false;
                                var7 = var6.bind(var7)(var5, var3);
                                var3 = var2.slice;
                                var6 = var3.bind(var2)(var4);
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var3 = _closure1_slot18;
                                var3 = var3.MLSWelcome;
                                var3 = var4.bind(var5)(var3, var7, var6);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 804:
                                var3 = global;
                                var7 = var3.DataView;
                                var16 = var2.buffer;
                                var15 = var2.byteOffset;
                                var4 = var7.prototype;
                                var5 = Object.create(var4, {
                                    constructor: {
                                        value: var7
                                    }
                                });
                                var4 = 2;
                                var17 = var5;
                                var14 = var4;
                                var3 = new var17[var7](var16, var15, var14, var13);
                                var7 = var3 instanceof Object ? var3 : var5;
                                var6 = var7.getUint16;
                                var5 = 0;
                                var3 = false;
                                var7 = var6.bind(var7)(var5, var3);
                                var3 = var2.slice;
                                var6 = var3.bind(var2)(var4);
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var3 = _closure1_slot18;
                                var3 = var3.MLSPrepareCommitTransition;
                                var3 = var4.bind(var5)(var3, var7, var6);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 908:
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var3 = _closure1_slot18;
                                var3 = var3.MLSProposals;
                                var3 = var4.bind(var5)(var3, var2);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 939:
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var3 = _closure1_slot18;
                                var3 = var3.MLSExternalSenderPackage;
                                var3 = var4.bind(var5)(var3, var2);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 970:
                                var3 = var2.epoch;
                                var5 = null;
                                var3 = var5 != var3;
                                if (!var3) {
                                    _fun93563_ip = 995;
                                    continue _fun93563
                                }
                            case 985:
                                var4 = var2.protocol_version;
                                var3 = var5 != var4;
                            case 995:
                                if (!var3) {
                                    _fun93563_ip = 2231;
                                    continue _fun93563
                                }
                            case 1001:
                                var7 = _closure3_slot0;
                                var6 = var7.emit;
                                var3 = _closure1_slot18;
                                var5 = var3.SecureFramesPrepareEpoch;
                                var4 = var2.epoch;
                                var3 = var2.protocol_version;
                                var3 = var6.bind(var7)(var5, var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1045:
                                var4 = var2.transition_id;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun93563_ip = 2231;
                                    continue _fun93563
                                }
                            case 1060:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.SecureFramesExecuteTransition;
                                var3 = var2.transition_id;
                                var3 = var5.bind(var6)(var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1097:
                                var3 = var2.transition_id;
                                var5 = null;
                                var3 = var5 != var3;
                                if (!var3) {
                                    _fun93563_ip = 1122;
                                    continue _fun93563
                                }
                            case 1112:
                                var4 = var2.protocol_version;
                                var3 = var5 != var4;
                            case 1122:
                                if (!var3) {
                                    _fun93563_ip = 2231;
                                    continue _fun93563
                                }
                            case 1128:
                                var7 = _closure3_slot0;
                                var6 = var7.emit;
                                var3 = _closure1_slot18;
                                var5 = var3.SecureFramesPrepareTransition;
                                var4 = var2.transition_id;
                                var3 = var2.protocol_version;
                                var3 = var6.bind(var7)(var5, var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1172:
                                var3 = var2.platform;
                                var5 = null;
                                var3 = var5 != var3;
                                if (!var3) {
                                    _fun93563_ip = 1197;
                                    continue _fun93563
                                }
                            case 1187:
                                var4 = var2.user_id;
                                var3 = var5 != var4;
                            case 1197:
                                if (!var3) {
                                    _fun93563_ip = 2231;
                                    continue _fun93563
                                }
                            case 1203:
                                var7 = _closure3_slot0;
                                var6 = var7.emit;
                                var3 = _closure1_slot18;
                                var5 = var3.Platform;
                                var4 = var2.user_id;
                                var3 = var2.platform;
                                var3 = var6.bind(var7)(var5, var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1247:
                                var3 = var2.flags;
                                var5 = null;
                                var3 = var5 != var3;
                                if (!var3) {
                                    _fun93563_ip = 1271;
                                    continue _fun93563
                                }
                            case 1261:
                                var4 = var2.user_id;
                                var3 = var5 != var4;
                            case 1271:
                                if (!var3) {
                                    _fun93563_ip = 2231;
                                    continue _fun93563
                                }
                            case 1277:
                                var7 = _closure3_slot0;
                                var6 = var7.emit;
                                var3 = _closure1_slot18;
                                var5 = var3.Flags;
                                var4 = var2.user_id;
                                var3 = var2.flags;
                                var3 = var6.bind(var7)(var5, var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1320:
                                var3 = var2.voice;
                                var5 = null;
                                var3 = var5 != var3;
                                if (!var3) {
                                    _fun93563_ip = 1345;
                                    continue _fun93563
                                }
                            case 1335:
                                var4 = var2.rtc_worker;
                                var3 = var5 != var4;
                            case 1345:
                                if (!var3) {
                                    _fun93563_ip = 2231;
                                    continue _fun93563
                                }
                            case 1351:
                                var7 = _closure3_slot0;
                                var6 = var7.emit;
                                var3 = _closure1_slot18;
                                var5 = var3.VoiceBackendVersion;
                                var4 = var2.voice;
                                var3 = var2.rtc_worker;
                                var3 = var6.bind(var7)(var5, var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1395:
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var3 = _closure1_slot18;
                                var3 = var3.MediaSinkWants;
                                var3 = var4.bind(var5)(var3, var2);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1426:
                                var3 = var2.audio_codec;
                                var4 = null;
                                var3 = var4 == var3;
                                if (!var3) {
                                    _fun93563_ip = 1451;
                                    continue _fun93563
                                }
                            case 1441:
                                var5 = var2.video_codec;
                                var3 = var4 == var5;
                            case 1451:
                                if (var3) {
                                    _fun93563_ip = 1493;
                                    continue _fun93563
                                }
                            case 1454:
                                var8 = _closure3_slot0;
                                var7 = var8.emit;
                                var3 = _closure1_slot18;
                                var6 = var3.Codecs;
                                var5 = var2.audio_codec;
                                var3 = var2.video_codec;
                                var3 = var7.bind(var8)(var6, var5, var3);
                            case 1493:
                                var3 = var2.media_session_id;
                                if (!(var4 != var3)) {
                                    _fun93563_ip = 1535;
                                    continue _fun93563
                                }
                            case 1503:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.MediaSessionId;
                                var3 = var2.media_session_id;
                                var3 = var5.bind(var6)(var4, var3);
                            case 1535:
                                var3 = var2.keyframe_interval;
                                if (!var3) {
                                    _fun93563_ip = 2231;
                                    continue _fun93563
                                }
                            case 1547:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.KeyframeInterval;
                                var3 = var2.keyframe_interval;
                                var3 = var5.bind(var6)(var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1584:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.ClientDisconnect;
                                var3 = var2.user_id;
                                var3 = var5.bind(var6)(var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1621:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.ClientConnect;
                                var3 = var2.user_ids;
                                var3 = var5.bind(var6)(var4, var3);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1658:
                                var9 = _closure3_slot0;
                                var8 = var9.emit;
                                var3 = _closure1_slot18;
                                var7 = var3.Video;
                                var15 = var2.user_id;
                                var14 = var2.audio_ssrc;
                                var13 = var2.video_ssrc;
                                var11 = _closure1_slot23;
                                var10 = var2.streams;
                                var3 = undefined;
                                var12 = var11.bind(var3)(var10);
                                var17 = var9;
                                var16 = var7;
                                var3 = var17[var8](var16, var15, var14, var13, var12, var11);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1728:
                                var4 = _closure3_slot0;
                                var3 = var4.handleHeartbeatAck;
                                var3 = var3.bind(var4)(var2);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1750:
                                var4 = _closure3_slot0;
                                var3 = var4.sendHeartbeat;
                                var3 = var3.bind(var4)();
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1769:
                                var3 = var2.speaking;
                                var5 = 'boolean';
                                var4 = typeof var3;
                                var8 = var3;
                                if (!(var5 === var4)) {
                                    _fun93563_ip = 1813;
                                    continue _fun93563
                                }
                            case 1789:
                                var4 = _closure1_slot11;
                                if (var3) {
                                    _fun93563_ip = 1804;
                                    continue _fun93563
                                }
                            case 1796:
                                var3 = var4.NONE;
                                _fun93563_ip = 1810;
                                continue _fun93563;
                            case 1804:
                                var3 = var4.VOICE;
                            case 1810:
                                var8 = var3;
                            case 1813:
                                var7 = _closure3_slot0;
                                var6 = var7.emit;
                                var3 = _closure1_slot18;
                                var16 = var3.Speaking;
                                var15 = var2.user_id;
                                var14 = var2.ssrc;
                                var17 = var7;
                                var13 = var8;
                                var3 = var17[var6](var16, var15, var14, var13, var12);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 1860:
                                var3 = var2.bandwidth_estimation_experiment;
                                if (!var3) {
                                    _fun93563_ip = 1901;
                                    continue _fun93563
                                }
                            case 1869:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.BandwidthEstimationExperiment;
                                var3 = var2.bandwidth_estimation_experiment;
                                var3 = var5.bind(var6)(var4, var3);
                            case 1901:
                                var7 = _closure3_slot0;
                                var6 = var7.emit;
                                var3 = _closure1_slot18;
                                var5 = var3.Codecs;
                                var4 = var2.audio_codec;
                                var3 = var2.video_codec;
                                var3 = var6.bind(var7)(var5, var4, var3);
                                var3 = var2.media_session_id;
                                if (!var3) {
                                    _fun93563_ip = 1981;
                                    continue _fun93563
                                }
                            case 1949:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.MediaSessionId;
                                var3 = var2.media_session_id;
                                var3 = var5.bind(var6)(var4, var3);
                            case 1981:
                                var3 = var2.sdp;
                                if (var3) {
                                    _fun93563_ip = 2040;
                                    continue _fun93563
                                }
                            case 1990:
                                var3 = var2.mode;
                                if (!var3) {
                                    _fun93563_ip = 2072;
                                    continue _fun93563
                                }
                            case 1998:
                                var7 = _closure3_slot0;
                                var6 = var7.emit;
                                var3 = _closure1_slot18;
                                var5 = var3.Encryption;
                                var4 = var2.mode;
                                var3 = var2.secret_key;
                                var3 = var6.bind(var7)(var5, var4, var3);
                                _fun93563_ip = 2072;
                                continue _fun93563;
                            case 2040:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.SDP;
                                var3 = var2.sdp;
                                var3 = var5.bind(var6)(var4, var3);
                            case 2072:
                                var3 = var2.keyframe_interval;
                                if (!var3) {
                                    _fun93563_ip = 2113;
                                    continue _fun93563
                                }
                            case 2081:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure1_slot18;
                                var4 = var3.KeyframeInterval;
                                var3 = var2.keyframe_interval;
                                var3 = var5.bind(var6)(var4, var3);
                            case 2113:
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var1 = _closure1_slot18;
                                var3 = var1.SecureFramesInit;
                                var1 = var2.dave_protocol_version;
                                if (var1) {
                                    _fun93563_ip = 2146;
                                    continue _fun93563
                                }
                            case 2144:
                                var1 = 0;
                            case 2146:
                                var1 = var4.bind(var5)(var3, var1);
                                var3 = _closure3_slot0;
                                var1 = true;
                                var3.resumable = var1;
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 2166:
                                var3 = _closure3_slot0;
                                var1 = var3.handleResumed;
                                var1 = var1.bind(var3)(var2);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 2185:
                                var3 = _closure3_slot0;
                                var1 = var3.handleReady;
                                var1 = var1.bind(var3)(var2);
                                _fun93563_ip = 2231;
                                continue _fun93563;
                            case 2204:
                                var1 = _closure3_slot0;
                                var0 = var1.clearHelloTimeout;
                                var0 = var0.bind(var1)();
                                var0 = var1.handleHello;
                                var0 = var0.bind(var1)(var2);
                            case 2231:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2.onmessage = var3;
                    var3 = function() { // Environment: var1
                        var4 = _closure3_slot0;
                        var3 = var4.handleClose;
                        var2 = false;
                        var1 = 0;
                        var0 = 'An error with the websocket occurred';
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var2.onerror = var3;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var4 = var0.wasClean;
                        var3 = var0.code;
                        var2 = var0.reason;
                        var1 = _closure3_slot0;
                        var0 = var1.handleClose;
                        var0 = var0.bind(var1)(var4, var3, var2);
                        return var0;
                    };
                    var2.onclose = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(38);
        var0[0] = var4;
        var4 = {};
        var6 = 'send';
        var4.key = var6;
        var6 = function arg0() {
            _fun93567: for (var _fun93567_ip = 0;;) switch (_fun93567_ip) {
                case 0:
                    var5 = arguments[1];
                    var7 = this;
                    var4 = arg0;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun93567_ip = 17;
                        continue _fun93567
                    }
                case 15:
                    var5 = null;
                case 17:
                    var3 = var5;
                    var2 = undefined;
                    var1 = undefined;
                    var6 = var7.webSocket;
                    var2 = var6;
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun93567_ip = 204;
                        continue _fun93567
                    }
                case 42:
                    var5 = var2;
                    var8 = var5.readyState;
                    var6 = global;
                    var5 = var6.WebSocket;
                    var5 = var5.OPEN;
                    if (!(var8 === var5)) {
                        _fun93567_ip = 204;
                        continue _fun93567
                    }
                case 72:
                    var9 = var6.JSON;
                    var8 = var9.stringify;
                    var5 = {};
                    var10 = var4;
                    var5.op = var10;
                    var10 = var3;
                    var5.d = var10;
                    var1 = var8.bind(var9)(var5);
                    var8 = _closure1_slot8;
                    var8 = var8.isLoggingGatewayEvents;
                    if (!var8) {
                        _fun93567_ip = 163;
                        continue _fun93567
                    }
                case 121:
                    var9 = var7.logger;
                    var8 = var9.info;
                    var11 = var1;
                    var6 = var6.HermesInternal;
                    var10 = var6.concat;
                    var6 = '<~ ';
                    var6 = var10.bind(var6)(var11);
                    var6 = var8.bind(var9)(var6);
                case 163:
                    var6 = var7.emit;
                    var5 = _closure1_slot18;
                    var5 = var5.SendMessage;
                    var3 = var6.bind(var7)(var5, var4, var3);
                case 186: // try_start_0
                    var3 = var2;
                    var2 = var3.send;
                    var1 = var2.bind(var3)(var1);
                case 200: // try_end0
                    _fun93567_ip = 204;
                    continue _fun93567;
                case 202: // catch_target0
                    CatchBlockStart(arg_register = 1);
                case 204:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'sendBinary';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun93568: for (var _fun93568_ip = 0;;) switch (_fun93568_ip) {
                case 0:
                    var3 = arg0;
                    var4 = arg1;
                    var0 = undefined;
                    var2 = undefined;
                    var1 = undefined;
                    var5 = this;
                    var6 = var5.webSocket;
                    var2 = var6;
                    var5 = null;
                    if (!(var5 != var6)) {
                        _fun93568_ip = 146;
                        continue _fun93568
                    }
                case 30:
                    var5 = var2;
                    var7 = var5.readyState;
                    var5 = global;
                    var6 = var5.WebSocket;
                    var6 = var6.OPEN;
                    if (!(var7 === var6)) {
                        _fun93568_ip = 146;
                        continue _fun93568
                    }
                case 57:
                    var8 = var5.Uint8Array;
                    var6 = var4;
                    var4 = var6.byteLength;
                    var5 = 1;
                    var10 = var4 + var5;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var11 = var7;
                    var4 = new var11[var8](var10, var9);
                    var4 = var4 instanceof Object ? var4 : var7;
                    var1 = var4;
                    var7 = var3;
                    var3 = 0;
                    var4[var3] = var7;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var6, var5);
                case 122: // try_start_0
                    var3 = var2;
                    var2 = var3.send;
                    var1 = var1.buffer;
                    var1 = var2.bind(var3)(var1);
                case 142: // try_end0
                    _fun93568_ip = 146;
                    continue _fun93568;
                case 144: // catch_target0
                    CatchBlockStart(arg_register = 1);
                case 146:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'ping';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.sendHeartbeat;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'doResumeOrClose';
        var4.key = var6;
        var6 = function() {
            _fun93570: for (var _fun93570_ip = 0;;) switch (_fun93570_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var1);
                    var1 = var4.now;
                    var1 = var1.bind(var4)();
                    var4 = var2.serverId;
                    var5 = null;
                    if (!(var5 !== var4)) {
                        _fun93570_ip = 115;
                        continue _fun93570
                    }
                case 49:
                    var4 = var2.channelId;
                    if (!(var5 !== var4)) {
                        _fun93570_ip = 115;
                        continue _fun93570
                    }
                case 58:
                    var4 = var2.token;
                    if (!(var5 !== var4)) {
                        _fun93570_ip = 115;
                        continue _fun93570
                    }
                case 68:
                    var4 = var2.sessionId;
                    if (!(var5 !== var4)) {
                        _fun93570_ip = 115;
                        continue _fun93570
                    }
                case 78:
                    var4 = var2.resumable;
                    if (!var4) {
                        _fun93570_ip = 115;
                        continue _fun93570
                    }
                case 87:
                    var4 = var2.lastHeartbeatAckTime;
                    if (!(var5 != var4)) {
                        _fun93570_ip = 148;
                        continue _fun93570
                    }
                case 97:
                    var4 = var2.lastHeartbeatAckTime;
                    var5 = var1 - var4;
                    var4 = _closure1_slot16;
                    if (!(!(var5 <= var4))) {
                        _fun93570_ip = 148;
                        continue _fun93570
                    }
                case 115:
                    var6 = var2.disconnect;
                    var3 = _closure1_slot13;
                    var5 = var3.UNRESUMABLE;
                    var4 = false;
                    var3 = 'Cannot resume connection.';
                    var3 = var6.bind(var2)(var4, var5, var3);
                    _fun93570_ip = 166;
                    continue _fun93570;
                case 148:
                    var3 = var2.doResume;
                    var3 = var3.bind(var2)();
                    var2.lastHeartbeatAckTime = var1;
                case 166:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'doResume';
        var4.key = var6;
        var6 = function() {
            _fun93571: for (var _fun93571_ip = 0;;) switch (_fun93571_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.lastRecvSeqNum;
                    var5 = null;
                    var1 = var5 != var0;
                    var4 = -1;
                    if (!var1) {
                        _fun93571_ip = 27;
                        continue _fun93571
                    }
                case 24:
                    var4 = var0;
                case 27:
                    var2 = var3.logger;
                    var1 = var2.info;
                    var0 = var3.serverId;
                    var6 = var5 != var0;
                    var11 = '';
                    var10 = var11;
                    if (!var6) {
                        _fun93571_ip = 62;
                        continue _fun93571
                    }
                case 59:
                    var10 = var0;
                case 62:
                    var0 = var3.channelId;
                    var6 = var5 != var0;
                    var9 = var11;
                    if (!var6) {
                        _fun93571_ip = 80;
                        continue _fun93571
                    }
                case 77:
                    var9 = var0;
                case 80:
                    var0 = var3.sessionId;
                    var5 = var5 != var0;
                    if (!var5) {
                        _fun93571_ip = 96;
                        continue _fun93571
                    }
                case 93:
                    var11 = var0;
                case 96:
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var8 = var0.concat;
                    var19 = '[RESUME] resuming session. serverId=';
                    var17 = ' channelId=';
                    var15 = ' sessionId=';
                    var13 = ' seqAck=';
                    var18 = var10;
                    var16 = var9;
                    var14 = var11;
                    var12 = var4;
                    var0 = var19[var8](var18, var17, var16, var15, var14, var13, var12, var11);
                    var0 = var1.bind(var2)(var0);
                    var2 = var3.emit;
                    var1 = _closure1_slot18;
                    var1 = var1.Resuming;
                    var1 = var2.bind(var3)(var1);
                    var1 = _closure1_slot14;
                    var1 = var1.RESUMING;
                    var3.connectionState = var1;
                    var2 = var3.send;
                    var0 = _closure1_slot12;
                    var1 = var0.RESUME;
                    var0 = {};
                    var5 = var3.token;
                    var0.token = var5;
                    var5 = var3.sessionId;
                    var0.session_id = var5;
                    var5 = var3.serverId;
                    var0.server_id = var5;
                    var5 = var3.channelId;
                    var0.channel_id = var5;
                    var0.seq_ack = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'handleHello';
        var4.key = var6;
        var6 = function arg0() {
            _fun93572: for (var _fun93572_ip = 0;;) switch (_fun93572_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var4 = var0.v;
                    var5 = null;
                    var6 = var5 != var4;
                    var3 = 3;
                    var1 = var3;
                    if (!var6) {
                        _fun93572_ip = 29;
                        continue _fun93572
                    }
                case 26:
                    var1 = var4;
                case 29:
                    var2.serverVersion = var1;
                    var1 = var2.serverVersion;
                    if (!(!(var1 <= var3))) {
                        _fun93572_ip = 148;
                        continue _fun93572
                    }
                case 45:
                    var3 = var0.heartbeat_interval;
                    var1 = var2.heartbeatIntervalModifier;
                    var1 = var3 * var1;
                    var2.heartbeatInterval = var1;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 11;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var4);
                    var3 = var3.isPlatformEmbedded;
                    if (var3) {
                        _fun93572_ip = 218;
                        continue _fun93572
                    }
                case 101:
                    var7 = global;
                    var6 = var7.Math;
                    var4 = var6.min;
                    var3 = _closure1_slot17;
                    var1 = var2.heartbeatInterval;
                    if (!(var5 == var1)) {
                        _fun93572_ip = 134;
                        continue _fun93572
                    }
                case 128:
                    var1 = var7.NaN;
                case 134:
                    var1 = var4.bind(var6)(var3, var1);
                    var2.heartbeatInterval = var1;
                    _fun93572_ip = 218;
                    continue _fun93572;
                case 148:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 11;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var3 = var1.isPlatformEmbedded;
                    var1 = 0.1;
                    if (!var3) {
                        _fun93572_ip = 202;
                        continue _fun93572
                    }
                case 192:
                    var1 = 0.25;
                case 202:
                    var0 = var0.heartbeat_interval;
                    var0 = var0 * var1;
                    var2.heartbeatInterval = var0;
                case 218:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.now;
                    var3 = var1.bind(var3)();
                    var1 = var2.connectionStartTime;
                    var11 = var3 - var1;
                    var4 = var2.logger;
                    var3 = var4.info;
                    var1 = var2.heartbeatInterval;
                    var5 = var5 != var1;
                    var10 = '??';
                    if (!var5) {
                        _fun93572_ip = 296;
                        continue _fun93572
                    }
                case 293:
                    var10 = var1;
                case 296:
                    var15 = var2.serverVersion;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var18 = '[HELLO] heartbeat interval: ';
                    var16 = ', version: ';
                    var14 = ', took ';
                    var12 = ' ms';
                    var17 = var10;
                    var13 = var11;
                    var1 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.startHeartbeater;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleReady';
        var4.key = var6;
        var6 = function arg0() {
            _fun93573: for (var _fun93573_ip = 0;;) switch (_fun93573_ip) {
                case 0:
                    var1 = arg0;
                    var9 = this;
                    var2 = var9.backoff;
                    var0 = var2.succeed;
                    var0 = var0.bind(var2)();
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var3 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.now;
                    var4 = var3.bind(var4)();
                    var3 = var9.connectionStartTime;
                    var8 = var4 - var3;
                    var5 = var9.logger;
                    var4 = var5.info;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = '[READY] took ';
                    var3 = ' ms';
                    var3 = var7.bind(var6)(var8, var3);
                    var3 = var4.bind(var5)(var3);
                    var4 = var9.serverVersion;
                    var3 = 6;
                    if (!(var4 >= var3)) {
                        _fun93573_ip = 151;
                        continue _fun93573
                    }
                case 127:
                    var5 = var9.send;
                    var3 = _closure1_slot12;
                    var4 = var3.VOICE_BACKEND_VERSION;
                    var3 = {};
                    var3 = var5.bind(var9)(var4, var3);
                case 151:
                    var8 = var9.emit;
                    var3 = _closure1_slot18;
                    var7 = var3.Ready;
                    var16 = var1.ip;
                    var15 = var1.port;
                    var14 = var1.modes;
                    var13 = var1.ssrc;
                    var10 = _closure1_slot23;
                    var2 = var1.streams;
                    var12 = var10.bind(var0)(var2);
                    var11 = var1.experiments;
                    var18 = var9;
                    var17 = var7;
                    var1 = var18[var8](var17, var16, var15, var14, var13, var12, var11, var10);
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleResumed';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.backoff;
            var0 = var1.succeed;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleClose';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun93575: for (var _fun93575_ip = 0;;) switch (_fun93575_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var4;
                    var _closure3_slot2 = var3;
                    var _closure3_slot3 = var2;
                    var6 = _closure1_slot14;
                    var6 = var6.DISCONNECTED;
                    var1.connectionState = var6;
                    if (var4) {
                        _fun93575_ip = 54;
                        continue _fun93575
                    }
                case 52:
                    var4 = false;
                case 54:
                    _closure3_slot1 = var4;
                    var6 = var1.cleanupWebSocket;
                    var6 = var6.bind(var1)();
                    var6 = _closure1_slot13;
                    var6 = var6.AUTHENTICATION_FAILED;
                    if (!(var3 !== var6)) {
                        _fun93575_ip = 328;
                        continue _fun93575
                    }
                case 85:
                    var6 = _closure1_slot13;
                    var6 = var6.SERVER_CRASH;
                    if (!(var3 !== var6)) {
                        _fun93575_ip = 328;
                        continue _fun93575
                    }
                case 102:
                    var6 = _closure1_slot13;
                    var6 = var6.SERVER_NOT_FOUND;
                    if (!(var3 !== var6)) {
                        _fun93575_ip = 328;
                        continue _fun93575
                    }
                case 119:
                    var5 = _closure1_slot13;
                    var5 = var5.INVALID_SESSION;
                    if (!(var3 !== var5)) {
                        _fun93575_ip = 328;
                        continue _fun93575
                    }
                case 136:
                    var5 = var1.backoff;
                    var6 = var5.fails;
                    var5 = 3;
                    if (!(!(var6 > var5))) {
                        _fun93575_ip = 289;
                        continue _fun93575
                    }
                case 158:
                    var6 = var1.backoff;
                    var5 = var6.fail;
                    var0 = function() { // Environment: var0
                        var4 = _closure3_slot0;
                        var3 = var4.reconnect;
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot2;
                        var0 = _closure3_slot3;
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var7 = var5.bind(var6)(var0);
                    var6 = var1.logger;
                    var5 = var6.warn;
                    var0 = var4.toString;
                    var13 = var0.bind(var4)();
                    var0 = 1000;
                    var8 = var7 / var0;
                    var7 = var8.toFixed;
                    var0 = 2;
                    var15 = var7.bind(var8)(var0);
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var11 = var0.concat;
                    var22 = '[WS CLOSED] (clean: ';
                    var20 = ', code: ';
                    var18 = ', reason: ';
                    var16 = ') retrying in ';
                    var14 = ' seconds.';
                    var21 = var13;
                    var19 = var3;
                    var17 = var2;
                    var0 = var22[var11](var21, var20, var19, var18, var17, var16, var15, var14, var13);
                    var0 = var5.bind(var6)(var0);
                    _fun93575_ip = 324;
                    continue _fun93575;
                case 289:
                    var6 = var1.logger;
                    var5 = var6.warn;
                    var0 = '[WS CLOSED] Backoff exceed. Resetting.';
                    var0 = var5.bind(var6)(var0);
                    var0 = var1.disconnect;
                    var0 = var0.bind(var1)(var4, var3, var2);
                case 324:
                    var0 = undefined;
                    return var0;
                case 328:
                    var0 = var1.disconnect;
                    var0 = var0.bind(var1)(var4, var3, var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'disconnect';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            var5 = arg0;
            var4 = arg1;
            var3 = arg2;
            var2 = this;
            var6 = var2.logger;
            var1 = var6.warn;
            var0 = var5.toString;
            var16 = var0.bind(var5)();
            var0 = global;
            var0 = var0.HermesInternal;
            var9 = var0.concat;
            var17 = '[DISCONNECT] (';
            var7 = ', ';
            var11 = ')';
            var15 = var7;
            var14 = var4;
            var13 = var7;
            var12 = var3;
            var0 = var17[var9](var16, var15, var14, var13, var12, var11, var10);
            var0 = var1.bind(var6)(var0);
            var0 = var2.cleanupWebSocket;
            var0 = var0.bind(var2)();
            var0 = var2.cleanupState;
            var0 = var0.bind(var2)();
            var1 = _closure1_slot14;
            var1 = var1.DISCONNECTED;
            var2.connectionState = var1;
            var1 = var2.emit;
            var0 = _closure1_slot18;
            var16 = var0.Disconnect;
            var17 = var2;
            var15 = var5;
            var14 = var4;
            var13 = var3;
            var0 = var17[var1](var16, var15, var14, var13, var12);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'reconnect';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            var4 = arg0;
            var1 = this;
            var3 = var1.logger;
            var2 = var3.info;
            var0 = var4.toString;
            var14 = var0.bind(var4)();
            var0 = global;
            var0 = var0.HermesInternal;
            var8 = var0.concat;
            var15 = '[RECONNECT] wasClean=';
            var13 = ' code=';
            var12 = arg1;
            var11 = ' reason=';
            var10 = arg2;
            var0 = var15[var8](var14, var13, var12, var11, var10, var9);
            var0 = var2.bind(var3)(var0);
            var2 = var1.cleanupWebSocket;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.close;
                var0 = 4000;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            var0 = _closure1_slot14;
            var0 = var0.RECONNECTING;
            var1.connectionState = var0;
            var0 = var1.createWebSocket;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'cleanupWebSocket';
        var4.key = var6;
        var6 = function arg0() {
            _fun93580: for (var _fun93580_ip = 0;;) switch (_fun93580_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0.stopHeartbeater;
                    var1 = var1.bind(var0)();
                    var1 = var0.clearHelloTimeout;
                    var1 = var1.bind(var0)();
                    var2 = var0.webSocket;
                    var1 = null;
                    var0.webSocket = var1;
                    if (!(var1 != var2)) {
                        _fun93580_ip = 88;
                        continue _fun93580
                    }
                case 46:
                    var4 = _closure1_slot20;
                    var2.onopen = var4;
                    var2.onmessage = var4;
                    var2.onerror = var4;
                    var2.onclose = var4;
                    if (!(var1 != var3)) {
                        _fun93580_ip = 88;
                        continue _fun93580
                    }
                case 81:
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                case 88:
                    var1 = var0.backoff;
                    var0 = var1.cancel;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'cleanupState';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = null;
            var1.serverId = var0;
            var1.channelId = var0;
            var1.sessionId = var0;
            var1.token = var0;
            var2 = false;
            var1.resumable = var2;
            var1.lastRecvSeqNum = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'parseWebSocketMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun93582: for (var _fun93582_ip = 0;;) switch (_fun93582_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var3 = var1.data;
                    var4 = global;
                    var2 = var4.ArrayBuffer;
                    var2 = var3 instanceof var2;
                    if (var2) {
                        _fun93582_ip = 50;
                        continue _fun93582
                    }
                case 26:
                    var5 = var4.JSON;
                    var3 = var5.parse;
                    var2 = var1.data;
                    var2 = var3.bind(var5)(var2);
                    return var2;
                case 50:
                    var3 = var4.Uint8Array;
                    var9 = var1.data;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var10 = var2;
                    var1 = new var10[var3](var9, var8);
                    var3 = var1 instanceof Object ? var1 : var2;
                    var1 = var0.serverVersion;
                    var2 = 8;
                    var5 = var1 >= var2;
                    var1 = null;
                    if (!var5) {
                        _fun93582_ip = 147;
                        continue _fun93582
                    }
                case 99:
                    var6 = var4.DataView;
                    var9 = var3.buffer;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var5;
                    var4 = new var10[var6](var9, var8);
                    var7 = var4 instanceof Object ? var4 : var5;
                    var6 = var7.getUint16;
                    var5 = 0;
                    var4 = false;
                    var1 = var6.bind(var7)(var5, var4);
                case 147:
                    var0 = var0.serverVersion;
                    var0 = var0 >= var2;
                    var4 = 0;
                    if (!var0) {
                        _fun93582_ip = 165;
                        continue _fun93582
                    }
                case 162:
                    var4 = 2;
                case 165:
                    var0 = {};
                    var2 = var3[var4];
                    var0.op = var2;
                    var0.seq = var1;
                    var2 = var3.subarray;
                    var1 = 1;
                    var1 = var4 + var1;
                    var1 = var2.bind(var3)(var1);
                    var0.d = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'clearHelloTimeout';
        var4.key = var6;
        var6 = function() {
            _fun93583: for (var _fun93583_ip = 0;;) switch (_fun93583_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.helloTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun93583_ip = 42;
                        continue _fun93583
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.helloTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.helloTimeout = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'handleHeartbeatAck';
        var4.key = var6;
        var6 = function arg0() {
            _fun93584: for (var _fun93584_ip = 0;;) switch (_fun93584_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var4 = var1.logger;
                    var3 = var4.info;
                    var2 = 'Heartbeat ACK received';
                    var2 = var3.bind(var4)(var2);
                    var3 = var1.serverVersion;
                    var2 = 8;
                    var8 = var0;
                    if (!(var3 >= var2)) {
                        _fun93584_ip = 50;
                        continue _fun93584
                    }
                case 45:
                    var8 = var0.t;
                case 50:
                    var7 = var1.emit;
                    var2 = _closure1_slot18;
                    var6 = var2.Ping;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 10;
                    var5 = var4[var2];
                    var0 = undefined;
                    var9 = var3.bind(var0)(var5);
                    var5 = var9.now;
                    var5 = var5.bind(var9)();
                    var5 = var5 - var8;
                    var5 = var7.bind(var1)(var6, var5);
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var1.lastHeartbeatAckTime = var2;
                    var2 = true;
                    var1.heartbeatAck = var2;
                    var3 = var1.expeditedHeartbeatTimeout;
                    var2 = null;
                    if (!(var2 !== var3)) {
                        _fun93584_ip = 202;
                        continue _fun93584
                    }
                case 154:
                    var3 = global;
                    var4 = var3.clearTimeout;
                    var3 = var1.expeditedHeartbeatTimeout;
                    var3 = var4.bind(var0)(var3);
                    var1.expeditedHeartbeatTimeout = var2;
                    var3 = var1.logger;
                    var2 = var3.info;
                    var1 = 'Expedited heartbeat succeeded';
                    var1 = var2.bind(var3)(var1);
                case 202:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'handleHeartbeatTimeout';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var3 = var0.cleanupWebSocket;
            var2 = function(arg0) { // Environment: var1
                var2 = arg0;
                var1 = var2.close;
                var0 = 4000;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = var3.bind(var0)(var2);
            var3 = var0.backoff;
            var2 = var3.fail;
            var1 = function() { // Environment: var1
                var4 = _closure3_slot0;
                var3 = var4.reconnect;
                var0 = _closure1_slot13;
                var2 = var0.HEARTBEAT_TIMEOUT;
                var1 = false;
                var0 = 'Heartbeat timeout.';
                var0 = var3.bind(var4)(var1, var2, var0);
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var0.logger;
            var1 = var2.warn;
            var0 = 1000;
            var4 = var3 / var0;
            var3 = var4.toFixed;
            var0 = 2;
            var5 = var3.bind(var4)(var0);
            var0 = global;
            var0 = var0.HermesInternal;
            var4 = var0.concat;
            var3 = '[HEARTBEAT ACK TIMEOUT] reconnecting in ';
            var0 = ' seconds.';
            var0 = var4.bind(var3)(var5, var0);
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'startHeartbeater';
        var4.key = var6;
        var6 = function() {
            _fun93588: for (var _fun93588_ip = 0;;) switch (_fun93588_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var3 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var3 = var2.heartbeatInterval;
                    var5 = null;
                    var4 = var5 != var3;
                    var3 = 'RTCControlSocket: Heartbeat interval should never null here.';
                    var3 = var6.bind(var0)(var4, var3);
                    var7 = var2.logger;
                    var6 = var7.info;
                    var9 = var2.heartbeatInterval;
                    var3 = global;
                    var4 = var3.HermesInternal;
                    var8 = var4.concat;
                    var4 = 'Starting heartbeat with interval: ';
                    var4 = var8.bind(var4)(var9);
                    var4 = var6.bind(var7)(var4);
                    var4 = var2.heartbeater;
                    if (!(var5 !== var4)) {
                        _fun93588_ip = 132;
                        continue _fun93588
                    }
                case 115:
                    var5 = var3.clearInterval;
                    var4 = var2.heartbeater;
                    var4 = var5.bind(var0)(var4);
                case 132:
                    var4 = true;
                    var2.heartbeatAck = var4;
                    var4 = var3.setInterval;
                    var3 = var2.heartbeatInterval;
                    var1 = function() { // Environment: var1
                        _fun93589: for (var _fun93589_ip = 0;;) switch (_fun93589_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.heartbeatAck;
                                var1 = _closure3_slot0;
                                if (var2) {
                                    _fun93589_ip = 48;
                                    continue _fun93589
                                }
                            case 20:
                                var3 = var1.expeditedHeartbeatTimeout;
                                var2 = null;
                                if (!(var2 === var3)) {
                                    _fun93589_ip = 66;
                                    continue _fun93589
                                }
                            case 32:
                                var2 = _closure3_slot0;
                                var0 = var2.handleHeartbeatTimeout;
                                var0 = var0.bind(var2)();
                                _fun93589_ip = 66;
                                continue _fun93589;
                            case 48:
                                var0 = false;
                                var1.heartbeatAck = var0;
                                var0 = var1.sendHeartbeat;
                                var0 = var0.bind(var1)();
                            case 66:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2.heartbeater = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'sendHeartbeat';
        var4.key = var6;
        var6 = function() {
            _fun93590: for (var _fun93590_ip = 0;;) switch (_fun93590_ip) {
                case 0:
                    var3 = this;
                    var1 = var3.serverVersion;
                    var0 = 8;
                    if (!(!(var1 >= var0))) {
                        _fun93590_ip = 100;
                        continue _fun93590
                    }
                case 16:
                    var2 = var3.logger;
                    var1 = var2.info;
                    var0 = 'Sending heartbeat';
                    var0 = var1.bind(var2)(var0);
                    var2 = var3.send;
                    var1 = _closure1_slot12;
                    var1 = var1.HEARTBEAT;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var0 = 10;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var0 = var4.now;
                    var0 = var0.bind(var4)();
                    var0 = var2.bind(var3)(var1, var0);
                    _fun93590_ip = 232;
                    continue _fun93590;
                case 100:
                    var0 = var3.lastRecvSeqNum;
                    var1 = null;
                    var1 = var1 != var0;
                    var4 = -1;
                    if (!var1) {
                        _fun93590_ip = 124;
                        continue _fun93590
                    }
                case 121:
                    var4 = var0;
                case 124:
                    var2 = var3.logger;
                    var1 = var2.info;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var0 = 'Sending heartbeat with last received sequence number: ';
                    var0 = var5.bind(var0)(var4);
                    var0 = var1.bind(var2)(var0);
                    var2 = var3.send;
                    var0 = _closure1_slot12;
                    var1 = var0.HEARTBEAT;
                    var0 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var5 = 10;
                    var6 = var6[var5];
                    var5 = undefined;
                    var6 = var7.bind(var5)(var6);
                    var5 = var6.now;
                    var5 = var5.bind(var6)();
                    var0.t = var5;
                    var0.seq_ack = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 232:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'stopHeartbeater';
        var4.key = var6;
        var6 = function() {
            _fun93591: for (var _fun93591_ip = 0;;) switch (_fun93591_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.heartbeater;
                    var0 = null;
                    if (!(var0 !== var2)) {
                        _fun93591_ip = 42;
                        continue _fun93591
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearInterval;
                    var3 = var1.heartbeater;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.heartbeater = var0;
                case 42:
                    var2 = var1.expeditedHeartbeatTimeout;
                    if (!(var0 !== var2)) {
                        _fun93591_ip = 79;
                        continue _fun93591
                    }
                case 52:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.expeditedHeartbeatTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.expeditedHeartbeatTimeout = var0;
                case 79:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'connect';
        var4.key = var6;
        var6 = function() {
            _fun93592: for (var _fun93592_ip = 0;;) switch (_fun93592_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.connectionState;
                    var2 = _closure1_slot14;
                    var2 = var2.DISCONNECTED;
                    if (!(var3 === var2)) {
                        _fun93592_ip = 77;
                        continue _fun93592
                    }
                case 26:
                    var2 = _closure1_slot14;
                    var2 = var2.CONNECTING;
                    var1.connectionState = var2;
                    var2 = var1.createWebSocket;
                    var2 = var2.bind(var1)();
                    var2 = var1.emit;
                    var0 = _closure1_slot18;
                    var0 = var0.Connecting;
                    var0 = var2.bind(var1)(var0);
                    var0 = true;
                    _fun93592_ip = 101;
                    continue _fun93592;
                case 77:
                    var3 = var1.logger;
                    var2 = var3.error;
                    var1 = 'Cannot start a new connection, connection state is not disconnected';
                    var1 = var2.bind(var3)(var1);
                    var0 = false;
                case 101:
                    return var0;
            }
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'identify';
        var4.key = var6;
        var6 = function arg0() {
            _fun93593: for (var _fun93593_ip = 0;;) switch (_fun93593_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var13 = var1.serverId;
                    var12 = var1.channelId;
                    var11 = var1.userId;
                    var10 = var1.sessionId;
                    var9 = var1.token;
                    var8 = var1.maxDaveProtocolVersion;
                    var7 = var1.video;
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun93593_ip = 54;
                        continue _fun93593
                    }
                case 52:
                    var7 = false;
                case 54:
                    var6 = var1.streamParameters;
                    var4.serverId = var13;
                    var4.channelId = var12;
                    var4.sessionId = var10;
                    var4.token = var9;
                    var1 = _closure1_slot14;
                    var1 = var1.IDENTIFYING;
                    var4.connectionState = var1;
                    var3 = var4.send;
                    var1 = _closure1_slot12;
                    var2 = var1.IDENTIFY;
                    var1 = {};
                    var1.server_id = var13;
                    var1.channel_id = var12;
                    var1.user_id = var11;
                    var1.session_id = var10;
                    var1.token = var9;
                    var1.max_dave_protocol_version = var8;
                    var1.video = var7;
                    var5 = _closure1_slot22;
                    var5 = var5.bind(var0)(var6);
                    var1.streams = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'expeditedHeartbeat';
        var4.key = var6;
        var6 = function arg0() {
            _fun93594: for (var _fun93594_ip = 0;;) switch (_fun93594_ip) {
                case 0:
                    var8 = arguments[1];
                    var2 = arguments[2];
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var4 = undefined;
                    if (!(var8 === var4)) {
                        _fun93594_ip = 25;
                        continue _fun93594
                    }
                case 21:
                    var8 = '';
                case 25:
                    if (!(var2 === var4)) {
                        _fun93594_ip = 31;
                        continue _fun93594
                    }
                case 29:
                    var2 = true;
                case 31:
                    var5 = var1.webSocket;
                    var3 = null;
                    if (!(var3 == var5)) {
                        _fun93594_ip = 109;
                        continue _fun93594
                    }
                case 43:
                    if (var2) {
                        _fun93594_ip = 96;
                        continue _fun93594
                    }
                case 46:
                    var6 = var1.logger;
                    var5 = var6.info;
                    var7 = '';
                    if (!(var7 !== var8)) {
                        _fun93594_ip = 76;
                        continue _fun93594
                    }
                case 66:
                    var2 = 'reason: ';
                    var7 = var2 + var8;
                case 76:
                    var2 = 'Expedited heartbeat requested, but is disconnected and a reset was not requested ';
                    var2 = var2 + var7;
                    var2 = var5.bind(var6)(var2);
                    _fun93594_ip = 231;
                    continue _fun93594;
                case 96:
                    var2 = var1.resetBackoff;
                    var2 = var2.bind(var1)(var8);
                    return var2;
                case 109:
                    var6 = var1.logger;
                    var5 = var6.info;
                    var7 = '';
                    if (!(var7 !== var8)) {
                        _fun93594_ip = 139;
                        continue _fun93594
                    }
                case 129:
                    var2 = 'reason: ';
                    var7 = var2 + var8;
                case 139:
                    var2 = 'Performing an expedited heartbeat ';
                    var2 = var2 + var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = false;
                    var1.heartbeatAck = var2;
                    var2 = var1.sendHeartbeat;
                    var2 = var2.bind(var1)();
                    var2 = var1.expeditedHeartbeatTimeout;
                    if (!(var3 !== var2)) {
                        _fun93594_ip = 201;
                        continue _fun93594
                    }
                case 182:
                    var2 = global;
                    var3 = var2.clearTimeout;
                    var2 = var1.expeditedHeartbeatTimeout;
                    var2 = var3.bind(var4)(var2);
                case 201:
                    var2 = global;
                    var3 = var2.setTimeout;
                    var2 = function() { // Environment: var0
                        _fun93595: for (var _fun93595_ip = 0;;) switch (_fun93595_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = null;
                                var1.expeditedHeartbeatTimeout = var2;
                                var2 = var1.heartbeatAck;
                                var1 = false;
                                if (!(var1 === var2)) {
                                    _fun93595_ip = 41;
                                    continue _fun93595
                                }
                            case 27:
                                var1 = _closure3_slot0;
                                var0 = var1.handleHeartbeatTimeout;
                                var0 = var0.bind(var1)();
                            case 41:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = arg0;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.expeditedHeartbeatTimeout = var0;
                case 231:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'resetBackoff';
        var4.key = var6;
        var6 = function() {
            _fun93596: for (var _fun93596_ip = 0;;) switch (_fun93596_ip) {
                case 0:
                    var6 = arguments[0];
                    var5 = this;
                    var0 = undefined;
                    if (!(var6 === var0)) {
                        _fun93596_ip = 16;
                        continue _fun93596
                    }
                case 12:
                    var6 = '';
                case 16:
                    var0 = var5.backoff;
                    var1 = var0.fails;
                    var0 = 0;
                    var0 = var1 > var0;
                    if (!var0) {
                        _fun93596_ip = 49;
                        continue _fun93596
                    }
                case 37:
                    var2 = var5.webSocket;
                    var1 = null;
                    var0 = var1 == var2;
                case 49:
                    if (!var0) {
                        _fun93596_ip = 149;
                        continue _fun93596
                    }
                case 52:
                    var3 = var5.logger;
                    var2 = var3.info;
                    var4 = '';
                    if (!(var4 !== var6)) {
                        _fun93596_ip = 82;
                        continue _fun93596
                    }
                case 72:
                    var1 = 'for reason: ';
                    var4 = var1 + var6;
                case 82:
                    var1 = 'Connection backoff reset ';
                    var1 = var1 + var4;
                    var1 = var2.bind(var3)(var1);
                    var2 = var5.backoff;
                    var1 = var2.succeed;
                    var1 = var1.bind(var2)();
                    var4 = var5.reconnect;
                    var1 = _closure1_slot13;
                    var3 = var1.RESET_BACKOFF;
                    var2 = false;
                    var1 = 'Reset backoff.';
                    var1 = var4.bind(var5)(var2, var3, var1);
                    var0 = true;
                case 149:
                    return var0;
            }
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'close';
        var4.key = var6;
        var6 = function() {
            var5 = this;
            var2 = var5.logger;
            var1 = var2.info;
            var0 = 'CLOSE';
            var0 = var1.bind(var2)(var0);
            var1 = var5.cleanupWebSocket;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = var2.close;
                var0 = 4000;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var5)(var0);
            var0 = var5.cleanupState;
            var0 = var0.bind(var5)();
            var1 = _closure1_slot14;
            var1 = var1.DISCONNECTED;
            var5.connectionState = var1;
            var4 = var5.emit;
            var0 = _closure1_slot18;
            var9 = var0.Disconnect;
            var8 = true;
            var7 = 1000;
            var6 = 'Force Close';
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'destroy';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.close;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'selectProtocol';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun93600: for (var _fun93600_ip = 0;;) switch (_fun93600_ip) {
                case 0:
                    var6 = arg1;
                    var2 = arg2;
                    var3 = this;
                    var1 = {};
                    var8 = null;
                    var0 = var8 == var2;
                    var5 = null;
                    var4 = var1;
                    if (var0) {
                        _fun93600_ip = 329;
                        continue _fun93600
                    }
                case 28:
                    var0 = 'sdp';
                    var0 = var0 in var2;
                    if (!var0) {
                        _fun93600_ip = 66;
                        continue _fun93600
                    }
                case 39:
                    var0 = var2.sdp;
                    if (!(var8 != var0)) {
                        _fun93600_ip = 66;
                        continue _fun93600
                    }
                case 49:
                    var7 = var2.sdp;
                    var0 = '';
                    if (!(var0 === var7)) {
                        _fun93600_ip = 270;
                        continue _fun93600
                    }
                case 66:
                    var0 = 'address';
                    var0 = var0 in var2;
                    if (!var0) {
                        _fun93600_ip = 87;
                        continue _fun93600
                    }
                case 77:
                    var7 = var2.address;
                    var0 = var8 != var7;
                case 87:
                    if (!var0) {
                        _fun93600_ip = 104;
                        continue _fun93600
                    }
                case 90:
                    var9 = var2.address;
                    var7 = '';
                    var0 = var7 !== var9;
                case 104:
                    if (!var0) {
                        _fun93600_ip = 128;
                        continue _fun93600
                    }
                case 107:
                    var7 = global;
                    var10 = var7.Boolean;
                    var9 = var2.port;
                    var7 = undefined;
                    var0 = var10.bind(var7)(var9);
                case 128:
                    if (!var0) {
                        _fun93600_ip = 140;
                        continue _fun93600
                    }
                case 131:
                    var7 = var2.mode;
                    var0 = var8 != var7;
                case 140:
                    if (!var0) {
                        _fun93600_ip = 156;
                        continue _fun93600
                    }
                case 143:
                    var8 = var2.mode;
                    var7 = '';
                    var0 = var7 !== var8;
                case 156:
                    var9 = undefined;
                    var5 = undefined;
                    var4 = var1;
                    if (!var0) {
                        _fun93600_ip = 329;
                        continue _fun93600
                    }
                case 169:
                    var1 = {};
                    var0 = var2.address;
                    var1.address = var0;
                    var0 = var2.port;
                    var1.port = var0;
                    var0 = var2.mode;
                    var1.mode = var0;
                    var0 = {};
                    var12 = var0;
                    var11 = var2;
                    var7 = copyDataProperties(var12, var11);
                    var8 = _closure1_slot21;
                    var7 = var2.codecs;
                    var8 = var8.bind(var9)(var7);
                    var7 = 'codecs';
                    var0[var7] = var8;
                    var7 = 'rtc_connection_id';
                    var0[var7] = var6;
                    var8 = arg3;
                    var7 = 'experiments';
                    var0[var7] = var8;
                    var5 = var1;
                    var4 = var0;
                    _fun93600_ip = 329;
                    continue _fun93600;
                case 270:
                    var5 = var2.sdp;
                    var0 = {};
                    var12 = var0;
                    var11 = var2;
                    var7 = copyDataProperties(var12, var11);
                    var8 = _closure1_slot21;
                    var7 = var2.codecs;
                    var2 = undefined;
                    var7 = var8.bind(var2)(var7);
                    var2 = 'codecs';
                    var0[var2] = var7;
                    var2 = 'rtc_connection_id';
                    var0[var2] = var6;
                    var4 = var0;
                case 329:
                    var2 = var3.send;
                    var0 = _closure1_slot12;
                    var1 = var0.SELECT_PROTOCOL;
                    var0 = {};
                    var6 = arg0;
                    var0.protocol = var6;
                    var0.data = var5;
                    var12 = var0;
                    var11 = var4;
                    var4 = copyDataProperties(var12, var11);
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'updateSession';
        var4.key = var6;
        var6 = function arg0() {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot12;
            var2 = var1.SESSION_UPDATE;
            var1 = {};
            var6 = _closure1_slot21;
            var0 = arg0;
            var5 = var0.codecs;
            var0 = undefined;
            var5 = var6.bind(var0)(var5);
            var1.codecs = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'speaking';
        var4.key = var6;
        var6 = function arg0() {
            _fun93602: for (var _fun93602_ip = 0;;) switch (_fun93602_ip) {
                case 0:
                    var9 = arg0;
                    var6 = arguments[1];
                    var5 = arguments[2];
                    var4 = this;
                    var0 = undefined;
                    if (!(var6 === var0)) {
                        _fun93602_ip = 20;
                        continue _fun93602
                    }
                case 18:
                    var6 = 0;
                case 20:
                    if (!(var5 === var0)) {
                        _fun93602_ip = 26;
                        continue _fun93602
                    }
                case 24:
                    var5 = 0;
                case 26:
                    var3 = var4.send;
                    var1 = _closure1_slot12;
                    var2 = var1.SPEAKING;
                    var1 = {};
                    var10 = var4.serverVersion;
                    var8 = 3;
                    var7 = var9;
                    if (!(var10 <= var8)) {
                        _fun93602_ip = 76;
                        continue _fun93602
                    }
                case 63:
                    var8 = global;
                    var8 = var8.Boolean;
                    var7 = var8.bind(var0)(var9);
                case 76:
                    var1.speaking = var7;
                    var1.delay = var6;
                    var1.ssrc = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'video';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            var4 = this;
            var3 = var4.send;
            var1 = _closure1_slot12;
            var2 = var1.VIDEO;
            var1 = {};
            var5 = arg0;
            var1.audio_ssrc = var5;
            var5 = arg1;
            var1.video_ssrc = var5;
            var5 = arg2;
            var1.rtx_ssrc = var5;
            var6 = _closure1_slot22;
            var0 = undefined;
            var5 = arg3;
            var5 = var6.bind(var0)(var5);
            var1.streams = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'mediaSinkWants';
        var4.key = var6;
        var6 = function arg0() {
            _fun93604: for (var _fun93604_ip = 0;;) switch (_fun93604_ip) {
                case 0:
                    var3 = this;
                    var1 = var3.serverVersion;
                    var0 = 5;
                    if (!(var1 >= var0)) {
                        _fun93604_ip = 44;
                        continue _fun93604
                    }
                case 16:
                    var2 = var3.send;
                    var0 = _closure1_slot12;
                    var1 = var0.MEDIA_SINK_WANTS;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'secureFramesReadyForTransition';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var2 = var3.send;
            var0 = _closure1_slot12;
            var1 = var0.DAVE_PROTOCOL_READY_FOR_TRANSITION;
            var0 = {};
            var4 = arg0;
            var0.transition_id = var4;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'sendMLSKeyPackage';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var2 = var3.logger;
            var1 = var2.info;
            var0 = 'Sending MLS key package';
            var0 = var1.bind(var2)(var0);
            var2 = var3.sendBinary;
            var0 = _closure1_slot12;
            var1 = var0.MLS_KEY_PACKAGE;
            var0 = global;
            var5 = var0.Uint8Array;
            var0 = var5.prototype;
            var4 = Object.create(var0, {
                constructor: {
                    value: var5
                }
            });
            var7 = arg0;
            var8 = var4;
            var0 = new var8[var5](var7, var6);
            var0 = var0 instanceof Object ? var0 : var4;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[33] = var4;
        var4 = {};
        var6 = 'sendMLSCommitWelcome';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var2 = var3.logger;
            var1 = var2.info;
            var0 = 'Sending MLS commit + welcome message';
            var0 = var1.bind(var2)(var0);
            var2 = var3.sendBinary;
            var0 = _closure1_slot12;
            var1 = var0.MLS_COMMIT_WELCOME;
            var0 = global;
            var5 = var0.Uint8Array;
            var0 = var5.prototype;
            var4 = Object.create(var0, {
                constructor: {
                    value: var5
                }
            });
            var7 = arg0;
            var8 = var4;
            var0 = new var8[var5](var7, var6);
            var0 = var0 instanceof Object ? var0 : var4;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[34] = var4;
        var4 = {};
        var6 = 'flagMLSInvalidCommitWelcome';
        var4.key = var6;
        var6 = function arg0() {
            var3 = this;
            var2 = var3.send;
            var0 = _closure1_slot12;
            var1 = var0.MLS_INVALID_COMMIT_WELCOME;
            var0 = {};
            var4 = arg0;
            var0.transition_id = var4;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[35] = var4;
        var4 = {};
        var6 = 'noRoute';
        var4.key = var6;
        var6 = function() {
            var3 = this;
            var2 = var3.send;
            var0 = _closure1_slot12;
            var1 = var0.CLIENT_CANNOT_REACH_RTC_SERVER;
            var0 = {};
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[36] = var4;
        var4 = {};
        var6 = 'setHeartbeatIntervalModifier';
        var4.key = var6;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.heartbeatIntervalModifier = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[37] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var8);
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'lib/RTCControlSocket.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.RTCSocketOpcode = var3;
    var2.SocketEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 803, 3471, 667, 561, 3, 3490, 478, 44, 3668, 2]);