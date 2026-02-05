// modules/reply_nudge/ReplyNudgeManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun118055: for (var _fun118055_ip = 0;;) switch (_fun118055_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun118055_ip = 46;
                    continue _fun118055
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun118055_ip = 55;
                    continue _fun118055
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun118055_ip = 345;
                    continue _fun118055
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun118055_ip = 323;
                    continue _fun118055
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun118055_ip = 283;
                    continue _fun118055
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun118055_ip = 270;
                    continue _fun118055
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
                    _fun118055_ip = 163;
                    continue _fun118055
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun118055_ip = 179;
                    continue _fun118055
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun118055_ip = 249;
                    continue _fun118055
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun118055_ip = 249;
                    continue _fun118055
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun118055_ip = 234;
                    continue _fun118055
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun118055_ip = 247;
                    continue _fun118055
                }
            case 234:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun118055_ip = 265;
                continue _fun118055;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun118055_ip = 283;
                continue _fun118055;
            case 270:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun118055_ip = 323;
                    continue _fun118055
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
                    _fun118055_ip = 330;
                    continue _fun118055
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun118056: for (var _fun118056_ip = 0;;) switch (_fun118056_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun118056_ip = 56;
                                continue _fun118056
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
                            _fun118056_ip = 67;
                            continue _fun118056;
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
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun118057: for (var _fun118057_ip = 0;;) switch (_fun118057_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun118057_ip = 23;
                    continue _fun118057
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun118057_ip = 33;
                    continue _fun118057
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
                    _fun118057_ip = 70;
                    continue _fun118057
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun118057_ip = 55;
                    continue _fun118057
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        _fun118058: for (var _fun118058_ip = 0;;) switch (_fun118058_ip) {
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
                _fun118058_ip = 76;
                continue _fun118058;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function arg0() {
        _fun118061: for (var _fun118061_ip = 0;;) switch (_fun118061_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.reactions;
                var0 = null;
                var2 = var0 == var4;
                var1 = undefined;
                if (var2) {
                    _fun118061_ip = 40;
                    continue _fun118061
                }
            case 20:
                var3 = var4.some;
                var2 = function(arg0) { // Environment: var2
                    _fun118062: for (var _fun118062_ip = 0;;) switch (_fun118062_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.me;
                            if (var0) {
                                _fun118062_ip = 18;
                                continue _fun118062
                            }
                        case 12:
                            var0 = var1.me_burst;
                        case 18:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2);
            case 40:
                var0 = var0 != var1;
                if (!var0) {
                    _fun118061_ip = 50;
                    continue _fun118061
                }
            case 47:
                var0 = var1;
            case 50:
                return var0;
        }
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.MAX_LATEST_MESSAGE_AGE_MS;
    var _closure1_slot17 = var7;
    var7 = var3.NUDGE_TIMESTAMP_OFFSET_MS;
    var _closure1_slot18 = var7;
    var3 = var3.MESSAGE_LOOKBEHIND_COUNT;
    var _closure1_slot19 = var3;
    var3 = 15;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot20 = var7;
    var3 = var3.Consents;
    var _closure1_slot21 = var3;
    var3 = 16;
    var3 = var6[var3];
    var8 = var4.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'ReplyNudgeManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot22 = var3;
    var3 = 25;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun118064: for (var _fun118064_ip = 0;;) switch (_fun118064_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot5;
                    var1 = _closure2_slot3;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun118064_ip = 86;
                        continue _fun118064
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun118064_ip = 120;
                    continue _fun118064;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var1.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var3;
                    var1 = new var13[var1](var12);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var0.pendingFetch = var1;
                    var1 = null;
                    var0.updateInterval = var1;
                    var1 = {};
                    var2 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handlePostConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1.POST_CONNECTION_OPEN = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot3 = var3;
        var1 = _closure1_slot9;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = '_terminate';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var0 = global;
            var3 = var0.clearInterval;
            var1 = var2.updateInterval;
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = null;
            var2.updateInterval = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var7 = 'handlePostConnectionOpen';
        var4.key = var7;
        var7 = function() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = global;
            var5 = var3.clearInterval;
            var4 = var2.updateInterval;
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var4 = var3.setInterval;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 20;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.Millis;
            var5 = var3.MINUTE;
            var3 = 30;
            var3 = var3 * var5;
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.updateReplyNudges;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var1 = var4.bind(var0)(var1, var3);
            var2.updateInterval = var1;
            var1 = var2.updateReplyNudges;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'updateReplyNudges';
        var4.key = var7;
        var7 = _closure1_slot4;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun118070: for (var _fun118070_ip = 0;;) switch (_fun118070_ip) {
                    case 0:
                        StartGenerator();
                        var6 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118070_ip = 409;
                            continue _fun118070
                        }
                    case 13:
                        var1 = undefined;
                        var7 = undefined;
                        var4 = undefined;
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var5 = 17;
                        var3 = var3[var5];
                        var3 = var8.bind(var1)(var3);
                        var8 = var3.EnableDmReplyNudgeReminders;
                        var3 = var8.getSetting;
                        var8 = var3.bind(var8)();
                        var3 = false;
                        var3 = var3 !== var8;
                        if (!var3) {
                            _fun118070_ip = 128;
                            continue _fun118070
                        }
                    case 67:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = var10[var5];
                        var5 = var9.bind(var1)(var5);
                        var8 = var5.MessagePreviewSetting;
                        var5 = var8.getSetting;
                        var8 = var5.bind(var8)();
                        var5 = 18;
                        var5 = var10[var5];
                        var5 = var9.bind(var1)(var5);
                        var5 = var5.MessagePreviewTypes;
                        var5 = var5.ALL;
                        var3 = var8 === var5;
                    case 128:
                        if (!var3) {
                            _fun118070_ip = 156;
                            continue _fun118070
                        }
                    case 131:
                        var9 = _closure1_slot12;
                        var8 = var9.hasConsented;
                        var5 = _closure1_slot21;
                        var5 = var5.PERSONALIZATION;
                        var3 = var8.bind(var9)(var5);
                    case 156:
                        if (!var3) {
                            _fun118070_ip = 406;
                            continue _fun118070
                        }
                    case 162:
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 21;
                        var3 = var8[var3];
                        var3 = var5.bind(var1)(var3);
                        var8 = var3.ReplyNudgeExperiment;
                        var5 = var8.getConfig;
                        var3 = {};
                        var9 = 'ReplyNudgeManager._initialize';
                        var3.location = var9;
                        var3 = var5.bind(var8)(var3);
                        var3 = var3.enabled;
                        if (!var3) {
                            _fun118070_ip = 406;
                            continue _fun118070
                        }
                    case 222:
                        var8 = _closure1_slot22;
                        var5 = var8.info;
                        var3 = 'Updating most recent DMs';
                        var3 = var5.bind(var8)(var3);
                    case 243: // try_start_0
                        var5 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 22;
                        var3 = var8[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.messages;
                        var3 = var3.bind(var5)();
                        var7 = var3;
                        var5 = null;
                        var8 = var5 == var3;
                        var3 = undefined;
                        if (var8) {
                            _fun118070_ip = 301;
                            continue _fun118070
                        }
                    case 287:
                        var8 = var7;
                        var7 = var8.getMostRecents;
                        var3 = var7.bind(var8)(var5);
                    case 301:
                        SaveGenerator(address = 305);
                    case 303:
                        return var3;
                    case 305:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun118070_ip = 380;
                            continue _fun118070
                        }
                    case 311:
                        var4 = var3;
                        if (!(var5 != var3)) {
                            _fun118070_ip = 355;
                            continue _fun118070
                        }
                    case 318:
                        var5 = var6.processMostRecentDMs;
                        var8 = var4;
                        var7 = var8.map;
                        var4 = function(arg0) { // Environment: var4
                            _fun118071: for (var _fun118071_ip = 0;;) switch (_fun118071_ip) {
                                case 0:
                                    var4 = arg0;
                                    var0 = var4[Symbol.iterator];
                                    var4 = var0().next;
                                    var1 = var4().value;
                                    var2 = var0;
                                    var6 = undefined;
                                    var3 = var2 === var6;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun118071_ip = 27;
                                        continue _fun118071
                                    }
                                case 24:
                                    var2 = var1;
                                case 27:
                                    var1 = undefined;
                                    if (var3) {
                                        _fun118071_ip = 57;
                                        continue _fun118071
                                    }
                                case 32:
                                    var5 = var4().value;
                                    var4 = var0;
                                    var4 = var4 === var6;
                                    var1 = undefined;
                                    var3 = var4;
                                    if (var4) {
                                        _fun118071_ip = 57;
                                        continue _fun118071
                                    }
                                case 51:
                                    var1 = var5;
                                    var3 = var4;
                                case 57:
                                    if (var3) {
                                        _fun118071_ip = 63;
                                        continue _fun118071
                                    }
                                case 60:
                                    var0.return();
                                case 63:
                                    var0 = new Array(2);
                                    var0[0] = var2;
                                    var1 = var1.message;
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var4 = var7.bind(var8)(var4);
                        var4 = var5.bind(var6)(var4);
                    case 353: // try_end0
                        _fun118070_ip = 406;
                        continue _fun118070;
                    case 355: // try_start_1
                        var6 = _closure1_slot22;
                        var5 = var6.warn;
                        var4 = 'No recent DMs loaded from local database';
                        var4 = var5.bind(var6)(var4);
                    case 375: // try_end1
                        var4 = undefined;
                        return var4;
                    case 380:
                        return var3;
                    case 383: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 5);
                        var4 = _closure1_slot22;
                        var3 = var4.error;
                        var2 = 'Error updating most recent DMs';
                        var2 = var3.bind(var4)(var2, var5);
                    case 406:
                        return var1;
                    case 409:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot2 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'nudgeChannel';
        var4.key = var6;
        var6 = function*(arg0, arg1, arg2, arg3) { // Environment: var5
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun118074: for (var _fun118074_ip = 0;;) switch (_fun118074_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun118074_ip = 137;
                            continue _fun118074
                        }
                    case 13:
                        var5 = _closure1_slot16;
                        var4 = var5.isChannelNudged;
                        var2 = {};
                        var6 = true;
                        var2.includeInvisible = var6;
                        var4 = var4.bind(var5)(var3, var2);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 23;
                        var5 = var5[var2];
                        var2 = undefined;
                        var9 = var6.bind(var2)(var5);
                        var8 = var9.setReplyNudge;
                        var5 = global;
                        var6 = var5.Date;
                        var5 = var6.now;
                        var5 = var5.bind(var6)();
                        var1 = _closure1_slot18;
                        var13 = var5 + var1;
                        var12 = arg1;
                        var11 = arg2;
                        var10 = arg3;
                        var15 = var9;
                        var14 = var3;
                        var1 = var15[var8](var14, var13, var12, var11, var10, var9);
                        SaveGenerator(address = 117);
                    case 115:
                        return var1;
                    case 117:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun118074_ip = 134;
                            continue _fun118074
                        }
                    case 123:
                        var2 = undefined;
                        if (var4) {
                            _fun118074_ip = 131;
                            continue _fun118074
                        }
                    case 128:
                        var2 = var3;
                    case 131:
                        return var2;
                    case 134:
                        return var1;
                    case 137:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'fetchLookbehindMessages';
        var4.key = var6;
        var6 = function*(arg0, arg1, arg2) { // Environment: var5
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun118077: for (var _fun118077_ip = 0;;) switch (_fun118077_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun118077_ip = 864;
                            continue _fun118077
                        }
                    case 18:
                        var2 = var1;
                        var _closure4_slot0 = var1;
                        var5 = arg1;
                        var6 = arg2;
                        var1 = undefined;
                        var _closure4_slot1 = var1;
                        var10 = undefined;
                        var12 = undefined;
                        var7 = undefined;
                    case 43: // try_start_0 // try_start_2
                        var11 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var4 = 22;
                        var4 = var13[var4];
                        var11 = var11.bind(var1)(var4);
                        var4 = var11.messages;
                        var4 = var4.bind(var11)();
                        _closure4_slot1 = var4;
                        var11 = null;
                        if (!(var11 != var4)) {
                            _fun118077_ip = 759;
                            continue _fun118077
                        }
                    case 89:
                        var15 = _closure1_slot22;
                        var14 = var15.timeAsync;
                        var4 = var2;
                        var16 = var4.channel_id;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var13 = var4.concat;
                        var4 = 'fetching lookbehind messages for ';
                        var13 = var13.bind(var4)(var16);
                        var4 = function() { // Environment: var8
                            var4 = _closure4_slot1;
                            var3 = var4.getLatest;
                            var0 = _closure4_slot0;
                            var2 = var0.channel_id;
                            var1 = _closure1_slot19;
                            var0 = null;
                            var0 = var3.bind(var4)(var0, var2, var1);
                            return var0;
                        };
                        var4 = var14.bind(var15)(var13, var4);
                        SaveGenerator(address = 148);
                    case 146:
                        return var4;
                    case 148:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 13);
                        if (var13) {
                            _fun118077_ip = 732;
                            continue _fun118077
                        }
                    case 157:
                        var14 = var2;
                        var7 = var14.id;
                        var13 = var4.map;
                        var8 = function(arg0) { // Environment: var8
                            var0 = arg0;
                            var0 = var0.message;
                            return var0;
                        };
                        var13 = var13.bind(var4)(var8);
                        var25 = var5;
                        var8 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var18 = 19;
                        var5 = var5[var18];
                        var15 = var8.bind(var1)(var5);
                        var8 = var15.extractTimestamp;
                        var5 = var14.id;
                        var24 = var8.bind(var15)(var5);
                        var5 = var13.length;
                        var8 = 0;
                        var5 = var8 < var5;
                        var19 = 1;
                        var21 = 0;
                        var20 = undefined;
                        var17 = undefined;
                        var16 = undefined;
                        if (!var5) {
                            _fun118077_ip = 451;
                            continue _fun118077
                        }
                    case 249:
                        var29 = var13[var21];
                        var15 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var18];
                        var27 = var15.bind(var1)(var5);
                        var26 = var27.compare;
                        var15 = var29.id;
                        var5 = var14.id;
                        var5 = var26.bind(var27)(var15, var5);
                        if (!(!(var5 >= var8))) {
                            _fun118077_ip = 436;
                            continue _fun118077
                        }
                    case 299:
                        var15 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var18];
                        var26 = var15.bind(var1)(var5);
                        var15 = var26.extractTimestamp;
                        var5 = var29.id;
                        var15 = var15.bind(var26)(var5);
                        var5 = var24 - var25;
                        var15 = var15 < var5;
                        var5 = true;
                        if (var15) {
                            _fun118077_ip = 620;
                            continue _fun118077
                        }
                    case 348:
                        var28 = var29.author;
                        var27 = null;
                        if (!(var21 > var8)) {
                            _fun118077_ip = 368;
                            continue _fun118077
                        }
                    case 360:
                        var15 = var21 - var19;
                        var27 = var13[var15];
                    case 368:
                        var15 = var11 == var27;
                        var26 = undefined;
                        if (var15) {
                            _fun118077_ip = 383;
                            continue _fun118077
                        }
                    case 377:
                        var26 = var27.author;
                    case 383:
                        if (!(var11 != var28)) {
                            _fun118077_ip = 410;
                            continue _fun118077
                        }
                    case 387:
                        if (!(var11 != var26)) {
                            _fun118077_ip = 410;
                            continue _fun118077
                        }
                    case 391:
                        var30 = var28.id;
                        var15 = var26.id;
                        var5 = false;
                        if (!(var30 === var15)) {
                            _fun118077_ip = 620;
                            continue _fun118077
                        }
                    case 410:
                        var15 = _closure1_slot26;
                        var15 = var15.bind(var1)(var29);
                        var20 = var28;
                        var17 = var27;
                        var16 = var26;
                        var5 = false;
                        if (var15) {
                            _fun118077_ip = 620;
                            continue _fun118077
                        }
                    case 436:
                        var21 = var21 + 1;
                        var15 = var13.length;
                        if (var21 < var15) {
                            _fun118077_ip = 249;
                            continue _fun118077
                        }
                    case 451:
                        var16 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var15 = var15[var18];
                        var16 = var16.bind(var1)(var15);
                        var15 = var16.age;
                        var14 = var14.channel_id;
                        var15 = var15.bind(var16)(var14);
                        var14 = var13.length;
                        var16 = var14 > var8;
                        var14 = 0;
                        if (!var16) {
                            _fun118077_ip = 544;
                            continue _fun118077
                        }
                    case 498:
                        var17 = _closure1_slot1;
                        var16 = _closure1_slot2;
                        var16 = var16[var18];
                        var18 = var17.bind(var1)(var16);
                        var17 = var18.age;
                        var16 = var13.length;
                        var16 = var16 - var19;
                        var16 = var13[var16];
                        var16 = var16.id;
                        var14 = var17.bind(var18)(var16);
                    case 544:
                        var8 = var14 > var8;
                        if (!var8) {
                            _fun118077_ip = 598;
                            continue _fun118077
                        }
                    case 551:
                        var15 = var15 - var14;
                        var16 = _closure1_slot1;
                        var17 = _closure1_slot2;
                        var14 = 20;
                        var14 = var17[var14];
                        var14 = var16.bind(var1)(var14);
                        var14 = var14.Millis;
                        var16 = var14.MINUTE;
                        var14 = 5;
                        var14 = var14 * var16;
                        var8 = var15 < var14;
                    case 598:
                        var13 = var13.length;
                        var9 = _closure1_slot19;
                        var9 = var13 < var9;
                        if (!var8) {
                            _fun118077_ip = 617;
                            continue _fun118077
                        }
                    case 614:
                        var8 = var9;
                    case 617:
                        var5 = var8;
                    case 620:
                        if (var5) {
                            _fun118077_ip = 628;
                            continue _fun118077
                        }
                    case 623: // try_end0
                        _fun118077_ip = 812;
                        continue _fun118077;
                    case 628: // try_start_1
                        var9 = var3.nudgeChannel;
                        var5 = var2;
                        var8 = var5.channel_id;
                        var5 = var5.author;
                        var12 = var5;
                        var13 = var11 == var5;
                        var5 = undefined;
                        if (var13) {
                            _fun118077_ip = 667;
                            continue _fun118077
                        }
                    case 662:
                        var5 = var12.id;
                    case 667:
                        var10 = var5;
                        var11 = var11 != var5;
                        var5 = '0';
                        if (!var11) {
                            _fun118077_ip = 686;
                            continue _fun118077
                        }
                    case 683:
                        var5 = var10;
                    case 686:
                        var35 = var3;
                        var34 = var8;
                        var33 = var7;
                        var32 = var6;
                        var31 = var5;
                        var5 = var35[var9](var34, var33, var32, var31, var30);
                    case 705: // try_end1 // try_end2
                        var8 = var3.pendingFetch;
                        var7 = var8.delete;
                        var6 = var2;
                        var6 = var6.channel_id;
                        var6 = var7.bind(var8)(var6);
                        return var5;
                    case 732:
                        var7 = var3.pendingFetch;
                        var6 = var7.delete;
                        var5 = var2;
                        var5 = var5.channel_id;
                        var5 = var6.bind(var7)(var5);
                        return var4;
                    case 759:
                        var6 = var3.pendingFetch;
                        var5 = var6.delete;
                        var4 = var2;
                        var4 = var4.channel_id;
                        var4 = var5.bind(var6)(var4);
                        return var1;
                    case 786: // try_start_3 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot22;
                        var5 = var6.error;
                        var4 = 'Error fetching lookbehind messages';
                        var4 = var5.bind(var6)(var4, var7);
                    case 812: // try_end3
                        var6 = var3.pendingFetch;
                        var5 = var6.delete;
                        var4 = var2;
                        var4 = var4.channel_id;
                        var4 = var5.bind(var6)(var4);
                        return var1;
                    case 839: // catch_target2 // catch_target3
                        CatchBlockStart(arg_register = 1);
                        var4 = var3.pendingFetch;
                        var3 = var4.delete;
                        var2 = var2.channel_id;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 864:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'processMostRecentDMs';
        var4.key = var6;
        var6 = function arg0() {
            _fun118081: for (var _fun118081_ip = 0;;) switch (_fun118081_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 21;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.ReplyNudgeExperiment;
                    var3 = var4.getConfig;
                    var2 = {};
                    var5 = 'handleMessagePreviewsLocallyLoaded';
                    var2.location = var5;
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.minUserDMAffinity;
                    var _closure3_slot2 = var3;
                    var3 = var2.minSinceReceiverMessageMs;
                    var _closure3_slot3 = var3;
                    var2 = var2.minLatestMessageAgeMs;
                    var _closure3_slot4 = var2;
                    var2 = global;
                    var4 = var2.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var _closure3_slot5 = var3;
                    var4 = _closure1_slot11;
                    var3 = var4.getId;
                    var3 = var3.bind(var4)();
                    var _closure3_slot6 = var3;
                    var4 = new Array(0);
                    var _closure3_slot7 = var4;
                    var10 = function arg0() {
                        _fun118082: for (var _fun118082_ip = 0;;) switch (_fun118082_ip) {
                            case 0:
                                var3 = arg0;
                                var _closure4_slot0 = var3;
                                var5 = _closure1_slot13;
                                var4 = var5.lastMessageId;
                                var0 = _closure3_slot8;
                                var4 = var4.bind(var5)(var0);
                                var0 = var3.id;
                                if (!(var4 === var0)) {
                                    _fun118082_ip = 546;
                                    continue _fun118082
                                }
                            case 46:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 19;
                                var8 = var7[var4];
                                var0 = undefined;
                                var10 = var5.bind(var0)(var8);
                                var9 = var10.extractTimestamp;
                                var8 = var3.id;
                                var11 = var9.bind(var10)(var8);
                                var4 = var7[var4];
                                var8 = var5.bind(var0)(var4);
                                var7 = var8.extractTimestamp;
                                var9 = _closure1_slot13;
                                var5 = var9.ackMessageId;
                                var4 = _closure3_slot8;
                                var9 = var5.bind(var9)(var4);
                                var5 = null;
                                var10 = var5 != var9;
                                var4 = '0';
                                if (!var10) {
                                    _fun118082_ip = 136;
                                    continue _fun118082
                                }
                            case 133:
                                var4 = var9;
                            case 136:
                                var10 = var7.bind(var8)(var4);
                                var8 = _closure3_slot5;
                                var4 = global;
                                var9 = var4.Math;
                                var7 = var9.max;
                                var7 = var7.bind(var9)(var11, var10);
                                var9 = var8 - var7;
                                var8 = var5 == var3;
                                var7 = undefined;
                                if (var8) {
                                    _fun118082_ip = 197;
                                    continue _fun118082
                                }
                            case 177:
                                var8 = var3.author;
                                var10 = var5 == var8;
                                var7 = undefined;
                                if (var10) {
                                    _fun118082_ip = 197;
                                    continue _fun118082
                                }
                            case 192:
                                var7 = var8.id;
                            case 197:
                                var7 = var5 != var7;
                                if (!var7) {
                                    _fun118082_ip = 262;
                                    continue _fun118082
                                }
                            case 204:
                                var11 = _closure1_slot14;
                                var10 = var11.isBlocked;
                                var8 = var3.author;
                                var8 = var8.id;
                                var8 = var10.bind(var11)(var8);
                                if (var8) {
                                    _fun118082_ip = 259;
                                    continue _fun118082
                                }
                            case 233:
                                var12 = _closure1_slot14;
                                var11 = var12.isIgnored;
                                var10 = var3.author;
                                var10 = var10.id;
                                var8 = var11.bind(var12)(var10);
                            case 259:
                                var7 = var8;
                            case 262:
                                var8 = _closure3_slot4;
                                if (!(!(var9 < var8))) {
                                    _fun118082_ip = 542;
                                    continue _fun118082
                                }
                            case 273:
                                var8 = _closure1_slot17;
                                if (!(!(var9 > var8))) {
                                    _fun118082_ip = 542;
                                    continue _fun118082
                                }
                            case 284:
                                var8 = var3.author;
                                if (!(var5 != var8)) {
                                    _fun118082_ip = 542;
                                    continue _fun118082
                                }
                            case 297:
                                var8 = var3.author;
                                var9 = var8.id;
                                var8 = _closure3_slot6;
                                if (!(var9 !== var8)) {
                                    _fun118082_ip = 542;
                                    continue _fun118082
                                }
                            case 319:
                                var8 = _closure1_slot26;
                                var8 = var8.bind(var0)(var3);
                                if (var8) {
                                    _fun118082_ip = 542;
                                    continue _fun118082
                                }
                            case 334:
                                var8 = var3.author;
                                if (!(var5 != var8)) {
                                    _fun118082_ip = 356;
                                    continue _fun118082
                                }
                            case 344:
                                var8 = var8.bot;
                                if (var8) {
                                    _fun118082_ip = 542;
                                    continue _fun118082
                                }
                            case 356:
                                if (var7) {
                                    _fun118082_ip = 542;
                                    continue _fun118082
                                }
                            case 362:
                                var8 = _closure1_slot10;
                                var7 = var8.getUserAffinity;
                                var6 = var3.author;
                                var6 = var6.id;
                                var6 = var7.bind(var8)(var6);
                                var7 = var5 == var6;
                                var0 = undefined;
                                if (var7) {
                                    _fun118082_ip = 403;
                                    continue _fun118082
                                }
                            case 397:
                                var0 = var6.dmProbability;
                            case 403:
                                var6 = var5 != var0;
                                var5 = -1;
                                if (!var6) {
                                    _fun118082_ip = 419;
                                    continue _fun118082
                                }
                            case 416:
                                var5 = var0;
                            case 419:
                                var _closure4_slot1 = var5;
                                var0 = _closure3_slot2;
                                var5 = var5 < var0;
                                var0 = 0;
                                if (var5) {
                                    _fun118082_ip = 540;
                                    continue _fun118082
                                }
                            case 436:
                                var5 = _closure3_slot1;
                                var8 = var5.pendingFetch;
                                var7 = var8.has;
                                var5 = var3.channel_id;
                                var5 = var7.bind(var8)(var5);
                                var0 = 0;
                                if (var5) {
                                    _fun118082_ip = 540;
                                    continue _fun118082
                                }
                            case 466:
                                var5 = _closure3_slot1;
                                var6 = var5.pendingFetch;
                                var5 = var6.add;
                                var3 = var3.channel_id;
                                var3 = var5.bind(var6)(var3);
                                var3 = _closure3_slot7;
                                var2 = var3.push;
                                var5 = var4.Promise;
                                var4 = var5.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var14 = function(arg0, arg1) { // Environment: var1
                                    var0 = arg0;
                                    var _closure5_slot0 = var0;
                                    var0 = arg1;
                                    var _closure5_slot1 = var0;
                                    var0 = global;
                                    var2 = var0.requestIdleCallback;
                                    var0 = undefined;
                                    var1 = function() { // Environment: var1
                                        var4 = _closure3_slot1;
                                        var3 = var4.fetchLookbehindMessages;
                                        var2 = _closure4_slot0;
                                        var1 = _closure3_slot3;
                                        var0 = _closure4_slot1;
                                        var3 = var3.bind(var4)(var2, var1, var0);
                                        var2 = var3.then;
                                        var1 = _closure5_slot0;
                                        var0 = _closure5_slot1;
                                        var0 = var2.bind(var3)(var1, var0);
                                        var0 = undefined;
                                        return var0;
                                    };
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var15 = var4;
                                var1 = new var15[var5](var14, var13);
                                var1 = var1 instanceof Object ? var1 : var4;
                                var1 = var2.bind(var3)(var1);
                                var0 = undefined;
                            case 540:
                                return var0;
                            case 542:
                                var0 = 0;
                                return var0;
                            case 546:
                                var0 = 0;
                                return var0;
                        }
                    };
                    var5 = _closure1_slot23;
                    var3 = arg0;
                    var9 = var5.bind(var0)(var3);
                    var5 = var9.bind(var0)();
                    var3 = var5.done;
                    var8 = 2;
                    var7 = 0;
                    var6 = 1;
                    if (var3) {
                        _fun118081_ip = 230;
                        continue _fun118081
                    }
                case 183:
                    var12 = var5.value;
                    var3 = _closure1_slot3;
                    var3 = var3.bind(var0)(var12, var8);
                    var12 = var3[var7];
                    var _closure3_slot8 = var12;
                    var3 = var3[var6];
                    var3 = var10.bind(var0)(var3);
                    var12 = var9.bind(var0)();
                    var3 = var12.done;
                    var5 = var12;
                    if (!var3) {
                        _fun118081_ip = 183;
                        continue _fun118081
                    }
                case 230:
                    var3 = var2.Promise;
                    var2 = var3.allSettled;
                    var3 = var2.bind(var3)(var4);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun118085: for (var _fun118085_ip = 0;;) switch (_fun118085_ip) {
                            case 0:
                                var3 = new Array(0);
                                var4 = _closure1_slot23;
                                var0 = undefined;
                                var2 = arg0;
                                var9 = var4.bind(var0)(var2);
                                var4 = var9.bind(var0)();
                                var2 = var4.done;
                                var8 = true;
                                var7 = null;
                                var6 = 'fulfilled';
                                var5 = var4;
                                var4 = undefined;
                                if (var2) {
                                    _fun118085_ip = 131;
                                    continue _fun118085
                                }
                            case 48:
                                var2 = var5.value;
                                var10 = var2.status;
                                if (!(var6 === var10)) {
                                    _fun118085_ip = 116;
                                    continue _fun118085
                                }
                            case 62:
                                var2 = var2.value;
                                var10 = var7 != var2;
                                if (!var10) {
                                    _fun118085_ip = 97;
                                    continue _fun118085
                                }
                            case 74:
                                var13 = _closure1_slot16;
                                var12 = var13.isChannelNudged;
                                var11 = {};
                                var11.includeInvisible = var8;
                                var10 = var12.bind(var13)(var2, var11);
                            case 97:
                                var4 = var2;
                                if (!var10) {
                                    _fun118085_ip = 116;
                                    continue _fun118085
                                }
                            case 103:
                                var10 = var3.push;
                                var10 = var10.bind(var3)(var2);
                                var4 = var2;
                            case 116:
                                var10 = var9.bind(var0)();
                                var2 = var10.done;
                                var5 = var10;
                                if (!var2) {
                                    _fun118085_ip = 48;
                                    continue _fun118085
                                }
                            case 131:
                                var2 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 23;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.setNudgesInitialized;
                                var1 = var1.bind(var2)();
                                var2 = _closure3_slot0;
                                var1 = var2.trackNudgesCreated;
                                var1 = var1.bind(var2)(var3);
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'trackNudgesCreated';
        var4.key = var6;
        var5 = function arg0() {
            _fun118086: for (var _fun118086_ip = 0;;) switch (_fun118086_ip) {
                case 0:
                    var9 = arg0;
                    var2 = var9.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun118086_ip = 217;
                        continue _fun118086
                    }
                case 19:
                    var3 = _closure1_slot15;
                    var2 = var3.getPrivateChannelIds;
                    var2 = var2.bind(var3)();
                    var _closure3_slot0 = var2;
                    var3 = var9.map;
                    var2 = function(arg0) { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.indexOf;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var8 = var3.bind(var9)(var2);
                    var3 = var9.map;
                    var2 = function(arg0) { // Environment: var1
                        var3 = _closure1_slot16;
                        var2 = var3.getChannelNudge;
                        var1 = {};
                        var0 = true;
                        var1.includeInvisible = var0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var3 = var3.bind(var9)(var2);
                    var4 = var3.map;
                    var2 = function(arg0) { // Environment: var1
                        _fun118089: for (var _fun118089_ip = 0;;) switch (_fun118089_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                var3 = var0 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun118089_ip = 20;
                                    continue _fun118089
                                }
                            case 14:
                                var1 = var2.affinity;
                            case 20:
                                var2 = var0 != var1;
                                var0 = -2;
                                if (!var2) {
                                    _fun118089_ip = 36;
                                    continue _fun118089
                                }
                            case 33:
                                var0 = var1;
                            case 36:
                                return var0;
                        }
                    };
                    var7 = var4.bind(var3)(var2);
                    var4 = var3.map;
                    var2 = function(arg0) { // Environment: var1
                        _fun118090: for (var _fun118090_ip = 0;;) switch (_fun118090_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = null;
                                var3 = var2 == var1;
                                var0 = undefined;
                                if (var3) {
                                    _fun118090_ip = 20;
                                    continue _fun118090
                                }
                            case 14:
                                var0 = var1.authorId;
                            case 20:
                                var0 = var2 != var0;
                                if (!var0) {
                                    _fun118090_ip = 51;
                                    continue _fun118090
                                }
                            case 27:
                                var3 = _closure1_slot14;
                                var2 = var3.isFriend;
                                var1 = var1.authorId;
                                var0 = var2.bind(var3)(var1);
                            case 51:
                                return var0;
                        }
                    };
                    var6 = var4.bind(var3)(var2);
                    var4 = var3.map;
                    var2 = function(arg0) { // Environment: var1
                        _fun118091: for (var _fun118091_ip = 0;;) switch (_fun118091_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                var3 = var0 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun118091_ip = 20;
                                    continue _fun118091
                                }
                            case 14:
                                var1 = var2.authorId;
                            case 20:
                                var2 = var0 != var1;
                                var0 = '0';
                                if (!var2) {
                                    _fun118091_ip = 36;
                                    continue _fun118091
                                }
                            case 33:
                                var0 = var1;
                            case 36:
                                return var0;
                        }
                    };
                    var5 = var4.bind(var3)(var2);
                    var2 = var3.map;
                    var1 = function(arg0) { // Environment: var1
                        _fun118092: for (var _fun118092_ip = 0;;) switch (_fun118092_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = null;
                                var3 = var0 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun118092_ip = 20;
                                    continue _fun118092
                                }
                            case 14:
                                var1 = var2.lastMessageId;
                            case 20:
                                var2 = var0 != var1;
                                var0 = '0';
                                if (!var2) {
                                    _fun118092_ip = 36;
                                    continue _fun118092
                                }
                            case 33:
                                var0 = var1;
                            case 36:
                                return var0;
                        }
                    };
                    var4 = var2.bind(var3)(var1);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 24;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.track;
                    var0 = _closure1_slot20;
                    var1 = var0.REPLY_NUDGES_CREATED;
                    var0 = {};
                    var0.channel_ids = var9;
                    var0.channel_dm_list_indexes = var8;
                    var0.nudge_author_affinities = var7;
                    var0.nudge_author_is_friend = var6;
                    var0.nudge_author_ids = var5;
                    var0.nudge_message_ids = var4;
                    var0 = var2.bind(var3)(var1, var0);
                case 217:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var4;
    var3 = new var12[var1](var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reply_nudge/ReplyNudgeManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.ReplyNudgeManager = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 15, 17, 18, 6793, 1216, 4559, 3947, 3100, 8353, 8354, 8355, 660, 3, 1348, 8823, 21, 667, 8356, 1646, 9183, 795, 4299, 2]);