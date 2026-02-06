// modules/messages/MessageRoundtripTrackerStore.tsx
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
        _fun54316: for (var _fun54316_ip = 0;;) switch (_fun54316_ip) {
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
                _fun54316_ip = 74;
                continue _fun54316;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        _fun54319: for (var _fun54319_ip = 0;;) switch (_fun54319_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.apiResponseTimestamp;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun54319_ip = 28;
                    continue _fun54319
                }
            case 18:
                var1 = var1.gatewaySeenTimestamp;
                var0 = var2 != var1;
            case 28:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun54320: for (var _fun54320_ip = 0;;) switch (_fun54320_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot8;
                var1 = var2.getBasicChannel;
                var0 = var5.channelId;
                var8 = var1.bind(var2)(var0);
                var4 = null;
                if (!(var4 == var8)) {
                    _fun54320_ip = 87;
                    continue _fun54320
                }
            case 32:
                var2 = _closure1_slot12;
                var1 = var2.warn;
                var9 = var5.channelId;
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var3 = 'Ignoring a messageData for channel ';
                var0 = " because we can't find that channel.";
                var0 = var6.bind(var3)(var9, var0);
                var0 = var1.bind(var2)(var0);
                _fun54320_ip = 436;
                continue _fun54320;
            case 87:
                var0 = global;
                var1 = var0.Math;
                var0 = var1.random;
                var1 = var0.bind(var1)();
                var0 = 0.1;
                if (!(!(var1 > var0))) {
                    _fun54320_ip = 436;
                    continue _fun54320
                }
            case 122:
                var0 = var5.apiResponseTimestamp;
                var0 = var4 == var0;
                var11 = null;
                if (var0) {
                    _fun54320_ip = 153;
                    continue _fun54320
                }
            case 137:
                var1 = var5.apiResponseTimestamp;
                var0 = var5.initialSendTimestamp;
                var11 = var1 - var0;
            case 153:
                var0 = var5.gatewaySeenTimestamp;
                var0 = var4 == var0;
                var10 = null;
                if (var0) {
                    _fun54320_ip = 184;
                    continue _fun54320
                }
            case 168:
                var1 = var5.gatewaySeenTimestamp;
                var0 = var5.initialSendTimestamp;
                var10 = var1 - var0;
            case 184:
                var1 = _closure1_slot0;
                var14 = _closure1_slot2;
                var0 = 10;
                var0 = var14[var0];
                var12 = undefined;
                var1 = var1.bind(var12)(var0);
                var0 = var1.getSignalStrength;
                var6 = var0.bind(var1)();
                var13 = _closure1_slot1;
                var0 = 11;
                var0 = var14[var0];
                var3 = var13.bind(var12)(var0);
                var2 = var3.track;
                var0 = _closure1_slot11;
                var1 = var0.SEND_MESSAGE_ROUNDTRIP;
                var0 = {};
                var9 = 12;
                var9 = var14[var9];
                var9 = var13.bind(var12)(var9);
                var15 = var9.bind(var12)();
                var16 = var0;
                var9 = copyDataProperties(var16, var15);
                var9 = 'api_latency_ms';
                var0[var9] = var11;
                var9 = 'gateway_latency_ms';
                var0[var9] = var10;
                var10 = var8.id;
                var9 = 'channel_id';
                var0[var9] = var10;
                var10 = var8.type;
                var9 = 'channel_type';
                var0[var9] = var10;
                var10 = var8.guild_id;
                var9 = 'guild_id';
                var0[var9] = var10;
                var10 = _closure1_slot9;
                var9 = var10.getMemberCount;
                var8 = var8.guild_id;
                var9 = var9.bind(var10)(var8);
                var8 = 'guild_size';
                var0[var8] = var9;
                var8 = _closure1_slot10;
                var7 = var8.getType;
                var8 = var7.bind(var8)();
                var7 = 'mobile_network_type';
                var0[var7] = var8;
                var7 = var5.attachmentCount;
                var5 = 'num_attachments';
                var0[var5] = var7;
                var4 = var4 != var6;
                if (!var4) {
                    _fun54320_ip = 420;
                    continue _fun54320
                }
            case 410:
                var5 = {};
                var5.mobile_signal_strength_level = var6;
                var4 = var5;
            case 420:
                var16 = var0;
                var15 = var4;
                var4 = copyDataProperties(var16, var15);
                var0 = var2.bind(var3)(var1, var0);
            case 436:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var8 = var6.bind(var0)(var1);
    var1 = var8.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var11 = 'MessageRoundtripTrackerStore';
    var12 = var7;
    var1 = new var12[var8](var11, var10);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot12 = var1;
    var1 = 13;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun54322: for (var _fun54322_ip = 0;;) switch (_fun54322_ip) {
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun54322_ip = 84;
                        continue _fun54322
                    }
                case 71:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun54322_ip = 118;
                    continue _fun54322;
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
                    var1 = global;
                    var1 = var1.Map;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var2;
                    var1 = new var12[var1](var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.pendingMessages = var1;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var0 = _closure1_slot10;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'recordMessageSendAttempt';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun54324: for (var _fun54324_ip = 0;;) switch (_fun54324_ip) {
                case 0:
                    var6 = arg1;
                    var5 = arguments[2];
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var _closure3_slot1 = var6;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun54324_ip = 27;
                        continue _fun54324
                    }
                case 25:
                    var5 = {};
                case 27:
                    var2 = var5.attachments;
                    var7 = null;
                    var4 = var7 == var2;
                    var8 = undefined;
                    if (var4) {
                        _fun54324_ip = 49;
                        continue _fun54324
                    }
                case 44:
                    var8 = var2.length;
                case 49:
                    var9 = var7 != var8;
                    var2 = 0;
                    if (!var9) {
                        _fun54324_ip = 61;
                        continue _fun54324
                    }
                case 58:
                    var2 = var8;
                case 61:
                    var8 = var5.attachmentsToUpload;
                    var9 = var7 == var8;
                    var5 = undefined;
                    if (var9) {
                        _fun54324_ip = 81;
                        continue _fun54324
                    }
                case 76:
                    var5 = var8.length;
                case 81:
                    var7 = var7 != var5;
                    var4 = 0;
                    if (!var7) {
                        _fun54324_ip = 93;
                        continue _fun54324
                    }
                case 90:
                    var4 = var5;
                case 93:
                    var4 = var2 + var4;
                    var5 = {
                        'initialSendTimestamp': null,
                        'apiResponseTimestamp': null,
                        'gatewaySeenTimestamp': null
                    };
                    var2 = global;
                    var8 = var2.Date;
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var5.initialSendTimestamp = var7;
                    var7 = arg0;
                    var5.channelId = var7;
                    var5.attachmentCount = var4;
                    var4 = var3.pendingMessages;
                    var3 = var4.set;
                    var3 = var3.bind(var4)(var6, var5);
                    var3 = var2.setTimeout;
                    var2 = function() { // Environment: var1
                        _fun54325: for (var _fun54325_ip = 0;;) switch (_fun54325_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var3 = var1.pendingMessages;
                                var2 = var3.get;
                                var1 = _closure3_slot1;
                                var3 = var2.bind(var3)(var1);
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun54325_ip = 71;
                                    continue _fun54325
                                }
                            case 33:
                                var2 = _closure1_slot16;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
                                var1 = _closure3_slot0;
                                var2 = var1.pendingMessages;
                                var1 = var2.delete;
                                var0 = _closure3_slot1;
                                var0 = var1.bind(var2)(var0);
                            case 71:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = 30000;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'recordMessageSendApiResponse';
        var4.key = var6;
        var6 = function arg0() {
            _fun54326: for (var _fun54326_ip = 0;;) switch (_fun54326_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.pendingMessages;
                    var1 = var3.get;
                    var1 = var1.bind(var3)(var2);
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun54326_ip = 127;
                        continue _fun54326
                    }
                case 28:
                    var4 = {};
                    var8 = var4;
                    var7 = var1;
                    var1 = copyDataProperties(var8, var7);
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var3 = var1.bind(var3)();
                    var1 = 'apiResponseTimestamp';
                    var4[var1] = var3;
                    var5 = _closure1_slot15;
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    if (var5) {
                        _fun54326_ip = 102;
                        continue _fun54326
                    }
                case 83:
                    var6 = var0.pendingMessages;
                    var5 = var6.set;
                    var5 = var5.bind(var6)(var2, var4);
                    _fun54326_ip = 127;
                    continue _fun54326;
                case 102:
                    var1 = _closure1_slot16;
                    var1 = var1.bind(var3)(var4);
                    var1 = var0.pendingMessages;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                case 127:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'recordGatewayResponse';
        var4.key = var6;
        var5 = function arg0() {
            _fun54327: for (var _fun54327_ip = 0;;) switch (_fun54327_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.pendingMessages;
                    var1 = var3.get;
                    var1 = var1.bind(var3)(var2);
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun54327_ip = 127;
                        continue _fun54327
                    }
                case 28:
                    var4 = {};
                    var8 = var4;
                    var7 = var1;
                    var1 = copyDataProperties(var8, var7);
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var3 = var1.bind(var3)();
                    var1 = 'gatewaySeenTimestamp';
                    var4[var1] = var3;
                    var5 = _closure1_slot15;
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    if (var5) {
                        _fun54327_ip = 102;
                        continue _fun54327
                    }
                case 83:
                    var6 = var0.pendingMessages;
                    var5 = var6.set;
                    var5 = var5.bind(var6)(var2, var4);
                    _fun54327_ip = 127;
                    continue _fun54327;
                case 102:
                    var1 = _closure1_slot16;
                    var1 = var1.bind(var3)(var4);
                    var1 = var0.pendingMessages;
                    var0 = var1.delete;
                    var0 = var0.bind(var1)(var2);
                case 127:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 14;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function arg0() {
        _fun54328: for (var _fun54328_ip = 0;;) switch (_fun54328_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.optimistic;
                var1 = var1.message;
                var2 = var1.nonce;
                if (var0) {
                    _fun54328_ip = 29;
                    continue _fun54328
                }
            case 23:
                var1 = null;
                var0 = var1 == var2;
            case 29:
                if (var0) {
                    _fun54328_ip = 52;
                    continue _fun54328
                }
            case 32:
                var1 = _closure1_slot13;
                var0 = var1.recordGatewayResponse;
                var0 = var0.bind(var1)(var2);
            case 52:
                var0 = undefined;
                return var0;
        }
    };
    var1.MESSAGE_CREATE = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var12 = var6;
    var10 = var1;
    var1 = new var12[var8](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot13 = var1;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/MessageRoundtripTrackerStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1599, 3628, 660, 3, 4313, 795, 5283, 566, 806, 2]);