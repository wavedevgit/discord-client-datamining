// stores/CallStore.tsx
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
        _fun30018: for (var _fun30018_ip = 0;;) switch (_fun30018_ip) {
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
                _fun30018_ip = 74;
                continue _fun30018;
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
    var0 = function() {
        _fun30021: for (var _fun30021_ip = 0;;) switch (_fun30021_ip) {
            case 0:
                var1 = arguments[0];
                var3 = arguments[1];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun30021_ip = 14;
                    continue _fun30021
                }
            case 12:
                var1 = false;
            case 14:
                if (!(var3 === var2)) {
                    _fun30021_ip = 35;
                    continue _fun30021
                }
            case 18:
                var4 = _closure1_slot9;
                var0 = var4.getChannelId;
                var3 = var0.bind(var4)();
            case 35:
                var5 = _closure1_slot8;
                var4 = var5.getChannel;
                var6 = var4.bind(var5)(var3);
                var5 = null;
                if (!(var5 != var6)) {
                    _fun30021_ip = 91;
                    continue _fun30021
                }
            case 58:
                var4 = var6.getGuildId;
                var4 = var4.bind(var6)();
                if (!(var5 == var4)) {
                    _fun30021_ip = 91;
                    continue _fun30021
                }
            case 72:
                if (!(var5 != var3)) {
                    _fun30021_ip = 91;
                    continue _fun30021
                }
            case 76:
                var4 = _closure1_slot12;
                var4 = var4[var3];
                if (!(var5 != var4)) {
                    _fun30021_ip = 95;
                    continue _fun30021
                }
            case 88:
                if (var1) {
                    _fun30021_ip = 95;
                    continue _fun30021
                }
            case 91:
                var1 = false;
                return var1;
            case 95:
                var4 = _closure1_slot12;
                var1 = var4[var3];
                if (!(var5 == var1)) {
                    _fun30021_ip = 125;
                    continue _fun30021
                }
            case 107:
                var5 = {};
                var5.channelId = var3;
                var6 = new Array(0);
                var5.ringing = var6;
                var1 = var5;
            case 125:
                var4[var3] = var1;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'CALL_CONNECT';
                var0.type = var4;
                var0.channelId = var3;
                var0 = var1.bind(var2)(var0);
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot15 = var0;
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
    var1 = var1.Endpoints;
    var _closure1_slot11 = var1;
    var1 = {};
    var _closure1_slot12 = var1;
    var1 = {};
    var _closure1_slot13 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun30023: for (var _fun30023_ip = 0;;) switch (_fun30023_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30023_ip = 69;
                        continue _fun30023
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30023_ip = 105;
                    continue _fun30023;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'getCall';
        var4.key = var6;
        var6 = function arg0() {
            var1 = _closure1_slot12;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getCalls';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot12;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getMessageId';
        var4.key = var6;
        var6 = function arg0() {
            _fun30027: for (var _fun30027_ip = 0;;) switch (_fun30027_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.getCall;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 != var1;
                    if (!var2) {
                        _fun30027_ip = 31;
                        continue _fun30027
                    }
                case 26:
                    var0 = var1.messageId;
                case 31:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isCallActive';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun30028: for (var _fun30028_ip = 0;;) switch (_fun30028_ip) {
                case 0:
                    var3 = arg1;
                    var1 = _closure1_slot12;
                    var0 = arg0;
                    var2 = var1[var0];
                    var4 = null;
                    var0 = var4 != var2;
                    if (!var0) {
                        _fun30028_ip = 35;
                        continue _fun30028
                    }
                case 26:
                    var1 = var2.unavailable;
                    var0 = !var1;
                case 35:
                    if (!var0) {
                        _fun30028_ip = 66;
                        continue _fun30028
                    }
                case 38:
                    if (!(var4 == var3)) {
                        _fun30028_ip = 54;
                        continue _fun30028
                    }
                case 42:
                    var1 = var2.region;
                    var1 = var4 != var1;
                    _fun30028_ip = 63;
                    continue _fun30028;
                case 54:
                    var2 = var2.messageId;
                    var1 = var2 === var3;
                case 63:
                    var0 = var1;
                case 66:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isCallUnavailable';
        var4.key = var6;
        var6 = function arg0() {
            _fun30029: for (var _fun30029_ip = 0;;) switch (_fun30029_ip) {
                case 0:
                    var1 = _closure1_slot12;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun30029_ip = 29;
                        continue _fun30029
                    }
                case 23:
                    var0 = var1.unavailable;
                case 29:
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getInternalState';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var2 = _closure1_slot12;
            var0.calls = var2;
            var1 = _closure1_slot13;
            var0.enqueuedRings = var1;
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'CallStore';
    var7.displayName = var1;
    var1 = 9;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var2 = _closure1_slot15;
        var1 = undefined;
        var0 = true;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var1.CONNECTION_OPEN = var8;
    var8 = function() {
        var0 = {};
        _closure1_slot12 = var0;
        var0 = {};
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_CLOSED = var8;
    var8 = function arg0() {
        var0 = arg0;
        var2 = var0.callStoreInternalState;
        var0 = {};
        var3 = var2.calls;
        var4 = var0;
        var1 = copyDataProperties(var4, var3);
        _closure1_slot12 = var0;
        var0 = {};
        var3 = var2.enqueuedRings;
        var4 = var0;
        var2 = copyDataProperties(var4, var3);
        _closure1_slot13 = var0;
        var0 = undefined;
        return var0;
    };
    var1.OVERLAY_INITIALIZE = var8;
    var8 = function() {
        var2 = _closure1_slot15;
        var1 = undefined;
        var0 = true;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var1.CONNECTION_RESUMED = var8;
    var8 = function arg0() {
        var0 = arg0;
        var3 = var0.channelId;
        var2 = _closure1_slot15;
        var1 = undefined;
        var0 = false;
        var0 = var2.bind(var1)(var0, var3);
        return var0;
    };
    var1.CHANNEL_SELECT = var8;
    var8 = function arg0() {
        _fun30036: for (var _fun30036_ip = 0;;) switch (_fun30036_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var3 = _closure1_slot13;
                var2 = var0.id;
                var2 = var3[var2];
                var3 = null;
                if (!(var3 != var2)) {
                    _fun30036_ip = 43;
                    continue _fun30036
                }
            case 30:
                var4 = _closure1_slot13;
                var2 = var0.id;
                var2 = delete var4[var2];
            case 43:
                var4 = _closure1_slot12;
                var2 = var0.id;
                var2 = var4[var2];
                if (!(var3 != var2)) {
                    _fun30036_ip = 77;
                    continue _fun30036
                }
            case 60:
                var1 = _closure1_slot12;
                var0 = var0.id;
                var0 = delete var1[var0];
                var0 = undefined;
                return var0;
            case 77:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_DELETE = var8;
    var8 = function arg0() {
        _fun30037: for (var _fun30037_ip = 0;;) switch (_fun30037_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.channelId;
                var5 = var0.messageId;
                var4 = var0.region;
                var2 = var0.ringing;
                var1 = _closure1_slot12;
                var0 = {};
                var0.channelId = var6;
                var0.messageId = var5;
                var0.region = var4;
                var0.ringing = var2;
                var2 = false;
                var0.unavailable = var2;
                var0.regionUpdated = var2;
                var1[var6] = var0;
                var0 = _closure1_slot13;
                var1 = var0[var6];
                var0 = null;
                if (!(var0 != var1)) {
                    _fun30037_ip = 206;
                    continue _fun30037
                }
            case 85:
                var1 = _closure1_slot13;
                var4 = var1[var6];
                var1 = _closure1_slot13;
                var1 = delete var1[var6];
                var2 = var4.indexOf;
                var1 = 'all';
                var2 = var2.bind(var4)(var1);
                var1 = 1;
                if (!(var1 !== var2)) {
                    _fun30037_ip = 125;
                    continue _fun30037
                }
            case 123:
                var4 = null;
            case 125:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 10;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.HTTP;
                var1 = var2.post;
                var0 = {};
                var5 = _closure1_slot11;
                var3 = var5.CALL_RING;
                var3 = var3.bind(var5)(var6);
                var0.url = var3;
                var3 = {};
                var3.recipients = var4;
                var0.body = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
            case 206:
                var0 = undefined;
                return var0;
        }
    };
    var1.CALL_CREATE = var8;
    var8 = function arg0() {
        _fun30038: for (var _fun30038_ip = 0;;) switch (_fun30038_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var7 = var0.messageId;
                var6 = var0.region;
                var5 = var0.ringing;
                var1 = _closure1_slot12;
                var3 = var1[var2];
                var1 = null;
                var4 = var1 != var3;
                if (!var4) {
                    _fun30038_ip = 67;
                    continue _fun30038
                }
            case 45:
                var1 = var3.regionUpdated;
                if (var1) {
                    _fun30038_ip = 64;
                    continue _fun30038
                }
            case 54:
                var3 = var3.region;
                var1 = var3 !== var6;
            case 64:
                var4 = var1;
            case 67:
                var1 = _closure1_slot12;
                var0 = {};
                var9 = var1[var2];
                var10 = var0;
                var3 = copyDataProperties(var10, var9);
                var3 = 'messageId';
                var0[var3] = var7;
                var3 = 'region';
                var0[var3] = var6;
                var3 = 'ringing';
                var0[var3] = var5;
                var3 = 'regionUpdated';
                var0[var3] = var4;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.CALL_UPDATE = var8;
    var8 = function arg0() {
        _fun30039: for (var _fun30039_ip = 0;;) switch (_fun30039_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var6 = var0.unavailable;
                var2 = _closure1_slot12;
                var5 = var2[var1];
                var3 = _closure1_slot12;
                var2 = true;
                if (!(var2 === var6)) {
                    _fun30039_ip = 41;
                    continue _fun30039
                }
            case 35:
                var2 = null;
                if (!(var2 == var5)) {
                    _fun30039_ip = 78;
                    continue _fun30039
                }
            case 41:
                var2 = {
                    'channelId': null,
                    'ringing': null,
                    'messageId': null,
                    'region': null,
                    'regionUpdated': false
                };
                var2.channelId = var1;
                var4 = new Array(0);
                var2.ringing = var4;
                var2.unavailable = var6;
                _fun30039_ip = 102;
                continue _fun30039;
            case 78:
                var4 = {};
                var8 = var4;
                var7 = var5;
                var5 = copyDataProperties(var8, var7);
                var5 = 'unavailable';
                var4[var5] = var6;
                var2 = var4;
            case 102:
                var3[var1] = var2;
                var2 = _closure1_slot13;
                var3 = var2[var1];
                var2 = null;
                if (!(var2 != var3)) {
                    _fun30039_ip = 128;
                    continue _fun30039
                }
            case 120:
                var0 = _closure1_slot13;
                var0 = delete var0[var1];
            case 128:
                var0 = undefined;
                return var0;
        }
    };
    var1.CALL_DELETE = var8;
    var8 = function arg0() {
        _fun30040: for (var _fun30040_ip = 0;;) switch (_fun30040_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var6 = var0.recipients;
                var2 = _closure1_slot13;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 11;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.union;
                var1 = _closure1_slot13;
                var1 = var1[var3];
                var7 = null;
                if (!(var7 == var1)) {
                    _fun30040_ip = 67;
                    continue _fun30040
                }
            case 63:
                var1 = new Array(0);
            case 67:
                if (!(var7 == var6)) {
                    _fun30040_ip = 81;
                    continue _fun30040
                }
            case 71:
                var6 = ['all'];
            case 81:
                var1 = var4.bind(var5)(var1, var6);
                var2[var3] = var1;
                return var0;
        }
    };
    var1.CALL_ENQUEUE_RING = var8;
    var3 = function arg0() {
        _fun30041: for (var _fun30041_ip = 0;;) switch (_fun30041_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var0 = null;
                if (!(var0 == var1)) {
                    _fun30041_ip = 23;
                    continue _fun30041
                }
            case 14:
                var0 = {};
                _closure1_slot13 = var0;
            case 23:
                var0 = undefined;
                return var0;
        }
    };
    var1.VOICE_CHANNEL_SELECT = var3;
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
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/CallStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1372, 1661, 3204, 660, 806, 507, 22, 566, 2]);