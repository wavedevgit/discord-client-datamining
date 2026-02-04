// modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun114146: for (var _fun114146_ip = 0;;) switch (_fun114146_ip) {
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
                _fun114146_ip = 76;
                continue _fun114146;
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
    var0 = function() {
        _fun114149: for (var _fun114149_ip = 0;;) switch (_fun114149_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 6;
                var3 = var3[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var5 = var6.getCurrentConfig;
                var4 = {};
                var3 = 'MessageRemindersNotificationManager';
                var4.location = var3;
                var3 = {};
                var7 = false;
                var3.autoTrackExposure = var7;
                var3 = var5.bind(var6)(var4, var3);
                var3 = var3.enabled;
                if (!var3) {
                    _fun114149_ip = 321;
                    continue _fun114149
                }
            case 71:
                var4 = _closure1_slot8;
                var3 = null;
                if (!(var3 != var4)) {
                    _fun114149_ip = 98;
                    continue _fun114149
                }
            case 81:
                var4 = global;
                var5 = var4.clearTimeout;
                var4 = _closure1_slot8;
                var4 = var5.bind(var0)(var4);
            case 98:
                var5 = _closure1_slot7;
                var4 = var5.getMessageReminders;
                var6 = var4.bind(var5)();
                var5 = var6.find;
                var4 = function(arg0) { // Environment: var1
                    _fun114150: for (var _fun114150_ip = 0;;) switch (_fun114150_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.saveData;
                            var2 = var0.dueAt;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun114150_ip = 68;
                                continue _fun114150
                            }
                        case 24:
                            var1 = var1.saveData;
                            var2 = var1.dueAt;
                            var1 = global;
                            var1 = var1.Date;
                            var3 = var1.prototype;
                            var3 = Object.create(var3, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var4 = var3;
                            var1 = new var4[var1](var3);
                            var1 = var1 instanceof Object ? var1 : var3;
                            var0 = var2 > var1;
                        case 68:
                            return var0;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var _closure2_slot0 = var4;
                var6 = var3 == var4;
                var5 = undefined;
                if (var6) {
                    _fun114149_ip = 165;
                    continue _fun114149
                }
            case 144:
                var6 = var4.saveData;
                var7 = var3 == var6;
                var5 = undefined;
                if (var7) {
                    _fun114149_ip = 165;
                    continue _fun114149
                }
            case 159:
                var5 = var6.dueAt;
            case 165:
                if (!(var3 == var5)) {
                    _fun114149_ip = 178;
                    continue _fun114149
                }
            case 169:
                _closure1_slot8 = var3;
                _fun114149_ip = 321;
                continue _fun114149;
            case 178:
                var3 = global;
                var6 = var3.Date;
                var5 = var6.now;
                var6 = var5.bind(var6)();
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 8;
                var5 = var8[var5];
                var5 = var7.bind(var0)(var5);
                var5 = var5.Millis;
                var5 = var5.WEEK;
                var6 = var6 + var5;
                var5 = var4.saveData;
                var7 = var5.dueAt;
                var5 = var7.getTime;
                var5 = var5.bind(var7)();
                if (!(!(var5 > var6))) {
                    _fun114149_ip = 321;
                    continue _fun114149
                }
            case 257:
                var4 = var4.saveData;
                var5 = var4.dueAt;
                var4 = var5.getTime;
                var5 = var4.bind(var5)();
                var6 = var3.Date;
                var4 = var6.now;
                var4 = var4.bind(var6)();
                var4 = var5 - var4;
                var3 = var3.setTimeout;
                var1 = function() { // Environment: var1
                    _fun114151: for (var _fun114151_ip = 0;;) switch (_fun114151_ip) {
                        case 0:
                            var5 = _closure2_slot0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 6;
                            var2 = var2[var0];
                            var0 = undefined;
                            var6 = var3.bind(var0)(var2);
                            var4 = var6.getCurrentConfig;
                            var3 = {};
                            var2 = 'MessageRemindersNotificationManager';
                            var3.location = var2;
                            var2 = {};
                            var7 = false;
                            var2.autoTrackExposure = var7;
                            var2 = var4.bind(var6)(var3, var2);
                            var2 = var2.enabled;
                            if (!var2) {
                                _fun114151_ip = 126;
                                continue _fun114151
                            }
                        case 73:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 7;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'MESSAGE_REMINDER_DUE';
                            var2.type = var6;
                            var2.savedMessage = var5;
                            var2 = var3.bind(var4)(var2);
                            var1 = _closure1_slot10;
                            var1 = var1.bind(var0)();
                        case 126:
                            return var0;
                    }
                };
                var1 = var3.bind(var0)(var1, var4);
                _closure1_slot8 = var1;
            case 321:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = null;
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun114153: for (var _fun114153_ip = 0;;) switch (_fun114153_ip) {
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
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114153_ip = 86;
                        continue _fun114153
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114153_ip = 120;
                    continue _fun114153;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleUpdates;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.SAVED_MESSAGES_UPDATE = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleUpdates;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.SAVED_MESSAGE_CREATE = var3;
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleUpdates;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.SAVED_MESSAGE_DELETE = var3;
                    var0.actions = var2;
                    var1 = function() { // Environment: var1
                        var1 = _closure1_slot10;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0.handleUpdates = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var11 = var3;
    var1 = new var11[var1](var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/saved_messages/message_reminders/MessageRemindersNotificationManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 9642, 8752, 806, 667, 4299, 2]);