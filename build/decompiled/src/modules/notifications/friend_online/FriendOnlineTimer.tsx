// modules/notifications/friend_online/FriendOnlineTimer.tsx
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
        _fun117228: for (var _fun117228_ip = 0;;) switch (_fun117228_ip) {
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
                _fun117228_ip = 76;
                continue _fun117228;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getCurrentConfig;
        var0 = {};
        var3 = 'FriendOnlineTimer';
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.useOnlineTimer;
        return var0;
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117234: for (var _fun117234_ip = 0;;) switch (_fun117234_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117234_ip = 223;
                            continue _fun117234
                        }
                    case 10:
                        var3 = _closure1_slot16;
                        var1 = undefined;
                        var3 = var3.bind(var1)();
                        if (!var3) {
                            _fun117234_ip = 220;
                            continue _fun117234
                        }
                    case 29: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 12;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.HTTP;
                        var4 = var5.post;
                        var3 = {};
                        var6 = _closure1_slot11;
                        var6 = var6.USER_MEANINGFULLY_ONLINE;
                        var3.url = var6;
                        var6 = true;
                        var3.rejectWithError = var6;
                        var3 = var4.bind(var5)(var3);
                        SaveGenerator(address = 91);
                    case 89:
                        return var3;
                    case 91:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun117234_ip = 163;
                            continue _fun117234
                        }
                    case 97:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 13;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'FRIEND_ONLINE_TIMER_REPORTED';
                        var4.type = var7;
                        var7 = global;
                        var8 = var7.Date;
                        var7 = var8.now;
                        var7 = var7.bind(var8)();
                        var4.timestampMs = var7;
                        var4 = var5.bind(var6)(var4);
                    case 161: // try_end0
                        _fun117234_ip = 220;
                        continue _fun117234;
                    case 163:
                        return var3;
                    case 166: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.captureException;
                        var2 = {};
                        var6 = {};
                        var7 = 'session_timer';
                        var6.app_context = var7;
                        var2.tags = var6;
                        var2 = var3.bind(var4)(var5, var2);
                    case 220:
                        return var1;
                    case 223:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot17 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function arg0() {
        var1 = _closure1_slot12;
        var1 = var1.ONLINE;
        var2 = new Array(2);
        var2[0] = var1;
        var0 = _closure1_slot12;
        var0 = var0.STREAMING;
        var2[1] = var0;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var8 = 5;
    var3 = var5[var8];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StatusTypes;
    var _closure1_slot12 = var3;
    var3 = 10;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.MINUTE;
    var7 = var8 * var7;
    var _closure1_slot13 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var7 = var3.MINUTE;
    var3 = 0.5;
    var3 = var3 * var7;
    var _closure1_slot14 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun117237: for (var _fun117237_ip = 0;;) switch (_fun117237_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun117237_ip = 86;
                        continue _fun117237
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun117237_ip = 120;
                    continue _fun117237;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = null;
                    var0.timerId = var2;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.start;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.start;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.CONNECTION_RESUMED = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.clear;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.CONNECTION_CLOSED = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.clear;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.CONNECTION_INTERRUPTED = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.start;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.SELF_PRESENCE_STORE_UPDATE = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        _fun117243: for (var _fun117243_ip = 0;;) switch (_fun117243_ip) {
                            case 0:
                                var2 = _closure1_slot16;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                if (!var2) {
                                    _fun117243_ip = 30;
                                    continue _fun117243
                                }
                            case 16:
                                var4 = _closure1_slot10;
                                var3 = var4.isCooldownElapsed;
                                var2 = var3.bind(var4)();
                            case 30:
                                if (!var2) {
                                    _fun117243_ip = 52;
                                    continue _fun117243
                                }
                            case 33:
                                var3 = _closure3_slot0;
                                var4 = var3.timerId;
                                var3 = null;
                                var2 = var3 == var4;
                            case 52:
                                if (!var2) {
                                    _fun117243_ip = 78;
                                    continue _fun117243
                                }
                            case 55:
                                var4 = _closure1_slot18;
                                var5 = _closure1_slot9;
                                var3 = var5.getStatus;
                                var3 = var3.bind(var5)();
                                var2 = var4.bind(var0)(var3);
                            case 78:
                                if (!var2) {
                                    _fun117243_ip = 179;
                                    continue _fun117243
                                }
                            case 81:
                                var2 = _closure3_slot0;
                                var3 = global;
                                var4 = var3.setTimeout;
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var3 = 11;
                                var3 = var6[var3];
                                var6 = var5.bind(var0)(var3);
                                var5 = var6.getCurrentConfig;
                                var3 = {};
                                var7 = 'FriendOnlineTimer';
                                var3.location = var7;
                                var3 = var5.bind(var6)(var3);
                                var3 = var3.useTestTimerDuration;
                                if (var3) {
                                    _fun117243_ip = 154;
                                    continue _fun117243
                                }
                            case 148:
                                var3 = _closure1_slot13;
                                _fun117243_ip = 158;
                                continue _fun117243;
                            case 154:
                                var3 = _closure1_slot14;
                            case 158:
                                var1 = function() { // Environment: var1
                                    _fun117244: for (var _fun117244_ip = 0;;) switch (_fun117244_ip) {
                                        case 0:
                                            var1 = _closure3_slot0;
                                            var0 = null;
                                            var1.timerId = var0;
                                            var3 = _closure1_slot18;
                                            var1 = _closure1_slot9;
                                            var0 = var1.getStatus;
                                            var1 = var0.bind(var1)();
                                            var0 = undefined;
                                            var1 = var3.bind(var0)(var1);
                                            if (!var1) {
                                                _fun117244_ip = 60;
                                                continue _fun117244
                                            }
                                        case 46:
                                            var3 = _closure1_slot10;
                                            var2 = var3.isCooldownElapsed;
                                            var1 = var2.bind(var3)();
                                        case 60:
                                            if (!var1) {
                                                _fun117244_ip = 76;
                                                continue _fun117244
                                            }
                                        case 63:
                                            var1 = function() {
                                                var0 = undefined;
                                                var3 = _closure1_slot17;
                                                var2 = var3.apply;
                                                var0 = arguments;
                                                var1 = var0;
                                                var0 = this;
                                                var0 = var2.bind(var3)(var0, var1);
                                                return var0;
                                            };
                                            var1 = var1.bind(var0)();
                                        case 76:
                                            return var0;
                                    }
                                };
                                var1 = var4.bind(var0)(var1, var3);
                                var2.timerId = var1;
                            case 179:
                                return var0;
                        }
                    };
                    var0.start = var2;
                    var1 = function() { // Environment: var1
                        _fun117246: for (var _fun117246_ip = 0;;) switch (_fun117246_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.timerId;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun117246_ip = 50;
                                    continue _fun117246
                                }
                            case 19:
                                var2 = global;
                                var4 = var2.clearTimeout;
                                var0 = _closure3_slot0;
                                var3 = var0.timerId;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var0.timerId = var1;
                            case 50:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.clear = var1;
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
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var1 = this;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/friend_online/FriendOnlineTimer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 5652, 14946, 660, 483, 667, 14947, 507, 806, 1207, 4295, 2]);