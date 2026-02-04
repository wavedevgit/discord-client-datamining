// lib/RTCConnection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun31328: for (var _fun31328_ip = 0;;) switch (_fun31328_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var0 = metroImportAll;
            var _closure1_slot2 = var0;
            var _closure1_slot3 = var5;
            var0 = function arg0, arg1() {
                _fun31329: for (var _fun31329_ip = 0;;) switch (_fun31329_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var4 = global;
                        var1 = var4.Symbol;
                        var3 = 'undefined';
                        var1 = typeof var1;
                        var1 = var3 !== var1;
                        if (!var1) {
                            _fun31329_ip = 46;
                            continue _fun31329
                        }
                    case 30:
                        var3 = var4.Symbol;
                        var3 = var3.iterator;
                        var1 = var2[var3];
                    case 46:
                        if (var1) {
                            _fun31329_ip = 55;
                            continue _fun31329
                        }
                    case 49:
                        var1 = var2["@@iterator"];
                    case 55:
                        if (var1) {
                            _fun31329_ip = 343;
                            continue _fun31329
                        }
                    case 61:
                        var5 = var4.Array;
                        var3 = var5.isArray;
                        var5 = var3.bind(var5)(var2);
                        var3 = var1;
                        if (var5) {
                            _fun31329_ip = 323;
                            continue _fun31329
                        }
                    case 86:
                        var7 = undefined;
                        var5 = undefined;
                        if (!var2) {
                            _fun31329_ip = 283;
                            continue _fun31329
                        }
                    case 96:
                        var8 = 'string';
                        var6 = typeof var2;
                        if (!(var8 !== var6)) {
                            _fun31329_ip = 270;
                            continue _fun31329
                        }
                    case 110:
                        var6 = {};
                        var8 = var6.toString;
                        var6 = var8.call;
                        var10 = var6.bind(var8)(var2);
                        var9 = var10.slice;
                        var8 = 8;
                        var6 = -1;
                        var8 = var9.bind(var10)(var8, var6);
                        var6 = 'Object';
                        var6 = var6 === var8;
                        if (!var6) {
                            _fun31329_ip = 163;
                            continue _fun31329
                        }
                    case 158:
                        var6 = var2.constructor;
                    case 163:
                        var9 = var8;
                        if (!var6) {
                            _fun31329_ip = 179;
                            continue _fun31329
                        }
                    case 169:
                        var6 = var2.constructor;
                        var9 = var6.name;
                    case 179:
                        var6 = 'Map';
                        if (!(var6 !== var9)) {
                            _fun31329_ip = 249;
                            continue _fun31329
                        }
                    case 187:
                        var6 = 'Set';
                        if (!(var6 !== var9)) {
                            _fun31329_ip = 249;
                            continue _fun31329
                        }
                    case 195:
                        var6 = 'Arguments';
                        if (!(var6 !== var9)) {
                            _fun31329_ip = 234;
                            continue _fun31329
                        }
                    case 205:
                        var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                        var6 = var8.test;
                        var8 = var6.bind(var8)(var9);
                        var6 = undefined;
                        if (!var8) {
                            _fun31329_ip = 247;
                            continue _fun31329
                        }
                    case 234:
                        var8 = _closure1_slot37;
                        var6 = var8.bind(var7)(var2, var7);
                    case 247:
                        _fun31329_ip = 265;
                        continue _fun31329;
                    case 249:
                        var9 = var4.Array;
                        var8 = var9.from;
                        var6 = var8.bind(var9)(var2);
                    case 265:
                        var5 = var6;
                        _fun31329_ip = 283;
                        continue _fun31329;
                    case 270:
                        var6 = _closure1_slot37;
                        var5 = var6.bind(var7)(var2, var7);
                    case 283:
                        var3 = var5;
                        if (var3) {
                            _fun31329_ip = 323;
                            continue _fun31329
                        }
                    case 289:
                        var6 = var4.TypeError;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                        var13 = var5;
                        var4 = new var13[var6](var12, var11);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 323:
                        if (!var3) {
                            _fun31329_ip = 330;
                            continue _fun31329
                        }
                    case 326:
                        _closure2_slot0 = var3;
                    case 330:
                        var3 = 0;
                        var _closure2_slot1 = var3;
                        var0 = function() { // Environment: var0
                            _fun31330: for (var _fun31330_ip = 0;;) switch (_fun31330_ip) {
                                case 0:
                                    var1 = _closure2_slot1;
                                    var0 = _closure2_slot0;
                                    var0 = var0.length;
                                    if (!(!(var1 >= var0))) {
                                        _fun31330_ip = 56;
                                        continue _fun31330
                                    }
                                case 20:
                                    var0 = {};
                                    var1 = false;
                                    var0.done = var1;
                                    var2 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    var1 = parseFloat(var1);
                                    var3 = var1 + 1;
                                    _closure2_slot1 = var3;
                                    var1 = var2[var1];
                                    var0.value = var1;
                                    _fun31330_ip = 67;
                                    continue _fun31330;
                                case 56:
                                    var1 = {};
                                    var2 = true;
                                    var1.done = var2;
                                    var0 = var1;
                                case 67:
                                    return var0;
                            }
                        };
                        return var0;
                    case 343:
                        var0 = var1.call;
                        var2 = var0.bind(var1)(var2);
                        var1 = var2.next;
                        var0 = var1.bind;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot36 = var0;
            var0 = function arg0, arg1() {
                _fun31331: for (var _fun31331_ip = 0;;) switch (_fun31331_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = null;
                        var2 = undefined;
                        var0 = var0 == var2;
                        if (var0) {
                            _fun31331_ip = 23;
                            continue _fun31331
                        }
                    case 14:
                        var1 = var3.length;
                        var0 = var2 > var1;
                    case 23:
                        var1 = undefined;
                        if (!var0) {
                            _fun31331_ip = 33;
                            continue _fun31331
                        }
                    case 28:
                        var1 = var3.length;
                    case 33:
                        var0 = global;
                        var0 = var0.Array;
                        var0 = var0.bind(var2)(var1);
                        var2 = 0;
                        var4 = var2 < var1;
                        if (!var4) {
                            _fun31331_ip = 70;
                            continue _fun31331
                        }
                    case 55:
                        var4 = var3[var2];
                        var0[var2] = var4;
                        var2 = var2 + 1;
                        if (var2 < var1) {
                            _fun31331_ip = 55;
                            continue _fun31331
                        }
                    case 70:
                        return var0;
                }
            };
            var _closure1_slot37 = var0;
            var0 = function() {
                _fun31332: for (var _fun31332_ip = 0;;) switch (_fun31332_ip) {
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
                        _fun31332_ip = 74;
                        continue _fun31332;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot38 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot38 = var0;
            var0 = function() {
                _fun31335: for (var _fun31335_ip = 0;;) switch (_fun31335_ip) {
                    case 0:
                        var2 = new Array(0);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 19;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.now;
                        var5 = var1.bind(var3)();
                        var4 = _closure1_slot35;
                        var0 = var4.length;
                        var3 = 0;
                        var0 = var3 < var0;
                        var1 = 't';
                        if (!var0) {
                            _fun31335_ip = 112;
                            continue _fun31335
                        }
                    case 60:
                        var7 = var4[var3];
                        var6 = var2.push;
                        var0 = {};
                        var10 = var0;
                        var9 = var7;
                        var8 = copyDataProperties(var10, var9);
                        var7 = var7.t;
                        var7 = var5 - var7;
                        var0[var1] = var7;
                        var0 = var6.bind(var2)(var0);
                        var3 = var3 + 1;
                        var0 = var4.length;
                        if (var3 < var0) {
                            _fun31335_ip = 60;
                            continue _fun31335
                        }
                    case 112:
                        var0 = global;
                        var1 = var0.JSON;
                        var0 = var1.stringify;
                        var0 = var0.bind(var1)(var2);
                        return var0;
                }
            };
            var _closure1_slot39 = var0;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var3);
            var3 = 0;
            var7 = var5[var3];
            var0 = undefined;
            var7 = var6.bind(var0)(var7);
            var _closure1_slot4 = var7;
            var19 = 1;
            var7 = var5[var19];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot5 = var7;
            var18 = 2;
            var7 = var5[var18];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot6 = var7;
            var17 = 3;
            var7 = var5[var17];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot7 = var7;
            var16 = 4;
            var7 = var5[var16];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot8 = var7;
            var15 = 5;
            var7 = var5[var15];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot9 = var7;
            var14 = 6;
            var7 = var5[var14];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot10 = var7;
            var13 = 7;
            var7 = var5[var13];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot11 = var7;
            var12 = 8;
            var7 = var5[var12];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot12 = var7;
            var11 = 9;
            var7 = var5[var11];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot13 = var7;
            var10 = 10;
            var7 = var5[var10];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot14 = var7;
            var9 = 11;
            var7 = var5[var9];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot15 = var7;
            var7 = 12;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot16 = var7;
            var7 = 13;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot17 = var7;
            var7 = 14;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot18 = var7;
            var7 = 15;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot19 = var7;
            var7 = 16;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var8 = var7.AnalyticEvents;
            var _closure1_slot20 = var8;
            var8 = var7.ChannelTypes;
            var _closure1_slot21 = var8;
            var8 = var7.RTCConnectionStates;
            var _closure1_slot22 = var8;
            var7 = var7.RTCConnectionQuality;
            var _closure1_slot23 = var7;
            var7 = 17;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var7 = var7.BROWSER_SUPPORTS_UNIFIED_PLAN;
            var _closure1_slot24 = var7;
            var7 = 18;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var8 = var7.Features;
            var _closure1_slot25 = var8;
            var8 = var7.MediaEngineContextTypes;
            var _closure1_slot26 = var8;
            var8 = var7.ConnectionStates;
            var _closure1_slot27 = var8;
            var8 = var7.Codecs;
            var _closure1_slot28 = var8;
            var8 = var7.MediaTypes;
            var _closure1_slot29 = var8;
            var8 = var7.SpeakingFlags;
            var _closure1_slot30 = var8;
            var7 = var7.DISABLED_DEVICE_ID;
            var _closure1_slot31 = var7;
            var20 = /^https/;
            var8 = var20.test;
            var7 = 'https:';
            var8 = var8.bind(var20)(var7);
            var7 = 'ws:';
            if (!var8) {
                _fun31328_ip = 556;
                continue _fun31328
            }
        case 550:
            var7 = 'wss:';
        case 556:
            var _closure1_slot32 = var7;
            var7 = {};
            var7.CONNECTION_CREATE = var3;
            var8 = 'CONNECTION_CREATE';
            var7[var3] = var8;
            var7.CONNECTION_DESTROY = var19;
            var8 = 'CONNECTION_DESTROY';
            var7[var19] = var8;
            var7.CONNECT = var18;
            var8 = 'CONNECT';
            var7[var18] = var8;
            var7.MLS_FAILURE = var17;
            var8 = 'MLS_FAILURE';
            var7[var17] = var8;
            var7.MESSAGE_RECEIVE = var16;
            var8 = 'MESSAGE_RECEIVE';
            var7[var16] = var8;
            var7.MESSAGE_SEND = var15;
            var8 = 'MESSAGE_SEND';
            var7[var15] = var8;
            var7.SET_ENDPOINT = var14;
            var8 = 'SET_ENDPOINT';
            var7[var14] = var8;
            var7.RECONNECT = var13;
            var8 = 'RECONNECT';
            var7[var13] = var8;
            var7.SET_STATE = var12;
            var8 = 'SET_STATE';
            var7[var12] = var8;
            var7.SET_NEXT_CHANNEL_ID = var11;
            var8 = 'SET_NEXT_CHANNEL_ID';
            var7[var11] = var8;
            var7.MLS_INIT = var10;
            var8 = 'MLS_INIT';
            var7[var10] = var8;
            var7.SECURE_FRAMES_INIT = var9;
            var8 = 'SECURE_FRAMES_INIT';
            var7[var9] = var8;
            var _closure1_slot33 = var7;
            var _closure1_slot34 = var3;
            var3 = new Array(0);
            var _closure1_slot35 = var3;
            var3 = 65;
            var3 = var5[var3];
            var3 = var6.bind(var0)(var3);
            var1 = function(arg0) { // Environment: var1
                var3 = function arg0() {
                    _fun31337: for (var _fun31337_ip = 0;;) switch (_fun31337_ip) {
                        case 0:
                            var0 = arg0;
                            var7 = this;
                            var13 = var0.userId;
                            var18 = var0.sessionId;
                            var16 = var0.guildId;
                            var17 = var0.channelId;
                            var8 = var0.context;
                            var6 = undefined;
                            if (!(var8 === var6)) {
                                _fun31337_ip = 53;
                                continue _fun31337
                            }
                        case 40:
                            var2 = _closure1_slot26;
                            var8 = var2.DEFAULT;
                        case 53:
                            var12 = var0.streamServerId;
                            var11 = var0.streamChannelId;
                            var4 = var0.parentMediaSessionId;
                            var3 = var0.joinVoiceId;
                            var _closure3_slot0 = var6;
                            var0 = _closure1_slot5;
                            var5 = _closure2_slot0;
                            var0 = var0.bind(var6)(var7, var5);
                            var0 = _closure1_slot8;
                            var19 = var0.bind(var6)(var5);
                            var5 = _closure1_slot7;
                            var0 = _closure1_slot38;
                            var0 = var0.bind(var6)();
                            if (var0) {
                                _fun31337_ip = 138;
                                continue _fun31337
                            }
                        case 125:
                            var0 = var19.apply;
                            var0 = var0.bind(var19)(var7, var6);
                            _fun31337_ip = 176;
                            continue _fun31337;
                        case 138:
                            var9 = global;
                            var15 = var9.Reflect;
                            var14 = var15.construct;
                            var9 = _closure1_slot8;
                            var9 = var9.bind(var6)(var7);
                            var10 = var9.constructor;
                            var9 = new Array(0);
                            var0 = var14.bind(var15)(var19, var9, var10);
                        case 176:
                            var0 = var5.bind(var6)(var7, var0);
                            _closure3_slot0 = var0;
                            var9 = global;
                            var5 = var9.Map;
                            var7 = var5.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var5
                                }
                            });
                            var26 = var7;
                            var5 = new var26[var5](var25);
                            var5 = var5 instanceof Object ? var5 : var7;
                            var0._secureFramesRosterMap = var5;
                            var7 = false;
                            var0.reconnecting = var7;
                            var5 = 0;
                            var0._nextFailureId = var5;
                            var10 = new Array(0);
                            var0._mlsFailures = var10;
                            var10 = var9.Map;
                            var14 = var10.prototype;
                            var14 = Object.create(var14, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var26 = var14;
                            var10 = new var26[var10](var25);
                            var10 = var10 instanceof Object ? var10 : var14;
                            var0._secureFramesTransitionStates = var10;
                            var0._secureFramesMaxConcurrentTransitions = var5;
                            var0._secureFramesTransitionPrepareCount = var5;
                            var0._secureFramesTransitionExecuteCount = var5;
                            var0._numNoiseCancellationChanges = var5;
                            var10 = function() { // Environment: var1
                                _fun31338: for (var _fun31338_ip = 0;;) switch (_fun31338_ip) {
                                    case 0:
                                        var4 = _closure3_slot0;
                                        var3 = var4.recordEvent;
                                        var1 = {};
                                        var5 = _closure1_slot33;
                                        var5 = var5.RECONNECT;
                                        var1.c = var5;
                                        var1 = var3.bind(var4)(var1);
                                        var1 = _closure3_slot0;
                                        var1 = var1._socket;
                                        var3 = null;
                                        if (!(var3 != var1)) {
                                            _fun31338_ip = 212;
                                            continue _fun31338
                                        }
                                    case 56:
                                        var3 = _closure3_slot0;
                                        var3 = var3._connected;
                                        if (!var3) {
                                            _fun31338_ip = 110;
                                            continue _fun31338
                                        }
                                    case 69:
                                        var3 = _closure3_slot0;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot3;
                                        var2 = 19;
                                        var4 = var4[var2];
                                        var2 = undefined;
                                        var4 = var5.bind(var2)(var4);
                                        var2 = var4.now;
                                        var2 = var2.bind(var4)();
                                        var3._connectStartTime = var2;
                                    case 110:
                                        var2 = _closure3_slot0;
                                        var2 = var2._connecting;
                                        if (var2) {
                                            _fun31338_ip = 161;
                                            continue _fun31338
                                        }
                                    case 123:
                                        var3 = _closure3_slot0;
                                        var2 = var3._trackVoiceConnectionConnecting;
                                        var2 = var2.bind(var3)();
                                        var3 = _closure3_slot0;
                                        var2 = true;
                                        var3._connecting = var2;
                                        var3 = _closure3_slot0;
                                        var2 = false;
                                        var3._encountered_socket_failure = var2;
                                    case 161:
                                        var3 = _closure3_slot0;
                                        var2 = var3._connectCount;
                                        var2 = var2 + 1;
                                        var3._connectCount = var2;
                                        var2 = _closure3_slot0;
                                        var0 = true;
                                        var2.reconnecting = var0;
                                        var0 = var1.close;
                                        var0 = var0.bind(var1)();
                                        var0 = var1.connect;
                                        var0 = var0.bind(var1)();
                                    case 212:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.reconnect = var10;
                            var15 = _closure1_slot1;
                            var14 = _closure1_slot3;
                            var10 = 20;
                            var10 = var14[var10];
                            var20 = var15.bind(var6)(var10);
                            var19 = var0._alertMLSFailure;
                            var10 = 100;
                            var10 = var20.bind(var6)(var19, var10);
                            var0._alertMLSFailureDebouced = var10;
                            var10 = function() { // Environment: var1
                                var3 = _closure3_slot0;
                                var2 = var3.expeditedHeartbeat;
                                var1 = 5000;
                                var0 = 'network detected online.';
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0._handleNetworkOnline = var10;
                            var10 = function() { // Environment: var1
                                var4 = _closure3_slot0;
                                var3 = var4.expeditedHeartbeat;
                                var2 = 15000;
                                var1 = 'network detected offline.';
                                var0 = false;
                                var0 = var3.bind(var4)(var2, var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0._handleNetworkOffline = var10;
                            var10 = function() { // Environment: var1
                                _fun31341: for (var _fun31341_ip = 0;;) switch (_fun31341_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var1 = var0._socket;
                                        var0 = null;
                                        if (!(var0 != var1)) {
                                            _fun31341_ip = 31;
                                            continue _fun31341
                                        }
                                    case 19:
                                        var0 = var1.noRoute;
                                        var0 = var0.bind(var1)();
                                    case 31:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._handleNoRoute = var10;
                            var10 = function() { // Environment: var1
                                var3 = _closure3_slot0;
                                var2 = var3.expeditedHeartbeat;
                                var1 = 5000;
                                var0 = 'power monitor resumed';
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0._handlePowerResume = var10;
                            var10 = function() { // Environment: var1
                                _fun31343: for (var _fun31343_ip = 0;;) switch (_fun31343_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var2 = var1._voiceQuality;
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun31343_ip = 612;
                                            continue _fun31343
                                        }
                                    case 22:
                                        var1 = _closure3_slot0;
                                        var2 = var1._voiceQuality;
                                        var1 = var2.getPeriodicStats;
                                        var2 = var1.bind(var2)();
                                        var3 = _closure3_slot0;
                                        var1 = var3.shouldReportPeriodicStats;
                                        var1 = var1.bind(var3)(var2);
                                        if (!var1) {
                                            _fun31343_ip = 593;
                                            continue _fun31343
                                        }
                                    case 67:
                                        var1 = _closure1_slot36;
                                        var27 = undefined;
                                        var26 = var1.bind(var27)(var2);
                                        var2 = var26.bind(var27)();
                                        var1 = var2.done;
                                        var25 = 21;
                                        var24 = 'media_session_id';
                                        var23 = 'sender_user_id';
                                        var22 = 'hostname';
                                        var21 = 'frame_op_silent';
                                        var20 = 'frame_op_normal';
                                        var19 = 'frame_op_merged';
                                        var18 = 'frame_op_expanded';
                                        var17 = 'frame_op_accelerated';
                                        var16 = 'frame_op_preemptive_expanded';
                                        var15 = 'frame_op_cng';
                                        var14 = 'accelerate_rate';
                                        var13 = 'expand_rate';
                                        var12 = 'preemptive_expand_rate';
                                        var11 = 'speech_expand_rate';
                                        var10 = 'duration_ms';
                                        var9 = 'sequence_id';
                                        var8 = 'input_device';
                                        var7 = 'output_device';
                                        var6 = global;
                                        var5 = 'ping_average';
                                        var4 = 'ping_bad_count';
                                        var3 = 'parent_media_session_id';
                                        if (var1) {
                                            _fun31343_ip = 593;
                                            continue _fun31343
                                        }
                                    case 215:
                                        var32 = var2.value;
                                        var29 = _closure1_slot1;
                                        var1 = _closure1_slot3;
                                        var1 = var1[var25];
                                        var31 = var29.bind(var27)(var1);
                                        var30 = var31.track;
                                        var1 = _closure1_slot20;
                                        var29 = var1.VOICE_QUALITY_PERIODIC_STATS;
                                        var1 = {};
                                        var34 = _closure3_slot0;
                                        var33 = var34._getAnalyticsProperties;
                                        var36 = var33.bind(var34)();
                                        var37 = var1;
                                        var33 = copyDataProperties(var37, var36);
                                        var34 = _closure3_slot0;
                                        var33 = var34.getMediaSessionId;
                                        var33 = var33.bind(var34)();
                                        var1[var24] = var33;
                                        var33 = var32.userId;
                                        var1[var23] = var33;
                                        var33 = _closure3_slot0;
                                        var33 = var33.hostname;
                                        var1[var22] = var33;
                                        var33 = var32.silent;
                                        var1[var21] = var33;
                                        var33 = var32.normal;
                                        var1[var20] = var33;
                                        var33 = var32.merged;
                                        var1[var19] = var33;
                                        var33 = var32.expanded;
                                        var1[var18] = var33;
                                        var33 = var32.accelerated;
                                        var1[var17] = var33;
                                        var33 = var32.preemptiveExpanded;
                                        var1[var16] = var33;
                                        var33 = var32.cng;
                                        var1[var15] = var33;
                                        var33 = var32.accelerateRate;
                                        var1[var14] = var33;
                                        var33 = var32.expandRate;
                                        var1[var13] = var33;
                                        var33 = var32.preemptiveExpandRate;
                                        var1[var12] = var33;
                                        var33 = var32.speechExpandRate;
                                        var1[var11] = var33;
                                        var32 = var32.durationMs;
                                        var1[var10] = var32;
                                        var32 = _closure3_slot0;
                                        var32 = var32._voiceQualityPeriodicStatsSequenceId;
                                        var1[var9] = var32;
                                        var33 = _closure3_slot0;
                                        var32 = var33.getInputDeviceName;
                                        var32 = var32.bind(var33)();
                                        var1[var8] = var32;
                                        var33 = _closure3_slot0;
                                        var32 = var33.getOutputDeviceName;
                                        var32 = var32.bind(var33)();
                                        var1[var7] = var32;
                                        var34 = var6.Math;
                                        var33 = var34.round;
                                        var35 = _closure3_slot0;
                                        var32 = var35.getAveragePing;
                                        var32 = var32.bind(var35)();
                                        var32 = var33.bind(var34)(var32);
                                        var1[var5] = var32;
                                        var32 = _closure3_slot0;
                                        var32 = var32._pingBadCount;
                                        var1[var4] = var32;
                                        var32 = _closure3_slot0;
                                        var32 = var32.parentMediaSessionId;
                                        var1[var3] = var32;
                                        var1 = var30.bind(var31)(var29, var1);
                                        var29 = var26.bind(var27)();
                                        var1 = var29.done;
                                        var2 = var29;
                                        if (!var1) {
                                            _fun31343_ip = 215;
                                            continue _fun31343
                                        }
                                    case 593:
                                        var1 = _closure3_slot0;
                                        var0 = var1._voiceQualityPeriodicStatsSequenceId;
                                        var0 = var0 + 1;
                                        var1._voiceQualityPeriodicStatsSequenceId = var0;
                                    case 612:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0._handleVoiceQualityPeriodicsStats = var10;
                            var10 = function() { // Environment: var1
                                var0 = {};
                                var3 = _closure3_slot0;
                                var1 = var3.getInputDeviceName;
                                var1 = var1.bind(var3)();
                                var0.input_device = var1;
                                var1 = global;
                                var6 = var1.Object;
                                var5 = var6.keys;
                                var4 = _closure1_slot15;
                                var3 = var4.getInputDevices;
                                var3 = var3.bind(var4)();
                                var3 = var5.bind(var6)(var3);
                                var3 = var3.length;
                                var0.input_device_count = var3;
                                var3 = _closure3_slot0;
                                var2 = var3.getOutputDeviceName;
                                var2 = var2.bind(var3)();
                                var0.output_device = var2;
                                var3 = var1.Object;
                                var2 = var3.keys;
                                var1 = var4.getOutputDevices;
                                var1 = var1.bind(var4)();
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.length;
                                var0.output_device_count = var1;
                                return var0;
                            };
                            var0.getAudioDeviceStates = var10;
                            var10 = function() { // Environment: var1
                                var0 = {};
                                var2 = _closure3_slot0;
                                var1 = var2.getVideoDeviceName;
                                var1 = var1.bind(var2)();
                                var0.camera_device = var1;
                                var1 = global;
                                var3 = var1.Object;
                                var2 = var3.keys;
                                var4 = _closure1_slot15;
                                var1 = var4.getVideoDevices;
                                var1 = var1.bind(var4)();
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.length;
                                var0.camera_device_count = var1;
                                return var0;
                            };
                            var0.getVideoDeviceStates = var10;
                            var10 = function() { // Environment: var1
                                _fun31346: for (var _fun31346_ip = 0;;) switch (_fun31346_ip) {
                                    case 0:
                                        var2 = _closure1_slot14;
                                        var1 = var2.getChannel;
                                        var0 = _closure3_slot0;
                                        var0 = var0.channelId;
                                        var1 = var1.bind(var2)(var0);
                                        var0 = null;
                                        var2 = var0 == var1;
                                        var0 = undefined;
                                        var8 = undefined;
                                        if (var2) {
                                            _fun31346_ip = 47;
                                            continue _fun31346
                                        }
                                    case 42:
                                        var8 = var1.type;
                                    case 47:
                                        var2 = _closure1_slot1;
                                        var3 = _closure1_slot3;
                                        var1 = 21;
                                        var1 = var3[var1];
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.track;
                                        var1 = _closure1_slot20;
                                        var2 = var1.VOICE_CONNECTION_CONNECTING;
                                        var1 = {};
                                        var9 = _closure3_slot0;
                                        var7 = var9.getAudioDeviceStates;
                                        var10 = var7.bind(var9)();
                                        var11 = var1;
                                        var7 = copyDataProperties(var11, var10);
                                        var9 = _closure3_slot0;
                                        var7 = var9.getVideoDeviceStates;
                                        var10 = var7.bind(var9)();
                                        var11 = var1;
                                        var7 = copyDataProperties(var11, var10);
                                        var7 = _closure3_slot0;
                                        var9 = var7.guildId;
                                        var7 = 'guild_id';
                                        var1[var7] = var9;
                                        var7 = _closure3_slot0;
                                        var9 = var7.channelId;
                                        var7 = 'channel_id';
                                        var1[var7] = var9;
                                        var9 = _closure3_slot0;
                                        var7 = var9.getRTCConnectionId;
                                        var9 = var7.bind(var9)();
                                        var7 = 'rtc_connection_id';
                                        var1[var7] = var9;
                                        var7 = _closure3_slot0;
                                        var9 = var7.hostname;
                                        var7 = 'hostname';
                                        var1[var7] = var9;
                                        var7 = _closure3_slot0;
                                        var9 = var7._connectCount;
                                        var7 = 'connect_count';
                                        var1[var7] = var9;
                                        var7 = _closure3_slot0;
                                        var9 = var7.context;
                                        var7 = 'context';
                                        var1[var7] = var9;
                                        var7 = 'channel_type';
                                        var1[var7] = var8;
                                        var8 = _closure3_slot0;
                                        var7 = var8.getVoiceParticipantType;
                                        var8 = var7.bind(var8)();
                                        var7 = 'participant_type';
                                        var1[var7] = var8;
                                        var7 = _closure1_slot15;
                                        var6 = var7.isMute;
                                        var7 = var6.bind(var7)();
                                        var6 = 'is_muted';
                                        var1[var6] = var7;
                                        var6 = _closure3_slot0;
                                        var7 = var6.joinVoiceId;
                                        var6 = 'join_voice_id';
                                        var1[var6] = var7;
                                        var5 = _closure3_slot0;
                                        var6 = var5._connectionSerial;
                                        var5 = 'connection_serial';
                                        var1[var5] = var6;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var0._trackVoiceConnectionConnecting = var10;
                            var10 = function(arg0) { // Environment: var1
                                _fun31347: for (var _fun31347_ip = 0;;) switch (_fun31347_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var0 = _closure3_slot0;
                                        var4 = var0._goLiveQualityManager;
                                        var0 = null;
                                        if (!(var0 != var4)) {
                                            _fun31347_ip = 35;
                                            continue _fun31347
                                        }
                                    case 22:
                                        var3 = var4.onIncomingVideoEnabled;
                                        var3 = var3.bind(var4)(var2);
                                    case 35:
                                        var1 = _closure3_slot0;
                                        var1 = var1._videoQuality;
                                        if (!(var0 != var1)) {
                                            _fun31347_ip = 62;
                                            continue _fun31347
                                        }
                                    case 49:
                                        var0 = var1.setOcclusionIncomingVideoEnabled;
                                        var0 = var0.bind(var1)(var2);
                                    case 62:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.incomingVideoEnabledChanged = var10;
                            var10 = function(arg0) { // Environment: var1
                                _fun31348: for (var _fun31348_ip = 0;;) switch (_fun31348_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var2 = var0._videoQuality;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun31348_ip = 38;
                                            continue _fun31348
                                        }
                                    case 19:
                                        var1 = var2.setWindowOcclusionState;
                                        var0 = arg0;
                                        var0 = !var0;
                                        var0 = var1.bind(var2)(var0);
                                    case 38:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0.windowVisibilityChanged = var10;
                            var0.context = var8;
                            var19 = var0.recordEvent;
                            var10 = {};
                            var20 = _closure1_slot33;
                            var20 = var20.CONNECTION_CREATE;
                            var10.c = var20;
                            var10 = var19.bind(var0)(var10);
                            var10 = _closure1_slot15;
                            var19 = var10.fetchAsyncResources;
                            var21 = var19.bind(var10)();
                            var20 = var21.catch;
                            var19 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var0 = 22;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.captureException;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var19 = var20.bind(var21)(var19);
                            var0._fetchAsyncResourcesPromise = var19;
                            var0.userId = var13;
                            var0.sessionId = var18;
                            var0.guildId = var16;
                            var0._channelId = var17;
                            var18 = var9.Set;
                            var16 = new Array(1);
                            var16[0] = var17;
                            var17 = var18.prototype;
                            var17 = Object.create(var17, {
                                constructor: {
                                    value: var18
                                }
                            });
                            var26 = var17;
                            var25 = var16;
                            var16 = new var26[var18](var25, var24);
                            var16 = var16 instanceof Object ? var16 : var17;
                            var0.channelIds = var16;
                            var0.streamServerId = var12;
                            var0.streamChannelId = var11;
                            var0.parentMediaSessionId = var4;
                            var0.joinVoiceId = var3;
                            var3 = _closure1_slot34;
                            var3 = parseFloat(var3);
                            var4 = var3 + 1;
                            _closure1_slot34 = var4;
                            var0._connectionSerial = var3;
                            var3 = 23;
                            var3 = var14[var3];
                            var11 = var15.bind(var6)(var3);
                            var25 = var0.trueServerId;
                            var23 = var0.context;
                            var3 = var9.HermesInternal;
                            var16 = var3.concat;
                            var26 = 'RTCConnection(';
                            var24 = ', ';
                            var22 = ')';
                            var25 = var26[var16](var25, var24, var23, var22, var21);
                            var4 = var11.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var11
                                }
                            });
                            var26 = var4;
                            var3 = new var26[var11](var25, var24);
                            var3 = var3 instanceof Object ? var3 : var4;
                            var0.logger = var3;
                            var11 = var0.logger;
                            var3 = var11.enableNativeLogger;
                            var4 = true;
                            var3 = var3.bind(var11)(var4);
                            var3 = null;
                            var0._endpoint = var3;
                            var0.hostname = var3;
                            var0.port = var3;
                            var0.token = var3;
                            var0.voiceVersion = var3;
                            var0.rtcWorkerVersion = var3;
                            var11 = _closure1_slot22;
                            var11 = var11.AWAITING_ENDPOINT;
                            var0.state = var11;
                            var12 = _closure1_slot0;
                            var11 = 24;
                            var11 = var14[var11];
                            var11 = var12.bind(var6)(var11);
                            var17 = var11.StateHistory;
                            var25 = var0.state;
                            var16 = var17.prototype;
                            var16 = Object.create(var16, {
                                constructor: {
                                    value: var17
                                }
                            });
                            var26 = var16;
                            var11 = new var26[var17](var25, var24);
                            var11 = var11 instanceof Object ? var11 : var16;
                            var0.stateHistory = var11;
                            var0._socket = var3;
                            var11 = 25;
                            var11 = var14[var11];
                            var17 = var15.bind(var6)(var11);
                            var11 = var17.prototype;
                            var15 = Object.create(var11, {
                                constructor: {
                                    value: var17
                                }
                            });
                            var25 = 1000;
                            var24 = 10000;
                            var26 = var15;
                            var11 = new var26[var17](var25, var24, var23);
                            var11 = var11 instanceof Object ? var11 : var15;
                            var0._backoff = var11;
                            var0._destroyed = var7;
                            var11 = new Array(0);
                            var0._pings = var11;
                            var0._pingBadCount = var5;
                            var11 = new Array(0);
                            var0._pingTimeouts = var11;
                            var0._mediaSessionId = var3;
                            var0._voiceQuality = var3;
                            var0._voiceQualityPeriodicStatsInterval = var3;
                            var0._voiceQualityPeriodicStatsSequenceId = var5;
                            var0._systemResponsiveness = var3;
                            var0._noiseCancellationError = var5;
                            var0._voiceDuration = var3;
                            var0._videoQuality = var3;
                            var0._videoHealthManager = var3;
                            var0._sentVideo = var7;
                            var0._videoDecoderFallbackSuppressed = var7;
                            var0._outboundLossRate = var3;
                            var11 = 19;
                            var11 = var14[var11];
                            var15 = var12.bind(var6)(var11);
                            var11 = var15.now;
                            var11 = var11.bind(var15)();
                            var0._createdTime = var11;
                            var0._connectStartTime = var5;
                            var0._connectCompletedTime = var5;
                            var11 = 26;
                            var11 = var14[var11];
                            var12 = var12.bind(var6)(var11);
                            var11 = var12.v4;
                            var11 = var11.bind(var12)();
                            var0._rtcConnectionId = var11;
                            var0._connectCount = var5;
                            var0._connected = var7;
                            var0._connecting = var7;
                            var0._encountered_socket_failure = var7;
                            var0._inputDetected = var7;
                            var11 = new Array(0);
                            var0._selectedExperiments = var11;
                            var0._secureFramesState = var3;
                            var12 = var9.Set;
                            var9 = new Array(1);
                            var9[0] = var13;
                            var11 = var12.prototype;
                            var11 = Object.create(var11, {
                                constructor: {
                                    value: var12
                                }
                            });
                            var26 = var11;
                            var25 = var9;
                            var9 = new var26[var12](var25, var24);
                            var9 = var9 instanceof Object ? var9 : var11;
                            var0._userIds = var9;
                            var11 = var0._secureFramesRosterMap;
                            var9 = var11.clear;
                            var9 = var9.bind(var11)();
                            var9 = new Array(0);
                            var0._mlsFailures = var9;
                            var0._nextFailureId = var5;
                            var0._mediaEngineConnectionId = var3;
                            var0.reconnecting = var7;
                            var0._lastSentSpeakingStatus = var5;
                            var0._lastSentSSRC = var6;
                            var9 = var10.supports;
                            var5 = _closure1_slot25;
                            var5 = var5.FIRST_FRAME_CALLBACK;
                            var12 = var9.bind(var10)(var5);
                            if (!var12) {
                                _fun31337_ip = 1273;
                                continue _fun31337
                            }
                        case 1248:
                            var10 = _closure1_slot15;
                            var9 = var10.supports;
                            var5 = _closure1_slot25;
                            var5 = var5.REMOTE_USER_MULTI_STREAM;
                            var12 = var9.bind(var10)(var5);
                        case 1273:
                            var5 = _closure1_slot26;
                            var5 = var5.DEFAULT;
                            if (!(var8 !== var5)) {
                                _fun31337_ip = 1452;
                                continue _fun31337
                            }
                        case 1290:
                            var5 = _closure1_slot26;
                            var5 = var5.STREAM;
                            if (!(var8 === var5)) {
                                _fun31337_ip = 1643;
                                continue _fun31337
                            }
                        case 1307:
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot3;
                            var5 = 28;
                            var8 = var11[var5];
                            var8 = var9.bind(var6)(var8);
                            var9 = var8.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var8
                                }
                            });
                            var26 = var9;
                            var25 = true;
                            var8 = new var26[var8](var25, var24);
                            var8 = var8 instanceof Object ? var8 : var9;
                            var0._goLiveQualityManager = var8;
                            var15 = var0._goLiveQualityManager;
                            var14 = var15.on;
                            var8 = _closure1_slot0;
                            var9 = var11[var5];
                            var9 = var8.bind(var6)(var9);
                            var9 = var9.GoLiveQualityManagerEvent;
                            var10 = var9.RequestedSSRCsUpdate;
                            var9 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun31352: for (var _fun31352_ip = 0;;) switch (_fun31352_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var4 = var0._connection;
                                        var0 = null;
                                        if (!(var0 != var4)) {
                                            _fun31352_ip = 41;
                                            continue _fun31352
                                        }
                                    case 19:
                                        var3 = var4.createUser;
                                        var2 = arg0;
                                        var1 = arg1;
                                        var0 = arg2;
                                        var0 = var3.bind(var4)(var2, var1, var0);
                                    case 41:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var9 = var14.bind(var15)(var10, var9);
                            var10 = var0._goLiveQualityManager;
                            var9 = var10.on;
                            var5 = var11[var5];
                            var5 = var8.bind(var6)(var5);
                            var5 = var5.GoLiveQualityManagerEvent;
                            var8 = var5.RequestedStreamsUpdate;
                            var5 = function(arg0) { // Environment: var1
                                _fun31353: for (var _fun31353_ip = 0;;) switch (_fun31353_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var3 = var1.state;
                                        var1 = _closure1_slot22;
                                        var1 = var1.RTC_CONNECTED;
                                        var1 = var3 === var1;
                                        if (!var1) {
                                            _fun31353_ip = 51;
                                            continue _fun31353
                                        }
                                    case 35:
                                        var3 = _closure3_slot0;
                                        var4 = var3._socket;
                                        var3 = null;
                                        var1 = var3 != var4;
                                    case 51:
                                        if (!var1) {
                                            _fun31353_ip = 164;
                                            continue _fun31353
                                        }
                                    case 54:
                                        var1 = _closure3_slot0;
                                        var4 = var1.logger;
                                        var3 = var4.info;
                                        var1 = global;
                                        var6 = var1.JSON;
                                        var5 = var6.stringify;
                                        var6 = var5.bind(var6)(var2);
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var1 = 'Go Live Media sink wants: ';
                                        var1 = var5.bind(var1)(var6);
                                        var1 = var3.bind(var4)(var1);
                                        var1 = _closure3_slot0;
                                        var3 = var1._socket;
                                        var1 = var3.mediaSinkWants;
                                        var1 = var1.bind(var3)(var2);
                                        var0 = _closure3_slot0;
                                        var1 = var0._connection;
                                        var0 = null;
                                        if (!(var0 != var1)) {
                                            _fun31353_ip = 164;
                                            continue _fun31353
                                        }
                                    case 153:
                                        var0 = var1.setLocalVideoSinkWants;
                                        var0 = var0.bind(var1)(var2);
                                    case 164:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = var9.bind(var10)(var8, var5);
                            _fun31337_ip = 1643;
                            continue _fun31337;
                        case 1452:
                            var9 = _closure1_slot14;
                            var8 = var9.getChannel;
                            var5 = var0.channelId;
                            var5 = var8.bind(var9)(var5);
                            var8 = var3 == var5;
                            var14 = undefined;
                            if (var8) {
                                _fun31337_ip = 1485;
                                continue _fun31337
                            }
                        case 1480:
                            var14 = var5.type;
                        case 1485:
                            var5 = _closure1_slot21;
                            var8 = var5.GUILD_STAGE_VOICE;
                            var10 = _closure1_slot1;
                            var11 = _closure1_slot3;
                            var5 = 27;
                            var9 = var11[var5];
                            var10 = var10.bind(var6)(var9);
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var24 = var14 === var8;
                            var26 = var9;
                            var25 = var13;
                            var23 = var12;
                            var8 = new var26[var10](var25, var24, var23, var22);
                            var8 = var8 instanceof Object ? var8 : var9;
                            var0._localMediaSinkWantsManager = var8;
                            var13 = var0._localMediaSinkWantsManager;
                            var12 = var13.on;
                            var8 = _closure1_slot0;
                            var9 = var11[var5];
                            var9 = var8.bind(var6)(var9);
                            var9 = var9.RTCMediaSinkWantsManagerEvent;
                            var10 = var9.Update;
                            var9 = function(arg0) { // Environment: var1
                                _fun31350: for (var _fun31350_ip = 0;;) switch (_fun31350_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = _closure3_slot0;
                                        var3 = var1.state;
                                        var1 = _closure1_slot22;
                                        var1 = var1.RTC_CONNECTED;
                                        var1 = var3 === var1;
                                        if (!var1) {
                                            _fun31350_ip = 51;
                                            continue _fun31350
                                        }
                                    case 35:
                                        var3 = _closure3_slot0;
                                        var4 = var3._socket;
                                        var3 = null;
                                        var1 = var3 != var4;
                                    case 51:
                                        if (!var1) {
                                            _fun31350_ip = 164;
                                            continue _fun31350
                                        }
                                    case 54:
                                        var1 = _closure3_slot0;
                                        var4 = var1.logger;
                                        var3 = var4.info;
                                        var1 = global;
                                        var6 = var1.JSON;
                                        var5 = var6.stringify;
                                        var6 = var5.bind(var6)(var2);
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var1 = 'Media sink wants: ';
                                        var1 = var5.bind(var1)(var6);
                                        var1 = var3.bind(var4)(var1);
                                        var1 = _closure3_slot0;
                                        var3 = var1._socket;
                                        var1 = var3.mediaSinkWants;
                                        var1 = var1.bind(var3)(var2);
                                        var0 = _closure3_slot0;
                                        var1 = var0._connection;
                                        var0 = null;
                                        if (!(var0 != var1)) {
                                            _fun31350_ip = 164;
                                            continue _fun31350
                                        }
                                    case 153:
                                        var0 = var1.setLocalVideoSinkWants;
                                        var0 = var0.bind(var1)(var2);
                                    case 164:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var9 = var12.bind(var13)(var10, var9);
                            var10 = var0._localMediaSinkWantsManager;
                            var9 = var10.on;
                            var5 = var11[var5];
                            var5 = var8.bind(var6)(var5);
                            var5 = var5.RTCMediaSinkWantsManagerEvent;
                            var8 = var5.UserSSRCUpdate;
                            var5 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun31351: for (var _fun31351_ip = 0;;) switch (_fun31351_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var4 = var0._connection;
                                        var0 = null;
                                        if (!(var0 != var4)) {
                                            _fun31351_ip = 41;
                                            continue _fun31351
                                        }
                                    case 19:
                                        var3 = var4.createUser;
                                        var2 = arg0;
                                        var1 = arg1;
                                        var0 = arg2;
                                        var0 = var3.bind(var4)(var2, var1, var0);
                                    case 41:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = var9.bind(var10)(var8, var5);
                        case 1643:
                            var8 = _closure1_slot0;
                            var11 = _closure1_slot3;
                            var5 = 27;
                            var5 = var11[var5];
                            var5 = var8.bind(var6)(var5);
                            var5 = var5.DEFAULT_WANTS_FULL;
                            var0._remoteVideoSinkWants = var5;
                            var5 = 29;
                            var9 = var11[var5];
                            var9 = var8.bind(var6)(var9);
                            var13 = var9.WindowVisibilityVideoManager;
                            var12 = var13.on;
                            var9 = var11[var5];
                            var9 = var8.bind(var6)(var9);
                            var9 = var9.WindowVisibilityEvent;
                            var10 = var9.IncomingVideoEnabledChanged;
                            var9 = var0.incomingVideoEnabledChanged;
                            var9 = var12.bind(var13)(var10, var9);
                            var9 = var11[var5];
                            var9 = var8.bind(var6)(var9);
                            var10 = var9.WindowVisibilityVideoManager;
                            var9 = var10.on;
                            var5 = var11[var5];
                            var5 = var8.bind(var6)(var5);
                            var5 = var5.WindowVisibilityEvent;
                            var8 = var5.WindowVisibilityChanged;
                            var5 = var0.windowVisibilityChanged;
                            var5 = var9.bind(var10)(var8, var5);
                            var8 = _closure1_slot17;
                            var5 = var8.shouldRecordNextConnection;
                            var5 = var5.bind(var8)();
                            if (var5) {
                                _fun31337_ip = 1811;
                                continue _fun31337
                            }
                        case 1803:
                            var0._recordingEnabled = var7;
                            _fun31337_ip = 1848;
                            continue _fun31337;
                        case 1811:
                            var0._recordingEnabled = var4;
                            var5 = _closure1_slot2;
                            var8 = _closure1_slot3;
                            var4 = 30;
                            var4 = var8[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.setShouldRecordNextConnection;
                            var4 = var4.bind(var5)(var7);
                        case 1848:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var4 = 31;
                            var8 = var7[var4];
                            var10 = var5.bind(var6)(var8);
                            var9 = var10.addOnlineCallback;
                            var8 = var0._handleNetworkOnline;
                            var8 = var9.bind(var10)(var8);
                            var4 = var7[var4];
                            var8 = var5.bind(var6)(var4);
                            var5 = var8.addOfflineCallback;
                            var4 = var0._handleNetworkOffline;
                            var4 = var5.bind(var8)(var4);
                            var5 = _closure1_slot0;
                            var4 = 32;
                            var4 = var7[var4];
                            var5 = var5.bind(var6)(var4);
                            var4 = var5.isDesktop;
                            var4 = var4.bind(var5)();
                            if (!var4) {
                                _fun31337_ip = 1994;
                                continue _fun31337
                            }
                        case 1940:
                            var5 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var4 = 33;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var7 = var4.remotePowerMonitor;
                            var6 = var7.on;
                            var5 = var0._handlePowerResume;
                            var4 = 'resume';
                            var4 = var6.bind(var7)(var4, var5);
                            var0.powerMonitorListener = var4;
                        case 1994:
                            var4 = new Array(0);
                            var0._supportedBandwidthEstimationExperiments = var4;
                            var0._bandwidthEstimationExperiment = var3;
                            var3 = _closure1_slot15;
                            var2 = var3.getMediaEngine;
                            var3 = var2.bind(var3)();
                            var2 = var3.getSupportedBandwidthEstimationExperiments;
                            var1 = function(arg0) { // Environment: var1
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var1._supportedBandwidthEstimationExperiments = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot9;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot6;
                var4 = {};
                var0 = 'recordEvent';
                var4.key = var0;
                var0 = function arg0() {
                    _fun31355: for (var _fun31355_ip = 0;;) switch (_fun31355_ip) {
                        case 0:
                            var4 = _closure1_slot35;
                            var2 = var4.push;
                            var1 = {};
                            var7 = arg0;
                            var8 = var1;
                            var0 = copyDataProperties(var8, var7);
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var0 = 19;
                            var5 = var5[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var5);
                            var5 = var6.now;
                            var6 = var5.bind(var6)();
                            var5 = 't';
                            var1[var5] = var6;
                            var5 = this;
                            var6 = var5._connectionSerial;
                            var5 = 'n';
                            var1[var5] = var6;
                            var1 = var2.bind(var4)(var1);
                            var1 = _closure1_slot35;
                            var1 = var1.length;
                            var2 = 50;
                            if (!(var1 > var2)) {
                                _fun31355_ip = 130;
                                continue _fun31355
                            }
                        case 103:
                            var4 = _closure1_slot35;
                            var1 = var4.shift;
                            var1 = var1.bind(var4)();
                            var1 = _closure1_slot35;
                            var1 = var1.length;
                            if (var1 > var2) {
                                _fun31355_ip = 103;
                                continue _fun31355
                            }
                        case 130:
                            return var0;
                    }
                };
                var4.value = var0;
                var0 = new Array(105);
                var0[0] = var4;
                var4 = {};
                var6 = 'quality';
                var4.key = var6;
                var6 = function() {
                    _fun31356: for (var _fun31356_ip = 0;;) switch (_fun31356_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0.getLastPing;
                            var4 = var1.bind(var0)();
                            var3 = var0.state;
                            var2 = _closure1_slot22;
                            var2 = var2.RTC_CONNECTED;
                            if (!(var3 === var2)) {
                                _fun31356_ip = 142;
                                continue _fun31356
                            }
                        case 35:
                            var2 = undefined;
                            if (!(var2 !== var4)) {
                                _fun31356_ip = 142;
                                continue _fun31356
                            }
                        case 41:
                            var2 = 500;
                            if (!(!(var4 > var2))) {
                                _fun31356_ip = 130;
                                continue _fun31356
                            }
                        case 51:
                            var2 = var0._outboundLossRate;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun31356_ip = 76;
                                continue _fun31356
                            }
                        case 63:
                            var5 = var0._outboundLossRate;
                            var2 = 10;
                            if (!(!(var5 > var2))) {
                                _fun31356_ip = 130;
                                continue _fun31356
                            }
                        case 76:
                            var2 = 250;
                            if (!(!(var4 > var2))) {
                                _fun31356_ip = 118;
                                continue _fun31356
                            }
                        case 83:
                            var2 = var0._outboundLossRate;
                            if (!(var3 != var2)) {
                                _fun31356_ip = 106;
                                continue _fun31356
                            }
                        case 93:
                            var2 = var0._outboundLossRate;
                            var0 = 5;
                            if (!(!(var2 > var0))) {
                                _fun31356_ip = 118;
                                continue _fun31356
                            }
                        case 106:
                            var0 = _closure1_slot23;
                            var0 = var0.FINE;
                            _fun31356_ip = 128;
                            continue _fun31356;
                        case 118:
                            var2 = _closure1_slot23;
                            var0 = var2.AVERAGE;
                        case 128:
                            _fun31356_ip = 140;
                            continue _fun31356;
                        case 130:
                            var2 = _closure1_slot23;
                            var0 = var2.BAD;
                        case 140:
                            _fun31356_ip = 152;
                            continue _fun31356;
                        case 142:
                            var1 = _closure1_slot23;
                            var0 = var1.UNKNOWN;
                        case 152:
                            return var0;
                    }
                };
                var4.get = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'endpoint';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._endpoint;
                    return var0;
                };
                var4.get = var6;
                var6 = function arg0() {
                    _fun31358: for (var _fun31358_ip = 0;;) switch (_fun31358_ip) {
                        case 0:
                            var8 = arg0;
                            var1 = this;
                            var3 = var1.recordEvent;
                            var2 = {};
                            var0 = _closure1_slot33;
                            var0 = var0.SET_ENDPOINT;
                            var2.c = var0;
                            var0 = null;
                            var4 = var0 != var8;
                            var2.e = var4;
                            var2 = var3.bind(var1)(var2);
                            if (!(var0 != var8)) {
                                _fun31358_ip = 238;
                                continue _fun31358
                            }
                        case 53:
                            var4 = _closure1_slot32;
                            var3 = global;
                            var2 = var3.HermesInternal;
                            var2 = var2.concat;
                            var7 = '';
                            var6 = '//';
                            var4 = var2.bind(var7)(var4, var6, var8);
                            var8 = _closure1_slot1;
                            var9 = _closure1_slot3;
                            var2 = 34;
                            var2 = var9[var2];
                            var10 = undefined;
                            var8 = var8.bind(var10)(var2);
                            var2 = var8.toURLSafe;
                            var8 = var2.bind(var8)(var4);
                            if (!(var0 == var8)) {
                                _fun31358_ip = 126;
                                continue _fun31358
                            }
                        case 124:
                            var8 = {};
                        case 126:
                            var2 = var8.hostname;
                            var9 = var8.port;
                            if (!(var0 == var9)) {
                                _fun31358_ip = 150;
                                continue _fun31358
                            }
                        case 142:
                            var11 = var3.NaN;
                            _fun31358_ip = 161;
                            continue _fun31358;
                        case 150:
                            var8 = var3.parseInt;
                            var11 = var8.bind(var10)(var9);
                        case 161:
                            var8 = var0 == var2;
                            if (var8) {
                                _fun31358_ip = 191;
                                continue _fun31358
                            }
                        case 168:
                            var9 = 80;
                            var9 = var9 !== var11;
                            if (!var9) {
                                _fun31358_ip = 188;
                                continue _fun31358
                            }
                        case 178:
                            var10 = 443;
                            var9 = var10 !== var11;
                        case 188:
                            var8 = var9;
                        case 191:
                            if (var8) {
                                _fun31358_ip = 216;
                                continue _fun31358
                            }
                        case 194:
                            var5 = _closure1_slot32;
                            var3 = var3.HermesInternal;
                            var3 = var3.concat;
                            var4 = var3.bind(var7)(var5, var6, var2);
                        case 216:
                            var3 = '/';
                            var3 = var4 + var3;
                            var1._endpoint = var3;
                            var1.hostname = var2;
                            _fun31358_ip = 250;
                            continue _fun31358;
                        case 238:
                            var1._endpoint = var0;
                            var1.hostname = var0;
                        case 250:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.set = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'connect';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31359: for (var _fun31359_ip = 0;;) switch (_fun31359_ip) {
                        case 0:
                            var4 = arg0;
                            var6 = arg1;
                            var2 = this;
                            var0 = var2._destroyed;
                            if (var0) {
                                _fun31359_ip = 1931;
                                continue _fun31359
                            }
                        case 21:
                            var5 = var2.recordEvent;
                            var1 = {};
                            var0 = _closure1_slot33;
                            var0 = var0.CONNECT;
                            var1.c = var0;
                            var0 = null;
                            var7 = var0 != var4;
                            var1.e = var7;
                            var7 = var0 != var6;
                            var1.h = var7;
                            var1 = var5.bind(var2)(var1);
                            var5 = var2._backoff;
                            var1 = var5.cancel;
                            var1 = var1.bind(var5)();
                            var1 = var2.endpoint;
                            var5 = var2.token;
                            var2.endpoint = var4;
                            var2.token = var6;
                            var4 = var2.endpoint;
                            var4 = var1 === var4;
                            if (!var4) {
                                _fun31359_ip = 126;
                                continue _fun31359
                            }
                        case 122:
                            var4 = var5 === var6;
                        case 126:
                            if (var4) {
                                _fun31359_ip = 228;
                                continue _fun31359
                            }
                        case 129:
                            var4 = var2._cleanupSocket;
                            var4 = var4.bind(var2)();
                            var2._mediaSessionId = var0;
                            if (!(var0 != var1)) {
                                _fun31359_ip = 228;
                                continue _fun31359
                            }
                        case 149:
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 26;
                            var1 = var6[var1];
                            var5 = undefined;
                            var4 = var4.bind(var5)(var1);
                            var1 = var4.v4;
                            var1 = var1.bind(var4)();
                            var2._rtcConnectionId = var1;
                            var4 = _closure1_slot1;
                            var1 = 35;
                            var1 = var6[var1];
                            var5 = var4.bind(var5)(var1);
                            var4 = var5.dispatch;
                            var1 = {};
                            var6 = 'RTC_CONNECTION_UPDATE_ID';
                            var1.type = var6;
                            var1.connection = var2;
                            var1 = var4.bind(var5)(var1);
                        case 228:
                            var1 = var2.endpoint;
                            if (!(var0 == var1)) {
                                _fun31359_ip = 264;
                                continue _fun31359
                            }
                        case 238:
                            var4 = var2.setState;
                            var1 = _closure1_slot22;
                            var1 = var1.AWAITING_ENDPOINT;
                            var1 = var4.bind(var2)(var1);
                            _fun31359_ip = 1927;
                            continue _fun31359;
                        case 264:
                            var1 = var2._socket;
                            if (!(var0 != var1)) {
                                _fun31359_ip = 284;
                                continue _fun31359
                            }
                        case 274:
                            var1 = var2._cleanupSocket;
                            var1 = var1.bind(var2)();
                        case 284:
                            var1 = var2._nextChannelId;
                            if (!(var0 != var1)) {
                                _fun31359_ip = 314;
                                continue _fun31359
                            }
                        case 294:
                            var1 = var2._nextChannelId;
                            var2._channelId = var1;
                            var1 = undefined;
                            var2._nextChannelId = var1;
                        case 314:
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var7 = 36;
                            var1 = var6[var7];
                            var5 = undefined;
                            var9 = var4.bind(var5)(var1);
                            var14 = var2.endpoint;
                            var13 = var2.context;
                            var4 = var9.prototype;
                            var4 = Object.create(var4, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var15 = var4;
                            var1 = new var15[var9](var14, var13, var12);
                            var1 = var1 instanceof Object ? var1 : var4;
                            var2._socket = var1;
                            var10 = var1.on;
                            var4 = _closure1_slot0;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Connecting;
                            var11 = var2._handleConnecting;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2, var1);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Connect;
                            var11 = var2._handleConnect;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2, var1);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Disconnect;
                            var11 = var2._handleDisconnect;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2, var1);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Resuming;
                            var11 = var2._handleResuming;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2, var1);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Ready;
                            var11 = var2._handleReady;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2, var1);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Speaking;
                            var11 = var2._handleSpeaking;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2, var1);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Video;
                            var11 = var2._handleVideo;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2, var1);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Ping;
                            var11 = var2._handleControlPing;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.ClientDisconnect;
                            var11 = var2._handleClientDisconnect;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.ClientConnect;
                            var11 = var2._handleClientConnect;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Codecs;
                            var11 = var2._handleCodecs;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.MediaSessionId;
                            var11 = var2._handleMediaSessionId;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.MediaSinkWants;
                            var11 = var2._handleMediaSinkWants;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.VoiceBackendVersion;
                            var11 = var2._handleCodeVersion;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.KeyframeInterval;
                            var11 = var2._handleKeyframeInterval;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Flags;
                            var11 = var2.handleFlags;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.Platform;
                            var11 = var2.handlePlatform;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.BandwidthEstimationExperiment;
                            var11 = var2._handleBandwidthEstimationExperiment;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.SecureFramesInit;
                            var11 = var2._handleSecureFramesInit;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.SecureFramesPrepareTransition;
                            var11 = var2._handleSecureFramesPrepareTransition;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.SecureFramesPrepareEpoch;
                            var11 = var2._handleSecureFramesPrepareEpoch;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.SecureFramesExecuteTransition;
                            var11 = var2._handleSecureFramesExecuteTransition;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.MLSExternalSenderPackage;
                            var11 = var2._handleMLSExternalSenderPackage;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.MLSProposals;
                            var11 = var2._handleMLSProposals;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2, var1);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.MLSPrepareCommitTransition;
                            var11 = var2._handleMLSPrepareCommitTransition;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.MLSWelcome;
                            var11 = var2._handleMLSWelcome;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var7];
                            var8 = var4.bind(var5)(var8);
                            var8 = var8.SocketEvent;
                            var9 = var8.ReceiveMessage;
                            var12 = var2._recordMessageEvent;
                            var11 = var12.bind;
                            var8 = _closure1_slot33;
                            var8 = var8.MESSAGE_RECEIVE;
                            var8 = var11.bind(var12)(var2, var8);
                            var8 = var10.bind(var1)(var9, var8);
                            var8 = var1.on;
                            var7 = var6[var7];
                            var7 = var4.bind(var5)(var7);
                            var7 = var7.SocketEvent;
                            var7 = var7.SendMessage;
                            var10 = var2._recordMessageEvent;
                            var9 = var10.bind;
                            var3 = _closure1_slot33;
                            var3 = var3.MESSAGE_SEND;
                            var3 = var9.bind(var10)(var2, var3);
                            var3 = var8.bind(var1)(var7, var3);
                            var3 = 19;
                            var3 = var6[var3];
                            var4 = var4.bind(var5)(var3);
                            var3 = var4.now;
                            var3 = var3.bind(var4)();
                            var2._connectStartTime = var3;
                            var3 = var2._connectCount;
                            var3 = var3 + 1;
                            var2._connectCount = var3;
                            var3 = true;
                            var2._connecting = var3;
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun31359_ip = 1896;
                                continue _fun31359
                            }
                        case 1886:
                            var3 = var2._socket;
                            var0 = var3 === var1;
                        case 1896:
                            if (!var0) {
                                _fun31359_ip = 1927;
                                continue _fun31359
                            }
                        case 1899:
                            var0 = var2._trackVoiceConnectionConnecting;
                            var0 = var0.bind(var2)();
                            var0 = false;
                            var2._encountered_socket_failure = var0;
                            var0 = var1.connect;
                            var0 = var0.bind(var1)();
                        case 1927:
                            var0 = undefined;
                            return var0;
                        case 1931:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var14 = 'RTCConnection.connect(...): Attempting to connect on destroyed instance.';
                            var15 = var1;
                            var0 = new var15[var2](var14, var13);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = '_recordMessageEvent';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    var2 = this;
                    var1 = var2.recordEvent;
                    var0 = {};
                    var3 = arg0;
                    var0.c = var3;
                    var3 = arg1;
                    var0.o = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'destroy';
                var4.key = var6;
                var6 = function() {
                    _fun31361: for (var _fun31361_ip = 0;;) switch (_fun31361_ip) {
                        case 0:
                            var2 = this;
                            var3 = var2.logger;
                            var1 = var3.info;
                            var0 = 'Destroy RTCConnection';
                            var0 = var1.bind(var3)(var0);
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot3;
                            var3 = 31;
                            var6 = var5[var3];
                            var0 = undefined;
                            var8 = var4.bind(var0)(var6);
                            var7 = var8.removeOnlineCallback;
                            var6 = var2._handleNetworkOnline;
                            var6 = var7.bind(var8)(var6);
                            var3 = var5[var3];
                            var6 = var4.bind(var0)(var3);
                            var4 = var6.removeOfflineCallback;
                            var3 = var2._handleNetworkOffline;
                            var3 = var4.bind(var6)(var3);
                            var4 = _closure1_slot0;
                            var3 = 32;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.isDesktop;
                            var3 = var3.bind(var4)();
                            if (!var3) {
                                _fun31361_ip = 145;
                                continue _fun31361
                            }
                        case 123:
                            var4 = var2.powerMonitorListener;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun31361_ip = 145;
                                continue _fun31361
                            }
                        case 135:
                            var3 = var4.call;
                            var3 = var3.bind(var4)(var2);
                        case 145:
                            var4 = var2.recordEvent;
                            var3 = {};
                            var5 = _closure1_slot33;
                            var5 = var5.CONNECTION_DESTROY;
                            var3.c = var5;
                            var3 = var4.bind(var2)(var3);
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 29;
                            var4 = var6[var1];
                            var4 = var3.bind(var0)(var4);
                            var8 = var4.WindowVisibilityVideoManager;
                            var7 = var8.off;
                            var4 = var6[var1];
                            var4 = var3.bind(var0)(var4);
                            var4 = var4.WindowVisibilityEvent;
                            var5 = var4.IncomingVideoEnabledChanged;
                            var4 = var2.incomingVideoEnabledChanged;
                            var4 = var7.bind(var8)(var5, var4);
                            var4 = var6[var1];
                            var4 = var3.bind(var0)(var4);
                            var5 = var4.WindowVisibilityVideoManager;
                            var4 = var5.off;
                            var1 = var6[var1];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.WindowVisibilityEvent;
                            var3 = var1.WindowVisibilityChanged;
                            var1 = var2.windowVisibilityChanged;
                            var1 = var4.bind(var5)(var3, var1);
                            var3 = var2._backoff;
                            var1 = var3.cancel;
                            var1 = var1.bind(var3)();
                            var1 = var2._cleanupSocket;
                            var1 = var1.bind(var2)();
                            var4 = var2._voiceQuality;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun31361_ip = 339;
                                continue _fun31361
                            }
                        case 329:
                            var3 = var4.stop;
                            var3 = var3.bind(var4)();
                        case 339:
                            var4 = var2._voiceQuality;
                            if (!(var1 != var4)) {
                                _fun31361_ip = 359;
                                continue _fun31361
                            }
                        case 349:
                            var3 = var4.removeAllListeners;
                            var3 = var3.bind(var4)();
                        case 359:
                            var2._voiceQuality = var1;
                            var3 = global;
                            var4 = var3.clearInterval;
                            var3 = var2._voiceQualityPeriodicStatsInterval;
                            var3 = var4.bind(var0)(var3);
                            var2._voiceQualityPeriodicStatsInterval = var1;
                            var3 = 0;
                            var2._voiceQualityPeriodicStatsSequenceId = var3;
                            var5 = var2._systemResponsiveness;
                            if (!(var1 != var5)) {
                                _fun31361_ip = 418;
                                continue _fun31361
                            }
                        case 408:
                            var4 = var5.stop;
                            var4 = var4.bind(var5)();
                        case 418:
                            var2._systemResponsiveness = var1;
                            var2._noiseCancellationError = var3;
                            var4 = var2._voiceDuration;
                            if (!(var1 != var4)) {
                                _fun31361_ip = 450;
                                continue _fun31361
                            }
                        case 440:
                            var3 = var4.stop;
                            var3 = var3.bind(var4)();
                        case 450:
                            var2._voiceDuration = var1;
                            var4 = var2._videoQuality;
                            if (!(var1 != var4)) {
                                _fun31361_ip = 476;
                                continue _fun31361
                            }
                        case 466:
                            var3 = var4.stop;
                            var3 = var3.bind(var4)();
                        case 476:
                            var2._videoQuality = var1;
                            var2._videoHealthManager = var1;
                            var2._secureFramesState = var1;
                            var4 = var2._localMediaSinkWantsManager;
                            if (!(var1 != var4)) {
                                _fun31361_ip = 514;
                                continue _fun31361
                            }
                        case 504:
                            var3 = var4.reset;
                            var3 = var3.bind(var4)();
                        case 514:
                            var3 = var2._connection;
                            if (!(var1 != var3)) {
                                _fun31361_ip = 546;
                                continue _fun31361
                            }
                        case 524:
                            var3 = var2._connection;
                            var2._connection = var1;
                            var1 = var3.destroy;
                            var1 = var1.bind(var3)();
                        case 546:
                            var1 = var2.removeAllListeners;
                            var1 = var1.bind(var2)();
                            var1 = true;
                            var2._destroyed = var1;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[5] = var4;
                var4 = {};
                var6 = 'shouldSendSpeaking';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31362: for (var _fun31362_ip = 0;;) switch (_fun31362_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var3 = this;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 32;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = var1.isWeb;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun31362_ip = 227;
                                continue _fun31362
                            }
                        case 50:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var1 = 37;
                            var0 = var9[var1];
                            var11 = var8.bind(var2)(var0);
                            var10 = var11.hasFlag;
                            var0 = _closure1_slot30;
                            var7 = var0.PRIORITY;
                            var7 = var10.bind(var11)(var5, var7);
                            var1 = var9[var1];
                            var9 = var8.bind(var2)(var1);
                            var8 = var9.hasFlag;
                            var1 = var3._lastSentSpeakingStatus;
                            var0 = var0.PRIORITY;
                            var1 = var8.bind(var9)(var1, var0);
                            var0 = var3._lastSentSSRC;
                            var0 = var0 !== var4;
                            if (var0) {
                                _fun31362_ip = 142;
                                continue _fun31362
                            }
                        case 138:
                            var0 = var7 !== var1;
                        case 142:
                            if (!var0) {
                                _fun31362_ip = 225;
                                continue _fun31362
                            }
                        case 145:
                            var1 = var3._lastSentSSRC;
                            var1 = var2 !== var1;
                            if (var1) {
                                _fun31362_ip = 172;
                                continue _fun31362
                            }
                        case 158:
                            var2 = _closure1_slot30;
                            var2 = var2.NONE;
                            var1 = var5 !== var2;
                        case 172:
                            if (!var1) {
                                _fun31362_ip = 222;
                                continue _fun31362
                            }
                        case 175:
                            var2 = var3._lastSentSSRC;
                            var2 = var2 === var4;
                            if (var2) {
                                _fun31362_ip = 202;
                                continue _fun31362
                            }
                        case 188:
                            var6 = _closure1_slot30;
                            var6 = var6.NONE;
                            var2 = var5 !== var6;
                        case 202:
                            if (!var2) {
                                _fun31362_ip = 219;
                                continue _fun31362
                            }
                        case 205:
                            var3._lastSentSpeakingStatus = var5;
                            var3._lastSentSSRC = var4;
                            var2 = true;
                        case 219:
                            var1 = var2;
                        case 222:
                            var0 = var1;
                        case 225:
                            return var0;
                        case 227:
                            var0 = true;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[6] = var4;
                var4 = {};
                var6 = 'sendSpeaking';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31363: for (var _fun31363_ip = 0;;) switch (_fun31363_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var1 = this;
                            var2 = var1._socket;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31363_ip = 70;
                                continue _fun31363
                            }
                        case 21:
                            var0 = var1.shouldSendSpeaking;
                            var0 = var0.bind(var1)(var4, var3);
                            if (!var0) {
                                _fun31363_ip = 70;
                                continue _fun31363
                            }
                        case 38:
                            var1 = _closure1_slot15;
                            var0 = var1.getPacketDelay;
                            var1 = var0.bind(var1)();
                            var0 = var2.speaking;
                            var0 = var0.bind(var2)(var4, var1, var3);
                        case 70:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[7] = var4;
                var4 = {};
                var6 = 'sendVideo';
                var4.key = var6;
                var6 = function arg0, arg1, arg2, arg3() {
                    _fun31364: for (var _fun31364_ip = 0;;) switch (_fun31364_ip) {
                        case 0:
                            var5 = arg1;
                            var0 = this;
                            var4 = var0._socket;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun31364_ip = 66;
                                continue _fun31364
                            }
                        case 18:
                            var1 = 0;
                            if (!(var1 !== var5)) {
                                _fun31364_ip = 32;
                                continue _fun31364
                            }
                        case 24:
                            var1 = true;
                            var0._sentVideo = var1;
                        case 32:
                            var0 = var0._sentVideo;
                            if (!var0) {
                                _fun31364_ip = 66;
                                continue _fun31364
                            }
                        case 41:
                            var3 = var4.video;
                            var9 = arg0;
                            var7 = arg2;
                            var6 = arg3;
                            var10 = var4;
                            var8 = var5;
                            var0 = var10[var3](var9, var8, var7, var6, var5);
                        case 66:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[8] = var4;
                var4 = {};
                var6 = 'getPings';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._pings;
                    return var0;
                };
                var4.value = var6;
                var0[9] = var4;
                var4 = {};
                var6 = 'getAveragePing';
                var4.key = var6;
                var6 = function() {
                    _fun31366: for (var _fun31366_ip = 0;;) switch (_fun31366_ip) {
                        case 0:
                            var2 = this;
                            var3 = var2._pings;
                            var1 = var3.slice;
                            var0 = global;
                            var6 = var0.Math;
                            var5 = var6.min;
                            var0 = var2._pings;
                            var4 = var0.length;
                            var0 = 20;
                            var0 = var5.bind(var6)(var4, var0);
                            var4 = 0;
                            var1 = var1.bind(var3)(var4, var0);
                            var3 = var1.length;
                            var0 = 0;
                            if (!(var4 !== var3)) {
                                _fun31366_ip = 111;
                                continue _fun31366
                            }
                        case 66:
                            var3 = var2._socket;
                            var2 = null;
                            var2 = var2 == var3;
                            var0 = 0;
                            if (var2) {
                                _fun31366_ip = 111;
                                continue _fun31366
                            }
                        case 83:
                            var3 = var1.reduce;
                            var2 = function(arg0, arg1) { // Environment: var2
                                var0 = arg1;
                                var1 = var0.value;
                                var0 = arg0;
                                var0 = var0 + var1;
                                return var0;
                            };
                            var2 = var3.bind(var1)(var2, var4);
                            var1 = var1.length;
                            var0 = var2 / var1;
                        case 111:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[10] = var4;
                var4 = {};
                var6 = 'getLastPing';
                var4.key = var6;
                var6 = function() {
                    _fun31368: for (var _fun31368_ip = 0;;) switch (_fun31368_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._pings;
                            var0 = var0._pings;
                            var2 = var0.length;
                            var0 = 1;
                            var0 = var2 - var0;
                            var1 = var1[var0];
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun31368_ip = 47;
                                continue _fun31368
                            }
                        case 42:
                            var0 = var1.value;
                        case 47:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[11] = var4;
                var4 = {};
                var6 = 'getOutboundLossRate';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._outboundLossRate;
                    return var0;
                };
                var4.value = var6;
                var0[12] = var4;
                var4 = {};
                var6 = 'getMediaSessionId';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._mediaSessionId;
                    return var0;
                };
                var4.value = var6;
                var0[13] = var4;
                var4 = {};
                var6 = 'getVoiceParticipantType';
                var4.key = var6;
                var6 = function() {
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[14] = var4;
                var4 = {};
                var6 = 'getRTCConnectionId';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._rtcConnectionId;
                    return var0;
                };
                var4.value = var6;
                var0[15] = var4;
                var4 = {};
                var6 = 'getMediaEngineConnectionId';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._mediaEngineConnectionId;
                    return var0;
                };
                var4.value = var6;
                var0[16] = var4;
                var4 = {};
                var6 = 'getVoiceVersion';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0.voiceVersion;
                    return var0;
                };
                var4.value = var6;
                var0[17] = var4;
                var4 = {};
                var6 = 'getRtcWorkerVersion';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0.rtcWorkerVersion;
                    return var0;
                };
                var4.value = var6;
                var0[18] = var4;
                var4 = {};
                var6 = 'getDuration';
                var4.key = var6;
                var6 = function() {
                    _fun31376: for (var _fun31376_ip = 0;;) switch (_fun31376_ip) {
                        case 0:
                            var2 = this;
                            var1 = var2._connectCompletedTime;
                            var0 = 0;
                            var3 = var1 > var0;
                            var1 = 0;
                            if (!var3) {
                                _fun31376_ip = 64;
                                continue _fun31376
                            }
                        case 20:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var3 = 19;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.now;
                            var3 = var3.bind(var4)();
                            var2 = var2._connectCompletedTime;
                            var1 = var3 - var2;
                        case 64:
                            var0 = 0;
                            if (!(var1 > var0)) {
                                _fun31376_ip = 73;
                                continue _fun31376
                            }
                        case 70:
                            var0 = var1;
                        case 73:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[19] = var4;
                var4 = {};
                var6 = 'getDurationSeconds';
                var4.key = var6;
                var6 = function() {
                    var1 = this;
                    var0 = var1.getDuration;
                    var1 = var0.bind(var1)();
                    var0 = 1000;
                    var0 = var1 / var0;
                    return var0;
                };
                var4.value = var6;
                var0[20] = var4;
                var4 = {};
                var6 = 'getVoiceFilterSpeakingDurationMs';
                var4.key = var6;
                var6 = function() {
                    _fun31378: for (var _fun31378_ip = 0;;) switch (_fun31378_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1._voiceDuration;
                            var0 = null;
                            var2 = var0 == var2;
                            if (var2) {
                                _fun31378_ip = 34;
                                continue _fun31378
                            }
                        case 18:
                            var2 = var1._voiceDuration;
                            var1 = var2.getVoiceFilterSpeakingDurationMs;
                            var0 = var1.bind(var2)();
                        case 34:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[21] = var4;
                var4 = {};
                var6 = 'getPacketStats';
                var4.key = var6;
                var6 = function() {
                    _fun31379: for (var _fun31379_ip = 0;;) switch (_fun31379_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0._voiceQuality;
                            var0 = null;
                            var1 = var0 == var2;
                            var0 = undefined;
                            if (var1) {
                                _fun31379_ip = 30;
                                continue _fun31379
                            }
                        case 20:
                            var1 = var2.getPacketStats;
                            var0 = var1.bind(var2)();
                        case 30:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[22] = var4;
                var4 = {};
                var6 = 'getCreatedTime';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._createdTime;
                    return var0;
                };
                var4.value = var6;
                var0[23] = var4;
                var4 = {};
                var6 = 'getSecureFramesState';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._secureFramesState;
                    return var0;
                };
                var4.value = var6;
                var0[24] = var4;
                var4 = {};
                var6 = 'getSecureFramesRosterMap';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._secureFramesRosterMap;
                    return var0;
                };
                var4.value = var6;
                var0[25] = var4;
                var4 = {};
                var6 = 'getUserIds';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._userIds;
                    return var0;
                };
                var4.value = var6;
                var0[26] = var4;
                var4 = {};
                var6 = 'getIsUserConnected';
                var4.key = var6;
                var6 = function arg0() {
                    var0 = this;
                    var2 = var0._userIds;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[27] = var4;
                var4 = {};
                var6 = 'getVideoHealthManager';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._videoHealthManager;
                    return var0;
                };
                var4.value = var6;
                var0[28] = var4;
                var4 = {};
                var6 = 'getBandwidthEstimationExperiment';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._bandwidthEstimationExperiment;
                    return var0;
                };
                var4.value = var6;
                var0[29] = var4;
                var4 = {};
                var6 = 'hasActiveRemoteWants';
                var4.key = var6;
                var6 = function() {
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.entries;
                    var0 = this;
                    var0 = var0._remoteVideoSinkWants;
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        _fun31388: for (var _fun31388_ip = 0;;) switch (_fun31388_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = var4[Symbol.iterator];
                                var4 = var0().next;
                                var2 = var4().value;
                                var3 = var0;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var5 = undefined;
                                if (var3) {
                                    _fun31388_ip = 27;
                                    continue _fun31388
                                }
                            case 24:
                                var5 = var2;
                            case 27:
                                var2 = undefined;
                                if (var3) {
                                    _fun31388_ip = 57;
                                    continue _fun31388
                                }
                            case 32:
                                var6 = var4().value;
                                var4 = var0;
                                var4 = var4 === var1;
                                var2 = undefined;
                                var3 = var4;
                                if (var4) {
                                    _fun31388_ip = 57;
                                    continue _fun31388
                                }
                            case 51:
                                var2 = var6;
                                var3 = var4;
                            case 57:
                                if (var3) {
                                    _fun31388_ip = 63;
                                    continue _fun31388
                                }
                            case 60:
                                var0.return();
                            case 63:
                                var3 = global;
                                var4 = var3.Number;
                                var0 = var4.isInteger;
                                var0 = var0.bind(var4)(var5);
                                if (var0) {
                                    _fun31388_ip = 145;
                                    continue _fun31388
                                }
                            case 85:
                                var0 = 'any';
                                var0 = var0 !== var5;
                                if (!var0) {
                                    _fun31388_ip = 143;
                                    continue _fun31388
                                }
                            case 96:
                                var4 = 'pixelCounts';
                                var1 = undefined;
                                if (!(var4 === var5)) {
                                    _fun31388_ip = 140;
                                    continue _fun31388
                                }
                            case 106:
                                var4 = var3.Object;
                                var3 = var4.values;
                                var5 = var3.bind(var4)(var2);
                                var4 = var5.some;
                                var3 = function(arg0) { // Environment: var3
                                    var1 = 0;
                                    var0 = arg0;
                                    var0 = var1 !== var0;
                                    return var0;
                                };
                                var1 = var4.bind(var5)(var3);
                            case 140:
                                var0 = var1;
                            case 143:
                                _fun31388_ip = 151;
                                continue _fun31388;
                            case 145:
                                var1 = 0;
                                var0 = var1 !== var2;
                            case 151:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4.value = var6;
                var0[30] = var4;
                var4 = {};
                var6 = 'pauseStatsCollectionForUser';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31390: for (var _fun31390_ip = 0;;) switch (_fun31390_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = this;
                            var1 = var0.getOrCreateVideoQuality;
                            var1 = var1.bind(var0)();
                            var3 = null;
                            if (!(var3 == var1)) {
                                _fun31390_ip = 46;
                                continue _fun31390
                            }
                        case 22:
                            var4 = var0.logger;
                            var3 = var4.error;
                            var0 = 'pauseStatsCollectionForUser: Unable to create videoQuality.';
                            var0 = var3.bind(var4)(var0);
                            _fun31390_ip = 80;
                            continue _fun31390;
                        case 46:
                            var0 = arg1;
                            if (var0) {
                                _fun31390_ip = 67;
                                continue _fun31390
                            }
                        case 52:
                            var0 = var1.removeUserFromStatsCollectionPausedSet;
                            var0 = var0.bind(var1)(var2);
                            _fun31390_ip = 80;
                            continue _fun31390;
                        case 67:
                            var0 = var1.addUserToStatsCollectionPausedSet;
                            var0 = var0.bind(var1)(var2);
                        case 80:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[31] = var4;
                var4 = {};
                var6 = 'getOutboundStats';
                var4.key = var6;
                var6 = function() {
                    _fun31391: for (var _fun31391_ip = 0;;) switch (_fun31391_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.getOrCreateVideoQuality;
                            var2 = var0.bind(var1)();
                            var0 = null;
                            var1 = var0 != var2;
                            if (!var1) {
                                _fun31391_ip = 32;
                                continue _fun31391
                            }
                        case 22:
                            var1 = var2.getOutboundStats;
                            var0 = var1.bind(var2)();
                        case 32:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[32] = var4;
                var4 = {};
                var6 = 'getInboundStats';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31392: for (var _fun31392_ip = 0;;) switch (_fun31392_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.getOrCreateVideoQuality;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var1 = var0 != var3;
                            if (!var1) {
                                _fun31392_ip = 36;
                                continue _fun31392
                            }
                        case 22:
                            var2 = var3.getInboundStats;
                            var1 = arg0;
                            var0 = var2.bind(var3)(var1);
                        case 36:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[33] = var4;
                var4 = {};
                var6 = 'setState';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31393: for (var _fun31393_ip = 0;;) switch (_fun31393_ip) {
                        case 0:
                            var6 = arg0;
                            var5 = arguments[1];
                            var4 = this;
                            var0 = undefined;
                            if (!(var5 === var0)) {
                                _fun31393_ip = 17;
                                continue _fun31393
                            }
                        case 15:
                            var5 = {};
                        case 17:
                            var3 = var4.recordEvent;
                            var2 = {};
                            var7 = _closure1_slot33;
                            var7 = var7.SET_STATE;
                            var2.c = var7;
                            var2.s = var6;
                            var2 = var3.bind(var4)(var2);
                            var7 = var4.logger;
                            var3 = var7.info;
                            var10 = var4.state;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var9 = var2.concat;
                            var8 = 'RTC connection state: ';
                            var2 = ' => ';
                            var2 = var9.bind(var8)(var10, var2, var6);
                            var2 = var3.bind(var7)(var2);
                            var4.state = var6;
                            var7 = var4.stateHistory;
                            var3 = var7.update;
                            var2 = var4.state;
                            var2 = var3.bind(var7)(var2);
                            var3 = var4.emit;
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var1 = 38;
                            var1 = var7[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.RTCConnectionEvent;
                            var14 = var1.State;
                            var1 = {};
                            var7 = var4.hostname;
                            var1.hostname = var7;
                            var7 = var4.trueChannelId;
                            var1.channelId = var7;
                            var7 = var4.context;
                            var1.context = var7;
                            var15 = var4;
                            var13 = var6;
                            var12 = var1;
                            var11 = var5;
                            var1 = var15[var3](var14, var13, var12, var11, var10);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[34] = var4;
                var4 = {};
                var6 = 'expeditedHeartbeat';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31394: for (var _fun31394_ip = 0;;) switch (_fun31394_ip) {
                        case 0:
                            var7 = arguments[1];
                            var6 = arguments[2];
                            var1 = this;
                            var0 = undefined;
                            if (!(var7 === var0)) {
                                _fun31394_ip = 19;
                                continue _fun31394
                            }
                        case 15:
                            var7 = '';
                        case 19:
                            if (!(var6 === var0)) {
                                _fun31394_ip = 25;
                                continue _fun31394
                            }
                        case 23:
                            var6 = true;
                        case 25:
                            var5 = var1._socket;
                            var2 = null;
                            var2 = var2 != var5;
                            if (!var2) {
                                _fun31394_ip = 56;
                                continue _fun31394
                            }
                        case 40:
                            var4 = var5.expeditedHeartbeat;
                            var3 = arg0;
                            var2 = var4.bind(var5)(var3, var7, var6);
                        case 56:
                            if (!var2) {
                                _fun31394_ip = 75;
                                continue _fun31394
                            }
                        case 59:
                            var2 = var1._backoff;
                            var1 = var2.cancel;
                            var1 = var1.bind(var2)();
                        case 75:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[35] = var4;
                var4 = {};
                var6 = 'resetBackoff';
                var4.key = var6;
                var6 = function() {
                    _fun31395: for (var _fun31395_ip = 0;;) switch (_fun31395_ip) {
                        case 0:
                            var5 = arguments[0];
                            var1 = this;
                            var0 = undefined;
                            if (!(var5 === var0)) {
                                _fun31395_ip = 16;
                                continue _fun31395
                            }
                        case 12:
                            var5 = '';
                        case 16:
                            var4 = var1._socket;
                            var2 = null;
                            var2 = var2 != var4;
                            if (!var2) {
                                _fun31395_ip = 42;
                                continue _fun31395
                            }
                        case 31:
                            var3 = var4.resetBackoff;
                            var2 = var3.bind(var4)(var5);
                        case 42:
                            if (!var2) {
                                _fun31395_ip = 61;
                                continue _fun31395
                            }
                        case 45:
                            var2 = var1._backoff;
                            var1 = var2.cancel;
                            var1 = var1.bind(var2)();
                        case 61:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[36] = var4;
                var4 = {};
                var6 = 'setSelectedParticipant';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31396: for (var _fun31396_ip = 0;;) switch (_fun31396_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0._localMediaSinkWantsManager;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31396_ip = 29;
                                continue _fun31396
                            }
                        case 15:
                            var1 = var2.setSelectedParticipant;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 29:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[37] = var4;
                var4 = {};
                var6 = 'setPipOpen';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31397: for (var _fun31397_ip = 0;;) switch (_fun31397_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0._localMediaSinkWantsManager;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31397_ip = 29;
                                continue _fun31397
                            }
                        case 15:
                            var1 = var2.setPipOpen;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 29:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[38] = var4;
                var4 = {};
                var6 = 'setClipRecordUser';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun31398: for (var _fun31398_ip = 0;;) switch (_fun31398_ip) {
                        case 0:
                            var0 = this;
                            var4 = var0._connection;
                            var2 = null;
                            var0 = var2 == var4;
                            if (var0) {
                                _fun31398_ip = 28;
                                continue _fun31398
                            }
                        case 18:
                            var1 = var4.setClipRecordUser;
                            var0 = var2 == var1;
                        case 28:
                            if (var0) {
                                _fun31398_ip = 53;
                                continue _fun31398
                            }
                        case 31:
                            var3 = var4.setClipRecordUser;
                            var2 = arg0;
                            var1 = arg1;
                            var0 = arg2;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 53:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[39] = var4;
                var4 = {};
                var6 = 'setNoiseCancellationEnabled';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31399: for (var _fun31399_ip = 0;;) switch (_fun31399_ip) {
                        case 0:
                            var0 = this;
                            var1 = var0._numNoiseCancellationChanges;
                            var1 = var1 + 1;
                            var0._numNoiseCancellationChanges = var1;
                            var2 = var0._voiceDuration;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31399_ip = 44;
                                continue _fun31399
                            }
                        case 30:
                            var1 = var2.setNoiseCancellationEnabled;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[40] = var4;
                var4 = {};
                var6 = 'setSimulcastDebugOverride';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun31400: for (var _fun31400_ip = 0;;) switch (_fun31400_ip) {
                        case 0:
                            var2 = arg1;
                            var3 = arg2;
                            var0 = this;
                            var1 = var0.context;
                            if (!(var2 === var1)) {
                                _fun31400_ip = 87;
                                continue _fun31400
                            }
                        case 18:
                            var1 = _closure1_slot26;
                            var1 = var1.DEFAULT;
                            if (!(var2 !== var1)) {
                                _fun31400_ip = 60;
                                continue _fun31400
                            }
                        case 35:
                            var2 = var0._goLiveQualityManager;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun31400_ip = 87;
                                continue _fun31400
                            }
                        case 47:
                            var1 = var2.setSimulcastDebugOverride;
                            var1 = var1.bind(var2)(var3);
                            _fun31400_ip = 87;
                            continue _fun31400;
                        case 60:
                            var2 = var0._localMediaSinkWantsManager;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31400_ip = 87;
                                continue _fun31400
                            }
                        case 72:
                            var1 = var2.setSimulcastDebugOverride;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0, var3);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[41] = var4;
                var4 = {};
                var6 = 'setVideoSize';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun31401: for (var _fun31401_ip = 0;;) switch (_fun31401_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var1 = this;
                            var0 = null;
                            var2 = var0 == var3;
                            if (var2) {
                                _fun31401_ip = 53;
                                continue _fun31401
                            }
                        case 18:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var5 = 32;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var7.bind(var5)(var6);
                            var5 = var6.isAndroid;
                            var2 = var5.bind(var6)();
                        case 53:
                            if (var2) {
                                _fun31401_ip = 91;
                                continue _fun31401
                            }
                        case 56:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var5 = 32;
                            var6 = var6[var5];
                            var5 = undefined;
                            var6 = var7.bind(var5)(var6);
                            var5 = var6.isIOS;
                            var2 = var5.bind(var6)();
                        case 91:
                            if (var2) {
                                _fun31401_ip = 130;
                                continue _fun31401
                            }
                        case 94:
                            var6 = var1._localMediaSinkWantsManager;
                            if (!(var0 != var6)) {
                                _fun31401_ip = 130;
                                continue _fun31401
                            }
                        case 104:
                            var5 = var6.setVideoSize;
                            var7 = var3.width;
                            var2 = var3.height;
                            var2 = var7 * var2;
                            var2 = var5.bind(var6)(var4, var2);
                        case 130:
                            var2 = var1._goLiveQualityManager;
                            if (!(var0 != var2)) {
                                _fun31401_ip = 156;
                                continue _fun31401
                            }
                        case 140:
                            var1 = var2.setVideoSize;
                            var0 = arg2;
                            var0 = var1.bind(var2)(var4, var3, var0);
                        case 156:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[42] = var4;
                var4 = {};
                var6 = 'clearJoinVoiceId';
                var4.key = var6;
                var6 = function() {
                    var1 = null;
                    var0 = this;
                    var0.joinVoiceId = var1;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[43] = var4;
                var4 = {};
                var6 = 'setNextChannelId';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31403: for (var _fun31403_ip = 0;;) switch (_fun31403_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = this;
                            var4 = var1.recordEvent;
                            var2 = {};
                            var5 = _closure1_slot33;
                            var5 = var5.SET_NEXT_CHANNEL_ID;
                            var2.c = var5;
                            var2 = var4.bind(var1)(var2);
                            var4 = _closure1_slot14;
                            var2 = var4.getChannel;
                            var0 = var1.channelId;
                            var2 = var2.bind(var4)(var0);
                            var0 = null;
                            var4 = var0 == var2;
                            var0 = undefined;
                            var9 = undefined;
                            if (var4) {
                                _fun31403_ip = 73;
                                continue _fun31403
                            }
                        case 68:
                            var9 = var2.type;
                        case 73:
                            var5 = var1.logger;
                            var4 = var5.info;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var8 = var2.concat;
                            var14 = 'Updating channel: ';
                            var12 = '(';
                            var10 = ')';
                            var13 = var3;
                            var11 = var9;
                            var2 = var14[var8](var13, var12, var11, var10, var9);
                            var2 = var4.bind(var5)(var2);
                            var1._nextChannelId = var3;
                            var2 = var1.channelIds;
                            var1 = var2.add;
                            var1 = var1.bind(var2)(var3);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[44] = var4;
                var4 = {};
                var6 = 'getNextChannelId';
                var4.key = var6;
                var6 = function() {
                    _fun31404: for (var _fun31404_ip = 0;;) switch (_fun31404_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1._nextChannelId;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun31404_ip = 21;
                                continue _fun31404
                            }
                        case 15:
                            var0 = var1._channelId;
                        case 21:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[45] = var4;
                var4 = {};
                var6 = 'channelId';
                var4.key = var6;
                var6 = function() {
                    var0 = this;
                    var0 = var0._channelId;
                    return var0;
                };
                var4.get = var6;
                var0[46] = var4;
                var4 = {};
                var6 = 'trueServerId';
                var4.key = var6;
                var6 = function() {
                    _fun31406: for (var _fun31406_ip = 0;;) switch (_fun31406_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.streamServerId;
                            var2 = null;
                            if (!(var2 == var0)) {
                                _fun31406_ip = 20;
                                continue _fun31406
                            }
                        case 15:
                            var0 = var1.guildId;
                        case 20:
                            if (!(var2 == var0)) {
                                _fun31406_ip = 29;
                                continue _fun31406
                            }
                        case 24:
                            var0 = var1.channelId;
                        case 29:
                            return var0;
                    }
                };
                var4.get = var6;
                var0[47] = var4;
                var4 = {};
                var6 = 'trueChannelId';
                var4.key = var6;
                var6 = function() {
                    _fun31407: for (var _fun31407_ip = 0;;) switch (_fun31407_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.streamServerId;
                            var2 = null;
                            if (!(var2 != var0)) {
                                _fun31407_ip = 90;
                                continue _fun31407
                            }
                        case 15:
                            var0 = var1.streamChannelId;
                            if (!(var2 == var0)) {
                                _fun31407_ip = 82;
                                continue _fun31407
                            }
                        case 25:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 39;
                            var0 = var3[var0];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var0);
                            var0 = var1.streamServerId;
                            var2 = var2.bind(var3)(var0);
                            var0 = var2.prev;
                            var2 = var0.bind(var2)();
                            var0 = var2.toString;
                            var0 = var0.bind(var2)();
                            _fun31407_ip = 88;
                            continue _fun31407;
                        case 82:
                            var0 = var1.streamChannelId;
                        case 88:
                            _fun31407_ip = 95;
                            continue _fun31407;
                        case 90:
                            var0 = var1.channelId;
                        case 95:
                            return var0;
                    }
                };
                var4.get = var6;
                var0[48] = var4;
                var4 = {};
                var6 = '_cleanupSocket';
                var4.key = var6;
                var6 = function() {
                    _fun31408: for (var _fun31408_ip = 0;;) switch (_fun31408_ip) {
                        case 0:
                            var1 = this;
                            var3 = var1._socket;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun31408_ip = 41;
                                continue _fun31408
                            }
                        case 15:
                            var2 = var3.close;
                            var2 = var2.bind(var3)();
                            var2 = var3.removeAllListeners;
                            var2 = var2.bind(var3)();
                            var1._socket = var0;
                        case 41:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[49] = var4;
                var4 = {};
                var6 = '_chooseExperiments';
                var4.key = var6;
                var6 = function() {
                    _fun31409: for (var _fun31409_ip = 0;;) switch (_fun31409_ip) {
                        case 0:
                            var2 = this;
                            var1 = new Array(0);
                            var0 = var2._recordingEnabled;
                            if (!var0) {
                                _fun31409_ip = 32;
                                continue _fun31409
                            }
                        case 16:
                            var3 = var1.push;
                            var0 = 'connection_log';
                            var0 = var3.bind(var1)(var0);
                        case 32:
                            var4 = _closure1_slot15;
                            var3 = var4.supports;
                            var0 = _closure1_slot25;
                            var0 = var0.FIXED_KEYFRAME_INTERVAL;
                            var0 = var3.bind(var4)(var0);
                            if (!var0) {
                                _fun31409_ip = 79;
                                continue _fun31409
                            }
                        case 63:
                            var3 = var1.push;
                            var0 = 'fixed_keyframe_interval';
                            var0 = var3.bind(var1)(var0);
                        case 79:
                            var0 = var2._supportedBandwidthEstimationExperiments;
                            var3 = var0.length;
                            var0 = 0;
                            if (!(var0 !== var3)) {
                                _fun31409_ip = 144;
                                continue _fun31409
                            }
                        case 96:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var0 = 40;
                            var3 = var3[var0];
                            var0 = undefined;
                            var3 = var4.bind(var0)(var3);
                            var0 = var3.workerExperimentString;
                            var3 = var0.bind(var3)();
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun31409_ip = 144;
                                continue _fun31409
                            }
                        case 134:
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var3);
                        case 144:
                            var3 = var2.context;
                            var0 = _closure1_slot26;
                            var0 = var0.DEFAULT;
                            var0 = var3 === var0;
                            if (!var0) {
                                _fun31409_ip = 210;
                                continue _fun31409
                            }
                        case 166:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var3 = 41;
                            var4 = var4[var3];
                            var3 = undefined;
                            var5 = var5.bind(var3)(var4);
                            var4 = var5.getAudioBitrateAdaptationExperimentConfig;
                            var3 = 'RtcConnection';
                            var3 = var4.bind(var5)(var3);
                            var0 = var3.enabled;
                        case 210:
                            if (!var0) {
                                _fun31409_ip = 229;
                                continue _fun31409
                            }
                        case 213:
                            var3 = var1.push;
                            var0 = 'audio_transport_cc';
                            var0 = var3.bind(var1)(var0);
                        case 229:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 42;
                            var3 = var3[var0];
                            var0 = undefined;
                            var6 = var4.bind(var0)(var3);
                            var5 = var6.getProportionalVadIndicatorExperimentConfig;
                            var4 = {};
                            var3 = '_chooseExperiments';
                            var4.location = var3;
                            var4 = var5.bind(var6)(var4);
                            var4 = var4.enabled;
                            if (!var4) {
                                _fun31409_ip = 298;
                                continue _fun31409
                            }
                        case 282:
                            var5 = var1.push;
                            var4 = 'should_analyze_user_voice_volume';
                            var4 = var5.bind(var1)(var4);
                        case 298:
                            var5 = var1.push;
                            var4 = 'keyframe_on_join';
                            var4 = var5.bind(var1)(var4);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot3;
                            var4 = 43;
                            var4 = var6[var4];
                            var9 = var5.bind(var0)(var4);
                            var6 = var9.getCurrentConfig;
                            var5 = {};
                            var5.location = var3;
                            var4 = {};
                            var7 = true;
                            var4.autoTrackExposure = var7;
                            var4 = var6.bind(var9)(var5, var4);
                            var4 = var4.enabled;
                            if (!var4) {
                                _fun31409_ip = 385;
                                continue _fun31409
                            }
                        case 369:
                            var5 = var1.push;
                            var4 = 'network_aware_socket';
                            var4 = var5.bind(var1)(var4);
                        case 385:
                            var5 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var4 = 44;
                            var4 = var10[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.getCurrentConfig;
                            var4 = {};
                            var4.location = var3;
                            var3 = {};
                            var9 = _closure1_slot0;
                            var8 = 32;
                            var8 = var10[var8];
                            var9 = var9.bind(var0)(var8);
                            var8 = var9.isWindows;
                            var8 = var8.bind(var9)();
                            var8 = !var8;
                            var3.disable = var8;
                            var3.autoTrackExposure = var7;
                            var3 = var5.bind(var6)(var4, var3);
                            var4 = var3.prewarm;
                            if (!var4) {
                                _fun31409_ip = 489;
                                continue _fun31409
                            }
                        case 473:
                            var5 = var1.push;
                            var4 = 'prewarm_cuda_cache';
                            var4 = var5.bind(var1)(var4);
                        case 489:
                            var3 = var3.clear;
                            if (!var3) {
                                _fun31409_ip = 514;
                                continue _fun31409
                            }
                        case 498:
                            var4 = var1.push;
                            var3 = 'clear_cuda_cache';
                            var3 = var4.bind(var1)(var3);
                        case 514:
                            var2._selectedExperiments = var1;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[50] = var4;
                var4 = {};
                var6 = '_handleConnecting';
                var4.key = var6;
                var6 = function() {
                    _fun31410: for (var _fun31410_ip = 0;;) switch (_fun31410_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.endpoint;
                            var1 = null;
                            if (!(var1 != var0)) {
                                _fun31410_ip = 135;
                                continue _fun31410
                            }
                        case 15:
                            var4 = _closure1_slot14;
                            var3 = var4.getChannel;
                            var0 = var2.channelId;
                            var0 = var3.bind(var4)(var0);
                            var1 = var1 == var0;
                            var12 = undefined;
                            if (var1) {
                                _fun31410_ip = 51;
                                continue _fun31410
                            }
                        case 46:
                            var12 = var0.type;
                        case 51:
                            var3 = var2.logger;
                            var1 = var3.info;
                            var20 = var2.endpoint;
                            var0 = var2.getRTCConnectionId;
                            var18 = var0.bind(var2)();
                            var16 = var2.channelId;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var8 = var0.concat;
                            var21 = 'Connecting to RTC server ';
                            var19 = ', rtc-connection-id: ';
                            var17 = ', channel: ';
                            var15 = '(';
                            var13 = ')';
                            var14 = var12;
                            var0 = var21[var8](var20, var19, var18, var17, var16, var15, var14, var13, var12);
                            var0 = var1.bind(var3)(var0);
                        case 135:
                            var1 = var2.setState;
                            var0 = _closure1_slot22;
                            var0 = var0.CONNECTING;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[51] = var4;
                var4 = {};
                var6 = '_handleConnect';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31411: for (var _fun31411_ip = 0;;) switch (_fun31411_ip) {
                        case 0:
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var2 = arg0;
                            var _closure3_slot1 = var2;
                            var3 = var1.token;
                            var _closure3_slot2 = var3;
                            var2 = false;
                            var1.reconnecting = var2;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun31411_ip = 89;
                                continue _fun31411
                            }
                        case 40:
                            var4 = var1.logger;
                            var3 = var4.info;
                            var2 = 'Connected to RTC server.';
                            var2 = var3.bind(var4)(var2);
                            var2 = var1._fetchAsyncResourcesPromise;
                            var1 = var2.finally;
                            var0 = function() { // Environment: var0
                                var4 = _closure3_slot1;
                                var3 = var4.identify;
                                var1 = {};
                                var2 = _closure3_slot0;
                                var5 = var2.trueServerId;
                                var1.serverId = var5;
                                var5 = var2.trueChannelId;
                                var1.channelId = var5;
                                var5 = var2.userId;
                                var1.userId = var5;
                                var5 = var2.sessionId;
                                var1.sessionId = var5;
                                var0 = _closure3_slot2;
                                var1.token = var0;
                                var7 = _closure1_slot15;
                                var5 = var7.getSupportedSecureFramesProtocolVersion;
                                var5 = var5.bind(var7)();
                                var1.maxDaveProtocolVersion = var5;
                                var6 = var7.supports;
                                var5 = _closure1_slot25;
                                var5 = var5.VIDEO;
                                var5 = var6.bind(var7)(var5);
                                var1.video = var5;
                                var6 = var7.getVideoStreamParameters;
                                var5 = var2.context;
                                var5 = var6.bind(var7)(var5);
                                var1.streamParameters = var5;
                                var1 = var3.bind(var4)(var1);
                                var1 = var2.setState;
                                var0 = _closure1_slot22;
                                var0 = var0.AUTHENTICATING;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        case 89:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var5 = 'RTCConnection._handleConnect(...): Token is missing.';
                            var6 = var1;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var4.value = var6;
                var0[52] = var4;
                var4 = {};
                var6 = '_handleDisconnect';
                var4.key = var6;
                var6 = function arg0, arg1, arg2, arg3() {
                    _fun31413: for (var _fun31413_ip = 0;;) switch (_fun31413_ip) {
                        case 0:
                            var1 = arg1;
                            var8 = arg2;
                            var13 = arg3;
                            var4 = this;
                            var _closure3_slot0 = var4;
                            var _closure3_slot1 = var13;
                            var _closure3_slot2 = var4;
                            var5 = var4.logger;
                            var3 = var5.info;
                            var15 = var4.state;
                            var6 = global;
                            var2 = var6.HermesInternal;
                            var11 = var2.concat;
                            var22 = 'Disconnected from RTC server, clean: ';
                            var20 = ', code: ';
                            var18 = ', reason: ';
                            var16 = ', state: ';
                            var21 = var1;
                            var19 = var8;
                            var17 = var13;
                            var2 = var22[var11](var21, var20, var19, var18, var17, var16, var15, var14);
                            var2 = var3.bind(var5)(var2);
                            if (var1) {
                                _fun31413_ip = 110;
                                continue _fun31413
                            }
                        case 101:
                            var2 = var4._connecting;
                            var1 = !var2;
                        case 110:
                            if (var1) {
                                _fun31413_ip = 119;
                                continue _fun31413
                            }
                        case 113:
                            var1 = var4._encountered_socket_failure;
                        case 119:
                            if (var1) {
                                _fun31413_ip = 248;
                                continue _fun31413
                            }
                        case 125:
                            var5 = _closure1_slot1;
                            var3 = _closure1_slot3;
                            var2 = 21;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var5.bind(var2)(var3);
                            var3 = var5.track;
                            var1 = _closure1_slot20;
                            var2 = var1.VOICE_CONNECTION_SOCKET_FAILURE;
                            var1 = {};
                            var7 = var4._getAnalyticsProperties;
                            var20 = var7.bind(var4)();
                            var21 = var1;
                            var7 = copyDataProperties(var21, var20);
                            var9 = var4.hostname;
                            var7 = 'hostname';
                            var1[var7] = var9;
                            var9 = var4._connectCount;
                            var7 = 'connect_count';
                            var1[var7] = var9;
                            var7 = 'code';
                            var1[var7] = var8;
                            var7 = 'reason';
                            var1[var7] = var13;
                            var1 = var3.bind(var5)(var2, var1);
                            var1 = true;
                            var4._encountered_socket_failure = var1;
                        case 248:
                            var3 = _closure1_slot16;
                            var2 = var3.getRemoteDisconnectVoiceChannelId;
                            var3 = var2.bind(var3)();
                            var2 = var4.channelId;
                            if (!(var3 === var2)) {
                                _fun31413_ip = 298;
                                continue _fun31413
                            }
                        case 276:
                            var3 = var4._connection;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun31413_ip = 298;
                                continue _fun31413
                            }
                        case 288:
                            var2 = var3.wasRemoteDisconnected;
                            var2 = var2.bind(var3)();
                        case 298:
                            var2 = 'Force Close';
                            var5 = var2 !== var13;
                            if (!var5) {
                                _fun31413_ip = 410;
                                continue _fun31413
                            }
                        case 311:
                            var7 = var4._backoff;
                            var3 = var7.fail;
                            var2 = var4.reconnect;
                            var8 = var3.bind(var7)(var2);
                            var7 = var4.logger;
                            var3 = var7.warn;
                            var2 = 1000;
                            var9 = var8 / var2;
                            var8 = var9.toFixed;
                            var2 = 2;
                            var19 = var8.bind(var9)(var2);
                            var2 = var6.HermesInternal;
                            var10 = var2.concat;
                            var22 = 'Disconnect was not clean! reason=';
                            var20 = '. Reconnecting in ';
                            var18 = ' seconds.';
                            var21 = var13;
                            var2 = var22[var10](var21, var20, var19, var18, var17);
                            var2 = var3.bind(var7)(var2);
                        case 410:
                            var3 = var4.state;
                            var2 = _closure1_slot22;
                            var2 = var2.DISCONNECTED;
                            if (!(var3 !== var2)) {
                                _fun31413_ip = 2555;
                                continue _fun31413
                            }
                        case 432:
                            var3 = var4._videoQuality;
                            var _closure3_slot3 = var3;
                            var10 = null;
                            if (!(var10 != var3)) {
                                _fun31413_ip = 653;
                                continue _fun31413
                            }
                        case 451:
                            var7 = var4.context;
                            var2 = _closure1_slot26;
                            var2 = var2.DEFAULT;
                            if (!(var7 === var2)) {
                                _fun31413_ip = 653;
                                continue _fun31413
                            }
                        case 473:
                            var2 = var3.stop;
                            var2 = var2.bind(var3)();
                            var2 = var4._sentVideo;
                            if (!var2) {
                                _fun31413_ip = 628;
                                continue _fun31413
                            }
                        case 495:
                            var2 = var3.getOutboundStats;
                            var8 = var2.bind(var3)();
                            var7 = var8.forEach;
                            var2 = function(arg0) { // Environment: var0
                                _fun31414: for (var _fun31414_ip = 0;;) switch (_fun31414_ip) {
                                    case 0:
                                        var9 = arg0;
                                        var2 = var9.num_frames;
                                        var0 = null;
                                        var3 = var0 != var2;
                                        var1 = 0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun31414_ip = 25;
                                            continue _fun31414
                                        }
                                    case 22:
                                        var0 = var2;
                                    case 25:
                                        if (!(var0 > var1)) {
                                            _fun31414_ip = 352;
                                            continue _fun31414
                                        }
                                    case 32:
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot3;
                                        var0 = 21;
                                        var0 = var7[var0];
                                        var5 = undefined;
                                        var3 = var6.bind(var5)(var0);
                                        var2 = var3.track;
                                        var0 = _closure1_slot20;
                                        var1 = var0.VIDEO_STREAM_ENDED;
                                        var0 = {};
                                        var4 = _closure3_slot0;
                                        var10 = var4._getAnalyticsProperties;
                                        var15 = var10.bind(var4)();
                                        var16 = var0;
                                        var10 = copyDataProperties(var16, var15);
                                        var10 = 45;
                                        var10 = var7[var10];
                                        var12 = var6.bind(var5)(var10);
                                        var10 = var12.getAppHardwareAccelerationEnabled;
                                        var12 = var10.bind(var12)();
                                        var10 = 'app_hardware_acceleration_enabled';
                                        var0[var10] = var12;
                                        var10 = var4.getMediaSessionId;
                                        var12 = var10.bind(var4)();
                                        var10 = 'media_session_id';
                                        var0[var10] = var12;
                                        var12 = var4.userId;
                                        var10 = 'sender_user_id';
                                        var0[var10] = var12;
                                        var12 = _closure3_slot1;
                                        var10 = 'reason';
                                        var0[var10] = var12;
                                        var10 = 'sender';
                                        var12 = 'participant_type';
                                        var0[var12] = var10;
                                        var14 = _closure1_slot18;
                                        var13 = var14.getRegion;
                                        var12 = var4.hostname;
                                        var13 = var13.bind(var14)(var12);
                                        var12 = 'guild_region';
                                        var0[var12] = var13;
                                        var13 = var4.hostname;
                                        var12 = 'hostname';
                                        var0[var12] = var13;
                                        var12 = _closure1_slot15;
                                        var11 = var12.getHardwareEncoding;
                                        var12 = var11.bind(var12)();
                                        var11 = 'hardware_enabled';
                                        var0[var11] = var12;
                                        var16 = var0;
                                        var15 = var9;
                                        var9 = copyDataProperties(var16, var15);
                                        var11 = _closure3_slot3;
                                        var9 = var11.getNetworkStats;
                                        var15 = var9.bind(var11)();
                                        var16 = var0;
                                        var9 = copyDataProperties(var16, var15);
                                        var9 = _closure3_slot3;
                                        var8 = var9.getCodecUsageStats;
                                        var4 = var4.userId;
                                        var15 = var8.bind(var9)(var10, var4);
                                        var16 = var0;
                                        var4 = copyDataProperties(var16, var15);
                                        var4 = 46;
                                        var4 = var7[var4];
                                        var4 = var6.bind(var5)(var4);
                                        var5 = var4.bind(var5)();
                                        var4 = 'device_performance_class';
                                        var0[var4] = var5;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 352:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = var7.bind(var8)(var2);
                            var2 = var3.getCameraDurationStats;
                            var11 = var2.bind(var3)();
                            var2 = var10 != var11;
                            if (!var2) {
                                _fun31413_ip = 551;
                                continue _fun31413
                            }
                        case 539:
                            var8 = var11.camera_enabled_duration;
                            var7 = 0;
                            var2 = var8 > var7;
                        case 551:
                            if (!var2) {
                                _fun31413_ip = 628;
                                continue _fun31413
                            }
                        case 554:
                            var8 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var2 = 21;
                            var7 = var7[var2];
                            var2 = undefined;
                            var9 = var8.bind(var2)(var7);
                            var8 = var9.track;
                            var2 = _closure1_slot20;
                            var7 = var2.VIDEO_CALL_ENDED;
                            var2 = {};
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var11 = var4.getMediaSessionId;
                            var12 = var11.bind(var4)();
                            var11 = 'media_session_id';
                            var2[var11] = var12;
                            var2 = var8.bind(var9)(var7, var2);
                        case 628:
                            var2 = var3.getInboundParticipants;
                            var7 = var2.bind(var3)();
                            var3 = var7.forEach;
                            var2 = function(arg0) { // Environment: var0
                                _fun31415: for (var _fun31415_ip = 0;;) switch (_fun31415_ip) {
                                    case 0:
                                        var8 = arg0;
                                        var1 = _closure3_slot3;
                                        var0 = var1.getInboundStats;
                                        var6 = var0.bind(var1)(var8);
                                        var1 = null;
                                        var2 = var1 == var6;
                                        var0 = undefined;
                                        var3 = undefined;
                                        if (var2) {
                                            _fun31415_ip = 40;
                                            continue _fun31415
                                        }
                                    case 34:
                                        var3 = var6.num_frames;
                                    case 40:
                                        var4 = var1 != var3;
                                        var2 = 0;
                                        var1 = 0;
                                        if (!var4) {
                                            _fun31415_ip = 54;
                                            continue _fun31415
                                        }
                                    case 51:
                                        var1 = var3;
                                    case 54:
                                        if (!(var1 > var2)) {
                                            _fun31415_ip = 341;
                                            continue _fun31415
                                        }
                                    case 61:
                                        var11 = _closure1_slot1;
                                        var12 = _closure1_slot3;
                                        var1 = 21;
                                        var1 = var12[var1];
                                        var4 = var11.bind(var0)(var1);
                                        var3 = var4.track;
                                        var1 = _closure1_slot20;
                                        var2 = var1.VIDEO_STREAM_ENDED;
                                        var1 = {};
                                        var10 = _closure3_slot0;
                                        var7 = var10._getAnalyticsProperties;
                                        var14 = var7.bind(var10)();
                                        var15 = var1;
                                        var7 = copyDataProperties(var15, var14);
                                        var7 = 45;
                                        var7 = var12[var7];
                                        var11 = var11.bind(var0)(var7);
                                        var7 = var11.getAppHardwareAccelerationEnabled;
                                        var11 = var7.bind(var11)();
                                        var7 = 'app_hardware_acceleration_enabled';
                                        var1[var7] = var11;
                                        var7 = var10.getMediaSessionId;
                                        var11 = var7.bind(var10)();
                                        var7 = 'media_session_id';
                                        var1[var7] = var11;
                                        var7 = 'sender_user_id';
                                        var1[var7] = var8;
                                        var11 = _closure3_slot1;
                                        var7 = 'reason';
                                        var1[var7] = var11;
                                        var7 = 'receiver';
                                        var11 = 'participant_type';
                                        var1[var11] = var7;
                                        var13 = _closure1_slot18;
                                        var12 = var13.getRegion;
                                        var11 = var10.hostname;
                                        var12 = var12.bind(var13)(var11);
                                        var11 = 'guild_region';
                                        var1[var11] = var12;
                                        var11 = var10.hostname;
                                        var10 = 'hostname';
                                        var1[var10] = var11;
                                        var10 = _closure1_slot15;
                                        var9 = var10.getHardwareEncoding;
                                        var10 = var9.bind(var10)();
                                        var9 = 'hardware_enabled';
                                        var1[var9] = var10;
                                        var15 = var1;
                                        var14 = var6;
                                        var6 = copyDataProperties(var15, var14);
                                        var9 = _closure3_slot3;
                                        var6 = var9.getNetworkStats;
                                        var14 = var6.bind(var9)();
                                        var15 = var1;
                                        var6 = copyDataProperties(var15, var14);
                                        var6 = _closure3_slot3;
                                        var5 = var6.getCodecUsageStats;
                                        var14 = var5.bind(var6)(var7, var8);
                                        var15 = var1;
                                        var5 = copyDataProperties(var15, var14);
                                        var1 = var3.bind(var4)(var2, var1);
                                    case 341:
                                        return var0;
                                }
                            };
                            var2 = var3.bind(var7)(var2);
                        case 653:
                            var2 = var4.getMediaSessionId;
                            var2 = var2.bind(var4)();
                            var _closure3_slot4 = var2;
                            var3 = _closure1_slot15;
                            var2 = var3.getMediaEngine;
                            var3 = var2.bind(var3)();
                            var2 = var3.getCodecSurvey;
                            var7 = var2.bind(var3)();
                            var3 = var7.then;
                            var2 = function(arg0) { // Environment: var0
                                _fun31416: for (var _fun31416_ip = 0;;) switch (_fun31416_ip) {
                                    case 0:
                                        var0 = global;
                                        var3 = var0.JSON;
                                        var2 = var3.parse;
                                        var1 = arg0;
                                        var6 = var2.bind(var3)(var1);
                                        var2 = null;
                                        if (!(var2 != var6)) {
                                            _fun31416_ip = 154;
                                            continue _fun31416
                                        }
                                    case 31:
                                        var1 = var6.available_video_encoders;
                                        if (!(var2 != var1)) {
                                            _fun31416_ip = 154;
                                            continue _fun31416
                                        }
                                    case 43:
                                        var1 = var6.available_video_decoders;
                                        if (!(var2 != var1)) {
                                            _fun31416_ip = 154;
                                            continue _fun31416
                                        }
                                    case 55:
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot3;
                                        var1 = 21;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var5 = var4.bind(var1)(var3);
                                        var4 = var5.track;
                                        var2 = _closure1_slot20;
                                        var3 = var2.VOICE_CODEC_DETECTED;
                                        var2 = {};
                                        var10 = var2;
                                        var9 = var6;
                                        var6 = copyDataProperties(var10, var9);
                                        var8 = _closure3_slot0;
                                        var7 = var8.getRTCConnectionId;
                                        var8 = var7.bind(var8)();
                                        var7 = 'rtc_connection_id';
                                        var2[var7] = var8;
                                        var7 = _closure3_slot4;
                                        var6 = 'media_session_id';
                                        var2[var6] = var7;
                                        var2 = var4.bind(var5)(var3, var2);
                                        return var1;
                                    case 154:
                                        var2 = var0.Error;
                                        var0 = var2.prototype;
                                        var1 = Object.create(var0, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var10 = 'codec survey is not available';
                                        var11 = var1;
                                        var0 = new var11[var2](var10, var9);
                                        var0 = var0 instanceof Object ? var0 : var1;
                                        throw var0;
                                }
                            };
                            var7 = var3.bind(var7)(var2);
                            var3 = var7.catch;
                            var2 = function(arg0) { // Environment: var0
                                var0 = _closure3_slot0;
                                var2 = var0.logger;
                                var1 = var2.warn;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var2 = var3.bind(var7)(var2);
                            var3 = var4._trackMLSFailures;
                            var2 = {
                                'recovered': false,
                                'downgraded': false
                            };
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot18;
                            var2 = var3.shouldIncludePreferredRegion;
                            var2 = var2.bind(var3)();
                            var9 = null;
                            if (!var2) {
                                _fun31413_ip = 780;
                                continue _fun31413
                            }
                        case 766:
                            var3 = _closure1_slot18;
                            var2 = var3.getPreferredRegion;
                            var9 = var2.bind(var3)();
                        case 780:
                            var3 = _closure1_slot15;
                            var2 = var3.getSettings;
                            var3 = var2.bind(var3)();
                            var8 = _closure1_slot14;
                            var7 = var8.getChannel;
                            var2 = var4.channelId;
                            var7 = var7.bind(var8)(var2);
                            var11 = _closure1_slot11;
                            var8 = var11.getConnectionStats;
                            var2 = var4.getMediaEngineConnectionId;
                            var2 = var2.bind(var4)();
                            var2 = var8.bind(var11)(var2);
                            var11 = var10 == var2;
                            var12 = undefined;
                            var8 = undefined;
                            if (var11) {
                                _fun31413_ip = 897;
                                continue _fun31413
                            }
                        case 849:
                            var2 = var2.stats;
                            var2 = var2.rtp;
                            var14 = var2.outbound;
                            var11 = var14.find;
                            var2 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = 'audio';
                                var0 = var0 === var1;
                                return var0;
                            };
                            var2 = var11.bind(var14)(var2);
                            var11 = var10 == var2;
                            var8 = undefined;
                            if (var11) {
                                _fun31413_ip = 897;
                                continue _fun31413
                            }
                        case 891:
                            var8 = var2.sampleRateMismatchPercent;
                        case 897:
                            var2 = {};
                            var11 = var4._getAnalyticsProperties;
                            var20 = var11.bind(var4)();
                            var21 = var2;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4.hostname;
                            var11 = 'hostname';
                            var2[var11] = var14;
                            var14 = var4.port;
                            var11 = 'port';
                            var2[var11] = var14;
                            var14 = var4.protocol;
                            var11 = 'protocol';
                            var2[var11] = var14;
                            var11 = 'reconnect';
                            var2[var11] = var5;
                            var11 = 'reason';
                            var2[var11] = var13;
                            var11 = var4.getDuration;
                            var13 = var11.bind(var4)();
                            var11 = 'duration';
                            var2[var11] = var13;
                            var14 = _closure1_slot16;
                            var13 = var14.getUserVoiceSettingsStats;
                            var11 = var4.context;
                            var20 = var13.bind(var14)(var11);
                            var21 = var2;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1052;
                                continue _fun31413
                            }
                        case 1040:
                            var13 = var14.getMosStats;
                            var11 = var13.bind(var14)();
                        case 1052:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1087;
                                continue _fun31413
                            }
                        case 1077:
                            var13 = var14.getPacketStats;
                            var11 = var13.bind(var14)();
                        case 1087:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1124;
                                continue _fun31413
                            }
                        case 1112:
                            var13 = var14.getBytesStats;
                            var11 = var13.bind(var14)();
                        case 1124:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1161;
                                continue _fun31413
                            }
                        case 1149:
                            var13 = var14.getBufferStats;
                            var11 = var13.bind(var14)();
                        case 1161:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1196;
                                continue _fun31413
                            }
                        case 1186:
                            var13 = var14.getNetworkStats;
                            var11 = var13.bind(var14)();
                        case 1196:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1233;
                                continue _fun31413
                            }
                        case 1221:
                            var13 = var14.getSystemResourceStats;
                            var11 = var13.bind(var14)();
                        case 1233:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1270;
                                continue _fun31413
                            }
                        case 1258:
                            var13 = var14.getFrameOpStats;
                            var11 = var13.bind(var14)();
                        case 1270:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1305;
                                continue _fun31413
                            }
                        case 1295:
                            var13 = var14.getDurationStats;
                            var11 = var13.bind(var14)();
                        case 1305:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1342;
                                continue _fun31413
                            }
                        case 1330:
                            var13 = var14.getTransportStats;
                            var11 = var13.bind(var14)();
                        case 1342:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1379;
                                continue _fun31413
                            }
                        case 1367:
                            var13 = var14.getE2EEStats;
                            var11 = var13.bind(var14)();
                        case 1379:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1414;
                                continue _fun31413
                            }
                        case 1404:
                            var13 = var14.getAudioDeviceStats;
                            var11 = var13.bind(var14)();
                        case 1414:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceQuality;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1451;
                                continue _fun31413
                            }
                        case 1439:
                            var13 = var14.getAudioLevelStats;
                            var11 = var13.bind(var14)();
                        case 1451:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._voiceDuration;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1486;
                                continue _fun31413
                            }
                        case 1476:
                            var13 = var14.getDurationStats;
                            var11 = var13.bind(var14)();
                        case 1486:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var13 = _closure1_slot10;
                            var11 = var13.getUsageStats;
                            var20 = var11.bind(var13)();
                            var21 = var2;
                            var11 = copyDataProperties(var21, var20);
                            var11 = var4.getAudioDeviceStates;
                            var20 = var11.bind(var4)();
                            var21 = var2;
                            var11 = copyDataProperties(var21, var20);
                            var14 = var4._systemResponsiveness;
                            var13 = var10 == var14;
                            var11 = undefined;
                            if (var13) {
                                _fun31413_ip = 1563;
                                continue _fun31413
                            }
                        case 1551:
                            var13 = var14.getPttQueueLatencyStats;
                            var11 = var13.bind(var14)();
                        case 1563:
                            var21 = var2;
                            var20 = var11;
                            var11 = copyDataProperties(var21, var20);
                            var13 = var4._numNoiseCancellationChanges;
                            var11 = 'num_noise_cancellation_changes';
                            var2[var11] = var13;
                            var11 = var4.getMediaSessionId;
                            var13 = var11.bind(var4)();
                            var11 = 'media_session_id';
                            var2[var11] = var13;
                            var13 = var10 != var7;
                            var11 = null;
                            if (!var13) {
                                _fun31413_ip = 1624;
                                continue _fun31413
                            }
                        case 1618:
                            var11 = var7.bitrate;
                        case 1624:
                            var7 = 'channel_bitrate';
                            var2[var7] = var11;
                            var7 = 'cloudflare_best_region';
                            var2[var7] = var9;
                            var9 = var4._connectCount;
                            var7 = 'connect_count';
                            var2[var7] = var9;
                            var11 = var6.Math;
                            var9 = var11.round;
                            var7 = var4.getAveragePing;
                            var7 = var7.bind(var4)();
                            var9 = var9.bind(var11)(var7);
                            var7 = 'ping_average';
                            var2[var7] = var9;
                            var9 = var4._pingBadCount;
                            var7 = 'ping_bad_count';
                            var2[var7] = var9;
                            var7 = var4._pingTimeouts;
                            var9 = var7.length;
                            var7 = 'ping_timeout';
                            var2[var7] = var9;
                            var9 = var4._inputDetected;
                            var7 = 'input_detected';
                            var2[var7] = var9;
                            var9 = _closure1_slot15;
                            var7 = var9.getNoInputDetectedNotice;
                            var9 = var7.bind(var9)();
                            var7 = 'no_input_detected_notice';
                            var2[var7] = var9;
                            var9 = var3.mode;
                            var7 = 'audio_input_mode';
                            var2[var7] = var9;
                            var7 = var3.modeOptions;
                            var9 = var7.autoThreshold;
                            var7 = 'automatic_audio_input_sensitivity_enabled';
                            var2[var7] = var9;
                            var7 = var3.modeOptions;
                            var9 = var7.threshold;
                            var7 = 'audio_input_sensitivity';
                            var2[var7] = var9;
                            var9 = var3.echoCancellation;
                            var7 = 'echo_cancellation_enabled';
                            var2[var7] = var9;
                            var9 = var3.sidechainCompression;
                            var7 = 'sidechain_compression_enabled';
                            var2[var7] = var9;
                            var9 = var3.noiseSuppression;
                            var7 = 'noise_suppression_enabled';
                            var2[var7] = var9;
                            var9 = var3.noiseCancellation;
                            var7 = 'noise_cancellation_enabled';
                            var2[var7] = var9;
                            var9 = var4._noiseCancellationError;
                            var7 = 'noise_canceller_error';
                            var2[var7] = var9;
                            var9 = var3.automaticGainControl;
                            var7 = 'automatic_gain_control_enabled';
                            var2[var7] = var9;
                            var9 = var3.outputVolume;
                            var7 = 'voice_output_volume';
                            var2[var7] = var9;
                            var9 = var3.inputVolume;
                            var7 = 'voice_input_volume';
                            var2[var7] = var9;
                            var9 = var4._encryptionMode;
                            var7 = 'encryption_mode';
                            var2[var7] = var9;
                            var7 = var4.channelIds;
                            var9 = var7.size;
                            var7 = 'channel_count';
                            var2[var7] = var9;
                            var9 = _closure1_slot1;
                            var11 = _closure1_slot3;
                            var7 = 46;
                            var7 = var11[var7];
                            var7 = var9.bind(var12)(var7);
                            var9 = var7.bind(var12)();
                            var7 = 'device_performance_class';
                            var2[var7] = var9;
                            var7 = var4._connection;
                            var7 = var10 != var7;
                            var9 = null;
                            if (!var7) {
                                _fun31413_ip = 2082;
                                continue _fun31413
                            }
                        case 2052:
                            var13 = var4._connection;
                            var11 = var10 == var13;
                            var7 = undefined;
                            if (var11) {
                                _fun31413_ip = 2079;
                                continue _fun31413
                            }
                        case 2067:
                            var11 = var13.getNumFastUdpReconnects;
                            var7 = var11.bind(var13)();
                        case 2079:
                            var9 = var7;
                        case 2082:
                            var7 = 'num_fast_udp_reconnects';
                            var2[var7] = var9;
                            var9 = var4.parentMediaSessionId;
                            var7 = 'parent_media_session_id';
                            var2[var7] = var9;
                            var9 = _closure1_slot15;
                            var7 = var9.getMediaEngine;
                            var11 = var7.bind(var9)();
                            var7 = var11.getAudioSubsystem;
                            var11 = var7.bind(var11)();
                            var7 = 'audio_subsystem';
                            var2[var7] = var11;
                            var7 = var9.getMediaEngine;
                            var11 = var7.bind(var9)();
                            var7 = var11.getAudioLayer;
                            var11 = var7.bind(var11)();
                            var7 = 'audio_layer';
                            var2[var7] = var11;
                            var11 = var3.automaticAudioSubsystem;
                            var7 = 'automatic_audio_subsystem';
                            var2[var7] = var11;
                            var7 = var4.getVoiceParticipantType;
                            var11 = var7.bind(var4)();
                            var7 = 'participant_type';
                            var2[var7] = var11;
                            var7 = 'audio_capture_sample_rate_mismatch_percent';
                            var2[var7] = var8;
                            var7 = var9.getState;
                            var7 = var7.bind(var9)();
                            var8 = var7.krispVersion;
                            var7 = 'krisp_sdk_version';
                            var2[var7] = var8;
                            var8 = var4._secureFramesMaxConcurrentTransitions;
                            var7 = 'secure_frames_max_concurrent_transitions';
                            var2[var7] = var8;
                            var8 = var4._secureFramesTransitionPrepareCount;
                            var7 = 'secure_frames_transition_prepare_count';
                            var2[var7] = var8;
                            var8 = var4._secureFramesTransitionExecuteCount;
                            var7 = 'secure_frames_transition_execute_count';
                            var2[var7] = var8;
                            var7 = var3.modeOptions;
                            var8 = var7.vadUseKrisp;
                            var7 = 'vad_use_advanced_voice_activity';
                            var2[var7] = var8;
                            var7 = var9.getExperimentalSoundshare;
                            var8 = var7.bind(var9)();
                            var7 = 'soundshare_experimental';
                            var2[var7] = var8;
                            var8 = var4.joinVoiceId;
                            var7 = 'join_voice_id';
                            var2[var7] = var8;
                            var7 = var3.bypassSystemInputProcessing;
                            var3 = 'bypass_system_input_processing';
                            var2[var3] = var7;
                            var3 = var9.getSystemMicrophoneMode;
                            var7 = var3.bind(var9)();
                            var3 = 'system_microphone_mode';
                            var2[var3] = var7;
                            var _closure3_slot5 = var2;
                            var2 = function() { // Environment: var0
                                var3 = _closure1_slot4;
                                var2 = undefined;
                                var1 = function*() { // Environment: var0
                                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                                        _fun31421: for (var _fun31421_ip = 0;;) switch (_fun31421_ip) {
                                            case 0:
                                                StartGenerator();
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun31421_ip = 76;
                                                    continue _fun31421
                                                }
                                            case 7:
                                                var1 = _closure3_slot2;
                                                var3 = var1._systemResources;
                                                var4 = null;
                                                var2 = var4 == var3;
                                                var1 = undefined;
                                                if (var2) {
                                                    _fun31421_ip = 43;
                                                    continue _fun31421
                                                }
                                            case 31:
                                                var2 = var3.getBatteryLevelStats;
                                                var1 = var2.bind(var3)();
                                            case 43:
                                                SaveGenerator(address = 47);
                                            case 45:
                                                return var1;
                                            case 47:
                                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                if (var2) {
                                                    _fun31421_ip = 73;
                                                    continue _fun31421
                                                }
                                            case 53:
                                                var2 = var1;
                                                if (!(var4 == var2)) {
                                                    _fun31421_ip = 70;
                                                    continue _fun31421
                                                }
                                            case 60:
                                                var3 = {};
                                                var3.batteryUsageRounded = var4;
                                                var2 = var3;
                                            case 70:
                                                return var2;
                                            case 73:
                                                return var1;
                                            case 76:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var1 = var3.bind(var2)(var1);
                                var _closure4_slot0 = var1;
                                var0 = function() { // Environment: var0
                                    var0 = undefined;
                                    var3 = _closure4_slot0;
                                    var2 = var3.apply;
                                    var0 = arguments;
                                    var1 = var0;
                                    var0 = this;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                return var0;
                            };
                            var2 = var2.bind(var12)();
                            var7 = var6.Promise;
                            var3 = var7.all;
                            var8 = var2.bind(var12)();
                            var2 = new Array(3);
                            var2[0] = var8;
                            var11 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var8 = 47;
                            var8 = var13[var8];
                            var11 = var11.bind(var12)(var8);
                            var8 = var11.getKrispModel;
                            var8 = var8.bind(var11)();
                            var2[1] = var8;
                            var8 = var9.getKrispEnableStats;
                            var8 = var8.bind(var9)();
                            if (var8) {
                                _fun31413_ip = 2497;
                                continue _fun31413
                            }
                        case 2478:
                            var9 = var6.Promise;
                            var8 = var9.resolve;
                            var8 = var8.bind(var9)(var10);
                            _fun31413_ip = 2521;
                            continue _fun31413;
                        case 2497:
                            var10 = _closure1_slot15;
                            var9 = var10.getMediaEngine;
                            var10 = var9.bind(var10)();
                            var9 = var10.getNoiseCancellationStats;
                            var8 = var9.bind(var10)();
                        case 2521:
                            var2[2] = var8;
                            var3 = var3.bind(var7)(var2);
                            var2 = var3.then;
                            var0 = function(arg0) { // Environment: var0
                                _fun31423: for (var _fun31423_ip = 0;;) switch (_fun31423_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var1 = var5[Symbol.iterator];
                                        var5 = var1().next;
                                        var3 = undefined;
                                        var2 = undefined;
                                        var4 = undefined;
                                        var6 = var5().value;
                                        var7 = var1;
                                        var7 = var7 === var3;
                                        var2 = var7;
                                        if (var7) {
                                            _fun31423_ip = 32;
                                            continue _fun31423
                                        }
                                    case 29:
                                        var4 = var6;
                                    case 32: // try_start_0
                                        var6 = var4;
                                        var10 = var6.batteryUsageRounded;
                                    case 41: // try_end0
                                        var4 = undefined;
                                        var6 = var2;
                                        if (var6) {
                                            _fun31423_ip = 69;
                                            continue _fun31423
                                        }
                                    case 49:
                                        var6 = var5().value;
                                        var7 = var1;
                                        var7 = var7 === var3;
                                        var2 = var7;
                                        if (var7) {
                                            _fun31423_ip = 69;
                                            continue _fun31423
                                        }
                                    case 66:
                                        var4 = var6;
                                    case 69:
                                        var9 = var4;
                                        var4 = undefined;
                                        var6 = var2;
                                        if (var6) {
                                            _fun31423_ip = 100;
                                            continue _fun31423
                                        }
                                    case 80:
                                        var5 = var5().value;
                                        var6 = var1;
                                        var6 = var6 === var3;
                                        var2 = var6;
                                        if (var6) {
                                            _fun31423_ip = 100;
                                            continue _fun31423
                                        }
                                    case 97:
                                        var4 = var5;
                                    case 100:
                                        var8 = var4;
                                        var4 = var2;
                                        if (var4) {
                                            _fun31423_ip = 112;
                                            continue _fun31423
                                        }
                                    case 109:
                                        var1.return();
                                    case 112:
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot3;
                                        var5 = 21;
                                        var5 = var7[var5];
                                        var7 = var6.bind(var3)(var5);
                                        var6 = var7.track;
                                        var4 = _closure1_slot20;
                                        var5 = var4.VOICE_DISCONNECT;
                                        var4 = {};
                                        var12 = _closure3_slot5;
                                        var13 = var4;
                                        var11 = copyDataProperties(var13, var12);
                                        var11 = var10;
                                        var10 = 'battery_usage';
                                        var4[var10] = var11;
                                        var10 = var9;
                                        var9 = 'krisp_nc_model';
                                        var4[var9] = var10;
                                        var9 = var8;
                                        var10 = null;
                                        var9 = var10 == var9;
                                        var11 = undefined;
                                        if (var9) {
                                            _fun31423_ip = 219;
                                            continue _fun31423
                                        }
                                    case 208:
                                        var9 = var8;
                                        var11 = var9.lowNoiseMs;
                                    case 219:
                                        var9 = 'duration_low_noise_detected_ms';
                                        var4[var9] = var11;
                                        var9 = var8;
                                        var9 = var10 == var9;
                                        var11 = undefined;
                                        if (var9) {
                                            _fun31423_ip = 253;
                                            continue _fun31423
                                        }
                                    case 242:
                                        var9 = var8;
                                        var11 = var9.mediumNoiseMs;
                                    case 253:
                                        var9 = 'duration_medium_noise_detected_ms';
                                        var4[var9] = var11;
                                        var9 = var8;
                                        var9 = var10 == var9;
                                        var11 = undefined;
                                        if (var9) {
                                            _fun31423_ip = 287;
                                            continue _fun31423
                                        }
                                    case 276:
                                        var9 = var8;
                                        var11 = var9.highNoiseMs;
                                    case 287:
                                        var9 = 'duration_high_noise_detected_ms';
                                        var4[var9] = var11;
                                        var9 = var8;
                                        var10 = var10 == var9;
                                        var9 = undefined;
                                        if (var10) {
                                            _fun31423_ip = 318;
                                            continue _fun31423
                                        }
                                    case 310:
                                        var9 = var8.talkTimeMs;
                                    case 318:
                                        var8 = 'duration_noise_cancellation_voice_detected_ms';
                                        var4[var8] = var9;
                                        var4 = var6.bind(var7)(var5, var4);
                                        return var3;
                                    case 337: // catch_target0
                                        CatchBlockStart(arg_register = 0);
                                        _fun31423_ip = 343;
                                        continue _fun31423;
                                    case 341:
                                        CatchBlockStart(arg_register = 0);
                                    case 343:
                                        if (var2) {
                                            _fun31423_ip = 349;
                                            continue _fun31423
                                        }
                                    case 346:
                                        var1.return();
                                    case 349:
                                        throw var0;
                                }
                            };
                            var0 = var2.bind(var3)(var0);
                            var0 = var4._trackRemainingSecureFrameTransitions;
                            var0 = var0.bind(var4)();
                        case 2555:
                            var0 = new Array(0);
                            var4._pingTimeouts = var0;
                            var0 = new Array(0);
                            var4._pings = var0;
                            var3 = 0;
                            var4._connectCompletedTime = var3;
                            var4._pingBadCount = var3;
                            var0 = false;
                            var4._inputDetected = var0;
                            var2 = null;
                            var4._mediaSessionId = var2;
                            var7 = var4._voiceQuality;
                            if (!(var2 != var7)) {
                                _fun31413_ip = 2625;
                                continue _fun31413
                            }
                        case 2615:
                            var0 = var7.stop;
                            var0 = var0.bind(var7)();
                        case 2625:
                            var4._voiceQuality = var2;
                            var8 = var6.clearInterval;
                            var7 = var4._voiceQualityPeriodicStatsInterval;
                            var0 = undefined;
                            var7 = var8.bind(var0)(var7);
                            var4._voiceQualityPeriodicStatsInterval = var2;
                            var4._voiceQualityPeriodicStatsSequenceId = var3;
                            var4._noiseCancellationError = var3;
                            var4._numNoiseCancellationChanges = var3;
                            var8 = var4._voiceDuration;
                            if (!(var2 != var8)) {
                                _fun31413_ip = 2694;
                                continue _fun31413
                            }
                        case 2684:
                            var7 = var8.stop;
                            var7 = var7.bind(var8)();
                        case 2694:
                            var4._voiceDuration = var2;
                            var8 = var4._videoQuality;
                            if (!(var2 != var8)) {
                                _fun31413_ip = 2720;
                                continue _fun31413
                            }
                        case 2710:
                            var7 = var8.stop;
                            var7 = var7.bind(var8)();
                        case 2720:
                            var4._videoQuality = var2;
                            var4._videoHealthManager = var2;
                            var8 = var4._localMediaSinkWantsManager;
                            if (!(var2 != var8)) {
                                _fun31413_ip = 2752;
                                continue _fun31413
                            }
                        case 2742:
                            var7 = var8.reset;
                            var7 = var7.bind(var8)();
                        case 2752:
                            var4._secureFramesState = var2;
                            var8 = var6.Set;
                            var7 = var4.userId;
                            var6 = new Array(1);
                            var6[0] = var7;
                            var7 = var8.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var8
                                }
                            });
                            var22 = var7;
                            var21 = var6;
                            var6 = new var22[var8](var21, var20);
                            var6 = var6 instanceof Object ? var6 : var7;
                            var4._userIds = var6;
                            var7 = var4._secureFramesRosterMap;
                            var6 = var7.clear;
                            var6 = var6.bind(var7)();
                            var7 = var4._secureFramesTransitionStates;
                            var6 = var7.clear;
                            var6 = var6.bind(var7)();
                            var4._secureFramesNextTransitionState = var0;
                            var4._secureFramesMaxConcurrentTransitions = var3;
                            var4._secureFramesTransitionPrepareCount = var3;
                            var4._secureFramesTransitionExecuteCount = var3;
                            var3 = var4._connection;
                            if (!(var2 != var3)) {
                                _fun31413_ip = 2901;
                                continue _fun31413
                            }
                        case 2872:
                            var6 = var4._connection;
                            var4._connection = var2;
                            var3 = var6.destroy;
                            var2 = var4.reconnecting;
                            var2 = var3.bind(var6)(var2);
                        case 2901:
                            var3 = var4.setState;
                            var1 = _closure1_slot22;
                            var2 = var1.DISCONNECTED;
                            var1 = {};
                            var1.willReconnect = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[53] = var4;
                var4 = {};
                var6 = '_handleResuming';
                var4.key = var6;
                var6 = function() {
                    _fun31424: for (var _fun31424_ip = 0;;) switch (_fun31424_ip) {
                        case 0:
                            var1 = this;
                            var3 = var1._connection;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun31424_ip = 25;
                                continue _fun31424
                            }
                        case 15:
                            var2 = var3.fastUdpReconnect;
                            var2 = var2.bind(var3)();
                        case 25:
                            var1 = var1._connection;
                            if (!(var0 != var1)) {
                                _fun31424_ip = 47;
                                continue _fun31424
                            }
                        case 35:
                            var0 = var1.clearAllSpeaking;
                            var0 = var0.bind(var1)();
                        case 47:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[54] = var4;
                var4 = {};
                var6 = '_handleReady';
                var4.key = var6;
                var6 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6() {
                    _fun31425: for (var _fun31425_ip = 0;;) switch (_fun31425_ip) {
                        case 0:
                            var16 = arg1;
                            var15 = arg2;
                            var17 = arg4;
                            var12 = arg5;
                            var3 = arg6;
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var0 = arg0;
                            var _closure3_slot1 = var0;
                            var _closure3_slot2 = var16;
                            var _closure3_slot3 = var15;
                            var1 = var2.setState;
                            var0 = _closure1_slot22;
                            var0 = var0.RTC_CONNECTING;
                            var0 = var1.bind(var2)(var0);
                            var2.port = var15;
                            var1 = var2._chooseExperiments;
                            var0 = null;
                            if (!(var0 == var3)) {
                                _fun31425_ip = 87;
                                continue _fun31425
                            }
                        case 83:
                            var3 = new Array(0);
                        case 87:
                            var1 = var1.bind(var2)(var3);
                            var1 = var12.length;
                            var4 = 0;
                            if (!(var4 === var1)) {
                                _fun31425_ip = 169;
                                continue _fun31425
                            }
                        case 103:
                            var3 = var12.push;
                            var1 = {
                                'type': null,
                                'rid': '100',
                                'ssrc': null,
                                'rtxSsrc': null,
                                'quality': 100,
                                'active': false
                            };
                            var6 = _closure1_slot29;
                            var6 = var6.VIDEO;
                            var1.type = var6;
                            var6 = 1;
                            var6 = var17 + var6;
                            var1.ssrc = var6;
                            var6 = 2;
                            var6 = var17 + var6;
                            var1.rtxSsrc = var6;
                            var1 = var3.bind(var12)(var1);
                        case 169:
                            var3 = _closure1_slot15;
                            var1 = var3.getMediaEngine;
                            var10 = var1.bind(var3)();
                            var3 = _closure1_slot12;
                            var1 = var3.getPersistentCodesEnabled;
                            var14 = var1.bind(var3)();
                            var3 = _closure1_slot13;
                            var1 = var3.getStaticAuthSessionId;
                            var1 = var1.bind(var3)();
                            var3 = var0 != var1;
                            var0 = undefined;
                            var13 = undefined;
                            if (!var3) {
                                _fun31425_ip = 225;
                                continue _fun31425
                            }
                        case 222:
                            var13 = var1;
                        case 225:
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var3 = 19;
                            var1 = var1[var3];
                            var6 = var6.bind(var0)(var1);
                            var1 = var6.now;
                            var9 = var1.bind(var6)();
                            var11 = var10.connect;
                            var8 = var2.context;
                            var6 = var2.userId;
                            var1 = {};
                            var1.ssrc = var17;
                            var1.address = var16;
                            var1.port = var15;
                            var15 = arg3;
                            var1.modes = var15;
                            var15 = var2._selectedExperiments;
                            var1.experiments = var15;
                            var1.streamParameters = var12;
                            var15 = _closure1_slot15;
                            var12 = var15.getQoS;
                            var12 = var12.bind(var15)();
                            var1.qosEnabled = var12;
                            var12 = undefined;
                            if (!var14) {
                                _fun31425_ip = 340;
                                continue _fun31425
                            }
                        case 337:
                            var12 = var13;
                        case 340:
                            var1.signingKeyId = var12;
                            var12 = var2.getExtraConnectionOptions;
                            var19 = var12.bind(var2)();
                            var20 = var1;
                            var12 = copyDataProperties(var20, var19);
                            var1 = var11.bind(var10)(var8, var6, var1);
                            var _closure3_slot4 = var1;
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var3 = var8[var3];
                            var11 = var6.bind(var0)(var3);
                            var3 = var11.now;
                            var3 = var3.bind(var11)();
                            var3 = var3 - var9;
                            var _closure3_slot5 = var3;
                            var3 = 32;
                            var3 = var8[var3];
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.isWeb;
                            var3 = var3.bind(var6)();
                            if (!var3) {
                                _fun31425_ip = 443;
                                continue _fun31425
                            }
                        case 436:
                            var6 = _closure1_slot24;
                            var3 = !var6;
                        case 443:
                            if (!var3) {
                                _fun31425_ip = 483;
                                continue _fun31425
                            }
                        case 446:
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var3 = 22;
                            var3 = var8[var3];
                            var8 = var6.bind(var0)(var3);
                            var6 = var8.captureMessage;
                            var3 = 'Browser does not support Unified Plan';
                            var3 = var6.bind(var8)(var3);
                        case 483:
                            var8 = var1.setUseElectronVideo;
                            var9 = var10.supports;
                            var3 = _closure1_slot25;
                            var6 = var3.ELECTRON_VIDEO;
                            var6 = var9.bind(var10)(var6);
                            var6 = var8.bind(var1)(var6);
                            var8 = _closure1_slot15;
                            var6 = var8.supports;
                            var3 = var3.IMAGE_QUALITY_MEASUREMENT;
                            var3 = var6.bind(var8)(var3);
                            if (!var3) {
                                _fun31425_ip = 560;
                                continue _fun31425
                            }
                        case 541:
                            var6 = var1.setVideoQualityMeasurement;
                            var3 = 'imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec';
                            var3 = var6.bind(var1)(var3);
                        case 560:
                            var3 = global;
                            var9 = var3.Array;
                            var6 = var9.prototype;
                            var8 = Object.create(var6, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var20 = 'unk';
                            var21 = var8;
                            var6 = new var21[var9](var20, var19);
                            var8 = var6 instanceof Object ? var6 : var8;
                            var9 = var2.context;
                            var6 = _closure1_slot26;
                            var6 = var6.STREAM;
                            if (!(var9 !== var6)) {
                                _fun31425_ip = 710;
                                continue _fun31425
                            }
                        case 613:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var6 = 48;
                            var6 = var10[var6];
                            var10 = var9.bind(var0)(var6);
                            var9 = var10.getNvEncNewPresets;
                            var6 = 'handleReady';
                            var6 = var9.bind(var10)(var6);
                            var9 = var6.vbvBufferSize;
                            if (!(var9 > var4)) {
                                _fun31425_ip = 742;
                                continue _fun31425
                            }
                        case 660:
                            var4 = var8.push;
                            var3 = var3.HermesInternal;
                            var6 = var3.concat;
                            var3 = 'nvRelaxRc=';
                            var3 = var6.bind(var3)(var9);
                            var3 = var4.bind(var8)(var3);
                            var4 = var8.push;
                            var3 = 'nvNewPresets';
                            var3 = var4.bind(var8)(var3);
                            _fun31425_ip = 742;
                            continue _fun31425;
                        case 710:
                            var4 = var8.push;
                            var3 = 'nvRelaxRc=250';
                            var3 = var4.bind(var8)(var3);
                            var4 = var8.push;
                            var3 = 'nvNewPresets';
                            var3 = var4.bind(var8)(var3);
                        case 742:
                            var4 = _closure1_slot15;
                            var3 = var4.getUseVaapiEncoder;
                            var3 = var3.bind(var4)();
                            if (!var3) {
                                _fun31425_ip = 777;
                                continue _fun31425
                            }
                        case 761:
                            var4 = var8.push;
                            var3 = 'vaapi';
                            var3 = var4.bind(var8)(var3);
                        case 777:
                            var4 = var2.context;
                            var3 = _closure1_slot26;
                            var3 = var3.STREAM;
                            var3 = var4 === var3;
                            if (!var3) {
                                _fun31425_ip = 819;
                                continue _fun31425
                            }
                        case 799:
                            var4 = var2.getVoiceParticipantType;
                            var6 = var4.bind(var2)();
                            var4 = 'streamer';
                            var3 = var4 === var6;
                        case 819:
                            if (!var3) {
                                _fun31425_ip = 864;
                                continue _fun31425
                            }
                        case 822:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot3;
                            var4 = 49;
                            var4 = var9[var4];
                            var9 = var6.bind(var0)(var4);
                            var6 = var9.getVideoCaptureDeviceForEncodeConfig;
                            var4 = 'handleReady';
                            var4 = var6.bind(var9)(var4);
                            var3 = var4.enabled;
                        case 864:
                            if (!var3) {
                                _fun31425_ip = 881;
                                continue _fun31425
                            }
                        case 867:
                            var4 = var8.push;
                            var3 = 'useCaptureDeviceForEncode';
                            var3 = var4.bind(var8)(var3);
                        case 881:
                            var4 = var1.setVideoEncoderExperiments;
                            var6 = var8.join;
                            var3 = ',';
                            var3 = var6.bind(var8)(var3);
                            var3 = var4.bind(var1)(var3);
                            var10 = var1.on;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var3 = 50;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.Speaking;
                            var8 = function(arg0, arg1, arg2) { // Environment: var5
                                _fun31426: for (var _fun31426_ip = 0;;) switch (_fun31426_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var4 = arg1;
                                        var1 = _closure3_slot0;
                                        var1 = var1.userId;
                                        if (!(var1 === var5)) {
                                            _fun31426_ip = 43;
                                            continue _fun31426
                                        }
                                    case 22:
                                        var3 = _closure3_slot0;
                                        var2 = var3.sendSpeaking;
                                        var1 = arg2;
                                        var1 = var2.bind(var3)(var4, var1);
                                    case 43:
                                        var3 = _closure3_slot0;
                                        var2 = var3.emit;
                                        var6 = _closure1_slot0;
                                        var1 = _closure1_slot3;
                                        var0 = 38;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var6.bind(var0)(var1);
                                        var1 = var1.RTCConnectionEvent;
                                        var1 = var1.Speaking;
                                        var1 = var2.bind(var3)(var1, var5, var4);
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.ToggleMuteFromNative;
                            var8 = function() { // Environment: var5
                                _fun31427: for (var _fun31427_ip = 0;;) switch (_fun31427_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var2 = var0.context;
                                        var1 = _closure1_slot26;
                                        var1 = var1.DEFAULT;
                                        if (!(var2 === var1)) {
                                            _fun31427_ip = 71;
                                            continue _fun31427
                                        }
                                    case 29:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot3;
                                        var0 = 51;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.toggleSelfMute;
                                        var0 = {};
                                        var3 = false;
                                        var0.playSoundEffect = var3;
                                        var0 = var1.bind(var2)(var0);
                                    case 71:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.NativeMuteChanged;
                            var8 = function(arg0) { // Environment: var5
                                _fun31428: for (var _fun31428_ip = 0;;) switch (_fun31428_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var2 = var0.context;
                                        var1 = _closure1_slot26;
                                        var1 = var1.DEFAULT;
                                        if (!(var2 === var1)) {
                                            _fun31428_ip = 65;
                                            continue _fun31428
                                        }
                                    case 29:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot3;
                                        var0 = 52;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.nativeMuteChanged;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                    case 65:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.Video;
                            var8 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var5
                                _fun31429: for (var _fun31429_ip = 0;;) switch (_fun31429_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var3 = arg2;
                                        var9 = arg3;
                                        var8 = arg4;
                                        var2 = arg5;
                                        var _closure4_slot0 = var6;
                                        var11 = _closure3_slot0;
                                        var10 = var11._handleVideoStreamId;
                                        var5 = {};
                                        var5.userId = var6;
                                        var1 = arg1;
                                        var5.streamId = var1;
                                        var5.audioSsrc = var3;
                                        var1 = null;
                                        var13 = var1 != var9;
                                        var12 = 0;
                                        if (!var13) {
                                            _fun31429_ip = 71;
                                            continue _fun31429
                                        }
                                    case 68:
                                        var12 = var9;
                                    case 71:
                                        var5.videoSsrc = var12;
                                        var5.rtxSsrc = var8;
                                        var5.videoStreamParameters = var2;
                                        var5 = var10.bind(var11)(var5);
                                        var5 = _closure3_slot0;
                                        var5 = var5.userId;
                                        if (!(var5 === var6)) {
                                            _fun31429_ip = 190;
                                            continue _fun31429
                                        }
                                    case 104:
                                        var6 = _closure3_slot0;
                                        var5 = var6.sendVideo;
                                        var10 = var1 != var3;
                                        var4 = 0;
                                        if (!var10) {
                                            _fun31429_ip = 128;
                                            continue _fun31429
                                        }
                                    case 125:
                                        var4 = var3;
                                    case 128:
                                        var10 = var1 != var9;
                                        var3 = 0;
                                        if (!var10) {
                                            _fun31429_ip = 140;
                                            continue _fun31429
                                        }
                                    case 137:
                                        var3 = var9;
                                    case 140:
                                        var9 = var1 != var8;
                                        var7 = 0;
                                        if (!var9) {
                                            _fun31429_ip = 152;
                                            continue _fun31429
                                        }
                                    case 149:
                                        var7 = var8;
                                    case 152:
                                        var18 = var6;
                                        var17 = var4;
                                        var16 = var3;
                                        var15 = var7;
                                        var14 = var2;
                                        var3 = var18[var5](var17, var16, var15, var14, var13);
                                        if (!(var1 != var2)) {
                                            _fun31429_ip = 190;
                                            continue _fun31429
                                        }
                                    case 175:
                                        var1 = var2.forEach;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun31430: for (var _fun31430_ip = 0;;) switch (_fun31430_ip) {
                                                case 0:
                                                    var0 = arg0;
                                                    var2 = var0.quality;
                                                    var1 = 100;
                                                    if (!(var1 === var2)) {
                                                        _fun31430_ip = 107;
                                                        continue _fun31430
                                                    }
                                                case 16:
                                                    var8 = _closure3_slot0;
                                                    var7 = var8.emit;
                                                    var3 = _closure1_slot0;
                                                    var2 = _closure1_slot3;
                                                    var1 = 38;
                                                    var2 = var2[var1];
                                                    var1 = undefined;
                                                    var1 = var3.bind(var1)(var2);
                                                    var1 = var1.RTCConnectionEvent;
                                                    var15 = var1.VideoSourceQualityChanged;
                                                    var14 = var8.guildId;
                                                    var13 = var8.channelId;
                                                    var12 = _closure4_slot0;
                                                    var11 = var0.maxResolution;
                                                    var10 = var0.maxFrameRate;
                                                    var9 = var8.context;
                                                    var16 = var8;
                                                    var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
                                                case 107:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var2)(var0);
                                    case 190:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.FirstFrame;
                            var8 = function(arg0, arg1, arg2) { // Environment: var5
                                _fun31431: for (var _fun31431_ip = 0;;) switch (_fun31431_ip) {
                                    case 0:
                                        var7 = arg0;
                                        var2 = arg1;
                                        var6 = arg2;
                                        var1 = _closure3_slot0;
                                        var1 = var1._localMediaSinkWantsManager;
                                        var3 = null;
                                        if (!(var3 != var1)) {
                                            _fun31431_ip = 121;
                                            continue _fun31431
                                        }
                                    case 28:
                                        var10 = _closure3_slot0;
                                        var4 = var10._localMediaSinkWantsManager;
                                        var1 = var4.setFirstFrameReceived;
                                        var1 = var1.bind(var4)(var2);
                                        var9 = var10.emit;
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot3;
                                        var1 = 38;
                                        var4 = var4[var1];
                                        var1 = undefined;
                                        var1 = var5.bind(var1)(var4);
                                        var1 = var1.RTCConnectionEvent;
                                        var16 = var1.Video;
                                        var15 = var10.guildId;
                                        var14 = var10.channelId;
                                        var11 = var10.streamServerId;
                                        var17 = var10;
                                        var13 = var7;
                                        var12 = var6;
                                        var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10);
                                    case 121:
                                        var1 = _closure3_slot0;
                                        var1 = var1._goLiveQualityManager;
                                        if (!(var3 != var1)) {
                                            _fun31431_ip = 228;
                                            continue _fun31431
                                        }
                                    case 135:
                                        var5 = _closure3_slot0;
                                        var1 = var5._goLiveQualityManager;
                                        var0 = var1.setFirstFrameReceived;
                                        var0 = var0.bind(var1)(var2);
                                        var4 = var5.emit;
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot3;
                                        var0 = 38;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        var0 = var0.RTCConnectionEvent;
                                        var16 = var0.Video;
                                        var15 = var5.guildId;
                                        var14 = var5.channelId;
                                        var11 = var5.streamServerId;
                                        var17 = var5;
                                        var13 = var7;
                                        var12 = var6;
                                        var0 = var17[var4](var16, var15, var14, var13, var12, var11, var10);
                                    case 228:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.Silence;
                            var8 = function(arg0) { // Environment: var5
                                _fun31432: for (var _fun31432_ip = 0;;) switch (_fun31432_ip) {
                                    case 0:
                                        var1 = _closure3_slot0;
                                        var0 = var1._inputDetected;
                                        if (var0) {
                                            _fun31432_ip = 22;
                                            continue _fun31432
                                        }
                                    case 16:
                                        var2 = arg0;
                                        var0 = !var2;
                                    case 22:
                                        var1._inputDetected = var0;
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.Connected;
                            var8 = function(arg0, arg1) { // Environment: var5
                                _fun31433: for (var _fun31433_ip = 0;;) switch (_fun31433_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var5 = arg1;
                                        var1 = _closure3_slot0;
                                        var7 = var1.logger;
                                        var4 = var7.info;
                                        var12 = _closure3_slot2;
                                        var11 = _closure3_slot3;
                                        var10 = global;
                                        var3 = var10.HermesInternal;
                                        var9 = var3.concat;
                                        var8 = 'RTC connected to media server: ';
                                        var3 = ':';
                                        var3 = var9.bind(var8)(var12, var3, var11);
                                        var3 = var4.bind(var7)(var3);
                                        var3 = _closure3_slot1;
                                        var1 = var1._socket;
                                        if (!(var3 !== var1)) {
                                            _fun31433_ip = 115;
                                            continue _fun31433
                                        }
                                    case 84:
                                        var1 = _closure3_slot0;
                                        var4 = var1.logger;
                                        var3 = var4.warn;
                                        var1 = 'Socket mismatch, disconnecting';
                                        var1 = var3.bind(var4)(var1);
                                        _fun31433_ip = 828;
                                        continue _fun31433;
                                    case 115:
                                        var1 = _closure3_slot0;
                                        var7 = _closure1_slot1;
                                        var8 = _closure1_slot3;
                                        var4 = 53;
                                        var11 = var8[var4];
                                        var9 = undefined;
                                        var13 = var7.bind(var9)(var11);
                                        var17 = _closure3_slot4;
                                        var12 = var13.prototype;
                                        var12 = Object.create(var12, {
                                            constructor: {
                                                value: var13
                                            }
                                        });
                                        var18 = var12;
                                        var11 = new var18[var13](var17, var16);
                                        var11 = var11 instanceof Object ? var11 : var12;
                                        var1._voiceQuality = var11;
                                        var12 = var1._voiceQuality;
                                        var11 = var12.start;
                                        var11 = var11.bind(var12)();
                                        var13 = var1._voiceQuality;
                                        var12 = var13.on;
                                        var11 = _closure1_slot0;
                                        var4 = var8[var4];
                                        var4 = var11.bind(var9)(var4);
                                        var4 = var4.VoiceQualityEvent;
                                        var11 = var4.InputDeviceSampleRateChanged;
                                        var4 = function(arg0) { // Environment: var2
                                            var2 = _closure1_slot1;
                                            var1 = _closure1_slot3;
                                            var0 = 35;
                                            var1 = var1[var0];
                                            var0 = undefined;
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.dispatch;
                                            var1 = {};
                                            var4 = 'AUDIO_INPUT_DEVICE_SAMPLE_RATE_CHANGED';
                                            var1.type = var4;
                                            var4 = arg0;
                                            var1.sampleRate = var4;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var4 = var12.bind(var13)(var11, var4);
                                        var4 = 0;
                                        var1._voiceQualityPeriodicStatsSequenceId = var4;
                                        var12 = var10.setInterval;
                                        var11 = var1._handleVoiceQualityPeriodicsStats;
                                        var10 = 300000;
                                        var10 = var12.bind(var9)(var11, var10);
                                        var1._voiceQualityPeriodicStatsInterval = var10;
                                        var10 = 54;
                                        var10 = var8[var10];
                                        var12 = var7.bind(var9)(var10);
                                        var17 = _closure3_slot4;
                                        var11 = var12.prototype;
                                        var11 = Object.create(var11, {
                                            constructor: {
                                                value: var12
                                            }
                                        });
                                        var18 = var11;
                                        var10 = new var18[var12](var17, var16);
                                        var10 = var10 instanceof Object ? var10 : var11;
                                        var1._systemResponsiveness = var10;
                                        var11 = var1._systemResponsiveness;
                                        var10 = var11.start;
                                        var10 = var10.bind(var11)();
                                        var10 = 55;
                                        var10 = var8[var10];
                                        var10 = var7.bind(var9)(var10);
                                        var11 = var10.prototype;
                                        var11 = Object.create(var11, {
                                            constructor: {
                                                value: var10
                                            }
                                        });
                                        var18 = var11;
                                        var10 = new var18[var10](var17);
                                        var10 = var10 instanceof Object ? var10 : var11;
                                        var1._systemResources = var10;
                                        var11 = var1._systemResources;
                                        var10 = var11.setLastBattery;
                                        var10 = var10.bind(var11)();
                                        var1._noiseCancellationError = var4;
                                        var4 = 56;
                                        var4 = var8[var4];
                                        var10 = var7.bind(var9)(var4);
                                        var17 = var1.userId;
                                        var16 = _closure3_slot4;
                                        var7 = var10.prototype;
                                        var7 = Object.create(var7, {
                                            constructor: {
                                                value: var10
                                            }
                                        });
                                        var18 = var7;
                                        var4 = new var18[var10](var17, var16, var15);
                                        var4 = var4 instanceof Object ? var4 : var7;
                                        var1._voiceDuration = var4;
                                        var11 = var1._voiceDuration;
                                        var10 = var11.start;
                                        var7 = _closure3_slot4;
                                        var4 = var7.getSelfMute;
                                        var8 = var4.bind(var7)();
                                        var7 = _closure3_slot4;
                                        var4 = var7.getSelfDeaf;
                                        var7 = var4.bind(var7)();
                                        var12 = _closure3_slot4;
                                        var4 = var12.getVoiceFilterId;
                                        var4 = var4.bind(var12)();
                                        var4 = var10.bind(var11)(var8, var7, var4);
                                        var1.protocol = var6;
                                        var1 = 'udp';
                                        if (!(var1 !== var6)) {
                                            _fun31433_ip = 685;
                                            continue _fun31433
                                        }
                                    case 524:
                                        var1 = 'webrtc';
                                        if (!(var1 !== var6)) {
                                            _fun31433_ip = 564;
                                            continue _fun31433
                                        }
                                    case 534:
                                        var1 = _closure3_slot0;
                                        var7 = var1.logger;
                                        var4 = var7.error;
                                        var1 = 'Unable to determine protocol.';
                                        var1 = var4.bind(var7)(var1);
                                        var1 = undefined;
                                        return var1;
                                    case 564:
                                        var8 = _closure3_slot0;
                                        var7 = var8.logger;
                                        var4 = var7.info;
                                        var1 = 'Sending local SDP to RTC server.';
                                        var1 = var4.bind(var7)(var1);
                                        var7 = _closure3_slot1;
                                        var10 = var7.once;
                                        var4 = _closure1_slot0;
                                        var11 = _closure1_slot3;
                                        var1 = 36;
                                        var1 = var11[var1];
                                        var1 = var4.bind(var9)(var1);
                                        var1 = var1.SocketEvent;
                                        var4 = var1.SDP;
                                        var11 = var8._handleSDP;
                                        var1 = var11.bind;
                                        var1 = var1.bind(var11)(var8);
                                        var1 = var10.bind(var7)(var4, var1);
                                        var4 = var7.selectProtocol;
                                        var1 = var8.getRTCConnectionId;
                                        var1 = var1.bind(var8)();
                                        var1 = var4.bind(var7)(var6, var1, var5);
                                        _fun31433_ip = 808;
                                        continue _fun31433;
                                    case 685:
                                        var1 = _closure3_slot0;
                                        var10 = var1.logger;
                                        var8 = var10.info;
                                        var7 = var1._selectedExperiments;
                                        var4 = 'Sending UDP info to RTC server.';
                                        var4 = var8.bind(var10)(var4, var5, var7);
                                        var4 = _closure3_slot1;
                                        var7 = var4.once;
                                        var8 = _closure1_slot0;
                                        var10 = _closure1_slot3;
                                        var3 = 36;
                                        var3 = var10[var3];
                                        var3 = var8.bind(var9)(var3);
                                        var3 = var3.SocketEvent;
                                        var3 = var3.Encryption;
                                        var2 = function(arg0, arg1) { // Environment: var2
                                            _fun31435: for (var _fun31435_ip = 0;;) switch (_fun31435_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var3 = _closure3_slot4;
                                                    var2 = _closure3_slot0;
                                                    var2 = var2._connection;
                                                    if (!(var3 === var2)) {
                                                        _fun31435_ip = 55;
                                                        continue _fun31435
                                                    }
                                                case 24:
                                                    var4 = _closure3_slot4;
                                                    var3 = var4.setEncryption;
                                                    var2 = arg1;
                                                    var2 = var3.bind(var4)(var1, var2);
                                                    var0 = _closure3_slot0;
                                                    var0._encryptionMode = var1;
                                                case 55:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var2 = var7.bind(var4)(var3, var2);
                                        var3 = var4.selectProtocol;
                                        var2 = var1.getRTCConnectionId;
                                        var16 = var2.bind(var1)();
                                        var14 = var1._selectedExperiments;
                                        var18 = var4;
                                        var17 = var6;
                                        var15 = var5;
                                        var1 = var18[var3](var17, var16, var15, var14, var13);
                                    case 808:
                                        var0 = _closure3_slot0;
                                        var1 = var0._backoff;
                                        var0 = var1.succeed;
                                        var0 = var0.bind(var1)();
                                    case 828:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.VideoEncoderFallback;
                            var8 = function(arg0) { // Environment: var5
                                var3 = arg0;
                                var2 = var3.filter;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.type;
                                    var0 = 'video';
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.map;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var0 = var0.name;
                                    return var0;
                                };
                                var2 = var1.bind(var2)(var0);
                                var1 = var2.join;
                                var0 = ',';
                                var6 = var1.bind(var2)(var0);
                                var1 = _closure3_slot0;
                                var4 = var1.logger;
                                var2 = var4.info;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var1 = 'The originally selected video encoder is not working, fallback to the other available encoders: ';
                                var1 = var5.bind(var1)(var6);
                                var1 = var2.bind(var4)(var1);
                                var2 = _closure3_slot1;
                                var1 = var2.updateSession;
                                var0 = {};
                                var0.codecs = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.VideoDecoderFallback;
                            var8 = function(arg0) { // Environment: var5
                                _fun31439: for (var _fun31439_ip = 0;;) switch (_fun31439_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var5 = _closure1_slot14;
                                        var4 = var5.getChannel;
                                        var0 = _closure3_slot0;
                                        var0 = var0.channelId;
                                        var4 = var4.bind(var5)(var0);
                                        var0 = null;
                                        var7 = var0 == var4;
                                        var0 = undefined;
                                        var5 = undefined;
                                        if (var7) {
                                            _fun31439_ip = 52;
                                            continue _fun31439
                                        }
                                    case 47:
                                        var5 = var4.type;
                                    case 52:
                                        var4 = _closure1_slot21;
                                        var4 = var4.GUILD_STAGE_VOICE;
                                        var8 = _closure1_slot15;
                                        var7 = var8.isVideoDecoderFallbackEnabled;
                                        var7 = var7.bind(var8)();
                                        if (!var7) {
                                            _fun31439_ip = 196;
                                            continue _fun31439
                                        }
                                    case 79:
                                        if (!(var5 !== var4)) {
                                            _fun31439_ip = 196;
                                            continue _fun31439
                                        }
                                    case 83:
                                        var5 = var6.filter;
                                        var4 = function(arg0) { // Environment: var3
                                            var0 = arg0;
                                            var1 = var0.type;
                                            var0 = 'video';
                                            var0 = var0 === var1;
                                            return var0;
                                        };
                                        var5 = var5.bind(var6)(var4);
                                        var4 = var5.map;
                                        var3 = function(arg0) { // Environment: var3
                                            var0 = arg0;
                                            var0 = var0.name;
                                            return var0;
                                        };
                                        var5 = var4.bind(var5)(var3);
                                        var4 = var5.join;
                                        var3 = ',';
                                        var8 = var4.bind(var5)(var3);
                                        var3 = _closure3_slot0;
                                        var5 = var3.logger;
                                        var4 = var5.info;
                                        var3 = global;
                                        var3 = var3.HermesInternal;
                                        var7 = var3.concat;
                                        var3 = 'The originally selected video decoder is not working, fallback to the other available decoders: ';
                                        var3 = var7.bind(var3)(var8);
                                        var3 = var4.bind(var5)(var3);
                                        var5 = _closure3_slot1;
                                        var4 = var5.updateSession;
                                        var3 = {};
                                        var3.codecs = var6;
                                        var3 = var4.bind(var5)(var3);
                                        _fun31439_ip = 291;
                                        continue _fun31439;
                                    case 196:
                                        var3 = _closure3_slot0;
                                        var3 = var3._videoDecoderFallbackSuppressed;
                                        if (var3) {
                                            _fun31439_ip = 291;
                                            continue _fun31439
                                        }
                                    case 209:
                                        var3 = _closure1_slot15;
                                        var2 = var3.isVideoDecoderFallbackEnabled;
                                        var2 = var2.bind(var3)();
                                        var6 = 'not in fallback treatment';
                                        if (!var2) {
                                            _fun31439_ip = 238;
                                            continue _fun31439
                                        }
                                    case 232:
                                        var6 = 'stage channel';
                                    case 238:
                                        var2 = _closure3_slot0;
                                        var4 = var2.logger;
                                        var3 = var4.info;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var1 = 'Suppressing video decoder fallback: ';
                                        var1 = var5.bind(var1)(var6);
                                        var1 = var3.bind(var4)(var1);
                                        var1 = true;
                                        var2._videoDecoderFallbackSuppressed = var1;
                                    case 291:
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.Error;
                            var8 = function(arg0) { // Environment: var5
                                _fun31442: for (var _fun31442_ip = 0;;) switch (_fun31442_ip) {
                                    case 0:
                                        var7 = arg0;
                                        var2 = _closure3_slot1;
                                        var0 = _closure3_slot0;
                                        var0 = var0._socket;
                                        if (!(var2 === var0)) {
                                            _fun31442_ip = 268;
                                            continue _fun31442
                                        }
                                    case 27:
                                        var3 = _closure1_slot18;
                                        var2 = var3.shouldIncludePreferredRegion;
                                        var2 = var2.bind(var3)();
                                        var6 = null;
                                        if (!var2) {
                                            _fun31442_ip = 63;
                                            continue _fun31442
                                        }
                                    case 49:
                                        var3 = _closure1_slot18;
                                        var2 = var3.getPreferredRegion;
                                        var6 = var2.bind(var3)();
                                    case 63:
                                        var4 = _closure3_slot0;
                                        var3 = var4.logger;
                                        var2 = var3.error;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var1 = 'Error occurred while connecting to RTC server: ';
                                        var1 = var5.bind(var1)(var7);
                                        var1 = var2.bind(var3)(var1);
                                        var3 = _closure1_slot1;
                                        var2 = _closure1_slot3;
                                        var1 = 21;
                                        var2 = var2[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.track;
                                        var0 = _closure1_slot20;
                                        var1 = var0.VOICE_CONNECTION_FAILURE;
                                        var0 = {};
                                        var5 = var4._getAnalyticsProperties;
                                        var9 = var5.bind(var4)();
                                        var10 = var0;
                                        var5 = copyDataProperties(var10, var9);
                                        var8 = var4.hostname;
                                        var5 = 'hostname';
                                        var0[var5] = var8;
                                        var8 = var4.port;
                                        var5 = 'port';
                                        var0[var5] = var8;
                                        var8 = var4.protocol;
                                        var5 = 'protocol';
                                        var0[var5] = var8;
                                        var5 = 'error';
                                        var0[var5] = var7;
                                        var5 = 'cloudflare_best_region';
                                        var0[var5] = var6;
                                        var6 = var4._connectCount;
                                        var5 = 'connect_count';
                                        var0[var5] = var6;
                                        var5 = var4.joinVoiceId;
                                        var4 = 'join_voice_id';
                                        var0[var4] = var5;
                                        var0 = var2.bind(var3)(var1, var0);
                                    case 268:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.ConnectionStateChange;
                            var8 = function(arg0) { // Environment: var5
                                _fun31443: for (var _fun31443_ip = 0;;) switch (_fun31443_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = _closure3_slot0;
                                        var6 = var0.logger;
                                        var4 = var6.info;
                                        var9 = var0.state;
                                        var3 = global;
                                        var2 = var3.HermesInternal;
                                        var8 = var2.concat;
                                        var7 = 'RTC media connection state change: ';
                                        var2 = ' => ';
                                        var2 = var8.bind(var7)(var9, var2, var5);
                                        var2 = var4.bind(var6)(var2);
                                        var2 = _closure3_slot1;
                                        var0 = var0._socket;
                                        if (!(var2 === var0)) {
                                            _fun31443_ip = 1677;
                                            continue _fun31443
                                        }
                                    case 81:
                                        var0 = _closure3_slot0;
                                        var4 = var0.state;
                                        var2 = _closure1_slot27;
                                        var2 = var2.DISCONNECTED;
                                        if (!(var2 !== var5)) {
                                            _fun31443_ip = 327;
                                            continue _fun31443
                                        }
                                    case 110:
                                        var2 = _closure1_slot27;
                                        var2 = var2.CONNECTING;
                                        if (!(var2 !== var5)) {
                                            _fun31443_ip = 300;
                                            continue _fun31443
                                        }
                                    case 127:
                                        var2 = _closure1_slot27;
                                        var2 = var2.CONNECTED;
                                        if (!(var2 !== var5)) {
                                            _fun31443_ip = 273;
                                            continue _fun31443
                                        }
                                    case 144:
                                        var2 = _closure1_slot27;
                                        var2 = var2.NO_ROUTE;
                                        if (!(var2 !== var5)) {
                                            _fun31443_ip = 246;
                                            continue _fun31443
                                        }
                                    case 158:
                                        var2 = _closure1_slot27;
                                        var2 = var2.ICE_CHECKING;
                                        if (!(var2 !== var5)) {
                                            _fun31443_ip = 219;
                                            continue _fun31443
                                        }
                                    case 172:
                                        var2 = _closure1_slot27;
                                        var2 = var2.DTLS_CONNECTING;
                                        if (!(var2 === var5)) {
                                            _fun31443_ip = 352;
                                            continue _fun31443
                                        }
                                    case 189:
                                        var6 = _closure3_slot0;
                                        var5 = var6.setState;
                                        var2 = _closure1_slot22;
                                        var2 = var2.DTLS_CONNECTING;
                                        var2 = var5.bind(var6)(var2);
                                        _fun31443_ip = 352;
                                        continue _fun31443;
                                    case 219:
                                        var6 = _closure3_slot0;
                                        var5 = var6.setState;
                                        var2 = _closure1_slot22;
                                        var2 = var2.ICE_CHECKING;
                                        var2 = var5.bind(var6)(var2);
                                        _fun31443_ip = 352;
                                        continue _fun31443;
                                    case 246:
                                        var6 = _closure3_slot0;
                                        var5 = var6.setState;
                                        var2 = _closure1_slot22;
                                        var2 = var2.NO_ROUTE;
                                        var2 = var5.bind(var6)(var2);
                                        _fun31443_ip = 352;
                                        continue _fun31443;
                                    case 273:
                                        var6 = _closure3_slot0;
                                        var5 = var6.setState;
                                        var2 = _closure1_slot22;
                                        var2 = var2.RTC_CONNECTED;
                                        var2 = var5.bind(var6)(var2);
                                        _fun31443_ip = 352;
                                        continue _fun31443;
                                    case 300:
                                        var6 = _closure3_slot0;
                                        var5 = var6.setState;
                                        var2 = _closure1_slot22;
                                        var2 = var2.RTC_CONNECTING;
                                        var2 = var5.bind(var6)(var2);
                                        _fun31443_ip = 352;
                                        continue _fun31443;
                                    case 327:
                                        var6 = _closure3_slot0;
                                        var5 = var6.setState;
                                        var2 = _closure1_slot22;
                                        var2 = var2.RTC_DISCONNECTED;
                                        var2 = var5.bind(var6)(var2);
                                    case 352:
                                        var2 = _closure1_slot22;
                                        var2 = var2.RTC_CONNECTING;
                                        if (!(var4 === var2)) {
                                            _fun31443_ip = 389;
                                            continue _fun31443
                                        }
                                    case 366:
                                        var2 = _closure3_slot0;
                                        var5 = var2.state;
                                        var2 = _closure1_slot22;
                                        var2 = var2.RTC_DISCONNECTED;
                                        if (!(var5 !== var2)) {
                                            _fun31443_ip = 477;
                                            continue _fun31443
                                        }
                                    case 389:
                                        var2 = _closure3_slot0;
                                        var5 = var2.state;
                                        var2 = _closure1_slot22;
                                        var2 = var2.NO_ROUTE;
                                        if (!(var5 === var2)) {
                                            _fun31443_ip = 491;
                                            continue _fun31443
                                        }
                                    case 412:
                                        var2 = _closure3_slot0;
                                        var2 = var2._backoff;
                                        var5 = var2.fails;
                                        var2 = 0;
                                        if (!(var2 === var5)) {
                                            _fun31443_ip = 448;
                                            continue _fun31443
                                        }
                                    case 434:
                                        var5 = _closure3_slot0;
                                        var2 = var5._handleNoRoute;
                                        var2 = var2.bind(var5)();
                                    case 448:
                                        var2 = _closure3_slot0;
                                        var6 = var2._backoff;
                                        var5 = var6.fail;
                                        var2 = var2.reconnect;
                                        var2 = var5.bind(var6)(var2);
                                        _fun31443_ip = 491;
                                        continue _fun31443;
                                    case 477:
                                        var5 = _closure3_slot0;
                                        var2 = var5.reconnect;
                                        var2 = var2.bind(var5)();
                                    case 491:
                                        var2 = _closure3_slot0;
                                        var5 = var2.state;
                                        var2 = _closure1_slot22;
                                        var2 = var2.RTC_CONNECTED;
                                        if (!(var5 !== var2)) {
                                            _fun31443_ip = 562;
                                            continue _fun31443
                                        }
                                    case 514:
                                        var2 = _closure1_slot22;
                                        var2 = var2.RTC_CONNECTED;
                                        if (!(var4 === var2)) {
                                            _fun31443_ip = 1677;
                                            continue _fun31443
                                        }
                                    case 531:
                                        var2 = _closure3_slot0;
                                        var5 = var2.stateHistory;
                                        var4 = var5.reset;
                                        var2 = var2.state;
                                        var2 = var4.bind(var5)(var2);
                                        _fun31443_ip = 1677;
                                        continue _fun31443;
                                    case 562:
                                        var4 = _closure1_slot18;
                                        var2 = var4.shouldIncludePreferredRegion;
                                        var4 = var2.bind(var4)();
                                        var2 = null;
                                        var14 = null;
                                        if (!var4) {
                                            _fun31443_ip = 597;
                                            continue _fun31443
                                        }
                                    case 583:
                                        var5 = _closure1_slot18;
                                        var4 = var5.getPreferredRegion;
                                        var14 = var4.bind(var5)();
                                    case 597:
                                        var4 = _closure3_slot0;
                                        var4 = var4._connecting;
                                        if (!var4) {
                                            _fun31443_ip = 1561;
                                            continue _fun31443
                                        }
                                    case 613:
                                        var5 = _closure1_slot15;
                                        var4 = var5.getSettings;
                                        var13 = var4.bind(var5)();
                                        var7 = _closure3_slot0;
                                        var4 = var7._getAnalyticsProperties;
                                        var11 = var4.bind(var7)();
                                        var6 = _closure1_slot1;
                                        var15 = _closure1_slot3;
                                        var5 = 21;
                                        var4 = var15[var5];
                                        var10 = undefined;
                                        var9 = var6.bind(var10)(var4);
                                        var8 = var9.track;
                                        var4 = _closure1_slot20;
                                        var6 = var4.VOICE_CONNECTION_SUCCESS;
                                        var4 = {};
                                        var19 = var4;
                                        var18 = var11;
                                        var12 = copyDataProperties(var19, var18);
                                        var16 = var7.hostname;
                                        var12 = 'hostname';
                                        var4[var12] = var16;
                                        var16 = var7.port;
                                        var12 = 'port';
                                        var4[var12] = var16;
                                        var16 = var7.protocol;
                                        var12 = 'protocol';
                                        var4[var12] = var16;
                                        var12 = 'cloudflare_best_region';
                                        var4[var12] = var14;
                                        var14 = _closure1_slot0;
                                        var12 = 19;
                                        var12 = var15[var12];
                                        var14 = var14.bind(var10)(var12);
                                        var12 = var14.now;
                                        var12 = var12.bind(var14)();
                                        var7 = var7._connected;
                                        var14 = _closure3_slot0;
                                        if (var7) {
                                            _fun31443_ip = 792;
                                            continue _fun31443
                                        }
                                    case 784:
                                        var7 = var14._createdTime;
                                        _fun31443_ip = 798;
                                        continue _fun31443;
                                    case 792:
                                        var7 = var14._connectStartTime;
                                    case 798:
                                        var12 = var12 - var7;
                                        var7 = 'connect_time';
                                        var4[var7] = var12;
                                        var7 = _closure3_slot0;
                                        var14 = var7._connectCount;
                                        var12 = 'connect_count';
                                        var4[var12] = var14;
                                        var12 = _closure1_slot15;
                                        var14 = var12.getMediaEngine;
                                        var15 = var14.bind(var12)();
                                        var14 = var15.getAudioSubsystem;
                                        var15 = var14.bind(var15)();
                                        var14 = 'audio_subsystem';
                                        var4[var14] = var15;
                                        var14 = var12.getMediaEngine;
                                        var15 = var14.bind(var12)();
                                        var14 = var15.getAudioLayer;
                                        var15 = var14.bind(var15)();
                                        var14 = 'audio_layer';
                                        var4[var14] = var15;
                                        var14 = var13.automaticAudioSubsystem;
                                        var13 = 'automatic_audio_subsystem';
                                        var4[var13] = var14;
                                        var13 = var7.getMediaSessionId;
                                        var14 = var13.bind(var7)();
                                        var13 = 'media_session_id';
                                        var4[var13] = var14;
                                        var13 = var7.getVoiceParticipantType;
                                        var14 = var13.bind(var7)();
                                        var13 = 'participant_type';
                                        var4[var13] = var14;
                                        var13 = var7.joinVoiceId;
                                        var7 = 'join_voice_id';
                                        var4[var7] = var13;
                                        var7 = var12.getMediaEngine;
                                        var12 = var7.bind(var12)();
                                        var7 = var12.getVideoInputDeviceId;
                                        var12 = var7.bind(var12)();
                                        var7 = _closure1_slot31;
                                        var12 = var12 !== var7;
                                        if (!var12) {
                                            _fun31443_ip = 1022;
                                            continue _fun31443
                                        }
                                    case 999:
                                        var7 = _closure3_slot4;
                                        var13 = var7.context;
                                        var7 = _closure1_slot26;
                                        var7 = var7.DEFAULT;
                                        var12 = var13 === var7;
                                    case 1022:
                                        var7 = 'is_camera_enabled';
                                        var4[var7] = var12;
                                        var7 = _closure3_slot0;
                                        var13 = var7.stateHistory;
                                        var12 = var13.getVoiceConnectionSuccessStats;
                                        var18 = var12.bind(var13)();
                                        var19 = var4;
                                        var12 = copyDataProperties(var19, var18);
                                        var4 = var8.bind(var9)(var6, var4);
                                        var4 = var3.performance;
                                        var3 = var4.now;
                                        var8 = var3.bind(var4)();
                                        var9 = function arg0, arg1() {
                                            _fun31444: for (var _fun31444_ip = 0;;) switch (_fun31444_ip) {
                                                case 0:
                                                    var2 = arg0;
                                                    var1 = arg1;
                                                    var4 = null;
                                                    var3 = var4 == var2;
                                                    var0 = null;
                                                    if (var3) {
                                                        _fun31444_ip = 30;
                                                        continue _fun31444
                                                    }
                                                case 17:
                                                    var3 = var4 == var1;
                                                    var0 = null;
                                                    if (var3) {
                                                        _fun31444_ip = 30;
                                                        continue _fun31444
                                                    }
                                                case 26:
                                                    var0 = var2 - var1;
                                                case 30:
                                                    return var0;
                                            }
                                        };
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot3;
                                        var3 = var3[var5];
                                        var6 = var4.bind(var10)(var3);
                                        var5 = var6.track;
                                        var3 = _closure1_slot20;
                                        var4 = var3.VOICE_CONNECTION_TTC_COLLECTED;
                                        var3 = {};
                                        var11 = var11.rtc_connection_id;
                                        var3.rtc_connection_id = var11;
                                        var11 = var7._connectStartTime;
                                        var7 = var7._createdTime;
                                        var7 = var11 - var7;
                                        var3.time_1_creation_to_connect = var7;
                                        var7 = _closure3_slot5;
                                        var3.time_2_media_engine_connect = var7;
                                        var7 = _closure3_slot4;
                                        var11 = var7.transportInfo;
                                        var12 = var2 == var11;
                                        var7 = undefined;
                                        if (var12) {
                                            _fun31443_ip = 1196;
                                            continue _fun31443
                                        }
                                    case 1188:
                                        var7 = var11.createConnectionTime;
                                    case 1196:
                                        var3.time_3_media_engine_create_native_connection = var7;
                                        var7 = _closure3_slot4;
                                        var11 = var7.transportInfo;
                                        var12 = var2 == var11;
                                        var7 = undefined;
                                        if (var12) {
                                            _fun31443_ip = 1228;
                                            continue _fun31443
                                        }
                                    case 1222:
                                        var7 = var11.connectTime;
                                    case 1228:
                                        var3.time_4_media_engine_connect_to_socket = var7;
                                        var7 = _closure3_slot0;
                                        var7 = var7._connection;
                                        var12 = var2 == var7;
                                        var11 = undefined;
                                        if (var12) {
                                            _fun31443_ip = 1260;
                                            continue _fun31443
                                        }
                                    case 1254:
                                        var11 = var7.onConnectCallbackAt;
                                    case 1260:
                                        var7 = _closure3_slot0;
                                        var12 = var7._connection;
                                        var13 = var2 == var12;
                                        var7 = undefined;
                                        if (var13) {
                                            _fun31443_ip = 1302;
                                            continue _fun31443
                                        }
                                    case 1279:
                                        var12 = var12.transportInfo;
                                        var13 = var2 == var12;
                                        var7 = undefined;
                                        if (var13) {
                                            _fun31443_ip = 1302;
                                            continue _fun31443
                                        }
                                    case 1294:
                                        var7 = var12.connectCallbackScheduledMs;
                                    case 1302:
                                        var7 = var9.bind(var10)(var11, var7);
                                        var3.time_5_scheduling_connected_callback = var7;
                                        var7 = _closure3_slot0;
                                        var11 = var7._connection;
                                        var12 = var2 == var11;
                                        var7 = undefined;
                                        if (var12) {
                                            _fun31443_ip = 1340;
                                            continue _fun31443
                                        }
                                    case 1334:
                                        var7 = var11.onConnectCallbackAt;
                                    case 1340:
                                        var7 = var9.bind(var10)(var8, var7);
                                        var3.time_6_state_connected_to_end_measure = var7;
                                        var7 = _closure3_slot0;
                                        var8 = var7._connectCount;
                                        var3.connect_count = var8;
                                        var7 = var7._connection;
                                        var11 = var2 == var7;
                                        var8 = undefined;
                                        if (var11) {
                                            _fun31443_ip = 1391;
                                            continue _fun31443
                                        }
                                    case 1385:
                                        var8 = var7.onConnectCallbackAt;
                                    case 1391:
                                        var7 = _closure3_slot0;
                                        var11 = var7._connection;
                                        var12 = var2 == var11;
                                        var7 = undefined;
                                        if (var12) {
                                            _fun31443_ip = 1416;
                                            continue _fun31443
                                        }
                                    case 1410:
                                        var7 = var11.beginInitializeAt;
                                    case 1416:
                                        var7 = var9.bind(var10)(var8, var7);
                                        var3.rtc_connecting_native_connect = var7;
                                        var7 = _closure3_slot0;
                                        var7 = var7._connection;
                                        var11 = var2 == var7;
                                        var8 = undefined;
                                        if (var11) {
                                            _fun31443_ip = 1454;
                                            continue _fun31443
                                        }
                                    case 1448:
                                        var8 = var7.onVideoCodecsCallbackAt;
                                    case 1454:
                                        var7 = _closure3_slot0;
                                        var11 = var7._connection;
                                        var12 = var2 == var11;
                                        var7 = undefined;
                                        if (var12) {
                                            _fun31443_ip = 1479;
                                            continue _fun31443
                                        }
                                    case 1473:
                                        var7 = var11.onConnectCallbackAt;
                                    case 1479:
                                        var7 = var9.bind(var10)(var8, var7);
                                        var3.rtc_connecting_native_codecs = var7;
                                        var7 = _closure3_slot0;
                                        var7 = var7._connection;
                                        var11 = var2 == var7;
                                        var8 = undefined;
                                        if (var11) {
                                            _fun31443_ip = 1517;
                                            continue _fun31443
                                        }
                                    case 1511:
                                        var8 = var7.onEncryptionModesCallbackAt;
                                    case 1517:
                                        var7 = _closure3_slot0;
                                        var11 = var7._connection;
                                        var12 = var2 == var11;
                                        var7 = undefined;
                                        if (var12) {
                                            _fun31443_ip = 1542;
                                            continue _fun31443
                                        }
                                    case 1536:
                                        var7 = var11.onVideoCodecsCallbackAt;
                                    case 1542:
                                        var7 = var9.bind(var10)(var8, var7);
                                        var3.rtc_connecting_native_crypto_modes = var7;
                                        var3 = var5.bind(var6)(var4, var3);
                                    case 1561:
                                        var3 = _closure3_slot0;
                                        var5 = var3._localMediaSinkWantsManager;
                                        if (!(var2 != var5)) {
                                            _fun31443_ip = 1590;
                                            continue _fun31443
                                        }
                                    case 1575:
                                        var4 = var5.setConnection;
                                        var3 = _closure3_slot4;
                                        var3 = var4.bind(var5)(var3);
                                    case 1590:
                                        var3 = _closure3_slot0;
                                        var3 = var3._goLiveQualityManager;
                                        if (!(var2 != var3)) {
                                            _fun31443_ip = 1614;
                                            continue _fun31443
                                        }
                                    case 1604:
                                        var2 = var3.update;
                                        var2 = var2.bind(var3)();
                                    case 1614:
                                        var1 = _closure3_slot0;
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var0 = 19;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var2 = var3.bind(var0)(var2);
                                        var0 = var2.now;
                                        var0 = var0.bind(var2)();
                                        var1._connectCompletedTime = var0;
                                        var0 = true;
                                        var1._connected = var0;
                                        var0 = false;
                                        var1._connecting = var0;
                                        var1._encountered_socket_failure = var0;
                                    case 1677:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.SecureFramesUpdate;
                            var8 = function(arg0) { // Environment: var5
                                var3 = _closure3_slot0;
                                var0 = arg0;
                                var3._secureFramesState = var0;
                                var2 = var3.emit;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var0 = 38;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.RTCConnectionEvent;
                                var1 = var1.SecureFramesUpdate;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.Ping;
                            var11 = var2._handlePing;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.PingTimeout;
                            var11 = var2._handlePingTimeout;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.OutboundLossRate;
                            var11 = var2._handleOutboundLossRate;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var10 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var9 = var8.LocalVideoDisabled;
                            var11 = var2._handleLocalVideoDisabled;
                            var8 = var11.bind;
                            var8 = var8.bind(var11)(var2);
                            var8 = var10.bind(var1)(var9, var8);
                            var9 = var1.on;
                            var8 = var6[var3];
                            var8 = var4.bind(var0)(var8);
                            var8 = var8.BaseConnectionEvent;
                            var8 = var8.Stats;
                            var10 = _closure1_slot1;
                            var7 = 57;
                            var7 = var6[var7];
                            var10 = var10.bind(var0)(var7);
                            var7 = var10.create;
                            var7 = var7.bind(var10)();
                            var7 = var9.bind(var1)(var8, var7);
                            var9 = var1.on;
                            var7 = var6[var3];
                            var7 = var4.bind(var0)(var7);
                            var7 = var7.BaseConnectionEvent;
                            var8 = var7.RemoteStreamsReady;
                            var10 = var2._handleRemoteStreamsReady;
                            var7 = var10.bind;
                            var7 = var7.bind(var10)(var2);
                            var7 = var9.bind(var1)(var8, var7);
                            var9 = var1.on;
                            var7 = var6[var3];
                            var7 = var4.bind(var0)(var7);
                            var7 = var7.BaseConnectionEvent;
                            var8 = var7.UsersMerged;
                            var10 = var2.handleUsersMerged;
                            var7 = var10.bind;
                            var7 = var7.bind(var10)(var2);
                            var7 = var9.bind(var1)(var8, var7);
                            var8 = var1.on;
                            var7 = var6[var3];
                            var7 = var4.bind(var0)(var7);
                            var7 = var7.BaseConnectionEvent;
                            var7 = var7.NoiseCancellationError;
                            var5 = function(arg0) { // Environment: var5
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var1._noiseCancellationError = var0;
                                var0 = undefined;
                                return var0;
                            };
                            var5 = var8.bind(var1)(var7, var5);
                            var5 = var1.on;
                            var3 = var6[var3];
                            var3 = var4.bind(var0)(var3);
                            var3 = var3.BaseConnectionEvent;
                            var4 = var3.MLSFailure;
                            var6 = var2._handleMLSFailure;
                            var3 = var6.bind;
                            var3 = var3.bind(var6)(var2);
                            var3 = var5.bind(var1)(var4, var3);
                            var4 = var1.setRemoteVideoSinkWants;
                            var3 = var2._remoteVideoSinkWants;
                            var3 = var4.bind(var1)(var3);
                            var2._connection = var1;
                            var1 = var1.mediaEngineConnectionId;
                            var2._mediaEngineConnectionId = var1;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[55] = var4;
                var4 = {};
                var6 = '_handleSpeaking';
                var4.key = var6;
                var6 = function arg0, arg1, arg2, arg3() {
                    _fun31447: for (var _fun31447_ip = 0;;) switch (_fun31447_ip) {
                        case 0:
                            var3 = arg1;
                            var2 = arg2;
                            var1 = this;
                            var5 = var1._connection;
                            var0 = null;
                            var4 = var0 != var5;
                            if (!var4) {
                                _fun31447_ip = 33;
                                continue _fun31447
                            }
                        case 24:
                            var6 = var1.userId;
                            var4 = var6 !== var3;
                        case 33:
                            if (!var4) {
                                _fun31447_ip = 90;
                                continue _fun31447
                            }
                        case 36:
                            var4 = _closure1_slot30;
                            var6 = var4.NONE;
                            var4 = arg3;
                            if (!(var4 !== var6)) {
                                _fun31447_ip = 68;
                                continue _fun31447
                            }
                        case 56:
                            var4 = var5.createUser;
                            var4 = var4.bind(var5)(var3, var2);
                        case 68:
                            var1 = var1._localMediaSinkWantsManager;
                            if (!(var0 != var1)) {
                                _fun31447_ip = 90;
                                continue _fun31447
                            }
                        case 78:
                            var0 = var1.setAudioSSRC;
                            var0 = var0.bind(var1)(var3, var2);
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[56] = var4;
                var4 = {};
                var6 = 'handleFlags';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    var5 = this;
                    var4 = var5.emit;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.RTCConnectionEvent;
                    var3 = var1.Flags;
                    var2 = arg0;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.value = var6;
                var0[57] = var4;
                var4 = {};
                var6 = 'handlePlatform';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    var6 = this;
                    var5 = var6.emit;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.RTCConnectionEvent;
                    var10 = var1.Platform;
                    var7 = var6.channelId;
                    var9 = arg0;
                    var8 = arg1;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var4.value = var6;
                var0[58] = var4;
                var4 = {};
                var6 = 'handleUsersMerged';
                var4.key = var6;
                var6 = function arg0() {
                    var6 = arg0;
                    var5 = this;
                    var4 = var5.emit;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.RTCConnectionEvent;
                    var3 = var1.UsersMerged;
                    var2 = var6.map;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var2 = var2.bind(var6)(var1);
                    var1 = var5.context;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var4.value = var6;
                var0[59] = var4;
                var4 = {};
                var6 = 'getOrCreateVideoQuality';
                var4.key = var6;
                var6 = function() {
                    _fun31452: for (var _fun31452_ip = 0;;) switch (_fun31452_ip) {
                        case 0:
                            var0 = this;
                            var _closure3_slot0 = var0;
                            var2 = var0._connection;
                            var4 = null;
                            if (!(var4 != var2)) {
                                _fun31452_ip = 344;
                                continue _fun31452
                            }
                        case 24:
                            var2 = var0._videoQuality;
                            if (!(var4 == var2)) {
                                _fun31452_ip = 344;
                                continue _fun31452
                            }
                        case 37:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var7 = 58;
                            var8 = var3[var7];
                            var6 = undefined;
                            var8 = var5.bind(var6)(var8);
                            var10 = var8.VideoQuality;
                            var16 = var0._connection;
                            var9 = var10.prototype;
                            var9 = Object.create(var9, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var17 = var9;
                            var8 = new var17[var10](var16, var15);
                            var8 = var8 instanceof Object ? var8 : var9;
                            var0._videoQuality = var8;
                            var10 = var0._videoQuality;
                            var9 = var10.updateCallUserIdsCount;
                            var8 = var0._userIds;
                            var8 = var8.size;
                            var8 = var9.bind(var10)(var8);
                            var9 = var0._videoQuality;
                            var8 = var9.start;
                            var8 = var8.bind(var9)();
                            var12 = 59;
                            var3 = var3[var12];
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.VideoHealthManager;
                            var5 = var3.defaultConfig;
                            var3 = var5.featureEnabled;
                            var11 = var5.windowLength;
                            var10 = var5.allowedPoorFpsRatio;
                            var9 = var5.fpsThreshold;
                            var8 = var5.backoffTimeSec;
                            if (!var3) {
                                _fun31452_ip = 344;
                                continue _fun31452
                            }
                        case 203:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var3 = var3[var12];
                            var3 = var5.bind(var6)(var3);
                            var3 = var3.VideoHealthManager;
                            var5 = var3.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var17 = var5;
                            var16 = var11;
                            var15 = var10;
                            var14 = var9;
                            var13 = var8;
                            var3 = new var17[var3](var16, var15, var14, var13, var12);
                            var3 = var3 instanceof Object ? var3 : var5;
                            var0._videoHealthManager = var3;
                            var3 = var0._localMediaSinkWantsManager;
                            if (!(var4 != var3)) {
                                _fun31452_ip = 292;
                                continue _fun31452
                            }
                        case 274:
                            var4 = var0._localMediaSinkWantsManager;
                            var3 = var0._videoHealthManager;
                            var4.videoHealthManager = var3;
                        case 292:
                            var4 = var0._videoQuality;
                            var3 = var4.on;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var2 = var2[var7];
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.VideoQualityEvent;
                            var2 = var2.FpsUpdate;
                            var1 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun31453: for (var _fun31453_ip = 0;;) switch (_fun31453_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = _closure3_slot0;
                                        var5 = var0._localMediaSinkWantsManager;
                                        var0 = null;
                                        var2 = var0 != var5;
                                        if (!var2) {
                                            _fun31453_ip = 36;
                                            continue _fun31453
                                        }
                                    case 25:
                                        var3 = var5.shouldReceiveFromUser;
                                        var2 = var3.bind(var5)(var4);
                                    case 36:
                                        if (!var2) {
                                            _fun31453_ip = 74;
                                            continue _fun31453
                                        }
                                    case 39:
                                        var1 = _closure3_slot0;
                                        var3 = var1._videoHealthManager;
                                        if (!(var0 != var3)) {
                                            _fun31453_ip = 74;
                                            continue _fun31453
                                        }
                                    case 53:
                                        var2 = var3.updateFps;
                                        var1 = arg1;
                                        var0 = arg2;
                                        var0 = var2.bind(var3)(var4, var1, var0);
                                    case 74:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                        case 344:
                            var0 = var0._videoQuality;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[60] = var4;
                var4 = {};
                var6 = '_handleVideoStreamId';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31454: for (var _fun31454_ip = 0;;) switch (_fun31454_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var4 = var0.userId;
                            var3 = var0.streamId;
                            var7 = var0.videoSsrc;
                            var8 = var0.videoStreamParameters;
                            var11 = var1.emit;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 38;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var6.bind(var0)(var2);
                            var2 = var2.RTCConnectionEvent;
                            var17 = var2.Video;
                            var16 = var1.guildId;
                            var15 = var1.channelId;
                            var12 = var1.streamServerId;
                            var18 = var1;
                            var14 = var4;
                            var13 = var3;
                            var2 = var18[var11](var17, var16, var15, var14, var13, var12, var11);
                            var2 = null;
                            var6 = var2 != var3;
                            if (!var6) {
                                _fun31454_ip = 130;
                                continue _fun31454
                            }
                        case 116:
                            var9 = var1.getOrCreateVideoQuality;
                            var9 = var9.bind(var1)();
                            var6 = var2 == var9;
                        case 130:
                            if (!var6) {
                                _fun31454_ip = 155;
                                continue _fun31454
                            }
                        case 133:
                            var10 = var1.logger;
                            var9 = var10.error;
                            var6 = '_handleVideoStreamId: Unable to create videoQuality.';
                            var6 = var9.bind(var10)(var6);
                        case 155:
                            var6 = var1._videoQuality;
                            var6 = var2 != var6;
                            if (!var6) {
                                _fun31454_ip = 177;
                                continue _fun31454
                            }
                        case 168:
                            var9 = var1.userId;
                            var6 = var9 === var4;
                        case 177:
                            if (!var6) {
                                _fun31454_ip = 195;
                                continue _fun31454
                            }
                        case 180:
                            var6 = var8.forEach;
                            var5 = function(arg0) { // Environment: var5
                                _fun31455: for (var _fun31455_ip = 0;;) switch (_fun31455_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var4 = var3.ssrc;
                                        var0 = null;
                                        var5 = var0 != var4;
                                        var1 = 0;
                                        var2 = 0;
                                        if (!var5) {
                                            _fun31455_ip = 25;
                                            continue _fun31455
                                        }
                                    case 22:
                                        var2 = var4;
                                    case 25:
                                        var1 = var2 > var1;
                                        if (!var1) {
                                            _fun31455_ip = 44;
                                            continue _fun31455
                                        }
                                    case 32:
                                        var4 = var3.active;
                                        var3 = true;
                                        var1 = var3 === var4;
                                    case 44:
                                        if (!var1) {
                                            _fun31455_ip = 77;
                                            continue _fun31455
                                        }
                                    case 47:
                                        var1 = _closure3_slot0;
                                        var1 = var1._videoQuality;
                                        if (!(var0 != var1)) {
                                            _fun31455_ip = 77;
                                            continue _fun31455
                                        }
                                    case 64:
                                        var0 = var1.setOutboundSsrc;
                                        var0 = var0.bind(var1)(var2);
                                    case 77:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var5 = var6.bind(var8)(var5);
                        case 195:
                            var5 = var1.userId;
                            if (!(var5 !== var4)) {
                                _fun31454_ip = 306;
                                continue _fun31454
                            }
                        case 204:
                            var5 = 0;
                            var5 = var5 === var7;
                            if (!var5) {
                                _fun31454_ip = 217;
                                continue _fun31454
                            }
                        case 213:
                            var5 = var2 === var3;
                        case 217:
                            if (!var5) {
                                _fun31454_ip = 261;
                                continue _fun31454
                            }
                        case 220:
                            if (!var5) {
                                _fun31454_ip = 306;
                                continue _fun31454
                            }
                        case 223:
                            var8 = var1._videoQuality;
                            var6 = var2 == var8;
                            var5 = undefined;
                            if (var6) {
                                _fun31454_ip = 258;
                                continue _fun31454
                            }
                        case 238:
                            var6 = var8.getInboundParticipants;
                            var8 = var6.bind(var8)();
                            var6 = var8.includes;
                            var5 = var6.bind(var8)(var4);
                        case 258:
                            if (!var5) {
                                _fun31454_ip = 306;
                                continue _fun31454
                            }
                        case 261:
                            var6 = var1._videoQuality;
                            if (!(var2 != var6)) {
                                _fun31454_ip = 285;
                                continue _fun31454
                            }
                        case 271:
                            var5 = var6.setInboundUser;
                            var5 = var5.bind(var6)(var4, var7);
                        case 285:
                            var6 = var1._videoHealthManager;
                            if (!(var2 != var6)) {
                                _fun31454_ip = 306;
                                continue _fun31454
                            }
                        case 295:
                            var5 = var6.createUser;
                            var5 = var5.bind(var6)(var4);
                        case 306:
                            var5 = var1._connection;
                            if (!(var2 != var5)) {
                                _fun31454_ip = 406;
                                continue _fun31454
                            }
                        case 316:
                            var5 = var1.userId;
                            if (!(var5 !== var4)) {
                                _fun31454_ip = 406;
                                continue _fun31454
                            }
                        case 325:
                            var5 = var1._localMediaSinkWantsManager;
                            if (!(var2 == var5)) {
                                _fun31454_ip = 388;
                                continue _fun31454
                            }
                        case 335:
                            var5 = var1._goLiveQualityManager;
                            if (!(var2 != var5)) {
                                _fun31454_ip = 406;
                                continue _fun31454
                            }
                        case 345:
                            var6 = var1._goLiveQualityManager;
                            var5 = var6.getUserID;
                            var5 = var5.bind(var6)();
                            if (!(var5 === var4)) {
                                _fun31454_ip = 406;
                                continue _fun31454
                            }
                        case 365:
                            var5 = var1._goLiveQualityManager;
                            if (!(var2 != var5)) {
                                _fun31454_ip = 406;
                                continue _fun31454
                            }
                        case 375:
                            var2 = var5.setStreamId;
                            var2 = var2.bind(var5)(var3);
                            _fun31454_ip = 406;
                            continue _fun31454;
                        case 388:
                            var2 = var1._localMediaSinkWantsManager;
                            var1 = var2.setStreamId;
                            var1 = var1.bind(var2)(var4, var3);
                        case 406:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[61] = var4;
                var4 = {};
                var6 = '_handleLocalVideoDisabled';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31456: for (var _fun31456_ip = 0;;) switch (_fun31456_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = this;
                            var1 = var0.userId;
                            if (!(var1 !== var4)) {
                                _fun31456_ip = 48;
                                continue _fun31456
                            }
                        case 15:
                            var1 = var0.getOrCreateVideoQuality;
                            var3 = var1.bind(var0)();
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun31456_ip = 52;
                                continue _fun31456
                            }
                        case 31:
                            var2 = var3.setUserVideoDisabled;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var4, var1);
                        case 48:
                            var1 = undefined;
                            return var1;
                        case 52:
                            var2 = var0.logger;
                            var1 = var2.error;
                            var0 = '_handleLocalVideoDisabled: Unable to create videoQuality.';
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[62] = var4;
                var4 = {};
                var6 = '_handleRemoteStreamsReady';
                var4.key = var6;
                var6 = function arg0() {
                    var7 = this;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var0 = 19;
                    var2 = var4[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.now;
                    var3 = var2.bind(var3)();
                    var2 = var7._connectStartTime;
                    var6 = var3 - var2;
                    var3 = _closure1_slot1;
                    var2 = 21;
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot20;
                    var2 = var1.VOICE_CONNECTION_REMOTE_STREAMS_CREATED;
                    var1 = {};
                    var5 = var7._getAnalyticsProperties;
                    var8 = var5.bind(var7)();
                    var9 = var1;
                    var5 = copyDataProperties(var9, var8);
                    var7 = arg0;
                    var5 = 'number_of_users';
                    var1[var5] = var7;
                    var5 = 'duration_ms';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var4.value = var6;
                var0[63] = var4;
                var4 = {};
                var6 = '_handleVideo';
                var4.key = var6;
                var6 = function arg0, arg1, arg2, arg3, arg4() {
                    _fun31458: for (var _fun31458_ip = 0;;) switch (_fun31458_ip) {
                        case 0:
                            var6 = arg1;
                            var7 = arg2;
                            var9 = arg3;
                            var2 = arg4;
                            var3 = this;
                            var _closure3_slot0 = var3;
                            var _closure3_slot1 = var6;
                            var _closure3_slot2 = var9;
                            var4 = var3._connection;
                            var1 = null;
                            if (!(var1 != var4)) {
                                _fun31458_ip = 423;
                                continue _fun31458
                            }
                        case 44:
                            var4 = var3.userId;
                            if (!(var4 !== var6)) {
                                _fun31458_ip = 423;
                                continue _fun31458
                            }
                        case 56:
                            var4 = var3._localMediaSinkWantsManager;
                            if (!(var1 == var4)) {
                                _fun31458_ip = 266;
                                continue _fun31458
                            }
                        case 69:
                            var8 = new Array(0);
                            var4 = _closure1_slot36;
                            var12 = undefined;
                            var11 = var4.bind(var12)(var2);
                            var5 = var11.bind(var12)();
                            var4 = var5.done;
                            var10 = var5;
                            var5 = undefined;
                            if (var4) {
                                _fun31458_ip = 211;
                                continue _fun31458
                            }
                        case 104:
                            var4 = var10.value;
                            var14 = var4.ssrc;
                            var13 = var5;
                            if (!(var1 != var14)) {
                                _fun31458_ip = 193;
                                continue _fun31458
                            }
                        case 122:
                            var14 = var4.quality;
                            var13 = var5;
                            if (!(var1 != var14)) {
                                _fun31458_ip = 193;
                                continue _fun31458
                            }
                        case 135:
                            var15 = var8.push;
                            var14 = {};
                            var16 = var4.ssrc;
                            var14.ssrc = var16;
                            var16 = var4.quality;
                            var14.quality = var16;
                            var4 = var4.active;
                            var16 = var1 == var4;
                            if (var16) {
                                _fun31458_ip = 180;
                                continue _fun31458
                            }
                        case 177:
                            var16 = var4;
                        case 180:
                            var14.active = var16;
                            var14 = var15.bind(var8)(var14);
                            var13 = var4;
                        case 193:
                            var14 = var11.bind(var12)();
                            var4 = var14.done;
                            var5 = var13;
                            var10 = var14;
                            if (!var4) {
                                _fun31458_ip = 104;
                                continue _fun31458
                            }
                        case 211:
                            var5 = var3._goLiveQualityManager;
                            if (!(var1 != var5)) {
                                _fun31458_ip = 234;
                                continue _fun31458
                            }
                        case 221:
                            var4 = var5.setUserID;
                            var4 = var4.bind(var5)(var6);
                        case 234:
                            var5 = var3._goLiveQualityManager;
                            if (!(var1 != var5)) {
                                _fun31458_ip = 404;
                                continue _fun31458
                            }
                        case 247:
                            var4 = var5.updateAudioAndVideoStreamInfo;
                            var4 = var4.bind(var5)(var7, var8);
                            _fun31458_ip = 404;
                            continue _fun31458;
                        case 266:
                            var5 = var3._localMediaSinkWantsManager;
                            var4 = var5.setAudioSSRC;
                            var4 = var4.bind(var5)(var6, var7);
                            var5 = var2.map;
                            var4 = function(arg0) { // Environment: var0
                                var1 = arg0;
                                var0 = {};
                                var2 = _closure1_slot29;
                                var2 = var2.VIDEO;
                                var0.type = var2;
                                var2 = var1.rid;
                                var0.rid = var2;
                                var2 = var1.ssrc;
                                var0.ssrc = var2;
                                var2 = var1.rtxSsrc;
                                var0.rtxSsrc = var2;
                                var1 = var1.quality;
                                var0.quality = var1;
                                var2 = _closure3_slot2;
                                var1 = 0;
                                var1 = var2 > var1;
                                var0.active = var1;
                                return var0;
                            };
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.length;
                            var8 = 0;
                            if (!(var8 === var4)) {
                                _fun31458_ip = 384;
                                continue _fun31458
                            }
                        case 310:
                            var7 = var5.push;
                            var4 = {};
                            var10 = _closure1_slot29;
                            var10 = var10.VIDEO;
                            var4.type = var10;
                            var10 = '100';
                            var4.rid = var10;
                            var4.ssrc = var9;
                            var10 = 1;
                            var10 = var9 + var10;
                            var4.rtxSsrc = var10;
                            var10 = 100;
                            var4.quality = var10;
                            var8 = var9 > var8;
                            var4.active = var8;
                            var4 = var7.bind(var5)(var4);
                        case 384:
                            var4 = var3._localMediaSinkWantsManager;
                            var3 = var4.setVideoSSRCs;
                            var3 = var3.bind(var4)(var6, var5);
                        case 404:
                            if (!(var1 != var2)) {
                                _fun31458_ip = 423;
                                continue _fun31458
                            }
                        case 408:
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun31460: for (var _fun31460_ip = 0;;) switch (_fun31460_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.quality;
                                        var1 = 100;
                                        if (!(var1 === var2)) {
                                            _fun31460_ip = 104;
                                            continue _fun31460
                                        }
                                    case 16:
                                        var8 = _closure3_slot0;
                                        var7 = var8.emit;
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var2 = 38;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var2 = var4.bind(var2)(var3);
                                        var2 = var2.RTCConnectionEvent;
                                        var15 = var2.VideoSourceQualityChanged;
                                        var14 = var8.guildId;
                                        var13 = var8.channelId;
                                        var12 = _closure3_slot1;
                                        var11 = var0.maxResolution;
                                        var10 = var0.maxFrameRate;
                                        var9 = var8.context;
                                        var16 = var8;
                                        var0 = var16[var7](var15, var14, var13, var12, var11, var10, var9, var8);
                                    case 104:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 423:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[64] = var4;
                var4 = {};
                var6 = '_handleControlPing';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31461: for (var _fun31461_ip = 0;;) switch (_fun31461_ip) {
                        case 0:
                            var2 = this;
                            var3 = _closure1_slot15;
                            var1 = var3.supports;
                            var0 = _closure1_slot25;
                            var0 = var0.NATIVE_PING;
                            var0 = var1.bind(var3)(var0);
                            if (var0) {
                                _fun31461_ip = 48;
                                continue _fun31461
                            }
                        case 34:
                            var1 = var2._handlePing;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 48:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[65] = var4;
                var4 = {};
                var6 = '_handlePing';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31462: for (var _fun31462_ip = 0;;) switch (_fun31462_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = this;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun31462_ip = 193;
                                continue _fun31462
                            }
                        case 15:
                            var4 = var5._pings;
                            var3 = var4.push;
                            var1 = {};
                            var6 = global;
                            var7 = var6.Date;
                            var6 = var7.now;
                            var6 = var6.bind(var7)();
                            var1.time = var6;
                            var1.value = var2;
                            var1 = var3.bind(var4)(var1);
                            var1 = var5._pings;
                            var1 = var1.length;
                            var3 = 200;
                            if (!(var1 >= var3)) {
                                _fun31462_ip = 108;
                                continue _fun31462
                            }
                        case 77:
                            var4 = var5._pings;
                            var1 = var4.shift;
                            var1 = var1.bind(var4)();
                            var1 = var5._pings;
                            var1 = var1.length;
                            if (var1 >= var3) {
                                _fun31462_ip = 77;
                                continue _fun31462
                            }
                        case 108:
                            var1 = 500;
                            if (!(var2 > var1)) {
                                _fun31462_ip = 133;
                                continue _fun31462
                            }
                        case 118:
                            var1 = var5._pingBadCount;
                            var1 = var1 + 1;
                            var5._pingBadCount = var1;
                        case 133:
                            var4 = var5.emit;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 38;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var1.RTCConnectionEvent;
                            var3 = var1.Ping;
                            var2 = var5._pings;
                            var1 = var5.quality;
                            var1 = var4.bind(var5)(var3, var2, var1);
                        case 193:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[66] = var4;
                var4 = {};
                var6 = '_handlePingTimeout';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31463: for (var _fun31463_ip = 0;;) switch (_fun31463_ip) {
                        case 0:
                            var2 = this;
                            var3 = var2._pingTimeouts;
                            var1 = var3.push;
                            var0 = arg0;
                            var0 = var1.bind(var3)(var0);
                            var0 = var2._pingTimeouts;
                            var5 = var0.length;
                            var1 = 3;
                            var0 = var5 >= var1;
                            if (!var0) {
                                _fun31463_ip = 85;
                                continue _fun31463
                            }
                        case 43:
                            var4 = var2._pingTimeouts;
                            var6 = 1;
                            var3 = var5 - var6;
                            var4 = var4[var3];
                            var7 = var2._pingTimeouts;
                            var3 = 2;
                            var3 = var5 - var3;
                            var3 = var7[var3];
                            var3 = var3 + var6;
                            var0 = var4 === var3;
                        case 85:
                            if (!var0) {
                                _fun31463_ip = 130;
                                continue _fun31463
                            }
                        case 88:
                            var4 = var2._pingTimeouts;
                            var3 = 2;
                            var3 = var5 - var3;
                            var3 = var4[var3];
                            var4 = var2._pingTimeouts;
                            var1 = var5 - var1;
                            var4 = var4[var1];
                            var1 = 1;
                            var1 = var4 + var1;
                            var0 = var3 === var1;
                        case 130:
                            if (!var0) {
                                _fun31463_ip = 147;
                                continue _fun31463
                            }
                        case 133:
                            var1 = var2._handlePing;
                            var0 = arg1;
                            var0 = var1.bind(var2)(var0);
                        case 147:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[67] = var4;
                var4 = {};
                var6 = '_handleOutboundLossRate';
                var4.key = var6;
                var6 = function arg0() {
                    var4 = arg0;
                    var3 = this;
                    var3._outboundLossRate = var4;
                    var2 = var3.emit;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.RTCConnectionEvent;
                    var1 = var1.OutboundLossRate;
                    var1 = var2.bind(var3)(var1, var4);
                    return var0;
                };
                var4.value = var6;
                var0[68] = var4;
                var4 = {};
                var6 = '_getAnalyticsProperties';
                var4.key = var6;
                var6 = function() {
                    _fun31465: for (var _fun31465_ip = 0;;) switch (_fun31465_ip) {
                        case 0:
                            var1 = this;
                            var3 = _closure1_slot14;
                            var2 = var3.getChannel;
                            var0 = var1.channelId;
                            var0 = var2.bind(var3)(var0);
                            var2 = null;
                            var3 = var2 == var0;
                            var2 = undefined;
                            if (var3) {
                                _fun31465_ip = 41;
                                continue _fun31465
                            }
                        case 36:
                            var2 = var0.type;
                        case 41:
                            var0 = {};
                            var3 = var1.guildId;
                            var0.guild_id = var3;
                            var3 = var1.channelId;
                            var0.channel_id = var3;
                            var0.channel_type = var2;
                            var2 = var1.getRTCConnectionId;
                            var2 = var2.bind(var1)();
                            var0.rtc_connection_id = var2;
                            var2 = var1.context;
                            var0.context = var2;
                            var2 = var1.voiceVersion;
                            var0.voice_backend_version = var2;
                            var1 = var1.rtcWorkerVersion;
                            var0.rtc_worker_backend_version = var1;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[69] = var4;
                var4 = {};
                var6 = '_handleClientConnect';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31466: for (var _fun31466_ip = 0;;) switch (_fun31466_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var2 = var4.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun31467: for (var _fun31467_ip = 0;;) switch (_fun31467_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var0 = _closure3_slot0;
                                        var2 = var0._userIds;
                                        var1 = var2.add;
                                        var1 = var1.bind(var2)(var3);
                                        var2 = var0._connection;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun31467_ip = 52;
                                            continue _fun31467
                                        }
                                    case 38:
                                        var1 = var2.createUser;
                                        var0 = 0;
                                        var0 = var1.bind(var2)(var3, var0);
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var4)(var0);
                            var3 = var1.emit;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var0 = 38;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.RTCConnectionEvent;
                            var2 = var2.ClientConnect;
                            var2 = var3.bind(var1)(var2, var4);
                            var5 = var1._videoQuality;
                            var2 = null;
                            if (!(var2 != var5)) {
                                _fun31466_ip = 110;
                                continue _fun31466
                            }
                        case 88:
                            var4 = var5.updateCallUserIdsCount;
                            var3 = var1._userIds;
                            var3 = var3.size;
                            var3 = var4.bind(var5)(var3);
                        case 110:
                            var5 = var1._goLiveQualityManager;
                            if (!(var2 != var5)) {
                                _fun31466_ip = 137;
                                continue _fun31466
                            }
                        case 120:
                            var4 = var5.updateCallUserIds;
                            var3 = var1._userIds;
                            var3 = var4.bind(var5)(var3);
                        case 137:
                            var3 = var1._localMediaSinkWantsManager;
                            if (!(var2 != var3)) {
                                _fun31466_ip = 164;
                                continue _fun31466
                            }
                        case 147:
                            var2 = var3.updateCallUserIds;
                            var1 = var1._userIds;
                            var1 = var2.bind(var3)(var1);
                        case 164:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[70] = var4;
                var4 = {};
                var6 = '_handleClientDisconnect';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31468: for (var _fun31468_ip = 0;;) switch (_fun31468_ip) {
                        case 0:
                            var6 = arg0;
                            var2 = this;
                            var1 = var2._videoQuality;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun31468_ip = 401;
                                continue _fun31468
                            }
                        case 21:
                            var4 = var2.context;
                            var0 = _closure1_slot26;
                            var0 = var0.DEFAULT;
                            if (!(var4 === var0)) {
                                _fun31468_ip = 401;
                                continue _fun31468
                            }
                        case 46:
                            var0 = var1.getInboundStats;
                            var8 = var0.bind(var1)(var6);
                            var0 = var3 == var8;
                            var12 = undefined;
                            var5 = undefined;
                            if (var0) {
                                _fun31468_ip = 74;
                                continue _fun31468
                            }
                        case 68:
                            var5 = var8.num_frames;
                        case 74:
                            var7 = var3 != var5;
                            var4 = 0;
                            var0 = 0;
                            if (!var7) {
                                _fun31468_ip = 88;
                                continue _fun31468
                            }
                        case 85:
                            var0 = var5;
                        case 88:
                            if (!(var3 != var8)) {
                                _fun31468_ip = 401;
                                continue _fun31468
                            }
                        case 95:
                            if (!(var0 > var4)) {
                                _fun31468_ip = 401;
                                continue _fun31468
                            }
                        case 102:
                            var11 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var0 = 21;
                            var0 = var13[var0];
                            var7 = var11.bind(var12)(var0);
                            var5 = var7.track;
                            var0 = _closure1_slot20;
                            var4 = var0.VIDEO_STREAM_ENDED;
                            var0 = {};
                            var9 = var2._getAnalyticsProperties;
                            var14 = var9.bind(var2)();
                            var15 = var0;
                            var9 = copyDataProperties(var15, var14);
                            var9 = 45;
                            var9 = var13[var9];
                            var11 = var11.bind(var12)(var9);
                            var9 = var11.getAppHardwareAccelerationEnabled;
                            var11 = var9.bind(var11)();
                            var9 = 'app_hardware_acceleration_enabled';
                            var0[var9] = var11;
                            var9 = var2.getMediaSessionId;
                            var11 = var9.bind(var2)();
                            var9 = 'media_session_id';
                            var0[var9] = var11;
                            var9 = 'sender_user_id';
                            var0[var9] = var6;
                            var11 = 'User disconnected';
                            var9 = 'reason';
                            var0[var9] = var11;
                            var9 = 'receiver';
                            var11 = 'participant_type';
                            var0[var11] = var9;
                            var13 = _closure1_slot18;
                            var12 = var13.getRegion;
                            var11 = var2.hostname;
                            var12 = var12.bind(var13)(var11);
                            var11 = 'guild_region';
                            var0[var11] = var12;
                            var12 = var2.hostname;
                            var11 = 'hostname';
                            var0[var11] = var12;
                            var11 = _closure1_slot15;
                            var10 = var11.getHardwareEncoding;
                            var11 = var10.bind(var11)();
                            var10 = 'hardware_enabled';
                            var0[var10] = var11;
                            var15 = var0;
                            var14 = var8;
                            var8 = copyDataProperties(var15, var14);
                            var8 = var1.getNetworkStats;
                            var14 = var8.bind(var1)();
                            var15 = var0;
                            var8 = copyDataProperties(var15, var14);
                            var8 = var1.getCodecUsageStats;
                            var14 = var8.bind(var1)(var9, var6);
                            var15 = var0;
                            var8 = copyDataProperties(var15, var14);
                            var0 = var5.bind(var7)(var4, var0);
                            var0 = var1.destroyUser;
                            var0 = var0.bind(var1)(var6);
                            var1 = var2._videoHealthManager;
                            if (!(var3 != var1)) {
                                _fun31468_ip = 401;
                                continue _fun31468
                            }
                        case 390:
                            var0 = var1.deleteUser;
                            var0 = var0.bind(var1)(var6);
                        case 401:
                            var1 = var2._connection;
                            if (!(var3 != var1)) {
                                _fun31468_ip = 422;
                                continue _fun31468
                            }
                        case 411:
                            var0 = var1.destroyUser;
                            var0 = var0.bind(var1)(var6);
                        case 422:
                            var1 = var2._localMediaSinkWantsManager;
                            if (!(var3 != var1)) {
                                _fun31468_ip = 443;
                                continue _fun31468
                            }
                        case 432:
                            var0 = var1.destroyUser;
                            var0 = var0.bind(var1)(var6);
                        case 443:
                            var1 = var2._userIds;
                            var0 = var1.delete;
                            var0 = var0.bind(var1)(var6);
                            var5 = var2.emit;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var0 = 38;
                            var4 = var4[var0];
                            var0 = undefined;
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.RTCConnectionEvent;
                            var4 = var4.ClientDisconnect;
                            var4 = var5.bind(var2)(var4, var6);
                            var6 = var2._goLiveQualityManager;
                            if (!(var3 != var6)) {
                                _fun31468_ip = 535;
                                continue _fun31468
                            }
                        case 518:
                            var5 = var6.updateCallUserIds;
                            var4 = var2._userIds;
                            var4 = var5.bind(var6)(var4);
                        case 535:
                            var6 = var2._localMediaSinkWantsManager;
                            if (!(var3 != var6)) {
                                _fun31468_ip = 562;
                                continue _fun31468
                            }
                        case 545:
                            var5 = var6.updateCallUserIds;
                            var4 = var2._userIds;
                            var4 = var5.bind(var6)(var4);
                        case 562:
                            var5 = var2._videoQuality;
                            if (!(var3 != var5)) {
                                _fun31468_ip = 594;
                                continue _fun31468
                            }
                        case 572:
                            var4 = var5.updateCallUserIdsCount;
                            var3 = var2._userIds;
                            var3 = var3.size;
                            var3 = var4.bind(var5)(var3);
                        case 594:
                            var3 = var2._userIds;
                            var4 = var3.size;
                            var3 = 1;
                            if (!(var3 === var4)) {
                                _fun31468_ip = 647;
                                continue _fun31468
                            }
                        case 612:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 19;
                            var1 = var4[var1];
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.now;
                            var1 = var1.bind(var3)();
                            var2._secureFramesLastBecameAloneTime = var1;
                        case 647:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[71] = var4;
                var4 = {};
                var6 = '_handleCodecs';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31469: for (var _fun31469_ip = 0;;) switch (_fun31469_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var0 = this;
                            var2 = var0._connection;
                            var5 = null;
                            if (!(var5 != var2)) {
                                _fun31469_ip = 31;
                                continue _fun31469
                            }
                        case 21:
                            var1 = var0.protocol;
                            if (!(var5 == var1)) {
                                _fun31469_ip = 62;
                                continue _fun31469
                            }
                        case 31:
                            var8 = var0.logger;
                            var7 = var8.warn;
                            var6 = var0.protocol;
                            var1 = 'Cannot set codecs on connection with protocol:';
                            var1 = var7.bind(var8)(var1, var6);
                            _fun31469_ip = 130;
                            continue _fun31469;
                        case 62:
                            var1 = var2.setCodecs;
                            if (!(var5 != var4)) {
                                _fun31469_ip = 80;
                                continue _fun31469
                            }
                        case 72:
                            var6 = '';
                            if (!(var6 === var4)) {
                                _fun31469_ip = 93;
                                continue _fun31469
                            }
                        case 80:
                            var6 = _closure1_slot28;
                            var4 = var6.OPUS;
                        case 93:
                            if (!(var5 != var3)) {
                                _fun31469_ip = 105;
                                continue _fun31469
                            }
                        case 97:
                            var5 = '';
                            if (!(var5 === var3)) {
                                _fun31469_ip = 118;
                                continue _fun31469
                            }
                        case 105:
                            var5 = _closure1_slot28;
                            var3 = var5.H264;
                        case 118:
                            var0 = var0.context;
                            var0 = var1.bind(var2)(var4, var3, var0);
                        case 130:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[72] = var4;
                var4 = {};
                var6 = '_handleSDP';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31470: for (var _fun31470_ip = 0;;) switch (_fun31470_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0._connection;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun31470_ip = 25;
                                continue _fun31470
                            }
                        case 15:
                            var1 = var0.protocol;
                            if (!(var3 == var1)) {
                                _fun31470_ip = 56;
                                continue _fun31470
                            }
                        case 25:
                            var4 = var0.logger;
                            var3 = var4.warn;
                            var1 = var0.protocol;
                            var0 = 'Cannot set SDP on connection with protocol:';
                            var0 = var3.bind(var4)(var0, var1);
                            _fun31470_ip = 72;
                            continue _fun31470;
                        case 56:
                            var1 = var2.setSDP;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[73] = var4;
                var4 = {};
                var6 = '_handleMediaSessionId';
                var4.key = var6;
                var6 = function arg0() {
                    var7 = arg0;
                    var4 = this;
                    var4._mediaSessionId = var7;
                    var2 = var4.logger;
                    var1 = var2.info;
                    var0 = var4.getRTCConnectionId;
                    var6 = var0.bind(var4)();
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var5 = var0.concat;
                    var3 = 'Setting media-session-id: ';
                    var0 = ' for rtc-connection-id: ';
                    var0 = var5.bind(var3)(var7, var0, var6);
                    var0 = var1.bind(var2)(var0);
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 60;
                    var5 = var3[var0];
                    var0 = undefined;
                    var6 = var2.bind(var0)(var5);
                    var5 = var6.getRawThermalState;
                    var9 = var5.bind(var6)();
                    var5 = 21;
                    var5 = var3[var5];
                    var7 = var2.bind(var0)(var5);
                    var6 = var7.track;
                    var1 = _closure1_slot20;
                    var5 = var1.MEDIA_SESSION_JOINED;
                    var1 = {};
                    var8 = var4._getAnalyticsProperties;
                    var12 = var8.bind(var4)();
                    var13 = var1;
                    var8 = copyDataProperties(var13, var12);
                    var8 = var4.getMediaSessionId;
                    var10 = var8.bind(var4)();
                    var8 = 'media_session_id';
                    var1[var8] = var10;
                    var10 = var4.parentMediaSessionId;
                    var8 = 'parent_media_session_id';
                    var1[var8] = var10;
                    var8 = 'raw_thermal_state';
                    var1[var8] = var9;
                    var1 = var6.bind(var7)(var5, var1);
                    var1 = 35;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var5 = 'MEDIA_SESSION_JOINED';
                    var1.type = var5;
                    var5 = var4.getMediaSessionId;
                    var5 = var5.bind(var4)();
                    var1.mediaSessionId = var5;
                    var4 = var4.context;
                    var1.context = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.value = var6;
                var0[74] = var4;
                var4 = {};
                var6 = '_handleMediaSinkWants';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31472: for (var _fun31472_ip = 0;;) switch (_fun31472_ip) {
                        case 0:
                            var3 = arg0;
                            var6 = this;
                            var2 = var6._connection;
                            var4 = var6.logger;
                            var1 = var4.info;
                            var0 = global;
                            var7 = var0.JSON;
                            var5 = var7.stringify;
                            var7 = var5.bind(var7)(var3);
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = 'Remote media sink wants: ';
                            var0 = var5.bind(var0)(var7);
                            var0 = var1.bind(var4)(var0);
                            var6._remoteVideoSinkWants = var3;
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 35;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var1);
                            var4 = var5.dispatch;
                            var1 = {};
                            var7 = 'RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS';
                            var1.type = var7;
                            var7 = var6.context;
                            var1.context = var7;
                            var1.wants = var3;
                            var7 = var6.channelId;
                            var1.channelId = var7;
                            var7 = var6.guildId;
                            var1.guildId = var7;
                            var6 = var6.userId;
                            var1.userId = var6;
                            var1 = var4.bind(var5)(var1);
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun31472_ip = 179;
                                continue _fun31472
                            }
                        case 168:
                            var1 = var2.setRemoteVideoSinkWants;
                            var1 = var1.bind(var2)(var3);
                        case 179:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[75] = var4;
                var4 = {};
                var6 = '_handleCodeVersion';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    var1 = this;
                    var0 = arg0;
                    var1.voiceVersion = var0;
                    var0 = arg1;
                    var1.rtcWorkerVersion = var0;
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[76] = var4;
                var4 = {};
                var6 = '_handleKeyframeInterval';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31474: for (var _fun31474_ip = 0;;) switch (_fun31474_ip) {
                        case 0:
                            var0 = this;
                            var2 = var0._connection;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun31474_ip = 25;
                                continue _fun31474
                            }
                        case 15:
                            var1 = var0.protocol;
                            if (!(var3 == var1)) {
                                _fun31474_ip = 56;
                                continue _fun31474
                            }
                        case 25:
                            var4 = var0.logger;
                            var3 = var4.warn;
                            var1 = var0.protocol;
                            var0 = 'Cannot set keyframe interval on connection with protocol:';
                            var0 = var3.bind(var4)(var0, var1);
                            _fun31474_ip = 72;
                            continue _fun31474;
                        case 56:
                            var1 = var2.setKeyframeInterval;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[77] = var4;
                var4 = {};
                var6 = '_handleBandwidthEstimationExperiment';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31475: for (var _fun31475_ip = 0;;) switch (_fun31475_ip) {
                        case 0:
                            var4 = arg0;
                            var2 = this;
                            var2._bandwidthEstimationExperiment = var4;
                            var3 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 61;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.getMediaEngineExperiments;
                            var3 = var1.bind(var3)(var4);
                            var1 = null;
                            var4 = var1 !== var3;
                            if (!var4) {
                                _fun31475_ip = 68;
                                continue _fun31475
                            }
                        case 57:
                            var6 = var3.length;
                            var5 = 0;
                            var4 = var5 !== var6;
                        case 68:
                            if (!var4) {
                                _fun31475_ip = 94;
                                continue _fun31475
                            }
                        case 71:
                            var2 = var2._connection;
                            if (!(var1 != var2)) {
                                _fun31475_ip = 94;
                                continue _fun31475
                            }
                        case 81:
                            var1 = var2.setBandwidthEstimationExperiments;
                            var1 = var1.bind(var2)(var3);
                        case 94:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[78] = var4;
                var4 = {};
                var6 = '_trackSecureFrameTransition';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31476: for (var _fun31476_ip = 0;;) switch (_fun31476_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var3 = var1._secureFramesTransitionStates;
                            var0 = var3.get;
                            var6 = var0.bind(var3)(var2);
                            var0 = null;
                            if (!(var0 != var6)) {
                                _fun31476_ip = 866;
                                continue _fun31476
                            }
                        case 31:
                            var0 = var1._secureFramesTransitionStates;
                            var12 = var0.size;
                            var3 = var1._secureFramesTransitionStates;
                            var0 = var3.delete;
                            var0 = var0.bind(var3)(var2);
                            var9 = function arg0, arg1() {
                                _fun31477: for (var _fun31477_ip = 0;;) switch (_fun31477_ip) {
                                    case 0:
                                        var2 = arg0;
                                        var1 = arg1;
                                        var3 = null;
                                        var5 = var3 != var2;
                                        var0 = undefined;
                                        if (!var5) {
                                            _fun31477_ip = 30;
                                            continue _fun31477
                                        }
                                    case 17:
                                        var3 = var3 != var1;
                                        var0 = undefined;
                                        if (!var3) {
                                            _fun31477_ip = 30;
                                            continue _fun31477
                                        }
                                    case 26:
                                        var0 = var2 - var1;
                                    case 30:
                                        return var0;
                                }
                            };
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot3;
                            var0 = 21;
                            var0 = var11[var0];
                            var8 = undefined;
                            var5 = var3.bind(var8)(var0);
                            var4 = var5.track;
                            var0 = _closure1_slot20;
                            var3 = var0.SECURE_FRAMES_TRANSITION;
                            var0 = {};
                            var10 = var1._getAnalyticsProperties;
                            var14 = var10.bind(var1)();
                            var15 = var0;
                            var10 = copyDataProperties(var15, var14);
                            var10 = var1.getMediaSessionId;
                            var13 = var10.bind(var1)();
                            var10 = 'media_session_id';
                            var0[var10] = var13;
                            var13 = var1.parentMediaSessionId;
                            var10 = 'parent_media_session_id';
                            var0[var10] = var13;
                            var13 = var1.userId;
                            var10 = 'sender_user_id';
                            var0[var10] = var13;
                            var10 = 'transition_id';
                            var0[var10] = var2;
                            var13 = var6.protocolVersion;
                            var10 = 'protocol_version';
                            var0[var10] = var13;
                            var13 = var6.initReceivedTime;
                            var10 = var1._connectStartTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'start_to_init_duration';
                            var0[var10] = var13;
                            var13 = var6.initFinishedTime;
                            var10 = var6.initReceivedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'init_duration';
                            var0[var10] = var13;
                            var13 = var6.firstProposalsFinishedTime;
                            var10 = var6.firstProposalsReceivedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'first_proposals_duration';
                            var0[var10] = var13;
                            var13 = var6.lastProposalsFinishedTime;
                            var10 = var6.lastProposalsReceivedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'last_proposals_duration';
                            var0[var10] = var13;
                            var13 = var6.lastProposalsReceivedTime;
                            var10 = var6.firstProposalsReceivedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'duration_between_proposals';
                            var0[var10] = var13;
                            var13 = var6.totalProposalsSize;
                            var10 = 'total_proposals_size';
                            var0[var10] = var13;
                            var13 = var6.totalCommitWelcomeSize;
                            var10 = 'total_commit_welcome_size';
                            var0[var10] = var13;
                            var13 = var6.welcomeReceivedTime;
                            var10 = var6.initFinishedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'welcome_wait_duration';
                            var0[var10] = var13;
                            var13 = var6.welcomeFinishedTime;
                            var10 = var6.welcomeReceivedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'welcome_duration';
                            var0[var10] = var13;
                            var13 = var6.welcomeSize;
                            var10 = 'welcome_size';
                            var0[var10] = var13;
                            var13 = var6.welcomeError;
                            var10 = 'welcome_error';
                            var0[var10] = var13;
                            var13 = var6.commitReceivedTime;
                            var10 = var6.lastProposalsFinishedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'commit_wait_duration';
                            var0[var10] = var13;
                            var13 = var6.commitFinishedTime;
                            var10 = var6.commitReceivedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'commit_duration';
                            var0[var10] = var13;
                            var13 = var6.commitSize;
                            var10 = 'commit_size';
                            var0[var10] = var13;
                            var13 = var6.commitError;
                            var10 = 'commit_error';
                            var0[var10] = var13;
                            var13 = var6.prepareReceivedTime;
                            var10 = var1._secureFramesLastBecameAloneTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'prepare_wait_duration';
                            var0[var10] = var13;
                            var13 = var6.prepareFinishedTime;
                            var10 = var6.prepareReceivedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'prepare_duration';
                            var0[var10] = var13;
                            var13 = var6.executeReceivedTime;
                            var10 = var6.readyTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'execute_wait_duration';
                            var0[var10] = var13;
                            var13 = var6.executeFinishedTime;
                            var10 = var6.executeReceivedTime;
                            var13 = var9.bind(var8)(var13, var10);
                            var10 = 'execute_duration';
                            var0[var10] = var13;
                            var13 = var6.executeError;
                            var10 = 'execute_error';
                            var0[var10] = var13;
                            var13 = var6.incomplete;
                            var10 = 'incomplete';
                            var0[var10] = var13;
                            var10 = 'active_transition_count';
                            var0[var10] = var12;
                            var10 = _closure1_slot0;
                            var7 = 19;
                            var7 = var11[var7];
                            var10 = var10.bind(var8)(var7);
                            var7 = var10.now;
                            var10 = var7.bind(var10)();
                            var7 = var6.creationTime;
                            var10 = var10 - var7;
                            var7 = 'time_since_creation';
                            var0[var7] = var10;
                            var10 = var6.usersAdded;
                            var7 = 'users_added_count';
                            var0[var7] = var10;
                            var10 = var6.usersRemoved;
                            var7 = 'users_removed_count';
                            var0[var7] = var10;
                            var10 = var6.rosterSizeAfter;
                            var7 = 'roster_size_after';
                            var0[var7] = var10;
                            var7 = var6.executeFinishedTime;
                            var6 = var6.initReceivedTime;
                            var7 = var9.bind(var8)(var7, var6);
                            var6 = 'init_to_finish_duration';
                            var0[var6] = var7;
                            var0 = var4.bind(var5)(var3, var0);
                            var0 = 0;
                            if (!(var0 === var2)) {
                                _fun31476_ip = 866;
                                continue _fun31476
                            }
                        case 856:
                            var0 = var1._trackRemainingSecureFrameTransitions;
                            var0 = var0.bind(var1)();
                        case 866:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[79] = var4;
                var4 = {};
                var6 = '_trackRemainingSecureFrameTransitions';
                var4.key = var6;
                var6 = function() {
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1._secureFramesTransitionStates;
                    var1 = var2.forEach;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = true;
                        var0 = arg0;
                        var0.incomplete = var1;
                        var2 = _closure3_slot0;
                        var1 = var2._trackSecureFrameTransition;
                        var0 = arg1;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var6;
                var0[80] = var4;
                var4 = {};
                var6 = '_storeSecureFrameNextTransitionData';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31480: for (var _fun31480_ip = 0;;) switch (_fun31480_ip) {
                        case 0:
                            var1 = this;
                            var2 = var1._secureFramesNextTransitionState;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun31480_ip = 62;
                                continue _fun31480
                            }
                        case 15:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var2 = 19;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.now;
                            var2 = var2.bind(var3)();
                            var0.creationTime = var2;
                            var1._secureFramesNextTransitionState = var0;
                        case 62:
                            var0 = {};
                            var5 = var1._secureFramesNextTransitionState;
                            var6 = var0;
                            var2 = copyDataProperties(var6, var5);
                            var5 = arg0;
                            var6 = var0;
                            var2 = copyDataProperties(var6, var5);
                            var1._secureFramesNextTransitionState = var0;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[81] = var4;
                var4 = {};
                var6 = '_storeSecureFrameTransitionData';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31481: for (var _fun31481_ip = 0;;) switch (_fun31481_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = this;
                            var2 = var1._secureFramesTransitionStates;
                            var0 = var2.get;
                            var5 = var0.bind(var2)(var4);
                            var0 = null;
                            if (!(var0 == var5)) {
                                _fun31481_ip = 49;
                                continue _fun31481
                            }
                        case 28:
                            var2 = var1._storeSecureFrameNextTransitionData;
                            var0 = {};
                            var5 = var2.bind(var1)(var0);
                            var2 = undefined;
                            var1._secureFramesNextTransitionState = var2;
                        case 49:
                            var3 = var1._secureFramesTransitionStates;
                            var2 = var3.set;
                            var0 = {};
                            var7 = var0;
                            var6 = var5;
                            var5 = copyDataProperties(var7, var6);
                            var6 = arg1;
                            var7 = var0;
                            var5 = copyDataProperties(var7, var6);
                            var0 = var2.bind(var3)(var4, var0);
                            var0 = global;
                            var4 = var0.Math;
                            var3 = var4.max;
                            var2 = var1._secureFramesMaxConcurrentTransitions;
                            var0 = var1._secureFramesTransitionStates;
                            var0 = var0.size;
                            var0 = var3.bind(var4)(var2, var0);
                            var1._secureFramesMaxConcurrentTransitions = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[82] = var4;
                var4 = {};
                var6 = '_handleSecureFramesInit';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31482: for (var _fun31482_ip = 0;;) switch (_fun31482_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = this;
                            var _closure3_slot0 = var3;
                            var _closure3_slot1 = var5;
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot3;
                            var8 = 19;
                            var2 = var0[var8];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var2);
                            var2 = var6.now;
                            var6 = var2.bind(var6)();
                            var _closure3_slot2 = var6;
                            var7 = var3.recordEvent;
                            var2 = {};
                            var9 = _closure1_slot33;
                            var9 = var9.SECURE_FRAMES_INIT;
                            var2.c = var9;
                            var2.v = var5;
                            var2 = var7.bind(var3)(var2);
                            var9 = 0;
                            if (!(!(var5 > var9))) {
                                _fun31482_ip = 129;
                                continue _fun31482
                            }
                        case 91:
                            var7 = var3._connection;
                            var2 = null;
                            if (!(var2 != var7)) {
                                _fun31482_ip = 304;
                                continue _fun31482
                            }
                        case 106:
                            var2 = var7.prepareSecureFramesTransition;
                            var1 = function() { // Environment: var1
                                _fun31483: for (var _fun31483_ip = 0;;) switch (_fun31483_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var1 = undefined;
                                        var2 = false;
                                    case 6: // try_start_0
                                        var3 = _closure3_slot0;
                                        var4 = var3._connection;
                                        var1 = var4;
                                        var3 = null;
                                        if (!(var3 != var4)) {
                                            _fun31483_ip = 44;
                                            continue _fun31483
                                        }
                                    case 28:
                                        var4 = var1;
                                        var3 = var4.executeSecureFramesTransition;
                                        var1 = 0;
                                        var1 = var3.bind(var4)(var1);
                                    case 44: // try_end0
                                        _fun31483_ip = 84;
                                        continue _fun31483;
                                    case 46: // catch_target0
                                        CatchBlockStart(arg_register = 4);
                                        var2 = true;
                                        var3 = _closure1_slot1;
                                        var5 = _closure1_slot3;
                                        var1 = 22;
                                        var1 = var5[var1];
                                        var3 = var3.bind(var0)(var1);
                                        var1 = var3.captureException;
                                        var1 = var1.bind(var3)(var4);
                                    case 84:
                                        var3 = _closure3_slot0;
                                        var4 = var3._storeSecureFrameTransitionData;
                                        var1 = {};
                                        var6 = _closure3_slot2;
                                        var1.initReceivedTime = var6;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot3;
                                        var6 = 19;
                                        var6 = var8[var6];
                                        var7 = var7.bind(var0)(var6);
                                        var6 = var7.now;
                                        var6 = var6.bind(var7)();
                                        var1.initFinishedTime = var6;
                                        var5 = _closure3_slot1;
                                        var1.protocolVersion = var5;
                                        var1.executeError = var2;
                                        var2 = 0;
                                        var1 = var4.bind(var3)(var2, var1);
                                        var1 = var3._trackSecureFrameTransition;
                                        var1 = var1.bind(var3)(var2);
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var7)(var9, var5, var1);
                            _fun31482_ip = 304;
                            continue _fun31482;
                        case 129:
                            var7 = var3.logger;
                            var2 = var7.info;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var9 = var1.concat;
                            var1 = 'DAVE protocol init with protocol version: ';
                            var1 = var9.bind(var1)(var5);
                            var1 = var2.bind(var7)(var1);
                            var3._mlsInitReceivedTime = var6;
                            var9 = var3._connection;
                            var1 = null;
                            if (!(var1 != var9)) {
                                _fun31482_ip = 213;
                                continue _fun31482
                            }
                        case 188:
                            var7 = var9.prepareSecureFramesEpoch;
                            var2 = var3.trueChannelId;
                            var1 = '1';
                            var1 = var7.bind(var9)(var1, var5, var2);
                        case 213:
                            var1 = var3._sendMLSKeyPackage;
                            var1 = var1.bind(var3)();
                            var2 = var3._storeSecureFrameNextTransitionData;
                            var1 = {};
                            var1.initReceivedTime = var6;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var6 = var6[var8];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.now;
                            var6 = var6.bind(var7)();
                            var1.initFinishedTime = var6;
                            var1.protocolVersion = var5;
                            var1 = var2.bind(var3)(var1);
                            var2 = var3.recordEvent;
                            var1 = {};
                            var4 = _closure1_slot33;
                            var4 = var4.MLS_INIT;
                            var1.c = var4;
                            var1 = var2.bind(var3)(var1);
                        case 304:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[83] = var4;
                var4 = {};
                var6 = '_handleSecureFramesRosterChange';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var3 = new Array(0);
                    var _closure3_slot1 = var3;
                    var1 = 0;
                    var _closure3_slot2 = var1;
                    var _closure3_slot3 = var1;
                    var1 = global;
                    var5 = var1.Object;
                    var2 = var5.entries;
                    var1 = arg0;
                    var5 = var2.bind(var5)(var1);
                    var2 = var5.forEach;
                    var1 = function(arg0) { // Environment: var0
                        _fun31485: for (var _fun31485_ip = 0;;) switch (_fun31485_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = var4[Symbol.iterator];
                                var4 = var1().next;
                                var5 = var4().value;
                                var2 = var1;
                                var0 = undefined;
                                var2 = var2 === var0;
                                var3 = undefined;
                                if (var2) {
                                    _fun31485_ip = 27;
                                    continue _fun31485
                                }
                            case 24:
                                var3 = var5;
                            case 27:
                                var5 = undefined;
                                if (var2) {
                                    _fun31485_ip = 57;
                                    continue _fun31485
                                }
                            case 32:
                                var6 = var4().value;
                                var4 = var1;
                                var4 = var4 === var0;
                                var5 = undefined;
                                var2 = var4;
                                if (var4) {
                                    _fun31485_ip = 57;
                                    continue _fun31485
                                }
                            case 51:
                                var5 = var6;
                                var2 = var4;
                            case 57:
                                if (var2) {
                                    _fun31485_ip = 63;
                                    continue _fun31485
                                }
                            case 60:
                                var1.return();
                            case 63:
                                var4 = _closure3_slot1;
                                var2 = var4.push;
                                var2 = var2.bind(var4)(var3);
                                var2 = null;
                                if (!(var2 != var5)) {
                                    _fun31485_ip = 132;
                                    continue _fun31485
                                }
                            case 86:
                                var4 = var5.byteLength;
                                var2 = 0;
                                if (!(var2 !== var4)) {
                                    _fun31485_ip = 132;
                                    continue _fun31485
                                }
                            case 98:
                                var2 = _closure3_slot2;
                                var2 = var2 + 1;
                                _closure3_slot2 = var2;
                                var2 = _closure3_slot0;
                                var4 = var2._secureFramesRosterMap;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var3, var5);
                                _fun31485_ip = 163;
                                continue _fun31485;
                            case 132:
                                var2 = _closure3_slot3;
                                var2 = var2 + 1;
                                _closure3_slot3 = var2;
                                var1 = _closure3_slot0;
                                var2 = var1._secureFramesRosterMap;
                                var1 = var2.delete;
                                var1 = var1.bind(var2)(var3);
                            case 163:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var5)(var1);
                    var2 = var4._storeSecureFrameTransitionData;
                    var1 = {};
                    var5 = _closure3_slot2;
                    var1.usersAdded = var5;
                    var0 = _closure3_slot3;
                    var1.usersRemoved = var0;
                    var0 = var4._secureFramesRosterMap;
                    var0 = var0.size;
                    var1.rosterSizeAfter = var0;
                    var0 = arg1;
                    var0 = var2.bind(var4)(var0, var1);
                    var2 = var4.emit;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 38;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.RTCConnectionEvent;
                    var1 = var1.RosterMapUpdate;
                    var1 = var2.bind(var4)(var1, var3);
                    return var0;
                };
                var4.value = var6;
                var0[84] = var4;
                var4 = {};
                var6 = '_handleSecureFramesPrepareTransition';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31486: for (var _fun31486_ip = 0;;) switch (_fun31486_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var _closure3_slot1 = var5;
                            var _closure3_slot2 = var4;
                            var6 = var2.logger;
                            var3 = var6.info;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var8 = var0.concat;
                            var7 = 'Preparing DAVE protocol transition: ';
                            var0 = ', protocol version: ';
                            var0 = var8.bind(var7)(var5, var0, var4);
                            var0 = var3.bind(var6)(var0);
                            var0 = var2._secureFramesTransitionPrepareCount;
                            var0 = var0 + 1;
                            var2._secureFramesTransitionPrepareCount = var0;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 19;
                            var3 = var3[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.now;
                            var3 = var3.bind(var6)();
                            var _closure3_slot3 = var3;
                            var3 = 0;
                            if (!(var3 === var4)) {
                                _fun31486_ip = 156;
                                continue _fun31486
                            }
                        case 131:
                            var6 = var2._trackMLSFailures;
                            var3 = {
                                'recovered': true,
                                'downgraded': true
                            };
                            var3 = var6.bind(var2)(var3);
                        case 156:
                            var3 = var2._connection;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun31486_ip = 186;
                                continue _fun31486
                            }
                        case 168:
                            var2 = var3.prepareSecureFramesTransition;
                            var1 = function() { // Environment: var1
                                var4 = _closure3_slot0;
                                var1 = var4._maybeSendSecureFramesTransitionReady;
                                var3 = _closure3_slot1;
                                var1 = var1.bind(var4)(var3);
                                var2 = var4._storeSecureFrameTransitionData;
                                var1 = {};
                                var5 = _closure3_slot2;
                                var1.protocolVersion = var5;
                                var0 = _closure3_slot3;
                                var1.prepareReceivedTime = var0;
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot3;
                                var0 = 19;
                                var5 = var5[var0];
                                var0 = undefined;
                                var6 = var6.bind(var0)(var5);
                                var5 = var6.now;
                                var5 = var5.bind(var6)();
                                var1.prepareFinishedTime = var5;
                                var1 = var2.bind(var4)(var3, var1);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var5, var4, var1);
                        case 186:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[85] = var4;
                var4 = {};
                var6 = '_handleSecureFramesPrepareEpoch';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31488: for (var _fun31488_ip = 0;;) switch (_fun31488_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = arg1;
                            var2 = this;
                            var4 = var2.logger;
                            var3 = var4.info;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var7 = var0.concat;
                            var6 = 'Preparing DAVE protocol epoch: ';
                            var0 = ', protocol version: ';
                            var0 = var7.bind(var6)(var1, var0, var5);
                            var0 = var3.bind(var4)(var0);
                            var0 = var1.toString;
                            var1 = var0.bind(var1)();
                            var4 = var2._connection;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun31488_ip = 98;
                                continue _fun31488
                            }
                        case 79:
                            var3 = var4.prepareSecureFramesEpoch;
                            var0 = var2.trueChannelId;
                            var0 = var3.bind(var4)(var1, var5, var0);
                        case 98:
                            var0 = '1';
                            if (!(var0 === var1)) {
                                _fun31488_ip = 185;
                                continue _fun31488
                            }
                        case 108:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var4.bind(var0)(var1);
                            var0 = var1.now;
                            var0 = var0.bind(var1)();
                            var2._mlsInitReceivedTime = var0;
                            var0 = var2._sendMLSKeyPackage;
                            var0 = var0.bind(var2)();
                            var1 = var2.recordEvent;
                            var0 = {};
                            var3 = _closure1_slot33;
                            var3 = var3.MLS_INIT;
                            var0.c = var3;
                            var0 = var1.bind(var2)(var0);
                        case 185:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[86] = var4;
                var4 = {};
                var6 = '_sendMLSKeyPackage';
                var4.key = var6;
                var6 = function() {
                    _fun31489: for (var _fun31489_ip = 0;;) switch (_fun31489_ip) {
                        case 0:
                            var1 = this;
                            var _closure3_slot0 = var1;
                            var2 = var1._connection;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun31489_ip = 37;
                                continue _fun31489
                            }
                        case 21:
                            var1 = var2.getMLSKeyPackage;
                            var0 = function(arg0) { // Environment: var0
                                _fun31490: for (var _fun31490_ip = 0;;) switch (_fun31490_ip) {
                                    case 0:
                                        var0 = _closure3_slot0;
                                        var3 = var0.logger;
                                        var2 = var3.info;
                                        var1 = 'Got MLS key package, sending to RTC server';
                                        var1 = var2.bind(var3)(var1);
                                        var2 = var0._socket;
                                        var0 = null;
                                        if (!(var0 != var2)) {
                                            _fun31490_ip = 58;
                                            continue _fun31490
                                        }
                                    case 42:
                                        var1 = var2.sendMLSKeyPackage;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                    case 58:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[87] = var4;
                var4 = {};
                var6 = '_maybeSendSecureFramesTransitionReady';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31491: for (var _fun31491_ip = 0;;) switch (_fun31491_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = this;
                            var0 = 0;
                            if (!(var0 !== var3)) {
                                _fun31491_ip = 131;
                                continue _fun31491
                            }
                        case 12:
                            var4 = var2.logger;
                            var1 = var4.info;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var5 = var0.concat;
                            var0 = 'Sending DAVE protocol ready for transition ID ';
                            var0 = var5.bind(var0)(var3);
                            var0 = var1.bind(var4)(var0);
                            var1 = var2._socket;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun31491_ip = 78;
                                continue _fun31491
                            }
                        case 65:
                            var0 = var1.secureFramesReadyForTransition;
                            var0 = var0.bind(var1)(var3);
                        case 78:
                            var1 = var2._storeSecureFrameTransitionData;
                            var0 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 19;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var6.bind(var4)(var5);
                            var4 = var5.now;
                            var4 = var4.bind(var5)();
                            var0.readyTime = var4;
                            var0 = var1.bind(var2)(var3, var0);
                        case 131:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[88] = var4;
                var4 = {};
                var6 = '_handleSecureFramesExecuteTransition';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31492: for (var _fun31492_ip = 0;;) switch (_fun31492_ip) {
                        case 0:
                            var10 = arg0;
                            var3 = this;
                            var1 = var10;
                            var0 = undefined;
                            var7 = undefined;
                            var5 = undefined;
                            var2 = undefined;
                            var8 = var3.logger;
                            var6 = var8.info;
                            var4 = global;
                            var4 = var4.HermesInternal;
                            var9 = var4.concat;
                            var4 = 'Executing DAVE protocol transition: ';
                            var4 = var9.bind(var4)(var10);
                            var4 = var6.bind(var8)(var4);
                            var4 = var3._secureFramesTransitionExecuteCount;
                            var4 = var4 + 1;
                            var3._secureFramesTransitionExecuteCount = var4;
                            var9 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var8 = 19;
                            var4 = var4[var8];
                            var9 = var9.bind(var0)(var4);
                            var4 = var9.now;
                            var7 = var4.bind(var9)();
                            var5 = false;
                        case 107: // try_start_0
                            var9 = var3._connection;
                            var2 = var9;
                            var4 = null;
                            if (!(var4 != var9)) {
                                _fun31492_ip = 139;
                                continue _fun31492
                            }
                        case 122:
                            var9 = var2;
                            var4 = var9.executeSecureFramesTransition;
                            var2 = var1;
                            var2 = var4.bind(var9)(var2);
                        case 139: // try_end0
                            _fun31492_ip = 176;
                            continue _fun31492;
                        case 141: // catch_target0
                            CatchBlockStart(arg_register = 9);
                            var5 = true;
                            var4 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var2 = 22;
                            var2 = var10[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.captureException;
                            var2 = var2.bind(var4)(var9);
                        case 176:
                            var4 = var3._storeSecureFrameTransitionData;
                            var2 = var1;
                            var1 = {};
                            var1.executeReceivedTime = var7;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var6 = var6[var8];
                            var7 = var7.bind(var0)(var6);
                            var6 = var7.now;
                            var6 = var6.bind(var7)();
                            var1.executeFinishedTime = var6;
                            var1.executeError = var5;
                            var1 = var4.bind(var3)(var2, var1);
                            var1 = var3._trackSecureFrameTransition;
                            var1 = var1.bind(var3)(var2);
                            return var0;
                    }
                };
                var4.value = var6;
                var0[89] = var4;
                var4 = {};
                var6 = '_handleMLSExternalSenderPackage';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31493: for (var _fun31493_ip = 0;;) switch (_fun31493_ip) {
                        case 0:
                            var0 = this;
                            var3 = var0.logger;
                            var2 = var3.info;
                            var1 = 'Received MLS external sender package';
                            var1 = var2.bind(var3)(var1);
                            var2 = var0._connection;
                            var0 = null;
                            if (!(var0 != var2)) {
                                _fun31493_ip = 52;
                                continue _fun31493
                            }
                        case 38:
                            var1 = var2.updateMLSExternalSender;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[90] = var4;
                var4 = {};
                var6 = '_handleMLSProposals';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31494: for (var _fun31494_ip = 0;;) switch (_fun31494_ip) {
                        case 0:
                            var4 = arg1;
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var0 = arg0;
                            var _closure3_slot1 = var0;
                            var _closure3_slot2 = var4;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 19;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.now;
                            var3 = var3.bind(var5)();
                            var _closure3_slot3 = var3;
                            var6 = var2.logger;
                            var5 = var6.info;
                            var3 = 'Received MLS proposals';
                            var3 = var5.bind(var6)(var3);
                            var3 = var2._connection;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun31494_ip = 113;
                                continue _fun31494
                            }
                        case 96:
                            var2 = var3.processMLSProposals;
                            var1 = function(arg0) { // Environment: var1
                                _fun31495: for (var _fun31495_ip = 0;;) switch (_fun31495_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot3;
                                        var0 = 19;
                                        var2 = var2[var0];
                                        var0 = undefined;
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.now;
                                        var3 = var2.bind(var3)();
                                        var2 = _closure3_slot0;
                                        var7 = var2.logger;
                                        var6 = var7.info;
                                        var5 = 'Sending MLS commit welcome message';
                                        var5 = var6.bind(var7)(var5);
                                        var6 = _closure3_slot1;
                                        var5 = var6.sendMLSCommitWelcome;
                                        var5 = var5.bind(var6)(var1);
                                        var2 = var2._secureFramesNextTransitionState;
                                        var5 = null;
                                        if (!(var5 == var2)) {
                                            _fun31495_ip = 127;
                                            continue _fun31495
                                        }
                                    case 96:
                                        var8 = _closure3_slot0;
                                        var7 = var8._storeSecureFrameNextTransitionData;
                                        var6 = {};
                                        var9 = _closure3_slot3;
                                        var6.firstProposalsReceivedTime = var9;
                                        var6.firstProposalsFinishedTime = var3;
                                        var2 = var7.bind(var8)(var6);
                                    case 127:
                                        var6 = _closure3_slot3;
                                        var2.lastProposalsReceivedTime = var6;
                                        var2.lastProposalsFinishedTime = var3;
                                        var7 = var2.totalProposalsSize;
                                        var8 = var5 != var7;
                                        var6 = 0;
                                        if (!var8) {
                                            _fun31495_ip = 161;
                                            continue _fun31495
                                        }
                                    case 158:
                                        var6 = var7;
                                    case 161:
                                        var4 = _closure3_slot2;
                                        var4 = var4.byteLength;
                                        var4 = var6 + var4;
                                        var2.totalProposalsSize = var4;
                                        var4 = var2.totalCommitWelcomeSize;
                                        var5 = var5 != var4;
                                        var3 = 0;
                                        if (!var5) {
                                            _fun31495_ip = 199;
                                            continue _fun31495
                                        }
                                    case 196:
                                        var3 = var4;
                                    case 199:
                                        var1 = var1.byteLength;
                                        var1 = var3 + var1;
                                        var2.totalCommitWelcomeSize = var1;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var4, var1);
                        case 113:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[91] = var4;
                var4 = {};
                var6 = '_handleMLSPrepareCommitTransition';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31496: for (var _fun31496_ip = 0;;) switch (_fun31496_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var _closure3_slot1 = var5;
                            var _closure3_slot2 = var4;
                            var6 = var2.logger;
                            var3 = var6.info;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var7 = var0.concat;
                            var0 = 'Received MLS commit for transition ID ';
                            var0 = var7.bind(var0)(var5);
                            var0 = var3.bind(var6)(var0);
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 19;
                            var3 = var3[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.now;
                            var3 = var3.bind(var6)();
                            var _closure3_slot3 = var3;
                            var3 = var2._connection;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun31496_ip = 132;
                                continue _fun31496
                            }
                        case 114:
                            var2 = var3.prepareMLSCommitTransition;
                            var1 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun31497: for (var _fun31497_ip = 0;;) switch (_fun31497_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = arg1;
                                        var3 = _closure3_slot0;
                                        if (var5) {
                                            _fun31497_ip = 124;
                                            continue _fun31497
                                        }
                                    case 16:
                                        var7 = var3.logger;
                                        var4 = var7.warn;
                                        var2 = _closure3_slot1;
                                        var1 = global;
                                        var1 = var1.HermesInternal;
                                        var8 = var1.concat;
                                        var1 = 'Failed to process MLS commit for transition ID ';
                                        var1 = var8.bind(var1)(var2);
                                        var1 = var4.bind(var7)(var1);
                                        var7 = _closure1_slot0;
                                        var4 = _closure1_slot3;
                                        var1 = 19;
                                        var4 = var4[var1];
                                        var1 = undefined;
                                        var4 = var7.bind(var1)(var4);
                                        var1 = var4.now;
                                        var1 = var1.bind(var4)();
                                        var3._mlsSessionResetStartTime = var1;
                                        var1 = var3._flagMLSInvalidCommitWelcome;
                                        var1 = var1.bind(var3)(var2);
                                        var1 = var3._handleSecureFramesInit;
                                        var1 = var1.bind(var3)(var0);
                                        _fun31497_ip = 187;
                                        continue _fun31497;
                                    case 124:
                                        var2 = var3._trackMLSFailures;
                                        var1 = {
                                            'recovered': true,
                                            'downgraded': false
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        var3._mlsSessionResetStartTime = var1;
                                        var4 = var3._handleSecureFramesRosterChange;
                                        var2 = _closure3_slot1;
                                        var1 = arg2;
                                        var1 = var4.bind(var3)(var1, var2);
                                        var1 = var3._maybeSendSecureFramesTransitionReady;
                                        var1 = var1.bind(var3)(var2);
                                    case 187:
                                        var4 = _closure3_slot0;
                                        var3 = var4._storeSecureFrameTransitionData;
                                        var2 = _closure3_slot1;
                                        var1 = {};
                                        var1.protocolVersion = var0;
                                        var0 = _closure3_slot3;
                                        var1.commitReceivedTime = var0;
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var0 = 19;
                                        var7 = var7[var0];
                                        var0 = undefined;
                                        var8 = var8.bind(var0)(var7);
                                        var7 = var8.now;
                                        var7 = var7.bind(var8)();
                                        var1.commitFinishedTime = var7;
                                        var6 = _closure3_slot2;
                                        var6 = var6.byteLength;
                                        var1.commitSize = var6;
                                        var5 = !var5;
                                        var1.commitError = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var5, var4, var1);
                        case 132:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[92] = var4;
                var4 = {};
                var6 = '_handleMLSWelcome';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31498: for (var _fun31498_ip = 0;;) switch (_fun31498_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var2 = this;
                            var _closure3_slot0 = var2;
                            var _closure3_slot1 = var5;
                            var _closure3_slot2 = var4;
                            var6 = var2.logger;
                            var3 = var6.info;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var7 = var0.concat;
                            var0 = 'Received MLS welcome for transition ID ';
                            var0 = var7.bind(var0)(var5);
                            var0 = var3.bind(var6)(var0);
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var0 = 19;
                            var3 = var3[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var3);
                            var3 = var6.now;
                            var3 = var3.bind(var6)();
                            var _closure3_slot3 = var3;
                            var3 = var2._connection;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun31498_ip = 132;
                                continue _fun31498
                            }
                        case 114:
                            var2 = var3.processMLSWelcome;
                            var1 = function(arg0, arg1, arg2) { // Environment: var1
                                _fun31499: for (var _fun31499_ip = 0;;) switch (_fun31499_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var2 = _closure3_slot0;
                                        if (var5) {
                                            _fun31499_ip = 80;
                                            continue _fun31499
                                        }
                                    case 13:
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot3;
                                        var0 = 19;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var1);
                                        var0 = var1.now;
                                        var0 = var0.bind(var1)();
                                        var2._mlsSessionResetStartTime = var0;
                                        var1 = var2._flagMLSInvalidCommitWelcome;
                                        var0 = _closure3_slot1;
                                        var0 = var1.bind(var2)(var0);
                                        var0 = var2._sendMLSKeyPackage;
                                        var0 = var0.bind(var2)();
                                        _fun31499_ip = 143;
                                        continue _fun31499;
                                    case 80:
                                        var1 = var2._trackMLSFailures;
                                        var0 = {
                                            'recovered': true,
                                            'downgraded': false
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var0 = undefined;
                                        var2._mlsSessionResetStartTime = var0;
                                        var3 = var2._handleSecureFramesRosterChange;
                                        var1 = _closure3_slot1;
                                        var0 = arg2;
                                        var0 = var3.bind(var2)(var0, var1);
                                        var0 = var2._maybeSendSecureFramesTransitionReady;
                                        var0 = var0.bind(var2)(var1);
                                    case 143:
                                        var4 = _closure3_slot0;
                                        var3 = var4._storeSecureFrameTransitionData;
                                        var2 = _closure3_slot1;
                                        var1 = {};
                                        var0 = arg1;
                                        var1.protocolVersion = var0;
                                        var0 = _closure3_slot3;
                                        var1.welcomeReceivedTime = var0;
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot3;
                                        var0 = 19;
                                        var7 = var7[var0];
                                        var0 = undefined;
                                        var8 = var8.bind(var0)(var7);
                                        var7 = var8.now;
                                        var7 = var7.bind(var8)();
                                        var1.welcomeFinishedTime = var7;
                                        var6 = _closure3_slot2;
                                        var6 = var6.byteLength;
                                        var1.welcomeSize = var6;
                                        var5 = !var5;
                                        var1.welcomeError = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var5, var4, var1);
                        case 132:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[93] = var4;
                var4 = {};
                var6 = 'getMLSPairwiseFingerprint';
                var4.key = var6;
                var6 = function arg0, arg1, arg2() {
                    _fun31500: for (var _fun31500_ip = 0;;) switch (_fun31500_ip) {
                        case 0:
                            var0 = this;
                            var4 = var0._connection;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun31500_ip = 37;
                                continue _fun31500
                            }
                        case 15:
                            var3 = var4.getMLSPairwiseFingerprint;
                            var2 = arg0;
                            var1 = arg1;
                            var0 = arg2;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 37:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[94] = var4;
                var4 = {};
                var6 = '_flagMLSInvalidCommitWelcome';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31501: for (var _fun31501_ip = 0;;) switch (_fun31501_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = this;
                            var4 = var0.logger;
                            var3 = var4.info;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var5 = var1.concat;
                            var1 = 'Flagging invalid MLS commit/welcome for transition ID ';
                            var1 = var5.bind(var1)(var2);
                            var1 = var3.bind(var4)(var1);
                            var1 = var0._socket;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun31501_ip = 72;
                                continue _fun31501
                            }
                        case 59:
                            var0 = var1.flagMLSInvalidCommitWelcome;
                            var0 = var0.bind(var1)(var2);
                        case 72:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[95] = var4;
                var4 = {};
                var6 = '_handleMLSFailure';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31502: for (var _fun31502_ip = 0;;) switch (_fun31502_ip) {
                        case 0:
                            var5 = arg0;
                            var3 = arg1;
                            var2 = this;
                            var6 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var1);
                            var1 = var6.now;
                            var10 = var1.bind(var6)();
                            var1 = var2._nextFailureId;
                            var8 = parseFloat(var1);
                            var1 = var8 + 1;
                            var2._nextFailureId = var1;
                            var6 = var2.recordEvent;
                            var1 = {};
                            var7 = _closure1_slot33;
                            var7 = var7.MLS_FAILURE;
                            var1.c = var7;
                            var1.i = var8;
                            var1 = var6.bind(var2)(var1);
                            var7 = var2._mlsFailures;
                            var6 = var7.push;
                            var1 = {};
                            var1.id = var8;
                            var1.source = var5;
                            var1.reason = var3;
                            var11 = 1;
                            var1.count = var11;
                            var8 = var2._mlsSessionResetStartTime;
                            var9 = null;
                            var12 = var9 != var8;
                            var8 = 0;
                            if (!var12) {
                                _fun31502_ip = 146;
                                continue _fun31502
                            }
                        case 143:
                            var8 = var11;
                        case 146:
                            var1.countDuringReset = var8;
                            var1.firstOccurrence = var10;
                            var8 = var2._mlsInitReceivedTime;
                            var9 = var9 != var8;
                            var8 = undefined;
                            if (!var9) {
                                _fun31502_ip = 181;
                                continue _fun31502
                            }
                        case 171:
                            var9 = var2._mlsInitReceivedTime;
                            var8 = var10 - var9;
                        case 181:
                            var1.timeSinceInit = var8;
                            var8 = _closure1_slot39;
                            var8 = var8.bind(var0)();
                            var1.eventLog = var8;
                            var1 = var6.bind(var7)(var1);
                            var6 = var5.includes;
                            var1 = 'GetPersistedKeyPair';
                            var1 = var6.bind(var5)(var1);
                            if (var1) {
                                _fun31502_ip = 240;
                                continue _fun31502
                            }
                        case 223:
                            var1 = var2._alertMLSFailureDebouced;
                            var1 = var1.bind(var2)(var5, var3);
                            _fun31502_ip = 380;
                            continue _fun31502;
                        case 240:
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var1 = 62;
                            var1 = var8[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.show;
                            var1 = {};
                            var7 = _closure1_slot0;
                            var4 = 63;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var9 = var5.intl;
                            var6 = var9.string;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var5 = var5.t;
                            var5 = var5.fJUioH;
                            var5 = var6.bind(var9)(var5);
                            var1.title = var5;
                            var5 = var8[var4];
                            var5 = var7.bind(var0)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var4 = var8[var4];
                            var4 = var7.bind(var0)(var4);
                            var4 = var4.t;
                            var4 = var4.CQLWvo;
                            var4 = var5.bind(var6)(var4);
                            var1.body = var4;
                            var1 = var2.bind(var3)(var1);
                        case 380:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[96] = var4;
                var4 = {};
                var6 = '_trackMLSFailures';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31503: for (var _fun31503_ip = 0;;) switch (_fun31503_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = this;
                            var26 = var0.recovered;
                            var25 = var0.downgraded;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 19;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.now;
                            var23 = var1.bind(var3)();
                            var1 = var2.getMediaSessionId;
                            var22 = var1.bind(var2)();
                            var3 = var2._mlsSessionResetStartTime;
                            var1 = null;
                            var1 = var1 != var3;
                            var21 = undefined;
                            if (!var1) {
                                _fun31503_ip = 89;
                                continue _fun31503
                            }
                        case 79:
                            var1 = var2._mlsSessionResetStartTime;
                            var21 = var23 - var1;
                        case 89:
                            var3 = _closure1_slot36;
                            var1 = var2._mlsFailures;
                            var20 = var3.bind(var0)(var1);
                            var3 = var20.bind(var0)();
                            var1 = var3.done;
                            var19 = 21;
                            var18 = 'media_session_id';
                            var17 = 'parent_media_session_id';
                            var16 = 'failure_id';
                            var15 = 'failure_time';
                            var14 = 'failure_source';
                            var13 = 'failure_reason';
                            var12 = 'failure_count';
                            var11 = 'failure_was_recovered';
                            var10 = 'failure_cleared_by_downgrade';
                            var9 = 'time_since_first_occurrence';
                            var8 = 'time_since_last_reset';
                            var7 = 'failure_count_during_reset';
                            var6 = 'time_since_init';
                            var5 = 'event_history';
                            var4 = 'connection_serial';
                            if (var1) {
                                _fun31503_ip = 433;
                                continue _fun31503
                            }
                        case 206:
                            var1 = var3.value;
                            var37 = var1.id;
                            var36 = var1.source;
                            var35 = var1.reason;
                            var34 = var1.count;
                            var32 = var1.countDuringReset;
                            var33 = var1.firstOccurrence;
                            var31 = var1.timeSinceInit;
                            var30 = var1.eventLog;
                            var27 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var1 = var1[var19];
                            var29 = var27.bind(var0)(var1);
                            var28 = var29.track;
                            var1 = _closure1_slot20;
                            var27 = var1.MLS_FAILURES;
                            var1 = {};
                            var38 = var2._getAnalyticsProperties;
                            var39 = var38.bind(var2)();
                            var40 = var1;
                            var38 = copyDataProperties(var40, var39);
                            var1[var18] = var22;
                            var38 = var2.parentMediaSessionId;
                            var1[var17] = var38;
                            var1[var16] = var37;
                            var37 = var2._createdTime;
                            var37 = var33 - var37;
                            var1[var15] = var37;
                            var1[var14] = var36;
                            var1[var13] = var35;
                            var1[var12] = var34;
                            var1[var11] = var26;
                            var1[var10] = var25;
                            var33 = var23 - var33;
                            var1[var9] = var33;
                            var1[var8] = var21;
                            var1[var7] = var32;
                            var1[var6] = var31;
                            var1[var5] = var30;
                            var30 = var2._connectionSerial;
                            var1[var4] = var30;
                            var1 = var28.bind(var29)(var27, var1);
                            var27 = var20.bind(var0)();
                            var1 = var27.done;
                            var3 = var27;
                            if (!var1) {
                                _fun31503_ip = 206;
                                continue _fun31503
                            }
                        case 433:
                            var1 = new Array(0);
                            var2._mlsFailures = var1;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[97] = var4;
                var4 = {};
                var6 = '_alertMLSFailure';
                var4.key = var6;
                var6 = function arg0, arg1() {
                    _fun31504: for (var _fun31504_ip = 0;;) switch (_fun31504_ip) {
                        case 0:
                            var2 = _closure1_slot19;
                            var1 = var2.getCurrentUser;
                            var4 = var1.bind(var2)();
                            var2 = null;
                            var1 = var2 != var4;
                            if (!var1) {
                                _fun31504_ip = 35;
                                continue _fun31504
                            }
                        case 25:
                            var3 = var4.isStaff;
                            var1 = var3.bind(var4)();
                        case 35:
                            if (var1) {
                                _fun31504_ip = 58;
                                continue _fun31504
                            }
                        case 38:
                            var2 = var2 != var4;
                            if (!var2) {
                                _fun31504_ip = 55;
                                continue _fun31504
                            }
                        case 45:
                            var3 = var4.isStaffPersonal;
                            var2 = var3.bind(var4)();
                        case 55:
                            var1 = var2;
                        case 58:
                            if (!var1) {
                                _fun31504_ip = 163;
                                continue _fun31504
                            }
                        case 61:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 62;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.show;
                            var0 = {};
                            var3 = global;
                            var4 = var3.HermesInternal;
                            var6 = var4.concat;
                            var5 = 'MLS Error in ';
                            var4 = arg0;
                            var4 = var6.bind(var5)(var4);
                            var0.title = var4;
                            var3 = var3.HermesInternal;
                            var6 = var3.concat;
                            var5 = 'Error: ';
                            var4 = arg1;
                            var3 = '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!';
                            var3 = var6.bind(var5)(var4, var3);
                            var0.body = var3;
                            var0 = var1.bind(var2)(var0);
                        case 163:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[98] = var4;
                var4 = {};
                var6 = 'getExtraConnectionOptions';
                var4.key = var6;
                var6 = function() {
                    var0 = {};
                    return var0;
                };
                var4.value = var6;
                var0[99] = var4;
                var4 = {};
                var6 = 'shouldReportPeriodicStats';
                var4.key = var6;
                var6 = function arg0() {
                    _fun31506: for (var _fun31506_ip = 0;;) switch (_fun31506_ip) {
                        case 0:
                            var1 = this;
                            var0 = arg0;
                            var2 = var0.length;
                            var0 = 10;
                            if (!(!(var2 > var0))) {
                                _fun31506_ip = 89;
                                continue _fun31506
                            }
                        case 18:
                            var0 = var1.getMediaSessionId;
                            var3 = var0.bind(var1)();
                            var0 = null;
                            var0 = var0 != var3;
                            if (!var0) {
                                _fun31506_ip = 87;
                                continue _fun31506
                            }
                        case 37:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot3;
                            var1 = 64;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var4.bind(var1)(var2);
                            var1 = var2.v3;
                            var2 = var1.bind(var2)(var3);
                            var1 = 100;
                            var2 = var2 % var1;
                            var1 = 5;
                            var0 = var2 <= var1;
                        case 87:
                            return var0;
                        case 89:
                            var0 = false;
                            return var0;
                    }
                };
                var4.value = var6;
                var0[100] = var4;
                var4 = {};
                var6 = 'getInputDeviceName';
                var4.key = var6;
                var6 = function() {
                    _fun31507: for (var _fun31507_ip = 0;;) switch (_fun31507_ip) {
                        case 0:
                            var2 = _closure1_slot15;
                            var0 = var2.getInputDeviceId;
                            var1 = var0.bind(var2)();
                            var0 = var2.getInputDevices;
                            var0 = var0.bind(var2)();
                            var1 = var0[var1];
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun31507_ip = 47;
                                continue _fun31507
                            }
                        case 42:
                            var0 = var1.name;
                        case 47:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[101] = var4;
                var4 = {};
                var6 = 'getOutputDeviceName';
                var4.key = var6;
                var6 = function() {
                    _fun31508: for (var _fun31508_ip = 0;;) switch (_fun31508_ip) {
                        case 0:
                            var2 = _closure1_slot15;
                            var0 = var2.getOutputDeviceId;
                            var1 = var0.bind(var2)();
                            var0 = var2.getOutputDevices;
                            var0 = var0.bind(var2)();
                            var1 = var0[var1];
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun31508_ip = 47;
                                continue _fun31508
                            }
                        case 42:
                            var0 = var1.name;
                        case 47:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[102] = var4;
                var4 = {};
                var6 = 'getVideoDeviceName';
                var4.key = var6;
                var6 = function() {
                    _fun31509: for (var _fun31509_ip = 0;;) switch (_fun31509_ip) {
                        case 0:
                            var2 = _closure1_slot15;
                            var0 = var2.getVideoDeviceId;
                            var1 = var0.bind(var2)();
                            var0 = var2.getVideoDevices;
                            var0 = var0.bind(var2)();
                            var1 = var0[var1];
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun31509_ip = 47;
                                continue _fun31509
                            }
                        case 42:
                            var0 = var1.name;
                        case 47:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[103] = var4;
                var4 = {};
                var6 = 'getInputDeviceSampleRate';
                var4.key = var6;
                var5 = function() {
                    _fun31510: for (var _fun31510_ip = 0;;) switch (_fun31510_ip) {
                        case 0:
                            var0 = this;
                            var3 = var0._voiceQuality;
                            var0 = null;
                            var2 = var0 == var3;
                            var1 = undefined;
                            if (var2) {
                                _fun31510_ip = 36;
                                continue _fun31510
                            }
                        case 20:
                            var2 = var3.getAudioDeviceStats;
                            var2 = var2.bind(var3)();
                            var1 = var2.input_device_session_sample_rate;
                        case 36:
                            var2 = var0 != var1;
                            var0 = null;
                            if (!var2) {
                                _fun31510_ip = 48;
                                continue _fun31510
                            }
                        case 45:
                            var0 = var1;
                        case 48:
                            return var0;
                    }
                };
                var4.value = var5;
                var0[104] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1 = var1.bind(var0)(var3);
            var3 = 66;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'lib/RTCConnection.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 3528, 3608, 3513, 1216, 1372, 3476, 3518, 8662, 3627, 1621, 660, 12240, 3510, 3529, 5687, 795, 1207, 3, 12241, 561, 491, 12243, 12244, 8035, 8663, 1444, 478, 3074, 1457, 806, 12246, 1384, 3632, 24, 12247, 12248, 3950, 12250, 12251, 1347, 12220, 12252, 12254, 12255, 3633, 8211, 12256, 12257, 12269, 12259, 12270, 4363, 12271, 12273, 7947, 12275, 4003, 1234, 1215, 3707, 2]);