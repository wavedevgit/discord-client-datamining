// lib/MessageQueue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun39327: for (var _fun39327_ip = 0;;) switch (_fun39327_ip) {
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
                _fun39327_ip = 74;
                continue _fun39327;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot22 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = ['channelId', 'analyticsLocation'];
    var _closure1_slot3 = var0;
    var0 = ['channelId', 'analyticsLocation'];
    var _closure1_slot4 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var10 = 0;
    var3 = var9[var10];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var12 = 1;
    var3 = var9[var12];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var6 = 2;
    var3 = var9[var6];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var4 = 3;
    var3 = var9[var4];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var9[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var11 = 5;
    var3 = var9[var11];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var9[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var9[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var9[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var5 = var3.AbortCodes;
    var _closure1_slot14 = var5;
    var5 = var3.Endpoints;
    var _closure1_slot15 = var5;
    var3 = var3.AnalyticEvents;
    var _closure1_slot16 = var3;
    var3 = 10;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.MESSAGE_HTTP_TIMEOUT_RETRY_OPTIONS;
    var _closure1_slot17 = var3;
    var5 = {};
    var5.SEND = var10;
    var3 = 'SEND';
    var5[var10] = var3;
    var5.EDIT = var12;
    var3 = 'EDIT';
    var5[var12] = var3;
    var5.COMMAND = var6;
    var3 = 'COMMAND';
    var5[var6] = var3;
    var5.SEND_ANNOUNCEMENT = var4;
    var3 = 'SEND_ANNOUNCEMENT';
    var5[var4] = var3;
    var _closure1_slot18 = var5;
    var4 = function(arg0) { // Original name: isMessageDataSend, environment: var1
        _fun39330: for (var _fun39330_ip = 0;;) switch (_fun39330_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.type;
                var0 = _closure1_slot18;
                var0 = var0.SEND;
                var0 = var3 === var0;
                if (var0) {
                    _fun39330_ip = 47;
                    continue _fun39330
                }
            case 28:
                var2 = var2.type;
                var1 = _closure1_slot18;
                var1 = var1.SEND_ANNOUNCEMENT;
                var0 = var2 === var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot19 = var4;
    var3 = function(arg0) { // Original name: isMessageDataEdit, environment: var1
        var0 = arg0;
        var1 = var0.type;
        var0 = _closure1_slot18;
        var0 = var0.EDIT;
        var0 = var1 === var0;
        return var0;
    };
    var _closure1_slot20 = var3;
    var10 = 11;
    var6 = var9[var10];
    var6 = var7.bind(var0)(var6);
    var6 = var6.Millis;
    var6 = var6.MINUTE;
    var12 = var12 * var6;
    var6 = new Array(2);
    var6[0] = var12;
    var10 = var9[var10];
    var10 = var7.bind(var0)(var10);
    var10 = var10.Millis;
    var10 = var10.MINUTE;
    var10 = var11 * var10;
    var6[1] = var10;
    var _closure1_slot21 = var6;
    var6 = 22;
    var6 = var9[var6];
    var7 = var7.bind(var0)(var6);
    var6 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: MessageQueue, environment: var5
            _fun39333: for (var _fun39333_ip = 0;;) switch (_fun39333_ip) {
                case 0:
                    var2 = arguments[0];
                    var5 = this;
                    var4 = undefined;
                    if (!(var2 === var4)) {
                        _fun39333_ip = 17;
                        continue _fun39333
                    }
                case 14:
                    var2 = 5;
                case 17:
                    var _closure3_slot0 = var4;
                    var0 = _closure1_slot6;
                    var3 = _closure2_slot0;
                    var0 = var0.bind(var4)(var5, var3);
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 12;
                    var0 = var8[var0];
                    var8 = var7.bind(var4)(var0);
                    var0 = var8.prototype;
                    var7 = Object.create(var0, {
                        constructor: {
                            value: var8
                        }
                    });
                    var13 = 'MessageQueue';
                    var14 = var7;
                    var0 = new var14[var8](var13, var12);
                    var0 = var0 instanceof Object ? var0 : var7;
                    var10 = new Array(1);
                    var10[0] = var0;
                    var0 = _closure1_slot9;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot8;
                    var0 = _closure1_slot22;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun39333_ip = 132;
                        continue _fun39333
                    }
                case 119:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun39333_ip = 166;
                    continue _fun39333;
                case 132:
                    var7 = global;
                    var8 = var7.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot9;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 166:
                    var0 = var3.bind(var4)(var5, var0);
                    _closure3_slot0 = var0;
                    var0.maxSize = var2;
                    var2 = global;
                    var3 = var2.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var4;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.requests = var3;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var2](var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.analyticsTimeouts = var2;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun39334: for (var _fun39334_ip = 0;;) switch (_fun39334_ip) {
                            case 0:
                                var3 = arg0;
                                var10 = var3.channelId;
                                var9 = var3.messageId;
                                var _closure4_slot0 = var9;
                                var2 = var3.isCrossposted;
                                var1 = {
                                    'channelId': 0,
                                    'messageId': 0,
                                    'isCrossposted': 0
                                };
                                var12 = null;
                                var13 = var1;
                                var0 = silentSetPrototypeOf(var13, var12);
                                var13 = {};
                                var12 = var3;
                                var11 = var1;
                                var1 = copyDataProperties(var13, var12, var11);
                                var0 = global;
                                var0 = var0.AbortController;
                                var3 = var0.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var14 = var3;
                                var0 = new var14[var0](var13);
                                var6 = var0 instanceof Object ? var0 : var3;
                                var _closure4_slot1 = var6;
                                var4 = _closure3_slot0;
                                var3 = var4.createResponseHandler;
                                var0 = arg1;
                                var4 = var3.bind(var4)(var9, var0);
                                var3 = {
                                    'url': null,
                                    'body': null,
                                    'retries': 1,
                                    'oldFormErrors': true,
                                    'signal': null,
                                    'rejectWithError': true
                                };
                                var8 = _closure1_slot15;
                                var7 = var8.MESSAGE;
                                var7 = var7.bind(var8)(var10, var9);
                                var3.url = var7;
                                var3.body = var1;
                                var1 = true;
                                var6 = var6.signal;
                                var3.signal = var6;
                                var5 = function() { // Original name: onRequestCreated, environment: var5
                                    var0 = _closure3_slot0;
                                    var3 = var0.requests;
                                    var2 = var3.set;
                                    var1 = _closure4_slot0;
                                    var0 = _closure4_slot1;
                                    var0 = var2.bind(var3)(var1, var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var3.onRequestCreated = var5;
                                if (!var2) {
                                    _fun39334_ip = 192;
                                    continue _fun39334
                                }
                            case 186:
                                var3.failImmediatelyWhenRateLimited = var1;
                            case 192:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var2 = var1.HTTP;
                                var1 = var2.patch;
                                var1 = var1.bind(var2)(var3, var4);
                                return var0;
                        }
                    };
                    var0.handleEdit = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot10;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot7;
        var4 = {};
        var0 = 'isFull';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = this;
            var1 = var0.queue;
            var1 = var1.length;
            var0 = var0.maxSize;
            var0 = var1 >= var0;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'drain';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39337: for (var _fun39337_ip = 0;;) switch (_fun39337_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var2 = this;
                    var6 = var2.logger;
                    var5 = var6.log;
                    var4 = var0.type;
                    var1 = 'Draining Message Queue with: ';
                    var1 = var5.bind(var6)(var1, var4);
                    var4 = var0.type;
                    var5 = _closure1_slot18;
                    var5 = var5.SEND;
                    if (!(var5 !== var4)) {
                        _fun39337_ip = 162;
                        continue _fun39337
                    }
                case 59:
                    var5 = _closure1_slot18;
                    var5 = var5.SEND_ANNOUNCEMENT;
                    if (!(var5 !== var4)) {
                        _fun39337_ip = 141;
                        continue _fun39337
                    }
                case 73:
                    var5 = _closure1_slot18;
                    var5 = var5.EDIT;
                    if (!(var5 !== var4)) {
                        _fun39337_ip = 122;
                        continue _fun39337
                    }
                case 87:
                    var1 = _closure1_slot18;
                    var1 = var1.COMMAND;
                    if (!(var1 === var4)) {
                        _fun39337_ip = 179;
                        continue _fun39337
                    }
                case 101:
                    var4 = var2.handleCommand;
                    var1 = var0.message;
                    var1 = var4.bind(var2)(var1, var3);
                    _fun39337_ip = 179;
                    continue _fun39337;
                case 122:
                    var4 = var2.handleEdit;
                    var1 = var0.message;
                    var1 = var4.bind(var2)(var1, var3);
                    _fun39337_ip = 179;
                    continue _fun39337;
                case 141:
                    var4 = var2.handleSendAnnouncement;
                    var1 = var0.message;
                    var1 = var4.bind(var2)(var1, var3);
                    _fun39337_ip = 179;
                    continue _fun39337;
                case 162:
                    var1 = var2.handleSend;
                    var0 = var0.message;
                    var0 = var1.bind(var2)(var0, var3);
                case 179:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'cancelRequest';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39338: for (var _fun39338_ip = 0;;) switch (_fun39338_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var4 = var1.logger;
                    var3 = var4.log;
                    var0 = 'Cancel message send: ';
                    var0 = var3.bind(var4)(var0, var2);
                    var3 = var1.requests;
                    var0 = var3.get;
                    var3 = var0.bind(var3)(var2);
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun39338_ip = 61;
                        continue _fun39338
                    }
                case 51:
                    var0 = var3.abort;
                    var0 = var0.bind(var3)();
                case 61:
                    var3 = var1.requests;
                    var0 = var3.delete;
                    var0 = var0.bind(var3)(var2);
                    var0 = var1.cancelQueueMetricTimers;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'cancelPendingSendRequests';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39339: for (var _fun39339_ip = 0;;) switch (_fun39339_ip) {
                case 0:
                    var4 = arg0;
                    var1 = this;
                    var0 = new Array(0);
                    var6 = new Array(0);
                    var2 = var1.queue;
                    var2 = var2.length;
                    var5 = 0;
                    if (!(var2 > var5)) {
                        _fun39339_ip = 130;
                        continue _fun39339
                    }
                case 34:
                    var7 = var1.queue;
                    var2 = var7.shift;
                    var8 = var2.bind(var7)();
                    var2 = var8.message;
                    var9 = var2.type;
                    var7 = _closure1_slot18;
                    var7 = var7.SEND;
                    if (!(var9 === var7)) {
                        _fun39339_ip = 88;
                        continue _fun39339
                    }
                case 74:
                    var7 = var2.message;
                    var7 = var7.channelId;
                    if (!(var7 !== var4)) {
                        _fun39339_ip = 100;
                        continue _fun39339
                    }
                case 88:
                    var7 = var6.push;
                    var7 = var7.bind(var6)(var8);
                    _fun39339_ip = 115;
                    continue _fun39339;
                case 100:
                    var7 = var0.push;
                    var2 = var2.message;
                    var2 = var7.bind(var0)(var2);
                case 115:
                    var2 = var1.queue;
                    var2 = var2.length;
                    if (var2 > var5) {
                        _fun39339_ip = 34;
                        continue _fun39339
                    }
                case 130:
                    var4 = var1.queue;
                    var3 = var4.push;
                    var2 = new Array(0);
                    var12 = var2;
                    var11 = var6;
                    var10 = 0;
                    var5 = arraySpread(var12, var11, var10);
                    var12 = var3;
                    var11 = var2;
                    var10 = var4;
                    var2 = apply(var12, var11, var10);
                    var4 = var1.logger;
                    var3 = var4.log;
                    var2 = var0.length;
                    var1 = 'Cancel pending send requests';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'startQueueMetricTimers';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot21;
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                var3 = arg0;
                var _closure4_slot0 = var3;
                var1 = global;
                var2 = var1.setTimeout;
                var1 = undefined;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot16;
                    var2 = var1.SEND_MESSAGE_QUEUED;
                    var1 = {};
                    var5 = _closure4_slot0;
                    var1.queued_duration_ms = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var1)(var0, var3);
                return var0;
            };
            var3 = var1.bind(var2)(var0);
            var0 = this;
            var2 = var0.analyticsTimeouts;
            var1 = var2.set;
            var0 = arg0;
            var0 = var1.bind(var2)(var0, var3);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'cancelQueueMetricTimers';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun39343: for (var _fun39343_ip = 0;;) switch (_fun39343_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.analyticsTimeouts;
                    var1 = var3.get;
                    var4 = var1.bind(var3)(var2);
                    var1 = null;
                    if (!(var1 != var4)) {
                        _fun39343_ip = 46;
                        continue _fun39343
                    }
                case 28:
                    var3 = var4.forEach;
                    var1 = global;
                    var1 = var1.clearTimeout;
                    var1 = var3.bind(var4)(var1);
                case 46:
                    var1 = var0.analyticsTimeouts;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'createResponseHandler';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = arg1;
            var _closure3_slot2 = var1;
            var0 = function(arg0) { // Environment: var0
                _fun39345: for (var _fun39345_ip = 0;;) switch (_fun39345_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = _closure3_slot1;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun39345_ip = 51;
                            continue _fun39345
                        }
                    case 16:
                        var5 = _closure3_slot0;
                        var6 = var5.requests;
                        var1 = var6.delete;
                        var4 = _closure3_slot1;
                        var1 = var1.bind(var6)(var4);
                        var1 = var5.cancelQueueMetricTimers;
                        var1 = var1.bind(var5)(var4);
                    case 51:
                        var1 = var3.hasErr;
                        if (var1) {
                            _fun39345_ip = 277;
                            continue _fun39345
                        }
                    case 63:
                        var1 = var3.body;
                        if (!(var2 != var1)) {
                            _fun39345_ip = 140;
                            continue _fun39345
                        }
                    case 72:
                        var1 = var3.body;
                        var5 = var1.code;
                        var4 = _closure1_slot14;
                        var4 = var4.SLOWMODE_RATE_LIMITED;
                        if (!(var5 !== var4)) {
                            _fun39345_ip = 123;
                            continue _fun39345
                        }
                    case 99:
                        var4 = var3.body;
                        var4 = var4.code;
                        var1 = _closure1_slot14;
                        var1 = var1.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED;
                        if (!(var4 === var1)) {
                            _fun39345_ip = 140;
                            continue _fun39345
                        }
                    case 123:
                        var4 = _closure3_slot2;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2, var3);
                        _fun39345_ip = 273;
                        continue _fun39345;
                    case 140:
                        var4 = var3.status;
                        var1 = 429;
                        if (!(var1 !== var4)) {
                            _fun39345_ip = 169;
                            continue _fun39345
                        }
                    case 155:
                        var4 = _closure3_slot2;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2, var3);
                        _fun39345_ip = 273;
                        continue _fun39345;
                    case 169:
                        var1 = global;
                        var6 = var1.parseInt;
                        var4 = var3.headers;
                        var5 = var4["retry-after"];
                        var4 = undefined;
                        var7 = var6.bind(var4)(var5);
                        var1 = var1.isNaN;
                        var5 = var1.bind(var4)(var7);
                        var1 = _closure3_slot2;
                        if (var5) {
                            _fun39345_ip = 267;
                            continue _fun39345
                        }
                    case 214:
                        var5 = {};
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var6 = 11;
                        var6 = var9[var6];
                        var6 = var8.bind(var4)(var6);
                        var6 = var6.Millis;
                        var6 = var6.SECOND;
                        var6 = var7 * var6;
                        var5.retryAfter = var6;
                        var5 = var1.bind(var4)(var5);
                        _fun39345_ip = 273;
                        continue _fun39345;
                    case 267:
                        var1 = var1.bind(var4)(var2, var3);
                    case 273:
                        var1 = undefined;
                        return var1;
                    case 277:
                        var1 = _closure3_slot2;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2, var3);
                        return var0;
                }
            };
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'handleSend';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39346: for (var _fun39346_ip = 0;;) switch (_fun39346_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var4;
                    var15 = var4.channelId;
                    var7 = var4.analyticsLocation;
                    var5 = _closure1_slot5;
                    var1 = _closure1_slot3;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4, var1);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 15;
                    var1 = var9[var1];
                    var1 = var6.bind(var2)(var1);
                    var6 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun39346_ip = 82;
                        continue _fun39346
                    }
                case 79:
                    var7 = var6;
                case 82:
                    var6 = var1 != var7;
                    var10 = undefined;
                    if (!var6) {
                        _fun39346_ip = 100;
                        continue _fun39346
                    }
                case 91:
                    var6 = {};
                    var6.location = var7;
                    var10 = var6;
                case 100:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 16;
                    var6 = var9[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.getSignalStrength;
                    var7 = var6.bind(var7)();
                    var12 = {};
                    var9 = _closure1_slot13;
                    var6 = var9.getType;
                    var6 = var6.bind(var9)();
                    var12.mobile_network_type = var6;
                    var17 = var12;
                    var16 = var5;
                    var5 = copyDataProperties(var17, var16);
                    var5 = var1 != var7;
                    if (!var5) {
                        _fun39346_ip = 178;
                        continue _fun39346
                    }
                case 168:
                    var6 = {};
                    var6.signal_strength = var7;
                    var5 = var6;
                case 178:
                    var17 = var12;
                    var16 = var5;
                    var5 = copyDataProperties(var17, var16);
                    var7 = _closure1_slot11;
                    var6 = var7.get;
                    var5 = 'send_fail_100';
                    var5 = var6.bind(var7)(var5);
                    if (var5) {
                        _fun39346_ip = 405;
                        continue _fun39346
                    }
                case 214:
                    var6 = var0.createResponseHandler;
                    var5 = var4.nonce;
                    var7 = var6.bind(var0)(var5, var3);
                    var5 = global;
                    var5 = var5.AbortController;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var18 = var6;
                    var5 = new var18[var5](var17);
                    var9 = var5 instanceof Object ? var5 : var6;
                    var _closure3_slot2 = var9;
                    var5 = var0.startQueueMetricTimers;
                    var4 = var4.nonce;
                    var4 = var5.bind(var0)(var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var14 = _closure1_slot15;
                    var13 = var14.MESSAGES;
                    var13 = var13.bind(var14)(var15);
                    var4.url = var13;
                    var4.body = var12;
                    var4.context = var10;
                    var10 = true;
                    var4.oldFormErrors = var10;
                    var16 = _closure1_slot17;
                    var17 = var4;
                    var11 = copyDataProperties(var17, var16);
                    var11 = var9.signal;
                    var9 = 'signal';
                    var4[var9] = var11;
                    var9 = 'rejectWithError';
                    var4[var9] = var10;
                    var9 = function() { // Original name: onRequestCreated, environment: var8
                        _fun39347: for (var _fun39347_ip = 0;;) switch (_fun39347_ip) {
                            case 0:
                                var1 = _closure3_slot1;
                                var2 = var1.nonce;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun39347_ip = 54;
                                    continue _fun39347
                                }
                            case 19:
                                var1 = _closure3_slot0;
                                var3 = var1.requests;
                                var2 = var3.set;
                                var1 = _closure3_slot1;
                                var1 = var1.nonce;
                                var0 = _closure3_slot2;
                                var0 = var2.bind(var3)(var1, var0);
                            case 54:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = 'onRequestCreated';
                    var4[var8] = var9;
                    var4 = var5.bind(var6)(var4, var7);
                    return var2;
                case 405:
                    var5 = var0.logger;
                    var4 = var5.log;
                    var0 = 'Skipping message send because send_fail_100 is enabled';
                    var0 = var4.bind(var5)(var0);
                    var0 = {
                        'ok': false,
                        'hasErr': false,
                        'status': 500,
                        'headers': null,
                        'body': '{}',
                        'text': 'Simulated failure'
                    };
                    var4 = {};
                    var0.headers = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'handleSendAnnouncement';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39348: for (var _fun39348_ip = 0;;) switch (_fun39348_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var4;
                    var15 = var4.channelId;
                    var7 = var4.analyticsLocation;
                    var5 = _closure1_slot5;
                    var1 = _closure1_slot4;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4, var1);
                    var6 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var1 = 15;
                    var1 = var9[var1];
                    var1 = var6.bind(var2)(var1);
                    var6 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun39348_ip = 82;
                        continue _fun39348
                    }
                case 79:
                    var7 = var6;
                case 82:
                    var6 = var1 != var7;
                    var10 = undefined;
                    if (!var6) {
                        _fun39348_ip = 100;
                        continue _fun39348
                    }
                case 91:
                    var6 = {};
                    var6.location = var7;
                    var10 = var6;
                case 100:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 16;
                    var6 = var9[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.getSignalStrength;
                    var7 = var6.bind(var7)();
                    var12 = {};
                    var9 = _closure1_slot13;
                    var6 = var9.getType;
                    var6 = var6.bind(var9)();
                    var12.mobile_network_type = var6;
                    var17 = var12;
                    var16 = var5;
                    var5 = copyDataProperties(var17, var16);
                    var5 = var1 != var7;
                    if (!var5) {
                        _fun39348_ip = 178;
                        continue _fun39348
                    }
                case 168:
                    var6 = {};
                    var6.signal_strength = var7;
                    var5 = var6;
                case 178:
                    var17 = var12;
                    var16 = var5;
                    var5 = copyDataProperties(var17, var16);
                    var7 = _closure1_slot11;
                    var6 = var7.get;
                    var5 = 'send_fail_100';
                    var5 = var6.bind(var7)(var5);
                    if (var5) {
                        _fun39348_ip = 405;
                        continue _fun39348
                    }
                case 214:
                    var6 = var0.createResponseHandler;
                    var5 = var4.nonce;
                    var7 = var6.bind(var0)(var5, var3);
                    var5 = global;
                    var5 = var5.AbortController;
                    var6 = var5.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var5
                        }
                    });
                    var18 = var6;
                    var5 = new var18[var5](var17);
                    var9 = var5 instanceof Object ? var5 : var6;
                    var _closure3_slot2 = var9;
                    var5 = var0.startQueueMetricTimers;
                    var4 = var4.nonce;
                    var4 = var5.bind(var0)(var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 13;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var14 = _closure1_slot15;
                    var13 = var14.MESSAGES_ANNOUNCEMENT;
                    var13 = var13.bind(var14)(var15);
                    var4.url = var13;
                    var4.body = var12;
                    var4.context = var10;
                    var10 = true;
                    var4.oldFormErrors = var10;
                    var16 = _closure1_slot17;
                    var17 = var4;
                    var11 = copyDataProperties(var17, var16);
                    var11 = var9.signal;
                    var9 = 'signal';
                    var4[var9] = var11;
                    var9 = 'rejectWithError';
                    var4[var9] = var10;
                    var9 = function() { // Original name: onRequestCreated, environment: var8
                        _fun39349: for (var _fun39349_ip = 0;;) switch (_fun39349_ip) {
                            case 0:
                                var1 = _closure3_slot1;
                                var2 = var1.nonce;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun39349_ip = 54;
                                    continue _fun39349
                                }
                            case 19:
                                var1 = _closure3_slot0;
                                var3 = var1.requests;
                                var2 = var3.set;
                                var1 = _closure3_slot1;
                                var1 = var1.nonce;
                                var0 = _closure3_slot2;
                                var0 = var2.bind(var3)(var1, var0);
                            case 54:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = 'onRequestCreated';
                    var4[var8] = var9;
                    var4 = var5.bind(var6)(var4, var7);
                    return var2;
                case 405:
                    var5 = var0.logger;
                    var4 = var5.log;
                    var0 = 'Skipping message send because send_fail_100 is enabled';
                    var0 = var4.bind(var5)(var0);
                    var0 = {
                        'ok': false,
                        'hasErr': false,
                        'status': 500,
                        'headers': null,
                        'body': '{}',
                        'text': 'Simulated failure'
                    };
                    var4 = {};
                    var0.headers = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'handleCommand';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun39350: for (var _fun39350_ip = 0;;) switch (_fun39350_ip) {
                case 0:
                    var0 = arg0;
                    var7 = this;
                    var _closure3_slot0 = var7;
                    var13 = var0.applicationId;
                    var12 = var0.guildId;
                    var _closure3_slot1 = var12;
                    var11 = var0.channelId;
                    var10 = var0.data;
                    var6 = var0.nonce;
                    var _closure3_slot2 = var6;
                    var5 = var0.attachments;
                    var2 = var0.maxSizeCallback;
                    var _closure3_slot3 = var2;
                    var4 = var0.analytics_location;
                    var3 = var0.sectionName;
                    var2 = var0.source;
                    var0 = undefined;
                    var _closure3_slot4 = var0;
                    var8 = {};
                    var15 = _closure1_slot0;
                    var16 = _closure1_slot2;
                    var14 = 17;
                    var14 = var16[var14];
                    var14 = var15.bind(var0)(var14);
                    var14 = var14.InteractionTypes;
                    var14 = var14.APPLICATION_COMMAND;
                    var8.type = var14;
                    var8.application_id = var13;
                    var8.guild_id = var12;
                    var8.channel_id = var11;
                    var12 = _closure1_slot12;
                    var11 = var12.getSessionId;
                    var11 = var11.bind(var12)();
                    var8.session_id = var11;
                    var8.data = var10;
                    var8.nonce = var6;
                    var8.analytics_location = var4;
                    var8.section_name = var3;
                    var8.source = var2;
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun39350_ip = 213;
                        continue _fun39350
                    }
                case 187:
                    var3 = var8.data;
                    var4 = var5.map;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var3 = arg0;
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 18;
                        var1 = var4[var1];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var1);
                        var5 = var3.status;
                        var1 = _closure1_slot0;
                        var0 = 19;
                        var0 = var4[var0];
                        var0 = var1.bind(var2)(var0);
                        var0 = var0.CloudUploadStatus;
                        var0 = var0.COMPLETED;
                        var5 = var5 === var0;
                        var0 = 'Uploads must be staged before trying to send a message';
                        var0 = var6.bind(var2)(var5, var0);
                        var0 = 20;
                        var0 = var4[var0];
                        var2 = var1.bind(var2)(var0);
                        var1 = var2.getAttachmentPayload;
                        var0 = arg1;
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    };
                    var2 = var4.bind(var5)(var2);
                    var3.attachments = var2;
                case 213:
                    var2 = global;
                    var2 = var2.AbortController;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var19 = var3;
                    var2 = new var19[var2](var18);
                    var5 = var2 instanceof Object ? var2 : var3;
                    _closure3_slot4 = var5;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 13;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var9 = _closure1_slot15;
                    var9 = var9.INTERACTIONS;
                    var2.url = var9;
                    var2.body = var8;
                    var5 = var5.signal;
                    var2.signal = var5;
                    var5 = true;
                    var2.rejectWithError = var5;
                    var1 = function(arg0) { // Original name: onRequestCreated, environment: var1
                        var3 = arg0;
                        var1 = _closure3_slot0;
                        var4 = var1.requests;
                        var2 = var4.set;
                        var1 = _closure3_slot2;
                        var0 = _closure3_slot4;
                        var0 = var2.bind(var4)(var1, var0);
                        var2 = var3.on;
                        var1 = 'progress';
                        var0 = function(arg0) { // Environment: var0
                            _fun39353: for (var _fun39353_ip = 0;;) switch (_fun39353_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = var0.total;
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 21;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var4 = var2.bind(var0)(var1);
                                    var3 = var4.maxFileSize;
                                    var2 = _closure3_slot1;
                                    var2 = var3.bind(var4)(var2);
                                    var4 = null;
                                    var3 = var4 != var5;
                                    if (!var3) {
                                        _fun39353_ip = 65;
                                        continue _fun39353
                                    }
                                case 61:
                                    var3 = var5 > var2;
                                case 65:
                                    if (!var3) {
                                        _fun39353_ip = 104;
                                        continue _fun39353
                                    }
                                case 68:
                                    var6 = _closure3_slot0;
                                    var5 = var6.cancelRequest;
                                    var3 = _closure3_slot2;
                                    var3 = var5.bind(var6)(var3);
                                    var3 = _closure3_slot3;
                                    if (!(var4 != var3)) {
                                        _fun39353_ip = 104;
                                        continue _fun39353
                                    }
                                case 95:
                                    var1 = _closure3_slot3;
                                    var1 = var1.bind(var0)(var2);
                                case 104:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var2.onRequestCreated = var1;
                    var5 = var7.createResponseHandler;
                    var1 = arg1;
                    var1 = var5.bind(var7)(var6, var1);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var6.bind(var0)(var7);
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var16 = var7;
    var6 = new var16[var6](var15);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 23;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'lib/MessageQueue.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.MessageDataType = var5;
    var2.isMessageDataSend = var4;
    var2.isMessageDataEdit = var3;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var1 = var0.type;
        var0 = _closure1_slot18;
        var0 = var0.COMMAND;
        var0 = var1 === var0;
        return var0;
    };
    var2.isMessageDataCommand = var3;
    var1 = function(arg0) { // Environment: var1
        _fun39355: for (var _fun39355_ip = 0;;) switch (_fun39355_ip) {
            case 0:
                var1 = arg0;
                var3 = _closure1_slot19;
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                if (var3) {
                    _fun39355_ip = 56;
                    continue _fun39355
                }
            case 20:
                var0 = _closure1_slot20;
                var0 = var0.bind(var2)(var1);
                var2 = var1.message;
                if (var0) {
                    _fun39355_ip = 49;
                    continue _fun39355
                }
            case 37:
                var0 = var2.data;
                var0 = var0.id;
                _fun39355_ip = 54;
                continue _fun39355;
            case 49:
                var0 = var2.messageId;
            case 54:
                _fun39355_ip = 67;
                continue _fun39355;
            case 56:
                var1 = var1.message;
                var0 = var1.nonce;
            case 67:
                return var0;
        }
    };
    var2.getFailedMessageId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 3958, 1216, 3583, 660, 1346, 667, 3, 507, 4259, 4268, 4269, 1636, 44, 3957, 3960, 3962, 8355, 2]);