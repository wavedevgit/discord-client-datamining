// modules/notifications/native/NativeNotificationsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function arg0, arg1() {
        _fun117195: for (var _fun117195_ip = 0;;) switch (_fun117195_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun117195_ip = 46;
                    continue _fun117195
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun117195_ip = 55;
                    continue _fun117195
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun117195_ip = 345;
                    continue _fun117195
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun117195_ip = 323;
                    continue _fun117195
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun117195_ip = 283;
                    continue _fun117195
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun117195_ip = 270;
                    continue _fun117195
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
                    _fun117195_ip = 163;
                    continue _fun117195
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun117195_ip = 179;
                    continue _fun117195
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun117195_ip = 249;
                    continue _fun117195
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun117195_ip = 249;
                    continue _fun117195
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun117195_ip = 234;
                    continue _fun117195
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun117195_ip = 247;
                    continue _fun117195
                }
            case 234:
                var8 = _closure1_slot16;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun117195_ip = 265;
                continue _fun117195;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun117195_ip = 283;
                continue _fun117195;
            case 270:
                var6 = _closure1_slot16;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun117195_ip = 323;
                    continue _fun117195
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
                    _fun117195_ip = 330;
                    continue _fun117195
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun117196: for (var _fun117196_ip = 0;;) switch (_fun117196_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun117196_ip = 56;
                                continue _fun117196
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
                            _fun117196_ip = 67;
                            continue _fun117196;
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
    var _closure1_slot15 = var0;
    var0 = function arg0, arg1() {
        _fun117197: for (var _fun117197_ip = 0;;) switch (_fun117197_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun117197_ip = 23;
                    continue _fun117197
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun117197_ip = 33;
                    continue _fun117197
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
                    _fun117197_ip = 70;
                    continue _fun117197
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun117197_ip = 55;
                    continue _fun117197
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        _fun117198: for (var _fun117198_ip = 0;;) switch (_fun117198_ip) {
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
                _fun117198_ip = 76;
                continue _fun117198;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot19;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117204: for (var _fun117204_ip = 0;;) switch (_fun117204_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117204_ip = 106;
                            continue _fun117204
                        }
                    case 7:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var1 = var2[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.shouldClearChannelNotificationsOnAppForeground;
                        var1 = {};
                        var6 = 'getDeliveredNotifications';
                        var1.location = var6;
                        var1 = var4.bind(var5)(var1);
                        if (!var1) {
                            _fun117204_ip = 100;
                            continue _fun117204
                        }
                    case 56:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 12;
                        var1 = var5[var1];
                        var4 = var4.bind(var2)(var1);
                        var1 = var4.getDeliveredNotifications;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 90);
                    case 88:
                        return var1;
                    case 90:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun117204_ip = 103;
                            continue _fun117204
                        }
                    case 96:
                        _closure1_slot14 = var1;
                    case 100:
                        return var2;
                    case 103:
                        return var1;
                    case 106:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot19 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot21;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117208: for (var _fun117208_ip = 0;;) switch (_fun117208_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117208_ip = 49;
                            continue _fun117208
                        }
                    case 7:
                        var1 = _closure1_slot18;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 24);
                    case 22:
                        return var1;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun117208_ip = 46;
                            continue _fun117208
                        }
                    case 30:
                        var3 = function() {
                            _fun117209: for (var _fun117209_ip = 0;;) switch (_fun117209_ip) {
                                case 0:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var0 = 11;
                                    var3 = var3[var0];
                                    var0 = undefined;
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.shouldClearChannelNotificationsOnAppForeground;
                                    var3 = {};
                                    var6 = 'clearStaleNotifications';
                                    var3.location = var6;
                                    var3 = var4.bind(var5)(var3);
                                    if (!var3) {
                                        _fun117209_ip = 141;
                                        continue _fun117209
                                    }
                                case 53:
                                    var5 = _closure1_slot14;
                                    var4 = var5.filter;
                                    var3 = function(arg0) { // Environment: var2
                                        _fun117210: for (var _fun117210_ip = 0;;) switch (_fun117210_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var1 = var2.userInfo;
                                                var0 = null;
                                                if (!(var0 != var1)) {
                                                    _fun117210_ip = 306;
                                                    continue _fun117210
                                                }
                                            case 18:
                                                var1 = var2.userInfo;
                                                var3 = 'object';
                                                var1 = typeof var1;
                                                if (!(var3 === var1)) {
                                                    _fun117210_ip = 306;
                                                    continue _fun117210
                                                }
                                            case 38:
                                                var1 = var2.userInfo;
                                                var1 = var1.channel_id;
                                                var3 = 'string';
                                                var1 = typeof var1;
                                                if (!(var3 === var1)) {
                                                    _fun117210_ip = 302;
                                                    continue _fun117210
                                                }
                                            case 63:
                                                var1 = var2.userInfo;
                                                var1 = var1.notif_instance_id;
                                                var1 = typeof var1;
                                                if (!(var3 === var1)) {
                                                    _fun117210_ip = 298;
                                                    continue _fun117210
                                                }
                                            case 85:
                                                var1 = var2.userInfo;
                                                var4 = var1.notif_instance_id;
                                                var1 = var2.userInfo;
                                                var5 = var1.type;
                                                var1 = 'MESSAGE_CREATE';
                                                if (!(var1 !== var5)) {
                                                    _fun117210_ip = 167;
                                                    continue _fun117210
                                                }
                                            case 116:
                                                var1 = var2.userInfo;
                                                var5 = var1.type;
                                                var1 = 'GENERIC_PUSH_NOTIFICATION_SENT';
                                                if (!(var1 === var5)) {
                                                    _fun117210_ip = 163;
                                                    continue _fun117210
                                                }
                                            case 137:
                                                var1 = var2.userInfo;
                                                var5 = var1.notification_type;
                                                var1 = 'REACTIONS_PUSH_NOTIFICATION';
                                                if (!(var1 !== var5)) {
                                                    _fun117210_ip = 198;
                                                    continue _fun117210
                                                }
                                            case 159:
                                                var1 = false;
                                                return var1;
                                            case 163:
                                                var1 = false;
                                                return var1;
                                            case 167:
                                                var1 = var2.userInfo;
                                                var1 = var1.message_id;
                                                var1 = typeof var1;
                                                if (!(var3 === var1)) {
                                                    _fun117210_ip = 294;
                                                    continue _fun117210
                                                }
                                            case 186:
                                                var1 = var2.userInfo;
                                                var4 = var1.message_id;
                                            case 198:
                                                if (!(var0 != var4)) {
                                                    _fun117210_ip = 290;
                                                    continue _fun117210
                                                }
                                            case 202:
                                                var1 = typeof var4;
                                                if (!(var3 === var1)) {
                                                    _fun117210_ip = 290;
                                                    continue _fun117210
                                                }
                                            case 209:
                                                var5 = _closure1_slot11;
                                                var3 = var5.ackMessageId;
                                                var2 = var2.userInfo;
                                                var2 = var2.channel_id;
                                                var3 = var3.bind(var5)(var2);
                                                var0 = var0 != var3;
                                                if (!var0) {
                                                    _fun117210_ip = 288;
                                                    continue _fun117210
                                                }
                                            case 245:
                                                var5 = _closure1_slot1;
                                                var2 = _closure1_slot2;
                                                var1 = 13;
                                                var2 = var2[var1];
                                                var1 = undefined;
                                                var2 = var5.bind(var1)(var2);
                                                var1 = var2.compare;
                                                var2 = var1.bind(var2)(var3, var4);
                                                var1 = 0;
                                                var1 = var2 <= var1;
                                                var0 = !var1;
                                            case 288:
                                                return var0;
                                            case 290:
                                                var0 = false;
                                                return var0;
                                            case 294:
                                                var0 = false;
                                                return var0;
                                            case 298:
                                                var0 = false;
                                                return var0;
                                            case 302:
                                                var0 = false;
                                                return var0;
                                            case 306:
                                                var0 = false;
                                                return var0;
                                        }
                                    };
                                    var4 = var4.bind(var5)(var3);
                                    var3 = var4.map;
                                    var2 = function(arg0) { // Environment: var2
                                        var0 = arg0;
                                        var0 = var0.identifier;
                                        return var0;
                                    };
                                    var4 = var3.bind(var4)(var2);
                                    var3 = var4.length;
                                    var2 = 0;
                                    if (!(var3 > var2)) {
                                        _fun117209_ip = 141;
                                        continue _fun117209
                                    }
                                case 102:
                                    var3 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 12;
                                    var2 = var5[var2];
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.removeDeliveredNotifications;
                                    var2 = var2.bind(var3)(var4);
                                    var1 = _closure1_slot18;
                                    var1 = var1.bind(var0)();
                                case 141:
                                    return var0;
                            }
                        };
                        var3 = var3.bind(var2)();
                        return var2;
                    case 46:
                        return var1;
                    case 49:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot21 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot21 = var0;
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
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'NativeNotificationsManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot13 = var3;
    var3 = new Array(0);
    var _closure1_slot14 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function arg0() {
            _fun117213: for (var _fun117213_ip = 0;;) switch (_fun117213_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun117213_ip = 86;
                        continue _fun117213
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun117213_ip = 120;
                    continue _fun117213;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = function(arg0) { // Environment: var1
                        _fun117214: for (var _fun117214_ip = 0;;) switch (_fun117214_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.channelId;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var1);
                                var1 = var4.isIOS;
                                var1 = var1.bind(var4)();
                                if (!var1) {
                                    _fun117214_ip = 91;
                                    continue _fun117214
                                }
                            case 46:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 12;
                                var1 = var5[var1];
                                var5 = var4.bind(var0)(var1);
                                var4 = var5.setApplicationIconBadgeNumber;
                                var6 = _closure1_slot10;
                                var1 = var6.getTotalMentionCount;
                                var1 = var1.bind(var6)();
                                var1 = var4.bind(var5)(var1);
                            case 91:
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun117214_ip = 124;
                                    continue _fun117214
                                }
                            case 97:
                                var2 = _closure1_slot9;
                                var2 = var2.DCDNotificationManager;
                                if (!(var1 != var2)) {
                                    _fun117214_ip = 124;
                                    continue _fun117214
                                }
                            case 111:
                                var1 = var2.clearNotificationsForChannel;
                                var1 = var1.bind(var2)(var3);
                            case 124:
                                return var0;
                        }
                    };
                    var0.handleAck = var3;
                    var3 = _closure1_slot8;
                    var2 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun117216: for (var _fun117216_ip = 0;;) switch (_fun117216_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun117216_ip = 982;
                                        continue _fun117216
                                    }
                                case 12:
                                    var1 = undefined;
                                    var7 = undefined;
                                    var _closure5_slot0 = var1;
                                    var5 = undefined;
                                    var6 = undefined;
                                    var4 = undefined;
                                    var8 = undefined;
                                    var14 = undefined;
                                    var _closure5_slot1 = var1;
                                    var10 = undefined;
                                    var15 = undefined;
                                    var16 = undefined;
                                    var17 = undefined;
                                    var18 = undefined;
                                    var19 = undefined;
                                    var20 = undefined;
                                    var12 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var11 = 14;
                                    var3 = var3[var11];
                                    var12 = var12.bind(var1)(var3);
                                    var3 = var12.isIOS;
                                    var3 = var3.bind(var12)();
                                    if (var3) {
                                        _fun117216_ip = 103;
                                        continue _fun117216
                                    }
                                case 84:
                                    var12 = _closure3_slot0;
                                    var3 = var12.handleSetCallNotificationExperiment;
                                    var3 = var3.bind(var12)();
                                    _fun117216_ip = 111;
                                    continue _fun117216;
                                case 103:
                                    var3 = _closure1_slot20;
                                    var3 = var3.bind(var1)();
                                case 111: // try_start_0
                                    var12 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var11];
                                    var12 = var12.bind(var1)(var3);
                                    var3 = var12.isIOS;
                                    var12 = var3.bind(var12)();
                                    var3 = 'cache';
                                    if (!var12) {
                                        _fun117216_ip = 149;
                                        continue _fun117216
                                    }
                                case 145:
                                    var3 = 'shared';
                                case 149:
                                    var7 = var3;
                                    _closure5_slot0 = var3;
                                    var13 = 'processing_notifications';
                                    var5 = var13;
                                    var6 = 'processing_notification_states';
                                    var3 = function() { // Environment: var9
                                        var3 = _closure1_slot8;
                                        var2 = undefined;
                                        var1 = function*(arg0, arg1) { // Environment: var0
                                            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                                                _fun117219: for (var _fun117219_ip = 0;;) switch (_fun117219_ip) {
                                                    case 0:
                                                        StartGenerator();
                                                        var8 = arg1;
                                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                        if (var1) {
                                                            _fun117219_ip = 184;
                                                            continue _fun117219
                                                        }
                                                    case 13:
                                                        var2 = _closure1_slot0;
                                                        var1 = _closure1_slot2;
                                                        var9 = 15;
                                                        var1 = var1[var9];
                                                        var7 = undefined;
                                                        var4 = var2.bind(var7)(var1);
                                                        var2 = var4.removeFile;
                                                        var1 = _closure5_slot0;
                                                        var1 = var2.bind(var4)(var1, var8);
                                                        SaveGenerator(address = 61);
                                                    case 59:
                                                        return var1;
                                                    case 61:
                                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                                        if (var2) {
                                                            _fun117219_ip = 181;
                                                            continue _fun117219
                                                        }
                                                    case 67:
                                                        var4 = _closure1_slot0;
                                                        var2 = _closure1_slot2;
                                                        var2 = var2[var9];
                                                        var10 = var4.bind(var7)(var2);
                                                        var6 = var10.moveFile;
                                                        var4 = _closure5_slot0;
                                                        var2 = arg0;
                                                        var2 = var6.bind(var10)(var4, var2, var8);
                                                        SaveGenerator(address = 108);
                                                    case 106:
                                                        return var2;
                                                    case 108:
                                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                                        if (var4) {
                                                            _fun117219_ip = 178;
                                                            continue _fun117219
                                                        }
                                                    case 114:
                                                        var4 = null;
                                                        if (!var2) {
                                                            _fun117219_ip = 172;
                                                            continue _fun117219
                                                        }
                                                    case 119:
                                                        var6 = _closure1_slot0;
                                                        var5 = _closure1_slot2;
                                                        var5 = var5[var9];
                                                        var7 = var6.bind(var7)(var5);
                                                        var6 = var7.readFile;
                                                        var5 = _closure5_slot0;
                                                        var3 = 'utf8';
                                                        var3 = var6.bind(var7)(var5, var8, var3);
                                                        SaveGenerator(address = 163);
                                                    case 161:
                                                        return var3;
                                                    case 163:
                                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                                        var4 = var3;
                                                        if (var5) {
                                                            _fun117219_ip = 175;
                                                            continue _fun117219
                                                        }
                                                    case 172:
                                                        return var4;
                                                    case 175:
                                                        return var3;
                                                    case 178:
                                                        return var2;
                                                    case 181:
                                                        return var1;
                                                    case 184:
                                                        return var0;
                                                }
                                            };
                                            return var0;
                                        };
                                        var1 = var3.bind(var2)(var1);
                                        var _closure6_slot0 = var1;
                                        var0 = function() { // Environment: var0
                                            var0 = undefined;
                                            var3 = _closure6_slot0;
                                            var2 = var3.apply;
                                            var0 = arguments;
                                            var1 = var0;
                                            var0 = this;
                                            var0 = var2.bind(var3)(var0, var1);
                                            return var0;
                                        };
                                        return var0;
                                    };
                                    var12 = var3.bind(var1)();
                                    var4 = var12;
                                    var3 = 'notifications_to_track';
                                    var3 = var12.bind(var1)(var3, var13);
                                    SaveGenerator(address = 201);
                                case 199:
                                    return var3;
                                case 201:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 12);
                                    if (var12) {
                                        _fun117216_ip = 953;
                                        continue _fun117216
                                    }
                                case 210:
                                    var8 = var3;
                                    var13 = null;
                                    if (!(var13 != var3)) {
                                        _fun117216_ip = 950;
                                        continue _fun117216
                                    }
                                case 222:
                                    var12 = global;
                                    var21 = var12.Map;
                                    var22 = var21.prototype;
                                    var22 = Object.create(var22, {
                                        constructor: {
                                            value: var21
                                        }
                                    });
                                    var29 = var22;
                                    var21 = new var29[var21](var28);
                                    var21 = var21 instanceof Object ? var21 : var22;
                                    var14 = var21;
                                    _closure5_slot1 = var21;
                                    var22 = _closure1_slot0;
                                    var21 = _closure1_slot2;
                                    var21 = var21[var11];
                                    var22 = var22.bind(var1)(var21);
                                    var21 = var22.isIOS;
                                    var21 = var21.bind(var22)();
                                    if (!var21) {
                                        _fun117216_ip = 369;
                                        continue _fun117216
                                    }
                                case 287:
                                    var22 = var4;
                                    var21 = var6;
                                    var4 = 'notification_states_to_track';
                                    var4 = var22.bind(var1)(var4, var21);
                                    SaveGenerator(address = 309);
                                case 307:
                                    return var4;
                                case 309:
                                    ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 21);
                                    if (var21) {
                                        _fun117216_ip = 947;
                                        continue _fun117216
                                    }
                                case 318:
                                    var10 = var4;
                                    if (!(var13 !== var4)) {
                                        _fun117216_ip = 369;
                                        continue _fun117216
                                    }
                                case 325:
                                    var21 = var10;
                                    var10 = var21.trim;
                                    var22 = var10.bind(var21)();
                                    var21 = var22.split;
                                    var10 = '\n';
                                    var22 = var21.bind(var22)(var10);
                                    var21 = var22.forEach;
                                    var10 = function(arg0) { // Environment: var9
                                        var0 = global;
                                        var2 = var0.JSON;
                                        var1 = var2.parse;
                                        var0 = arg0;
                                        var0 = var1.bind(var2)(var0);
                                        var3 = _closure5_slot1;
                                        var2 = var3.set;
                                        var1 = var0._local_uuid;
                                        var0 = var0.app_state;
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var10 = var21.bind(var22)(var10);
                                case 369:
                                    var16 = function arg0() {
                                        _fun117222: for (var _fun117222_ip = 0;;) switch (_fun117222_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var0 = null;
                                                if (!(var0 == var4)) {
                                                    _fun117222_ip = 13;
                                                    continue _fun117222
                                                }
                                            case 9:
                                                var0 = undefined;
                                                return var0;
                                            case 13:
                                                var2 = typeof var4;
                                                var0 = 'number';
                                                if (!(var0 !== var2)) {
                                                    _fun117222_ip = 55;
                                                    continue _fun117222
                                                }
                                            case 24:
                                                var3 = undefined;
                                                var1 = 'string';
                                                var0 = undefined;
                                                if (!(var1 === var2)) {
                                                    _fun117222_ip = 53;
                                                    continue _fun117222
                                                }
                                            case 36:
                                                var1 = global;
                                                var2 = var1.parseInt;
                                                var1 = 10;
                                                var0 = var2.bind(var3)(var4, var1);
                                            case 53:
                                                _fun117222_ip = 83;
                                                continue _fun117222;
                                            case 55:
                                                var1 = global;
                                                var3 = var1.Math;
                                                var2 = var3.round;
                                                var1 = 1000;
                                                var1 = var1 * var4;
                                                var0 = var2.bind(var3)(var1);
                                            case 83:
                                                return var0;
                                        }
                                    };
                                    var9 = _closure1_slot15;
                                    var10 = var8;
                                    var8 = var10.trim;
                                    var21 = var8.bind(var10)();
                                    var10 = var21.split;
                                    var8 = '\n';
                                    var8 = var10.bind(var21)(var8);
                                    var8 = var9.bind(var1)(var8);
                                    var17 = var8;
                                    var8 = var8.bind(var1)();
                                    var15 = var8;
                                    var8 = var8.done;
                                    var10 = 16;
                                    var9 = 'background';
                                    if (var8) {
                                        _fun117216_ip = 825;
                                        continue _fun117216
                                    }
                                case 440:
                                    var8 = var15;
                                    var22 = var8.value;
                                    var21 = var12.JSON;
                                    var8 = var21.parse;
                                    var20 = var8.bind(var21)(var22);
                                    var21 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var8 = var8[var11];
                                    var21 = var21.bind(var1)(var8);
                                    var8 = var21.isIOS;
                                    var8 = var8.bind(var21)();
                                    if (!var8) {
                                        _fun117216_ip = 552;
                                        continue _fun117216
                                    }
                                case 495:
                                    var8 = var20;
                                    var8 = var8._local_uuid;
                                    if (!(var1 !== var8)) {
                                        _fun117216_ip = 552;
                                        continue _fun117216
                                    }
                                case 508:
                                    var21 = var20;
                                    var23 = var14;
                                    var22 = var23.get;
                                    var8 = var21._local_uuid;
                                    var8 = var22.bind(var23)(var8);
                                    var19 = var8;
                                    var22 = var13 != var8;
                                    var8 = var9;
                                    if (!var22) {
                                        _fun117216_ip = 546;
                                        continue _fun117216
                                    }
                                case 543:
                                    var8 = var19;
                                case 546:
                                    var21.app_state = var8;
                                case 552:
                                    var21 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var8 = var8[var10];
                                    var23 = var21.bind(var1)(var8);
                                    var22 = var23.track;
                                    var8 = _closure1_slot12;
                                    var21 = var8.PUSH_NOTIFICATION_RECEIVED;
                                    var8 = {};
                                    var26 = var16;
                                    var24 = var20;
                                    var25 = var24.timestamp;
                                    var25 = var26.bind(var1)(var25);
                                    var8.notification_received_timestamp = var25;
                                    var25 = var24.push_action_type;
                                    var8.push_action_type = var25;
                                    var25 = var24.notif_instance_id;
                                    var8.notif_instance_id = var25;
                                    var25 = var24.notif_type_id;
                                    var8.notif_type_id = var25;
                                    var25 = var24.join_id;
                                    var8.join_id = var25;
                                    var25 = var24.notif_user_id;
                                    var8.notif_user_id = var25;
                                    var25 = var24.receiving_user_id;
                                    var8.receiving_user_id = var25;
                                    var25 = var24.message_id;
                                    var8.message_id = var25;
                                    var25 = var24.message_type;
                                    var8.message_type = var25;
                                    var25 = var24.guild_id;
                                    var8.guild_id = var25;
                                    var25 = var24.channel_id;
                                    var8.channel_id = var25;
                                    var24 = var24.channel_type;
                                    var18 = var24;
                                    var25 = var13 == var24;
                                    var24 = undefined;
                                    if (var25) {
                                        _fun117216_ip = 746;
                                        continue _fun117216
                                    }
                                case 734:
                                    var26 = var18;
                                    var25 = var26.toString;
                                    var24 = var25.bind(var26)();
                                case 746:
                                    var8.channel_type = var24;
                                    var24 = var20;
                                    var25 = var24.rel_type;
                                    var8.rel_type = var25;
                                    var25 = var24.mention_type;
                                    var8.mention_type = var25;
                                    var25 = var24.app_state;
                                    var8.app_state = var25;
                                    var24 = var24.os_enabled;
                                    var8.os_enabled = var24;
                                    var8 = var22.bind(var23)(var21, var8);
                                    var8 = var17;
                                    var8 = var8.bind(var1)();
                                    var15 = var8;
                                    var8 = var8.done;
                                    if (!var8) {
                                        _fun117216_ip = 440;
                                        continue _fun117216
                                    }
                                case 825:
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var10 = 15;
                                    var8 = var8[var10];
                                    var12 = var9.bind(var1)(var8);
                                    var9 = var12.removeFile;
                                    var8 = var7;
                                    var5 = var9.bind(var12)(var8, var5);
                                    SaveGenerator(address = 864);
                                case 862:
                                    return var5;
                                case 864:
                                    ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                                    if (var8) {
                                        _fun117216_ip = 944;
                                        continue _fun117216
                                    }
                                case 870:
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var8 = var8[var11];
                                    var9 = var9.bind(var1)(var8);
                                    var8 = var9.isIOS;
                                    var8 = var8.bind(var9)();
                                    if (!var8) {
                                        _fun117216_ip = 939;
                                        continue _fun117216
                                    }
                                case 900:
                                    var9 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var8 = var8[var10];
                                    var9 = var9.bind(var1)(var8);
                                    var8 = var9.removeFile;
                                    var6 = var8.bind(var9)(var7, var6);
                                    SaveGenerator(address = 933);
                                case 931:
                                    return var6;
                                case 933:
                                    ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                                    if (var7) {
                                        _fun117216_ip = 941;
                                        continue _fun117216
                                    }
                                case 939: // try_end0
                                    _fun117216_ip = 979;
                                    continue _fun117216;
                                case 941:
                                    return var6;
                                case 944:
                                    return var5;
                                case 947:
                                    return var4;
                                case 950:
                                    return var1;
                                case 953:
                                    return var3;
                                case 956: // catch_target0
                                    CatchBlockStart(arg_register = 5);
                                    var4 = _closure1_slot13;
                                    var3 = var4.error;
                                    var2 = 'Error tracking push notifications';
                                    var2 = var3.bind(var4)(var2, var5);
                                case 979:
                                    return var1;
                                case 982:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var0.handlePostConnectionOpen = var2;
                    var2 = function() { // Environment: var1
                        _fun117223: for (var _fun117223_ip = 0;;) switch (_fun117223_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 14;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.isIOS;
                                var2 = var2.bind(var3)();
                                if (var2) {
                                    _fun117223_ip = 126;
                                    continue _fun117223
                                }
                            case 38:
                                var2 = _closure1_slot9;
                                var2 = var2.DCDNotificationManager;
                                var2 = var2.setShowMissedCallNotifications;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun117223_ip = 83;
                                    continue _fun117223
                                }
                            case 60:
                                var2 = _closure1_slot9;
                                var5 = var2.DCDNotificationManager;
                                var4 = var5.setShowMissedCallNotifications;
                                var2 = true;
                                var2 = var4.bind(var5)(var2);
                            case 83:
                                var2 = _closure1_slot9;
                                var2 = var2.DCDNotificationManager;
                                var2 = var2.setShowFullscreenCallUI;
                                if (!(var3 != var2)) {
                                    _fun117223_ip = 126;
                                    continue _fun117223
                                }
                            case 103:
                                var1 = _closure1_slot9;
                                var3 = var1.DCDNotificationManager;
                                var2 = var3.setShowFullscreenCallUI;
                                var1 = true;
                                var1 = var2.bind(var3)(var1);
                            case 126:
                                return var0;
                        }
                    };
                    var0.handleSetCallNotificationExperiment = var2;
                    var1 = function() { // Environment: var1
                        var1 = _closure1_slot20;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var0.updateAndClearStaleNotifications = var1;
                    var1 = {};
                    var2 = var0.handleAck;
                    var1.MESSAGE_ACK = var2;
                    var2 = var0.handleAck;
                    var1.CHANNEL_SELECT = var2;
                    var2 = var0.handlePostConnectionOpen;
                    var1.POST_CONNECTION_OPEN = var2;
                    var2 = var0.handleSetCallNotificationExperiment;
                    var1.EXPERIMENT_OVERRIDE_BUCKET = var2;
                    var2 = var0.handleSetCallNotificationExperiment;
                    var1.EXPERIMENTS_FETCH_SUCCESS = var2;
                    var2 = var0.updateAndClearStaleNotifications;
                    var1.APP_STATE_UPDATE = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
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
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/native/NativeNotificationsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 5, 27, 8619, 3938, 660, 3, 14944, 8606, 21, 478, 13029, 795, 4295, 2]);