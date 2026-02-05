// modules/scheduled_messages/ScheduledMessageStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = function() {
        _fun95857: for (var _fun95857_ip = 0;;) switch (_fun95857_ip) {
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
                _fun95857_ip = 76;
                continue _fun95857;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var0 = function arg0, arg1() {
        _fun95860: for (var _fun95860_ip = 0;;) switch (_fun95860_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun95860_ip = 46;
                    continue _fun95860
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun95860_ip = 55;
                    continue _fun95860
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun95860_ip = 345;
                    continue _fun95860
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun95860_ip = 323;
                    continue _fun95860
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun95860_ip = 283;
                    continue _fun95860
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun95860_ip = 270;
                    continue _fun95860
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
                    _fun95860_ip = 163;
                    continue _fun95860
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun95860_ip = 179;
                    continue _fun95860
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun95860_ip = 249;
                    continue _fun95860
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun95860_ip = 249;
                    continue _fun95860
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun95860_ip = 234;
                    continue _fun95860
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun95860_ip = 247;
                    continue _fun95860
                }
            case 234:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun95860_ip = 265;
                continue _fun95860;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun95860_ip = 283;
                continue _fun95860;
            case 270:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun95860_ip = 323;
                    continue _fun95860
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
                    _fun95860_ip = 330;
                    continue _fun95860
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun95861: for (var _fun95861_ip = 0;;) switch (_fun95861_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun95861_ip = 56;
                                continue _fun95861
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
                            _fun95861_ip = 67;
                            continue _fun95861;
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
            case 345:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        _fun95862: for (var _fun95862_ip = 0;;) switch (_fun95862_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun95862_ip = 23;
                    continue _fun95862
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun95862_ip = 33;
                    continue _fun95862
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
                    _fun95862_ip = 70;
                    continue _fun95862
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun95862_ip = 55;
                    continue _fun95862
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var3 = function() {
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
        var3 = function() {
            _fun95865: for (var _fun95865_ip = 0;;) switch (_fun95865_ip) {
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
                        _fun95865_ip = 69;
                        continue _fun95865
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun95865_ip = 105;
                    continue _fun95865;
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
        var0 = function() {
            var0 = _closure1_slot7;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getScheduledMessagesForInbox';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot6;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getPendingScheduledMessage';
        var4.key = var6;
        var6 = function arg0() {
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
        var5 = function() {
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
    var8 = function arg0() {
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
    var8 = function arg0() {
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
    var8 = function arg0() {
        _fun95872: for (var _fun95872_ip = 0;;) switch (_fun95872_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.scheduledMessageId;
                var3 = _closure1_slot7;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun95872_ip = 79;
                    continue _fun95872
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
    var8 = function arg0() {
        _fun95873: for (var _fun95873_ip = 0;;) switch (_fun95873_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.scheduledMessageId;
                var3 = _closure1_slot7;
                var0 = var3.has;
                var0 = var0.bind(var3)(var1);
                if (var0) {
                    _fun95873_ip = 33;
                    continue _fun95873
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
    var8 = function arg0() {
        _fun95874: for (var _fun95874_ip = 0;;) switch (_fun95874_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.scheduledMessageId;
                var3 = _closure1_slot7;
                var1 = var3.has;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun95874_ip = 33;
                    continue _fun95874
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
    var8 = function arg0() {
        _fun95875: for (var _fun95875_ip = 0;;) switch (_fun95875_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun95875_ip = 22;
                    continue _fun95875
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
    var8 = function arg0() {
        _fun95876: for (var _fun95876_ip = 0;;) switch (_fun95876_ip) {
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
                    _fun95876_ip = 75;
                    continue _fun95876
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
                    _fun95876_ip = 41;
                    continue _fun95876
                }
            case 75:
                var1 = false;
                _closure1_slot5 = var1;
                return var0;
        }
    };
    var1.FETCH_SCHEDULED_MESSAGES_SUCCESS = var8;
    var8 = function arg0() {
        _fun95877: for (var _fun95877_ip = 0;;) switch (_fun95877_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun95877_ip = 22;
                    continue _fun95877
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
    var8 = function arg0() {
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
    var7 = function arg0() {
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