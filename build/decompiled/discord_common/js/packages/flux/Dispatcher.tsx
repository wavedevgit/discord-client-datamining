// ../discord_common/js/packages/flux/Dispatcher.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function arg0, arg1() {
        _fun7161: for (var _fun7161_ip = 0;;) switch (_fun7161_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun7161_ip = 46;
                    continue _fun7161
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun7161_ip = 55;
                    continue _fun7161
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun7161_ip = 343;
                    continue _fun7161
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun7161_ip = 323;
                    continue _fun7161
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun7161_ip = 283;
                    continue _fun7161
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun7161_ip = 270;
                    continue _fun7161
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
                    _fun7161_ip = 163;
                    continue _fun7161
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun7161_ip = 179;
                    continue _fun7161
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun7161_ip = 249;
                    continue _fun7161
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun7161_ip = 249;
                    continue _fun7161
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun7161_ip = 234;
                    continue _fun7161
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun7161_ip = 247;
                    continue _fun7161
                }
            case 234:
                var8 = _closure1_slot10;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun7161_ip = 265;
                continue _fun7161;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun7161_ip = 283;
                continue _fun7161;
            case 270:
                var6 = _closure1_slot10;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun7161_ip = 323;
                    continue _fun7161
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
                    _fun7161_ip = 330;
                    continue _fun7161
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun7162: for (var _fun7162_ip = 0;;) switch (_fun7162_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun7162_ip = 56;
                                continue _fun7162
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
                            _fun7162_ip = 67;
                            continue _fun7162;
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
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun7163: for (var _fun7163_ip = 0;;) switch (_fun7163_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun7163_ip = 23;
                    continue _fun7163
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun7163_ip = 33;
                    continue _fun7163
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
                    _fun7163_ip = 70;
                    continue _fun7163
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun7163_ip = 55;
                    continue _fun7163
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1() {
        var1 = arg1;
        var0 = arg0;
        var0.displayName = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot11 = var0;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var7 = var1.Set;
    var1 = var7.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var12 = ['APP_STATE_UPDATE', 'CLEAR_CACHES', 'CONNECTION_CLOSED', 'CONNECTION_OPEN', 'CONNECTION_RESUMED', 'LOGIN_SUCCESS', 'LOGIN', 'LOGOUT', 'MESSAGE_SEND_FAILED', 'PUSH_NOTIFICATION_CLICK', 'RESET_SOCKET', 'SESSION_START', 'UPLOAD_FAIL', 'WRITE_CACHES'];
    var13 = var3;
    var1 = new var13[var7](var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot6 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.Logger;
    var1 = var7.prototype;
    var3 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var12 = 'Flux';
    var13 = var3;
    var1 = new var13[var7](var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot7 = var1;
    var1 = function() { // Environment: var6
        var3 = _closure1_slot5;
        var2 = function() {
            _fun7166: for (var _fun7166_ip = 0;;) switch (_fun7166_ip) {
                case 0:
                    var5 = arguments[0];
                    var2 = arguments[1];
                    var1 = this;
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun7166_ip = 17;
                        continue _fun7166
                    }
                case 15:
                    var5 = 0;
                case 17:
                    var6 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var4 = var6.bind(var0)(var1, var4);
                    var4 = new Array(0);
                    var1._interceptors = var4;
                    var4 = {};
                    var1._subscriptions = var4;
                    var4 = new Array(0);
                    var1._waitQueue = var4;
                    var4 = false;
                    var1._processingWaitQueue = var4;
                    var4 = null;
                    var1._currentDispatchActionType = var4;
                    var6 = _closure1_slot8;
                    var7 = var6.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var6
                        }
                    });
                    var10 = var7;
                    var6 = new var10[var6](var9);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var1._actionHandlers = var6;
                    var1._sentryUtils = var0;
                    var6 = {};
                    var1.functionCache = var6;
                    var1._defaultBand = var5;
                    var5 = arguments[2];
                    var1._sentryUtils = var5;
                    if (!(var4 == var2)) {
                        _fun7166_ip = 190;
                        continue _fun7166
                    }
                case 144:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.ActionLogger;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var10 = var4;
                    var3 = new var10[var3](var9);
                    var2 = var3 instanceof Object ? var3 : var4;
                case 190:
                    var1.actionLogger = var2;
                    var4 = var1.actionLogger;
                    var3 = var4.on;
                    var2 = 'trace';
                    var1 = function(arg0, arg1, arg2) { // Environment: var1
                        _fun7167: for (var _fun7167_ip = 0;;) switch (_fun7167_ip) {
                            case 0:
                                var5 = arg2;
                                var4 = _closure1_slot1;
                                var0 = _closure1_slot3;
                                var3 = 4;
                                var2 = var0[var3];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.isTracing;
                                if (!var2) {
                                    _fun7167_ip = 44;
                                    continue _fun7167
                                }
                            case 37:
                                var4 = 10;
                                var2 = var5 >= var4;
                            case 44:
                                if (!var2) {
                                    _fun7167_ip = 84;
                                    continue _fun7167
                                }
                            case 47:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var1 = var1[var3];
                                var4 = var2.bind(var0)(var1);
                                var3 = var4.mark;
                                var2 = '🦥';
                                var1 = arg1;
                                var1 = var3.bind(var4)(var2, var1, var5);
                            case 84:
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'isDispatching';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var1 = var0._currentDispatchActionType;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(14);
        var1[0] = var0;
        var0 = {};
        var5 = 'dispatch';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var1 = arg0;
                var _closure4_slot0 = var1;
                var1 = arg1;
                var _closure4_slot1 = var1;
                var1 = _closure3_slot0;
                var3 = var1._waitQueue;
                var2 = var3.push;
                var0 = function() { // Environment: var0
                    _fun7171: for (var _fun7171_ip = 0;;) switch (_fun7171_ip) {
                        case 0: // try_start_0
                            var1 = _closure3_slot0;
                            var2 = var1.functionCache;
                            var1 = _closure3_slot1;
                            var1 = var1.type;
                            var2 = var2[var1];
                            var1 = null;
                            if (!(var1 == var2)) {
                                _fun7171_ip = 107;
                                continue _fun7171
                            }
                        case 32:
                            var2 = _closure3_slot0;
                            var5 = var2.functionCache;
                            var1 = _closure3_slot1;
                            var4 = var1.type;
                            var3 = function(arg0) { // Environment: var3
                                var2 = _closure3_slot0;
                                var1 = var2._dispatchWithDevtools;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var5[var4] = var3;
                            var4 = _closure1_slot11;
                            var3 = var2.functionCache;
                            var2 = var1.type;
                            var3 = var3[var2];
                            var2 = var1.type;
                            var1 = 'dispatch_';
                            var2 = var1 + var2;
                            var1 = undefined;
                            var1 = var4.bind(var1)(var3, var2);
                        case 107:
                            var1 = _closure3_slot0;
                            var2 = var1.functionCache;
                            var1 = _closure3_slot1;
                            var0 = var1.type;
                            var0 = var2[var0];
                            var0 = var0.bind(var2)(var1);
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 148: // try_end0
                            _fun7171_ip = 166;
                            continue _fun7171;
                        case 150: // catch_target0
                            CatchBlockStart(arg_register = 2);
                            var1 = _closure4_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 166:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var0 = var1.flushWaitQueue;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'dispatchForStoreTest';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun7173: for (var _fun7173_ip = 0;;) switch (_fun7173_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot3;
                    var0 = 5;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var4 = false;
                    var2 = 'dispatchForTest cannot be called in: production';
                    var2 = var3.bind(var0)(var4, var2);
                    var2 = _closure1_slot9;
                    var1 = this;
                    var3 = var1._actionHandlers;
                    var1 = var3.getOrderedActionHandlers;
                    var1 = var1.bind(var3)(var6);
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.bind(var0)();
                    var1 = var2.done;
                    if (var1) {
                        _fun7173_ip = 147;
                        continue _fun7173
                    }
                case 86:
                    var1 = var2.value;
                    var7 = var1.name;
                    var8 = var1.actionHandler;
                    var1 = var1.storeDidChange;
                    var7 = var7 === var5;
                    if (!var7) {
                        _fun7173_ip = 124;
                        continue _fun7173
                    }
                case 115:
                    var8 = var8.bind(var0)(var6);
                    var7 = var4 !== var8;
                case 124:
                    if (!var7) {
                        _fun7173_ip = 132;
                        continue _fun7173
                    }
                case 127:
                    var1 = var1.bind(var0)(var6);
                case 132:
                    var7 = var3.bind(var0)();
                    var1 = var7.done;
                    var2 = var7;
                    if (!var1) {
                        _fun7173_ip = 86;
                        continue _fun7173
                    }
                case 147:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'flushWaitQueue';
        var0.key = var5;
        var5 = function() {
            _fun7174: for (var _fun7174_ip = 0;;) switch (_fun7174_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var9 = undefined;
                    var1 = undefined;
                    var6 = undefined;
                    var3 = var2._processingWaitQueue;
                    if (var3) {
                        _fun7174_ip = 394;
                        continue _fun7174
                    }
                case 23: // try_start_0
                    var5 = true;
                    var2._processingWaitQueue = var5;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var8 = 6;
                    var4 = var4[var8];
                    var4 = var7.bind(var0)(var4);
                    var4.isDispatching = var5;
                    var7 = 0;
                    var9 = 0;
                    var4 = var2._waitQueue;
                    var4 = var4.length;
                    var5 = 100;
                    if (!(var4 > var7)) {
                        _fun7174_ip = 190;
                        continue _fun7174
                    }
                case 82:
                    var4 = var9;
                    var4 = var4 + 1;
                    var9 = var4;
                    if (!(!(var4 > var5))) {
                        _fun7174_ip = 226;
                        continue _fun7174
                    }
                case 98:
                    var4 = var2._waitQueue;
                    var4 = var4.length;
                    if (!(var4 > var7)) {
                        _fun7174_ip = 148;
                        continue _fun7174
                    }
                case 113:
                    var10 = var2._waitQueue;
                    var4 = var10.shift;
                    var4 = var4.bind(var10)();
                    var4 = var4.bind(var0)();
                    var4 = var2._waitQueue;
                    var4 = var4.length;
                    if (var4 > var7) {
                        _fun7174_ip = 113;
                        continue _fun7174
                    }
                case 148:
                    var10 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var10 = var10.bind(var0)(var4);
                    var4 = var10.emit;
                    var4 = var4.bind(var10)();
                    var4 = var2._waitQueue;
                    var4 = var4.length;
                    if (var4 > var7) {
                        _fun7174_ip = 82;
                        continue _fun7174
                    }
                case 190: // try_end0
                    var5 = false;
                    var2._processingWaitQueue = var5;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot3;
                    var4 = var4[var8];
                    var4 = var7.bind(var0)(var4);
                    var4.isDispatching = var5;
                    _fun7174_ip = 394;
                    continue _fun7174;
                case 226: // try_start_1
                    var5 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 7;
                    var4 = var7[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.serialize;
                    var7 = var4.bind(var5)();
                    var6 = var7;
                    var5 = _closure1_slot7;
                    var4 = var5.error;
                    var3 = 'LastFewActions';
                    var3 = var4.bind(var5)(var3, var7);
                    var4 = var2._sentryUtils;
                    var1 = var4;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun7174_ip = 332;
                        continue _fun7174
                    }
                case 295:
                    var4 = var1;
                    var3 = var4.addBreadcrumb;
                    var1 = {};
                    var5 = 'Dispatcher: Dispatch loop detected';
                    var1.message = var5;
                    var5 = {};
                    var5.lastFewActions = var6;
                    var1.data = var5;
                    var1 = var3.bind(var4)(var1);
                case 332:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = 'Dispatch loop detected, aborting';
                    var1 = var3.bind(var0)(var1);
                    throw var1;
                case 353: // try_end1 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register = 1);
                    var3 = false;
                    var2._processingWaitQueue = var3;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 6;
                    var2 = var5[var2];
                    var2 = var4.bind(var0)(var2);
                    var2.isDispatching = var3;
                    throw var1;
                case 394:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_dispatchWithDevtools';
        var0.key = var5;
        var5 = function arg0() {
            var2 = this;
            var1 = var2._dispatchWithLogging;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '_dispatchWithLogging';
        var0.key = var5;
        var5 = function arg0() {
            _fun7176: for (var _fun7176_ip = 0;;) switch (_fun7176_ip) {
                case 0:
                    var5 = arg0;
                    var6 = this;
                    var _closure3_slot0 = var6;
                    var1 = var5;
                    var _closure3_slot1 = var5;
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var7 = 5;
                    var2 = var9[var7];
                    var0 = undefined;
                    var12 = var8.bind(var0)(var2);
                    var10 = var6._currentDispatchActionType;
                    var2 = null;
                    var11 = var2 == var10;
                    var16 = var5.type;
                    var15 = var6._currentDispatchActionType;
                    var2 = global;
                    var10 = var2.HermesInternal;
                    var14 = var10.concat;
                    var13 = 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch. Action: ';
                    var10 = ' Already dispatching: ';
                    var10 = var14.bind(var13)(var16, var10, var15);
                    var10 = var12.bind(var0)(var11, var10);
                    var7 = var9[var7];
                    var9 = var8.bind(var0)(var7);
                    var8 = var5.type;
                    var7 = 'Dispatch.dispatch(...) called without an action type';
                    var7 = var9.bind(var0)(var8, var7);
                    var8 = _closure1_slot6;
                    var7 = var8.has;
                    var5 = var5.type;
                    var5 = var7.bind(var8)(var5);
                    if (!var5) {
                        _fun7176_ip = 197;
                        continue _fun7176
                    }
                case 153:
                    var8 = _closure1_slot7;
                    var7 = var8.log;
                    var5 = var1;
                    var10 = var5.type;
                    var5 = var2.HermesInternal;
                    var9 = var5.concat;
                    var5 = 'Dispatching ';
                    var5 = var9.bind(var5)(var10);
                    var5 = var7.bind(var8)(var5);
                case 197:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var5 = 8;
                    var7 = var10[var5];
                    var11 = var8.bind(var0)(var7);
                    var9 = var11.mark;
                    var8 = var1;
                    var7 = var8.type;
                    var7 = var9.bind(var11)(var7);
                    var9 = _closure1_slot2;
                    var7 = 7;
                    var7 = var10[var7];
                    var10 = var9.bind(var0)(var7);
                    var9 = var10.add;
                    var7 = var8.type;
                    var7 = var9.bind(var10)(var7);
                    var7 = var6.actionLogger;
                    var6 = var7.log;
                    var4 = function(arg0) { // Environment: var4
                        _fun7177: for (var _fun7177_ip = 0;;) switch (_fun7177_ip) {
                            case 0:
                                var1 = arg0;
                            case 3: // try_start_0
                                var4 = _closure3_slot0;
                                var3 = _closure3_slot1;
                                var2 = var3.type;
                                var4._currentDispatchActionType = var2;
                                var2 = var4._dispatch;
                                var1 = var2.bind(var4)(var3, var1);
                            case 37: // try_end0
                                var1 = _closure3_slot0;
                                var0 = null;
                                var1._currentDispatchActionType = var0;
                                var0 = undefined;
                                return var0;
                            case 53: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                var2 = _closure3_slot0;
                                var1 = null;
                                var2._currentDispatchActionType = var1;
                                throw var0;
                        }
                    };
                    var4 = var6.bind(var7)(var8, var4);
                    var7 = var4.totalTime;
                    var6 = 100;
                    if (!(var7 > var6)) {
                        _fun7176_ip = 362;
                        continue _fun7176
                    }
                case 302:
                    var7 = _closure1_slot7;
                    var6 = var7.verbose;
                    var8 = var1;
                    var20 = var8.type;
                    var18 = var4.totalTime;
                    var4 = var2.HermesInternal;
                    var10 = var4.concat;
                    var21 = 'Slow dispatch on ';
                    var19 = ': ';
                    var17 = 'ms';
                    var4 = var21[var10](var20, var19, var18, var17, var16);
                    var4 = var6.bind(var7)(var4);
                case 362: // try_start_0
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var5];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.measure;
                    var7 = var1.type;
                    var2 = var2.HermesInternal;
                    var6 = var2.concat;
                    var5 = 'DISPATCH[';
                    var2 = ']';
                    var2 = var6.bind(var5)(var7, var2);
                    var1 = var1.type;
                    var1 = var3.bind(var4)(var2, var1);
                case 428: // try_end0
                    _fun7176_ip = 432;
                    continue _fun7176;
                case 430: // catch_target0
                    CatchBlockStart(arg_register = 1);
                case 432:
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = '_dispatch';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun7178: for (var _fun7178_ip = 0;;) switch (_fun7178_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var4 = this;
                    var _closure3_slot0 = var2;
                    var _closure3_slot1 = var3;
                    var6 = _closure1_slot9;
                    var5 = var4._interceptors;
                    var0 = undefined;
                    var7 = var6.bind(var0)(var5);
                    var6 = var7.bind(var0)();
                    var5 = var6.done;
                    if (var5) {
                        _fun7178_ip = 85;
                        continue _fun7178
                    }
                case 51:
                    var5 = var6.value;
                    var5 = var5.bind(var0)(var2);
                    if (var5) {
                        _fun7178_ip = 81;
                        continue _fun7178
                    }
                case 64:
                    var8 = var7.bind(var0)();
                    var5 = var8.done;
                    var6 = var8;
                    if (var5) {
                        _fun7178_ip = 85;
                        continue _fun7178
                    }
                case 79:
                    _fun7178_ip = 51;
                    continue _fun7178;
                case 81:
                    var5 = false;
                    return var5;
                case 85:
                    var6 = var4._actionHandlers;
                    var5 = var6.getOrderedActionHandlers;
                    var5 = var5.bind(var6)(var2);
                    var _closure3_slot2 = var5;
                    var7 = function() {
                        _fun7179: for (var _fun7179_ip = 0;;) switch (_fun7179_ip) {
                            case 0:
                                var2 = _closure3_slot2;
                                var0 = _closure3_slot3;
                                var0 = var2[var0];
                                var5 = var0.name;
                                var2 = var0.actionHandler;
                                var _closure4_slot0 = var2;
                                var2 = var0.storeDidChange;
                                var4 = _closure3_slot1;
                                var0 = undefined;
                                var3 = function() { // Environment: var3
                                    var2 = _closure4_slot0;
                                    var1 = _closure3_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var4 = var4.bind(var0)(var5, var3);
                                var3 = false;
                                if (!(var3 !== var4)) {
                                    _fun7179_ip = 70;
                                    continue _fun7179
                                }
                            case 61:
                                var1 = _closure3_slot0;
                                var1 = var2.bind(var0)(var1);
                            case 70:
                                return var0;
                        }
                    };
                    var6 = 0;
                    var _closure3_slot3 = var6;
                    var5 = var5.length;
                    var8 = var6 < var5;
                    if (!var8) {
                        _fun7178_ip = 144;
                        continue _fun7178
                    }
                case 129:
                    var8 = var7.bind(var0)();
                    var6 = var6 + 1;
                    _closure3_slot3 = var6;
                    if (var6 < var5) {
                        _fun7178_ip = 129;
                        continue _fun7178
                    }
                case 144:
                    var4 = var4._subscriptions;
                    var2 = var2.type;
                    var4 = var4[var2];
                    var _closure3_slot4 = var4;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun7178_ip = 186;
                        continue _fun7178
                    }
                case 169:
                    var2 = '__subscriptions';
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot4;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure3_slot0;
                            var1 = arg0;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var3.bind(var0)(var2, var1);
                case 186:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'addInterceptor';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var2 = var0._interceptors;
            var1 = var2.push;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'wait';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var3 = var1._waitQueue;
            var2 = var3.push;
            var0 = arg0;
            var0 = var2.bind(var3)(var0);
            var0 = var1.flushWaitQueue;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'subscribe';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun7185: for (var _fun7185_ip = 0;;) switch (_fun7185_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0._subscriptions;
                    var2 = var1[var3];
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun7185_ip = 63;
                        continue _fun7185
                    }
                case 22:
                    var1 = var0._subscriptions;
                    var0 = global;
                    var0 = var0.Set;
                    var4 = var0.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var0
                        }
                    });
                    var6 = var4;
                    var0 = new var6[var0](var5);
                    var0 = var0 instanceof Object ? var0 : var4;
                    var1[var3] = var0;
                    var2 = var0;
                case 63:
                    var1 = var2.add;
                    var0 = arg1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'unsubscribe';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun7186: for (var _fun7186_ip = 0;;) switch (_fun7186_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0._subscriptions;
                    var2 = var2[var1];
                    var3 = null;
                    if (!(var3 != var2)) {
                        _fun7186_ip = 56;
                        continue _fun7186
                    }
                case 22:
                    var4 = var2.delete;
                    var3 = arg1;
                    var3 = var4.bind(var2)(var3);
                    var3 = var2.size;
                    var2 = 0;
                    if (!(var2 === var3)) {
                        _fun7186_ip = 56;
                        continue _fun7186
                    }
                case 46:
                    var0 = var0._subscriptions;
                    var0 = delete var0[var1];
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'register';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3, arg4() {
            _fun7187: for (var _fun7187_ip = 0;;) switch (_fun7187_ip) {
                case 0:
                    var6 = arg3;
                    var0 = this;
                    var5 = var0._actionHandlers;
                    var4 = var5.register;
                    var1 = null;
                    if (!(var1 == var6)) {
                        _fun7187_ip = 30;
                        continue _fun7187
                    }
                case 24:
                    var6 = var0._defaultBand;
                case 30:
                    var11 = arg0;
                    var10 = arg1;
                    var9 = arg2;
                    var7 = arg4;
                    var12 = var5;
                    var8 = var6;
                    var0 = var12[var4](var11, var10, var9, var8, var7, var6);
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'createToken';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0._actionHandlers;
            var0 = var1.createToken;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'addDependencies';
        var0.key = var5;
        var4 = function arg0, arg1() {
            var0 = this;
            var3 = var0._actionHandlers;
            var2 = var3.addDependencies;
            var1 = arg0;
            var0 = arg1;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[13] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = function() { // Environment: var6
        var3 = _closure1_slot5;
        var2 = function() {
            var2 = this;
            var4 = _closure1_slot4;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = {};
            var2._orderedActionHandlers = var3;
            var3 = null;
            var2._orderedCallbackTokens = var3;
            var3 = 1;
            var2._lastID = var3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 9;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.DepGraph;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._dependencyGraph = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getOrderedActionHandlers';
        var0.key = var1;
        var1 = function arg0() {
            _fun7192: for (var _fun7192_ip = 0;;) switch (_fun7192_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var2 = var3._orderedActionHandlers;
                    var0 = var1.type;
                    var0 = var2[var0];
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun7192_ip = 43;
                        continue _fun7192
                    }
                case 27:
                    var2 = var3._computeOrderedActionHandlers;
                    var1 = var1.type;
                    var0 = var2.bind(var3)(var1);
                case 43:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(10);
        var1[0] = var0;
        var0 = {};
        var5 = 'register';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun7193: for (var _fun7193_ip = 0;;) switch (_fun7193_ip) {
                case 0:
                    var7 = arg0;
                    var1 = arg1;
                    var3 = arg3;
                    var0 = arguments[4];
                    var2 = this;
                    var _closure3_slot0 = var7;
                    var _closure3_slot1 = var1;
                    var11 = undefined;
                    if (!(var0 === var11)) {
                        _fun7193_ip = 41;
                        continue _fun7193
                    }
                case 31:
                    var4 = var2.createToken;
                    var0 = var4.bind(var2)();
                case 41:
                    var _closure3_slot2 = var11;
                    var _closure3_slot3 = var11;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var4 = 5;
                    var4 = var6[var4];
                    var6 = var5.bind(var11)(var4);
                    var4 = 0;
                    var5 = var3 >= var4;
                    if (!var5) {
                        _fun7193_ip = 100;
                        continue _fun7193
                    }
                case 81:
                    var4 = global;
                    var8 = var4.Number;
                    var4 = var8.isInteger;
                    var5 = var4.bind(var8)(var3);
                case 100:
                    var4 = 'band must be a non-negative integer.';
                    var4 = var6.bind(var11)(var5, var4);
                    var6 = {};
                    _closure3_slot2 = var6;
                    var10 = function() {
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot3;
                        var2 = var3[var2];
                        var _closure4_slot0 = var2;
                        var3 = function arg0() {
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var4 = _closure1_slot11;
                        var7 = _closure3_slot0;
                        var6 = _closure3_slot3;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var5 = var0.concat;
                        var2 = '';
                        var0 = '_';
                        var2 = var5.bind(var2)(var7, var0, var6);
                        var0 = undefined;
                        var2 = var4.bind(var0)(var3, var2);
                        var2 = _closure3_slot2;
                        var1 = _closure3_slot3;
                        var2[var1] = var3;
                        return var0;
                    };
                    var8 = var1;
                    for (var1 in var8)
                        case 134: {
                            case 143: var13 = var1;
                            _closure3_slot3 = var13;
                            var13 = var10.bind(var11)();
                            _fun7193_ip = 134;
                            continue _fun7193;
                        }
                case 156:
                    var5 = var2._dependencyGraph;
                    var4 = var5.addNode;
                    var1 = {};
                    var1.name = var7;
                    var1.band = var3;
                    var1.actionHandler = var6;
                    var6 = arg2;
                    var1.storeDidChange = var6;
                    var1 = var4.bind(var5)(var0, var1);
                    var1 = var2._addToBand;
                    var1 = var1.bind(var2)(var0, var3);
                    var1 = var2._invalidateCaches;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'createToken';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var0 = var2._lastID;
            var1 = parseFloat(var0);
            var0 = var1 + 1;
            var2._lastID = var0;
            var0 = 'ID_';
            var0 = var0 + var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'addDependencies';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun7197: for (var _fun7197_ip = 0;;) switch (_fun7197_ip) {
                case 0:
                    var5 = arg0;
                    var3 = arg1;
                    var2 = this;
                    var0 = var2._validateDependencies;
                    var0 = var0.bind(var2)(var5, var3);
                    var1 = _closure1_slot9;
                    var0 = undefined;
                    var4 = var1.bind(var0)(var3);
                    var3 = var4.bind(var0)();
                    var1 = var3.done;
                    if (var1) {
                        _fun7197_ip = 85;
                        continue _fun7197
                    }
                case 47:
                    var7 = var3.value;
                    var6 = var2._dependencyGraph;
                    var1 = var6.addDependency;
                    var1 = var1.bind(var6)(var5, var7);
                    var6 = var4.bind(var0)();
                    var1 = var6.done;
                    var3 = var6;
                    if (!var1) {
                        _fun7197_ip = 47;
                        continue _fun7197
                    }
                case 85:
                    var1 = var2._invalidateCaches;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_validateDependencies';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = '_invalidateCaches';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = null;
            var1._orderedCallbackTokens = var0;
            var0 = {};
            var1._orderedActionHandlers = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = '_bandToken';
        var0.key = var5;
        var5 = function arg0() {
            _fun7200: for (var _fun7200_ip = 0;;) switch (_fun7200_ip) {
                case 0:
                    var6 = arg0;
                    var5 = this;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'band.';
                    var0 = var1.bind(var0)(var6);
                    var2 = var5._dependencyGraph;
                    var1 = var2.hasNode;
                    var1 = var1.bind(var2)(var0);
                    if (var1) {
                        _fun7200_ip = 140;
                        continue _fun7200
                    }
                case 50:
                    var3 = var5._dependencyGraph;
                    var2 = var3.addNode;
                    var1 = {};
                    var1.name = var0;
                    var1.band = var6;
                    var4 = {};
                    var1.actionHandler = var4;
                    var4 = function() {
                        var0 = undefined;
                        return var0;
                    };
                    var1.storeDidChange = var4;
                    var1 = var2.bind(var3)(var0, var1);
                    var1 = 0;
                    if (!(var6 > var1)) {
                        _fun7200_ip = 140;
                        continue _fun7200
                    }
                case 104:
                    var3 = var5._dependencyGraph;
                    var2 = var3.addDependency;
                    var4 = var5._bandToken;
                    var1 = 1;
                    var1 = var6 - var1;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var0, var1);
                case 140:
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = '_addToBand';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun7202: for (var _fun7202_ip = 0;;) switch (_fun7202_ip) {
                case 0:
                    var3 = arg0;
                    var6 = arg1;
                    var5 = this;
                    var2 = var5._dependencyGraph;
                    var1 = var2.addDependency;
                    var0 = var5._bandToken;
                    var0 = var0.bind(var5)(var6);
                    var0 = var1.bind(var2)(var0, var3);
                    var0 = 0;
                    if (!(var6 > var0)) {
                        _fun7202_ip = 80;
                        continue _fun7202
                    }
                case 44:
                    var2 = var5._dependencyGraph;
                    var1 = var2.addDependency;
                    var4 = var5._bandToken;
                    var0 = 1;
                    var0 = var6 - var0;
                    var0 = var4.bind(var5)(var0);
                    var0 = var1.bind(var2)(var3, var0);
                case 80:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = '_computeOrderedActionHandlers';
        var0.key = var5;
        var5 = function arg0() {
            _fun7203: for (var _fun7203_ip = 0;;) switch (_fun7203_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var6 = var1._orderedCallbackTokens;
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun7203_ip = 28;
                        continue _fun7203
                    }
                case 18:
                    var0 = var1._computeOrderedCallbackTokens;
                    var6 = var0.bind(var1)();
                case 28:
                    var0 = new Array(0);
                    var4 = var6.length;
                    var3 = 0;
                    var7 = var3 < var4;
                    if (!var7) {
                        _fun7203_ip = 125;
                        continue _fun7203
                    }
                case 46:
                    var9 = var1._dependencyGraph;
                    var8 = var9.getNodeData;
                    var7 = var6[var3];
                    var8 = var8.bind(var9)(var7);
                    var11 = var8.name;
                    var7 = var8.actionHandler;
                    var9 = var8.storeDidChange;
                    var10 = var7[var2];
                    if (!(var5 != var10)) {
                        _fun7203_ip = 118;
                        continue _fun7203
                    }
                case 92:
                    var8 = var0.push;
                    var7 = {};
                    var7.name = var11;
                    var7.actionHandler = var10;
                    var7.storeDidChange = var9;
                    var7 = var8.bind(var0)(var7);
                case 118:
                    var3 = var3 + 1;
                    if (var3 < var4) {
                        _fun7203_ip = 46;
                        continue _fun7203
                    }
                case 125:
                    var1 = var1._orderedActionHandlers;
                    var1[var2] = var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = '_computeOrderedCallbackTokens';
        var0.key = var5;
        var4 = function() {
            _fun7204: for (var _fun7204_ip = 0;;) switch (_fun7204_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var1 = undefined;
                case 11: // try_start_0
                    var4 = var3._dependencyGraph;
                    var2 = var4.overallOrder;
                    var2 = var2.bind(var4)();
                    var3._orderedCallbackTokens = var2;
                case 33: // try_end0
                    return var2;
                case 35: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var1 = var2;
                    var3 = var2.cyclePath;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun7204_ip = 57;
                        continue _fun7204
                    }
                case 52:
                    var2 = var1;
                    throw var2;
                case 57:
                    var2 = var1.cyclePath;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var5 = arg0;
                        var0 = _closure3_slot0;
                        var1 = var0._dependencyGraph;
                        var0 = var1.getNodeData;
                        var0 = var0.bind(var1)(var5);
                        var9 = var0.name;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var10 = '';
                        var8 = '(';
                        var6 = ')';
                        var7 = var5;
                        var0 = var10[var3](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var4 = var1.bind(var2)(var0);
                    var0 = global;
                    var2 = var0.Error;
                    var3 = var4.join;
                    var1 = ' -> ';
                    var3 = var3.bind(var4)(var1);
                    var0 = var0.HermesInternal;
                    var1 = var0.concat;
                    var0 = 'Dependency Cycle Found: ';
                    var5 = var1.bind(var0)(var3);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var6 = var1;
                    var0 = new var6[var2](var5, var4);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var4;
        var1[9] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/flux/Dispatcher.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Dispatcher = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4, 636, 20, 44, 570, 571, 640, 641, 2]);