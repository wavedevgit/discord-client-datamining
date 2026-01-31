// modules/gateway/GatewaySocket.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun94462: for (var _fun94462_ip = 0;;) switch (_fun94462_ip) {
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
                _fun94462_ip = 76;
                continue _fun94462;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function arg0() {
        _fun94465: for (var _fun94465_ip = 0;;) switch (_fun94465_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.actuallySkipped;
                var _closure2_slot0 = var12;
                var8 = var0.reason;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var0;
                var _closure2_slot3 = var0;
                var _closure2_slot4 = var0;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var4 = 11;
                var3 = var3[var4];
                var5 = var5.bind(var0)(var3);
                var3 = var5.shouldLogConnectSkipped;
                var3 = var3.bind(var5)();
                if (!var3) {
                    _fun94465_ip = 357;
                    continue _fun94465
                }
            case 78:
                var5 = _closure1_slot2;
                var6 = _closure1_slot3;
                var3 = 12;
                var3 = var6[var3];
                var7 = var5.bind(var0)(var3);
                var3 = var7.getIsPaused;
                var11 = var3.bind(var7)();
                _closure2_slot1 = var11;
                var3 = 13;
                var3 = var6[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.describeConnectionReasons;
                var7 = var3.bind(var5)();
                var5 = _closure1_slot1;
                var3 = 14;
                var3 = var6[var3];
                var5 = var5.bind(var0)(var3);
                var3 = var5.getState;
                var10 = var3.bind(var5)();
                _closure2_slot2 = var10;
                var5 = var7.length;
                var3 = 0;
                var9 = var8;
                if (!(var5 > var3)) {
                    _fun94465_ip = 208;
                    continue _fun94465
                }
            case 178:
                var3 = global;
                var3 = var3.HermesInternal;
                var6 = var3.concat;
                var5 = '';
                var3 = ' + ';
                var9 = var6.bind(var5)(var8, var3, var7);
            case 208:
                _closure2_slot3 = var9;
                var8 = 'request_state';
                if (!var11) {
                    _fun94465_ip = 225;
                    continue _fun94465
                }
            case 221:
                var8 = 'paused';
            case 225:
                _closure2_slot4 = var8;
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var3 = 15;
                var3 = var6[var3];
                var7 = var5.bind(var0)(var3);
                var6 = var7.track;
                var3 = _closure1_slot12;
                var5 = var3.GATEWAY_CONNECT_SKIPPED;
                var3 = {};
                var13 = null;
                if (!(var13 != var12)) {
                    _fun94465_ip = 275;
                    continue _fun94465
                }
            case 272:
                var11 = var12;
            case 275:
                var3.actually_skipped = var11;
                var3.client_app_state = var10;
                var3.connect_reason = var9;
                var3.skip_context = var8;
                var3 = var6.bind(var7)(var5, var3);
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var4];
                var3 = var3.bind(var0)(var2);
                var2 = var3.shouldLogPostConnectSkipped;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun94465_ip = 357;
                    continue _fun94465
                }
            case 333:
                var2 = global;
                var3 = var2.setTimeout;
                var2 = function() { // Environment: var1
                    _fun94466: for (var _fun94466_ip = 0;;) switch (_fun94466_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 15;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.track;
                            var1 = _closure1_slot12;
                            var2 = var1.POST_GATEWAY_CONNECT_SKIPPED;
                            var1 = {};
                            var8 = _closure2_slot0;
                            var7 = null;
                            if (!(var7 == var8)) {
                                _fun94466_ip = 61;
                                continue _fun94466
                            }
                        case 55:
                            var7 = _closure2_slot1;
                            _fun94466_ip = 65;
                            continue _fun94466;
                        case 61:
                            var7 = _closure2_slot0;
                        case 65:
                            var1.actually_skipped = var7;
                            var7 = _closure2_slot2;
                            var1.original_client_app_state = var7;
                            var9 = _closure1_slot1;
                            var7 = _closure1_slot3;
                            var8 = 14;
                            var8 = var7[var8];
                            var9 = var9.bind(var0)(var8);
                            var8 = var9.getState;
                            var8 = var8.bind(var9)();
                            var1.client_app_state = var8;
                            var8 = _closure2_slot4;
                            var1.skip_context = var8;
                            var6 = _closure2_slot3;
                            var1.original_connect_reason = var6;
                            var6 = _closure1_slot2;
                            var5 = 13;
                            var5 = var7[var5];
                            var6 = var6.bind(var0)(var5);
                            var5 = var6.describeConnectionReasons;
                            var5 = var5.bind(var6)();
                            var1.gateway_connect_reasons = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var1 = 200;
                var1 = var3.bind(var0)(var2, var1);
            case 357:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot22 = var0;
    var0 = function arg0, arg1, arg2() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = 0;
        var _closure2_slot3 = var1;
        var2 = var3.dataReady;
        var1 = function(arg0) { // Environment: var0
            _fun94469: for (var _fun94469_ip = 0;;) switch (_fun94469_ip) {
                case 0:
                    var0 = arg0;
                case 3: // try_start_0
                    var4 = _closure2_slot2;
                    var3 = var0;
                    var1 = _closure2_slot3;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var1);
                case 25: // try_end0
                    var1 = 0;
                    _closure2_slot3 = var1;
                    return var0;
                case 33: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var1 = 0;
                    _closure2_slot3 = var1;
                    throw var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = false;
        var _closure2_slot4 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun94470: for (var _fun94470_ip = 0;;) switch (_fun94470_ip) {
                case 0:
                    var2 = arg0;
                    var5 = undefined;
                    var1 = undefined;
                    var1 = var2.data;
                    var4 = var2.raw_length;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun94470_ip = 56;
                        continue _fun94470
                    }
                case 24:
                    var6 = _closure2_slot3;
                    var7 = _closure1_slot24;
                    var3 = var1;
                    var3 = var7.bind(var5)(var3);
                    var3 = var6 + var3;
                    _closure2_slot3 = var3;
                    _fun94470_ip = 77;
                    continue _fun94470;
                case 56:
                    var4 = _closure2_slot3;
                    var2 = var2.raw_length;
                    var2 = var4 + var2;
                    _closure2_slot3 = var2;
                case 77: // try_start_0
                    var3 = _closure2_slot0;
                    var2 = var3.feed;
                    var1 = var2.bind(var3)(var1);
                case 95: // try_end0
                    return var5;
                case 97: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var2 = _closure2_slot4;
                    if (var2) {
                        _fun94470_ip = 136;
                        continue _fun94470
                    }
                case 109:
                    var2 = true;
                    _closure2_slot4 = var2;
                    var4 = _closure2_slot1;
                    var3 = false;
                    var2 = 0;
                    var1 = 'A decompression error occurred';
                    var1 = var4.bind(var5)(var3, var2, var1);
                case 136:
                    throw var0;
            }
        };
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun94471: for (var _fun94471_ip = 0;;) switch (_fun94471_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var1 = var0 == var2;
                var0 = 0;
                if (var1) {
                    _fun94471_ip = 41;
                    continue _fun94471
                }
            case 14:
                var3 = 'string';
                var1 = typeof var2;
                if (!(var3 !== var1)) {
                    _fun94471_ip = 33;
                    continue _fun94471
                }
            case 25:
                var1 = var2.byteLength;
                _fun94471_ip = 38;
                continue _fun94471;
            case 33:
                var1 = var2.length;
            case 38:
                var0 = var1;
            case 41:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var7);
    var0 = 0;
    var7 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var8 = 1;
    var7 = var5[var8];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var10 = 3;
    var7 = var5[var10];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var9 = var7.AnalyticEvents;
    var _closure1_slot12 = var9;
    var7 = var7.Endpoints;
    var _closure1_slot13 = var7;
    var7 = 9;
    var7 = var5[var7];
    var11 = var6.bind(var0)(var7);
    var7 = var11.prototype;
    var9 = Object.create(var7, {
        constructor: {
            value: var11
        }
    });
    var14 = 'GatewaySocket';
    var15 = var9;
    var7 = new var15[var11](var14, var13);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot14 = var7;
    var7 = 10;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var15 = var9;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var9;
    var _closure1_slot15 = var7;
    var7 = 17;
    var9 = var5[var7];
    var9 = var6.bind(var0)(var9);
    var9 = var9.Millis;
    var11 = var9.SECOND;
    var9 = 30;
    var9 = var9 * var11;
    var _closure1_slot16 = var9;
    var9 = var5[var7];
    var9 = var6.bind(var0)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var9 = var10 * var9;
    var _closure1_slot17 = var9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var7 = var8 * var7;
    var _closure1_slot18 = var7;
    var3 = var3.window;
    var3 = var3.GLOBAL_ENV;
    var3 = var3.GATEWAY_ENDPOINT;
    var _closure1_slot19 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() {
            _fun94473: for (var _fun94473_ip = 0;;) switch (_fun94473_ip) {
                case 0:
                    var2 = this;
                    var0 = _closure1_slot6;
                    var1 = _closure2_slot1;
                    var6 = undefined;
                    var0 = var0.bind(var6)(var2, var1);
                    var0 = _closure1_slot9;
                    var10 = var0.bind(var6)(var1);
                    var1 = _closure1_slot8;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var6)();
                    if (var0) {
                        _fun94473_ip = 64;
                        continue _fun94473
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var2, var6);
                    _fun94473_ip = 102;
                    continue _fun94473;
                case 64:
                    var4 = global;
                    var8 = var4.Reflect;
                    var7 = var8.construct;
                    var4 = _closure1_slot9;
                    var4 = var4.bind(var6)(var2);
                    var5 = var4.constructor;
                    var4 = new Array(0);
                    var0 = var7.bind(var8)(var10, var4, var5);
                case 102:
                    var0 = var1.bind(var6)(var2, var0);
                    var _closure3_slot0 = var0;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 18;
                    var1 = var7[var5];
                    var4 = var8.bind(var6)(var1);
                    var13 = _closure1_slot18;
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var11 = 1000;
                    var15 = var2;
                    var14 = var11;
                    var1 = new var15[var4](var14, var13, var12);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.dispatchExceptionBackoff = var1;
                    var1 = 0;
                    var0.dispatchSuccessTimer = var1;
                    var2 = false;
                    var0.didForceClearGuildHashes = var2;
                    var0.identifyUncompressedByteSize = var1;
                    var0.identifyCompressedByteSize = var1;
                    var4 = {};
                    var0.analytics = var4;
                    var0.identifyCount = var1;
                    var4 = null;
                    var0.resumeUrl = var4;
                    var0.iosGoingAwayEventCount = var1;
                    var10 = {
                        'currentPayload': null,
                        'upcomingState': null
                    };
                    var0.heartbeatQOSState = var10;
                    var9 = function(arg0, arg1, arg2) { // Environment: var9
                        _fun94474: for (var _fun94474_ip = 0;;) switch (_fun94474_ip) {
                            case 0:
                                var6 = arg0;
                                var7 = arg1;
                                var0 = undefined;
                                var1 = undefined;
                                var3 = _closure1_slot11;
                                var3 = var3.isLoggingGatewayEvents;
                                if (!var3) {
                                    _fun94474_ip = 49;
                                    continue _fun94474
                                }
                            case 26:
                                var5 = _closure1_slot14;
                                var4 = var5.verboseDangerously;
                                var3 = '~>';
                                var3 = var4.bind(var5)(var3, var6, var7);
                            case 49:
                                var5 = _closure1_slot15;
                                var4 = var5.pack;
                                var3 = {};
                                var3.op = var6;
                                var3.d = var7;
                                var1 = var4.bind(var5)(var3);
                                var3 = arg2;
                                if (!var3) {
                                    _fun94474_ip = 140;
                                    continue _fun94474
                                }
                            case 80:
                                var4 = _closure3_slot0;
                                var3 = var4.isSessionEstablished;
                                var3 = var3.bind(var4)();
                                if (var3) {
                                    _fun94474_ip = 140;
                                    continue _fun94474
                                }
                            case 100:
                                var4 = _closure1_slot14;
                                var3 = var4.warn;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var5 = var2.concat;
                                var2 = 'Attempted to send while not being in a connected state opcode: ';
                                var2 = var5.bind(var2)(var6);
                                var2 = var3.bind(var4)(var2);
                                _fun94474_ip = 184;
                                continue _fun94474;
                            case 140: // try_start_0
                                var3 = _closure3_slot0;
                                var4 = var3.webSocket;
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun94474_ip = 180;
                                    continue _fun94474
                                }
                            case 159:
                                var2 = _closure3_slot0;
                                var3 = var2.webSocket;
                                var2 = var3.send;
                                var1 = var2.bind(var3)(var1);
                            case 180: // try_end0
                                _fun94474_ip = 184;
                                continue _fun94474;
                            case 182: // catch_target0
                                CatchBlockStart(arg_register = 1);
                            case 184:
                                return var0;
                        }
                    };
                    var0.send = var9;
                    var9 = 19;
                    var9 = var7[var9];
                    var9 = var8.bind(var6)(var9);
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var9
                        }
                    });
                    var15 = var10;
                    var14 = var0;
                    var9 = new var15[var9](var14, var13);
                    var9 = var9 instanceof Object ? var9 : var10;
                    var0.dispatcher = var9;
                    var5 = var7[var5];
                    var10 = var8.bind(var6)(var5);
                    var5 = var10.prototype;
                    var9 = Object.create(var5, {
                        constructor: {
                            value: var10
                        }
                    });
                    var13 = 60000;
                    var15 = var9;
                    var14 = var11;
                    var5 = new var15[var10](var14, var13, var12);
                    var5 = var5 instanceof Object ? var5 : var9;
                    var0.gatewayBackoff = var5;
                    var5 = 20;
                    var5 = var7[var5];
                    var5 = var8.bind(var6)(var5);
                    var5 = var5.CLOSED;
                    var0.connectionState_ = var5;
                    var0.webSocket = var4;
                    var0.seq = var1;
                    var0.sessionId = var4;
                    var0.token = var4;
                    var0.initialHeartbeatTimeout = var4;
                    var0.expeditedHeartbeatTimeout = var4;
                    var0.lastHeartbeatTime = var4;
                    var0.lastHeartbeatAckTime = var4;
                    var0.helloTimeout = var4;
                    var0.heartbeatInterval = var4;
                    var0.heartbeater = var4;
                    var4 = true;
                    var0.heartbeatAck = var4;
                    var0.connectionStartTime = var1;
                    var0.identifyStartTime = var1;
                    var0.nextReconnectIsImmediate = var2;
                    var5 = _closure1_slot0;
                    var4 = 21;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.getCompressionHandler;
                    var3 = _closure1_slot15;
                    var3 = var4.bind(var5)(var3);
                    var0.compressionHandler = var3;
                    var0.hasConnectedOnce = var2;
                    var0.isFastConnect = var2;
                    var0.identifyCount = var1;
                    var0.iosGoingAwayEventCount = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot10;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'connectionState';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0.connectionState_;
            return var0;
        };
        var4.get = var0;
        var0 = function arg0() {
            var1 = arg0;
            var3 = _closure1_slot14;
            var2 = var3.verbose;
            var0 = global;
            var0 = var0.HermesInternal;
            var4 = var0.concat;
            var0 = 'Setting connection state to ';
            var0 = var4.bind(var0)(var1);
            var0 = var2.bind(var3)(var0);
            var0 = this;
            var0.connectionState_ = var1;
            var0 = undefined;
            return var0;
        };
        var4.set = var0;
        var0 = new Array(44);
        var0[0] = var4;
        var4 = {};
        var7 = 'addAnalytics';
        var4.key = var7;
        var7 = function arg0() {
            var1 = this;
            var0 = {};
            var3 = var1.analytics;
            var4 = var0;
            var2 = copyDataProperties(var4, var3);
            var3 = arg0;
            var4 = var0;
            var2 = copyDataProperties(var4, var3);
            var1.analytics = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'setResumeUrl';
        var4.key = var7;
        var7 = function arg0() {
            _fun94478: for (var _fun94478_ip = 0;;) switch (_fun94478_ip) {
                case 0:
                    var5 = arg0;
                    var0 = null;
                    var2 = var0 != var5;
                    if (!var2) {
                        _fun94478_ip = 27;
                        continue _fun94478
                    }
                case 12:
                    var3 = var5.endsWith;
                    var1 = '/';
                    var2 = var3.bind(var5)(var1);
                case 27:
                    var1 = var5;
                    if (!var2) {
                        _fun94478_ip = 59;
                        continue _fun94478
                    }
                case 33:
                    var4 = var5.substring;
                    var3 = var5.length;
                    var2 = 1;
                    var3 = var3 - var2;
                    var2 = 0;
                    var1 = var4.bind(var5)(var2, var3);
                case 59:
                    if (!(var0 !== var1)) {
                        _fun94478_ip = 105;
                        continue _fun94478
                    }
                case 63:
                    var3 = _closure1_slot14;
                    var2 = var3.verbose;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var0 = 'Updating resume url to ';
                    var0 = var4.bind(var0)(var1);
                    var0 = var2.bind(var3)(var0);
                case 105:
                    var0 = this;
                    var0.resumeUrl = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'handleActiveStateChange';
        var4.key = var7;
        var7 = function arg0() {
            _fun94479: for (var _fun94479_ip = 0;;) switch (_fun94479_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.heartbeatQOSState;
                    var3 = var2.currentPayload;
                    var4 = null;
                    var2 = var4 != var3;
                    if (!var2) {
                        _fun94479_ip = 33;
                        continue _fun94479
                    }
                case 27:
                    var2 = var3.active;
                case 33:
                    var2 = !var2;
                    var3 = var0.heartbeatQOSState;
                    var3 = var3.currentPayload;
                    if (!(var4 == var3)) {
                        _fun94479_ip = 64;
                        continue _fun94479
                    }
                case 52:
                    var3 = var0.heartbeatQOSState;
                    var3.currentPayload = var1;
                case 64:
                    var3 = var0.heartbeatQOSState;
                    var4 = var3.currentPayload;
                    var3 = var1.active;
                    if (!var3) {
                        _fun94479_ip = 214;
                        continue _fun94479
                    }
                case 88:
                    var3 = true;
                    var4.active = var3;
                    var3 = global;
                    var7 = var3.Set;
                    var10 = var4.reasons;
                    var3 = new Array(0);
                    var11 = var3;
                    var9 = 0;
                    var9 = arraySpread(var11, var10, var9);
                    var10 = var1.reasons;
                    var11 = var3;
                    var5 = arraySpread(var11, var10, var9);
                    var5 = var7.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var7
                        }
                    });
                    var12 = var5;
                    var11 = var3;
                    var3 = new var12[var7](var11, var10);
                    var10 = var3 instanceof Object ? var3 : var5;
                    var5 = new Array(0);
                    var11 = var5;
                    var9 = 0;
                    var3 = arraySpread(var11, var10, var9);
                    var3 = var5.sort;
                    var3 = var3.bind(var5)();
                    var4.reasons = var3;
                    if (!var2) {
                        _fun94479_ip = 201;
                        continue _fun94479
                    }
                case 191:
                    var3 = var0.isSessionEstablished;
                    var2 = var3.bind(var0)();
                case 201:
                    if (!var2) {
                        _fun94479_ip = 214;
                        continue _fun94479
                    }
                case 204:
                    var2 = var0._sendHeartbeat;
                    var2 = var2.bind(var0)();
                case 214:
                    var0 = var0.heartbeatQOSState;
                    var0.upcomingState = var1;
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'handleUpdateTimeSpentSessionId';
        var4.key = var7;
        var7 = function arg0, arg1, arg2() {
            _fun94480: for (var _fun94480_ip = 0;;) switch (_fun94480_ip) {
                case 0:
                    var2 = this;
                    var4 = var2.connectionState_;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 20;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.SESSION_ESTABLISHED;
                    if (!(var4 === var3)) {
                        _fun94480_ip = 126;
                        continue _fun94480
                    }
                case 44:
                    var4 = var2.send;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 22;
                    var1 = var5[var1];
                    var1 = var3.bind(var0)(var1);
                    var1 = var1.Opcode;
                    var3 = var1.UPDATE_TIME_SPENT_SESSION_ID;
                    var1 = {};
                    var5 = arg0;
                    var1.initialization_timestamp = var5;
                    var5 = arg1;
                    var1.session_id = var5;
                    var5 = arg2;
                    var1.client_launch_id = var5;
                    var1 = var4.bind(var2)(var3, var1);
                    var1 = var2._sendHeartbeat;
                    var1 = var1.bind(var2)();
                case 126:
                    return var0;
            }
        };
        var4.value = var7;
        var0[4] = var4;
        var4 = {};
        var7 = '_connect';
        var4.key = var7;
        var7 = function arg0() {
            _fun94481: for (var _fun94481_ip = 0;;) switch (_fun94481_ip) {
                case 0:
                    var7 = this;
                    var _closure3_slot0 = var7;
                    var1 = var7.willReconnect;
                    var1 = var1.bind(var7)();
                    if (var1) {
                        _fun94481_ip = 51;
                        continue _fun94481
                    }
                case 25:
                    var4 = _closure1_slot14;
                    var2 = var4.verbose;
                    var1 = 'Skipping _connect because willReconnect is false';
                    var1 = var2.bind(var4)(var1);
                    _fun94481_ip = 714;
                    continue _fun94481;
                case 51:
                    var4 = _closure1_slot2;
                    var2 = _closure1_slot3;
                    var1 = 12;
                    var1 = var2[var1];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.getIsPaused;
                    var1 = var1.bind(var4)();
                    if (var1) {
                        _fun94481_ip = 119;
                        continue _fun94481
                    }
                case 86:
                    var5 = _closure1_slot2;
                    var6 = _closure1_slot3;
                    var4 = 13;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.isRequested;
                    var4 = var4.bind(var5)();
                    if (var4) {
                        _fun94481_ip = 165;
                        continue _fun94481
                    }
                case 119:
                    var6 = _closure1_slot14;
                    var5 = var6.info;
                    var4 = 'Skipping _connect because socket is paused';
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot21;
                    var4 = {};
                    var6 = arg0;
                    var4.reason = var6;
                    var4 = var5.bind(var2)(var4);
                    if (var1) {
                        _fun94481_ip = 714;
                        continue _fun94481
                    }
                case 165:
                    var5 = _closure1_slot1;
                    var10 = _closure1_slot3;
                    var1 = 20;
                    var1 = var10[var1];
                    var1 = var5.bind(var2)(var1);
                    var1 = var1.CONNECTING;
                    var7.connectionState = var1;
                    var1 = false;
                    var7.nextReconnectIsImmediate = var1;
                    var4 = var7.compressionHandler;
                    var1 = var4.getAlgorithm;
                    var8 = var1.bind(var4)();
                    var4 = _closure1_slot15;
                    var1 = var4.getName;
                    var11 = var1.bind(var4)();
                    var1 = var7._getGatewayUrl;
                    var9 = var1.bind(var7)();
                    var4 = global;
                    var1 = var4.window;
                    var1 = var1.GLOBAL_ENV;
                    var6 = var1.API_VERSION;
                    var1 = 23;
                    var1 = var10[var1];
                    var12 = var5.bind(var2)(var1);
                    var10 = var12.mark;
                    var5 = '🌐';
                    var1 = 'Socket._connect';
                    var1 = var10.bind(var12)(var5, var1);
                    var12 = _closure1_slot14;
                    var10 = var12.info;
                    var1 = null;
                    var5 = var1 != var8;
                    var17 = 'none';
                    if (!var5) {
                        _fun94481_ip = 327;
                        continue _fun94481
                    }
                case 324:
                    var17 = var8;
                case 327:
                    var5 = var4.HermesInternal;
                    var16 = var5.concat;
                    var25 = '[CONNECT] ';
                    var23 = ', encoding: ';
                    var21 = ', version: ';
                    var19 = ', compression: ';
                    var24 = var9;
                    var22 = var11;
                    var20 = var6;
                    var18 = var17;
                    var5 = var25[var16](var24, var23, var22, var21, var20, var19, var18, var17);
                    var5 = var10.bind(var12)(var5);
                    var5 = var7.webSocket;
                    if (!(var1 !== var5)) {
                        _fun94481_ip = 431;
                        continue _fun94481
                    }
                case 393:
                    var12 = _closure1_slot14;
                    var10 = var12.error;
                    var5 = '_connect called with already existing websocket';
                    var5 = var10.bind(var12)(var5);
                    var10 = var7._cleanup;
                    var5 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = var2.close;
                        var0 = 4000;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5 = var10.bind(var7)(var5);
                case 431:
                    var10 = var4.Date;
                    var5 = var10.now;
                    var5 = var5.bind(var10)();
                    var7.connectionStartTime = var5;
                    var12 = var4.setTimeout;
                    var10 = _closure1_slot16;
                    var5 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.Date;
                        var1 = var2.now;
                        var3 = var1.bind(var2)();
                        var2 = _closure3_slot0;
                        var1 = var2.connectionStartTime;
                        var5 = var3 - var1;
                        var4 = var2._handleClose;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var1 = 'The connection timed out after ';
                        var0 = ' ms - did not receive OP_HELLO in time.';
                        var3 = var3.bind(var1)(var5, var0);
                        var1 = false;
                        var0 = 0;
                        var0 = var4.bind(var2)(var1, var0, var3);
                        var1 = var2.setResumeUrl;
                        var0 = null;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var5 = var12.bind(var2)(var5, var10);
                    var7.helloTimeout = var5;
                    var4 = var4.URL;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var4
                        }
                    });
                    var25 = var5;
                    var24 = var9;
                    var4 = new var25[var4](var24, var23);
                    var5 = var4 instanceof Object ? var4 : var5;
                    var _closure3_slot1 = var5;
                    var10 = var5.searchParams;
                    var9 = var10.append;
                    var4 = 'encoding';
                    var4 = var9.bind(var10)(var4, var11);
                    var10 = var5.searchParams;
                    var9 = var10.append;
                    var4 = var6.toString;
                    var6 = var4.bind(var6)();
                    var4 = 'v';
                    var4 = var9.bind(var10)(var4, var6);
                    if (!(var1 != var8)) {
                        _fun94481_ip = 593;
                        continue _fun94481
                    }
                case 571:
                    var6 = var5.searchParams;
                    var4 = var6.append;
                    var1 = 'compress';
                    var1 = var4.bind(var6)(var1, var8);
                case 593:
                    var1 = {};
                    var4 = var5.toString;
                    var4 = var4.bind(var5)();
                    var1.gatewayURL = var4;
                    var4 = function arg0() {
                        var2 = arg0;
                        var0 = _closure3_slot0;
                        var0.webSocket = var2;
                        var1 = var0.compressionHandler;
                        var0 = var1.bindWebSocket;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                    };
                    var1.newCallback = var4;
                    var4 = function arg0() {
                        _fun94488: for (var _fun94488_ip = 0;;) switch (_fun94488_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 23;
                                var2 = var2[var0];
                                var0 = undefined;
                                var7 = var3.bind(var0)(var2);
                                var6 = var7.mark;
                                var4 = global;
                                var2 = var4.HermesInternal;
                                var3 = var2.concat;
                                var2 = 'GatewaySocket.onOpen ';
                                var3 = var3.bind(var2)(var1);
                                var2 = '🌐';
                                var2 = var6.bind(var7)(var2, var3);
                                var3 = var4.Date;
                                var2 = var3.now;
                                var7 = var2.bind(var3)();
                                var3 = _closure3_slot0;
                                var6 = var3.connectionStartTime;
                                var13 = var7 - var6;
                                var6 = _closure1_slot14;
                                var5 = var6.info;
                                var8 = _closure3_slot1;
                                var7 = var8.toString;
                                var15 = var7.bind(var8)();
                                var4 = var4.HermesInternal;
                                var9 = var4.concat;
                                var16 = '[CONNECTED] ';
                                var14 = ' in ';
                                var12 = ' ms';
                                var4 = var16[var9](var15, var14, var13, var12, var11);
                                var4 = var5.bind(var6)(var4);
                                var3.isFastConnect = var1;
                                var2 = _closure3_slot0;
                                if (var1) {
                                    _fun94488_ip = 186;
                                    continue _fun94488
                                }
                            case 174:
                                var1 = var2._doResumeOrIdentify;
                                var1 = var1.bind(var2)();
                                _fun94488_ip = 198;
                                continue _fun94488;
                            case 186:
                                var1 = var2._doFastConnectIdentify;
                                var1 = var1.bind(var2)();
                            case 198:
                                return var0;
                        }
                    };
                    var1.onOpen = var4;
                    var6 = _closure1_slot23;
                    var5 = var7.compressionHandler;
                    var4 = var7._handleClose;
                    var3 = var4.bind;
                    var4 = var3.bind(var4)(var7);
                    var3 = function(arg0, arg1) { // Environment: var0
                        _fun94489: for (var _fun94489_ip = 0;;) switch (_fun94489_ip) {
                            case 0:
                                var11 = arg0;
                                var1 = global;
                                var2 = var1.Date;
                                var0 = var2.now;
                                var13 = var0.bind(var2)();
                                var2 = _closure1_slot15;
                                var0 = var2.unpack;
                                var0 = var0.bind(var2)(var11);
                                var12 = var0.op;
                                var9 = var0.s;
                                var5 = var0.t;
                                var3 = var0.d;
                                var4 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var10 = 22;
                                var2 = var0[var10];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var2 = var2.DISPATCH;
                                if (!(var12 !== var2)) {
                                    _fun94489_ip = 185;
                                    continue _fun94489
                                }
                            case 96:
                                var6 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var4 = 23;
                                var4 = var2[var4];
                                var7 = var6.bind(var0)(var4);
                                var6 = var7.mark;
                                var4 = _closure1_slot0;
                                var2 = var2[var10];
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var15 = var2[var12];
                                var2 = var1.HermesInternal;
                                var14 = var2.concat;
                                var4 = 'GatewaySocket.onMessage ';
                                var2 = ' ';
                                var4 = var14.bind(var4)(var12, var2, var15);
                                var2 = '🌐';
                                var2 = var6.bind(var7)(var2, var4);
                            case 185:
                                var2 = _closure1_slot11;
                                var2 = var2.isLoggingGatewayEvents;
                                if (!var2) {
                                    _fun94489_ip = 305;
                                    continue _fun94489
                                }
                            case 198:
                                var14 = new Array(1);
                                var14[0] = var12;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var10];
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var2 = var2.DISPATCH;
                                if (!(var12 === var2)) {
                                    _fun94489_ip = 249;
                                    continue _fun94489
                                }
                            case 239:
                                var2 = var14.push;
                                var2 = var2.bind(var14)(var5);
                            case 249:
                                var2 = var14.push;
                                var2 = var2.bind(var14)(var3);
                                var6 = _closure1_slot14;
                                var4 = var6.verboseDangerously;
                                var2 = ['<~'];
                                var16 = 1;
                                var18 = var2;
                                var17 = var14;
                                var7 = arraySpread(var18, var17, var16);
                                var18 = var4;
                                var17 = var2;
                                var16 = var6;
                                var2 = apply(var18, var17, var16);
                            case 305:
                                var4 = var1.Date;
                                var2 = var4.now;
                                var2 = var2.bind(var4)();
                                var7 = var2 - var13;
                                var2 = 'READY';
                                var6 = var2 === var5;
                                if (var6) {
                                    _fun94489_ip = 443;
                                    continue _fun94489
                                }
                            case 335:
                                var2 = 'READY_SUPPLEMENTAL';
                                if (!(var2 !== var5)) {
                                    _fun94489_ip = 404;
                                    continue _fun94489
                                }
                            case 345:
                                var2 = 10;
                                if (!(var7 > var2)) {
                                    _fun94489_ip = 480;
                                    continue _fun94489
                                }
                            case 355:
                                var4 = _closure1_slot1;
                                var14 = _closure1_slot3;
                                var2 = 23;
                                var2 = var14[var2];
                                var15 = var4.bind(var0)(var2);
                                var14 = var15.mark;
                                var2 = 'Parse ';
                                var4 = var2 + var5;
                                var2 = '🌐';
                                var2 = var14.bind(var15)(var2, var4, var7);
                                _fun94489_ip = 480;
                                continue _fun94489;
                            case 404:
                                var4 = _closure1_slot1;
                                var14 = _closure1_slot3;
                                var2 = 24;
                                var2 = var14[var2];
                                var2 = var4.bind(var0)(var2);
                                var4 = var2.parseReadySupplemental;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var13, var7);
                                _fun94489_ip = 480;
                                continue _fun94489;
                            case 443:
                                var4 = _closure1_slot1;
                                var14 = _closure1_slot3;
                                var2 = 24;
                                var2 = var14[var2];
                                var2 = var4.bind(var0)(var2);
                                var4 = var2.parseReady;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var13, var7);
                            case 480:
                                var4 = null;
                                if (!(var4 != var9)) {
                                    _fun94489_ip = 499;
                                    continue _fun94489
                                }
                            case 486:
                                var2 = _closure3_slot0;
                                var2.seq = var9;
                            case 499:
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var10];
                                var2 = var9.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var2 = var2.HELLO;
                                if (!(var2 !== var12)) {
                                    _fun94489_ip = 945;
                                    continue _fun94489
                                }
                            case 535:
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var10];
                                var2 = var9.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var2 = var2.RECONNECT;
                                if (!(var2 !== var12)) {
                                    _fun94489_ip = 924;
                                    continue _fun94489
                                }
                            case 571:
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var10];
                                var2 = var9.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var2 = var2.INVALID_SESSION;
                                if (!(var2 !== var12)) {
                                    _fun94489_ip = 902;
                                    continue _fun94489
                                }
                            case 607:
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var10];
                                var2 = var9.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var2 = var2.HEARTBEAT;
                                if (!(var2 !== var12)) {
                                    _fun94489_ip = 881;
                                    continue _fun94489
                                }
                            case 643:
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var10];
                                var2 = var9.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var2 = var2.HEARTBEAT_ACK;
                                if (!(var2 !== var12)) {
                                    _fun94489_ip = 859;
                                    continue _fun94489
                                }
                            case 679:
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var10];
                                var2 = var9.bind(var0)(var2);
                                var2 = var2.Opcode;
                                var2 = var2.DISPATCH;
                                if (!(var2 !== var12)) {
                                    _fun94489_ip = 754;
                                    continue _fun94489
                                }
                            case 712:
                                var9 = _closure1_slot14;
                                var2 = var9.info;
                                var1 = var1.HermesInternal;
                                var10 = var1.concat;
                                var1 = 'Unhandled op ';
                                var1 = var10.bind(var1)(var12);
                                var1 = var2.bind(var9)(var1);
                                _fun94489_ip = 975;
                                continue _fun94489;
                            case 754:
                                var2 = _closure3_slot0;
                                var1 = var2._handleDispatch;
                                var4 = null;
                                if (!var6) {
                                    _fun94489_ip = 850;
                                    continue _fun94489
                                }
                            case 774:
                                var6 = {};
                                var10 = arg1;
                                var6.compressed_byte_size = var10;
                                var10 = _closure1_slot24;
                                var10 = var10.bind(var0)(var11);
                                var6.uncompressed_byte_size = var10;
                                var9 = _closure3_slot0;
                                var10 = var9.compressionHandler;
                                var9 = var10.getAlgorithm;
                                var9 = var9.bind(var10)();
                                var6.compression_algorithm = var9;
                                var9 = _closure1_slot15;
                                var8 = var9.getName;
                                var8 = var8.bind(var9)();
                                var6.packing_algorithm = var8;
                                var6.unpack_duration_ms = var7;
                                var4 = var6;
                            case 850:
                                var1 = var1.bind(var2)(var3, var5, var4);
                                _fun94489_ip = 975;
                                continue _fun94489;
                            case 859:
                                var2 = _closure3_slot0;
                                var1 = var2._handleHeartbeatAck;
                                var1 = var1.bind(var2)(var3);
                                _fun94489_ip = 975;
                                continue _fun94489;
                            case 881:
                                var2 = _closure3_slot0;
                                var1 = var2._handleHeartbeatReceive;
                                var1 = var1.bind(var2)();
                                _fun94489_ip = 975;
                                continue _fun94489;
                            case 902:
                                var2 = _closure3_slot0;
                                var1 = var2._handleInvalidSession;
                                var1 = var1.bind(var2)(var3);
                                _fun94489_ip = 975;
                                continue _fun94489;
                            case 924:
                                var2 = _closure3_slot0;
                                var1 = var2._handleReconnect;
                                var1 = var1.bind(var2)();
                                _fun94489_ip = 975;
                                continue _fun94489;
                            case 945:
                                var2 = _closure3_slot0;
                                var1 = var2._clearHelloTimeout;
                                var1 = var1.bind(var2)();
                                var1 = var2._handleHello;
                                var1 = var1.bind(var2)(var3);
                            case 975:
                                var2 = _closure3_slot0;
                                var1 = var2._sendHeartbeatIfDue;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var3 = var6.bind(var2)(var5, var4, var3);
                    var1.onMessage = var3;
                    var3 = function() {
                        var5 = _closure3_slot0;
                        var1 = var5.setResumeUrl;
                        var0 = null;
                        var0 = var1.bind(var5)(var0);
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var0 = 25;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.flushDNSCache;
                        var1 = var1.bind(var2)();
                        var4 = var5._handleClose;
                        var3 = false;
                        var2 = 0;
                        var1 = 'An error with the websocket occurred';
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var0;
                    };
                    var1.onError = var3;
                    var3 = function arg0() {
                        var0 = arg0;
                        var4 = var0.wasClean;
                        var3 = var0.code;
                        var2 = var0.reason;
                        var1 = _closure3_slot0;
                        var0 = var1._handleClose;
                        var0 = var0.bind(var1)(var4, var3, var2);
                        return var0;
                    };
                    var1.onClose = var3;
                    var0 = function arg0() {
                        _fun94484: for (var _fun94484_ip = 0;;) switch (_fun94484_ip) {
                            case 0:
                                var0 = arg0;
                                var14 = var0.gatewayURL;
                                var12 = var0.newCallback;
                                var10 = var0.onOpen;
                                var _closure4_slot0 = var10;
                                var4 = var0.onMessage;
                                var2 = var0.onError;
                                var3 = var0.onClose;
                                var6 = _closure1_slot14;
                                var1 = var6.enableNativeLogger;
                                var0 = true;
                                var0 = var1.bind(var6)(var0);
                                var16 = global;
                                var0 = var16.window;
                                var20 = var0._ws;
                                var15 = false;
                                var _closure4_slot1 = var15;
                                var6 = null;
                                var _closure4_slot2 = var6;
                                var0 = var16.window;
                                var0._ws = var6;
                                var17 = var6 != var20;
                                var0 = undefined;
                                var1 = undefined;
                                var11 = false;
                                var9 = false;
                                var7 = null;
                                var8 = null;
                                if (!var17) {
                                    _fun94484_ip = 410;
                                    continue _fun94484
                                }
                            case 125:
                                var18 = var20.ws;
                                var17 = var20.state;
                                var17 = var17.gateway;
                                if (!(var17 === var14)) {
                                    _fun94484_ip = 327;
                                    continue _fun94484
                                }
                            case 149:
                                var17 = {};
                                var26 = var20.state;
                                var27 = var17;
                                var19 = copyDataProperties(var27, var26);
                                var19 = var17.messages;
                                if (!(var6 != var19)) {
                                    _fun94484_ip = 202;
                                    continue _fun94484
                                }
                            case 173:
                                var22 = var17.messages;
                                var21 = var22.map;
                                var19 = function(arg0) { // Environment: var5
                                    _fun94485: for (var _fun94485_ip = 0;;) switch (_fun94485_ip) {
                                        case 0:
                                            var2 = arg0;
                                            var3 = var2.data;
                                            var1 = null;
                                            var0 = var2;
                                            if (!(var1 != var3)) {
                                                _fun94485_ip = 82;
                                                continue _fun94485
                                            }
                                        case 17:
                                            var1 = var2.data;
                                            var3 = 'string';
                                            var1 = typeof var1;
                                            var0 = var2;
                                            if (!(var3 === var1)) {
                                                _fun94485_ip = 82;
                                                continue _fun94485
                                            }
                                        case 36:
                                            var1 = {};
                                            var7 = var1;
                                            var6 = var2;
                                            var3 = copyDataProperties(var7, var6);
                                            var5 = var2.data;
                                            var4 = var5.substring;
                                            var3 = 0;
                                            var2 = 100;
                                            var3 = var4.bind(var5)(var3, var2);
                                            var2 = 'data';
                                            var1[var2] = var3;
                                            var0 = var1;
                                        case 82:
                                            return var0;
                                    }
                                };
                                var19 = var21.bind(var22)(var19);
                                var17.messages = var19;
                            case 202:
                                var22 = _closure1_slot14;
                                var21 = var22.log;
                                var19 = {};
                                var27 = var19;
                                var26 = var17;
                                var23 = copyDataProperties(var27, var26);
                                var17 = var17.messages;
                                var24 = var6 == var17;
                                var23 = undefined;
                                if (var24) {
                                    _fun94484_ip = 243;
                                    continue _fun94484
                                }
                            case 238:
                                var23 = var17.length;
                            case 243:
                                var17 = 'messages';
                                var19[var17] = var23;
                                var17 = '[FAST CONNECT] successfully took over websocket, state:';
                                var17 = var21.bind(var22)(var17, var19);
                                var17 = var20.state;
                                var11 = var17.open;
                                var17 = var20.state;
                                var21 = var17.identify;
                                _closure4_slot1 = var21;
                                var17 = var20.state;
                                var7 = var17.messages;
                                var17 = var20.state;
                                var17 = var17.clientState;
                                _closure4_slot2 = var17;
                                var1 = var18;
                                var9 = var21;
                                var8 = var17;
                                _fun94484_ip = 410;
                                continue _fun94484;
                            case 327:
                                var19 = _closure1_slot14;
                                var17 = var19.verbose;
                                var20 = var20.state;
                                var22 = var20.gateway;
                                var16 = var16.HermesInternal;
                                var21 = var16.concat;
                                var20 = '[FAST CONNECT] gatewayURL mismatch: ';
                                var16 = ' !== ';
                                var16 = var21.bind(var20)(var22, var16, var14);
                                var16 = var17.bind(var19)(var16);
                                var17 = var18.close;
                                var16 = 1000;
                                var16 = var17.bind(var18)(var16);
                                var1 = null;
                                var11 = false;
                                var9 = false;
                                var7 = null;
                                var8 = null;
                            case 410:
                                if (!(var6 == var1)) {
                                    _fun94484_ip = 452;
                                    continue _fun94484
                                }
                            case 414:
                                var15 = _closure1_slot1;
                                var16 = _closure1_slot3;
                                var13 = 16;
                                var13 = var16[var13];
                                var13 = var15.bind(var0)(var13);
                                var13 = var13.bind(var0)(var14);
                                var14 = 'arraybuffer';
                                var13.binaryType = var14;
                                var1 = var13;
                            case 452:
                                var12 = var12.bind(var0)(var1);
                                if (!var11) {
                                    _fun94484_ip = 466;
                                    continue _fun94484
                                }
                            case 460:
                                var8 = var10.bind(var0)(var9, var8);
                            case 466:
                                if (!(var6 != var7)) {
                                    _fun94484_ip = 480;
                                    continue _fun94484
                                }
                            case 470:
                                var6 = var7.forEach;
                                var6 = var6.bind(var7)(var4);
                            case 480:
                                var5 = function() { // Environment: var5
                                    var3 = _closure4_slot0;
                                    var2 = _closure4_slot1;
                                    var1 = _closure4_slot2;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var2, var1);
                                    return var0;
                                };
                                var1.onopen = var5;
                                var1.onmessage = var4;
                                var1.onclose = var3;
                                var1.onerror = var2;
                                return var0;
                        }
                    };
                    var0 = var0.bind(var2)(var1);
                case 714:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[5] = var4;
        var4 = {};
        var7 = '_handleHello';
        var4.key = var7;
        var7 = function arg0() {
            var7 = arg0;
            var2 = this;
            var11 = var7.heartbeat_interval;
            var2.heartbeatInterval = var11;
            var1 = global;
            var3 = var1.Date;
            var0 = var3.now;
            var3 = var0.bind(var3)();
            var0 = var2.connectionStartTime;
            var13 = var3 - var0;
            var4 = _closure1_slot14;
            var3 = var4.verbose;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var0 = 26;
            var5 = var5[var0];
            var0 = undefined;
            var6 = var6.bind(var0)(var5);
            var5 = var6.getConnectionPath;
            var17 = var5.bind(var6)(var7);
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var18 = '[HELLO] via ';
            var16 = ', heartbeat interval: ';
            var14 = ', took ';
            var12 = ' ms';
            var15 = var11;
            var1 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
            var1 = var3.bind(var4)(var1);
            var1 = var2._startHeartbeater;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var7;
        var0[6] = var4;
        var4 = {};
        var7 = '_handleReconnect';
        var4.key = var7;
        var7 = function() {
            var3 = this;
            var4 = _closure1_slot14;
            var2 = var4.verbose;
            var1 = '[RECONNECT] gateway requested I reconnect.';
            var1 = var2.bind(var4)(var1);
            var2 = var3._cleanup;
            var1 = function(arg0) { // Environment: var1
                var2 = arg0;
                var1 = var2.close;
                var0 = 4000;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 20;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.WILL_RECONNECT;
            var3.connectionState = var1;
            var2 = var3._connect;
            var1 = 'reconnect';
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var7;
        var0[7] = var4;
        var4 = {};
        var7 = '_handleInvalidSession';
        var4.key = var7;
        var7 = function arg0() {
            _fun94495: for (var _fun94495_ip = 0;;) switch (_fun94495_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var4 = _closure1_slot14;
                    var3 = var4.info;
                    var5 = '';
                    if (!var0) {
                        _fun94495_ip = 32;
                        continue _fun94495
                    }
                case 26:
                    var5 = ' can resume)';
                case 32:
                    var2 = '[INVALID_SESSION]';
                    var2 = var2 + var5;
                    var2 = var3.bind(var4)(var2);
                    if (var0) {
                        _fun94495_ip = 62;
                        continue _fun94495
                    }
                case 50:
                    var0 = var1._doIdentify;
                    var0 = var0.bind(var1)();
                    _fun94495_ip = 72;
                    continue _fun94495;
                case 62:
                    var0 = var1._doResumeOrIdentify;
                    var0 = var0.bind(var1)();
                case 72:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[8] = var4;
        var4 = {};
        var7 = '_handleDispatch';
        var4.key = var7;
        var7 = function arg0, arg1, arg2() {
            _fun94496: for (var _fun94496_ip = 0;;) switch (_fun94496_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = global;
                    var5 = var1.Date;
                    var2 = var5.now;
                    var5 = var2.bind(var5)();
                    var2 = var0.connectionStartTime;
                    var14 = var5 - var2;
                    var2 = 'READY';
                    if (!(var2 !== var3)) {
                        _fun94496_ip = 284;
                        continue _fun94496
                    }
                case 47:
                    var2 = 'READY_SUPPLEMENTAL';
                    if (!(var2 !== var3)) {
                        _fun94496_ip = 176;
                        continue _fun94496
                    }
                case 57:
                    var2 = 'RESUMED';
                    if (!(var2 === var3)) {
                        _fun94496_ip = 502;
                        continue _fun94496
                    }
                case 68:
                    var9 = _closure1_slot14;
                    var8 = var9.verbose;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var5 = 26;
                    var5 = var7[var5];
                    var6 = undefined;
                    var10 = var10.bind(var6)(var5);
                    var5 = var10.getConnectionPath;
                    var5 = var5.bind(var10)(var4);
                    var5 = var8.bind(var9)(var5);
                    var5 = _closure1_slot1;
                    var2 = 20;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.SESSION_ESTABLISHED;
                    var0.connectionState = var2;
                    var5 = var0.gatewayBackoff;
                    var2 = var5.succeed;
                    var2 = var2.bind(var5)();
                    var2 = 0;
                    var0.iosGoingAwayEventCount = var2;
                    _fun94496_ip = 502;
                    continue _fun94496;
                case 176:
                    var7 = _closure1_slot14;
                    var6 = var7.info;
                    var5 = var1.HermesInternal;
                    var9 = var5.concat;
                    var8 = '[READY_SUPPLEMENTAL] took ';
                    var5 = 'ms';
                    var5 = var9.bind(var8)(var14, var5);
                    var5 = var6.bind(var7)(var5);
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 20;
                    var5 = var5[var2];
                    var2 = undefined;
                    var2 = var6.bind(var2)(var5);
                    var2 = var2.SESSION_ESTABLISHED;
                    var0.connectionState = var2;
                    var5 = var0.gatewayBackoff;
                    var2 = var5.succeed;
                    var2 = var2.bind(var5)();
                    var2 = 0;
                    var0.iosGoingAwayEventCount = var2;
                    _fun94496_ip = 502;
                    continue _fun94496;
                case 284:
                    var13 = var4.session_id;
                    var0.sessionId = var13;
                    var8 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 26;
                    var2 = var6[var2];
                    var5 = undefined;
                    var8 = var8.bind(var5)(var2);
                    var2 = var8.getConnectionPath;
                    var10 = var2.bind(var8)(var4);
                    var2 = _closure1_slot1;
                    var8 = 23;
                    var8 = var6[var8];
                    var9 = var2.bind(var5)(var8);
                    var8 = var9.setServerTrace;
                    var8 = var8.bind(var9)(var10);
                    var8 = _closure1_slot14;
                    var9 = var8.info;
                    var7 = var1.HermesInternal;
                    var12 = var7.concat;
                    var11 = '[READY] took ';
                    var7 = 'ms, as ';
                    var7 = var12.bind(var11)(var14, var7, var13);
                    var7 = var9.bind(var8)(var7);
                    var7 = var8.verbose;
                    var1 = var1.HermesInternal;
                    var9 = var1.concat;
                    var1 = '';
                    var1 = var9.bind(var1)(var10);
                    var1 = var7.bind(var8)(var1);
                    var1 = 20;
                    var1 = var6[var1];
                    var1 = var2.bind(var5)(var1);
                    var1 = var1.SESSION_ESTABLISHED;
                    var0.connectionState = var1;
                    var2 = var0.gatewayBackoff;
                    var1 = var2.succeed;
                    var1 = var1.bind(var2)();
                    var1 = 0;
                    var0.iosGoingAwayEventCount = var1;
                    var2 = var0.setResumeUrl;
                    var1 = var4.resume_gateway_url;
                    var1 = var2.bind(var0)(var1);
                case 502:
                    var2 = var0.dispatcher;
                    var1 = var2.receiveDispatch;
                    var0 = arg2;
                    var0 = var1.bind(var2)(var4, var3, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[9] = var4;
        var4 = {};
        var7 = 'handleResumeDispatched';
        var4.key = var7;
        var7 = function() {
            var3 = this;
            var0 = global;
            var2 = var0.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = var3.connectionStartTime;
            var13 = var2 - var1;
            var2 = _closure1_slot14;
            var1 = var2.info;
            var4 = var3.dispatcher;
            var4 = var4.resumeAnalytics;
            var11 = var4.numEvents;
            var9 = var3.seq;
            var0 = var0.HermesInternal;
            var5 = var0.concat;
            var14 = '[RESUMED] took ';
            var12 = 'ms, replayed ';
            var10 = ' events, new seq: ';
            var0 = var14[var5](var13, var12, var11, var10, var9, var8);
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[10] = var4;
        var4 = {};
        var7 = 'handleReadyDispatched';
        var4.key = var7;
        var7 = function() {
            var1 = this;
            var0 = false;
            var1.didForceClearGuildHashes = var0;
            var0 = true;
            var1.hasConnectedOnce = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[11] = var4;
        var4 = {};
        var7 = '_getGatewayUrl';
        var4.key = var7;
        var7 = function() {
            _fun94499: for (var _fun94499_ip = 0;;) switch (_fun94499_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.resumeUrl;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun94499_ip = 24;
                        continue _fun94499
                    }
                case 15:
                    var0 = _closure1_slot19;
                    _fun94499_ip = 30;
                    continue _fun94499;
                case 24:
                    var0 = var1.resumeUrl;
                case 30:
                    return var0;
            }
        };
        var4.value = var7;
        var0[12] = var4;
        var4 = {};
        var7 = '_handleHeartbeatReceive';
        var4.key = var7;
        var7 = function() {
            _fun94500: for (var _fun94500_ip = 0;;) switch (_fun94500_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._sendHeartbeat;
                    var0 = var0.bind(var1)();
                    var0 = var1.heartbeater;
                    var3 = null;
                    var0 = var3 != var0;
                    if (!var0) {
                        _fun94500_ip = 38;
                        continue _fun94500
                    }
                case 28:
                    var2 = var1.heartbeatInterval;
                    var0 = var3 != var2;
                case 38:
                    if (!var0) {
                        _fun94500_ip = 102;
                        continue _fun94500
                    }
                case 41:
                    var0 = global;
                    var3 = var0.clearInterval;
                    var2 = var1.heartbeater;
                    var4 = undefined;
                    var2 = var3.bind(var4)(var2);
                    var3 = var0.setInterval;
                    var2 = var1._doHeartbeatInterval;
                    var0 = var2.bind;
                    var2 = var0.bind(var2)(var1);
                    var0 = var1.heartbeatInterval;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.heartbeater = var0;
                case 102:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[13] = var4;
        var4 = {};
        var7 = '_handleHeartbeatAck';
        var4.key = var7;
        var7 = function() {
            _fun94501: for (var _fun94501_ip = 0;;) switch (_fun94501_ip) {
                case 0:
                    var1 = this;
                    var2 = global;
                    var3 = var2.Date;
                    var0 = var3.now;
                    var0 = var0.bind(var3)();
                    var1.lastHeartbeatAckTime = var0;
                    var0 = true;
                    var1.heartbeatAck = var0;
                    var3 = var1.expeditedHeartbeatTimeout;
                    var0 = null;
                    if (!(var0 !== var3)) {
                        _fun94501_ip = 95;
                        continue _fun94501
                    }
                case 46:
                    var4 = var2.clearTimeout;
                    var3 = var1.expeditedHeartbeatTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.expeditedHeartbeatTimeout = var0;
                    var2 = _closure1_slot14;
                    var1 = var2.verbose;
                    var0 = 'Expedited heartbeat succeeded';
                    var0 = var1.bind(var2)(var0);
                case 95:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[14] = var4;
        var4 = {};
        var7 = '_handleHeartbeatTimeout';
        var4.key = var7;
        var7 = function() {
            var3 = this;
            var _closure3_slot0 = var3;
            var1 = var3._cleanup;
            var0 = function(arg0) { // Environment: var2
                var2 = arg0;
                var1 = var2.close;
                var0 = 4000;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var3)(var0);
            var5 = _closure1_slot1;
            var4 = _closure1_slot3;
            var0 = 20;
            var4 = var4[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var4 = var4.WILL_RECONNECT;
            var3.connectionState = var4;
            var4 = var3.gatewayBackoff;
            var3 = var4.fail;
            var2 = function() { // Environment: var2
                var2 = _closure3_slot0;
                var1 = var2._connect;
                var0 = '_handleHeartbeatTimeout';
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var4 = var3.bind(var4)(var2);
            var3 = _closure1_slot14;
            var2 = var3.warn;
            var1 = 1000;
            var5 = var4 / var1;
            var4 = var5.toFixed;
            var1 = 2;
            var6 = var4.bind(var5)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var4 = '[ACK TIMEOUT] reconnecting in ';
            var1 = ' seconds.';
            var1 = var5.bind(var4)(var6, var1);
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var7;
        var0[15] = var4;
        var4 = {};
        var7 = '_handleClose';
        var4.key = var7;
        var7 = function arg0, arg1, arg2() {
            _fun94505: for (var _fun94505_ip = 0;;) switch (_fun94505_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var2 = arg2;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var _closure3_slot1 = var2;
                    if (var4) {
                        _fun94505_ip = 27;
                        continue _fun94505
                    }
                case 25:
                    var4 = false;
                case 27:
                    var0 = var1._cleanup;
                    var0 = var0.bind(var1)();
                    var7 = var1.emit;
                    var5 = {};
                    var5.code = var3;
                    var5.reason = var2;
                    var0 = 'close';
                    var0 = var7.bind(var1)(var0, var5);
                    var0 = 4004;
                    if (!(var3 !== var0)) {
                        _fun94505_ip = 393;
                        continue _fun94505
                    }
                case 77:
                    var0 = var1._tryDetectInvalidIOSToken;
                    var0 = var0.bind(var1)(var3, var2, var4);
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var0 = 20;
                    var7 = var7[var0];
                    var0 = undefined;
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.WILL_RECONNECT;
                    var1.connectionState = var7;
                    var7 = var1.nextReconnectIsImmediate;
                    if (var7) {
                        _fun94505_ip = 303;
                        continue _fun94505
                    }
                case 141:
                    var8 = var1.gatewayBackoff;
                    var7 = var8.fail;
                    var6 = function() { // Environment: var6
                        var2 = _closure3_slot0;
                        var1 = var2._connect;
                        var4 = _closure3_slot1;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var0 = '_handleClose:';
                        var0 = var3.bind(var0)(var4);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var9 = var7.bind(var8)(var6);
                    var8 = _closure1_slot14;
                    var7 = var8.info;
                    var6 = var4.toString;
                    var14 = var6.bind(var4)();
                    var6 = 1000;
                    var10 = var9 / var6;
                    var9 = var10.toFixed;
                    var6 = 2;
                    var16 = var9.bind(var10)(var6);
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var12 = var6.concat;
                    var23 = '[WS CLOSED] (';
                    var10 = ', ';
                    var17 = ') retrying in ';
                    var15 = ' seconds.';
                    var22 = var14;
                    var21 = var10;
                    var20 = var3;
                    var19 = var10;
                    var18 = var2;
                    var6 = var23[var12](var22, var21, var20, var19, var18, var17, var16, var15, var14);
                    var6 = var7.bind(var8)(var6);
                    var6 = var1.gatewayBackoff;
                    var7 = var6.fails;
                    var6 = 4;
                    if (!(var7 > var6)) {
                        _fun94505_ip = 391;
                        continue _fun94505
                    }
                case 288:
                    var6 = var1._reset;
                    var6 = var6.bind(var1)(var4, var3, var2);
                    _fun94505_ip = 391;
                    continue _fun94505;
                case 303:
                    var7 = _closure1_slot14;
                    var6 = var7.info;
                    var5 = var4.toString;
                    var22 = var5.bind(var4)();
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var10 = var5.concat;
                    var23 = '[WS CLOSED] (';
                    var8 = ', ';
                    var17 = ') retrying immediately.';
                    var21 = var8;
                    var20 = var3;
                    var19 = var8;
                    var18 = var2;
                    var5 = var23[var10](var22, var21, var20, var19, var18, var17, var16);
                    var5 = var6.bind(var7)(var5);
                    var6 = var1._connect;
                    var5 = '_handleCloseImmediateReconnect';
                    var5 = var6.bind(var1)(var5);
                case 391:
                    return var0;
                case 393:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var5 = 20;
                    var6 = var6[var5];
                    var5 = undefined;
                    var5 = var7.bind(var5)(var6);
                    var5 = var5.CLOSED;
                    var1.connectionState = var5;
                    var6 = _closure1_slot14;
                    var5 = var6.warn;
                    var0 = '[WS CLOSED] because of authentication failure, marking as closed.';
                    var0 = var5.bind(var6)(var0);
                    var0 = var1._reset;
                    var0 = var0.bind(var1)(var4, var3, var2);
                    return var0;
            }
        };
        var4.value = var7;
        var0[16] = var4;
        var4 = {};
        var7 = '_tryDetectInvalidIOSToken';
        var4.key = var7;
        var7 = function arg0, arg1, arg2() {
            _fun94507: for (var _fun94507_ip = 0;;) switch (_fun94507_ip) {
                case 0:
                    var6 = this;
                    var _closure3_slot0 = var6;
                    var0 = arg2;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var0 = 27;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.isIOS;
                    var2 = var2.bind(var3)();
                    if (!var2) {
                        _fun94507_ip = 66;
                        continue _fun94507
                    }
                case 54:
                    var4 = var6.token;
                    var3 = null;
                    var2 = var3 != var4;
                case 66:
                    if (!var2) {
                        _fun94507_ip = 82;
                        continue _fun94507
                    }
                case 69:
                    var4 = 1001;
                    var3 = arg0;
                    var2 = var4 === var3;
                case 82:
                    if (!var2) {
                        _fun94507_ip = 98;
                        continue _fun94507
                    }
                case 85:
                    var4 = 'Stream end encountered';
                    var3 = arg1;
                    var2 = var4 === var3;
                case 98:
                    if (!var2) {
                        _fun94507_ip = 236;
                        continue _fun94507
                    }
                case 104:
                    var3 = var6.iosGoingAwayEventCount;
                    var2 = 1;
                    var2 = var3 + var2;
                    var6.iosGoingAwayEventCount = var2;
                    var3 = var6.iosGoingAwayEventCount;
                    var2 = 3;
                    if (!(var2 === var3)) {
                        _fun94507_ip = 236;
                        continue _fun94507
                    }
                case 136:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 28;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var5 = _closure1_slot13;
                    var5 = var5.ME;
                    var2.url = var5;
                    var5 = {};
                    var6 = var6.token;
                    var5.authorization = var6;
                    var2.headers = var5;
                    var5 = false;
                    var2.rejectWithError = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.then;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var5 = var0.status;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var0 = 15;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.track;
                        var1 = _closure1_slot12;
                        var2 = var1.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED;
                        var1 = {};
                        var1.api_status_code = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1 = function(arg0) { // Environment: var1
                        _fun94509: for (var _fun94509_ip = 0;;) switch (_fun94509_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.status;
                                var0 = 401;
                                if (!(var0 === var5)) {
                                    _fun94509_ip = 111;
                                    continue _fun94509
                                }
                            case 18:
                                var4 = _closure3_slot0;
                                var6 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var2 = 20;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var6.bind(var2)(var3);
                                var2 = var2.CLOSED;
                                var4.connectionState = var2;
                                var3 = _closure1_slot14;
                                var2 = var3.warn;
                                var1 = '[WS CLOSED] because of manual authentication failure, marking as closed.';
                                var1 = var2.bind(var3)(var1);
                                var3 = var4._reset;
                                var2 = _closure3_slot1;
                                var1 = 4004;
                                var0 = 'invalid token manually detected';
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 111:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var0 = 15;
                                var2 = var2[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.track;
                                var1 = _closure1_slot12;
                                var2 = var1.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED;
                                var1 = {};
                                var1.api_status_code = var5;
                                var1 = var3.bind(var4)(var2, var1);
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                case 236:
                    return var0;
            }
        };
        var4.value = var7;
        var0[17] = var4;
        var4 = {};
        var7 = '_reset';
        var4.key = var7;
        var7 = function arg0, arg1, arg2() {
            var5 = arg0;
            var4 = arg1;
            var0 = arg2;
            var3 = this;
            var1 = null;
            var3.sessionId = var1;
            var1 = 0;
            var3.seq = var1;
            var6 = _closure1_slot14;
            var2 = var6.warn;
            var1 = var5.toString;
            var16 = var1.bind(var5)();
            var1 = global;
            var1 = var1.HermesInternal;
            var9 = var1.concat;
            var17 = '[RESET] (';
            var7 = ', ';
            var11 = ')';
            var15 = var7;
            var14 = var4;
            var13 = var7;
            var12 = var0;
            var1 = var17[var9](var16, var15, var14, var13, var12, var11, var10);
            var1 = var2.bind(var6)(var1);
            var2 = var3.emit;
            var1 = {};
            var1.wasClean = var5;
            var1.code = var4;
            var1.reason = var0;
            var0 = 'disconnect';
            var0 = var2.bind(var3)(var0, var1);
            var0 = undefined;
            return var0;
        };
        var4.value = var7;
        var0[18] = var4;
        var4 = {};
        var7 = '_sendHeartbeatIfDue';
        var4.key = var7;
        var7 = function() {
            _fun94511: for (var _fun94511_ip = 0;;) switch (_fun94511_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.heartbeatInterval;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun94511_ip = 92;
                        continue _fun94511
                    }
                case 15:
                    var2 = var1.heartbeater;
                    if (!(var0 != var2)) {
                        _fun94511_ip = 92;
                        continue _fun94511
                    }
                case 25:
                    var3 = var1.lastHeartbeatTime;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun94511_ip = 79;
                        continue _fun94511
                    }
                case 38:
                    var2 = global;
                    var4 = var2.Date;
                    var2 = var4.now;
                    var2 = var2.bind(var4)();
                    var3 = var2 - var3;
                    var4 = var1.heartbeatInterval;
                    var2 = 5000;
                    var2 = var4 + var2;
                    var0 = var3 > var2;
                case 79:
                    if (!var0) {
                        _fun94511_ip = 92;
                        continue _fun94511
                    }
                case 82:
                    var0 = var1._sendHeartbeat;
                    var0 = var0.bind(var1)();
                case 92:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[19] = var4;
        var4 = {};
        var7 = '_doHeartbeatInterval';
        var4.key = var7;
        var7 = function() {
            _fun94512: for (var _fun94512_ip = 0;;) switch (_fun94512_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.heartbeatAck;
                    if (var0) {
                        _fun94512_ip = 36;
                        continue _fun94512
                    }
                case 12:
                    var2 = var1.expeditedHeartbeatTimeout;
                    var0 = null;
                    if (!(var0 === var2)) {
                        _fun94512_ip = 54;
                        continue _fun94512
                    }
                case 24:
                    var0 = var1._handleHeartbeatTimeout;
                    var0 = var0.bind(var1)();
                    _fun94512_ip = 54;
                    continue _fun94512;
                case 36:
                    var0 = false;
                    var1.heartbeatAck = var0;
                    var0 = var1._sendHeartbeat;
                    var0 = var0.bind(var1)();
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[20] = var4;
        var4 = {};
        var7 = '_startHeartbeater';
        var4.key = var7;
        var7 = function() {
            _fun94513: for (var _fun94513_ip = 0;;) switch (_fun94513_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var7 = var2.heartbeatInterval;
                    var _closure3_slot1 = var7;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 29;
                    var3 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var3 = null;
                    var5 = var3 != var7;
                    var4 = 'GatewaySocket: Heartbeat interval should never null here.';
                    var4 = var6.bind(var0)(var5, var4);
                    var4 = var2.initialHeartbeatTimeout;
                    if (!(var3 !== var4)) {
                        _fun94513_ip = 91;
                        continue _fun94513
                    }
                case 72:
                    var4 = global;
                    var5 = var4.clearTimeout;
                    var4 = var2.initialHeartbeatTimeout;
                    var4 = var5.bind(var0)(var4);
                case 91:
                    var4 = var2.heartbeater;
                    if (!(var3 !== var4)) {
                        _fun94513_ip = 126;
                        continue _fun94513
                    }
                case 101:
                    var4 = global;
                    var5 = var4.clearInterval;
                    var4 = var2.heartbeater;
                    var4 = var5.bind(var0)(var4);
                    var2.heartbeater = var3;
                case 126:
                    var3 = global;
                    var4 = var3.setTimeout;
                    var6 = var3.Math;
                    var5 = var6.floor;
                    var8 = var3.Math;
                    var3 = var8.random;
                    var3 = var3.bind(var8)();
                    var3 = var3 * var7;
                    var3 = var5.bind(var6)(var3);
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = null;
                        var2.initialHeartbeatTimeout = var1;
                        var1 = true;
                        var2.heartbeatAck = var1;
                        var1 = global;
                        var4 = var1.setInterval;
                        var3 = var2._doHeartbeatInterval;
                        var1 = var3.bind;
                        var3 = var1.bind(var3)(var2);
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var1 = var4.bind(var0)(var3, var1);
                        var2.heartbeater = var1;
                        var1 = var2._doHeartbeatInterval;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2.initialHeartbeatTimeout = var1;
                    return var0;
            }
        };
        var4.value = var7;
        var0[21] = var4;
        var4 = {};
        var7 = '_stopHeartbeater';
        var4.key = var7;
        var7 = function() {
            _fun94515: for (var _fun94515_ip = 0;;) switch (_fun94515_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.heartbeater;
                    var0 = null;
                    if (!(var0 !== var2)) {
                        _fun94515_ip = 42;
                        continue _fun94515
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearInterval;
                    var3 = var1.heartbeater;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.heartbeater = var0;
                case 42:
                    var2 = var1.initialHeartbeatTimeout;
                    if (!(var0 !== var2)) {
                        _fun94515_ip = 79;
                        continue _fun94515
                    }
                case 52:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.initialHeartbeatTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.initialHeartbeatTimeout = var0;
                case 79:
                    var2 = var1.expeditedHeartbeatTimeout;
                    if (!(var0 !== var2)) {
                        _fun94515_ip = 116;
                        continue _fun94515
                    }
                case 89:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.expeditedHeartbeatTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.expeditedHeartbeatTimeout = var0;
                case 116:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[22] = var4;
        var4 = {};
        var7 = '_clearHelloTimeout';
        var4.key = var7;
        var7 = function() {
            _fun94516: for (var _fun94516_ip = 0;;) switch (_fun94516_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.helloTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun94516_ip = 42;
                        continue _fun94516
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
        var4.value = var7;
        var0[23] = var4;
        var4 = {};
        var7 = '_cleanup';
        var4.key = var7;
        var7 = function arg0() {
            _fun94517: for (var _fun94517_ip = 0;;) switch (_fun94517_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var0 = 30;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var5 = var3.Emitter;
                    var3 = var5.resume;
                    var3 = var3.bind(var5)();
                    var3 = var2._stopHeartbeater;
                    var3 = var3.bind(var2)();
                    var3 = var2._clearHelloTimeout;
                    var3 = var3.bind(var2)();
                    var3 = var2.webSocket;
                    var5 = null;
                    var2.webSocket = var5;
                    if (!(var5 != var3)) {
                        _fun94517_ip = 124;
                        continue _fun94517
                    }
                case 87:
                    var6 = _closure1_slot22;
                    var3.onopen = var6;
                    var3.onmessage = var6;
                    var3.onerror = var6;
                    var3.onclose = var6;
                    if (!(var5 != var4)) {
                        _fun94517_ip = 124;
                        continue _fun94517
                    }
                case 119:
                    var3 = var4.bind(var0)(var3);
                case 124:
                    var4 = var2.gatewayBackoff;
                    var3 = var4.cancel;
                    var3 = var3.bind(var4)();
                    var4 = var2.compressionHandler;
                    var3 = var4.close;
                    var3 = var3.bind(var4)();
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 21;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.getCompressionHandler;
                    var1 = _closure1_slot15;
                    var1 = var3.bind(var4)(var1);
                    var2.compressionHandler = var1;
                    return var0;
            }
        };
        var4.value = var7;
        var0[24] = var4;
        var4 = {};
        var7 = '_doResume';
        var4.key = var7;
        var7 = function() {
            _fun94518: for (var _fun94518_ip = 0;;) switch (_fun94518_ip) {
                case 0:
                    var5 = this;
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var0 = 20;
                    var2 = var6[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.RESUMING;
                    var5.connectionState = var2;
                    var4 = var5.dispatcher;
                    var3 = _closure1_slot0;
                    var2 = 26;
                    var2 = var6[var2];
                    var7 = var3.bind(var0)(var2);
                    var6 = var7.createResumeAnalytics;
                    var2 = global;
                    var8 = var2.Date;
                    var3 = var8.now;
                    var8 = var3.bind(var8)();
                    var3 = var5.connectionStartTime;
                    var3 = var8 - var3;
                    var3 = var6.bind(var7)(var3);
                    var4.resumeAnalytics = var3;
                    var4 = _closure1_slot14;
                    var3 = var4.info;
                    var6 = var5.sessionId;
                    var7 = null;
                    var7 = var7 != var6;
                    var9 = '';
                    if (!var7) {
                        _fun94518_ip = 138;
                        continue _fun94518
                    }
                case 135:
                    var9 = var6;
                case 138:
                    var8 = var5.seq;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var6 = '[RESUME] resuming session ';
                    var2 = ', seq: ';
                    var2 = var7.bind(var6)(var9, var2, var8);
                    var2 = var3.bind(var4)(var2);
                    var4 = var5.send;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 22;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.Opcode;
                    var3 = var1.RESUME;
                    var2 = {};
                    var1 = var5.token;
                    var2.token = var1;
                    var1 = var5.sessionId;
                    var2.session_id = var1;
                    var1 = var5.seq;
                    var2.seq = var1;
                    var1 = false;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
            }
        };
        var4.value = var7;
        var0[25] = var4;
        var4 = {};
        var7 = '_doIdentify';
        var4.key = var7;
        var7 = _closure1_slot5;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun94520: for (var _fun94520_ip = 0;;) switch (_fun94520_ip) {
                    case 0:
                        StartGenerator();
                        var9 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun94520_ip = 910;
                            continue _fun94520
                        }
                    case 13:
                        var4 = 0;
                        var9.seq = var4;
                        var1 = null;
                        var9.sessionId = var1;
                        var2 = var9.handleIdentify;
                        var6 = var2.bind(var9)();
                        if (!(var1 === var6)) {
                            _fun94520_ip = 75;
                            continue _fun94520
                        }
                    case 43:
                        var5 = var9._handleClose;
                        var3 = true;
                        var2 = 4004;
                        var1 = 'No connection info provided';
                        var1 = var5.bind(var9)(var3, var2, var1);
                        _fun94520_ip = 902;
                        continue _fun94520;
                    case 75:
                        var7 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var13 = 20;
                        var3 = var1[var13];
                        var5 = undefined;
                        var3 = var7.bind(var5)(var3);
                        var3 = var3.IDENTIFYING;
                        var9.connectionState = var3;
                        var3 = global;
                        var8 = var3.Date;
                        var7 = var8.now;
                        var8 = var7.bind(var8)();
                        var9.identifyStartTime = var8;
                        var10 = var3.Promise;
                        var7 = var10.all;
                        var11 = _closure1_slot0;
                        var14 = 31;
                        var1 = var1[var14];
                        var11 = var11.bind(var5)(var1);
                        var1 = var11.isCacheEnabled;
                        var1 = var1.bind(var11)();
                        if (var1) {
                            _fun94520_ip = 180;
                            continue _fun94520
                        }
                    case 176:
                        var11 = {};
                        _fun94520_ip = 210;
                        continue _fun94520;
                    case 180:
                        var12 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var1 = 32;
                        var1 = var15[var1];
                        var12 = var12.bind(var5)(var1);
                        var1 = var12.getCommittedVersions;
                        var11 = var1.bind(var12)();
                    case 210:
                        var1 = new Array(3);
                        var1[0] = var11;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var11 = var11[var14];
                        var12 = var12.bind(var5)(var11);
                        var11 = var12.isCacheEnabled;
                        var11 = var11.bind(var12)();
                        if (var11) {
                            _fun94520_ip = 252;
                            continue _fun94520
                        }
                    case 248:
                        var11 = {};
                        _fun94520_ip = 282;
                        continue _fun94520;
                    case 252:
                        var15 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var12 = 33;
                        var12 = var16[var12];
                        var15 = var15.bind(var5)(var12);
                        var12 = var15.getCommittedVersions;
                        var11 = var12.bind(var15)();
                    case 282:
                        var1[1] = var11;
                        var12 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var11 = var11[var14];
                        var12 = var12.bind(var5)(var11);
                        var11 = var12.isCacheEnabled;
                        var11 = var11.bind(var12)();
                        var12 = !var11;
                        var11 = !var12;
                        if (var12) {
                            _fun94520_ip = 352;
                            continue _fun94520
                        }
                    case 322:
                        var14 = _closure1_slot1;
                        var15 = _closure1_slot3;
                        var12 = 34;
                        var12 = var15[var12];
                        var14 = var14.bind(var5)(var12);
                        var12 = var14.canUseGuildVersions;
                        var11 = var12.bind(var14)();
                    case 352:
                        var1[2] = var11;
                        var1 = var7.bind(var10)(var1);
                        SaveGenerator(address = 365);
                    case 363:
                        return var1;
                    case 365:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun94520_ip = 907;
                            continue _fun94520
                        }
                    case 374:
                        var10 = _closure1_slot4;
                        var7 = 3;
                        var10 = var10.bind(var5)(var1, var7);
                        var12 = var10[var4];
                        var7 = 1;
                        var11 = var10[var7];
                        var4 = 2;
                        var4 = var10[var4];
                        if (var4) {
                            _fun94520_ip = 419;
                            continue _fun94520
                        }
                    case 408:
                        var10 = {};
                        var4 = {};
                        var10.guild_versions = var4;
                        _fun94520_ip = 506;
                        continue _fun94520;
                    case 419:
                        var4 = {};
                        var4.guild_versions = var12;
                        var12 = var11.highest_last_message_id;
                        var4.highest_last_message_id = var12;
                        var12 = var11.read_state_version;
                        var4.read_state_version = var12;
                        var12 = var11.user_guild_settings_version;
                        var4.user_guild_settings_version = var12;
                        var12 = var11.user_settings_version;
                        var4.user_settings_version = var12;
                        var12 = var11.private_channels_version;
                        var4.private_channels_version = var12;
                        var12 = var11.api_code_version;
                        var4.api_code_version = var12;
                        var11 = var11.initial_guild_id;
                        var4.initial_guild_id = var11;
                        var10 = var4;
                    case 506:
                        var11 = var9.connectionState;
                        var12 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var4 = var4[var13];
                        var4 = var12.bind(var5)(var4);
                        var4 = var4.IDENTIFYING;
                        if (!(var11 === var4)) {
                            _fun94520_ip = 549;
                            continue _fun94520
                        }
                    case 539:
                        var4 = var9.identifyStartTime;
                        if (!(var4 !== var8)) {
                            _fun94520_ip = 574;
                            continue _fun94520
                        }
                    case 549:
                        var11 = _closure1_slot14;
                        var8 = var11.warn;
                        var4 = 'Skipping identify because connectionState or identifyStartTime has changed';
                        var4 = var8.bind(var11)(var4);
                        _fun94520_ip = 902;
                        continue _fun94520;
                    case 574:
                        var4 = var6.token;
                        var12 = var6.properties;
                        if (!(var5 === var12)) {
                            _fun94520_ip = 592;
                            continue _fun94520
                        }
                    case 590:
                        var12 = {};
                    case 592:
                        var11 = var6.presence;
                        var9.token = var4;
                        var13 = _closure1_slot14;
                        var8 = var13.verbose;
                        var6 = '[IDENTIFY]';
                        var6 = var8.bind(var13)(var6);
                        var8 = {};
                        var8.token = var4;
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var13 = 35;
                        var13 = var6[var13];
                        var15 = var4.bind(var5)(var13);
                        var14 = var15.getClientCapabilities;
                        var13 = {};
                        var16 = 36;
                        var16 = var6[var16];
                        var18 = var4.bind(var5)(var16);
                        var17 = var18.isChannelMetadataObfuscationEnabled;
                        var16 = 'GatewaySocket';
                        var16 = var17.bind(var18)(var16);
                        var13.useChannelObfuscation = var16;
                        var13 = var14.bind(var15)(var13);
                        var8.capabilities = var13;
                        var8.properties = var12;
                        var8.presence = var11;
                        var12 = var9.compressionHandler;
                        var11 = var12.usesLegacyCompression;
                        var11 = var11.bind(var12)();
                        var8.compress = var11;
                        var8.client_state = var10;
                        var10 = var3.JSON;
                        var3 = var10.stringify;
                        var11 = var3.bind(var10)(var8);
                        var3 = var11.length;
                        var9.identifyUncompressedByteSize = var3;
                        var10 = _closure1_slot2;
                        var3 = 37;
                        var3 = var6[var3];
                        var10 = var10.bind(var5)(var3);
                        var3 = var10.deflate;
                        var3 = var3.bind(var10)(var11);
                        var3 = var3.length;
                        var9.identifyCompressedByteSize = var3;
                        var3 = var9.identifyCount;
                        var3 = var3 + var7;
                        var9.identifyCount = var3;
                        var7 = var9.send;
                        var3 = 22;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var3 = var3.Opcode;
                        var4 = var3.IDENTIFY;
                        var3 = false;
                        var3 = var7.bind(var9)(var4, var8, var3);
                        var4 = _closure1_slot1;
                        var3 = 15;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot12;
                        var3 = var2.SESSION_START_CLIENT;
                        var2 = {};
                        var2 = var4.bind(var5)(var3, var2);
                    case 902:
                        var2 = undefined;
                        return var2;
                    case 907:
                        return var1;
                    case 910:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = '_doFastConnectIdentify';
        var4.key = var6;
        var6 = function() {
            _fun94522: for (var _fun94522_ip = 0;;) switch (_fun94522_ip) {
                case 0:
                    var1 = this;
                    var0 = 0;
                    var1.seq = var0;
                    var2 = null;
                    var1.sessionId = var2;
                    var0 = var1.handleIdentify;
                    var0 = var0.bind(var1)();
                    if (!(var2 === var0)) {
                        _fun94522_ip = 62;
                        continue _fun94522
                    }
                case 33:
                    var5 = var1._handleClose;
                    var4 = true;
                    var3 = 4004;
                    var2 = 'No connection info provided';
                    var2 = var5.bind(var1)(var4, var3, var2);
                    _fun94522_ip = 184;
                    continue _fun94522;
                case 62:
                    var0 = var0.token;
                    var1.token = var0;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.IDENTIFYING;
                    var1.connectionState = var2;
                    var2 = global;
                    var3 = var2.Date;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var1.identifyStartTime = var2;
                    var3 = var1.identifyCount;
                    var2 = 1;
                    var2 = var3 + var2;
                    var1.identifyCount = var2;
                    var3 = _closure1_slot14;
                    var2 = var3.verbose;
                    var0 = '[IDENTIFY, fast-connect]';
                    var0 = var2.bind(var3)(var0);
                    var0 = var1._updateLastHeartbeatAckTime;
                    var0 = var0.bind(var1)();
                case 184:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = '_doResumeOrIdentify';
        var4.key = var6;
        var6 = function() {
            _fun94523: for (var _fun94523_ip = 0;;) switch (_fun94523_ip) {
                case 0:
                    var1 = this;
                    var0 = global;
                    var2 = var0.Date;
                    var0 = var2.now;
                    var2 = var0.bind(var2)();
                    var0 = var1.sessionId;
                    var3 = null;
                    if (!(var3 !== var0)) {
                        _fun94523_ip = 63;
                        continue _fun94523
                    }
                case 32:
                    var0 = var1.lastHeartbeatAckTime;
                    if (!(var3 != var0)) {
                        _fun94523_ip = 75;
                        continue _fun94523
                    }
                case 42:
                    var0 = var1.lastHeartbeatAckTime;
                    var2 = var2 - var0;
                    var0 = _closure1_slot17;
                    if (!(!(var2 <= var0))) {
                        _fun94523_ip = 75;
                        continue _fun94523
                    }
                case 63:
                    var0 = var1._doIdentify;
                    var0 = var0.bind(var1)();
                    _fun94523_ip = 87;
                    continue _fun94523;
                case 75:
                    var0 = var1._doResume;
                    var0 = var0.bind(var1)();
                case 87:
                    var0 = var1._updateLastHeartbeatAckTime;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = '_updateLastHeartbeatAckTime';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var1 = var0.Date;
            var0 = var1.now;
            var1 = var0.bind(var1)();
            var0 = this;
            var0.lastHeartbeatAckTime = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = '_consumeQOSPayload';
        var4.key = var6;
        var6 = function() {
            _fun94525: for (var _fun94525_ip = 0;;) switch (_fun94525_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.heartbeatQOSState;
                    var0 = var0.currentPayload;
                    var4 = var1.heartbeatQOSState;
                    var2 = var1.heartbeatQOSState;
                    var3 = var2.upcomingState;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun94525_ip = 51;
                        continue _fun94525
                    }
                case 39:
                    var5 = var1.heartbeatQOSState;
                    var3 = var5.currentPayload;
                case 51:
                    var4.currentPayload = var3;
                    var1 = var1.heartbeatQOSState;
                    var1.upcomingState = var2;
                    return var0;
            }
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = '_sendHeartbeat';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var0 = var2._consumeQOSPayload;
            var1 = var0.bind(var2)();
            var5 = var2.send;
            var4 = _closure1_slot0;
            var3 = _closure1_slot3;
            var0 = 22;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var3 = var3.Opcode;
            var4 = var3.QOS_HEARTBEAT;
            var3 = {};
            var6 = var2.seq;
            var3.seq = var6;
            var3.qos = var1;
            var1 = false;
            var1 = var5.bind(var2)(var4, var3, var1);
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2.lastHeartbeatTime = var1;
            return var0;
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'getLogger';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'willReconnect';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.connectionState;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var0 = 20;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.WILL_RECONNECT;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[33] = var4;
        var4 = {};
        var6 = 'isClosed';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.connectionState;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var0 = 20;
            var2 = var2[var0];
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var0.CLOSED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[34] = var4;
        var4 = {};
        var6 = 'isSessionEstablished';
        var4.key = var6;
        var6 = function() {
            _fun94530: for (var _fun94530_ip = 0;;) switch (_fun94530_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.connectionState;
                    var6 = _closure1_slot1;
                    var0 = _closure1_slot3;
                    var5 = 20;
                    var0 = var0[var5];
                    var4 = undefined;
                    var0 = var6.bind(var4)(var0);
                    var0 = var0.SESSION_ESTABLISHED;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun94530_ip = 80;
                        continue _fun94530
                    }
                case 47:
                    var2 = var2.connectionState;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.RESUMING;
                    var0 = var2 === var1;
                case 80:
                    return var0;
            }
        };
        var4.value = var6;
        var0[35] = var4;
        var4 = {};
        var6 = 'isConnected';
        var4.key = var6;
        var6 = function() {
            _fun94531: for (var _fun94531_ip = 0;;) switch (_fun94531_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.connectionState;
                    var6 = _closure1_slot1;
                    var0 = _closure1_slot3;
                    var5 = 20;
                    var0 = var0[var5];
                    var4 = undefined;
                    var0 = var6.bind(var4)(var0);
                    var0 = var0.IDENTIFYING;
                    var0 = var3 === var0;
                    if (var0) {
                        _fun94531_ip = 80;
                        continue _fun94531
                    }
                case 47:
                    var6 = var2.connectionState;
                    var7 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var3 = var3[var5];
                    var3 = var7.bind(var4)(var3);
                    var3 = var3.RESUMING;
                    var0 = var6 === var3;
                case 80:
                    if (var0) {
                        _fun94531_ip = 116;
                        continue _fun94531
                    }
                case 83:
                    var2 = var2.connectionState;
                    var3 = _closure1_slot1;
                    var1 = _closure1_slot3;
                    var1 = var1[var5];
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.SESSION_ESTABLISHED;
                    var0 = var2 === var1;
                case 116:
                    return var0;
            }
        };
        var4.value = var6;
        var0[36] = var4;
        var4 = {};
        var6 = 'connect';
        var4.key = var6;
        var6 = function() {
            _fun94532: for (var _fun94532_ip = 0;;) switch (_fun94532_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.isClosed;
                    var0 = var0.bind(var3)();
                    var5 = _closure1_slot14;
                    if (var0) {
                        _fun94532_ip = 43;
                        continue _fun94532
                    }
                case 23:
                    var2 = var5.error;
                    var0 = 'Cannot start a new connection, connection state is not closed';
                    var0 = var2.bind(var5)(var0);
                    var0 = false;
                    _fun94532_ip = 111;
                    continue _fun94532;
                case 43:
                    var4 = var5.verbose;
                    var2 = '.connect() called, new state is WILL_RECONNECT';
                    var2 = var4.bind(var5)(var2);
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var1 = 20;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    var1 = var1.WILL_RECONNECT;
                    var3.connectionState = var1;
                    var2 = var3._connect;
                    var1 = 'connect';
                    var1 = var2.bind(var3)(var1);
                    var0 = true;
                case 111:
                    return var0;
            }
        };
        var4.value = var6;
        var0[37] = var4;
        var4 = {};
        var6 = 'resetSocketOnError';
        var4.key = var6;
        var6 = function arg0() {
            _fun94533: for (var _fun94533_ip = 0;;) switch (_fun94533_ip) {
                case 0:
                    var6 = arg0;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var10 = var6.action;
                    var15 = var6.error;
                    var5 = var6.metricAction;
                    var9 = _closure1_slot14;
                    var8 = var9.error;
                    var12 = var15.message;
                    var4 = global;
                    var0 = var4.HermesInternal;
                    var11 = var0.concat;
                    var7 = 'resetSocketOnError during ';
                    var0 = ': ';
                    var7 = var11.bind(var7)(var10, var0, var12);
                    var0 = var15.stack;
                    var0 = var8.bind(var9)(var7, var0);
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var0 = 38;
                    var7 = var13[var0];
                    var0 = undefined;
                    var8 = var12.bind(var0)(var7);
                    var7 = var8.usesClientMods;
                    var14 = var7.bind(var8)();
                    var8 = _closure1_slot1;
                    var7 = 39;
                    var7 = var13[var7];
                    var9 = var8.bind(var0)(var7);
                    var8 = var9.increment;
                    var7 = {};
                    var11 = 40;
                    var11 = var13[var11];
                    var11 = var12.bind(var0)(var11);
                    var11 = var11.MetricEvents;
                    var11 = var11.SOCKET_CRASHED;
                    var7.name = var11;
                    var11 = null;
                    var12 = var10;
                    if (!(var11 != var5)) {
                        _fun94533_ip = 185;
                        continue _fun94533
                    }
                case 182:
                    var12 = var5;
                case 185:
                    var5 = var4.HermesInternal;
                    var11 = var5.concat;
                    var5 = 'action:';
                    var11 = var11.bind(var5)(var12);
                    var5 = new Array(2);
                    var5[0] = var11;
                    var11 = var4.HermesInternal;
                    var12 = var11.concat;
                    var11 = 'modded_client:';
                    var11 = var12.bind(var11)(var14);
                    var5[1] = var11;
                    var7.tags = var5;
                    var5 = true;
                    var7 = var8.bind(var9)(var7, var5);
                    var8 = var6.sentry;
                    var7 = false;
                    if (!(var7 !== var8)) {
                        _fun94533_ip = 314;
                        continue _fun94533
                    }
                case 266:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 41;
                    var7 = var9[var7];
                    var9 = var8.bind(var0)(var7);
                    var8 = var9.captureException;
                    var7 = {};
                    var11 = {};
                    var11.socketCrashedAction = var10;
                    var7.tags = var11;
                    var7 = var8.bind(var9)(var15, var7);
                case 314:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 15;
                    var7 = var9[var7];
                    var13 = var8.bind(var0)(var7);
                    var12 = var13.track;
                    var7 = _closure1_slot12;
                    var11 = var7.GATEWAY_SOCKET_RESET;
                    var7 = {};
                    var16 = var15.message;
                    var7.error_message = var16;
                    var15 = var15.stack;
                    var7.error_stack = var15;
                    var7.has_client_mods = var14;
                    var7.action = var10;
                    var7 = var12.bind(var13)(var11, var7);
                    var11 = var2._cleanup;
                    var7 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.close;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var7 = var11.bind(var2)(var7);
                    var12 = var2._reset;
                    var11 = 1000;
                    var7 = 'Resetting socket due to error.';
                    var7 = var12.bind(var2)(var5, var11, var7);
                    var11 = var2.dispatcher;
                    var7 = var11.clear;
                    var7 = var7.bind(var11)();
                    var7 = 20;
                    var7 = var9[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.WILL_RECONNECT;
                    var2.connectionState = var7;
                    var8 = var2.dispatchExceptionBackoff;
                    var7 = var8.cancel;
                    var7 = var7.bind(var8)();
                    var6 = var6.clearCache;
                    if (var6) {
                        _fun94533_ip = 513;
                        continue _fun94533
                    }
                case 495:
                    var7 = var2.dispatchExceptionBackoff;
                    var8 = var7._fails;
                    var7 = 0;
                    var6 = var8 > var7;
                case 513:
                    var7 = var2.dispatchExceptionBackoff;
                    var7 = var7._fails;
                    var9 = 0;
                    if (!(var9 !== var7)) {
                        _fun94533_ip = 557;
                        continue _fun94533
                    }
                case 531:
                    var11 = var2.dispatchExceptionBackoff;
                    var8 = var11.fail;
                    var7 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2._connect;
                        var0 = 'resetSocketOnError';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7 = var8.bind(var11)(var7);
                    _fun94533_ip = 621;
                    continue _fun94533;
                case 557:
                    var11 = _closure1_slot14;
                    var8 = var11.verbose;
                    var7 = 'Triggering fast reconnect';
                    var7 = var8.bind(var11)(var7);
                    var11 = var2.dispatchExceptionBackoff;
                    var8 = var11.fail;
                    var7 = function() { // Environment: var1
                        var0 = undefined;
                        return var0;
                    };
                    var7 = var8.bind(var11)(var7);
                    var8 = var4.setTimeout;
                    var7 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2._connect;
                        var0 = 'resetSocketOnErrorImmediate';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7 = var8.bind(var0)(var7, var9);
                case 621:
                    if (!var6) {
                        _fun94533_ip = 697;
                        continue _fun94533
                    }
                case 624:
                    var2.didForceClearGuildHashes = var5;
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var5 = 42;
                    var5 = var7[var5];
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'CLEAR_CACHES';
                    var5.type = var8;
                    var8 = var4.HermesInternal;
                    var9 = var8.concat;
                    var8 = 'Socket reset during ';
                    var8 = var9.bind(var8)(var10);
                    var5.reason = var8;
                    var5 = var6.bind(var7)(var5);
                case 697:
                    var6 = var4.clearTimeout;
                    var5 = var2.dispatchSuccessTimer;
                    var5 = var6.bind(var0)(var5);
                    var4 = var4.setTimeout;
                    var5 = _closure1_slot18;
                    var3 = 2;
                    var3 = var3 * var5;
                    var1 = function() { // Environment: var1
                        var0 = _closure3_slot0;
                        var1 = var0.dispatchExceptionBackoff;
                        var0 = var1.succeed;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2.dispatchSuccessTimer = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[38] = var4;
        var4 = {};
        var6 = 'resetSocketOnDispatchError';
        var4.key = var6;
        var6 = function arg0() {
            _fun94539: for (var _fun94539_ip = 0;;) switch (_fun94539_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var0 = var3.error;
                    var1 = var0.message;
                    var0 = null;
                    var4 = var0 != var1;
                    if (!var4) {
                        _fun94539_ip = 58;
                        continue _fun94539
                    }
                case 25:
                    var0 = var3.error;
                    var5 = var0.message;
                    var1 = var5.indexOf;
                    var0 = 'Guild data was missing from store';
                    var1 = var1.bind(var5)(var0);
                    var0 = 0;
                    var4 = var1 >= var0;
                case 58:
                    var1 = var2.resetSocketOnError;
                    var0 = {};
                    var7 = var0;
                    var6 = var3;
                    var3 = copyDataProperties(var7, var6);
                    var5 = !var4;
                    var3 = 'sentry';
                    var0[var3] = var5;
                    var3 = 'clearCache';
                    var0[var3] = var4;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[39] = var4;
        var4 = {};
        var6 = 'close';
        var4.key = var6;
        var6 = function() {
            _fun94540: for (var _fun94540_ip = 0;;) switch (_fun94540_ip) {
                case 0:
                    var4 = arguments[0];
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var0 = undefined;
                    if (!(var4 === var0)) {
                        _fun94540_ip = 20;
                        continue _fun94540
                    }
                case 18:
                    var4 = false;
                case 20:
                    var _closure3_slot1 = var0;
                    var2 = var5.isClosed;
                    var2 = var2.bind(var5)();
                    var3 = _closure1_slot14;
                    if (var2) {
                        _fun94540_ip = 190;
                        continue _fun94540
                    }
                case 47:
                    var8 = var3.info;
                    var10 = var5.connectionState;
                    var2 = global;
                    var7 = var2.HermesInternal;
                    var9 = var7.concat;
                    var7 = 'Closing connection, current state is ';
                    var7 = var9.bind(var7)(var10);
                    var7 = var8.bind(var3)(var7);
                    var7 = undefined;
                    if (!var4) {
                        _fun94540_ip = 99;
                        continue _fun94540
                    }
                case 93:
                    var7 = 4000;
                case 99:
                    _closure3_slot1 = var7;
                    var8 = var5._cleanup;
                    var7 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var1 = var2.close;
                        var0 = _closure3_slot1;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7 = var8.bind(var5)(var7);
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var6 = 20;
                    var6 = var8[var6];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.CLOSED;
                    var5.connectionState = var6;
                    if (var4) {
                        _fun94540_ip = 207;
                        continue _fun94540
                    }
                case 156:
                    var4 = null;
                    var5.sessionId = var4;
                    var5.token = var4;
                    var2 = var2.setImmediate;
                    var1 = function() { // Environment: var1
                        var4 = _closure3_slot0;
                        var3 = var4._reset;
                        var2 = true;
                        var1 = 1000;
                        var0 = 'Disconnect requested by user';
                        var0 = var3.bind(var4)(var2, var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    _fun94540_ip = 207;
                    continue _fun94540;
                case 190:
                    var2 = var3.verbose;
                    var1 = 'close() called, but socket is already closed.';
                    var1 = var2.bind(var3)(var1);
                case 207:
                    return var0;
            }
        };
        var4.value = var6;
        var0[40] = var4;
        var4 = {};
        var6 = 'networkStateChange';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun94543: for (var _fun94543_ip = 0;;) switch (_fun94543_ip) {
                case 0:
                    var6 = arg1;
                    var5 = arguments[2];
                    var4 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun94543_ip = 17;
                        continue _fun94543
                    }
                case 15:
                    var5 = true;
                case 17:
                    var3 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var2 = 13;
                    var2 = var7[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.isRequested;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun94543_ip = 76;
                        continue _fun94543
                    }
                case 53:
                    var2 = _closure1_slot21;
                    var1 = {};
                    var1.reason = var6;
                    var3 = false;
                    var1.actuallySkipped = var3;
                    var1 = var2.bind(var0)(var1);
                case 76:
                    var3 = var4.expeditedHeartbeat;
                    var11 = arg0;
                    var8 = false;
                    var12 = var4;
                    var10 = var6;
                    var9 = var5;
                    var1 = var12[var3](var11, var10, var9, var8, var7);
                    return var0;
            }
        };
        var4.value = var6;
        var0[41] = var4;
        var4 = {};
        var6 = 'expeditedHeartbeat';
        var4.key = var6;
        var6 = function arg0() {
            _fun94544: for (var _fun94544_ip = 0;;) switch (_fun94544_ip) {
                case 0:
                    var9 = arguments[1];
                    var1 = arguments[2];
                    var5 = arguments[3];
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = undefined;
                    if (!(var9 === var0)) {
                        _fun94544_ip = 28;
                        continue _fun94544
                    }
                case 24:
                    var9 = '';
                case 28:
                    if (!(var1 === var0)) {
                        _fun94544_ip = 34;
                        continue _fun94544
                    }
                case 32:
                    var1 = true;
                case 34:
                    if (!(var5 === var0)) {
                        _fun94544_ip = 40;
                        continue _fun94544
                    }
                case 38:
                    var5 = true;
                case 40:
                    var4 = var3.isClosed;
                    var4 = var4.bind(var3)();
                    if (var4) {
                        _fun94544_ip = 324;
                        continue _fun94544
                    }
                case 56:
                    var4 = var3.isConnected;
                    var4 = var4.bind(var3)();
                    if (var4) {
                        _fun94544_ip = 182;
                        continue _fun94544
                    }
                case 69:
                    if (var1) {
                        _fun94544_ip = 163;
                        continue _fun94544
                    }
                case 72:
                    var6 = _closure1_slot14;
                    var4 = var6.verbose;
                    var11 = var3.connectionState;
                    var1 = null;
                    var7 = var1 != var9;
                    var1 = '';
                    var10 = var1;
                    if (!var7) {
                        _fun94544_ip = 124;
                        continue _fun94544
                    }
                case 107:
                    var10 = var1;
                    if (!(var10 !== var9)) {
                        _fun94544_ip = 124;
                        continue _fun94544
                    }
                case 114:
                    var1 = 'reason: ';
                    var10 = var1 + var9;
                case 124:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var7 = 'Expedited heartbeat requested, but, connection state is ';
                    var1 = ' and reconnectImmediately was not requested ';
                    var1 = var8.bind(var7)(var11, var1, var10);
                    var1 = var4.bind(var6)(var1);
                    _fun94544_ip = 175;
                    continue _fun94544;
                case 163:
                    var4 = var3.resetBackoff;
                    var1 = var4.bind(var3)(var9, var5);
                case 175:
                    var1 = undefined;
                    _fun94544_ip = 322;
                    continue _fun94544;
                case 182:
                    var7 = _closure1_slot14;
                    var6 = var7.verbose;
                    var5 = null;
                    var10 = var5 != var9;
                    var4 = '';
                    var8 = var4;
                    if (!var10) {
                        _fun94544_ip = 228;
                        continue _fun94544
                    }
                case 211:
                    var8 = var4;
                    if (!(var8 !== var9)) {
                        _fun94544_ip = 228;
                        continue _fun94544
                    }
                case 218:
                    var4 = 'reason: ';
                    var8 = var4 + var9;
                case 228:
                    var4 = 'Performing an expedited heartbeat ';
                    var4 = var4 + var8;
                    var4 = var6.bind(var7)(var4);
                    var4 = false;
                    var3.heartbeatAck = var4;
                    var4 = var3._sendHeartbeat;
                    var4 = var4.bind(var3)();
                    var4 = var3.expeditedHeartbeatTimeout;
                    if (!(var5 !== var4)) {
                        _fun94544_ip = 290;
                        continue _fun94544
                    }
                case 271:
                    var4 = global;
                    var5 = var4.clearTimeout;
                    var4 = var3.expeditedHeartbeatTimeout;
                    var4 = var5.bind(var0)(var4);
                case 290:
                    var4 = global;
                    var5 = var4.setTimeout;
                    var4 = function() { // Environment: var2
                        _fun94545: for (var _fun94545_ip = 0;;) switch (_fun94545_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = null;
                                var1.expeditedHeartbeatTimeout = var2;
                                var2 = var1.heartbeatAck;
                                var1 = false;
                                if (!(var1 === var2)) {
                                    _fun94545_ip = 41;
                                    continue _fun94545
                                }
                            case 27:
                                var1 = _closure3_slot0;
                                var0 = var1._handleHeartbeatTimeout;
                                var0 = var0.bind(var1)();
                            case 41:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = arg0;
                    var2 = var5.bind(var0)(var4, var2);
                    var3.expeditedHeartbeatTimeout = var2;
                    var1 = undefined;
                case 322:
                    return var1;
                case 324:
                    return var0;
            }
        };
        var4.value = var6;
        var0[42] = var4;
        var4 = {};
        var6 = 'resetBackoff';
        var4.key = var6;
        var5 = function() {
            _fun94546: for (var _fun94546_ip = 0;;) switch (_fun94546_ip) {
                case 0:
                    var3 = arguments[0];
                    var1 = arguments[1];
                    var2 = this;
                    var0 = undefined;
                    if (!(var3 === var0)) {
                        _fun94546_ip = 19;
                        continue _fun94546
                    }
                case 15:
                    var3 = '';
                case 19:
                    if (!(var1 === var0)) {
                        _fun94546_ip = 25;
                        continue _fun94546
                    }
                case 23:
                    var1 = true;
                case 25:
                    var7 = _closure1_slot14;
                    var5 = var7.verbose;
                    var4 = null;
                    var9 = var4 != var3;
                    var4 = '';
                    var8 = var4;
                    if (!var9) {
                        _fun94546_ip = 71;
                        continue _fun94546
                    }
                case 54:
                    var8 = var4;
                    if (!(var8 !== var3)) {
                        _fun94546_ip = 71;
                        continue _fun94546
                    }
                case 61:
                    var4 = ' for reason: ';
                    var8 = var4 + var3;
                case 71:
                    var4 = 'Connection has reset backoff';
                    var4 = var4 + var8;
                    var4 = var5.bind(var7)(var4);
                    var5 = var2.gatewayBackoff;
                    var4 = var5.succeed;
                    var4 = var4.bind(var5)();
                    var5 = 0;
                    var2.iosGoingAwayEventCount = var5;
                    var4 = true;
                    var2.nextReconnectIsImmediate = var4;
                    var7 = var2.willReconnect;
                    var7 = var7.bind(var2)();
                    if (var7) {
                        _fun94546_ip = 188;
                        continue _fun94546
                    }
                case 131:
                    if (!var1) {
                        _fun94546_ip = 170;
                        continue _fun94546
                    }
                case 134:
                    var7 = var2.connectionState;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var6 = 20;
                    var6 = var9[var6];
                    var6 = var8.bind(var0)(var6);
                    var6 = var6.SESSION_ESTABLISHED;
                    var1 = var7 !== var6;
                case 170:
                    if (!var1) {
                        _fun94546_ip = 199;
                        continue _fun94546
                    }
                case 173:
                    var1 = var2._handleClose;
                    var1 = var1.bind(var2)(var4, var5, var3);
                    _fun94546_ip = 199;
                    continue _fun94546;
                case 188:
                    var1 = var2._connect;
                    var1 = var1.bind(var2)(var3);
                case 199:
                    return var0;
            }
        };
        var4.value = var5;
        var0[43] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/GatewaySocket.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 15, 17, 18, 803, 660, 3, 12350, 12352, 12353, 659, 5245, 795, 12354, 667, 561, 12355, 12361, 12363, 12382, 20, 14, 1347, 12360, 478, 507, 44, 566, 12159, 12163, 12166, 12164, 12384, 12385, 12366, 652, 4225, 4230, 1207, 806, 2]);