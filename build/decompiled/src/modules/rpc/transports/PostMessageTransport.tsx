// modules/rpc/transports/PostMessageTransport.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun63220: for (var _fun63220_ip = 0;;) switch (_fun63220_ip) {
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
                _fun63220_ip = 74;
                continue _fun63220;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
    var3 = global;
    var9 = var3.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var8.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var _closure1_slot10 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.RPC_EMBEDDED_APP_SCOPE;
    var _closure1_slot11 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.AnalyticEvents;
    var _closure1_slot12 = var7;
    var7 = var6.ComponentActions;
    var _closure1_slot13 = var7;
    var7 = var6.RPCCloseCodes;
    var _closure1_slot14 = var7;
    var6 = var6.RPCErrors;
    var _closure1_slot15 = var6;
    var7 = 10;
    var6 = var5[var7];
    var6 = var8.bind(var0)(var6);
    var6 = var6.Millis;
    var6 = var6.SECOND;
    var6 = var7 * var6;
    var _closure1_slot16 = var6;
    var6 = var3.Map;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var13 = var7;
    var6 = new var13[var6](var12);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot17 = var6;
    var3 = var3.Set;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var13 = var6;
    var3 = new var13[var3](var12);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot18 = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var1 = var1.CLOSE;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = arg1;
        var3[1] = var1;
        var2 = arg2;
        var1 = arg0;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var _closure1_slot19 = var3;
    var3 = 19;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EventEmitter;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1, arg2, arg3() {
            _fun63225: for (var _fun63225_ip = 0;;) switch (_fun63225_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var5, var3);
                    var0 = _closure1_slot8;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot7;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun63225_ip = 64;
                        continue _fun63225
                    }
                case 51:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var4);
                    _fun63225_ip = 102;
                    continue _fun63225;
                case 64:
                    var6 = global;
                    var9 = var6.Reflect;
                    var8 = var9.construct;
                    var6 = _closure1_slot8;
                    var6 = var6.bind(var4)(var5);
                    var7 = var6.constructor;
                    var6 = new Array(0);
                    var0 = var8.bind(var9)(var10, var6, var7);
                case 102:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = function(arg0, arg1) { // Environment: var2
                        _fun63226: for (var _fun63226_ip = 0;;) switch (_fun63226_ip) {
                            case 0:
                                var6 = arg0;
                                var1 = arg1;
                                var2 = arguments[2];
                                var _closure4_slot0 = var6;
                                var0 = undefined;
                                if (!(var2 === var0)) {
                                    _fun63226_ip = 23;
                                    continue _fun63226
                                }
                            case 21:
                                var2 = false;
                            case 23:
                                var7 = _closure3_slot0;
                                var5 = var7.emit;
                                var4 = undefined;
                                if (var2) {
                                    _fun63226_ip = 44;
                                    continue _fun63226
                                }
                            case 41:
                                var4 = var1;
                            case 44:
                                var2 = 'disconnect';
                                var2 = var5.bind(var7)(var2, var6, var4);
                                var5 = var6.close;
                                var4 = var1.code;
                                var7 = var1.message;
                                var2 = null;
                                var8 = var2 != var7;
                                var1 = 'Unknown';
                                if (!var8) {
                                    _fun63226_ip = 87;
                                    continue _fun63226
                                }
                            case 84:
                                var1 = var7;
                            case 87:
                                var1 = var5.bind(var6)(var4, var1);
                                var1 = global;
                                var6 = var1.Array;
                                var5 = var6.from;
                                var7 = _closure1_slot17;
                                var4 = var7.entries;
                                var4 = var4.bind(var7)();
                                var5 = var5.bind(var6)(var4);
                                var4 = var5.find;
                                var3 = function(arg0) { // Environment: var3
                                    _fun63227: for (var _fun63227_ip = 0;;) switch (_fun63227_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var0 = var3[Symbol.iterator];
                                            var3 = var0().next;
                                            var1 = var3().value;
                                            var1 = var0;
                                            var5 = undefined;
                                            var2 = var1 === var5;
                                            var1 = undefined;
                                            if (var2) {
                                                _fun63227_ip = 49;
                                                continue _fun63227
                                            }
                                        case 24:
                                            var4 = var3().value;
                                            var3 = var0;
                                            var3 = var3 === var5;
                                            var1 = undefined;
                                            var2 = var3;
                                            if (var3) {
                                                _fun63227_ip = 49;
                                                continue _fun63227
                                            }
                                        case 43:
                                            var1 = var4;
                                            var2 = var3;
                                        case 49:
                                            if (var2) {
                                                _fun63227_ip = 55;
                                                continue _fun63227
                                            }
                                        case 52:
                                            var0.return();
                                        case 55:
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                    }
                                };
                                var5 = var4.bind(var5)(var3);
                                if (!(var2 == var5)) {
                                    _fun63226_ip = 157;
                                    continue _fun63226
                                }
                            case 147:
                                var5 = [null, null];
                            case 157:
                                var4 = _closure1_slot4;
                                var3 = 1;
                                var4 = var4.bind(var0)(var5, var3);
                                var3 = 0;
                                var3 = var4[var3];
                                if (!(var2 != var3)) {
                                    _fun63226_ip = 194;
                                    continue _fun63226
                                }
                            case 180:
                                var2 = _closure1_slot17;
                                var1 = var2.delete;
                                var1 = var1.bind(var2)(var3);
                            case 194:
                                return var0;
                        }
                    };
                    var0.disconnectSocket = var3;
                    var3 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var3 = var0.id;
                        var2 = _closure1_slot18;
                        var1 = var2.add;
                        var1 = var1.bind(var2)(var3);
                        var2 = _closure3_slot0;
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = _closure1_slot16;
                        var0 = undefined;
                        var1 = function() { // Environment: var1
                            var0 = global;
                            var2 = var0.Array;
                            var1 = var2.from;
                            var3 = _closure1_slot10;
                            var0 = var3.getSelfEmbeddedActivities;
                            var3 = var0.bind(var3)();
                            var0 = var3.entries;
                            var0 = var0.bind(var3)();
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                _fun63230: for (var _fun63230_ip = 0;;) switch (_fun63230_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var1 = var3[Symbol.iterator];
                                        var3 = var1().next;
                                        var4 = var3().value;
                                        var2 = var1;
                                        var0 = undefined;
                                        var2 = var2 === var0;
                                        var7 = undefined;
                                        if (var2) {
                                            _fun63230_ip = 27;
                                            continue _fun63230
                                        }
                                    case 24:
                                        var7 = var4;
                                    case 27:
                                        var6 = undefined;
                                        if (var2) {
                                            _fun63230_ip = 57;
                                            continue _fun63230
                                        }
                                    case 32:
                                        var4 = var3().value;
                                        var3 = var1;
                                        var3 = var3 === var0;
                                        var6 = undefined;
                                        var2 = var3;
                                        if (var3) {
                                            _fun63230_ip = 57;
                                            continue _fun63230
                                        }
                                    case 51:
                                        var6 = var4;
                                        var2 = var3;
                                    case 57:
                                        if (var2) {
                                            _fun63230_ip = 63;
                                            continue _fun63230
                                        }
                                    case 60:
                                        var1.return();
                                    case 63:
                                        var2 = _closure1_slot1;
                                        var9 = _closure1_slot2;
                                        var1 = 12;
                                        var1 = var9[var1];
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.track;
                                        var1 = _closure1_slot12;
                                        var2 = var1.ACTIVITY_HANDSHAKE_TIMED_OUT;
                                        var1 = {};
                                        var1.application_id = var7;
                                        var8 = _closure1_slot0;
                                        var7 = 13;
                                        var10 = var9[var7];
                                        var12 = var8.bind(var0)(var10);
                                        var11 = var12.getEmbeddedActivityLocationChannelId;
                                        var10 = var6.location;
                                        var10 = var11.bind(var12)(var10);
                                        var1.channel_id = var10;
                                        var7 = var9[var7];
                                        var8 = var8.bind(var0)(var7);
                                        var7 = var8.getEmbeddedActivityLocationGuildId;
                                        var6 = var6.location;
                                        var6 = var7.bind(var8)(var6);
                                        var1.guild_id = var6;
                                        var5 = _closure1_slot16;
                                        var1.timeout_ms = var5;
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var4.bind(var0)(var1, var3);
                        var2.handshakeFailureTimeoutId = var1;
                        return var0;
                    };
                    var0.handleIFrameMount = var3;
                    var3 = function(arg0) { // Environment: var2
                        _fun63231: for (var _fun63231_ip = 0;;) switch (_fun63231_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = var1.id;
                                var _closure4_slot0 = var4;
                                var3 = _closure1_slot18;
                                var2 = var3.delete;
                                var2 = var2.bind(var3)(var4);
                                var2 = global;
                                var4 = var2.Array;
                                var3 = var4.from;
                                var5 = _closure1_slot17;
                                var2 = var5.entries;
                                var2 = var2.bind(var5)();
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.find;
                                var0 = function(arg0) { // Environment: var0
                                    _fun63232: for (var _fun63232_ip = 0;;) switch (_fun63232_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var1 = var3[Symbol.iterator];
                                            var3 = var1().next;
                                            var0 = var3().value;
                                            var0 = var1;
                                            var5 = undefined;
                                            var2 = var0 === var5;
                                            var0 = undefined;
                                            if (var2) {
                                                _fun63232_ip = 49;
                                                continue _fun63232
                                            }
                                        case 24:
                                            var4 = var3().value;
                                            var3 = var1;
                                            var3 = var3 === var5;
                                            var0 = undefined;
                                            var2 = var3;
                                            if (var3) {
                                                _fun63232_ip = 49;
                                                continue _fun63232
                                            }
                                        case 43:
                                            var0 = var4;
                                            var2 = var3;
                                        case 49:
                                            if (var2) {
                                                _fun63232_ip = 55;
                                                continue _fun63232
                                            }
                                        case 52:
                                            var1.return();
                                        case 55:
                                            var1 = var0.frameId;
                                            var0 = _closure4_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                    }
                                };
                                var5 = var2.bind(var3)(var0);
                                var4 = null;
                                if (!(var4 == var5)) {
                                    _fun63231_ip = 94;
                                    continue _fun63231
                                }
                            case 84:
                                var5 = [null, null];
                            case 94:
                                var3 = _closure1_slot4;
                                var0 = undefined;
                                var2 = 2;
                                var5 = var3.bind(var0)(var5, var2);
                                var2 = 0;
                                var3 = var5[var2];
                                var2 = 1;
                                var7 = var5[var2];
                                var2 = var4 != var7;
                                if (!var2) {
                                    _fun63231_ip = 133;
                                    continue _fun63231
                                }
                            case 129:
                                var2 = var4 != var3;
                            case 133:
                                if (!var2) {
                                    _fun63231_ip = 198;
                                    continue _fun63231
                                }
                            case 136:
                                var6 = _closure3_slot0;
                                var5 = var6.disconnectSocket;
                                var4 = {};
                                var2 = _closure1_slot14;
                                var2 = var2.CLOSE_NORMAL;
                                var4.code = var2;
                                var2 = 'iFrame gone';
                                var4.message = var2;
                                var2 = true;
                                var2 = var5.bind(var6)(var7, var4, var2);
                                var2 = _closure1_slot17;
                                var1 = var2.delete;
                                var1 = var1.bind(var2)(var3);
                            case 198:
                                return var0;
                        }
                    };
                    var0.handleIFrameUnmount = var3;
                    var3 = function(arg0, arg1, arg2) { // Environment: var2
                        _fun63233: for (var _fun63233_ip = 0;;) switch (_fun63233_ip) {
                            case 0:
                                var9 = arg1;
                                var6 = arg0;
                                var4 = var9;
                                var3 = arg2;
                                var1 = undefined;
                                var2 = undefined;
                                var8 = _closure1_slot17;
                                var7 = var8.get;
                                var2 = var7.bind(var8)(var9);
                            case 33: // try_start_0
                                var11 = _closure3_slot0;
                                var10 = var11.routeEvent;
                                var15 = var2;
                                var14 = var4;
                                var13 = var6;
                                var12 = var3;
                                var16 = var11;
                                var6 = var16[var10](var15, var14, var13, var12, var11);
                            case 67: // try_end0
                                _fun63233_ip = 223;
                                continue _fun63233;
                            case 72: // catch_target0
                                CatchBlockStart(arg_register = 7);
                                var0 = var7;
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var6 = 14;
                                var6 = var9[var6];
                                var6 = var8.bind(var1)(var6);
                                var6 = var7 instanceof var6;
                                if (!var6) {
                                    _fun63233_ip = 127;
                                    continue _fun63233
                                }
                            case 104:
                                var6 = var0;
                                var7 = var6.errorCode;
                                var6 = _closure1_slot15;
                                var6 = var6.INVALID_PAYLOAD;
                                if (!(var7 !== var6)) {
                                    _fun63233_ip = 225;
                                    continue _fun63233
                                }
                            case 127:
                                var7 = var2;
                                var6 = null;
                                if (!(var6 == var7)) {
                                    _fun63233_ip = 175;
                                    continue _fun63233
                                }
                            case 136:
                                var6 = _closure1_slot19;
                                var5 = var4;
                                var4 = {};
                                var7 = var0;
                                var8 = var7.code;
                                var4.code = var8;
                                var7 = var7.message;
                                var4.message = var7;
                                var3 = var6.bind(var1)(var5, var4, var3);
                                _fun63233_ip = 223;
                                continue _fun63233;
                            case 175:
                                var6 = _closure3_slot0;
                                var5 = var6.disconnectSocket;
                                var4 = var2;
                                var3 = {};
                                var2 = var0;
                                var7 = var2.code;
                                var3.code = var7;
                                var2 = var2.message;
                                var3.message = var2;
                                var2 = true;
                                var2 = var5.bind(var6)(var4, var3, var2);
                            case 223:
                                return var1;
                            case 225:
                                throw var0;
                        }
                    };
                    var0.handleMessage = var3;
                    var3 = function(arg0, arg1, arg2) { // Environment: var2
                        _fun63234: for (var _fun63234_ip = 0;;) switch (_fun63234_ip) {
                            case 0:
                                var2 = arg1;
                                var1 = var2;
                                var4 = arg2;
                                var3 = undefined;
                                var0 = undefined;
                                var5 = var2.origin;
                                var2 = arg0;
                                if (!(var2 === var5)) {
                                    _fun63234_ip = 220;
                                    continue _fun63234
                                }
                            case 29: // try_start_0
                                var2 = var4;
                                var5 = 'string';
                                var2 = typeof var2;
                                if (!(var5 !== var2)) {
                                    _fun63234_ip = 48;
                                    continue _fun63234
                                }
                            case 43:
                                var2 = var4;
                                _fun63234_ip = 67;
                                continue _fun63234;
                            case 48:
                                var5 = global;
                                var6 = var5.JSON;
                                var5 = var6.parse;
                                var2 = var5.bind(var6)(var4);
                            case 67:
                                var0 = var2;
                            case 70: // try_end0
                                var4 = _closure3_slot0;
                                var5 = var4.onFrameHandled;
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun63234_ip = 118;
                                    continue _fun63234
                                }
                            case 89:
                                var8 = _closure3_slot0;
                                var7 = var8.onFrameHandled;
                                var6 = var0;
                                var5 = var8.logger;
                                var4 = var1;
                                var4 = var7.bind(var8)(var6, var5, var4);
                            case 118:
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var2 = var1;
                                var1 = var0;
                                var0 = 'request';
                                var0 = var4.bind(var5)(var0, var2, var1);
                                return var3;
                            case 147: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 14;
                                var1 = var4[var1];
                                var4 = var2.bind(var3)(var1);
                                var2 = {};
                                var0 = _closure1_slot14;
                                var0 = var0.CLOSE_UNSUPPORTED;
                                var2.closeCode = var0;
                                var0 = var4.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var10 = 'Payload not recognized encoding';
                                var12 = var1;
                                var11 = var2;
                                var0 = new var12[var4](var11, var10, var9);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                            case 220:
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 14;
                                var1 = var4[var1];
                                var3 = var2.bind(var3)(var1);
                                var2 = {};
                                var0 = _closure1_slot14;
                                var0 = var0.INVALID_ORIGIN;
                                var2.closeCode = var0;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var10 = 'Origin has changed';
                                var12 = var1;
                                var11 = var2;
                                var0 = new var12[var3](var11, var10, var9);
                                var0 = var0 instanceof Object ? var0 : var1;
                                throw var0;
                        }
                    };
                    var0.handleFrame = var3;
                    var3 = function() { // Environment: var2
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0, arg1, arg2) { // Environment: var0
                            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                                _fun63237: for (var _fun63237_ip = 0;;) switch (_fun63237_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun63237_ip = 1269;
                                            continue _fun63237
                                        }
                                    case 10:
                                        var7 = arg0;
                                        var10 = arg1;
                                        var5 = arg2;
                                        var6 = undefined;
                                        var11 = undefined;
                                        var9 = undefined;
                                        var2 = undefined;
                                        var8 = undefined;
                                        var14 = undefined;
                                        var1 = _closure3_slot0;
                                        var1 = var1.handshakeFailureTimeoutId;
                                        var16 = null;
                                        if (!(var16 != var1)) {
                                            _fun63237_ip = 73;
                                            continue _fun63237
                                        }
                                    case 50:
                                        var1 = global;
                                        var3 = var1.clearTimeout;
                                        var1 = _closure3_slot0;
                                        var1 = var1.handshakeFailureTimeoutId;
                                        var1 = var3.bind(var6)(var1);
                                    case 73:
                                        var13 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var12 = 16;
                                        var12 = var1[var12];
                                        var13 = var13.bind(var6)(var12);
                                        var12 = 15;
                                        var12 = var1[var12];
                                        var1 = var1.paths;
                                        var1 = var13.bind(var6)(var12, var1);
                                        SaveGenerator(address = 118);
                                    case 116:
                                        return var1;
                                    case 118:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 12);
                                        if (var12) {
                                            _fun63237_ip = 1266;
                                            continue _fun63237
                                        }
                                    case 127:
                                        var11 = var1.default;
                                    case 132: // try_start_0
                                        var17 = var11;
                                        var15 = var17.assert;
                                        var12 = var10;
                                        var13 = _closure1_slot1;
                                        var18 = _closure1_slot2;
                                        var11 = 17;
                                        var11 = var18[var11];
                                        var11 = var13.bind(var6)(var11);
                                        var13 = var11.bind(var6)(var17);
                                        var11 = var13.required;
                                        var19 = var11.bind(var13)();
                                        var18 = var19.keys;
                                        var11 = {};
                                        var13 = var17.number;
                                        var20 = var13.bind(var17)();
                                        var13 = var20.min;
                                        var21 = 1;
                                        var20 = var13.bind(var20)(var21);
                                        var13 = var20.max;
                                        var20 = var13.bind(var20)(var21);
                                        var13 = var20.required;
                                        var13 = var13.bind(var20)();
                                        var11.v = var13;
                                        var13 = var17.string;
                                        var21 = var13.bind(var17)();
                                        var20 = var21.equal;
                                        var13 = 'json';
                                        var21 = var20.bind(var21)(var13);
                                        var20 = var21.optional;
                                        var20 = var20.bind(var21)();
                                        var11.encoding = var20;
                                        var20 = var17.string;
                                        var21 = var20.bind(var17)();
                                        var20 = var21.required;
                                        var20 = var20.bind(var21)();
                                        var11.client_id = var20;
                                        var20 = var17.string;
                                        var21 = var20.bind(var17)();
                                        var20 = var21.required;
                                        var20 = var20.bind(var21)();
                                        var11.frame_id = var20;
                                        var20 = var17.string;
                                        var21 = var20.bind(var17)();
                                        var20 = var21.optional;
                                        var20 = var20.bind(var21)();
                                        var11.sdk_version = var20;
                                        var11 = var18.bind(var19)(var11);
                                        var11 = var15.bind(var17)(var12, var11);
                                    case 355: // try_end0
                                        var2 = var10;
                                        var12 = var10.frame_id;
                                        var8 = var12;
                                        var11 = _closure1_slot18;
                                        var10 = var11.has;
                                        var10 = var10.bind(var11)(var12);
                                        if (var10) {
                                            _fun63237_ip = 512;
                                            continue _fun63237
                                        }
                                    case 387:
                                        var10 = _closure3_slot0;
                                        var18 = var10.logger;
                                        var15 = var18.error;
                                        var17 = var8;
                                        var10 = global;
                                        var11 = var10.HermesInternal;
                                        var12 = var11.concat;
                                        var11 = 'Unrecognized frame ID ';
                                        var12 = var12.bind(var11)(var17);
                                        var12 = var15.bind(var18)(var12);
                                        var15 = _closure1_slot1;
                                        var18 = _closure1_slot2;
                                        var12 = 14;
                                        var12 = var18[var12];
                                        var15 = var15.bind(var6)(var12);
                                        var12 = {};
                                        var18 = _closure1_slot14;
                                        var18 = var18.CLOSE_UNSUPPORTED;
                                        var12.closeCode = var18;
                                        var10 = var10.HermesInternal;
                                        var10 = var10.concat;
                                        var23 = var10.bind(var11)(var17);
                                        var11 = var15.prototype;
                                        var11 = Object.create(var11, {
                                            constructor: {
                                                value: var15
                                            }
                                        });
                                        var25 = var11;
                                        var24 = var12;
                                        var10 = new var25[var15](var24, var23, var22);
                                        var10 = var10 instanceof Object ? var10 : var11;
                                        throw var10;
                                    case 512:
                                        var10 = var2;
                                        var10 = var10.sdk_version;
                                        if (!(var16 != var10)) {
                                            _fun63237_ip = 593;
                                            continue _fun63237
                                        }
                                    case 525:
                                        var11 = _closure1_slot1;
                                        var12 = _closure1_slot2;
                                        var10 = 12;
                                        var10 = var12[var10];
                                        var15 = var11.bind(var6)(var10);
                                        var12 = var15.track;
                                        var10 = _closure1_slot12;
                                        var11 = var10.ACTIVITY_HANDSHAKE;
                                        var10 = {};
                                        var17 = var2;
                                        var18 = var17.client_id;
                                        var10.application_id = var18;
                                        var17 = var17.sdk_version;
                                        var10.sdk_version = var17;
                                        var10 = var12.bind(var15)(var11, var10);
                                    case 593: // try_start_1
                                        var12 = _closure3_slot0;
                                        var11 = var12.createPostMessageProxySocket;
                                        var10 = {};
                                        var15 = var7;
                                        var10.origin = var15;
                                        var10.postMessageToRPCClient = var5;
                                        var5 = var8;
                                        var10.frameId = var5;
                                        var5 = global;
                                        var18 = var5.Number;
                                        var15 = var2;
                                        var17 = var15.v;
                                        var17 = var18.bind(var6)(var17);
                                        var10.version = var17;
                                        var17 = var12.logger;
                                        var10.logger = var17;
                                        var17 = _closure1_slot19;
                                        var10.postClose = var17;
                                        var15 = var15.encoding;
                                        var14 = var15;
                                        var15 = var16 != var15;
                                        if (!var15) {
                                            _fun63237_ip = 691;
                                            continue _fun63237
                                        }
                                    case 688:
                                        var13 = var14;
                                    case 691:
                                        var10.encoding = var13;
                                        var9 = var11.bind(var12)(var10);
                                    case 701: // try_end1
                                        var10 = _closure3_slot0;
                                        var12 = var10.logger;
                                        var11 = var12.info;
                                        var10 = var9;
                                        var14 = var10.id;
                                        var10 = var5.HermesInternal;
                                        var13 = var10.concat;
                                        var10 = 'Socket Opened: ';
                                        var10 = var13.bind(var10)(var14);
                                        var10 = var11.bind(var12)(var10);
                                    case 752: // try_start_2
                                        var13 = _closure3_slot0;
                                        var12 = var13.validateSocketClient;
                                        var11 = var9;
                                        var10 = var7;
                                        var2 = var2.client_id;
                                        var2 = var12.bind(var13)(var11, var10, var2);
                                        SaveGenerator(address = 785);
                                    case 783:
                                        return var2;
                                    case 785:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 10);
                                        if (var10) {
                                            _fun63237_ip = 1081;
                                            continue _fun63237
                                        }
                                    case 794:
                                        var12 = _closure1_slot18;
                                        var11 = var12.has;
                                        var10 = var8;
                                        var10 = var11.bind(var12)(var10);
                                        if (var10) {
                                            _fun63237_ip = 953;
                                            continue _fun63237
                                        }
                                    case 817:
                                        var10 = _closure3_slot0;
                                        var12 = var10.logger;
                                        var11 = var12.error;
                                        var14 = var8;
                                        var10 = var5.HermesInternal;
                                        var15 = var10.concat;
                                        var13 = 'Frame ID ';
                                        var10 = ' no longer exists';
                                        var10 = var15.bind(var13)(var14, var10);
                                        var10 = var11.bind(var12)(var10);
                                        var11 = _closure1_slot1;
                                        var12 = _closure1_slot2;
                                        var10 = 14;
                                        var10 = var12[var10];
                                        var13 = var11.bind(var6)(var10);
                                        var12 = {};
                                        var10 = _closure1_slot14;
                                        var10 = var10.CLOSE_UNSUPPORTED;
                                        var12.closeCode = var10;
                                        var10 = var5.HermesInternal;
                                        var11 = var10.concat;
                                        var10 = 'Unrecognized frame ID ';
                                        var23 = var11.bind(var10)(var14);
                                        var11 = var13.prototype;
                                        var11 = Object.create(var11, {
                                            constructor: {
                                                value: var13
                                            }
                                        });
                                        var25 = var11;
                                        var24 = var12;
                                        var10 = new var25[var13](var24, var23, var22);
                                        var10 = var10 instanceof Object ? var10 : var11;
                                        throw var10;
                                    case 953:
                                        var12 = _closure1_slot17;
                                        var11 = var12.set;
                                        var10 = var7;
                                        var7 = var9;
                                        var10 = var11.bind(var12)(var10, var7);
                                        var11 = _closure1_slot18;
                                        var10 = var11.delete;
                                        var8 = var10.bind(var11)(var8);
                                        var8 = var7.authorization;
                                        var11 = var8.scopes;
                                        var10 = var11.push;
                                        var8 = _closure1_slot11;
                                        var8 = var10.bind(var11)(var8);
                                        var8 = _closure3_slot0;
                                        var11 = var8.emit;
                                        var10 = 'connect';
                                        var10 = var11.bind(var8)(var10, var7);
                                        var10 = var8.logger;
                                        var8 = var10.info;
                                        var12 = var7.id;
                                        var7 = var5.HermesInternal;
                                        var11 = var7.concat;
                                        var7 = 'Socket Validated: ';
                                        var7 = var11.bind(var7)(var12);
                                        var7 = var8.bind(var10)(var7);
                                    case 1078: // try_end2
                                        return var6;
                                    case 1081:
                                        return var2;
                                    case 1084: // catch_target2
                                        CatchBlockStart(arg_register = 2);
                                        var7 = _closure3_slot0;
                                        var8 = var7.logger;
                                        var7 = var8.info;
                                        var12 = var9.id;
                                        var11 = var2.message;
                                        var5 = var5.HermesInternal;
                                        var10 = var5.concat;
                                        var9 = 'Socket Closed: ';
                                        var5 = ', ';
                                        var5 = var10.bind(var9)(var12, var5, var11);
                                        var5 = var7.bind(var8)(var5);
                                        throw var2;
                                    case 1149: // catch_target1
                                        CatchBlockStart(arg_register = 2);
                                        var4 = _closure3_slot0;
                                        var7 = var4.logger;
                                        var5 = var7.error;
                                        var4 = global;
                                        var4 = var4.HermesInternal;
                                        var8 = var4.concat;
                                        var4 = 'Error opening window socket ';
                                        var4 = var8.bind(var4)(var2);
                                        var4 = var5.bind(var7)(var4);
                                        throw var2;
                                    case 1197: // catch_target0
                                        CatchBlockStart(arg_register = 2);
                                        var5 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var4 = 14;
                                        var4 = var7[var4];
                                        var5 = var5.bind(var6)(var4);
                                        var4 = {};
                                        var3 = _closure1_slot14;
                                        var3 = var3.CLOSE_UNSUPPORTED;
                                        var4.closeCode = var3;
                                        var23 = var2.message;
                                        var3 = var5.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var25 = var3;
                                        var24 = var4;
                                        var2 = new var25[var5](var24, var23, var22);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        throw var2;
                                    case 1266:
                                        return var1;
                                    case 1269:
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
                    var3 = var3.bind(var4)();
                    var0.handleHandshake = var3;
                    var2 = function() { // Environment: var2
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0, arg1) { // Environment: var0
                            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                                _fun63241: for (var _fun63241_ip = 0;;) switch (_fun63241_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun63241_ip = 318;
                                            continue _fun63241
                                        }
                                    case 10:
                                        var4 = arg0;
                                        var2 = arg1;
                                        var6 = undefined;
                                        var5 = undefined;
                                        var8 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var7 = 16;
                                        var7 = var1[var7];
                                        var8 = var8.bind(var6)(var7);
                                        var7 = 15;
                                        var7 = var1[var7];
                                        var1 = var1.paths;
                                        var1 = var8.bind(var6)(var7, var1);
                                        SaveGenerator(address = 65);
                                    case 63:
                                        return var1;
                                    case 65:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun63241_ip = 315;
                                            continue _fun63241
                                        }
                                    case 74:
                                        var5 = var1.default;
                                    case 79: // try_start_0
                                        var9 = var5;
                                        var8 = var9.assert;
                                        var7 = var2;
                                        var10 = _closure1_slot1;
                                        var11 = _closure1_slot2;
                                        var5 = 17;
                                        var5 = var11[var5];
                                        var5 = var10.bind(var6)(var5);
                                        var10 = var5.bind(var6)(var9);
                                        var5 = var10.required;
                                        var11 = var5.bind(var10)();
                                        var10 = var11.keys;
                                        var5 = {};
                                        var12 = var9.number;
                                        var14 = var12.bind(var9)();
                                        var13 = var14.valid;
                                        var12 = global;
                                        var16 = var12.Object;
                                        var15 = var16.values;
                                        var12 = _closure1_slot14;
                                        var12 = var15.bind(var16)(var12);
                                        var13 = var13.bind(var14)(var12);
                                        var12 = var13.required;
                                        var12 = var12.bind(var13)();
                                        var5.code = var12;
                                        var12 = var9.string;
                                        var13 = var12.bind(var9)();
                                        var12 = var13.optional;
                                        var12 = var12.bind(var13)();
                                        var5.message = var12;
                                        var5 = var10.bind(var11)(var5);
                                        var5 = var8.bind(var9)(var7, var5);
                                    case 224: // try_end0
                                        var7 = _closure3_slot0;
                                        var5 = var7.disconnectSocket;
                                        var2 = var5.bind(var7)(var4, var2);
                                        return var6;
                                    case 246: // catch_target0
                                        CatchBlockStart(arg_register = 2);
                                        var5 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var4 = 14;
                                        var4 = var7[var4];
                                        var5 = var5.bind(var6)(var4);
                                        var4 = {};
                                        var3 = _closure1_slot14;
                                        var3 = var3.CLOSE_UNSUPPORTED;
                                        var4.closeCode = var3;
                                        var17 = var2.message;
                                        var3 = var5.prototype;
                                        var3 = Object.create(var3, {
                                            constructor: {
                                                value: var5
                                            }
                                        });
                                        var19 = var3;
                                        var18 = var4;
                                        var2 = new var19[var5](var18, var17, var16);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        throw var2;
                                    case 315:
                                        return var1;
                                    case 318:
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
                    var2 = var2.bind(var4)();
                    var0.handleClose = var2;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var6 = var5[var2];
                    var6 = var3.bind(var4)(var6);
                    var9 = var6.ComponentDispatch;
                    var8 = var9.subscribe;
                    var1 = _closure1_slot13;
                    var7 = var1.IFRAME_MOUNT;
                    var6 = var0.handleIFrameMount;
                    var6 = var8.bind(var9)(var7, var6);
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.ComponentDispatch;
                    var3 = var4.subscribe;
                    var2 = var1.IFRAME_UNMOUNT;
                    var1 = var0.handleIFrameUnmount;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = arg0;
                    var0.validateSocketClient = var1;
                    var1 = arg1;
                    var0.logger = var1;
                    var1 = arg2;
                    var0.createPostMessageProxySocket = var1;
                    var1 = arg3;
                    var0.onFrameHandled = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot9;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot6;
        var4 = {};
        var5 = 'routeEvent';
        var4.key = var5;
        var0 = function arg0, arg1, arg2, arg3() {
            _fun63243: for (var _fun63243_ip = 0;;) switch (_fun63243_ip) {
                case 0:
                    var2 = arg0;
                    var6 = arg1;
                    var7 = arg2;
                    var5 = this;
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.isArray;
                    var0 = var0.bind(var1)(var7);
                    var3 = undefined;
                    if (var0) {
                        _fun63243_ip = 37;
                        continue _fun63243
                    }
                case 35:
                    return var3;
                case 37:
                    var4 = _closure1_slot4;
                    var1 = 2;
                    var4 = var4.bind(var3)(var7, var1);
                    var1 = 0;
                    var7 = var4[var1];
                    var1 = 1;
                    var4 = var4[var1];
                    var8 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var9 = 11;
                    var1 = var1[var9];
                    var1 = var8.bind(var3)(var1);
                    var1 = var1.HANDSHAKE;
                    if (!(var1 !== var7)) {
                        _fun63243_ip = 401;
                        continue _fun63243
                    }
                case 99:
                    var8 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var8.bind(var3)(var1);
                    var1 = var1.FRAME;
                    if (!(var1 !== var7)) {
                        _fun63243_ip = 312;
                        continue _fun63243
                    }
                case 129:
                    var8 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var1 = var1[var9];
                    var1 = var8.bind(var3)(var1);
                    var1 = var1.CLOSE;
                    if (!(var1 !== var7)) {
                        _fun63243_ip = 224;
                        continue _fun63243
                    }
                case 156:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 14;
                    var1 = var8[var1];
                    var9 = var7.bind(var3)(var1);
                    var8 = {};
                    var1 = _closure1_slot14;
                    var1 = var1.CLOSE_UNSUPPORTED;
                    var8.closeCode = var1;
                    var1 = var9.prototype;
                    var7 = Object.create(var1, {
                        constructor: {
                            value: var9
                        }
                    });
                    var11 = 'Invalid opcode';
                    var13 = var7;
                    var12 = var8;
                    var1 = new var13[var9](var12, var11, var10);
                    var1 = var1 instanceof Object ? var1 : var7;
                    throw var1;
                case 224:
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun63243_ip = 244;
                        continue _fun63243
                    }
                case 230:
                    var1 = var5.handleClose;
                    var1 = var1.bind(var5)(var2, var4);
                    return var1;
                case 244:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 14;
                    var1 = var8[var1];
                    var9 = var7.bind(var3)(var1);
                    var8 = {};
                    var1 = _closure1_slot14;
                    var1 = var1.CLOSE_UNSUPPORTED;
                    var8.closeCode = var1;
                    var1 = var9.prototype;
                    var7 = Object.create(var1, {
                        constructor: {
                            value: var9
                        }
                    });
                    var11 = 'Not connected';
                    var13 = var7;
                    var12 = var8;
                    var1 = new var13[var9](var12, var11, var10);
                    var1 = var1 instanceof Object ? var1 : var7;
                    throw var1;
                case 312:
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun63243_ip = 333;
                        continue _fun63243
                    }
                case 318:
                    var1 = var5.handleFrame;
                    var1 = var1.bind(var5)(var6, var2, var4);
                    return var1;
                case 333:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 14;
                    var1 = var8[var1];
                    var9 = var7.bind(var3)(var1);
                    var8 = {};
                    var1 = _closure1_slot14;
                    var1 = var1.CLOSE_UNSUPPORTED;
                    var8.closeCode = var1;
                    var1 = var9.prototype;
                    var7 = Object.create(var1, {
                        constructor: {
                            value: var9
                        }
                    });
                    var11 = 'Not connected';
                    var13 = var7;
                    var12 = var8;
                    var1 = new var13[var9](var12, var11, var10);
                    var1 = var1 instanceof Object ? var1 : var7;
                    throw var1;
                case 401:
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun63243_ip = 425;
                        continue _fun63243
                    }
                case 407:
                    var2 = var5.handleHandshake;
                    var1 = arg3;
                    var1 = var2.bind(var5)(var6, var4, var1);
                    return var1;
                case 425:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var2 = {};
                    var0 = _closure1_slot14;
                    var0 = var0.CLOSE_UNSUPPORTED;
                    var2.closeCode = var0;
                    var0 = var3.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var3
                        }
                    });
                    var11 = 'Already connected';
                    var13 = var1;
                    var12 = var2;
                    var0 = new var13[var3](var12, var11, var10);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/transports/PostMessageTransport.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 6, 7, 15, 17, 18, 1371, 3356, 660, 667, 7929, 795, 3081, 7930, 7932, 1307, 7933, 1229, 639, 2]);