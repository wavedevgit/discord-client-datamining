// modules/push_feedback/PushFeedbackStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() {
        _fun77451: for (var _fun77451_ip = 0;;) switch (_fun77451_ip) {
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
                _fun77451_ip = 76;
                continue _fun77451;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot0 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot1 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.NotificationTypes;
    var _closure1_slot5 = var1;
    var1 = null;
    var _closure1_slot6 = var1;
    var1 = {};
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun77455: for (var _fun77455_ip = 0;;) switch (_fun77455_ip) {
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
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun77455_ip = 69;
                        continue _fun77455
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun77455_ip = 105;
                    continue _fun77455;
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun77456: for (var _fun77456_ip = 0;;) switch (_fun77456_ip) {
                case 0:
                    var0 = arg0;
                    var3 = null;
                    if (!(var3 != var0)) {
                        _fun77456_ip = 42;
                        continue _fun77456
                    }
                case 9:
                    var2 = var0.pushFeedback;
                    _closure1_slot6 = var2;
                    var2 = var0.pushFeedbackMap;
                    if (!(var3 != var2)) {
                        _fun77456_ip = 42;
                        continue _fun77456
                    }
                case 32:
                    var0 = var0.pushFeedbackMap;
                    _closure1_slot7 = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = {};
            var2 = _closure1_slot6;
            var0.pushFeedback = var2;
            var1 = _closure1_slot7;
            var0.pushFeedbackMap = var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isEligible';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot6;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isUserPushMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun77459: for (var _fun77459_ip = 0;;) switch (_fun77459_ip) {
                case 0:
                    var0 = _closure1_slot6;
                    var1 = null;
                    var2 = var1 == var0;
                    var1 = undefined;
                    if (var2) {
                        _fun77459_ip = 23;
                        continue _fun77459
                    }
                case 18:
                    var1 = var0.messageId;
                case 23:
                    var0 = arg0;
                    var0 = var1 === var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getPushFeedback';
        var4.key = var6;
        var5 = function arg0, arg1() {
            _fun77460: for (var _fun77460_ip = 0;;) switch (_fun77460_ip) {
                case 0:
                    var0 = _closure1_slot6;
                    var4 = null;
                    var2 = var4 == var0;
                    var3 = undefined;
                    if (var2) {
                        _fun77460_ip = 23;
                        continue _fun77460
                    }
                case 18:
                    var3 = var0.messageId;
                case 23:
                    var2 = arg1;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun77460_ip = 54;
                        continue _fun77460
                    }
                case 32:
                    var2 = _closure1_slot6;
                    var3 = var2.channelId;
                    var2 = arg0;
                    var0 = null;
                    if (!(var3 === var2)) {
                        _fun77460_ip = 54;
                        continue _fun77460
                    }
                case 50:
                    var0 = _closure1_slot6;
                case 54:
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'PushFeedbackStore';
    var7.displayName = var1;
    var1 = 'PushFeedbackPersistedStore';
    var7.persistKey = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function arg0() {
        _fun77461: for (var _fun77461_ip = 0;;) switch (_fun77461_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.notificationType;
                var5 = var0.messageId;
                var4 = var0.channelId;
                var1 = _closure1_slot5;
                var1 = var1.TOP_MESSAGE_PUSH;
                if (!(var1 !== var2)) {
                    _fun77461_ip = 52;
                    continue _fun77461
                }
            case 36:
                var1 = _closure1_slot5;
                var3 = var1.TRENDING_CONTENT_PUSH;
                var1 = false;
                if (!(var3 === var2)) {
                    _fun77461_ip = 54;
                    continue _fun77461
                }
            case 52:
                var1 = true;
            case 54:
                if (!var1) {
                    _fun77461_ip = 236;
                    continue _fun77461
                }
            case 60:
                var1 = _closure1_slot7;
                var3 = var1[var2];
                var1 = null;
                if (!(var1 == var3)) {
                    _fun77461_ip = 92;
                    continue _fun77461
                }
            case 74:
                var6 = {};
                var6.messageId = var5;
                var6.channelId = var4;
                var6.pushType = var2;
                var3 = var6;
            case 92:
                var3 = var3.userViewInfo;
                if (!(var1 == var3)) {
                    _fun77461_ip = 116;
                    continue _fun77461
                }
            case 102:
                var3 = {
                    'eligibleAt': 0,
                    'viewCount': 0
                };
            case 116:
                var8 = var3.eligibleAt;
                var6 = var3.viewCount;
                var3 = global;
                var7 = var3.Date;
                var3 = var7.now;
                var9 = var3.bind(var7)();
                if (!(!(var8 < var9))) {
                    _fun77461_ip = 166;
                    continue _fun77461
                }
            case 149:
                var3 = 10;
                var7 = var6 < var3;
                var3 = null;
                if (!var7) {
                    _fun77461_ip = 194;
                    continue _fun77461
                }
            case 161:
                var7 = var6 + 1;
                _fun77461_ip = 179;
                continue _fun77461;
            case 166:
                var6 = 604800000;
                var8 = var9 + var6;
                var7 = 1;
            case 179:
                var6 = {};
                var6.eligibleAt = var8;
                var6.viewCount = var7;
                var3 = var6;
            case 194:
                if (!(var1 == var3)) {
                    _fun77461_ip = 204;
                    continue _fun77461
                }
            case 198:
                _closure1_slot6 = var1;
                _fun77461_ip = 236;
                continue _fun77461;
            case 204:
                var1 = {};
                var1.messageId = var5;
                var1.channelId = var4;
                var1.pushType = var2;
                var1.userViewInfo = var3;
                _closure1_slot6 = var1;
                var0 = _closure1_slot7;
                var0[var2] = var1;
            case 236:
                var0 = undefined;
                return var0;
        }
    };
    var1.PUSH_FEEDBACK_RECEIVED_NOTIFICATION = var8;
    var8 = function() {
        var0 = null;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var1.PUSH_FEEDBACK_CLEANUP = var8;
    var3 = function arg0() {
        _fun77463: for (var _fun77463_ip = 0;;) switch (_fun77463_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.channelId;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun77463_ip = 46;
                    continue _fun77463
                }
            case 14:
                var2 = _closure1_slot6;
                if (!(var1 != var2)) {
                    _fun77463_ip = 46;
                    continue _fun77463
                }
            case 25:
                var2 = _closure1_slot6;
                var2 = var2.channelId;
                if (!(var3 !== var2)) {
                    _fun77463_ip = 42;
                    continue _fun77463
                }
            case 38:
                _closure1_slot6 = var1;
            case 42:
                var0 = undefined;
                return var0;
            case 46:
                var0 = false;
                return var0;
        }
    };
    var1.CHANNEL_SELECT = var3;
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
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/push_feedback/PushFeedbackStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4560, 566, 806, 2]);