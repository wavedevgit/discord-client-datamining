// modules/scheduled_messages/ScheduledMessageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var7
        _fun96175: for (var _fun96175_ip = 0;;) switch (_fun96175_ip) {
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
                _fun96175_ip = 76;
                continue _fun96175;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var7
        _fun96178: for (var _fun96178_ip = 0;;) switch (_fun96178_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun96178_ip = 45;
                    continue _fun96178
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun96178_ip = 54;
                    continue _fun96178
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun96178_ip = 344;
                    continue _fun96178
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun96178_ip = 322;
                    continue _fun96178
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun96178_ip = 282;
                    continue _fun96178
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun96178_ip = 269;
                    continue _fun96178
                }
            case 109:
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
                    _fun96178_ip = 162;
                    continue _fun96178
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun96178_ip = 178;
                    continue _fun96178
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun96178_ip = 248;
                    continue _fun96178
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun96178_ip = 248;
                    continue _fun96178
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun96178_ip = 233;
                    continue _fun96178
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun96178_ip = 246;
                    continue _fun96178
                }
            case 233:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun96178_ip = 264;
                continue _fun96178;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun96178_ip = 282;
                continue _fun96178;
            case 269:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun96178_ip = 322;
                    continue _fun96178
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun96178_ip = 329;
                    continue _fun96178
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun96179: for (var _fun96179_ip = 0;;) switch (_fun96179_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun96179_ip = 56;
                                continue _fun96179
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
                            _fun96179_ip = 67;
                            continue _fun96179;
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
            case 344:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var7
        _fun96180: for (var _fun96180_ip = 0;;) switch (_fun96180_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun96180_ip = 23;
                    continue _fun96180
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun96180_ip = 33;
                    continue _fun96180
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
                    _fun96180_ip = 70;
                    continue _fun96180
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun96180_ip = 55;
                    continue _fun96180
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var3 = function() { // Original name: reset, environment: var7
        var0 = {};
        _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var6);
    var _closure1_slot0 = var6;
    var6 = 1;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot1 = var6;
    var6 = 2;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 3;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 4;
    var6 = var4[var6];
    var6 = var5.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = false;
    var _closure1_slot5 = var6;
    var6 = {};
    var _closure1_slot6 = var6;
    var1 = var1.Set;
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var13 = var6;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot7 = var1;
    var1 = {};
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Store;
    var1 = function(arg0) { // Environment: var7
        var3 = function() { // Original name: ScheduledMessageStore, environment: var5
            _fun96183: for (var _fun96183_ip = 0;;) switch (_fun96183_ip) {
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
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun96183_ip = 69;
                        continue _fun96183
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun96183_ip = 105;
                    continue _fun96183;
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
        var0 = 'getMessagesPendingDeletion';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getScheduledMessagesForInbox';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPendingScheduledMessage';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot8;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'loading';
        var4.key = var6;
        var5 = function() { // Original name: get, environment: var5
            var0 = _closure1_slot5;
            return var0;
        };
        var4.get = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var1.bind(var0)(var6);
    var1 = 'scheduledMessageStore';
    var6.displayName = var1;
    var1 = 6;
    var1 = var4[var1];
    var12 = var5.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleScheduledMessageCreateSuccess, environment: var7
        var0 = arg0;
        var1 = var0.channelId;
        var4 = var0.scheduledMessageSend;
        var0 = {};
        var5 = _closure1_slot6;
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        var3 = var4.scheduledMessageId;
        var0[var3] = var4;
        _closure1_slot6 = var0;
        var0 = {};
        var5 = _closure1_slot8;
        var6 = var0;
        var3 = copyDataProperties(var6, var5);
        _closure1_slot8 = var0;
        var0 = delete var0[var1];
        var0 = undefined;
        return var0;
    };
    var1.SCHEDULED_MESSAGES_CREATE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleScheduledMessageUpdateSuccess, environment: var7
        var0 = arg0;
        var3 = var0.scheduledMessageSend;
        var1 = {};
        var4 = _closure1_slot6;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var2 = var3.scheduledMessageId;
        var1[var2] = var3;
        _closure1_slot6 = var1;
        var0 = undefined;
        return var0;
    };
    var1.SCHEDULED_MESSAGES_UPDATE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleScheduledMessageDeleteStart, environment: var7
        _fun96190: for (var _fun96190_ip = 0;;) switch (_fun96190_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.scheduledMessageId;
                var3 = _closure1_slot7;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun96190_ip = 79;
                    continue _fun96190
                }
            case 29:
                var1 = global;
                var4 = var1.Set;
                var5 = _closure1_slot7;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot7 = var1;
                var0 = var1.add;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
            case 79:
                var0 = false;
                return var0;
        }
    };
    var1.SCHEDULED_MESSAGES_DELETE_START = var8;
    var8 = function(arg0) { // Original name: handleScheduledMessageDeleteSuccess, environment: var7
        _fun96191: for (var _fun96191_ip = 0;;) switch (_fun96191_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.scheduledMessageId;
                var3 = _closure1_slot7;
                var0 = var3.has;
                var0 = var0.bind(var3)(var1);
                if (var0) {
                    _fun96191_ip = 33;
                    continue _fun96191
                }
            case 29:
                var0 = false;
                return var0;
            case 33:
                var0 = global;
                var4 = var0.Set;
                var6 = _closure1_slot7;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var7 = var3;
                var0 = new var7[var4](var6, var5);
                var3 = var0 instanceof Object ? var0 : var3;
                _closure1_slot7 = var3;
                var0 = var3.delete;
                var0 = var0.bind(var3)(var1);
                var0 = {};
                var5 = _closure1_slot6;
                var6 = var0;
                var3 = copyDataProperties(var6, var5);
                _closure1_slot6 = var0;
                var0 = delete var0[var1];
                var0 = undefined;
                return var0;
        }
    };
    var1.SCHEDULED_MESSAGES_DELETE_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleScheduledMessageDeleteFailure, environment: var7
        _fun96192: for (var _fun96192_ip = 0;;) switch (_fun96192_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.scheduledMessageId;
                var3 = _closure1_slot7;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun96192_ip = 33;
                    continue _fun96192
                }
            case 29:
                var1 = false;
                return var1;
            case 33:
                var1 = global;
                var4 = var1.Set;
                var5 = _closure1_slot7;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var3;
                var1 = new var6[var4](var5, var4);
                var1 = var1 instanceof Object ? var1 : var3;
                _closure1_slot7 = var1;
                var0 = var1.delete;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var1.SCHEDULED_MESSAGES_DELETE_FAILURE = var8;
    var8 = function(arg0) { // Original name: handleFetchScheduledMessages, environment: var7
        _fun96193: for (var _fun96193_ip = 0;;) switch (_fun96193_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun96193_ip = 22;
                    continue _fun96193
                }
            case 9:
                var0 = true;
                _closure1_slot5 = var0;
                var0 = undefined;
                return var0;
            case 22:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var1.FETCH_SCHEDULED_MESSAGES = var8;
    var8 = function(arg0) { // Original name: handleFetchScheduledMessagesSuccess, environment: var7
        _fun96194: for (var _fun96194_ip = 0;;) switch (_fun96194_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.messages;
                var0 = {};
                _closure1_slot6 = var0;
                var1 = _closure1_slot10;
                var0 = undefined;
                var4 = var1.bind(var0)(var3);
                var3 = var4.bind(var0)();
                var1 = var3.done;
                if (var1) {
                    _fun96194_ip = 75;
                    continue _fun96194
                }
            case 41:
                var6 = var3.value;
                var5 = _closure1_slot6;
                var1 = var6.scheduledMessageId;
                var5[var1] = var6;
                var5 = var4.bind(var0)();
                var1 = var5.done;
                var3 = var5;
                if (!var1) {
                    _fun96194_ip = 41;
                    continue _fun96194
                }
            case 75:
                var1 = false;
                _closure1_slot5 = var1;
                return var0;
        }
    };
    var1.FETCH_SCHEDULED_MESSAGES_SUCCESS = var8;
    var8 = function(arg0) { // Original name: handleFetchScheduledMessagesFailure, environment: var7
        _fun96195: for (var _fun96195_ip = 0;;) switch (_fun96195_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun96195_ip = 22;
                    continue _fun96195
                }
            case 9:
                var0 = false;
                _closure1_slot5 = var0;
                var0 = undefined;
                return var0;
            case 22:
                var3 = "Cannot destructure 'undefined' or 'null'.";
                var4 = var1;
                var0 = throwTypeError(var4, var3);
                var0 = undefined;
                throw var0;
        }
    };
    var1.FETCH_SCHEDULED_MESSAGES_FAILURE = var8;
    var8 = function(arg0) { // Original name: handleCreatePendingScheduledMessage, environment: var7
        var0 = arg0;
        var3 = var0.channelId;
        var4 = var0.scheduledTimestamp;
        var1 = {};
        var6 = _closure1_slot8;
        var7 = var1;
        var2 = copyDataProperties(var7, var6);
        var2 = {};
        var2.channelId = var3;
        var2.scheduledTimestamp = var4;
        var1[var3] = var2;
        _closure1_slot8 = var1;
        var0 = undefined;
        return var0;
    };
    var1.CREATE_PENDING_SCHEDULED_MESSAGE = var8;
    var7 = function(arg0) { // Original name: handleDeletePendingScheduledMessage, environment: var7
        var0 = arg0;
        var1 = var0.channelId;
        var0 = {};
        var4 = _closure1_slot8;
        var5 = var0;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot8 = var0;
        var0 = delete var0[var1];
        var0 = undefined;
        return var0;
    };
    var1.DELETE_PENDING_SCHEDULED_MESSAGE = var7;
    var1.LOGOUT = var3;
    var1.CONNECTION_OPEN = var3;
    var3 = var6.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var6](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/scheduled_messages/ScheduledMessageStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 566, 806, 2]);